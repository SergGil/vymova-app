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
import { Dialog, DialogOverlay, DialogPopup, DialogPortal } from '../../src/components/ui/dialog.tsx';

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

  // No backdrop-click-to-close, no Escape-to-close — matches the original
  // static #modal-overlay, which never had a click/keydown listener
  // attached; only the Cancel/Reset buttons closed it. disablePointerDismissal
  // blocks outside-press; base-ui has no equivalent prop for the Escape key,
  // so that one's blocked by canceling the 'escape-key' reason directly in
  // onOpenChange (eventDetails.cancel() stops base-ui's own internal close
  // handling too, not just this component's local close()).
  return (
    <Dialog
      open
      disablePointerDismissal
      onOpenChange={(nextOpen, eventDetails) => {
        if (nextOpen) return;
        if (eventDetails.reason === 'escape-key') {
          eventDetails.cancel();
          return;
        }
        setOnConfirm(null);
      }}
    >
      <DialogPortal>
        <DialogOverlay id="modal-overlay" className="bg-black/55 p-4" />
        <DialogPopup className="rounded-[20px] pt-8 px-7 pb-6 max-w-[340px] w-full text-center [animation-name:slideUpPanel] [animation-duration:.22s] [animation-timing-function:cubic-bezier(.175,.885,.32,1.275)] bg-[var(--delete-panel-bg)] [border:var(--delete-panel-border)] shadow-[var(--prf-delete-panel-shadow)]">
          <div className="text-[2.4rem] mb-3">⚠️</div>
          <div
            className="text-[1.1rem] font-bold mb-1.5 text-[var(--prf-delete-title-color)]"
            data-i18n="modal.resetTitle"
          >
            {t('modal.resetTitle')}
          </div>
          <div
            className="text-[0.82rem] mb-6 leading-[1.4] text-[var(--prf-delete-warn-color)]"
            data-i18n="modal.resetWarn"
          >
            {t('modal.resetWarn')}
          </div>
          <div className="flex gap-2.5">
            <button
              id="modal-cancel"
              className="flex-1 p-[11px] rounded-[12px] [font-family:inherit] text-[0.9rem] font-semibold cursor-pointer transition-all duration-150 border-[1.5px] border-[var(--border)] bg-[var(--bg)] text-[var(--text2)] hover:border-[var(--text2)] hover:text-[var(--text)]"
              data-i18n="modal.cancel"
              onClick={() => setOnConfirm(null)}
            >
              {t('modal.cancel')}
            </button>
            <button
              id="modal-confirm"
              className="flex-1 p-[11px] rounded-[12px] [font-family:inherit] text-[0.9rem] font-semibold cursor-pointer transition-all duration-150 border-0 text-white hover:bg-[#c0392b] bg-[var(--prf-delete-btn-confirm-bg)]"
              data-i18n="modal.reset"
              onClick={() => {
                onConfirm();
                setOnConfirm(null);
              }}
            >
              {t('modal.reset')}
            </button>
          </div>
        </DialogPopup>
      </DialogPortal>
    </Dialog>
  );
}
