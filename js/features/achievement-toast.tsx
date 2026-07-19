// Vymova — js/features/achievement-toast.tsx
// Toast popup shown when a new achievement unlocks. Triggered imperatively
// from render-achievements.ts via showToast(), since checkAchievements()
// runs outside React (app init, game logic).
import { useEffect, useState, type ReactElement } from 'react';
import { achName, achHint } from './i18n.ts';
import type { Achievement } from '../../src/types.js';

type Listener = (ach: Achievement) => void;
const listeners = new Set<Listener>();

export function showToast(ach: Achievement): void {
  listeners.forEach((l) => l(ach));
}

export function AchievementToast(): ReactElement {
  const [ach, setAch] = useState<Achievement | null>(null);
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout> | null = null;
    let unmountTimer: ReturnType<typeof setTimeout> | null = null;
    const rafs: number[] = [];
    const raf = (fn: () => void): void => {
      rafs.push(requestAnimationFrame(fn));
    };
    const clearRafs = (): void => {
      rafs.forEach(cancelAnimationFrame);
      rafs.length = 0;
    };
    const listener = (a: Achievement): void => {
      if (hideTimer) clearTimeout(hideTimer);
      if (unmountTimer) clearTimeout(unmountTimer);
      clearRafs();
      setAch(a);
      setAnimate(false);
      setVisible(false);
      raf(() => {
        raf(() => {
          setVisible(true);
          raf(() => setAnimate(true));
        });
      });
      hideTimer = setTimeout(() => {
        setAnimate(false);
        unmountTimer = setTimeout(() => setVisible(false), 350);
      }, 3500);
    };
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
      if (hideTimer) clearTimeout(hideTimer);
      if (unmountTimer) clearTimeout(unmountTimer);
      clearRafs();
    };
  }, []);

  return (
    <div
      id="achievement-toast"
      className={
        'fixed left-1/2 top-1/2 z-[2000] min-w-[240px] max-w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-[14px] bg-[#1a1a2e] px-6 py-[18px] pointer-events-none text-center text-white shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-[transform_0.35s_cubic-bezier(0.34,1.56,0.64,1),opacity_0.3s] ' +
        (animate ? 'show scale-100 opacity-100' : 'scale-[0.92] opacity-0')
      }
      style={{ display: visible ? 'block' : 'none' }}
    >
      <span className="toast-icon mb-1 block text-[1.8rem]" id="toast-icon">
        {ach?.icon ?? '🏆'}
      </span>
      <div className="toast-title text-[0.72rem] uppercase tracking-[0.1em] text-[#a0a0b0]">
        Нове досягнення!
      </div>
      <div className="toast-name my-0.5 text-base font-bold" id="toast-name">
        {ach ? achName(ach) : ''}
      </div>
      <div className="toast-desc text-[0.78rem] text-[#c0c0d0]" id="toast-desc">
        {ach ? achHint(ach) : ''}
      </div>
    </div>
  );
}
