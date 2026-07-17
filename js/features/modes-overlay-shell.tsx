// Vymova — js/features/modes-overlay-shell.tsx
// full-react-migration-roadmap.md Phase 5b: the `#modes-overlay` wrapper
// itself (panel/handle/header/close-button) — previously static markup in
// index.html, with its classList owned by TWO independent writers:
// <PageOverlayVisibility page="modes" overlayId="modes-overlay"
// extraClass="as-page"/> (the real, reactive owner — "modes" is one of the
// 15 nav-store-driven pages) and modes-modal.tsx's ModesModalController,
// which did a wholesale `overlay.className = 'modes-overlay open'` /
// `'modes-overlay'` overwrite whenever its own #btn-modes-open trigger
// fired — clobbering "as-page" if present.
//
// Audit finding: #btn-modes-open is `style="display:none"` in index.html
// with no CSS rule ever making it visible and no other caller of the
// exported openModesModal() anywhere in the codebase — that whole open()/
// close() path (including the mode-card--active "highlight current mode"
// logic inside it) was unreachable dead code. The ONLY real way "modes"
// ever opens is via openPage('modes') (sidebar nav / browser back-forward),
// which PageOverlayVisibility already owns correctly. So there is exactly
// one real owner now: this component renders the overlay itself (no
// separate controller), and modes-modal.tsx's openModesModal() has been
// simplified to just call openPage('modes') directly — see that file.
//
// Close button and backdrop-click both call closePage() directly via
// onClick, replacing overlay-utils.ts's bindModalDismiss(overlay-id,
// close-btn-id) (which additionally did its own now-redundant Escape
// listener — sidebar.tsx's centralized one already covers this page).
// ModeCardGrid is inlined as a direct child instead of a separate
// modes-grid-mount Portal, the same simplification made for HeaderLeft's
// CardIdx/CardKnownCount in Phase 3.
import type { MouseEvent, ReactElement } from 'react';
import { t } from './i18n.ts';
import { closePage } from './sidebar.tsx';
import { ModeCardGrid } from './mode-card-grid.tsx';

export function ModesOverlayShell(): ReactElement {
  const onBackdropClick = (e: MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) closePage();
  };

  return (
    <div id="modes-overlay" className="modes-overlay" onClick={onBackdropClick}>
      <div className="modes-panel">
        <div className="modes-panel-handle" />
        <div className="modes-header">
          <span data-i18n="modesPg.header">{t('modesPg.header')}</span>
          <button
            className="modes-close-btn"
            id="modes-close"
            title={t('common.close')}
            data-i18n-title="common.close"
            onClick={closePage}
          >
            ✕
          </button>
        </div>
        <div className="modes-grid">
          <ModeCardGrid />
        </div>
      </div>
    </div>
  );
}
