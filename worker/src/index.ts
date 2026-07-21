// Vymova AI proxy — Cloudflare Worker
// Hides the Gemini API key from the client. Forwards chat turns to Gemini's
// generateContent endpoint with a server-side system prompt (tutor or
// roleplay persona) the client cannot override.
// Not pulled from @cloudflare/workers-types (not a dependency here — see
// KVNamespace below, which is only ever type-checked by wrangler's own
// esbuild-based transpile, not this repo's tsc) — just the one method this
// file actually calls.
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
const VALID_LANGS = new Set([
  'en',
  'ua',
  'es',
  'fr',
  'it',
  'pt',
  'de',
  'he',
  'ar',
  'pl',
  'zh',
  'el',
  'ja',
  'tr',
  'nl',
  'vi',
  'hi',
  'bn',
  'id',
  'pcm',
  'ko',
  'fa',
  'sw',
  'ms',
  'th',
  'az',
  'ro',
  'hu',
  'cs',
  'kk',
  'sv',
  'ka',
  'hr',
  'sr',
  'bs',
  'bg',
  'sk',
  'hy',
  'da',
  'fi',
  'no',
  'la',
  'lt',
  'lv',
  'et',
  'sl',
  'mk',
  'sq',
  'is',
  'cy',
  'ga',
  'tl',
  'mn',
  'uz',
  'am',
  'eo',
  'ta',
  'pa',
  'zu',
  'af',
  'ky',
  'tg',
  'tk',
  'ug',
  'eu',
  'ca',
  'gl',
  'mt',
  'lb',
  'ht',
  'bo',
  'my',
  'km',
  'lo',
  'ne',
  'si',
  'ur',
  'te',
  'ml',
  'kn',
  'mr',
  'gu',
  'or',
  'as',
  'sd',
  'ps',
  'so',
  'ha',
  'yo',
  'ig',
  'ti',
  'wo',
  'mg',
  'xh',
  'sn',
  'ny',
  'fj',
  'sm',
  'to',
  'mi',
  'haw',
  'jv',
  'su',
  'gd',
  'br',
  'kw',
  'gv',
  'fo',
  'oc',
  'co',
  'sc',
  'fy',
  'yi',
  'lad',
  'qu',
  'gn',
  'ay',
  'dz',
  'dv',
  'tet',
  'be',
  'qya',
  'sjn',
  'ku',
  'om',
  'ln',
  'bho',
  'ceb',
  'rm',
  'ty',
  'ch',
  'mh',
  'pau',
  'nah',
  'nv',
  'tlh',
  'val',
  'dth',
]);
const VALID_LEVELS = new Set(['A1', 'A2', 'B1', 'B2', 'C1']);
const LANG_NAMES: Record<string, string> = {
  en: 'English',
  ua: 'Ukrainian',
  es: 'Spanish',
  fr: 'French',
  it: 'Italian',
  pt: 'Portuguese',
  de: 'German',
  he: 'Hebrew',
  ar: 'Arabic',
  pl: 'Polish',
  zh: 'Chinese',
  el: 'Greek',
  ja: 'Japanese',
  tr: 'Turkish',
  nl: 'Dutch',
  vi: 'Vietnamese',
  hi: 'Hindi',
  bn: 'Bengali',
  id: 'Indonesian',
  pcm: 'Nigerian Pidgin',
  ko: 'Korean',
  fa: 'Persian',
  sw: 'Swahili',
  ms: 'Malay',
  th: 'Thai',
  az: 'Azerbaijani',
  ro: 'Romanian',
  hu: 'Hungarian',
  cs: 'Czech',
  kk: 'Kazakh',
  sv: 'Swedish',
  ka: 'Georgian',
  hr: 'Croatian',
  sr: 'Serbian',
  bs: 'Bosnian',
  bg: 'Bulgarian',
  sk: 'Slovak',
  hy: 'Armenian',
  da: 'Danish',
  fi: 'Finnish',
  no: 'Norwegian',
  la: 'Latin',
  lt: 'Lithuanian',
  lv: 'Latvian',
  et: 'Estonian',
  sl: 'Slovenian',
  mk: 'Macedonian',
  sq: 'Albanian',
  is: 'Icelandic',
  cy: 'Welsh',
  ga: 'Irish',
  tl: 'Filipino',
  mn: 'Mongolian',
  uz: 'Uzbek',
  am: 'Amharic',
  eo: 'Esperanto',
  ta: 'Tamil',
  pa: 'Punjabi',
  zu: 'Zulu',
  af: 'Afrikaans',
  ky: 'Kyrgyz',
  tg: 'Tajik',
  tk: 'Turkmen',
  ug: 'Uyghur',
  eu: 'Basque',
  ca: 'Catalan',
  gl: 'Galician',
  mt: 'Maltese',
  lb: 'Luxembourgish',
  ht: 'Haitian Creole',
  bo: 'Tibetan',
  my: 'Burmese',
  km: 'Khmer',
  lo: 'Lao',
  ne: 'Nepali',
  si: 'Sinhala',
  ur: 'Urdu',
  te: 'Telugu',
  ml: 'Malayalam',
  kn: 'Kannada',
  mr: 'Marathi',
  gu: 'Gujarati',
  or: 'Odia',
  as: 'Assamese',
  sd: 'Sindhi',
  ps: 'Pashto',
  so: 'Somali',
  ha: 'Hausa',
  yo: 'Yoruba',
  ig: 'Igbo',
  ti: 'Tigrinya',
  wo: 'Wolof',
  mg: 'Malagasy',
  xh: 'Xhosa',
  sn: 'Shona',
  ny: 'Chewa',
  fj: 'Fijian',
  sm: 'Samoan',
  to: 'Tongan',
  mi: 'Maori',
  haw: 'Hawaiian',
  jv: 'Javanese',
  su: 'Sundanese',
  gd: 'Scottish Gaelic',
  br: 'Breton',
  kw: 'Cornish',
  gv: 'Manx',
  fo: 'Faroese',
  oc: 'Occitan',
  co: 'Corsican',
  sc: 'Sardinian',
  fy: 'Frisian',
  yi: 'Yiddish',
  lad: 'Ladino',
  qu: 'Quechua',
  gn: 'Guarani',
  ay: 'Aymara',
  dz: 'Dzongkha',
  dv: 'Maldivian',
  tet: 'Tetum',
  be: 'Belarusian',
  qya: "Quenya (Tolkien's constructed Elvish language)",
  sjn: "Sindarin (Tolkien's constructed Elvish language)",
  ku: 'Kurdish (Kurmanji)',
  om: 'Oromo',
  ln: 'Lingala',
  bho: 'Bhojpuri',
  ceb: 'Cebuano',
  rm: 'Romansh',
  ty: 'Tahitian',
  ch: 'Chamorro',
  mh: 'Marshallese',
  pau: 'Palauan',
  nah: 'Nahuatl',
  nv: 'Navajo',
  tlh: 'Klingon (constructed language from Star Trek)',
  val: 'High Valyrian (constructed language from Game of Thrones)',
  dth: 'Dothraki (constructed language from Game of Thrones)',
};

