// English Words App — js/features/game-bar-level.tsx
// "Block 3" of the game bar: level badge + XP progress toward the next level.
// Re-rendered on demand via window.renderLevelBadge/renderLevelProgress (called
// throughout the app after known-words count changes).
import { createRoot, type Root } from 'react-dom/client';
import { useEffect, type ReactElement } from 'react';
import { state } from '../../src/state.ts';
import { getLevel, getNextLevel, LEVELS } from './game.ts';
import { updateRing } from './ring.ts';
import { t, levelName, wordsLabel } from './i18n.ts';

function GameBarLevel(): ReactElement {
  const n    = state.known.size;
  const lv   = getLevel(n);
  const next = getNextLevel(n);
  const lvIdx = LEVELS.indexOf(lv) + 1;

  useEffect(() => { try { updateRing(); } catch (_e) {} });

  let fillPct = 100;
  let fillBg: string | undefined;
  let xpText = t('levels.maxReached');
  let nextText = '';
  if (next) {
    const cur  = n - lv.min;
    const need = next.min - lv.min;
    fillPct = Math.round(cur / need * 100);
    fillBg  = `linear-gradient(90deg,${lv.color},${next.color || lv.color})`;
    xpText  = `${cur} / ${need} ${wordsLabel(need)}`;
    nextText = levelName(next.name);
  }

  return (
    <>
      <div className="gb-level-name-row">
        <span className="level-badge" style={{ background: lv.color + '22', color: lv.color }}>{levelName(lv.name)}</span>
        <span className="gb-level-arrow">→</span>
        <span className="gb-level-next">{nextText}</span>
        <span className="gb-level-num" style={{ color: lv.color }}>{lvIdx}</span>
      </div>
      <div className="gb-level-track">
        <div className="gb-level-fill" style={{ width: fillPct + '%', background: fillBg }} />
      </div>
      <div className="gb-level-xp">{xpText}</div>
    </>
  );
}

let _root: Root | null = null;

export function mountGameBarLevel(): void {
  const el = document.getElementById('level-box');
  if (!el) return;
  _root = createRoot(el);
  _root.render(<GameBarLevel />);
}

export function refreshGameBarLevel(): void {
  if (!_root) return;
  _root.render(<GameBarLevel />);
}
