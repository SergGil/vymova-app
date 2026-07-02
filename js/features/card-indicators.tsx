// Vymova — js/features/card-indicators.tsx
// Реактивні індикатори картки: текст нотатки (#card-note-display), зірочка
// закладки та opacity кнопки нотатки (#btn-bookmark/#btn-note).
// Виділено з card-engine.ts's renderCardIndicators() (item: card/deck DOM extraction).
import { useEffect } from 'react';
import { isBookmarked } from './bookmarks.ts';
import { getNoteForWord, hasNote } from './notes.ts';
import { useDeckState } from '../../src/deck-store.ts';

export function CardNoteDisplay() {
  const { cw } = useDeckState();
  if (!cw)
    return <div id="card-note-display" className="card-note-display" style={{ display: 'none' }} />;

  const note = getNoteForWord(cw[0]);
  return (
    <div
      id="card-note-display"
      className="card-note-display"
      style={{ display: note ? '' : 'none' }}
    >
      {note ? `📝 ${note}` : ''}
    </div>
  );
}

// #btn-bookmark/#btn-note самі залишаються статичною розміткою (click-обробники
// прикріплюються в card-actions.ts через getElementById, як і раніше) — цей
// компонент лише реактивно оновлює їхній візуальний стан при зміні cw.
export function CardBookmarkNoteVisuals() {
  const { cw } = useDeckState();

  // No dependency array on purpose: bookmarks.ts/notes.ts have no notify
  // mechanism of their own, so a bookmark/note toggle re-renders this
  // component (any deckStore dispatch does, via useDeckState) without `cw`
  // itself changing — re-running the effect on every render is what picks
  // up that toggle.
  useEffect(() => {
    if (!cw) return;
    const bmBtn = document.getElementById('btn-bookmark');
    const noteBtn = document.getElementById('btn-note');
    if (bmBtn) {
      const isBm = isBookmarked(cw[0]);
      bmBtn.textContent = isBm ? '★' : '☆';
      bmBtn.style.color = isBm ? 'var(--accent2)' : '';
    }
    if (noteBtn) {
      noteBtn.style.opacity = hasNote(cw[0]) ? '1' : '0.5';
    }
  });

  return null;
}
