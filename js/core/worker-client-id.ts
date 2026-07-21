// Vymova — js/core/worker-client-id.ts
// Random per-browser identifier, persisted in localStorage, sent as
// X-Client-Id on every request to the AI-proxy Worker (worker/src/index.ts).
// Not a security/auth token — see the Worker's own _getClientId() comment
// for why: it's a second, independent rate-limit bucket alongside the
// mandatory per-IP one, so one heavy user behind a shared/NAT'd IP gets
// throttled on their own usage instead of exhausting the limit for everyone
// else on that IP. Same random-code generation pattern as
// cloud-sync.tsx's _getKey()/leaderboard.tsx's _getUserId().
const KEY = 'ew_worker_client_id';
const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

export function getWorkerClientId(): string {
  let id = localStorage.getItem(KEY);
  if (!id) {
    const b = crypto.getRandomValues(new Uint8Array(16));
    id = Array.from(b)
      .map((v) => CHARS[v % CHARS.length])
      .join('');
    localStorage.setItem(KEY, id);
  }
  return id;
}
