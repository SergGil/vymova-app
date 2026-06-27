// Vymova — js/features/settings.tsx
import { useEffect, type ReactElement } from 'react';
import { updateSrsUI } from '../core/srs.ts';
import { _imgCache, loadWikiImage } from '../core/images.ts';
import { W } from '../../data/words.js';
import { openPage } from './sidebar.tsx';
import { t } from './i18n.ts';
import { refreshGameBarLevel } from './game-bar-level.tsx';
import { bindModalDismiss } from './overlay-utils.ts';
import { isPwaInstalled, canTriggerPwaInstall, needsPwaIosHint, triggerPwaInstall } from '../core/pwa.tsx';
import type { WordEntry } from '../../src/types.js';

type VoidFn = () => void;
const _callWin = (name: string) => (window[name] as VoidFn | undefined)?.();

function haptic(type: string): void {
  if (!navigator.vibrate) return;
  if (type === 'correct')   navigator.vibrate(50);
  else if (type === 'wrong') navigator.vibrate([80, 40, 80]);
  else if (type === 'milestone') navigator.vibrate([50, 30, 50, 30, 200]);
  else if (type === 'combo') navigator.vibrate([30, 20, 30, 20, 60]);
}

export function SettingsInit(): ReactElement | null {
  useEffect(() => {
    // ── Auto Dark Mode ─────────────────────────────────────────────
    if (!localStorage.getItem('ew_theme') && window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
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
    const btnKnow = document.getElementById('btn-know');
    const btnNext = document.getElementById('btn-next');
    btnKnow?.addEventListener('click', onKnow, true);
    btnNext?.addEventListener('click', onNext, true);

    // ── Visibilitychange: auto-prefetch ────────────────────────────
    const onVisibilityChange = () => {
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
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    // ── Initial renders ────────────────────────────────────────────
    try { refreshGameBarLevel(); } catch (e) { console.error(e); }
    try { updateSrsUI(W as unknown as WordEntry[]); } catch (e) { console.error(e); }
    try { _callWin('checkAchievements'); } catch (e) { console.error(e); }
    try { _callWin('render'); } catch (e) { console.error('render ERR:', e); }
    const renderTimer = setTimeout(() => {
      try {
        const ww = document.getElementById('wword');
        if (!ww?.textContent || ww.textContent === '—') _callWin('render');
      } catch (e) {}
    }, 200);

    // ── Star Wars Mode ─────────────────────────────────────────────
    const btnSW = document.getElementById('btn-sw');
    const btnHP = document.getElementById('btn-hp');
    let onSwClick: (() => void) | null = null;
    if (btnSW) {
      if (localStorage.getItem('ew_sw') === '1') {
        document.body.classList.add('sw');
      }
      onSwClick = () => {
        const isOn = document.body.classList.toggle('sw');
        localStorage.setItem('ew_sw', isOn ? '1' : '0');
        btnSW.title = isOn ? t('settings.swTitleOn') : t('settings.swTitle');
        if (isOn) {
          document.body.classList.remove('hp');
          localStorage.setItem('ew_hp', '0');
          if (btnHP) btnHP.title = t('settings.hpTitle');
        }
      };
      btnSW.addEventListener('click', onSwClick);
    }

    // ── Harry Potter Mode ──────────────────────────────────────────
    let onHpClick: (() => void) | null = null;
    if (btnHP) {
      if (localStorage.getItem('ew_hp') === '1') {
        document.body.classList.add('hp');
      }
      onHpClick = () => {
        const isOn = document.body.classList.toggle('hp');
        localStorage.setItem('ew_hp', isOn ? '1' : '0');
        btnHP.title = isOn ? t('settings.hpTitleOn') : t('settings.hpTitle');
        if (isOn) {
          document.body.classList.remove('sw');
          localStorage.setItem('ew_sw', '0');
          if (btnSW) btnSW.title = t('settings.swTitle');
        }
      };
      btnHP.addEventListener('click', onHpClick);
    }

    // ── Modes Modal ────────────────────────────────────────────────
    const _modesOvl = document.getElementById('modes-overlay');
    const _openBtn  = document.getElementById('btn-modes-open');
    let openModes: (() => void) | null = null;
    if (_modesOvl && _openBtn) {
      openModes  = (): void => { _modesOvl.className = 'modes-overlay open'; };
      const closeModes = (): void => { _modesOvl.className = 'modes-overlay'; };
      _openBtn.addEventListener('click', openModes);
      bindModalDismiss('modes-overlay', 'modes-close', closeModes);
    }

    // ── Achievements button ────────────────────────────────────────
    const onAchClick = () => openPage('ach');
    const btnAch = document.getElementById('btn-achievements');
    btnAch?.addEventListener('click', onAchClick);

    // ── PWA install (manual re-trigger from Settings) ───────────────
    const btnPwaInstall = document.getElementById('btn-pwa-install') as HTMLButtonElement | null;
    const pwaStatus = document.getElementById('pwa-install-status');
    const pwaHint = document.getElementById('pwa-install-hint');
    let onPwaInstallClick: (() => void) | null = null;
    function refreshPwaSection(): void {
      if (!btnPwaInstall || !pwaStatus) return;
      if (isPwaInstalled()) {
        btnPwaInstall.style.display = 'none';
        if (pwaHint) pwaHint.style.display = 'none';
        pwaStatus.textContent = t('settings.pwaInstalled');
        pwaStatus.style.display = '';
      } else if (canTriggerPwaInstall()) {
        btnPwaInstall.style.display = '';
        if (pwaHint) pwaHint.style.display = 'none';
        pwaStatus.style.display = 'none';
      } else if (needsPwaIosHint()) {
        btnPwaInstall.style.display = 'none';
        if (pwaHint) { pwaHint.style.display = ''; pwaHint.innerHTML = t('pwa.iosInstallHint'); }
        pwaStatus.style.display = 'none';
      } else {
        btnPwaInstall.style.display = 'none';
        if (pwaHint) pwaHint.style.display = 'none';
        pwaStatus.textContent = t('settings.pwaUnavailable');
        pwaStatus.style.display = '';
      }
    }
    if (btnPwaInstall) {
      refreshPwaSection();
      onPwaInstallClick = () => { triggerPwaInstall().then(refreshPwaSection); };
      btnPwaInstall.addEventListener('click', onPwaInstallClick);
      // beforeinstallprompt can arrive after this page already rendered;
      // appinstalled confirms the install actually completed
      window.addEventListener('beforeinstallprompt', refreshPwaSection);
      window.addEventListener('appinstalled', refreshPwaSection);
    }

    return () => {
      darkMq?.removeEventListener('change', onDarkChange);
      btnKnow?.removeEventListener('click', onKnow, true);
      btnNext?.removeEventListener('click', onNext, true);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      clearTimeout(renderTimer);
      if (btnSW && onSwClick) btnSW.removeEventListener('click', onSwClick);
      if (btnHP && onHpClick) btnHP.removeEventListener('click', onHpClick);
      if (_openBtn && openModes) _openBtn.removeEventListener('click', openModes);
      btnAch?.removeEventListener('click', onAchClick);
      if (btnPwaInstall && onPwaInstallClick) btnPwaInstall.removeEventListener('click', onPwaInstallClick);
      window.removeEventListener('beforeinstallprompt', refreshPwaSection);
      window.removeEventListener('appinstalled', refreshPwaSection);
    };
  }, []);

  return null;
}
