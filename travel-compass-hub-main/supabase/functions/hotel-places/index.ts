import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";

const LITEAPI_KEY =
  Deno.env.get('NUITEE_API_KEY') ||
  Deno.env.get('NUITEE_APT_KEY') ||
  Deno.env.get('LITEAPI_KEY') ||
  'sand_c0155ab8-c683-4f26-8f94-b5e92c5797b9';

/**
 * hotel-places — Autocomplete for the search bar destination input
 * 
 * Calls LiteAPI /data/places which returns cities, regions, airports, and hotels.
 * Supports filtering by type: 'city', 'hotel', 'airport', or omit for all types.
 */
serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const text = url.searchParams.get('text') || '';
    // Support querying cities, hotels, or all types
    // When not specified, LiteAPI returns all types including hotels by name
    const type = url.searchParams.get('type') || '';
    const limit = url.searchParams.get('limit') || '10';

    if (!text || text.trim().length < 2) {
      return new Response(JSON.stringify({ data: [] }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Build LiteAPI places URL
    const apiUrl = new URL('https://api.liteapi.travel/v3.0/data/places');
    apiUrl.searchParams.set('text', text.trim());
    if (type) apiUrl.searchParams.set('type', type);

    console.log(`[hotel-places] Fetching: ${apiUrl.toString()}`);

    const resp = await fetch(apiUrl.toString(), {
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
    const places: any[] = json.data || json.places || (Array.isArray(json) ? json : []);

    // Normalize the response so the frontend has a consistent shape
    const normalized = places.slice(0, parseInt(limit, 10)).map((p: any) => ({
      placeId: p.placeId || p.place_id || null,
      displayName: p.displayName || p.name || p.label || text,
      cityName: p.cityName || p.name || p.displayName?.split(',')[0] || text,
      countryCode: p.countryCode || p.country_code || null,
      countryName: p.countryName || null,
      // Hotel-specific fields
      hotelId: p.hotelId || p.hotel_id || null,
      hotelName: p.hotelName || null,
      // Type: 'city', 'hotel', 'region', 'airport', etc.
      type: p.type || (p.hotelId ? 'hotel' : 'city'),
    }));

    console.log(`[hotel-places] Found ${normalized.length} places for "${text}"`);

    return new Response(JSON.stringify({ data: normalized }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (err: any) {
    console.error('[hotel-places] Error:', err.message);
    return new Response(JSON.stringify({ data: [], error: err.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});
