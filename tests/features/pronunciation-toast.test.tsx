import { describe, it, expect, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { PronunciationToast, showPronuncResult } from '../../js/features/pronunciation-toast.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<PronunciationToast />); });
  return { container, root };
}

describe('pronunciation-toast.tsx', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('renders nothing initially', () => {
    const { container } = mount();
    expect(container.innerHTML).toBe('');
  });

  it('shows a "perfect" toast with score percentage', () => {
    const { container } = mount();
    act(() => { showPronuncResult('perfect', 1, 'hello', 'hello'); });
    const el = container.querySelector('#_pron-toast') as HTMLElement;
    expect(el).not.toBeNull();
    expect(el.style.opacity).toBe('1');
    expect(el.style.background).toBe('#27ae60');
    expect(el.textContent).toContain('🏆');
    const bar = el.lastElementChild!.firstElementChild as HTMLElement;
    expect(bar.style.width).toBe('100%');
  });

  it('shows a "try_again" toast with spoken vs target text', () => {
    const { container } = mount();
    act(() => { showPronuncResult('try_again', 0.3, 'helo', 'hello'); });
    const el = container.querySelector('#_pron-toast') as HTMLElement;
    expect(el.textContent).toContain('"helo" → "hello"');
    expect(el.style.background).toBe('#e74c3c');
  });

  it('falls back to the "error" message for an unknown status', () => {
    const { container } = mount();
    act(() => { showPronuncResult('bogus', 0, '', ''); });
    const el = container.querySelector('#_pron-toast') as HTMLElement;
    expect(el.textContent).toContain('⚠️');
  });

  it('hides after 3000ms and unmounts after a further 350ms', async () => {
    const { container } = mount();
    act(() => { showPronuncResult('good', 0.8, 'hi', 'hi'); });
    expect(container.querySelector('#_pron-toast')).not.toBeNull();

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));
    });
    expect((container.querySelector('#_pron-toast') as HTMLElement).style.opacity).toBe('0');

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 350));
    });
    expect(container.querySelector('#_pron-toast')).toBeNull();
  }, 10000);
});
