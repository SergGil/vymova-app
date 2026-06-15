import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { ComboToast, showComboToast } from '../../js/features/combo-toast.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

let activeRoot: Root | null = null;

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<ComboToast />); });
  activeRoot = root;
  return { container, root };
}

function rafTick(): Promise<void> {
  return new Promise(resolve => requestAnimationFrame(() => resolve()));
}

describe('combo-toast.tsx', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  afterEach(() => {
    if (activeRoot) { act(() => { activeRoot!.unmount(); }); activeRoot = null; }
  });

  it('renders an empty hidden toast initially', () => {
    const { container } = mount();
    const el = container.querySelector('#combo-toast') as HTMLElement;
    expect(el.textContent).toBe('');
    expect(el.className).toBe('combo-toast');
  });

  it('shows the toast text when showComboToast is called', async () => {
    const { container } = mount();
    await act(async () => {
      showComboToast('×2 COMBO!');
      await rafTick();
    });
    const el = container.querySelector('#combo-toast') as HTMLElement;
    expect(el.textContent).toBe('×2 COMBO!');
    expect(el.className).toBe('combo-toast show');
  });

  it('hides the toast after 1700ms', async () => {
    const { container } = mount();
    await act(async () => {
      showComboToast('×3 MEGA!');
      await rafTick();
    });
    expect((container.querySelector('#combo-toast') as HTMLElement).className).toBe('combo-toast show');

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 1700));
    });
    expect((container.querySelector('#combo-toast') as HTMLElement).className).toBe('combo-toast');
  }, 10000);

  it('does not throw when showComboToast is called after unmount', () => {
    const { root } = mount();
    act(() => { root.unmount(); });
    activeRoot = null;
    expect(() => showComboToast('JEDI FLOW!')).not.toThrow();
  });
});
