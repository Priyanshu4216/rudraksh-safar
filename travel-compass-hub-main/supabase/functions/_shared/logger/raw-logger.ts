import { createClient } from 'jsr:@supabase/supabase-js@2';

export class RawLogger {
  private static supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  );

  /**
   * Logs raw requests and responses to Supabase, replacing paid Advanced Logs.
   */
  static async log(endpoint: string, requestPayload: any, responsePayload: any, statusCode: number, bookingId?: string) {
    try {
      await this.supabase.from('liteapi_raw_logs').insert({
        endpoint,
        request_payload: requestPayload,
        response_payload: responsePayload,
        status_code: statusCode,
        booking_id: bookingId
      });
    } catch (e) {
      console.error('[RawLogger] Failed to write to raw logs:', e);
      // Fail silently to avoid interrupting the user flow, as logging is non-critical for the user
    }
  }
}
