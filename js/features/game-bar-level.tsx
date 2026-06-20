// Vymova — js/features/game-bar-level.tsx
// "Block 3" of the game bar: level badge + XP progress toward the next level.
// Re-rendered on demand via refreshGameBarLevel() (called throughout the
// app after known-words count changes).
import type { ReactElement } from 'react';
import { getLevel, getNextLevel, LEVELS } from './game.ts';
import { t, levelName, wordsLabel } from './i18n.ts';
import { notifyStateChange, useStateVersion } from '../../src/store.ts';
import { getKnownInLang } from './mode-utils.ts';

export function GameBarLevel(): ReactElement {
  useStateVersion();
  const n    = getKnownInLang();
  const lv   = getLevel(n);
  const next = getNextLevel(n);
  const lvIdx = LEVELS.indexOf(lv) + 1;

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

export function refreshGameBarLevel(): void {
  notifyStateChange();
}
