import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { ScramblePage, openScramble } from '../../js/modes/scramble.tsx';
import { setDeckState } from '../../src/deck-store.ts';
import type { WordEntry } from '../../src/types.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

// All-distinct-letter, 4-9 char, plain a-z headwords so each character maps
// to exactly one tile button — avoids ambiguity when clicking letters in order.
const TEN_WORDS: WordEntry[] = [
  ['cloud', 'хмара', '', ''],
  ['night', 'ніч', '', ''],
  ['plant', 'рослина', '', ''],
  ['cover', 'обкладинка', '', ''],
  ['stone', 'камінь', '', ''],
  ['chair', 'стілець', '', ''],
  ['bread', 'хліб', '', ''],
  ['house', 'дім', '', ''],
  ['water', 'вода', '', ''],
  ['music', 'музика', '', ''],
];

function clickPoolLetter(container: HTMLElement, ch: string): void {
  const btn = Array.from(
    container.querySelectorAll<HTMLButtonElement>('button.scr-tile:not(.scr-tile-placed)'),
  ).find((b) => b.textContent === ch.toUpperCase())!;
  act(() => {
    btn.click();
  });
}

function typeWord(container: HTMLElement, word: string): void {
  for (const ch of word) clickPoolLetter(container, ch);
}

describe('scramble.tsx (ScramblePage)', () => {
  let root: Root;
  let container: HTMLElement;
  let overlay: HTMLElement;

  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('ew_srs_priority', '0');
    document.body.innerHTML = '';
    overlay = document.createElement('div');
    overlay.id = 'scr-overlay';
    overlay.style.display = 'none';
    document.body.appendChild(overlay);
    setDeckState(TEN_WORDS);

    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<ScramblePage />);
    });
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    document.body.innerHTML = '';
  });

  it('renders nothing until opened', () => {
    expect(container.innerHTML).toBe('');
  });

  it('opening shows a shuffled tile pool matching the target word length', () => {
    act(() => {
      openScramble();
    });
    expect(overlay.style.display).toBe('flex');
    const target = TEN_WORDS.find((w) => container.textContent?.includes(w[1]))!;
    expect(container.querySelectorAll('button.scr-tile:not(.scr-tile-placed)')).toHaveLength(
      target[0].length,
    );
  });

  it('spelling the word correctly on the first try marks it correct and shows the advance button', () => {
    act(() => {
      openScramble();
    });
    const target = TEN_WORDS.find((w) => container.textContent?.includes(w[1]))!;
    typeWord(container, target[0]);
    expect(container.textContent).toMatch(/✓|correct|правильно/i);
    const placed = container.querySelectorAll('.scr-tile-placed');
    expect(placed).toHaveLength(target[0].length);
    // Advance ("next"/"finish") button appears once answered.
    const advanceBtn = Array.from(container.querySelectorAll('button')).find(
      (b) => b.textContent?.match(/наступне|фініш/i),
    );
    expect(advanceBtn).toBeTruthy();
  });

  it('spelling the word wrong shows an error, then resets the tiles', async () => {
    vi.useFakeTimers();
    act(() => {
      openScramble();
    });
    const target = TEN_WORDS.find((w) => container.textContent?.includes(w[1]))!;
    // Deliberately spell backwards to fail (all distinct letters, so reversed
    // is never equal to the original for these 5-letter words).
    typeWord(container, target[0].split('').reverse().join(''));
    expect(container.querySelector('.scr-tile-placed')).not.toBeNull();
    act(() => {
      vi.advanceTimersByTime(700);
    });
    expect(container.querySelectorAll('.scr-tile-placed')).toHaveLength(0);
    vi.useRealTimers();
  });

  it('using a hint places the next correct letter and decrements the hint count', () => {
    act(() => {
      openScramble();
    });
    const hintBtnBefore = Array.from(container.querySelectorAll('button')).find((b) =>
      b.textContent?.match(/^\D*3\D*$/),
    );
    expect(hintBtnBefore).toBeTruthy();
    act(() => {
      hintBtnBefore!.click();
    });
    expect(container.querySelectorAll('.scr-tile-placed')).toHaveLength(1);
    const hintBtnAfter = Array.from(container.querySelectorAll('button')).find((b) =>
      b.textContent?.match(/^\D*2\D*$/),
    );
    expect(hintBtnAfter).toBeTruthy();
  });

  it('removing the last letter puts it back in the pool', () => {
    act(() => {
      openScramble();
    });
    const target = TEN_WORDS.find((w) => container.textContent?.includes(w[1]))!;
    clickPoolLetter(container, target[0][0]);
    expect(container.querySelectorAll('.scr-tile-placed')).toHaveLength(1);
    const clearBtn = Array.from(container.querySelectorAll('button')).find((b) =>
      b.textContent?.match(/очист/i),
    )!;
    act(() => {
      clearBtn.click();
    });
    expect(container.querySelectorAll('.scr-tile-placed')).toHaveLength(0);
    expect(
      container.querySelectorAll('button.scr-tile:not(.scr-tile-placed)'),
    ).toHaveLength(target[0].length);
  });

  it('clicking a placed tile removes just that tile', () => {
    act(() => {
      openScramble();
    });
    const target = TEN_WORDS.find((w) => container.textContent?.includes(w[1]))!;
    clickPoolLetter(container, target[0][0]);
    clickPoolLetter(container, target[0][1]);
    expect(container.querySelectorAll('.scr-tile-placed')).toHaveLength(2);
    const placedBtn = container.querySelector<HTMLButtonElement>('.scr-tile-placed')!;
    act(() => {
      placedBtn.click();
    });
    expect(container.querySelectorAll('.scr-tile-placed')).toHaveLength(1);
  });

  it('shuffling the tile pool does not change the number of available tiles', () => {
    act(() => {
      openScramble();
    });
    const before = container.querySelectorAll('button.scr-tile:not(.scr-tile-placed)').length;
    const shuffleBtn = Array.from(container.querySelectorAll('button')).find((b) =>
      b.textContent?.match(/перемішати/i),
    )!;
    act(() => {
      shuffleBtn.click();
    });
    expect(container.querySelectorAll('button.scr-tile:not(.scr-tile-placed)')).toHaveLength(
      before,
    );
  });

  it('advancing through all 10 words shows the final screen', () => {
    act(() => {
      openScramble();
    });
    for (let i = 0; i < 10; i++) {
      const target = TEN_WORDS.find((w) => container.textContent?.includes(w[1]))!;
      typeWord(container, target[0]);
      const advanceBtn = Array.from(container.querySelectorAll('button')).find((b) =>
        b.textContent?.match(/наступне|фініш/i),
      )!;
      act(() => {
        advanceBtn.click();
      });
    }
    expect(container.querySelectorAll('.scr-tile')).toHaveLength(0);
    expect(container.textContent).toContain('10');
  });

  it('Escape closes the page', () => {
    act(() => {
      openScramble();
    });
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    expect(overlay.style.display).toBe('none');
  });

  it('closing via the close button hides the overlay', () => {
    act(() => {
      openScramble();
    });
    const closeBtn = container.querySelector<HTMLButtonElement>('button[aria-label]')!;
    act(() => {
      closeBtn.click();
    });
    expect(overlay.style.display).toBe('none');
  });
});
