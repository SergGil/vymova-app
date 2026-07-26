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

export function GameBar(): ReactElement {
  return (
    <div className="game-bar-3 mb-2.5 flex gap-2" id="game-bar">
      <div className="gb-block gb-streak-block [background:var(--gb-block-bg)] border-[var(--gb-streak-block-border)] shadow-[var(--gb-block-shadow)]">
        <GameBarStreak />
        <ComboBox />
      </div>

      <div className="gb-block gb-goal-block [background:var(--gb-block-bg)] border-[var(--gb-goal-block-border)] shadow-[var(--gb-block-shadow)]">
        <div className="gb-goal-header">
          <span
            className="gb-label text-[var(--gb-label-color)] [text-transform:var(--gb-label-transform)] text-[length:var(--gb-label-size)]"
            data-i18n="cards.dailyGoal"
          >
            {t('cards.dailyGoal')}
          </span>
          <span
            className="goal-set"
            id="goal-set-btn"
            title={t('cards.dailyGoalEditTitle')}
            data-i18n-title="cards.dailyGoalEditTitle"
          >
            ⚙️
          </span>
        </div>
        <GameBarGoal />
      </div>

      <div className="gb-block gb-wotd-block [background:var(--gb-block-bg)] border-[var(--gb-block-border)] shadow-[var(--gb-block-shadow)]">
        <WordOfDay />
      </div>

      <div
        className="gb-block gb-level-block [background:var(--gb-block-bg)] border-[var(--gb-level-block-border)] shadow-[var(--gb-level-block-shadow)]"
        id="level-box"
        title={t('cards.levelProgressTitle')}
        data-i18n-title="cards.levelProgressTitle"
      >
        <GameBarLevel />
      </div>
    </div>
  );
}
