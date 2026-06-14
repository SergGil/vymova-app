// English Words App — js/modes/quiz.tsx
// 🧠 QUIZ MODE
import { useEffect, useState, type ReactElement } from 'react';
import { _shuf } from '../core/srs.ts';
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import { addCombo, breakCombo } from '../features/combo.ts';
import { recordModeComplete, recordMistake, recordModeAnswer } from '../features/game.ts';
import { decodeIpa } from '../core/ui-helpers.ts';
import { speak, _speakWithLang } from '../features/speech.ts';
import { t, getLang } from '../features/i18n.ts';
import type { WordEntry } from '../../src/types.js';

const QUIZ_SIZE = 10, QUICK_SIZE = 5, NUM_OPTIONS = 4;

function buildDeck(sourceWords?: WordEntry[] | null, maxSize = QUIZ_SIZE): WordEntry[] {
  const src = sourceWords?.length ? sourceWords : (state.deck.length ? state.deck : W as unknown as WordEntry[]);
  return _shuf(src.slice()).slice(0, Math.min(maxSize, src.length));
}

function getWrongOptions(correctWord: WordEntry, answer: string, isEnToUa: boolean): string[] {
  const shuffled = _shuf(W.slice() as unknown as WordEntry[]);
  const options: string[] = [];
  const used = new Set([correctWord[0].toLowerCase()]);
  for (const w of shuffled) {
    if (options.length >= NUM_OPTIONS - 1) break;
    if (used.has(w[0].toLowerCase())) continue;
    used.add(w[0].toLowerCase());
    const opt = isEnToUa ? w[1] : w[0];
    if (opt === answer) continue;
    options.push(opt);
  }
  return options;
}

function _pluralUa(n: number, one: string, few: string, many: string): string {
  const mod10 = n % 10, mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
  return many;
}
function _countLabel(n: number, one: string, few: string, many: string): string {
  const word = getLang() === 'ua' ? _pluralUa(n, one, few, many) : (n === 1 ? one : few);
  return `${n} ${word}`;
}
function _answerCount(n: number): string {
  return _countLabel(n, t('quiz.answer'), t('quiz.answers'), t('quiz.answersGen'));
}
function _mistakeCount(n: number): string {
  return _countLabel(n, t('quiz.mistake'), t('quiz.mistakes'), t('quiz.mistakesGen'));
}

type QData = { w: WordEntry; isEnToUa: boolean; question: string; answer: string; opts: string[] };

