import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";

const LITEAPI_KEY =
  Deno.env.get('NUITEE_API_KEY') ||
  Deno.env.get('NUITEE_APT_KEY') ||
  Deno.env.get('LITEAPI_KEY') ||
  'sand_c0155ab8-c683-4f26-8f94-b5e92c5797b9';

const BASE_URL = 'https://api.liteapi.travel/v3.0';
const HEADERS = { 'X-API-Key': LITEAPI_KEY, 'Content-Type': 'application/json' };

function sseChunk(data: any): string {
  return `data: ${JSON.stringify(data)}\n\n`;
}

// ─── Resolve city name → placeId via LiteAPI Places autocomplete ────────────
async function resolvePlaceId(query: string): Promise<string | null> {
  try {
    const url = `${BASE_URL}/data/places?text=${encodeURIComponent(query)}&type=city`;
    const resp = await fetch(url, { headers: HEADERS });
    if (!resp.ok) return null;
    const json = await resp.json();
    const places = json.data || json.places || (Array.isArray(json) ? json : []);
    if (places.length === 0) return null;
    const placeId = places[0].placeId || places[0].place_id || places[0].id;
    console.log(`[hotel-search] Resolved placeId: ${placeId} for "${query}"`);
    return placeId || null;
  } catch (e: any) {
    console.warn('[hotel-search] Places resolve error:', e.message);
    return null;
  }
}

// ─── Country resolution for guestNationality fallback ─────────────────────
const CITY_COUNTRY: Record<string, string> = {
  'goa': 'IN', 'mumbai': 'IN', 'delhi': 'IN', 'bangalore': 'IN', 'bengaluru': 'IN',
  'hyderabad': 'IN', 'chennai': 'IN', 'kolkata': 'IN', 'pune': 'IN', 'jaipur': 'IN',
  'manali': 'IN', 'shimla': 'IN', 'mussoorie': 'IN', 'nainital': 'IN', 'rishikesh': 'IN',
  'haridwar': 'IN', 'dharamshala': 'IN', 'ooty': 'IN', 'kodaikanal': 'IN', 'munnar': 'IN',
  'alleppey': 'IN', 'kovalam': 'IN', 'varkala': 'IN', 'pondicherry': 'IN', 'hampi': 'IN',
  'mysore': 'IN', 'mysuru': 'IN', 'udaipur': 'IN', 'pushkar': 'IN', 'jaisalmer': 'IN',
  'jodhpur': 'IN', 'ajmer': 'IN', 'bikaner': 'IN', 'leh': 'IN', 'ladakh': 'IN',
  'pahalgam': 'IN', 'gulmarg': 'IN', 'kedarnath': 'IN', 'badrinath': 'IN',
  'darjeeling': 'IN', 'gangtok': 'IN', 'shillong': 'IN', 'andaman': 'IN',
  'agra': 'IN', 'varanasi': 'IN', 'srinagar': 'IN', 'amritsar': 'IN',
  'chandigarh': 'IN', 'ahmedabad': 'IN', 'surat': 'IN', 'indore': 'IN',
  'rajasthan': 'IN', 'himachal pradesh': 'IN', 'uttarakhand': 'IN', 'kerala': 'IN',
  'karnataka': 'IN', 'tamil nadu': 'IN', 'maharashtra': 'IN', 'gujarat': 'IN',
  'jammu': 'IN', 'kashmir': 'IN', 'india': 'IN',
  'dubai': 'AE', 'abu dhabi': 'AE', 'uae': 'AE', 'united arab emirates': 'AE', 'sharjah': 'AE',
  'bangkok': 'TH', 'phuket': 'TH', 'chiang mai': 'TH', 'pattaya': 'TH', 'thailand': 'TH',
  'bali': 'ID', 'jakarta': 'ID', 'indonesia': 'ID', 'lombok': 'ID',
  'singapore': 'SG', 'kuala lumpur': 'MY', 'malaysia': 'MY', 'penang': 'MY',
  'tokyo': 'JP', 'osaka': 'JP', 'kyoto': 'JP', 'japan': 'JP', 'hiroshima': 'JP',
  'paris': 'FR', 'nice': 'FR', 'lyon': 'FR', 'france': 'FR', 'marseille': 'FR',
  'rome': 'IT', 'milan': 'IT', 'venice': 'IT', 'florence': 'IT', 'italy': 'IT',
  'barcelona': 'ES', 'madrid': 'ES', 'seville': 'ES', 'spain': 'ES',
  'london': 'GB', 'edinburgh': 'GB', 'manchester': 'GB', 'uk': 'GB', 'united kingdom': 'GB',
  'amsterdam': 'NL', 'berlin': 'DE', 'munich': 'DE', 'vienna': 'AT',
  'zurich': 'CH', 'geneva': 'CH', 'prague': 'CZ', 'budapest': 'HU',
  'new york': 'US', 'los angeles': 'US', 'las vegas': 'US', 'miami': 'US', 'chicago': 'US', 'usa': 'US',
  'toronto': 'CA', 'vancouver': 'CA', 'montreal': 'CA', 'canada': 'CA',
  'sydney': 'AU', 'melbourne': 'AU', 'brisbane': 'AU', 'australia': 'AU',
  'kathmandu': 'NP', 'nepal': 'NP', 'colombo': 'LK', 'sri lanka': 'LK',
  'male': 'MV', 'maldives': 'MV', 'istanbul': 'TR', 'antalya': 'TR',
  'cairo': 'EG', 'marrakech': 'MA', 'cape town': 'ZA', 'nairobi': 'KE',
  'doha': 'QA', 'qatar': 'QA', 'riyadh': 'SA', 'muscat': 'OM',
  'hong kong': 'HK', 'macau': 'MO', 'seoul': 'KR', 'south korea': 'KR',
  'beijing': 'CN', 'shanghai': 'CN', 'china': 'CN', 'taipei': 'TW',
  'new delhi': 'IN', 'north goa': 'IN', 'south goa': 'IN', 'coorg': 'IN', 'coorg': 'IN',
};

