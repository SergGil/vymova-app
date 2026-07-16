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
      <div className="prf-delete-panel">
        <div className="prf-delete-icon">🗑️</div>
        <div className="prf-delete-title">{t('modal.imgClearTitle')}</div>
        <div className="prf-delete-warn">{t('modal.imgClearWarn')}</div>
        <div className="prf-delete-btns">
          <button id="img-clear-cancel" className="prf-delete-btn prf-delete-btn-cancel" onClick={close}>
            {t('modal.cancelAlt')}
          </button>
          <button
            id="img-clear-confirm"
            className="prf-delete-btn prf-delete-btn-confirm"
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
