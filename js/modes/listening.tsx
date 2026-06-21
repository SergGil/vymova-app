// Vymova — js/modes/listening.tsx
// 🔊 LISTENING MODE
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { _shuf } from '../core/srs.ts';
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import { addCombo, breakCombo, awardXP } from '../features/combo.ts';
import { recordModeComplete, recordMistake, recordModeAnswer } from '../features/game.ts';
import { t } from '../features/i18n.ts';
import { playSound } from '../core/audio.ts';
import { speak } from '../features/speech.ts';
import type { WordEntry } from '../../src/types.js';
import { esEntry, frEntry, itEntry, ptEntry, deEntry, heEntry, arEntry, plEntry, zhEntry, elEntry, jaEntry, trEntry, nlEntry } from '../features/mode-utils.ts';
import { getKnowLang, getLearnLang } from '../features/lang-pair-select.tsx';

const SIZE = 10;

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

function build(): WordEntry[] {
  const pool = _shuf((state.deck.length ? state.deck.slice() : W.slice()) as WordEntry[]);
  return pool.slice(0, SIZE);
}

function buildOptions(word: WordEntry, knowLang: string): string[] {
  const correct = getWordInLang(word, knowLang);
  const pool = _shuf(W.slice() as unknown as WordEntry[]);
  const wrongs: string[] = [];
  const used: Record<string, boolean> = { [word[0].toLowerCase()]: true };
  for (let i = 0; i < pool.length && wrongs.length < 3; i++) {
    const k = pool[i][0].toLowerCase();
    if (used[k]) continue;
    used[k] = true;
    const opt = getWordInLang(pool[i], knowLang);
    if (!opt || opt === correct) continue;
    wrongs.push(opt);
  }
  return _shuf([correct, ...wrongs]);
}

type Result = { correct: boolean; chosen: string; correctAnswer: string } | null;

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

function openListening(): void { _open?.(); }
function closeListening(): void { _close?.(); }

