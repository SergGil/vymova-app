// Vymova — js/modes/adaptive-quiz.tsx
// 🎯 ADAPTIVE QUIZ: difficulty (timer + option count) adjusts to how fast/correctly
// the user answers the previous question. Session-only — separate from the
// long-term SM2 scheduler in core/srs.ts, which keeps running unchanged.
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { _shuf } from '../core/srs.ts';
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import { addCombo, breakCombo, awardXP } from '../features/combo.ts';
import { recordModeComplete, recordMistake, recordModeAnswer } from '../features/game.ts';
import { decodeIpa } from '../core/ui-helpers.ts';
import { speak, _speakWithLang } from '../features/speech.ts';
import { t, getLang } from '../features/i18n.ts';
import { esEntry, frEntry, itEntry, ptEntry, deEntry, heEntry, arEntry, plEntry, zhEntry, elEntry, jaEntry, trEntry, nlEntry } from '../features/mode-utils.ts';
import { getKnowLang, getLearnLang } from '../features/lang-pair-select.tsx';
import type { WordEntry } from '../../src/types.js';
import { bindOverlayOpenClose } from '../features/overlay-utils.ts';

const AQ_SIZE = 10;
const MIN_DIFF = 1, MAX_DIFF = 5, START_DIFF = 2;

function numOptionsFor(difficulty: number): number {
  // Harder = more distractors to pick the right answer from.
  return Math.min(6, 2 + difficulty);
}
function timeLimitFor(difficulty: number): number {
  // Harder = less time. Seconds.
  return Math.max(4, 13 - difficulty * 2);
}

function buildDeck(): WordEntry[] {
  const src = state.deck.length ? state.deck : (W as unknown as WordEntry[]);
  return _shuf(src.slice()).slice(0, Math.min(AQ_SIZE, src.length));
}

function getWordInLang(w: WordEntry, lang: string): string {
  switch (lang) {
    case 'ua': return w[1];
    case 'es': return esEntry(w[0])?.[0] ?? '';
    case 'fr': return frEntry(w[0])?.[0] ?? '';
    case 'it': return itEntry(w[0])?.[0] ?? '';
    case 'pt': return ptEntry(w[0])?.[0] ?? '';
    case 'de': return deEntry(w[0])?.[0] ?? '';
    case 'he': return heEntry(w[0])?.[0] ?? '';
    case 'ar': return arEntry(w[0])?.[0] ?? '';
    case 'pl': return plEntry(w[0])?.[0] ?? '';
    case 'zh': return zhEntry(w[0])?.[0] ?? '';
    case 'el': return elEntry(w[0])?.[0] ?? '';
    case 'ja': return jaEntry(w[0])?.[0] ?? '';
    case 'tr': return trEntry(w[0])?.[0] ?? '';
    case 'nl': return nlEntry(w[0])?.[0] ?? '';
    default:   return w[0];
  }
}

function getWrongOptions(correctWord: WordEntry, answer: string, backLang: string, need: number): string[] {
  const shuffled = _shuf(W.slice() as unknown as WordEntry[]);
  const options: string[] = [];
  const used = new Set([correctWord[0].toLowerCase()]);
  for (const w of shuffled) {
    if (options.length >= need) break;
    if (used.has(w[0].toLowerCase())) continue;
    used.add(w[0].toLowerCase());
    let opt: string;
    if (backLang === 'UA') { opt = w[1]; }
    else if (backLang === 'ES') { const e = esEntry(w[0]); if (!e) continue; opt = e[0]; }
    else if (backLang === 'FR') { const e = frEntry(w[0]); if (!e) continue; opt = e[0]; }
    else if (backLang === 'IT') { const e = itEntry(w[0]); if (!e) continue; opt = e[0]; }
    else if (backLang === 'PT') { const e = ptEntry(w[0]); if (!e) continue; opt = e[0]; }
    else if (backLang === 'DE') { const e = deEntry(w[0]); if (!e) continue; opt = e[0]; }
    else if (backLang === 'HE') { const e = heEntry(w[0]); if (!e) continue; opt = e[0]; }
    else if (backLang === 'AR') { const e = arEntry(w[0]); if (!e) continue; opt = e[0]; }
    else if (backLang === 'PL') { const e = plEntry(w[0]); if (!e) continue; opt = e[0]; }
    else if (backLang === 'ZH') { const e = zhEntry(w[0]); if (!e) continue; opt = e[0]; }
    else if (backLang === 'EL') { const e = elEntry(w[0]); if (!e) continue; opt = e[0]; }
    else if (backLang === 'JA') { const e = jaEntry(w[0]); if (!e) continue; opt = e[0]; }
    else if (backLang === 'TR') { const e = trEntry(w[0]); if (!e) continue; opt = e[0]; }
    else if (backLang === 'NL') { const e = nlEntry(w[0]); if (!e) continue; opt = e[0]; }
    else { opt = w[0]; }
    if (opt === answer) continue;
    options.push(opt);
  }
  return options;
}

type QData = { w: WordEntry; frontLang: string; backLang: string; question: string; answer: string; opts: string[] };

