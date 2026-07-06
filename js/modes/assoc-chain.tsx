// Vymova — js/modes/assoc-chain.tsx
// 🔗🧠 Association Chain: pick a synonym, then a synonym of that, and so on —
// one wrong pick (or running out of further synonyms) ends the chain.
import { useEffect, useState, type ReactElement } from 'react';
import { _shuf } from '../core/srs.ts';
import { W } from '../../data/words.js';
import { getWordIndex } from '../core/word-index.ts';
import { SYNONYMS_BY_LANG } from '../../data/synonyms.ts';
import type { WordEntry } from '../../src/types.js';
import { entryFor, isTargetLang, reverseHeadwordFor } from '../features/mode-utils.ts';
import { getKnowLang, getLearnLang } from '../features/lang-pair-select.tsx';
import { t } from '../features/i18n.ts';
import { addCombo, breakCombo, awardXP } from '../features/combo.ts';
import { recordModeComplete, recordModeAnswer, recordMistake } from '../features/game.ts';

const NUM_OPTS = 4;
const MAX_CHAIN = 20;

type SynDict = Record<string, { word: string }[]>;

function getBest(lang: string): number {
  return parseInt(localStorage.getItem('ew_assoc_best_' + lang) ?? '0', 10);
}
function setBest(lang: string, n: number): boolean {
  if (n > getBest(lang)) {
    localStorage.setItem('ew_assoc_best_' + lang, String(n));
    return true;
  }
  return false;
}

function wordPoolFor(dict: SynDict): string[] {
  const set = new Set<string>();
  for (const [k, members] of Object.entries(dict)) {
    set.add(k);
    for (const m of members) set.add(m.word);
  }
  return Array.from(set);
}

function translationFor(word: string): string {
  const learnLang = getLearnLang();
  const idx = getWordIndex();
  if (!idx) return '';
  let headwordEn: string | null = null;
  if (learnLang === 'en') headwordEn = word;
  else if (isTargetLang(learnLang)) headwordEn = reverseHeadwordFor(learnLang, word);
  if (!headwordEn) return '';
  const i = idx.get(headwordEn.toLowerCase());
  if (i === undefined) return '';
  const entry = (W as unknown as WordEntry[])[i];
  return entryFor(getKnowLang(), entry).word || '';
}

type Step = { current: string; correct: string; options: string[] };

function buildStep(dict: SynDict, pool: string[], current: string): Step | null {
  const entries = dict[current.toLowerCase()];
  if (!entries || !entries.length) return null;
  const correct = _shuf(entries)[0].word;
  const used = new Set([current.toLowerCase(), correct.toLowerCase()]);
  const wrongs: string[] = [];
  for (const cand of _shuf(pool)) {
    if (wrongs.length >= NUM_OPTS - 1) break;
    if (used.has(cand.toLowerCase())) continue;
    used.add(cand.toLowerCase());
    wrongs.push(cand);
  }
  if (wrongs.length < NUM_OPTS - 1) return null;
  return { current, correct, options: _shuf([correct, ...wrongs]) };
}

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

function openAssocChain(): void {
  _open?.();
}
function closeAssocChain(): void {
  _close?.();
}

