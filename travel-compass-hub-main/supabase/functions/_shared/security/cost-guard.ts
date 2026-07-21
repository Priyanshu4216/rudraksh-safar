import { validateEndpoint } from './endpoint-whitelist.ts';

export class CostGuard {
  /**
   * Evaluates an outgoing request to LiteAPI before it is executed.
   * Ensures the endpoint is completely free and stops execution if it violates our cost principles.
   */
  static protect(endpoint: string, options?: any): void {
    // 1. Ensure the endpoint is strictly whitelisted
    validateEndpoint(endpoint);

    // 2. Check for paid AI insight parameters or analytics flags in query/body
    if (options && options.query) {
      if (options.query.ai === 'true' || options.query.insights === 'true') {
         throw new Error('[COST GUARD] Access Denied: AI Insights parameters detected.');
      }
    }
    
    // Cost Guard Passed
  }
}
