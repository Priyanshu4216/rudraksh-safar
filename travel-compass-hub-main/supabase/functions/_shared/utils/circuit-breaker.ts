import { createClient } from 'jsr:@supabase/supabase-js@2';

export class CircuitBreaker {
  private failureCount: number = 0;
  private readonly failureThreshold: number;
  private state: 'CLOSED' | 'OPEN' | 'HALF_OPEN' = 'CLOSED';
  private nextAttempt: number = 0;
  private readonly resetTimeoutMs: number;
  private readonly serviceName: string;
  private supabase: any = null;

  constructor(failureThreshold: number = 5, resetTimeoutMs: number = 60000, serviceName: string = 'liteapi') {
    this.failureThreshold = failureThreshold;
    this.resetTimeoutMs = resetTimeoutMs;
    this.serviceName = serviceName;

    const url = Deno.env.get('SUPABASE_URL');
    const key = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    if (url && key) {
      this.supabase = createClient(url, key);
    }
  }

  private async syncFromDb(): Promise<void> {
    if (!this.supabase) return;
    try {
      const { data } = await this.supabase
        .from('circuit_breaker_state')
        .select('state, failure_count, next_attempt_at')
        .eq('service_name', this.serviceName)
        .single();
      if (data) {
        this.state = data.state;
        this.failureCount = data.failure_count || 0;
        this.nextAttempt = data.next_attempt_at ? new Date(data.next_attempt_at).getTime() : 0;
      }
    } catch {
      // Non-blocking fallback to in-memory state
    }
  }

  private async persistToDb(): Promise<void> {
    if (!this.supabase) return;
    try {
      await this.supabase.from('circuit_breaker_state').upsert({
        service_name: this.serviceName,
        state: this.state,
        failure_count: this.failureCount,
        next_attempt_at: this.nextAttempt > 0 ? new Date(this.nextAttempt).toISOString() : null,
        updated_at: new Date().toISOString(),
      });
    } catch {
      // Non-blocking
    }
  }

  public async execute<T>(action: () => Promise<T>, fallback: () => Promise<T>): Promise<T> {
    await this.syncFromDb();

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
      await this.onSuccess();
      return result;
    } catch (error) {
      await this.onFailure();
      return fallback();
    }
  }

  private async onSuccess() {
    if (this.failureCount !== 0 || this.state !== 'CLOSED') {
      this.failureCount = 0;
      this.state = 'CLOSED';
      this.nextAttempt = 0;
      await this.persistToDb();
    }
  }

  private async onFailure() {
    this.failureCount++;
    if (this.failureCount >= this.failureThreshold) {
      this.state = 'OPEN';
      this.nextAttempt = Date.now() + this.resetTimeoutMs;
      console.warn(`[CIRCUIT BREAKER] Circuit opened for ${this.resetTimeoutMs}ms due to ${this.failureCount} consecutive failures.`);
    }
    await this.persistToDb();
  }
}

// Global instance for the Edge Function execution environment
export const globalCircuitBreaker = new CircuitBreaker();
