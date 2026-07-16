import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { ShadowingPage, openShadowing } from '../../js/modes/shadowing.tsx';
import { setDeckState } from '../../src/deck-store.ts';
import type { WordEntry } from '../../src/types.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

// EN example (w[2]) needs 3-12 tokens; UA translation (w[3]) just needs to
// be non-empty (buildRound's only real constraint).
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

function findButton(container: HTMLElement, re: RegExp): HTMLButtonElement {
  return Array.from(container.querySelectorAll('button')).find((b) => b.textContent?.match(re))!;
}

describe('shadowing.tsx (ShadowingPage)', () => {
  let root: Root;
  let container: HTMLElement;
  let overlay: HTMLElement;

  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('ew_srs_priority', '0');
    document.body.innerHTML = '';
    overlay = document.createElement('div');
    overlay.id = 'shadow-overlay';
    overlay.style.display = 'none';
    document.body.appendChild(overlay);
    setDeckState(EIGHT_WORDS);

    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<ShadowingPage />);
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

  it('opening shows the "ready" phase with a speaker button', () => {
    act(() => {
      openShadowing();
    });
    expect(overlay.style.display).toBe('flex');
    expect(container.querySelector('button[title]')).not.toBeNull();
    expect(container.textContent).toContain('1');
  });

  it('without SpeechRecognition support, the fallback "I said it" button finishes the round successfully', () => {
    act(() => {
      openShadowing();
    });
    const saidItBtn = Array.from(container.querySelectorAll('button')).find(
      (b) => !b.title && !b.hasAttribute('aria-label') && b.textContent && !b.textContent.includes('🔊'),
    );
    expect(saidItBtn).toBeTruthy();
    act(() => {
      saidItBtn!.click();
    });
    expect(container.textContent).toContain('100%');
    expect(container.textContent).toContain('✓ 1');
  });

  it('advancing through all 8 rounds shows the final screen', () => {
    act(() => {
      openShadowing();
    });
    for (let i = 0; i < 8; i++) {
      const saidItBtn = Array.from(container.querySelectorAll('button')).find(
        (b) => !b.title && !b.hasAttribute('aria-label') && b.textContent && !b.textContent.includes('🔊'),
      )!;
      act(() => {
        saidItBtn.click();
      });
      act(() => {
        findButton(container, /наступне|фініш/i).click();
      });
    }
    expect(container.querySelector('[data-i18n="common.tryAgain"]')).not.toBeNull();
    expect(container.textContent).toContain('8');
  });

  it('Escape closes the page', () => {
    act(() => {
      openShadowing();
    });
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    expect(overlay.style.display).toBe('none');
  });

  it('closing via the close button hides the overlay', () => {
    act(() => {
      openShadowing();
    });
    const closeBtn = container.querySelector<HTMLButtonElement>('button[aria-label]')!;
    act(() => {
      closeBtn.click();
    });
    expect(overlay.style.display).toBe('none');
  });
});

// Regression: buildDeck() used to fall back to the full word bank (W) only
// when the user's deck snapshot was itself empty. If the snapshot had words
// but *none* of them produced a valid round (e.g. every example sentence is
// outside the 3-12 token window for the active language pair), the round
// list ended up empty too and the page showed "no words" even though the
// full word bank had plenty of valid sentences. Fixed by retrying against W
// whenever the snapshot-derived round list comes up empty.
describe('shadowing.tsx (ShadowingPage) falls back to the full word bank', () => {
  let root: Root;
  let container: HTMLElement;
  let overlay: HTMLElement;

  const UNUSABLE_WORDS: WordEntry[] = [
    ['hi', 'привіт', 'Hi.', 'Привіт.'], // 1 token — fails the 3-12 range
    ['bye', 'бувай', '', 'Бувай.'], // empty target sentence
  ];

  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('ew_srs_priority', '0');
    document.body.innerHTML = '';
    overlay = document.createElement('div');
    overlay.id = 'shadow-overlay';
    overlay.style.display = 'none';
    document.body.appendChild(overlay);
    setDeckState(UNUSABLE_WORDS);

    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<ShadowingPage />);
    });
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    document.body.innerHTML = '';
  });

  it('shows real rounds from the full word bank instead of "no words"', () => {
    act(() => {
      openShadowing();
    });
    expect(container.textContent).not.toContain('Поки що недостатньо речень для цієї мови');
    expect(container.querySelector('button[title]')).not.toBeNull();
  });
});

describe('shadowing.tsx (ShadowingPage) with SpeechRecognition support', () => {
  let root: Root;
  let container: HTMLElement;
  let overlay: HTMLElement;
  let lastRec: FakeSpeechRecognition | null;

  class FakeSpeechRecognition {
    lang = '';
    interimResults = false;
    continuous = false;
    maxAlternatives = 1;
    onresult: ((e: { results: { 0: { transcript: string } }[] }) => void) | null = null;
    onerror: (() => void) | null = null;
    onend: (() => void) | null = null;
    start(): void {
      // eslint-disable-next-line @typescript-eslint/no-this-alias -- test mock needs to expose the created instance to the test
      lastRec = this;
    }
    abort(): void {
      this.onend?.();
    }
  }

  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('ew_srs_priority', '0');
    document.body.innerHTML = '';
    lastRec = null;
    (window as unknown as { SpeechRecognition: unknown }).SpeechRecognition =
      FakeSpeechRecognition;
    overlay = document.createElement('div');
    overlay.id = 'shadow-overlay';
    overlay.style.display = 'none';
    document.body.appendChild(overlay);
    setDeckState(EIGHT_WORDS);

    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<ShadowingPage />);
    });
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    document.body.innerHTML = '';
    delete (window as unknown as { SpeechRecognition?: unknown }).SpeechRecognition;
  });

  it('shows a record button and enters the "listening" phase', () => {
    act(() => {
      openShadowing();
    });
    const recordBtn = findButton(container, /🎤/);
    act(() => {
      recordBtn.click();
    });
    expect(container.textContent).toMatch(/🔴/);
    expect(lastRec).not.toBeNull();
  });

  it('a full-match transcript scores 100% and passes', () => {
    act(() => {
      openShadowing();
    });
    act(() => {
      findButton(container, /🎤/).click();
    });
    // The round order is shuffled, so "speak" every word from every fixture
    // sentence — whichever one is actually showing, all its words are covered.
    const everyWord = EIGHT_WORDS.map((w) => w[2]).join(' ');
    act(() => {
      lastRec!.onresult!({ results: [{ 0: { transcript: everyWord } }] });
    });
    expect(container.textContent).toContain('100%');
    expect(container.textContent).toContain('✓ 1');
  });

  it('a poor-match transcript is scored low and counts as a miss', () => {
    act(() => {
      openShadowing();
    });
    act(() => {
      findButton(container, /🎤/).click();
    });
    act(() => {
      lastRec!.onresult!({ results: [{ 0: { transcript: 'completely unrelated words here' } }] });
    });
    expect(container.textContent).toContain('✗ 1');
  });

  it('stopping mid-listen returns to the ready phase without scoring', () => {
    act(() => {
      openShadowing();
    });
    act(() => {
      findButton(container, /🎤/).click();
    });
    const stopBtn = Array.from(container.querySelectorAll('button')).find(
      (b) => b.textContent?.match(/закрити/i) && !b.hasAttribute('aria-label'),
    )!;
    act(() => {
      stopBtn.click();
    });
    expect(container.textContent).not.toContain('%');
    expect(findButton(container, /🎤/)).toBeTruthy();
  });
});
