import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";
import { LITEAPI_BASE_URL, getLiteApiHeaders } from "../_shared/config/liteapi-config.ts";

const BASE_URL = LITEAPI_BASE_URL;
const HEADERS = getLiteApiHeaders();

const supabaseAdmin = (Deno.env.get('SUPABASE_URL') && Deno.env.get('SUPABASE_SERVICE_ROLE_KEY'))
  ? createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)
  : null;

function sseChunk(data: any): string {
  return `data: ${JSON.stringify(data)}\n\n`;
}

// ─── Resolve city name → placeId (with 7-day DB cache) ─────────────────────
async function resolvePlaceId(query: string): Promise<string | null> {
  const cacheKey = query.trim().toLowerCase();

  // 1. Check place_id_cache first
  if (supabaseAdmin) {
    try {
      const { data: cached } = await supabaseAdmin
        .from('place_id_cache')
        .select('place_id, expires_at')
        .eq('query_key', cacheKey)
        .single();
      if (cached?.place_id && new Date(cached.expires_at) > new Date()) {
        console.log(`[hotel-search] Cache hit placeId: ${cached.place_id} for "${query}"`);
        return cached.place_id;
      }
    } catch {
      // Cache miss or table unavailable
    }
  }

  try {
    // LiteAPI v3 /data/places requires 'textQuery' (not 'text') and omit type=city so regions/towns resolve
    const url = `${BASE_URL}/data/places?textQuery=${encodeURIComponent(query)}`;
    const resp = await fetch(url, { headers: HEADERS });
    if (!resp.ok) return null;
    const json = await resp.json();
    const places = json.data || json.places || (Array.isArray(json) ? json : []);
    if (places.length === 0) return null;
    const placeId = places[0].placeId || places[0].place_id || places[0].id;
    console.log(`[hotel-search] Resolved placeId: ${placeId} for "${query}"`);

    // 2. Store in place_id_cache (TTL 7 days)
    if (placeId && supabaseAdmin) {
      const expiresAt = new Date(Date.now() + 7 * 86400000).toISOString();
      supabaseAdmin.from('place_id_cache').upsert({
        query_key: cacheKey,
        place_id: placeId,
        display_name: places[0].displayName || query,
        expires_at: expiresAt,
      }).then(() => {}).catch(() => {});
    }

    return placeId || null;
  } catch (e: any) {
    console.warn('[hotel-search] Places resolve error:', e.message);
    return null;
  }
}

