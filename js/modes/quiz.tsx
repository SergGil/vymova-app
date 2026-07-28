// Vymova — js/modes/quiz.tsx
// 🧠 QUIZ MODE
import { useEffect, useState, type ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { _shuf, orderDeckPool } from '../core/srs.ts';
import { getDeckSnapshot } from '../../src/deck-store.ts';
import { W } from '../../data/words-data/words.js';
import { addCombo, breakCombo, awardXP } from '../features/game/combo.ts';
import { recordMistake, recordModeAnswer } from '../features/game/game.ts';
import { decodeIpa } from '../core/ui-helpers.ts';
import { speak, _speakWithLang } from '../features/voice/speech.ts';
import { t, getLang } from '../features/i18n.ts';
import { entryFor } from '../features/mode/mode-utils.ts';
import { getKnowLang, getLearnLang, type LangCode } from '../features/lang-pair-select.tsx';
import type { WordEntry } from '../../src/types.js';
import { useModeSession } from '../features/mode/use-mode-session.ts';
import { bindOverlayOpenClose } from '../features/overlay-utils.ts';

const QUIZ_SIZE = 10,
  QUICK_SIZE = 5,
  NUM_OPTIONS = 4;

function buildDeck(sourceWords?: WordEntry[] | null, maxSize = QUIZ_SIZE): WordEntry[] {
  if (sourceWords?.length) {
    return _shuf(sourceWords.slice()).slice(0, Math.min(maxSize, sourceWords.length));
  }
  const src = getDeckSnapshot().length ? getDeckSnapshot() : (W as unknown as WordEntry[]);
  return orderDeckPool(src).slice(0, Math.min(maxSize, src.length));
}

// Was a per-language if/else chain that stopped at 'VI' (the 15th language
// added) — every language added after that fell through to the `else`
// branch and got the raw English word as a "distractor" instead of a real
// wrong answer in the target language. entryFor() already handles every
// language generically (it's what frontWord/backWord below already use for
// the *correct* answer), so it covers new languages automatically too.
function getWrongOptions(correctWord: WordEntry, answer: string, backLang: LangCode): string[] {
  const shuffled = _shuf(W.slice() as unknown as WordEntry[]);
  const options: string[] = [];
  const used = new Set([correctWord[0].toLowerCase()]);
  for (const w of shuffled) {
    if (options.length >= NUM_OPTIONS - 1) break;
    if (used.has(w[0].toLowerCase())) continue;
    used.add(w[0].toLowerCase());
    const opt = entryFor(backLang, w).word;
    if (!opt || opt === answer) continue;
    options.push(opt);
  }
  return options;
}

function _pluralUa(n: number, one: string, few: string, many: string): string {
  const mod10 = n % 10,
    mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
  return many;
}
function _countLabel(n: number, one: string, few: string, many: string): string {
  const word = getLang() === 'ua' ? _pluralUa(n, one, few, many) : n === 1 ? one : few;
  return `${n} ${word}`;
}
function _answerCount(n: number): string {
  return _countLabel(n, t('quiz.answer'), t('quiz.answers'), t('quiz.answersGen'));
}
function _mistakeCount(n: number): string {
  return _countLabel(n, t('quiz.mistake'), t('quiz.mistakes'), t('quiz.mistakesGen'));
}

type QData = {
  w: WordEntry;
  frontLang: string;
  backLang: string;
  question: string;
  answer: string;
  opts: string[];
};

function buildQuestion(w: WordEntry): QData {
  const knowLang = getKnowLang();
  const learnLang = getLearnLang();
  const frontLang = Math.random() < 0.5 ? learnLang : knowLang;
  const backLang = frontLang === learnLang ? knowLang : learnLang;
  const frontWord = entryFor(frontLang, w).word;
  const backWord = entryFor(backLang, w).word;
  const opts = _shuf([backWord, ...getWrongOptions(w, backWord, backLang)]);
  return {
    w,
    frontLang: frontLang.toUpperCase(),
    backLang: backLang.toUpperCase(),
    question: frontWord,
    answer: backWord,
    opts,
  };
}

function SpeakBtn({ text, lang = 'en-US' }: { text: string; lang?: string }): ReactElement {
  return (
    <button
      className="mode-speak ml-2 inline-flex h-[30px] w-[30px] shrink-0 cursor-pointer items-center justify-center rounded-md border-none bg-white/7 align-middle text-[.9rem] text-[var(--text3)] transition-all duration-150 hover:bg-white/15 hover:text-[var(--accent)] [&.on]:!bg-[rgba(78,204,163,0.15)] [&.on]:text-[var(--accent)] max-[480px]:p-[5px_8px] max-[480px]:text-[16px] max-[480px]:min-h-[36px]"
      title={t('common.listen')}
      onClick={(e) => {
        e.stopPropagation();
        const btn = e.currentTarget;
        if (lang.startsWith('uk')) _speakWithLang(text, lang, btn);
        else speak(text, btn);
      }}
    >
      🔊
    </button>
  );
}

let _open: ((src?: WordEntry[] | null, maxSize?: number) => void) | null = null;
let _close: (() => void) | null = null;

function openQuiz(src?: WordEntry[] | null, maxSize?: number): void {
  _open?.(src, maxSize);
}
function closeQuiz(): void {
  _close?.();
}
export function openQuickQuiz(): void {
  openQuiz(null, QUICK_SIZE);
}

type StartArg = { src?: WordEntry[] | null; maxSize?: number; isRetry?: boolean };

export function QuizPage(): ReactElement | null {
  const [deck, setDeck] = useState<WordEntry[]>([]);
  const [idx, setIdx] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [wrongWords, setWrongWords] = useState<WordEntry[]>([]);
  const [qData, setQData] = useState<QData | null>(null);
  const [answered, setAnswered] = useState(false);
  const [chosen, setChosen] = useState<string | null>(null);
  const [isRetrySession, setIsRetrySession] = useState(false);

  const showFinal = deck.length > 0 && idx >= deck.length;

  const startGame = (arg?: StartArg): void => {
    setIsRetrySession(!!arg?.isRetry);
    const d = buildDeck(arg?.src, arg?.maxSize ?? QUIZ_SIZE);
    setDeck(d);
    setIdx(0);
    setCorrect(0);
    setWrong(0);
    setWrongWords([]);
    setAnswered(false);
    setChosen(null);
    setQData(d.length ? buildQuestion(d[0]) : null);
    const panel = document.getElementById('quiz-panel');
    if (panel) panel.scrollTop = 0;
  };

  const session = useModeSession<StartArg>({
    overlayId: 'quiz-overlay',
    modeId: 'quiz',
    isFinal: showFinal,
    onOpen: startGame,
    closeOnEscape: false,
    showOverlay: (el) => el.classList.add('open'),
    hideOverlay: (el) => el.classList.remove('open'),
    bindExternal: (open, close) => {
      _open = (src, maxSize) => open({ src, maxSize });
      _close = close;
      return () => {
        _open = null;
        _close = null;
      };
    },
  });
  const { isOpen, open: sessionOpen } = session;

  // full-react-migration-roadmap.md Phase 5a: quiz.tsx is one of the 4
  // modes mounted directly in AppRoot (not behind <LazyMode/>), so its
  // module evaluates as part of app-root.tsx's static import graph — before
  // React's first commit (see the Phase 3 audit finding on sel-mode/
  // sel-range's same-timing hazard). bindOverlayOpenClose used to run at
  // module-eval time too, which only worked because #btn-quiz was static
  // HTML present at that point; moving it here (QuizPage only ever mounts
  // once, so this is a one-time effect exactly like the module-eval call it
  // replaces) makes it safe once #btn-quiz is React-rendered.
  useEffect(() => {
    bindOverlayOpenClose('btn-quiz', 'quiz-overlay', () => openQuiz(null), closeQuiz);
  }, []);

  const advance = (): void => {
    const newIdx = idx + 1;
    setIdx(newIdx);
    setAnswered(false);
    setChosen(null);
    if (newIdx < deck.length) setQData(buildQuestion(deck[newIdx]));
  };

  const checkAnswer = (opt: string): void => {
    if (answered || !qData) return;
    setAnswered(true);
    setChosen(opt);
    if (opt === qData.answer) {
      setCorrect((c) => c + 1);
      try {
        addCombo();
        awardXP(5);
      } catch (e) {}
      recordModeAnswer('quiz', true);
    } else {
      setWrong((w) => w + 1);
      setWrongWords((ws) => [...ws, qData.w]);
      try {
        breakCombo();
      } catch (e) {}
      recordMistake(qData.w[0]);
      recordModeAnswer('quiz', false);
    }
  };

  const restart = (): void => sessionOpen();
  const restartWrong = (): void => sessionOpen({ src: wrongWords.slice(), isRetry: true });

  // Keyboard shortcuts
  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      const overlay = document.getElementById('quiz-overlay');
      if (!overlay?.classList.contains('open')) return;
      if (e.key === 'Escape') {
        closeQuiz();
        return;
      }
      if ((e.key === 'ArrowRight' || e.key === ' ') && answered) {
        e.preventDefault();
        advance();
        return;
      }
      if (!answered && qData && ['1', '2', '3', '4'].includes(e.key)) {
        e.preventDefault();
        const i = parseInt(e.key) - 1;
        if (qData.opts[i] !== undefined) checkAnswer(qData.opts[i]);
      }
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answered, qData, idx, deck]);

  function renderContent(): ReactElement {
    const pct = deck.length > 0 ? Math.round((correct / deck.length) * 100) : 0;
    let finalEmoji: string, finalTitle: string, finalDesc: string;
    const scoreLine = `${_answerCount(correct)} ${t('common.of')} ${deck.length} (${pct}%)`;
    if (isRetrySession && pct === 100) {
      finalEmoji = '🎯';
      finalTitle = t('quiz.fixedTitle');
      finalDesc =
        deck.length === 1
          ? t('quiz.fixedDescSingle')
          : t('quiz.fixedDescAll', { n: _answerCount(deck.length) });
    } else if (pct === 100) {
      finalEmoji = '🏆';
      finalTitle = t('quiz.perfectTitle');
      finalDesc =
        deck.length === 1
          ? t('quiz.perfectDescSingle')
          : t('quiz.perfectDescAll', { n: _answerCount(deck.length) });
    } else if (pct >= 80) {
      finalEmoji = '🎉';
      finalTitle = t('quiz.greatTitle');
      finalDesc = scoreLine;
    } else if (pct >= 60) {
      finalEmoji = '👍';
      finalTitle = t('quiz.goodTitle');
      finalDesc = scoreLine;
    } else if (pct >= 40) {
      finalEmoji = '📚';
      finalTitle = t('quiz.keepTitle');
      finalDesc = `${scoreLine}. ${t('quiz.keepDescSuffix')}`;
    } else {
      finalEmoji = '💪';
      finalTitle = t('quiz.encourageTitle');
      finalDesc = `${scoreLine}. ${t('quiz.encourageDescSuffix')}`;
    }

    return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 10,
          flexShrink: 0,
        }}
      >
        <div>
          <div
            style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)' }}
            data-i18n="quiz.title"
          >
            {t('quiz.title')}
          </div>
          <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 2 }}>
            {!showFinal
              ? `${t('quiz.question')} ${idx + 1} ${t('common.of')} ${deck.length}`
              : t('quiz.completed')}
          </div>
        </div>
        <button
          onClick={closeQuiz}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.3rem',
            cursor: 'pointer',
            color: 'var(--text3)',
            lineHeight: 1,
          }}
          aria-label={t('common.close')}
        >
          ✕
        </button>
      </div>

      <div
        style={{
          height: 4,
          background: 'var(--border)',
          borderRadius: 4,
          marginBottom: 10,
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            height: '100%',
            background: 'var(--accent)',
            borderRadius: 4,
            transition: 'width .4s ease',
            width: showFinal ? '100%' : `${deck.length ? (idx / deck.length) * 100 : 0}%`,
          }}
        />
      </div>

      {!showFinal && qData && (
        <>
          <div
            style={{
              display: 'flex',
              gap: 14,
              justifyContent: 'center',
              marginBottom: 10,
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: '.82rem', color: 'var(--success)', fontWeight: 600 }}>
              ✓ {correct} <span data-i18n="quiz.correctLbl">{t('quiz.correctLbl')}</span>
            </span>
            <span style={{ fontSize: '.82rem', color: 'var(--danger)', fontWeight: 600 }}>
              ✗ {wrong} <span data-i18n="quiz.wrongLbl">{t('quiz.wrongLbl')}</span>
            </span>
          </div>

          <div
            style={{
              background: 'var(--bg)',
              borderRadius: 14,
              padding: '14px 16px',
              textAlign: 'center',
              marginBottom: 10,
            }}
          >
            <div
              style={{
                fontSize: '.65rem',
                fontWeight: 700,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: 'var(--text3)',
                marginBottom: 6,
              }}
            >
              {t(`lang.${qData.frontLang.toLowerCase()}` as any)} →{' '}
              {t(`lang.${qData.backLang.toLowerCase()}` as any)}
            </div>
            <div
              style={{
                fontFamily: "'DM Serif Display',serif",
                fontSize: '1.75rem',
                color: 'var(--text)',
                lineHeight: 1.15,
              }}
            >
              {qData.question}
              {qData.frontLang === 'EN' && <SpeakBtn text={qData.question} lang="en-US" />}
            </div>
            <div style={{ fontSize: '.8rem', color: 'var(--accent2)', marginTop: 3 }}>
              {qData.frontLang === 'EN' ? decodeIpa(qData.w[4] ?? '') : ''}
            </div>
            {answered && (
              <div
                style={{
                  fontSize: '.72rem',
                  color: 'var(--text3)',
                  marginTop: 3,
                  fontStyle: 'italic',
                  lineHeight: 1.4,
                }}
              >
                {(qData.w[2] ?? '') && (
                  <div
                    style={{
                      fontSize: '.8rem',
                      color: 'var(--text2)',
                      fontStyle: 'italic',
                      marginBottom: 2,
                    }}
                  >
                    {qData.w[2]}
                    <SpeakBtn text={qData.w[2] ?? ''} lang="en-US" />
                  </div>
                )}
                {(qData.w[3] ?? '') && (
                  <div style={{ fontSize: '.8rem', color: 'var(--text3)' }}>{qData.w[3]}</div>
                )}
              </div>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 7, flexShrink: 0 }}>
            {qData.opts.map((opt, i) => {
              let cls =
                "quiz-option group relative w-full cursor-pointer rounded-[11px] border-[1.5px] border-[var(--border)] bg-[var(--card)] px-3.5 py-2.5 text-left font-['DM_Sans',sans-serif] text-[.88rem] leading-[1.3] text-[var(--text)] transition-[border-color,background,transform] duration-150 not-disabled:hover:border-[var(--quiz-option-hover-border)] not-disabled:hover:bg-[var(--quiz-option-hover-bg)] disabled:cursor-default max-[480px]:py-[9px] max-[480px]:px-[12px] max-[480px]:text-[0.82rem]";
              if (answered) {
                if (opt === chosen && opt === qData.answer) cls += ' correct !border-[var(--quiz-correct-border)] !bg-[var(--quiz-correct-bg)] !text-[var(--quiz-correct-color)] font-semibold';
                else if (opt === chosen) cls += ' wrong !border-[var(--quiz-wrong-border)] !bg-[var(--quiz-wrong-bg)] !text-[var(--quiz-wrong-color)]';
                else if (opt === qData.answer) cls += ' reveal !border-[var(--quiz-reveal-border)] !bg-[var(--quiz-reveal-bg)] !text-[var(--quiz-reveal-color)] opacity-70';
              }
              return (
                <button
                  key={opt}
                  className={cls}
                  disabled={answered}
                  onClick={() => checkAnswer(opt)}
                >
                  <span className="opt-num inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] bg-[var(--border)] mr-1.5 align-middle text-[.68rem] font-bold text-[var(--text2)] group-[.correct]:hidden group-[.wrong]:hidden group-[.reveal]:hidden">{i + 1}</span>{' '}
                  {answered && opt === chosen ? (opt === qData.answer ? '✓ ' : '✗ ') : ''}
                  {opt}
                </button>
              );
            })}
          </div>

          <div
            style={{
              textAlign: 'center',
              fontSize: '.88rem',
              fontWeight: 600,
              minHeight: 22,
              marginTop: 8,
              flexShrink: 0,
            }}
          >
            {answered &&
              (chosen === qData.answer ? (
                <span style={{ color: 'var(--success)' }}>{t('quiz.correctMsg')}</span>
              ) : (
                <span style={{ color: 'var(--danger)' }}>{t('quiz.incorrectMsg')}</span>
              ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 10, flexShrink: 0 }}>
            {answered && (
              <button
                onClick={advance}
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: '.9rem',
                  fontWeight: 600,
                  padding: '10px 32px',
                  borderRadius: 10,
                  border: 'none',
                  background: 'var(--accent)',
                  color: '#fff',
                  cursor: 'pointer',
                  transition: 'opacity .15s',
                }}
              >
                {idx >= deck.length - 1 ? t('quiz.finish') : t('quiz.next')}
              </button>
            )}
          </div>
        </>
      )}

      {showFinal && (
        <div style={{ textAlign: 'center', padding: '10px 0 4px' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>{finalEmoji}</div>
          <div
            style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}
          >
            {finalTitle}
          </div>
          <div style={{ fontSize: '.9rem', color: 'var(--text2)', marginBottom: 18 }}>
            {finalDesc}
          </div>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={restart}
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: '.88rem',
                fontWeight: 600,
                padding: '10px 22px',
                borderRadius: 10,
                border: '1.5px solid var(--accent)',
                background: 'none',
                color: 'var(--accent)',
                cursor: 'pointer',
              }}
              data-i18n="common.tryAgain"
            >
              {t('common.tryAgain')}
            </button>
            {wrongWords.length > 0 && (
              <button
                onClick={restartWrong}
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: '.88rem',
                  fontWeight: 600,
                  padding: '10px 22px',
                  borderRadius: 10,
                  border: '1.5px solid var(--accent2)',
                  background: 'none',
                  color: 'var(--accent2)',
                  cursor: 'pointer',
                }}
              >
                {t('quiz.restartWrongPrefix')} {_mistakeCount(wrongWords.length)}
              </button>
            )}
            <button
              onClick={closeQuiz}
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: '.88rem',
                padding: '10px 22px',
                borderRadius: 10,
                border: '1.5px solid var(--border)',
                background: 'none',
                color: 'var(--text2)',
                cursor: 'pointer',
              }}
              data-i18n="common.close"
            >
              {t('common.close')}
            </button>
          </div>
        </div>
      )}
    </>
    );
  }

  if (typeof document === 'undefined') return null;
  return createPortal(
    <div
      id="quiz-overlay"
      className={
        'fixed inset-0 bg-black/55 z-[9000] items-center justify-center p-2 overflow-hidden' +
        (isOpen ? ' open' : '')
      }
    >
      <div
        className="quiz-panel bg-[var(--quiz-panel-bg)] [border:var(--quiz-panel-border)] shadow-[var(--quiz-panel-shadow)]"
        id="quiz-panel"
      >
        {isOpen && renderContent()}
      </div>
    </div>,
    document.body,
  );
}
