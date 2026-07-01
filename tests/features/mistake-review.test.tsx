import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { MistakeReview } from '../../js/features/mistake-review.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

// ── Mock speak ───────────────────────────────────────────────────
const { speak } = vi.hoisted(() => ({ speak: vi.fn() }));
vi.mock('../../js/features/speech.ts', () => ({ speak }));

// ── Mock game.ts ─────────────────────────────────────────────────
const { getMistakes, clearMistake } = vi.hoisted(() => ({
  getMistakes: vi.fn<[], Record<string, number>>(() => ({})),
  clearMistake: vi.fn<[string], void>(),
}));
vi.mock('../../js/features/game.ts', () => ({ getMistakes, clearMistake }));

// ── Mock word index & word list ──────────────────────────────────
const { getWordIndex } = vi.hoisted(() => ({
  getWordIndex: vi.fn(() => new Map<string, number>([['abandon', 0], ['book', 1]])),
}));
vi.mock('../../js/core/word-index.ts', () => ({ getWordIndex }));

vi.mock('../../data/words.js', () => ({
  W: [
    ['abandon', 'покинути', 'He will <b>abandon</b> it.', 'Він покине.', 'ˈæ', 'v'],
    ['book', 'книга', 'Read a <b>book</b>.', 'Читай книгу.', 'bʊk', 'n'],
  ],
}));

// ── Helpers ──────────────────────────────────────────────────────
let activeRoot: Root | null = null;

function mount(ui: JSX.Element): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(ui); });
  activeRoot = root;
  return { container, root };
}

function portalContent(): HTMLElement {
  return document.body;
}

beforeEach(() => {
  document.body.innerHTML = '';
  getMistakes.mockClear();
  clearMistake.mockClear();
  speak.mockClear();
  getMistakes.mockReturnValue({});
});

afterEach(() => {
  if (activeRoot) {
    act(() => { activeRoot!.unmount(); });
    activeRoot = null;
  }
});

describe('MistakeReview', () => {
  it('shows "no mistakes" message when getMistakes returns empty', () => {
    getMistakes.mockReturnValue({});
    const onClose = vi.fn();
    mount(<MistakeReview onClose={onClose} />);
    expect(portalContent().textContent).toContain('Помилок немає');
  });

  it('renders the first mistake word when mistakes exist', () => {
    getMistakes.mockReturnValue({ abandon: 3, book: 1 });
    mount(<MistakeReview onClose={vi.fn()} />);
    expect(portalContent().textContent).toContain('abandon');
  });

  it('shows progress counter "1 / N"', () => {
    getMistakes.mockReturnValue({ abandon: 2 });
    mount(<MistakeReview onClose={vi.fn()} />);
    expect(portalContent().textContent).toContain('1 / 1');
  });

  it('flips the card when clicked', () => {
    getMistakes.mockReturnValue({ abandon: 1 });
    mount(<MistakeReview onClose={vi.fn()} />);
    const card = document.querySelector('.mistake-review-card') as HTMLElement;
    expect(card.className).not.toContain('flipped');
    act(() => { card.click(); });
    expect(card.className).toContain('flipped');
  });

  it('"Got it" advances to next card and calls clearMistake', () => {
    getMistakes.mockReturnValue({ abandon: 2 });
    mount(<MistakeReview onClose={vi.fn()} />);
    const gotBtn = Array.from(document.querySelectorAll('.mistake-review-btn')).find(
      (b) => b.textContent?.includes('Знаю'),
    ) as HTMLElement;
    act(() => { gotBtn.click(); });
    expect(clearMistake).toHaveBeenCalledWith('abandon');
    // After clearing the only card, done screen appears
    expect(portalContent().textContent).toContain('Готово');
  });

  it('"Still hard" advances to next card without calling clearMistake', () => {
    getMistakes.mockReturnValue({ abandon: 2 });
    mount(<MistakeReview onClose={vi.fn()} />);
    const hardBtn = Array.from(document.querySelectorAll('.mistake-review-btn')).find(
      (b) => b.textContent?.includes('Ще важко'),
    ) as HTMLElement;
    act(() => { hardBtn.click(); });
    expect(clearMistake).not.toHaveBeenCalled();
    expect(portalContent().textContent).toContain('Готово');
  });

  it('done screen shows correct cleared count', () => {
    getMistakes.mockReturnValue({ abandon: 1, book: 2 });
    mount(<MistakeReview onClose={vi.fn()} />);
    // click "got it" for abandon
    const gotBtn = () =>
      Array.from(document.querySelectorAll('.mistake-review-btn')).find(
        (b) => b.textContent?.includes('Знаю'),
      ) as HTMLElement;
    act(() => { gotBtn().click(); }); // advance past abandon
    // click "still hard" for book
    const hardBtn = Array.from(document.querySelectorAll('.mistake-review-btn')).find(
      (b) => b.textContent?.includes('Ще важко'),
    ) as HTMLElement;
    act(() => { hardBtn.click(); });
    expect(portalContent().textContent).toContain('1 із 2');
  });

  it('close button calls onClose', () => {
    getMistakes.mockReturnValue({});
    const onClose = vi.fn();
    mount(<MistakeReview onClose={onClose} />);
    const closeBtn = document.querySelector('.mistake-review-close') as HTMLElement;
    act(() => { closeBtn.click(); });
    expect(onClose).toHaveBeenCalled();
  });

  it('speak button calls speak() with the word', () => {
    getMistakes.mockReturnValue({ abandon: 1 });
    mount(<MistakeReview onClose={vi.fn()} />);
    const speakBtn = document.querySelector('.mistake-review-speak') as HTMLElement;
    act(() => { speakBtn.click(); });
    expect(speak).toHaveBeenCalledWith('abandon', null);
  });
});
