// Vymova — js/modes/assoc-chain.tsx
// 🔗🧠 Association Chain: pick a synonym OR an antonym (whichever the current
// word has unvisited options for — chosen at random when both are
// available), then do the same for that word, and so on — one wrong pick
// (or running out of further synonyms/antonyms) ends the chain.
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { _shuf } from '../core/srs.ts';
import {
  getSynonymsModule,
  getAntonymsModule,
  ensureLexiconLoaded,
} from '../features/lexicon-loader.ts';
import { getLearnLang } from '../features/lang-pair-select.tsx';
import { t } from '../features/i18n.ts';
import { addCombo, breakCombo, awardXP } from '../features/combo.ts';
import { recordModeAnswer, recordMistake } from '../features/game.ts';
import { speakForCode } from '../features/voice/speak-lang.ts';
import { useModeSession } from '../features/use-mode-session.ts';

const NUM_OPTS = 4;
const MAX_CHAIN = 20;

export type SynDict = Record<string, { word: string }[]>;

export function getBest(lang: string): number {
  return parseInt(localStorage.getItem('ew_assoc_best_' + lang) ?? '0', 10);
}
export function setBest(lang: string, n: number): boolean {
  if (n > getBest(lang)) {
    localStorage.setItem('ew_assoc_best_' + lang, String(n));
    return true;
  }
  return false;
}

// SYNONYMS is stored as directed edges (headword → its synonyms), so most
// synonym words never appear as a dict key themselves. Left as-is, that made
// the chain dead-end right after the first correct pick almost every time —
// synonymy is symmetric, so we materialise the reverse edges once per game.
export function buildSymmetricDict(raw: SynDict): SynDict {
  const out: Record<string, Map<string, { word: string }>> = {};
  const add = (key: string, val: { word: string }): void => {
    const k = key.toLowerCase();
    if (val.word.toLowerCase() === k) return;
    if (!out[k]) out[k] = new Map();
    if (!out[k].has(val.word.toLowerCase())) out[k].set(val.word.toLowerCase(), val);
  };
  for (const [key, members] of Object.entries(raw)) {
    for (const m of members) {
      add(key, m);
      add(m.word, { word: key });
    }
  }
  const result: SynDict = {};
  for (const k of Object.keys(out)) result[k] = Array.from(out[k].values());
  return result;
}

export function wordPoolFor(dict: SynDict): string[] {
  const set = new Set<string>();
  for (const [k, members] of Object.entries(dict)) {
    set.add(k);
    for (const m of members) set.add(m.word);
  }
  return Array.from(set);
}

export type StepKind = 'syn' | 'ant';
export type Step = { current: string; correct: string; options: string[]; kind: StepKind };

// `antDict` may be null (language has no antonym data yet — see
// data/antonyms.ts) — buildStep then behaves exactly as it always did,
// synonym-only. When both dicts have unvisited options for `current`, the
// kind is chosen at random each hop, so a chain naturally mixes "pick a
// synonym" and "pick an antonym" steps.
export function buildStep(
  synDict: SynDict,
  antDict: SynDict | null,
  pool: string[],
  current: string,
  visited: Set<string>,
): Step | null {
  const key = current.toLowerCase();
  const synUnvisited = (synDict[key] ?? []).filter((e) => !visited.has(e.word.toLowerCase()));
  const antUnvisited = (antDict?.[key] ?? []).filter((e) => !visited.has(e.word.toLowerCase()));
  if (!synUnvisited.length && !antUnvisited.length) return null;

  const kind: StepKind =
    synUnvisited.length && antUnvisited.length
      ? _shuf<StepKind>(['syn', 'ant'])[0]
      : synUnvisited.length
        ? 'syn'
        : 'ant';
  const candidates = kind === 'syn' ? synUnvisited : antUnvisited;
  const correct = _shuf(candidates)[0].word;

  const used = new Set([current.toLowerCase(), correct.toLowerCase()]);
  const wrongs: string[] = [];
  for (const cand of _shuf(pool)) {
    if (wrongs.length >= NUM_OPTS - 1) break;
    if (used.has(cand.toLowerCase())) continue;
    used.add(cand.toLowerCase());
    wrongs.push(cand);
  }
  if (wrongs.length < NUM_OPTS - 1) return null;
  return { current, correct, options: _shuf([correct, ...wrongs]), kind };
}

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

export function openAssocChain(): void {
  _open?.();
}
function closeAssocChain(): void {
  _close?.();
}

