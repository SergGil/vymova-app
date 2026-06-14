// English Words App — js/modes/lesson.tsx
// 📚 LESSON MODE
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { _shuf } from '../core/srs.ts';
import { lev } from '../core/distance.ts';
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import { addCombo, breakCombo, flashCard, getComboMult } from '../features/combo.ts';
import { recordModeComplete, recordMistake, recordModeAnswer } from '../features/game.ts';
import { decodeIpa } from '../core/ui-helpers.ts';
import { speak as _speak } from '../features/speech.ts';
import { t } from '../features/i18n.ts';
import { playSound } from '../core/audio.ts';
import type { WordEntry } from '../../src/types.js';

const N = 5;
const PHASE_COUNT = 3;
function phaseLabels(): string[] { return [t('lesson.phaseFlash'), t('lesson.phaseQuiz'), t('lesson.phaseWrite')]; }

function buildQuizOptions(w: WordEntry): string[] {
  const correct = w[0];
  const pool = _shuf(W.slice() as unknown as WordEntry[]);
  const wrongs: string[] = [];
  const used: Record<string, boolean> = { [w[0].toLowerCase()]: true };
  for (const pw of pool) {
    if (wrongs.length >= 3) break;
    const k = pw[0].toLowerCase();
    if (used[k]) continue; used[k] = true; wrongs.push(pw[0]);
  }
  return _shuf([correct, ...wrongs]);
}

function buildEnExHtml(w: WordEntry): string {
  const enExSrc = w[2] ?? '';
  if (enExSrc.includes('<b>')) return enExSrc;
  const ew = w[0].replace(/\s*\([^)]*\)/g, '').replace(/[.*+?^${}()|\[\]\\]/g, '\\$&');
  const parts = ew.split(/\s+/).filter(Boolean).map(p => p + '\\w*');
  return enExSrc.replace(new RegExp('(' + parts.join('\\s+') + ')', 'i'), '<b>$1</b>');
}

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

export function openLesson(): void { _open?.(); }
export function closeLesson(): void { _close?.(); }

type Result = { text: string; color: string } | null;

