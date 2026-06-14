// English Words App — js/features/swipe.tsx
// ════════ SWIPE IN QUIZ ════════
import { useEffect } from 'react';

export function QuizSwipe(): null {
  useEffect(() => {
    const overlay = document.getElementById('quiz-overlay');
    if (!overlay) return;

    let startX = 0, startTime = 0;
    function onTouchStart(e: TouchEvent): void {
      startX = e.touches[0].clientX;
      startTime = Date.now();
    }
    function onTouchEnd(e: TouchEvent): void {
      const dx = e.changedTouches[0].clientX - startX;
      const dt = Date.now() - startTime;
      const elNext = document.getElementById('quiz-next') as HTMLButtonElement | null;
      if (Math.abs(dx) > 60 && dt < 350 && dx > 0 && elNext?.style.display !== 'none') {
        elNext?.click();
      }
    }
    overlay.addEventListener('touchstart', onTouchStart, { passive: true });
    overlay.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      overlay.removeEventListener('touchstart', onTouchStart);
      overlay.removeEventListener('touchend', onTouchEnd);
    };
  }, []);
  return null;
}
