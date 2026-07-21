// Vymova — js/features/card-shell.tsx
// The flashcard's static structural shell: `.card-scene` (docs/card-shell-
// migration-roadmap.md Phase 2). Literal structural identity with the
// index.html markup it replaces — no visual/behavioral changes — verified
// by tests/features/card-shell.test.tsx's structural-parity check.
//
// Every content component below (CardMeta, WordText, Transcription, ...) is
// nested here directly as a normal JSX child, NOT via a separate
// `<Portal id="...">` elsewhere in app-root.tsx. Portal's getMountPoint()
// does `document.getElementById(id)` during the *render* phase, before
// React commits anything — that only resolves for ids that exist in the
// static index.html BEFORE React's first render. An id that CardShell
// itself creates (card-meta-mount, wword-mount, ...) doesn't exist in the
// real DOM yet at that point, so a sibling Portal targeting it would find
// nothing (confirmed by hand: every one of these ~24 ids logged app-root's
// "not found in the DOM" warning and the card rendered empty). Direct JSX
// nesting sidesteps the problem entirely — no lookup needed, React just
// commits parent and child together in the same pass.
//
// #card's/.card-face's own event listeners (click-to-flip, swipe, speak/
// note/bookmark/mic buttons, prev/know/next/dontknow/auto/shuf/reset,
// animCard()) stay exactly where they already are — card-actions.ts,
// swipe.tsx, card-engine.ts — all of which already reach these ids via
// document.getElementById() inside a useEffect, the same idiom used
// throughout this codebase (e.g. card-known-visuals.tsx). That's
// unaffected by who authors the surrounding markup.
import type { ReactElement } from 'react';
import { useLangVersion } from '../../src/store.ts';
import { useCardAnimState } from '../core/card-anim-store.ts';
import { t } from './i18n.ts';
import { CardMeta } from './card-meta.tsx';
import { CardImage } from './card-image.tsx';
import { CardNoteDisplay } from './card-indicators.tsx';
import {
  WordText,
  Transcription,
  PosTag,
  SrsBadge,
  Translation,
  ExEn,
  ExUa,
  CardHint,
  OtherMeanings,
} from './card-front-text.tsx';
import { SimilarWordsChips } from './similar-words.tsx';
import {
  WordFamiliesChips,
  CollocationsSection,
  SynonymsChips,
  AntonymsChips,
  EtymologyNote,
  UsageNoteBox,
} from './word-context.tsx';
import { QuickQuizButton } from './quick-quiz.tsx';
import { DailyMissionCard } from './daily-mission-card.tsx';
import { FontSizeControl } from './font-size-control.tsx';
import { AchievementToast } from './achievement-toast.tsx';
import { GoalModal } from './goal-modal.tsx';

// #btn-auto's label — reactive to card-anim-store's `autoRunning` (dispatched
// by card-engine.ts's startAuto()/stopAuto()) instead of the two direct
// `textContent` writes that used to live in card-actions.ts's onAutoClick and
// card-engine.ts's stopAuto(). useLangVersion() re-renders this on a UI
// language switch, matching t()'s reactivity elsewhere (tag-filter-select.tsx,
// range-select.tsx).
function AutoButtonLabel(): ReactElement {
  useLangVersion();
  const { autoRunning } = useCardAnimState();
  return <>{autoRunning ? t('cards.stop') : t('cards.auto')}</>;
}

