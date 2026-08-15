// Vymova — js/features/mode/mode-card-grid.tsx
// full-react-migration-roadmap.md Phase 5a: the 27 `.mode-card` buttons
// inside `#modes-overlay`'s `.modes-grid` — previously hand-authored static
// markup in index.html, each wired independently by its own
// `js/modes/*.tsx` file's `bindOverlayOpenClose('btn-X', 'X-overlay', ...)`.
// This component ONLY replaces that repeated button/grid markup — it does
// NOT touch:
// - `useModeSession`'s internal `style.display`/class visibility toggle, or
//   the module-level `_open`/`_close` refs each mode file still owns.
// - `#modes-overlay`/`.modes-header`/`.modes-panel` themselves (Phase 5b).
//
// (Stale note removed: this comment used to describe modes-modal.tsx's
// imperative `mode-card--active` classList toggle as a second live writer
// of this subtree — modes-overlay-shell.tsx's own header comment documents
// that the whole controller it belonged to was actually unreachable dead
// code, since fixed. See docs/full-css-tailwind-migration-roadmap.md Tier
// 2b for where that class's CSS was removed too.)
//
// The outer static/mode-grid wrapper (`.modes-grid`) stays in index.html;
// this renders only the 4 section-label + section-grid pairs as its
// children, portaled in.
import { Fragment, type ReactElement } from 'react';
import { t } from '../i18n.ts';

type ModeCard = {
  id: string; // -> id="btn-<id>", class="mc-<id>"
  icon: string;
  nameKey: string;
  descKey: string;
  descId?: string; // only "write" has one, updateModesPageDesc() targets it
  cls?: string; // mc-<cls> when the original CSS class suffix differs from id
};

type ModeCardGroup = {
  labelKey: string;
  cards: ModeCard[];
};

const GROUPS: ModeCardGroup[] = [
  {
    labelKey: 'modesPg.groupCards',
    cards: [
      { id: 'quiz', icon: '🧠', nameKey: 'modesPg.quizName', descKey: 'modesPg.quizDesc' },
      {
        id: 'write',
        icon: '✍️',
        nameKey: 'modesPg.writeName',
        descKey: 'modesPg.writeDesc',
        descId: 'write-mode-desc',
      },
      { id: 'listen', icon: '🔊', nameKey: 'modesPg.listenName', descKey: 'modesPg.listenDesc' },
      { id: 'fib', icon: '✏️', nameKey: 'modesPg.fibName', descKey: 'modesPg.fibDesc' },
      { id: 'tempo', icon: '⚡', nameKey: 'modesPg.tempoName', descKey: 'modesPg.tempoDesc' },
    ],
  },
  {
    labelKey: 'modesPg.groupGames',
    cards: [
      { id: 'pairs', icon: '🔗', nameKey: 'modesPg.pairsName', descKey: 'modesPg.pairsDesc' },
      {
        id: 'catpairs',
        cls: 'cat',
        icon: '📦',
        nameKey: 'modesPg.catName',
        descKey: 'modesPg.catDesc',
      },
      {
        id: 'scramble',
        icon: '🔀',
        nameKey: 'modesPg.scrambleName',
        descKey: 'modesPg.scrambleDesc',
      },
      {
        id: 'letters',
        icon: '🔤',
        nameKey: 'modesPg.lettersName',
        descKey: 'modesPg.lettersDesc',
      },
      {
        id: 'spelling-bee',
        cls: 'spelling',
        icon: '🐝',
        nameKey: 'modesPg.beeName',
        descKey: 'modesPg.beeDesc',
      },
    ],
  },
  {
    labelKey: 'modesPg.groupPractice',
    cards: [
      { id: 'lesson', icon: '📚', nameKey: 'modesPg.lessonName', descKey: 'modesPg.lessonDesc' },
      {
        id: 'reading',
        icon: '📖',
        nameKey: 'modesPg.readingName',
        descKey: 'modesPg.readingDesc',
      },
      { id: 'story', icon: '✨', nameKey: 'modesPg.storyName', descKey: 'modesPg.storyDesc' },
      {
        id: 'context',
        icon: '🔍',
        nameKey: 'modesPg.contextName',
        descKey: 'modesPg.contextDesc',
      },
      {
        id: 'daily-challenge',
        cls: 'daily',
        icon: '🎯',
        nameKey: 'modesPg.dailyName',
        descKey: 'modesPg.dailyDesc',
      },
      {
        id: 'adaptive-quiz',
        cls: 'adaptive',
        icon: '🧩',
        nameKey: 'modesPg.adaptiveName',
        descKey: 'modesPg.adaptiveDesc',
      },
    ],
  },
  {
    labelKey: 'modesPg.groupNew',
    cards: [
      {
        id: 'oddone',
        icon: '🧐',
        nameKey: 'modesPg.oddoneName',
        descKey: 'modesPg.oddoneDesc',
      },
      {
        id: 'sentbuild',
        icon: '🧱',
        nameKey: 'modesPg.sentbuildName',
        descKey: 'modesPg.sentbuildDesc',
      },
      {
        id: 'error-hunt',
        cls: 'errorhunt',
        icon: '🕵️',
        nameKey: 'modesPg.errorhuntName',
        descKey: 'modesPg.errorhuntDesc',
      },
      { id: 'assoc', icon: '🔗🧠', nameKey: 'modesPg.assocName', descKey: 'modesPg.assocDesc' },
      {
        id: 'wordhint',
        icon: '💡',
        nameKey: 'modesPg.wordhintName',
        descKey: 'modesPg.wordhintDesc',
      },
      {
        id: 'shadow',
        icon: '🎙️',
        nameKey: 'modesPg.shadowName',
        descKey: 'modesPg.shadowDesc',
      },
      { id: 'ghost', icon: '👻', nameKey: 'modesPg.ghostName', descKey: 'modesPg.ghostDesc' },
      {
        id: 'dictation',
        icon: '🎧',
        nameKey: 'modesPg.dictName',
        descKey: 'modesPg.dictDesc',
      },
      {
        id: 'idiom-quiz',
        cls: 'idiomquiz',
        icon: '💬',
        nameKey: 'modesPg.idqName',
        descKey: 'modesPg.idqDesc',
      },
      {
        id: 'grammar-quiz',
        cls: 'grammarquiz',
        icon: '📐',
        nameKey: 'modesPg.grqName',
        descKey: 'modesPg.grqDesc',
      },
      {
        id: 'compare',
        icon: '🌍',
        nameKey: 'modesPg.compareName',
        descKey: 'modesPg.compareDesc',
      },
    ],
  },
];

