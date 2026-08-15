// Vymova — js/modes/adaptive-quiz.tsx
// 🎯 ADAPTIVE QUIZ: difficulty (timer + option count) adjusts to how fast/correctly
// the user answers the previous question. Session-only — separate from the
// long-term SM2 scheduler in core/srs.ts, which keeps running unchanged.
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { _shuf, orderDeckPool } from '../core/srs.ts';
import { getDeckSnapshot } from '../../src/deck-store.ts';
import { W } from '../../data/words-data/words.js';
import { addCombo, breakCombo, awardXP } from '../features/game/combo.ts';
import { recordMistake, recordModeAnswer } from '../features/game/game.ts';
import { decodeIpa } from '../core/ui-helpers.ts';
import { playSound } from '../core/audio.ts';
import { speak, _speakWithLang } from '../features/voice/speech.ts';
import { t } from '../features/i18n.ts';
import { entryFor } from '../features/mode/mode-utils.ts';
import { getKnowLang, getLearnLang, type LangCode } from '../features/lang-pair-select.tsx';
import type { WordEntry } from '../../src/types.js';
import { bindOverlayOpenClose } from '../features/overlay-utils.ts';
import { useModeSession } from '../features/mode/use-mode-session.ts';

const AQ_SIZE = 10;
const MIN_DIFF = 1,
  MAX_DIFF = 5,
  START_DIFF = 2;

function numOptionsFor(difficulty: number): number {
  // Harder = more distractors to pick the right answer from.
  return Math.min(6, 2 + difficulty);
}
function timeLimitFor(difficulty: number): number {
  // Harder = less time. Seconds.
  return Math.max(4, 13 - difficulty * 2);
}

function buildDeck(): WordEntry[] {
  const src = getDeckSnapshot().length ? getDeckSnapshot() : (W as unknown as WordEntry[]);
  return orderDeckPool(src).slice(0, Math.min(AQ_SIZE, src.length));
}

// Was a per-language if/else chain that stopped at 'VI' (the 15th language
// added) — every language added after that fell through to the `else`
// branch and got the raw English word as a "distractor" instead of a real
// wrong answer in the target language. entryFor() already handles every
// language generically (it's what frontWord/backWord below already use for
// the *correct* answer), so it covers new languages automatically too.
function getWrongOptions(
  correctWord: WordEntry,
  answer: string,
  backLang: LangCode,
  need: number,
): string[] {
  const shuffled = _shuf(W.slice() as unknown as WordEntry[]);
  const options: string[] = [];
  const used = new Set([correctWord[0].toLowerCase()]);
  for (const w of shuffled) {
    if (options.length >= need) break;
    if (used.has(w[0].toLowerCase())) continue;
    used.add(w[0].toLowerCase());
    const opt = entryFor(backLang, w).word;
    if (!opt || opt === answer) continue;
    options.push(opt);
  }
  return options;
}

type QData = {
  w: WordEntry;
  frontLang: string;
  backLang: string;
  question: string;
  answer: string;
  opts: string[];
};

