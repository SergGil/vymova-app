// Vymova — js/modes/context.tsx
// 🔍 Context Mode: guess word meaning from context sentence
import { useEffect, useState, type ReactElement } from 'react';
import { _shuf } from '../core/srs.ts';
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import { addCombo, breakCombo, awardXP } from '../features/combo.ts';
import { recordModeComplete, recordModeAnswer, recordMistake } from '../features/game.ts';
import { t } from '../features/i18n.ts';
import type { WordEntry } from '../../src/types.js';
import { esEntry, frEntry, itEntry, ptEntry, deEntry, heEntry, arEntry, plEntry, zhEntry, elEntry, jaEntry, trEntry, nlEntry } from '../features/mode-utils.ts';
import { getKnowLang } from '../features/lang-pair-select.tsx';

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

const SIZE = 8, NUM_OPTS = 4;

type Question = {
  w: WordEntry;
  hiddenHtml: string;
  hint: string;
  options: string[];
  correct: string;
};

function getExample(w: WordEntry): string {
  return w[2] ?? '';
}

function hasGoodExample(w: WordEntry): boolean {
  const ex = getExample(w);
  return ex.length >= 15 && ex.toLowerCase().includes(w[0].toLowerCase().split(' ')[0]);
}

function build(): WordEntry[] {
  const pool = _shuf((state.deck.length ? state.deck.slice() : W.slice()) as unknown as WordEntry[]);
  let deck = pool.filter(hasGoodExample).slice(0, SIZE);
  if (deck.length < 4) {
    deck = _shuf((W as unknown as WordEntry[]).filter(w => getExample(w).length >= 15)).slice(0, SIZE);
  }
  return deck;
}

function buildQuestion(w: WordEntry): Question {
  const ex = getExample(w);
  const wordBase = w[0].split(' ')[0].toLowerCase();
  const hiddenHtml = ex.replace(new RegExp(wordBase + '\\w*', 'gi'), '___');

  const ipaRaw = w[4] ?? '';
  const hint = ipaRaw ? `${t('ctx.hintColon')} ${ipaRaw}` : `${t('ctx.firstLetterColon')} ${w[0][0].toUpperCase()}`;

  const knowLang = getKnowLang();
  const correct = getWordInLang(w, knowLang) || w[1];
  const wrongs: string[] = [];
  const used = new Set([w[0].toLowerCase()]);
  const pool = _shuf(W.slice() as unknown as WordEntry[]);
  for (const pw of pool) {
    if (wrongs.length >= NUM_OPTS - 1) break;
    if (used.has(pw[0].toLowerCase())) continue;
    used.add(pw[0].toLowerCase());
    const opt = getWordInLang(pw, knowLang);
    if (!opt || opt === correct) continue;
    wrongs.push(opt);
  }
  const options = _shuf([correct, ...wrongs]);
  return { w, hiddenHtml, hint, options, correct };
}

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

function openContext(): void { _open?.(); }
function closeContext(): void { _close?.(); }

