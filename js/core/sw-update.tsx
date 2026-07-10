// Vymova — js/core/sw-update.tsx
// "New version available" banner. The actual navigator.serviceWorker.register()
// call is a tiny inline <script> in index.html's <head> (started as early as
// possible, same reasoning as the beforeinstallprompt capture in pwa.tsx) —
// it sets window.__swUpdateAvailable + fires 'ew-sw-update-available' once it
// detects a genuine UPDATE (not the very first install: that has no prior
// navigator.serviceWorker.controller to compare against). This component
// just reacts to that signal.
//
// Previously public/sw.js called self.skipWaiting() unconditionally on
// install, which silently swapped the controller under any already-open tab
// right after a deploy — if that tab later tried to lazily import() a chunk
// not yet cached, it requested a content-hashed filename the new deploy no
// longer serves (old dist/assets/* aren't kept), breaking the import. Now
// sw.js only skips waiting when explicitly told to via postMessage, sent
// here once the user clicks "Reload".
import { useState, useEffect, type ReactElement } from 'react';
import { t } from '../features/i18n.ts';

declare global {
  interface Window {
    __swUpdateAvailable?: boolean;
  }
}

export function SwUpdateBanner(): ReactElement | null {
  const [visible, setVisible] = useState(!!window.__swUpdateAvailable);

  useEffect(() => {
    const onUpdate = (): void => setVisible(true);
    window.addEventListener('ew-sw-update-available', onUpdate);
    return () => window.removeEventListener('ew-sw-update-available', onUpdate);
  }, []);

  if (!visible) return null;

  const onReload = async (): Promise<void> => {
    if (!('serviceWorker' in navigator)) {
      location.reload();
      return;
    }
    const reg = await navigator.serviceWorker.getRegistration();
    const waiting = reg?.waiting;
    if (!waiting) {
      location.reload();
      return;
    }
    // Guarded so a controllerchange that fires for some other reason (or a
    // second one) doesn't trigger a repeat/unexpected reload.
    let reloaded = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (reloaded) return;
      reloaded = true;
      location.reload();
    });
    waiting.postMessage({ type: 'SKIP_WAITING' });
  };

  return (
    <div id="sw-update-banner">
      <div className="sw-update-icon">🔄</div>
      <div className="sw-update-text">
        <strong>{t('sw.updateTitle')}</strong>
        <span>{t('sw.updateDesc')}</span>
      </div>
      <button className="sw-update-btn" onClick={() => void onReload()}>
        {t('sw.reloadBtn')}
      </button>
      <button
        className="sw-update-close"
        onClick={() => setVisible(false)}
        aria-label={t('common.close')}
      >
        ✕
      </button>
    </div>
  );
}
