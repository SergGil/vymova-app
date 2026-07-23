// Vymova AI proxy — Cloudflare Worker
// Hides the Gemini API key from the client. Forwards chat turns to Gemini's
// generateContent endpoint with a server-side system prompt (tutor or
// roleplay persona) the client cannot override.
// Not pulled from @cloudflare/workers-types (not a dependency here — see
// KVNamespace below, which is only ever type-checked by wrangler's own
// esbuild-based transpile, not this repo's tsc) — just the one method this
// file actually calls.
import { LANG_NAMES, VALID_LANGS } from './lang-data.ts';
import { ROLEPLAY_SCENARIOS } from './roleplay-scenarios.ts';

interface RateLimiterBinding {
  limit(opts: { key: string }): Promise<{ success: boolean }>;
}

export interface Env {
  GEMINI_API_KEY: string;
  ALLOWED_ORIGIN: string; // e.g. "https://<user>.github.io"
  // Simple per-IP rate limit, backed by Cloudflare's Rate Limiting binding
  // (atomic, durable, cross-isolate) — see "Optional: Rate limiting" in
  // worker/README.md.
  RATE_LIMITER?: RateLimiterBinding;
}

interface ChatTurn {
  role: 'user' | 'assistant';
  text: string;
}
interface ChatRequestBody {
  mode: 'tutor' | 'roleplay' | 'story' | 'translate';
  lang: { know: string; learn: string };
  messages?: ChatTurn[]; // absent/empty for 'story'/'translate' — those are one-shot generations, not a conversation
  scenario?: string; // roleplay only, e.g. "job-interview" | "ordering-coffee"
  level?: string; // story only, a CEFR level like "A1".."C1"
  text?: string; // translate only, the sentence to translate — target language is lang.learn
}

const GEMINI_MODEL = 'gemini-2.5-flash';
const RATE_LIMIT_PER_MINUTE = 15;
const MAX_MESSAGES = 50;
const MAX_PAYLOAD_CHARS = 20_000;
// /error: no Gemini call behind it (just a console.log the deploy owner reads
// via `wrangler tail`), so a higher cap than /chat's is fine — the thing this
// guards against is log-spam volume, not cost.
const ERROR_RATE_LIMIT_PER_MINUTE = 30;
const MAX_ERROR_MESSAGE_CHARS = 2_000;
const MAX_ERROR_STACK_CHARS = 8_000;
const MAX_ERROR_URL_CHARS = 500;
const MAX_ERROR_UA_CHARS = 300;
const VALID_LEVELS = new Set(['A1', 'A2', 'B1', 'B2', 'C1']);

export function corsHeaders(origin: string): HeadersInit {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Client-Id',
    // Every response here is either an error or freshly generated from a
    // live Gemini call / a one-off log line — nothing is ever meant to be
    // reused from a cache (browser or intermediate), so make that explicit
    // rather than relying on the absence of Cache-Control defaulting the
    // same way everywhere.
    'Cache-Control': 'no-store',
  };
}

function jsonError(origin: string, error: string, status: number): Response {
  return new Response(JSON.stringify({ error }), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
  });
}

const VALID_MODES = new Set(['tutor', 'roleplay', 'story', 'translate']);
const MAX_SCENARIO_CHARS = 100;

type ValidationResult =
  { ok: true; body: ChatRequestBody } | { ok: false; error: string; status: number };

