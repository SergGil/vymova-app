// Vymova — js/features/modes-modal.tsx
// The "choose a game mode" modal — third settings.tsx slice
// (legacy-modernization-roadmap.md item 4). Isolated into its own file for
// testability; still DOM-driven (not real React state) because doing more
// would mean also converting the 30+ static .mode-card buttons each
// js/modes/*.tsx file wires up independently — out of scope here.
import { useEffect, type ReactElement } from 'react';
import { bindModalDismiss } from './overlay-utils.ts';

let _open: (() => void) | null = null;

export function openModesModal(): void {
  _open?.();
}

export function ModesModalController(): ReactElement | null {
  useEffect(() => {
    const overlay = document.getElementById('modes-overlay');
    const openBtn = document.getElementById('btn-modes-open');
    if (!overlay || !openBtn) return;

    const open = (): void => {
      overlay.className = 'modes-overlay open';
      const selMode = (document.getElementById('sel-mode') as HTMLSelectElement | null)?.value;
      overlay
        .querySelectorAll<HTMLElement>('.mode-card')
        .forEach((c) => c.classList.remove('mode-card--active'));
      if (selMode) document.getElementById('btn-' + selMode)?.classList.add('mode-card--active');
    };
    const close = (): void => {
      overlay.className = 'modes-overlay';
    };

    _open = open;
    openBtn.addEventListener('click', open);
    bindModalDismiss('modes-overlay', 'modes-close', close);

    return () => {
      _open = null;
      openBtn.removeEventListener('click', open);
    };
  }, []);

  return null;
}
