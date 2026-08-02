// Vymova — js/features/img-clear-confirm.tsx
// Image-cache-clear confirm dialog, split out of sidebar.tsx
// (legacy-modernization-roadmap.md item 4/5 — first sidebar.tsx slice).
// Same shape as duel-dialogs.tsx's CodeInputDialog: a module-level trigger
// (showImgClearConfirm(cb)) drives a React-owned modal, so the one caller
// (image-prefetch.tsx) doesn't need to know it's React.
import { useEffect, useState, type ReactElement } from 'react';
import { t } from './i18n.ts';

let _open: ((cb: () => void) => void) | null = null;

export function showImgClearConfirm(cb: () => void): void {
  _open?.(cb);
}

export function ImgClearConfirmDialog(): ReactElement | null {
  const [onConfirm, setOnConfirm] = useState<(() => void) | null>(null);

  useEffect(() => {
    // Wrapped in an arrow so setState doesn't call cb as a state-updater fn.
    _open = (cb) => setOnConfirm(() => cb);
    return () => {
      _open = null;
    };
  }, []);

  if (!onConfirm) return null;

  const close = (): void => setOnConfirm(null);

  return (
    <div
      id="img-clear-overlay"
      className="open"
      style={{
        display: 'flex',
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,.65)',
        zIndex: 99999,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="rounded-[20px] pt-8 px-7 pb-6 max-w-[340px] w-full text-center [animation-name:slideUpPanel] [animation-duration:.22s] [animation-timing-function:cubic-bezier(.175,.885,.32,1.275)] bg-[var(--delete-panel-bg)] [border:var(--delete-panel-border)] shadow-[var(--prf-delete-panel-shadow)]">
        <div className="text-[2.4rem] mb-3">🗑️</div>
        <div className="text-[1.1rem] font-bold mb-1.5 text-[var(--prf-delete-title-color)]">
          {t('modal.imgClearTitle')}
        </div>
        <div className="text-[0.82rem] mb-6 leading-[1.4] text-[var(--prf-delete-warn-color)]">
          {t('modal.imgClearWarn')}
        </div>
        <div className="flex gap-2.5">
          <button
            id="img-clear-cancel"
            className="flex-1 p-[11px] rounded-[12px] [font-family:inherit] text-[0.9rem] font-semibold cursor-pointer transition-all duration-150 border-[1.5px] border-[var(--border)] bg-[var(--bg)] text-[var(--text2)] hover:border-[var(--text2)] hover:text-[var(--text)]"
            onClick={close}
          >
            {t('modal.cancelAlt')}
          </button>
          <button
            id="img-clear-confirm"
            className="flex-1 p-[11px] rounded-[12px] [font-family:inherit] text-[0.9rem] font-semibold cursor-pointer transition-all duration-150 border-0 text-white hover:bg-[#c0392b] bg-[var(--prf-delete-btn-confirm-bg)]"
            onClick={() => {
              onConfirm();
              close();
            }}
          >
            {t('modal.clear')}
          </button>
        </div>
      </div>
    </div>
  );
}
