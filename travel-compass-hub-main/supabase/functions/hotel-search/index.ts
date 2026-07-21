import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";

const LITEAPI_KEY = 
  Deno.env.get('NUITEE_API_KEY') ||
  Deno.env.get('NUITEE_APT_KEY') ||
  Deno.env.get('LITEAPI_KEY') ||
  'sand_c0155ab8-c683-4f26-8f94-b5e92c5797b9';

function sseChunk(data: any): string {
  return `data: ${JSON.stringify(data)}\n\n`;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
  }

  try {
    const params = await req.json();

    // Accept: placeId OR lat/lon OR countryCode+cityName OR just cityName
    if (!params.placeId && !params.cityName && (!params.latitude || !params.longitude)) {
      return new Response(JSON.stringify({ error: "Missing required parameters. Provide cityName, placeId, or lat/lon." }), { 
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Parse city — take only the first part before a comma (e.g. "Manali, Himachal Pradesh, India" → "Manali")
    const rawCity = params.cityName || '';
    const cityOnly = rawCity.split(',')[0].trim();

    // Try to detect country from the city string if no countryCode was passed
    let countryCode = params.countryCode || '';
    if (!countryCode && rawCity.includes(',')) {
      const parts = rawCity.split(',').map((p: string) => p.trim().toLowerCase());
      const last = parts[parts.length - 1];
      const countryMap: Record<string, string> = {
        'india': 'IN', 'usa': 'US', 'united states': 'US', 'uk': 'GB',
        'united kingdom': 'GB', 'france': 'FR', 'germany': 'DE', 'italy': 'IT',
        'spain': 'ES', 'canada': 'CA', 'australia': 'AU', 'japan': 'JP',
        'china': 'CN', 'brazil': 'BR', 'thailand': 'TH', 'singapore': 'SG',
        'uae': 'AE', 'united arab emirates': 'AE', 'himachal pradesh': 'IN',
        'rajasthan': 'IN', 'goa': 'IN', 'kerala': 'IN', 'maharashtra': 'IN',
        'uttarakhand': 'IN', 'punjab': 'IN', 'jammu & kashmir': 'IN'
      };
      countryCode = countryMap[last] || '';
    }

    const payload: any = {
      occupancies: [{ adults: parseInt(params.guestInfo || params.adults || '2') }],
      currency: params.currency || 'INR',
      guestNationality: params.guestNationality || 'IN',
      checkin: params.chkIn || params.checkin,
      checkout: params.chkOut || params.checkout,
      timeout: 15,
      limit: 20,
    };
    
    if (countryCode) {
      payload.countryCode = countryCode;
    } else if (!params.placeId && (!params.latitude || !params.longitude)) {
      payload.countryCode = 'IN';
    }
    if (cityOnly) payload.cityName = cityOnly;
    if (params.placeId) payload.placeId = params.placeId;
    if (params.latitude && params.longitude) {
      payload.latitude = parseFloat(params.latitude);
      payload.longitude = parseFloat(params.longitude);
    }
    
    console.log("[hotel-search] Payload:", JSON.stringify(payload));

    const ratesResp = await fetch("https://api.liteapi.travel/v3.0/hotels/rates", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-API-Key": LITEAPI_KEY },
      body: JSON.stringify(payload),
    });

    if (!ratesResp.ok) {
      const errorText = await ratesResp.text();
      console.error("[hotel-search] LiteAPI rates error:", ratesResp.status, errorText);
      return new Response(JSON.stringify({ error: errorText }), { 
        status: ratesResp.status, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const ratesText = await ratesResp.text();
    const ratesJson = JSON.parse(ratesText);
    const ratesData: any[] = ratesJson.data || ratesJson.hotels || (Array.isArray(ratesJson) ? ratesJson : []);

    console.log(`[hotel-search] Got ${ratesData.length} hotels from rates endpoint`);
    if (ratesData.length > 0) {
      console.log("[hotel-search] First hotel keys:", JSON.stringify(Object.keys(ratesData[0])));
      console.log("[hotel-search] First hotel sample:", JSON.stringify(ratesData[0]).substring(0, 600));
    }

    // Collect hotelIds to fetch metadata
    const hotelIds = ratesData.map((h: any) => h.hotelId).filter(Boolean);

    // Build a rates lookup map
    const ratesMap: Record<string, any> = {};
    const rates: any[] = [];

    for (const item of ratesData) {
      if (!item.hotelId) continue;

      const allRoomRates: any[] = item.roomTypes?.flatMap((rt: any) => rt.rates || []) || [];

      if (allRoomRates.length > 0) {
        const cheapest = allRoomRates.reduce((a: any, b: any) => {
          const aPrice = a.finalRate ?? a.retailRate?.total?.[0]?.amount ?? 999999;
          const bPrice = b.finalRate ?? b.retailRate?.total?.[0]?.amount ?? 999999;
          return aPrice < bPrice ? a : b;
        });

        const rateEntry = {
          hotelId: item.hotelId,
          finalRate: cheapest.finalRate ?? cheapest.retailRate?.total?.[0]?.amount ?? null,
          currency: cheapest.currency || cheapest.retailRate?.total?.[0]?.currency || 'USD',
          offerId: cheapest.offerId,
          roomName: cheapest.roomName || '',
        };
        rates.push(rateEntry);
        ratesMap[item.hotelId] = rateEntry;
      }

      // Also try to get any metadata directly from rates response
      // (some API versions include it)
      const name = item.name || item.hotelName || item.hotel_name || '';
      const address = item.address || item.hotelAddress || item.hotel_address || '';
      const stars = item.stars ?? item.starRating ?? item.star_rating ?? item.rating ?? null;
      const photo = item.main_photo || item.thumbnail || item.hotelImages?.[0]?.url || item.hotelImages?.[0] || null;

      if (name || photo) {
        // Metadata partially available in rates
        ratesMap[item.hotelId] = { ...ratesMap[item.hotelId], _name: name, _address: address, _stars: stars, _photo: photo };
      }
    }

    // Now fetch hotel metadata from the /hotels/list endpoint
    let hotelMetaMap: Record<string, any> = {};

    if (hotelIds.length > 0) {
      try {
        const metaUrl = new URL("https://api.liteapi.travel/v3.0/hotels");
        // Use countryCode/cityName to get hotel list with metadata
        if (params.countryCode) metaUrl.searchParams.set("countryCode", params.countryCode);
        if (params.cityName) metaUrl.searchParams.set("cityName", params.cityName.split(',')[0].trim());
        metaUrl.searchParams.set("limit", "50");

        const metaResp = await fetch(metaUrl.toString(), {
          headers: { "X-API-Key": LITEAPI_KEY },
        });

        if (metaResp.ok) {
          const metaJson = await metaResp.json();
          const metaArray: any[] = metaJson.data || [];
          console.log(`[hotel-search] Got ${metaArray.length} hotels from metadata endpoint`);
          if (metaArray.length > 0) {
            console.log("[hotel-search] Meta hotel keys:", JSON.stringify(Object.keys(metaArray[0])));
            console.log("[hotel-search] Meta sample:", JSON.stringify(metaArray[0]).substring(0, 500));
          }
          for (const hotel of metaArray) {
            // The /hotels list endpoint uses 'id' not 'hotelId'
            const id = hotel.id || hotel.hotelId;
            if (id) {
              hotelMetaMap[id] = hotel;
              // Also index without prefix in case of "lp" prefix differences
              if (id.startsWith('lp')) hotelMetaMap[id.replace(/^lp/, '')] = hotel;
            }
          }
        } else {
          const errText = await metaResp.text();
          console.warn("[hotel-search] Metadata fetch failed:", metaResp.status, errText.substring(0, 200));
        }
      } catch (metaErr: any) {
        console.warn("[hotel-search] Metadata fetch error:", metaErr.message);
      }
    }

    // Build final hotel objects merging rates + metadata
    const hotels: any[] = hotelIds.map((hotelId: string) => {
      const meta = hotelMetaMap[hotelId] || {};
      const rateInfo = ratesMap[hotelId] || {};

      return {
        id: hotelId,
        hotelId,
        name: meta.name || meta.hotelName || meta.hotel_name || rateInfo._name || '',
        address: meta.address || meta.hotelAddress || meta.hotel_address || rateInfo._address || '',
        city: meta.city || meta.cityName || params.cityName?.split(',')[0] || '',
        country: meta.country || meta.countryCode || params.countryCode || '',
        stars: meta.stars ?? meta.starRating ?? meta.star_rating ?? rateInfo._stars ?? null,
        reviewScore: meta.reviewScore ?? meta.review_score ?? meta.rating ?? null,
        main_photo: meta.main_photo || meta.thumbnail || meta.hotelImages?.[0]?.url || meta.hotelImages?.[0] || rateInfo._photo || null,
        thumbnail: meta.thumbnail || meta.main_photo || rateInfo._photo || null,
      };
    }).filter((h: any) => ratesMap[h.hotelId]); // only include hotels we have rates for

    console.log(`[hotel-search] Final: ${hotels.length} hotels with metadata`);

    // Stream back
    const stream = new ReadableStream({
      start(controller) {
        const encoder = new TextEncoder();
        const batchSize = 5;
        for (let i = 0; i < hotels.length; i += batchSize) {
          controller.enqueue(encoder.encode(sseChunk({ hotels: hotels.slice(i, i + batchSize) })));
        }
        if (rates.length > 0) {
          controller.enqueue(encoder.encode(sseChunk({ rates })));
        }
        controller.enqueue(encoder.encode(`data: [DONE]\n\n`));
        controller.close();
      }
    });

    return new Response(stream, {
      headers: { 
        ...corsHeaders, 
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
      },
      status: 200,
    });

  } catch (error: any) {
    console.error("[hotel-search] Error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
