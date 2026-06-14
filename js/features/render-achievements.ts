// English Words App — js/features/render-achievements.ts
// checkAchievements: unlocks achievements and triggers the toast.
// Achievement toast UI lives in achievement-toast.tsx (React).
// Achievements grid/popup live in achievements-page.tsx (React).
import { state } from '../../src/state.ts';
import { ACHIEVEMENTS } from '../../data/achievements.ts';
import {
  getGameData, getModeStats, loadUnlocked, saveUnlocked,
  registerCheckAchievements,
} from './game.ts';
import { showToast } from './achievement-toast.tsx';
import type { Achievement } from '../../src/types.js';

// ── checkAchievements ────────────────────────────────────────
export function checkAchievements(): void {
  const unlocked = loadUnlocked();
  if (unlocked.length >= ACHIEVEMENTS.length) return;
  const unlockedSet = new Set(unlocked);
  const k = state.known.size;
  const g = getGameData();
  const m = getModeStats();
  const c = (state._customWords.length) as number;
  const newOnes: Achievement[] = [];
  ACHIEVEMENTS.forEach(function(a) {
    if (!unlockedSet.has(a.id) && a.check(k, g, m, c)) {
      newOnes.push(a);
      unlocked.push(a.id);
    }
  });
  if (newOnes.length) {
    saveUnlocked(unlocked);
    let i = 0;
    function showNext() {
      if (i < newOnes.length) {
        showToast(newOnes[i]);
        i++;
        if (i < newOnes.length) setTimeout(showNext, 4000);
      }
    }
    showNext();
  }
}

// Register so game.ts can call checkAchievements without importing app.ts
registerCheckAchievements(checkAchievements);
