// English Words App — js/features/combo.ts
let sessionCombo = 0;

export function getComboMult(): number {
  return sessionCombo >= 10 ? 3 : sessionCombo >= 5 ? 2 : 1;
}
export function addCombo(): void {
  sessionCombo++;
  _renderCombo();
  if (sessionCombo === 5)  { try { (window.playSound as (t:string)=>void)?.('combo'); } catch(e){} _showComboToast('🔥 ×2 COMBO!'); }
  if (sessionCombo === 10) { try { (window.playSound as (t:string)=>void)?.('combo'); } catch(e){} _showComboToast('⚡ ×3 MEGA!'); }
  if (sessionCombo === 25) { _showComboToast('🌌 JEDI FLOW!'); }
  try {
    const d = (window.getGameData as ()=>Record<string,unknown>)?.();
    if (d && sessionCombo > ((d.maxCombo as number) || 0)) {
      d.maxCombo = sessionCombo;
      (window.saveGameData as (d:unknown)=>void)?.(d);
    }
  } catch(e){}
  try { (window.checkAchievements as ()=>void)?.(); } catch(e){}
}
export function breakCombo(): void {
  if (sessionCombo === 0) return;
  sessionCombo = 0; _renderCombo();
}
function _renderCombo(): void {
  const box = document.getElementById('combo-box');
  const num = document.getElementById('combo-num');
  const cmx = document.getElementById('combo-x');
  if (!box) return;
  if (sessionCombo >= 2) {
    if (num) num.textContent = String(sessionCombo);
    const m = getComboMult();
    if (cmx) cmx.textContent = m > 1 ? ` ×${m}` : '';
    box.style.display = 'flex';
  } else { box.style.display = 'none'; }
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
