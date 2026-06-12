// English Words App — js/features/settings.ts
import { updateSrsUI } from '../core/srs.ts';
import { _imgCache, loadWikiImage } from '../core/images.ts';
import { W } from '../../data/words.js';
import { openPage } from './sidebar.ts';
import { t } from './i18n.ts';
import type { WordEntry } from '../../src/types.js';

type VoidFn = () => void;
const _callWin = (name: string) => (window[name] as VoidFn | undefined)?.();

// ── Auto Dark Mode ─────────────────────────────────────────────
if (!localStorage.getItem('ew_theme') && window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark');
}
window.matchMedia?.('(prefers-color-scheme: dark)').addEventListener('change', (e: MediaQueryListEvent) => {
  if (!localStorage.getItem('ew_theme')) document.body.classList.toggle('dark', e.matches);
});

// ── Haptic Feedback ────────────────────────────────────────────
function haptic(type: string): void {
  if (!navigator.vibrate) return;
  if (type === 'correct')   navigator.vibrate(50);
  else if (type === 'wrong') navigator.vibrate([80, 40, 80]);
  else if (type === 'milestone') navigator.vibrate([50, 30, 50, 30, 200]);
  else if (type === 'combo') navigator.vibrate([30, 20, 30, 20, 60]);
}
document.getElementById('btn-know')?.addEventListener('click', () => haptic('correct'), true);
document.getElementById('btn-next')?.addEventListener('click', () => haptic('wrong'), true);

// ── Visibilitychange: auto-prefetch ────────────────────────────
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState !== 'visible') return;
  const _idle = window._idle as ((fn: VoidFn) => void) | undefined;
  _idle?.(() => {
    const uncached = W.filter(w => !Object.prototype.hasOwnProperty.call(_imgCache, w[0]));
    if (uncached.length > 0 && uncached.length < W.length * 0.1) {
      uncached.slice(0, 20).forEach(w => {
        setTimeout(() => loadWikiImage(w[0], () => {}), Math.random() * 5000);
      });
    }
  });
});

// ── Initial renders ────────────────────────────────────────────
try { _callWin('renderLevelBadge'); } catch (e) { console.error(e); }
try { updateSrsUI(W as unknown as WordEntry[]); } catch (e) { console.error(e); }
try { _callWin('checkAchievements'); } catch (e) { console.error(e); }
try { _callWin('render'); } catch (e) { console.error('render ERR:', e); }
setTimeout(() => {
  try {
    const ww = document.getElementById('wword');
    if (!ww?.textContent || ww.textContent === '—') _callWin('render');
  } catch (e) {}
}, 200);

// ── Star Wars Mode ─────────────────────────────────────────────
const btnSW = document.getElementById('btn-sw');
if (btnSW) {
  if (localStorage.getItem('ew_sw') === '1') {
    document.body.classList.add('sw');
  }
  btnSW.addEventListener('click', () => {
    const isOn = document.body.classList.toggle('sw');
    localStorage.setItem('ew_sw', isOn ? '1' : '0');
    // SW has its own CSS variables — no need to force dark mode
    btnSW.title = isOn ? t('settings.swTitleOn') : t('settings.swTitle');
  });
}

// ── Modes Modal ────────────────────────────────────────────────
const _modesOvl = document.getElementById('modes-overlay');
const _openBtn  = document.getElementById('btn-modes-open');
const _closeBtn = document.getElementById('modes-close');
if (_modesOvl && _openBtn) {
  const openModes  = (): void => { _modesOvl.className = 'modes-overlay open'; };
  const closeModes = (): void => { _modesOvl.className = 'modes-overlay'; };
  _openBtn.addEventListener('click', openModes);
  _closeBtn?.addEventListener('click', closeModes);
  _modesOvl.addEventListener('click', (e: MouseEvent) => { if (e.target === _modesOvl) closeModes(); });
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape' && _modesOvl.className.includes('open')) closeModes();
  });
}

// ── Achievements button ────────────────────────────────────────
document.getElementById('btn-achievements')?.addEventListener('click', () => {
  openPage('ach');
});
