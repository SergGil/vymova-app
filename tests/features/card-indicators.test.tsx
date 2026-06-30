import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { renderCardState, setDeckState } from '../../src/deck-store.ts';
import type { WordEntry } from '../../src/types.ts';
import { CardNoteDisplay, CardBookmarkNoteVisuals } from '../../js/features/card-indicators.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { isBookmarked } = vi.hoisted(() => ({ isBookmarked: vi.fn(() => false) }));
vi.mock('../../js/features/bookmarks.ts', () => ({ isBookmarked }));

const { getNoteForWord, hasNote } = vi.hoisted(() => ({
  getNoteForWord: vi.fn(() => ''),
  hasNote: vi.fn(() => false),
}));
vi.mock('../../js/features/notes.ts', () => ({ getNoteForWord, hasNote }));

const word1: WordEntry = ['hello', 'привіт', '', '', '', ''] as unknown as WordEntry;
const word2: WordEntry = ['world', 'світ', '', '', '', ''] as unknown as WordEntry;

let _roots: Root[] = [];

function mount(Component: () => JSX.Element | null): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<Component />);
  });
  _roots.push(root);
  return { container, root };
}

afterEach(() => {
  for (const root of _roots)
    act(() => {
      root.unmount();
    });
  _roots = [];
});

describe('CardNoteDisplay', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    vi.clearAllMocks();
    act(() => {
      setDeckState([word1]);
      renderCardState(word1, 'en');
    });
  });

  it('hides itself when there is no note', () => {
    getNoteForWord.mockReturnValue('');
    const { container } = mount(CardNoteDisplay);
    const el = container.querySelector('#card-note-display') as HTMLElement;
    expect(el.style.display).toBe('none');
  });

  it('shows the note text when present', () => {
    getNoteForWord.mockReturnValue('my note');
    const { container } = mount(CardNoteDisplay);
    const el = container.querySelector('#card-note-display') as HTMLElement;
    expect(el.textContent).toBe('📝 my note');
    expect(el.style.display).toBe('');
  });
});

describe('CardBookmarkNoteVisuals', () => {
  beforeEach(() => {
    document.body.innerHTML = '<button id="btn-bookmark"></button><button id="btn-note"></button>';
    vi.clearAllMocks();
    act(() => {
      setDeckState([word1, word2]);
      renderCardState(word1, 'en');
    });
  });

  it('shows a filled star and full opacity when the word is bookmarked and has a note', () => {
    isBookmarked.mockReturnValue(true);
    hasNote.mockReturnValue(true);
    mount(CardBookmarkNoteVisuals);
    const bmBtn = document.getElementById('btn-bookmark')!;
    const noteBtn = document.getElementById('btn-note')!;
    expect(bmBtn.textContent).toBe('★');
    expect(bmBtn.style.color).toBe('#f1c40f');
    expect(noteBtn.style.opacity).toBe('1');
  });

  it('shows an empty star and dimmed note button when neither is set', () => {
    isBookmarked.mockReturnValue(false);
    hasNote.mockReturnValue(false);
    mount(CardBookmarkNoteVisuals);
    const bmBtn = document.getElementById('btn-bookmark')!;
    const noteBtn = document.getElementById('btn-note')!;
    expect(bmBtn.textContent).toBe('☆');
    expect(noteBtn.style.opacity).toBe('0.5');
  });

  it('re-derives visuals when the card changes', () => {
    isBookmarked.mockImplementation((w: string) => w === 'hello');
    mount(CardBookmarkNoteVisuals);
    expect(document.getElementById('btn-bookmark')!.textContent).toBe('★');

    act(() => {
      renderCardState(word2, 'en');
    });
    expect(document.getElementById('btn-bookmark')!.textContent).toBe('☆');
  });
});