// Single point of trust-boundary validation for the parsed JSON request —
// consolidates what used to be five separate scattered `if` checks, and
// closes gaps none of them covered: `mode` itself was never checked against
// an allowlist (an unrecognized mode silently fell through to the tutor
// prompt instead of being rejected), each message's `role`/`text` shape was
// never checked (a non-string `text` would reach Gemini's request body
// as-is), and `scenario` had no length cap at all — it's a free-form key
// into ROLEPLAY_SCENARIOS with a safe fallback, but nothing stopped a
// caller from sending a multi-megabyte string for it, since
// MAX_PAYLOAD_CHARS below only ever counted `messages`/`text`, never
// `scenario`.
export function validateBody(raw: unknown): ValidationResult {
  if (typeof raw !== 'object' || raw === null) {
    return { ok: false, error: 'missing_fields', status: 400 };
  }
  const b = raw as Record<string, unknown>;

  if (typeof b.mode !== 'string' || !VALID_MODES.has(b.mode)) {
    return { ok: false, error: 'invalid_mode', status: 400 };
  }
  const mode = b.mode as ChatRequestBody['mode'];

  if (typeof b.lang !== 'object' || b.lang === null) {
    return { ok: false, error: 'missing_fields', status: 400 };
  }
  const lang = b.lang as Record<string, unknown>;
  if (typeof lang.know !== 'string' || typeof lang.learn !== 'string') {
    return { ok: false, error: 'missing_fields', status: 400 };
  }
  // Validate lang codes against known set to prevent prompt injection.
  if (!VALID_LANGS.has(lang.know) || !VALID_LANGS.has(lang.learn)) {
    return { ok: false, error: 'invalid_lang', status: 400 };
  }

  // Story/translate have no conversation turns to send — they're single
  // one-shot requests, unlike tutor/roleplay.
  let messages: ChatTurn[] | undefined;
  if (mode === 'translate') {
    if (typeof b.text !== 'string' || !b.text.trim()) {
      return { ok: false, error: 'missing_fields', status: 400 };
    }
  } else if (mode !== 'story') {
    if (!Array.isArray(b.messages) || b.messages.length === 0) {
      return { ok: false, error: 'missing_fields', status: 400 };
    }
    for (const m of b.messages as unknown[]) {
      const turn = m as Record<string, unknown> | null;
      if (
        typeof turn !== 'object' ||
        turn === null ||
        (turn.role !== 'user' && turn.role !== 'assistant') ||
        typeof turn.text !== 'string'
      ) {
        return { ok: false, error: 'invalid_message', status: 400 };
      }
    }
    messages = b.messages as ChatTurn[];
  }

  if (mode === 'story' && b.level !== undefined) {
    if (typeof b.level !== 'string' || !VALID_LEVELS.has(b.level)) {
      return { ok: false, error: 'invalid_level', status: 400 };
    }
  }

  if (mode === 'roleplay' && b.scenario !== undefined) {
    if (typeof b.scenario !== 'string' || b.scenario.length > MAX_SCENARIO_CHARS) {
      return { ok: false, error: 'invalid_scenario', status: 400 };
    }
  }

  // Built explicitly from the narrowed/validated fields above, not `raw as
  // ChatRequestBody` — a cast would let a validation gap (a field the type
  // expects but this function forgot to check) through unnoticed, since the
  // compiler would just trust the annotation instead of checking the shape.
  return {
    ok: true,
    body: {
      mode,
      lang: { know: lang.know, learn: lang.learn },
      messages,
      scenario: typeof b.scenario === 'string' ? b.scenario : undefined,
      level: typeof b.level === 'string' ? b.level : undefined,
      text: typeof b.text === 'string' ? b.text : undefined,
    },
  };
}

export function buildSystemPrompt(body: ChatRequestBody): string {
  const { know, learn } = body.lang;
  if (body.mode === 'roleplay') {
    const persona =
      ROLEPLAY_SCENARIOS[body.scenario ?? ''] ?? ROLEPLAY_SCENARIOS['ordering-coffee'];
    return [
      `${persona} Speak only in ${learn}, at a level a learner would understand.`,
      `After every reply, on a new line starting with "FEEDBACK:", give detailed grammar feedback in ${know}`,
      `on the learner's last message — point out specific mistakes and how to fix them, or say it was correct.`,
      `Keep the in-character reply short (1-3 sentences).`,
    ].join(' ');
  }
  if (body.mode === 'story') {
    const level: string = body.level && VALID_LEVELS.has(body.level) ? body.level : 'A2';
    const learnName = LANG_NAMES[learn] ?? learn;
    return [
      `Write a short, engaging story entirely in ${learnName}, for a language learner at CEFR level ${level}.`,
      `Use vocabulary and grammar appropriate for that level — simpler sentences and common words for A1/A2, more complexity for B1 and above.`,
      `Keep the story between 120 and 220 words.`,
      `Respond with the story's title on the first line prefixed exactly "TITLE: ", followed by a blank line, then the story text.`,
      `Do not add any other commentary, headings, or markdown formatting — plain prose only.`,
    ].join(' ');
  }
  if (body.mode === 'translate') {
    const targetName = LANG_NAMES[learn] ?? learn;
    return [
      `Translate the user's next message into ${targetName}, no matter what language it is written in.`,
      `Detect the source language automatically.`,
      `Respond with ONLY the translation — no explanations, no quotes, no source language name, no extra commentary.`,
      `Preserve the tone, register and meaning as closely as possible.`,
    ].join(' ');
  }
  return [
    `You are a friendly, patient language tutor helping someone learn ${learn} (their native language is ${know}).`,
    `Have a natural conversation in ${learn}. Gently correct mistakes inline and explain briefly in ${know} when useful.`,
    `Keep replies concise (2-4 sentences).`,
  ].join(' ');
}

