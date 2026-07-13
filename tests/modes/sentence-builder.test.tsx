import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import {
  SentenceBuilderPage,
  openSentenceBuilder,
  tokenize,
} from '../../js/modes/sentence-builder.tsx';
import { setDeckState } from '../../src/deck-store.ts';
import type { WordEntry } from '../../src/types.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

// Real example sentences (4-9 tokens) containing the headword — reused from
// context.tsx's fixtures, which already satisfy sentence-builder.tsx's
// build() token-count filter.
const EIGHT_WORDS: WordEntry[] = [
  ['apple', 'яблуко', 'She ate a fresh apple for breakfast today.', 'Вона їла яблуко.'],
  ['dog', 'собака', 'The dog ran across the muddy yard quickly.', 'Собака побіг.'],
  ['cat', 'кіт', 'The cat slept on the warm windowsill all day.', 'Кіт спав.'],
  ['book', 'книга', 'He read the whole book in one long evening.', 'Він читав книгу.'],
  ['water', 'вода', 'Cold water splashed over the rocks below.', 'Вода бризкала.'],
  ['house', 'дім', 'Their house stood at the end of the street.', 'Їхній дім стояв.'],
  ['tree', 'дерево', 'A tall tree shaded the entire garden path.', 'Дерево тінило.'],
  ['sun', 'сонце', 'The sun rose slowly above the quiet hills.', 'Сонце сходило.'],
];

function poolButtons(container: HTMLElement): HTMLButtonElement[] {
  return Array.from(container.querySelectorAll<HTMLButtonElement>('button')).filter(
    (b) => b.style.background === 'var(--bg)',
  );
}
function clickWord(container: HTMLElement, text: string): void {
  const btn = poolButtons(container).find((b) => b.textContent === text)!;
  act(() => {
    btn.click();
  });
}
function currentSentence(container: HTMLElement): WordEntry {
  return EIGHT_WORDS.find((w) => container.textContent?.includes(w[3]))!;
}
function typeSentence(container: HTMLElement, sentence: string): void {
  for (const word of tokenize(sentence)) clickWord(container, word);
}
function findButton(container: HTMLElement, re: RegExp): HTMLButtonElement {
  return Array.from(container.querySelectorAll('button')).find((b) => b.textContent?.match(re))!;
}

describe('sentence-builder.tsx (SentenceBuilderPage)', () => {
  let root: Root;
  let container: HTMLElement;
  let overlay: HTMLElement;

  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('ew_srs_priority', '0');
    document.body.innerHTML = '';
    overlay = document.createElement('div');
    overlay.id = 'sb-overlay';
    overlay.style.display = 'none';
    document.body.appendChild(overlay);
    setDeckState(EIGHT_WORDS);

    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<SentenceBuilderPage />);
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

  it('opening shows a shuffled tile pool matching the target sentence length', () => {
    act(() => {
      openSentenceBuilder();
    });
    expect(overlay.style.display).toBe('flex');
    const w = currentSentence(container);
    expect(poolButtons(container)).toHaveLength(tokenize(w[2]).length);
  });

  it('assembling the sentence correctly on the first try marks it correct', () => {
    act(() => {
      openSentenceBuilder();
    });
    const w = currentSentence(container);
    typeSentence(container, w[2]);
    expect(container.textContent).toMatch(/✓|правильно/i);
    expect(poolButtons(container)).toHaveLength(0);
    const advanceBtn = Array.from(container.querySelectorAll('button')).find((b) =>
      b.textContent?.match(/наступне|фініш/i),
    );
    expect(advanceBtn).toBeTruthy();
  });

  it('assembling the sentence in the wrong order shows an error, then resets the tiles', () => {
    vi.useFakeTimers();
    act(() => {
      openSentenceBuilder();
    });
    const w = currentSentence(container);
    const reversed = tokenize(w[2]).slice().reverse().join(' ');
    typeSentence(container, reversed);
    expect(container.textContent).toMatch(/спробуй ще раз/i);
    act(() => {
      vi.advanceTimersByTime(700);
    });
    expect(poolButtons(container)).toHaveLength(tokenize(w[2]).length);
    vi.useRealTimers();
  });

  it('using a hint places the next correct tile and decrements the hint count', () => {
    act(() => {
      openSentenceBuilder();
    });
    const hintBtnBefore = findButton(container, /^\D*3\D*$/);
    expect(hintBtnBefore).toBeTruthy();
    act(() => {
      hintBtnBefore.click();
    });
    const hintBtnAfter = findButton(container, /^\D*2\D*$/);
    expect(hintBtnAfter).toBeTruthy();
  });

  it('removing the last tile puts it back in the pool', () => {
    act(() => {
      openSentenceBuilder();
    });
    const w = currentSentence(container);
    const firstWord = tokenize(w[2])[0];
    const before = poolButtons(container).length;
    clickWord(container, firstWord);
    expect(poolButtons(container)).toHaveLength(before - 1);
    const clearBtn = Array.from(container.querySelectorAll('button')).find((b) =>
      b.textContent?.match(/очист/i),
    )!;
    act(() => {
      clearBtn.click();
    });
    expect(poolButtons(container)).toHaveLength(before);
  });

  it('shuffling the tile pool does not change the number of available tiles', () => {
    act(() => {
      openSentenceBuilder();
    });
    const before = poolButtons(container).length;
    const shuffleBtn = Array.from(container.querySelectorAll('button')).find((b) =>
      b.textContent?.match(/перемішати/i),
    )!;
    act(() => {
      shuffleBtn.click();
    });
    expect(poolButtons(container)).toHaveLength(before);
  });

  it('advancing through all 8 sentences shows the final screen', () => {
    act(() => {
      openSentenceBuilder();
    });
    for (let i = 0; i < 8; i++) {
      const w = currentSentence(container);
      typeSentence(container, w[2]);
      const advanceBtn = Array.from(container.querySelectorAll('button')).find((b) =>
        b.textContent?.match(/наступне|фініш/i),
      )!;
      act(() => {
        advanceBtn.click();
      });
    }
    expect(container.querySelector('[data-i18n="common.tryAgain"]')).not.toBeNull();
    expect(container.textContent).toContain('8');
  });

  it('Escape closes the page', () => {
    act(() => {
      openSentenceBuilder();
    });
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    expect(overlay.style.display).toBe('none');
  });

  it('closing via the close button hides the overlay', () => {
    act(() => {
      openSentenceBuilder();
    });
    const closeBtn = container.querySelector<HTMLButtonElement>('button[aria-label]')!;
    act(() => {
      closeBtn.click();
    });
    expect(overlay.style.display).toBe('none');
  });
});
