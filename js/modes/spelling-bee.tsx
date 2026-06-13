// English Words App — js/modes/spelling-bee.tsx
// 🐝 Spelling Bee: hear the word via TTS → type its spelling
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { _shuf } from '../core/srs.ts';
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import { lev } from '../core/distance.ts';
import { addCombo, breakCombo } from '../features/combo.ts';
import { recordModeComplete, recordModeAnswer, recordMistake } from '../features/game.ts';
import { decodeIpa } from '../core/ui-helpers.ts';
import type { SpeakFn } from '../core/ui-helpers.ts';
import { t } from '../features/i18n.ts';
import type { WordEntry } from '../../src/types.js';

const SIZE = 10;
const HINTS = 3;

type Result = 'ok' | 'almost' | 'wrong' | null;

function build(): WordEntry[] {
  const pool = _shuf((state.deck.length ? state.deck.slice() : W.slice()) as unknown as WordEntry[]);
  const filtered = pool.filter(w => w[0].length >= 4);
  return (filtered.length >= SIZE ? filtered : pool).slice(0, SIZE);
}

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

export function openSpellingBee(): void { _open?.(); }
export function closeSpellingBee(): void { _close?.(); }

export function SpellingBeePage(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [deck, setDeck] = useState<WordEntry[]>([]);
  const [idx, setIdx] = useState(0);
  const [ok, setOk] = useState(0);
  const [fail, setFail] = useState(0);
  const [input, setInput] = useState('');
  const [result, setResult] = useState<Result>(null);
  const [hintsLeft, setHintsLeft] = useState(HINTS);
  const [hint, setHint] = useState('');
  const [emptyWarn, setEmptyWarn] = useState(false);
  const [completed, setCompleted] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const speakBtnRef = useRef<HTMLButtonElement>(null);

  const w: WordEntry | null = deck[idx] ?? null;
  const showFinal = isOpen && deck.length > 0 && idx >= deck.length;

  const speak = (word: string): void => {
    try { (window.speak as SpeakFn | undefined)?.(word, speakBtnRef.current); } catch (e) {}
  };

  const startGame = (): void => {
    setDeck(build());
    setIdx(0);
    setOk(0);
    setFail(0);
    setInput('');
    setResult(null);
    setHintsLeft(HINTS);
    setHint('');
    setEmptyWarn(false);
    setCompleted(false);
  };

  useEffect(() => {
    _open = () => {
      setIsOpen(true);
      startGame();
      const overlay = document.getElementById('bee-overlay');
      if (overlay) overlay.style.display = 'flex';
    };
    _close = () => {
      setIsOpen(false);
      const overlay = document.getElementById('bee-overlay');
      if (overlay) overlay.style.display = 'none';
    };
    return () => { _open = null; _close = null; };
  }, []);

  // Auto-speak + focus on new question
  useEffect(() => {
    if (!isOpen || !w) return;
    const t1 = setTimeout(() => speak(w[0]), 300);
    const t2 = setTimeout(() => { try { inputRef.current?.focus(); } catch (e) {} }, 400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, idx, w]);

  // Record completion once when final screen is reached
  useEffect(() => {
    if (showFinal && !completed) {
      recordModeComplete('spelling');
      setCompleted(true);
    }
  }, [showFinal, completed]);

  // Escape to close
  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      const overlay = document.getElementById('bee-overlay');
      if (e.key === 'Escape' && overlay?.style.display === 'flex') closeSpellingBee();
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, []);

  const advanceQ = (): void => {
    setIdx(i => i + 1);
    setResult(null);
    setInput('');
    setHintsLeft(HINTS);
    setHint('');
    setEmptyWarn(false);
  };

  const submit = (): void => {
    if (!w || result) return;
    const answer = w[0].toLowerCase().trim();
    const inp = input.toLowerCase().trim();
    if (!inp) {
      setEmptyWarn(true);
      setTimeout(() => setEmptyWarn(false), 1500);
      return;
    }
    const isOk = inp === answer || lev(inp, answer) === 0;
    const isClose = inp.length >= 3 && lev(inp, answer) === 1;

    if (isOk) {
      setOk(o => o + 1);
      setResult('ok');
      try { addCombo(); } catch (e) {}
    } else if (isClose) {
      setOk(o => o + 1);
      setResult('almost');
      try { addCombo(); } catch (e) {}
    } else {
      setFail(f => f + 1);
      setResult('wrong');
      recordMistake(w[0]);
      try { breakCombo(); } catch (e) {}
      setTimeout(() => speak(w[0]), 600);
    }
    recordModeAnswer('spelling', isOk || isClose);
  };

  const showHint = (): void => {
    if (result || hintsLeft <= 0 || !w) return;
    const left = hintsLeft - 1;
    setHintsLeft(left);
    const revealCount = Math.ceil(w[0].length * (HINTS - left) / HINTS);
    const h = w[0].slice(0, revealCount) + '_'.repeat(Math.max(0, w[0].length - revealCount));
    setHint(`💡 ${h}`);
  };

  const pct = deck.length > 0 ? Math.round(ok / SIZE * 100) : 0;
  const finalEmoji = pct === 100 ? '🏆' : pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '💪';
  const finalTitle = pct === 100 ? t('quiz.perfectTitle') : pct >= 80 ? t('quiz.greatTitle') : pct >= 60 ? t('quiz.goodTitle') : t('tempo.practiceTitle');

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)' }}>🐝 <span data-i18n="modesPg.beeName">{t('modesPg.beeName')}</span></div>
          <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 2 }}>
            {!showFinal && w ? `${t('bee.word')} ${idx + 1} ${t('common.of')} ${SIZE}` : showFinal ? t('write.completed') : ''}
          </div>
        </div>
        <button onClick={closeSpellingBee} style={{ background: 'none', border: 'none', fontSize: '1.3rem', cursor: 'pointer', color: 'var(--text3)' }}>✕</button>
      </div>

      <div style={{ height: 4, background: 'var(--border)', borderRadius: 4, marginBottom: 12, overflow: 'hidden' }}>
        <div style={{ height: '100%', background: 'var(--accent)', borderRadius: 4, width: showFinal ? '100%' : `${deck.length ? idx / SIZE * 100 : 0}%`, transition: 'width .4s' }} />
      </div>

      {!showFinal && w && (
        <>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginBottom: 12 }}>
            <span style={{ fontSize: '.82rem', color: '#27ae60', fontWeight: 600 }}>✓ {ok}</span>
            <span style={{ fontSize: '.82rem', color: '#e74c3c', fontWeight: 600 }}>✗ {fail}</span>
          </div>

          <div style={{ background: 'var(--bg)', borderRadius: 12, padding: '14px 16px', textAlign: 'center', marginBottom: 12 }}>
            <div style={{ fontSize: '.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--text3)', marginBottom: 8 }} data-i18n="bee.listenPrompt">{t('bee.listenPrompt')}</div>
            <button
              ref={speakBtnRef}
              onClick={() => speak(w[0])}
              title={t('bee.speakTitle')}
              data-i18n-title="bee.speakTitle"
              style={{ fontSize: '2rem', background: 'var(--accent)', border: 'none', borderRadius: '50%', width: 56, height: 56, cursor: 'pointer', marginBottom: 10, transition: 'transform .1s', boxShadow: '0 4px 14px rgba(0,200,100,.3)' }}
            >🔊</button>
            <div style={{ fontSize: '.95rem', fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>{w[1]}</div>
            <div style={{ fontSize: '.8rem', color: 'var(--accent2)' }}>{decodeIpa(w[4] ?? '')}</div>
          </div>

          {hint && (
            <div style={{ textAlign: 'center', fontSize: '.85rem', color: 'var(--accent)', letterSpacing: '.15em', fontFamily: 'monospace', marginBottom: 8, fontWeight: 700 }}>{hint}</div>
          )}

          <input
            ref={inputRef}
            type="text"
            placeholder={emptyWarn ? t('bee.emptyInput') : t('bee.inputPlaceholder')}
            data-i18n-placeholder="bee.inputPlaceholder"
            autoComplete="off"
            spellCheck={false}
            value={input}
            disabled={!!result}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') { if (!result) submit(); else advanceQ(); }
            }}
            style={{
              width: '100%', padding: '12px 16px',
              border: `2px solid ${emptyWarn ? '#e74c3c' : result === 'ok' ? '#27ae60' : result === 'almost' ? '#f39c12' : result === 'wrong' ? '#e74c3c' : 'var(--border)'}`,
              borderRadius: 12, fontSize: '1rem', fontFamily: 'inherit', background: 'var(--bg)', color: 'var(--text)',
              outline: 'none', boxSizing: 'border-box', marginBottom: 10, textAlign: 'center',
            }}
          />

          <div style={{ textAlign: 'center', fontSize: '.9rem', fontWeight: 600, minHeight: 24, marginBottom: 8 }}>
            {result === 'ok' && <span style={{ color: '#27ae60' }}>{t('quiz.correctMsg')}</span>}
            {result === 'almost' && <span style={{ color: '#f39c12' }} dangerouslySetInnerHTML={{ __html: t('bee.almostMsg', { w: `<b>${w[0]}</b>` }) }} />}
            {result === 'wrong' && <span style={{ color: '#e74c3c' }} dangerouslySetInnerHTML={{ __html: t('bee.wrongMsg', { w: `<b>${w[0]}</b>` }) }} />}
          </div>

          <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
            <button
              onClick={showHint}
              disabled={!!result || hintsLeft <= 0}
              style={{ padding: '9px 14px', borderRadius: 10, border: '1.5px solid var(--border)', background: 'none', color: 'var(--text2)', cursor: 'pointer', fontFamily: 'inherit', fontSize: '.8rem' }}
            >{hintsLeft > 0 ? t('bee.hintBtn', { n: hintsLeft }) : t('bee.hintNone')}</button>
            {!result && (
              <button
                onClick={submit}
                style={{ padding: '9px 24px', borderRadius: 10, border: 'none', background: 'var(--accent)', color: '#fff', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', fontSize: '.88rem' }}
                data-i18n="bee.checkBtn"
              >{t('bee.checkBtn')}</button>
            )}
            {result && (
              <button
                onClick={advanceQ}
                style={{ padding: '9px 24px', borderRadius: 10, border: 'none', background: 'var(--accent)', color: '#fff', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', fontSize: '.88rem' }}
              >{idx >= deck.length - 1 ? t('quiz.finish') : t('quiz.next')}</button>
            )}
          </div>
        </>
      )}

      {showFinal && (
        <div style={{ textAlign: 'center', padding: '10px 0 4px' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>{finalEmoji}</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>{finalTitle}</div>
          <div style={{ fontSize: '.9rem', color: 'var(--text2)', marginBottom: 16 }}>{ok} {t('common.of')} {SIZE} ({pct}%)</div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
            <button
              onClick={startGame}
              style={{ padding: '9px 20px', borderRadius: 10, border: '1.5px solid var(--accent)', background: 'none', color: 'var(--accent)', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', fontSize: '.85rem' }}
              data-i18n="common.tryAgain"
            >🔄 {t('common.tryAgain').replace(/^🔄\s*/, '')}</button>
            <button
              onClick={closeSpellingBee}
              style={{ padding: '9px 20px', borderRadius: 10, border: '1.5px solid var(--border)', background: 'none', color: 'var(--text2)', cursor: 'pointer', fontFamily: 'inherit', fontSize: '.85rem' }}
              data-i18n="common.close"
            >{t('common.close')}</button>
          </div>
        </div>
      )}
    </>
  );
}

document.getElementById('btn-spelling-bee')?.addEventListener('click', openSpellingBee);
{
  const overlay = document.getElementById('bee-overlay');
  overlay?.addEventListener('click', (e: MouseEvent) => { if (e.target === overlay) closeSpellingBee(); });
}
