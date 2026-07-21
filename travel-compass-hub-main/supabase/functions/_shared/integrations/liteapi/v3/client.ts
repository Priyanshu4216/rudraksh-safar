import { CostGuard } from '../../../security/cost-guard.ts';
import { globalCircuitBreaker } from '../../../utils/circuit-breaker.ts';
import { withRetry } from '../../../utils/retry.ts';
import { RawLogger } from '../../../logger/raw-logger.ts';

const BASE_URL = 'https://api.liteapi.travel/v3.0';

export class LiteApiClient {
  private readonly apiKey: string;

  constructor() {
    // API key comes securely from Supabase Environment Secrets
    // NOTE: 'NUITEE_APT_KEY' is the actual secret name in Supabase (typo preserved for compatibility)
    this.apiKey = Deno.env.get('NUITEE_API_KEY') || Deno.env.get('NUITEE_APT_KEY') || Deno.env.get('LITEAPI_KEY') || 'sand_c0155ab8-c683-4f26-8f94-b5e92c5797b9';
    if (!this.apiKey) {
      throw new Error("Missing API Key in environment variables.");
    }
  }

  /**
   * Executes an API request to LiteAPI, passing through the Cost Guard, Retry, and Circuit Breaker.
   */
  async request<T>(endpoint: string, options: RequestInit & { query?: Record<string, string> } = {}): Promise<T> {
    // 1. Cost Protection
    CostGuard.protect(endpoint, options);

    const url = new URL(`${BASE_URL}${endpoint}`);
    if (options.query) {
      Object.entries(options.query).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }

    const fetchOptions: RequestInit = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': this.apiKey,
        ...(options.headers || {})
      }
    };

    // 2. Circuit Breaker + Retry Logic
    return await globalCircuitBreaker.execute(
      async () => {
        return await withRetry(async () => {
          const response = await fetch(url.toString(), fetchOptions);
          
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
            const err = new Error(`LiteAPI Error: ${response.statusText}`);
            (err as any).status = response.status;
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
