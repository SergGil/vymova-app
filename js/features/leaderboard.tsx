// Vymova — js/features/leaderboard.tsx
// 🏆 Global leaderboard via Firebase Realtime Database
import { useEffect, useState, type ReactElement } from 'react';
import { t, wordsLabel } from './i18n.ts';
import { getGameData } from './game.ts';
import { getKnownInLang } from './mode-utils.ts';

const DB_URL = 'https://english-words-trainer-557e8-default-rtdb.europe-west1.firebasedatabase.app';

const LB_KEY = 'ew_lb_registered'; // whether we've registered this user

interface LBEntry {
  name: string;
  avatar: string;
  known: number;
  streak: number;
  xp: number;
  updatedAt: number;
}

function _getMyEntry(): LBEntry | null {
  try {
    const profiles = JSON.parse(localStorage.getItem('ew_profiles') || '[]') as {
      id: string;
      name: string;
      avatar: string;
    }[];
    const activeId = localStorage.getItem('ew_active_profile') ?? '';
    const profile = profiles.find((p) => p.id === activeId);
    if (!profile) return null;
    // 'ew_known'/'ew_game' are stored compressed (LZ) and/or under a
    // per-learn-language key — reading them with a raw JSON.parse here threw
    // on every real save and silently returned null, so nobody's score ever
    // got submitted. getGameData()/getKnownInLang() already handle both.
    const game = getGameData();
    const known = getKnownInLang();
    return {
      name: profile.name,
      avatar: profile.avatar,
      known,
      streak: game.streak ?? 0,
      xp: (game.xp ?? 0) + known * 5,
      updatedAt: Date.now(),
    };
  } catch (e) {
    return null;
  }
}

function _getUserId(): string {
  let id = localStorage.getItem('ew_lb_uid');
  if (!id) {
    id = Array.from(crypto.getRandomValues(new Uint8Array(8)), (v) =>
      v.toString(16).padStart(2, '0'),
    ).join('');
    localStorage.setItem('ew_lb_uid', id);
  }
  return id;
}

async function _submitScore(): Promise<void> {
  const entry = _getMyEntry();
  if (!entry || entry.known < 5) return;
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
    const data = (await res.json()) as Record<string, LBEntry> | null;
    if (!data) return [];
    return Object.values(data)
      .filter((e) => e.known >= 5)
      .sort((a, b) => b.xp - a.xp || b.known - a.known)
      .slice(0, 20);
  } catch (e) {
    return [];
  }
}

// Auto-submit score when user learns words
let _lastSubmit = 0;
export function maybeSubmitScore(): void {
  if (Date.now() - _lastSubmit < 300_000) return; // max once per 5 min
  _lastSubmit = Date.now();
  _submitScore().catch(() => {});
}

export function Leaderboard({ refreshKey }: { refreshKey: number }): ReactElement {
  const [state, setState] = useState<'loading' | 'empty' | 'ready'>('loading');
  const [entries, setEntries] = useState<LBEntry[]>([]);
  const [myEntry, setMyEntry] = useState<LBEntry | null>(null);

  useEffect(() => {
    let cancelled = false;
    setState('loading');
    (async () => {
      await _submitScore();
      const list = await _fetchLeaderboard();
      if (cancelled) return;
      setEntries(list);
      setMyEntry(_getMyEntry());
      setState(list.length ? 'ready' : 'empty');
    })();
    return () => {
      cancelled = true;
    };
  }, [refreshKey]);

  if (state === 'loading') {
    return (
      <div style={{ textAlign: 'center', padding: 20, color: 'var(--text3)' }}>
        {t('lb.loading')}
      </div>
    );
  }
  if (state === 'empty') {
    return (
      <div style={{ textAlign: 'center', padding: 20, color: 'var(--text3)' }}>{t('lb.empty')}</div>
    );
  }

  const myRank = entries.findIndex((e) => e.name === myEntry?.name && e.known === myEntry?.known);

  return (
    <>
      <div
        style={{ marginBottom: 12, fontSize: '.78rem', color: 'var(--text3)', textAlign: 'center' }}
      >
        {t('lb.top20')}
        {myRank >= 0 && (
          <>
            <br />
            {t('lb.yourRank')}: <b style={{ color: 'var(--accent)' }}>#{myRank + 1}</b>
          </>
        )}
      </div>
      {entries.map((e, i) => {
        const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}.`;
        const isMe = e.name === myEntry?.name && e.known === myEntry?.known;
        return (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '8px 12px',
              borderRadius: 10,
              background: isMe ? 'rgba(0,200,100,.08)' : 'var(--bg)',
              border: `1.5px solid ${isMe ? 'var(--accent)' : 'var(--border)'}`,
              marginBottom: 6,
            }}
          >
            <span style={{ fontSize: '1rem', flexShrink: 0, minWidth: 28, textAlign: 'center' }}>
              {medal}
            </span>
            <span style={{ fontSize: '1.3rem' }}>{e.avatar}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontWeight: isMe ? 700 : 400,
                  fontSize: '.88rem',
                  color: 'var(--text)',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {e.name}
                {isMe ? ` (${t('lb.you')})` : ''}
              </div>
              <div style={{ fontSize: '.72rem', color: 'var(--text3)' }}>
                🔥 {e.streak} · 📚 {e.known} {wordsLabel(e.known)}
              </div>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontWeight: 700, fontSize: '.9rem', color: 'var(--accent)' }}>
                {e.xp} XP
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