// Fallback used only when the RATE_LIMITER binding isn't configured (it's
// documented as optional — see worker/README.md's "Optional: Rate limiting"
// step). A Worker isolate stays warm across many requests, so this in-memory
// map still catches sustained abuse from one IP even though it isn't
// distributed/durable (a burst that lands on a fresh isolate, or traffic
// spread across isolates, resets the count) — the point is that "not
// configured" degrades to "a weaker but real limit", never to "no limit at
// all". Unlike the old KV-backed counter this replaces, this path was never
// racy to begin with: a Worker isolate runs JS single-threaded and this
// function has no `await`, so concurrent requests to the same isolate can't
// interleave mid-check the way two `await`-separated KV get/put calls could.
const _memoryRateLimit = new Map<string, { count: number; resetAt: number }>();
let _warnedMissingBinding = false;
// Throttles the sweep below to once per interval instead of once per request
// once the map crosses SWEEP_SIZE_THRESHOLD — without this, a sustained burst
// that keeps the map above the threshold re-scans the *entire* map on every
// single request until enough buckets expire to drop back under it.
let _lastSweep = 0;
const SWEEP_SIZE_THRESHOLD = 2000;
const SWEEP_INTERVAL_MS = 10_000;

// `key` distinguishes buckets — /chat and /error track separate counts per
// IP (via distinct key prefixes at the call site) so a burst of client error
// reports can't eat into a user's ability to use the AI tutor in the same
// minute, or vice versa.
function checkMemoryRateLimit(key: string, limitPerMinute: number): boolean {
  const now = Date.now();
  if (_memoryRateLimit.size > SWEEP_SIZE_THRESHOLD && now - _lastSweep > SWEEP_INTERVAL_MS) {
    _lastSweep = now;
    for (const [k, v] of _memoryRateLimit) {
      if (now >= v.resetAt) _memoryRateLimit.delete(k);
    }
  }
  const bucket = _memoryRateLimit.get(key);
  if (!bucket || now >= bucket.resetAt) {
    _memoryRateLimit.set(key, { count: 1, resetAt: now + 60_000 });
    return true;
  }
  if (bucket.count >= limitPerMinute) return false;
  bucket.count++;
  return true;
}

async function checkRateLimit(
  env: Env,
  key: string,
  limitPerMinute: number = RATE_LIMIT_PER_MINUTE,
): Promise<boolean> {
  if (!env.RATE_LIMITER) {
    if (!_warnedMissingBinding) {
      _warnedMissingBinding = true;
      console.warn(
        '[vymova-ai-proxy] RATE_LIMITER binding is not configured — using a per-isolate ' +
          'in-memory rate limit instead. See worker/README.md "Optional: Rate limiting" to ' +
          'set up the durable, cross-isolate version.',
      );
    }
    return checkMemoryRateLimit(key, limitPerMinute);
  }
  // Cloudflare's Rate Limiting binding is atomic by construction (unlike a
  // hand-rolled KV get-then-put counter, which two concurrent requests can
  // both read *before* either writes, letting a burst blow past the limit
  // entirely) — no read-compare-write dance needed here. The binding's own
  // configured limit (wrangler.toml) applies regardless of limitPerMinute —
  // that parameter only affects the in-memory fallback above.
  const { success } = await env.RATE_LIMITER.limit({ key });
  return success;
}

