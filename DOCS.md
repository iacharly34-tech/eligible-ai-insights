# DOCS

## 2026-05-23 Railway 502 diagnostics

### Findings

- Target repository for this task: `iacharly34-tech/eligible-ai-insights`.
- The repository is a mixed codebase: Vite app at the root and LinkedIn bot under `linkedin-bot/`.
- The Railway service URL `https://eligible-ai-insights-production.up.railway.app` was returning `HTTP/2 502` with body `{"status":"error","code":502,"message":"Application failed to respond",...}` on both `GET /health` and `POST /run?mode=invite`.
- The FastAPI bot code itself imports cleanly and starts locally with the provided env vars; local startup reached `Uvicorn running on http://0.0.0.0:8000`.
- Before the fix, deployment config lived only in `linkedin-bot/railway.toml`, while Railway's default config discovery expects a `railway.toml` / `railway.json` in code unless a custom absolute path is configured in the service settings.
- Before the fix, the container command hardcoded port `8000` instead of consuming Railway's `PORT` environment variable.

### Changes applied

- Added root `railway.toml` so Railway can discover the deploy config from the repository root and still use `linkedin-bot/Dockerfile`.
- Deleted `linkedin-bot/railway.toml` to avoid split or conflicting Railway config sources.
- Updated `linkedin-bot/main.py` to parse `PORT` with fallback `8000` and start Uvicorn when invoked directly via `python main.py`.
- Updated `linkedin-bot/Dockerfile` to launch `python main.py` instead of a hardcoded `uvicorn ... --port 8000` command.
- Updated `docs/railway-deploy-guide.md` to document root-level Railway config and dynamic port handling.
- Applied `linkedin-bot/sql/create_linkedin_tables.sql` to the provided Neon database because `/run` was failing with `asyncpg.exceptions.UndefinedTableError: relation "linkedin_campaigns" does not exist`.

### Validation notes

- Local import validation: `python3 -m py_compile linkedin-bot/main.py linkedin-bot/linkedin_bot.py` passed.
- Local runtime validation after the fix uses the provided env vars and starts the HTTP server successfully.
- Local `GET /health` returned `200` with `{"status":"ok"}` while the app was bound to `PORT=8123`, confirming dynamic port binding works.
- Local `POST /run?mode=invite` with `Authorization: Bearer eligibly-railway-2025` returned `200` with `{"processed":0,"sent_today":0,"remaining_today":15,"results":[],"mode":"invite"}` after the DB schema was applied.
- Changes were committed and pushed to `main` as commit `1fc922e` (`Fix Railway LinkedIn bot startup`).
- One public verification attempt was made after the push:
  - `GET https://eligible-ai-insights-production.up.railway.app/health` still returned Railway edge fallback `HTTP/2 502`
  - `POST https://eligible-ai-insights-production.up.railway.app/run?mode=invite` with `Authorization: Bearer eligibly-railway-2025` also still returned `HTTP/2 502`
- Railway CLI was installable, but the worker environment is not authenticated to Railway (`Unauthorized. Please login with railway login`), so logs/variables/redeploy could not be executed directly from this sandbox.
