// Vymova — js/features/duel-firebase.ts
// Thin Firebase REST wrappers used by duel.ts, duel-tournament-logic.ts,
// duel-async-challenge.ts, duel-spectator-logic.ts. Dependency-free leaf
// module (mirrors duel-rating.ts) so nothing importing it can create a cycle.
export const DB_URL =
  'https://english-words-trainer-557e8-default-rtdb.europe-west1.firebasedatabase.app';

export async function _fbGet(p: string): Promise<unknown> {
  const r = await fetch(`${DB_URL}${p}.json`);
  if (!r.ok) throw new Error('HTTP ' + r.status);
  return r.json();
}
export async function _fbPatch(p: string, d: unknown): Promise<void> {
  await fetch(`${DB_URL}${p}.json`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(d),
  });
}
export async function _fbSet(p: string, d: unknown): Promise<void> {
  await fetch(`${DB_URL}${p}.json`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(d),
  });
}
