// Vymova — js/features/use-mode-session.ts
// Shared open/close/completion lifecycle for the ~20 overlay game modes
// (js/modes/*.tsx). Every mode used to hand-roll the same four pieces:
// isOpen state, a module-level `_open`/`_close` function-ref pair (so
// `openXxx()` can be called from outside React — sidebar buttons, other
// modes, bindOverlayOpenClose), an Escape-to-close keydown listener, and a
// "call recordModeComplete(modeId) exactly once when the final screen is
// reached" effect — all copy-pasted per mode with only the overlay id /
// mode id / close-fn name changed. This hook is that shared piece;
// mode-specific state (deck/idx/ok/fail/...) and scoring logic stay local
// to each mode, since those genuinely differ.
import { useEffect, useRef, useState } from 'react';
import { recordModeComplete } from './game.ts';

export interface ModeSessionHandle {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export function useModeSession({
  overlayId,
  modeId,
  isFinal,
  onOpen,
  onClose,
  closeOnEscape = true,
}: {
  overlayId: string;
  modeId: string;
  // This render's "final screen reached" condition (e.g. `idx >= deck.length`
  // — each mode computes its own, shapes vary too much to standardize).
  isFinal: boolean;
  // Runs after isOpen flips true and the overlay is shown — typically the
  // mode's own startGame()/deck-builder.
  onOpen?: () => void;
  // Runs after isOpen flips false and the overlay is hidden — e.g.
  // listening.tsx's speechSynthesis.cancel().
  onClose?: () => void;
  // Modes with extra keyboard shortcuts (number keys, arrows, space, ...)
  // bundle Escape into their own combined keydown effect instead — pass
  // false there and call the returned close() from that effect.
  closeOnEscape?: boolean;
}): ModeSessionHandle {
  const [isOpen, setIsOpen] = useState(false);
  const [completed, setCompleted] = useState(false);

  // open()/close() must be stable, callable-from-anywhere identities (mode
  // files assign them to module-level `_open`/`_close` refs on mount so
  // exported openXxx()/closeXxx() work before/outside any render) — so they
  // read the *latest* onOpen/onClose via a ref instead of closing over the
  // props from whichever render first created them.
  const onOpenRef = useRef(onOpen);
  onOpenRef.current = onOpen;
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  const open = useRef((): void => {
    setIsOpen(true);
    setCompleted(false);
    const overlay = document.getElementById(overlayId);
    if (overlay) overlay.style.display = 'flex';
    onOpenRef.current?.();
  }).current;

  const close = useRef((): void => {
    setIsOpen(false);
    const overlay = document.getElementById(overlayId);
    if (overlay) overlay.style.display = 'none';
    onCloseRef.current?.();
  }).current;

  useEffect(() => {
    // isOpen-gated here (not just left to the caller) so a caller can pass
    // its raw "deck exhausted" condition as isFinal without also having to
    // remember to AND it with isOpen — a stale isFinal=true lingering from
    // the previous session (before the next open()'s onOpen/startGame()
    // resets deck/idx) must not double-fire recordModeComplete while closed.
    if (isOpen && isFinal && !completed) {
      recordModeComplete(modeId);
      setCompleted(true);
    }
  }, [isOpen, isFinal, completed, modeId]);

  useEffect(() => {
    if (!closeOnEscape) return;
    function onKeydown(e: KeyboardEvent): void {
      if (!isOpen) return;
      if (e.key === 'Escape') close();
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, [isOpen, closeOnEscape, close]);

  return { isOpen, open, close };
}
