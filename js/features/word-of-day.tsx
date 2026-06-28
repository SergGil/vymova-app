// Vymova — js/features/word-of-day.tsx
// "Слово дня" header widget. Picks a word matching the currently selected
// language pair, shows an illustrative image, and jumps to it on click.
import { useEffect, useState, type ReactElement } from 'react';
import { useStateVersion } from '../../src/store.ts';
import { getDeckSnapshot } from '../../src/deck-store.ts';
import { today } from '../core/today.ts';
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.ts';
import { t } from './i18n.ts';
import { ES_MODES, FR_MODES, IT_MODES, PT_MODES, DE_MODES, HE_MODES, AR_MODES, PL_MODES, ZH_MODES, EL_MODES, JA_MODES, TR_MODES, NL_MODES, getMode, esEntry as _esEntry, frEntry as _frEntry, itEntry as _itEntry, ptEntry as _ptEntry, deEntry as _deEntry, heEntry as _heEntry, arEntry as _arEntry, plEntry as _plEntry, zhEntry as _zhEntry, elEntry as _elEntry, jaEntry as _jaEntry, trEntry as _trEntry, nlEntry as _nlEntry } from './mode-utils.ts';
import { loadWikiImage } from '../core/images.ts';
import { closePage } from './sidebar.tsx';
import { render, setIdx } from '../core/card-engine.ts';

const todayNum = today().split('').reduce((a, c) => a * 31 + c.charCodeAt(0), 0);
const wotdBaseIdx = Math.abs(todayNum) % W.length;

// Pick the word-of-the-day word matching the currently selected language pair:
// for ES/FR-involving modes, skip ahead to a word that has the needed translation(s).
function pickWord(mode: string): WordEntry {
  const words = W as unknown as WordEntry[];
  const needsEs = ES_MODES.has(mode);
  const needsFr = FR_MODES.has(mode);
  const needsIt = IT_MODES.has(mode);
  const needsPt = PT_MODES.has(mode);
  const needsDe = DE_MODES.has(mode);
  const needsHe = HE_MODES.has(mode);
  const needsAr = AR_MODES.has(mode);
  const needsPl = PL_MODES.has(mode);
  const needsZh = ZH_MODES.has(mode);
  const needsEl = EL_MODES.has(mode);
  const needsJa = JA_MODES.has(mode);
  const needsTr = TR_MODES.has(mode);
  const needsNl = NL_MODES.has(mode);
  if (!needsEs && !needsFr && !needsIt && !needsPt && !needsDe && !needsHe && !needsAr && !needsPl && !needsZh && !needsEl && !needsJa && !needsTr && !needsNl) return words[wotdBaseIdx];
  for (let i = 0; i < words.length; i++) {
    const cand = words[(wotdBaseIdx + i) % words.length];
    if (needsEs && !_esEntry(cand[0])) continue;
    if (needsFr && !_frEntry(cand[0])) continue;
    if (needsIt && !_itEntry(cand[0])) continue;
    if (needsPt && !_ptEntry(cand[0])) continue;
    if (needsDe && !_deEntry(cand[0])) continue;
    if (needsHe && !_heEntry(cand[0])) continue;
    if (needsAr && !_arEntry(cand[0])) continue;
    if (needsPl && !_plEntry(cand[0])) continue;
    if (needsZh && !_zhEntry(cand[0])) continue;
    if (needsEl && !_elEntry(cand[0])) continue;
    if (needsJa && !_jaEntry(cand[0])) continue;
    if (needsTr && !_trEntry(cand[0])) continue;
    if (needsNl && !_nlEntry(cand[0])) continue;
    return cand;
  }
  return words[wotdBaseIdx];
}

