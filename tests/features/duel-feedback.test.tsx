import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { state } from '../../src/state.ts';
import { DuelFeedback, refreshDuelFeedback } from '../../js/features/duel-feedback.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { getFeedbackData } = vi.hoisted(() => ({
  getFeedbackData: vi.fn(() => ({ html: '', speed: '' })),
}));
vi.mock('../../js/features/duel.ts', () => ({ _getFeedbackData: getFeedbackData }));

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<DuelFeedback />); });
  return { container, root };
}

describe('duel-feedback.tsx DuelFeedback', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = '';
    state.duelQuestion.feedbackHtml = '';
    state.duelQuestion.speedText = '';
    roots = [];
    getFeedbackData.mockClear().mockImplementation(() => ({ html: state.duelQuestion.feedbackHtml, speed: state.duelQuestion.speedText }));
  });

  afterEach(() => {
    roots.forEach(r => { act(() => { r.unmount(); }); });
  });

  it('renders empty feedback and speed text by default', () => {
    const { container, root } = mount();
    roots.push(root);
    const divs = container.querySelectorAll('div');
    expect(divs[0].innerHTML).toBe('');
    expect(divs[1].textContent).toBe('');
  });

  it('renders feedback HTML and speed text', () => {
    state.duelQuestion.feedbackHtml = '<b>Правильно!</b>';
    state.duelQuestion.speedText = '0.8s';
    const { container, root } = mount();
    roots.push(root);

    const divs = container.querySelectorAll('div');
    expect(divs[0].innerHTML).toBe('<b>Правильно!</b>');
    expect(divs[1].textContent).toBe('0.8s');
  });

  it('refreshDuelFeedback re-renders with updated feedback', () => {
    const { container, root } = mount();
    roots.push(root);

    state.duelQuestion.feedbackHtml = '<b>Невірно</b>';
    state.duelQuestion.speedText = '1.2s';
    act(() => { refreshDuelFeedback(); });

    const divs = container.querySelectorAll('div');
    expect(divs[0].innerHTML).toBe('<b>Невірно</b>');
    expect(divs[1].textContent).toBe('1.2s');
  });
});
