
- Pipeline leads arrive via POST /api/public/pipeline/leads (Bearer PIPELINE_INGEST_KEY); upsert by siren never changes cabinet_id — contract lead v1 is the source of truth.
- Lead attribution is done in SQL (assign_lead_cabinet, round-robin on cabinet_zones.last_assigned_at) — atomic under concurrent batches.
- Cabinet isolation relies on RLS via user_cabinet_id(); private pages live under _authenticated/ (ssr false).
