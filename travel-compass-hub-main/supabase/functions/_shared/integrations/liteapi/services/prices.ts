import { liteApiClient } from '../v3/client.ts';
import { createClient } from 'jsr:@supabase/supabase-js@2';

export class HotelPricesService {
  private static supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  );

  static async getPriceIndex(hotelIds: string, fromDate?: string, toDate?: string) {
    const cacheKey = `price_index_${hotelIds}_${fromDate || 'default'}_${toDate || 'default'}`;
    
    // Check 24-hour cache first due to 10 req/min rate limit
    const { data: cached } = await this.supabase
      .from('static_cache')
      .select('data, updated_at')
      .eq('key', cacheKey)
      .single();

    if (cached) {
      const cacheAgeMs = new Date().getTime() - new Date(cached.updated_at).getTime();
      if (cacheAgeMs < 24 * 60 * 60 * 1000) {
        return cached.data;
      }
    }

    const queryParams: any = { hotelIds };
    if (fromDate) queryParams.fromDate = fromDate;
    if (toDate) queryParams.toDate = toDate;

    try {
      const rawResponse = await liteApiClient.request<any>('/prices/hotels', {
        method: 'GET',
        query: queryParams
      });

      // Update cache
      await this.supabase.from('static_cache').upsert({
        key: cacheKey,
        data: rawResponse
      });

      return rawResponse;
    } catch (e: any) {
      if (cached) return cached.data; // Return stale cache if rate limited
      throw e;
    }
  }
}
