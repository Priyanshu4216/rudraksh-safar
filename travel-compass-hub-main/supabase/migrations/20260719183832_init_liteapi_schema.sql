-- Booking States Enum
CREATE TYPE booking_state AS ENUM (
  'SEARCHED',
  'ROOM_SELECTED',
  'RATE_CONFIRMED',
  'PREBOOKED',
  'PAYMENT_PENDING',
  'PAYMENT_SUCCESS',
  'BOOKING_IN_PROGRESS',
  'BOOKED',
  'FAILED',
  'CANCELLED',
  'REFUNDED'
);

-- 1. Cache Tables
-- Hotel Search Cache (TTL 10-15 mins)
CREATE TABLE hotel_search_cache (
  hash_key TEXT PRIMARY KEY,
  request_payload JSONB NOT NULL,
  response_data JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ NOT NULL
);

-- Basic Hotels Cache
CREATE TABLE hotels_cache (
  hotel_id VARCHAR(50) PRIMARY KEY,
  supplier VARCHAR(50) DEFAULT 'liteapi',
  data JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Hotel Content Cache (TTL 24 hours)
CREATE TABLE hotel_content_cache (
  hotel_id VARCHAR(50) PRIMARY KEY,
  supplier VARCHAR(50) DEFAULT 'liteapi',
  content JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ NOT NULL
);

-- Hotel Images Cache (TTL 7 Days)
CREATE TABLE hotel_images (
  hotel_id VARCHAR(50) PRIMARY KEY,
  supplier VARCHAR(50) DEFAULT 'liteapi',
  images JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ NOT NULL
);

-- Hotel Rates Cache (Short TTL 2-5 mins max)
CREATE TABLE hotel_rates (
  hash_key TEXT PRIMARY KEY,
  hotel_id VARCHAR(50) NOT NULL,
  supplier VARCHAR(50) DEFAULT 'liteapi',
  rates JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ NOT NULL
);

-- 2. Bookings & State Machine
CREATE TABLE hotel_bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID, -- References auth.users later
  hotel_id VARCHAR(50) NOT NULL,
  supplier VARCHAR(50) DEFAULT 'liteapi',
  status booking_state DEFAULT 'SEARCHED',
  idempotency_key VARCHAR(255) UNIQUE,
  prebook_ref VARCHAR(255),
  booking_ref VARCHAR(255),
  supplier_booking_id VARCHAR(255),
  total_price DECIMAL(10, 2),
  currency VARCHAR(3),
  checkin DATE,
  checkout DATE,
  guest_info JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Booking History for tracing State Machine
CREATE TABLE booking_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  booking_id UUID REFERENCES hotel_bookings(id) ON DELETE CASCADE,
  previous_status booking_state,
  new_status booking_state NOT NULL,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Analytics / Raw Logs (Replaces Paid Advanced Logs)
CREATE TABLE liteapi_raw_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  endpoint VARCHAR(255) NOT NULL,
  request_payload JSONB,
  response_payload JSONB,
  status_code INT,
  booking_id UUID REFERENCES hotel_bookings(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Triggers & Functions
-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_hotel_bookings_modtime
BEFORE UPDATE ON hotel_bookings
FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_hotels_cache_modtime
BEFORE UPDATE ON hotels_cache
FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- Indexes for performance
CREATE INDEX idx_hotel_search_cache_expires ON hotel_search_cache(expires_at);
CREATE INDEX idx_hotel_content_cache_expires ON hotel_content_cache(expires_at);
CREATE INDEX idx_hotel_images_expires ON hotel_images(expires_at);
CREATE INDEX idx_hotel_rates_expires ON hotel_rates(expires_at);
CREATE INDEX idx_hotel_bookings_status ON hotel_bookings(status);
CREATE INDEX idx_hotel_bookings_user ON hotel_bookings(user_id);
CREATE INDEX idx_liteapi_logs_endpoint ON liteapi_raw_logs(endpoint);
