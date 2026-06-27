// Vymova — js/core/pwa.tsx
// PWA install banner (Chrome + iOS)
import { useState, useEffect, useRef, type ReactElement } from 'react';
import { useStateVersion } from '../../src/store.ts';
import { t } from '../features/i18n.ts';

// Module-level so the Settings page can trigger install independently of
// whether the auto-shown banner is currently visible (or was dismissed —
// dismissing the banner shouldn't permanently hide the *option* to install).
// beforeinstallprompt can fire before this module even loads, so a tiny
// inline script in index.html's <head> captures it into a global first —
// pick that up here too, not just future fires.
let _deferredPrompt: any = (window as any).__pwaDeferredPrompt ?? null;
window.addEventListener('beforeinstallprompt', (e: Event) => {
  e.preventDefault();
  _deferredPrompt = e;
});
window.addEventListener('appinstalled', () => { _deferredPrompt = null; });

const _isIOS = (): boolean => /iphone|ipad|ipod/i.test(navigator.userAgent);
const _isStandalone = (): boolean =>
  (navigator as any).standalone === true || window.matchMedia?.('(display-mode: standalone)').matches;
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
  useStateVersion();
  const [visible, setVisible] = useState(false);
  const [iosHint, setIosHint] = useState(false);
  const deferredPrompt = useRef<any>(null);

  useEffect(() => {
    function onBeforeInstall(e: Event): void {
      e.preventDefault();
      deferredPrompt.current = e;
      if (!localStorage.getItem('ew_pwa_dismissed')) {
        setTimeout(() => setVisible(true), 2000);
      }
    }
    window.addEventListener('beforeinstallprompt', onBeforeInstall);

    const isIOS          = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const isInStandalone = (navigator as any).standalone === true;
    let tm: ReturnType<typeof setTimeout> | undefined;
    if (isIOS && !isInStandalone && !localStorage.getItem('ew_pwa_dismissed')) {
      tm = setTimeout(() => {
        setIosHint(true);
        setVisible(true);
      }, 2000);
    }
    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstall);
      if (tm) clearTimeout(tm);
    };
  }, []);

  return (
    <div id="pwa-banner" className={visible ? 'show' : ''}>
      <div className="pwa-icon">📚</div>
      {iosHint ? (
        <div className="pwa-text" dangerouslySetInnerHTML={{ __html: t('pwa.iosInstallHint') }} />
      ) : (
        <div className="pwa-text">
          <strong>{t('pwa.installTitle')}</strong>
          <span>{t('pwa.installDesc')}</span>
        </div>
      )}
      {!iosHint && (
        <button className="pwa-btn" id="pwa-install" onClick={() => {
          setVisible(false);
          if (deferredPrompt.current) {
            deferredPrompt.current.prompt();
            deferredPrompt.current.userChoice.then((r: any) => {
              if (r.outcome === 'accepted') localStorage.setItem('ew_pwa_dismissed', '1');
              deferredPrompt.current = null;
            });
          }
        }}>{t('pwa.installBtn')}</button>
      )}
      <button className="pwa-close" id="pwa-close" onClick={() => {
        setVisible(false);
        localStorage.setItem('ew_pwa_dismissed', '1');
      }}>✕</button>
    </div>
  );
}
