// Vymova — js/features/ring.tsx
// SVG progress ring showing level completion
import type { ReactElement } from 'react';
import { useKnownWords } from '../../src/known-words-store.ts';
import { getLevel, getNextLevel } from './game/game.ts';

export function LevelRing(): ReactElement {
  const n = useKnownWords('en').size;
  const lv = getLevel(n);
  const next = getNextLevel(n);
  const pct = next ? Math.min((n - lv.min) / (next.min - lv.min), 1) : 1;

  const r = 22,
    circ = 2 * Math.PI * r;
  const lvEmoji = lv.name.split(' ')[0] || '⭐';

  return (
    <div className="flex flex-col items-center gap-[3px] shrink-0" title="Прогрес рівня">
      <div className="relative size-[52px]">
        <svg width="52" height="52" viewBox="0 0 52 52">
          <circle
            className="fill-none stroke-[var(--border)] [stroke-width:4]"
            cx="26"
            cy="26"
            r="22"
          />
          <circle
            className={
              'fill-none [stroke-width:4] [stroke-linecap:round] transition-[stroke-dashoffset] duration-500 ease-in-out [filter:var(--ring-glow)]' +
              (pct >= 1 ? ' done' : '')
            }
            id="ring-fill"
            cx="26"
            cy="26"
            r="22"
            strokeDasharray={circ}
            strokeDashoffset={circ * (1 - pct)}
            style={{ stroke: lv.color || 'var(--accent)' }}
            transform="rotate(-90 26 26)"
          />
        </svg>
        <div
          className="absolute top-1/2 left-1/2 text-[0.72rem] font-bold text-[var(--text)] text-center leading-none pointer-events-none -translate-1/2"
          id="ring-center"
        >
          {lvEmoji}
          <br />
          <span style={{ fontSize: '.5rem', fontWeight: 400, color: 'var(--text3)' }}>
            {Math.round(pct * 100)}%
          </span>
        </div>
      </div>
    </div>
  );
}
