// Vymova — js/modes/tempo.tsx
// ⚡ TEMPO MODE
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { _shuf } from '../core/srs.ts';
import { W } from '../../data/words.js';
import { recordModeComplete, recordMistake, recordModeAnswer } from '../features/game.ts';
import { addCombo, breakCombo, awardXP } from '../features/combo.ts';
import { decodeIpa } from '../core/ui-helpers.ts';
import { speak } from '../features/speech.ts';
import { t } from '../features/i18n.ts';
import { esEntry, frEntry, itEntry, ptEntry, deEntry, heEntry, arEntry, plEntry, zhEntry, elEntry, jaEntry, trEntry, nlEntry } from '../features/mode-utils.ts';
import { getKnowLang, getLearnLang } from '../features/lang-pair-select.tsx';
import { state } from '../../src/state.ts';
import type { WordEntry } from '../../src/types.js';

type Question = {
  dir: string;
  word: string;
  ipa: string;
  frontLang: string;
  options: string[];
  answer: string;
  base: string;
  selected: string | null;
};

function getBest(sec: number): number {
  return parseInt(localStorage.getItem(`tempo_best_${sec}`) ?? '0');
}
function setBest(sec: number, val: number): void {
  if (val > getBest(sec)) localStorage.setItem(`tempo_best_${sec}`, String(val));
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

function getWrongOption(pw: WordEntry, backLang: string): string | null {
  if (backLang === 'UA') return pw[1];
  if (backLang === 'ES') { const e = esEntry(pw[0]); return e ? e[0] : null; }
  if (backLang === 'FR') { const e = frEntry(pw[0]); return e ? e[0] : null; }
  if (backLang === 'IT') { const e = itEntry(pw[0]); return e ? e[0] : null; }
  if (backLang === 'PT') { const e = ptEntry(pw[0]); return e ? e[0] : null; }
  if (backLang === 'DE') { const e = deEntry(pw[0]); return e ? e[0] : null; }
  if (backLang === 'HE') { const e = heEntry(pw[0]); return e ? e[0] : null; }
  if (backLang === 'AR') { const e = arEntry(pw[0]); return e ? e[0] : null; }

  if (backLang === 'PL') { const e = plEntry(pw[0]); return e ? e[0] : null; }

  if (backLang === 'ZH') { const e = zhEntry(pw[0]); return e ? e[0] : null; }

  if (backLang === 'EL') { const e = elEntry(pw[0]); return e ? e[0] : null; }

  if (backLang === 'JA') { const e = jaEntry(pw[0]); return e ? e[0] : null; }

  if (backLang === 'TR') { const e = trEntry(pw[0]); return e ? e[0] : null; }

  if (backLang === 'NL') { const e = nlEntry(pw[0]); return e ? e[0] : null; }
  return pw[0];
}

function buildQuestion(deck: WordEntry[], idx: number): Question {
  const w = deck[idx];
  const knowLang  = getKnowLang();
  const learnLang = getLearnLang();
  const frontLang = Math.random() < 0.5 ? learnLang : knowLang;
  const backLang  = frontLang === learnLang ? knowLang : learnLang;
  const frontWord = getWordInLang(w, frontLang);
  const backWord  = getWordInLang(w, backLang);
  const backLangUp = backLang.toUpperCase();

  const pool = _shuf(W.slice() as unknown as WordEntry[]);
  const wrongs: string[] = [];
  const used = new Set([w[0].toLowerCase()]);
  for (const pw of pool) {
    if (wrongs.length >= 3) break;
    if (used.has(pw[0].toLowerCase())) continue;
    used.add(pw[0].toLowerCase());
    const opt = getWrongOption(pw, backLangUp);
    if (!opt || opt === backWord) continue;
    wrongs.push(opt);
  }
  return {
    dir: `${t(`lang.${frontLang}` as any)} → ${t(`lang.${backLang}` as any)}`,
    word: frontWord,
    ipa: frontLang === 'en' ? decodeIpa(w[4] ?? '') : '',
    frontLang,
    options: _shuf([backWord, ...wrongs]),
    answer: backWord,
    base: w[0],
    selected: null,
  };
}

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

function openTempo(): void { _open?.(); }
function closeTempo(): void { _close?.(); }

export function TempoPage(): ReactElement {
  const [screen, setScreen] = useState<'start' | 'game' | 'result'>('start');
  const [selectedSec, setSelectedSec] = useState(30);
  const [score, setScore] = useState(0);
  const [miss, setMiss] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [question, setQuestion] = useState<Question | null>(null);
  const [result, setResult] = useState<{ emoji: string; title: string; scoreLine: string; bestLine: string } | null>(null);

  const tBarRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const run = useRef({ isRunning: false, deck: [] as WordEntry[], idx: 0, score: 0, miss: 0, sec: 30, tLeft: 30 });
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const getBaseDeck = (): WordEntry[] =>
    state.deck.length ? _shuf(state.deck.slice()) : _shuf(W.slice() as unknown as WordEntry[]);

  const showQuestion = (): void => {
    const r = run.current;
    if (r.idx >= r.deck.length) { r.deck = getBaseDeck(); r.idx = 0; }
    setQuestion(buildQuestion(r.deck, r.idx));
  };

  const endTempo = (): void => {
    const r = run.current;
    if (timerRef.current) clearInterval(timerRef.current);
    r.isRunning = false;
    const total = r.score + r.miss;
    const pct = total > 0 ? Math.round(r.score / total * 100) : 0;
    const best = getBest(r.sec), isNew = r.score > best;
    setBest(r.sec, r.score);
    const emoji = r.score === 0 ? '😅' : pct === 100 ? '🏆' : pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '💪';
    const title = r.score === 0 ? t('tempo.zeroTitle') : pct === 100 ? t('quiz.perfectTitle') : pct >= 80 ? t('tempo.excellentTitle') : pct >= 60 ? t('quiz.goodTitle') : t('tempo.practiceTitle');
    recordModeComplete('tempo');
    const scoreLine = `✓ ${r.score} ${t('quiz.correctLbl')}  ✗ ${r.miss} ${t('quiz.mistakesGen')}  (${pct}%)`;
    const newBest = getBest(r.sec);
    const bestLine = isNew && r.score > 0 ? t('tempo.newRecord', { n: r.score }) : (newBest > 0 ? t('tempo.record', { n: newBest }) : '');
    setResult({ emoji, title, scoreLine, bestLine });
    setScreen('result');
  };

  const startTempo = (): void => {
    const r = run.current;
    r.score = 0; r.miss = 0; r.idx = 0; r.sec = selectedSec; r.isRunning = true;
    r.deck = getBaseDeck();
    setScore(0); setMiss(0); setTimeLeft(selectedSec);
    setScreen('game');
    showQuestion();
    if (tBarRef.current) {
      tBarRef.current.style.transition = 'none';
      tBarRef.current.style.width = '100%';
      setTimeout(() => {
        if (!tBarRef.current) return;
        tBarRef.current.style.transition = `width ${selectedSec}s linear`;
        tBarRef.current.style.width = '0%';
      }, 50);
    }
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      r.tLeft = (r.tLeft ?? selectedSec) - 1;
      setTimeLeft(r.tLeft);
      if (r.tLeft <= 0) endTempo();
    }, 1000);
    run.current.tLeft = selectedSec;
  };

  const selectOption = (opt: string): void => {
    const r = run.current;
    if (!r.isRunning || !question || question.selected) return;
    setQuestion(q => q ? { ...q, selected: opt } : q);
    if (opt === question.answer) {
      r.score++; setScore(r.score);
      try { addCombo(); awardXP(5); } catch (e) {}
      recordModeAnswer('tempo', true);
    } else {
      r.miss++; setMiss(r.miss);
      try { breakCombo(); } catch (e) {}
      recordMistake(question.base);
      recordModeAnswer('tempo', false);
    }
    r.idx++;
    setTimeout(() => { if (r.isRunning) showQuestion(); }, opt === question.answer ? 400 : 900);
  };

  const speakWord = (): void => {
    if (!question) return;
    try { speak(question.word, wordRef.current as unknown as HTMLElement); } catch (e) {}
  };

  useEffect(() => {
    _open = () => {
      setScreen('start');
      const overlay = document.getElementById('tempo-overlay');
      if (overlay) overlay.style.display = 'flex';
    };
    _close = () => {
      if (timerRef.current) clearInterval(timerRef.current);
      run.current.isRunning = false;
      const overlay = document.getElementById('tempo-overlay');
      if (overlay) overlay.style.display = 'none';
    };
    return () => {
      _open = null; _close = null;
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      const overlay = document.getElementById('tempo-overlay');
      if (e.key === 'Escape' && overlay?.style.display === 'flex') { closeTempo(); return; }
      if (run.current.isRunning && ['1', '2', '3', '4'].includes(e.key) && question && !question.selected) {
        e.preventDefault();
        const opt = question.options[parseInt(e.key, 10) - 1];
        if (opt !== undefined) selectOption(opt);
      }
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question]);

  const best = getBest(selectedSec);
  const bestLabel = best > 0 ? t('tempo.bestRecord', { n: best, s: selectedSec }) : '';

  return (
    <>
      {screen === 'start' && (
        <div id="tempo-start">
          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 6 }}>⚡</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)' }} data-i18n="tempo.title">{t('tempo.title')}</div>
            <div style={{ fontSize: '.85rem', color: 'var(--text2)', marginTop: 6 }} data-i18n="tempo.subtitle">{t('tempo.subtitle')}</div>
          </div>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 22 }}>
            {[30, 60, 90].map(sec => (
              <button
                key={sec}
                className={'tempo-time-btn' + (selectedSec === sec ? ' active' : '')}
                onClick={() => setSelectedSec(sec)}
                data-i18n={`tempo.sec${sec}`}
              >{t(`tempo.sec${sec}`)}</button>
            ))}
          </div>
          <div style={{ textAlign: 'center', fontSize: '.8rem', color: 'var(--text3)', marginBottom: 20, minHeight: 18 }}>{bestLabel}</div>
          <button
            onClick={startTempo}
            style={{ width: '100%', padding: 14, borderRadius: 12, border: 'none', background: 'var(--accent)', color: '#fff', fontSize: '1rem', fontWeight: 700, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif" }}
            data-i18n="tempo.start"
          >{t('tempo.start')}</button>
          <button
            onClick={closeTempo}
            style={{ width: '100%', padding: 10, borderRadius: 12, border: '1.5px solid var(--border)', background: 'none', color: 'var(--text2)', fontSize: '.9rem', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", marginTop: 8 }}
            data-i18n="common.close"
          >{t('common.close')}</button>
        </div>
      )}

      {screen === 'game' && question && (
        <div id="tempo-game">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <div style={{ fontSize: '.85rem', color: 'var(--text2)' }}>✓ {score} &nbsp; ✗ {miss}</div>
            <div style={{ fontSize: '1.6rem', fontWeight: 700, color: timeLeft <= 10 ? '#e74c3c' : 'var(--accent)', minWidth: 48, textAlign: 'center' }}>{timeLeft}</div>
          </div>
          <div style={{ height: 5, background: 'var(--border)', borderRadius: 5, marginBottom: 20, overflow: 'hidden' }}>
            <div ref={tBarRef} style={{ height: '100%', background: 'var(--accent)', borderRadius: 5, width: '100%', transition: 'width 1s linear' }} />
          </div>
          <div style={{ background: 'var(--bg)', borderRadius: 14, padding: '22px 16px', textAlign: 'center', marginBottom: 18 }}>
            <div style={{ fontSize: '.62rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 8 }}>{question.dir}</div>
            <div ref={wordRef} style={{ fontFamily: "'DM Serif Display',serif", fontSize: '2.2rem', color: 'var(--text)', lineHeight: 1.15 }}>
              {question.word}
              {question.frontLang === 'en' && <button className="mode-speak" title={t('common.listen')} onClick={speakWord}>🔊</button>}
            </div>
            <div style={{ fontSize: '.8rem', color: 'var(--accent2)', marginTop: 4 }}>{question.ipa}</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            {question.options.map((opt, i) => {
              let cls = 'tempo-opt';
              if (question.selected) {
                if (opt === question.selected) cls += opt === question.answer ? ' correct' : ' wrong';
                else if (opt === question.answer) cls += ' reveal';
              }
              return (
                <button key={opt} className={cls} disabled={!!question.selected} onClick={() => selectOption(opt)}>
                  <span className="opt-num">{i + 1}</span> {opt}
                </button>
              );
            })}
          </div>
          <div style={{ textAlign: 'center', fontSize: '.9rem', fontWeight: 600, minHeight: 22, marginTop: 10 }}>
            {question.selected && (
              question.selected === question.answer
                ? <span style={{ color: '#27ae60' }}>{t('quiz.correctMsg')}</span>
                : <span style={{ color: '#e74c3c' }}>✗ {question.answer}</span>
            )}
          </div>
        </div>
      )}

      {screen === 'result' && result && (
        <div id="tempo-result" style={{ textAlign: 'center', padding: '10px 0' }}>
          <div style={{ fontSize: '3rem', marginBottom: 8 }}>{result.emoji}</div>
          <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>{result.title}</div>
          <div style={{ fontSize: '.9rem', color: 'var(--text2)', marginBottom: 6 }}>{result.scoreLine}</div>
          <div style={{ fontSize: '.8rem', color: 'var(--accent)', fontWeight: 600, marginBottom: 20 }}>{result.bestLine}</div>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => setScreen('start')}
              style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '.88rem', fontWeight: 600, padding: '10px 22px', borderRadius: 10, border: '1.5px solid var(--accent)', background: 'none', color: 'var(--accent)', cursor: 'pointer' }}
              data-i18n="tempo.again"
            >{t('tempo.again')}</button>
            <button
              onClick={closeTempo}
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
bindOverlayOpenClose('btn-tempo', 'tempo-overlay', openTempo, closeTempo);
