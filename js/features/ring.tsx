// English Words App — js/features/ring.tsx
// SVG progress ring showing level completion
import type { ReactElement } from 'react';
import { state } from '../../src/state.ts';
import { useStateVersion, notifyStateChange } from '../../src/store.ts';
import { getLevel, getNextLevel } from './game.ts';

export function LevelRing(): ReactElement {
  useStateVersion();
  const n = state.known.size;
  const lv   = getLevel(n);
  const next = getNextLevel(n);
  const pct  = next ? Math.min((n - lv.min) / (next.min - lv.min), 1) : 1;

  const r = 22, circ = 2 * Math.PI * r;
  const lvEmoji = lv.name.split(' ')[0] || '⭐';

  return (
    <div className="ring-wrap" title="Прогрес рівня">
      <div className="ring-container">
        <svg width="52" height="52" viewBox="0 0 52 52">
          <circle className="ring-bg" cx="26" cy="26" r="22"/>
          <circle className={'ring-fill' + (pct >= 1 ? ' done' : '')} id="ring-fill" cx="26" cy="26" r="22"
            strokeDasharray={circ} strokeDashoffset={circ * (1 - pct)}
            style={{ stroke: lv.color || 'var(--accent)' }}
            transform="rotate(-90 26 26)"/>
        </svg>
        <div className="ring-center" id="ring-center">
          {lvEmoji}<br/><span style={{ fontSize: '.5rem', fontWeight: 400, color: 'var(--text3)' }}>{Math.round(pct * 100)}%</span>
        </div>
      </div>
    </div>
  );
}

export function updateRing(): void {
  notifyStateChange();
}
