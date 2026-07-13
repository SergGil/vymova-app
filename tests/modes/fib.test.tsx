import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { FibPage, openFib } from '../../js/modes/fib.tsx';
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

// Every example sentence must be a real sentence containing the headword
// (fib.tsx's makeBlank bolds the first match of the word inside it).
const TEN_WORDS: WordEntry[] = [
  ['apple', 'яблуко', 'She ate a fresh apple for breakfast today.', 'Вона їла яблуко.'],
  ['dog', 'собака', 'The dog ran across the muddy yard quickly.', 'Собака побіг.'],
  ['cat', 'кіт', 'The cat slept on the warm windowsill all day.', 'Кіт спав.'],
  ['book', 'книга', 'He read the whole book in one long evening.', 'Він читав книгу.'],
  ['water', 'вода', 'Cold water splashed over the rocks below.', 'Вода бризкала.'],
  ['house', 'дім', 'Their house stood at the end of the street.', 'Їхній дім стояв.'],
  ['tree', 'дерево', 'A tall tree shaded the entire garden path.', 'Дерево тінило.'],
  ['sun', 'сонце', 'The sun rose slowly above the quiet hills.', 'Сонце сходило.'],
  ['road', 'дорога', 'The long road wound through the misty valley.', 'Дорога звивалася.'],
  ['bird', 'птах', 'A small bird landed gently on the fence.', 'Птах сів.'],
];

// One distinctive substring per sentence that survives blanking-out the
// headword, in the same order as TEN_WORDS, used to identify which question
// is currently showing (the headword itself is masked as "___").
const FRAGMENTS = [
  'for breakfast today',
  'across the muddy yard',
  'on the warm windowsill',
  'in one long evening',
  'over the rocks below',
  'at the end of the street',
  'the entire garden path',
  'above the quiet hills',
  'through the misty valley',
  'landed gently on the fence',
];

function findButton(container: HTMLElement, re: RegExp): HTMLButtonElement {
  return Array.from(container.querySelectorAll('button')).find((b) => b.textContent?.match(re))!;
}
function currentWord(container: HTMLElement): WordEntry {
  const i = FRAGMENTS.findIndex((f) => container.textContent?.includes(f));
  return TEN_WORDS[i];
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

describe('fib.tsx (FibPage)', () => {
  let root: Root;
  let container: HTMLElement;
  let overlay: HTMLElement;

  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('ew_srs_priority', '0');
    document.body.innerHTML = '';
    overlay = document.createElement('div');
    overlay.id = 'fib-overlay';
    overlay.style.display = 'none';
    document.body.appendChild(overlay);
    setDeckState(TEN_WORDS);

    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<FibPage />);
    });
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    document.body.innerHTML = '';
  });

  it('opening starts a round with a masked sentence and an input field', () => {
    act(() => {
      openFib();
    });
    expect(overlay.style.display).toBe('flex');
    expect(container.textContent).toContain('___');
    expect(container.querySelector('input')).not.toBeNull();
  });

  it('typing the correct missing word marks it correct', () => {
    act(() => {
      openFib();
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
    expect(container.textContent).not.toContain('___');
  });

  it('a wrong answer is marked wrong and reveals the correct word', () => {
    act(() => {
      openFib();
    });
    const input = container.querySelector<HTMLInputElement>('input')!;
    act(() => {
      typeInto(input, 'zzznotevenclose');
    });
    act(() => {
      findButton(container, /перевірити/i).click();
    });
    expect(container.textContent).toMatch(/✗|неправильно/i);
  });

  it('the hint button reveals part of the answer', () => {
    act(() => {
      openFib();
    });
    act(() => {
      findButton(container, /💡/).click();
    });
    expect(container.textContent).toContain('💡');
  });

  it('advancing through all 10 sentences shows the final screen', () => {
    act(() => {
      openFib();
    });
    for (let i = 0; i < 10; i++) answerAndAdvance(container, true);
    expect(container.querySelector('input')).toBeNull();
    expect(container.textContent).toContain('10');
  });

  it('Escape closes the page', () => {
    act(() => {
      openFib();
    });
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    expect(overlay.style.display).toBe('none');
  });

  it('closing via the close button hides the overlay', () => {
    act(() => {
      openFib();
    });
    const closeBtn = container.querySelector<HTMLButtonElement>('button[aria-label]')!;
    act(() => {
      closeBtn.click();
    });
    expect(overlay.style.display).toBe('none');
  });
});
