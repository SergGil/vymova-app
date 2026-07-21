# Vymova AI proxy (Cloudflare Worker)

Thin proxy that hides a Google Gemini API key from the client. The Vymova
frontend is a static site with no backend of its own — this Worker is the
only piece that needs your own deploy, and it's entirely optional: without
it, the AI tutor, voice roleplay, and AI-generated stories ("Історії" /
Reading+) features simply stay hidden (or, for stories, fall back to the
built-in offline texts).

If you already have this Worker deployed and are pulling an update to
`src/index.ts`, either run `wrangler deploy` again yourself or set up the
GitHub Actions auto-deploy below (section 5) so future pushes redeploy it
for you.

## 1. Get a free Gemini API key

Go to https://aistudio.google.com/apikey and create a key. Gemini's free
tier (as of writing: ~15 requests/minute, 1500/day on `gemini-2.5-flash`)
needs no credit card and is enough for personal/hobby use.

## 2. Deploy the Worker

```sh
cd worker
npm install -g wrangler   # if you don't have it
wrangler login
wrangler secret put GEMINI_API_KEY     # paste your key when prompted
```

Edit `wrangler.toml`: set `ALLOWED_ORIGIN` to your deployed app's origin
(e.g. `https://<your-username>.github.io`), so the Worker only answers
requests from your own site.

```sh
wrangler deploy
```

Wrangler prints the deployed URL, e.g. `https://vymova-ai-proxy.<you>.workers.dev`.

## 3. (Optional) Rate limiting

To cap abuse of your shared Gemini quota, uncomment the `[[ratelimits]]`
block in `wrangler.toml` and redeploy. No provisioning step needed —
Cloudflare's Rate Limiting binding doesn't need a `wrangler ... create`
command the way KV/D1/R2 do; `namespace_id` is just a number you pick
yourself (has to be unique within your account, that's it).

Without this, the Worker still enforces the same per-minute cap using an
in-memory counter local to whichever isolate handles the request — a real
limit, just not a durable/cross-isolate one (a burst spread across isolates,
or one that lands on a freshly-spun-up isolate, resets the count). The
binding gives you the stronger, shared version; this is the fallback so
requests are never fully unthrottled.

The frontend also sends an `X-Client-Id` header (a random ID generated once
per browser, `js/core/worker-client-id.ts`) — the Worker checks it as a
second, independent rate-limit bucket alongside the per-IP one, so one heavy
user behind a shared/NAT'd IP (an office, a university) gets throttled on
their own usage instead of exhausting the limit for everyone on that IP.
It's not an auth/security mechanism — nothing stops a client from omitting
or regenerating it — the per-IP limit above is still what actually bounds
abuse.

## 4. Point the frontend at it

Set `VITE_AI_PROXY_URL` to the Worker URL when building the app, e.g. in a
local `.env` file or as a GitHub Actions build variable:

```
VITE_AI_PROXY_URL=https://vymova-ai-proxy.<you>.workers.dev
```

Rebuild/redeploy the frontend — the "AI Tutor" sidebar entry appears
automatically once this is set (see `js/config.ts`).

## 5. (Optional) Automatic deploys via GitHub Actions

`.github/workflows/deploy-worker.yml` redeploys the Worker automatically on
every push to `main` that touches `worker/**` (or via manual "Run workflow"
in the Actions tab). It needs two repo secrets — GitHub repo → Settings →
Secrets and variables → Actions → New repository secret:

- `CLOUDFLARE_API_TOKEN` — create one at
  https://dash.cloudflare.com/profile/api-tokens using the "Edit Cloudflare
  Workers" template (scoped to this account).
- `CLOUDFLARE_ACCOUNT_ID` — found on the right sidebar of any page in the
  Cloudflare dashboard, or via `wrangler whoami`.

Without these secrets the workflow fails (visible in the Actions tab) but
nothing else breaks — manual `wrangler deploy` from step 2 always still
works as a fallback.
