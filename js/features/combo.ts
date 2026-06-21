// Vymova — js/features/combo.ts
import { refreshComboBox } from './game-bar-streak.tsx';
import { getGameData, saveGameData } from './game.ts';
import { refreshGameBarLevel } from './game-bar-level.tsx';
import { playSound } from '../core/audio.ts';
import { checkAchievements } from './render-achievements.ts';
import { showComboToast } from './combo-toast.tsx';

let sessionCombo = 0;

export function _getSessionCombo(): number {
  return sessionCombo;
}
export function getComboMult(): number {
  return sessionCombo >= 10 ? 3 : sessionCombo >= 5 ? 2 : 1;
}
export function addCombo(): void {
  sessionCombo++;
  _renderCombo();
  if (sessionCombo === 5)  { try { playSound('combo'); } catch(e){} showComboToast('🔥 ×2 COMBO!'); }
  if (sessionCombo === 10) { try { playSound('combo'); } catch(e){} showComboToast('⚡ ×3 MEGA!'); }
  if (sessionCombo === 25) { showComboToast('🌌 JEDI FLOW!'); }
  try {
    const d = getGameData();
    if (sessionCombo > (d.maxCombo || 0)) {
      d.maxCombo = sessionCombo;
      saveGameData(d);
    }
  } catch(e){}
  try { checkAchievements(); } catch(e){}
}
export function breakCombo(): void {
  if (sessionCombo === 0) return;
  sessionCombo = 0; _renderCombo();
}

// Single place every mode awards XP through — applies the current combo
// multiplier and persists it, so a streak actually pays off everywhere,
// not just in Картки.
export function awardXP(base: number): number {
  const xp = base * getComboMult();
  try {
    const d = getGameData();
    d.xp = (d.xp || 0) + xp;
    saveGameData(d);
    refreshGameBarLevel();
  } catch (e) {}
  return xp;
}
function _renderCombo(): void {
  refreshComboBox();
}
export function flashCard(ok: boolean): void {
  const face = document.getElementById('card-front') as HTMLElement | null;
  if (!face) return;
  face.classList.remove('flash-ok', 'flash-fail'); void face.offsetWidth;
  face.classList.add(ok ? 'flash-ok' : 'flash-fail');
  setTimeout(() => face.classList.remove('flash-ok', 'flash-fail'), 550);
}
