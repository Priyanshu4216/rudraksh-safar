import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { LITEAPI_BASE_URL, getLiteApiHeaders } from "../_shared/config/liteapi-config.ts";

/**
 * hotel-places — Autocomplete for the search bar destination input
 * 
 * Calls LiteAPI /data/places?textQuery=... which returns cities, regions, airports, and hotels.
 * Supports filtering by type (e.g. 'locality', 'hotel', 'airport') or omit for all types.
 */
serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const text = url.searchParams.get('text') || url.searchParams.get('textQuery') || '';
    const type = url.searchParams.get('type') || '';
    const limit = url.searchParams.get('limit') || '10';

    if (!text || text.trim().length < 2) {
      return new Response(JSON.stringify({ data: [] }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Build LiteAPI places URL — parameter MUST be 'textQuery' per LiteAPI v3 spec
    const apiUrl = new URL(`${LITEAPI_BASE_URL}/data/places`);
    apiUrl.searchParams.set('textQuery', text.trim());
    if (type) apiUrl.searchParams.set('type', type);

    console.log(`[hotel-places] Fetching: ${apiUrl.toString()}`);

    const resp = await fetch(apiUrl.toString(), {
      headers: getLiteApiHeaders(),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      console.warn(`[hotel-places] LiteAPI places failed: ${resp.status}`, errText.substring(0, 200));
      return new Response(JSON.stringify({ data: [] }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const json = await resp.json();
    const rawPlaces: any[] = json.data || json.places || (Array.isArray(json) ? json : []);

    // Filter out irrelevant POI noise (doctors, grocery stores, etc.) while keeping cities, regions, airports, and hotels
    const places = rawPlaces.filter((p: any) => {
      const types: string[] = Array.isArray(p.types) ? p.types : [];
      if (types.length === 0) return true;
      const isTravelRelevant = types.some((t) =>
        ['locality', 'administrative_area_level_1', 'administrative_area_level_2', 'country', 'geocode', 'political', 'airport', 'lodging', 'hotel', 'tourist_attraction', 'natural_feature', 'island'].includes(t)
      );
      const isNoise = types.some((t) => ['doctor', 'health', 'dentist', 'store', 'grocery_store', 'liquor_store', 'food_store'].includes(t));
      return isTravelRelevant || !isNoise;
    });

    // Normalize the response so the frontend has a consistent shape
    const normalized = (places.length > 0 ? places : rawPlaces).slice(0, parseInt(limit, 10)).map((p: any) => {
      const types: string[] = Array.isArray(p.types) ? p.types : [];
      const inferredType = p.type
        || (p.hotelId || types.includes('lodging') ? 'hotel'
          : types.includes('airport') ? 'airport'
          : 'city');

      const displayName = p.displayName
        ? (p.formattedAddress ? `${p.displayName}, ${p.formattedAddress}` : p.displayName)
        : (p.name || p.label || text);

      return {
        placeId: p.placeId || p.place_id || null,
        displayName,
        cityName: p.cityName || p.displayName || p.name || text,
        formattedAddress: p.formattedAddress || null,
        countryCode: p.countryCode || p.country_code || null,
        countryName: p.countryName || p.formattedAddress || null,
        hotelId: p.hotelId || p.hotel_id || null,
        hotelName: p.hotelName || (inferredType === 'hotel' ? p.displayName : null),
        type: inferredType,
      };
    });

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
