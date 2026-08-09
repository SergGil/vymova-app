// Vymova — js/features/srs-cap-control.tsx
// −/+ control for the SRS daily new-card cap (#srs-new-cap-control),
// persisted to localStorage. Structural mirror of font-size-control.tsx.
import { useState, type ReactElement } from 'react';
import { getSrsNewDailyCap, setSrsNewDailyCap } from './game/game.ts';
import { t } from './i18n.ts';
import {
  NumberField,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldDecrement,
  NumberFieldInput,
} from '../../src/components/ui/number-field.tsx';

const STEP = 5;
const MIN = 5;
const MAX = 50;

const btnCls =
  "btn bg-[var(--btn-bg)] border-[var(--btn-border-color)] text-[var(--btn-color)] [transition:var(--btn-transition)] hover:bg-[var(--btn-hover-bg)] hover:text-[var(--btn-hover-color)] hover:border-[var(--btn-hover-border-fallback)] hover:shadow-[var(--btn-hover-shadow)] font-['DM_Sans',sans-serif] text-[13px] font-medium py-2 px-4 rounded-[10px] border cursor-pointer active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-50 [@media(max-width:480px)]:min-h-[44px] [@media(max-width:480px)]:py-[10px] [@media(max-width:480px)]:px-[12px] [@media(max-width:480px)]:text-[12px] [@media(min-width:481px)_and_(max-width:640px)]:min-h-[40px] [@media(min-width:641px)_and_(max-width:900px)]:min-h-[38px]";

export function SrsNewCapControl(): ReactElement {
  const [cap, setCap] = useState(() => getSrsNewDailyCap());

  return (
    <NumberField
      value={cap}
      min={MIN}
      max={MAX}
      step={STEP}
      onValueChange={(next) => {
        if (next === null) return;
        setSrsNewDailyCap(next);
        setCap(next);
      }}
    >
      <NumberFieldGroup>
        {/* Real input the Increment/Decrement buttons' press-and-hold
            mechanism needs a mounted ref for (see number-field.tsx's own
            comment). Visually hidden (this control's visible UI is the
            −/value/+ row below) but still focusable/announced — base-ui's
            own design intent is that keyboard/screen-reader users drive the
            value through this input (native number-input arrow-key
            stepping), not the buttons, which are permanently tabIndex=-1. */}
        <NumberFieldInput className="sr-only" aria-label={t('settings.srsNewCapTitle')} />
        <NumberFieldDecrement
          id="btn-srs-cap-down"
          className={btnCls}
          style={{ fontSize: 13, padding: '3px 10px', color: 'var(--text2)' }}
        >
          −
        </NumberFieldDecrement>
        <span
          id="srs-cap-value"
          style={{ fontSize: '.85rem', color: 'var(--text2)', minWidth: 28, textAlign: 'center' }}
        >
          {cap}
        </span>
        <NumberFieldIncrement
          id="btn-srs-cap-up"
          className={btnCls}
          style={{ fontSize: 13, padding: '3px 10px', color: 'var(--text2)' }}
        >
          +
        </NumberFieldIncrement>
      </NumberFieldGroup>
    </NumberField>
  );
}
