// English Words App — js/features/word-of-day.tsx
// "Слово дня" sidebar widget. Picks a word matching the currently selected
// language pair, shows an illustrative image, and jumps to it on click.
import { useEffect, useState, type ReactElement } from 'react';
import { state } from '../../src/state.ts';
import { notifyStateChange, useStateVersion } from '../../src/store.ts';
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.ts';
import { t } from './i18n.ts';
import { ES_MODES, FR_MODES, getMode, esEntry as _esEntry, frEntry as _frEntry } from './mode-utils.ts';
import { loadWikiImage } from '../core/images.ts';

const todayNum = state.TODAY.split('').reduce((a, c) => a * 31 + c.charCodeAt(0), 0);
const wotdBaseIdx = Math.abs(todayNum) % W.length;

// Pick the word-of-the-day word matching the currently selected language pair:
// for ES/FR-involving modes, skip ahead to a word that has the needed translation(s).
function pickWord(mode: string): WordEntry {
  const words = W as unknown as WordEntry[];
  const needsEs = ES_MODES.has(mode);
  const needsFr = FR_MODES.has(mode);
  if (!needsEs && !needsFr) return words[wotdBaseIdx];
  for (let i = 0; i < words.length; i++) {
    const cand = words[(wotdBaseIdx + i) % words.length];
    if (needsEs && !_esEntry(cand[0])) continue;
    if (needsFr && !_frEntry(cand[0])) continue;
    return cand;
  }
  return words[wotdBaseIdx];
}

function frontWord(cw: WordEntry, mode: string): string {
  const es = ES_MODES.has(mode) ? _esEntry(cw[0]) : null;
  const fr = FR_MODES.has(mode) ? _frEntry(cw[0]) : null;
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
    default:      return cw[0];
  }
}

function goToWord(word: WordEntry): void {
  const deck = state.deck as WordEntry[];
  let di = deck.findIndex(w => w[0] === word[0]);
  if (di === -1) { deck.push(word); di = deck.length - 1; }
  (window.setIdx as ((i: number) => void) | undefined)?.(di);
  (window.closePage as (() => void) | undefined)?.();
  (window.render as (() => void) | undefined)?.();
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
    <div className="wotd-box sb-wotd" title={t('cards.wotdTitle')} onClick={() => goToWord(word)}>
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

export function refreshWordOfDay(): void {
  notifyStateChange();
}

(window as unknown as { _refreshWordOfDay?: () => void })._refreshWordOfDay = refreshWordOfDay;
