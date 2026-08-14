// Vymova — js/core/flag-dropdown.tsx
// A flag-icon dropdown standing in for a native <select> — browsers don't
// render images inside <option>, so showing a flag per language/direction
// means rolling our own button + popup list instead of a real <select>.
// Built on shadcn/base-ui's Popover (src/components/ui/popover.tsx bypassed
// in favor of the raw primitive — its convenience PopoverContent bakes in a
// fixed w-72/p-2.5 sized for header+description content, not a scrollable
// item list): Popover.Root/Trigger own outside-click, Escape, and portal
// positioning for free, replacing the manual document-listener pair this
// component used to hand-roll itself. Extracted from lang-pair-select.tsx
// (the original consumer) into its own leaf module so other pickers (e.g.
// duel-lobby-options.tsx) can reuse it without pulling in lang-pair-
// select.tsx's own heavy/cyclic import graph (core/flags.ts's eager glob,
// #sel-mode boot wiring, ...).
import { type ReactElement } from 'react';
import { Popover as PopoverPrimitive } from '@base-ui/react/popover';

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
  return (
    <PopoverPrimitive.Root>
      <div className="flagdd relative">
        <PopoverPrimitive.Trigger
          className="flagdd-btn group flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[8px] border border-border bg-card px-2.5 py-1.5 font-['DM_Sans',sans-serif] text-xs text-text outline-none hover:border-accent focus-visible:border-accent"
          data-value={value}
          aria-label={ariaLabel}
        >
          {tag && <span className="flagdd-tag text-[0.62rem] font-bold uppercase tracking-[0.03em] text-text3">{tag}</span>}
          {renderOption(value)}
          <span className="flagdd-arrow ml-0.5 text-[0.65rem] text-text3 group-data-[popup-open]:hidden">▾</span>
          <span className="flagdd-arrow ml-0.5 hidden text-[0.65rem] text-text3 group-data-[popup-open]:inline">▴</span>
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Positioner
            side="bottom"
            align="start"
            sideOffset={4}
            className="isolate z-[99999]"
          >
            <PopoverPrimitive.Popup
              className="flagdd-list flex max-h-[260px] min-w-full flex-col gap-0.5 overflow-y-auto rounded-[10px] border border-border bg-card p-1 shadow-[0_8px_24px_rgba(0,0,0,0.25)] outline-none"
              role="listbox"
              aria-label={ariaLabel}
            >
              {options.map((opt) => (
                <PopoverPrimitive.Close
                  key={opt}
                  role="option"
                  data-value={opt}
                  aria-selected={opt === value}
                  className={
                    'flagdd-item flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[7px] border-none bg-transparent px-2 py-1.5 text-left font-[\'DM_Sans\',sans-serif] text-xs text-text hover:bg-border' +
                    (opt === value ? ' flagdd-active font-bold text-accent' : '')
                  }
                  onClick={() => onChange(opt)}
                >
                  {renderOption(opt)}
                </PopoverPrimitive.Close>
              ))}
            </PopoverPrimitive.Popup>
          </PopoverPrimitive.Positioner>
        </PopoverPrimitive.Portal>
      </div>
    </PopoverPrimitive.Root>
  );
}
