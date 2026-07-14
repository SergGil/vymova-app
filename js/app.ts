// Vymova — js/app.ts
import type { WordEntry } from '../src/types.js';
import { ALL_TARGET_LANGS } from '../src/types.js';
import { _lzLoad, loadKnownLang, loadSRS } from './core/storage.ts';
import { W } from '../data/words.js';
import { setKnownWords } from '../src/known-words-store.ts';
import { loadSrsData } from '../src/srs-store.ts';
import { setBaseWords, getBaseWordsSnapshot } from '../src/deck-filter-store.ts';
import { renderGameBar } from './features/render-game-bar.ts';
import { refreshGameBarLevel as renderLevelBadge } from './features/game-bar-level.tsx';
import { checkAchievements } from './features/render-achievements.ts';
import { render, setDeck } from './core/card-engine.ts';
import { shuffle, updateSrsUI } from './core/srs.ts';
import { _idle } from './features/game.ts';
import './features/voice/speech.ts';

const savedKnown = _lzLoad('ew_known', []);

const _loadedSrs = loadSRS();
// Міграція: старий формат (числа) → видаляємо
Object.keys(_loadedSrs).forEach(function (k: string) {
  if (typeof (_loadedSrs as any)[k] === 'number') delete (_loadedSrs as any)[k];
});
loadSrsData(_loadedSrs);
// Перезавантажуємо SRS при зміні мови вчення (mid-session)
window.addEventListener('ew-learn-lang-changed', function () {
  loadSrsData(loadSRS());
  // Deferred: lang-pair-select.tsx dispatches this event *before* it rebuilds
  // the base-words store for the new language (via the legacy sel-mode 'change'
  // chain), so updateSrsUI must run after that synchronous chain finishes.
  setTimeout(function () {
    try {
      updateSrsUI((getBaseWordsSnapshot() ?? W) as unknown as WordEntry[]);
    } catch (e) {}
  }, 0);
});

setKnownWords('en', new Set<string>(savedKnown as string[]));
// Hydrates every TargetLang's known-words from storage at once — adding a
// new language to ALL_TARGET_LANGS (src/types.ts) is now enough on its own;
// no separate call needs to be added here.
for (const lang of ALL_TARGET_LANGS) {
  setKnownWords(lang, loadKnownLang(lang));
}

try {
  renderGameBar();
} catch (e) {
  console.error((e as Error).message);
}
renderLevelBadge();
checkAchievements();

// First paint only needs the one word render() is about to show, already
// sitting in the deck store from card-engine.ts's own module-level
// setDeckState(W.slice()) — unshuffled, but real, so this is enough to
// paint immediately.
render();

// Building the full base-words list and Fisher-Yates-shuffling all ~10k
// entries is pure overhead on the critical path to that first paint —
// deferred to right after it instead of blocking the initial render(). The
// deferred render() swaps in the properly shuffled starting word once it's
// ready (random card order on each load, so the deck doesn't always start
// at #1 — the point of the shuffle in the first place).
_idle(() => {
  setBaseWords(W.slice() as unknown as WordEntry[]);
  setDeck(shuffle((W as unknown as WordEntry[]).slice()));
  render();
});
