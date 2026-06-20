// Vymova — js/features/duel-countdown.tsx
// Countdown-екран дуелі (Фаза 9/1). Чисте відображення
// `_getCountdownData()`; `_runCountdown()` у duel.ts оновлює
// `state.duelCountdownNum` кожну секунду через notifyStateChange().
import type { ReactElement } from 'react';
import { useEffect, useRef } from 'react';
import { t } from './i18n.ts';
import { _getCountdownData } from './duel.ts';
import { useStateVersion } from '../../src/store.ts';

export function DuelCountdown(): ReactElement {
  useStateVersion();
  const d = _getCountdownData();
  const numRef = useRef<HTMLDivElement>(null);

  // Пульсація числа при кожному тіку (порт анімації з _runCountdown).
  useEffect(() => {
    const el = numRef.current;
    if (!el || d.num <= 0) return;
    el.style.transform = 'scale(1.4)';
    const id = setTimeout(() => { el.style.transform = ''; }, 150);
    return () => clearTimeout(id);
  }, [d.num]);

  return (
    <>
      <div style={{ fontSize: '.85rem', color: 'var(--text3)', marginBottom: 8 }}>
        {d.oppAvatar} {d.oppName} vs {d.myAvatar} {d.myName}
      </div>
      <div ref={numRef} style={{ fontSize: '6rem', fontWeight: 900, color: 'var(--accent)', lineHeight: 1, fontFamily: "'Orbitron',monospace", transition: 'transform .1s' }}>
        {d.num > 0 ? d.num : '⚡'}
      </div>
      <div style={{ fontSize: '.9rem', color: 'var(--text2)', marginTop: 12 }}>{t('duel.getReady')}</div>
      {d.roomCode && (
        <div style={{ marginTop: 14, fontSize: '.78rem', color: 'var(--text3)' }}>
          🔑 Код кімнати: <span style={{ fontFamily: 'monospace', fontWeight: 700, color: 'var(--accent)', letterSpacing: '.1em' }}>{d.roomCode}</span>
        </div>
      )}
    </>
  );
}
