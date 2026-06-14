// English Words App — js/app.ts
import type { WordEntry } from '../src/types.js';
import { _lzLoad, loadKnownEs, loadKnownFr, loadKnownIt, loadKnownPt, loadKnownDe } from './core/storage.ts';
import { W }                                       from '../data/words.js';
import { state }                                   from '../src/state.ts';
import { renderGameBar }                           from './features/render-game-bar.ts';
import { refreshGameBarLevel as renderLevelBadge } from './features/game-bar-level.tsx';
import { checkAchievements }                       from './features/render-achievements.ts';
import { render } from './core/card-engine.ts';
import './features/speech.ts';
import './features/card-actions.ts';
import './features/deck-filter.ts';
import './features/deck-mode.ts';
import './features/progress-io.ts';

const savedKnown = _lzLoad('ew_known', []);

state.srsData = _lzLoad('ew_srs', {});
// Міграція: старий формат (числа) → видаляємо
Object.keys(state.srsData).forEach(function(k: string){ if(typeof (state.srsData as any)[k]==='number') delete (state.srsData as any)[k]; });

state.known   = new Set<string>(savedKnown as string[]);
state.knownEs = loadKnownEs();
state.knownFr = loadKnownFr();
state.knownIt = loadKnownIt();
state.knownPt = loadKnownPt();
state.knownDe = loadKnownDe();

state._baseWords = W.slice() as unknown as WordEntry[];

// O(1) індекс: word → позиція у W (замість W.findIndex на кожній картці)
const _wordIdx = state._wordIdx;
W.forEach(function(w, i) { _wordIdx.set(w[0], i); });

// ── Власні слова: завантажуємо і додаємо в W ──
let _customWords: Array<{en:string;ua:string;ex_en?:string;ex_ua?:string}> = [];
try { _customWords = JSON.parse(localStorage.getItem('ew_custom') || '[]'); } catch(e){ console.warn('[custom] Load failed:', (e as Error).message); }
_customWords.forEach(function(c) {
  if (c.en && c.ua && !_wordIdx.has(c.en)) {
    W.push([c.en, c.ua, c.ex_en || c.en + '.', c.ex_ua || c.ua + '.', '']);
    _wordIdx.set(c.en, W.length - 1);
  }
});
state._customWords = _customWords;

try { renderGameBar(); } catch(e){ console.error((e as Error).message); }
renderLevelBadge();
checkAchievements();

render();
