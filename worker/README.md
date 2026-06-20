# Vymova AI proxy (Cloudflare Worker)

Thin proxy that hides a Google Gemini API key from the client. The Vymova
frontend is a static site with no backend of its own — this Worker is the
only piece that needs your own deploy, and it's entirely optional: without
it, the AI tutor and voice roleplay features simply stay hidden.

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

To cap abuse of your shared Gemini quota, create a KV namespace and uncomment
the `[[kv_namespaces]]` block in `wrangler.toml`:

```sh
wrangler kv namespace create RATE_LIMIT
```

## 4. Point the frontend at it

Set `VITE_AI_PROXY_URL` to the Worker URL when building the app, e.g. in a
local `.env` file or as a GitHub Actions build variable:

```
VITE_AI_PROXY_URL=https://vymova-ai-proxy.<you>.workers.dev
```

Rebuild/redeploy the frontend — the "AI Tutor" sidebar entry appears
automatically once this is set (see `js/config.ts`).
