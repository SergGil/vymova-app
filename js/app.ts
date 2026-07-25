// Vymova — js/app.ts
import type { WordEntry } from '../src/types.js';
import { ALL_TARGET_LANGS } from '../src/types.js';
import { _lzLoad, loadKnownLang, loadSRS } from './core/storage.ts';
import { W } from '../data/words-data/words.js';
import { setKnownWords } from '../src/known-words-store.ts';
import { loadSrsData } from '../src/srs-store.ts';
import { setBaseWords, getBaseWordsSnapshot } from '../src/deck-filter-store.ts';
import { renderGameBar } from './features/game/render-game-bar.ts';
import { refreshGameBarLevel as renderLevelBadge } from './features/game/game-bar-level.tsx';
import { checkAchievements } from './features/achievements/render-achievements.ts';
import { render, setDeck } from './core/card-engine.ts';
import { shuffle, updateSrsUI } from './core/srs.ts';
import { _idle } from './features/game/game.ts';
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
  // the base-words store for the new language (via src/mode-store.ts's
  // setMode()/subscribeMode() chain), so updateSrsUI must run after that
  // synchronous chain finishes.
  setTimeout(function () {
    try {
      updateSrsUI((getBaseWordsSnapshot() ?? W) as unknown as WordEntry[]);
    } catch (e) {}
  }, 0);
});

setKnownWords('en', new Set<string>(savedKnown as string[]));
// Only the currently active learn/know target language (if either isn't the
// base en/ua pool) needs its known-words hydrated before the very first
// render() — render() checks whether the shown word is in that set to style
// the card. The other ~134 target languages the app supports are pure boot
// overhead for the (overwhelmingly common) case where the user has never
// touched them: a synchronous localStorage read *and* a known-words-store
// dispatch each, for nothing. Hydrating all of them still happens — just
// deferred into the same _idle() callback as the word-table shuffle below —
// since profile-page.tsx's "total XP across all languages" / "other
// languages with known words" lists do need every language's data once that
// page is actually opened, not at boot.
const _activeLearnLang = localStorage.getItem('ew_learn_lang');
const _activeKnowLang = localStorage.getItem('ew_know_lang');
const _eagerLangs = ALL_TARGET_LANGS.filter(
  (lang) => lang === _activeLearnLang || lang === _activeKnowLang,
);
for (const lang of _eagerLangs) {
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
  for (const lang of ALL_TARGET_LANGS) {
    if (!_eagerLangs.includes(lang)) setKnownWords(lang, loadKnownLang(lang));
  }
});
