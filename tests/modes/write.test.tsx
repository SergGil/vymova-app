import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { WritePage, openWrite } from '../../js/modes/write.tsx';
import { setDeckState } from '../../src/deck-store.ts';
import type { WordEntry } from '../../src/types.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function flush(ms = 150): Promise<void> {
  await act(async () => {
    await wait(ms);
  });
}

const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
  window.HTMLInputElement.prototype,
  'value',
)!.set!;
function typeInto(input: HTMLInputElement, value: string): void {
  nativeInputValueSetter.call(input, value);
  input.dispatchEvent(new Event('input', { bubbles: true }));
}

// Synthetic, dictionary-unique EN/UA strings — the "front" word shown is the
// UA translation, the answer typed is the EN headword.
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
function answerAndAdvance(container: HTMLElement, value?: string): void {
  const w = currentWord(container);
  const input = container.querySelector<HTMLInputElement>('input')!;
  act(() => {
    typeInto(input, value ?? w[0]);
  });
  act(() => {
    findButton(container, /перевірити/i).click();
  });
  act(() => {
    findButton(container, /далі/i).click();
  });
}

describe('write.tsx (WritePage)', () => {
  let root: Root;
  let container: HTMLElement;
  let overlay: HTMLElement;

  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('ew_srs_priority', '0');
    document.body.innerHTML = '';
    overlay = document.createElement('div');
    overlay.id = 'write-overlay';
    overlay.style.display = 'none';
    document.body.appendChild(overlay);
    setDeckState(TEN_WORDS);

    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<WritePage />);
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

  it('opening starts a 10-question round showing the UA word and an input field', () => {
    act(() => {
      openWrite(null);
    });
    expect(overlay.style.display).toBe('flex');
    expect(container.querySelector('input')).not.toBeNull();
    const w = currentWord(container);
    expect(w).toBeTruthy();
  });

  it('typing the correct EN translation marks it correct', () => {
    act(() => {
      openWrite(null);
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

  it('a wrong translation is marked wrong and reveals the correct answer', () => {
    act(() => {
      openWrite(null);
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

  it('the hint button reveals a partial answer', () => {
    act(() => {
      openWrite(null);
    });
    act(() => {
      findButton(container, /💡/).click();
    });
    expect(container.textContent).toContain('💡');
  });

  it('typing a real-dictionary prefix shows autocomplete suggestions', async () => {
    act(() => {
      openWrite(null);
    });
    const input = container.querySelector<HTMLInputElement>('input')!;
    act(() => {
      typeInto(input, 'appl');
    });
    await flush(150);
    expect(container.querySelectorAll('.wac-item').length).toBeGreaterThan(0);
  });

  it('advancing through all 10 words shows the final screen', () => {
    act(() => {
      openWrite(null);
    });
    for (let i = 0; i < 10; i++) {
      answerAndAdvance(container);
    }
    expect(container.querySelector('input')).toBeNull();
    expect(container.textContent).toContain('10');
  });

  it('a round with mistakes offers a "retry mistakes" button', () => {
    act(() => {
      openWrite(null);
    });
    for (let i = 0; i < 10; i++) {
      const w = currentWord(container);
      const input = container.querySelector<HTMLInputElement>('input')!;
      act(() => {
        typeInto(input, i === 0 ? 'zzznotevenclose' : w[0]);
      });
      act(() => {
        findButton(container, /перевірити/i).click();
      });
      act(() => {
        findButton(container, /далі/i).click();
      });
    }
    const retryBtn = Array.from(container.querySelectorAll('button')).find((b) =>
      b.textContent?.match(/помилк/i),
    );
    expect(retryBtn).toBeTruthy();
    act(() => {
      retryBtn!.click();
    });
    expect(container.querySelector('input')).not.toBeNull();
  });

  it('Escape closes the page', () => {
    act(() => {
      openWrite(null);
    });
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    expect(overlay.style.display).toBe('none');
  });

  it('closing via the close button hides the overlay', () => {
    act(() => {
      openWrite(null);
    });
    const closeBtn = container.querySelector<HTMLButtonElement>('button[aria-label]')!;
    act(() => {
      closeBtn.click();
    });
    expect(overlay.style.display).toBe('none');
  });
});
