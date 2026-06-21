// Vymova — js/core/card-engine.ts
// Ядро картки: deck/idx/flipped/cw/autoTimer + render()/анімації/auto-play/onWordLearned.
// Перенесено з js/app.ts (Фаза 7.5, Під-фаза D).
import type { WordEntry } from '../../src/types.js';
import { W }                                       from '../../data/words.js';
import { getIllus }                                from '../../data/illustrations.js';
import { loadWikiImage, _imgCache, _idb }          from './images.ts';
import { state }                                   from '../../src/state.ts';
import { notifyStateChange }                       from '../../src/store.ts';
import { synth }                                    from './srs.ts';
import { awardXP }                                  from '../features/combo.ts';
import { showComboToast }                           from '../features/combo-toast.tsx';
import { getGameData, saveGameData, recordDailyWord,
         updateStreak,
         _idle }                                    from '../features/game.ts';
import { isBookmarked }                            from '../features/bookmarks.ts';
import { getNoteForWord, hasNote }                 from '../features/notes.ts';
import { t }                                       from '../features/i18n.ts';
import { renderGameBar }                           from '../features/render-game-bar.ts';
import { refreshGameBarLevel as renderLevelBadge } from '../features/game-bar-level.tsx';
import { checkAchievements }                       from '../features/render-achievements.ts';
import { maybeSubmitScore }                        from '../features/leaderboard.tsx';
import { updateRing }                              from '../features/ring.tsx';
import { ES_MODES, FR_MODES, IT_MODES, PT_MODES, DE_MODES, HE_MODES, AR_MODES, PL_MODES, ZH_MODES, EL_MODES, JA_MODES, TR_MODES, NL_MODES, getMode } from '../features/mode-utils.ts';
import { _isOnlineCheck, _offlineSvg }             from '../features/offline.ts';
import { safe as _safe }                           from './card-helpers.ts';

let deck: WordEntry[] = W.slice() as unknown as WordEntry[];
let idx = 0, flipped = false;
let cw: WordEntry | null = null, autoTimer: ReturnType<typeof setTimeout> | null = null;

state.deck = deck as unknown as WordEntry[];

function _activeKnown(): Set<string> {
  const mode = getMode();
  if (ES_MODES.has(mode)) return state.knownEs;
  if (FR_MODES.has(mode)) return state.knownFr;
  if (IT_MODES.has(mode)) return state.knownIt;
  if (PT_MODES.has(mode)) return state.knownPt;
  if (DE_MODES.has(mode)) return state.knownDe;
  if (HE_MODES.has(mode)) return state.knownHe;
  if (AR_MODES.has(mode)) return state.knownAr;
  if (PL_MODES.has(mode)) return state.knownPl;
  if (ZH_MODES.has(mode)) return state.knownZh;
  if (EL_MODES.has(mode)) return state.knownEl;
  if (JA_MODES.has(mode)) return state.knownJa;
  if (TR_MODES.has(mode)) return state.knownTr;
  if (NL_MODES.has(mode)) return state.knownNl;
  return state.known;
}

// ── Single-source helpers — call instead of writing to all 3 stores manually ──
export function setDeck(d: WordEntry[]): void {
  deck = d;
  state.deck = d as unknown as WordEntry[];
}
export function setIdx(i: number): void {
  idx = i;
  state.idx = i;
}
function _setCw(w: WordEntry | null): void {
  cw = w;
  state.cw = w;
}
export function setFlipped(v: boolean): void {
  flipped = v;
  state.flipped = v;
}

// Helper: get cached element with null safety
function $e(id: string): HTMLElement { return $el[id] as HTMLElement; }

// Кеш DOM-елементів: уникаємо getElementById на кожен render()
const $el: Record<string, HTMLElement | null> = {};
['illus','card'].forEach(function(id: string) {
  $el[id] = document.getElementById(id);
});

export function stopAuto(): void {
  if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
  const btnAuto = document.getElementById('btn-auto');
  if (btnAuto) btnAuto.textContent = t('cards.auto');
}

export function isAutoRunning(): boolean { return !!autoTimer; }

export function startAuto(): void {
  autoTimer = setInterval(() => { animCard('next'); idx = (idx + 1) % deck.length; render(); }, 4500);
}

