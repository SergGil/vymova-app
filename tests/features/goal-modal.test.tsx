import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { getGameData, saveGameData } from '../../js/features/game.ts';
import { GoalModal } from '../../js/features/goal-modal.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { renderGameBar } = vi.hoisted(() => ({ renderGameBar: vi.fn() }));
vi.mock('../../js/features/render-game-bar.ts', () => ({ renderGameBar }));

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<GoalModal />); });
  return { container, root };
}

function openModal(): void {
  const btn = document.getElementById('goal-set-btn')!;
  act(() => { btn.dispatchEvent(new MouseEvent('click', { bubbles: true })); });
}

const nativeInputValueSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')!.set!;

function setInputValue(input: HTMLInputElement, value: string): void {
  nativeInputValueSetter.call(input, value);
  input.dispatchEvent(new Event('input', { bubbles: true }));
}

describe('goal-modal.tsx GoalModal', () => {
  beforeEach(() => {
    document.body.innerHTML = '<button id="goal-set-btn"></button>';
    localStorage.clear();
    renderGameBar.mockClear();
  });

  it('renders nothing until #goal-set-btn is clicked', () => {
    const { container } = mount();
    expect(container.innerHTML).toBe('');
  });

  it('opens with the current goalMax pre-filled', async () => {
    saveGameData({ ...getGameData(), goalMax: 35 });
    const { container } = mount();
    openModal();
    const input = container.querySelector('input') as HTMLInputElement;
    expect(input).not.toBeNull();
    expect(input.value).toBe('35');
  });

  it('saves a valid goal, calls renderGameBar, and closes', () => {
    const { container } = mount();
    openModal();
    const input = container.querySelector('input') as HTMLInputElement;
    act(() => { setInputValue(input, '50'); });

    const buttons = container.querySelectorAll('button');
    const saveBtn = Array.from(buttons).find(b => b.textContent === 'Зберегти')!;
    act(() => { saveBtn.click(); });

    expect(getGameData().goalMax).toBe(50);
    expect(renderGameBar).toHaveBeenCalled();
    expect(container.innerHTML).toBe('');
  });

  it('shakes and stays open for an out-of-range value', () => {
    const { container } = mount();
    openModal();
    const input = container.querySelector('input') as HTMLInputElement;
    act(() => { setInputValue(input, '0'); });

    const buttons = container.querySelectorAll('button');
    const saveBtn = Array.from(buttons).find(b => b.textContent === 'Зберегти')!;
    act(() => { saveBtn.click(); });

    expect((container.querySelector('input') as HTMLInputElement).className).toBe('shake');
    expect(container.querySelector('input')).not.toBeNull();
    expect(renderGameBar).not.toHaveBeenCalled();
  });

  it('closes via the cancel button', () => {
    const { container } = mount();
    openModal();
    const buttons = container.querySelectorAll('button');
    const cancelBtn = Array.from(buttons).find(b => b.textContent === 'Відміна')!;
    act(() => { cancelBtn.click(); });
    expect(container.innerHTML).toBe('');
  });

  it('closes on Escape key', () => {
    const { container } = mount();
    openModal();
    const input = container.querySelector('input') as HTMLInputElement;
    act(() => { input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true })); });
    expect(container.innerHTML).toBe('');
  });
});
