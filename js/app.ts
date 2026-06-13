// English Words App — js/app.ts
import type { WordEntry } from '../src/types.js';
import { _lzLoad, loadKnownEs, loadKnownFr } from './core/storage.ts';
import { W }                                       from '../data/words.js';
import { getIllus }                                from '../data/illustrations.js';
import { loadWikiImage, _imgCache, _idb }          from './core/images.ts';
import { state }                                   from '../src/state.ts';
import { notifyStateChange }                       from '../src/store.ts';
import { synth }                                    from './core/srs.ts';
import { getComboMult }                             from './features/combo.ts';
import { getGameData, saveGameData, recordDailyWord,
         updateStreak, recordModeComplete,
         recordCustomWordAdded, _idle }            from './features/game.ts';
import { isBookmarked }                            from './features/bookmarks.ts';
import { getNoteForWord, hasNote }                 from './features/notes.ts';
import { decodeIpa }                               from './core/ui-helpers.ts';
import { ACHIEVEMENTS }                            from '../data/achievements.ts';
import { t, tLang, type Lang }                     from './features/i18n.ts';
import { renderGameBar }                           from './features/render-game-bar.ts';
import { refreshGameBarLevel as renderLevelBadge } from './features/game-bar-level.tsx';
import { checkAchievements }                       from './features/render-achievements.ts';
import { maybeSubmitScore }                        from './features/leaderboard.ts';
import { playSound }                               from './core/audio.ts';
import { updateRing }                              from './features/ring.ts';
import { invalidateSimilarCache }                  from './features/similar-words.tsx';
import { openWordDetail }                          from './features/word-detail.tsx';
import { ES_MODES, FR_MODES, getMode, esEntry as _esEntry, frEntry as _frEntry }  from './features/mode-utils.ts';
import { safe as _safe, boldEn as _boldEn, boldUa as _boldUa, boldHead as _boldHead, srsStatusInfo } from './core/card-helpers.ts';
import './features/speech.ts';
import './features/image-prefetch.ts';
import './features/card-actions.ts';
import './features/deck-filter.ts';
import './features/deck-mode.ts';
import './features/progress-io.ts';
import './core/keyboard.ts';
import './core/theme.ts';
import './core/swipe.ts';
import './core/pwa.ts';

const savedKnown = _lzLoad('ew_known', []);

let srsData: Record<string, any> = _lzLoad('ew_srs', {});
// Міграція: старий формат (числа) → видаляємо
Object.keys(srsData).forEach(function(k: string){ if(typeof srsData[k]==='number') delete srsData[k]; });

let deck: WordEntry[] = W.slice() as unknown as WordEntry[];
let idx = 0, known = new Set<string>(savedKnown as string[]), flipped = false;
let knownEs = loadKnownEs();
let knownFr = loadKnownFr();
function _activeKnown(): Set<string> {
  const mode = getMode();
  if (ES_MODES.has(mode)) return knownEs;
  if (FR_MODES.has(mode)) return knownFr;
  return known;
}
let cw: WordEntry | null = null, autoTimer: ReturnType<typeof setTimeout> | null = null;

// Sync reference-type locals into state (mutations propagate both ways)
state.deck    = deck as unknown as WordEntry[];
state.known   = known;
state.srsData = srsData;

let _baseWords = W.slice();
state._baseWords = _baseWords as unknown as WordEntry[];

const TODAY = new Date().toISOString().slice(0,10);
window.TODAY = TODAY; // legacy files (catpairs.js, srs.js, etc.) use this globally

// ── Single-source helpers — call instead of writing to all 3 stores manually ──
function _setDeck(d: WordEntry[]): void {
  deck = d;
  state.deck = d as unknown as WordEntry[];
  // Note: do NOT assign window.deck here — the live getter already reflects `deck`,
  // and assigning would re-trigger the setter → infinite recursion.
}
function _setIdx(i: number): void {
  idx = i;
  state.idx = i;
}
function _setCw(w: WordEntry | null): void {
  cw = w;
  state.cw = w;
}

// ── window live-getters for deck / idx / flipped (always reflect module vars) ──
window.W = W;  // static — never reassigned
window.known   = known;   // Set mutations propagate without reassignment
window.srsData = srsData; // Object mutations propagate without reassignment
Object.defineProperty(window, 'deck',    { configurable: true, get: () => deck,    set: (v) => _setDeck(v) });
Object.defineProperty(window, 'idx',     { configurable: true, get: () => idx,     set: (v) => _setIdx(v) });
Object.defineProperty(window, 'flipped', { configurable: true, get: () => flipped, set: (v) => { flipped = v; state.flipped = v; } });
Object.defineProperty(window, 'cw',      { configurable: true, get: () => cw });

// Helper: get cached element with null safety
function $e(id: string): HTMLElement { return $el[id] as HTMLElement; }

