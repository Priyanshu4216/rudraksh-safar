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

// ─── Step 1: Resolve city name → placeId via LiteAPI Places autocomplete ────
// This is what the widget does internally. placeId covers the FULL geographic
// area (district, state, etc.) and returns ALL hotels in that region.
async function resolvePlaceId(query: string): Promise<string | null> {
  try {
    const url = `${BASE_URL}/data/places?text=${encodeURIComponent(query)}&type=city`;
    console.log(`[hotel-search] Resolving placeId for "${query}": ${url}`);
    const resp = await fetch(url, { headers: HEADERS });
    if (!resp.ok) {
      console.warn(`[hotel-search] Places API failed: ${resp.status}`);
      return null;
    }
    const json = await resp.json();
    // Response: { data: [{ placeId, displayName, ... }, ...] }
    const places = json.data || json.places || (Array.isArray(json) ? json : []);
    if (places.length === 0) {
      console.warn(`[hotel-search] No places found for "${query}"`);
      return null;
    }
    const placeId = places[0].placeId || places[0].place_id || places[0].id;
    console.log(`[hotel-search] Resolved placeId: ${placeId} for "${places[0].displayName || query}"`);
    return placeId || null;
  } catch (e: any) {
    console.warn('[hotel-search] Places resolve error:', e.message);
    return null;
  }
}

// ─── Step 2: Fetch ALL hotels for a placeId (paginated) ─────────────────────
async function fetchHotelsByPlaceId(placeId: string): Promise<any[]> {
  const PAGE_SIZE = 1000;
  let all: any[] = [];

  const fetchPage = async (offset: number) => {
    const url = `${BASE_URL}/data/hotels?placeId=${encodeURIComponent(placeId)}&limit=${PAGE_SIZE}${offset > 0 ? `&offset=${offset}` : ''}`;
    const resp = await fetch(url, { headers: HEADERS });
    if (!resp.ok) return { data: [], total: 0 };
    const json = await resp.json();
    return { data: json.data || [], total: json.total || json.totalCount || 0 };
  };

  const first = await fetchPage(0);
  all = [...first.data];
  console.log(`[hotel-search] PlaceId hotels page 0: ${first.data.length} (total: ${first.total})`);

  // Fetch additional pages if there are more (cap at 5 pages = 5000 hotels)
  if (first.data.length === PAGE_SIZE && first.total > PAGE_SIZE) {
    const totalPages = Math.min(Math.ceil(first.total / PAGE_SIZE), 5);
    const extraPromises = [];
    for (let p = 1; p < totalPages; p++) {
      extraPromises.push(fetchPage(p * PAGE_SIZE));
    }
    const extras = await Promise.all(extraPromises);
    for (const e of extras) {
      all = [...all, ...e.data];
      console.log(`[hotel-search] Extra page: ${e.data.length} hotels`);
    }
  }

  return all;
}

// ─── Step 2b: Fallback — fetch by countryCode + cityName ────────────────────
async function fetchHotelsByCityName(countryCode: string, cityName: string): Promise<any[]> {
  const PAGE_SIZE = 1000;
  let all: any[] = [];

  const fetchPage = async (offset: number) => {
    const url = new URL(`${BASE_URL}/data/hotels`);
    url.searchParams.set('countryCode', countryCode);
    if (cityName) url.searchParams.set('cityName', cityName);
    url.searchParams.set('limit', String(PAGE_SIZE));
    if (offset > 0) url.searchParams.set('offset', String(offset));
    const resp = await fetch(url.toString(), { headers: HEADERS });
    if (!resp.ok) return { data: [], total: 0 };
    const json = await resp.json();
    return { data: json.data || [], total: json.total || json.totalCount || 0 };
  };

  const first = await fetchPage(0);
  all = [...first.data];
  console.log(`[hotel-search] CityName hotels page 0: ${first.data.length} (total: ${first.total})`);

  if (first.data.length === PAGE_SIZE && first.total > PAGE_SIZE) {
    const totalPages = Math.min(Math.ceil(first.total / PAGE_SIZE), 5);
    const extras = await Promise.all(
      Array.from({ length: totalPages - 1 }, (_, i) => fetchPage((i + 1) * PAGE_SIZE))
    );
    for (const e of extras) all = [...all, ...e.data];
  }

  return all;
}

// ─── Country resolution for fallback ────────────────────────────────────────
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
  'dubai': 'AE', 'abu dhabi': 'AE', 'uae': 'AE', 'united arab emirates': 'AE',
  'bangkok': 'TH', 'phuket': 'TH', 'chiang mai': 'TH', 'thailand': 'TH',
  'bali': 'ID', 'jakarta': 'ID', 'indonesia': 'ID',
  'singapore': 'SG', 'kuala lumpur': 'MY', 'malaysia': 'MY',
  'tokyo': 'JP', 'osaka': 'JP', 'japan': 'JP',
  'paris': 'FR', 'france': 'FR', 'rome': 'IT', 'milan': 'IT', 'italy': 'IT',
  'barcelona': 'ES', 'madrid': 'ES', 'spain': 'ES',
  'london': 'GB', 'uk': 'GB', 'united kingdom': 'GB',
  'new york': 'US', 'los angeles': 'US', 'usa': 'US', 'united states': 'US',
  'sydney': 'AU', 'melbourne': 'AU', 'australia': 'AU',
  'toronto': 'CA', 'vancouver': 'CA', 'canada': 'CA',
  'kathmandu': 'NP', 'nepal': 'NP', 'colombo': 'LK', 'sri lanka': 'LK',
  'male': 'MV', 'maldives': 'MV',
};

