// English Words App — js/modes/word-letters.tsx
// 🔤 Letters: from a set of letters, find as many valid words as possible
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { _shuf } from '../core/srs.ts';
import { W } from '../../data/words.js';
import { addCombo, breakCombo } from '../features/combo.ts';
import { recordModeComplete, recordModeAnswer } from '../features/game.ts';
import { t } from '../features/i18n.ts';
import type { WordEntry } from '../../src/types.js';

const ROUNDS = 5;

// Dictionary of single-word entries usable for the letters game
export const DICT: string[] = (W as unknown as WordEntry[])
  .filter(w => /^[a-z]+$/i.test(w[0]) && w[0].length >= 3 && w[0].length <= 9)
  .map(w => w[0].toLowerCase());

interface RoundData { base: string; possible: string[]; }
interface Tile { ch: string; used: boolean; }

function letterCounts(word: string): Record<string, number> {
  const c: Record<string, number> = {};
  for (const ch of word) c[ch] = (c[ch] ?? 0) + 1;
  return c;
}

function canForm(word: string, base: Record<string, number>): boolean {
  const c: Record<string, number> = {};
  for (const ch of word) {
    c[ch] = (c[ch] ?? 0) + 1;
    if (c[ch] > (base[ch] ?? 0)) return false;
  }
  return true;
}

function pickBase(exclude: Set<string>): RoundData {
  const candidates = _shuf(DICT.filter(w => w.length >= 6 && w.length <= 8 && !exclude.has(w)));
  let best: RoundData | null = null;
  for (let i = 0; i < Math.min(candidates.length, 60); i++) {
    const base   = candidates[i];
    const counts = letterCounts(base);
    const possible = DICT.filter(w => w !== base && w.length < base.length && canForm(w, counts));
    if (possible.length >= 5) return { base, possible };
    if (!best || possible.length > best.possible.length) best = { base, possible };
  }
  return best ?? { base: candidates[0] ?? 'letters', possible: [] };
}

function build(): RoundData[] {
  const rounds: RoundData[] = [];
  const used = new Set<string>();
  for (let i = 0; i < ROUNDS; i++) {
    const r = pickBase(used);
    rounds.push(r);
    used.add(r.base);
  }
  return rounds;
}

function roundDuration(r: RoundData): number {
  return Math.min(90, 20 + r.possible.length * 3);
}

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

function openWordLetters(): void { _open?.(); }
function closeWordLetters(): void { _close?.(); }