function ModeCardButton({ card }: { card: ModeCard }): ReactElement {
  return (
    <button
      className={`mode-card mc-${card.cls ?? card.id} border-[1.5px] rounded-[14px] pt-[14px] px-[6px] pb-[12px] cursor-pointer text-center flex flex-col items-center gap-[5px] font-['DM_Sans',sans-serif] [transition:border-color_0.16s,background_0.16s,box-shadow_0.16s,transform_0.12s] hover:-translate-y-0.5 active:translate-none active:scale-[0.96] bg-[var(--mode-card-bg)] border-[var(--mode-card-border)] hover:border-[var(--mode-card-hover-border)] hover:bg-[var(--mode-card-hover-bg)] hover:shadow-[var(--mode-card-hover-shadow)] [@media(max-width:480px)]:pt-[14px] [@media(max-width:480px)]:px-[8px] [@media(max-width:480px)]:pb-[12px]`}
      id={`btn-${card.id}`}
    >
      <span className="mode-icon rounded-full flex items-center justify-center text-2xl leading-none shrink-0 bg-[color-mix(in_srgb,var(--mi,var(--accent))_13%,transparent)] size-[46px]">
        {card.icon}
      </span>
      <span
        className="mode-name text-[0.78rem] font-bold text-[var(--text)] leading-[1.2] [@media(max-width:480px)]:text-[0.76rem]"
        data-i18n={card.nameKey}
      >
        {t(card.nameKey)}
      </span>
      <span
        className="text-[0.66rem] text-[var(--text3)] leading-[1.2]"
        id={card.descId}
        data-i18n={card.descKey}
      >
        {t(card.descKey)}
      </span>
    </button>
  );
}

export function ModeCardGrid(): ReactElement {
  return (
    <>
      {GROUPS.map((group) => (
        <Fragment key={group.labelKey}>
          <div
            className="text-[0.68rem] font-bold uppercase tracking-[0.07em] text-[var(--text3)] pt-3.5 px-0.5 pb-[7px]"
            data-i18n={group.labelKey}
          >
            {t(group.labelKey)}
          </div>
          <div className="modes-section-grid grid grid-cols-3 gap-2 [@media(max-width:480px)]:grid-cols-2">
            {group.cards.map((card) => (
              <ModeCardButton key={card.id} card={card} />
            ))}
          </div>
        </Fragment>
      ))}
    </>
  );
}
