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

interface ChatTurn {
  role: 'user' | 'assistant';
  text: string;
}
interface ChatRequestBody {
  mode: 'tutor' | 'roleplay';
  lang: { know: string; learn: string };
  messages: ChatTurn[];
  scenario?: string; // roleplay only, e.g. "job-interview" | "ordering-coffee"
}

const GEMINI_MODEL = 'gemini-2.5-flash';
const RATE_LIMIT_PER_MINUTE = 15;
const MAX_MESSAGES = 50;
const MAX_PAYLOAD_CHARS = 20_000;
const VALID_LANGS = new Set([
  'en', 'ua', 'es', 'fr', 'it', 'pt', 'de', 'he', 'ar', 'pl', 'zh', 'el', 'ja', 'tr', 'nl',
]);

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

    // Validate lang codes against known set to prevent prompt injection.
    if (!VALID_LANGS.has(body.lang.know) || !VALID_LANGS.has(body.lang.learn)) {
      return new Response(JSON.stringify({ error: 'invalid_lang' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
      });
    }

    // Cap messages to prevent runaway Gemini costs.
    if (body.messages.length > MAX_MESSAGES) {
      body.messages = body.messages.slice(-MAX_MESSAGES);
    }
    const totalChars = body.messages.reduce((s, m) => s + (m.text?.length ?? 0), 0);
    if (totalChars > MAX_PAYLOAD_CHARS) {
      return new Response(JSON.stringify({ error: 'payload_too_large' }), {
        status: 413,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
      });
    }

    const systemPrompt = buildSystemPrompt(body);
    const contents = body.messages.map((m) => ({
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
    const text = data.candidates?.[0]?.content?.parts?.map((p) => p.text ?? '').join('') ?? '';

    return new Response(JSON.stringify({ text }), {
      headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
    });
  },
};