function buildQuestion(w: WordEntry, difficulty: number): QData {
  const knowLang = getKnowLang();
  const learnLang = getLearnLang();
  const frontLang = Math.random() < 0.5 ? learnLang : knowLang;
  const backLang = frontLang === learnLang ? knowLang : learnLang;
  const frontWord = entryFor(frontLang, w).word;
  const backWord = entryFor(backLang, w).word;
  const need = numOptionsFor(difficulty) - 1;
  const opts = _shuf([backWord, ...getWrongOptions(w, backWord, backLang, need)]);
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
      className="mode-speak ml-2 inline-flex h-[30px] w-[30px] shrink-0 cursor-pointer items-center justify-center rounded-md border-none bg-white/7 align-middle text-[.9rem] text-[var(--text3)] transition-all duration-150 hover:bg-white/15 hover:text-[var(--accent)] [&.on]:!bg-[rgba(78,204,163,0.15)] [&.on]:text-[var(--accent)] [@media(max-width:480px)]:p-[5px_8px] [@media(max-width:480px)]:text-[16px] [@media(max-width:480px)]:min-h-[36px]"
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

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

export function openAdaptiveQuiz(): void {
  _open?.();
}
export function closeAdaptiveQuiz(): void {
  _close?.();
}

export function AdaptiveQuizPage(): ReactElement {
  const [deck, setDeck] = useState<WordEntry[]>([]);
  const [idx, setIdx] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [difficulty, setDifficulty] = useState(START_DIFF);
  const [qData, setQData] = useState<QData | null>(null);
  const [answered, setAnswered] = useState(false);
  const [chosen, setChosen] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(timeLimitFor(START_DIFF));
  const startedAt = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const showFinal = deck.length > 0 && idx >= deck.length;

  const stopTimer = (): void => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const checkAnswer = (opt: string | null): void => {
    if (answered) return;
    stopTimer();
    setAnswered(true);
    setChosen(opt);
    if (!qData) return;
    const elapsedMs = performance.now() - startedAt.current;
    const limitMs = timeLimitFor(difficulty) * 1000;
    const isCorrect = opt !== null && opt === qData.answer;
    if (isCorrect) {
      setCorrect((c) => c + 1);
      try {
        addCombo();
        awardXP(5);
      } catch (e) {}
      recordModeAnswer('adaptive-quiz', true);
      const fast = elapsedMs < limitMs * 0.5;
      if (fast) setDifficulty((d) => Math.min(MAX_DIFF, d + 1));
    } else {
      setWrong((w) => w + 1);
      try {
        breakCombo();
      } catch (e) {}
      recordMistake(qData.w[0]);
      recordModeAnswer('adaptive-quiz', false);
      setDifficulty((d) => Math.max(MIN_DIFF, d - 1));
    }
  };

  const startGame = (): void => {
    const d = buildDeck();
    setDeck(d);
    setIdx(0);
    setCorrect(0);
    setWrong(0);
    setAnswered(false);
    setChosen(null);
    setDifficulty(START_DIFF);
    setQData(d.length ? buildQuestion(d[0], START_DIFF) : null);
  };

  const session = useModeSession({
    overlayId: 'aq-overlay',
    modeId: 'adaptive-quiz',
    isFinal: showFinal,
    onOpen: startGame,
    onClose: stopTimer,
    showOverlay: (el) => el.classList.add('open'),
    hideOverlay: (el) => el.classList.remove('open'),
    bindExternal: (open, close) => {
      _open = open;
      _close = close;
      return () => {
        _open = null;
        _close = null;
        stopTimer();
      };
    },
  });
  const { isOpen } = session;

  // Per-question countdown timer; auto-submits as wrong when it hits zero.
  useEffect(() => {
    if (!isOpen || showFinal || !qData || answered) return;
    startedAt.current = performance.now();
    const limit = timeLimitFor(difficulty);
    setTimeLeft(limit);
    timerRef.current = setInterval(() => {
      setTimeLeft((tl) => {
        if (tl <= 1) {
          checkAnswer(null);
          return 0;
        }
        const next = tl - 1;
        if (next <= 3) {
          try {
            playSound('tick');
          } catch (e) {}
        }
        return next;
      });
    }, 1000);
    return stopTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qData, isOpen, showFinal]);

  const advance = (): void => {
    const newIdx = idx + 1;
    setIdx(newIdx);
    setAnswered(false);
    setChosen(null);
    if (newIdx < deck.length) setQData(buildQuestion(deck[newIdx], difficulty));
  };

  if (!isOpen) return <></>;

  const pct = deck.length > 0 ? Math.round((correct / deck.length) * 100) : 0;

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
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)' }}>
            {t('adaptiveQuiz.title')}
          </div>
          <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 2 }}>
            {!showFinal
              ? `${t('quiz.question')} ${idx + 1} ${t('common.of')} ${deck.length} · ${t('adaptiveQuiz.level')} ${difficulty}/${MAX_DIFF}`
              : t('quiz.completed')}
          </div>
        </div>
        <button
          onClick={closeAdaptiveQuiz}
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
              ✓ {correct}
            </span>
            <span style={{ fontSize: '.82rem', color: 'var(--danger)', fontWeight: 600 }}>
              ✗ {wrong}
            </span>
            <span
              style={{
                fontSize: '.82rem',
                color: timeLeft <= 3 ? 'var(--danger)' : 'var(--text2)',
                fontWeight: 600,
              }}
            >
              ⏱ {timeLeft}s
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
              {t(`lang.${qData.frontLang.toLowerCase()}`)} →{' '}
              {t(`lang.${qData.backLang.toLowerCase()}`)}
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
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 7, flexShrink: 0 }}>
            {qData.opts.map((opt, i) => {
              let cls =
                "quiz-option group relative w-full cursor-pointer rounded-[11px] border-[1.5px] border-[var(--border)] bg-[var(--card)] px-3.5 py-2.5 text-left font-['DM_Sans',sans-serif] text-[.88rem] leading-[1.3] text-[var(--text)] transition-[border-color,background,transform] duration-150 not-disabled:hover:border-[var(--quiz-option-hover-border)] not-disabled:hover:bg-[var(--quiz-option-hover-bg)] disabled:cursor-default [@media(max-width:480px)]:py-[9px] [@media(max-width:480px)]:px-[12px] [@media(max-width:480px)]:text-[0.82rem]";
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
                <span style={{ color: 'var(--danger)' }}>
                  {chosen === null ? t('adaptiveQuiz.timeUp') : t('quiz.incorrectMsg')}
                </span>
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
          <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>
            {pct >= 80 ? '🎯' : pct >= 50 ? '👍' : '💪'}
          </div>
          <div
            style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}
          >
            {t('adaptiveQuiz.completedTitle')}
          </div>
          <div style={{ fontSize: '.9rem', color: 'var(--text2)', marginBottom: 18 }}>
            {correct} {t('common.of')} {deck.length} ({pct}%) · {t('adaptiveQuiz.finalLevel')}{' '}
            {difficulty}/{MAX_DIFF}
          </div>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => session.open()}
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
            <button
              onClick={closeAdaptiveQuiz}
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

bindOverlayOpenClose(
  'btn-adaptive-quiz',
  'aq-overlay',
  () => openAdaptiveQuiz(),
  closeAdaptiveQuiz,
);

// Exposed for tests: pure difficulty-mapping helpers, no DOM/React needed.
export { numOptionsFor, timeLimitFor };
