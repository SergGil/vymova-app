// Vymova — js/features/settings/settings-page.tsx
// Settings overlay: full page content (legacy-modernization-roadmap.md's
// item 3 converted every individual widget to React but left the section
// skeleton — titles, descriptions, layout — as static markup in index.html
// with data-i18n attributes. This component owns that skeleton too, so
// #settings-overlay is now a single empty mount point (same pattern as
// stats-page.tsx's #stats-overlay) instead of ~200 hand-authored lines.
//
// Deliberately NOT code-split (unlike stats/achievements/grammar/...): every
// widget rendered here was already statically imported into app-root.tsx's
// main bundle, several with effects that must run regardless of whether the
// user ever opens Settings this session — CloudSyncSection's auto-sync
// interval + progress-push listener being the clearest example (see its own
// comment). Lazy-loading this component would silently gate those on a
// settings-page visit. So this stays a plain eager import; only the DOM
// ownership moved, not the load timing.
import type { ReactElement } from 'react';
import { t } from '../i18n.ts';
import { PageHeader } from '../page-header.tsx';
import {
  SrsPriorityToggle,
  HapticToggle,
  ReducedMotionToggle,
  HighContrastToggle,
} from './settings-toggles.tsx';
import { SrsNewCapControl } from '../srs-cap-control.tsx';
import { VoiceSectionHeader } from '../voice/voice.tsx';
import { ImagePrefetchSettings } from '../image-prefetch.tsx';
import { BackupExportSection } from '../export.tsx';
import { NotificationsSection } from '../notifications.tsx';
import { PwaInstallSection } from '../pwa-install-section.tsx';
import { CloudSyncSection } from '../cloud-sync.tsx';
import { BugReportForm } from '../bug-report.tsx';
import { FandomThemeRowsController } from '../fandom-theme-rows.tsx';

const descCls = 'settings-desc text-[.8rem] leading-[1.5] text-[var(--text2)]';
const toggleRowStyle = { display: 'flex', alignItems: 'center', gap: 10, marginTop: 10 } as const;
const sectionCls = 'settings-section bg-[var(--settings-section-bg)] border-[var(--settings-section-border)]';
// A per-instance swap of sectionCls's own bg-.../border-... tokens (not an
// extra .settings-section-danger class layered on top) — two Tailwind
// utility classes both setting border-color on the same element race on
// Tailwind's internal generation order, not source order, so the danger
// section needs its own dedicated pair instead of trying to override
// sectionCls's (docs/full-css-tailwind-migration-roadmap.md Batch 4; same
// masking risk the game-bar per-instance border-color swaps document).
const sectionDangerCls =
  'settings-section bg-[rgba(231,76,60,0.04)] border-[rgba(231,76,60,0.3)]';
const sectionTitleCls = 'text-[0.9rem] font-bold mb-1.5 text-[var(--section-title-color,var(--text))]';