function buildQuestion(w: WordEntry): QData {
  const isEnToUa = Math.random() < 0.5;
  const question = isEnToUa ? w[0] : w[1];
  const answer = isEnToUa ? w[1] : w[0];
  const opts = _shuf([answer, ...getWrongOptions(w, answer, isEnToUa)]);
  return { w, isEnToUa, question, answer, opts };
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

let _open: ((src?: WordEntry[] | null, maxSize?: number) => void) | null = null;
let _close: (() => void) | null = null;

export function openQuiz(src?: WordEntry[] | null, maxSize?: number): void { _open?.(src, maxSize); }
export function closeQuiz(): void { _close?.(); }
export function openQuickQuiz(): void { openQuiz(null, QUICK_SIZE); }

export function QuizPage(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [deck, setDeck] = useState<WordEntry[]>([]);
  const [idx, setIdx] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [wrongWords, setWrongWords] = useState<WordEntry[]>([]);
  const [qData, setQData] = useState<QData | null>(null);
  const [answered, setAnswered] = useState(false);
  const [chosen, setChosen] = useState<string | null>(null);
  const [isRetrySession, setIsRetrySession] = useState(false);
  const [completed, setCompleted] = useState(false);

  const showFinal = isOpen && deck.length > 0 && idx >= deck.length;

  useEffect(() => {
    _open = (src, maxSize) => {
      setIsOpen(true);
      setIsRetrySession(false);
      const d = buildDeck(src, maxSize);
      setDeck(d);
      setIdx(0); setCorrect(0); setWrong(0); setWrongWords([]); setCompleted(false);
      setAnswered(false); setChosen(null);
      setQData(d.length ? buildQuestion(d[0]) : null);
      const overlay = document.getElementById('quiz-overlay');
      overlay?.classList.add('open');
      const panel = document.getElementById('quiz-panel');
      if (panel) panel.scrollTop = 0;
    };
    _close = () => {
      setIsOpen(false);
      document.getElementById('quiz-overlay')?.classList.remove('open');
    };
    return () => { _open = null; _close = null; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (showFinal && !completed) {
      recordModeComplete('quiz');
      setCompleted(true);
    }
  }, [showFinal, completed]);

  const advance = (): void => {
    const newIdx = idx + 1;
    setIdx(newIdx);
    setAnswered(false); setChosen(null);
    if (newIdx < deck.length) setQData(buildQuestion(deck[newIdx]));
  };

  const checkAnswer = (opt: string): void => {
    if (answered || !qData) return;
    setAnswered(true); setChosen(opt);
    if (opt === qData.answer) {
      setCorrect(c => c + 1);
      try { addCombo(); } catch (e) {}
      recordModeAnswer('quiz', true);
    } else {
      setWrong(w => w + 1);
      setWrongWords(ws => [...ws, qData.w]);
      try { breakCombo(); } catch (e) {}
      recordMistake(qData.w[0]);
      recordModeAnswer('quiz', false);
    }
  };

  const restart = (): void => {
    setIsRetrySession(false);
    const d = buildDeck(null);
    setDeck(d);
    setIdx(0); setCorrect(0); setWrong(0); setWrongWords([]); setCompleted(false);
    setAnswered(false); setChosen(null);
    setQData(d.length ? buildQuestion(d[0]) : null);
  };

  const restartWrong = (): void => {
    const wc = wrongWords.slice();
    setIsRetrySession(true);
    const d = buildDeck(wc);
    setDeck(d);
    setIdx(0); setCorrect(0); setWrong(0); setWrongWords([]); setCompleted(false);
    setAnswered(false); setChosen(null);
    setQData(d.length ? buildQuestion(d[0]) : null);
  };

  // Keyboard shortcuts
  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      const overlay = document.getElementById('quiz-overlay');
      if (!overlay?.classList.contains('open')) return;
      if (e.key === 'Escape') { closeQuiz(); return; }
      if ((e.key === 'ArrowRight' || e.key === ' ') && answered) { e.preventDefault(); advance(); return; }
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

  if (!isOpen) return <></>;

  const pct = deck.length > 0 ? Math.round(correct / deck.length * 100) : 0;
  let finalEmoji = '', finalTitle = '', finalDesc = '';
  const scoreLine = `${_answerCount(correct)} ${t('common.of')} ${deck.length} (${pct}%)`;
  if (isRetrySession && pct === 100) {
    finalEmoji = '🎯'; finalTitle = t('quiz.fixedTitle');
    finalDesc = deck.length === 1 ? t('quiz.fixedDescSingle') : t('quiz.fixedDescAll', { n: _answerCount(deck.length) });
  } else if (pct === 100) {
    finalEmoji = '🏆'; finalTitle = t('quiz.perfectTitle');
    finalDesc = deck.length === 1 ? t('quiz.perfectDescSingle') : t('quiz.perfectDescAll', { n: _answerCount(deck.length) });
  } else if (pct >= 80) {
    finalEmoji = '🎉'; finalTitle = t('quiz.greatTitle'); finalDesc = scoreLine;
  } else if (pct >= 60) {
    finalEmoji = '👍'; finalTitle = t('quiz.goodTitle'); finalDesc = scoreLine;
  } else if (pct >= 40) {
    finalEmoji = '📚'; finalTitle = t('quiz.keepTitle'); finalDesc = `${scoreLine}. ${t('quiz.keepDescSuffix')}`;
  } else {
    finalEmoji = '💪'; finalTitle = t('quiz.encourageTitle'); finalDesc = `${scoreLine}. ${t('quiz.encourageDescSuffix')}`;
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, flexShrink: 0 }}>
        <div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)' }} data-i18n="quiz.title">{t('quiz.title')}</div>
          <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 2 }}>
            {!showFinal ? `${t('quiz.question')} ${idx + 1} ${t('common.of')} ${deck.length}` : t('quiz.completed')}
          </div>
        </div>
        <button onClick={closeQuiz} style={{ background: 'none', border: 'none', fontSize: '1.3rem', cursor: 'pointer', color: 'var(--text3)', lineHeight: 1 }}>✕</button>
      </div>

      <div style={{ height: 4, background: 'var(--border)', borderRadius: 4, marginBottom: 10, overflow: 'hidden', flexShrink: 0 }}>
        <div style={{ height: '100%', background: 'var(--accent)', borderRadius: 4, transition: 'width .4s ease', width: showFinal ? '100%' : `${deck.length ? idx / deck.length * 100 : 0}%` }} />
      </div>

      {!showFinal && qData && (
        <>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginBottom: 10, flexShrink: 0 }}>
            <span style={{ fontSize: '.82rem', color: '#27ae60', fontWeight: 600 }}>✓ {correct} <span data-i18n="quiz.correctLbl">{t('quiz.correctLbl')}</span></span>
            <span style={{ fontSize: '.82rem', color: '#e74c3c', fontWeight: 600 }}>✗ {wrong} <span data-i18n="quiz.wrongLbl">{t('quiz.wrongLbl')}</span></span>
          </div>

          <div style={{ background: 'var(--bg)', borderRadius: 14, padding: '14px 16px', textAlign: 'center', marginBottom: 10 }}>
            <div style={{ fontSize: '.65rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 6 }}>
              {qData.isEnToUa ? t('quiz.enToUa') : t('quiz.uaToEn')}
            </div>
            <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: '1.75rem', color: 'var(--text)', lineHeight: 1.15 }}>
              {qData.question}{qData.isEnToUa && <SpeakBtn text={qData.question} lang="en-US" />}
            </div>
            <div style={{ fontSize: '.8rem', color: 'var(--accent2)', marginTop: 3 }}>{qData.isEnToUa ? decodeIpa(qData.w[4] ?? '') : ''}</div>
            {answered && (
              <div style={{ fontSize: '.72rem', color: 'var(--text3)', marginTop: 3, fontStyle: 'italic', lineHeight: 1.4 }}>
                {(qData.w[2] ?? '') && (
                  <div style={{ fontSize: '.8rem', color: 'var(--text2)', fontStyle: 'italic', marginBottom: 2 }}>
                    {qData.w[2]}<SpeakBtn text={qData.w[2] ?? ''} lang="en-US" />
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
                : <span style={{ color: '#e74c3c' }}>{t('quiz.incorrectMsg')}</span>
            )}
          </div>

          <div style={{ textAlign: 'center', marginTop: 10, flexShrink: 0 }}>
            {answered && (
              <button
                onClick={advance}
                style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '.9rem', fontWeight: 600, padding: '10px 32px', borderRadius: 10, border: 'none', background: 'var(--accent)', color: '#fff', cursor: 'pointer', transition: 'opacity .15s' }}
              >{idx >= deck.length - 1 ? t('quiz.finish') : t('quiz.next')}</button>
            )}
          </div>
        </>
      )}

      {showFinal && (
        <div style={{ textAlign: 'center', padding: '10px 0 4px' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>{finalEmoji}</div>
          <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>{finalTitle}</div>
          <div style={{ fontSize: '.9rem', color: 'var(--text2)', marginBottom: 18 }}>{finalDesc}</div>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={restart}
              style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '.88rem', fontWeight: 600, padding: '10px 22px', borderRadius: 10, border: '1.5px solid var(--accent)', background: 'none', color: 'var(--accent)', cursor: 'pointer' }}
              data-i18n="common.tryAgain"
            >{t('common.tryAgain')}</button>
            {wrongWords.length > 0 && (
              <button
                onClick={restartWrong}
                style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '.88rem', fontWeight: 600, padding: '10px 22px', borderRadius: 10, border: '1.5px solid var(--accent2)', background: 'none', color: 'var(--accent2)', cursor: 'pointer' }}
              >✗ {t('quiz.restartWrongPrefix')} {_mistakeCount(wrongWords.length)}</button>
            )}
            <button
              onClick={closeQuiz}
              style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '.88rem', padding: '10px 22px', borderRadius: 10, border: '1.5px solid var(--border)', background: 'none', color: 'var(--text2)', cursor: 'pointer' }}
              data-i18n="common.close"
            >{t('common.close')}</button>
          </div>
        </div>
      )}
    </>
  );
}

import { bindOverlayOpenClose } from '../features/overlay-utils.ts';
bindOverlayOpenClose('btn-quiz', 'quiz-overlay', () => openQuiz(null), closeQuiz);