// Optional X-Client-Id header (js/core/worker-client-id.ts) — a random
// per-browser identifier persisted in localStorage. NOT a security/auth
// boundary: nothing stops a client from omitting it or generating a fresh
// one per request, so it can't be relied on to *identify* an abuser. What
// it does add: a second, independent rate-limit bucket alongside the
// per-IP one below, so one heavy legitimate user behind a shared/NAT'd IP
// (an office, a university network) gets throttled on their own usage
// instead of exhausting the limit for everyone on that IP. Validated
// (length + charset) only to bound how much key-space a malformed value
// could claim in the in-memory fallback's Map, not as a trust check.
export function _getClientId(request: Request): string | null {
  const id = request.headers.get('X-Client-Id');
  if (!id || id.length < 8 || id.length > 64 || !/^[A-Za-z0-9]+$/.test(id)) return null;
  return id;
}

// Combines the mandatory per-IP check with an optional per-client-id one —
// both must have room. See _getClientId()'s comment for why this is a
// fairness improvement, not an additional security layer, over the plain
// per-IP limit alone. Runs both checks concurrently (Promise.all) rather than
// sequential awaits — they're independent RATE_LIMITER calls, so awaiting one
// before starting the other would double this function's latency on every
// request that carries an X-Client-Id, for no benefit.
async function checkRateLimits(
  env: Env,
  request: Request,
  ip: string,
  prefix: string,
  limitPerMinute: number,
): Promise<boolean> {
  const clientId = _getClientId(request);
  const checks = [checkRateLimit(env, `${prefix}:${ip}`, limitPerMinute)];
  if (clientId) checks.push(checkRateLimit(env, `${prefix}:c:${clientId}`, limitPerMinute));
  const results = await Promise.all(checks);
  return results.every(Boolean);
}

// ── Client error reporting ──────────────────────────────────────
// Read-side companion to /chat: forwards uncaught client-side errors
// (window.onerror / unhandledrejection, wired in js/core/error-report.ts) so
// they're visible in `wrangler tail`/Cloudflare's Workers Logs dashboard
// instead of only ever reaching the team via a user's bug report. No
// storage, no third-party service — this Worker already exists for /chat,
// console.log/console.error here is the entire "backend".
interface ErrorReportBody {
  message: string;
  stack?: string;
  url?: string;
  userAgent?: string;
}

export function validateErrorBody(raw: unknown): ErrorReportBody | null {
  if (typeof raw !== 'object' || raw === null) return null;
  const b = raw as Record<string, unknown>;
  if (typeof b.message !== 'string' || !b.message.trim()) return null;
  if (b.stack !== undefined && typeof b.stack !== 'string') return null;
  if (b.url !== undefined && typeof b.url !== 'string') return null;
  if (b.userAgent !== undefined && typeof b.userAgent !== 'string') return null;
  return {
    message: b.message.slice(0, MAX_ERROR_MESSAGE_CHARS),
    stack: (b.stack as string | undefined)?.slice(0, MAX_ERROR_STACK_CHARS),
    url: (b.url as string | undefined)?.slice(0, MAX_ERROR_URL_CHARS),
    userAgent: (b.userAgent as string | undefined)?.slice(0, MAX_ERROR_UA_CHARS),
  };
}

async function handleError(
  request: Request,
  env: Env,
  origin: string,
  ip: string,
): Promise<Response> {
  if (!(await checkRateLimits(env, request, ip, 'err', ERROR_RATE_LIMIT_PER_MINUTE))) {
    return jsonError(origin, 'rate_limited', 429);
  }
  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return jsonError(origin, 'invalid_json', 400);
  }
  const report = validateErrorBody(rawBody);
  if (!report) {
    return jsonError(origin, 'invalid_report', 400);
  }
  // Deliberately just a log line, not a store/queue/email — see the comment
  // above this section for why. Structured so `wrangler tail --format=json`
  // (or `| jq`) can filter/aggregate by message.
  console.error('[vymova-client-error]', JSON.stringify(report));
  return new Response(null, { status: 204, headers: corsHeaders(origin) });
}

