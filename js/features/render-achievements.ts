// English Words App — js/features/render-achievements.ts
// Achievement toast, checkAchievements.
// Achievements grid/popup live in achievements-page.tsx (React).
import { state } from '../../src/state.ts';
import { ACHIEVEMENTS } from '../../data/achievements.ts';
import {
  getGameData, getModeStats, loadUnlocked, saveUnlocked,
  registerCheckAchievements,
} from './game.ts';
import { achName as _achName, achHint as _achHint } from './i18n.ts';
import type { Achievement } from '../../src/types.js';

// ── Toast ─────────────────────────────────────────────────────
let _toastTimer: ReturnType<typeof setTimeout> | null = null;

export function showToast(ach: Achievement): void {
  const toast = document.getElementById('achievement-toast')!;
  document.getElementById('toast-icon')!.textContent = ach.icon;
  document.getElementById('toast-name')!.textContent = _achName(ach);
  document.getElementById('toast-desc')!.textContent = _achHint(ach);
  if (_toastTimer) clearTimeout(_toastTimer);
  toast.style.display = 'none';
  toast.classList.remove('show');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.style.display = 'block';
      requestAnimationFrame(() => toast.classList.add('show'));
    });
  });
  _toastTimer = setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => { toast.style.display = 'none'; }, 350);
  }, 3500);
}

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
