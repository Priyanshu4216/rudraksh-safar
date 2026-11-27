-- Elite Hotel Infrastructure Tables (PlaceId Cache, Persistent Circuit Breaker, Search Metrics)

-- 1. PlaceId Cache (TTL 7 days)
CREATE TABLE IF NOT EXISTS place_id_cache (
  query_key TEXT PRIMARY KEY,
  place_id TEXT NOT NULL,
  display_name TEXT,
  country_code VARCHAR(4),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_place_id_cache_expires ON place_id_cache (expires_at);

-- 2. Persistent Circuit Breaker State (survives serverless cold starts)
CREATE TABLE IF NOT EXISTS circuit_breaker_state (
  service_name TEXT PRIMARY KEY,
  state TEXT NOT NULL DEFAULT 'CLOSED', -- CLOSED | OPEN | HALF_OPEN
  failure_count INTEGER NOT NULL DEFAULT 0,
  next_attempt_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Hotel Search Metrics (observability for 0-result rate, latency, strategy)
CREATE TABLE IF NOT EXISTS hotel_search_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  query_text TEXT,
  place_id TEXT,
  country_code VARCHAR(4),
  strategy_used TEXT,
  hotel_count INTEGER NOT NULL DEFAULT 0,
  priced_count INTEGER NOT NULL DEFAULT 0,
  latency_ms INTEGER,
  error_message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_hotel_search_metrics_created ON hotel_search_metrics (created_at DESC);
