// English Words App — js/features/combo.ts
import { refreshComboBox } from './game-bar-streak.tsx';
import { getGameData, saveGameData } from './game.ts';
import { playSound } from '../core/audio.ts';

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
  if (sessionCombo === 5)  { try { playSound('combo'); } catch(e){} _showComboToast('🔥 ×2 COMBO!'); }
  if (sessionCombo === 10) { try { playSound('combo'); } catch(e){} _showComboToast('⚡ ×3 MEGA!'); }
  if (sessionCombo === 25) { _showComboToast('🌌 JEDI FLOW!'); }
  try {
    const d = getGameData();
    if (sessionCombo > (d.maxCombo || 0)) {
      d.maxCombo = sessionCombo;
      saveGameData(d);
    }
  } catch(e){}
  try { (window.checkAchievements as ()=>void)?.(); } catch(e){}
}
export function breakCombo(): void {
  if (sessionCombo === 0) return;
  sessionCombo = 0; _renderCombo();
}
function _renderCombo(): void {
  refreshComboBox();
}
function _showComboToast(text: string): void {
  const t = document.getElementById('combo-toast') as HTMLElement | null;
  if (!t) return;
  t.textContent = text; t.className = 'combo-toast';
  void t.offsetWidth; t.className = 'combo-toast show';
  setTimeout(() => { t.className = 'combo-toast'; }, 1700);
}
export function flashCard(ok: boolean): void {
  const face = document.getElementById('card-front') as HTMLElement | null;
  if (!face) return;
  face.classList.remove('flash-ok', 'flash-fail'); void face.offsetWidth;
  face.classList.add(ok ? 'flash-ok' : 'flash-fail');
  setTimeout(() => face.classList.remove('flash-ok', 'flash-fail'), 550);
}
