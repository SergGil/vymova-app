// Vymova — js/core/keyboard.tsx
// Keyboard shortcuts for flashcard navigation
import { useEffect } from 'react';
import { state } from '../../src/state.ts';
import { setFlipped } from './card-engine.ts';

export function KeyboardShortcuts(): null {
  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      const tag = (document.activeElement as HTMLElement).tagName;
      if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return;
      if ((e.target as Element).closest('#modal-overlay')) return;

      const showTransl = () => setFlipped(true);

      if (e.code === 'Space') {
        e.preventDefault();
        if (!state.flipped) showTransl();
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
        if (!state.flipped) showTransl();
      }
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, []);
  return null;
}