// Кеш DOM-елементів: уникаємо getElementById на кожен render()
const $el: Record<string, HTMLElement | null> = {};
['wword','wtrans','wtransl','exen','exua','cidx','cknown',
 'pbar','illus','card','srs-next',
 'cb-similar','cb-families','cb-collocations'].forEach(function(id: string) {
  $el[id] = document.getElementById(id);
});

// O(1) індекс: word → позиція у W (замість W.findIndex на кожній картці)
const _wordIdx = new Map();
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

function stopAuto(): void {
  if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
  const btnAuto = document.getElementById('btn-auto');
  if (btnAuto) btnAuto.textContent = t('cards.auto');
}

// ── Card animation ─────────────────────────────────────────────────────────
function _animCard(dir: 'next' | 'prev' | 'fade'): void {
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
        const _isOnlineCheck = (window as Window & { _isOnlineCheck?: () => boolean })._isOnlineCheck;
        const _offlineSvg   = (window as Window & { _offlineSvg?: (w: string) => string })._offlineSvg;
        if (_isOnlineCheck && !_isOnlineCheck() && !_localIllus) {
          illusEl.innerHTML = _offlineSvg ? _offlineSvg(word) : '';
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

function renderSrsBadge(word: string): void {
  const srsEl = $e('srs-next');
  if (!srsEl) return;
  const sd = (srsData as Record<string, {ef?: number; reps?: number; due?: string; interval?: number}>)[word];
  const rangeVal = (document.getElementById('sel-range') as HTMLSelectElement)!.value;
  const info = srsStatusInfo(sd, TODAY, rangeVal);
  if (!info) { srsEl.style.display = 'none'; return; }
  srsEl.textContent = info.text;
  srsEl.className   = info.className;
  srsEl.style.display = '';
}

// ── Main render ────────────────────────────────────────────────────────────
function render() {
  try {
    if (!deck || !deck.length) { console.error('render: deck empty'); return; }
    if (synth) { _safe(() => synth.cancel()); }
    _setCw(deck[idx % deck.length]);
    if (!cw) { console.error('render: cw is null'); return; }
    flipped = false;
    const mode = getMode();
    const esEntry = ES_MODES.has(mode) ? _esEntry(cw[0]) : null;
    const _esWord = esEntry ? esEntry[0] : '';
    const _esEx   = esEntry ? esEntry[1] : '';
    const frEntry = FR_MODES.has(mode) ? _frEntry(cw[0]) : null;
    const _frWord = frEntry ? frEntry[0] : '';
    const _frEx   = frEntry ? frEntry[1] : '';
    let FRONT_LANG: 'EN' | 'UA' | 'ES' | 'FR';
    let frontWord: string, backWord: string;
    switch (mode) {
      case 'ua':    FRONT_LANG = 'UA'; frontWord = cw[1];   backWord = cw[0];   break;
      case 'en-es': FRONT_LANG = 'EN'; frontWord = cw[0];   backWord = _esWord; break;
      case 'es-en': FRONT_LANG = 'ES'; frontWord = _esWord; backWord = cw[0];   break;
      case 'es-ua': FRONT_LANG = 'ES'; frontWord = _esWord; backWord = cw[1];   break;
      case 'ua-es': FRONT_LANG = 'UA'; frontWord = cw[1];   backWord = _esWord; break;
      case 'en-fr': FRONT_LANG = 'EN'; frontWord = cw[0];   backWord = _frWord; break;
      case 'fr-en': FRONT_LANG = 'FR'; frontWord = _frWord; backWord = cw[0];   break;
      case 'fr-ua': FRONT_LANG = 'FR'; frontWord = _frWord; backWord = cw[1];   break;
      case 'ua-fr': FRONT_LANG = 'UA'; frontWord = cw[1];   backWord = _frWord; break;
      case 'es-fr': FRONT_LANG = 'ES'; frontWord = _esWord; backWord = _frWord; break;
      case 'fr-es': FRONT_LANG = 'FR'; frontWord = _frWord; backWord = _esWord; break;
      default:      FRONT_LANG = 'EN'; frontWord = cw[0];   backWord = cw[1];
    }
    $e('wword').textContent = frontWord;
    const tr = $e('wtrans');
    const _enEx  = cw[2] || '';
    const _uaEx  = cw[3] || '';
    const trans = decodeIpa(cw[4] || '');
    tr.textContent = (FRONT_LANG === 'EN') ? trans : '';
    tr.style.display = (FRONT_LANG === 'EN' && trans) ? 'block' : 'none';
    const posEl = document.getElementById('wpos') as HTMLElement | null;
    if (posEl) {
      const posCode = cw[5] || '';
      const posLang: Lang = FRONT_LANG === 'EN' ? 'en' : FRONT_LANG === 'UA' ? 'ua' : FRONT_LANG === 'FR' ? 'fr' : 'es';
      posEl.textContent = posCode ? tLang('pos.' + posCode, posLang) : '';
      posEl.style.display = posCode ? 'block' : 'none';
    }
    const translEl = $e('wtransl');
    translEl.textContent = backWord;
    translEl.className = 'transl';
    if (mode === 'en') {
      $e('exen').innerHTML = _boldEn(_enEx, cw);
      $e('exua').textContent = _uaEx;
    } else if (mode === 'ua') {
      $e('exen').innerHTML = _boldUa(_uaEx, cw) || _uaEx;
      $e('exua').innerHTML = _boldEn(_enEx, cw);
    } else if (ES_MODES.has(mode)) {
      let _frontEx = '', _backEx = '';
      switch (mode) {
        case 'en-es': _frontEx = _enEx; _backEx = _esEx; break;
        case 'es-en': _frontEx = _esEx; _backEx = _enEx; break;
        case 'es-ua': _frontEx = _esEx; _backEx = _uaEx; break;
        case 'ua-es': _frontEx = _uaEx; _backEx = _esEx; break;
        case 'es-fr': _frontEx = _esEx; _backEx = _frEx; break;
        case 'fr-es': _frontEx = _frEx; _backEx = _esEx; break;
      }
      $e('exen').innerHTML = _boldHead(_frontEx, frontWord) || _frontEx;
      $e('exua').innerHTML = _boldHead(_backEx, backWord) || _backEx;
    } else if (FR_MODES.has(mode)) {
      let _frontEx = '', _backEx = '';
      switch (mode) {
        case 'en-fr': _frontEx = _enEx; _backEx = _frEx; break;
        case 'fr-en': _frontEx = _frEx; _backEx = _enEx; break;
        case 'fr-ua': _frontEx = _frEx; _backEx = _uaEx; break;
        case 'ua-fr': _frontEx = _uaEx; _backEx = _frEx; break;
      }
      $e('exen').innerHTML = _boldHead(_frontEx, frontWord) || _frontEx;
      $e('exua').innerHTML = _boldHead(_backEx, backWord) || _backEx;
    }
    $e('exua').className = 'ex-ua';
    if ($e('cb-families'))     $e('cb-families').style.display     = 'none';
    if ($e('cb-collocations')) $e('cb-collocations').style.display = 'none';
    $e('cidx').textContent = (idx % deck.length + 1) + '/' + deck.length;
    $e('cknown').textContent = String(_activeKnown().size);
    $e('pbar').style.width = (_activeKnown().size / W.length * 100) + '%';
    _safe(() => renderCardIndicators(cw![0]));
    renderCardImage(cw[0], $e('illus'));
    const cardEl = $e('card');
    if (_activeKnown().has(cw[0])) { cardEl!.classList.add('is-known'); } else { cardEl!.classList.remove('is-known'); }
    _safe(() => renderSrsBadge(cw![0]));
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

function onWordLearned() {
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
  gd2.xp = (gd2.xp || 0) + 10 * getComboMult(); // ×2/×3 з комбо
  saveGameData(gd2);
  _idle(function() {
    _safe(() => renderLevelBadge());
    _safe(() => checkAchievements());
  });
}

try { renderGameBar(); } catch(e){ console.error((e as Error).message); }
renderLevelBadge();
checkAchievements();

// ── Expose functions/vars needed by feature modules and legacy scripts ──
window.render            = render;
window.stopAuto          = stopAuto;
window.getGameData       = getGameData;
window.saveGameData      = saveGameData;
window.onWordLearned     = onWordLearned;
// window.checkAchievements/renderAchievements/showToast — set by render-achievements.ts
// window.renderGameBar/renderLevelBadge/renderLevelsRoadmap/renderLevelProgress — set by render-game-bar.ts
// window.renderStats/openStats/closeStats/renderSRSForecast — set by stats.ts
window.ACHIEVEMENTS        = ACHIEVEMENTS;
window.openWordDetail      = openWordDetail;
window.setIdx     = (i: number)              => _setIdx(i);
window.setDeck    = (d: WordEntry[])         => _setDeck(d);
window.setBaseWords = (w: WordEntry[]) => { _baseWords = w as unknown as string[][]; state._baseWords = w; };
window.setFlipped = (v: boolean)             => { flipped = v; state.flipped = v; };
window.setCw      = (v: WordEntry | null)    => _setCw(v);
window._wordIdx              = _wordIdx;
window._customWords          = _customWords;
window.invalidateSimilarCache = invalidateSimilarCache;
window.knownEs                = knownEs;
window.knownFr                = knownFr;
window.setKnown    = (s: Set<string>)          => { known = s; state.known = s; window.known = s; };
window.setSrsData  = (d: Record<string, any>)  => { srsData = d; state.srsData = d; window.srsData = d; };
window.animCard      = _animCard;
window.isAutoRunning = () => !!autoTimer;
window.startAuto     = () => {
  autoTimer = setInterval(() => { _animCard('next'); idx = (idx + 1) % deck.length; render(); }, 4500);
};
window.updateRing            = updateRing;
window.playSound             = playSound;
window.recordModeComplete    = recordModeComplete;
window.recordCustomWordAdded = recordCustomWordAdded;
