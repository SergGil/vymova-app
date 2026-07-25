// Vymova — js/features/card/card-known-visuals.tsx
// Реактивний візуал картки: #card's 'is-known' class. Виділено з
// card-engine.ts's render() (item: card-engine React migration) — той сам
// більше не торкається DOM напряму для цієї речі.
import { useLayoutEffect } from 'react';
import { useDeckState } from '../../../src/deck-store.ts';
import { useAllKnownWords, getKnownSnapshot } from '../../../src/known-words-store.ts';
import { getActiveKnownSet } from '../mode/mode-utils.ts';

export function CardKnownVisuals(): null {
  const { cw, mode } = useDeckState();
  // Subscribes to every known-words dispatch (any language) — is-known must
  // recompute on a mark/unmark/reset even when cw itself doesn't change
  // (e.g. card-actions.ts's reset-progress flow calls clearAllKnown() before
  // the deck/idx it also resets settle on a genuinely new cw).
  useAllKnownWords();

  // No dependency array on purpose, same as card-indicators.tsx's
  // CardBookmarkNoteVisuals — every render of this component (driven by a
  // deck-store OR known-words-store dispatch) recomputes both, matching what
  // card-engine.ts's render() used to do unconditionally on every call.
  // useLayoutEffect (not useEffect): this touches visible pixels — the card's
  // known-state border/background — that must be correct before the browser
  // paints, unlike CardBookmarkNoteVisuals' subtler bookmark-star/note-opacity
  // updates.
  useLayoutEffect(() => {
    const cardEl = document.getElementById('card');
    if (!cardEl) return;
    const isKnown = !!cw && getActiveKnownSet(mode, getKnownSnapshot('en')).has(cw[0]);
    cardEl.classList.toggle('is-known', isKnown);
  });

  return null;
}