function recordSearchMetric(metric: {
  query_text: string;
  place_id: string | null;
  country_code: string;
  strategy_used: string;
  hotel_count: number;
  priced_count: number;
  latency_ms: number;
  error_message?: string;
}) {
  if (!supabaseAdmin) return;
  supabaseAdmin.from('hotel_search_metrics').insert(metric).then(() => {}).catch(() => {});
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
  'new delhi': 'IN', 'north goa': 'IN', 'south goa': 'IN', 'coorg': 'IN',
  'bhilai': 'IN', 'raipur': 'IN', 'durg': 'IN', 'bilaspur': 'IN', 'nagpur': 'IN',
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
    const startTime = Date.now();
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
    // Always use the guest's actual nationality (default IN) — never derive from destination country
    const guestNationality = params.guestNationality || 'IN';
    const sessionId = params.sessionId || undefined;
    const minStarRating = params.minStarRating ? parseInt(params.minStarRating, 10) : undefined;
    const facilities = params.facilities || undefined;
    const hotelChain = params.hotelChain || undefined;

    console.log(`[hotel-search] "${cityOnly}" (${countryCode}) | ${checkin}→${checkout} | ${JSON.stringify(occupancies)} | nationality: ${guestNationality}`);

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
      timeout: 15,             // Supplier aggregation wait (recommended 10-15s)
      limit: params.limit ? parseInt(params.limit, 10) : 200,
      maxRatesPerHotel: 1,     // Fast listing: cheapest rate per hotel
      roomMapping: false,      // Maximum coverage: do not drop unmapped/boutique hotels
      includeHotelData: true,  // Returns hotel metadata in ratesJson.hotels alongside ratesJson.data
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
    const pageLimit = params.limit ? parseInt(params.limit, 10) : 200;

    console.log(`[hotel-search] Calling /hotels/rates with placeId=${resolvedPlaceId || 'N/A'}, offset=${pageOffset}, limit=${pageLimit}`);

    // ── Helper: fetch /hotels/rates with 30s HTTP timeout ───────────────────
    const fetchRates = async (bodyPayload: Record<string, any>) => {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 30000);
      try {
        return await fetch(`${BASE_URL}/hotels/rates`, {
          method: 'POST',
          headers: HEADERS,
          body: JSON.stringify(bodyPayload),
          signal: controller.signal,
        });
      } finally {
        clearTimeout(timer);
      }
    };

    // For offset > 0 (Load More), use 2-step /data/hotels?offset=... -> /hotels/rates { hotelIds }
    if (pageOffset > 0 && resolvedPlaceId) {
      const listResp = await fetch(
        `${BASE_URL}/data/hotels?placeId=${encodeURIComponent(resolvedPlaceId)}&offset=${pageOffset}&limit=${pageLimit}`,
        { headers: HEADERS }
      );
      if (listResp.ok) {
        const listJson = await listResp.json();
        const total = listJson.total || 0;
        const ids = (listJson.data || []).map((h: any) => h.id || h.hotelId).filter(Boolean).slice(0, 200);
        if (ids.length > 0) {
          const twoStepBody = { ...ratesBody, hotelIds: ids };
          delete twoStepBody.placeId;
          const r2 = await fetchRates(twoStepBody);
          if (r2.ok) {
            return streamRatesResponse(await r2.json(), cityOnly, countryCode, currency, {
              offset: pageOffset,
              limit: pageLimit,
              total,
              hasMore: total > pageOffset + ids.length,
            });
          }
        }
      }
    }

    const ratesResp = await fetchRates(ratesBody);

    if (!ratesResp.ok) {
      const errText = await ratesResp.text();
      console.error(`[hotel-search] Rates API failed ${ratesResp.status}:`, errText.substring(0, 300));

      // Fallback 1: Two-step /data/hotels?placeId=... -> /hotels/rates { hotelIds }
      if (resolvedPlaceId) {
        console.log('[hotel-search] Falling back to 2-step /data/hotels?placeId -> /hotels/rates');
        const listResp = await fetch(`${BASE_URL}/data/hotels?placeId=${encodeURIComponent(resolvedPlaceId)}&limit=200`, { headers: HEADERS });
        if (listResp.ok) {
          const listJson = await listResp.json();
          const ids = (listJson.data || []).map((h: any) => h.id || h.hotelId).filter(Boolean).slice(0, 200);
          if (ids.length > 0) {
            const twoStepBody = { ...ratesBody, hotelIds: ids };
            delete twoStepBody.placeId;
            const r2 = await fetchRates(twoStepBody);
            if (r2.ok) {
              return streamRatesResponse(await r2.json(), cityOnly, countryCode, currency);
            }
          }
        }
      }

      // Fallback 2: cityName + countryCode
      if (resolvedPlaceId && cityOnly) {
        console.log('[hotel-search] Falling back to cityName+countryCode');
        const fallbackBody = { ...ratesBody, cityName: cityOnly, countryCode };
        delete fallbackBody.placeId;
        const fallbackResp = await fetchRates(fallbackBody);
        if (fallbackResp.ok) {
          return streamRatesResponse(await fallbackResp.json(), cityOnly, countryCode, currency);
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
    // If placeId returned 0 hotels, try cityName+countryCode fallback before giving up
    const dataCount = Array.isArray(ratesJson.data) ? ratesJson.data.length : (ratesJson.hotels?.length || 0);
    if (dataCount === 0 && resolvedPlaceId && cityOnly) {
      console.log('[hotel-search] 0 results for placeId, trying cityName+countryCode fallback');
      const fallbackBody = { ...ratesBody, cityName: cityOnly, countryCode };
      delete fallbackBody.placeId;
      const fallbackResp = await fetchRates(fallbackBody);
      if (fallbackResp.ok) {
        const fbJson = await fallbackResp.json();
        const fbCount = Array.isArray(fbJson.data) ? fbJson.data.length : (fbJson.hotels?.length || 0);
        recordSearchMetric({
          query_text: cityOnly,
          place_id: resolvedPlaceId,
          country_code: countryCode,
          strategy_used: 'cityName_fallback',
          hotel_count: fbCount,
          priced_count: fbCount,
          latency_ms: Date.now() - startTime,
        });
        return streamRatesResponse(fbJson, cityOnly, countryCode, currency);
      }
    }

    recordSearchMetric({
      query_text: cityOnly || hotelId || 'geo',
      place_id: resolvedPlaceId,
      country_code: countryCode,
      strategy_used: hotelId ? 'hotelId' : (resolvedPlaceId ? 'placeId' : 'cityName'),
      hotel_count: dataCount,
      priced_count: dataCount,
      latency_ms: Date.now() - startTime,
    });

    return streamRatesResponse(ratesJson, cityOnly, countryCode, currency);

  } catch (err: any) {
    console.error('[hotel-search] Fatal error:', err.message, err.stack);
    return new Response(JSON.stringify({ error: err.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});

// ─── Transform & Stream the /hotels/rates response ───────────────────────
function streamRatesResponse(
  ratesJson: any,
  cityOnly: string,
  countryCode: string,
  defaultCurrency: string = 'INR',
  metaInfo?: { offset: number; limit: number; total?: number; hasMore?: boolean }
): Response {
  // LiteAPI v3 /hotels/rates with includeHotelData=true returns TWO separate arrays:
  //   ratesJson.hotels -> metadata ({ id, name, main_photo, thumbnail, address, city_name, country_code, rating, stars, ... })
  //   ratesJson.data   -> rate offers ({ hotelId, roomTypes: [{ offerId, offerRetailRate, rates: [...] }] })
  const metaList: any[] = Array.isArray(ratesJson.hotels) ? ratesJson.hotels : [];
  const rateList: any[] = Array.isArray(ratesJson.data)
    ? ratesJson.data
    : (Array.isArray(ratesJson.data?.hotels) ? ratesJson.data.hotels : []);

  const metaById = new Map<string, any>();
  for (const h of metaList) {
    const id = h.id || h.hotelId;
    if (id) metaById.set(id, h);
  }

  const ratesById = new Map<string, any>();
  for (const d of rateList) {
    const id = d.hotelId || d.id;
    if (id) ratesById.set(id, d);
  }

  // Union of all hotel IDs (prefer rateList order, then any remaining metaList)
  const orderedIds: string[] = [];
  const seen = new Set<string>();
  for (const d of rateList) {
    const id = d.hotelId || d.id;
    if (id && !seen.has(id)) { seen.add(id); orderedIds.push(id); }
  }
  for (const h of metaList) {
    const id = h.id || h.hotelId;
    if (id && !seen.has(id)) { seen.add(id); orderedIds.push(id); }
  }

  console.log(`[hotel-search] /hotels/rates returned ${orderedIds.length} hotels (${rateList.length} with rates, ${metaList.length} with metadata)`);

  if (orderedIds.length === 0) {
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

  const finalHotels: any[] = [];
  const ratesForFrontend: any[] = [];

  for (const hotelId of orderedIds) {
    const rateEntry = ratesById.get(hotelId) || {};
    const meta = metaById.get(hotelId) || rateEntry.hotelData || rateEntry.hotel || {};
    const mainPhoto = getPhoto(meta) || getPhoto(rateEntry);

    const hotelObj = {
      id: hotelId,
      hotelId,
      name: meta.name || meta.hotelName || rateEntry.name || '',
      address: meta.address || meta.hotelAddress || rateEntry.address || '',
      city: meta.city_name || meta.city || meta.cityName || rateEntry.city || cityOnly,
      country: meta.country_code || meta.country || meta.countryCode || rateEntry.country || countryCode,
      stars: meta.stars ?? meta.starRating ?? rateEntry.stars ?? rateEntry.starRating ?? null,
      reviewScore: meta.rating ?? meta.reviewScore ?? meta.guestScore ?? rateEntry.reviewScore ?? null,
      reviewCount: meta.review_count ?? meta.reviewCount ?? null,
      main_photo: mainPhoto,
      thumbnail: meta.thumbnail || mainPhoto,
      latitude: meta.latitude ?? rateEntry.latitude ?? null,
      longitude: meta.longitude ?? rateEntry.longitude ?? null,
    };
    finalHotels.push(hotelObj);

    const roomTypes: any[] = rateEntry.roomTypes || [];
    if (roomTypes.length > 0) {
      // Find cheapest roomType offer
      let cheapestRt: any = null;
      let cheapestRateObj: any = null;
      let cheapestPrice = Infinity;

      for (const rt of roomTypes) {
        const firstRate = rt.rates?.[0];
        const rtPrice =
          rt.offerRetailRate?.amount ??
          firstRate?.retailRate?.total?.[0]?.amount ??
          firstRate?.finalRate ??
          Infinity;
        if (typeof rtPrice === 'number' && rtPrice < cheapestPrice) {
          cheapestPrice = rtPrice;
          cheapestRt = rt;
          cheapestRateObj = firstRate;
        }
      }

      if (cheapestRt && cheapestPrice < Infinity) {
        ratesForFrontend.push({
          hotelId,
          finalRate: cheapestPrice,
          initialRate:
            cheapestRt.offerInitialPrice?.amount ??
            cheapestRateObj?.retailRate?.initialPrice?.[0]?.amount ??
            cheapestRateObj?.initialRate ??
            null,
          currency:
            cheapestRt.offerRetailRate?.currency ||
            cheapestRateObj?.retailRate?.total?.[0]?.currency ||
            cheapestRateObj?.currency ||
            defaultCurrency,
          offerId: cheapestRt.offerId || cheapestRateObj?.offerId,
          roomName: cheapestRateObj?.name || cheapestRateObj?.roomName || '',
          boardType: cheapestRateObj?.boardType || null,
          boardName: cheapestRateObj?.boardName || null,
          promotions: cheapestRateObj?.promotions || [],
          perks: cheapestRateObj?.perks || [],
          roomTypes,
        });
      }
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
      controller.enqueue(enc.encode(sseChunk({
        meta: {
          offset: metaInfo?.offset ?? 0,
          limit: metaInfo?.limit ?? 200,
          total: metaInfo?.total ?? finalHotels.length,
          hasMore: metaInfo?.hasMore ?? finalHotels.length >= 100,
        }
      })));
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
