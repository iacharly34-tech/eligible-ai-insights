# DOCS

## 2026-05-25 SEO + waitlist success

### Findings

- Target repository for this task: `iacharly34-tech/eligible-ai-insights`.
- The marketing site is a Vite + React Router SPA at the repo root, not a Next.js app.
- The requested Vercel preview URL redirects to a protected Vercel login page, so it could not be used as a public inspection surface from this worker sandbox.
- Public domain `https://eligibly.ai` is reachable and currently serves static homepage metadata from `index.html`; route-level metadata is applied client-side by `src/components/SEOHead.tsx`.
- The visible acquisition flow on the homepage routes users to `/demo`, and the demo form is the practical waitlist/early-access capture flow in the current codebase.

### Changes applied

- Updated homepage static metadata in `index.html` to the requested title, description, Open Graph values, Twitter card values, and canonical URL for `https://eligibly.ai`.
- Added a new OG image source at `public/og-image.svg` and generated `public/og-image.png` (1200x630) using the project’s existing purple/blue visual language.
- Updated `src/components/SEOHead.tsx` so SPA route changes now imperatively sync `document.title`, canonical, Open Graph, Twitter tags, and hreflang links in the real `<head>`.
- Updated homepage fallback SEO constants in `src/utils/seo.ts` to match the new requested copy.
- Added `src/pages/WaitlistSuccess.tsx` and wired routes for `/waitlist/success` and `/en/waitlist/success`.
- Updated `src/pages/Demo.tsx` so successful form submission now shows the existing toast and redirects to the new waitlist success page instead of keeping users on an inline success state.

### Validation notes

- `npm install` completed successfully in the target repo.
- `npm run build` passed successfully after the changes.
- Changes were committed and pushed to `main` as commit `bd5c7f6` (`Add SEO metadata and waitlist success page`).
- Local browser QA against `vite preview` confirmed:
  - homepage title is `Eligibly — Copilote IA des marchés publics`
  - `/waitlist/success` renders the new confirmation page with the expected message and return-home CTA
  - form submission on `/demo` redirects to `/waitlist/success` when the form is submitted programmatically via `requestSubmit()`, and the success toast remains visible after navigation
- Local HTTP verification confirmed `http://127.0.0.1:4173/og-image.png` is served correctly.
- One public post-push verification pass was made after a 90-second wait:
  - `https://eligibly.ai` was still serving the previous homepage metadata
  - `https://eligibly.ai/waitlist/success` still returned the existing 404 page
- Public deployment propagation or Vercel project linkage is therefore still pending from the public domain at the time of verification; no retry was performed.

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

## 2026-05-26 Railway FAILED follow-up

### Findings

- The target repo remains `iacharly34-tech/eligible-ai-insights`; the working clone is `/home/worker/workspace/eligible-ai-insights`.
- Browser access to `railway.com` works after `agent-browser install`, but Railway still requires an interactive GitHub web login.
- Following `Continue with GitHub` lands on the GitHub login form, and no reusable authenticated GitHub browser session was present in the worker sandbox.
- The provided GitHub PAT is usable for git operations, but it is not a reliable substitute for GitHub web-login/OAuth in the browser flow.
- Public Railway GraphQL metadata gives one key missing clue without auth:
  - deployment `31d0cce6-fcf1-4aca-9a7b-6b697be5bff7` is `FAILED`
  - `configFile` is `/railway.toml`
  - `rootDirectory` is `null`
  - `builder` is `DOCKERFILE`
  - `dockerfilePath` is `linkedin-bot/Dockerfile`
  - `instances` is `[]`
- Railway had one earlier successful deployment on commit `76fee33`, but it used `RAILPACK` with detected provider `node`, meaning Railway previously deployed the Vite site at repo root rather than the LinkedIn bot.
- The failed bot deployments started only after switching the service to Dockerfile mode, which strongly suggests the failure happens during image build or before any runtime instance becomes healthy.
- Public health endpoint is still failing:
  - `GET https://eligible-ai-insights-production.up.railway.app/health` => `HTTP/2 502`
  - body: `{\"status\":\"error\",\"code\":502,\"message\":\"Application failed to respond\",...}`

### Changes applied

- Replaced `linkedin-bot/Dockerfile` base image from `python:3.11-slim` to `mcr.microsoft.com/playwright/python:v1.53.0-noble`.
- Removed the manual `playwright install --with-deps chromium` step from the Dockerfile because the official Playwright image already ships the browser stack.
- Added a root `.dockerignore` so the Railway Docker build context only includes `linkedin-bot/**` plus `railway.toml`.
- Updated `docs/railway-deploy-guide.md` to document the official Playwright base image and root-level `.dockerignore` expectation for this service.

### Validation notes

- `python3 -m py_compile linkedin-bot/main.py linkedin-bot/linkedin_bot.py` passed.
- Local dependency installation in this worker sandbox was blocked by a host-level Python packaging issue:
  - `PermissionError: [Errno 13] Permission denied: '/root'`
- That pip failure happened before touching project code or requirements resolution and appears specific to the sandbox environment, not the repository changes.
