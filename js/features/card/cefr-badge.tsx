// Vymova — js/features/card/cefr-badge.tsx
// Shared CEFR level badge styling — used by card-meta.tsx's #wcefr row and
// card-front-text.tsx's per-sense badges in "Other meanings".
import type { CefrLevel } from '../../../data/cefr.ts';
import { Badge } from '../../../src/components/ui/badge.tsx';

export const CEFR_ORDER: CefrLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

// Level color/border-color never change with theme — only the background
// alpha does (dark/sw/hp get a stronger tint), which is why background alone
// reads a CSS custom property (see the css/styles.css comment above the
// matching :root block) instead of a literal value here.
export const CEFR_STYLES: Record<CefrLevel, string> = {
  A1: 'bg-[var(--cefr-a1-bg)] text-[#27ae60] border-[rgba(39,174,96,.3)]',
  A2: 'bg-[var(--cefr-a2-bg)] text-[#2ecc71] border-[rgba(46,204,113,.3)]',
  B1: 'bg-[var(--cefr-b1-bg)] text-[#d4ac0d] border-[rgba(241,196,15,.3)]',
  B2: 'bg-[var(--cefr-b2-bg)] text-[#e67e22] border-[rgba(230,126,34,.3)]',
  C1: 'bg-[var(--cefr-c1-bg)] text-[#e74c3c] border-[rgba(231,76,60,.3)]',
  C2: 'bg-[var(--cefr-c2-bg)] text-[#8e44ad] border-[rgba(142,68,173,.3)]',
};

export function CefrBadge({
  level,
  id,
  small,
}: {
  level: CefrLevel;
  id?: string;
  small?: boolean;
}) {
  const sizing = small
    ? 'px-[5px] py-px text-[.6rem]'
    : 'px-[7px] py-0.5 text-[.68rem] max-[480px]:px-[5px] max-[480px]:py-px max-[480px]:text-[.62rem]';
  return (
    <Badge
      className={
        'cefr-badge h-auto w-fit rounded-sm border-[1.5px] font-extrabold tracking-[0.04em] cefr-' +
        level +
        ' ' +
        sizing +
        ' ' +
        CEFR_STYLES[level]
      }
      id={id}
    >
      {level}
    </Badge>
  );
}