export function AssocChainPage(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [dict, setDict] = useState<SynDict | null>(null);
  const [step, setStep] = useState<Step | null>(null);
  const [chain, setChain] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [over, setOver] = useState(false);
  const [isNewBest, setIsNewBest] = useState(false);

  const learnLang = getLearnLang();

  const startGame = (): void => {
    const d = (SYNONYMS_BY_LANG[learnLang] as SynDict | undefined) ?? null;
    setDict(d);
    setChain(0);
    setSelected(null);
    setOver(false);
    setIsNewBest(false);
    if (d) {
      const pool = wordPoolFor(d);
      const keys = Object.keys(d);
      let s: Step | null = null;
      for (const start of _shuf(keys)) {
        s = buildStep(d, pool, start);
        if (s) break;
      }
      setStep(s);
    } else {
      setStep(null);
    }
  };

  useEffect(() => {
    _open = () => {
      setIsOpen(true);
      startGame();
      const overlay = document.getElementById('assoc-overlay');
      if (overlay) overlay.style.display = 'flex';
    };
    _close = () => {
      setIsOpen(false);
      const overlay = document.getElementById('assoc-overlay');
      if (overlay) overlay.style.display = 'none';
    };
    return () => {
      _open = null;
      _close = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      const overlay = document.getElementById('assoc-overlay');
      if (overlay?.style.display !== 'flex') return;
      if (e.key === 'Escape') closeAssocChain();
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, []);

  const finish = (finalChain: number): void => {
    setOver(true);
    setIsNewBest(setBest(learnLang, finalChain));
    try {
      recordModeComplete('assoc');
    } catch (e) {}
  };

  const choose = (opt: string): void => {
    if (!step || selected || over) return;
    setSelected(opt);
    const isOk = opt === step.correct;
    try {
      if (isOk) {
        addCombo();
        awardXP(5);
      } else {
        breakCombo();
        recordMistake(opt);
      }
    } catch (e) {}
    recordModeAnswer('assoc', isOk);

    if (!isOk) {
      setTimeout(() => finish(chain), 900);
      return;
    }

    const newChain = chain + 1;
    setTimeout(() => {
      setChain(newChain);
      setSelected(null);
      if (!dict || newChain >= MAX_CHAIN) {
        finish(newChain);
        return;
      }
      const pool = wordPoolFor(dict);
      const next = buildStep(dict, pool, opt);
      if (next) setStep(next);
      else finish(newChain);
    }, 700);
  };

  if (!isOpen) return <></>;

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 12,
        }}
      >
        <div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)' }}>
            🔗 {t('assoc.title')}
          </div>
          <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 2 }}>
            {t('assoc.best')}: {getBest(learnLang)}
          </div>
        </div>
        <button
          onClick={closeAssocChain}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.3rem',
            cursor: 'pointer',
            color: 'var(--text3)',
          }}
        >
          ✕
        </button>
      </div>

      {!dict && (
        <div style={{ textAlign: 'center', color: 'var(--text3)', padding: 16 }}>
          {t('assoc.noData')}
        </div>
      )}

      {dict && !over && step && (
        <>
          <div
            style={{
              textAlign: 'center',
              fontSize: '1.6rem',
              fontWeight: 700,
              color: 'var(--accent)',
              marginBottom: 4,
            }}
          >
            {chain}
          </div>
          <div
            style={{
              textAlign: 'center',
              fontSize: '.78rem',
              color: 'var(--text3)',
              marginBottom: 14,
            }}
          >
            {t('assoc.chainLabel')}
          </div>

          <div
            style={{
              background: 'var(--bg)',
              borderRadius: 12,
              padding: 16,
              textAlign: 'center',
              marginBottom: 14,
            }}
          >
            <div
              style={{
                fontSize: '.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '.08em',
                color: 'var(--text3)',
                marginBottom: 6,
              }}
            >
              {t('assoc.prompt')}
            </div>
            <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)' }}>
              {step.current}
            </div>
            {translationFor(step.current) && (
              <div style={{ fontSize: '.8rem', color: 'var(--text3)', marginTop: 2 }}>
                {translationFor(step.current)}
              </div>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {step.options.map((opt, i) => {
              let cls = 'quiz-option';
              if (selected) {
                if (opt === selected) cls += opt === step.correct ? ' correct' : ' wrong';
                else if (opt === step.correct) cls += ' reveal';
              }
              return (
                <button
                  key={opt}
                  className={cls}
                  disabled={!!selected}
                  onClick={() => choose(opt)}
                >
                  <span className="opt-num">{i + 1}</span> {opt}
                </button>
              );
            })}
          </div>
        </>
      )}

      {dict && over && (
        <div style={{ textAlign: 'center', padding: '10px 0 4px' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>{isNewBest ? '🏆' : '🔗'}</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>
            {isNewBest ? t('assoc.newBestTitle') : t('assoc.chainEndedTitle')}
          </div>
          <div style={{ fontSize: '.9rem', color: 'var(--text2)', marginBottom: 16 }}>
            {t('assoc.finalChain', { n: chain })}
          </div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
            <button
              onClick={startGame}
              style={{
                padding: '9px 20px',
                borderRadius: 10,
                border: '1.5px solid var(--accent)',
                background: 'none',
                color: 'var(--accent)',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: '.85rem',
              }}
            >
              {t('common.tryAgain')}
            </button>
            <button
              onClick={closeAssocChain}
              style={{
                padding: '9px 20px',
                borderRadius: 10,
                border: '1.5px solid var(--border)',
                background: 'none',
                color: 'var(--text2)',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: '.85rem',
              }}
            >
              {t('common.close')}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

import { bindOverlayOpenClose } from '../features/overlay-utils.ts';
bindOverlayOpenClose('btn-assoc', 'assoc-overlay', openAssocChain, closeAssocChain);