export function CardShell(): ReactElement {
  return (
    <div className="card-scene">
      <div className="card" id="card">
        <span className="swipe-hint-right" id="sh-right" data-i18n="cards.know">
          ✓ Знаю
        </span>
        <span className="swipe-hint-left" id="sh-left" data-i18n="cards.next">
          Далі →
        </span>
        <span className="swipe-hint-up" id="sh-up" data-i18n="cards.translation">
          👁 Переклад
        </span>
        <div
          className="card-face [animation-duration:.22s] [animation-timing-function:cubic-bezier(.25,.46,.45,.94)] [animation-fill-mode:both]"
          id="card-front"
        >
          <div id="card-meta-mount">
            <CardMeta />
          </div>
          <div className="card-body">
            <div id="illus-mount">
              <CardImage />
            </div>
            <div className="word-side">
              <div className="word-row">
                <span id="wword-mount">
                  <WordText />
                </span>
                <div className="word-actions">
                  <button
                    className="speak-btn"
                    id="speak-word"
                    title="Вимовити слово"
                    data-i18n-title="cards.pronounce"
                  >
                    🔊
                  </button>
                  <button
                    className="speak-btn"
                    id="btn-mic"
                    title="Перевір вимову"
                    data-i18n-title="cards.checkPron"
                  >
                    🎤
                  </button>
                  <button
                    className="speak-btn card-note-btn"
                    id="btn-note"
                    title="Нотатка/мнемоніка"
                    data-i18n-title="cards.noteMnemonic"
                  >
                    📝
                  </button>
                  <button
                    className="speak-btn card-bookmark-btn"
                    id="btn-bookmark"
                    title="Додати в закладки"
                    data-i18n-title="cards.addBookmark"
                  >
                    ☆
                  </button>
                </div>
              </div>
              <div id="card-note-mount">
                <CardNoteDisplay />
              </div>
              <div id="wtrans-mount">
                <Transcription />
              </div>
              <div id="wpos-mount">
                <PosTag />
              </div>
              <div id="usage-note-mount">
                <UsageNoteBox />
              </div>
              <div id="srs-next-mount">
                <SrsBadge />
              </div>
              <div id="wtransl-mount">
                <Translation />
              </div>
              <div id="senses-mount">
                <OtherMeanings />
              </div>
              <div className="divider"></div>
              <div className="ex-label" data-i18n="cards.example">
                Приклад
              </div>
              <div className="ex-row">
                <div className="ex-texts">
                  <span id="exen-mount">
                    <ExEn />
                  </span>
                  <button className="speak-btn speak-ex-btn" id="speak-ex" title="Вимовити приклад">
                    🔊
                  </button>
                  <div id="exua-mount">
                    <ExUa />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="etymology-mount">
        <EtymologyNote />
      </div>
      <div id="similar-words-mount">
        <SimilarWordsChips />
      </div>
      <div id="word-families-mount">
        <WordFamiliesChips />
      </div>
      <div id="synonyms-mount">
        <SynonymsChips />
      </div>
      <div id="antonyms-mount">
        <AntonymsChips />
      </div>
      <div id="collocations-mount">
        <CollocationsSection />
      </div>

      <span id="card-hint-mount">
        <CardHint />
      </span>

      <div className="actions-bar">
        <div className="actions-bar-center">
          <button className="btn" id="btn-prev" title="Попередня картка" data-i18n-title="cards.prevTitle">
            <span data-i18n="cards.back">← Назад</span>
          </button>
          <button className="btn btn-auto" id="btn-auto" title="Авто-режим" data-i18n-title="cards.autoTitle">
            <AutoButtonLabel />
          </button>
          <button
            className="btn"
            id="btn-shuf"
            title="Перемішати"
            data-i18n-title="cards.shuffleTitle"
            style={{ fontSize: '14px' }}
          >
            🔀
          </button>
          <button
            className="btn"
            id="btn-search"
            title="Пошук по словнику (Ctrl+F)"
            data-i18n-title="cards.searchTitle"
            style={{ fontSize: '14px' }}
          >
            🔍
          </button>
          <button
            className="btn"
            id="btn-stats"
            title="Статистика"
            data-i18n-title="cards.statsTitle"
            style={{ display: 'none' }}
          ></button>
          <button
            className="btn btn-achievements"
            id="btn-achievements"
            title="Досягнення"
            data-i18n-title="cards.achievementsTitle"
            style={{ display: 'none' }}
          ></button>
          <button
            className="btn btn-modes-open"
            id="btn-modes-open"
            title="Режими навчання"
            data-i18n-title="cards.modesTitle"
            style={{ display: 'none' }}
          ></button>
          <div id="quick-quiz-mount">
            <QuickQuizButton />
          </div>
          <button className="btn" id="btn-next" title="Наступна картка" data-i18n-title="cards.nextTitle">
            <span data-i18n="cards.forward">→ Далі</span>
          </button>
        </div>
        <div id="daily-mission-mount" className="actions-bar-mission">
          <DailyMissionCard />
        </div>
      </div>
      <div
        style={{
          marginTop: '8px',
          textAlign: 'center',
          display: 'flex',
          gap: '8px',
          justifyContent: 'center',
          maxWidth: '360px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <button
          className="btn btn-dontknow"
          id="btn-dontknow"
          style={{ flex: 1, fontSize: '1.05rem', padding: '14px 0', letterSpacing: '0.03em' }}
        >
          <span data-i18n="cards.dontKnow">✗ Не знаю</span>
        </button>
        <button
          className="btn btn-hard"
          id="btn-hard"
          title="Згадав(-ла) з труднощами"
          data-i18n-title="cards.hardTitle"
          style={{ flex: 1, fontSize: '1.05rem', padding: '14px 0', letterSpacing: '0.03em' }}
        >
          <span data-i18n="cards.hard">🤔 Важко</span>
        </button>
        <button
          className="btn btn-know"
          id="btn-know"
          style={{ flex: 1, fontSize: '1.05rem', padding: '14px 0', letterSpacing: '0.03em' }}
        >
          <span data-i18n="cards.know">✓ Знаю</span>
        </button>
        <button
          className="btn btn-easy"
          id="btn-easy"
          title="Миттєво, дуже легко — слово вважається вивченим"
          data-i18n-title="cards.easyTitle"
          style={{ flex: 1, fontSize: '1.05rem', padding: '14px 0', letterSpacing: '0.03em' }}
        >
          <span data-i18n="cards.easy">⚡ Легко</span>
        </button>
      </div>

      <div
        id="font-size-control"
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '6px',
          marginBottom: '4px',
        }}
      >
        <FontSizeControl />
      </div>

      <div className="kbd-hint">
        <kbd data-i18n="kbd.space">Пробіл</kbd> <span data-i18n="kbd.next">далі</span> &nbsp;
        <kbd>Enter</kbd> <span data-i18n="kbd.know">знаю</span> &nbsp; <kbd>←</kbd>
        <kbd>→</kbd>
        <span data-i18n="kbd.navigation">навігація</span> &nbsp; <kbd>F</kbd>
        <span data-i18n="kbd.translation">переклад</span> &nbsp; <kbd>Ctrl+F</kbd>
        <span data-i18n="kbd.search">пошук</span> &nbsp; <kbd>?</kbd>
        <span
          style={{ cursor: 'pointer' }}
          id="btn-keys"
          data-i18n-title="kbd.allKeysTitle"
          data-i18n="kbd.allKeys"
          title="Всі клавіші"
        >
          всі клавіші
        </span>
      </div>

      <div id="achievement-toast-mount">
        <AchievementToast />
      </div>
      <div id="goal-modal-mount">
        <GoalModal />
      </div>
    </div>
  );
}
