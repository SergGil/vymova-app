import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { WordHintPage, openWordHint } from '../../js/modes/word-hint.tsx';
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

// 8 rounds needed; each EN headword is 3-14 letters (countLetters range) and
// each has a non-empty UA "clue" (w[3], entryFor('ua', w).ex).
const EIGHT_WORDS: WordEntry[] = [
  ['zqcloud', 'зхмара', '', 'Хмара пливла небом.'],
  ['zqnight', 'зніч', '', 'Ніч була темна.'],
  ['zqplant', 'зрослина', '', 'Рослина росла швидко.'],
  ['zqcover', 'зобкладинка', '', 'Обкладинка книги яскрава.'],
  ['zqstone', 'закамінь', '', 'Камінь лежав на дорозі.'],
  ['zqchair', 'застілець', '', 'Стілець стояв біля столу.'],
  ['zqbread', 'захліб', '', 'Хліб був свіжий.'],
  ['zqhouse', 'здім', '', 'Дім стояв на пагорбі.'],
];

function findButton(container: HTMLElement, re: RegExp): HTMLButtonElement {
  return Array.from(container.querySelectorAll('button')).find((b) => b.textContent?.match(re))!;
}
function currentWord(container: HTMLElement): WordEntry {
  return EIGHT_WORDS.find((w) => container.textContent?.includes(w[3]))!;
}
function blankCount(container: HTMLElement): number {
  return Array.from(container.querySelectorAll('span')).filter((s) => s.textContent === '_')
    .length;
}
function answerAndAdvance(container: HTMLElement, correct: boolean): void {
  const w = currentWord(container);
  const input = container.querySelector<HTMLInputElement>('input')!;
  act(() => {
    typeInto(input, correct ? w[0] : 'zzznotevenclose');
  });
  act(() => {
    findButton(container, /перевірити/i).click();
  });
  act(() => {
    findButton(container, /наступне|фініш/i).click();
  });
}

describe('word-hint.tsx (WordHintPage)', () => {
  let root: Root;
  let container: HTMLElement;
  let overlay: HTMLElement;

  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('ew_srs_priority', '0');
    document.body.innerHTML = '';
    overlay = document.createElement('div');
    overlay.id = 'hint-overlay';
    overlay.style.display = 'none';
    document.body.appendChild(overlay);
    setDeckState(EIGHT_WORDS);

    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<WordHintPage />);
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

  it('opening shows the clue with only the first letter revealed', () => {
    act(() => {
      openWordHint();
    });
    expect(overlay.style.display).toBe('flex');
    const w = currentWord(container);
    expect(blankCount(container)).toBe(w[0].length - 1);
  });

  it('a correct guess is marked correct', () => {
    act(() => {
      openWordHint();
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
    expect(container.textContent).toContain(w[0]);
  });

  it('a wrong guess reveals the answer', () => {
    act(() => {
      openWordHint();
    });
    const w = currentWord(container);
    const input = container.querySelector<HTMLInputElement>('input')!;
    act(() => {
      typeInto(input, 'zzznotevenclose');
    });
    act(() => {
      findButton(container, /перевірити/i).click();
    });
    expect(container.textContent).toContain(w[0]);
  });

  it('"give up" counts as a miss and reveals the answer', () => {
    act(() => {
      openWordHint();
    });
    const w = currentWord(container);
    act(() => {
      findButton(container, /показати слово/i).click();
    });
    expect(container.textContent).toContain(w[0]);
    expect(container.textContent).toContain('✗ 1');
  });

  it('one more letter is revealed every 3.5s while unanswered', () => {
    vi.useFakeTimers();
    act(() => {
      openWordHint();
    });
    const before = blankCount(container);
    act(() => {
      vi.advanceTimersByTime(3500);
    });
    expect(blankCount(container)).toBe(before - 1);
    vi.useRealTimers();
  });

  it('the round auto-fails once every letter has been revealed', () => {
    vi.useFakeTimers();
    act(() => {
      openWordHint();
    });
    const w = currentWord(container);
    // Advance one reveal interval at a time: each tick only schedules the
    // *next* timeout once React has re-rendered with the incremented
    // `revealed` state, so a single big jump would only fire the first one.
    for (let i = 0; i < w[0].length; i++) {
      act(() => {
        vi.advanceTimersByTime(3500);
      });
    }
    expect(container.textContent).toContain('✗ 1');
    vi.useRealTimers();
  });

  it('advancing through all 8 rounds shows the final screen', () => {
    act(() => {
      openWordHint();
    });
    for (let i = 0; i < 8; i++) answerAndAdvance(container, true);
    expect(container.querySelector('input')).toBeNull();
    expect(container.textContent).toContain('8');
  });

  it('Escape closes the page', () => {
    act(() => {
      openWordHint();
    });
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    expect(overlay.style.display).toBe('none');
  });

  it('closing via the close button hides the overlay', () => {
    act(() => {
      openWordHint();
    });
    const closeBtn = container.querySelector<HTMLButtonElement>('button[aria-label]')!;
    act(() => {
      closeBtn.click();
    });
    expect(overlay.style.display).toBe('none');
  });
});
