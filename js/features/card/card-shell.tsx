// Vymova — js/features/card/card-shell.tsx
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
import { useLangVersion } from '../../../src/store.ts';
import { useCardAnimState } from '../../core/card-anim-store.ts';
import { t } from '../i18n.ts';
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
import { SimilarWordsChips } from '../word-data/similar-words.tsx';
import {
  WordFamiliesChips,
  CollocationsSection,
  SynonymsChips,
  AntonymsChips,
  EtymologyNote,
  UsageNoteBox,
} from '../word-data/word-context.tsx';
import { QuickQuizButton } from '../quick-quiz.tsx';
import { DailyMissionCard } from '../daily-mission-card.tsx';
import { FontSizeControl } from '../font-size-control.tsx';
import { AchievementToast } from '../achievements/achievement-toast.tsx';
import { GoalModal } from '../goal-modal.tsx';
import { useIsCardKnown } from './card-known-visuals.tsx';
import {
  SWIPE_HINT_RIGHT_CLASS,
  SWIPE_HINT_LEFT_CLASS,
  SWIPE_HINT_UP_CLASS,
} from '../../core/swipe.tsx';

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

// .btn's own base/:hover background/border-color/color/transition/box-shadow
// (docs/component-tailwind-conversion-roadmap.md, newly-found 14th cluster).
// Every .btn-know/.hard/.dontknow/.easy/.auto/.achievements/.modes-open
// button below still needs this too — their own `!`-prefixed classes only
// override SOME properties (e.g. .btn-auto never touched background at
// all), so they rely on these plain ones for the rest, same as before this
// conversion when they relied on .btn's bare CSS for the same properties.
const BTN_BASE =
  'bg-[var(--btn-bg)] border-[var(--btn-border-color)] text-[var(--btn-color)] [transition:var(--btn-transition)] hover:bg-[var(--btn-hover-bg)] hover:text-[var(--btn-hover-color)] hover:border-[var(--btn-hover-border-fallback)] hover:shadow-[var(--btn-hover-shadow)]';

// Shared layout for the 4 rating CTA buttons (.btn-easy/.btn-know/.btn-hard/
// .btn-dontknow), docs/full-css-tailwind-migration-roadmap.md Tier 2a.
// font-weight/border-width/border-radius/transition need the `!` modifier
// because .btn's own bare rule sets all four unconditionally too, and a
// plain Tailwind utility would stay masked by that bare CSS (see the CSS
// comment above these selectors' now-mostly-deleted rule). The :active
// rule (translateY(0) scale(0.97) + box-shadow:none) is deliberately not
// reproduced here — verified live that it's fully redundant/already
// masked, see the same CSS comment.
const BTN_CTA_BASE =
  'inline-flex items-center justify-center !font-semibold !border-[1.5px] !rounded-[12px] ![transition:all_0.15s,transform_0.15s_ease,box-shadow_0.15s_ease] hover:-translate-y-0.5';

