// Vymova — js/features/duel/duel-firebase.ts
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
      // no-store: a client reading a path it just wrote to itself (e.g.
      // _advanceTournament()'s read-decide-write) needs a genuinely fresh
      // response every time, not a browser-cached one — confirmed via a
      // repro (tests-e2e/duel-tournament.spec.ts): without this, the
      // immediate follow-up GET intermittently served a pre-write snapshot
      // back to the very client that just wrote it, so _advanceTournament()
      // computed its next-match/next-round index off stale data and the
      // bracket got stuck.
      r = await fetch(`${DB_URL}${p}.json`, { ...opts, headers, cache: 'no-store' });
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
    cache: 'no-store',
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
