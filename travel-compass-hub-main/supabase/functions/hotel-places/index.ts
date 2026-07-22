import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";

const LITEAPI_KEY =
  Deno.env.get('NUITEE_API_KEY') ||
  Deno.env.get('NUITEE_APT_KEY') ||
  Deno.env.get('LITEAPI_KEY') ||
  'sand_c0155ab8-c683-4f26-8f94-b5e92c5797b9';

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const text = url.searchParams.get('text') || '';
    const type = url.searchParams.get('type') || 'city';

    if (!text || text.trim().length < 2) {
      return new Response(JSON.stringify({ data: [] }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Call LiteAPI Places autocomplete
    const apiUrl = `https://api.liteapi.travel/v3.0/data/places?text=${encodeURIComponent(text.trim())}`;
    console.log(`[hotel-places] Fetching: ${apiUrl}`);

    const resp = await fetch(apiUrl, {
      headers: {
        'X-API-Key': LITEAPI_KEY,
        'Content-Type': 'application/json',
      },
    });

    if (!resp.ok) {
      const errText = await resp.text();
      console.warn(`[hotel-places] LiteAPI places failed: ${resp.status}`, errText.substring(0, 200));
      return new Response(JSON.stringify({ data: [] }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const json = await resp.json();
    // LiteAPI places response: { data: [{ placeId, displayName, cityName, countryCode, type, ... }] }
    const places = json.data || json.places || (Array.isArray(json) ? json : []);

    console.log(`[hotel-places] Found ${places.length} places for "${text}"`);

    return new Response(JSON.stringify({ data: places }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (err: any) {
    console.error('[hotel-places] Error:', err.message);
    return new Response(JSON.stringify({ data: [], error: err.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});
