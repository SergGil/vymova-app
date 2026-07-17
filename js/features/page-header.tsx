// Vymova — js/features/page-header.tsx
// full-react-migration-roadmap.md Phase 4: the `.page-header` block (icon +
// title + close button) repeated across 13 page overlays' static markup in
// index.html — settings/ach/profile/lp/duel/grammar/idioms/lang-history/
// translate/ai-tutor/voice-roleplay/youtube-player/video-player (stats and
// modes are excluded, same as page-overlay-visibility.tsx's own documented
// exceptions).
//
// Two title shapes existed in the original markup:
// - 4 pages (settings/ach/profile/lp): a single self-contained i18n key
//   whose translation already bakes in the icon (e.g. "⚙️ Налаштування") —
//   pass `titleKey` alone.
// - 9 pages (duel/grammar/idioms/...): a literal emoji outside a nested
//   <span data-i18n="nav.xxx"> reusing the same nav.* key as the sidebar
//   label — pass `icon` + `titleKey`.
//
// Close-button wiring also splits in two, preserved exactly as before:
// - 4 pages used to share one `[data-close-page]` querySelectorAll loop in
//   sidebar.tsx — replaced by a plain `onClick={closePage}` here (pass no
//   `closeBtnId`).
// - 9 pages each wire their own close button by a unique id, either via
//   overlay-utils.ts's `bindOverlayDismiss(overlayId, closeBtnId)` (also
//   covers backdrop-click-to-close, which the other 4 pages never had) or
//   (duel) bespoke "smart" close logic — both keyed off that same id, called
//   from the page's own lazily-loaded module after mount. Pass `closeBtnId`
//   to render that id and skip the onClick (the external wiring attaches
//   its own listener).
import type { ReactElement } from 'react';
import { t } from './i18n.ts';
import { closePage } from './sidebar.tsx';

export function PageHeader({
  icon,
  titleKey,
  closeBtnId,
}: {
  icon?: string;
  titleKey: string;
  closeBtnId?: string;
}): ReactElement {
  return (
    <div className="page-header">
      {icon ? (
        <div className="page-title">
          {icon}{' '}
          <span data-i18n={titleKey}>{t(titleKey)}</span>
        </div>
      ) : (
        <div className="page-title" data-i18n={titleKey}>
          {t(titleKey)}
        </div>
      )}
      <button
        className="page-close-btn"
        id={closeBtnId}
        onClick={closeBtnId ? undefined : closePage}
        title={t('common.close')}
        data-i18n-title="common.close"
      >
        ✕
      </button>
    </div>
  );
}
