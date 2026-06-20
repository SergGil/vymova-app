// Vymova AI proxy — Cloudflare Worker
// Hides the Gemini API key from the client. Forwards chat turns to Gemini's
// generateContent endpoint with a server-side system prompt (tutor or
// roleplay persona) the client cannot override.
export interface Env {
  GEMINI_API_KEY: string;
  ALLOWED_ORIGIN: string; // e.g. "https://<user>.github.io"
  // Simple per-IP rate limit, backed by a Workers KV namespace bound as RATE_LIMIT.
  RATE_LIMIT?: KVNamespace;
}

interface ChatTurn { role: 'user' | 'assistant'; text: string; }
interface ChatRequestBody {
  mode: 'tutor' | 'roleplay';
  lang: { know: string; learn: string };
  messages: ChatTurn[];
  scenario?: string; // roleplay only, e.g. "job-interview" | "ordering-coffee"
}

const GEMINI_MODEL = 'gemini-2.5-flash';
const RATE_LIMIT_PER_MINUTE = 15;

const ROLEPLAY_SCENARIOS: Record<string, string> = {
  'job-interview': 'You are a hiring manager conducting a friendly first-round job interview.',
  'ordering-coffee': 'You are a barista at a busy coffee shop taking the customer\'s order.',
};

function corsHeaders(origin: string): HeadersInit {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function buildSystemPrompt(body: ChatRequestBody): string {
  const { know, learn } = body.lang;
  if (body.mode === 'roleplay') {
    const persona = ROLEPLAY_SCENARIOS[body.scenario ?? ''] ?? ROLEPLAY_SCENARIOS['ordering-coffee'];
    return [
      `${persona} Speak only in ${learn}, at a level a learner would understand.`,
      `After every reply, on a new line starting with "FEEDBACK:", give detailed grammar feedback in ${know}`,
      `on the learner's last message — point out specific mistakes and how to fix them, or say it was correct.`,
      `Keep the in-character reply short (1-3 sentences).`,
    ].join(' ');
  }
  return [
    `You are a friendly, patient language tutor helping someone learn ${learn} (their native language is ${know}).`,
    `Have a natural conversation in ${learn}. Gently correct mistakes inline and explain briefly in ${know} when useful.`,
    `Keep replies concise (2-4 sentences).`,
  ].join(' ');
}

async function checkRateLimit(env: Env, ip: string): Promise<boolean> {
  if (!env.RATE_LIMIT) return true;
  const key = `rl:${ip}:${Math.floor(Date.now() / 60000)}`;
  const current = parseInt((await env.RATE_LIMIT.get(key)) ?? '0', 10);
  if (current >= RATE_LIMIT_PER_MINUTE) return false;
  await env.RATE_LIMIT.put(key, String(current + 1), { expirationTtl: 90 });
  return true;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = env.ALLOWED_ORIGIN || '*';
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders(origin) });
    }
    if (request.method !== 'POST' || new URL(request.url).pathname !== '/chat') {
      return new Response('Not found', { status: 404, headers: corsHeaders(origin) });
    }

    const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown';
    if (!(await checkRateLimit(env, ip))) {
      return new Response(JSON.stringify({ error: 'rate_limited' }), {
        status: 429,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
      });
    }

    let body: ChatRequestBody;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: 'invalid_json' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
      });
    }
    if (!body.messages?.length || !body.lang) {
      return new Response(JSON.stringify({ error: 'missing_fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
      });
    }

    const systemPrompt = buildSystemPrompt(body);
    const contents = body.messages.map(m => ({
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

    const data = await geminiRes.json() as {
      candidates?: { content?: { parts?: { text?: string }[] } }[];
    };
    const text = data.candidates?.[0]?.content?.parts?.map(p => p.text ?? '').join('') ?? '';

    return new Response(JSON.stringify({ text }), {
      headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
    });
  },
};
