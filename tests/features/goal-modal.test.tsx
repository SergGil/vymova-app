import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { getGameData, saveGameData } from '../../js/features/game/game.ts';
import { GoalModal } from '../../js/features/goal-modal.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { renderGameBar } = vi.hoisted(() => ({ renderGameBar: vi.fn() }));
vi.mock('../../js/features/game/render-game-bar.ts', () => ({ renderGameBar }));

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<GoalModal />);
  });
  return { container, root };
}

function openModal(): void {
  const btn = document.getElementById('goal-set-btn')!;
  act(() => {
    btn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
}

const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
  HTMLInputElement.prototype,
  'value',
)!.set!;

function setInputValue(input: HTMLInputElement, value: string): void {
  nativeInputValueSetter.call(input, value);
  input.dispatchEvent(new Event('input', { bubbles: true }));
}

describe('goal-modal.tsx GoalModal', () => {
  beforeEach(() => {
    // GoalModal schedules a bare setTimeout() for input-focus (and another
    // for the shake reset) that isn't cleared on unmount. With real timers
    // it can fire after this test file's happy-dom environment is torn
    // down, crashing a later file with "window is not defined". Fake
    // timers keep it scoped to this test and discard it when we switch
    // back at teardown.
    vi.useFakeTimers();
    document.body.innerHTML = '<button id="goal-set-btn"></button>';
    localStorage.clear();
    renderGameBar.mockClear();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  // GoalModal's Popup is Portal'd to document.body by Dialog (base-ui, same
  // as every other Dialog-based conversion this session) — not a descendant
  // of `container`, so it's queried from the document; "closed" now means
  // "not in the document" rather than "container is empty" (container was
  // never where the portal content lived in the first place).
  it('renders nothing until #goal-set-btn is clicked', () => {
    mount();
    expect(document.querySelector('input')).toBeNull();
  });

  it('opens with the current goalMax pre-filled', async () => {
    saveGameData({ ...getGameData(), goalMax: 35 });
    mount();
    openModal();
    const input = document.querySelector('input') as HTMLInputElement;
    expect(input).not.toBeNull();
    expect(input.value).toBe('35');
  });

  it('saves a valid goal, calls renderGameBar, and closes', () => {
    mount();
    openModal();
    const input = document.querySelector('input') as HTMLInputElement;
    act(() => {
      setInputValue(input, '50');
    });

    const buttons = document.querySelectorAll('button');
    const saveBtn = Array.from(buttons).find((b) => b.textContent === 'Зберегти')!;
    act(() => {
      saveBtn.click();
    });

    expect(getGameData().goalMax).toBe(50);
    expect(renderGameBar).toHaveBeenCalled();
    expect(document.querySelector('input')).toBeNull();
  });

  it('shakes and stays open for an out-of-range value', () => {
    mount();
    openModal();
    const input = document.querySelector('input') as HTMLInputElement;
    act(() => {
      setInputValue(input, '0');
    });

    const buttons = document.querySelectorAll('button');
    const saveBtn = Array.from(buttons).find((b) => b.textContent === 'Зберегти')!;
    act(() => {
      saveBtn.click();
    });

    expect((document.querySelector('input') as HTMLInputElement).className).toBe(
      'shake animate-[shakeX_0.38s_ease] border-[#e74c3c]!',
    );
    expect(document.querySelector('input')).not.toBeNull();
    expect(renderGameBar).not.toHaveBeenCalled();
  });

  it('closes via the cancel button', () => {
    mount();
    openModal();
    const buttons = document.querySelectorAll('button');
    const cancelBtn = Array.from(buttons).find((b) => b.textContent === 'Відміна')!;
    act(() => {
      cancelBtn.click();
    });
    expect(document.querySelector('input')).toBeNull();
  });

  // Regression test for the real bug this Dialog conversion fixes: Escape
  // used to only close the modal via a keydown handler on the <input>
  // itself, so it silently did nothing once focus moved anywhere else (e.g.
  // after clicking a button). Dialog's own Escape dismissal is a document-
  // level listener, so it now works regardless of what has focus.
  it('closes on Escape key regardless of what has focus', () => {
    mount();
    openModal();
    act(() => {
      document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    expect(document.querySelector('input')).toBeNull();
  });
});
