import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { ContextPage, openContext } from '../../js/modes/context.tsx';
import { setDeckState } from '../../src/deck-store.ts';
import type { WordEntry } from '../../src/types.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

// Every example sentence must be >=15 chars and contain the headword itself
// (js/modes/context.tsx's hasGoodExample), otherwise build() falls back to
// scanning the full W dictionary instead of using this fixed test deck.
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

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function flush(ms = 30): Promise<void> {
  await act(async () => {
    await wait(ms);
  });
}

describe('context.tsx (ContextPage)', () => {
  let root: Root;
  let container: HTMLElement;
  let overlay: HTMLElement;

  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('ew_srs_priority', '0');
    document.body.innerHTML = '';
    overlay = document.createElement('div');
    overlay.id = 'ctx-overlay';
    overlay.style.display = 'none';
    document.body.appendChild(overlay);
    setDeckState(EIGHT_WORDS);

    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<ContextPage />);
    });
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    document.body.innerHTML = '';
  });

  it('opening starts an 8-question round with a masked example and 4 options', async () => {
    act(() => {
      openContext();
    });
    await flush();
    expect(overlay.style.display).toBe('flex');
    expect(container.querySelectorAll('.quiz-option')).toHaveLength(4);
    expect(container.textContent).toContain('___');
    expect(container.textContent).toContain('1');
  });

  it('the hint button reveals a hint without answering', async () => {
    act(() => {
      openContext();
    });
    await flush();
    const hintBtn = Array.from(container.querySelectorAll('button')).find((b) =>
      b.textContent?.match(/hint|підказ/i),
    )!;
    act(() => {
      hintBtn.click();
    });
    expect(container.textContent).toMatch(/[:：]/);
  });

  it('choosing the correct option reveals the full sentence and the headword', async () => {
    act(() => {
      openContext();
    });
    await flush();
    const options = Array.from(container.querySelectorAll<HTMLButtonElement>('.quiz-option'));
    const wordMap: Record<string, string> = Object.fromEntries(
      EIGHT_WORDS.map((w) => [w[0], w[1]]),
    );
    const shownWord = Object.keys(wordMap).find((en) =>
      options.some((o) => o.textContent?.includes(wordMap[en])),
    )!;
    const correctBtn = options.find((o) => o.textContent?.includes(wordMap[shownWord]))!;
    act(() => {
      correctBtn.click();
    });
    expect(correctBtn.className).toContain('correct');
    expect(container.textContent).toContain(shownWord);
    // The blank is gone once revealed; the full sentence is shown instead.
    expect(container.textContent).not.toContain('___');
  });

  it('choosing a wrong option marks it wrong and reveals the correct one', async () => {
    act(() => {
      openContext();
    });
    await flush();
    const options = Array.from(container.querySelectorAll<HTMLButtonElement>('.quiz-option'));
    const wordMap: Record<string, string> = Object.fromEntries(
      EIGHT_WORDS.map((w) => [w[0], w[1]]),
    );
    const shownWord = Object.keys(wordMap).find((en) =>
      options.some((o) => o.textContent?.includes(wordMap[en])),
    )!;
    const wrongBtn = options.find((o) => !o.textContent?.includes(wordMap[shownWord]))!;
    act(() => {
      wrongBtn.click();
    });
    expect(wrongBtn.className).toContain('wrong');
    expect(container.querySelector('.reveal')).not.toBeNull();
  });

  it('advancing through all 8 questions shows the final screen', async () => {
    act(() => {
      openContext();
    });
    await flush();
    for (let i = 0; i < 8; i++) {
      const opt = container.querySelector<HTMLButtonElement>('.quiz-option')!;
      act(() => {
        opt.click();
      });
      const nextBtn = Array.from(container.querySelectorAll('button')).find(
        (b) => b.textContent?.match(/наступне|фініш/i),
      )!;
      act(() => {
        nextBtn.click();
      });
      if (i < 7) await flush();
    }
    expect(container.querySelectorAll('.quiz-option')).toHaveLength(0);
    expect(container.textContent).toContain('8');
  });

  it('Escape closes the page', async () => {
    act(() => {
      openContext();
    });
    await flush();
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    expect(overlay.style.display).toBe('none');
  });

  it('closing via the close button hides the overlay', async () => {
    act(() => {
      openContext();
    });
    await flush();
    const closeBtn = container.querySelector<HTMLButtonElement>('button[aria-label]')!;
    act(() => {
      closeBtn.click();
    });
    expect(overlay.style.display).toBe('none');
  });
});
