import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { LITEAPI_BASE_URL, getLiteApiHeaders } from "../_shared/config/liteapi-config.ts";

const BASE_URL = LITEAPI_BASE_URL;
const HEADERS = getLiteApiHeaders();

/**
 * hotel-min-rates — Fast minimum price endpoint for listing pages
 * 
 * Uses LiteAPI POST /hotels/min-rates which returns only the cheapest rate per hotel.
 * Perfect for showing prices on a listing page before user clicks into a hotel.
 * Much faster than full /hotels/rates since it returns minimal data.
 */
serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405, headers: corsHeaders });

  try {
    const params = await req.json();

    const checkin = params.checkin || params.chkIn ||
      new Date(Date.now() + 86400000).toISOString().split('T')[0];
    const checkout = params.checkout || params.chkOut ||
      new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0];

    const adults = parseInt(params.adults || params.guestInfo || '2', 10);
    const currency = params.currency || 'INR';
    const guestNationality = params.guestNationality || 'IN';

    let occupancies: Array<{ adults: number; children?: number[] }> = [{ adults }];
    if (params.childrenAges && Array.isArray(params.childrenAges) && params.childrenAges.length > 0) {
      occupancies = [{ adults, children: params.childrenAges }];
    }

    const hotelIds: string[] = params.hotelIds || [];
    if (hotelIds.length === 0) {
      return new Response(JSON.stringify({ error: 'hotelIds array is required' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const body: Record<string, any> = {
      hotelIds,
      checkin,
      checkout,
      currency,
      guestNationality,
      occupancies,
      timeout: 15,
    };

    if (params.sessionId) body.sessionId = params.sessionId;

    console.log(`[hotel-min-rates] Fetching min rates for ${hotelIds.length} hotels`);

    const resp = await fetch(`${BASE_URL}/hotels/min-rates`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(body),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      console.error(`[hotel-min-rates] Failed ${resp.status}:`, errText.substring(0, 200));
      return new Response(JSON.stringify({ error: 'Failed to fetch minimum rates', data: [] }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const json = await resp.json();
    const rawData: any[] = Array.isArray(json.data) ? json.data : (json.data?.hotels || json.hotels || []);

    // Transform into a simple map: hotelId → { minRate, currency }
    const minRatesMap: Record<string, { hotelId: string; minRate: number; currency: string }> = {};
    for (const item of rawData) {
      const hotelId = item.hotelId || item.id;
      if (!hotelId) continue;
      const price = item.minRate ?? item.finalRate ?? item.price ?? null;
      if (price !== null) {
        minRatesMap[hotelId] = {
          hotelId,
          minRate: price,
          currency: item.currency || currency,
        };
      }
    }

    console.log(`[hotel-min-rates] Got min rates for ${Object.keys(minRatesMap).length}/${hotelIds.length} hotels`);

    return new Response(JSON.stringify({ data: minRatesMap }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (err: any) {
    console.error('[hotel-min-rates] Error:', err.message);
    return new Response(JSON.stringify({ error: err.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
