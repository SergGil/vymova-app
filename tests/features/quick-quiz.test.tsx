import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { QuickQuizButton } from '../../js/features/quick-quiz.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { openQuickQuiz } = vi.hoisted(() => ({ openQuickQuiz: vi.fn() }));
vi.mock('../../js/modes/quiz.tsx', () => ({ openQuickQuiz }));

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<QuickQuizButton />);
  });
  return { container, root };
}

describe('quick-quiz.tsx QuickQuizButton', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    openQuickQuiz.mockClear();
  });

  it('renders the button with the translated label and title', () => {
    const { container } = mount();
    const btn = container.querySelector('#btn-quick-quiz') as HTMLButtonElement;
    expect(btn).not.toBeNull();
    expect(btn.textContent).toBe('⚡ Quick Quiz — 5 питань');
    expect(btn.title).toBe('5 питань з поточної колоди (Quick Quiz)');
  });

  it('calls openQuickQuiz when clicked', () => {
    const { container } = mount();
    const btn = container.querySelector('#btn-quick-quiz') as HTMLButtonElement;
    act(() => {
      btn.click();
    });
    expect(openQuickQuiz).toHaveBeenCalledTimes(1);
  });
});
