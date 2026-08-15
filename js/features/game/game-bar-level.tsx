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
import { Progress as ProgressPrimitive } from '@base-ui/react/progress';
import { ProgressTrack, ProgressIndicator } from '../../../src/components/ui/progress.tsx';

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
        <span className="gb-level-arrow text-[var(--gb-level-arrow-color)] text-[0.62rem] shrink-0 [@media(max-width:480px)]:hidden!">
          →
        </span>
        <span className="gb-level-next text-[var(--gb-level-next-color)] text-[0.7rem] flex-1 min-w-0 [@media(max-width:480px)]:hidden! truncate">
          {nextText}
        </span>
        <span
          className="gb-level-num inline-flex items-center justify-center rounded-full border-2 border-current text-[0.65rem] font-extrabold shrink-0 opacity-70 ml-auto leading-none [@media(max-width:480px)]:hidden! size-5"
          style={{ color: lv.color }}
        >
          {lvIdx}
        </span>
      </div>
      <ProgressPrimitive.Root value={fillPct} className="block">
        <ProgressTrack className="gb-level-track h-[6px] overflow-hidden rounded-sm bg-[var(--gb-level-track-bg)] [@media(max-width:480px)]:h-[5px]! [@media(max-width:480px)]:my-1!">
          <ProgressIndicator
            className="gb-level-fill h-full rounded-sm [background:var(--fill-glow-bg,linear-gradient(90deg,#5dade2,#27ae60))] shadow-[var(--gb-level-fill-shadow)] [transition:width_.5s_ease]"
            style={{ background: fillBg }}
          />
        </ProgressTrack>
      </ProgressPrimitive.Root>
      <div className="gb-level-xp text-[var(--gb-level-xp-color)] text-[0.62rem] font-['DM_Sans',sans-serif] text-right mt-0.5 [@media(max-width:480px)]:text-[0.68rem]! [@media(max-width:480px)]:text-[var(--text2)]! [@media(max-width:480px)]:text-left! [@media(max-width:480px)]:mt-[3px]">
        {xpText}
      </div>
    </div>
  );
}

export function refreshGameBarLevel(): void {
  notifyGameBarChange();
}