function resolveCountryCode(rawCity: string, passedCode?: string): string {
  if (passedCode && passedCode.length === 2) return passedCode.toUpperCase();
  const parts = rawCity.split(',').map(p => p.trim().toLowerCase());
  for (let i = parts.length - 1; i >= 0; i--) {
    if (CITY_COUNTRY[parts[i]]) return CITY_COUNTRY[parts[i]];
  }
  if (CITY_COUNTRY[parts[0]]) return CITY_COUNTRY[parts[0]];
  return 'IN';
}

// ─── Main Handler ──────────────────────────────────────────────────────────

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405, headers: corsHeaders });

  try {
    const params = await req.json();

    if (!params.placeId && !params.cityName && (!params.latitude || !params.longitude)) {
      return new Response(JSON.stringify({ error: 'Provide cityName, placeId, or lat/lon.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const rawCity = (params.cityName || '').trim();
    const cityOnly = rawCity.split(',')[0].trim();
    const countryCode = resolveCountryCode(rawCity, params.countryCode);

    const checkin = params.chkIn || params.checkin ||
      new Date(Date.now() + 86400000).toISOString().split('T')[0];
    const checkout = params.chkOut || params.checkout ||
      new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0];
    const adults = parseInt(params.guestInfo || params.adults || '2', 10);

    console.log(`[hotel-search] "${cityOnly}" (${countryCode}) | ${checkin}→${checkout} | ${adults} adults`);

    // ── STEP 1: Get placeId ──────────────────────────────────────────────────
    // Priority: passed placeId → resolve from city name via LiteAPI Places API
    let resolvedPlaceId = params.placeId || null;

    if (!resolvedPlaceId && cityOnly) {
      // Try to resolve placeId using LiteAPI's own places autocomplete
      resolvedPlaceId = await resolvePlaceId(cityOnly);
    }

    // ── STEP 2: Fetch hotel metadata (names, photos, addresses) ─────────────
    let hotelList: any[] = [];

    if (resolvedPlaceId) {
      console.log(`[hotel-search] Fetching hotels by placeId: ${resolvedPlaceId}`);
      hotelList = await fetchHotelsByPlaceId(resolvedPlaceId);
    }

    // Fallback to countryCode + cityName if placeId returned nothing
    if (hotelList.length === 0 && cityOnly) {
      console.log(`[hotel-search] PlaceId returned 0, falling back to cityName search`);
      hotelList = await fetchHotelsByCityName(countryCode, cityOnly);
    }

    // Last resort: country only
    if (hotelList.length === 0 && countryCode) {
      console.log(`[hotel-search] CityName returned 0, falling back to country-only`);
      hotelList = await fetchHotelsByCityName(countryCode, '');
    }

    console.log(`[hotel-search] Total hotel metadata fetched: ${hotelList.length}`);

    if (hotelList.length === 0) {
      const s = new ReadableStream({ start(c) {
        const e = new TextEncoder();
        c.enqueue(e.encode(sseChunk({ hotels: [] })));
        c.enqueue(e.encode(`data: [DONE]\n\n`));
        c.close();
      }});
      return new Response(s, { headers: { ...corsHeaders, 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache' } });
    }

    // ── STEP 3: Build metadata map (deduplicated) ────────────────────────────
    const hotelMetaMap: Record<string, any> = {};
    const orderedIds: string[] = [];

    for (const hotel of hotelList) {
      const id = hotel.id || hotel.hotelId;
      if (!id || hotelMetaMap[id]) continue;
      hotelMetaMap[id] = hotel;
      orderedIds.push(id);
    }

    // ── STEP 4: Sort metadata: hotels with photos first, then by stars ───────
    const getPhoto = (meta: any) =>
      meta.main_photo || meta.thumbnail || meta.thumbnailUrl ||
      meta.hotelImages?.[0]?.url || meta.hotelImages?.[0]?.urlHd ||
      (typeof meta.hotelImages?.[0] === 'string' ? meta.hotelImages[0] : null) ||
      meta.images?.[0]?.url || (typeof meta.images?.[0] === 'string' ? meta.images[0] : null) ||
      null;

    orderedIds.sort((a, b) => {
      const am = hotelMetaMap[a], bm = hotelMetaMap[b];
      const aP = !!getPhoto(am), bP = !!getPhoto(bm);
      if (aP && !bP) return -1;
      if (!aP && bP) return 1;
      const aS = am?.stars ?? am?.starRating ?? 0;
      const bS = bm?.stars ?? bm?.starRating ?? 0;
      return bS - aS;
    });

    // ── STEP 5: Fetch rates for hotels in parallel chunks of 200 ───
    const MAX_HOTELS_TO_PRICE = 600; // Limit to 600 per request (3 batches of 200) to keep it fast
    const CHUNK_SIZE = 200;
    const rateOffset = parseInt(params.offset || '0', 10);
    const idsToPrice = orderedIds.slice(rateOffset, rateOffset + MAX_HOTELS_TO_PRICE);
    console.log(`[hotel-search] Fetching rates for hotels ${rateOffset} to ${rateOffset + idsToPrice.length} in batches of ${CHUNK_SIZE}`);


    let ratesData: any[] = [];
    
    // Split into chunks
    const chunks: string[][] = [];
    for (let i = 0; i < idsToPrice.length; i += CHUNK_SIZE) {
      chunks.push(idsToPrice.slice(i, i + CHUNK_SIZE));
    }

    try {
      for (let i = 0; i < chunks.length; i++) {
        const chunkIds = chunks[i];
        const ratesResp = await fetch(`${BASE_URL}/hotels/rates`, {
          method: 'POST',
          headers: HEADERS,
          body: JSON.stringify({
            hotelIds: chunkIds,
            occupancies: [{ adults }],
            currency: params.currency || 'INR',
            guestNationality: params.guestNationality || 'IN',
            checkin,
            checkout,
            timeout: 25,
          }),
        });

        if (ratesResp.ok) {
          const ratesJson = await ratesResp.json();
          const batchData = ratesJson.data || ratesJson.hotels || (Array.isArray(ratesJson) ? ratesJson : []);
          console.log(`[hotel-search] Batch ${i + 1}/${chunks.length}: Got rates for ${batchData.length} hotels`);
          ratesData.push(...batchData);
        } else {
          const e = await ratesResp.text();
          console.warn(`[hotel-search] Rates batch ${i + 1} failed ${ratesResp.status}:`, e.substring(0, 200));
        }

        // Add a 500ms delay between chunks to avoid rate limiting
        if (i < chunks.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }

      console.log(`[hotel-search] Total rates fetched: ${ratesData.length}`);
    } catch (e: any) {
      console.warn('[hotel-search] Rates error:', e.message);
    }

    // ── STEP 6: Build rates lookup ───────────────────────────────────────────
    const ratesLookup: Record<string, any> = {};
    const ratesForFrontend: any[] = [];

    for (const item of ratesData) {
      if (!item.hotelId) continue;
      const allRoomRates: any[] = item.roomTypes?.flatMap((rt: any) => rt.rates || []) || [];
      if (allRoomRates.length === 0) continue;

      const cheapest = allRoomRates.reduce((a: any, b: any) => {
        const aP = a.finalRate ?? a.retailRate?.total?.[0]?.amount ?? 999999;
        const bP = b.finalRate ?? b.retailRate?.total?.[0]?.amount ?? 999999;
        return aP < bP ? a : b;
      });

      const entry = {
        hotelId: item.hotelId,
        finalRate: cheapest.finalRate ?? cheapest.retailRate?.total?.[0]?.amount ?? null,
        currency: cheapest.currency || cheapest.retailRate?.total?.[0]?.currency || 'INR',
        offerId: cheapest.offerId,
        roomName: cheapest.roomName || cheapest.name || '',
        promotions: cheapest.promotions || [],
        perks: cheapest.perks || [],
        initialRate: cheapest.retailRate?.initialPrice ?? cheapest.initialRate ?? null,
        roomTypes: item.roomTypes,
      };
      ratesLookup[item.hotelId] = entry;
      ratesForFrontend.push(entry);
    }

    // ── STEP 7: Build final list — hotels WITH rates first (price asc), rest after ──
    const withRates = orderedIds
      .filter(id => ratesLookup[id])
      .sort((a, b) => (ratesLookup[a]?.finalRate ?? 999999) - (ratesLookup[b]?.finalRate ?? 999999));

    const withoutRates = orderedIds.filter(id => !ratesLookup[id]);

    const finalIds = [...withRates, ...withoutRates];

    const buildHotel = (id: string) => {
      const m = hotelMetaMap[id] || {};
      return {
        id,
        hotelId: id,
        name: m.name || m.hotelName || m.hotel_name || '',
        address: m.address || m.hotelAddress || m.hotel_address || '',
        city: m.city || m.cityName || cityOnly || '',
        country: m.country || m.countryCode || countryCode || '',
        stars: m.stars ?? m.starRating ?? m.star_rating ?? null,
        reviewScore: m.reviewScore ?? m.review_score ?? m.guestScore ?? null,
        main_photo: getPhoto(m),
        thumbnail: getPhoto(m),
        latitude: m.latitude || m.lat || null,
        longitude: m.longitude || m.lng || m.lon || null,
      };
    };

    const finalHotels = finalIds.map(buildHotel);

    console.log(`[hotel-search] Streaming ${finalHotels.length} hotels (${withRates.length} priced, ${withoutRates.length} unpriced)`);

    // ── STEP 8: Stream results ───────────────────────────────────────────────
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

  } catch (err: any) {
    console.error('[hotel-search] Fatal error:', err.message, err.stack);
    return new Response(JSON.stringify({ error: err.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
