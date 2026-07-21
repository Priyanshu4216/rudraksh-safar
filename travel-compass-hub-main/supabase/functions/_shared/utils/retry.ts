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
      
      // Do not retry 4xx errors (except 429)
      if (error?.status && error.status >= 400 && error.status < 500 && error.status !== 429) {
        throw error;
      }

      if (attempt >= maxRetries) {
        throw error;
      }

      const delay = baseDelayMs * Math.pow(2, attempt - 1);
      console.log(`[RETRY] Attempt ${attempt} failed. Retrying in ${delay}ms...`);
      
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  throw new Error("Retry failed");
}
