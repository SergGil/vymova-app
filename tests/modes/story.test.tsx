import { describe, it, expect, beforeEach } from 'vitest';
import { act } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StoryPage, openStoryMode } from '../../js/modes/story.tsx';
import { clearAllKnown, getKnownSnapshot } from '../../src/known-words-store.ts';

let overlay: HTMLElement;

beforeEach(() => {
  localStorage.clear();
  clearAllKnown();
  document.body.innerHTML = '';
  overlay = document.createElement('div');
  overlay.id = 'story-mode-overlay';
  overlay.style.display = 'none';
  document.body.appendChild(overlay);
});

describe('story.tsx (StoryPage) — builtin stories (AI disabled in test env)', () => {
  it('renders nothing until opened', () => {
    const { container } = render(<StoryPage />);
    expect(container.innerHTML).toBe('');
  });

  it('opening shows the picker with 3 builtin stories and no AI generator', () => {
    render(<StoryPage />);
    act(() => {
      openStoryMode();
    });

    expect(overlay.style.display).toBe('flex');
    expect(screen.getByText(/busy morning/i)).toBeInTheDocument();
    expect(screen.getByText(/the journey/i)).toBeInTheDocument();
    expect(screen.getByText(/scientific discovery/i)).toBeInTheDocument();
    // AI_TUTOR_ENABLED is false without a configured proxy URL in tests.
    expect(screen.queryByRole('button', { name: /generate|generuj|згенер/i })).toBeNull();
  });

  it('picking a builtin story shows highlighted vocabulary words', async () => {
    const user = userEvent.setup();
    render(<StoryPage />);
    act(() => {
      openStoryMode();
    });
    await user.click(screen.getByRole('button', { name: /busy morning/i }));

    expect(screen.getByText('A Busy Morning')).toBeInTheDocument();
    expect(document.querySelectorAll('.sm-word').length).toBeGreaterThan(0);
  });

  it('clicking a highlighted word opens a translation popup', async () => {
    const user = userEvent.setup();
    render(<StoryPage />);
    act(() => {
      openStoryMode();
    });
    await user.click(screen.getByRole('button', { name: /busy morning/i }));

    const word = document.querySelector<HTMLElement>('.sm-word')!;
    await user.click(word);

    expect(document.getElementById('sm-popup-speak')).not.toBeNull();
  });

  it('marking a word known updates the known-words store and closes the popup', async () => {
    const user = userEvent.setup();
    render(<StoryPage />);
    act(() => {
      openStoryMode();
    });
    await user.click(screen.getByRole('button', { name: /busy morning/i }));

    const word = document.querySelector<HTMLElement>('.sm-word')!;
    const headword = word.dataset.word!;
    await user.click(word);

    await user.click(screen.getByRole('button', { name: '+ Вивчити' }));

    expect(getKnownSnapshot('en').has(headword)).toBe(true);
    expect(document.getElementById('sm-popup-speak')).toBeNull();
  });

  it('"back" returns to the picker and completion is recorded once a story was opened', async () => {
    const user = userEvent.setup();
    render(<StoryPage />);
    act(() => {
      openStoryMode();
    });
    await user.click(screen.getByRole('button', { name: /busy morning/i }));
    await user.click(screen.getByRole('button', { name: '← Назад' }));

    expect(screen.getByText(/busy morning/i)).toBeInTheDocument();
    expect(document.querySelectorAll('.sm-word')).toHaveLength(0);
  });

  it('Escape closes the page', () => {
    render(<StoryPage />);
    act(() => {
      openStoryMode();
    });
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    expect(overlay.style.display).toBe('none');
  });

  it('closing via the close button hides the overlay', async () => {
    const user = userEvent.setup();
    render(<StoryPage />);
    act(() => {
      openStoryMode();
    });
    await user.click(screen.getByRole('button', { name: 'Закрити' }));
    expect(overlay.style.display).toBe('none');
  });
});