export function AssocChainPage(): ReactElement {
  const [loading, setLoading] = useState(false);
  const [dict, setDict] = useState<SynDict | null>(null);
  const [antDict, setAntDict] = useState<SynDict | null>(null);
  const [step, setStep] = useState<Step | null>(null);
  const [chain, setChain] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [over, setOver] = useState(false);
  const [isNewBest, setIsNewBest] = useState(false);
  // Distinguishes "you picked a wrong synonym" from "you correctly used up
  // every synonym in this cluster" (or hit MAX_CHAIN) — both end the round,
  // but only the first is actually a mistake, so they need different titles.
  const [endedByMistake, setEndedByMistake] = useState(true);

  const visitedRef = useRef<Set<string>>(new Set());

  // Read fresh on every call (not hoisted to a component-level const) —
  // startGame() is passed to useModeSession as onOpen, which the hook reads
  // through a ref rather than closing over any single render's version, so
  // this always runs with whatever startGame identity the latest render
  // produced. A hoisted `learnLang` would freeze this to whatever language
  // was selected at first mount, silently ignoring every later language
  // switch.
  const startGame = async (): Promise<void> => {
    setLoading(true);
    await ensureLexiconLoaded();
    setLoading(false);
    const raw = getSynonymsModule()?.SYNONYMS_BY_LANG[getLearnLang()] as SynDict | undefined;
    const rawAnt = getAntonymsModule()?.ANTONYMS_BY_LANG[getLearnLang()] as SynDict | undefined;
    const d = raw ? buildSymmetricDict(raw) : null;
    const ad = rawAnt ? buildSymmetricDict(rawAnt) : null;
    setDict(d);
    setAntDict(ad);
    setChain(0);
    setSelected(null);
    setOver(false);
    setIsNewBest(false);
    if (d) {
      const pool = [...wordPoolFor(d), ...(ad ? wordPoolFor(ad) : [])];
      const keys = Object.keys(d);
      let s: Step | null = null;
      for (const start of _shuf(keys)) {
        visitedRef.current = new Set([start.toLowerCase()]);
        s = buildStep(d, ad, pool, start, visitedRef.current);
        if (s) break;
      }
      setStep(s);
    } else {
      setStep(null);
    }
  };

  const session = useModeSession({
    overlayId: 'assoc-overlay',
    modeId: 'assoc',
    isFinal: over,
    onOpen: startGame,
  });
  const { isOpen, open: sessionOpen, close: sessionClose } = session;

  useEffect(() => {
    _open = sessionOpen;
    _close = sessionClose;
    return () => {
      _open = null;
      _close = null;
    };
  }, [sessionOpen, sessionClose]);

  const finish = (finalChain: number, byMistake: boolean): void => {
    setOver(true);
    setEndedByMistake(byMistake);
    setIsNewBest(setBest(getLearnLang(), finalChain));
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
      setTimeout(() => finish(chain, true), 900);
      return;
    }

    const newChain = chain + 1;
    setTimeout(() => {
      setChain(newChain);
      setSelected(null);
      if (!dict || newChain >= MAX_CHAIN) {
        finish(newChain, false);
        return;
      }
      visitedRef.current.add(opt.toLowerCase());
      const pool = [...wordPoolFor(dict), ...(antDict ? wordPoolFor(antDict) : [])];
      const next = buildStep(dict, antDict, pool, opt, visitedRef.current);
      if (next) setStep(next);
      else finish(newChain, false);
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
            {t('assoc.best')}: {getBest(getLearnLang())}
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
          aria-label={t('common.close')}
        >
          ✕
        </button>
      </div>

      {loading && !dict && (
        <div style={{ textAlign: 'center', color: 'var(--text3)', padding: 16 }}>
          {t('lb.loading')}
        </div>
      )}

      {!loading && !dict && (
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
              {step.kind === 'ant' ? t('assoc.promptAnt') : t('assoc.prompt')}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span
                data-testid="assoc-current-word"
                style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)' }}
              >
                {step.current}
              </span>
              <button
                className="mode-speak ml-2 inline-flex h-[30px] w-[30px] shrink-0 cursor-pointer items-center justify-center rounded-lg border-none bg-white/7 align-middle text-[.9rem] text-[var(--text3)] transition-all duration-150"
                title={t('common.listen')}
                onClick={(e) => {
                  e.stopPropagation();
                  speakForCode(getLearnLang(), step.current, step.current, e.currentTarget);
                }}
              >
                🔊
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {step.options.map((opt, i) => {
              let cls =
                "quiz-option relative w-full cursor-pointer rounded-[11px] border-[1.5px] border-[var(--border)] bg-[var(--card)] px-3.5 py-2.5 text-left font-['DM_Sans',sans-serif] text-[.88rem] leading-[1.3] text-[var(--text)] transition-[border-color,background,transform] duration-150 disabled:cursor-default";
              if (selected) {
                if (opt === selected) cls += opt === step.correct ? ' correct' : ' wrong';
                else if (opt === step.correct) cls += ' reveal';
              }
              return (
                <button key={opt} className={cls} disabled={!!selected} onClick={() => choose(opt)}>
                  <span className="opt-num inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] bg-[var(--border)] mr-1.5 align-middle text-[.68rem] font-bold text-[var(--text2)]">{i + 1}</span> {opt}
                </button>
              );
            })}
          </div>
        </>
      )}

      {dict && over && (
        <div style={{ textAlign: 'center', padding: '10px 0 4px' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>{isNewBest ? '🏆' : '🔗'}</div>
          <div
            style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}
          >
            {isNewBest
              ? t('assoc.newBestTitle')
              : endedByMistake
                ? t('assoc.chainEndedTitle')
                : t('assoc.chainCompleteTitle')}
          </div>
          <div style={{ fontSize: '.9rem', color: 'var(--text2)', marginBottom: 16 }}>
            {t('assoc.finalChain', { n: chain })}
          </div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
            <button
              onClick={() => sessionOpen()}
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
