import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { DuelFeedback, refreshDuelFeedback } from '../../js/features/duel-feedback.tsx';
import { setDuelQuestionFields } from '../../src/duel-question-store.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

let feedback = { html: '', speed: '' };
const { getFeedbackData } = vi.hoisted(() => ({
  getFeedbackData: vi.fn(() => ({ html: '', speed: '' })),
}));
vi.mock('../../js/features/duel.ts', () => ({ _getFeedbackData: getFeedbackData }));

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<DuelFeedback />);
  });
  return { container, root };
}

describe('duel-feedback.tsx DuelFeedback', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = '';
    feedback = { html: '', speed: '' };
    roots = [];
    getFeedbackData.mockClear().mockImplementation(() => feedback);
  });

  afterEach(() => {
    roots.forEach((r) => {
      act(() => {
        r.unmount();
      });
    });
  });

  it('renders empty feedback and speed text by default', () => {
    const { container, root } = mount();
    roots.push(root);
    const divs = container.querySelectorAll('div');
    expect(divs[0].innerHTML).toBe('');
    expect(divs[1].textContent).toBe('');
  });

  it('renders feedback HTML and speed text', () => {
    feedback = { html: '<b>Правильно!</b>', speed: '0.8s' };
    const { container, root } = mount();
    roots.push(root);

    const divs = container.querySelectorAll('div');
    expect(divs[0].innerHTML).toBe('<b>Правильно!</b>');
    expect(divs[1].textContent).toBe('0.8s');
  });

  it('refreshDuelFeedback re-renders with updated feedback', () => {
    const { container, root } = mount();
    roots.push(root);

    feedback = { html: '<b>Невірно</b>', speed: '1.2s' };
    act(() => {
      refreshDuelFeedback();
      setDuelQuestionFields({});
    });

    const divs = container.querySelectorAll('div');
    expect(divs[0].innerHTML).toBe('<b>Невірно</b>');
    expect(divs[1].textContent).toBe('1.2s');
  });
});
