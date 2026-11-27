import { liteApiClient } from '../v3/client.ts';
import { generateFingerprint } from '../../../cache/fingerprint.ts';
import { createClient } from 'jsr:@supabase/supabase-js@2';

export class HotelRatesService {
  private static supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  );

  /**
   * Retrieves rates for a specific hotel.
   * Enforces STRICT maximum cache TTL of 2-5 minutes.
   */
  static async getRates(hotelId: string, params: Record<string, string>): Promise<any> {
    const hashKey = await generateFingerprint({ hotelId, ...params });

    // 1. Cache Check
    const { data: cached } = await this.supabase
      .from('hotel_rates')
      .select('rates, expires_at')
      .eq('hash_key', hashKey)
      .single();

    if (cached && new Date(cached.expires_at) > new Date()) {
       return cached.rates;
    }

    // 2. Fetch from Supplier (LiteAPI)
    let parsedOccupancies: Array<{ adults: number; children?: number[] }> = [
      { adults: Math.max(1, parseInt(params.guestInfo || params.adults || '2', 10)) }
    ];
    if (params.occupancies) {
      try {
        const occ = typeof params.occupancies === 'string'
          ? JSON.parse(params.occupancies)
          : params.occupancies;
        if (Array.isArray(occ) && occ.length > 0) {
          parsedOccupancies = occ;
        }
      } catch {
        // fallback to default parsedOccupancies
      }
    } else if (params.childrenAges) {
      try {
        const ages = typeof params.childrenAges === 'string'
          ? JSON.parse(params.childrenAges)
          : params.childrenAges;
        if (Array.isArray(ages) && ages.length > 0) {
          parsedOccupancies[0].children = ages;
        }
      } catch {}
    }

    const payload: Record<string, any> = {
      hotelIds: [hotelId],
      occupancies: parsedOccupancies,
      currency: params.currency || 'INR',
      guestNationality: params.guestNationality || 'IN',
      checkin: params.checkin || params.chkIn,
      checkout: params.checkout || params.chkOut,
      roomMapping: params.roomMapping === true || params.roomMapping === 'true' ? true : false,
      // For detail page: return up to 20 room types (search uses maxRatesPerHotel:1 for speed)
      maxRatesPerHotel: params.maxRatesPerHotel ? parseInt(String(params.maxRatesPerHotel), 10) : 20,
      timeout: 15,
    };
    if (params.sessionId) payload.sessionId = params.sessionId;
    
    let rawResponse;
    try {
      rawResponse = await liteApiClient.request<any>('/hotels/rates', {
        method: 'POST',
        body: JSON.stringify(payload)  // MUST be serialized
      });
    } catch (e: any) {
      console.error("[hotel-rates] Error fetching from LiteAPI:", e.message, e.data);
      rawResponse = { error_caught: e.message, data_caught: e.data };
    }
    
    // Return debug info if it's null or error
    if (!rawResponse || rawResponse.error_caught) {
      return { debug: true, payload, rawResponse, endpoint: '/rates' };
    }

    // V3 response: { data: [ { hotelId, roomTypes: [...] } ] }
    const responseData = rawResponse?.data || rawResponse;
    const hotelEntry = Array.isArray(responseData) ? responseData[0] : responseData;
    const normalizedResponse = {
      hotelId: hotelEntry?.hotelId || hotelId,
      roomTypes: hotelEntry?.roomTypes || [],
    };

    // 3. Short-Lived Cache (Strictly 2 Minutes) — only cache if we got roomTypes
    if (normalizedResponse.roomTypes && normalizedResponse.roomTypes.length > 0) {
      const expiresAt = new Date();
      expiresAt.setMinutes(expiresAt.getMinutes() + 2);

      await this.supabase.from('hotel_rates').upsert({
        hash_key: hashKey,
        hotel_id: hotelId,
        rates: normalizedResponse,
        expires_at: expiresAt.toISOString()
      });
    }

    return normalizedResponse;
  }
}
