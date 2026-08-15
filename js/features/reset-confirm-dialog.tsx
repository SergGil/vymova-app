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
import { AlertDialog as AlertDialogPrimitive } from '@base-ui/react/alert-dialog';

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
  // attached; only the Cancel/Reset buttons closed it. AlertDialog (unlike
  // plain Dialog) disables outside-press dismissal unconditionally — no
  // disablePointerDismissal prop needed, it's not even in its prop type.
  // Escape still needs the manual cancel: base-ui has no prop for it, so
  // that reason is blocked directly in onOpenChange (eventDetails.cancel()
  // stops base-ui's own internal close handling too, not just this
  // component's local close()).
  return (
    <AlertDialogPrimitive.Root
      open
      onOpenChange={(nextOpen, eventDetails) => {
        if (nextOpen) return;
        if (eventDetails.reason === 'escape-key') {
          eventDetails.cancel();
          return;
        }
        setOnConfirm(null);
      }}
    >
      <AlertDialogPrimitive.Portal>
        {/* Raw AlertDialogPrimitive (not the shared dialog.tsx wrapper, whose
            DIALOG_Z constant + `fixed` positioning every other modal here
            gets automatically) — base-ui doesn't apply position:fixed on
            its own, so without these both Backdrop and Popup rendered
            position:static, sitting wherever they fell in normal document
            flow (a ~340×32px sliver, not a full-screen backdrop) instead of
            as an overlay — z-index has no effect on a statically positioned
            element, so this was invisible/unusable, not just under
            #settings-overlay. Mirrors dialog.tsx's DialogOverlay/DialogPopup
            fixed-positioning convention exactly (Backdrop and Popup are
            portalled as siblings, not parent/child, same as there). */}
        <AlertDialogPrimitive.Backdrop
          id="modal-overlay"
          className="fixed inset-0 z-[99999] bg-black/55 p-4"
        />
        <AlertDialogPrimitive.Popup className="fixed top-1/2 left-1/2 z-[99999] -translate-1/2 rounded-[20px] pt-8 px-7 pb-6 max-w-[340px] w-full text-center [animation-name:slideUpPanel] [animation-duration:.22s] [animation-timing-function:cubic-bezier(.175,.885,.32,1.275)] bg-[var(--delete-panel-bg)] [border:var(--delete-panel-border)] shadow-[var(--prf-delete-panel-shadow)]">
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
        </AlertDialogPrimitive.Popup>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
}
