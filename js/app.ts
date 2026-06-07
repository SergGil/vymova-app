// English Words App — js/app.ts
import type { WordEntry, SRSData, GameData, ModeStats, Achievement, Level } from '../src/types.js';
import { _lzLoad, _lzSave, saveKnown, saveSRS }    from './core/storage.ts';
import { W }                                       from '../data/words.js';
import { SVG, getIllus }                           from '../data/illustrations.js';
import { WORD_CATEGORIES, getCategoriesForWord }    from '../data/categories.js';
import { loadWikiImage, _imgCache, _idb,
         _saveImgCache, _getPixabayKey,
         resetImgCache }                           from './core/images.ts';
import { state }                                   from '../src/state.ts';
import { shuffle, _shuf, addDays, sm2Update,
         buildSRSDeck, buildUnlearnedDeck,
         updateSrsUI, synth, hasSpeech }           from './core/srs.ts';
import { addCombo, breakCombo, flashCard, getComboMult } from './features/combo.ts';
import {
  getGameData, saveGameData, getDailyStats, saveDailyStats, recordDailyWord,
  getModeStats, saveModeStats, loadUnlocked, saveUnlocked, updateStreak,
  LEVELS, getLevel, getNextLevel, recordModeComplete, recordCustomWordAdded, _idle,
  registerCheckAchievements, getHardWords, getModeAccuracy,
} from './features/game.ts';
import { isBookmarked, getBookmarks, toggleBookmark }    from './features/bookmarks.ts';
import { getNoteForWord, hasNote, openNoteModal }        from './features/notes.ts';
import { isPronuncSupported, showPronuncResult,
         startPronunciationCheck, stopPronunciationCheck } from './features/pronunciation.ts';
import { getSelectedUkVoice }                            from './features/voice.ts';
import { decodeIpa }                                    from './core/ui-helpers.ts';
import { getCefrLevel }                                 from '../data/cefr.ts';
import { ACHIEVEMENTS }                                 from '../data/achievements.ts';
import { ACH_EN, ACH_CAT_EN }                           from '../data/achievements-i18n.ts';

function _isEnLang(): boolean { return localStorage.getItem('ew_lang') === 'en'; }
function _achName(a: Achievement): string { return _isEnLang() ? (ACH_EN[a.id]?.name ?? a.name) : a.name; }
function _achHint(a: Achievement): string { return _isEnLang() ? (ACH_EN[a.id]?.hint ?? a.hint) : a.hint; }
function _achCat(cat: string): string { return _isEnLang() ? (ACH_CAT_EN[cat] ?? cat) : cat; }
import { WORD_FAMILIES }                                from '../data/word-families.ts';
import { searchCollocations }                          from '../data/collocations.ts';
import { renderLeaderboard, maybeSubmitScore }         from './features/leaderboard.ts';
import { playSound }                                    from './core/audio.ts';
import { launchConfetti }                               from './core/confetti.ts';
import { updateRing }                                   from './features/ring.ts';
import { getSimilarWords, invalidateSimilarCache }      from './features/similar-words.ts';
import { openWordDetail }                               from './features/word-detail.ts';
import LZString from '../lib/lzstring.js';

// Завантажуємо збережені слова з localStorage
var savedKnown = _lzLoad('ew_known', []);

var srsData: Record<string, any> = _lzLoad('ew_srs', {});
// Міграція: старий формат (числа) → видаляємо
Object.keys(srsData).forEach(function(k: string){ if(typeof srsData[k]==='number') delete srsData[k]; });

var deck: WordEntry[] = W.slice() as unknown as WordEntry[];
var idx = 0, known = new Set<string>(savedKnown as string[]), flipped = false;
var cw: WordEntry | null = null, autoTimer: ReturnType<typeof setTimeout> | null = null;

// ── Sync local vars with state so srs.js and other ES modules
//    read the SAME objects (mutation propagates both ways) ──────
state.known   = known;    // Set — mutations propagate
state.srsData = srsData;  // Object — mutations propagate
state.deck    = deck as unknown as WordEntry[];  // Array — reassigned, needs explicit sync
window.deck   = deck; // keep in sync for legacy files

var _baseWords = W.slice();
var _activeTagSet = null; // тег-фільтр: null = вимкнений, Set = активний

// ── Expose module-scope vars as globals for legacy mode/feature files ──
// (Phase 3 will remove these once all files use imports)
window.known        = known;
window.srsData      = srsData;
window.deck         = deck;
window.W            = W;        // re-export (some files access via window.W)
// window.TODAY is set further below when TODAY is defined

// buildStaleDeck: слова що не переглядались довше N днів
function buildStaleDeck(days: number): WordEntry[] {
  var cutoff = (function(){ var d=new Date(); d.setDate(d.getDate()-days); return d.toISOString().slice(0,10); })();
  var result = W.filter(function(w) {
    var d = srsData[w[0]];
    if (!d || !d.due) return true;
    var lastDate = (function(){ var dt=new Date(d.due); dt.setDate(dt.getDate()-(d.interval||1)); return dt.toISOString().slice(0,10); })();
    return lastDate <= cutoff;
  });
  shuffle(result);
  return (result.length ? result : _shuf(W as unknown as WordEntry[]).slice(0, 50)) as WordEntry[];
}

// Helper: get cached element with null safety
function $e(id: string): HTMLElement { return $el[id] as HTMLElement; }

// Кеш DOM-елементів: уникаємо getElementById на кожен render()
var $el: Record<string, HTMLElement | null> = {};
['wnum','wlang','wword','wtrans','wtransl','exen','exua','cidx','cknown',
 'pbar','illus','card','srs-next','streak-num','goal-cur','goal-max','goal-fill',
 'goal-done','ring-fill','ring-center','level-badge','cb-similar',
 'cb-families','cb-collocations'].forEach(function(id: string) {
  $el[id] = document.getElementById(id);
});

// O(1) індекс: word → позиція у W (замість W.findIndex на кожній картці)
var _wordIdx = new Map();
W.forEach(function(w, i) { _wordIdx.set(w[0], i); });

// Категорії слів для Category Matching
// ── Власні слова: завантажуємо і додаємо в W ──
var _customWords: Array<{en:string;ua:string;ex_en?:string;ex_ua?:string}> = [];
try { _customWords = JSON.parse(localStorage.getItem('ew_custom') || '[]'); } catch(e){ console.warn('[custom] Load failed:', (e as Error).message); }
_customWords.forEach(function(c) {
  if (c.en && c.ua && !_wordIdx.has(c.en)) {
    W.push([c.en, c.ua, c.ex_en || c.en + '.', c.ex_ua || c.ua + '.', '']);
    _wordIdx.set(c.en, W.length - 1);
  }
});

// ── Кеш зображень {word: url | null} ──
// ── IndexedDB для image cache (необмежений розмір) + localStorage fallback ──
function getVoice() {
  var v = synth.getVoices();
  return v.find(function(x){return x.lang.startsWith('en-US')&&x.name.includes('Google');})||
         v.find(function(x){return x.lang.startsWith('en-US');})||
         v.find(function(x){return x.lang.startsWith('en');})||null;
}
function speak(text: string, btn: HTMLElement | null): void {
  const _speakFakeYou = (window as Window & { speakFakeYou?: (t: string, b: HTMLElement | null) => boolean }).speakFakeYou;
  if (_speakFakeYou?.(text, btn)) return;
  _speakWeb(text, btn);
}

// Web Speech — викликається напряму або як fallback з ElevenLabs
function _speakWeb(text: string, btn: HTMLElement | null): void {
  _speakWithLang(text, 'en-US', btn);
}
window.speakWebFallback = _speakWeb;

function _speakWithLang(text: string, lang: string, btn: HTMLElement | null): void {
  if (!hasSpeech) return;
  synth.cancel();
  var clean = text.replace(/<[^>]+>/g,'').replace(/\s*\([^)]*\)/g,'').trim();
  if (!clean) return;
  var u = new SpeechSynthesisUtterance(clean);
  u.lang  = lang || 'en-US';
  u.rate  = 0.88;
  u.pitch = 1;
  var voices = synth.getVoices();
  var langLow = u.lang.toLowerCase();
  var match = null;

  if (langLow.startsWith('uk')) {
    match = getSelectedUkVoice();
    if (!match) match = voices.find(function(v){ return v.lang && v.lang.toLowerCase().startsWith('uk'); });
  } else if (langLow.startsWith('en')) {
    match = getVoice();
    if (!match) match = voices.find(function(v){ return v.lang && v.lang.toLowerCase().startsWith('en'); });
  } else {
    match = voices.find(function(v){ return v.lang && v.lang.toLowerCase() === langLow; })
         || voices.find(function(v){ return v.lang && v.lang.toLowerCase().startsWith(langLow.slice(0,2)); });
  }
  if (match) u.voice = match;
  if (btn) {
    btn.classList.add('on');
    u.onend   = function(){ btn.classList.remove('on'); };
    u.onerror = function(){ btn.classList.remove('on'); };
  }
  synth.speak(u);
}

function getMode(): string {
  var m = (document.getElementById('sel-mode') as HTMLSelectElement | null)?.value ?? 'en';
  if (m === 'mix') return Math.random() > 0.5 ? 'en' : 'ua';
  return m || 'en';
}
function stopAuto(): void {
  if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
  const btnAuto = document.getElementById('btn-auto');
  if (btnAuto) btnAuto.textContent = '▶ Авто';
}

