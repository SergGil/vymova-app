import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { PronunciationToast, showPronuncResult } from '../../js/features/pronunciation-toast.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

// The toast now portals directly into document.body (not a local test
// container), so a leaked real setTimeout from one test can later try to
// mutate/remove a DOM node a subsequent test's cleanup already wiped —
// fake timers + explicit unmount keep each test fully self-contained.
let roots: Root[] = [];

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  roots.push(root);
  act(() => {
    root.render(<PronunciationToast />);
  });
  return { container, root };
}

describe('pronunciation-toast.tsx', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    roots = [];
    document.body.innerHTML = '';
  });

  afterEach(() => {
    roots.forEach((r) => {
      act(() => {
        r.unmount();
      });
    });
    vi.useRealTimers();
  });

  it('renders nothing initially', () => {
    const { container } = mount();
    expect(container.innerHTML).toBe('');
  });

  it('shows a "perfect" toast with score percentage', () => {
    mount();
    act(() => {
      showPronuncResult('perfect', 1, 'hello', 'hello');
    });
    const el = document.querySelector('#_pron-toast') as HTMLElement;
    expect(el).not.toBeNull();
    expect(el.style.opacity).toBe('1');
    expect(el.style.background).toBe('#27ae60');
    expect(el.textContent).toContain('🏆');
    const bar = el.lastElementChild!.firstElementChild as HTMLElement;
    expect(bar.style.width).toBe('100%');
  });

  it('shows a "try_again" toast with spoken vs target text', () => {
    mount();
    act(() => {
      showPronuncResult('try_again', 0.3, 'helo', 'hello');
    });
    const el = document.querySelector('#_pron-toast') as HTMLElement;
    expect(el.textContent).toContain('"helo" → "hello"');
    expect(el.style.background).toBe('#e74c3c');
  });

  it('falls back to the "error" message for an unknown status', () => {
    mount();
    act(() => {
      showPronuncResult('bogus', 0, '', '');
    });
    const el = document.querySelector('#_pron-toast') as HTMLElement;
    expect(el.textContent).toContain('⚠️');
  });

  it('hides after 3000ms and unmounts after a further 350ms', () => {
    mount();
    act(() => {
      showPronuncResult('good', 0.8, 'hi', 'hi');
    });
    expect(document.querySelector('#_pron-toast')).not.toBeNull();

    act(() => {
      vi.advanceTimersByTime(3000);
    });
    expect((document.querySelector('#_pron-toast') as HTMLElement).style.opacity).toBe('0');

    act(() => {
      vi.advanceTimersByTime(350);
    });
    expect(document.querySelector('#_pron-toast')).toBeNull();
  });
});
