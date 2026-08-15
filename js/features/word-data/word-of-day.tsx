// Vymova — js/features/word-data/word-of-day.tsx
// "Слово дня" header widget. Picks a word matching the currently selected
// language pair, shows an illustrative image, and jumps to it on click.
import { useEffect, useState, type ReactElement } from 'react';
import { useLangVersion } from '../../../src/store.ts';
import { getDeckSnapshot } from '../../../src/deck-store.ts';
import { today } from '../../core/today.ts';
import { W } from '../../../data/words-data/words.js';
import type { WordEntry } from '../../../src/types.ts';
import { t } from '../i18n.ts';
import { getMode, entryFor, parsePair } from '../mode/mode-utils.ts';
import { subscribeMode } from '../../../src/mode-store.ts';
import { loadWikiImage } from '../../core/images.ts';
import { closePage } from '../sidebar/sidebar.tsx';
import { render, setIdx } from '../../core/card-engine.ts';

// Post-hash avalanche mix (Murmur3 finalizer) — without it, two dates that
// differ by a single character (e.g. any two consecutive days) produce raw
// hash values one apart, so wotdBaseIdx barely moved day to day and the
// word list (roughly alphabetical) was walked one entry at a time instead
// of jumping around. Mixing scatters even a 1-off input across the full
// 32-bit range before the modulo.
function mix32(x: number): number {
  x = Math.imul(x ^ (x >>> 16), 0x85ebca6b);
  x = Math.imul(x ^ (x >>> 13), 0xc2b2ae35);
  x = x ^ (x >>> 16);
  return x >>> 0;
}

const todayNum = today()
  .split('')
  .reduce((a, c) => a * 31 + c.charCodeAt(0), 0);
const wotdBaseIdx = mix32(todayNum) % W.length;

// Pick the word-of-the-day word matching the currently selected language
// pair — for modes involving a target language other than en/ua (which are
// always present, being the base dictionary), skip ahead to a word that
// actually has that language's translation.
function pickWord(mode: string): WordEntry {
  const words = W as unknown as WordEntry[];
  const { front, back } = parsePair(mode);
  const needsCheck = [front, back].filter((c) => c !== 'en' && c !== 'ua');
  if (needsCheck.length === 0) return words[wotdBaseIdx];
  for (let i = 0; i < words.length; i++) {
    const cand = words[(wotdBaseIdx + i) % words.length];
    if (needsCheck.every((c) => entryFor(c, cand).word)) return cand;
  }
  return words[wotdBaseIdx];
}

// Was a 13-language switch (es/fr/it/pt/de/he/ar/pl/zh/el/ja/tr/nl, plus
// ua/en) — every one of the 123 languages registered after that silently
// fell through to the `default: return cw[0]` English headword instead of
// its own translation. entryFor() (already used the same way throughout
// the other modes) resolves the front language of the pair generically, so
// a new language only needs registering in src/types.ts to show up here
// too — no per-mode case to remember.
function frontWord(cw: WordEntry, mode: string): string {
  return entryFor(parsePair(mode).front, cw).word;
}

function goToWord(word: WordEntry): void {
  const deck = getDeckSnapshot();
  let di = deck.findIndex((w) => w[0] === word[0]);
  if (di === -1) {
    deck.push(word);
    di = deck.length - 1;
  }
  setIdx(di);
  closePage();
  render();
}

export function WordOfDay(): ReactElement {
  useLangVersion();
  const [mode, setMode] = useState(getMode);
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [imgFailed, setImgFailed] = useState(false);

  const word = pickWord(mode);
  const front = frontWord(word, mode);
  const wordHead = word[0];

  useEffect(() => {
    return subscribeMode(() => setMode(getMode()));
  }, []);

  useEffect(() => {
    setImgUrl(null);
    setImgFailed(false);
    loadWikiImage(wordHead, (_w, url) => {
      if (url) setImgUrl(url);
      else setImgFailed(true);
    });
  }, [wordHead]);

  return (
    <div
      className="wotd-box header-wotd flex items-center gap-2.5 border rounded-[10px] py-[6px] px-3 m-0 cursor-pointer transition-[border-color] duration-150 hover:border-[var(--accent)] bg-[var(--wotd-box-bg)] border-[var(--wotd-box-border)] flex-row shrink-0 max-w-[240px] overflow-hidden [.gb-wotd-block_&]:flex-col! [.gb-wotd-block_&]:flex-1! [.gb-wotd-block_&]:min-h-0 [.gb-wotd-block_&]:bg-transparent! [.gb-wotd-block_&]:border-none! [.gb-wotd-block_&]:shadow-none! [.gb-wotd-block_&]:p-0! [.gb-wotd-block_&]:m-0! [.gb-wotd-block_&]:max-w-none! [.gb-wotd-block_&]:w-full!"
      title={t('cards.wotdTitle')}
      onClick={() => goToWord(word)}
    >
      <span className="wotd-lbl text-[0.6rem] font-bold tracking-[0.05em] uppercase text-[var(--text3)] whitespace-nowrap shrink-0 [.gb-wotd-block_&]:block [.gb-wotd-block_&]:text-center [.gb-wotd-block_&]:mb-1 [.gb-wotd-block_&]:flex-none">
        {t('cards.wotdLabel')}
      </span>
      <div className="wotd-body flex items-center gap-[9px] min-w-0 w-full [.gb-wotd-block_&]:flex-1 [.gb-wotd-block_&]:min-h-0 [.gb-wotd-block_&]:justify-center [.gb-wotd-block_&]:gap-2.5!">
        <div
          className={
            'wotd-img-wrap shrink-0 rounded-[7px] overflow-hidden bg-[var(--border)] flex items-center justify-center [.gb-wotd-block_&]:w-auto! [.gb-wotd-block_&]:h-full! [.gb-wotd-block_&]:aspect-square [.gb-wotd-block_&]:max-h-16 [.gb-wotd-block_&]:rounded-[10px]! size-[28px]' +
            (imgFailed ? ' hidden' : '')
          }
        >
          {imgUrl && (
            <img
              src={imgUrl}
              alt={word[0]}
              onError={() => setImgFailed(true)}
              className="object-cover rounded-[7px] size-full"
            />
          )}
        </div>
        <div className="flex flex-col gap-0.5 min-w-0 flex-1 overflow-hidden">
          <span className="wotd-word font-['DM_Serif_Display',serif] text-[0.85rem] font-bold text-[var(--accent)] max-w-full block leading-tight [text-shadow:var(--wotd-word-shadow)] [.gb-wotd-block_&]:text-[1.05rem]! truncate">
            {front}
          </span>
        </div>
      </div>
    </div>
  );
}
