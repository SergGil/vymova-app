import { describe, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { expectStructuralParity } from '../support/structural-parity.ts';

// CardShell nests the actual content components (CardMeta, WordText, ...)
// directly as children now (not via a separate sibling Portal — see
// card-shell.tsx's header comment for why), so their own default markup
// would otherwise leak into this test and couple it to ~16 other
// components' unrelated implementation details. Mocked to null here: this
// test's job is only CardShell's own wrapper markup (ids/classes/nesting/
// static buttons), not what each nested component renders — those already
// have their own tests.
vi.mock('../../js/features/card/card-meta.tsx', () => ({ CardMeta: () => null }));
vi.mock('../../js/features/card/card-image.tsx', () => ({ CardImage: () => null }));
vi.mock('../../js/features/card/card-indicators.tsx', () => ({ CardNoteDisplay: () => null }));
vi.mock('../../js/features/card/card-front-text.tsx', () => ({
  WordText: () => null,
  Transcription: () => null,
  PosTag: () => null,
  SrsBadge: () => null,
  Translation: () => null,
  ExEn: () => null,
  ExUa: () => null,
  CardHint: () => null,
  OtherMeanings: () => null,
}));
vi.mock('../../js/features/word-data/similar-words.tsx', () => ({ SimilarWordsChips: () => null }));
vi.mock('../../js/features/word-data/word-context.tsx', () => ({
  WordFamiliesChips: () => null,
  CollocationsSection: () => null,
  SynonymsChips: () => null,
  AntonymsChips: () => null,
  EtymologyNote: () => null,
  UsageNoteBox: () => null,
}));
vi.mock('../../js/features/quick-quiz.tsx', () => ({ QuickQuizButton: () => null }));
vi.mock('../../js/features/daily-mission-card.tsx', () => ({ DailyMissionCard: () => null }));
vi.mock('../../js/features/font-size-control.tsx', () => ({ FontSizeControl: () => null }));
vi.mock('../../js/features/achievements/achievement-toast.tsx', () => ({ AchievementToast: () => null }));
vi.mock('../../js/features/goal-modal.tsx', () => ({ GoalModal: () => null }));

const { CardShell } = await import('../../js/features/card/card-shell.tsx');

// The exact static markup index.html's .card-scene block replaced
// (docs/card-shell-migration-roadmap.md Phase 2) — copied verbatim from the
// pre-conversion index.html so a regression in CardShell's JSX (a dropped
// id, a renamed class, a reordered/removed node) fails loudly here instead
// of silently breaking card-actions.ts/swipe.tsx's getElementById wiring or
// app-root.tsx's other Portal targets that live inside this subtree.
//
// #btn-dontknow/#btn-hard/#btn-easy are a deliberate exception: they never
// existed (or existed hidden/SRS-only) in the pre-conversion static HTML —
// all four grading buttons ("Легко"/"Знаю"/"Важко"/"Не знаю", quality
// 5/4/3/1) are now always-visible siblings in reverse-severity order (most
// confident first), not a structural conversion — so this block is the
// current expected markup rather than the literal original.
//
// #senses-mount is a second deliberate exception: it now sits AFTER
// .ex-row/.ex-label instead of before — "Усі значення" used to render above
// "Приклад", but users read the single canonical example first, so it was
// moved below it. Intentional reorder, not a regression.
//
// The buttons' `flex: 1`/`padding: 14px 0` shorthands are written
// here in their happy-dom-canonicalized longhand form (flex-grow/-shrink/
// -basis, `0px` not `0`) — React assigns style via the CSSOM (element.style.X
// = ...), which expands shorthands, vs. the original's plain HTML string
// parse, which doesn't. Same class of test-environment quirk as Phase 8's
// `style.inset` note in full-react-migration-roadmap.md — not a real
// difference a user would see.
const ORIGINAL_CARD_SCENE_HTML = `
  <div class="card" id="card">
    <span class="swipe-hint-right" id="sh-right" data-i18n="cards.know">✓ Знаю</span>
    <span class="swipe-hint-left" id="sh-left" data-i18n="cards.next">Далі →</span>
    <span class="swipe-hint-up" id="sh-up" data-i18n="cards.translation">👁 Переклад</span>
    <div
      class="card-face [animation-duration:.22s] [animation-timing-function:cubic-bezier(.25,.46,.45,.94)] [animation-fill-mode:both]"
      id="card-front"
    >
      <div id="card-meta-mount"></div>
      <div class="card-body">
        <div id="illus-mount"></div>
        <div class="word-side">
          <div class="word-row">
            <span id="wword-mount"></span>
            <div class="word-actions">
              <button class="speak-btn" id="speak-word" title="Вимовити слово" data-i18n-title="cards.pronounce">🔊</button>
              <button class="speak-btn" id="btn-mic" title="Перевір вимову" data-i18n-title="cards.checkPron">🎤</button>
              <button class="speak-btn card-note-btn !text-[13px] !transition-[opacity,color] !duration-150 opacity-55 hover:opacity-100" id="btn-note" title="Нотатка/мнемоніка" data-i18n-title="cards.noteMnemonic">📝</button>
              <button class="speak-btn card-bookmark-btn !text-[13px] !transition-[opacity,color] !duration-150 opacity-55 hover:opacity-100" id="btn-bookmark" title="Додати в закладки" data-i18n-title="cards.addBookmark">☆</button>
            </div>
          </div>
          <div id="card-note-mount"></div>
          <div id="wtrans-mount"></div>
          <div id="wpos-mount"></div>
          <div id="usage-note-mount"></div>
          <div id="srs-next-mount"></div>
          <div id="wtransl-mount"></div>
          <div class="divider"></div>
          <div class="ex-label" data-i18n="cards.example">Приклад</div>
          <div class="ex-row">
            <div class="ex-texts">
              <span id="exen-mount"></span>
              <button class="speak-btn speak-ex-btn" id="speak-ex" title="Вимовити приклад">🔊</button>
              <div id="exua-mount"></div>
            </div>
          </div>
          <div id="senses-mount"></div>
        </div>
      </div>
    </div>
  </div>
  <div id="etymology-mount"></div>
  <div id="similar-words-mount"></div>
  <div id="word-families-mount"></div>
  <div id="synonyms-mount"></div>
  <div id="antonyms-mount"></div>
  <div id="collocations-mount"></div>

  <span id="card-hint-mount"></span>

  <div class="actions-bar">
    <div class="actions-bar-center">
      <button class="btn" id="btn-prev" title="Попередня картка" data-i18n-title="cards.prevTitle">
        <span data-i18n="cards.back">← Назад</span>
      </button>
      <button class="btn btn-auto" id="btn-auto" title="Авто-режим" data-i18n-title="cards.autoTitle">▶ Авто</button>
      <button class="btn" id="btn-shuf" title="Перемішати" data-i18n-title="cards.shuffleTitle" style="font-size: 14px">🔀</button>
      <button class="btn" id="btn-search" title="Пошук по словнику (Ctrl+F)" data-i18n-title="cards.searchTitle" style="font-size: 14px">🔍</button>
      <button class="btn" id="btn-stats" title="Статистика" data-i18n-title="cards.statsTitle" style="display: none"></button>
      <button class="btn btn-achievements" id="btn-achievements" title="Досягнення" data-i18n-title="cards.achievementsTitle" style="display: none"></button>
      <button class="btn btn-modes-open" id="btn-modes-open" title="Режими навчання" data-i18n-title="cards.modesTitle" style="display: none"></button>
      <div id="quick-quiz-mount"></div>
      <button class="btn" id="btn-next" title="Наступна картка" data-i18n-title="cards.nextTitle">
        <span data-i18n="cards.forward">→ Далі</span>
      </button>
    </div>
    <div id="daily-mission-mount" class="actions-bar-mission"></div>
  </div>
  <div style="margin-top: 8px; text-align: center; display: flex; gap: 8px; justify-content: center; max-width: 360px; margin-left: auto; margin-right: auto;">
    <button class="btn btn-easy" id="btn-easy" title="Миттєво, дуже легко — слово вважається вивченим" data-i18n-title="cards.easyTitle" style="flex-grow: 1; flex-shrink: 1; flex-basis: 0%; font-size: 1.05rem; padding: 14px 0px; letter-spacing: 0.03em; white-space: nowrap;">
      <span class="btn-icon" aria-hidden="true">😌</span>
      <span data-i18n="cards.easy">Легко</span>
    </button>
    <button class="btn btn-know" id="btn-know" style="flex-grow: 1; flex-shrink: 1; flex-basis: 0%; font-size: 1.05rem; padding: 14px 0px; letter-spacing: 0.03em; white-space: nowrap;">
      <span data-i18n="cards.know">✓ Знаю</span>
    </button>
    <button class="btn btn-hard" id="btn-hard" title="Згадав(-ла) з труднощами" data-i18n-title="cards.hardTitle" style="flex-grow: 1; flex-shrink: 1; flex-basis: 0%; font-size: 1.05rem; padding: 14px 0px; letter-spacing: 0.03em; white-space: nowrap;">
      <span class="btn-icon" aria-hidden="true">🤔</span>
      <span data-i18n="cards.hard">Важко</span>
    </button>
    <button class="btn btn-dontknow" id="btn-dontknow" style="flex-grow: 1; flex-shrink: 1; flex-basis: 0%; font-size: 1.05rem; padding: 14px 0px; letter-spacing: 0.03em; white-space: nowrap;">
      <span class="btn-icon" aria-hidden="true">✗</span>
      <span data-i18n="cards.dontKnow">Не знаю</span>
    </button>
  </div>

  <div id="font-size-control" style="display: flex; justify-content: flex-end; align-items: center; gap: 6px; margin-bottom: 4px;"></div>

  <div class="kbd-hint">
    <kbd data-i18n="kbd.space">Пробіл</kbd> <span data-i18n="kbd.next">далі</span> &nbsp;
    <kbd>Enter</kbd> <span data-i18n="kbd.know">знаю</span> &nbsp; <kbd>←</kbd><kbd>→</kbd>
    <span data-i18n="kbd.navigation">навігація</span> &nbsp; <kbd>F</kbd>
    <span data-i18n="kbd.translation">переклад</span> &nbsp; <kbd>Ctrl+F</kbd>
    <span data-i18n="kbd.search">пошук</span> &nbsp; <kbd>?</kbd>
    <span style="cursor: pointer" id="btn-keys" data-i18n-title="kbd.allKeysTitle" data-i18n="kbd.allKeys" title="Всі клавіші">всі клавіші</span>
  </div>

  <div id="achievement-toast-mount"></div>
  <div id="goal-modal-mount"></div>
`;

function mountFixture(): void {
  document.body.innerHTML = `<div id="card-scene-mount"></div>`;
}

describe('<CardShell/>', () => {
  it('renders structurally identical to the original static .card-scene markup', () => {
    mountFixture();
    render(<CardShell />, { container: document.getElementById('card-scene-mount')! });
    // docs/component-tailwind-conversion-roadmap.md Batch 4 added theme-
    // driven Tailwind classes to #btn-achievements/#btn-auto/#btn-modes-open
    // (text-.../border-.../shadow-...) — a deliberate, later change
    // unrelated to the original static-markup-to-JSX port this test
    // guards. Stripped before comparing, same approach as
    // mode-card-grid.test.tsx. Batch 5 added .card-face's before:/after:
    // corner-bracket classes. Batch 6 added the same shape of classes to
    // #btn-know/#btn-hard/#btn-dontknow/#btn-easy, plus a shared
    // --btn-hover-border-fallback token reused by all of them (including
    // the earlier Batch 4 buttons, retrofitted at the same time — see the
    // roadmap doc for why the hover-scoped override was needed). Batch 6
    // also replaced .card-face's plain border-[...]/shadow-[...]/
    // [background-image:...] classes with !-important --known-face-*
    // ones (self-referencing/composed defaults reproduce the exact same
    // values when the card isn't known — see the roadmap doc). The
    // newly-found 14th cluster (.btn's own base/:hover styling) added
    // BTN_BASE's plain (non-!) bg-.../border-.../text-.../hover:.../
    // [transition:...] classes to every #btn-* button, including the ones
    // above that already had their own !-important overrides.
    const actualHtml = document
      .getElementById('card-scene-mount')!
      .innerHTML.replace(
        / !?(?:hover:)?!?(?:text|border|shadow|bg)-\[var\(--(?:btn-achievements|btn-auto|btn-modes-open|btn-know|btn-hard|btn-dontknow|btn-easy|btn-hover-border-fallback|btn-bg|btn-border-color|btn-color|btn-hover-bg|btn-hover-color|btn-hover-shadow)[a-z-]*\)\]/g,
        '',
      )
      .replace(/ \[transition:var\(--btn-transition\)\]/g, '')
      .replace(/ (?:before|after):\S+/g, '')
      .replace(/ !border-solid/g, '')
      .replace(/ !border-\[length:var\(--known-face-border-width\)\]/g, '')
      .replace(/ !border-\[var\(--known-face-border\)\]/g, '')
      .replace(/ !\[background:var\(--known-face-bg\)\]/g, '')
      .replace(/ !shadow-\[var\(--known-face-shadow\)\]/g, '');
    expectStructuralParity(actualHtml, `<div class="card-scene">${ORIGINAL_CARD_SCENE_HTML}</div>`);
  });
});
