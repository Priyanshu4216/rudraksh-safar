import { liteApiClient } from '../v3/client.ts';
import { createClient } from 'jsr:@supabase/supabase-js@2';

export class HotelChainsService {
  private static supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  );

  static async getHotelChains() {
    // Basic cache (24 hours) since chains rarely change
    const { data: cached } = await this.supabase
      .from('static_cache')
      .select('data')
      .eq('key', 'hotel_chains')
      .single();

    if (cached) return cached.data;

    const rawResponse = await liteApiClient.request<any>('/data/chains', {
      method: 'GET'
    });

    await this.supabase.from('static_cache').upsert({
      key: 'hotel_chains',
      data: rawResponse
    });

    return rawResponse;
  }
}