async function handleChat(
  request: Request,
  env: Env,
  origin: string,
  ip: string,
): Promise<Response> {
  if (!(await checkRateLimits(env, request, ip, 'chat', RATE_LIMIT_PER_MINUTE))) {
    return jsonError(origin, 'rate_limited', 429);
  }

  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return jsonError(origin, 'invalid_json', 400);
  }
  const validated = validateBody(rawBody);
  if (!validated.ok) {
    return jsonError(origin, validated.error, validated.status);
  }
  const body = validated.body;

  // Cap messages to prevent runaway Gemini costs.
  if ((body.messages?.length ?? 0) > MAX_MESSAGES) {
    body.messages = body.messages!.slice(-MAX_MESSAGES);
  }
  const totalChars =
    body.mode === 'translate'
      ? (body.text?.length ?? 0)
      : (body.messages ?? []).reduce((s, m) => s + (m.text?.length ?? 0), 0);
  if (totalChars > MAX_PAYLOAD_CHARS) {
    return jsonError(origin, 'payload_too_large', 413);
  }

  const systemPrompt = buildSystemPrompt(body);
  // Gemini's generateContent needs at least one content turn even when the
  // whole request is really driven by the system prompt (story mode).
  const contents =
    body.mode === 'story'
      ? [{ role: 'user', parts: [{ text: 'Generate the story now.' }] }]
      : body.mode === 'translate'
        ? [{ role: 'user', parts: [{ text: body.text ?? '' }] }]
        : (body.messages ?? []).map((m) => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: m.text }],
          }));

  const geminiRes = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${env.GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents,
        systemInstruction: { parts: [{ text: systemPrompt }] },
      }),
    },
  );

  if (!geminiRes.ok) {
    return new Response(JSON.stringify({ error: 'upstream_error', status: geminiRes.status }), {
      status: 502,
      headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
    });
  }

  const data = (await geminiRes.json()) as {
    candidates?: { content?: { parts?: { text?: string }[] } }[];
  };
  const raw = data.candidates?.[0]?.content?.parts?.map((p) => p.text ?? '').join('') ?? '';

  let text = raw;
  let title: string | undefined;
  if (body.mode === 'story') {
    const m = raw.match(/^TITLE:\s*(.+?)\s*\n+([\s\S]*)$/);
    if (m) {
      title = m[1].trim();
      text = m[2].trim();
    }
  }

  return new Response(JSON.stringify({ text, ...(title ? { title } : {}) }), {
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
  });
}

let _warnedMissingOrigin = false;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // Fail closed, not open: an unconfigured ALLOWED_ORIGIN used to fall
    // back to '*' and skip the Origin check below entirely (the `if
    // (env.ALLOWED_ORIGIN && ...)` guard short-circuited false) — a missing
    // secret silently turned this into a fully open, unrestricted-origin
    // Gemini proxy instead of refusing to serve. worker/README.md's step 2
    // has always instructed setting this, and nothing else in the repo
    // relies on it being unset (no local/e2e flow depends on the old
    // fallback) — so there's no legitimate case this needs to keep working.
    if (!env.ALLOWED_ORIGIN) {
      if (!_warnedMissingOrigin) {
        _warnedMissingOrigin = true;
        console.error(
          '[vymova-ai-proxy] ALLOWED_ORIGIN is not configured — refusing all requests. ' +
            'Set it in wrangler.toml (see worker/README.md step 2).',
        );
      }
      return new Response('Service misconfigured', { status: 500 });
    }
    const origin = env.ALLOWED_ORIGIN;
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders(origin) });
    }
    if (request.method !== 'POST') {
      return new Response('Not found', { status: 404, headers: corsHeaders(origin) });
    }

    // The CORS headers above only stop a *browser* from letting another
    // site's JS read the response — they don't stop the browser from
    // sending the request in the first place, and they do nothing at all
    // for a non-browser client (curl, a script) that never checks CORS.
    // Without this, the Worker still runs the (paid) Gemini call for any
    // caller who finds the URL, regardless of Origin. Reject anything that
    // doesn't claim to be the configured frontend — real browser fetches
    // always send Origin on POST, so this only turns away spoofed/absent
    // Origins, never a legitimate call from the app.
    if (request.headers.get('Origin') !== origin) {
      return jsonError(origin, 'forbidden_origin', 403);
    }

    const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown';
    const pathname = new URL(request.url).pathname;
    if (pathname === '/chat') return handleChat(request, env, origin, ip);
    if (pathname === '/error') return handleError(request, env, origin, ip);
    return new Response('Not found', { status: 404, headers: corsHeaders(origin) });
  },
};
