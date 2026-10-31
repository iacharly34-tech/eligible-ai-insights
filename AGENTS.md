
- Pipeline leads arrive via POST /api/public/pipeline/leads (Bearer PIPELINE_INGEST_KEY); upsert by siren never changes cabinet_id — contract lead v1 is the source of truth.
- Lead attribution is done in SQL (assign_lead_cabinet, round-robin on cabinet_zones.last_assigned_at) — atomic under concurrent batches.
- Cabinet isolation relies on RLS via user_cabinet_id(); private pages live under _authenticated/ (ssr false).

- Public content routes must call getContentRouteHead in their leaf head(); ROUTE_META is the shared source, root keeps sitewide defaults only, and SEOHead must not mutate the DOM — this keeps crawler HTML and client navigation metadata consistent.
- AI visibility audits use an authenticated streaming server route and gateway-hosted domain-filtered search, never a direct fetch of arbitrary user URLs; this avoids application SSRF and separates qualitative content readiness from measured assistant citations.
- AI visibility operational guards persist rate limits and terminal gateway pauses in a service-only table; this prevents account reloads or Worker restarts from replaying blocked paid requests. Resume a paused gateway only after access is restored and explicit owner action.
- Client economic value calculations live in a browser-safe pure module with numeric tests; keep recurring fees, contribution margin and acquisition cost distinct to avoid presenting revenue as profit.

- Generate the full AI index alongside the sitemap in predev and prebuild from shared route metadata so new content remains discoverable without manual regeneration.