// ── Card animation ─────────────────────────────────────────────────────────
export function animCard(dir: 'next' | 'prev' | 'fade'): void {
  const face = document.querySelector<HTMLElement>('.card-face');
  if (!face || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cls = dir === 'next' ? 'anim-next' : dir === 'prev' ? 'anim-prev' : 'anim-fade';
  face.classList.remove('anim-next', 'anim-prev', 'anim-fade');
  void face.offsetWidth; // force reflow
  face.classList.add(cls);
  setTimeout(() => face.classList.remove(cls), 250);
}

// ── render() sub-helpers ───────────────────────────────────────────────────

function renderCardIndicators(word: string): void {
  const _noteBtn  = document.getElementById('btn-note');
  const _bmBtn    = document.getElementById('btn-bookmark');
  const _noteDisp = document.getElementById('card-note-display');
  if (_bmBtn) {
    const _isBm = isBookmarked(word);
    _bmBtn.textContent = _isBm ? '★' : '☆';
    _bmBtn.style.color = _isBm ? '#f1c40f' : '';
  }
  if (_noteDisp) {
    const _note = getNoteForWord(word);
    if (_note) { _noteDisp.textContent = '📝 ' + _note; _noteDisp.style.display = ''; }
    else        { _noteDisp.style.display = 'none'; }
  }
  if (_noteBtn) {
    _noteBtn.style.opacity = hasNote(word) ? '1' : '0.5';
  }
}

const _IMG_S = 'width:100%;height:100%;object-fit:cover;border-radius:8px;';

function renderCardImage(word: string, illusEl: HTMLElement): void {
  try {
    if (_imgCache.hasOwnProperty(word) && _imgCache[word]) {
      // Є закешоване фото → показати одразу, з onerror якщо URL протух
      (function(w, el) {
        const img = document.createElement('img');
        img.alt = ''; img.loading = 'lazy'; img.style.cssText = _IMG_S;
        const _clearAndRefetch = function() {
          delete _imgCache[w];
          if (typeof _idb !== 'undefined' && _idb) {
            try { _idb.transaction('imgs','readwrite').objectStore('imgs').delete(w); } catch(e2){}
          }
          const fb = getIllus(w);
          if (fb) { el.innerHTML = fb; el.style.display = ''; }
          else    { el.innerHTML = ''; el.style.display = 'none'; }
          loadWikiImage(w, function(wd, newUrl) {
            if (!cw || cw[0] !== wd) return;
            if (newUrl) {
              const _ni = document.createElement('img');
              _ni.alt = ''; _ni.loading = 'lazy'; _ni.style.cssText = _IMG_S;
              _ni.onload  = function(){ if (_ni.naturalWidth < 10) el.style.display='none'; };
              _ni.onerror = function(){ el.style.display='none'; };
              _ni.src = newUrl;
              el.innerHTML = ''; el.appendChild(_ni); el.style.display = '';
            }
          });
        };
        img.onerror = _clearAndRefetch;
        // Pixabay повертає HTTP 200 з темним placeholder коли URL закінчився —
        // перевіряємо розмір: реальне фото завжди > 10px
        img.onload = function() {
          if (img.naturalWidth < 10 || img.naturalHeight < 10) _clearAndRefetch();
        };
        img.src = (_imgCache as Record<string, string>)[w];
        el.innerHTML = '';
        el.appendChild(img);
        el.style.display = '';
      })(word, illusEl);
    } else {
      // Поки фото не завантажилось — показати emoji/SVG як заглушку
      const _localIllus = getIllus(word);
      if (_localIllus) { illusEl.innerHTML = _localIllus; illusEl.style.display = ''; }
      else              { illusEl.innerHTML = ''; illusEl.style.display = 'none'; }
      if (!_imgCache.hasOwnProperty(word)) {
        if (!_isOnlineCheck() && !_localIllus) {
          illusEl.innerHTML = _offlineSvg(word);
          if (illusEl.innerHTML) illusEl.style.display = '';
        } else {
          (function(w) {
            loadWikiImage(w, function(wd, imgUrl) {
              if (!cw || cw[0] !== wd) return;
              if (imgUrl) {
                illusEl.innerHTML = '<img src="' + imgUrl + '" alt="" loading="lazy" style="' + _IMG_S + '">';
                illusEl.style.display = '';
              }
            });
          })(word);
        }
      }
    }
  } catch(e) { try { illusEl.style.display='none'; }catch(e2){} }
}

// ── Main render ────────────────────────────────────────────────────────────
export function render(): void {
  try {
    if (!deck || !deck.length) { console.error('render: deck empty'); return; }
    if (synth) { _safe(() => synth.cancel()); }
    _setCw(deck[idx % deck.length]);
    if (!cw) { console.error('render: cw is null'); return; }
    flipped = false;
    state.flipped = false;
    const mode = getMode();
    state._mode = mode;
    _safe(() => renderCardIndicators(cw![0]));
    renderCardImage(cw[0], $e('illus'));
    const cardEl = $e('card');
    if (cardEl) {
      if (_activeKnown().has(cw[0])) { cardEl.classList.add('is-known'); } else { cardEl.classList.remove('is-known'); }
    }
    _safe(() => {
      const dontKnowEl = document.getElementById('btn-dontknow') as HTMLElement | null;
      if (dontKnowEl) {
        const rangeVal = (document.getElementById('sel-range') as HTMLSelectElement)!.value;
        dontKnowEl.style.display = rangeVal === 'srs' ? '' : 'none';
      }
    });
    _safe(() => { updateRing(); });
  } catch(e) {
    console.error('render FAILED:', (e as Error).message);
  }
  notifyStateChange();
  // Predictive prefetch: наступні картки (без дублів для малих дек)
  _idle(function() {
    const _seen: Record<string, number> = {};
    const _limit = Math.min(4, deck.length - 1);
    for (let _pi = 1; _pi <= _limit; _pi++) {
      const _nw = deck[(idx + _pi) % deck.length];
      if (_nw && !_seen[_nw[0]] && !_imgCache.hasOwnProperty(_nw[0])) {
        _seen[_nw[0]] = 1;
        loadWikiImage(_nw[0], function(){});
      }
    }
  });
}

export function onWordLearned(): void {
  let d = getGameData();
  d.goalCur = (d.goalCur || 0) + 1;
  if (d.goalCur === d.goalMax) { d.goalDays = (d.goalDays || 0) + 1; }
  d = updateStreak(d);
  saveGameData(d);
  renderGameBar();
  recordDailyWord();
  _safe(() => maybeSubmitScore());
  let gd2 = getGameData();
  gd2.sessionWords = (gd2.sessionWords || 0) + 1;
  saveGameData(gd2);
  const xp = awardXP(10); // ×2/×3 з комбо
  _safe(() => showComboToast(`+${xp} XP`));
  _idle(function() {
    _safe(() => renderLevelBadge());
    _safe(() => checkAchievements());
  });
}
