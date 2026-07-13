import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { SpellingBeePage, openSpellingBee } from '../../js/modes/spelling-bee.tsx';
import { setDeckState } from '../../src/deck-store.ts';
import type { WordEntry } from '../../src/types.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
  window.HTMLInputElement.prototype,
  'value',
)!.set!;
function typeInto(input: HTMLInputElement, value: string): void {
  nativeInputValueSetter.call(input, value);
  input.dispatchEvent(new Event('input', { bubbles: true }));
}

// Synthetic, dictionary-unique, >=4 letter EN headwords (spelling-bee.tsx
// filters build() to w[0].length >= 4 for learnLang 'en').
const TEN_WORDS: WordEntry[] = [
  ['zqcloud', 'зхмара', '', ''],
  ['zqnight', 'зніч', '', ''],
  ['zqplant', 'зрослина', '', ''],
  ['zqcover', 'зобкладинка', '', ''],
  ['zqstone', 'закамінь', '', ''],
  ['zqchair', 'застілець', '', ''],
  ['zqbread', 'захліб', '', ''],
  ['zqhouse', 'здім', '', ''],
  ['zqwater', 'звода', '', ''],
  ['zqmusic', 'змузика', '', ''],
];

function currentWord(container: HTMLElement): WordEntry {
  return TEN_WORDS.find((w) => container.textContent?.includes(w[1]))!;
}
function findButton(container: HTMLElement, re: RegExp): HTMLButtonElement {
  return Array.from(container.querySelectorAll('button')).find((b) => b.textContent?.match(re))!;
}
function answerAndAdvance(container: HTMLElement, value: string): void {
  const input = container.querySelector<HTMLInputElement>('input')!;
  act(() => {
    typeInto(input, value);
  });
  act(() => {
    findButton(container, /перевірити/i).click();
  });
  act(() => {
    findButton(container, /наступне|фініш/i).click();
  });
}

describe('spelling-bee.tsx (SpellingBeePage)', () => {
  let root: Root;
  let container: HTMLElement;
  let overlay: HTMLElement;

  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('ew_srs_priority', '0');
    document.body.innerHTML = '';
    overlay = document.createElement('div');
    overlay.id = 'bee-overlay';
    overlay.style.display = 'none';
    document.body.appendChild(overlay);
    setDeckState(TEN_WORDS);

    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<SpellingBeePage />);
    });
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    document.body.innerHTML = '';
  });

  it('opening starts a round with an input field and a hint button', () => {
    act(() => {
      openSpellingBee();
    });
    expect(overlay.style.display).toBe('flex');
    expect(container.querySelector('input')).not.toBeNull();
    expect(container.textContent).toMatch(/1/);
  });

  it('typing the correct spelling marks it correct', () => {
    act(() => {
      openSpellingBee();
    });
    const w = currentWord(container);
    const input = container.querySelector<HTMLInputElement>('input')!;
    act(() => {
      typeInto(input, w[0]);
    });
    act(() => {
      findButton(container, /перевірити/i).click();
    });
    expect(container.textContent).toMatch(/✓|правильно/i);
  });

  it('a near-miss spelling (edit distance 1) still counts as correct with an "almost" note', () => {
    act(() => {
      openSpellingBee();
    });
    const w = currentWord(container);
    const nearMiss = w[0].slice(0, -1) + 'x'; // swap the last letter
    const input = container.querySelector<HTMLInputElement>('input')!;
    act(() => {
      typeInto(input, nearMiss);
    });
    act(() => {
      findButton(container, /перевірити/i).click();
    });
    expect(container.textContent).toContain(w[0]);
  });

  it('a wrong spelling is marked wrong and reveals the correct word', () => {
    act(() => {
      openSpellingBee();
    });
    const w = currentWord(container);
    const input = container.querySelector<HTMLInputElement>('input')!;
    act(() => {
      typeInto(input, 'zzzznotevenclose');
    });
    act(() => {
      findButton(container, /перевірити/i).click();
    });
    expect(container.textContent).toContain(w[0]);
  });

  it('submitting empty input shows a warning instead of grading', () => {
    vi.useFakeTimers();
    act(() => {
      openSpellingBee();
    });
    act(() => {
      findButton(container, /перевірити/i).click();
    });
    expect(container.querySelector('input')!.placeholder).toMatch(/введіть|введи/i);
    act(() => {
      vi.advanceTimersByTime(1500);
    });
    vi.useRealTimers();
  });

  it('using a hint reveals part of the word and decrements the hint count', () => {
    act(() => {
      openSpellingBee();
    });
    const hintBtnBefore = findButton(container, /^\D*3\D*$/);
    expect(hintBtnBefore).toBeTruthy();
    act(() => {
      hintBtnBefore.click();
    });
    expect(container.textContent).toContain('💡');
    expect(findButton(container, /^\D*2\D*$/)).toBeTruthy();
  });

  it('advancing through all 10 words shows the final screen', () => {
    act(() => {
      openSpellingBee();
    });
    for (let i = 0; i < 10; i++) {
      const w = currentWord(container);
      answerAndAdvance(container, w[0]);
    }
    expect(container.querySelector('input')).toBeNull();
    expect(container.textContent).toContain('10');
  });

  it('Escape closes the page', () => {
    act(() => {
      openSpellingBee();
    });
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    expect(overlay.style.display).toBe('none');
  });

  it('closing via the close button hides the overlay', () => {
    act(() => {
      openSpellingBee();
    });
    const closeBtn = container.querySelector<HTMLButtonElement>('button[aria-label]')!;
    act(() => {
      closeBtn.click();
    });
    expect(overlay.style.display).toBe('none');
  });
});
