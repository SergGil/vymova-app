// Vymova — js/modes/fib.tsx
// ✏️ FILL IN BLANK MODE
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { orderDeckPool } from '../core/srs.ts';
import { lev } from '../core/distance.ts';
import { getDeckSnapshot } from '../../src/deck-store.ts';
import { W } from '../../data/words.js';
import { addCombo, breakCombo, awardXP } from '../features/combo.ts';
import { recordModeComplete, recordMistake, recordModeAnswer } from '../features/game.ts';
import { t } from '../features/i18n.ts';
import { playSound } from '../core/audio.ts';
import { speak } from '../features/voice/speech.ts';
import type { WordEntry } from '../../src/types.js';
import {
  esEntry,
  frEntry,
  itEntry,
  ptEntry,
  deEntry,
  heEntry,
  arEntry,
  plEntry,
  zhEntry,
  elEntry,
  jaEntry,
  trEntry,
  nlEntry,
  viEntry,
  hiEntry,
  bnEntry,
  idEntry,
  pcmEntry,
  koEntry,
  faEntry,
  swEntry,
  msEntry,
  thEntry,
  azEntry,
  roEntry,
  huEntry,
  csEntry,
  kkEntry,
  svEntry,
  kaEntry,
  hrEntry,
  srEntry,
  bsEntry,
  bgEntry,
  skEntry,
  hyEntry,
  daEntry,
  fiEntry,
  noEntry,
  laEntry,
  ltEntry,
  lvEntry,
  etEntry,
  slEntry,
  mkEntry,
  sqEntry,
  isEntry,
  cyEntry,
  gaEntry,
  tlEntry,
  mnEntry,
  uzEntry,
  amEntry,
  eoEntry,
  taEntry,
  paEntry,
  zuEntry,
  afEntry,
  kyEntry,
  tgEntry,
  tkEntry,
  ugEntry,
  euEntry,
  caEntry,
  glEntry,
  mtEntry,
  lbEntry,
  htEntry,
  boEntry,
  myEntry,
  kmEntry,
  loEntry,
  neEntry,
  siEntry,
  urEntry,
  teEntry,
  mlEntry,
  knEntry,
  mrEntry,
  guEntry,
  orEntry,
  asEntry,
  sdEntry,
  psEntry,
  soEntry,
  haEntry,
  yoEntry,
  igEntry,
  tiEntry,
  woEntry,
  mgEntry,
  xhEntry,
  snEntry,
  nyEntry,
  fjEntry,
  smEntry,
  toEntry,
  miEntry,
  hawEntry,
  jvEntry,
  suEntry,
  gdEntry,
  brEntry,
  kwEntry,
  gvEntry,
  foEntry,
  ocEntry,
  coEntry,
  scEntry,
  fyEntry,
  yiEntry,
  ladEntry,
  quEntry,
  gnEntry,
  ayEntry,
  dzEntry,
  dvEntry,
  tetEntry,
  beEntry,
  qyaEntry,
  sjnEntry,
} from '../features/mode-utils.ts';
import { getLearnLang } from '../features/lang-pair-select.tsx';
import { ModeFinalScreen } from '../features/mode-final-screen.tsx';

const SIZE = 10;
type BlankItem = { sentence: string; answer: string; base: string };
type FibEntry = { w: WordEntry; blank: BlankItem };

