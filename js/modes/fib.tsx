// English Words App — js/modes/fib.tsx
// ✏️ FILL IN BLANK MODE
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { _shuf } from '../core/srs.ts';
import { lev } from '../core/distance.ts';
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import { addCombo, breakCombo } from '../features/combo.ts';
import { recordModeComplete, recordMistake, recordModeAnswer } from '../features/game.ts';
import { t } from '../features/i18n.ts';
import { playSound } from '../core/audio.ts';
import { speak } from '../features/speech.ts';
import type { WordEntry } from '../../src/types.js';

const SIZE = 10;
type BlankItem = { sentence: string; answer: string; base: string };
type FibEntry  = { w: WordEntry; blank: BlankItem };

function makeBlank(w: WordEntry): BlankItem | null {
  let sentence = w[2] ?? '';
  if (!sentence || sentence.length < 5) return null;
  if (!sentence.includes('<b>')) {
    const esc = w[0].replace(/[.*+?^${}()|\[\]\\]/g, '\\$&');
    sentence = sentence.replace(new RegExp('(' + esc + ')', 'i'), '<b>$1</b>');
  }
  const m = sentence.match(/<b>(.*?)<\/b>/i);
  if (!m) return null;
  return {
    sentence: sentence.replace(/<b>.*?<\/b>/i, '<span class="fib-blank">___</span>'),
    answer: m[1], base: w[0],
  };
}

function build(): FibEntry[] {
  const pool = _shuf((state.deck.length ? state.deck.slice() : W.slice()) as unknown as WordEntry[]);
  const deck: FibEntry[] = [];
  for (let i = 0; i < pool.length && deck.length < SIZE; i++) {
    const b = makeBlank(pool[i]);
    if (b) deck.push({ w: pool[i], blank: b });
  }
  return deck;
}

function renderSentence(item: FibEntry, correct: boolean | null): string {
  if (correct === null) return item.blank.sentence;
  const hlStyle = correct
    ? 'background:rgba(39,174,96,.15);border-color:#27ae60;color:#27ae60'
    : 'background:rgba(231,76,60,.12);border-color:#e74c3c;color:#e74c3c';
  return item.blank.sentence.replace(
    /<span class="fib-blank">.*?<\/span>/,
    `<span class="fib-blank" style="${hlStyle};border-radius:4px;padding:0 4px;">${item.blank.answer}</span>`
  );
}

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

export function openFib(): void { _open?.(); }
export function closeFib(): void { _close?.(); }

