// Vymova — js/features/reset-confirm-dialog.tsx
// Reset-progress confirm dialog, split out of the static #modal-overlay
// (full-react-migration-roadmap.md Phase 2). Same shape as
// img-clear-confirm.tsx's ImgClearConfirmDialog: a module-level trigger
// (openResetConfirm(cb)) drives a React-owned modal, so the one caller
// (card-actions.ts, a plain .ts file that can't hold JSX) doesn't need to
// know it's React. keyboard.tsx's KeyboardShortcuts checks
// `closest('#modal-overlay')` to suppress card shortcuts while this is
// open — the id is kept on the rendered backdrop for that reason.
import { useEffect, useState, type ReactElement } from 'react';
import { t } from './i18n.ts';

let _open: ((cb: () => void) => void) | null = null;

export function openResetConfirm(cb: () => void): void {
  _open?.(cb);
}

export function ResetConfirmDialog(): ReactElement | null {
  const [onConfirm, setOnConfirm] = useState<(() => void) | null>(null);

  useEffect(() => {
    // Wrapped in an arrow so setState doesn't call cb as a state-updater fn.
    _open = (cb) => setOnConfirm(() => cb);
    return () => {
      _open = null;
    };
  }, []);

  if (!onConfirm) return null;

  // No backdrop-click-to-close — matches the original static
  // #modal-overlay, which never had a click listener attached; only the
  // Cancel/Reset buttons closed it.
  return (
    <div
      id="modal-overlay"
      style={{
        display: 'flex',
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,.55)',
        zIndex: 99999,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      }}
    >
      <div className="prf-delete-panel">
        <div className="prf-delete-icon">⚠️</div>
        <div
          className="prf-delete-title text-[var(--prf-delete-title-color)]"
          data-i18n="modal.resetTitle"
        >
          {t('modal.resetTitle')}
        </div>
        <div
          className="prf-delete-warn text-[var(--prf-delete-warn-color)]"
          data-i18n="modal.resetWarn"
        >
          {t('modal.resetWarn')}
        </div>
        <div className="prf-delete-btns">
          <button
            id="modal-cancel"
            className="prf-delete-btn prf-delete-btn-cancel"
            data-i18n="modal.cancel"
            onClick={() => setOnConfirm(null)}
          >
            {t('modal.cancel')}
          </button>
          <button
            id="modal-confirm"
            className="prf-delete-btn prf-delete-btn-confirm bg-[var(--prf-delete-btn-confirm-bg)]"
            data-i18n="modal.reset"
            onClick={() => {
              onConfirm();
              setOnConfirm(null);
            }}
          >
            {t('modal.reset')}
          </button>
        </div>
      </div>
    </div>
  );
}
