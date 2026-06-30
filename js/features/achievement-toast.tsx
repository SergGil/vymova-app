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
      className={animate ? 'show' : ''}
      style={{ display: visible ? 'block' : 'none' }}
    >
      <span className="toast-icon" id="toast-icon">
        {ach?.icon ?? '🏆'}
      </span>
      <div className="toast-title">Нове досягнення!</div>
      <div className="toast-name" id="toast-name">
        {ach ? achName(ach) : ''}
      </div>
      <div className="toast-desc" id="toast-desc">
        {ach ? achHint(ach) : ''}
      </div>
    </div>
  );
}
