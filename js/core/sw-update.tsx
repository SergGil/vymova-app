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
    // `once: true` both guards against a repeat/unexpected reload AND — the
    // point this differs from a plain flag-guarded listener — actually
    // removes itself afterward, so clicking "Reload" more than once (e.g.
    // before the first click's controllerchange has fired yet) doesn't
    // accumulate listeners that never get cleaned up.
    navigator.serviceWorker.addEventListener('controllerchange', () => location.reload(), {
      once: true,
    });
    waiting.postMessage({ type: 'SKIP_WAITING' });
  };

  return (
    <div
      id="sw-update-banner"
      className="fixed top-0 left-0 right-0 bg-[#1a1a2e] text-white py-3.5 px-4 z-[3000] flex items-center gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
    >
      <div className="text-[1.6rem] shrink-0">🔄</div>
      <div className="sw-update-text flex-1 text-[0.83rem] leading-[1.4]">
        <strong>{t('sw.updateTitle')}</strong>
        <span>{t('sw.updateDesc')}</span>
      </div>
      <button
        id="sw-update-reload"
        className="bg-[#4ecca3] text-[#1a1a2e] border-0 rounded-lg py-2 px-3.5 font-bold text-[0.83rem] cursor-pointer whitespace-nowrap"
        onClick={() => void onReload()}
      >
        {t('sw.reloadBtn')}
      </button>
      <button
        id="sw-update-close"
        className="bg-transparent border-0 text-[#888] text-[1.2rem] cursor-pointer p-1 shrink-0"
        onClick={() => setVisible(false)}
        aria-label={t('common.close')}
      >
        ✕
      </button>
    </div>
  );
}
