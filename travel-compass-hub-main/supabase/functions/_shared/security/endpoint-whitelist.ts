export const FREE_ENDPOINTS = [
  '/data/hotels',
  '/data/hotel',
  '/data/hotel/facilities',
  '/data/hotel/images',
  '/data/hotel/rooms',
  '/data/hotels/room-search',
  '/data/countries',
  '/data/cities',
  '/data/hotelTypes',
  '/data/chains',
  '/data/weather',
  // V2 endpoints
  '/rates',
  '/prebook',
  '/book',
  '/booking',
  '/booking/cancel',
  // V3 endpoints
  '/hotels/rates',
  '/rates/prebook',
  '/rates/book',
  '/rates/prebook/alternative-prebooks',
  '/rates/prebook/rebook',
  '/bookings',
  '/bookings/cancel',
  '/bookings/amend-guest',
  '/data/currencies'
];

export const PAID_ENDPOINTS = [
  '/pricing',
  '/prices',
  '/places',
  '/ai-insights',
  '/logs',
  '/analytics'
];

/**
 * Validates if the requested endpoint is allowed (free).
 * Throws an error if the endpoint is not explicitly in the free list or matches any paid signature.
 */
export function validateEndpoint(endpoint: string): void {
  // 1. Explicit deny-list check first
  const isPaid = PAID_ENDPOINTS.some(paid => endpoint.includes(paid));
  if (isPaid) {
    throw new Error(`[COST GUARD] Access Denied: Endpoint ${endpoint} is explicitly marked as a PAID feature.`);
  }

  // 2. Strict whitelist check
  const isFree = FREE_ENDPOINTS.some(free => endpoint.startsWith(free));
  if (!isFree) {
    throw new Error(`[COST GUARD] Access Denied: Endpoint ${endpoint} is not in the FREE whitelist.`);
  }
}
