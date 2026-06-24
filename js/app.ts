// Vymova — js/app.ts
import type { WordEntry } from '../src/types.js';
import { _lzLoad, loadKnownEs, loadKnownFr, loadKnownIt, loadKnownPt, loadKnownDe, loadKnownHe, loadKnownAr, loadKnownPl, loadKnownZh, loadKnownEl, loadKnownJa, loadKnownTr, loadKnownNl, loadSRS } from './core/storage.ts';
import { W }                                       from '../data/words.js';
import { state }                                   from '../src/state.ts';
import { setKnownWords } from '../src/known-words-store.ts';
import { renderGameBar }                           from './features/render-game-bar.ts';
import { refreshGameBarLevel as renderLevelBadge } from './features/game-bar-level.tsx';
import { checkAchievements }                       from './features/render-achievements.ts';
import { render, setDeck } from './core/card-engine.ts';
import { shuffle, updateSrsUI } from './core/srs.ts';
import './features/speech.ts';

const savedKnown = _lzLoad('ew_known', []);

state.srsData = loadSRS();
// Міграція: старий формат (числа) → видаляємо
Object.keys(state.srsData).forEach(function(k: string){ if(typeof (state.srsData as any)[k]==='number') delete (state.srsData as any)[k]; });
// Перезавантажуємо SRS при зміні мови вчення (mid-session)
window.addEventListener('ew-learn-lang-changed', function() {
  state.srsData = loadSRS();
  state._srsStatsDirty = true;
  // Deferred: lang-pair-select.tsx dispatches this event *before* it rebuilds
  // state._baseWords for the new language (via the legacy sel-mode 'change'
  // chain), so updateSrsUI must run after that synchronous chain finishes.
  setTimeout(function() {
    try { updateSrsUI((state._baseWords ?? W) as unknown as WordEntry[]); } catch (e) {}
  }, 0);
});

setKnownWords('en', new Set<string>(savedKnown as string[]));
setKnownWords('es', loadKnownEs());
setKnownWords('fr', loadKnownFr());
setKnownWords('it', loadKnownIt());
setKnownWords('pt', loadKnownPt());
setKnownWords('de', loadKnownDe());
setKnownWords('he', loadKnownHe());
setKnownWords('ar', loadKnownAr());
setKnownWords('pl', loadKnownPl());
setKnownWords('zh', loadKnownZh());
setKnownWords('el', loadKnownEl());
setKnownWords('ja', loadKnownJa());
setKnownWords('tr', loadKnownTr());
setKnownWords('nl', loadKnownNl());

state._baseWords = W.slice() as unknown as WordEntry[];

// O(1) індекс: word → позиція у W (замість W.findIndex на кожній картці)
const _wordIdx = state._wordIdx;
W.forEach(function(w, i) { _wordIdx.set(w[0], i); });

// Random card order on each load, so the deck doesn't always start at #1.
setDeck(shuffle((W as unknown as WordEntry[]).slice()));

try { renderGameBar(); } catch(e){ console.error((e as Error).message); }
renderLevelBadge();
checkAchievements();

render();
