import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { ListeningPage, openListening } from '../../js/modes/listening.tsx';
import { setDeckState } from '../../src/deck-store.ts';
import type { WordEntry } from '../../src/types.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const TEN_WORDS: WordEntry[] = [
  ['apple', 'яблуко', '', ''],
  ['dog', 'собака', '', ''],
  ['cat', 'кіт', '', ''],
  ['book', 'книга', '', ''],
  ['water', 'вода', '', ''],
  ['house', 'дім', '', ''],
  ['tree', 'дерево', '', ''],
  ['sun', 'сонце', '', ''],
  ['moon', 'місяць', '', ''],
  ['road', 'дорога', '', ''],
];

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function flush(ms = 450): Promise<void> {
  await act(async () => {
    await wait(ms);
  });
}

describe('listening.tsx (ListeningPage)', () => {
  let root: Root;
  let container: HTMLElement;
  let overlay: HTMLElement;

  beforeEach(() => {
    localStorage.clear();
    // Bypass SRS-priority deck ordering: it caps how many "new" cards can
    // appear per day (game.ts's srsNewToday/getSrsNewRemaining), which would
    // otherwise silently shrink the 10-word deck below once earlier tests in
    // this file have already recorded answers.
    localStorage.setItem('ew_srs_priority', '0');
    document.body.innerHTML = '';
    overlay = document.createElement('div');
    overlay.id = 'listen-overlay';
    overlay.style.display = 'none';
    document.body.appendChild(overlay);
    setDeckState(TEN_WORDS);

    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<ListeningPage />);
    });
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    document.body.innerHTML = '';
  });

  it('shows no answer options before the round has started', () => {
    expect(overlay.style.display).toBe('none');
    expect(container.querySelectorAll('.quiz-option')).toHaveLength(0);
  });

  it('opening starts a 10-word round with 4 answer options', async () => {
    act(() => {
      openListening();
    });
    await flush();
    expect(overlay.style.display).toBe('flex');
    expect(container.querySelectorAll('.quiz-option')).toHaveLength(4);
    expect(container.textContent).toContain('1');
  });

  it('choosing the correct translation marks it correct and reveals the next button', async () => {
    act(() => {
      openListening();
    });
    await flush();
    // One of the option words must equal the UA translation of the current
    // word (apple->яблуко ... etc, from TEN_WORDS); click it directly by text.
    const options = Array.from(container.querySelectorAll<HTMLButtonElement>('.quiz-option'));
    const wordMap: Record<string, string> = Object.fromEntries(TEN_WORDS.map((w) => [w[0], w[1]]));
    const shownWord = Object.keys(wordMap).find((en) =>
      options.some((o) => o.textContent?.includes(wordMap[en])),
    )!;
    const correctBtn = options.find((o) => o.textContent?.includes(wordMap[shownWord]))!;
    act(() => {
      correctBtn.click();
    });
    expect(correctBtn.className).toContain('correct');
    expect(container.textContent).toContain('✓');
    const allDisabled = options.every((o) => o.disabled);
    expect(allDisabled).toBe(true);
  });

  it('choosing a wrong option marks it wrong and reveals the correct one', async () => {
    act(() => {
      openListening();
    });
    await flush();
    const options = Array.from(container.querySelectorAll<HTMLButtonElement>('.quiz-option'));
    const wordMap: Record<string, string> = Object.fromEntries(TEN_WORDS.map((w) => [w[0], w[1]]));
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

  it('advancing through all 10 words shows the final screen', async () => {
    act(() => {
      openListening();
    });
    await flush();
    for (let i = 0; i < 10; i++) {
      const opt = container.querySelector<HTMLButtonElement>('.quiz-option');
      expect(opt).not.toBeNull();
      act(() => {
        opt!.click();
      });
      // The "next"/"finish" button becomes visible (inline-block) once answered.
      const advanceBtn = container.querySelector<HTMLButtonElement>(
        'button[style*="inline-block"]',
      );
      expect(advanceBtn).not.toBeNull();
      act(() => {
        advanceBtn!.click();
      });
      if (i < 9) await flush();
    }
    expect(container.querySelectorAll('.quiz-option')).toHaveLength(0);
    expect(container.textContent).toContain('10');
  });

  it('Escape closes the page', async () => {
    act(() => {
      openListening();
    });
    await flush();
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    expect(overlay.style.display).toBe('none');
  });

  it('closing via the close button hides the overlay', async () => {
    act(() => {
      openListening();
    });
    await flush();
    const closeBtn = container.querySelector<HTMLButtonElement>('button[aria-label]')!;
    act(() => {
      closeBtn.click();
    });
    expect(overlay.style.display).toBe('none');
  });
});
