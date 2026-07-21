/**
 * Generates a consistent hash for a request fingerprint to use as a cache key.
 */
export async function generateFingerprint(params: Record<string, any>): Promise<string> {
  // Sort keys to ensure consistent hashing regardless of object property order
  const sortedKeys = Object.keys(params).sort();
  const sortedParams: Record<string, any> = {};
  
  for (const key of sortedKeys) {
    sortedParams[key] = params[key];
  }

  const message = JSON.stringify(sortedParams);
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  
  // Use Web Crypto API available in Deno
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
  return hashHex;
}
