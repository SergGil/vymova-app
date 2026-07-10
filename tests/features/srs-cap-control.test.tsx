import { describe, it, expect, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { SrsNewCapControl } from '../../js/features/srs-cap-control.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<SrsNewCapControl />);
  });
  return { container, root };
}

describe('srs-cap-control.tsx SrsNewCapControl', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    localStorage.clear();
  });

  it('defaults to 10 when nothing is stored', () => {
    const { container } = mount();
    expect(container.querySelector('#srs-cap-value')!.textContent).toBe('10');
  });

  it('reads the initial cap from localStorage', () => {
    localStorage.setItem('ew_srs_new_cap', '20');
    const { container } = mount();
    expect(container.querySelector('#srs-cap-value')!.textContent).toBe('20');
  });

  it('increases the cap by 5 when + is clicked, capped at 50', () => {
    localStorage.setItem('ew_srs_new_cap', '45');
    const { container } = mount();
    const up = container.querySelector('#btn-srs-cap-up') as HTMLButtonElement;

    act(() => {
      up.click();
    });
    expect(container.querySelector('#srs-cap-value')!.textContent).toBe('50');
    expect(localStorage.getItem('ew_srs_new_cap')).toBe('50');

    act(() => {
      up.click();
    });
    expect(container.querySelector('#srs-cap-value')!.textContent).toBe('50');
  });

  it('decreases the cap by 5 when − is clicked, floored at 5', () => {
    localStorage.setItem('ew_srs_new_cap', '10');
    const { container } = mount();
    const down = container.querySelector('#btn-srs-cap-down') as HTMLButtonElement;

    act(() => {
      down.click();
    });
    expect(container.querySelector('#srs-cap-value')!.textContent).toBe('5');
    expect(localStorage.getItem('ew_srs_new_cap')).toBe('5');

    act(() => {
      down.click();
    });
    expect(container.querySelector('#srs-cap-value')!.textContent).toBe('5');
  });
});
