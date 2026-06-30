import { describe, it, expect, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { QuizSwipe } from '../../js/features/swipe.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<QuizSwipe />);
  });
  return { container, root };
}

function touch(target: EventTarget, type: string, clientX: number): TouchEvent {
  return new TouchEvent(type, {
    bubbles: true,
    touches: type === 'touchstart' ? [{ clientX } as unknown as Touch] : [],
    changedTouches: [{ clientX } as unknown as Touch],
  });
}

describe('swipe.tsx QuizSwipe', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="quiz-overlay"></div>
      <button id="quiz-next" style="display:inline"></button>
    `;
  });

  it('renders nothing', () => {
    const { container } = mount();
    expect(container.innerHTML).toBe('');
  });

  it('does nothing when #quiz-overlay is absent', () => {
    document.body.innerHTML = '';
    expect(() => mount()).not.toThrow();
  });

  it('clicks #quiz-next on a fast left-to-right swipe', () => {
    mount();
    const overlay = document.getElementById('quiz-overlay')!;
    const next = document.getElementById('quiz-next') as HTMLButtonElement;
    let clicked = false;
    next.addEventListener('click', () => {
      clicked = true;
    });

    act(() => {
      overlay.dispatchEvent(touch(overlay, 'touchstart', 0));
      overlay.dispatchEvent(touch(overlay, 'touchend', 100));
    });

    expect(clicked).toBe(true);
  });

  it('does not click #quiz-next for a short swipe distance', () => {
    mount();
    const overlay = document.getElementById('quiz-overlay')!;
    const next = document.getElementById('quiz-next') as HTMLButtonElement;
    let clicked = false;
    next.addEventListener('click', () => {
      clicked = true;
    });

    act(() => {
      overlay.dispatchEvent(touch(overlay, 'touchstart', 0));
      overlay.dispatchEvent(touch(overlay, 'touchend', 30));
    });

    expect(clicked).toBe(false);
  });

  it('does not click #quiz-next for a right-to-left swipe', () => {
    mount();
    const overlay = document.getElementById('quiz-overlay')!;
    const next = document.getElementById('quiz-next') as HTMLButtonElement;
    let clicked = false;
    next.addEventListener('click', () => {
      clicked = true;
    });

    act(() => {
      overlay.dispatchEvent(touch(overlay, 'touchstart', 100));
      overlay.dispatchEvent(touch(overlay, 'touchend', 0));
    });

    expect(clicked).toBe(false);
  });

  it('does not click #quiz-next when it is hidden', () => {
    (document.getElementById('quiz-next') as HTMLButtonElement).style.display = 'none';
    mount();
    const overlay = document.getElementById('quiz-overlay')!;
    const next = document.getElementById('quiz-next') as HTMLButtonElement;
    let clicked = false;
    next.addEventListener('click', () => {
      clicked = true;
    });

    act(() => {
      overlay.dispatchEvent(touch(overlay, 'touchstart', 0));
      overlay.dispatchEvent(touch(overlay, 'touchend', 100));
    });

    expect(clicked).toBe(false);
  });

  it('removes event listeners on unmount', () => {
    const { root } = mount();
    const overlay = document.getElementById('quiz-overlay')!;
    const next = document.getElementById('quiz-next') as HTMLButtonElement;
    let clicked = false;
    next.addEventListener('click', () => {
      clicked = true;
    });

    act(() => {
      root.unmount();
    });

    act(() => {
      overlay.dispatchEvent(touch(overlay, 'touchstart', 0));
      overlay.dispatchEvent(touch(overlay, 'touchend', 100));
    });

    expect(clicked).toBe(false);
  });
});
