import { describe, it, expect, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { FontSizeControl } from '../../js/features/font-size-control.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<FontSizeControl />);
  });
  return { container, root };
}

describe('font-size-control.tsx FontSizeControl', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    localStorage.clear();
    document.documentElement.style.fontSize = '';
  });

  it('defaults to 100% when nothing is stored', () => {
    const { container } = mount();
    expect(container.querySelector('#font-pct')!.textContent).toBe('100%');
    expect(document.documentElement.style.fontSize).toBe('100%');
  });

  it('reads the initial size from localStorage', () => {
    localStorage.setItem('ew_fontsize', '120');
    const { container } = mount();
    expect(container.querySelector('#font-pct')!.textContent).toBe('120%');
    expect(document.documentElement.style.fontSize).toBe('120%');
  });

  it('increases the font size by 10 when A+ is clicked, capped at 140', () => {
    localStorage.setItem('ew_fontsize', '135');
    const { container } = mount();
    const up = container.querySelector('#btn-font-up') as HTMLButtonElement;

    act(() => {
      up.click();
    });
    expect(container.querySelector('#font-pct')!.textContent).toBe('140%');
    expect(localStorage.getItem('ew_fontsize')).toBe('140');

    act(() => {
      up.click();
    });
    expect(container.querySelector('#font-pct')!.textContent).toBe('140%');
  });

  it('decreases the font size by 10 when A- is clicked, floored at 70', () => {
    localStorage.setItem('ew_fontsize', '75');
    const { container } = mount();
    const down = container.querySelector('#btn-font-down') as HTMLButtonElement;

    act(() => {
      down.click();
    });
    expect(container.querySelector('#font-pct')!.textContent).toBe('70%');
    expect(document.documentElement.style.fontSize).toBe('70%');
    expect(localStorage.getItem('ew_fontsize')).toBe('70');

    act(() => {
      down.click();
    });
    expect(container.querySelector('#font-pct')!.textContent).toBe('70%');
  });
});
