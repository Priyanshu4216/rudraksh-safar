/**
 * Centralized LiteAPI v3.0 configuration for all Supabase Edge Functions.
 * Ensures every function uses the exact same API key resolution order and base URL.
 */
export const LITEAPI_BASE_URL = 'https://api.liteapi.travel/v3.0';

export const LITEAPI_KEY: string =
  Deno.env.get('LITEAPI_KEY') ||
  Deno.env.get('NUITEE_API_KEY') ||
  Deno.env.get('NUITEE_APT_KEY') ||
  'sand_a444fa36-0243-49d6-83db-efd40870adcb';

export function getLiteApiHeaders(extra: Record<string, string> = {}): Record<string, string> {
  return {
    'Content-Type': 'application/json',
    'X-API-Key': LITEAPI_KEY,
    ...extra,
  };
}
