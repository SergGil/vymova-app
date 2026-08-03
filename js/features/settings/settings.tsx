// Vymova — js/features/settings/settings.tsx
import { useEffect, type ReactElement } from 'react';
import { updateSrsUI } from '../../core/srs.ts';
import { _imgCache, loadWikiImage } from '../../core/images.ts';
import { W } from '../../../data/words-data/words.js';
import { openPage } from '../sidebar/sidebar.tsx';
import { refreshGameBarLevel } from '../game/game-bar-level.tsx';
import type { WordEntry } from '../../../src/types.js';

type VoidFn = () => void;
const _callWin = (name: string) => (window[name] as VoidFn | undefined)?.();

function hapticEnabled(): boolean {
  return localStorage.getItem('ew_haptic') !== '0';
}

function haptic(type: string): void {
  if (!navigator.vibrate || !hapticEnabled()) return;
  if (type === 'correct') navigator.vibrate(50);
  else if (type === 'wrong') navigator.vibrate([80, 40, 80]);
  else if (type === 'dontknow') navigator.vibrate([40, 30, 40]);
  else if (type === 'milestone') navigator.vibrate([50, 30, 50, 30, 200]);
  else if (type === 'combo') navigator.vibrate([30, 20, 30, 20, 60]);
}

export function SettingsInit(): ReactElement | null {
  useEffect(() => {
    // ── Auto Dark Mode ─────────────────────────────────────────────
    if (
      !localStorage.getItem('ew_theme') &&
      window.matchMedia?.('(prefers-color-scheme: dark)').matches
    ) {
      document.body.classList.add('dark');
    }
    const darkMq = window.matchMedia?.('(prefers-color-scheme: dark)');
    const onDarkChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('ew_theme')) document.body.classList.toggle('dark', e.matches);
    };
    darkMq?.addEventListener('change', onDarkChange);

    // ── Haptic Feedback ────────────────────────────────────────────
    const onKnow = () => haptic('correct');
    const onNext = () => haptic('wrong');
    const onDontKnow = () => haptic('dontknow');
    const btnKnow = document.getElementById('btn-know');
    const btnNext = document.getElementById('btn-next');
    const btnDontKnow = document.getElementById('btn-dontknow');
    btnKnow?.addEventListener('click', onKnow, true);
    btnNext?.addEventListener('click', onNext, true);
    btnDontKnow?.addEventListener('click', onDontKnow, true);

    // ── Haptic section visibility (touch-only; iOS shows disabled) ──
    // Checked-state, status label, persisting the choice, and the "disabled
    // on iOS" state are all owned by <HapticToggle/> (settings-toggles.tsx,
    // mounted via Portal in app-root.tsx) — this block only handles the
    // surrounding section's touch-device visibility, which is independent of
    // the toggle's own state. SRS-priority/reduced-motion/high-contrast
    // toggles have likewise moved there in full (including reduced-motion's
    // OS-preference listener and both toggles' body-class application).
    const hapticToggle = document.getElementById('haptic-toggle');
    const hapticSection = hapticToggle?.closest('.settings-section') as HTMLElement | null;
    const isTouchDevice = navigator.maxTouchPoints > 0;
    const hasVibrationApi = 'vibrate' in navigator;
    if (hapticSection) {
      if (!isTouchDevice) {
        hapticSection.style.display = 'none';
      } else if (!hasVibrationApi) {
        // iOS: show section but disabled with explanation
        const iosNote = document.getElementById('haptic-ios-note');
        if (iosNote) iosNote.style.display = '';
      }
    }

    // ── Visibilitychange: auto-prefetch ────────────────────────────
    // Runs the full W.filter() scan (10,411 words) at most once per page
    // session, not on every single alt-tab back to this tab — on mobile,
    // where app-switching is frequent, this used to re-scan the entire
    // word list on every single return to the tab.
    let prefetchScanDone = false;
    const onVisibilityChange = () => {
      if (document.visibilityState !== 'visible') return;
      if (prefetchScanDone) return;
      prefetchScanDone = true;
      const _idle = window._idle as ((fn: VoidFn) => void) | undefined;
      _idle?.(() => {
        const uncached = W.filter((w) => !Object.prototype.hasOwnProperty.call(_imgCache, w[0]));
        if (uncached.length > 0 && uncached.length < W.length * 0.1) {
          uncached.slice(0, 20).forEach((w) => {
            setTimeout(() => loadWikiImage(w[0], () => {}), Math.random() * 5000);
          });
        }
      });
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    // ── Initial renders ────────────────────────────────────────────
    try {
      refreshGameBarLevel();
    } catch (e) {
      console.error(e);
    }
    try {
      updateSrsUI(W as unknown as WordEntry[]);
    } catch (e) {
      console.error(e);
    }
    try {
      _callWin('checkAchievements');
    } catch (e) {
      console.error(e);
    }
    try {
      _callWin('render');
    } catch (e) {
      console.error('render ERR:', e);
    }
    const renderTimer = setTimeout(() => {
      try {
        const ww = document.getElementById('wword');
        if (!ww?.textContent || ww.textContent === '—') _callWin('render');
      } catch (e) {}
    }, 200);

    // Fandom theme skins moved to <FandomThemeRowsController/> +
    // fandom-theme-store.ts (see legacy-modernization-roadmap.md item 4d) —
    // no more hidden proxy buttons here.

    // Modes modal moved to <ModesModalController/>
    // (modes-modal.tsx, mounted via Portal in app-root.tsx).

    // ── Achievements button ────────────────────────────────────────
    const onAchClick = () => openPage('ach');
    const btnAch = document.getElementById('btn-achievements');
    btnAch?.addEventListener('click', onAchClick);

    // PWA install section moved to <PwaInstallSection/>
    // (pwa-install-section.tsx, mounted via Portal in app-root.tsx).

    return () => {
      darkMq?.removeEventListener('change', onDarkChange);
      btnKnow?.removeEventListener('click', onKnow, true);
      btnNext?.removeEventListener('click', onNext, true);
      btnDontKnow?.removeEventListener('click', onDontKnow, true);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      clearTimeout(renderTimer);
      btnAch?.removeEventListener('click', onAchClick);
    };
  }, []);

  return null;
}