function getLangWord(w: WordEntry, lang: string): string {
  switch (lang) {
    case 'ua':
      return w[1];
    case 'es':
      return esEntry(w[0])?.[0] ?? '';
    case 'fr':
      return frEntry(w[0])?.[0] ?? '';
    case 'it':
      return itEntry(w[0])?.[0] ?? '';
    case 'pt':
      return ptEntry(w[0])?.[0] ?? '';
    case 'de':
      return deEntry(w[0])?.[0] ?? '';
    case 'he':
      return heEntry(w[0])?.[0] ?? '';
    case 'ar':
      return arEntry(w[0])?.[0] ?? '';
    case 'pl':
      return plEntry(w[0])?.[0] ?? '';
    case 'zh':
      return zhEntry(w[0])?.[0] ?? '';
    case 'el':
      return elEntry(w[0])?.[0] ?? '';
    case 'ja':
      return jaEntry(w[0])?.[0] ?? '';
    case 'tr':
      return trEntry(w[0])?.[0] ?? '';
    case 'nl':
      return nlEntry(w[0])?.[0] ?? '';
    case 'vi':
      return viEntry(w[0])?.[0] ?? '';
    case 'hi':
      return hiEntry(w[0])?.[0] ?? '';
    case 'bn':
      return bnEntry(w[0])?.[0] ?? '';
    case 'id':
      return idEntry(w[0])?.[0] ?? '';
    case 'pcm':
      return pcmEntry(w[0])?.[0] ?? '';
    case 'ko':
      return koEntry(w[0])?.[0] ?? '';
    case 'fa':
      return faEntry(w[0])?.[0] ?? '';
    case 'sw':
      return swEntry(w[0])?.[0] ?? '';
    case 'ms':
      return msEntry(w[0])?.[0] ?? '';
    case 'th':
      return thEntry(w[0])?.[0] ?? '';
    case 'az':
      return azEntry(w[0])?.[0] ?? '';
    case 'ro':
      return roEntry(w[0])?.[0] ?? '';
    case 'hu':
      return huEntry(w[0])?.[0] ?? '';
    case 'cs':
      return csEntry(w[0])?.[0] ?? '';
    case 'kk':
      return kkEntry(w[0])?.[0] ?? '';
    case 'sv':
      return svEntry(w[0])?.[0] ?? '';
    case 'ka':
      return kaEntry(w[0])?.[0] ?? '';
    case 'hr':
      return hrEntry(w[0])?.[0] ?? '';
    case 'sr':
      return srEntry(w[0])?.[0] ?? '';
    case 'bs':
      return bsEntry(w[0])?.[0] ?? '';
    case 'bg':
      return bgEntry(w[0])?.[0] ?? '';
    case 'sk':
      return skEntry(w[0])?.[0] ?? '';
    case 'hy':
      return hyEntry(w[0])?.[0] ?? '';
    case 'da':
      return daEntry(w[0])?.[0] ?? '';
    case 'fi':
      return fiEntry(w[0])?.[0] ?? '';
    case 'no':
      return noEntry(w[0])?.[0] ?? '';
    case 'la':
      return laEntry(w[0])?.[0] ?? '';
    case 'lt':
      return ltEntry(w[0])?.[0] ?? '';
    case 'lv':
      return lvEntry(w[0])?.[0] ?? '';
    case 'et':
      return etEntry(w[0])?.[0] ?? '';
    case 'sl':
      return slEntry(w[0])?.[0] ?? '';
    case 'mk':
      return mkEntry(w[0])?.[0] ?? '';
    case 'sq':
      return sqEntry(w[0])?.[0] ?? '';
    case 'is':
      return isEntry(w[0])?.[0] ?? '';
    case 'cy':
      return cyEntry(w[0])?.[0] ?? '';
    case 'ga':
      return gaEntry(w[0])?.[0] ?? '';
    case 'tl':
      return tlEntry(w[0])?.[0] ?? '';
    case 'mn':
      return mnEntry(w[0])?.[0] ?? '';
    case 'uz':
      return uzEntry(w[0])?.[0] ?? '';
    case 'am':
      return amEntry(w[0])?.[0] ?? '';
    case 'eo':
      return eoEntry(w[0])?.[0] ?? '';
    case 'ta':
      return taEntry(w[0])?.[0] ?? '';
    case 'pa':
      return paEntry(w[0])?.[0] ?? '';
    case 'zu':
      return zuEntry(w[0])?.[0] ?? '';
    case 'af':
      return afEntry(w[0])?.[0] ?? '';
    case 'ky':
      return kyEntry(w[0])?.[0] ?? '';
    case 'tg':
      return tgEntry(w[0])?.[0] ?? '';
    case 'tk':
      return tkEntry(w[0])?.[0] ?? '';
    case 'ug':
      return ugEntry(w[0])?.[0] ?? '';
    case 'eu':
      return euEntry(w[0])?.[0] ?? '';
    case 'ca':
      return caEntry(w[0])?.[0] ?? '';
    case 'gl':
      return glEntry(w[0])?.[0] ?? '';
    case 'mt':
      return mtEntry(w[0])?.[0] ?? '';
    case 'lb':
      return lbEntry(w[0])?.[0] ?? '';
    case 'ht':
      return htEntry(w[0])?.[0] ?? '';
    case 'bo':
      return boEntry(w[0])?.[0] ?? '';
    case 'my':
      return myEntry(w[0])?.[0] ?? '';
    case 'km':
      return kmEntry(w[0])?.[0] ?? '';
    case 'lo':
      return loEntry(w[0])?.[0] ?? '';
    case 'ne':
      return neEntry(w[0])?.[0] ?? '';
    case 'si':
      return siEntry(w[0])?.[0] ?? '';
    case 'ur':
      return urEntry(w[0])?.[0] ?? '';
    case 'te':
      return teEntry(w[0])?.[0] ?? '';
    case 'ml':
      return mlEntry(w[0])?.[0] ?? '';
    case 'kn':
      return knEntry(w[0])?.[0] ?? '';
    case 'mr':
      return mrEntry(w[0])?.[0] ?? '';
    case 'gu':
      return guEntry(w[0])?.[0] ?? '';
    case 'or':
      return orEntry(w[0])?.[0] ?? '';
    case 'as':
      return asEntry(w[0])?.[0] ?? '';
    case 'sd':
      return sdEntry(w[0])?.[0] ?? '';
    case 'ps':
      return psEntry(w[0])?.[0] ?? '';
    case 'so':
      return soEntry(w[0])?.[0] ?? '';
    case 'ha':
      return haEntry(w[0])?.[0] ?? '';
    case 'yo':
      return yoEntry(w[0])?.[0] ?? '';
    case 'ig':
      return igEntry(w[0])?.[0] ?? '';
    case 'ti':
      return tiEntry(w[0])?.[0] ?? '';
    case 'wo':
      return woEntry(w[0])?.[0] ?? '';
    case 'mg':
      return mgEntry(w[0])?.[0] ?? '';
    case 'xh':
      return xhEntry(w[0])?.[0] ?? '';
    case 'sn':
      return snEntry(w[0])?.[0] ?? '';
    case 'ny':
      return nyEntry(w[0])?.[0] ?? '';
    case 'fj':
      return fjEntry(w[0])?.[0] ?? '';
    case 'sm':
      return smEntry(w[0])?.[0] ?? '';
    case 'to':
      return toEntry(w[0])?.[0] ?? '';
    case 'mi':
      return miEntry(w[0])?.[0] ?? '';
    case 'haw':
      return hawEntry(w[0])?.[0] ?? '';
    case 'jv':
      return jvEntry(w[0])?.[0] ?? '';
    case 'su':
      return suEntry(w[0])?.[0] ?? '';
    case 'gd':
      return gdEntry(w[0])?.[0] ?? '';
    case 'br':
      return brEntry(w[0])?.[0] ?? '';
    case 'kw':
      return kwEntry(w[0])?.[0] ?? '';
    case 'gv':
      return gvEntry(w[0])?.[0] ?? '';
    case 'fo':
      return foEntry(w[0])?.[0] ?? '';
    case 'oc':
      return ocEntry(w[0])?.[0] ?? '';
    case 'co':
      return coEntry(w[0])?.[0] ?? '';
    case 'sc':
      return scEntry(w[0])?.[0] ?? '';
    case 'fy':
      return fyEntry(w[0])?.[0] ?? '';
    case 'yi':
      return yiEntry(w[0])?.[0] ?? '';
    case 'lad':
      return ladEntry(w[0])?.[0] ?? '';
    case 'qu':
      return quEntry(w[0])?.[0] ?? '';
    case 'gn':
      return gnEntry(w[0])?.[0] ?? '';
    case 'ay':
      return ayEntry(w[0])?.[0] ?? '';
    case 'dz':
      return dzEntry(w[0])?.[0] ?? '';
    case 'dv':
      return dvEntry(w[0])?.[0] ?? '';
    case 'tet':
      return tetEntry(w[0])?.[0] ?? '';
    case 'be':
      return beEntry(w[0])?.[0] ?? '';
    case 'qya':
      return qyaEntry(w[0])?.[0] ?? '';
    case 'sjn':
      return sjnEntry(w[0])?.[0] ?? '';
    default:
      return w[0];
  }
}

