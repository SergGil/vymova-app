import { describe, it, expect, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { AchievementToast, showToast } from '../../js/features/achievement-toast.tsx';
import type { Achievement } from '../../src/types.js';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const ach: Achievement = { id: 'first_word', icon: '🥇' } as Achievement;

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<AchievementToast />); });
  return { container, root };
}

function rafTick(): Promise<void> {
  return new Promise(resolve => requestAnimationFrame(() => resolve()));
}

describe('achievement-toast.tsx', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('renders a hidden empty toast initially', () => {
    const { container } = mount();
    const el = container.querySelector('#achievement-toast') as HTMLElement;
    expect(el.style.display).toBe('none');
    expect(el.className).toBe('');
  });

  it('shows the achievement icon, name and hint when showToast is called', async () => {
    const { container } = mount();
    await act(async () => {
      showToast(ach);
      await rafTick();
      await rafTick();
      await rafTick();
    });
    const el = container.querySelector('#achievement-toast') as HTMLElement;
    expect(el.style.display).toBe('block');
    expect(el.className).toBe('show');
    expect(container.querySelector('#toast-icon')!.textContent).toBe('🥇');
    expect(container.querySelector('#toast-name')!.textContent).toBeTruthy();
    expect(container.querySelector('#toast-desc')!.textContent).toBeTruthy();
  });

  it('hides after 3500ms + 350ms', async () => {
    const { container } = mount();
    await act(async () => {
      showToast(ach);
      await rafTick();
      await rafTick();
      await rafTick();
    });
    expect((container.querySelector('#achievement-toast') as HTMLElement).className).toBe('show');

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 3500));
    });
    expect((container.querySelector('#achievement-toast') as HTMLElement).className).toBe('');

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 350));
    });
    expect((container.querySelector('#achievement-toast') as HTMLElement).style.display).toBe('none');
  }, 10000);

  it('does not throw when showToast is called after unmount', () => {
    const { root } = mount();
    act(() => { root.unmount(); });
    expect(() => showToast(ach)).not.toThrow();
  });
});
