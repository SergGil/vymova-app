// Vymova — js/features/duel-resume.tsx
// Картки "продовжити дуель" у лобі (item 33, Фаза 5). Чисте
// відображення `_getResumeSessions()`; duel.ts викликає
// refreshDuelResume() при кожній зміні (нова перевірка сесій,
// продовження, відмова).
import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import { t } from './i18n.ts';
import { _getResumeSessions, _onResumeContinue, _onResumeDiscard, type ResumeSessionVM } from './duel.ts';
import { notifyStateChange, useStateVersion } from '../../src/store.ts';

function ResumeCard({ s }: { s: ResumeSessionVM }): ReactElement {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const remaining = s.expiresAt - now;
  let expiryText: string;
  if (remaining <= 0) {
    expiryText = t('duel.resume.expired');
  } else {
    const h = Math.floor(remaining / 3600000), m = Math.floor((remaining % 3600000) / 60000), sec = Math.floor((remaining % 60000) / 1000);
    const time = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    expiryText = t('duel.resume.expires', { time });
  }
  return (
    <div style={{ background: 'rgba(0,200,100,.1)', border: '1.5px solid var(--accent)', borderRadius: 14, padding: '12px 16px', marginBottom: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
      <div>
        <div style={{ fontSize: '.82rem', fontWeight: 700, color: 'var(--accent)' }}>{t('duel.resume.title')}</div>
        <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 2 }}>
          {s.modeIcon} {s.modeLabel} · {s.score}/{s.roomSize} {t('duel.resume.pts')}{s.oppText ? ` · ${s.oppText}` : ''}
        </div>
        <div style={{ fontSize: '.7rem', color: 'var(--text3)', marginTop: 4 }}>{expiryText}</div>
      </div>
      <div style={{ display: 'flex', gap: 6 }}>
        <button
          style={{ padding: '7px 14px', borderRadius: 9, border: 'none', background: 'var(--accent)', color: '#fff', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', fontSize: '.82rem' }}
          onClick={() => _onResumeContinue(s.roomId)}
        >
          {t('duel.resume.continue')}
        </button>
        <button
          style={{ padding: '7px 12px', borderRadius: 9, border: '1.5px solid var(--border)', background: 'none', color: 'var(--text3)', cursor: 'pointer', fontFamily: 'inherit', fontSize: '.78rem' }}
          onClick={() => _onResumeDiscard(s.roomId)}
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export function DuelResume(): ReactElement | null {
  useStateVersion();
  const sessions = _getResumeSessions();
  if (!sessions.length) return null;
  return <>{sessions.map(s => <ResumeCard key={s.roomId} s={s} />)}</>;
}

export function refreshDuelResume(): void { notifyStateChange(); }
