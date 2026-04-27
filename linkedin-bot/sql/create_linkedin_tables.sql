CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS linkedin_campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  linkedin_url TEXT NOT NULL UNIQUE,
  firstname TEXT,
  lastname TEXT,
  company TEXT,
  title TEXT,
  sector TEXT,
  city TEXT,
  step TEXT DEFAULT 'invitation_pending',
  invitation_sent_at TIMESTAMP,
  connected_at TIMESTAMP,
  message1_sent_at TIMESTAMP,
  message2_sent_at TIMESTAMP,
  reply_received BOOLEAN DEFAULT FALSE,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS linkedin_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  prospect_id UUID REFERENCES linkedin_campaigns(id),
  action TEXT,
  status TEXT,
  error TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_linkedin_step
  ON linkedin_campaigns(step);