function resolveCountryCode(rawCity: string, passedCode?: string): string {
  if (passedCode && passedCode.length === 2) return passedCode.toUpperCase();
  const lower = rawCity.toLowerCase();
  const parts = lower.split(',').map(p => p.trim());
  for (let i = parts.length - 1; i >= 0; i--) {
    if (CITY_COUNTRY[parts[i]]) return CITY_COUNTRY[parts[i]];
  }
  if (CITY_COUNTRY[parts[0]]) return CITY_COUNTRY[parts[0]];
  return 'IN';
}

// ─── Parse occupancies from request params ────────────────────────────────
// Supports: simple adults count, JSON occupancy array, or children ages array
function parseOccupancies(params: any): Array<{ adults: number; children?: number[] }> {
  // If explicit occupancies array passed (multi-room support)
  if (params.occupancies) {
    try {
      const parsed = typeof params.occupancies === 'string'
        ? JSON.parse(params.occupancies)
        : params.occupancies;
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    } catch {}
  }

  // Single room with children
  const adults = parseInt(params.guestInfo || params.adults || '2', 10);
  const rooms = parseInt(params.rooms || '1', 10);
  let childrenAges: number[] = [];

  if (params.childrenAges) {
    try {
      childrenAges = typeof params.childrenAges === 'string'
        ? JSON.parse(params.childrenAges)
        : params.childrenAges;
    } catch {}
  }

  const singleRoom: { adults: number; children?: number[] } = { adults };
  if (childrenAges.length > 0) singleRoom.children = childrenAges;

  // Duplicate for multiple rooms
  return Array.from({ length: Math.max(1, rooms) }, () => ({ ...singleRoom }));
}

