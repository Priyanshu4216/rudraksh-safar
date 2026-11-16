// Safety, Rate Limiting, and Input Sanitization for AI Trip Planner

export interface RateLimitResult {
    allowed: boolean;
    remaining: number;
    resetInSeconds: number;
    errorMessage?: string;
}

const STORAGE_KEY = 'rs_ai_planner_rate_limit';
const MAX_REQUESTS_PER_WINDOW = 5; // Max 5 itinerary generations
const WINDOW_DURATION_MS = 10 * 60 * 1000; // 10 minutes window
const MIN_COOLDOWN_MS = 10 * 1000; // 10 seconds minimum cooldown between consecutive requests

export class AiRateLimiter {
    private static getTimestamps(): number[] {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return [];
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) {
                const now = Date.now();
                // Filter out timestamps older than the window
                return parsed.filter((ts: number) => typeof ts === 'number' && now - ts < WINDOW_DURATION_MS);
            }
            return [];
        } catch {
            return [];
        }
    }

    private static saveTimestamps(timestamps: number[]): void {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(timestamps));
        } catch {
            // LocalStorage might be disabled or full
        }
    }

    public static checkLimit(): RateLimitResult {
        const now = Date.now();
        const timestamps = this.getTimestamps();

        // 1. Check minimum consecutive cooldown
        if (timestamps.length > 0) {
            const lastRequest = timestamps[timestamps.length - 1];
            const elapsedSinceLast = now - lastRequest;
            if (elapsedSinceLast < MIN_COOLDOWN_MS) {
                const waitSeconds = Math.ceil((MIN_COOLDOWN_MS - elapsedSinceLast) / 1000);
                return {
                    allowed: false,
                    remaining: Math.max(0, MAX_REQUESTS_PER_WINDOW - timestamps.length),
                    resetInSeconds: waitSeconds,
                    errorMessage: `Please wait ${waitSeconds}s before generating another itinerary.`
                };
            }
        }

        // 2. Check window quota
        if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
            const oldestInWindow = timestamps[0];
            const resetInSeconds = Math.ceil((WINDOW_DURATION_MS - (now - oldestInWindow)) / 1000);
            return {
                allowed: false,
                remaining: 0,
                resetInSeconds: Math.max(1, resetInSeconds),
                errorMessage: `Rate limit reached (max ${MAX_REQUESTS_PER_WINDOW} plans per 10 mins). Please wait ${resetInSeconds}s or connect directly on WhatsApp.`
            };
        }

        return {
            allowed: true,
            remaining: MAX_REQUESTS_PER_WINDOW - timestamps.length,
            resetInSeconds: 0
        };
    }

    public static recordRequest(): void {
        const now = Date.now();
        const timestamps = this.getTimestamps();
        timestamps.push(now);
        this.saveTimestamps(timestamps);
    }
}

/**
 * Sanitizes user inputs to prevent Prompt Injection and XSS attacks.
 */
export function sanitizeInput(input: string, maxLength: number = 80): string {
    if (!input || typeof input !== 'string') return '';

    let clean = input
        // Remove HTML tags
        .replace(/<[^>]*>/g, '')
        // Remove common prompt injection keywords & delimiters
        .replace(/(ignore previous instructions|forget all rules|system prompt|system:|assistant:|user:|\[INST\]|\[\/INST\]|```|<script>)/gi, '')
        // Keep only safe characters (alphanumeric, spaces, commas, periods, hyphens, parentheses, ampersands)
        .replace(/[^a-zA-Z0-9\s,.\-&()'/]/g, '')
        .trim();

    if (clean.length > maxLength) {
        clean = clean.substring(0, maxLength).trim();
    }

    return clean;
}

/**
 * Clamps numeric inputs safely
 */
export function clampNumber(val: number, min: number, max: number, defaultVal: number): number {
    const num = Number(val);
    if (isNaN(num)) return defaultVal;
    return Math.max(min, Math.min(max, Math.floor(num)));
}

/**
 * Masks an API key for safe debugging without leaking secrets
 */
export function maskKey(key?: string | null): string {
    if (!key) return '(not configured)';
    if (key.length <= 8) return '***';
    return `${key.slice(0, 4)}...${key.slice(-4)}`;
}
