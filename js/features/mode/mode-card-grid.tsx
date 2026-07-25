// Vymova — js/features/mode/mode-card-grid.tsx
// full-react-migration-roadmap.md Phase 5a: the 27 `.mode-card` buttons
// inside `#modes-overlay`'s `.modes-grid` — previously hand-authored static
// markup in index.html, each wired independently by its own
// `js/modes/*.tsx` file's `bindOverlayOpenClose('btn-X', 'X-overlay', ...)`.
// This component ONLY replaces that repeated button/grid markup — it does
// NOT touch:
// - `useModeSession`'s internal `style.display`/class visibility toggle, or
//   the module-level `_open`/`_close` refs each mode file still owns.
// - `modes-modal.tsx`'s own imperative `mode-card--active` classList
//   add/remove when the "choose a mode" modal opens (reads `#sel-mode`,
//   toggles the class on whichever `#btn-<key>` matches) — this component's
//   render output never changes after mount (no props/state), so React
//   never re-diffs this subtree and that external class mutation persists
//   untouched, the same reasoning i18n.ts's textContent override already
//   relies on elsewhere in this codebase.
// - `#modes-overlay`/`.modes-header`/`.modes-panel` themselves (Phase 5b).
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
    <button className={`mode-card mc-${card.cls ?? card.id}`} id={`btn-${card.id}`}>
      <span className="mode-icon">{card.icon}</span>
      <span className="mode-name" data-i18n={card.nameKey}>
        {t(card.nameKey)}
      </span>
      <span className="mode-desc" id={card.descId} data-i18n={card.descKey}>
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
          <div className="modes-section-label" data-i18n={group.labelKey}>
            {t(group.labelKey)}
          </div>
          <div className="modes-section-grid">
            {group.cards.map((card) => (
              <ModeCardButton key={card.id} card={card} />
            ))}
          </div>
        </Fragment>
      ))}
    </>
  );
}
