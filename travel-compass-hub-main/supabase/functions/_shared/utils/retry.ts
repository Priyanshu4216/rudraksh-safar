/**
 * Retries an async function with exponential backoff.
 */
export async function withRetry<T>(
  action: () => Promise<T>,
  maxRetries: number = 3,
  baseDelayMs: number = 1000
): Promise<T> {
  let attempt = 0;

  while (attempt < maxRetries) {
    try {
      return await action();
    } catch (error: any) {
      attempt++;
      
      // Do not retry 4xx errors (except 429 rate-limit)
      if (error?.status && error.status >= 400 && error.status < 500 && error.status !== 429) {
        throw error;
      }

      // Do not retry LiteAPI business/validation error codes (e.g., 2001 sold out, 4000-4002 bad request)
      if (error?.errorCode && [2001, 4000, 4001, 4002, 40302, 45035].includes(error.errorCode)) {
        throw error;
      }

      if (attempt >= maxRetries) {
        throw error;
      }

      const jitter = Math.floor(Math.random() * 250);
      const delay = error?.retryAfterMs
        ? Math.min(error.retryAfterMs + jitter, 10000)
        : baseDelayMs * Math.pow(2, attempt - 1) + jitter;
      console.log(`[RETRY] Attempt ${attempt} failed. Retrying in ${delay}ms...`);
      
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  throw new Error("Retry failed");
}
