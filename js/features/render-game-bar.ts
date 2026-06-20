// Vymova — js/features/render-game-bar.ts
// Game bar (streak/goal). All 3 blocks live in React:
// Block 1 (streak/shields/combo) + Block 2 (goal) — game-bar-streak.tsx,
// Block 3 (level XP) — game-bar-level.tsx.
import { refreshGameBarLevel } from './game-bar-level.tsx';
import { refreshGameBarStreak, refreshGameBarGoal } from './game-bar-streak.tsx';

export function renderGameBar(): void {
  try { refreshGameBarStreak(); } catch (_e) {}
  try { refreshGameBarGoal(); } catch (_e) {}
  try { refreshGameBarLevel(); } catch (_e) {}
}