function getLangSentence(w: WordEntry, lang: string): string {
  switch (lang) {
    case 'ua':
      return w[3] ?? '';
    case 'es':
      return esEntry(w[0])?.[1] ?? '';
    case 'fr':
      return frEntry(w[0])?.[1] ?? '';
    case 'it':
      return itEntry(w[0])?.[1] ?? '';
    case 'pt':
      return ptEntry(w[0])?.[1] ?? '';
    case 'de':
      return deEntry(w[0])?.[1] ?? '';
    case 'he':
      return heEntry(w[0])?.[1] ?? '';
    case 'ar':
      return arEntry(w[0])?.[1] ?? '';
    case 'pl':
      return plEntry(w[0])?.[1] ?? '';
    case 'zh':
      return zhEntry(w[0])?.[1] ?? '';
    case 'el':
      return elEntry(w[0])?.[1] ?? '';
    case 'ja':
      return jaEntry(w[0])?.[1] ?? '';
    case 'tr':
      return trEntry(w[0])?.[1] ?? '';
    case 'nl':
      return nlEntry(w[0])?.[1] ?? '';
    case 'vi':
      return viEntry(w[0])?.[1] ?? '';
    case 'hi':
      return hiEntry(w[0])?.[1] ?? '';
    case 'bn':
      return bnEntry(w[0])?.[1] ?? '';
    case 'id':
      return idEntry(w[0])?.[1] ?? '';
    case 'pcm':
      return pcmEntry(w[0])?.[1] ?? '';
    case 'ko':
      return koEntry(w[0])?.[1] ?? '';
    case 'fa':
      return faEntry(w[0])?.[1] ?? '';
    case 'sw':
      return swEntry(w[0])?.[1] ?? '';
    case 'ms':
      return msEntry(w[0])?.[1] ?? '';
    case 'th':
      return thEntry(w[0])?.[1] ?? '';
    case 'az':
      return azEntry(w[0])?.[1] ?? '';
    case 'ro':
      return roEntry(w[0])?.[1] ?? '';
    case 'hu':
      return huEntry(w[0])?.[1] ?? '';
    case 'cs':
      return csEntry(w[0])?.[1] ?? '';
    case 'kk':
      return kkEntry(w[0])?.[1] ?? '';
    case 'sv':
      return svEntry(w[0])?.[1] ?? '';
    case 'ka':
      return kaEntry(w[0])?.[1] ?? '';
    case 'hr':
      return hrEntry(w[0])?.[1] ?? '';
    case 'sr':
      return srEntry(w[0])?.[1] ?? '';
    case 'bs':
      return bsEntry(w[0])?.[1] ?? '';
    case 'bg':
      return bgEntry(w[0])?.[1] ?? '';
    case 'sk':
      return skEntry(w[0])?.[1] ?? '';
    case 'hy':
      return hyEntry(w[0])?.[1] ?? '';
    case 'da':
      return daEntry(w[0])?.[1] ?? '';
    case 'fi':
      return fiEntry(w[0])?.[1] ?? '';
    case 'no':
      return noEntry(w[0])?.[1] ?? '';
    case 'la':
      return laEntry(w[0])?.[1] ?? '';
    case 'lt':
      return ltEntry(w[0])?.[1] ?? '';
    case 'lv':
      return lvEntry(w[0])?.[1] ?? '';
    case 'et':
      return etEntry(w[0])?.[1] ?? '';
    case 'sl':
      return slEntry(w[0])?.[1] ?? '';
    case 'mk':
      return mkEntry(w[0])?.[1] ?? '';
    case 'sq':
      return sqEntry(w[0])?.[1] ?? '';
    case 'is':
      return isEntry(w[0])?.[1] ?? '';
    case 'cy':
      return cyEntry(w[0])?.[1] ?? '';
    case 'ga':
      return gaEntry(w[0])?.[1] ?? '';
    case 'tl':
      return tlEntry(w[0])?.[1] ?? '';
    case 'mn':
      return mnEntry(w[0])?.[1] ?? '';
    case 'uz':
      return uzEntry(w[0])?.[1] ?? '';
    case 'am':
      return amEntry(w[0])?.[1] ?? '';
    case 'eo':
      return eoEntry(w[0])?.[1] ?? '';
    case 'ta':
      return taEntry(w[0])?.[1] ?? '';
    case 'pa':
      return paEntry(w[0])?.[1] ?? '';
    case 'zu':
      return zuEntry(w[0])?.[1] ?? '';
    case 'af':
      return afEntry(w[0])?.[1] ?? '';
    case 'ky':
      return kyEntry(w[0])?.[1] ?? '';
    case 'tg':
      return tgEntry(w[0])?.[1] ?? '';
    case 'tk':
      return tkEntry(w[0])?.[1] ?? '';
    case 'ug':
      return ugEntry(w[0])?.[1] ?? '';
    case 'eu':
      return euEntry(w[0])?.[1] ?? '';
    case 'ca':
      return caEntry(w[0])?.[1] ?? '';
    case 'gl':
      return glEntry(w[0])?.[1] ?? '';
    case 'mt':
      return mtEntry(w[0])?.[1] ?? '';
    case 'lb':
      return lbEntry(w[0])?.[1] ?? '';
    case 'ht':
      return htEntry(w[0])?.[1] ?? '';
    case 'bo':
      return boEntry(w[0])?.[1] ?? '';
    case 'my':
      return myEntry(w[0])?.[1] ?? '';
    case 'km':
      return kmEntry(w[0])?.[1] ?? '';
    case 'lo':
      return loEntry(w[0])?.[1] ?? '';
    case 'ne':
      return neEntry(w[0])?.[1] ?? '';
    case 'si':
      return siEntry(w[0])?.[1] ?? '';
    case 'ur':
      return urEntry(w[0])?.[1] ?? '';
    case 'te':
      return teEntry(w[0])?.[1] ?? '';
    case 'ml':
      return mlEntry(w[0])?.[1] ?? '';
    case 'kn':
      return knEntry(w[0])?.[1] ?? '';
    case 'mr':
      return mrEntry(w[0])?.[1] ?? '';
    case 'gu':
      return guEntry(w[0])?.[1] ?? '';
    case 'or':
      return orEntry(w[0])?.[1] ?? '';
    case 'as':
      return asEntry(w[0])?.[1] ?? '';
    case 'sd':
      return sdEntry(w[0])?.[1] ?? '';
    case 'ps':
      return psEntry(w[0])?.[1] ?? '';
    case 'so':
      return soEntry(w[0])?.[1] ?? '';
    case 'ha':
      return haEntry(w[0])?.[1] ?? '';
    case 'yo':
      return yoEntry(w[0])?.[1] ?? '';
    case 'ig':
      return igEntry(w[0])?.[1] ?? '';
    case 'ti':
      return tiEntry(w[0])?.[1] ?? '';
    case 'wo':
      return woEntry(w[0])?.[1] ?? '';
    case 'mg':
      return mgEntry(w[0])?.[1] ?? '';
    case 'xh':
      return xhEntry(w[0])?.[1] ?? '';
    case 'sn':
      return snEntry(w[0])?.[1] ?? '';
    case 'ny':
      return nyEntry(w[0])?.[1] ?? '';
    case 'fj':
      return fjEntry(w[0])?.[1] ?? '';
    case 'sm':
      return smEntry(w[0])?.[1] ?? '';
    case 'to':
      return toEntry(w[0])?.[1] ?? '';
    case 'mi':
      return miEntry(w[0])?.[1] ?? '';
    case 'haw':
      return hawEntry(w[0])?.[1] ?? '';
    case 'jv':
      return jvEntry(w[0])?.[1] ?? '';
    case 'su':
      return suEntry(w[0])?.[1] ?? '';
    case 'gd':
      return gdEntry(w[0])?.[1] ?? '';
    case 'br':
      return brEntry(w[0])?.[1] ?? '';
    case 'kw':
      return kwEntry(w[0])?.[1] ?? '';
    case 'gv':
      return gvEntry(w[0])?.[1] ?? '';
    case 'fo':
      return foEntry(w[0])?.[1] ?? '';
    case 'oc':
      return ocEntry(w[0])?.[1] ?? '';
    case 'co':
      return coEntry(w[0])?.[1] ?? '';
    case 'sc':
      return scEntry(w[0])?.[1] ?? '';
    case 'fy':
      return fyEntry(w[0])?.[1] ?? '';
    case 'yi':
      return yiEntry(w[0])?.[1] ?? '';
    case 'lad':
      return ladEntry(w[0])?.[1] ?? '';
    case 'qu':
      return quEntry(w[0])?.[1] ?? '';
    case 'gn':
      return gnEntry(w[0])?.[1] ?? '';
    case 'ay':
      return ayEntry(w[0])?.[1] ?? '';
    case 'dz':
      return dzEntry(w[0])?.[1] ?? '';
    case 'dv':
      return dvEntry(w[0])?.[1] ?? '';
    case 'tet':
      return tetEntry(w[0])?.[1] ?? '';
    case 'be':
      return beEntry(w[0])?.[1] ?? '';
    case 'qya':
      return qyaEntry(w[0])?.[1] ?? '';
    case 'sjn':
      return sjnEntry(w[0])?.[1] ?? '';
    default:
      return w[2] ?? '';
  }
}