const ROLEPLAY_SCENARIOS: Record<string, string> = {
  'job-interview': 'You are a hiring manager conducting a friendly first-round job interview.',
  'ordering-coffee': "You are a barista at a busy coffee shop taking the customer's order.",
  restaurant:
    "You are a waiter at a restaurant taking the customer's order and answering menu questions.",
  'hotel-checkin': 'You are a hotel front-desk receptionist checking in a guest.',
  'airport-security': 'You are an airport security/check-in agent processing a traveler.',
  'doctor-appointment':
    'You are a doctor listening to a patient describe their symptoms during a check-up.',
  'asking-directions': 'You are a friendly local helping a tourist who is lost find their way.',
  'shopping-clothes': 'You are a clothing store employee helping a customer find and try on items.',
  'returning-item': 'You are a customer-service employee handling a product return at a store.',
  'bank-account': 'You are a bank clerk helping a customer open or manage a bank account.',
  'renting-apartment':
    'You are a landlord or real-estate agent showing an apartment to a prospective tenant.',
  'performance-review': 'You are a manager giving an employee their annual performance review.',
  'small-talk-party': 'You are a guest at a party making friendly small talk with someone new.',
  'taxi-ride': 'You are a taxi driver chatting with a passenger during a ride.',
  'car-rental': 'You are a car rental agency employee helping a customer rent a car.',
  'gym-membership': 'You are a gym receptionist signing up a new member.',
  hairdresser: 'You are a hairdresser discussing a haircut with a client.',
  'noise-complaint': 'You are a neighbor or building manager responding to a noise complaint.',
  'tech-support':
    'You are a tech support agent helping a customer troubleshoot a device or software problem.',
  'ordering-pizza': 'You are a pizzeria employee taking a phone order for pizza delivery.',
  'lost-luggage': 'You are an airline employee helping a passenger report lost luggage.',
  'museum-tour': "You are a museum tour guide answering a visitor's questions about an exhibit.",
  'ordering-takeout': 'You are a restaurant employee taking a takeout order over the phone.',
  'booking-flight': 'You are a travel agent helping a customer book a flight.',
  'negotiating-price': 'You are a market vendor negotiating the price of an item with a customer.',
  'emergency-call':
    'You are a 911/emergency dispatcher calmly gathering information from a caller.',
  'parent-teacher': "You are a teacher meeting with a parent to discuss their child's progress.",
  'first-date':
    'You are on a friendly first date, making light conversation and getting to know the other person.',
  'customer-complaint':
    "You are a customer-service representative handling a customer's complaint over the phone.",
  'networking-event':
    'You are a professional at a networking event making conversation with a new contact.',
  'lost-passport': 'You are a consulate officer helping a traveler who lost their passport abroad.',
  'train-station': 'You are a ticket agent at a train station helping a passenger buy a ticket.',
  'bus-information':
    'You are a transit information desk employee answering questions about bus schedules and routes.',
  'hostel-checkin': 'You are a hostel receptionist checking in a backpacker.',
  'car-breakdown': 'You are a mechanic helping a driver whose car has broken down.',
  'parking-ticket': 'You are a parking authority clerk handling a dispute over a parking ticket.',
  'lost-and-found':
    'You are a lost-and-found office employee helping someone look for a lost item.',
  'customs-declaration': "You are a customs officer reviewing a traveler's customs declaration.",
  'car-accident':
    'You are a fellow driver and witness calmly discussing what happened after a minor car accident.',
  'weather-smalltalk':
    'You are a friendly stranger making small talk about the weather while waiting somewhere.',
  'job-offer-negotiation': 'You are an HR manager negotiating salary and benefits for a job offer.',
  'coworker-conflict':
    'You are a coworker calmly working through a disagreement about a shared project.',
  'client-meeting': 'You are a client meeting with a service provider to discuss project progress.',
  'business-trip-planning':
    'You are a travel coordinator helping an employee plan a business trip.',
  resignation: "You are a manager receiving an employee's resignation and discussing next steps.",
  'asking-for-raise': 'You are a manager whose employee is asking for a raise.',
  'onboarding-new-job': 'You are a colleague helping a new hire on their first day at work.',
  'conference-networking':
    'You are a fellow attendee at a professional conference striking up a conversation.',
  'team-standup': 'You are a teammate giving a quick update during a daily stand-up meeting.',
  'freelance-pitch': 'You are a potential client listening to a freelancer pitch their services.',
  'ordering-fastfood': 'You are a fast-food counter worker taking an order.',
  'wine-tasting': 'You are a sommelier guiding a guest through a wine tasting.',
  'grocery-shopping': 'You are a grocery store employee helping a customer find items.',
  'food-allergy':
    'You are a restaurant server discussing menu options with a customer who has a food allergy.',
  'cooking-class': 'You are a cooking instructor teaching a hands-on class.',
  'farmers-market': 'You are a farmers market vendor selling fresh produce to a customer.',
  'birthday-party': "You are a guest mingling and chatting at a friend's birthday party.",
  'baking-recipe': 'You are a friend sharing your favorite baking recipe and tips.',
  'food-delivery-issue':
    'You are a food delivery support agent helping resolve an issue with an order.',
  'dinner-party-host': 'You are a guest at a dinner party chatting with the host.',
  'dentist-visit': 'You are a dentist examining a patient and explaining treatment.',
  'pharmacy-visit': 'You are a pharmacist helping a customer with a medication question.',
  'vet-appointment': "You are a veterinarian examining a client's pet.",
  'fitness-trainer': 'You are a personal trainer designing a workout plan with a client.',
  'mental-health-checkin':
    'You are a calm, supportive therapist doing a check-in session with a client.',
  'eye-exam': 'You are an optometrist conducting an eye exam.',
  'yoga-class':
    'You are a yoga instructor leading a class and chatting with a student before it starts.',
  'hospital-checkin': 'You are a hospital receptionist checking in a patient.',
  'nutrition-consult': 'You are a nutritionist discussing diet and eating habits with a client.',
  'physical-therapy': 'You are a physical therapist guiding a patient through a rehab session.',
  'real-estate-viewing': 'You are a real-estate agent showing a house to a prospective buyer.',
  'utility-setup':
    'You are a utility company representative helping a customer set up electricity or water service.',
  'moving-day': 'You are a moving company employee helping a customer plan their move.',
  'neighbor-introduction': 'You are a neighbor meeting someone who just moved in next door.',
  'home-repair': "You are a repair technician diagnosing a problem in a customer's home.",
  'internet-installation':
    "You are an internet provider technician setting up a customer's connection.",
  'insurance-claim': 'You are an insurance agent helping a customer file a claim.',
  'furniture-shopping': 'You are a furniture store employee helping a customer choose furniture.',
  'pet-adoption': 'You are a shelter employee helping someone adopt a pet.',
  'garden-center': 'You are a garden center employee advising a customer on plants.',
  'wedding-planning': 'You are a wedding planner discussing details with an engaged couple.',
  'blind-date':
    'You are on a blind date, making polite conversation and getting to know your date.',
  'meeting-in-laws': "You are meeting your partner's parents for the first time over dinner.",
  'breakup-conversation':
    'You are having a calm, respectful conversation about ending a relationship.',
  'catching-up-friend': 'You are an old friend catching up over coffee after a long time apart.',
  'roommate-agreement': 'You are a roommate discussing shared chores, bills, and house rules.',
  'family-reunion': 'You are a relative chatting and catching up at a family reunion.',
  'apologizing-friend': 'You are a friend who is on the receiving end of a sincere apology.',
  'giving-advice': 'You are a friend asking for advice about a personal situation.',
  'volunteer-orientation': 'You are a volunteer coordinator orienting a new volunteer.',
  'university-application': 'You are an admissions officer interviewing a university applicant.',
  'classroom-discussion': 'You are a teacher leading a classroom discussion.',
  'library-help-desk': 'You are a librarian helping a visitor find books and resources.',
  'study-group': 'You are a classmate organizing a study group session.',
  'exam-stress': 'You are a supportive friend or classmate talking about exam stress.',
  'police-report': 'You are a police officer taking a report from someone about an incident.',
  'dmv-appointment': "You are a DMV clerk helping a customer renew their driver's license.",
  'voting-registration': 'You are an election office clerk helping someone register to vote.',
  'jury-duty': 'You are a court clerk explaining jury duty procedures to a summoned citizen.',
  'tax-office-visit': 'You are a tax office clerk helping a citizen with a tax question.',
};