export function FibPage(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [deck, setDeck] = useState<FibEntry[]>([]);
  const [idx, setIdx] = useState(0);
  const [ok, setOk] = useState(0);
  const [fail, setFail] = useState(0);
  const [input, setInput] = useState('');
  const [result, setResult] = useState<boolean | null>(null); // null = unanswered, true/false = correct/incorrect
  const [hint, setHint] = useState('');
  const [completed, setCompleted] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const stateRef = useRef({ result, idx, deck });
  stateRef.current = { result, idx, deck };

  const item: FibEntry | null = deck[idx] ?? null;
  const showFinal = isOpen && deck.length > 0 && idx >= deck.length;
  const noSentences = isOpen && deck.length === 0;

  const startGame = (): void => {
    const d = build();
    setDeck(d);
    setIdx(0);
    setOk(0);
    setFail(0);
    setInput('');
    setResult(null);
    setHint('');
    setCompleted(false);
  };

  useEffect(() => {
    _open = () => {
      setIsOpen(true);
      startGame();
      const overlay = document.getElementById('fib-overlay');
      if (overlay) overlay.style.display = 'flex';
    };
    _close = () => {
      setIsOpen(false);
      const overlay = document.getElementById('fib-overlay');
      if (overlay) overlay.style.display = 'none';
    };
    return () => { _open = null; _close = null; };
  }, []);

  // Focus input on new question
  useEffect(() => {
    if (!isOpen || !item) return;
    const tmr = setTimeout(() => { try { inputRef.current?.focus(); } catch (e) {} }, 60);
    return () => clearTimeout(tmr);
  }, [isOpen, idx, item]);

  // Record completion once when final screen is reached
  useEffect(() => {
    if (showFinal && !completed) {
      recordModeComplete('fib');
      setCompleted(true);
    }
  }, [showFinal, completed]);

  const advanceQ = (): void => {
    setIdx(i => i + 1);
    setInput('');
    setResult(null);
    setHint('');
  };

  const submit = (): void => {
    if (!item || result !== null) return;
    const inp = input.trim().toLowerCase();
    const ans = item.blank.answer.toLowerCase();
    const base = item.blank.base.toLowerCase();
    const okAnswer = inp === ans || inp === base
      || (ans.length > 3 && lev(inp, ans) <= 1)
      || (base.length > 3 && lev(inp, base) <= 1);
    setResult(okAnswer);
    if (okAnswer) {
      setOk(o => o + 1);
      try { addCombo(); playSound('know'); } catch (e) {}
      recordModeAnswer('fib', true);
    } else {
      setFail(f => f + 1);
      try { breakCombo(); playSound('next'); } catch (e) {}
      recordMistake(item.blank.base);
      recordModeAnswer('fib', false);
    }
  };

  const showHint = (): void => {
    if (result !== null || !item) return;
    const a = item.blank.answer;
    setHint('💡 ' + a.slice(0, Math.ceil(a.length / 2)) + '...');
  };

  const speakCorrectWord = (): void => {
    if (!item) return;
    try { speak(item.blank.answer, inputRef.current as unknown as HTMLElement); } catch (e) {}
  };

  // Keyboard shortcuts
  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      if (!isOpen) return;
      if (e.key === 'Escape') { closeFib(); return; }
      const { result: curResult, idx: curIdx, deck: curDeck } = stateRef.current;
      if ((e.key === 'ArrowRight' || e.key === ' ') && curResult !== null && document.activeElement !== inputRef.current) {
        if (curIdx < curDeck.length) { e.preventDefault(); advanceQ(); }
      }
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const pct = deck.length > 0 ? Math.round(ok / deck.length * 100) : 0;
  const finalEmoji = pct === 100 ? '🏆' : pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '💪';
  const finalTitle = pct === 100 ? t('quiz.perfectTitle') : pct >= 80 ? t('quiz.greatTitle') : pct >= 60 ? t('quiz.goodTitle') : t('listen.keepGoingTitle');

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)' }} data-i18n="fib.title">{t('fib.title')}</div>
          <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 2 }}>
            {!showFinal && !noSentences && item ? `${t('fib.sentence')} ${idx + 1} ${t('common.of')} ${deck.length}` : showFinal ? t('write.completed') : ''}
          </div>
        </div>
        <button onClick={closeFib} style={{ background: 'none', border: 'none', fontSize: '1.3rem', cursor: 'pointer', color: 'var(--text3)' }}>✕</button>
      </div>

      <div style={{ height: 4, background: 'var(--border)', borderRadius: 4, marginBottom: 18, overflow: 'hidden' }}>
        <div style={{ height: '100%', background: 'var(--accent)', borderRadius: 4, transition: 'width .4s', width: showFinal ? '100%' : `${deck.length ? idx / deck.length * 100 : 0}%` }} />
      </div>

      {noSentences && (
        <div style={{ color: '#e74c3c', fontSize: '.9rem' }}>{t('fib.noSentences')}</div>
      )}

      {!noSentences && !showFinal && item && (
        <>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginBottom: 14 }}>
            <span style={{ fontSize: '.82rem', color: '#27ae60', fontWeight: 600 }}>✓ {ok}</span>
            <span style={{ fontSize: '.82rem', color: '#e74c3c', fontWeight: 600 }}>✗ {fail}</span>
          </div>

          <div style={{ background: 'var(--bg)', borderRadius: 14, padding: '20px 16px', textAlign: 'center', marginBottom: 14 }}>
            <div style={{ fontSize: '.65rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 10 }}>Вставте пропущене слово</div>
            <div className="fib-sentence" dangerouslySetInnerHTML={{ __html: renderSentence(item, result) }} />
            {hint && <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 8, fontStyle: 'italic' }}>{hint}</div>}
          </div>

          <input
            ref={inputRef}
            type="text"
            autoComplete="off"
            spellCheck={false}
            placeholder={t('fib.placeholder')}
            data-i18n-placeholder="fib.placeholder"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                if (result === null) submit(); else advanceQ();
              }
            }}
            style={{
              width: '100%', padding: '12px 16px',
              border: `2px solid ${result === null ? 'var(--border)' : result ? '#27ae60' : '#e74c3c'}`,
              borderRadius: 12, fontSize: '1rem', fontFamily: "'DM Sans',sans-serif",
              background: 'var(--bg)', color: 'var(--text)', outline: 'none',
              boxSizing: 'border-box', marginBottom: 10, transition: 'border-color .2s',
            }}
          />

          <div style={{ minHeight: 24, textAlign: 'center', fontSize: '.9rem', fontWeight: 600, marginBottom: 10 }}>
            {result === true && <span style={{ color: '#27ae60' }}>{t('quiz.correctMsg')}</span>}
            {result === false && (
              <>
                <span style={{ color: '#e74c3c' }}>{t('quiz.incorrectMsg')}</span>
                <button className="mode-speak" title={t('common.listen')} onClick={speakCorrectWord}>🔊</button>
              </>
            )}
          </div>

          <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
            {result === null && (
              <button
                onClick={submit}
                style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '.9rem', fontWeight: 600, padding: '11px 28px', borderRadius: 10, border: 'none', background: 'var(--accent)', color: '#fff', cursor: 'pointer' }}
                data-i18n="write.checkBtn"
              >{t('write.checkBtn')}</button>
            )}
            {result !== null && (
              <button
                onClick={advanceQ}
                autoFocus
                style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '.9rem', fontWeight: 600, padding: '11px 28px', borderRadius: 10, border: 'none', background: 'var(--accent)', color: '#fff', cursor: 'pointer' }}
              >{idx >= deck.length - 1 ? t('quiz.finish') : t('quiz.next')}</button>
            )}
            <button
              onClick={showHint}
              style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '.82rem', padding: '11px 14px', borderRadius: 10, border: '1.5px solid var(--border)', background: 'none', color: 'var(--text3)', cursor: 'pointer' }}
            >💡</button>
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
              onClick={closeFib}
              data-i18n="common.close"
            >{t('common.close')}</button>
          </div>
        </div>
      )}
    </>
  );
}

import { bindOverlayOpenClose } from '../features/overlay-utils.ts';
bindOverlayOpenClose('btn-fib', 'fib-overlay', openFib, closeFib);
