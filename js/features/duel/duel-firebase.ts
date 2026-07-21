// Vymova — js/features/duel-firebase.ts
// Thin Firebase REST wrappers used by duel.ts, duel-tournament-logic.ts,
// duel-async-challenge.ts, duel-spectator-logic.ts. Otherwise dependency-free
// leaf module (mirrors duel-rating.ts) so nothing importing it can create a
// cycle — the one exception is app-check.ts, itself a dependency-free leaf
// that no-ops with zero network/import cost unless App Check is configured
// (see its own header comment), so it carries the same "safe to import from
// anywhere" property this file relies on.
import { getAppCheckHeaders } from '../../core/app-check.ts';

// VITE_FIREBASE_DB_URL lets tests-e2e/duel-realtime.spec.ts (and nothing
// else — unset everywhere else, including prod) redirect every duel/
// leaderboard/cloud-sync REST call at the Firebase RTDB emulator instead of
// prod, via vite.config.js's /emu-db proxy. See that spec's header comment.
export const DB_URL =
  (import.meta.env.VITE_FIREBASE_DB_URL as string | undefined)?.trim() ||
  'https://english-words-trainer-557e8-default-rtdb.europe-west1.firebasedatabase.app';

// Retries transient failures (network errors, 5xx) with backoff so a brief
// blip doesn't silently drop a write — see _pushScore()/_finishMyGame() in
// duel.ts, which used to treat a failed PATCH as a success and leave both
// players desynced with no error and no retry. 4xx (bad request, or a
// database.rules.json .validate rejection) is never retried — the request
// is malformed/disallowed, so retrying it would just fail the same way.
const _FB_RETRIES = 3;
async function _fbFetch(p: string, opts?: RequestInit): Promise<Response> {
  const appCheckHeaders = await getAppCheckHeaders();
  const headers = { ...opts?.headers, ...appCheckHeaders };
  let lastErr: unknown;
  for (let attempt = 0; attempt < _FB_RETRIES; attempt++) {
    if (attempt > 0) await new Promise((res) => setTimeout(res, 300 * 2 ** (attempt - 1)));
    let r: Response;
    try {
      r = await fetch(`${DB_URL}${p}.json`, { ...opts, headers });
    } catch (e) {
      lastErr = e;
      continue;
    }
    if (r.ok) return r;
    if (r.status >= 400 && r.status < 500) throw new Error('HTTP ' + r.status);
    lastErr = new Error('HTTP ' + r.status);
  }
  throw lastErr;
}

export async function _fbGet(p: string): Promise<unknown> {
  const r = await _fbFetch(p);
  return r.json();
}
export async function _fbPatch(p: string, d: unknown): Promise<void> {
  await _fbFetch(p, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(d),
  });
}
export async function _fbSet(p: string, d: unknown): Promise<void> {
  await _fbFetch(p, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(d),
  });
}

// Read + ETag together, for a caller that wants to make its next write
// conditional on nothing else having changed this path since (see
// _fbPatchIfMatch below) — e.g. _advanceTournament()'s read-decide-write
// sequence, where two clients racing to advance the same round could
// otherwise both compute their next-round update from the same *stale*
// read and stomp each other's write with an equally-stale one.
export async function _fbGetWithEtag(p: string): Promise<{ data: unknown; etag: string }> {
  const appCheckHeaders = await getAppCheckHeaders();
  const r = await fetch(`${DB_URL}${p}.json`, {
    headers: { 'X-Firebase-ETag': 'true', ...appCheckHeaders },
  });
  if (!r.ok) throw new Error('HTTP ' + r.status);
  return { data: await r.json(), etag: r.headers.get('ETag') ?? '' };
}

// Conditional PATCH — succeeds only if `p` still matches `etag` (from a
// prior _fbGetWithEtag on the same path). Returns false on a lost race
// (412) instead of throwing, since that's an expected, meaningful outcome
// here (someone else already wrote first), not a transient failure to
// retry past — same reasoning as _fbClaim, which this mirrors.
export async function _fbPatchIfMatch(p: string, etag: string, d: unknown): Promise<boolean> {
  const appCheckHeaders = await getAppCheckHeaders();
  const r = await fetch(`${DB_URL}${p}.json`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', 'if-match': etag, ...appCheckHeaders },
    body: JSON.stringify(d),
  });
  if (r.ok) return true;
  if (r.status === 412) return false;
  throw new Error('HTTP ' + r.status);
}

// Atomic "claim if empty" write via Firebase's conditional-request support
// (X-Firebase-ETag / if-match). Used for slots two clients might race to
// fill (e.g. joinRoom()'s p2) — returns false if the path was already
// non-null, either before this call or because a concurrent claim won the
// if-match race, so the loser never silently overwrites the winner. Doesn't
// go through _fbFetch (no retry — a 412 here is a meaningful "lost the
// race", not a transient failure to retry past), so it fetches its own
// App Check header directly.
export async function _fbClaim(p: string, d: unknown): Promise<boolean> {
  const appCheckHeaders = await getAppCheckHeaders();
  const getRes = await fetch(`${DB_URL}${p}.json`, {
    headers: { 'X-Firebase-ETag': 'true', ...appCheckHeaders },
  });
  if (!getRes.ok) throw new Error('HTTP ' + getRes.status);
  const existing = await getRes.json();
  if (existing != null) return false;
  const etag = getRes.headers.get('ETag') ?? '';
  const putRes = await fetch(`${DB_URL}${p}.json`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'if-match': etag, ...appCheckHeaders },
    body: JSON.stringify(d),
  });
  if (putRes.ok) return true;
  if (putRes.status === 412) return false;
  throw new Error('HTTP ' + putRes.status);
}
