// English Words App — js/features/combo-toast.tsx
// Combo streak toast (×2 COMBO! / ×3 MEGA! / JEDI FLOW!), triggered
// imperatively from combo.ts via showComboToast().
import { useEffect, useState, type ReactElement } from 'react';

type Listener = (text: string) => void;
const listeners = new Set<Listener>();

export function showComboToast(text: string): void {
  listeners.forEach(l => l(text));
}

export function ComboToast(): ReactElement {
  const [text, setText] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    const listener = (t: string): void => {
      if (timer) clearTimeout(timer);
      setText(t);
      setShow(false);
      requestAnimationFrame(() => setShow(true));
      timer = setTimeout(() => setShow(false), 1700);
    };
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
      if (timer) clearTimeout(timer);
    };
  }, []);

  return <div id="combo-toast" className={`combo-toast${show ? ' show' : ''}`}>{text}</div>;
}