export function CardShell(): ReactElement {
  const isKnown = useIsCardKnown();
  const speakBtnKnownCls = isKnown ? ' !text-[var(--known-c3)]' : '';
  return (
    <div className="[perspective:900px] mb-3.5">
      <div
        className="card relative cursor-pointer select-none [transition:transform_0.45s_cubic-bezier(0.4,0,0.2,1),box-shadow_0.15s]"
        id="card"
      >
        <span className={SWIPE_HINT_RIGHT_CLASS} id="sh-right" data-i18n="cards.know">
          ✓ Знаю
        </span>
        <span className={SWIPE_HINT_LEFT_CLASS} id="sh-left" data-i18n="cards.next">
          Далі →
        </span>
        <span className={SWIPE_HINT_UP_CLASS} id="sh-up" data-i18n="cards.translation">
          👁 Переклад
        </span>
        <div
          className="card-face relative rounded-[16px] p-[18px] min-h-[200px] select-text !border-solid !border-[length:var(--known-face-border-width)] !border-[var(--known-face-border)] ![background:var(--known-face-bg)] !shadow-[var(--known-face-shadow)] before:content-[var(--card-face-corner-content)] before:absolute before:left-2 before:top-2 before:z-[3] before:h-[18px] before:w-[18px] before:border-solid before:border-[rgba(var(--accent-rgb),0.6)] before:[border-width:2px_0_0_2px] before:[border-radius:2px_0_0_0] before:pointer-events-none after:content-[var(--card-face-corner-content)] after:absolute after:bottom-2 after:right-2 after:z-[3] after:h-[18px] after:w-[18px] after:border-solid after:border-[rgba(var(--accent-rgb),0.6)] after:[border-width:0_2px_2px_0] after:[border-radius:0_0_2px_0] after:pointer-events-none [animation-duration:.22s] [animation-timing-function:cubic-bezier(.25,.46,.45,.94)] [animation-fill-mode:both]"
          id="card-front"
        >
          <div id="card-meta-mount">
            <CardMeta />
          </div>
          <div className="flex gap-3.5 items-start">
            <div id="illus-mount">
              <CardImage />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-nowrap items-center gap-2 mb-[3px] max-[480px]:flex-wrap max-[480px]:gap-1">
                <span id="wword-mount">
                  <WordText />
                </span>
                <div className="word-actions">
                  <button
                    className={'speak-btn' + speakBtnKnownCls}
                    id="speak-word"
                    title="Вимовити слово"
                    data-i18n-title="cards.pronounce"
                  >
                    🔊
                  </button>
                  <button
                    className={'speak-btn' + speakBtnKnownCls}
                    id="btn-mic"
                    title="Перевір вимову"
                    data-i18n-title="cards.checkPron"
                  >
                    🎤
                  </button>
                  <button
                    className={
                      'speak-btn card-note-btn !text-[13px] !transition-[opacity,color] !duration-150 opacity-55 hover:opacity-100' +
                      speakBtnKnownCls
                    }
                    id="btn-note"
                    title="Нотатка/мнемоніка"
                    data-i18n-title="cards.noteMnemonic"
                  >
                    📝
                  </button>
                  <button
                    className={
                      'speak-btn card-bookmark-btn !text-[13px] !transition-[opacity,color] !duration-150 opacity-55 hover:opacity-100' +
                      speakBtnKnownCls
                    }
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
              <div className="border-0 border-t border-t-[var(--border)] my-2.5"></div>
              <div
                className={
                  'text-[9px] font-semibold tracking-[0.1em] uppercase text-[var(--text3)] mb-[5px]' +
                  (isKnown ? ' !text-[#2e7a4a]' : '')
                }
                data-i18n="cards.example"
              >
                Приклад
              </div>
              <div>
                <div>
                  <span id="exen-mount">
                    <ExEn />
                  </span>
                  <button
                    className={'speak-btn speak-ex-btn' + speakBtnKnownCls}
                    id="speak-ex"
                    title="Вимовити приклад"
                  >
                    🔊
                  </button>
                  <div id="exua-mount">
                    <ExUa />
                  </div>
                </div>
              </div>
              <div id="senses-mount">
                <OtherMeanings />
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
          <button
            className={'btn ' + BTN_BASE}
            id="btn-prev"
            title="Попередня картка"
            data-i18n-title="cards.prevTitle"
          >
            <span data-i18n="cards.back">← Назад</span>
          </button>
          <button
            className={
              'btn btn-auto ' +
              BTN_BASE +
              ' !border-[var(--btn-auto-color)] !text-[var(--btn-auto-color)] hover:!text-[var(--btn-auto-hover-color)] hover:!border-[var(--btn-hover-border-fallback)]'
            }
            id="btn-auto"
            title="Авто-режим"
            data-i18n-title="cards.autoTitle"
          >
            <AutoButtonLabel />
          </button>
          <button
            className={'btn ' + BTN_BASE}
            id="btn-shuf"
            title="Перемішати"
            data-i18n-title="cards.shuffleTitle"
            style={{ fontSize: '14px' }}
          >
            🔀
          </button>
          <button
            className={'btn ' + BTN_BASE}
            id="btn-search"
            title="Пошук по словнику (Ctrl+F)"
            data-i18n-title="cards.searchTitle"
            style={{ fontSize: '14px' }}
          >
            🔍
          </button>
          <button
            className={'btn ' + BTN_BASE}
            id="btn-stats"
            title="Статистика"
            data-i18n-title="cards.statsTitle"
            style={{ display: 'none' }}
          ></button>
          <button
            className={
              'btn btn-achievements ' +
              BTN_BASE +
              ' !text-[var(--btn-achievements-color)] !border-[var(--btn-achievements-color)] shadow-[var(--btn-achievements-shadow)] hover:!text-[var(--btn-achievements-hover-color)] hover:!border-[var(--btn-hover-border-fallback)]'
            }
            id="btn-achievements"
            title="Досягнення"
            data-i18n-title="cards.achievementsTitle"
            style={{ display: 'none' }}
          ></button>
          <button
            className={
              'btn btn-modes-open ' +
              BTN_BASE +
              ' !border-[var(--btn-modes-open-color)] !text-[var(--btn-modes-open-color)] hover:!bg-[var(--btn-modes-open-hover-bg)] hover:!text-[var(--btn-modes-open-hover-color)] hover:!border-[var(--btn-hover-border-fallback)]'
            }
            id="btn-modes-open"
            title="Режими навчання"
            data-i18n-title="cards.modesTitle"
            style={{ display: 'none' }}
          ></button>
          <div id="quick-quiz-mount">
            <QuickQuizButton />
          </div>
          <button
            className={'btn ' + BTN_BASE}
            id="btn-next"
            title="Наступна картка"
            data-i18n-title="cards.nextTitle"
          >
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
          className={
            'btn btn-easy ' +
            BTN_BASE +
            ' !border-[var(--btn-easy-border)] !text-[var(--btn-easy-color)] !bg-[var(--btn-easy-bg)] hover:!border-[var(--btn-hover-border-fallback)] hover:!text-[var(--btn-easy-hover-color)] hover:!bg-[var(--btn-easy-hover-bg)] hover:!shadow-[var(--btn-easy-hover-shadow)] ' +
            BTN_CTA_BASE +
            ' gap-[3px]'
          }
          id="btn-easy"
          title="Миттєво, дуже легко — слово вважається вивченим"
          data-i18n-title="cards.easyTitle"
          style={{
            flex: 1,
            fontSize: '1.05rem',
            padding: '14px 0',
            letterSpacing: '0.03em',
            whiteSpace: 'nowrap',
          }}
        >
          <span className="btn-icon" aria-hidden="true">
            😌
          </span>
          <span data-i18n="cards.easy">Легко</span>
        </button>
        <button
          className={
            'btn btn-know ' +
            BTN_BASE +
            ' !border-[var(--btn-know-border)] !text-[var(--btn-know-color)] !bg-[var(--btn-know-bg)] hover:!border-[var(--btn-hover-border-fallback)] hover:!text-[var(--btn-know-hover-color)] hover:!bg-[var(--btn-know-hover-bg)] hover:!shadow-[var(--btn-know-hover-shadow)] ' +
            BTN_CTA_BASE +
            ' gap-1.5'
          }
          id="btn-know"
          style={{
            flex: 1,
            fontSize: '1.05rem',
            padding: '14px 0',
            letterSpacing: '0.03em',
            whiteSpace: 'nowrap',
          }}
        >
          <span data-i18n="cards.know">✓ Знаю</span>
        </button>
        <button
          className={
            'btn btn-hard ' +
            BTN_BASE +
            ' !border-[var(--btn-hard-border)] !text-[var(--btn-hard-color)] !bg-[var(--btn-hard-bg)] hover:!border-[var(--btn-hover-border-fallback)] hover:!text-[var(--btn-hard-hover-color)] hover:!bg-[var(--btn-hard-hover-bg)] hover:!shadow-[var(--btn-hard-hover-shadow)] ' +
            BTN_CTA_BASE +
            ' gap-[3px]'
          }
          id="btn-hard"
          title="Згадав(-ла) з труднощами"
          data-i18n-title="cards.hardTitle"
          style={{
            flex: 1,
            fontSize: '1.05rem',
            padding: '14px 0',
            letterSpacing: '0.03em',
            whiteSpace: 'nowrap',
          }}
        >
          <span className="btn-icon" aria-hidden="true">
            🤔
          </span>
          <span data-i18n="cards.hard">Важко</span>
        </button>
        <button
          className={
            'btn btn-dontknow ' +
            BTN_BASE +
            ' !border-[var(--btn-dontknow-border)] !text-[var(--btn-dontknow-color)] !bg-[var(--btn-dontknow-bg)] hover:!border-[var(--btn-hover-border-fallback)] hover:!text-[var(--btn-dontknow-hover-color)] hover:!bg-[var(--btn-dontknow-hover-bg)] hover:!shadow-[var(--btn-dontknow-hover-shadow)] ' +
            BTN_CTA_BASE +
            ' gap-[3px]'
          }
          id="btn-dontknow"
          style={{
            flex: 1,
            fontSize: '1.05rem',
            padding: '14px 0',
            letterSpacing: '0.03em',
            whiteSpace: 'nowrap',
          }}
        >
          <span className="btn-icon" aria-hidden="true">
            ✗
          </span>
          <span data-i18n="cards.dontKnow">Не знаю</span>
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
        <kbd>→</kbd> <span data-i18n="kbd.navigation">навігація</span> &nbsp; <kbd>F</kbd>{' '}
        <span data-i18n="kbd.translation">переклад</span> &nbsp; <kbd>Ctrl+F</kbd>{' '}
        <span data-i18n="kbd.search">пошук</span> &nbsp; <kbd>?</kbd>{' '}
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
