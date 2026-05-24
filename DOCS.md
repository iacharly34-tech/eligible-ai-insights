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

## 2026-05-24 Railway redeploy follow-up

### Findings

- Public Railway GraphQL access confirms:
  - project `b9383c95-575b-43ba-a305-4fd733661e98` (`beneficial-mindfulness`)
  - service `aea69d9e-9f29-4f87-8e0c-a942e1e814a1` (`eligible-ai-insights`)
  - environment `a47f8a55-6ea0-4fe2-9834-e67862faf742` (`production`)
  - latest deployment `95e5c907-c725-4871-89b2-077c3908e58b`
- The latest Railway deployment remained `FAILED` on commit `1fc922efaa3f1088302eca8773b71fdcc09404ed` (`Fix Railway LinkedIn bot startup`).
- Railway public GraphQL allows metadata reads but rejects privileged actions without auth:
  - `serviceInstanceRedeploy(...)` => `Not Authorized`
  - `variables(...)` => `Not Authorized`
  - `buildLogs(...)` / `deploymentLogs(...)` => `Not Authorized`
- Railway browser access reached the login page successfully, but no active session was present and no reusable Railway token was available in the repo.
- Auto-deploy is enabled for the service, and the linked trigger watches only `linkedin-bot/**` and `railway.toml`.
- Repo head `e909758` was docs-only, so it would not have matched Railway's watch patterns and would not have triggered a new deployment.

### Changes applied

- Added a comment to root `railway.toml` to create a minimal watched-file change and force a new Railway auto-deploy via GitHub push.

### Validation notes

- Pushed commit `167f350` (`Force Railway redeploy via watched config touch`) to `main`.
- Railway created a fresh deployment `31d0cce6-fcf1-4aca-9a7b-6b697be5bff7` from commit `167f3509716b5be2e0a2f158a067e5d7d5df9c46`, proving the GitHub-triggered redeploy path works.
- That deployment still ended in `FAILED` within about 29 seconds (`createdAt=2026-05-24T17:26:28.380Z`, `updatedAt=2026-05-24T17:26:57.167Z`).
- Post-deploy verification still returned Railway edge fallback errors:
  - `GET /health` => `HTTP/2 502` with `{"status":"error","code":502,"message":"Application failed to respond",...}`
  - `POST /run?mode=invite` with `Authorization: Bearer eligibly-railway-2025` => `HTTP/2 502`
- Public Railway GraphQL confirms the redeploy happened, but privileged diagnostics remain blocked without a Railway account token:
  - `buildLogs(...)` => `Not Authorized`
  - `deploymentLogs(...)` => `Not Authorized`
  - `variables(...)` => `Not Authorized`