export function ContextPage(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [deck, setDeck] = useState<WordEntry[]>([]);
  const [idx, setIdx] = useState(0);
  const [ok, setOk] = useState(0);
  const [fail, setFail] = useState(0);
  const [question, setQuestion] = useState<Question | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [completed, setCompleted] = useState(false);

  const showFinal = isOpen && deck.length > 0 && idx >= deck.length;

  const startGame = (): void => {
    const d = build();
    setDeck(d);
    setIdx(0);
    setOk(0);
    setFail(0);
    setSelected(null);
    setShowHint(false);
    setRevealed(false);
    setCompleted(false);
    setQuestion(d.length ? buildQuestion(d[0]) : null);
  };

  useEffect(() => {
    _open = () => {
      setIsOpen(true);
      startGame();
      const overlay = document.getElementById('ctx-overlay');
      if (overlay) overlay.style.display = 'flex';
    };
    _close = () => {
      setIsOpen(false);
      const overlay = document.getElementById('ctx-overlay');
      if (overlay) overlay.style.display = 'none';
    };
    return () => { _open = null; _close = null; };
  }, []);

  useEffect(() => {
    if (showFinal && !completed) {
      recordModeComplete('context');
      setCompleted(true);
    }
  }, [showFinal, completed]);

  const checkAnswer = (opt: string): void => {
    if (!question || selected) return;
    setSelected(opt);
    setRevealed(true);
    const isOk = opt === question.correct;
    if (isOk) setOk(o => o + 1); else { setFail(f => f + 1); recordMistake(question.w[0]); }
    try { isOk ? (addCombo(), awardXP(5)) : breakCombo(); } catch (e) {}
    recordModeAnswer('context', isOk);
  };

  const next = (): void => {
    const ni = idx + 1;
    setIdx(ni);
    setSelected(null);
    setShowHint(false);
    setRevealed(false);
    setQuestion(ni < deck.length ? buildQuestion(deck[ni]) : null);
  };

  // Escape / keyboard shortcuts
  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      const overlay = document.getElementById('ctx-overlay');
      if (overlay?.style.display !== 'flex') return;
      if (e.key === 'Escape') { closeContext(); return; }
      if (['1', '2', '3', '4'].includes(e.key) && !selected && question) {
        e.preventDefault();
        const opt = question.options[parseInt(e.key, 10) - 1];
        if (opt !== undefined) checkAnswer(opt);
      }
      if ((e.key === 'ArrowRight' || e.key === ' ') && selected) { e.preventDefault(); next(); }
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question, selected]);

  const pct = deck.length ? Math.round(ok / deck.length * 100) : 0;
  const finalEmoji = pct === 100 ? '🏆' : pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '💪';
  const finalTitle = pct === 100 ? t('quiz.perfectTitle') : pct >= 80 ? t('quiz.greatTitle') : pct >= 60 ? t('quiz.goodTitle') : t('listen.keepGoingTitle');

  const w = question?.w;
  let revealedHtml = '';
  if (revealed && question && w) {
    const ex = getExample(w);
    const wordBase = w[0].split(' ')[0].toLowerCase();
    revealedHtml = ex.replace(new RegExp(`(${wordBase}\\w*)`, 'gi'), `<b style="color:var(--accent);">$1</b>`);
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)' }} data-i18n="ctx.title">{t('ctx.title')}</div>
          <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 2 }}>
            {!showFinal && deck.length ? `${t('ctx.contextWord')} ${idx + 1} ${t('common.of')} ${deck.length}` : showFinal ? t('write.completed') : ''}
          </div>
        </div>
        <button onClick={closeContext} style={{ background: 'none', border: 'none', fontSize: '1.3rem', cursor: 'pointer', color: 'var(--text3)' }}>✕</button>
      </div>

      <div style={{ height: 4, background: 'var(--border)', borderRadius: 4, marginBottom: 14, overflow: 'hidden' }}>
        <div style={{ height: '100%', background: 'var(--accent)', borderRadius: 4, width: showFinal ? '100%' : `${deck.length ? idx / deck.length * 100 : 0}%`, transition: 'width .4s' }} />
      </div>

      {!showFinal && deck.length === 0 && (
        <div style={{ textAlign: 'center', color: 'var(--text3)', padding: 16 }}>{t('ctx.noWords')}</div>
      )}

      {!showFinal && question && w && (
        <>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginBottom: 12, flexShrink: 0 }}>
            <span style={{ fontSize: '.82rem', color: '#27ae60', fontWeight: 600 }}>✓ {ok}</span>
            <span style={{ fontSize: '.82rem', color: '#e74c3c', fontWeight: 600 }}>✗ {fail}</span>
          </div>

          {!revealed && (
            <div style={{ background: 'var(--bg)', borderRadius: 12, padding: 16, marginBottom: 10, minHeight: 70 }}>
              <div style={{ fontStyle: 'italic', fontSize: '.95rem', color: 'var(--text)', lineHeight: 1.6 }}>"{question.hiddenHtml}"</div>
            </div>
          )}
          {revealed && (
            <div style={{ background: 'var(--bg)', borderRadius: 12, padding: 16, marginBottom: 10, minHeight: 70 }}>
              <div style={{ fontStyle: 'italic', fontSize: '.9rem', color: 'var(--text)', lineHeight: 1.6, marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: `"${revealedHtml}"` }} />
              <div style={{ fontSize: '.82rem', fontWeight: 700, color: 'var(--text)' }}>{w[0]}</div>
              <div style={{ fontSize: '.78rem', color: 'var(--text2)' }}>{getWordInLang(w, getKnowLang()) || w[1]}</div>
            </div>
          )}

          {showHint && !revealed && (
            <div style={{ fontSize: '.78rem', color: 'var(--accent)', marginBottom: 8, textAlign: 'center' }}>{question.hint}</div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {question.options.map((opt, i) => {
              let cls = 'quiz-option';
              if (selected) {
                if (opt === selected) cls += opt === question.correct ? ' correct' : ' wrong';
                else if (opt === question.correct) cls += ' reveal';
              }
              return (
                <button key={opt} className={cls} disabled={!!selected} onClick={() => checkAnswer(opt)}>
                  <span className="opt-num">{i + 1}</span> {opt}
                </button>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', fontSize: '.88rem', fontWeight: 600, minHeight: 22, marginTop: 8 }}>
            {selected && (
              selected === question.correct
                ? <span style={{ color: '#27ae60' }}>{t('quiz.correctMsg')}</span>
                : <span style={{ color: '#e74c3c' }}>✗ {question.correct}</span>
            )}
          </div>

          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 10 }}>
            <button
              onClick={() => setShowHint(true)}
              disabled={!!selected}
              style={{ padding: '8px 14px', borderRadius: 10, border: '1.5px solid var(--border)', background: 'none', color: 'var(--text3)', cursor: 'pointer', fontFamily: 'inherit', fontSize: '.8rem' }}
              data-i18n="ctx.hintBtn"
            >{t('ctx.hintBtn')}</button>
            {selected && (
              <button
                onClick={next}
                style={{ padding: '10px 28px', borderRadius: 10, border: 'none', background: 'var(--accent)', color: '#fff', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', fontSize: '.88rem' }}
              >{idx >= deck.length - 1 ? t('quiz.finish') : t('quiz.next')}</button>
            )}
          </div>
        </>
      )}

      {showFinal && (
        <div style={{ textAlign: 'center', padding: '10px 0 4px' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>{finalEmoji}</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>{finalTitle}</div>
          <div style={{ fontSize: '.9rem', color: 'var(--text2)', marginBottom: 16 }}>{ok} {t('common.of')} {deck.length} ({pct}%)</div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
            <button
              onClick={startGame}
              style={{ padding: '9px 20px', borderRadius: 10, border: '1.5px solid var(--accent)', background: 'none', color: 'var(--accent)', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', fontSize: '.85rem' }}
              data-i18n="common.tryAgain"
            >{t('common.tryAgain')}</button>
            <button
              onClick={closeContext}
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
bindOverlayOpenClose('btn-context', 'ctx-overlay', openContext, closeContext);
