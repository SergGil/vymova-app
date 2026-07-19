// Vymova — js/core/flag-dropdown.tsx
// A flag-icon dropdown standing in for a native <select> — browsers don't
// render images inside <option>, so showing a flag per language/direction
// means rolling our own button + popover list instead. Extracted from
// lang-pair-select.tsx (the original consumer) into its own leaf module —
// no imports besides React — so other pickers (e.g. duel-lobby-options.tsx)
// can reuse it without pulling in lang-pair-select.tsx's own heavy/cyclic
// import graph (core/flags.ts's eager glob, #sel-mode boot wiring, ...).
import { useEffect, useRef, useState, type ReactElement } from 'react';

export function FlagDropdown<T extends string>({
  value,
  options,
  renderOption,
  onChange,
  ariaLabel,
  tag,
}: {
  value: T;
  options: T[];
  renderOption: (opt: T) => ReactElement;
  onChange: (opt: T) => void;
  ariaLabel: string;
  // Short caption (e.g. "Я знаю") shown on the closed button only, so two
  // near-identical dropdowns side by side stay distinguishable at a glance.
  tag?: string;
}): ReactElement {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent): void {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent): void {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <div className="flagdd relative" ref={rootRef}>
      <button
        type="button"
        className="flagdd-btn flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[8px] border border-border bg-card !px-2.5 !py-1.5 font-['DM_Sans',sans-serif] text-xs text-text outline-none hover:border-accent focus-visible:border-accent"
        data-value={value}
        aria-label={ariaLabel}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {tag && <span className="flagdd-tag text-[0.62rem] font-bold uppercase tracking-[0.03em] text-text3">{tag}</span>}
        {renderOption(value)}
        <span className="flagdd-arrow !ml-0.5 text-[0.65rem] text-text3">{open ? '▴' : '▾'}</span>
      </button>
      {open && (
        <div
          className="flagdd-list absolute left-0 top-[calc(100%+4px)] z-50 flex max-h-[260px] min-w-full flex-col gap-0.5 overflow-y-auto rounded-[10px] border border-border bg-card !p-1 shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
          role="listbox"
          aria-label={ariaLabel}
        >
          {options.map((opt) => (
            <button
              type="button"
              key={opt}
              role="option"
              data-value={opt}
              aria-selected={opt === value}
              className={
                'flagdd-item flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[7px] border-none bg-transparent !px-2 !py-1.5 text-left font-[\'DM_Sans\',sans-serif] text-xs text-text hover:bg-border' +
                (opt === value ? ' flagdd-active font-bold text-accent' : '')
              }
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {renderOption(opt)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
