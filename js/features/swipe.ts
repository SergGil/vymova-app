// English Words App — js/features/swipe.ts
// ════════ SWIPE IN QUIZ ════════
const overlay = document.getElementById('quiz-overlay');
if (overlay) {
  let startX = 0, startTime = 0;
  overlay.addEventListener('touchstart', (e: TouchEvent) => {
    startX = e.touches[0].clientX;
    startTime = Date.now();
  }, { passive: true });
  overlay.addEventListener('touchend', (e: TouchEvent) => {
    const dx = e.changedTouches[0].clientX - startX;
    const dt = Date.now() - startTime;
    const elNext = document.getElementById('quiz-next') as HTMLButtonElement | null;
    if (Math.abs(dx) > 60 && dt < 350 && dx > 0 && elNext?.style.display !== 'none') {
      elNext?.click();
    }
  }, { passive: true });
}

export {};