function buildQuestion(w: WordEntry, difficulty: number): QData {
  const knowLang = getKnowLang();
  const learnLang = getLearnLang();
  const frontLang = Math.random() < 0.5 ? learnLang : knowLang;
  const backLang  = frontLang === learnLang ? knowLang : learnLang;
  const frontWord = getWordInLang(w, frontLang);
  const backWord  = getWordInLang(w, backLang);
  const need = numOptionsFor(difficulty) - 1;
  const opts = _shuf([backWord, ...getWrongOptions(w, backWord, backLang.toUpperCase(), need)]);
  return { w, frontLang: frontLang.toUpperCase(), backLang: backLang.toUpperCase(), question: frontWord, answer: backWord, opts };
}

function SpeakBtn({ text, lang = 'en-US' }: { text: string; lang?: string }): ReactElement {
  return (
    <button
      className="mode-speak" title={t('common.listen')}
      onClick={(e) => {
        e.stopPropagation();
        const btn = e.currentTarget;
        if (lang.startsWith('uk')) _speakWithLang(text, lang, btn);
        else speak(text, btn);
      }}
    >🔊</button>
  );
}

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

export function openAdaptiveQuiz(): void { _open?.(); }
export function closeAdaptiveQuiz(): void { _close?.(); }

export function AdaptiveQuizPage(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [deck, setDeck] = useState<WordEntry[]>([]);
  const [idx, setIdx] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [difficulty, setDifficulty] = useState(START_DIFF);
  const [qData, setQData] = useState<QData | null>(null);
  const [answered, setAnswered] = useState(false);
  const [chosen, setChosen] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(timeLimitFor(START_DIFF));
  const [completed, setCompleted] = useState(false);
  const startedAt = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const showFinal = isOpen && deck.length > 0 && idx >= deck.length;

  const stopTimer = (): void => { if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; } };

  const checkAnswer = (opt: string | null): void => {
    if (answered) return;
    stopTimer();
    setAnswered(true); setChosen(opt);
    if (!qData) return;
    const elapsedMs = performance.now() - startedAt.current;
    const limitMs = timeLimitFor(difficulty) * 1000;
    const isCorrect = opt !== null && opt === qData.answer;
    if (isCorrect) {
      setCorrect(c => c + 1);
      try { addCombo(); awardXP(5); } catch (e) {}
      recordModeAnswer('adaptive-quiz', true);
      const fast = elapsedMs < limitMs * 0.5;
      if (fast) setDifficulty(d => Math.min(MAX_DIFF, d + 1));
    } else {
      setWrong(w => w + 1);
      try { breakCombo(); } catch (e) {}
      recordMistake(qData.w[0]);
      recordModeAnswer('adaptive-quiz', false);
      setDifficulty(d => Math.max(MIN_DIFF, d - 1));
    }
  };

  useEffect(() => {
    _open = () => {
      setIsOpen(true);
      const d = buildDeck();
      setDeck(d);
      setIdx(0); setCorrect(0); setWrong(0); setCompleted(false);
      setAnswered(false); setChosen(null);
      setDifficulty(START_DIFF);
      setQData(d.length ? buildQuestion(d[0], START_DIFF) : null);
      const overlay = document.getElementById('aq-overlay');
      overlay?.classList.add('open');
    };
    _close = () => {
      stopTimer();
      setIsOpen(false);
      document.getElementById('aq-overlay')?.classList.remove('open');
    };
    return () => { _open = null; _close = null; stopTimer(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Per-question countdown timer; auto-submits as wrong when it hits zero.
  useEffect(() => {
    if (!isOpen || showFinal || !qData || answered) return;
    startedAt.current = performance.now();
    const limit = timeLimitFor(difficulty);
    setTimeLeft(limit);
    timerRef.current = setInterval(() => {
      setTimeLeft(tl => {
        if (tl <= 1) { checkAnswer(null); return 0; }
        return tl - 1;
      });
    }, 1000);
    return stopTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qData, isOpen, showFinal]);

  useEffect(() => {
    if (showFinal && !completed) {
      recordModeComplete('adaptive-quiz');
      setCompleted(true);
    }
  }, [showFinal, completed]);

  const advance = (): void => {
    const newIdx = idx + 1;
    setIdx(newIdx);
    setAnswered(false); setChosen(null);
    if (newIdx < deck.length) setQData(buildQuestion(deck[newIdx], difficulty));
  };

  const restart = (): void => {
    const d = buildDeck();
    setDeck(d);
    setIdx(0); setCorrect(0); setWrong(0); setCompleted(false);
    setAnswered(false); setChosen(null);
    setDifficulty(START_DIFF);
    setQData(d.length ? buildQuestion(d[0], START_DIFF) : null);
  };

  if (!isOpen) return <></>;

  const pct = deck.length > 0 ? Math.round(correct / deck.length * 100) : 0;

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, flexShrink: 0 }}>
        <div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)' }}>{t('adaptiveQuiz.title')}</div>
          <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 2 }}>
            {!showFinal ? `${t('quiz.question')} ${idx + 1} ${t('common.of')} ${deck.length} · ${t('adaptiveQuiz.level')} ${difficulty}/${MAX_DIFF}` : t('quiz.completed')}
          </div>
        </div>
        <button onClick={closeAdaptiveQuiz} style={{ background: 'none', border: 'none', fontSize: '1.3rem', cursor: 'pointer', color: 'var(--text3)', lineHeight: 1 }}>✕</button>
      </div>

      <div style={{ height: 4, background: 'var(--border)', borderRadius: 4, marginBottom: 10, overflow: 'hidden', flexShrink: 0 }}>
        <div style={{ height: '100%', background: 'var(--accent)', borderRadius: 4, transition: 'width .4s ease', width: showFinal ? '100%' : `${deck.length ? idx / deck.length * 100 : 0}%` }} />
      </div>

      {!showFinal && qData && (
        <>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginBottom: 10, flexShrink: 0 }}>
            <span style={{ fontSize: '.82rem', color: '#27ae60', fontWeight: 600 }}>✓ {correct}</span>
            <span style={{ fontSize: '.82rem', color: '#e74c3c', fontWeight: 600 }}>✗ {wrong}</span>
            <span style={{ fontSize: '.82rem', color: timeLeft <= 3 ? '#e74c3c' : 'var(--text2)', fontWeight: 600 }}>⏱ {timeLeft}s</span>
          </div>

          <div style={{ background: 'var(--bg)', borderRadius: 14, padding: '14px 16px', textAlign: 'center', marginBottom: 10 }}>
            <div style={{ fontSize: '.65rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 6 }}>
              {t(`lang.${qData.frontLang.toLowerCase()}` as any)} → {t(`lang.${qData.backLang.toLowerCase()}` as any)}
            </div>
            <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: '1.75rem', color: 'var(--text)', lineHeight: 1.15 }}>
              {qData.question}{qData.frontLang === 'EN' && <SpeakBtn text={qData.question} lang="en-US" />}
            </div>
            <div style={{ fontSize: '.8rem', color: 'var(--accent2)', marginTop: 3 }}>{qData.frontLang === 'EN' ? decodeIpa(qData.w[4] ?? '') : ''}</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 7, flexShrink: 0 }}>
            {qData.opts.map((opt, i) => {
              let cls = 'quiz-option';
              if (answered) {
                if (opt === chosen && opt === qData.answer) cls += ' correct';
                else if (opt === chosen) cls += ' wrong';
                else if (opt === qData.answer) cls += ' reveal';
              }
              return (
                <button key={opt} className={cls} disabled={answered} onClick={() => checkAnswer(opt)}>
                  <span className="opt-num">{i + 1}</span> {answered && opt === chosen ? (opt === qData.answer ? '✓ ' : '✗ ') : ''}{opt}
                </button>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', fontSize: '.88rem', fontWeight: 600, minHeight: 22, marginTop: 8, flexShrink: 0 }}>
            {answered && (
              chosen === qData.answer
                ? <span style={{ color: '#27ae60' }}>{t('quiz.correctMsg')}</span>
                : <span style={{ color: '#e74c3c' }}>{chosen === null ? t('adaptiveQuiz.timeUp') : t('quiz.incorrectMsg')}</span>
            )}
          </div>

          <div style={{ textAlign: 'center', marginTop: 10, flexShrink: 0 }}>
            {answered && (
              <button
                onClick={advance}
                style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '.9rem', fontWeight: 600, padding: '10px 32px', borderRadius: 10, border: 'none', background: 'var(--accent)', color: '#fff', cursor: 'pointer' }}
              >{idx >= deck.length - 1 ? t('quiz.finish') : t('quiz.next')}</button>
            )}
          </div>
        </>
      )}

      {showFinal && (
        <div style={{ textAlign: 'center', padding: '10px 0 4px' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>{pct >= 80 ? '🎯' : pct >= 50 ? '👍' : '💪'}</div>
          <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>{t('adaptiveQuiz.completedTitle')}</div>
          <div style={{ fontSize: '.9rem', color: 'var(--text2)', marginBottom: 18 }}>
            {correct} {t('common.of')} {deck.length} ({pct}%) · {t('adaptiveQuiz.finalLevel')} {difficulty}/{MAX_DIFF}
          </div>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={restart}
              style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '.88rem', fontWeight: 600, padding: '10px 22px', borderRadius: 10, border: '1.5px solid var(--accent)', background: 'none', color: 'var(--accent)', cursor: 'pointer' }}
            >{t('common.tryAgain')}</button>
            <button
              onClick={closeAdaptiveQuiz}
              style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '.88rem', padding: '10px 22px', borderRadius: 10, border: '1.5px solid var(--border)', background: 'none', color: 'var(--text2)', cursor: 'pointer' }}
            >{t('common.close')}</button>
          </div>
        </div>
      )}
    </>
  );
}

bindOverlayOpenClose('btn-adaptive-quiz', 'aq-overlay', () => openAdaptiveQuiz(), closeAdaptiveQuiz);

// Exposed for tests: pure difficulty-mapping helpers, no DOM/React needed.
export { numOptionsFor, timeLimitFor };
