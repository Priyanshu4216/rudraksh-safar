export class CircuitBreaker {
  private failureCount: number = 0;
  private readonly failureThreshold: number;
  private state: 'CLOSED' | 'OPEN' | 'HALF_OPEN' = 'CLOSED';
  private nextAttempt: number = 0;
  private readonly resetTimeoutMs: number;

  constructor(failureThreshold: number = 5, resetTimeoutMs: number = 60000) {
    this.failureThreshold = failureThreshold;
    this.resetTimeoutMs = resetTimeoutMs;
  }

  public async execute<T>(action: () => Promise<T>, fallback: () => Promise<T>): Promise<T> {
    if (this.state === 'OPEN') {
      if (Date.now() > this.nextAttempt) {
        this.state = 'HALF_OPEN';
      } else {
        // Circuit is open, immediately fallback
        return fallback();
      }
    }

    try {
      const result = await action();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      // Throw if half-open fails, or if we want to fallback? We should probably fallback
      return fallback();
    }
  }

  private onSuccess() {
    this.failureCount = 0;
    this.state = 'CLOSED';
  }

  private onFailure() {
    this.failureCount++;
    if (this.failureCount >= this.failureThreshold) {
      this.state = 'OPEN';
      this.nextAttempt = Date.now() + this.resetTimeoutMs;
      console.warn(`[CIRCUIT BREAKER] Circuit opened for ${this.resetTimeoutMs}ms due to ${this.failureCount} consecutive failures.`);
    }
  }
}

// Global instance for the Edge Function execution environment
export const globalCircuitBreaker = new CircuitBreaker();
