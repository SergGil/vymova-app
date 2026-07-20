import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { dispatchAnimCard } from '../../js/core/card-anim-store.ts';
import { CardFaceAnim } from '../../js/features/card-face-anim.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

let _roots: Root[] = [];

function mount(): void {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<CardFaceAnim />);
  });
  _roots.push(root);
}

afterEach(() => {
  for (const root of _roots)
    act(() => {
      root.unmount();
    });
  _roots = [];
  vi.useRealTimers();
});

describe('<CardFaceAnim/>', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div class="card-face"></div>';
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({ matches: false })),
    );
  });

  it('adds the animation class on dispatch, then removes it after 250ms', () => {
    vi.useFakeTimers();
    mount();
    const face = document.querySelector('.card-face') as HTMLElement;
    act(() => {
      dispatchAnimCard('next');
    });
    expect(face.classList.contains('anim-next')).toBe(true);
    act(() => {
      vi.advanceTimersByTime(250);
    });
    expect(face.classList.contains('anim-next')).toBe(false);
  });

  it('restarts the animation for the same direction dispatched twice in a row', () => {
    vi.useFakeTimers();
    mount();
    const face = document.querySelector('.card-face') as HTMLElement;
    act(() => {
      dispatchAnimCard('next');
    });
    expect(face.classList.contains('anim-next')).toBe(true);
    act(() => {
      vi.advanceTimersByTime(100);
      dispatchAnimCard('next');
    });
    expect(face.classList.contains('anim-next')).toBe(true);
    act(() => {
      vi.advanceTimersByTime(250);
    });
    expect(face.classList.contains('anim-next')).toBe(false);
  });

  it('does nothing when reduced motion is preferred', () => {
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({ matches: true })),
    );
    mount();
    const face = document.querySelector('.card-face') as HTMLElement;
    act(() => {
      dispatchAnimCard('fade');
    });
    expect(face.classList.contains('anim-fade')).toBe(false);
  });
});