export function SettingsPage(): ReactElement {
  return (
    <div className="page-inner border-l-[var(--page-inner-border)] mx-auto max-w-[760px] px-6 pt-5 pb-8">
      <PageHeader titleKey="settings.pageTitle" />

      {/* Теми / зовнішній вигляд */}
      <div className={sectionCls}>
        <div className={sectionTitleCls} data-i18n="settings.themesTitle">
          {t('settings.themesTitle')}
        </div>
        <div className={descCls} data-i18n="settings.themesDesc">
          {t('settings.themesDesc')}
        </div>
        <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div
            className="sb-toggle-row flex cursor-pointer items-center gap-2.5 rounded-[10px] px-3 py-[9px] transition-colors duration-[120ms] select-none hover:bg-[var(--bg)]"
            id="set-theme"
            style={{ background: 'var(--bg)', borderRadius: 10 }}
          >
            <span className="sb-icon w-[22px] shrink-0 text-center text-base">🌙</span>
            <span className="sb-label flex-1" data-i18n="settings.darkTheme">
              {t('settings.darkTheme')}
            </span>
            <span className="sb-toggle-pill" id="set-theme-pill" />
          </div>
          <FandomThemeRowsController />
        </div>
      </div>

      {/* Пріоритет повторення в іграх */}
      <div className={sectionCls}>
        <div className={sectionTitleCls} data-i18n="settings.srsPriorityTitle">
          {t('settings.srsPriorityTitle')}
        </div>
        <div className={descCls} data-i18n="settings.srsPriorityDesc">
          {t('settings.srsPriorityDesc')}
        </div>
        <div style={toggleRowStyle}>
          <SrsPriorityToggle />
        </div>
      </div>

      {/* Нових карток на день (SRS) */}
      <div className={sectionCls}>
        <div className={sectionTitleCls} data-i18n="settings.srsNewCapTitle">
          {t('settings.srsNewCapTitle')}
        </div>
        <div className={descCls} data-i18n="settings.srsNewCapDesc">
          {t('settings.srsNewCapDesc')}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 10 }}>
          <SrsNewCapControl />
        </div>
      </div>

      {/* Голос */}
      <div className={sectionCls}>
        <VoiceSectionHeader />
        <div id="fy-voices-list" className="mt-2.5 flex flex-col gap-1" />
      </div>

      {/* Зображення */}
      <div className={sectionCls}>
        <div className={sectionTitleCls} data-i18n="settings.imagesTitle">
          {t('settings.imagesTitle')}
        </div>
        <div className={descCls}>
          <span data-i18n="settings.imagesDesc1">{t('settings.imagesDesc1')}</span>{' '}
          <span data-i18n="settings.imagesDesc2">{t('settings.imagesDesc2')}</span>{' '}
          <b>pixabay.com/api/docs</b>.
        </div>
        <ImagePrefetchSettings />
      </div>

      {/* Збереження прогресу */}
      <div className={sectionCls}>
        <div className={sectionTitleCls} data-i18n="settings.backupTitle">
          {t('settings.backupTitle')}
        </div>
        <div className={descCls} data-i18n="settings.backupDesc">
          {t('settings.backupDesc')}
        </div>
        <BackupExportSection />
      </div>

      {/* Сповіщення */}
      <div className={sectionCls}>
        <div className={sectionTitleCls} data-i18n="settings.notifTitle">
          {t('settings.notifTitle')}
        </div>
        <div className={descCls} data-i18n="settings.notifDesc">
          {t('settings.notifDesc')}
        </div>
        <NotificationsSection />
      </div>

      {/* ── Haptic Feedback ── */}
      <div className={sectionCls}>
        <div className={sectionTitleCls} data-i18n="settings.hapticTitle">
          {t('settings.hapticTitle')}
        </div>
        <div className={descCls} data-i18n="settings.hapticDesc">
          {t('settings.hapticDesc')}
        </div>
        <div style={toggleRowStyle}>
          <HapticToggle />
        </div>
        <p
          id="haptic-ios-note"
          style={{ display: 'none', fontSize: '0.78rem', color: 'var(--text3)', marginTop: 8 }}
          data-i18n="settings.hapticIosNote"
        >
          {t('settings.hapticIosNote')}
        </p>
      </div>

      {/* ── Reduced motion ── */}
      <div className={sectionCls}>
        <div className={sectionTitleCls} data-i18n="settings.reducedMotionTitle">
          {t('settings.reducedMotionTitle')}
        </div>
        <div className={descCls} data-i18n="settings.reducedMotionDesc">
          {t('settings.reducedMotionDesc')}
        </div>
        <div style={toggleRowStyle}>
          <ReducedMotionToggle />
        </div>
      </div>

      {/* ── High contrast ── */}
      <div className={sectionCls}>
        <div className={sectionTitleCls} data-i18n="settings.highContrastTitle">
          {t('settings.highContrastTitle')}
        </div>
        <div className={descCls} data-i18n="settings.highContrastDesc">
          {t('settings.highContrastDesc')}
        </div>
        <div style={toggleRowStyle}>
          <HighContrastToggle />
        </div>
      </div>

      {/* ── PWA Install ── */}
      <div className={sectionCls}>
        <div className={sectionTitleCls} data-i18n="settings.pwaTitle">
          {t('settings.pwaTitle')}
        </div>
        <div className={descCls} data-i18n="settings.pwaDesc">
          {t('settings.pwaDesc')}
        </div>
        <div style={{ marginTop: 10 }}>
          <PwaInstallSection />
        </div>
      </div>

      {/* ── Cloud Sync ── */}
      <div className={sectionCls}>
        <div className={sectionTitleCls} data-i18n="settings.cloudTitle">
          {t('settings.cloudTitle')}
        </div>
        <CloudSyncSection />
      </div>

      <div className={sectionCls}>
        <div className={sectionTitleCls} data-i18n="settings.bugTitle">
          {t('settings.bugTitle')}
        </div>
        <div className={descCls} data-i18n="settings.bugDesc">
          {t('settings.bugDesc')}
        </div>
        <BugReportForm />
      </div>

      <div className={sectionDangerCls}>
        <div className={sectionTitleCls} data-i18n="settings.dangerTitle">
          {t('settings.dangerTitle')}
        </div>
        <div className={descCls} data-i18n="settings.dangerDesc">
          {t('settings.dangerDesc')}
        </div>
        <button
          id="btn-reset"
          className="settings-reset-btn mt-3 cursor-pointer rounded-[10px] border-[1.5px] border-[rgba(231,76,60,.5)] bg-transparent px-5 py-2.5 font-[inherit] text-[.88rem] font-semibold text-[#e74c3c] transition-colors duration-150 hover:border-[#e74c3c] hover:bg-[rgba(231,76,60,.1)]"
          data-i18n="settings.resetBtn"
        >
          {t('settings.resetBtn')}
        </button>
      </div>

      <div className="settings-footer mt-1 mb-2 text-center text-[.72rem] text-[var(--text3)]">
        © 2026 Vymova · v1.401.78 ·{' '}
        <a
          href="./privacy.html"
          target="_blank"
          rel="noopener"
          style={{ color: 'inherit', textDecoration: 'underline' }}
        >
          Privacy Policy
        </a>
      </div>
    </div>
  );
}
