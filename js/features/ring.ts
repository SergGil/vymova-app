// English Words App — js/features/ring.ts
// SVG progress ring showing level completion
import { state } from '../../src/state.ts';
import { getLevel, getNextLevel } from './game.ts';

export function updateRing(): void {
  const n = state.known.size;
  const lv   = getLevel(n);
  const next = getNextLevel(n);
  const pct  = next ? Math.min((n - lv.min) / (next.min - lv.min), 1) : 1;

  const r = 22, circ = 2 * Math.PI * r;
  const fill = document.getElementById('ring-fill');
  if (fill) {
    fill.style.strokeDashoffset = String(circ * (1 - pct));
    fill.setAttribute('class', 'ring-fill' + (pct >= 1 ? ' done' : ''));
    fill.style.stroke = lv.color || 'var(--accent)';
  }
  const center = document.getElementById('ring-center');
  if (center) {
    const lvEmoji = lv.name.split(' ')[0] || '⭐';
    center.innerHTML = `${lvEmoji}<br><span style="font-size:.5rem;font-weight:400;color:var(--text3)">${Math.round(pct * 100)}%</span>`;
  }
}
