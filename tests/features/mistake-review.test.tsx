import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { render, screen } from '@testing-library/react';
import { MistakeReview } from '../../js/features/mistake-review.tsx';

// ── Mock speak ───────────────────────────────────────────────────
const { speak } = vi.hoisted(() => ({ speak: vi.fn() }));
vi.mock('../../js/features/voice/speech.ts', () => ({ speak }));

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

vi.mock('../../data/words-data/words.js', () => ({
  W: [
    ['abandon', 'покинути', 'He will <b>abandon</b> it.', 'Він покине.', 'ˈæ', 'v'],
    ['book', 'книга', 'Read a <b>book</b>.', 'Читай книгу.', 'bʊk', 'n'],
  ],
}));

beforeEach(() => {
  document.body.innerHTML = '';
  getMistakes.mockClear();
  clearMistake.mockClear();
  speak.mockClear();
  getMistakes.mockReturnValue({});
});

describe('MistakeReview', () => {
  it('shows "no mistakes" message when getMistakes returns empty', () => {
    getMistakes.mockReturnValue({});
    render(<MistakeReview onClose={vi.fn()} />);
    expect(screen.getByText('Помилок немає! 🎉')).toBeInTheDocument();
  });

  it('renders the first mistake word when mistakes exist', () => {
    getMistakes.mockReturnValue({ abandon: 3, book: 1 });
    render(<MistakeReview onClose={vi.fn()} />);
    expect(screen.getByText('abandon', { selector: '.mistake-review-word' })).toBeInTheDocument();
  });

  it('shows progress counter "1 / N"', () => {
    getMistakes.mockReturnValue({ abandon: 2 });
    render(<MistakeReview onClose={vi.fn()} />);
    expect(screen.getByText('1 / 1')).toBeInTheDocument();
  });

  it('flips the card when clicked', () => {
    getMistakes.mockReturnValue({ abandon: 1 });
    render(<MistakeReview onClose={vi.fn()} />);
    const card = document.querySelector('.mistake-review-card')!;
    expect(card.classList.contains('flipped')).toBe(false);
    act(() => {
      (card as HTMLElement).click();
    });
    expect(card.classList.contains('flipped')).toBe(true);
  });

  it('hides Got it / Still hard until the card is checked, decodes the IPA without double brackets', () => {
    getMistakes.mockReturnValue({ abandon: 1 });
    render(<MistakeReview onClose={vi.fn()} />);
    expect(screen.getByText('[ˈæ]')).toBeInTheDocument();
    expect(document.querySelectorAll('.mistake-review-actions')).toHaveLength(0);

    act(() => {
      screen.getByRole('button', { name: /Перевірити/ }).click();
    });

    expect(document.querySelector('.mistake-review-card')!.classList.contains('flipped')).toBe(
      true,
    );
    expect(document.querySelectorAll('.mistake-review-actions')).toHaveLength(1);
  });

  it('"Got it" advances to next card and calls clearMistake', () => {
    getMistakes.mockReturnValue({ abandon: 2 });
    render(<MistakeReview onClose={vi.fn()} />);
    act(() => {
      document.querySelector<HTMLElement>('.mistake-review-card')!.click();
    });
    act(() => {
      screen.getByRole('button', { name: '✓ Знаю!' }).click();
    });
    expect(clearMistake).toHaveBeenCalledWith('abandon');
    // After clearing the only card, done screen appears
    expect(screen.getByText('Готово! 🎉')).toBeInTheDocument();
  });

  it('"Still hard" advances to next card without calling clearMistake', () => {
    getMistakes.mockReturnValue({ abandon: 2 });
    render(<MistakeReview onClose={vi.fn()} />);
    act(() => {
      document.querySelector<HTMLElement>('.mistake-review-card')!.click();
    });
    act(() => {
      screen.getByRole('button', { name: '✗ Ще важко' }).click();
    });
    expect(clearMistake).not.toHaveBeenCalled();
    expect(screen.getByText('Готово! 🎉')).toBeInTheDocument();
  });

  it('done screen shows correct cleared count', () => {
    getMistakes.mockReturnValue({ abandon: 1, book: 2 });
    render(<MistakeReview onClose={vi.fn()} />);
    // click "got it" for abandon
    act(() => {
      document.querySelector<HTMLElement>('.mistake-review-card')!.click();
    });
    act(() => {
      screen.getByRole('button', { name: '✓ Знаю!' }).click();
    });
    // click "still hard" for book
    act(() => {
      document.querySelector<HTMLElement>('.mistake-review-card')!.click();
    });
    act(() => {
      screen.getByRole('button', { name: '✗ Ще важко' }).click();
    });
    expect(screen.getByText(/1 із 2/)).toBeInTheDocument();
  });

  it('close button calls onClose', () => {
    getMistakes.mockReturnValue({});
    const onClose = vi.fn();
    render(<MistakeReview onClose={onClose} />);
    act(() => {
      screen.getByRole('button', { name: 'Закрити' }).click();
    });
    expect(onClose).toHaveBeenCalled();
  });

  it('speak button calls speak() with the word', () => {
    getMistakes.mockReturnValue({ abandon: 1 });
    render(<MistakeReview onClose={vi.fn()} />);
    // Two `.mistake-review-speak` buttons exist (front word + back example,
    // the latter just visually hidden pre-flip) — not disambiguatable by
    // accessible name (both are a bare 🔊), so this one stays a class query.
    const speakBtn = document.querySelector<HTMLElement>('.mistake-review-speak')!;
    act(() => {
      speakBtn.click();
    });
    expect(speak).toHaveBeenCalledWith('abandon', null);
  });
});
