import { CostGuard } from '../../../security/cost-guard.ts';
import { globalCircuitBreaker } from '../../../utils/circuit-breaker.ts';
import { withRetry } from '../../../utils/retry.ts';
import { RawLogger } from '../../../logger/raw-logger.ts';
import { LITEAPI_BASE_URL, LITEAPI_KEY } from '../../../config/liteapi-config.ts';

const BASE_URL = LITEAPI_BASE_URL;

export class LiteApiClient {
  private readonly apiKey: string;

  constructor() {
    this.apiKey = LITEAPI_KEY;
    if (!this.apiKey) {
      throw new Error("Missing API Key in environment variables.");
    }
  }

  /**
   * Executes an API request to LiteAPI, passing through the Cost Guard, Retry, and Circuit Breaker.
   */
  async request<T>(
    endpoint: string,
    options: RequestInit & { query?: Record<string, string>; timeoutMs?: number } = {}
  ): Promise<T> {
    // 1. Cost Protection
    CostGuard.protect(endpoint, options);

    const url = new URL(`${BASE_URL}${endpoint}`);
    if (options.query) {
      Object.entries(options.query).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }

    const { timeoutMs = 30000, query: _q, ...restOptions } = options;

    // 2. Circuit Breaker + Retry Logic
    return await globalCircuitBreaker.execute(
      async () => {
        return await withRetry(async () => {
          const controller = new AbortController();
          const timer = setTimeout(() => controller.abort(), timeoutMs);

          const fetchOptions: RequestInit = {
            ...restOptions,
            signal: controller.signal,
            headers: {
              'Content-Type': 'application/json',
              'X-API-Key': this.apiKey,
              ...(restOptions.headers || {})
            }
          };

          let response: Response;
          try {
            response = await fetch(url.toString(), fetchOptions);
          } finally {
            clearTimeout(timer);
          }
          
          let data;
          try {
            data = await response.json();
          } catch (e) {
            data = null;
          }

          // 3. Raw Logging
          await RawLogger.log(
            endpoint, 
            { query: options.query, body: options.body }, 
            data, 
            response.status
          );

          if (!response.ok) {
            const retryAfter = response.headers.get('Retry-After');
            const err = new Error(
              data?.error?.message || data?.error?.description || `LiteAPI Error: ${response.statusText}`
            );
            (err as any).status = response.status;
            (err as any).data = data;
            (err as any).errorCode = data?.error?.code;
            if (retryAfter && !isNaN(Number(retryAfter))) {
              (err as any).retryAfterMs = Number(retryAfter) * 1000;
            }
            throw err;
          }

          // LiteAPI can return error.code (e.g. 2001, 4290, 4291) inside an HTTP 200 payload
          if (data?.error?.code && [4290, 4291, 4016].includes(data.error.code)) {
            const err = new Error(data.error.message || `LiteAPI Error ${data.error.code}`);
            (err as any).status = data.error.code === 4016 ? 408 : 429;
            (err as any).errorCode = data.error.code;
            (err as any).data = data;
            throw err;
          }

          return data as T;
        });
      },
      async () => {
        throw new Error("[CIRCUIT BREAKER] Service is currently unavailable. Please try again later.");
      }
    );
  }
}

export const liteApiClient = new LiteApiClient();
