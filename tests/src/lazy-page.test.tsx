import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { LazyPage } from '../../src/lazy-page.tsx';
import { dispatchOpenPage, dispatchClosePage } from '../../src/nav-store.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function flushMicrotasks(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, 0));
}

describe('lazy-page.tsx (LazyPage)', () => {
  let root: Root | null = null;
  let container: HTMLElement;
  let mountEl: HTMLElement;

  beforeEach(() => {
    document.body.innerHTML = '';
    dispatchClosePage();
    container = document.createElement('div');
    document.body.appendChild(container);
    mountEl = document.createElement('div');
    mountEl.id = 'test-page-mount';
    document.body.appendChild(mountEl);
  });

  afterEach(() => {
    if (root) {
      act(() => {
        root!.unmount();
      });
      root = null;
    }
    dispatchClosePage();
    document.body.innerHTML = '';
  });

  it('renders nothing while the matching page is not active', () => {
    const loader = vi.fn().mockResolvedValue({ Page: () => <div id="marker" /> });
    root = createRoot(container);
    act(() => {
      root!.render(<LazyPage page="grammar" mountId="test-page-mount" loader={loader} />);
    });
    expect(loader).not.toHaveBeenCalled();
  });

  it('loads and portals the page once nav-store activates the matching page id', async () => {
    const loader = vi.fn().mockResolvedValue({ Page: () => <div id="marker">grammar</div> });
    root = createRoot(container);
    act(() => {
      root!.render(<LazyPage page="grammar" mountId="test-page-mount" loader={loader} />);
    });

    act(() => {
      dispatchOpenPage('grammar');
    });
    await act(async () => {
      await flushMicrotasks();
    });

    expect(loader).toHaveBeenCalledTimes(1);
    expect(mountEl.querySelector('#marker')).not.toBeNull();
  });

  it('does not load when a different page is activated', async () => {
    const loader = vi.fn().mockResolvedValue({ Page: () => <div id="marker" /> });
    root = createRoot(container);
    act(() => {
      root!.render(<LazyPage page="grammar" mountId="test-page-mount" loader={loader} />);
    });

    act(() => {
      dispatchOpenPage('idioms');
    });
    await act(async () => {
      await flushMicrotasks();
    });

    expect(loader).not.toHaveBeenCalled();
  });

  it('renders the component directly (no portal) when mountId is omitted', async () => {
    const loader = vi.fn().mockResolvedValue({ Page: () => <div id="marker">inline</div> });
    root = createRoot(container);
    act(() => {
      root!.render(<LazyPage active={true} loader={loader} />);
    });
    await act(async () => {
      await flushMicrotasks();
    });

    expect(loader).toHaveBeenCalledTimes(1);
    expect(container.querySelector('#marker')).not.toBeNull();
  });

  it('with active=false does not load', async () => {
    const loader = vi.fn().mockResolvedValue({ Page: () => <div id="marker" /> });
    root = createRoot(container);
    act(() => {
      root!.render(<LazyPage active={false} loader={loader} />);
    });
    await act(async () => {
      await flushMicrotasks();
    });
    expect(loader).not.toHaveBeenCalled();
  });
});
