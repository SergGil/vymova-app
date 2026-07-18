// Vymova — js/core/keyboard.tsx
// Keyboard shortcuts for flashcard navigation
import { useEffect } from 'react';
import { getFlippedSnapshot } from '../../src/deck-store.ts';
import { setFlipped } from './card-engine.ts';
import { getActivePage } from '../../src/nav-store.tsx';

export function KeyboardShortcuts(): null {
  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      // These shortcuts drive the flashcard (#btn-know/#btn-next/...), which
      // is only reachable from the cards/home view — with no page overlay
      // open (getActivePage() === null). Without this guard, e.g. Enter
      // pressed while browsing Statistics or Settings would still click the
      // (hidden, off-screen) #btn-know.
      if (getActivePage() !== null) return;
      const tag = (document.activeElement as HTMLElement).tagName;
      if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return;
      if ((e.target as Element).closest('#modal-overlay')) return;

      const showTransl = () => setFlipped(true);

      if (e.code === 'Space') {
        e.preventDefault();
        if (!getFlippedSnapshot()) showTransl();
        else document.getElementById('btn-next')!.click();
      } else if (e.code === 'Enter') {
        e.preventDefault();
        document.getElementById('btn-know')!.click();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        document.getElementById('btn-next')!.click();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        document.getElementById('btn-prev')!.click();
      } else if (e.code === 'KeyF') {
        e.preventDefault();
        if (!getFlippedSnapshot()) showTransl();
      }
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, []);
  return null;
}
