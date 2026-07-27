// Vymova — js/features/game/game-bar.tsx
// The 3-block game bar shell (streak/combo, daily goal, word-of-day, level
// XP) — index.html used to hand-author the wrapper divs + the goal label/
// tooltip text as static data-i18n markup around 5 already-React widgets
// (GameBarStreak/ComboBox/GameBarGoal/WordOfDay/GameBarLevel, each reached
// via its own Portal id in app-root.tsx). Consolidated into one owning
// component — same treatment as settings-page.tsx/achievements-page.tsx —
// so #game-bar is now a single empty mount point instead of 5.
import type { ReactElement } from 'react';
import { t } from '../i18n.ts';
import { GameBarStreak, ComboBox, GameBarGoal } from './game-bar-streak.tsx';
import { GameBarLevel } from './game-bar-level.tsx';
import { WordOfDay } from '../word-data/word-of-day.tsx';

// .gb-block's scanline pseudo-element (docs/component-tailwind-conversion-
// roadmap.md, post-project audit cluster 6) — content defaults to `none` at
// :root (light theme), which fully suppresses the pseudo-element there; it's
// restated to '' in body.dark and every fandom root block, matching the old
// `body:not(.dark):not([data-theme]) .gb-block::after { display: none }`
// override exactly (visible whenever dark and/or fandom is active).
const GB_BLOCK_AFTER =
  " after:content-[var(--gb-block-after-content)] after:absolute after:inset-0 after:pointer-events-none after:[background:repeating-linear-gradient(0deg,transparent_0px,transparent_3px,rgba(0,180,255,.025)_3px,rgba(0,180,255,.025)_4px)]";

export function GameBar(): ReactElement {
  return (
    <div className="game-bar-3 mb-2.5 flex gap-2" id="game-bar">
      <div
        className={
          'gb-block gb-streak-block [background:var(--gb-block-bg)] border-[var(--gb-streak-block-border)] shadow-[var(--gb-block-shadow)]' +
          GB_BLOCK_AFTER
        }
      >
        <GameBarStreak />
        <ComboBox />
      </div>

      <div
        className={
          'gb-block gb-goal-block [background:var(--gb-block-bg)] border-[var(--gb-goal-block-border)] shadow-[var(--gb-block-shadow)]' +
          GB_BLOCK_AFTER
        }
      >
        <div className="flex justify-between items-center mb-0.5">
          <span
            className="gb-label text-[var(--gb-label-color)] [text-transform:var(--gb-label-transform)] text-[length:var(--gb-label-size)]"
            data-i18n="cards.dailyGoal"
          >
            {t('cards.dailyGoal')}
          </span>
          <span
            className="flex items-center gap-1 whitespace-nowrap cursor-pointer text-[0.85rem] text-[var(--text3)] leading-none transition-colors duration-150 hover:text-[var(--text)]"
            id="goal-set-btn"
            title={t('cards.dailyGoalEditTitle')}
            data-i18n-title="cards.dailyGoalEditTitle"
          >
            ⚙️
          </span>
        </div>
        <GameBarGoal />
      </div>

      <div
        className={
          'gb-block gb-wotd-block [background:var(--gb-block-bg)] border-[var(--gb-block-border)] shadow-[var(--gb-block-shadow)]' +
          GB_BLOCK_AFTER
        }
      >
        <WordOfDay />
      </div>

      <div
        className={
          'gb-block gb-level-block [background:var(--gb-block-bg)] border-[var(--gb-level-block-border)] shadow-[var(--gb-level-block-shadow)]' +
          GB_BLOCK_AFTER
        }
        id="level-box"
        title={t('cards.levelProgressTitle')}
        data-i18n-title="cards.levelProgressTitle"
      >
        <GameBarLevel />
      </div>
    </div>
  );
}
