import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { LazyMode } from '../../src/lazy-mode.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function flushMicrotasks(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, 0));
}

describe('lazy-mode.tsx (LazyMode)', () => {
  let root: Root | null = null;
  let container: HTMLElement;
  let mountEl: HTMLElement;
  let btn: HTMLElement;

  beforeEach(() => {
    document.body.innerHTML = '';
    container = document.createElement('div');
    document.body.appendChild(container);
    btn = document.createElement('button');
    btn.id = 'btn-test-mode';
    document.body.appendChild(btn);
    mountEl = document.createElement('div');
    mountEl.id = 'test-mode-mount';
    document.body.appendChild(mountEl);
  });

  afterEach(() => {
    if (root) {
      act(() => {
        root!.unmount();
      });
      root = null;
    }
    document.body.innerHTML = '';
  });

  it('renders nothing until the trigger button is clicked', () => {
    const loader = vi.fn().mockResolvedValue({ Page: () => null, open: vi.fn() });
    root = createRoot(container);
    act(() => {
      root!.render(<LazyMode btnId="btn-test-mode" mountId="test-mode-mount" loader={loader} />);
    });
    expect(loader).not.toHaveBeenCalled();
    expect(mountEl.innerHTML).toBe('');
  });

  it('loads the module and calls open() the first time the button is clicked', async () => {
    const open = vi.fn();
    function Page() {
      return <div id="loaded-marker">loaded</div>;
    }
    const loader = vi.fn().mockResolvedValue({ Page, open });
    root = createRoot(container);
    act(() => {
      root!.render(<LazyMode btnId="btn-test-mode" mountId="test-mode-mount" loader={loader} />);
    });

    act(() => {
      btn.click();
    });
    await act(async () => {
      await flushMicrotasks();
    });

    expect(loader).toHaveBeenCalledTimes(1);
    expect(open).toHaveBeenCalledTimes(1);
    expect(mountEl.querySelector('#loaded-marker')).not.toBeNull();
  });

  it('does not reload the module on subsequent clicks once loaded', async () => {
    const open = vi.fn();
    const loader = vi.fn().mockResolvedValue({ Page: () => null, open });
    root = createRoot(container);
    act(() => {
      root!.render(<LazyMode btnId="btn-test-mode" mountId="test-mode-mount" loader={loader} />);
    });

    act(() => {
      btn.click();
    });
    await act(async () => {
      await flushMicrotasks();
    });
    act(() => {
      btn.click();
    });
    await act(async () => {
      await flushMicrotasks();
    });

    expect(loader).toHaveBeenCalledTimes(1);
    // open() is only called once, for the click that triggered the load.
    expect(open).toHaveBeenCalledTimes(1);
  });

  it('renders nothing if the mount element is missing from the DOM', async () => {
    mountEl.remove();
    const loader = vi.fn().mockResolvedValue({ Page: () => <div id="loaded-marker" />, open: vi.fn() });
    root = createRoot(container);
    act(() => {
      root!.render(<LazyMode btnId="btn-test-mode" mountId="test-mode-mount" loader={loader} />);
    });
    act(() => {
      btn.click();
    });
    await act(async () => {
      await flushMicrotasks();
    });
    expect(document.querySelector('#loaded-marker')).toBeNull();
  });
});
