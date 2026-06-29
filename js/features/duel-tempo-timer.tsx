// Vymova — js/features/duel-tempo-timer.tsx
// Tempo-таймер game-екрану дуелі (Фаза 9/4). Чисте відображення
// `_getTempoData()`; `_startTempoTimer`/`_setupGameUI` у duel.ts
// записують `state.duelTempo` замість прямого DOM (`dm-timer-bar`/`dm-timer-num`).
import type { ReactElement } from 'react';
import { useEffect, useRef } from 'react';
import { t } from './i18n.ts';
import { _getTempoData, TEMPO_SEC } from './duel.ts';
import { useDuelRoomState } from '../../src/duel-room-store.ts';

export function DuelTempoTimer(): ReactElement | null {
  useDuelRoomState();
  const d = _getTempoData();
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar || d.num !== TEMPO_SEC) return;
    bar.style.transition = 'none';
    bar.style.width = '100%';
    const id = setTimeout(() => {
      bar.style.transition = `width ${TEMPO_SEC}s linear`;
      bar.style.width = '0%';
    }, 50);
    return () => clearTimeout(id);
  }, [d.num]);

  if (!d.visible) return null;

  return (
    <div style={{ marginBottom: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
        <span style={{ fontSize: '.72rem', color: 'var(--text3)' }}>{t('duel.time')}</span>
        <span style={{ fontSize: '.85rem', fontWeight: 700, color: 'var(--accent2)' }}>{d.num}</span>
      </div>
      <div style={{ height: 5, background: 'var(--border)', borderRadius: 3, overflow: 'hidden' }}>
        <div ref={barRef} style={{ height: '100%', background: 'var(--accent2)', borderRadius: 3, width: '100%' }} />
      </div>
    </div>
  );
}