export function WordLettersPage(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [rounds, setRounds] = useState<RoundData[]>([]);
  const [idx, setIdx] = useState(0);
  const [foundTotal, setFoundTotal] = useState(0);
  const [possibleTotal, setPossibleTotal] = useState(0);
  const [found, setFound] = useState<Set<string>>(new Set());
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [guess, setGuess] = useState<number[]>([]);
  const [tileOrder, setTileOrder] = useState<number[]>([]);
  const [hintsLeft, setHintsLeft] = useState(3);
  const [hintsShown, setHintsShown] = useState<Set<string>>(new Set());
  const [timeLeft, setTimeLeft] = useState(0);
  const [result, setResult] = useState<{ text: string; color: string } | null>(null);
  const [completed, setCompleted] = useState(false);
  const [done, setDone] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const r: RoundData | null = rounds[idx] ?? null;
  const showFinal = isOpen && rounds.length > 0 && idx >= rounds.length;

  const stopTimer = (): void => { if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; } };

  const advance = (): void => {
    stopTimer();
    setIdx(i => i + 1);
  };

  const setupRound = (rs: RoundData[], i: number): void => {
    const round = rs[i];
    setFound(new Set());
    setGuess([]);
    setHintsLeft(3);
    setHintsShown(new Set());
    setResult(null);
    setDone(false);
    const tl = round.base.split('').map(ch => ({ ch, used: false }));
    setTiles(tl);
    setTileOrder(_shuf(tl.map((_, j) => j)));
    stopTimer();
    const secs = roundDuration(round);
    setTimeLeft(secs);
    timerRef.current = setInterval(() => {
      setTimeLeft(tl2 => {
        if (tl2 <= 1) { stopTimer(); return 0; }
        return tl2 - 1;
      });
    }, 1000);
  };

  const startGame = (): void => {
    const rs = build();
    setRounds(rs);
    setIdx(0); setFoundTotal(0); setCompleted(false);
    setPossibleTotal(rs.reduce((s, rr) => s + rr.possible.length, 0));
    setupRound(rs, 0);
  };

  useEffect(() => {
    _open = () => {
      setIsOpen(true);
      startGame();
      const overlay = document.getElementById('wl-overlay');
      if (overlay) overlay.style.display = 'flex';
    };
    _close = () => {
      stopTimer();
      setIsOpen(false);
      const overlay = document.getElementById('wl-overlay');
      if (overlay) overlay.style.display = 'none';
    };
    return () => { _open = null; _close = null; stopTimer(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (showFinal && !completed) {
      stopTimer();
      recordModeComplete('letters');
      setCompleted(true);
    }
  }, [showFinal, completed]);

  // Time-up handling
  useEffect(() => {
    if (!isOpen || showFinal || !r) return;
    if (timeLeft <= 0 && timerRef.current === null && !done) {
      setResult({ text: t('letters.timeUp'), color: '#e74c3c' });
      setDone(true);
      const tmr = setTimeout(advance, 1200);
      return () => clearTimeout(tmr);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, isOpen, showFinal, r, done]);

  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      const overlay = document.getElementById('wl-overlay');
      if (overlay?.style.display !== 'flex') return;
      if (e.key === 'Escape') closeWordLetters();
      if (e.key === 'Enter') submitGuess();
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const select = (ti: number): void => {
    if (done || tiles[ti].used) return;
    setTiles(ts => ts.map((tl, i) => i === ti ? { ...tl, used: true } : tl));
    setGuess(g => [...g, ti]);
  };

  const deselect = (pos: number): void => {
    if (done) return;
    setGuess(g => {
      const ti = g[pos];
      setTiles(ts => ts.map((tl, i) => i === ti ? { ...tl, used: false } : tl));
      const ng = g.slice(); ng.splice(pos, 1);
      return ng;
    });
  };

  const clearGuess = (): void => {
    setTiles(ts => ts.map(tl => ({ ...tl, used: false })));
    setGuess([]);
  };

  const removeLastLetter = (): void => {
    if (done || !guess.length) return;
    deselect(guess.length - 1);
  };

  const submitGuess = (): void => {
    if (!r || done) return;
    const word = guess.map(ti => tiles[ti].ch).join('');
    if (word.length < 3) {
      setResult({ text: t('letters.tooShort'), color: '#e74c3c' });
      return;
    }
    if (found.has(word)) {
      setResult({ text: t('letters.alreadyMsg'), color: '#f39c12' });
      return;
    }
    if (r.possible.includes(word)) {
      setFound(f => new Set(f).add(word));
      setFoundTotal(n => n + 1);
      setResult({ text: t('letters.foundMsg'), color: '#27ae60' });
      try { addCombo(); } catch (e) {}
      recordModeAnswer('letters', true);
    } else {
      setResult({ text: t('letters.wrongMsg'), color: '#e74c3c' });
      try { breakCombo(); } catch (e) {}
      recordModeAnswer('letters', false);
    }
    clearGuess();
  };

  const useHint = (): void => {
    if (!r || hintsLeft <= 0) return;
    const remaining = r.possible.filter(w => !found.has(w) && !hintsShown.has(w)).sort((a, b) => a.length - b.length);
    if (!remaining.length) return;
    setHintsLeft(h => h - 1);
    setHintsShown(hs => new Set(hs).add(remaining[0]));
  };

  if (!isOpen) return <></>;

  const pct = possibleTotal > 0 ? Math.round(foundTotal / possibleTotal * 100) : 0;
  const finalEmoji = pct === 100 ? '🏆' : pct >= 70 ? '🎉' : pct >= 40 ? '👍' : '💪';
  const finalTitle = pct === 100 ? t('quiz.perfectTitle') : pct >= 70 ? t('quiz.greatTitle') : pct >= 40 ? t('quiz.goodTitle') : t('tempo.practiceTitle');

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)' }}>🔤 <span data-i18n="mode.letters">{t('mode.letters')}</span></div>
          <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 2 }}>
            {!showFinal ? `${t('letters.round')} ${idx + 1} ${t('common.of')} ${ROUNDS}` : t('write.completed')}
          </div>
        </div>
        <button onClick={closeWordLetters} style={{ background: 'none', border: 'none', fontSize: '1.3rem', cursor: 'pointer', color: 'var(--text3)' }}>✕</button>
      </div>

      <div style={{ height: 4, background: 'var(--border)', borderRadius: 4, marginBottom: 12, overflow: 'hidden' }}>
        <div style={{ height: '100%', background: 'var(--accent)', borderRadius: 4, width: showFinal ? '100%' : `${idx / ROUNDS * 100}%`, transition: 'width .4s' }} />
      </div>

      {!showFinal && r && (
        <>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap' }}>
            <span style={{ fontSize: '.82rem', color: 'var(--text2)', fontWeight: 600 }}>{t('letters.foundLabel')}</span>
            <span style={{ fontSize: '.82rem', color: '#27ae60', fontWeight: 700 }}>{found.size} / {r.possible.length}</span>
            <span style={{ fontSize: '.82rem', fontWeight: 700, color: timeLeft <= 10 ? '#e74c3c' : 'var(--accent)' }}>
              ⏱ {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
            </span>
          </div>

          <div style={{ background: 'var(--bg)', borderRadius: 12, padding: '14px 16px', textAlign: 'center', marginBottom: 10 }}>
            <div style={{ fontSize: '.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--text3)', marginBottom: 8 }} data-i18n="letters.prompt">{t('letters.prompt')}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center' }}>
              {tileOrder.filter(ti => !tiles[ti].used).map(ti => (
                <button key={'t' + ti} className="scr-tile" onClick={() => select(ti)}>{tiles[ti].ch.toUpperCase()}</button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center', minHeight: 48, marginBottom: 8, borderBottom: '2px dashed var(--border)', paddingBottom: 10 }}>
            {guess.map((ti, pos) => (
              <button key={'g' + pos} className="scr-tile scr-tile-placed" onClick={() => deselect(pos)}>{tiles[ti].ch.toUpperCase()}</button>
            ))}
            {!guess.length && <span className="scr-tile scr-tile-empty" />}
          </div>

          <div style={{ textAlign: 'center', fontSize: '.9rem', fontWeight: 600, minHeight: 24, marginBottom: 6 }}>
            {result && <span style={{ color: result.color }}>{result.text}</span>}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center', minHeight: 28, marginBottom: 8 }}>
            {Array.from(found).sort().map(word => (
              <span key={word} style={{ background: 'var(--accent)', color: '#fff', borderRadius: 8, padding: '4px 10px', fontSize: '.78rem', fontWeight: 700 }}>{word.toUpperCase()}</span>
            ))}
          </div>

          {hintsShown.size > 0 && (
            <div style={{ textAlign: 'center', fontSize: '.85rem', color: 'var(--accent)', letterSpacing: '.05em', fontFamily: 'monospace', marginBottom: 8, fontWeight: 700 }}>
              💡 {Array.from(hintsShown).map(w => w.toUpperCase()).join('  ')}
            </div>
          )}

          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={useHint}
              disabled={hintsLeft <= 0}
              style={{ padding: '9px 14px', borderRadius: 10, border: '1.5px solid var(--border)', background: 'none', color: 'var(--text2)', cursor: 'pointer', fontFamily: 'inherit', fontSize: '.8rem' }}
            >{hintsLeft > 0 ? t('letters.hintBtn', { n: hintsLeft }) : t('letters.hintNone')}</button>
            <button
              onClick={removeLastLetter}
              style={{ padding: '9px 14px', borderRadius: 10, border: '1.5px solid var(--border)', background: 'none', color: 'var(--text2)', cursor: 'pointer', fontFamily: 'inherit', fontSize: '.8rem' }}
              data-i18n="scramble.clearBtn"
            >{t('scramble.clearBtn')}</button>
            <button
              onClick={submitGuess}
              style={{ padding: '9px 24px', borderRadius: 10, border: 'none', background: 'var(--accent)', color: '#fff', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', fontSize: '.88rem' }}
              data-i18n="bee.checkBtn"
            >{t('bee.checkBtn')}</button>
            <button
              onClick={advance}
              style={{ padding: '9px 24px', borderRadius: 10, border: 'none', background: 'var(--accent)', color: '#fff', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', fontSize: '.88rem' }}
              data-i18n="letters.doneBtn"
            >{idx >= ROUNDS - 1 ? t('quiz.finish') : t('letters.doneBtn')}</button>
          </div>
        </>
      )}

      {showFinal && (
        <div style={{ textAlign: 'center', padding: '10px 0 4px' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>{finalEmoji}</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>{finalTitle}</div>
          <div style={{ fontSize: '.9rem', color: 'var(--text2)', marginBottom: 16 }}>{foundTotal} {t('common.of')} {possibleTotal} ({pct}%)</div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
            <button
              onClick={startGame}
              style={{ padding: '9px 20px', borderRadius: 10, border: '1.5px solid var(--accent)', background: 'none', color: 'var(--accent)', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', fontSize: '.85rem' }}
              data-i18n="common.tryAgain"
            >{t('common.tryAgain')}</button>
            <button
              onClick={closeWordLetters}
              style={{ padding: '9px 20px', borderRadius: 10, border: '1.5px solid var(--border)', background: 'none', color: 'var(--text2)', cursor: 'pointer', fontFamily: 'inherit', fontSize: '.85rem' }}
              data-i18n="common.close"
            >{t('common.close')}</button>
          </div>
        </div>
      )}
    </>
  );
}

import { bindOverlayOpenClose } from '../features/overlay-utils.ts';
bindOverlayOpenClose('btn-letters', 'wl-overlay', openWordLetters, closeWordLetters);
