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

// .gb-block's own box/layout properties (docs/full-css-tailwind-migration-
// roadmap.md Tier 3) — border-style isn't reproduced explicitly: Tailwind's
// `border` utility already sets border-width:1px, and preflight's global
// reset already sets border-style:solid, both already implied. The two
// responsive padding overrides can overlap (a viewport can be both
// ≤480px wide AND landscape-short) — restructured as mutually exclusive
// ranges (min-height:501px qualifier), the same technique used for
// .actions-bar-center .btn in Tier 2c, instead of relying on
// `!important`-vs-`!important` order between them.
const GB_BLOCK_BASE =
  'gb-block relative overflow-hidden rounded-[12px] border min-w-0 px-[14px] py-[10px] [@media(max-width:480px)_and_(min-height:501px)]:!p-[10px] [@media(max-height:500px)_and_(max-width:900px)]:!p-[6px_10px]';

export function GameBar(): ReactElement {
  return (
    <div className="game-bar-3 mb-2.5 flex gap-2" id="game-bar">
      <div
        className={
          GB_BLOCK_BASE +
          ' gb-streak-block [background:var(--gb-block-bg)] border-[var(--gb-streak-block-border)] flex-none min-w-[90px] text-center flex flex-col items-center justify-center shadow-[0_0_12px_rgba(230,126,34,0.1),inset_0_0_20px_rgba(0,0,0,0.3)] [@media(max-width:480px)]:!min-w-[76px]' +
          GB_BLOCK_AFTER
        }
      >
        <GameBarStreak />
        <ComboBox />
      </div>

      <div
        className={
          GB_BLOCK_BASE +
          ' gb-goal-block [background:var(--gb-block-bg)] border-[var(--gb-goal-block-border)] flex-[1.3] text-center shadow-[0_0_12px_rgba(0,200,255,0.06),inset_0_0_20px_rgba(0,0,0,0.3)]' +
          GB_BLOCK_AFTER
        }
      >
        <div className="flex justify-between items-center mb-0.5">
          <span
            className="gb-label text-[var(--gb-label-color)] [text-transform:var(--gb-label-transform)] text-[length:var(--gb-label-size)] tracking-[0.04em] [@media(max-width:640px)]:!text-[0.72rem] [@media(max-height:500px)_and_(max-width:900px)]:hidden"
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
          GB_BLOCK_BASE +
          ' gb-wotd-block [background:var(--gb-block-bg)] border-[var(--gb-block-border)] shadow-[var(--gb-block-shadow)] flex-[1.3] min-w-0 cursor-pointer flex flex-col [@media(max-width:480px)]:!hidden' +
          GB_BLOCK_AFTER
        }
      >
        <WordOfDay />
      </div>

      <div
        className={
          GB_BLOCK_BASE +
          ' gb-level-block [background:var(--gb-block-bg)] border-[var(--gb-level-block-border)] shadow-[var(--gb-level-block-shadow)] flex-[1.5] flex flex-col justify-center' +
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
