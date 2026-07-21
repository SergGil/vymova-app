// Vymova — js/features/analytics-consent-banner.tsx
// GDPR-style consent prompt, shown once (until answered) on any deployment
// that has Firebase Analytics configured — see js/core/analytics.ts, which
// this is the only caller of setConsent() for. No third bottom/top full-width
// banner: a small corner card, deliberately visually distinct from
// PwaBanner (bottom, full-width) and the SW-update banner (top, full-width)
// so the rare case of more than one showing at once doesn't read as one
// broken banner.
import { useEffect, useState, type ReactElement } from 'react';
import { t } from './i18n.ts';
import { hasAnalyticsConfig, getConsent, setConsent } from '../core/analytics.ts';

export function AnalyticsConsentBanner(): ReactElement | null {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (hasAnalyticsConfig() && getConsent() === null) setVisible(true);
  }, []);

  if (!visible) return null;

  function choose(granted: boolean): void {
    setConsent(granted);
    setVisible(false);
  }

  return (
    <div
      id="analytics-consent-banner"
      role="dialog"
      aria-label={t('consent.title')}
      style={{
        position: 'fixed',
        left: 16,
        bottom: 16,
        zIndex: 3100,
        maxWidth: 340,
        background: 'var(--card)',
        color: 'var(--text)',
        border: '1.5px solid var(--border)',
        borderRadius: 14,
        padding: '16px 18px',
        boxShadow: '0 8px 28px rgba(0,0,0,.22)',
        fontSize: '.85rem',
        lineHeight: 1.5,
      }}
    >
      <div style={{ fontWeight: 700, marginBottom: 6 }}>{t('consent.title')}</div>
      <div style={{ color: 'var(--text2)', marginBottom: 12 }}>
        {t('consent.desc')}{' '}
        <a href="./privacy.html" target="_blank" rel="noopener" style={{ color: 'var(--accent)' }}>
          {t('consent.privacyLink')}
        </a>
      </div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
        <button
          onClick={() => choose(false)}
          style={{
            background: 'none',
            border: '1.5px solid var(--border)',
            color: 'var(--text2)',
            borderRadius: 9,
            padding: '7px 12px',
            fontSize: '.82rem',
            fontFamily: 'inherit',
            cursor: 'pointer',
          }}
        >
          {t('consent.decline')}
        </button>
        <button
          onClick={() => choose(true)}
          style={{
            background: 'var(--accent)',
            border: 'none',
            color: '#0a1628',
            borderRadius: 9,
            padding: '7px 14px',
            fontSize: '.82rem',
            fontWeight: 700,
            fontFamily: 'inherit',
            cursor: 'pointer',
          }}
        >
          {t('consent.accept')}
        </button>
      </div>
    </div>
  );
}