function corsHeaders(origin: string): HeadersInit {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
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
function validateBody(raw: unknown): ValidationResult {
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

  return { ok: true, body: raw as ChatRequestBody };
}

function buildSystemPrompt(body: ChatRequestBody): string {
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

// `key` distinguishes buckets — /chat and /error track separate counts per
// IP (via distinct key prefixes at the call site) so a burst of client error
// reports can't eat into a user's ability to use the AI tutor in the same
// minute, or vice versa.
function checkMemoryRateLimit(key: string, limitPerMinute: number): boolean {
  const now = Date.now();
  if (_memoryRateLimit.size > 2000) {
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

function validateErrorBody(raw: unknown): ErrorReportBody | null {
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
  if (!(await checkRateLimit(env, `err:${ip}`, ERROR_RATE_LIMIT_PER_MINUTE))) {
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
  if (!(await checkRateLimit(env, `chat:${ip}`))) {
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

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = env.ALLOWED_ORIGIN || '*';
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
    if (env.ALLOWED_ORIGIN && request.headers.get('Origin') !== env.ALLOWED_ORIGIN) {
      return jsonError(origin, 'forbidden_origin', 403);
    }

    const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown';
    const pathname = new URL(request.url).pathname;
    if (pathname === '/chat') return handleChat(request, env, origin, ip);
    if (pathname === '/error') return handleError(request, env, origin, ip);
    return new Response('Not found', { status: 404, headers: corsHeaders(origin) });
  },
};
