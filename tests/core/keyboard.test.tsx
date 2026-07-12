import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { KeyboardShortcuts } from '../../js/core/keyboard.tsx';
import { getFlippedSnapshot, setFlippedState } from '../../src/deck-store.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function press(code: string, target: Element = document.body): KeyboardEvent {
  const event = new KeyboardEvent('keydown', { code, bubbles: true, cancelable: true });
  target.dispatchEvent(event);
  return event;
}

describe('keyboard.tsx (KeyboardShortcuts)', () => {
  let root: Root;
  let container: HTMLElement;
  let btnNext: HTMLButtonElement;
  let btnPrev: HTMLButtonElement;
  let btnKnow: HTMLButtonElement;
  let nextClick: ReturnType<typeof vi.fn>;
  let prevClick: ReturnType<typeof vi.fn>;
  let knowClick: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    document.body.innerHTML = '';
    setFlippedState(false);

    btnNext = document.createElement('button');
    btnNext.id = 'btn-next';
    nextClick = vi.fn();
    btnNext.addEventListener('click', nextClick);
    document.body.appendChild(btnNext);

    btnPrev = document.createElement('button');
    btnPrev.id = 'btn-prev';
    prevClick = vi.fn();
    btnPrev.addEventListener('click', prevClick);
    document.body.appendChild(btnPrev);

    btnKnow = document.createElement('button');
    btnKnow.id = 'btn-know';
    knowClick = vi.fn();
    btnKnow.addEventListener('click', knowClick);
    document.body.appendChild(btnKnow);

    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<KeyboardShortcuts />);
    });
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    document.body.innerHTML = '';
    setFlippedState(false);
  });

  it('Space flips the card when not yet flipped, and prevents default', () => {
    const event = press('Space');
    expect(getFlippedSnapshot()).toBe(true);
    expect(event.defaultPrevented).toBe(true);
    expect(nextClick).not.toHaveBeenCalled();
  });

  it('Space advances to the next card once already flipped', () => {
    setFlippedState(true);
    press('Space');
    expect(nextClick).toHaveBeenCalledTimes(1);
  });

  it('Enter clicks the know button', () => {
    const event = press('Enter');
    expect(knowClick).toHaveBeenCalledTimes(1);
    expect(event.defaultPrevented).toBe(true);
  });

  it('ArrowRight clicks next, ArrowLeft clicks prev', () => {
    press('ArrowRight');
    expect(nextClick).toHaveBeenCalledTimes(1);
    press('ArrowLeft');
    expect(prevClick).toHaveBeenCalledTimes(1);
  });

  it('KeyF flips the card when not yet flipped', () => {
    press('KeyF');
    expect(getFlippedSnapshot()).toBe(true);
  });

  it('KeyF does nothing once already flipped', () => {
    setFlippedState(true);
    press('KeyF');
    expect(getFlippedSnapshot()).toBe(true);
    expect(nextClick).not.toHaveBeenCalled();
  });

  it('ignores keydowns while an input/select/textarea is focused', () => {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.focus();
    press('Space', input);
    expect(getFlippedSnapshot()).toBe(false);
  });

  it('ignores keydowns originating inside #modal-overlay', () => {
    const overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    const inner = document.createElement('button');
    overlay.appendChild(inner);
    document.body.appendChild(overlay);
    press('Space', inner);
    expect(getFlippedSnapshot()).toBe(false);
  });

  it('removes its listener on unmount', () => {
    act(() => {
      root.unmount();
    });
    press('Space');
    expect(getFlippedSnapshot()).toBe(false);
  });
});
