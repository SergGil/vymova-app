import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { CardSwipe } from '../../js/core/swipe.tsx';
import { getFlippedSnapshot, setFlippedState } from '../../src/deck-store.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function touchEvent(type: string, x: number, y: number, currentX = x, currentY = y): Event {
  const e = new Event(type, { bubbles: true, cancelable: true }) as Event & {
    touches: { clientX: number; clientY: number }[];
    changedTouches: { clientX: number; clientY: number }[];
  };
  e.touches = [{ clientX: currentX, clientY: currentY }];
  e.changedTouches = [{ clientX: currentX, clientY: currentY }];
  return e;
}

describe('swipe.tsx (CardSwipe)', () => {
  let root: Root;
  let container: HTMLElement;
  let card: HTMLElement;
  let btnKnow: HTMLButtonElement;
  let btnNext: HTMLButtonElement;
  let knowClick: ReturnType<typeof vi.fn>;
  let nextClick: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    vi.useFakeTimers();
    document.body.innerHTML = '';
    setFlippedState(false);

    card = document.createElement('div');
    card.id = 'card';
    document.body.appendChild(card);

    for (const id of ['sh-right', 'sh-left', 'sh-up']) {
      const el = document.createElement('div');
      el.id = id;
      document.body.appendChild(el);
    }

    btnKnow = document.createElement('button');
    btnKnow.id = 'btn-know';
    knowClick = vi.fn();
    btnKnow.addEventListener('click', knowClick);
    document.body.appendChild(btnKnow);

    btnNext = document.createElement('button');
    btnNext.id = 'btn-next';
    nextClick = vi.fn();
    btnNext.addEventListener('click', nextClick);
    document.body.appendChild(btnNext);

    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<CardSwipe />);
    });
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    document.body.innerHTML = '';
    setFlippedState(false);
    vi.useRealTimers();
  });

  it('does nothing while dragging below the swipe threshold', () => {
    card.dispatchEvent(touchEvent('touchstart', 100, 100));
    card.dispatchEvent(touchEvent('touchmove', 100, 100, 110, 100));
    card.dispatchEvent(touchEvent('touchend', 100, 100, 115, 100));
    vi.advanceTimersByTime(300);
    expect(knowClick).not.toHaveBeenCalled();
    expect(nextClick).not.toHaveBeenCalled();
  });

  it('a fast rightward swipe past the threshold clicks know (after the animation delay)', () => {
    card.dispatchEvent(touchEvent('touchstart', 100, 100));
    card.dispatchEvent(touchEvent('touchmove', 100, 100, 140, 100));
    card.dispatchEvent(touchEvent('touchend', 100, 100, 200, 100));
    expect(knowClick).not.toHaveBeenCalled();
    vi.advanceTimersByTime(220);
    expect(knowClick).toHaveBeenCalledTimes(1);
    expect(card.classList.contains('swipe-right')).toBe(false);
  });

  it('a fast leftward swipe past the threshold clicks next', () => {
    card.dispatchEvent(touchEvent('touchstart', 200, 100));
    card.dispatchEvent(touchEvent('touchmove', 200, 100, 160, 100));
    card.dispatchEvent(touchEvent('touchend', 200, 100, 100, 100));
    vi.advanceTimersByTime(220);
    expect(nextClick).toHaveBeenCalledTimes(1);
  });

  it('a fast upward swipe flips an unflipped card', () => {
    card.dispatchEvent(touchEvent('touchstart', 100, 200));
    card.dispatchEvent(touchEvent('touchmove', 100, 200, 100, 160));
    card.dispatchEvent(touchEvent('touchend', 100, 200, 100, 130));
    vi.advanceTimersByTime(200);
    expect(getFlippedSnapshot()).toBe(true);
  });

  it('an upward swipe does nothing if the card is already flipped', () => {
    setFlippedState(true);
    card.dispatchEvent(touchEvent('touchstart', 100, 200));
    card.dispatchEvent(touchEvent('touchmove', 100, 200, 100, 160));
    card.dispatchEvent(touchEvent('touchend', 100, 200, 100, 130));
    vi.advanceTimersByTime(200);
    expect(card.classList.contains('swipe-up')).toBe(false);
  });

  it('a swipe that takes too long (slow drag) is ignored even past the distance threshold', () => {
    card.dispatchEvent(touchEvent('touchstart', 100, 100));
    vi.advanceTimersByTime(500);
    card.dispatchEvent(touchEvent('touchend', 100, 100, 200, 100));
    vi.advanceTimersByTime(220);
    expect(knowClick).not.toHaveBeenCalled();
  });

  it('removes its listeners on unmount', () => {
    act(() => {
      root.unmount();
    });
    card.dispatchEvent(touchEvent('touchstart', 100, 100));
    card.dispatchEvent(touchEvent('touchend', 100, 100, 200, 100));
    vi.advanceTimersByTime(300);
    expect(knowClick).not.toHaveBeenCalled();
  });
});