// ── Card animation ────────────────────────────────────────────
function _animCard(dir: 'next' | 'prev' | 'fade'): void {
  const face = document.querySelector<HTMLElement>('.card-face');
  if (!face || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cls = dir === 'next' ? 'anim-next' : dir === 'prev' ? 'anim-prev' : 'anim-fade';
  face.classList.remove('anim-next', 'anim-prev', 'anim-fade');
  void face.offsetWidth; // force reflow
  face.classList.add(cls);
  setTimeout(() => face.classList.remove(cls), 250);
}

function render() {
  try {
    if (!deck || !deck.length) { console.error('render: deck empty'); return; }
    if (synth) { try { synth.cancel(); } catch(e){} }
    cw = deck[idx % deck.length];
    if (!cw) { console.error('render: cw is null'); return; }
    flipped = false;
    var mode = getMode();
    var _realIdx = _wordIdx.has(cw[0]) ? _wordIdx.get(cw[0]) : -1;
    $e('wnum').textContent = '#' + (_realIdx >= 0 ? _realIdx + 1 : idx % deck.length + 1);
    $e('wlang').textContent = mode==='en'?'EN':'UA';
    $e('wword').textContent = mode==='en'?cw[0]:cw[1];
    // ── CEFR badge ────────────────────────────────────────────
    var cefrEl = document.getElementById('wcefr') as HTMLElement | null;
    if (cefrEl) {
      const level = getCefrLevel(cw[0]);
      cefrEl.textContent = level;
      cefrEl.className = 'cefr-badge cefr-' + level;
      cefrEl.style.display = '';
    }
    // ── Category badge ────────────────────────────────────────
    var catEl = document.getElementById('wcategory') as HTMLElement | null;
    if (catEl) {
      const cats = getCategoriesForWord(cw[0]);
      catEl.textContent = cats[0] || '';
      catEl.title = cats.join(', ');
      catEl.style.display = cats[0] ? '' : 'none';
    }
    var tr = $e('wtrans');
    // [en, ua, en_example, ua_example, ipa]
    var _enEx  = cw[2] || '';
    var _uaEx  = cw[3] || '';
    var trans = decodeIpa(cw[4] || '');
    tr.textContent = (mode === 'en') ? trans : '';
    tr.style.display = (mode === 'en' && trans) ? 'block' : 'none';
    var t = $e('wtransl');
    t.textContent = mode==='en'?cw[1]:cw[0];
    t.className = 'transl';
    // Приклад: EN→UA показуємо English (підсвічене слово), UA→EN — Ukrainian (не розкриває відповідь)
    function _boldEn(src: string): string {
      if (!src) return '';
      if (src.indexOf('<b>') !== -1) return src;
      var _bw = cw![0].replace(/\s*\([^)]*\)/g,'').trim();
      var _bp = _bw.split(/\s+/).filter(Boolean).map(function(p){ return p.replace(/[.*+?^${}()|\[\]\\]/g,'\\$&')+'\\w*'; });
      return src.replace(new RegExp('('+_bp.join('\\s+')+')', 'i'), '<b>$1</b>');
    }
    function _boldUa(src: string): string {
      if (!src) return src;
      var _uw = cw![1].split(/[;,\/]/)[0].trim().replace(/[.*+?^${}()|\[\]\\]/g,'\\$&');
      return src.replace(new RegExp('('+_uw+'\\w*)', 'i'), '<b>$1</b>');
    }
    if (mode === 'en') {
      // EN→UA: первинний приклад — англійський з bold словом
      $e('exen').innerHTML = _boldEn(_enEx);
      $e('exua').textContent = _uaEx;  // після flip
    } else {
      // UA→EN: первинний приклад — UKRAINIAN (не розкриває англійської відповіді)
      $e('exen').innerHTML = _boldUa(_uaEx) || _uaEx;
      $e('exua').innerHTML = _boldEn(_enEx);  // англійський після flip
    }
    $e('exua').className = 'ex-ua';
    if ($e('cb-similar'))     $e('cb-similar').style.display     = 'none';
    if ($e('cb-families'))   $e('cb-families').style.display   = 'none';
    if ($e('cb-collocations')) $e('cb-collocations').style.display = 'none';
    $e('cidx').textContent = (idx%deck.length+1)+'/'+deck.length;
    $e('cknown').textContent = String(known.size);
    $e('pbar').style.width = (known.size/W.length*100)+'%';
    // Note + Bookmark indicators
    try {
      var _noteBtn = document.getElementById('btn-note');
      var _bmBtn   = document.getElementById('btn-bookmark');
      var _noteDisp= document.getElementById('card-note-display');
      var _word0   = cw[0];
      if (_bmBtn) {
        var _isBm = isBookmarked(_word0);
        _bmBtn.textContent = _isBm ? '★' : '☆';
        _bmBtn.style.color = _isBm ? '#f1c40f' : '';
      }
      if (_noteDisp) {
        var _note = getNoteForWord(_word0);
        if (_note) { _noteDisp.textContent = '📝 ' + _note; _noteDisp.style.display = ''; }
        else        { _noteDisp.style.display = 'none'; }
      }
      if (_noteBtn) {
        _noteBtn.style.opacity = (hasNote(_word0)) ? '1' : '0.5';
      }
    } catch(e){}
    try {
      var illusEl = $e('illus');
      var _w = cw[0];
      var IMG_S = 'width:100%;height:100%;object-fit:cover;border-radius:8px;';
      // Пріоритет: Pixabay/Wiki (кеш) → Emoji/SVG → нічого
      if (_imgCache.hasOwnProperty(_w) && _imgCache[_w]) {
        // Є закешоване фото → показати одразу, з onerror якщо URL протух
        (function(w, el) {
          var img = document.createElement('img');
          img.alt = ''; img.loading = 'lazy'; img.style.cssText = IMG_S;
          var _clearAndRefetch = function() {
            delete _imgCache[w];
            if (typeof _idb !== 'undefined' && _idb) {
              try { _idb.transaction('imgs','readwrite').objectStore('imgs').delete(w); } catch(e2){}
            }
            var fb = getIllus(w);
            if (fb) { el.innerHTML = fb; el.style.display = ''; }
            else    { el.innerHTML = ''; el.style.display = 'none'; }
            loadWikiImage(w, function(wd, newUrl) {
              if (!cw || cw[0] !== wd) return;
              if (newUrl) {
                var _ni = document.createElement('img');
                _ni.alt = ''; _ni.loading = 'lazy'; _ni.style.cssText = IMG_S;
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
        })(_w, illusEl);
      } else {
        // Поки фото не завантажилось — показати emoji/SVG як заглушку
        var _localIllus = getIllus(_w);
        if (_localIllus) { illusEl.innerHTML = _localIllus; illusEl.style.display = ''; }
        else              { illusEl.innerHTML = ''; illusEl.style.display = 'none'; }
        // Якщо ще не кешовано — завантажити (Pixabay → Wikipedia)
        if (!_imgCache.hasOwnProperty(_w)) {
          // Офлайн: показуємо красивий градієнтний placeholder замість нічого
          const _isOnlineCheck = (window as Window & { _isOnlineCheck?: () => boolean })._isOnlineCheck;
          const _offlineSvg   = (window as Window & { _offlineSvg?: (w: string) => string })._offlineSvg;
          if (_isOnlineCheck && !_isOnlineCheck() && !_localIllus) {
            illusEl.innerHTML = _offlineSvg ? _offlineSvg(_w) : '';
            if (illusEl.innerHTML) illusEl.style.display = '';
          } else {
            (function(w) {
              loadWikiImage(w, function(wd, imgUrl) {
                if (!cw || cw[0] !== wd) return;
                if (imgUrl) {
                  illusEl.innerHTML = '<img src="' + imgUrl + '" alt="" loading="lazy" style="' + IMG_S + '">';
                  illusEl.style.display = '';
                }
              });
            })(_w);
          }
        }
      }
    } catch(e) { try { document.getElementById('illus')!.style.display='none'; }catch(e2){} }
    var cardEl = document.getElementById('card');
    if(known.has(cw[0])){ cardEl!.classList.add('is-known'); } else { cardEl!.classList.remove('is-known'); }
    // SRS бейдж — показуємо завжди коли є дані
    try {
      var srsEl = document.getElementById('srs-next');
      if (srsEl) {
        var sd = (srsData as Record<string, {ef?: number; reps?: number; due?: string; interval?: number}>)[cw[0]];
        var rangeVal = (document.getElementById('sel-range') as HTMLSelectElement)!.value;
        if (!sd || !sd.due) {
          // Нове слово — показуємо тільки в SRS/weak-режимі
          if (rangeVal === 'srs' || rangeVal === 'weak') {
            srsEl.textContent = '🆕 Нове';
            srsEl.className = 'srs-next new';
            srsEl.style.display = '';
          } else {
            srsEl.style.display = 'none';
          }
        } else {
          var diffDays = Math.round((new Date(sd.due).getTime() - new Date(TODAY).getTime()) / 86400000);
          if (diffDays < 0) {
            var overDays = Math.abs(diffDays);
            srsEl.textContent = '🔴 Прострочено ' + overDays + ' ' + (overDays === 1 ? 'день' : overDays < 5 ? 'дні' : 'днів');
            srsEl.className = 'srs-next over';
          } else if (diffDays === 0) {
            srsEl.textContent = '🟡 Повторити сьогодні';
            srsEl.className = 'srs-next today';
          } else if (diffDays <= 3) {
            srsEl.textContent = '⏰ Через ' + diffDays + ' ' + (diffDays === 1 ? 'день' : 'дні');
            srsEl.className = 'srs-next soon';
          } else {
            srsEl.textContent = '✅ Через ' + diffDays + ' ' + (diffDays < 5 ? 'дні' : 'днів');
            srsEl.className = 'srs-next ok';
          }
          srsEl.style.display = '';
        }
      }
    } catch(e){}
    // Оновити кільце
    try {
      var gd = getGameData();
      updateRing(gd.goalCur||0, gd.goalMax||20);
    } catch(e){}
  } catch(e) {
    console.error('render FAILED:', (e as Error).message);
  }
  // Predictive prefetch: наступні картки (без дублів для малих дек)
  _idle(function() {
    var _seen: Record<string, number> = {}, _limit = Math.min(4, deck.length - 1);
    for (var _pi = 1; _pi <= _limit; _pi++) {
      var _nw = deck[(idx + _pi) % deck.length];
      if (_nw && !_seen[_nw[0]] && !_imgCache.hasOwnProperty(_nw[0])) {
        _seen[_nw[0]] = 1;
        loadWikiImage(_nw[0], function(){});
      }
    }
  });
}

document.getElementById('card')!.addEventListener('click', function(){
  if(!flipped){
    flipped=true;
    document.getElementById('wtransl')!.className='transl show';
    document.getElementById('exua')!.className='ex-ua show';
    try { updateSimilarWords(); } catch(e){}
    try { updateWordFamilies(); } catch(e){}
    try { updateCollocations(); } catch(e){}
  }
});
document.getElementById('speak-word')!.addEventListener('click', function(e){e.stopPropagation();if(cw)speak(cw[0],this);});
document.getElementById('speak-ex')!.addEventListener('click', function(e){
  e.stopPropagation();
  if (!cw) return;
  var exEn = cw[2] || '';
  var exUa = cw[3] || '';
  var modeVal = (document.getElementById('sel-mode') as HTMLSelectElement)!.value;
  // UA→EN mode: спробувати UA голос, якщо немає — читати EN приклад
  if (modeVal === 'ua') {
    var hasUkVoice = !!getSelectedUkVoice();
    if (hasUkVoice && exUa) {
      _speakWithLang(exUa, 'uk-UA', this);
    } else {
      speak(exEn, this); // fallback: читаємо англійський еквівалент
    }
  } else {
    speak(exEn, this);
  }
});
// ── Card action buttons ───────────────────────────────────────
document.getElementById('btn-note')!.addEventListener('click', function(e){
  e.stopPropagation();
  if (cw && true) openNoteModal(cw[0]);
});
document.getElementById('btn-bookmark')!.addEventListener('click', function(e){
  e.stopPropagation();
  if (!cw) return;
  var isNow = toggleBookmark(cw[0]);
  this.textContent = isNow ? '★' : '☆';
  this.style.color  = isNow ? '#f1c40f' : '';
});
document.getElementById('btn-mic')!.addEventListener('click', function(e){
  e.stopPropagation();
  if (!cw || false) return;
  var btn = this;
  startPronunciationCheck(cw[0], btn, function(status, score, spoken, target){
    showPronuncResult(status, score, spoken ?? '', target ?? '');
  });
});
// Show mic button only if Speech Recognition is supported
if (isPronuncSupported()) {
  document.getElementById('btn-mic')!.style.display = '';
}

document.getElementById('btn-prev')!.addEventListener('click', function(e){e.stopPropagation();stopAuto();idx=(idx-1+deck.length)%deck.length;_animCard('prev');render();});
document.getElementById('btn-know')!.addEventListener('click', function(e){
  e.stopPropagation();
  if(cw){
    var isNewlyKnown = !known.has(cw[0]);
    known.add(cw[0]);
    if ((document.getElementById('sel-range') as HTMLSelectElement)!.value === 'srs') { sm2Update(cw[0], 4); } else { delete srsData[cw[0]]; }
    saveKnown(known); saveSRS(srsData);
    try { playSound('know'); } catch(e){}
    try { addCombo(); flashCard(true); } catch(e){}
    if(isNewlyKnown) {
      onWordLearned();
      // Конфеті — тільки при першому досягненні цілі за день
      try {
        var gd = getGameData();
        if(gd.goalCur >= gd.goalMax && !gd.confettiShown) {
          gd.confettiShown = TODAY;
          saveGameData(gd);
          launchConfetti();
          playSound('goal');
        }
      } catch(e){}
    }
    var v = (document.getElementById('sel-range') as HTMLSelectElement)!.value;
    if (v === 'srs') { deck = buildSRSDeck(_baseWords as unknown as WordEntry[]); state.deck = deck; window.deck = deck; idx = 0; render(); return; }
    if (v === 'unlearned') {
      deck = buildUnlearnedDeck(_baseWords as unknown as WordEntry[]);
      state.deck = deck; window.deck = deck; if (!deck.length) { render(); return; }
      idx = idx % deck.length; _animCard('fade'); render(); return;
    }
  }
  _animCard('next'); idx=(idx+1)%deck.length; render();
});
document.getElementById('btn-next')!.addEventListener('click', function(e){
  e.stopPropagation();
  try { playSound('next'); } catch(e){}
  try { breakCombo(); } catch(e){}
  if(cw){
    var v = (document.getElementById('sel-range') as HTMLSelectElement)!.value;
    if (v === 'srs') {
      sm2Update(cw[0], 1);
      saveSRS(srsData);
    }
  }
  idx=(idx+1)%deck.length; render();
});
document.getElementById('btn-auto')!.addEventListener('click', function(e){
  e.stopPropagation();
  if(autoTimer){stopAuto();}
  else{this.textContent='⏹ Стоп';autoTimer=setInterval(function(){_animCard('next');idx=(idx+1)%deck.length;render();},4500);}
});
document.getElementById('btn-shuf')!.addEventListener('click', function(e){e.stopPropagation();stopAuto();shuffle(deck);idx=0;render();});
document.getElementById('btn-reset')!.addEventListener('click', function(e){
  e.stopPropagation();
  var modesOverlay = document.getElementById('modes-overlay');
  if (modesOverlay) modesOverlay.classList.remove('open');
  var overlayEl = document.getElementById('modal-overlay')!;
  overlayEl.style.display = 'flex';
});
document.getElementById('modal-cancel')!.addEventListener('click', function(){
  document.getElementById('modal-overlay')!.style.display = 'none';
});
document.getElementById('modal-confirm')!.addEventListener('click', function(){
  // Скидаємо все повністю
  known.clear(); srsData = {};
  state.known = known; state.srsData = srsData;
  state._srsStatsDirty = true;
  saveKnown(known); saveSRS(srsData);
  try { localStorage.removeItem('ew_game'); } catch(e){}
  try { localStorage.removeItem('ew_daily'); } catch(e){}
  try { localStorage.removeItem('ew_ach'); } catch(e){}
  state._gameCache  = null; // скидаємо in-memory кеш щоб getGameData() перечитав з localStorage
  state._dailyCache = null;
  // Скинути візуальний стан картки
  var cardEl = document.getElementById('card');
  if (cardEl) {
    cardEl!.classList.remove('is-known');
  }
  // Деку
  var v = (document.getElementById('sel-range') as HTMLSelectElement)!.value;
  if(v==='srs'){ deck=buildSRSDeck(_baseWords as unknown as WordEntry[]); }
  else if(v==='unlearned'){ deck=buildUnlearnedDeck(_baseWords as unknown as WordEntry[]); }
  // Оновити UI
  try { renderGameBar(); } catch(e){}
  try { renderLevelBadge(); } catch(e){}
  try { updateRing(0, (getGameData().goalMax||20)); } catch(e){}
  try { render(); } catch(e){}
  document.getElementById('modal-overlay')!.style.display = 'none';
});
document.getElementById('sel-mode')!.addEventListener('change', function(){stopAuto();render();});
// ══ Єдиний sel-range обробник — замість 3 окремих ══
document.getElementById('sel-range')!.addEventListener('change', function(){
  stopAuto();
  var v = (this as HTMLSelectElement).value;
  var selTagEl = document.getElementById('sel-tag') as HTMLSelectElement | null;

  // Для спеціальних режимів скидаємо тег-фільтр (він не застосовується)
  if (v === 'srs' || v === 'unlearned' || v.startsWith('stale')) {
    _activeTagSet = null;
    state._activeTagSet = null;
    if (selTagEl) selTagEl.value = '';
  }

  if (v === 'weak') {
    _baseWords = W.slice();
    var _srsAll = srsData as Record<string, {ef?: number; reps?: number}>;
    // Priority 1: words with SRS data sorted by EF asc (lowest = hardest)
    var _srsWeak = Object.entries(_srsAll)
      .filter(function([, d]) { return d && typeof d.ef === 'number'; })
      .sort(function([, a], [, b]) { return (a.ef ?? 2.5) - (b.ef ?? 2.5); })
      .slice(0, 50);
    if (_srsWeak.length >= 5) {
      var _weakSet = new Set(_srsWeak.map(function([k]) { return k; }));
      deck = (W as unknown as WordEntry[]).filter(function(w) { return _weakSet.has(w[0]); });
    } else if (known.size > 0) {
      // Fallback: known words in reversed order (most recently learned first) for review
      var _knownArr = Array.from(known);
      deck = _knownArr.slice().reverse()
        .map(function(k) { return (W as unknown as WordEntry[]).find(function(w) { return w[0] === k; }); })
        .filter(Boolean) as WordEntry[];
      if (!deck.length) deck = buildUnlearnedDeck(_baseWords as unknown as WordEntry[]);
    } else {
      deck = buildUnlearnedDeck(_baseWords as unknown as WordEntry[]);
    }
    state._activeTagSet = null;
    if (selTagEl) selTagEl.value = '';
    state.deck = deck; window.deck = deck;
    idx = 0; render(); return;
  } else if (v === 'hard') {
    _baseWords = W.slice();
    var _hardWords = getHardWords(50);
    var _hardSet = new Set(_hardWords);
    deck = (W as unknown as WordEntry[]).filter(function(w) { return _hardSet.has(w[0]); });
    if (!deck.length) {
      var _mt = document.getElementById('milestone-toast');
      if (_mt) { _mt.textContent = 'Важких слів ще немає — грай у режимах!'; _mt.className = 'milestone-toast'; void _mt.offsetWidth; _mt.className = 'milestone-toast show'; setTimeout(function(){ _mt!.className = 'milestone-toast'; }, 3500); }
      deck = buildUnlearnedDeck(_baseWords as unknown as WordEntry[]);
    }
    else { deck.sort(function(a, b) { return (_hardWords.indexOf(b[0]) < _hardWords.indexOf(a[0]) ? 1 : -1); }); }
    state._activeTagSet = null;
    if (selTagEl) selTagEl.value = '';
    state.deck = deck; window.deck = deck;
    idx = 0; render(); return;
  } else if (v === 'bookmarks') {
    _baseWords = W.slice();
    var _bms = getBookmarks();
    deck = (W as unknown as WordEntry[]).filter(function(w){ return _bms.has(w[0]); });
    if (!deck.length) { deck = W.slice(0, 10) as unknown as WordEntry[]; alert('Закладок немає — додай ⭐ на картках'); }
    shuffle(deck);
  } else if (v === 'unlearned') {
    _baseWords = W.slice();
    deck = buildUnlearnedDeck(_baseWords as unknown as WordEntry[]); // патчений buildUnlearnedDeck враховує _activeTagSet
  } else if (v === 'srs') {
    _baseWords = W.slice();
    deck = buildSRSDeck(_baseWords as unknown as WordEntry[]);       // патчений buildSRSDeck враховує _activeTagSet
  } else if (v.startsWith('cefr-')) {
    const cefrTarget = v.replace('cefr-', '') as import('../data/cefr.ts').CefrLevel;
    _baseWords = W.slice();
    deck = (W as unknown as WordEntry[]).filter(w => getCefrLevel(w[0]) === cefrTarget);
    shuffle(deck);
    if (!deck.length) {
      var _mt2 = document.getElementById('milestone-toast');
      if (_mt2) { _mt2.textContent = `Немає слів рівня ${cefrTarget} — додай більше слів!`; _mt2.className='milestone-toast';void _mt2.offsetWidth;_mt2.className='milestone-toast show';setTimeout(()=>{_mt2!.className='milestone-toast';},3500); }
      deck = _baseWords as unknown as WordEntry[]; shuffle(deck);
    }
    state._activeTagSet = null;
    if (selTagEl) selTagEl.value = '';
    state.deck = deck; window.deck = deck;
    idx = 0; render(); return;
  } else if (v.startsWith('stale')) {
    _baseWords = W.slice();
    deck = buildStaleDeck(v === 'stale7' ? 7 : 30);
  } else {
    var n = parseInt(v);
    _baseWords = n===0 ? W.slice() : W.slice((n-1)*500, n===11 ? W.length : n*500);
    deck = (_baseWords as unknown as WordEntry[]).slice();
    shuffle(deck);
    // Для звичайних режимів застосовуємо тег-фільтр
    var _ats = state._activeTagSet;
    if (_ats) {
      deck = deck.filter(function(w){ return (_ats as Set<string>).has(w[0]); });
      if (!deck.length) deck = (_baseWords as unknown as WordEntry[]).filter(function(w){ return (_ats as Set<string>).has(w[0]); });
      shuffle(deck);
    }
  }
  state.deck = deck; window.deck = deck; idx=0; render();
});


// ── Геймфікація: streak + денна ціль ──
var TODAY = new Date().toISOString().slice(0,10);
window.TODAY = TODAY; // legacy files (catpairs.js, srs.js, etc.) use this globally


function renderGameBar() {
  var d = getGameData();
  var pct = Math.min(d.goalCur / d.goalMax * 100, 100);
  document.getElementById('streak-num')!.textContent = String(d.streak || 0);
  // Streak shields display
  const shieldsEl = document.getElementById('shields-row');
  if (shieldsEl) {
    const n = d.shields ?? 0;
    shieldsEl.textContent = n > 0 ? '🛡️'.repeat(n) + ' щит' + (n > 1 ? 'и' : '') : '';
    shieldsEl.title = n > 0
      ? `${n} щит${n > 1 ? 'и' : ''}: захистить стрік при пропуску дня`
      : 'Щитів немає. Отримай за 7 днів поспіль.';
  }
  document.getElementById('goal-cur')!.textContent = String(d.goalCur || 0);
  document.getElementById('goal-max')!.textContent = String(d.goalMax);
  var fill = document.getElementById('goal-fill');
  fill!.style.width = pct + '%';
  fill!.className = 'goal-fill' + (d.goalCur >= d.goalMax ? ' done' : '');
  var badge = document.getElementById('goal-done');
  badge!.style.display = d.goalCur >= d.goalMax ? 'inline' : 'none';
  try { updateRing(d.goalCur||0, d.goalMax||20); } catch(e){}
  try { renderLevelProgress(); } catch(e){}
}

// Запуск під час простою браузера (не блокує UI)
function onWordLearned() {
  var d = getGameData();
  // Денна ціль
  d.goalCur = (d.goalCur || 0) + 1;
  // Лічильник виконаних цілей
  if (d.goalCur === d.goalMax) { d.goalDays = (d.goalDays || 0) + 1; }
  // Стрік
  d = updateStreak(d);
  saveGameData(d);
  renderGameBar();
  // Щоденна статистика
  recordDailyWord();
  try { maybeSubmitScore(); } catch(e){}
  // Лічильник сесії + XP за слово
  var gd2 = getGameData();
  gd2.sessionWords = (gd2.sessionWords || 0) + 1;
  var xpGain = 10 * getComboMult(); // ×2/×3 з комбо
  gd2.xp = (gd2.xp || 0) + xpGain;
  saveGameData(gd2);
  // Рівень і досягнення — в idle щоб не блокувати UI
  _idle(function() {
    try { renderLevelBadge(); } catch(e){}
    try { checkAchievements(); } catch(e){}
  });
}

// getDailyStats — imported from ./features/game.ts

// ── Рендер статистики ──
function getBlockColor(pct: number): string {
  if (pct >= 80) return '#27ae60';
  if (pct >= 50) return '#f39c12';
  if (pct >= 20) return '#3498db';
  return '#bdc3c7';
}

var _statsRenderKey = '';
function _renderStatsCore() {
  var gd = getGameData();
  const newKey = known.size + '|' + (gd.streak ?? 0) + '|' + (gd.goalCur ?? 0) + '|' + state.TODAY;
  if (newKey === _statsRenderKey) return;
  _statsRenderKey = newKey;
  // Загальні цифри
  document.getElementById('st-known')!.textContent = String(known.size);
  document.getElementById('st-pct')!.textContent = Math.round(known.size/W.length*100) + '%';
  document.getElementById('st-streak')!.textContent = String(gd.streak || 0);

  // Графік по днях — останні 14
  var daily = getDailyStats();
  var days = [];
  for (var i = 13; i >= 0; i--) {
    var d = new Date();
    d.setDate(d.getDate() - i);
    var ds = d.toISOString().slice(0,10);
    var lbl = (d.getDate()) + '/' + (d.getMonth()+1);
    days.push({ date: ds, label: lbl, val: daily[ds] || 0, isToday: ds === TODAY });
  }

  var maxVal = Math.max.apply(null, days.map(function(d){return d.val;})) || 1;
  var chartEl = document.getElementById('chart-bars');

  var hasData = days.some(function(d){return d.val>0;});
  if (!hasData) {
    chartEl!.innerHTML = '<div class="chart-empty">Ще немає даних.<br>Почни вивчати слова!</div>';
  } else {
    chartEl!.innerHTML = days.map(function(d) {
      var h = Math.round((d.val / maxVal) * 60);
      return '<div class="chart-col">' +
        (d.val > 0 ? '<div class="chart-val">'+ d.val +'</div>' : '<div class="chart-val" style="visibility:hidden">0</div>') +
        '<div class="chart-bar-wrap"><div class="chart-bar'+(d.isToday?' today':'')+'" style="height:'+ h +'px"></div></div>' +
        '<div class="chart-label">'+ (d.isToday?'сьогодні':d.label) +'</div>' +
      '</div>';
    }).join('');
  }

  // Блоки — 500 слів кожен (останній може бути більший)
  var blockSize = 500;
  var blocks = [];
  for (var s = 0; s < W.length; s += blockSize) {
    // Якщо залишок менше blockSize — приєднуємо до поточного блоку
    var end = s + blockSize;
    if (end < W.length && W.length - end < blockSize) end = W.length;
    var slice = W.slice(s, end);
    var knownInBlock = slice.filter(function(w){ return known.has(w[0]); }).length;
    blocks.push({
      label: (s+1) + '–' + Math.min(end, W.length),
      total: slice.length,
      known: knownInBlock,
      pct: Math.round(knownInBlock / slice.length * 100)
    });
    if (end >= W.length) break;
  }

  var blocksEl = document.getElementById('blocks-list');
  blocksEl!.innerHTML = blocks.map(function(b) {
    var color = getBlockColor(b.pct);
    return '<div class="block-row">' +
      '<div class="block-label">'+ b.label +'</div>' +
      '<div class="block-track"><div class="block-fill" style="width:'+ b.pct +'%;background:'+ color +';"></div></div>' +
      '<div class="block-pct" style="color:'+ color +'">'+ b.pct +'%</div>' +
    '</div>';
  }).join('');
}

// ── Кнопки відкрити/закрити статистику ──
function openStats() {
  renderStats();
  document.getElementById('stats-overlay')!.style.display = 'flex';
}
function closeStats() {
  document.getElementById('stats-overlay')!.style.display = 'none';
}
document.getElementById('btn-stats')!.addEventListener('click', function(e){
  e.stopPropagation();
  openStats();
  setTimeout(function(){ try { (window as any).updateUI?.(); } catch(e) {} }, 50);
});
document.getElementById('stats-close')!.addEventListener('click', closeStats);
document.getElementById('stats-overlay')!.addEventListener('click', function(e){
  if(e.target === this) closeStats();
});

document.getElementById('goal-set-btn')!.addEventListener('click', function(e) {
  e.stopPropagation();
  var d = getGameData();
  var inp = document.getElementById('goal-input') as HTMLInputElement;
  inp!.value = String(d.goalMax || 20);
  var modal = document.getElementById('goal-modal')!;
  modal.style.display = 'flex';
  setTimeout(function(){ inp!.focus(); inp!.select(); }, 50);
});
document.getElementById('goal-modal-cancel')!.addEventListener('click', function(){
  document.getElementById('goal-modal')!.style.display = 'none';
});
document.getElementById('goal-modal-ok')!.addEventListener('click', function(){
  var val = parseInt((document.getElementById('goal-input') as HTMLInputElement)!.value);
  if (val > 0) {
    var d = getGameData();
    d.goalMax = val;
    saveGameData(d);
    renderGameBar();
  }
  document.getElementById('goal-modal')!.style.display = 'none';
});
document.getElementById('goal-input')!.addEventListener('keydown', function(e){
  if(e.key === 'Enter') document.getElementById('goal-modal-ok')!.click();
  if(e.key === 'Escape') document.getElementById('goal-modal')!.style.display = 'none';
});
document.getElementById('goal-modal')!.addEventListener('click', function(e){
  if(e.target === this) this.style.display = 'none';
});

// ── Безпечна ініціалізація ──

try { renderGameBar(); } catch(e){ console.error((e as Error).message); }


// ── Темна тема ──
(function(){
  var saved = localStorage.getItem('ew_theme');
  if(saved === 'dark') { document.body.classList.add('dark'); document.getElementById('btn-theme')!.textContent = '☀️'; }
})();
document.getElementById('btn-theme')!.addEventListener('click', function(){
  var isDark = document.body.classList.toggle('dark');
  this.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('ew_theme', isDark ? 'dark' : 'light');
});

// ── Пошук ──
(function(){
  var inp = document.getElementById('search-input') as HTMLInputElement | null;
  var box = document.getElementById('search-results')!;

  function goToWord(word: string): void {
    // Знайти у поточній деці
    var di = deck.findIndex(function(w){ return w[0].toLowerCase() === word.toLowerCase(); });
    if(di === -1) {
      // Якщо не в деці — знайти в W і перейти
      var wLow = word.toLowerCase();
      var wi = -1;
      _wordIdx.forEach(function(i, k){ if(k.toLowerCase() === wLow) wi = i; });
      if(wi === -1) return;
      deck = W.slice() as unknown as WordEntry[]; shuffle(deck);
      state.deck = deck; window.deck = deck; di = deck.findIndex(function(w){ return w[0].toLowerCase() === wLow; });
      (document.getElementById('sel-range') as HTMLSelectElement)!.value = '0';
    }
    idx = di; stopAuto(); render();
    inp!.value = ''; box.className = 'search-results'; inp!.blur();
  }

  // Event delegation: click + touchend for iOS Safari compatibility
  function _handleSearchSelect(e: Event): void {
    var item = (e.target as Element).closest<HTMLElement>('.search-result-item');
    if (item?.dataset.word) { e.preventDefault(); goToWord(item.dataset.word); }
  }
  box.addEventListener('click',    _handleSearchSelect);
  box.addEventListener('touchend', _handleSearchSelect);

  var _searchTimer: ReturnType<typeof setTimeout> | null = null;
  inp!.addEventListener('input', function(){
    var q = this.value.trim().toLowerCase();
    if (!q) { box.className = 'search-results'; if (_searchTimer) clearTimeout(_searchTimer); return; }
    if (_searchTimer) clearTimeout(_searchTimer);
    _searchTimer = setTimeout(function() {
      var hits = W.filter(function(w){
        return w[0].toLowerCase().startsWith(q) || w[1].toLowerCase().includes(q);
      }).slice(0, 8);
      if (!hits.length) {
        box.innerHTML = '<div class="search-no-results">Нічого не знайдено</div>';
      } else {
        box.innerHTML = hits.map(function(w){
          return '<div class="search-result-item" data-word="'+w[0]+'"><span class="sr-word">'+w[0]+'</span><span class="sr-transl">'+w[1]+'</span></div>';
        }).join('');
      }
      box.className = 'search-results open';
    }, 180); // debounce 180ms
  });

  // Закрити при кліку поза
  document.addEventListener('click', function(e){
    if(!inp!.contains(e.target as Node) && !box.contains(e.target as Node)){
      box.className = 'search-results';
    }
  });

  // Навігація стрілками у результатах
  inp!.addEventListener('keydown', function(e){
    var items = box.querySelectorAll('.search-result-item');
    var active = box.querySelector('.search-result-item.active');
    if(e.key === 'ArrowDown'){
      e.preventDefault();
      var next = active ? (active as HTMLElement).nextElementSibling : items[0];
      if(active) (active as HTMLElement).classList.remove('active');
      if(next) (next as HTMLElement).classList.add('active');
    } else if(e.key === 'ArrowUp'){
      e.preventDefault();
      var prev = active ? (active as HTMLElement).previousElementSibling : items[items.length-1];
      if(active) (active as HTMLElement).classList.remove('active');
      if(prev) (prev as HTMLElement).classList.add('active');
    } else if(e.key === 'Enter' && active){
      e.preventDefault(); goToWord((active as HTMLElement).dataset.word ?? '');
    } else if(e.key === 'Escape'){
      box.className = 'search-results'; this.blur();
    }
  });
})();

// ── Клавіатурні скорочення ──
document.addEventListener('keydown', function(e){
  // Не реагувати якщо фокус у полі вводу
  if((document.activeElement as HTMLElement).tagName === 'INPUT' || (document.activeElement as HTMLElement).tagName === 'SELECT' || (document.activeElement as HTMLElement).tagName === 'TEXTAREA') return;
  if((e.target as Element).closest('#modal-overlay')) return;

  if(e.code === 'Space'){
    e.preventDefault();
    if(!flipped){ flipped=true; document.getElementById('wtransl')!.className='transl show'; document.getElementById('exua')!.className='ex-ua show'; }
    else { document.getElementById('btn-next')!.click(); }
  } else if(e.code === 'Enter'){
    e.preventDefault();
    document.getElementById('btn-know')!.click();
  } else if(e.code === 'ArrowRight'){
    e.preventDefault();
    document.getElementById('btn-next')!.click();
  } else if(e.code === 'ArrowLeft'){
    e.preventDefault();
    document.getElementById('btn-prev')!.click();
  } else if(e.code === 'KeyF'){
    e.preventDefault();
    if(!flipped){ flipped=true; document.getElementById('wtransl')!.className='transl show'; document.getElementById('exua')!.className='ex-ua show'; }
  }
});


// LEVELS, getLevel, getNextLevel — imported from ./features/game.ts
function renderLevelBadge() {
  var n = known.size;
  var lv = getLevel(n);
  var badge = document.getElementById('level-badge');
  if (badge) { badge.textContent = lv.name; badge!.style.background = lv.color + '22'; badge!.style.color = lv.color; }
  var numEl = document.getElementById('gb-level-num');
  var lvIdx = LEVELS.indexOf(lv) + 1;
  if (numEl) { numEl.textContent = String(lvIdx); numEl.style.color = lv.color; }
  renderLevelProgress();
}
function renderLevelProgress() {
  var n = known.size;
  var lv   = getLevel(n);
  var next = getNextLevel(n);
  var fillEl = document.getElementById('gb-level-fill');
  var xpEl   = document.getElementById('gb-level-xp');
  var nextEl = document.getElementById('gb-level-next');
  if (!fillEl) return;
  if (next) {
    var cur  = n - lv.min;
    var need = next.min - lv.min;
    var pct  = Math.round(cur / need * 100);
    fillEl.style.width = pct + '%';
    fillEl.style.background = 'linear-gradient(90deg, ' + lv.color + ', ' + (next.color || lv.color) + ')';
    if (xpEl)   xpEl.textContent   = cur + ' / ' + need + ' слів';
    if (nextEl) nextEl.textContent = next.name;
  } else {
    fillEl.style.width = '100%';
    if (xpEl)   xpEl.textContent   = '🏆 Максимум!';
    if (nextEl) nextEl.textContent = '';
  }
  // Синхронізуємо кільце з прогресом рівня
  try { updateRing(0, 0); } catch(e){}
}

// ── Режими: трекер завершень ─────────────────────────────────
window.recordModeComplete = function(mode: string) {
  var m = getModeStats();
  m[mode] = (m[mode] || 0) + 1;
  saveModeStats(m);
  try { checkAchievements(); } catch(e){}
};

// ── Власні слова: трекер ─────────────────────────────────────
window.recordCustomWordAdded = function() {
  try { checkAchievements(); } catch(e){}
};

// ════════════════════════════════════════
// ДОСЯГНЕННЯ
// ════════════════════════════════════════
// ACHIEVEMENTS imported from data/achievements.ts

var _toastTimer: ReturnType<typeof setTimeout> | null = null;
function showToast(ach: Achievement): void {
  var t = document.getElementById('achievement-toast')!
  document.getElementById('toast-icon')!.textContent = ach.icon;
  document.getElementById('toast-name')!.textContent = _achName(ach);
  document.getElementById('toast-desc')!.textContent = _achHint(ach);
  if(_toastTimer) clearTimeout(_toastTimer);
  // Спочатку скидаємо стан
  t.style.display = 'none';
  t.classList.remove('show');
  // Невелика затримка щоб CSS transition спрацював
  requestAnimationFrame(function(){
    requestAnimationFrame(function(){
      t.style.display = 'block';
      requestAnimationFrame(function(){
        t.classList.add('show');
      });
    });
  });
  _toastTimer = setTimeout(function(){
    t.classList.remove('show');
    setTimeout(function(){ t.style.display='none'; }, 350);
  }, 3500);
}

function checkAchievements() {
  var unlocked = loadUnlocked();
  if (unlocked.length >= ACHIEVEMENTS.length) return;
  var unlockedSet = new Set(unlocked);
  var k = known.size;
  var g = getGameData();
  var m = getModeStats();
  var c = (typeof _customWords !== 'undefined') ? _customWords.length : 0;
  var newOnes: Achievement[] = [];
  ACHIEVEMENTS.forEach(function(a){
    if(!unlockedSet.has(a.id) && a.check(k, g, m, c)){
      newOnes.push(a);
      unlocked.push(a.id);
    }
  });
  if(newOnes.length) {
    saveUnlocked(unlocked);
    // Показати тости послідовно
    var i = 0;
    function showNext(){
      if(i < newOnes.length){
        showToast(newOnes[i]);
        i++;
        if(i < newOnes.length) setTimeout(showNext, 4000);
      }
    }
    showNext();
  }
}


function renderLevelsRoadmap() {
  var container = document.getElementById('levels-roadmap');
  if (!container) return;
  var n = known.size;
  container!.innerHTML = '';
  LEVELS.forEach(function(lv, i) {
    var next = LEVELS[i + 1];
    var isDone    = next ? n >= next.min : n >= lv.min;
    var isCurrent = n >= lv.min && (!next || n < next.min);
    var lvNum     = i + 1;
    var pct       = next ? Math.min(100, Math.round(Math.max(0, n - lv.min) / (next.min - lv.min) * 100)) : 100;

    var row = document.createElement('div');
    row.className = 'level-row' + (isCurrent ? ' level-current' : '') + (isDone && !isCurrent ? ' level-done' : '');

    var fillBar = document.createElement('div');
    fillBar.className = 'level-row-fill';
    fillBar.style.cssText = 'width:' + (isCurrent ? pct : isDone ? 100 : 0) + '%;background:' + lv.color + ';';

    // Номер рівня — кружок з кольором
    var icon = document.createElement('div');
    icon.className = 'level-row-icon';
    icon.style.cssText = 'width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;' +
      'font-size:.72rem;font-weight:800;flex-shrink:0;border:2px solid ' + lv.color + ';color:' + lv.color + ';';
    icon.textContent = String(lvNum);

    var info = document.createElement('div');
    info.className = 'level-row-info';

    var name = document.createElement('div');
    name.className = 'level-row-name';
    name.style.color = isCurrent ? lv.color : '';
    name.textContent = lv.name; // повна назва з емодзі

    var range = document.createElement('div');
    range.className = 'level-row-range';
    range.textContent = lv.min + (next ? '–' + (next.min - 1) : '+') + ' слів' + (isCurrent ? ' · ' + n + ' вивчено (' + pct + '%)' : '');

    info.appendChild(name);
    info.appendChild(range);

    var badge = document.createElement('div');
    badge.className = 'level-row-badge';
    badge!.style.color = lv.color;
    badge!.style.borderColor = lv.color + '66';
    badge.textContent = isDone && !isCurrent ? '✓' : isCurrent ? '▶' : '🔒';

    row.appendChild(fillBar);
    row.appendChild(icon);
    row.appendChild(info);
    row.appendChild(badge);
    container!.appendChild(row);
  });
}

function renderAchievements() {
  var unlocked = new Set(loadUnlocked());
  var grid = document.getElementById('achievements-grid');
  var k = known.size;
  var g = getGameData();
  var m = getModeStats();
  var c = (typeof _customWords !== 'undefined') ? _customWords.length : 0;

  // Групуємо по категоріях
  var cats: Record<string, Achievement[]> = {};
  ACHIEVEMENTS.forEach(function(a){
    if(!(cats as Record<string, Achievement[]>)[a.cat]) (cats as Record<string, Achievement[]>)[a.cat] = [];
    (cats as Record<string, Achievement[]>)[a.cat].push(a);
  });

  var html2 = '';
  Object.keys(cats).forEach(function(cat){
    html2 += '<div class="ach-category">';
    html2 += '<div class="ach-cat-title">' + _achCat(cat) + '</div>';
    html2 += '<div class="ach-grid-inner">';
    cats[cat].forEach(function(a: Achievement){
      var isUnlocked = unlocked.has(a.id);
      var prog = a.progress(k, g, m, c);
      var pct = Math.round(prog.cur / prog.max * 100);
      html2 += '<div class="ach-card ' + (isUnlocked ? 'unlocked' : 'locked') + '" data-id="' + a.id + '">' +
        '<span class="ach-icon">' + a.icon + '</span>' +
        '<div class="ach-name">' + _achName(a) + '</div>' +
        '<div class="ach-progress-track"><div class="ach-progress-fill" style="width:' + pct + '%' + (isUnlocked?';background:#27ae60':'') + '"></div></div>' +
        '<div class="ach-progress-label">' + (isUnlocked ? (_isEnLang() ? '✓ Done' : '✓ Виконано') : prog.cur + ' / ' + prog.max) + '</div>' +
      '</div>';
    });
    html2 += '</div></div>';
  });
  grid!.innerHTML = html2;

  // Клік на картку — показати попап
  grid!.querySelectorAll('.ach-card').forEach(function(card){
    card.addEventListener('click', function(this: HTMLElement, e: Event){
      e.stopPropagation(); // prevent ach-overlay from closing
      var id = (this as HTMLElement).dataset.id;
      var a = ACHIEVEMENTS.find(function(x){ return x.id === id; });
      if(!a) return;
      var isUnlocked = unlocked.has(id ?? '');
      var prog = a.progress(k, g, m, c);
      var pct = Math.min(Math.round(prog.cur / prog.max * 100), 100);
      document.getElementById('ap-icon')!.textContent = a.icon;
      document.getElementById('ap-name')!.textContent = _achName(a);
      document.getElementById('ap-cat')!.textContent = _achCat(a.cat);
      document.getElementById('ap-hint')!.textContent = _achHint(a);
      document.getElementById('ap-prog-label')!.textContent = prog.cur + ' / ' + prog.max;
      document.getElementById('ap-prog-fill')!.style.width = pct + '%';
      if(isUnlocked) {
        document.getElementById('ap-prog-fill')!.style.background = '#27ae60';
      } else {
        document.getElementById('ap-prog-fill')!.style.background = '';
      }
      var statusEl = document.getElementById('ap-status')!;
      statusEl.textContent = isUnlocked
        ? (_isEnLang() ? '🏆 Achievement unlocked!' : '🏆 Досягнення розблоковано!')
        : (_isEnLang() ? '🔒 Not yet completed'      : '🔒 Ще не виконано');
      statusEl.className = 'ach-popup-status ' + (isUnlocked ? 'done' : 'todo');
      var overlay = document.getElementById('ach-popup-overlay')!;
      overlay.className = 'open';
    });
  });
}

// Закрити попап
document.getElementById('ap-close')!.addEventListener('click', function(){
  document.getElementById('ach-popup-overlay')!.className = '';
});
document.getElementById('ach-popup-overlay')!.addEventListener('click', function(e){
  if(e.target === this) this.className = '';
});

// ── Єдина renderStats ──
function renderSRSForecast() {
  var container = document.getElementById('srs-forecast');
  if (!container) return;
  var today = new Date(); today.setHours(0,0,0,0);
  var counts = [];
  for (var i = 0; i < 14; i++) {
    var d = new Date(today); d.setDate(d.getDate() + i);
    var dateStr = d.toISOString().slice(0,10);
    var cnt = Object.values(srsData).filter(function(s: any){ return s.due === dateStr; }).length;
    counts.push({ date: dateStr, cnt: cnt, label: i === 0 ? 'Сьогодні' : i === 1 ? 'Завтра' : d.toLocaleDateString('uk',{day:'numeric',month:'short'}) });
  }
  var maxCnt = Math.max.apply(null, counts.map(function(c){ return c.cnt; })) || 1;
  var totalDue = counts.reduce(function(a,c){ return a+c.cnt; }, 0);

  var html = '<div style="font-size:.72rem;color:var(--text3);margin-bottom:8px;">Всього заплановано: ' + totalDue + ' повторень</div>';
  html += '<div class="srs-fc-bars">';
  counts.forEach(function(c) {
    var pct = Math.round(c.cnt / maxCnt * 100);
    var isToday = c.label === 'Сьогодні';
    html += '<div class="srs-fc-col">' +
      '<div class="srs-fc-bar-wrap"><div class="srs-fc-bar' + (isToday ? ' srs-fc-today' : '') + '" style="height:' + Math.max(pct,2) + '%"></div></div>' +
      '<div class="srs-fc-cnt">' + (c.cnt || '') + '</div>' +
      '<div class="srs-fc-lbl">' + c.label + '</div>' +
    '</div>';
  });
  html += '</div>';
  container!.innerHTML = html;
}

function _renderModeAccuracy(): void {
  const el = document.getElementById('mode-accuracy-list');
  if (!el) return;
  const acc = getModeAccuracy();
  const modes: { key: string; label: string; icon: string }[] = [
    { key: 'quiz',   label: 'Тест',     icon: '🧠' },
    { key: 'write',  label: 'Письмо',   icon: '✍️' },
    { key: 'listen', label: 'Аудіо',    icon: '🔊' },
    { key: 'fib',    label: 'Речення',  icon: '✏️' },
    { key: 'lesson', label: 'Урок',     icon: '📚' },
    { key: 'tempo',  label: 'Темп',     icon: '⚡' },
  ];
  const mStats = getModeStats();
  const rows = modes.map(m => {
    const a = acc[m.key];
    const sessions = mStats[m.key] ?? 0;
    if (!a && sessions === 0) return '';
    const total = (a?.ok ?? 0) + (a?.err ?? 0);
    const pct = total > 0 ? Math.round((a!.ok / total) * 100) : null;
    const barColor = pct === null ? 'var(--border)' : pct >= 80 ? '#27ae60' : pct >= 60 ? '#f39c12' : '#e74c3c';
    const pctText = pct !== null ? `${pct}%` : '—';
    const totalText = total > 0 ? `${a?.ok ?? 0}✓ ${a?.err ?? 0}✗` : '';
    return `<div style="margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
        <span style="font-size:.82rem;font-weight:600;color:var(--text);">${m.icon} ${m.label}</span>
        <span style="font-size:.75rem;color:var(--text2);">${totalText}${sessions ? ` · ${sessions} сес.` : ''}</span>
        <span style="font-size:.82rem;font-weight:700;color:${barColor};min-width:36px;text-align:right;">${pctText}</span>
      </div>
      <div style="height:6px;background:var(--border);border-radius:3px;overflow:hidden;">
        <div style="height:100%;width:${pct ?? 0}%;background:${barColor};border-radius:3px;transition:width .4s;"></div>
      </div>
    </div>`;
  }).filter(Boolean);
  el.innerHTML = rows.length
    ? rows.join('')
    : '<div style="font-size:.8rem;color:var(--text3);text-align:center;padding:8px 0;">Ще немає даних — грай у режимах!</div>';
}

function _renderCefrStats(): void {
  const el = document.getElementById('cefr-stats-list'); if (!el) return;
  const levels: import('../data/cefr.ts').CefrLevel[] = ['A1','A2','B1','B2','C1','C2'];
  const colors: Record<string, string> = { A1:'#27ae60', A2:'#2ecc71', B1:'#d4ac0d', B2:'#e67e22', C1:'#e74c3c', C2:'#8e44ad' };
  const descs:  Record<string, string> = { A1:'Початківець', A2:'Елементарний', B1:'Середній', B2:'Вище середнього', C1:'Просунутий', C2:'Майстерний' };

  const stats: Record<string, {known:number; total:number}> = {};
  levels.forEach(l => stats[l] = {known:0, total:0});
  (W as unknown as import('../src/types.js').WordEntry[]).forEach(w => {
    const lvl = getCefrLevel(w[0]);
    stats[lvl].total++;
    if (known.has(w[0])) stats[lvl].known++;
  });

  el.innerHTML = levels.map(l => {
    const s = stats[l];
    const pct = s.total > 0 ? Math.round(s.known / s.total * 100) : 0;
    const c = colors[l];
    return `<div style="margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
        <span style="font-size:.8rem;font-weight:700;">
          <span style="background:${c}22;color:${c};border:1.5px solid ${c}44;border-radius:6px;padding:1px 6px;font-size:.72rem;margin-right:6px;">${l}</span>
          ${descs[l]}
        </span>
        <span style="font-size:.75rem;color:var(--text2);">${s.known} / ${s.total} (${pct}%)</span>
      </div>
      <div style="height:5px;background:var(--border);border-radius:3px;overflow:hidden;">
        <div style="height:100%;width:${pct}%;background:${c};border-radius:3px;transition:width .5s;"></div>
      </div>
    </div>`;
  }).join('');
}

function renderStats() {
  try { _renderStatsCore(); }       catch(e){ console.error('renderStatsCore:', e); }
  try { renderAchievements(); }     catch(e){ console.error('renderAchievements:', e); }
  try { renderSRSForecast(); }      catch(e){ console.error('renderSRSForecast:', e); }
  try { _renderModeAccuracy(); }    catch(e){ console.error('renderModeAccuracy:', e); }
  try { _renderCefrStats(); }       catch(e){ console.error('renderCefrStats:', e); }
  // Leaderboard — lazy load when stats opened
  const lbEl = document.getElementById('lb-container');
  if (lbEl && !lbEl.dataset.loaded) {
    lbEl.dataset.loaded = '1';
    renderLeaderboard(lbEl).catch(() => {});
  }
}
document.getElementById('lb-refresh-btn')?.addEventListener('click', () => {
  const lbEl = document.getElementById('lb-container');
  if (lbEl) { lbEl.removeAttribute('data-loaded'); renderLeaderboard(lbEl).catch(()=>{}); }
});

// renderLevelBadge/checkAchievements вбудовано в основну onWordLearned нижче

// ── Перевіряємо досягнення і рівень при старті ──
renderLevelBadge();
checkAchievements();

// ── Phase 2: expose all functions/vars needed by legacy mode/feature files ──
window.speak             = speak;
window.render            = render;
window.stopAuto          = stopAuto;
window.getVoice          = getVoice;
window.getGameData       = getGameData;
window.saveGameData      = saveGameData;
window.onWordLearned     = onWordLearned;
window.checkAchievements = checkAchievements;
registerCheckAchievements(checkAchievements); // typed registration for game.ts
window.renderGameBar     = renderGameBar;
window.renderLevelBadge  = renderLevelBadge;
window.renderLevelsRoadmap = renderLevelsRoadmap;
window.renderAchievements  = renderAchievements;
window.renderStats         = renderStats;
window.ACHIEVEMENTS        = ACHIEVEMENTS;
window.openWordDetail      = openWordDetail;
window.showToast           = showToast;
window.buildStaleDeck      = buildStaleDeck;
window.openStats           = openStats;
window.closeStats          = closeStats;
window._gameCache          = state._gameCache;
window._dailyCache         = state._dailyCache;
// _srsStatsDirty moved to state
window.idx                 = idx;
window.flipped             = flipped;
window.cw = cw;
// ── Setters for module-scope primitives used by legacy files ──
window.setIdx = function(i: number) { idx = i; };
window.setDeck = function(d: WordEntry[]) { deck = d; window.deck = deck; };
window.setFlipped = function(v: boolean) { flipped = v; };
window.setCw      = function(v: WordEntry | null) { cw = v; };
window._wordIdx              = _wordIdx;
window._customWords          = _customWords;
window.invalidateSimilarCache = invalidateSimilarCache;
window.exportProgress        = exportProgress;
window.updateRing            = updateRing;
window.playSound             = playSound;
window.recordModeComplete    = recordModeComplete;
window.recordCustomWordAdded = recordCustomWordAdded;
window.renderLevelProgress   = renderLevelProgress;
window.renderSRSForecast     = renderSRSForecast;
window._speakWeb             = _speakWeb;
window.speakWebFallback      = (window as Window & {speakWebFallback?: (t: string, b: HTMLElement | null) => void}).speakWebFallback;
window._speakWithLang        = _speakWithLang;



// ════════════════════════════════════════
// ЕКСПОРТ / ІМПОРТ ПРОГРЕСУ
// ════════════════════════════════════════
function exportProgress() {
  // v:2 — завжди plain JSON для known/srs (незалежно від LZ-стиснення)
  var data = {
    v: 2,
    known: JSON.stringify([...known]),
    srs:   JSON.stringify(srsData),
    game:  localStorage.getItem('ew_game')  || '{}',
    daily: localStorage.getItem('ew_daily') || '{}',
    ach:   localStorage.getItem('ew_ach')   || '[]',
    theme: localStorage.getItem('ew_theme') || '',
  };
  return btoa(unescape(encodeURIComponent(JSON.stringify(data))));
}

function importProgress(code: string): boolean {
  try {
    var data = JSON.parse(decodeURIComponent(escape(atob(code.trim()))));
    if (data.v !== 1 && data.v !== 2) throw new Error('Невірний формат');

    var knownJson = data.known, srsJson = data.srs;

    if (data.v === 1) {
      // v1 може містити LZ-стиснений рядок — спробуємо розпакувати
      try { if (typeof LZString !== 'undefined') { var d = LZString.decompress(knownJson); if (d) knownJson = d; } } catch(e){}
      try { if (typeof LZString !== 'undefined') { var d = LZString.decompress(srsJson);   if (d) srsJson   = d; } } catch(e){}
    }

    // Зберігаємо через _lzSave щоб прапорці LZ були виставлені коректно
    if (knownJson) { try { _lzSave('ew_known', JSON.parse(knownJson)); } catch(e){} }
    if (srsJson)   { try { _lzSave('ew_srs',   JSON.parse(srsJson));   } catch(e){} }
    if (data.game)  localStorage.setItem('ew_game',  data.game);
    if (data.daily) localStorage.setItem('ew_daily', data.daily);
    if (data.ach)   localStorage.setItem('ew_ach',   data.ach);
    if (data.theme) localStorage.setItem('ew_theme', data.theme);

    // Перезавантажуємо в пам'ять
    try { known = new Set(JSON.parse(knownJson)); state.known = known; } catch(e){}
    try {
      srsData = JSON.parse(srsJson);
      Object.keys(srsData).forEach(function(k){ if(typeof srsData[k]==='number') delete srsData[k]; });
      state.srsData = srsData;
    } catch(e){}
    state._srsStatsDirty = true;
    state._gameCache = null; // скинути кеш гри
    try { updateSrsUI(W as unknown as WordEntry[]); } catch(e){}
    return true;
  } catch(e) {
    console.warn('Import failed:', (e as Error).message);
    return false;
  }
}

// ── Фоновий prefetch зображень ──
(function(){
  var _running = false;
  var _timer: ReturnType<typeof setInterval> | null = null;
  var _pos     = 0; // поточна позиція в W

  var barEl    = document.getElementById('prefetch-bar');
  var statusEl = document.getElementById('prefetch-status');
  var btnStart = document.getElementById('prefetch-start');
  var btnStop  = document.getElementById('prefetch-stop');
  var btnClear = document.getElementById('prefetch-clear');

  function cachedCount()  { return Object.keys(_imgCache).length; }
  function withImageCount(){ return Object.keys(_imgCache).filter(function(k){ return _imgCache[k]; }).length; }

  function updateUI() {
    var cached = cachedCount();
    var withImg = withImageCount();
    var total = W.length;
    var pct = Math.round(cached / total * 100);
    if (barEl) barEl.style.width = pct + '%';
    if (statusEl) {
      if (_running) {
        statusEl.textContent = 'Завантажується... ' + cached + '/' + total + ' (' + withImg + ' з фото)';
        statusEl.style.color = 'var(--accent)';
      } else if (cached >= total) {
        statusEl.textContent = '✅ Готово: ' + withImg + ' зображень з ' + total + ' слів';
        statusEl.style.color = '#27ae60';
      } else if (cached > 0) {
        statusEl.textContent = 'Призупинено: ' + cached + '/' + total + ' (' + withImg + ' з фото)';
        statusEl.style.color = 'var(--text3)';
      } else {
        statusEl.textContent = 'Готово до завантаження (' + total + ' слів)';
        statusEl.style.color = 'var(--text3)';
      }
    }
    if (btnStart) btnStart.style.display = (_running || cached >= total) ? 'none' : '';
    if (btnStop)  btnStop.style.display  = _running ? '' : 'none';
    if (btnStart && cached >= total) btnStart.style.display = 'none';
  }

  function findNext() {
    while (_pos < W.length && _imgCache.hasOwnProperty(W[_pos][0])) _pos++;
    return _pos < W.length ? W[_pos][0] : null;
  }

  function fetchNext() {
    if (!_running) return;
    var word = findNext();
    if (!word) {
      // Всі слова оброблені
      _running = false;
      updateUI();
      return;
    }
    _pos++;
    loadWikiImage(word, function() {
      updateUI();
      // Затримка: 150мс з Pixabay, 400мс без (поважаємо Wikipedia)
      var delay = _getPixabayKey() ? 150 : 400;
      _timer = setTimeout(fetchNext, delay);
    });
  }

  function start() {
    if (_running) return;
    _running = true;
    _pos = 0; // скинути позицію для пошуку не-закешованих
    updateUI();
    fetchNext();
  }

  function stop() {
    _running = false;
    if(_timer) clearTimeout(_timer!);
    updateUI();
  }

  if (btnStart) btnStart.addEventListener('click', start);
  if (btnStop)  btnStop.addEventListener('click', stop);
  if (btnClear) btnClear.addEventListener('click', function() {
    (window._showImgClearConfirm as ((cb: () => void) => void))(function() {
      stop();
      resetImgCache(); // handles _imgCache, _imgCacheTs, IDB + localStorage
      _pos = 0;
      updateUI();
    });
  });

  // Оновити prefetch UI при відкритті stats (вже мерджено з основним btn-stats listener)
})();

// ── Pixabay ключ ──
(function() {
  var inp = document.getElementById('pixabay-key-input') as HTMLInputElement | null;
  var saveBtn = document.getElementById('pixabay-key-save')!;
  var status = document.getElementById('pixabay-key-status')!;

  function refreshStatus() {
    var k = _getPixabayKey();
    if (k) {
      status.textContent = '✅ Ключ збережено. Нові слова отримають фото автоматично.';
      status.style.color = 'var(--accent)';
      inp!.value = k.slice(0, 6) + '••••••••••••••••••••••••••';
    } else {
      status.textContent = 'Ключ не вказано — використовується лише Wikipedia.';
      status.style.color = 'var(--text3)';
    }
  }
  refreshStatus();

  saveBtn.addEventListener('click', function() {
    var val = inp!.value.trim();
    // Якщо це замаскований рядок — не перезаписувати
    if (val && !val.includes('•')) {
      localStorage.setItem('ew_pixabay_key', val);
      // Очистити кеш щоб слова перезавантажились з Pixabay
      resetImgCache();
    }
    refreshStatus();
  });

  document.getElementById('stats-overlay')!.addEventListener('click', function() {
    refreshStatus();
  }, { once: false });
})();

document.getElementById('btn-export')!.addEventListener('click', function(){
  closeStats();
  closeStats();
  var code = exportProgress();
  var ta = (document.getElementById('export-textarea') as HTMLTextAreaElement);
  ta.value = code;
  document.getElementById('export-modal')!.style.display = 'flex';
  setTimeout(function(){
    ta.focus();
    ta.select();
    // Спробуємо скопіювати автоматично де можливо
    try {
      if(navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code).then(function(){
          document.getElementById('export-select-all')!.textContent = '✓ Скопійовано!';
        }).catch(function(){ /* тихо — користувач скопіює вручну */ });
      } else {
        document.execCommand('copy');
        document.getElementById('export-select-all')!.textContent = '✓ Скопійовано!';
      }
    } catch(e) {}
  }, 100);
});

document.getElementById('export-select-all')!.addEventListener('click', function(){
  var ta = (document.getElementById('export-textarea') as HTMLTextAreaElement);
  ta.focus(); ta.select();
  try {
    if(navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(ta.value).then(function(){
        document.getElementById('export-select-all')!.textContent = '✓ Скопійовано!';
        setTimeout(function(){ document.getElementById('export-select-all')!.textContent = 'Виділити все'; }, 2000);
      });
    } else {
      document.execCommand('copy');
      document.getElementById('export-select-all')!.textContent = '✓ Скопійовано!';
      setTimeout(function(){ document.getElementById('export-select-all')!.textContent = 'Виділити все'; }, 2000);
    }
  } catch(e) {}
});

document.getElementById('export-modal-close')!.addEventListener('click', function(){
  document.getElementById('export-modal')!.style.display = 'none';
  document.getElementById('export-select-all')!.textContent = 'Виділити все';
});
document.getElementById('export-modal')!.addEventListener('click', function(e){
  if(e.target === this) { this.style.display='none'; }
});

document.getElementById('btn-import-open')!.addEventListener('click', function(){
  (document.getElementById('import-textarea') as HTMLTextAreaElement).value = '';
  document.getElementById('import-error')!.textContent = '';
  closeStats();
  document.getElementById('import-modal')!.className = 'open';
});
document.getElementById('import-cancel')!.addEventListener('click', function(){
  document.getElementById('import-modal')!.className = '';
});
document.getElementById('import-confirm')!.addEventListener('click', function(){
  var code = (document.getElementById('import-textarea') as HTMLTextAreaElement).value.trim();
  if(!code) { document.getElementById('import-error')!.textContent = 'Встав код прогресу'; return; }
  if(importProgress(code)) {
    document.getElementById('import-modal')!.className = '';
    // Оновити відображення
    try { renderGameBar(); } catch(e){}
    try { renderLevelBadge(); } catch(e){}
    try { openStats(); } catch(e){}
    try { render(); } catch(e){}
    // Показати успіх
    var btn = document.getElementById('btn-import-open')!;
    btn.textContent = '✓ Імпортовано!';
    setTimeout(function(){ btn.textContent = '📥 Імпорт'; }, 3000);
  } else {
    document.getElementById('import-error')!.textContent = '❌ Невірний код — перевір чи повністю скопіював';
  }
});
document.getElementById('import-modal')!.addEventListener('click', function(e){
  if(e.target === this) this.className = '';
});


// ════════════════════════════════════════
// ПРОГРЕС-КІЛЬЦЕ
// ════════════════════════════════════════
// updateRing imported from ./features/ring.ts

// ════════════════════════════════════════
// КОНФЕТІ
// ════════════════════════════════════════
// launchConfetti imported from ./core/confetti.ts

// ════════════════════════════════════════
// playSound imported from ./core/audio.ts

// ════════════════════════════════════════
// 3D FLIP КАРТКИ
// ════════════════════════════════════════


// Патч flipCard — замість opacity показувати через 3D
var _origFlipLogic_handled = false;


// ════════════════════════════════════════
// СХОЖІ СЛОВА
// ════════════════════════════════════════

// Відстань Левенштейна (для схожості написання)
function levenshtein(a: string, b: string): number {
  var m = a.length, n = b.length;
  var dp = [];
  for (var i = 0; i <= m; i++) {
    dp[i] = [i];
    for (var j = 1; j <= n; j++) {
      if (i === 0) { dp[i][j] = j; continue; }
      dp[i][j] = a[i-1] === b[j-1]
        ? dp[i-1][j-1]
        : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
    }
  }
  return dp[m][n];
}

// Спільний префікс
function commonPrefix(a: string, b: string): number {
  var i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  return i;
}

// Схожість перекладу — спільні слова
function translSimilarity(ta: string, tb: string): number {
  var wa = ta.toLowerCase().split(/[s,/]+/).filter(Boolean);
  var wb = tb.toLowerCase().split(/[s,/]+/).filter(Boolean);
  var common = wa.filter(function(w){ return wb.indexOf(w) !== -1; });
  return common.length;
}

// Індекс синонімів (будується один раз)
// getSimilarWords imported from ./features/similar-words.ts

function updateCollocations() {
  if (!cw) return;
  var section = document.getElementById('cb-collocations');
  var list    = document.getElementById('cb-collocation-list');
  if (!section || !list) return;

  var colls = searchCollocations(cw[0]);
  if (!colls.length) { section.style.display = 'none'; return; }

  section.style.display = 'block';
  // Highlight the keyword in each phrase and display as pill
  list.innerHTML = colls.slice(0, 6).map(function(c) {
    var wordLow = cw![0].toLowerCase();
    var highlighted = c.phrase.replace(
      new RegExp('\\b(' + wordLow + '\\w*)\\b', 'i'),
      '<b>$1</b>'
    );
    return '<span class="colloc-pill">' + highlighted + '</span>';
  }).join('');
}

function updateWordFamilies() {
  if (!cw) return;
  var section = document.getElementById('cb-families');
  var chips   = document.getElementById('cb-family-chips');
  if (!section || !chips) return;

  var word = cw[0].toLowerCase();
  // Find family: check if word IS a base, or if word is a member of a base family
  var family: string[] | undefined = WORD_FAMILIES[word];
  if (!family) {
    // Search if this word appears as a member of another family
    for (var [base, members] of Object.entries(WORD_FAMILIES)) {
      if (members.includes(word)) {
        family = [base, ...members.filter(m => m !== word)];
        break;
      }
    }
  }

  if (!family || family.length === 0) { section.style.display = 'none'; return; }

  section.style.display = 'block';
  chips.innerHTML = family.slice(0, 6).map(function(w) {
    var wi = _wordIdx.get(w);
    var entry = wi !== undefined ? W[wi] : null;
    var transl = entry ? (entry as string[])[1] : '';
    var isKnown = known.has(w);
    return '<div class="sim-chip family-chip' + (isKnown ? ' known-chip' : '') + '" data-word="' + w + '">' +
      '<span class="sc-word">' + w + '</span>' +
      (transl ? '<span class="sc-transl">' + transl + '</span>' : '') +
    '</div>';
  }).join('');

  chips.querySelectorAll('.family-chip').forEach(function(chip) {
    chip.addEventListener('click', function(this: HTMLElement, e: Event) {
      e.stopPropagation();
      var targetWord = this.dataset.word;
      var wi2 = _wordIdx.has(targetWord) ? _wordIdx.get(targetWord) : -1;
      if (wi2 === undefined || wi2 === -1) return;
      openWordDetail(W[wi2 as number] as unknown as WordEntry);
    });
  });
}

function updateSimilarWords() {
  if (!cw) return;
  var section = document.getElementById('cb-similar');
  var chips   = document.getElementById('cb-chips');
  if (!section || !chips) return;

  var similar = getSimilarWords(cw[0], cw[1], 5);
  if (!similar.length) { section.style.display = 'none'; return; }

  section.style.display = 'block';
  chips.innerHTML = similar.map(function(w) {
    var isKnown = known.has(w[0]);
    return '<div class="sim-chip' + (isKnown ? ' known-chip' : '') + '" data-word="' + w[0] + '">' +
      '<span class="sc-word">' + w[0] + '</span>' +
      '<span class="sc-transl">' + w[1] + '</span>' +
    '</div>';
  }).join('');

  // Клік по чипу — відкрити Word Detail
  chips.querySelectorAll('.sim-chip').forEach(function(chip) {
    chip.addEventListener('click', function(this: HTMLElement, e: Event) {
      e.stopPropagation();
      var targetWord = this.dataset.word;
      var wi = _wordIdx.has(targetWord) ? _wordIdx.get(targetWord) : -1;
      if (wi === undefined || wi === -1) return;
      openWordDetail(W[wi as number] as unknown as WordEntry);
    });
  });
}

// ════════════════════════════════════════
// СВАЙПИ
// ════════════════════════════════════════
(function(){
  var card = document.getElementById('card')!;
  var shRight = document.getElementById('sh-right')!;
  var shLeft  = document.getElementById('sh-left')!;
  var shUp    = document.getElementById('sh-up')!;

  var startX = 0, startY = 0, startTime = 0;
  var isDragging = false;

  var THRESHOLD = 60;   // мін. відстань для свайпу
  var MAX_TIME = 400;   // мс

  card.addEventListener('touchstart', function(e){
    var t = e.touches[0];
    startX = t.clientX;
    startY = t.clientY;
    startTime = Date.now();
    isDragging = true;
  }, { passive: true });

  card.addEventListener('touchmove', function(e){
    if(!isDragging) return;
    var t = e.touches[0];
    var dx = t.clientX - startX;
    var dy = t.clientY - startY;
    var absDx = Math.abs(dx);
    var absDy = Math.abs(dy);

    // Показати підказку напрямку
    if(absDx > 20 && absDx > absDy) {
      shRight.className = 'swipe-hint-right' + (dx > 0 ? ' show' : '');
      shLeft.className  = 'swipe-hint-left'  + (dx < 0 ? ' show' : '');
      shUp.className    = 'swipe-hint-up';
      // Трохи рухаємо картку
      card.style.transition = 'none';
      card.style.transform = 'translateX(' + (dx * 0.25) + 'px) rotate(' + (dx * 0.02) + 'deg)';
    } else if(absDy > 20 && absDy > absDx && dy < 0) {
      shUp.className = 'swipe-hint-up show';
      shRight.className = 'swipe-hint-right';
      shLeft.className  = 'swipe-hint-left';
      card.style.transition = 'none';
      card.style.transform = 'translateY(' + (dy * 0.2) + 'px)';
    }
  }, { passive: true });

  card.addEventListener('touchend', function(e){
    if(!isDragging) return;
    isDragging = false;

    // Скинути іконки
    shRight.className = 'swipe-hint-right';
    shLeft.className  = 'swipe-hint-left';
    shUp.className    = 'swipe-hint-up';

    var t = e.changedTouches[0];
    var dx = t.clientX - startX;
    var dy = t.clientY - startY;
    var dt = Date.now() - startTime;
    var absDx = Math.abs(dx);
    var absDy = Math.abs(dy);

    // Скинути трансформацію
    card.style.transition = '';
    card.style.transform = '';

    if(dt > MAX_TIME) return; // занадто повільно

    if(absDx > THRESHOLD && absDx > absDy * 1.5) {
      // Горизонтальний свайп
      if(dx > 0) {
        // → Вправо = Знаю
        card.classList.add('swipe-right');
        setTimeout(function(){
          card.classList.remove('swipe-right');
          document.getElementById('btn-know')!.click();
        }, 220);
      } else {
        // ← Вліво = Далі
        card.classList.add('swipe-left');
        setTimeout(function(){
          card.classList.remove('swipe-left');
          document.getElementById('btn-next')!.click();
        }, 220);
      }
    } else if(absDy > 40 && dy < 0 && absDy > absDx * 1.2) {
      // ↑ Вгору = Показати переклад
      if(!flipped){
        card.classList.add('swipe-up');
        setTimeout(function(){
          card.classList.remove('swipe-up');
          flipped = true;
          document.getElementById('wtransl')!.className = 'transl show';
          document.getElementById('exua')!.className = 'ex-ua show';
        }, 200);
      }
    }
  }, { passive: true });
})();

// ════════════════════════════════════════
// PWA
// ════════════════════════════════════════
(function(){
  var deferredPrompt: any = null;
  var banner = document.getElementById('pwa-banner')!;

  // Слухаємо beforeinstallprompt (Chrome/Android)
  window.addEventListener('beforeinstallprompt', function(e){
    e.preventDefault();
    deferredPrompt = e;
    // Показати банер якщо ще не встановлено і не відхилено
    if(!localStorage.getItem('ew_pwa_dismissed')){
      setTimeout(function(){ banner.className = 'show'; }, 2000);
    }
  });

  document.getElementById('pwa-install')!.addEventListener('click', function(){
    banner.className = '';
    if(deferredPrompt){
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(function(r: any){
        if(r.outcome === 'accepted') localStorage.setItem('ew_pwa_dismissed','1');
        deferredPrompt = null;
      });
    }
  });

  document.getElementById('pwa-close')!.addEventListener('click', function(){
    banner.className = '';
    localStorage.setItem('ew_pwa_dismissed','1');
  });

  // iOS — підказка додати на головний екран
  var isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  var isInStandalone = (navigator as any).standalone === true;
  if(isIOS && !isInStandalone && !localStorage.getItem('ew_pwa_dismissed')){
    setTimeout(function(){
      (banner.querySelector('.pwa-text') as HTMLElement|null)?.setAttribute('innerHTML',
        '<strong>Додай на головний екран</strong> · Натисни <strong>⬜ Поділитися</strong> → <strong>На екран «Додому»</strong>');
      // Hide install button on iOS (no install prompt)
      const installBtn = banner.querySelector<HTMLElement>('.pwa-install-btn');
      if (installBtn) installBtn.style.display = 'none';
      banner.className = 'show';
    }, 2000);
  }
})();

// ════════════════════════════════════════
