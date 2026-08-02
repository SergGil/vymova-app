// Vymova — js/features/game/combo-toast.tsx
// Combo streak toast (×2 COMBO! / ×3 MEGA! / JEDI FLOW!), triggered
// imperatively from combo.ts via showComboToast().
import { useEffect, useState, type ReactElement } from 'react';

type Listener = (text: string) => void;
const listeners = new Set<Listener>();

export function showComboToast(text: string): void {
  listeners.forEach((l) => l(text));
}

export function ComboToast(): ReactElement {
  const [text, setText] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    let raf: number | null = null;
    const listener = (t: string): void => {
      if (timer) clearTimeout(timer);
      if (raf !== null) cancelAnimationFrame(raf);
      setText(t);
      setShow(false);
      raf = requestAnimationFrame(() => {
        raf = null;
        setShow(true);
      });
      timer = setTimeout(() => setShow(false), 1700);
    };
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
      if (timer) clearTimeout(timer);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      id="combo-toast"
      className={
        'combo-toast fixed top-[42%] left-1/2 z-[9999] -translate-x-1/2 -translate-y-1/2 text-[1.5rem] font-extrabold py-3 px-[26px] rounded-2xl pointer-events-none whitespace-nowrap transition-[opacity,transform] duration-150 [background:var(--combo-toast-bg)] [border:var(--combo-toast-border)] text-[var(--combo-toast-color)] [text-shadow:var(--combo-toast-text-shadow)] shadow-[var(--combo-toast-shadow)]' +
        (show
          ? ' show scale-100 opacity-100 animate-[cToastOut_0.3s_ease_1.3s_forwards]'
          : ' scale-50 opacity-0')
      }
    >
      {text}
    </div>
  );
}