// ─── Main Handler ──────────────────────────────────────────────────────────
serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405, headers: corsHeaders });

  try {
    const params = await req.json();

    const rawCity = (params.cityName || '').trim();
    const cityOnly = rawCity.split(',')[0].trim();
    const countryCode = resolveCountryCode(rawCity, params.countryCode);

    const checkin = params.chkIn || params.checkin ||
      new Date(Date.now() + 86400000).toISOString().split('T')[0];
    const checkout = params.chkOut || params.checkout ||
      new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0];

    const occupancies = parseOccupancies(params);
    const currency = params.currency || 'INR';
    // Use passed guestNationality, else derive from destination country, else default IN
    const guestNationality = params.guestNationality || countryCode || 'IN';
    const sessionId = params.sessionId || undefined;
    const minStarRating = params.minStarRating ? parseInt(params.minStarRating, 10) : undefined;
    const facilities = params.facilities || undefined;
    const hotelChain = params.hotelChain || undefined;

    console.log(`[hotel-search] "${cityOnly}" (${countryCode}) | ${checkin}→${checkout} | ${JSON.stringify(occupancies)} | nationality: ${guestNationality}`);

    // ── STRATEGY: Direct /hotels/rates with placeId + includeHotelData ─────
    // This is the ONE-CALL approach that returns hotels + rates + photos together,
    // replacing the old slow 2-step: fetch hotel list → fetch rates.

    let resolvedPlaceId = params.placeId || null;
    let hotelId = params.hotelId || null;

    // Resolve placeId from city name if not passed
    if (!resolvedPlaceId && !hotelId && cityOnly) {
      resolvedPlaceId = await resolvePlaceId(cityOnly);
    }

    // Build the rates request body
    const ratesBody: Record<string, any> = {
      checkin,
      checkout,
      currency,
      guestNationality,
      occupancies,
      timeout: 25,
      includeHotelData: true,  // ← Returns hotel name, photos, address inline!
    };

    // Add sessionId for price consistency across listing → detail page
    if (sessionId) ratesBody.sessionId = sessionId;

    // Server-side filters
    if (minStarRating && minStarRating > 0) ratesBody.minStarRating = minStarRating;
    if (facilities) ratesBody.facilities = facilities;
    if (hotelChain) ratesBody.hotelChain = hotelChain;

    // Location — priority: hotelId > placeId > cityName+countryCode > lat/lng
    if (hotelId) {
      ratesBody.hotelIds = [hotelId];
      ratesBody.includeHotelData = true;
    } else if (resolvedPlaceId) {
      ratesBody.placeId = resolvedPlaceId;
    } else if (cityOnly && countryCode) {
      ratesBody.cityName = cityOnly;
      ratesBody.countryCode = countryCode;
    } else if (params.latitude && params.longitude) {
      ratesBody.latitude = parseFloat(params.latitude);
      ratesBody.longitude = parseFloat(params.longitude);
      ratesBody.radius = params.radius ? parseInt(params.radius, 10) : 15;
    } else {
      return new Response(JSON.stringify({ error: 'Provide cityName, placeId, hotelId, or coordinates.' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Pagination offset
    const pageOffset = parseInt(params.offset || '0', 10);
    if (pageOffset > 0) ratesBody.offset = pageOffset;

    console.log(`[hotel-search] Calling /hotels/rates with placeId=${resolvedPlaceId || 'N/A'}, includeHotelData=true`);

    // ── Single API call: rates + hotel data together ─────────────────────
    const ratesResp = await fetch(`${BASE_URL}/hotels/rates`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(ratesBody),
    });

    if (!ratesResp.ok) {
      const errText = await ratesResp.text();
      console.error(`[hotel-search] Rates API failed ${ratesResp.status}:`, errText.substring(0, 300));

      // Fallback: try cityName+countryCode if placeId failed
      if (resolvedPlaceId && (ratesResp.status === 400 || ratesResp.status === 404)) {
        console.log('[hotel-search] PlaceId failed, falling back to cityName+countryCode');
        const fallbackBody = { ...ratesBody };
        delete fallbackBody.placeId;
        if (cityOnly) {
          fallbackBody.cityName = cityOnly;
          fallbackBody.countryCode = countryCode;
        }
        const fallbackResp = await fetch(`${BASE_URL}/hotels/rates`, {
          method: 'POST',
          headers: HEADERS,
          body: JSON.stringify(fallbackBody),
        });
        if (fallbackResp.ok) {
          return streamRatesResponse(await fallbackResp.json(), cityOnly, countryCode);
        }
      }

      // Empty result on failure
      const emptyStream = new ReadableStream({
        start(c) {
          const enc = new TextEncoder();
          c.enqueue(enc.encode(sseChunk({ hotels: [] })));
          c.enqueue(enc.encode(`data: [DONE]\n\n`));
          c.close();
        }
      });
      return new Response(emptyStream, {
        headers: { ...corsHeaders, 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache' }
      });
    }

    const ratesJson = await ratesResp.json();
    return streamRatesResponse(ratesJson, cityOnly, countryCode);

  } catch (err: any) {
    console.error('[hotel-search] Fatal error:', err.message, err.stack);
    return new Response(JSON.stringify({ error: err.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});

// ─── Transform & Stream the /hotels/rates response ───────────────────────
function streamRatesResponse(ratesJson: any, cityOnly: string, countryCode: string): Response {
  const rawHotels: any[] = ratesJson.data?.hotels || ratesJson.hotels || (Array.isArray(ratesJson.data) ? ratesJson.data : []);

  console.log(`[hotel-search] /hotels/rates returned ${rawHotels.length} hotels with rates`);

  if (rawHotels.length === 0) {
    const emptyStream = new ReadableStream({
      start(c) {
        const enc = new TextEncoder();
        c.enqueue(enc.encode(sseChunk({ hotels: [] })));
        c.enqueue(enc.encode(`data: [DONE]\n\n`));
        c.close();
      }
    });
    return new Response(emptyStream, {
      headers: { ...corsHeaders, 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache' }
    });
  }

  // Process hotels and extract rates
  const finalHotels: any[] = [];
  const ratesForFrontend: any[] = [];

  for (const item of rawHotels) {
    const hotelId = item.hotelId || item.id;
    if (!hotelId) continue;

    // Hotel metadata — comes via includeHotelData=true
    const meta = item.hotelData || item.hotel || {};
    const mainPhoto = getPhoto(item) || getPhoto(meta);

    const hotelObj = {
      id: hotelId,
      hotelId,
      name: item.name || meta.name || meta.hotelName || '',
      address: item.address || meta.address || meta.hotelAddress || '',
      city: item.city || meta.city || meta.cityName || cityOnly,
      country: item.country || meta.country || meta.countryCode || countryCode,
      stars: item.stars ?? item.starRating ?? meta.stars ?? meta.starRating ?? null,
      reviewScore: item.reviewScore ?? item.guestScore ?? meta.reviewScore ?? null,
      main_photo: mainPhoto,
      thumbnail: mainPhoto,
      latitude: item.latitude || meta.latitude || null,
      longitude: item.longitude || meta.longitude || null,
    };
    finalHotels.push(hotelObj);

    // Extract cheapest rate for this hotel
    const allRoomRates: any[] = item.roomTypes?.flatMap((rt: any) => rt.rates || []) || [];
    if (allRoomRates.length > 0) {
      const cheapest = allRoomRates.reduce((a: any, b: any) => {
        const aP = a.finalRate ?? a.retailRate?.total?.[0]?.amount ?? 999999;
        const bP = b.finalRate ?? b.retailRate?.total?.[0]?.amount ?? 999999;
        return aP < bP ? a : b;
      });
      ratesForFrontend.push({
        hotelId,
        finalRate: cheapest.finalRate ?? cheapest.retailRate?.total?.[0]?.amount ?? null,
        initialRate: cheapest.retailRate?.initialPrice ?? cheapest.initialRate ?? null,
        currency: cheapest.currency || cheapest.retailRate?.total?.[0]?.currency || 'INR',
        offerId: cheapest.offerId,
        roomName: cheapest.roomName || cheapest.name || '',
        promotions: cheapest.promotions || [],
        perks: cheapest.perks || [],
        roomTypes: item.roomTypes,
      });
    }
  }

  console.log(`[hotel-search] Streaming ${finalHotels.length} hotels (${ratesForFrontend.length} priced)`);

  const stream = new ReadableStream({
    start(controller) {
      const enc = new TextEncoder();
      const batchSize = 10;
      for (let i = 0; i < finalHotels.length; i += batchSize) {
        controller.enqueue(enc.encode(sseChunk({ hotels: finalHotels.slice(i, i + batchSize) })));
      }
      if (ratesForFrontend.length > 0) {
        controller.enqueue(enc.encode(sseChunk({ rates: ratesForFrontend })));
      }
      controller.enqueue(enc.encode(`data: [DONE]\n\n`));
      controller.close();
    }
  });

  return new Response(stream, {
    headers: { ...corsHeaders, 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache' },
    status: 200,
  });
}

// ─── Photo extraction helper ──────────────────────────────────────────────
function getPhoto(obj: any): string | null {
  if (!obj) return null;
  return obj.main_photo || obj.thumbnail || obj.thumbnailUrl ||
    obj.mainPhoto ||
    obj.hotelImages?.[0]?.url || obj.hotelImages?.[0]?.urlHd ||
    (typeof obj.hotelImages?.[0] === 'string' ? obj.hotelImages[0] : null) ||
    obj.images?.[0]?.url || (typeof obj.images?.[0] === 'string' ? obj.images[0] : null) ||
    null;
}
