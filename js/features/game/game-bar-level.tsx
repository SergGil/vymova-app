// Vymova — js/features/game/game-bar-level.tsx
// "Block 3" of the game bar: level badge + XP progress toward the next level.
// Re-rendered on demand via refreshGameBarLevel() (called throughout the
// app after known-words count changes).
import type { ReactElement } from 'react';
import { getLevel, getNextLevel, LEVELS } from './game.ts';
import { t, levelName, wordsLabel } from '../i18n.ts';
import { notifyGameBarChange, useGameBarVersion, useLangVersion } from '../../../src/store.ts';
import { getKnownInLang } from '../mode/mode-utils.ts';
import { openPage } from '../sidebar/sidebar.tsx';

export function GameBarLevel(): ReactElement {
  useGameBarVersion();
  useLangVersion();
  const n = getKnownInLang();
  const lv = getLevel(n);
  const next = getNextLevel(n);
  const lvIdx = LEVELS.indexOf(lv) + 1;

  let fillPct = 100;
  let fillBg: string | undefined;
  let xpText = t('levels.maxReached');
  let nextText = '';
  if (next) {
    const cur = n - lv.min;
    const need = next.min - lv.min;
    fillPct = Math.round((cur / need) * 100);
    fillBg = `linear-gradient(90deg,${lv.color},${next.color || lv.color})`;
    xpText = `${cur} / ${need} ${wordsLabel(need)}`;
    nextText = levelName(next.name);
  }

  return (
    <div
      className="gb-level-clickable cursor-pointer"
      role="button"
      tabIndex={0}
      title={t('levels.goToAchievements')}
      onClick={() => openPage('ach')}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') openPage('ach');
      }}
    >
      <div className="gb-level-name-row mb-[3px] flex flex-nowrap items-center gap-1 overflow-hidden">
        <span
          className="level-badge shadow-[var(--level-badge-shadow)]"
          style={{ background: lv.color + '22', color: lv.color }}
        >
          {levelName(lv.name)}
        </span>
        <span
          className="level-badge level-badge-mobile shadow-[var(--level-badge-shadow)]"
          style={{ background: lv.color + '22', color: lv.color }}
        >
          {t('levels.mobileLabel')}
        </span>
        <span className="gb-level-arrow text-[var(--gb-level-arrow-color)]">→</span>
        <span className="gb-level-next text-[var(--gb-level-next-color)]">{nextText}</span>
        <span className="gb-level-num" style={{ color: lv.color }}>
          {lvIdx}
        </span>
      </div>
      <div className="gb-level-track overflow-hidden rounded-sm bg-[var(--gb-level-track-bg)]">
        <div
          className="gb-level-fill h-full rounded-sm [background:var(--fill-glow-bg,linear-gradient(90deg,#5dade2,#27ae60))] shadow-[var(--gb-level-fill-shadow)] [transition:width_.5s_ease]"
          style={{ width: fillPct + '%', background: fillBg }}
        />
      </div>
      <div className="gb-level-xp text-[var(--gb-level-xp-color)]">{xpText}</div>
    </div>
  );
}

export function refreshGameBarLevel(): void {
  notifyGameBarChange();
}
