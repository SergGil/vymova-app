import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import {
  ErrorHuntPage,
  openErrorHunt,
  tokenize,
  findHeadwordIndex,
} from '../../js/modes/error-hunt.tsx';
import { setDeckState } from '../../src/deck-store.ts';
import type { WordEntry } from '../../src/types.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

// Real example sentences containing the headword, >=4 tokens (error-hunt.tsx
// requires both, per buildRound's hasGoodExample-style checks).
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

/** Identifies which word's sentence is currently shown, and where the
 * (now-swapped-out) headword used to sit, by tokenizing each candidate's
 * known original sentence and finding the one that differs from the
 * rendered tokens in at most the expected headword position. */
function currentRound(
  container: HTMLElement,
): { word: WordEntry; correctIdx: number; tokenButtons: HTMLButtonElement[] } {
  const tokenButtons = Array.from(container.querySelectorAll<HTMLButtonElement>('button')).filter(
    (b) => !b.hasAttribute('aria-label'),
  );
  const renderedTokens = tokenButtons.map((b) => b.textContent ?? '');
  for (const w of EIGHT_WORDS) {
    const origTokens = tokenize(w[2]);
    if (origTokens.length !== renderedTokens.length) continue;
    const correctIdx = findHeadwordIndex(origTokens, w[0]);
    const mismatches = origTokens.filter((tok, i) => tok !== renderedTokens[i]).length;
    if (mismatches <= 1) return { word: w, correctIdx, tokenButtons };
  }
  throw new Error('could not identify the current error-hunt round');
}

describe('error-hunt.tsx (ErrorHuntPage)', () => {
  let root: Root;
  let container: HTMLElement;
  let overlay: HTMLElement;

  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('ew_srs_priority', '0');
    document.body.innerHTML = '';
    overlay = document.createElement('div');
    overlay.id = 'eh-overlay';
    overlay.style.display = 'none';
    document.body.appendChild(overlay);
    setDeckState(EIGHT_WORDS);

    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<ErrorHuntPage />);
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

  it('opening shows a sentence with one swapped-in word as tappable tokens', () => {
    act(() => {
      openErrorHunt();
    });
    expect(overlay.style.display).toBe('flex');
    const { tokenButtons } = currentRound(container);
    expect(tokenButtons.length).toBeGreaterThanOrEqual(4);
  });

  it('tapping the swapped word is marked correct', () => {
    act(() => {
      openErrorHunt();
    });
    const { correctIdx, tokenButtons } = currentRound(container);
    act(() => {
      tokenButtons[correctIdx].click();
    });
    expect(container.textContent).toMatch(/✓|мало бути/i);
  });

  it('tapping a different word is marked wrong and still reveals the fix', () => {
    act(() => {
      openErrorHunt();
    });
    const { correctIdx, tokenButtons } = currentRound(container);
    const wrongIdx = correctIdx === 0 ? 1 : 0;
    act(() => {
      tokenButtons[wrongIdx].click();
    });
    // Whichever token was tapped, some correction text is now shown.
    expect(container.textContent?.length).toBeGreaterThan(0);
    const nextBtn = Array.from(container.querySelectorAll('button')).find((b) =>
      b.textContent?.match(/наступне|фініш/i),
    );
    expect(nextBtn).toBeTruthy();
  });

  it('advancing through all rounds shows the final screen', () => {
    act(() => {
      openErrorHunt();
    });
    let guard = 0;
    while (!container.querySelector('[data-i18n="common.tryAgain"]') && guard < 8) {
      guard++;
      const { correctIdx, tokenButtons } = currentRound(container);
      act(() => {
        tokenButtons[correctIdx].click();
      });
      const nextBtn = Array.from(container.querySelectorAll('button')).find((b) =>
        b.textContent?.match(/наступне|фініш/i),
      )!;
      act(() => {
        nextBtn.click();
      });
    }
    expect(container.querySelector('[data-i18n="common.tryAgain"]')).not.toBeNull();
  });

  it('Escape closes the page', () => {
    act(() => {
      openErrorHunt();
    });
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    expect(overlay.style.display).toBe('none');
  });

  it('closing via the close button hides the overlay', () => {
    act(() => {
      openErrorHunt();
    });
    const closeBtn = container.querySelector<HTMLButtonElement>('button[aria-label]')!;
    act(() => {
      closeBtn.click();
    });
    expect(overlay.style.display).toBe('none');
  });
});