function makeBlank(w: WordEntry, learnLang: string = 'en'): BlankItem | null {
  const learnWord = getLangWord(w, learnLang);
  if (!learnWord) return null;
  let sentence = getLangSentence(w, learnLang);
  if (!sentence || sentence.length < 5) {
    // fallback to EN sentence if current lang has no sentence
    if (learnLang !== 'en') sentence = w[2] ?? '';
    if (!sentence || sentence.length < 5) return null;
  }
  if (!sentence.includes('<b>')) {
    const esc = learnWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    sentence = sentence.replace(new RegExp('(' + esc + ')', 'i'), '<b>$1</b>');
    // if still no match and learnLang is not EN, also try EN word
    if (!sentence.includes('<b>') && learnLang !== 'en') {
      const escEn = w[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      sentence = sentence.replace(new RegExp('(' + escEn + ')', 'i'), '<b>$1</b>');
    }
  }
  const m = sentence.match(/<b>(.*?)<\/b>/i);
  if (!m) return null;
  return {
    sentence: sentence.replace(/<b>.*?<\/b>/i, '<span class="fib-blank">___</span>'),
    answer: m[1],
    base: w[0],
  };
}

function build(): FibEntry[] {
  const learnLang = getLearnLang();
  const base = (getDeckSnapshot().length
    ? getDeckSnapshot().slice()
    : W.slice()) as unknown as WordEntry[];
  const pool = orderDeckPool(base);
  const deck: FibEntry[] = [];
  for (let i = 0; i < pool.length && deck.length < SIZE; i++) {
    const b = makeBlank(pool[i], learnLang);
    if (b) deck.push({ w: pool[i], blank: b });
  }
  return deck;
}

function renderSentence(item: FibEntry, correct: boolean | null): string {
  if (correct === null) return item.blank.sentence;
  const hlStyle = correct
    ? 'background:color-mix(in srgb, var(--success) 15%, transparent);border-color:var(--success);color:var(--success)'
    : 'background:color-mix(in srgb, var(--danger) 12%, transparent);border-color:var(--danger);color:var(--danger)';
  return item.blank.sentence.replace(
    /<span class="fib-blank">.*?<\/span>/,
    `<span class="fib-blank" style="${hlStyle};border-radius:4px;padding:0 4px;">${item.blank.answer}</span>`,
  );
}

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

export function openFib(): void {
  _open?.();
}
function closeFib(): void {
  _close?.();
}

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
    return () => {
      _open = null;
      _close = null;
    };
  }, []);

  // Focus input on new question
  useEffect(() => {
    if (!isOpen || !item) return;
    const tmr = setTimeout(() => {
      try {
        inputRef.current?.focus();
      } catch (e) {}
    }, 60);
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
    setIdx((i) => i + 1);
    setInput('');
    setResult(null);
    setHint('');
  };

  const submit = (): void => {
    if (!item || result !== null) return;
    const inp = input.trim().toLowerCase();
    const ans = item.blank.answer.toLowerCase();
    const base = item.blank.base.toLowerCase();
    const okAnswer =
      inp === ans ||
      inp === base ||
      (ans.length > 3 && lev(inp, ans) <= 1) ||
      (base.length > 3 && lev(inp, base) <= 1);
    setResult(okAnswer);
    if (okAnswer) {
      setOk((o) => o + 1);
      try {
        addCombo();
        awardXP(5);
        playSound('know');
      } catch (e) {}
      recordModeAnswer('fib', true);
    } else {
      setFail((f) => f + 1);
      try {
        breakCombo();
        playSound('next');
      } catch (e) {}
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
    const speakWord =
      getLearnLang() === 'en'
        ? item.blank.answer
        : getLangWord(item.w, getLearnLang()) || item.blank.answer;
    try {
      speak(speakWord, inputRef.current as unknown as HTMLElement);
    } catch (e) {}
  };

  // Keyboard shortcuts
  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        closeFib();
        return;
      }
      const { result: curResult, idx: curIdx, deck: curDeck } = stateRef.current;
      if (
        (e.key === 'ArrowRight' || e.key === ' ') &&
        curResult !== null &&
        document.activeElement !== inputRef.current
      ) {
        if (curIdx < curDeck.length) {
          e.preventDefault();
          advanceQ();
        }
      }
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, [isOpen]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
        }}
      >
        <div>
          <div
            style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)' }}
            data-i18n="fib.title"
          >
            {t('fib.title')}
          </div>
          <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 2 }}>
            {!showFinal && !noSentences && item
              ? `${t('fib.sentence')} ${idx + 1} ${t('common.of')} ${deck.length}`
              : showFinal
                ? t('write.completed')
                : ''}
          </div>
        </div>
        <button
          onClick={closeFib}
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

      <div
        style={{
          height: 4,
          background: 'var(--border)',
          borderRadius: 4,
          marginBottom: 18,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            background: 'var(--accent)',
            borderRadius: 4,
            transition: 'width .4s',
            width: showFinal ? '100%' : `${deck.length ? (idx / deck.length) * 100 : 0}%`,
          }}
        />
      </div>

      {noSentences && (
        <div style={{ color: 'var(--danger)', fontSize: '.9rem' }}>{t('fib.noSentences')}</div>
      )}

      {!noSentences && !showFinal && item && (
        <>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginBottom: 14 }}>
            <span style={{ fontSize: '.82rem', color: 'var(--success)', fontWeight: 600 }}>
              ✓ {ok}
            </span>
            <span style={{ fontSize: '.82rem', color: 'var(--danger)', fontWeight: 600 }}>
              ✗ {fail}
            </span>
          </div>

          <div
            style={{
              background: 'var(--bg)',
              borderRadius: 14,
              padding: '20px 16px',
              textAlign: 'center',
              marginBottom: 14,
            }}
          >
            <div
              style={{
                fontSize: '.65rem',
                fontWeight: 700,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: 'var(--text3)',
                marginBottom: 10,
              }}
            >
              Вставте пропущене слово
            </div>
            <div
              className="fib-sentence"
              dangerouslySetInnerHTML={{ __html: renderSentence(item, result) }}
            />
            {hint && (
              <div
                style={{
                  fontSize: '.75rem',
                  color: 'var(--text3)',
                  marginTop: 8,
                  fontStyle: 'italic',
                }}
              >
                {hint}
              </div>
            )}
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
                if (result === null) submit();
                else advanceQ();
              }
            }}
            style={{
              width: '100%',
              padding: '12px 16px',
              border: `2px solid ${result === null ? 'var(--border)' : result ? 'var(--success)' : 'var(--danger)'}`,
              borderRadius: 12,
              fontSize: '1rem',
              fontFamily: "'DM Sans',sans-serif",
              background: 'var(--bg)',
              color: 'var(--text)',
              outline: 'none',
              boxSizing: 'border-box',
              marginBottom: 10,
              transition: 'border-color .2s',
            }}
          />

          <div
            style={{
              minHeight: 24,
              textAlign: 'center',
              fontSize: '.9rem',
              fontWeight: 600,
              marginBottom: 10,
            }}
          >
            {result === true && (
              <span style={{ color: 'var(--success)' }}>{t('quiz.correctMsg')}</span>
            )}
            {result === false && (
              <>
                <span style={{ color: 'var(--danger)' }}>{t('quiz.incorrectMsg')}</span>
                <button
                  className="mode-speak"
                  title={t('common.listen')}
                  onClick={speakCorrectWord}
                >
                  🔊
                </button>
              </>
            )}
          </div>

          <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
            {result === null && (
              <button
                onClick={submit}
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: '.9rem',
                  fontWeight: 600,
                  padding: '11px 28px',
                  borderRadius: 10,
                  border: 'none',
                  background: 'var(--accent)',
                  color: '#fff',
                  cursor: 'pointer',
                }}
                data-i18n="write.checkBtn"
              >
                {t('write.checkBtn')}
              </button>
            )}
            {result !== null && (
              <button
                onClick={advanceQ}
                autoFocus
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: '.9rem',
                  fontWeight: 600,
                  padding: '11px 28px',
                  borderRadius: 10,
                  border: 'none',
                  background: 'var(--accent)',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                {idx >= deck.length - 1 ? t('quiz.finish') : t('quiz.next')}
              </button>
            )}
            <button
              onClick={showHint}
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: '.82rem',
                padding: '11px 14px',
                borderRadius: 10,
                border: '1.5px solid var(--border)',
                background: 'none',
                color: 'var(--text3)',
                cursor: 'pointer',
              }}
            >
              💡
            </button>
          </div>
        </>
      )}

      {showFinal && (
        <ModeFinalScreen
          ok={ok}
          total={deck.length}
          keepGoingKey="listen.keepGoingTitle"
          onRetry={startGame}
          onClose={closeFib}
        />
      )}
    </>
  );
}

import { bindOverlayOpenClose } from '../features/overlay-utils.ts';
bindOverlayOpenClose('btn-fib', 'fib-overlay', openFib, closeFib);
