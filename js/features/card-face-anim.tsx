// Vymova — js/features/card-face-anim.tsx
// Owns the '.card-face' next/prev/fade animation — the only remaining DOM
// touch card-engine.ts's animCard() used to do directly. Reacts to
// card-anim-store's `animRequest` (dispatched by animCard()) instead.
import { useLayoutEffect } from 'react';
import { useCardAnimState } from '../core/card-anim-store.ts';

export function CardFaceAnim(): null {
  const { animRequest } = useCardAnimState();

  useLayoutEffect(() => {
    if (!animRequest) return;
    const face = document.querySelector<HTMLElement>('.card-face');
    if (!face || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const cls =
      animRequest.dir === 'next' ? 'anim-next' : animRequest.dir === 'prev' ? 'anim-prev' : 'anim-fade';
    face.classList.remove('anim-next', 'anim-prev', 'anim-fade');
    void face.offsetWidth; // force reflow — restarts the CSS animation even for the same class twice in a row
    face.classList.add(cls);
    const timer = setTimeout(() => face.classList.remove(cls), 250);
    return () => clearTimeout(timer);
  }, [animRequest]);

  return null;
}
