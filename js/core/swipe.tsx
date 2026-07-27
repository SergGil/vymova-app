// Vymova — js/core/swipe.tsx
// Touch swipe gestures on the flashcard
//
// #card's classList/style also has two other independent writers:
// CardKnownVisuals (js/features/card-known-visuals.tsx, owns the 'is-known'
// class, based on SRS/known state) and card-actions.ts's reset-progress
// confirm (clears 'is-known' once, right before triggering a re-render).
// No active conflict today — this file only ever touches
// 'swipe-right'/'swipe-left'/'swipe-up' plus style.transform/transition,
// disjoint from 'is-known' — but a future change that adds a class-list
// *replace* (vs add/remove) anywhere on #card would silently clobber
// whichever of these ran last.
import { useEffect } from 'react';
import { getFlippedSnapshot } from '../../src/deck-store.ts';
import { setFlipped } from './card-engine.ts';

// .swipe-hint-right/-left/-up's own bare CSS moved to Tailwind utility
// classes (docs/full-css-tailwind-migration-roadmap.md Tier 2a) — exported
// so card-shell.tsx's initial render and this file's repeated `className =`
// reassignments below (a full replace, not classList.add/remove, so any
// Tailwind classes not baked into these constants would be wiped out on the
// very first touchmove) stay byte-identical, same reasoning as
// milestones.ts's MILESTONE_TOAST_*_CLASS pair.
export const SWIPE_HINT_RIGHT_CLASS =
  'absolute opacity-0 pointer-events-none text-[2rem] font-extrabold transition-opacity duration-150 z-10 rounded-[50px] py-1.5 px-4 right-4 top-1/2 -translate-y-1/2 bg-[rgba(39,174,96,0.15)] text-[#27ae60]';
export const SWIPE_HINT_RIGHT_SHOW_CLASS =
  'absolute opacity-100 pointer-events-none text-[2rem] font-extrabold transition-opacity duration-150 z-10 rounded-[50px] py-1.5 px-4 right-4 top-1/2 -translate-y-1/2 bg-[rgba(39,174,96,0.15)] text-[#27ae60]';
export const SWIPE_HINT_LEFT_CLASS =
  'absolute opacity-0 pointer-events-none text-[2rem] font-extrabold transition-opacity duration-150 z-10 rounded-[50px] py-1.5 px-4 left-4 top-1/2 -translate-y-1/2 bg-[rgba(231,76,60,0.1)] text-[#c0392b]';
export const SWIPE_HINT_LEFT_SHOW_CLASS =
  'absolute opacity-100 pointer-events-none text-[2rem] font-extrabold transition-opacity duration-150 z-10 rounded-[50px] py-1.5 px-4 left-4 top-1/2 -translate-y-1/2 bg-[rgba(231,76,60,0.1)] text-[#c0392b]';
export const SWIPE_HINT_UP_CLASS =
  'absolute opacity-0 pointer-events-none text-[1.2rem] font-extrabold transition-opacity duration-150 z-10 rounded-[50px] py-1.5 px-4 left-1/2 top-3 -translate-x-1/2 bg-[rgba(52,152,219,0.12)] text-[#2980b9]';
export const SWIPE_HINT_UP_SHOW_CLASS =
  'absolute opacity-100 pointer-events-none text-[1.2rem] font-extrabold transition-opacity duration-150 z-10 rounded-[50px] py-1.5 px-4 left-1/2 top-3 -translate-x-1/2 bg-[rgba(52,152,219,0.12)] text-[#2980b9]';

export function CardSwipe(): null {
  useEffect(() => {
    const card = document.getElementById('card');
    const shRight = document.getElementById('sh-right');
    const shLeft = document.getElementById('sh-left');
    const shUp = document.getElementById('sh-up');
    if (!card || !shRight || !shLeft || !shUp) return;

    let startX = 0,
      startY = 0,
      startTime = 0;
    let isDragging = false;

    const THRESHOLD = 60;
    const MAX_TIME = 400;

    function onTouchStart(e: TouchEvent): void {
      const t = e.touches[0];
      startX = t.clientX;
      startY = t.clientY;
      startTime = Date.now();
      isDragging = true;
    }

    function onTouchMove(e: TouchEvent): void {
      if (!isDragging) return;
      const t = e.touches[0];
      const dx = t.clientX - startX;
      const dy = t.clientY - startY;
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);

      if (absDx > 20 && absDx > absDy) {
        shRight!.className = dx > 0 ? SWIPE_HINT_RIGHT_SHOW_CLASS : SWIPE_HINT_RIGHT_CLASS;
        shLeft!.className = dx < 0 ? SWIPE_HINT_LEFT_SHOW_CLASS : SWIPE_HINT_LEFT_CLASS;
        shUp!.className = SWIPE_HINT_UP_CLASS;
        card!.style.transition = 'none';
        card!.style.transform = 'translateX(' + dx * 0.25 + 'px) rotate(' + dx * 0.02 + 'deg)';
      } else if (absDy > 20 && absDy > absDx && dy < 0) {
        shUp!.className = SWIPE_HINT_UP_SHOW_CLASS;
        shRight!.className = SWIPE_HINT_RIGHT_CLASS;
        shLeft!.className = SWIPE_HINT_LEFT_CLASS;
        card!.style.transition = 'none';
        card!.style.transform = 'translateY(' + dy * 0.2 + 'px)';
      }
    }

    function onTouchEnd(e: TouchEvent): void {
      if (!isDragging) return;
      isDragging = false;

      shRight!.className = SWIPE_HINT_RIGHT_CLASS;
      shLeft!.className = SWIPE_HINT_LEFT_CLASS;
      shUp!.className = SWIPE_HINT_UP_CLASS;

      const t = e.changedTouches[0];
      const dx = t.clientX - startX;
      const dy = t.clientY - startY;
      const dt = Date.now() - startTime;
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);

      card!.style.transition = '';
      card!.style.transform = '';

      if (dt > MAX_TIME) return;

      if (absDx > THRESHOLD && absDx > absDy * 1.5) {
        if (dx > 0) {
          card!.classList.add('swipe-right');
          setTimeout(function () {
            card!.classList.remove('swipe-right');
            document.getElementById('btn-know')!.click();
          }, 220);
        } else {
          card!.classList.add('swipe-left');
          setTimeout(function () {
            card!.classList.remove('swipe-left');
            document.getElementById('btn-next')!.click();
          }, 220);
        }
      } else if (absDy > 40 && dy < 0 && absDy > absDx * 1.2) {
        if (!getFlippedSnapshot()) {
          card!.classList.add('swipe-up');
          setTimeout(function () {
            card!.classList.remove('swipe-up');
            setFlipped(true);
          }, 200);
        }
      }
    }

    card.addEventListener('touchstart', onTouchStart, { passive: true });
    card.addEventListener('touchmove', onTouchMove, { passive: true });
    card.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      card.removeEventListener('touchstart', onTouchStart);
      card.removeEventListener('touchmove', onTouchMove);
      card.removeEventListener('touchend', onTouchEnd);
    };
  }, []);
  return null;
}
