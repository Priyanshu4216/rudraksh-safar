import { liteApiClient } from '../v3/client.ts';
import { HotelMapper, PublicHotelDto, LiteApiHotelRaw } from '../dto/mapper.ts';
import { generateFingerprint } from '../../../cache/fingerprint.ts';
import { createClient } from 'jsr:@supabase/supabase-js@2';

export class HotelSearchService {
  private static supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  );

  static async search(params: Record<string, string>): Promise<PublicHotelDto[]> {
    const hashKey = await generateFingerprint(params);
    
    // 1. Search Deduplication & Cache Check
    const { data: cached } = await this.supabase
      .from('hotel_search_cache')
      .select('response_data, expires_at')
      .eq('hash_key', hashKey)
      .single();

    if (cached) {
      if (new Date(cached.expires_at) > new Date()) {
        console.log(`[CACHE HIT] Returning cached search for hash: ${hashKey}`);
        return cached.response_data as PublicHotelDto[];
      }
    }

    const queryParams: any = { countryCode: params.countryCode, cityName: params.cityName };
    if (params.hotel_type_ids) {
      queryParams.hotelTypeIds = params.hotel_type_ids; // Support both naming conventions
      queryParams.hotel_type_ids = params.hotel_type_ids;
    }
    if (params.chainId) {
      queryParams.chainIds = params.chainId;
      queryParams.chainId = params.chainId;
    }

    // 2. Fetch from Supplier (LiteAPI)
    const rawResponse = await liteApiClient.request<{ data: LiteApiHotelRaw[] }>('/data/hotels', {
      method: 'GET',
      query: queryParams
    });

    const hotels = rawResponse.data || [];

    // 3. Fetch Live Rates (Secondary Query)
    try {
      const hotelIds = hotels.map(h => h.id || h.hotelId).filter(Boolean).slice(0, 100);
      
      if (hotelIds.length > 0) {
        const chkIn = params.chkIn || new Date(Date.now() + 86400000 * 7).toISOString().split('T')[0];
        const chkOut = params.chkOut || new Date(Date.now() + 86400000 * 10).toISOString().split('T')[0];

        
        const ratesResponse = await liteApiClient.request<any>('/hotels/min-rates', {
          method: 'POST',
          body: {
            hotelIds: hotelIds,
            occupancies: [{ adults: 2 }],
            currency: 'USD',
            guestNationality: 'US',
            checkin: chkIn,
            checkout: chkOut,
            timeout: 10
          }
        });
        
        if (ratesResponse?.data && Array.isArray(ratesResponse.data)) {
          const rateMap = new Map();
          ratesResponse.data.forEach((r: any) => {
             const minPrice = r.price;
             const currency = params.currency || 'USD';
             if (minPrice) {
               rateMap.set(r.hotelId, { minPrice, currency });
             }
          });
          
          hotels.forEach(h => {
             const id = h.id || h.hotelId;
             if (rateMap.has(id)) {
               const rateInfo = rateMap.get(id);
               h.minPrice = rateInfo.minPrice;
               h.currency = rateInfo.currency;
             }
          });
        }
      }
    } catch (e) {
      console.log("[search] Failed to fetch live rates, falling back to static data", e);
    }

    // 4. Map to Public DTO
    const publicData = HotelMapper.toPublicDtoList(hotels);

    // 4. Update Cache (TTL 15 minutes)
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 15);

    await this.supabase.from('hotel_search_cache').upsert({
      hash_key: hashKey,
      request_payload: params,
      response_data: publicData,
      expires_at: expiresAt.toISOString()
    });

    return publicData;
  }
}
