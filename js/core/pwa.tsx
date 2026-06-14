// English Words App — js/core/pwa.tsx
// PWA install banner (Chrome + iOS)
import { useState, useEffect, useRef, type ReactElement } from 'react';
import { useStateVersion } from '../../src/store.ts';
import { t } from '../features/i18n.ts';

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
