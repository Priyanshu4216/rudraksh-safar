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
    const payload = {
      hotelIds: [hotelId],
      occupancies: params.occupancies || [{ adults: parseInt(params.guestInfo || '2') }],
      currency: params.currency || 'INR',
      guestNationality: params.guestNationality || 'IN',
      checkin: params.checkin || params.chkIn,
      checkout: params.checkout || params.chkOut,
      roomMapping: true
    };
    
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
