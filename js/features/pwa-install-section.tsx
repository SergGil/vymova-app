// Vymova — js/features/pwa-install-section.tsx
// Settings page's manual PWA-install re-trigger (legacy-modernization-
// roadmap.md item 4 — second settings.tsx slice). Was a 5-branch
// getElementById/.style.display dance in settings.tsx keeping 3 always-
// present-but-hidden elements in sync; here each of the 5 states just
// renders its own single element, driven by the same pwa.ts helpers
// PwaBanner already uses.
import { useEffect, useState, type ReactElement } from 'react';
import {
  isPwaInstalled,
  canTriggerPwaInstall,
  needsPwaIosHint,
  needsBrowserUiHint,
  triggerPwaInstall,
} from '../core/pwa.tsx';
import { t } from './i18n.ts';

const statusStyle = { fontSize: '.78rem', color: 'var(--text2)' } as const;

export function PwaInstallSection(): ReactElement {
  // beforeinstallprompt/appinstalled can arrive well after this section
  // first renders — re-render so the 5-way state below re-evaluates against
  // pwa.ts's freshly updated module state.
  const [, bump] = useState(0);
  useEffect(() => {
    const refresh = () => bump((n) => n + 1);
    window.addEventListener('beforeinstallprompt', refresh);
    window.addEventListener('appinstalled', refresh);
    return () => {
      window.removeEventListener('beforeinstallprompt', refresh);
      window.removeEventListener('appinstalled', refresh);
    };
  }, []);

  if (isPwaInstalled()) {
    return <span style={statusStyle}>{t('settings.pwaInstalled')}</span>;
  }
  if (canTriggerPwaInstall()) {
    return (
      <button
        id="btn-pwa-install"
        className="backup-btn"
        style={{ padding: '7px 14px', fontSize: '.8rem' }}
        onClick={() => {
          void triggerPwaInstall().then(() => bump((n) => n + 1));
        }}
      >
        {t('pwa.installBtn')}
      </button>
    );
  }
  if (needsPwaIosHint()) {
    return <div style={statusStyle} dangerouslySetInnerHTML={{ __html: t('pwa.iosInstallHint') }} />;
  }
  if (needsBrowserUiHint()) {
    return <div style={statusStyle}>{t('settings.pwaAddressBarHint')}</div>;
  }
  return <span style={statusStyle}>{t('settings.pwaUnavailable')}</span>;
}
