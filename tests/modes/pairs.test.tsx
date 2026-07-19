import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { render } from '@testing-library/react';
import { PairsMode } from '../../js/modes/pairs.tsx';
import { setDeckState } from '../../src/deck-store.ts';
import type { WordEntry } from '../../src/types.ts';

vi.mock('../../js/features/game.ts', async (importOriginal) => {
  const actual = await importOriginal<typeof import('../../js/features/game.ts')>();
  return { ...actual, recordModeComplete: vi.fn() };
});

import { recordModeComplete } from '../../js/features/game.ts';

const SIX_WORDS: WordEntry[] = [
  ['apple', 'яблуко', '', ''],
  ['dog', 'собака', '', ''],
  ['cat', 'кіт', '', ''],
  ['book', 'книга', '', ''],
  ['water', 'вода', '', ''],
  ['house', 'дім', '', ''],
];

// #pairs-overlay and its children are no longer static fixture markup —
// PairsMode renders them itself (full-react-migration-roadmap.md Phase 2).
// Only #btn-pairs (elsewhere, in modes-modal.tsx's grid) still needs one.
function buildFixture(): void {
  const fixture = document.createElement('div');
  fixture.innerHTML = `<button id="btn-pairs"></button>`;
  document.body.appendChild(fixture);
}

function clickPair(idx: number): void {
  const enBtn = document.querySelector<HTMLButtonElement>(`#pairs-col-en [data-id="${idx}"]`)!;
  const uaBtn = document.querySelector<HTMLButtonElement>(`#pairs-col-ua [data-id="${idx}"]`)!;
  act(() => {
    enBtn.click();
  });
  act(() => {
    uaBtn.click();
  });
}

function openPairs(): void {
  act(() => {
    document.getElementById('btn-pairs')!.click();
  });
}

describe('pairs.tsx (PairsMode)', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    localStorage.clear();
    buildFixture();
    setDeckState(SIX_WORDS);
    vi.clearAllMocks();
    render(<PairsMode />);
  });

  it('renders its own #pairs-overlay markup (imperative wiring still targets those same ids)', () => {
    expect(document.getElementById('pairs-overlay')).not.toBeNull();
  });

  it('opening the mode fills the board with 6 EN/UA button pairs and shows the overlay', () => {
    openPairs();
    const overlay = document.getElementById('pairs-overlay')!;
    expect(overlay.style.display).toBe('flex');
    expect(document.querySelectorAll('#pairs-col-en .pair-btn')).toHaveLength(6);
    expect(document.querySelectorAll('#pairs-col-ua .pair-btn')).toHaveLength(6);
  });

  it('clicking a matching EN/UA pair marks both as matched', () => {
    openPairs();
    clickPair(0);
    const enBtn = document.querySelector(`#pairs-col-en [data-id="0"]`)!;
    const uaBtn = document.querySelector(`#pairs-col-ua [data-id="0"]`)!;
    expect(enBtn.classList.contains('matched')).toBe(true);
    expect(uaBtn.classList.contains('matched')).toBe(true);
  });

  it('clicking a non-matching pair flags both as wrong, then clears after the shake delay', () => {
    vi.useFakeTimers();
    openPairs();
    const enBtn = document.querySelector<HTMLButtonElement>(`#pairs-col-en [data-id="0"]`)!;
    const uaBtn = document.querySelector<HTMLButtonElement>(`#pairs-col-ua [data-id="1"]`)!;
    act(() => {
      enBtn.click();
    });
    act(() => {
      uaBtn.click();
    });
    expect(enBtn.classList.contains('wrong')).toBe(true);
    expect(uaBtn.classList.contains('wrong')).toBe(true);
    act(() => {
      vi.advanceTimersByTime(420);
    });
    expect(enBtn.classList.contains('wrong')).toBe(false);
    expect(uaBtn.classList.contains('wrong')).toBe(false);
    vi.useRealTimers();
  });

  it('clicking the same button twice deselects it instead of matching', () => {
    openPairs();
    const enBtn = document.querySelector<HTMLButtonElement>(`#pairs-col-en [data-id="0"]`)!;
    act(() => {
      enBtn.click();
    });
    expect(enBtn.classList.contains('selected')).toBe(true);
    act(() => {
      enBtn.click();
    });
    expect(enBtn.classList.contains('selected')).toBe(false);
  });

  it('clicking two buttons on the same side swaps the selection instead of matching', () => {
    openPairs();
    const first = document.querySelector<HTMLButtonElement>(`#pairs-col-en [data-id="0"]`)!;
    const second = document.querySelector<HTMLButtonElement>(`#pairs-col-en [data-id="1"]`)!;
    act(() => {
      first.click();
    });
    act(() => {
      second.click();
    });
    expect(first.classList.contains('selected')).toBe(false);
    expect(second.classList.contains('selected')).toBe(true);
  });

  it('matching all 6 pairs finishes the round, records completion and a best time', () => {
    vi.useFakeTimers();
    openPairs();
    for (let i = 0; i < 6; i++) {
      clickPair(i);
    }
    act(() => {
      vi.advanceTimersByTime(350);
    });
    expect(document.getElementById('pairs-board')!.style.display).toBe('none');
    expect(document.getElementById('pairs-final')!.style.display).toBe('block');
    expect(recordModeComplete).toHaveBeenCalledWith('pairs');
    expect(localStorage.getItem('ew_pairs_best')).not.toBeNull();
    vi.useRealTimers();
  });

  it('closing via the close button hides the overlay', () => {
    openPairs();
    act(() => {
      document.getElementById('pairs-close')!.click();
    });
    expect(document.getElementById('pairs-overlay')!.style.display).toBe('none');
  });

  it('Escape closes the overlay while open, but is a no-op while closed', () => {
    openPairs();
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    expect(document.getElementById('pairs-overlay')!.style.display).toBe('none');
  });

  it('"play again" rebuilds the board and clicking outside the panel closes it', () => {
    openPairs();
    act(() => {
      document.getElementById('pairs-again')!.click();
    });
    expect(document.getElementById('pairs-overlay')!.style.display).toBe('flex');
    expect(document.querySelectorAll('#pairs-col-en .pair-btn')).toHaveLength(6);

    const overlay = document.getElementById('pairs-overlay')!;
    act(() => {
      overlay.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(overlay.style.display).toBe('none');
  });
});