function frontWord(cw: WordEntry, mode: string): string {
  const es = ES_MODES.has(mode) ? _esEntry(cw[0]) : null;
  const fr = FR_MODES.has(mode) ? _frEntry(cw[0]) : null;
  const it = IT_MODES.has(mode) ? _itEntry(cw[0]) : null;
  const pt = PT_MODES.has(mode) ? _ptEntry(cw[0]) : null;
  const de = DE_MODES.has(mode) ? _deEntry(cw[0]) : null;
  const he = HE_MODES.has(mode) ? _heEntry(cw[0]) : null;
  const ar = AR_MODES.has(mode) ? _arEntry(cw[0]) : null;
  const pl = PL_MODES.has(mode) ? _plEntry(cw[0]) : null;
  const zh = ZH_MODES.has(mode) ? _zhEntry(cw[0]) : null;
  const el = EL_MODES.has(mode) ? _elEntry(cw[0]) : null;
  const ja = JA_MODES.has(mode) ? _jaEntry(cw[0]) : null;
  const tr = TR_MODES.has(mode) ? _trEntry(cw[0]) : null;
  const nl = NL_MODES.has(mode) ? _nlEntry(cw[0]) : null;
  switch (mode) {
    case 'ua':    return cw[1];
    case 'es-en':
    case 'es-ua': return es ? es[0] : '';
    case 'ua-es': return cw[1];
    case 'fr-en':
    case 'fr-ua': return fr ? fr[0] : '';
    case 'ua-fr': return cw[1];
    case 'es-fr': return es ? es[0] : '';
    case 'fr-es': return fr ? fr[0] : '';
    case 'it-en':
    case 'it-ua': return it ? it[0] : '';
    case 'ua-it': return cw[1];
    case 'pt-en':
    case 'pt-ua': return pt ? pt[0] : '';
    case 'ua-pt': return cw[1];
    case 'de-en':
    case 'de-ua': return de ? de[0] : '';
    case 'ua-de': return cw[1];
    case 'he-en':
    case 'he-ua': return he ? he[0] : '';
    case 'ua-he': return cw[1];
    case 'ar-en':
    case 'ar-ua': return ar ? ar[0] : '';
    case 'ua-ar': return cw[1];
    case 'pl-en':
    case 'pl-ua': return pl ? pl[0] : '';
    case 'ua-pl': return cw[1];
    case 'zh-en':
    case 'zh-ua': return zh ? zh[0] : '';
    case 'ua-zh': return cw[1];
    case 'el-en':
    case 'el-ua': return el ? el[0] : '';
    case 'ua-el': return cw[1];
    case 'ja-en':
    case 'ja-ua': return ja ? ja[0] : '';
    case 'ua-ja': return cw[1];
    case 'tr-en':
    case 'tr-ua': return tr ? tr[0] : '';
    case 'ua-tr': return cw[1];
    case 'nl-en':
    case 'nl-ua': return nl ? nl[0] : '';
    case 'ua-nl': return cw[1];
    default:      return cw[0];
  }
}

function goToWord(word: WordEntry): void {
  const deck = getDeckSnapshot();
  let di = deck.findIndex(w => w[0] === word[0]);
  if (di === -1) { deck.push(word); di = deck.length - 1; }
  setIdx(di);
  closePage();
  render();
}

export function WordOfDay(): ReactElement {
  useStateVersion();
  const [mode, setMode] = useState(getMode);
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [imgFailed, setImgFailed] = useState(false);

  const word = pickWord(mode);
  const front = frontWord(word, mode);

  useEffect(() => {
    const sel = document.getElementById('sel-mode');
    const onChange = () => setMode(getMode());
    sel?.addEventListener('change', onChange);
    return () => sel?.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    setImgUrl(null);
    setImgFailed(false);
    loadWikiImage(word[0], (_w, url) => {
      if (url) setImgUrl(url); else setImgFailed(true);
    });
  }, [word[0]]);

  return (
    <div className="wotd-box header-wotd" title={t('cards.wotdTitle')} onClick={() => goToWord(word)}>
      <span className="wotd-lbl">{t('cards.wotdLabel')}</span>
      <div className="wotd-body">
        <div className={`wotd-img-wrap${imgFailed ? ' wotd-no-img' : ''}`}>
          {imgUrl && <img src={imgUrl} alt={word[0]} onError={() => setImgFailed(true)} />}
        </div>
        <div className="wotd-text">
          <span className="wotd-word">{front}</span>
        </div>
      </div>
    </div>
  );
}

