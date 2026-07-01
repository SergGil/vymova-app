// Vymova — js/features/settings.tsx
import { useEffect, type ReactElement } from 'react';
import { updateSrsUI } from '../core/srs.ts';
import { _imgCache, loadWikiImage } from '../core/images.ts';
import { W } from '../../data/words.js';
import { openPage } from './sidebar.tsx';
import { t } from './i18n.ts';
import { refreshGameBarLevel } from './game-bar-level.tsx';
import { bindModalDismiss } from './overlay-utils.ts';
import {
  isPwaInstalled,
  canTriggerPwaInstall,
  needsPwaIosHint,
  needsBrowserUiHint,
  triggerPwaInstall,
} from '../core/pwa.tsx';
import type { WordEntry } from '../../src/types.js';

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

    // ── Haptic toggle UI ───────────────────────────────────────────
    const hapticToggle = document.getElementById('haptic-toggle') as HTMLInputElement | null;
    const hapticStatusEl = document.getElementById('haptic-status') as HTMLElement | null;
    // Hide haptic section on non-touch devices where vibration is unsupported
    const hapticSection = hapticToggle?.closest('.settings-section') as HTMLElement | null;
    if (hapticSection && !('vibrate' in navigator && navigator.maxTouchPoints > 0)) {
      hapticSection.style.display = 'none';
    }
    if (hapticToggle) {
      hapticToggle.checked = hapticEnabled();
      const updateHapticLabel = () => {
        if (hapticStatusEl)
          hapticStatusEl.textContent = t(hapticToggle.checked ? 'settings.hapticOn' : 'settings.hapticOff');
      };
      updateHapticLabel();
      hapticToggle.addEventListener('change', () => {
        localStorage.setItem('ew_haptic', hapticToggle.checked ? '1' : '0');
        updateHapticLabel();
      });
    }

    // ── Visibilitychange: auto-prefetch ────────────────────────────
    const onVisibilityChange = () => {
      if (document.visibilityState !== 'visible') return;
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

    // ── Fandom theme skins (mutually exclusive body classes) ────────
    const THEME_DEFS = [
      { key: 'sw', titleOn: 'settings.swTitleOn', titleOff: 'settings.swTitle' },
      { key: 'hp', titleOn: 'settings.hpTitleOn', titleOff: 'settings.hpTitle' },
      { key: 'cp', titleOn: 'settings.cpTitleOn', titleOff: 'settings.cpTitle' },
      { key: 'lotr', titleOn: 'settings.lotrTitleOn', titleOff: 'settings.lotrTitle' },
      { key: 'mcu', titleOn: 'settings.mcuTitleOn', titleOff: 'settings.mcuTitle' },
      { key: 'witcher', titleOn: 'settings.witcherTitleOn', titleOff: 'settings.witcherTitle' },
      { key: 'mc', titleOn: 'settings.mcTitleOn', titleOff: 'settings.mcTitle' },
      { key: 'dc', titleOn: 'settings.dcTitleOn', titleOff: 'settings.dcTitle' },
      { key: 'got', titleOn: 'settings.gotTitleOn', titleOff: 'settings.gotTitle' },
      { key: 'dw', titleOn: 'settings.dwTitleOn', titleOff: 'settings.dwTitle' },
      { key: 'dune', titleOn: 'settings.duneTitleOn', titleOff: 'settings.duneTitle' },
      { key: 'hg', titleOn: 'settings.hgTitleOn', titleOff: 'settings.hgTitle' },
      { key: 'avt', titleOn: 'settings.avtTitleOn', titleOff: 'settings.avtTitle' },
      { key: 'dt', titleOn: 'settings.dtTitleOn', titleOff: 'settings.dtTitle' },
    ];
    const themeBtns = THEME_DEFS.map((d) => ({
      ...d,
      el: document.getElementById(`btn-${d.key}`) as HTMLElement | null,
    }));
    const themeCleanups: VoidFn[] = [];
    // Self-heal stale state from before mutual exclusivity was enforced (or
    // any other way two `ew_<key>` flags ended up '1' at once) — apply only
    // the first one found and clear the rest, so at most one skin is active.
    let _themeAlreadyApplied = false;
    themeBtns.forEach(({ key, el, titleOn, titleOff }) => {
      if (!el) return;
      if (localStorage.getItem(`ew_${key}`) === '1') {
        if (_themeAlreadyApplied) {
          localStorage.setItem(`ew_${key}`, '0');
          el.title = t(titleOff);
        } else {
          document.body.classList.add(key);
          _themeAlreadyApplied = true;
        }
      }
      const onClick = () => {
        const isOn = document.body.classList.toggle(key);
        localStorage.setItem(`ew_${key}`, isOn ? '1' : '0');
        el.title = isOn ? t(titleOn) : t(titleOff);
        if (isOn) {
          themeBtns.forEach((other) => {
            if (other.key === key || !other.el) return;
            document.body.classList.remove(other.key);
            localStorage.setItem(`ew_${other.key}`, '0');
            other.el.title = t(other.titleOff);
          });
        }
      };
      el.addEventListener('click', onClick);
      themeCleanups.push(() => el.removeEventListener('click', onClick));
    });

    // ── Modes Modal ────────────────────────────────────────────────
    const _modesOvl = document.getElementById('modes-overlay');
    const _openBtn = document.getElementById('btn-modes-open');
    let openModes: (() => void) | null = null;
    if (_modesOvl && _openBtn) {
      openModes = (): void => {
        _modesOvl.className = 'modes-overlay open';
        const selMode = (document.getElementById('sel-mode') as HTMLSelectElement | null)?.value;
        _modesOvl.querySelectorAll<HTMLElement>('.mode-card').forEach((c) =>
          c.classList.remove('mode-card--active'),
        );
        if (selMode) document.getElementById('btn-' + selMode)?.classList.add('mode-card--active');
      };
      const closeModes = (): void => {
        _modesOvl.className = 'modes-overlay';
      };
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
        if (pwaHint) {
          pwaHint.style.display = '';
          pwaHint.innerHTML = t('pwa.iosInstallHint');
        }
        pwaStatus.style.display = 'none';
      } else if (needsBrowserUiHint()) {
        btnPwaInstall.style.display = 'none';
        if (pwaHint) {
          pwaHint.style.display = '';
          pwaHint.textContent = t('settings.pwaAddressBarHint');
        }
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
      onPwaInstallClick = () => {
        triggerPwaInstall().then(refreshPwaSection);
      };
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
      btnDontKnow?.removeEventListener('click', onDontKnow, true);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      clearTimeout(renderTimer);
      themeCleanups.forEach((fn) => fn());
      if (_openBtn && openModes) _openBtn.removeEventListener('click', openModes);
      btnAch?.removeEventListener('click', onAchClick);
      if (btnPwaInstall && onPwaInstallClick)
        btnPwaInstall.removeEventListener('click', onPwaInstallClick);
      window.removeEventListener('beforeinstallprompt', refreshPwaSection);
      window.removeEventListener('appinstalled', refreshPwaSection);
    };
  }, []);

  return null;
}