export function LessonPage(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [words, setWords] = useState<WordEntry[]>([]);
  const [phase, setPhase] = useState(0);
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState([0, 0, 0]);
  const [flipped, setFlipped] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [options, setOptions] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [input, setInput] = useState('');
  const [result, setResult] = useState<Result>(null);
  const [showFinal, setShowFinal] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const w: WordEntry | null = words[step] ?? null;

  const startLesson = (): void => {
    const pool = _shuf((state.deck.length >= N ? state.deck.slice() : W.slice()) as unknown as WordEntry[]);
    setWords(pool.slice(0, N));
    setPhase(0); setStep(0); setScores([0, 0, 0]);
    setFlipped(false); setAnswered(false); setOptions([]); setSelected(null);
    setInput(''); setResult(null); setShowFinal(false);
  };

  useEffect(() => {
    _open = () => {
      setIsOpen(true);
      startLesson();
      const overlay = document.getElementById('lesson-overlay');
      if (overlay) overlay.style.display = 'flex';
    };
    _close = () => {
      setIsOpen(false);
      const overlay = document.getElementById('lesson-overlay');
      if (overlay) overlay.style.display = 'none';
    };
    return () => { _open = null; _close = null; };
  }, []);

  // Setup step-specific state (quiz options, write focus)
  useEffect(() => {
    if (!isOpen || !w || phase >= PHASE_COUNT) return;
    setFlipped(false); setAnswered(false); setSelected(null); setInput(''); setResult(null);
    if (phase === 1) {
      setOptions(buildQuizOptions(w));
    } else if (phase === 2) {
      setOptions([]);
      setTimeout(() => { try { inputRef.current?.focus(); } catch (e) {} }, 60);
    } else {
      setOptions([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, phase, step]);

  // Record completion once when final screen is shown
  useEffect(() => {
    if (!showFinal) return;
    recordModeComplete('lesson');
    const total = scores[0] + scores[1] + scores[2];
    const pct = Math.round(total / (N * PHASE_COUNT) * 100);
    if (pct >= 80) try { playSound('goal'); } catch (e) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showFinal]);

  const speak = (word: string): void => {
    try { _speak(word, null); } catch (e) {}
  };

  const advance = (): void => {
    let ns = step + 1, np = phase;
    if (ns >= N) { np = phase + 1; ns = 0; }
    if (np >= PHASE_COUNT) { setShowFinal(true); setPhase(np); return; }
    setPhase(np); setStep(ns);
  };

  const reveal = (): void => {
    if (phase !== 0 || flipped || !w) return;
    setFlipped(true);
  };

  const know = (): void => {
    if (phase !== 0) return;
    setScores(s => { const ns = [...s]; ns[0]++; return ns; });
    try { addCombo(); flashCard(true); playSound('know'); } catch (e) {}
    advance();
  };

  const skip = (): void => {
    if (phase !== 0) return;
    try { breakCombo(); playSound('next'); } catch (e) {}
    advance();
  };

  const chooseOption = (opt: string): void => {
    if (answered || !w) return;
    setAnswered(true); setSelected(opt);
    const correct = w[0];
    if (opt === correct) {
      setScores(s => { const ns = [...s]; ns[1]++; return ns; });
      setResult({ text: t('quiz.correctMsg'), color: '#27ae60' });
      try { addCombo(); playSound('know'); } catch (e) {}
      recordModeAnswer('lesson', true);
    } else {
      setResult({ text: `✗ ${t('write.correctAnswerPrefix')} <b>${correct}</b>`, color: '#e74c3c' });
      try { breakCombo(); playSound('next'); } catch (e) {}
      recordMistake(w[0]);
      recordModeAnswer('lesson', false);
    }
  };

  const submitWrite = (): void => {
    if (phase !== 2 || answered || !w) return;
    const inp = input.trim().toLowerCase();
    const correct = w[0].toLowerCase();
    const ok = inp === correct || (correct.length > 3 && lev(inp, correct) <= 1);
    setAnswered(true);
    if (ok) {
      setScores(s => { const ns = [...s]; ns[2]++; return ns; });
      setResult({ text: t('quiz.correctMsg'), color: '#27ae60' });
      try { addCombo(); playSound('know'); } catch (e) {}
      recordModeAnswer('lesson', true);
    } else {
      setResult({ text: `✗ ${t('write.correctAnswerPrefix')} <b>${w[0]}</b>`, color: '#e74c3c' });
      try { breakCombo(); playSound('next'); } catch (e) {}
      recordMistake(w[0]);
      recordModeAnswer('lesson', false);
    }
  };

  // Keyboard shortcuts
  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      const overlay = document.getElementById('lesson-overlay');
      if (overlay?.style.display !== 'flex') return;
      if (e.key === 'Escape') { closeLesson(); return; }
      if ((e.key === 'ArrowRight' || e.key === ' ') && answered && phase > 0 && document.activeElement !== inputRef.current) {
        e.preventDefault(); advance();
      }
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answered, phase, step]);

  if (!isOpen) return <></>;

  const total = phase * N + step;
  const mbarPct = showFinal ? 100 : (total / (PHASE_COUNT * N) * 100);
  const subtitle = showFinal ? t('lesson.completedExcl') : `${t('lesson.step')} ${total + 1} ${t('common.of')} ${PHASE_COUNT * N}`;
  const phaseTag = phaseLabels()[phase] ?? '';

  const finalScores = scores;
  const finalTotal = finalScores[0] + finalScores[1] + finalScores[2];
  const max = N * PHASE_COUNT, pct = Math.round(finalTotal / max * 100);
  const stars = pct >= 95 ? '⭐⭐⭐' : pct >= 65 ? '⭐⭐' : '⭐';
  const finalEmoji = pct === 100 ? '🏆' : pct >= 65 ? '🎉' : '💪';
  const finalTitleText = pct === 100 ? t('quiz.perfectTitle') : pct >= 65 ? t('quiz.greatTitle') : t('quiz.keepTitle');
  const mult = getComboMult(), xp = finalTotal * 5 * mult;

  const nextLabel = (phase === PHASE_COUNT - 1 && step === N - 1) ? t('quiz.finish') : t('write.next');

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)' }} data-i18n="lesson.title">{t('lesson.title')}</div>
          <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 2 }}>{subtitle}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {!showFinal && <span className="lesson-phase-tag">{phaseTag}</span>}
          <button onClick={closeLesson} style={{ background: 'none', border: 'none', fontSize: '1.3rem', cursor: 'pointer', color: 'var(--text3)' }}>✕</button>
        </div>
      </div>

      <div style={{ height: 6, background: 'var(--border)', borderRadius: 4, marginBottom: 20, overflow: 'hidden' }}>
        <div style={{ height: '100%', background: 'var(--accent)', borderRadius: 4, transition: 'width .35s ease', width: `${mbarPct}%` }} />
      </div>

      {!showFinal && w && (
        <>
          <div style={{ background: 'var(--bg)', borderRadius: 14, padding: '20px 16px', textAlign: 'center', marginBottom: 14 }}>
            <div style={{ fontSize: '.65rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 8 }}>
              {phase === 0 ? t('lesson.dirFlash') : phase === 1 ? t('lesson.dirQuiz') : t('lesson.dirWrite')}
            </div>
            <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: '2rem', color: 'var(--text)', lineHeight: 1.15, wordBreak: 'break-word' }}>
              {phase === 0 ? w[0] : w[1]}
              {phase === 0 && <button className="mode-speak" title={t('common.listen')} onClick={(e) => { e.stopPropagation(); speak(w[0]); }}>🔊</button>}
            </div>
            <div style={{ fontSize: '.82rem', color: 'var(--accent2)', marginTop: 4 }}>{phase === 0 ? decodeIpa(w[4] ?? '') : ''}</div>
            {phase === 0 && flipped && (
              <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--border)' }}>
                <div style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--accent)' }}>{w[1]}</div>
                <div style={{ fontSize: '.85rem', color: 'var(--text2)', marginTop: 8, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: buildEnExHtml(w) }} />
                <div style={{ fontSize: '.82rem', color: 'var(--text2)', fontStyle: 'italic', marginTop: 6, lineHeight: 1.5 }}>{w[3] ?? ''}</div>
              </div>
            )}
          </div>

          {phase === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 10 }}>
              {options.map((opt, i) => {
                let cls = 'quiz-option';
                if (selected) {
                  if (opt === selected) cls += opt === w[0] ? ' correct' : ' wrong';
                  else if (opt === w[0]) cls += ' reveal';
                }
                return (
                  <button key={opt} className={cls} disabled={answered} onClick={() => chooseOption(opt)}>
                    <span className="opt-num">{i + 1}</span> {opt}
                  </button>
                );
              })}
            </div>
          )}

          {phase === 2 && (
            <input
              ref={inputRef}
              type="text" autoComplete="off" spellCheck={false}
              placeholder={t('write.placeholder')}
              data-i18n-placeholder="write.placeholder"
              value={input}
              disabled={answered}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') { if (!answered) submitWrite(); else advance(); } }}
              style={{
                display: 'block', width: '100%', padding: '12px 16px',
                border: `2px solid ${answered ? (result?.color ?? 'var(--border)') : 'var(--border)'}`,
                borderRadius: 12, fontSize: '1rem', fontFamily: "'DM Sans',sans-serif", background: 'var(--bg)', color: 'var(--text)',
                outline: 'none', boxSizing: 'border-box', marginBottom: 10, transition: 'border-color .2s',
              }}
            />
          )}

          <div style={{ minHeight: 24, textAlign: 'center', fontSize: '.9rem', fontWeight: 600, marginBottom: 12 }}>
            {result && <span style={{ color: result.color }} dangerouslySetInnerHTML={{ __html: result.text }} />}
          </div>

          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {phase === 0 && !flipped && (
              <button className="btn btn-know" style={{ padding: '10px 22px' }} onClick={reveal} data-i18n="lesson.revealBtn">{t('lesson.revealBtn')}</button>
            )}
            {phase === 0 && flipped && (
              <>
                <button className="btn btn-know" style={{ padding: '10px 22px' }} onClick={know} data-i18n="lesson.knowBtn">{t('lesson.knowBtn')}</button>
                <button className="btn" style={{ padding: '10px 22px' }} onClick={skip} data-i18n="lesson.skipBtn">{t('lesson.skipBtn')}</button>
              </>
            )}
            {phase === 2 && !answered && (
              <button className="btn btn-know" style={{ padding: '10px 22px' }} onClick={submitWrite} data-i18n="write.checkBtn">{t('write.checkBtn')}</button>
            )}
            {(phase === 1 || phase === 2) && answered && (
              <button className="btn btn-know" style={{ padding: '10px 22px' }} onClick={advance}>{nextLabel}</button>
            )}
          </div>
        </>
      )}

      {showFinal && (
        <div style={{ textAlign: 'center', padding: '12px 0 4px' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: 8 }}>{stars}</div>
          <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>{finalEmoji} {finalTitleText}</div>
          <div style={{ fontSize: '.88rem', color: 'var(--text2)', marginBottom: 4 }}>{t('lesson.scoreLine', { total: finalTotal, max, pct })}</div>
          <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent)', marginBottom: 18 }}>+{xp} XP{mult > 1 ? t('lesson.comboSuffix', { n: mult }) : ''}</div>
          <button
            onClick={closeLesson}
            style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '.9rem', fontWeight: 600, padding: '11px 28px', borderRadius: 10, border: 'none', background: 'var(--accent)', color: '#fff', cursor: 'pointer' }}
            data-i18n="lesson.doneBtn"
          >{t('lesson.doneBtn')}</button>
        </div>
      )}
    </>
  );
}

import { bindOverlayOpenClose } from '../features/overlay-utils.ts';
bindOverlayOpenClose('btn-lesson', 'lesson-overlay', openLesson, closeLesson);
