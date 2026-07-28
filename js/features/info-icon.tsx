// Vymova — js/features/info-icon.tsx
// Маленька кнопка "ℹ️", що показує/ховає пояснювальну панель (InfoNote) поруч.
// Стан тримає компонент, що використовує цю пару — щоб панель могла бути
// блочним сиблінгом поза flex-рядком із самою кнопкою.
import type { ReactNode } from 'react';

export function InfoIcon({
  open,
  onToggle,
  label,
}: {
  open: boolean;
  onToggle: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      className={
        'info-icon-btn inline-flex items-center relative top-0.5 cursor-pointer text-xs leading-none py-0 px-0.5 transition-[opacity,transform] duration-150 hover:opacity-100 ' +
        (open ? 'active opacity-100 scale-110' : 'opacity-55')
      }
      aria-label={label}
      aria-expanded={open}
      title={label}
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
    >
      ℹ️
    </button>
  );
}

export function InfoNote({ children }: { children: ReactNode }) {
  return (
    <div
      className="info-note mt-1.5 mb-1 py-2 px-2.5 bg-[var(--card)] border border-[var(--border)] rounded-[10px] shadow-[var(--shadow)] text-[0.76rem] leading-[1.45] text-[var(--text2)] [animation:slideUpPanel_0.15s_ease]"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}