export function ListeningPage(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [deck, setDeck] = useState<WordEntry[]>([]);
  const [idx, setIdx] = useState(0);
  const [ok, setOk] = useState(0);
  const [fail, setFail] = useState(0);
  const [options, setOptions] = useState<string[]>([]);
  const [result, setResult] = useState<Result>(null);
  const [completed, setCompleted] = useState(false);

  const playBtnRef = useRef<HTMLButtonElement>(null);
  const stateRef = useRef({ answered: false, options: [] as string[], deck: [] as WordEntry[], idx: 0 });
  stateRef.current = { answered: !!result, options, deck, idx };

  const word: WordEntry | null = deck[idx] ?? null;
  const showFinal = isOpen && idx >= deck.length && deck.length > 0;

  const playWord = (): void => {
    if (!word) return;
    const learnWord = getWordInLang(word, getLearnLang());
    try { speak(learnWord || word[0], playBtnRef.current as HTMLElement); }
    catch (e) { playBtnRef.current?.classList.remove('on'); }
  };

  const startGame = (): void => {
    const d = build();
    setDeck(d);
    setIdx(0);
    setOk(0);
    setFail(0);
    setResult(null);
    setCompleted(false);
  };

  useEffect(() => {
    _open = () => {
      setIsOpen(true);
      startGame();
      const overlay = document.getElementById('listen-overlay');
      if (overlay) overlay.style.display = 'flex';
    };
    _close = () => {
      setIsOpen(false);
      const overlay = document.getElementById('listen-overlay');
      if (overlay) overlay.style.display = 'none';
      try { window.speechSynthesis?.cancel(); } catch (e) {}
    };
    return () => { _open = null; _close = null; };
  }, []);

  // Regenerate options + speak word when moving to a new question
  useEffect(() => {
    if (!isOpen || !word) return;
    setOptions(buildOptions(word, getKnowLang()));
    setResult(null);
    const tmr = setTimeout(playWord, 400);
    return () => clearTimeout(tmr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, idx, deck]);

  // Record completion once when final screen is reached
  useEffect(() => {
    if (showFinal && !completed) {
      recordModeComplete('listen');
      setCompleted(true);
    }
  }, [showFinal, completed]);

  // Keyboard shortcuts
  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      if (!isOpen) return;
      if (e.key === 'Escape') { closeListening(); return; }
      const { answered, options: opts, idx: curIdx, deck: curDeck } = stateRef.current;
      if (e.key === ' ' && !answered) { e.preventDefault(); playWord(); }
      if (e.key === 'ArrowRight' && answered) { e.preventDefault(); setIdx(curIdx + 1); }
      if (['1', '2', '3', '4'].includes(e.key) && !answered) {
        const i = parseInt(e.key, 10) - 1;
        const opt = opts[i];
        if (opt !== undefined && curIdx < curDeck.length) selectOption(opt);
      }
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const selectOption = (opt: string): void => {
    if (!word || result) return;
    const correct = getWordInLang(word, getKnowLang());
    if (opt === correct) {
      setOk(o => o + 1);
      setResult({ correct: true, chosen: opt, correctAnswer: correct });
      try { addCombo(); awardXP(5); playSound('know'); } catch (e) {}
      recordModeAnswer('listen', true);
    } else {
      setFail(f => f + 1);
      setResult({ correct: false, chosen: opt, correctAnswer: correct });
      try { breakCombo(); playSound('next'); } catch (e) {}
      recordMistake(word[0]);
      recordModeAnswer('listen', false);
    }
  };

  const pct = deck.length ? Math.round(ok / deck.length * 100) : 0;
  const finalEmoji = pct === 100 ? '🏆' : pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '💪';
  const finalTitle = pct === 100 ? t('quiz.perfectTitle') : pct >= 80 ? t('quiz.greatTitle') : pct >= 60 ? t('quiz.goodTitle') : t('listen.keepGoingTitle');

  return (
    <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)' }} data-i18n="listen.title">🔊 {t('listen.title').replace(/^🔊\s*/, '')}</div>
            <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 2 }}>
              {!showFinal && word ? `${t('listen.word')} ${idx + 1} ${t('common.of')} ${deck.length}` : t('write.completed')}
            </div>
          </div>
          <button onClick={closeListening} style={{ background: 'none', border: 'none', fontSize: '1.3rem', cursor: 'pointer', color: 'var(--text3)' }}>✕</button>
        </div>

        <div style={{ height: 4, background: 'var(--border)', borderRadius: 4, marginBottom: 18, overflow: 'hidden' }}>
          <div style={{ height: '100%', background: 'var(--accent)', borderRadius: 4, transition: 'width .4s', width: showFinal ? '100%' : `${deck.length ? idx / deck.length * 100 : 0}%` }} />
        </div>

        {!showFinal && (
          <>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginBottom: 18 }}>
              <span style={{ fontSize: '.82rem', color: '#27ae60', fontWeight: 600 }}>✓ {ok}</span>
              <span style={{ fontSize: '.82rem', color: '#e74c3c', fontWeight: 600 }}>✗ {fail}</span>
            </div>

            <div style={{ textAlign: 'center', marginBottom: 16 }}>
              <button ref={playBtnRef} className="listen-play-btn" onClick={playWord}>🔊</button>
              <div style={{ fontSize: '.78rem', color: 'var(--text3)' }} data-i18n="listen.playHint">{t('listen.playHint')}</div>
              <div style={{ fontSize: '.72rem', color: 'var(--text3)', marginTop: 3 }}>
                <kbd style={{ background: 'var(--border)', borderRadius: 4, padding: '1px 5px', fontSize: '.68rem' }} data-i18n="kbd.space">{t('kbd.space')}</kbd> <span data-i18n="listen.repeatHint">{t('listen.repeatHint')}</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {options.map((opt, i) => {
                let cls = 'quiz-option';
                if (result) {
                  if (opt === result.chosen) cls += result.correct ? ' correct' : ' wrong';
                  else if (opt === result.correctAnswer && !result.correct) cls += ' reveal';
                }
                return (
                  <button
                    key={opt}
                    className={cls}
                    disabled={!!result}
                    onClick={() => selectOption(opt)}
                  >
                    <span className="opt-num">{i + 1}</span> {opt}
                  </button>
                );
              })}
            </div>

            <div style={{ minHeight: 24, textAlign: 'center', fontSize: '.9rem', fontWeight: 600, marginTop: 10 }}>
              {result && word && (
                result.correct
                  ? <span style={{ color: '#27ae60' }}>{t('quiz.correctMsg')} — <b>{getWordInLang(word, getLearnLang()) || word[0]}</b></span>
                  : <span style={{ color: '#e74c3c' }}>✗ {t('listen.wrongPrefix')} <b>{getWordInLang(word, getLearnLang()) || word[0]}</b> — «{result.correctAnswer}»</span>
              )}
            </div>

            <div style={{ textAlign: 'center', marginTop: 12 }}>
              <button
                style={{ display: result ? 'inline-block' : 'none', fontFamily: "'DM Sans',sans-serif", fontSize: '.9rem', fontWeight: 600, padding: '11px 32px', borderRadius: 10, border: 'none', background: 'var(--accent)', color: '#fff', cursor: 'pointer' }}
                onClick={() => setIdx(idx + 1)}
              >
                {idx >= deck.length - 1 ? t('quiz.finish') : t('write.next')}
              </button>
            </div>
          </>
        )}

        {showFinal && (
          <div style={{ textAlign: 'center', padding: '10px 0 4px' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>{finalEmoji}</div>
            <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>{finalTitle}</div>
            <div style={{ fontSize: '.9rem', color: 'var(--text2)', marginBottom: 18 }}>{ok} {t('common.of')} {deck.length} ({pct}%)</div>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '.88rem', fontWeight: 600, padding: '10px 22px', borderRadius: 10, border: '1.5px solid var(--accent)', background: 'none', color: 'var(--accent)', cursor: 'pointer' }}
                onClick={startGame}
                data-i18n="common.tryAgain"
              >🔄 {t('common.tryAgain').replace(/^🔄\s*/, '')}</button>
              <button
                style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '.88rem', padding: '10px 22px', borderRadius: 10, border: '1.5px solid var(--border)', background: 'none', color: 'var(--text2)', cursor: 'pointer' }}
                onClick={closeListening}
                data-i18n="common.close"
              >{t('common.close')}</button>
            </div>
          </div>
        )}
    </>
  );
}

import { bindOverlayOpenClose } from '../features/overlay-utils.ts';
bindOverlayOpenClose('btn-listen', 'listen-overlay', openListening, closeListening);
