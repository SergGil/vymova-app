import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { ConfettiCanvas, launchConfetti } from '../../js/core/confetti.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<ConfettiCanvas />); });
  return { container, root };
}

const mockCtx2d = {
  clearRect: vi.fn(),
  save: vi.fn(),
  restore: vi.fn(),
  translate: vi.fn(),
  rotate: vi.fn(),
  fillRect: vi.fn(),
  globalAlpha: 1,
  fillStyle: '',
};

describe('confetti.tsx', () => {
  let roots: Root[] = [];
  let rafQueue: FrameRequestCallback[] = [];

  beforeEach(() => {
    document.body.innerHTML = '';
    roots = [];
    rafQueue = [];
    vi.stubGlobal('innerWidth', 800);
    vi.stubGlobal('innerHeight', 600);
    HTMLCanvasElement.prototype.getContext = vi.fn(() => mockCtx2d) as any;
    vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => {
      rafQueue.push(cb);
      return rafQueue.length;
    });
  });

  afterEach(() => {
    roots.forEach(r => { act(() => { r.unmount(); }); });
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('renders the confetti canvas element', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(container.querySelector('#confetti-canvas')).not.toBeNull();
  });

  it('does nothing if the canvas has not been mounted', () => {
    expect(() => launchConfetti()).not.toThrow();
  });

  it('launches and runs the animation loop to completion', () => {
    const { root } = mount();
    roots.push(root);

    launchConfetti();
    expect(rafQueue.length).toBe(1);

    // drain the animation frames
    for (let i = 0; i < 145 && rafQueue.length; i++) {
      const cb = rafQueue.shift()!;
      cb(0);
    }
    expect(mockCtx2d.clearRect).toHaveBeenCalled();
  });

  it('does not relaunch while an animation is already in progress', () => {
    const { root } = mount();
    roots.push(root);

    launchConfetti();
    const queuedBefore = rafQueue.length;
    launchConfetti();
    expect(rafQueue.length).toBe(queuedBefore);
  });
});
