// Vymova — js/core/pwa.tsx
// PWA install banner (Chrome + iOS)
import { useState, useEffect, type ReactElement } from 'react';
import { useLangVersion } from '../../src/store.ts';
import { t } from '../features/i18n.ts';

// Not in lib.dom.d.ts — beforeinstallprompt is Chromium-only, no standard type.
interface BeforeInstallPromptEvent extends Event {
  prompt(): void;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

// Module-level so the Settings page can trigger install independently of
// whether the auto-shown banner is currently visible (or was dismissed —
// dismissing the banner shouldn't permanently hide the *option* to install).
// beforeinstallprompt can fire before this module even loads, so a tiny
// inline script in index.html's <head> captures it into a global first —
// pick that up here too, not just future fires.
let _deferredPrompt: BeforeInstallPromptEvent | null =
  (window as unknown as { __pwaDeferredPrompt?: BeforeInstallPromptEvent }).__pwaDeferredPrompt ??
  null;
window.addEventListener('beforeinstallprompt', (e: Event) => {
  e.preventDefault();
  _deferredPrompt = e as BeforeInstallPromptEvent;
});
window.addEventListener('appinstalled', () => {
  _deferredPrompt = null;
});

const PWA_BANNER_BASE =
  'fixed bottom-0 left-0 right-0 bg-[#1a1a2e] text-white py-3.5 px-4 z-[3000] gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.2)]';

const _isIOS = (): boolean => /iphone|ipad|ipod/i.test(navigator.userAgent);
const _isStandalone = (): boolean =>
  (navigator as Navigator & { standalone?: boolean }).standalone === true ||
  window.matchMedia?.('(display-mode: standalone)').matches;
// Chrome only fires beforeinstallprompt to a page once per cooldown period —
// once it's been dismissed/missed, it won't refire on demand for a while,
// even though the browser's own address-bar/menu install icon stays
// available the whole time (it's a separate, independent affordance).
const _isChromium = (): boolean => /Chrome|Chromium|Edg\//.test(navigator.userAgent) && !_isIOS();

export const isPwaInstalled = (): boolean => _isStandalone();
/** Chrome/Android: a native install prompt is ready. */
export const canTriggerPwaInstall = (): boolean => !!_deferredPrompt;
/** iOS Safari has no native prompt — show the "Add to Home Screen" hint instead. */
export const needsPwaIosHint = (): boolean => _isIOS() && !_isStandalone();
/** Chromium browser that supports installs, but no prompt is captured right
 *  now — point the user at the browser's own install icon instead of
 *  claiming installing is unavailable. */
export const needsBrowserUiHint = (): boolean =>
  !_isStandalone() && !canTriggerPwaInstall() && !needsPwaIosHint() && _isChromium();

export async function triggerPwaInstall(): Promise<boolean> {
  if (!_deferredPrompt) return false;
  _deferredPrompt.prompt();
  const r = await _deferredPrompt.userChoice;
  if (r.outcome === 'accepted') localStorage.setItem('ew_pwa_dismissed', '1');
  _deferredPrompt = null;
  return r.outcome === 'accepted';
}

export function PwaBanner(): ReactElement {
  useLangVersion();
  const [visible, setVisible] = useState(false);
  const [iosHint, setIosHint] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('ew_pwa_dismissed')) return;
    const timers: ReturnType<typeof setTimeout>[] = [];

    // beforeinstallprompt fires (at most) once per page load, and — per the
    // _deferredPrompt comment above — index.html's inline <head> script and
    // this module's own top-level listener already capture it well before
    // this component ever mounts. A *fresh* listener registered here almost
    // never actually sees it fire again, which is why the banner used to
    // never auto-show on Chromium/Android: check the already-captured
    // module state directly instead of only waiting on a new event.
    if (canTriggerPwaInstall()) {
      timers.push(setTimeout(() => setVisible(true), 2000));
    }
    function onBeforeInstall(): void {
      timers.push(setTimeout(() => setVisible(true), 2000));
    }
    window.addEventListener('beforeinstallprompt', onBeforeInstall);

    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const isInStandalone = (navigator as Navigator & { standalone?: boolean }).standalone === true;
    if (isIOS && !isInStandalone) {
      timers.push(
        setTimeout(() => {
          setIosHint(true);
          setVisible(true);
        }, 2000),
      );
    }
    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstall);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div id="pwa-banner" className={PWA_BANNER_BASE + (visible ? ' flex items-center' : ' hidden')}>
      <div className="text-[2rem] shrink-0">📚</div>
      {iosHint ? (
        <div
          className="pwa-text flex-1 text-[0.83rem] leading-[1.4]"
          dangerouslySetInnerHTML={{ __html: t('pwa.iosInstallHint') }}
        />
      ) : (
        <div className="pwa-text flex-1 text-[0.83rem] leading-[1.4]">
          <strong>{t('pwa.installTitle')}</strong>
          <span>{t('pwa.installDesc')}</span>
        </div>
      )}
      {!iosHint && (
        <button
          className="bg-[#4ecca3] text-[#1a1a2e] border-0 rounded-md py-2 px-3.5 font-bold text-[0.83rem] cursor-pointer whitespace-nowrap"
          id="pwa-install"
          onClick={() => {
            setVisible(false);
            void triggerPwaInstall();
          }}
        >
          {t('pwa.installBtn')}
        </button>
      )}
      <button
        className="bg-transparent border-0 text-[#888] text-[1.2rem] cursor-pointer p-1 shrink-0"
        id="pwa-close"
        onClick={() => {
          setVisible(false);
          localStorage.setItem('ew_pwa_dismissed', '1');
        }}
      >
        ✕
      </button>
    </div>
  );
}
