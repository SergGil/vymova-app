import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { DuelPowerups } from '../../js/features/duel-powerups.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { getPowerupsData, onPowerupClick } = vi.hoisted(() => ({
  getPowerupsData: vi.fn(() => ({
    enabled: true,
    mode: 'quiz' as const,
    answered: false,
    myPowerups: { double: 1, skip: 1, freeze: 1 },
  })),
  onPowerupClick: vi.fn(),
}));
vi.mock('../../js/features/duel.ts', async (importOriginal) => {
  const orig = await importOriginal<typeof import('../../js/features/duel.ts')>();
  return { ...orig, _getPowerupsData: getPowerupsData, _onPowerupClick: onPowerupClick };
});

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<DuelPowerups />);
  });
  return { container, root };
}

describe('duel-powerups.tsx DuelPowerups', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = '';
    roots = [];
    onPowerupClick.mockClear();
    getPowerupsData.mockClear().mockReturnValue({
      enabled: true,
      mode: 'quiz',
      answered: false,
      myPowerups: { double: 1, skip: 1, freeze: 1 },
    });
  });

  afterEach(() => {
    roots.forEach((r) => {
      act(() => {
        r.unmount();
      });
    });
  });

  it('renders nothing when powerups are disabled', () => {
    getPowerupsData.mockReturnValue({
      enabled: false,
      mode: 'quiz',
      answered: false,
      myPowerups: { double: 1, skip: 1, freeze: 1 },
    });
    const { container, root } = mount();
    roots.push(root);
    expect(container.innerHTML).toBe('');
  });

  it('renders 3 powerup buttons when enabled', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(container.querySelectorAll('button').length).toBe(3);
    expect(container.textContent).toContain('×2');
  });

  it('clicking an available powerup calls _onPowerupClick with its type', () => {
    const { container, root } = mount();
    roots.push(root);
    const buttons = container.querySelectorAll('button');
    act(() => {
      (buttons[0] as HTMLButtonElement).click();
    });
    expect(onPowerupClick).toHaveBeenCalledWith('double');
  });

  it('disables a powerup button once it has been used up', () => {
    getPowerupsData.mockReturnValue({
      enabled: true,
      mode: 'quiz',
      answered: false,
      myPowerups: { double: 0, skip: 1, freeze: 1 },
    });
    const { container, root } = mount();
    roots.push(root);
    const buttons = container.querySelectorAll('button');
    expect(buttons[0].style.pointerEvents).toBe('none');
    act(() => {
      (buttons[0] as HTMLButtonElement).click();
    });
    expect(onPowerupClick).not.toHaveBeenCalled();
  });

  it('shows freeze as unavailable outside the tempo mode', () => {
    const { container, root } = mount();
    roots.push(root);
    const buttons = container.querySelectorAll('button');
    const freezeBtn = buttons[2] as HTMLButtonElement;
    expect(freezeBtn.style.pointerEvents).toBe('none');
    expect(freezeBtn.textContent).toContain('🚫');
  });

  it('does not allow clicks once the question is answered', () => {
    getPowerupsData.mockReturnValue({
      enabled: true,
      mode: 'quiz',
      answered: true,
      myPowerups: { double: 1, skip: 1, freeze: 1 },
    });
    const { container, root } = mount();
    roots.push(root);
    const buttons = container.querySelectorAll('button');
    act(() => {
      (buttons[0] as HTMLButtonElement).click();
    });
    expect(onPowerupClick).not.toHaveBeenCalled();
  });
});
