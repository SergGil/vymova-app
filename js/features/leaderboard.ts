// English Words App — js/features/leaderboard.ts
// 🏆 Global leaderboard via Firebase Realtime Database
import { t, wordsLabel } from './i18n.ts';
export {};

const DB_URL = 'https://english-words-trainer-557e8-default-rtdb.europe-west1.firebasedatabase.app';

function _esc(s: string): string {
  return String(s ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
const LB_KEY = 'ew_lb_registered'; // whether we've registered this user

interface LBEntry {
  name:   string;
  avatar: string;
  known:  number;
  streak: number;
  xp:     number;
  updatedAt: number;
}

function _getMyEntry(): LBEntry | null {
  try {
    const profiles = JSON.parse(localStorage.getItem('ew_profiles') || '[]') as {id:string;name:string;avatar:string}[];
    const activeId = localStorage.getItem('ew_active_profile') ?? '';
    const profile  = profiles.find(p => p.id === activeId);
    if (!profile) return null;
    const game  = JSON.parse(localStorage.getItem('ew_game') || '{}') as {streak?:number;xp?:number};
    const known = JSON.parse(localStorage.getItem('ew_known') || '[]') as string[];
    return {
      name:    profile.name,
      avatar:  profile.avatar,
      known:   known.length,
      streak:  game.streak ?? 0,
      xp:      (game.xp ?? 0) + known.length * 5,
      updatedAt: Date.now(),
    };
  } catch (e) { return null; }
}

function _getUserId(): string {
  let id = localStorage.getItem('ew_lb_uid');
  if (!id) {
    id = Array.from(crypto.getRandomValues(new Uint8Array(8)), v => v.toString(16).padStart(2,'0')).join('');
    localStorage.setItem('ew_lb_uid', id);
  }
  return id;
}

async function _submitScore(): Promise<void> {
  const entry = _getMyEntry(); if (!entry || entry.known < 5) return;
  const uid = _getUserId();
  try {
    await fetch(`${DB_URL}/leaderboard/${uid}.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry),
    });
    localStorage.setItem(LB_KEY, String(Date.now()));
  } catch (e) {}
}

async function _fetchLeaderboard(): Promise<LBEntry[]> {
  try {
    const res = await fetch(`${DB_URL}/leaderboard.json?orderBy="xp"&limitToLast=20`);
    if (!res.ok) return [];
    const data = await res.json() as Record<string, LBEntry> | null;
    if (!data) return [];
    return Object.values(data)
      .filter(e => e.known >= 5)
      .sort((a, b) => b.xp - a.xp || b.known - a.known)
      .slice(0, 20);
  } catch (e) { return []; }
}

export async function renderLeaderboard(container: HTMLElement): Promise<void> {
  container.innerHTML = `<div style="text-align:center;padding:20px;color:var(--text3);">${t('lb.loading')}</div>`;

  // Submit own score first
  await _submitScore();

  const entries = await _fetchLeaderboard();
  const myUid = _getUserId();
  const myEntry = _getMyEntry();

  if (!entries.length) {
    container.innerHTML = `<div style="text-align:center;padding:20px;color:var(--text3);">${t('lb.empty')}</div>`;
    return;
  }

  const myRank = entries.findIndex(e => e.name === myEntry?.name && e.known === myEntry?.known);

  container.innerHTML = `
    <div style="margin-bottom:12px;font-size:.78rem;color:var(--text3);text-align:center;">
      ${t('lb.top20')}
      ${myRank >= 0 ? `<br>${t('lb.yourRank')}: <b style="color:var(--accent);">#${myRank+1}</b>` : ''}
    </div>
    ${entries.map((e, i) => {
      const medal = i===0?'🥇':i===1?'🥈':i===2?'🥉':`${i+1}.`;
      const isMe  = e.name === myEntry?.name && e.known === myEntry?.known;
      return `<div style="display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:10px;background:${isMe?'rgba(0,200,100,.08)':'var(--bg)'};border:1.5px solid ${isMe?'var(--accent)':'var(--border)'};margin-bottom:6px;">
        <span style="font-size:1rem;flex-shrink:0;min-width:28px;text-align:center;">${medal}</span>
        <span style="font-size:1.3rem;">${_esc(e.avatar)}</span>
        <div style="flex:1;min-width:0;">
          <div style="font-weight:${isMe?'700':'400'};font-size:.88rem;color:var(--text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${_esc(e.name)}${isMe?` (${t('lb.you')})`:''}</div>
          <div style="font-size:.72rem;color:var(--text3);">🔥 ${e.streak} · 📚 ${e.known} ${wordsLabel(e.known)}</div>
        </div>
        <div style="text-align:right;flex-shrink:0;">
          <div style="font-weight:700;font-size:.9rem;color:var(--accent);">${e.xp} XP</div>
        </div>
      </div>`;
    }).join('')}
  `;
}

// Auto-submit score when user learns words
let _lastSubmit = 0;
export function maybeSubmitScore(): void {
  if (Date.now() - _lastSubmit < 300_000) return; // max once per 5 min
  _lastSubmit = Date.now();
  _submitScore().catch(() => {});
}
window.maybeSubmitScore = maybeSubmitScore;
