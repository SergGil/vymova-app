// English Words App — js/features/voice.ts
// Web Speech API voice picker: EN + UA
import { synth } from '../core/srs.ts';

let _enURI = localStorage.getItem('ew_ws_voice')    ?? '';
let _ukURI = localStorage.getItem('ew_ws_uk_voice') ?? '';

type VoiceMapEntry = { match: string; label: string; gender: string; accent: string };

const VOICE_MAP: VoiceMapEntry[] = [
  { match: 'Google US English',         label: 'Google Samantha',    gender: '👩', accent: '🇺🇸' },
  { match: 'Google UK English Female',  label: 'Google Emma',        gender: '👩', accent: '🇬🇧' },
  { match: 'Google UK English Male',    label: 'Google James',       gender: '👨', accent: '🇬🇧' },
  { match: 'Google Australian English', label: 'Google Olivia',      gender: '👩', accent: '🇦🇺' },
  { match: 'Microsoft David',   label: 'Microsoft David',   gender: '👨', accent: '🇺🇸' },
  { match: 'Microsoft Mark',    label: 'Microsoft Mark',    gender: '👨', accent: '🇺🇸' },
  { match: 'Microsoft Zira',    label: 'Microsoft Zira',    gender: '👩', accent: '🇺🇸' },
  { match: 'Microsoft Jenny',   label: 'Microsoft Jenny',   gender: '👩', accent: '🇺🇸' },
  { match: 'Microsoft Guy',     label: 'Microsoft Guy',     gender: '👨', accent: '🇺🇸' },
  { match: 'Microsoft Aria',    label: 'Microsoft Aria',    gender: '👩', accent: '🇺🇸' },
  { match: 'Microsoft Davis',   label: 'Microsoft Davis',   gender: '👨', accent: '🇺🇸' },
  { match: 'Microsoft Ana',     label: 'Microsoft Ana',     gender: '👩', accent: '🇺🇸' },
  { match: 'Microsoft Eric',    label: 'Microsoft Eric',    gender: '👨', accent: '🇺🇸' },
  { match: 'Microsoft Ryan',    label: 'Microsoft Ryan',    gender: '👨', accent: '🇬🇧' },
  { match: 'Microsoft Sonia',   label: 'Microsoft Sonia',   gender: '👩', accent: '🇬🇧' },
  { match: 'Microsoft Libby',   label: 'Microsoft Libby',   gender: '👩', accent: '🇬🇧' },
  { match: 'Microsoft Maisie',  label: 'Microsoft Maisie',  gender: '👩', accent: '🇬🇧' },
  { match: 'Microsoft Natasha', label: 'Microsoft Natasha', gender: '👩', accent: '🇦🇺' },
  { match: 'Microsoft William', label: 'Microsoft William', gender: '👨', accent: '🇦🇺' },
  { match: 'Alex',      label: 'Apple Alex',      gender: '👨', accent: '🇺🇸' },
  { match: 'Samantha',  label: 'Apple Samantha',  gender: '👩', accent: '🇺🇸' },
  { match: 'Victoria',  label: 'Apple Victoria',  gender: '👩', accent: '🇺🇸' },
  { match: 'Daniel',    label: 'Apple Daniel',    gender: '👨', accent: '🇬🇧' },
  { match: 'Kate',      label: 'Apple Kate',      gender: '👩', accent: '🇬🇧' },
  { match: 'Karen',     label: 'Apple Karen',     gender: '👩', accent: '🇦🇺' },
  { match: 'Lee',       label: 'Apple Lee',       gender: '👨', accent: '🇦🇺' },
  { match: 'Moira',     label: 'Apple Moira',     gender: '👩', accent: '🇮🇪' },
  { match: 'Google українська',  label: 'Google Українська', gender: '👩', accent: '🇺🇦' },
  { match: 'Google Ukrainian',   label: 'Google Ukrainian',  gender: '👩', accent: '🇺🇦' },
  { match: 'Microsoft Ostap',    label: 'Microsoft Остап',   gender: '👨', accent: '🇺🇦' },
  { match: 'Microsoft Polina',   label: 'Microsoft Поліна',  gender: '👩', accent: '🇺🇦' },
  { match: 'Ukrainian',          label: 'Українська',        gender: '👩', accent: '🇺🇦' },
];

function _getLabel(voice: SpeechSynthesisVoice): VoiceMapEntry {
  const name = voice.name;
  for (const entry of VOICE_MAP) { if (name.toLowerCase().includes(entry.match.toLowerCase())) return entry; }
  const femaleWords = ['female','woman','girl','zira','jenny','aria','ana','sonia','libby','maisie','natasha','samantha','victoria','kate','karen','moira','emma','joanna','amy','polina','поліна'];
  const isFemale = femaleWords.some(w => name.toLowerCase().includes(w));
  return { match: '', label: name, gender: isFemale ? '👩' : '👨', accent: _langFlag(voice.lang) };
}

function _langFlag(lang: string): string {
  if (!lang) return '🌐'; const l = lang.toLowerCase();
  if (l.startsWith('uk')) return '🇺🇦';
  if (l === 'en-gb' || l === 'en-ie') return '🇬🇧';
  if (l === 'en-au') return '🇦🇺'; if (l === 'en-in') return '🇮🇳';
  if (l.startsWith('en-us') || l.startsWith('en-ca')) return '🇺🇸';
  if (l.startsWith('en')) return '🌍'; return '🌐';
}

function _allVoices(): SpeechSynthesisVoice[] { return window.speechSynthesis?.getVoices() ?? []; }
function _enVoices(): SpeechSynthesisVoice[] { return _allVoices().filter(v => v.lang?.toLowerCase().startsWith('en')); }
function _ukVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter(v => {
    const l = (v.lang ?? '').toLowerCase(), n = (v.name ?? '').toLowerCase();
    return l.startsWith('uk') || l === 'uk-ua' || l === 'uk_ua' || n.includes('ukrainian') || n.includes('укра');
  });
}
function _findByURI(uri: string, voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  return voices.find(v => v.voiceURI === uri) ?? null;
}

export function getSelectedUkVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_ukURI, _ukVoices()) ?? _ukVoices()[0] ?? null;
}

window.speakFakeYou = (text: string, btn: HTMLElement | null): boolean => {
  const enVoices = _enVoices();
  if (!enVoices.length) return false;
  const clean = text.replace(/<[^>]+>/g, '').replace(/\s*\([^)]*\)/g, '').trim();
  if (!clean || /[Ѐ-ӿ]/.test(clean)) return false;
  synth?.cancel();
  const u = new SpeechSynthesisUtterance(clean);
  const voice = _findByURI(_enURI, enVoices) ?? enVoices[0];
  u.voice = voice; u.lang = voice.lang; u.rate = 0.88; u.pitch = 1;
  if (btn) { btn.classList.add('on'); u.onend = u.onerror = () => btn.classList.remove('on'); }
  synth?.speak(u);
  return true;
};

function _sortVoices(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice[] {
  return voices.slice().sort((a, b) => {
    const rank = (n: string) => n.toLowerCase().includes('google') ? 0 : n.toLowerCase().includes('microsoft') ? 1 : 2;
    return rank(a.name) - rank(b.name) || a.name.localeCompare(b.name);
  });
}

function _makeCard(v: SpeechSynthesisVoice, activeURI: string, onSelect: (uri: string) => void): HTMLButtonElement {
  const info = _getLabel(v);
  const btn = document.createElement('button');
  btn.className = 'voice-card' + (v.voiceURI === activeURI ? ' voice-card-active' : '');
  const top = document.createElement('div');
  top.style.cssText = 'display:flex;align-items:center;gap:6px;margin-bottom:3px;';
  (['gender', 'accent', 'label'] as const).forEach((k, i) => {
    const s = document.createElement('span');
    if (i < 2) { s.textContent = info[k]; s.style.fontSize = i === 1 ? '.85rem' : '1rem'; }
    else { s.textContent = info.label; s.style.cssText = 'font-size:.82rem;font-weight:600;color:var(--text);'; }
    top.appendChild(s);
  });
  const sub = document.createElement('div');
  sub.style.cssText = 'font-size:.65rem;color:var(--text3);';
  sub.textContent = v.lang + (v.localService ? ' · офлайн' : ' · онлайн');
  btn.append(top, sub);
  btn.addEventListener('click', () => onSelect(v.voiceURI));
  return btn;
}

function _renderVoices(): void {
  const container = document.getElementById('fy-voices-list');
  if (!container) return;
  container.innerHTML = '';
  const enVoices = _sortVoices(_enVoices()), ukVoices = _sortVoices(_ukVoices());
  if (!enVoices.length && !ukVoices.length) {
    container.innerHTML = '<span style="font-size:.78rem;color:var(--text3);">Голоси не знайдено. Спробуйте оновити сторінку.</span>'; return;
  }
  const addSection = (title: string, voices: SpeechSynthesisVoice[], activeURI: string, storageKey: string, testText: string): void => {
    if (!voices.length) return;
    const hdr = document.createElement('div');
    hdr.style.cssText = 'font-size:.7rem;font-weight:700;color:var(--text3);letter-spacing:.05em;text-transform:uppercase;margin:10px 0 6px;width:100%;';
    hdr.textContent = title; container.appendChild(hdr);
    const grid = document.createElement('div');
    grid.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:6px;width:100%;';
    voices.forEach(v => grid.appendChild(_makeCard(v, activeURI, uri => {
      if (storageKey === 'ew_ws_voice') _enURI = uri; else _ukURI = uri;
      localStorage.setItem(storageKey, uri); _renderVoices();
      synth?.cancel(); const u = new SpeechSynthesisUtterance(testText);
      u.voice = v; u.lang = v.lang; u.rate = 0.88; synth?.speak(u);
    })));
    container.appendChild(grid);
  };
  addSection('🇬🇧 Англійські голоси (EN→UA картки)', enVoices, _enURI, 'ew_ws_voice', 'Hello there, general Kenobi');
  if (ukVoices.length) {
    addSection('🇺🇦 Українські голоси (UA→EN картки)', ukVoices, _ukURI, 'ew_ws_uk_voice', 'Привіт, як справи');
  } else {
    const noUk = document.createElement('div');
    noUk.style.cssText = 'margin-top:12px;padding:12px 14px;border:1.5px dashed rgba(255,255,255,.12);border-radius:12px;font-size:.78rem;color:var(--text2);line-height:1.6;';
    noUk.innerHTML = '<b style="color:var(--text)">🇺🇦 Українські голоси не знайдено</b><br>Для озвучення UA→EN карток потрібно встановити Ukrainian TTS.<br><b>Windows:</b> Налаштування → Час і мова → Мовлення → "Polina" або "Ostap"';
    container.appendChild(noUk);
  }
  if (!_enURI && enVoices.length) { _enURI = (enVoices.find(v => v.name.toLowerCase().includes('google')) ?? enVoices[0]).voiceURI; localStorage.setItem('ew_ws_voice', _enURI); }
  if (!_ukURI && ukVoices.length) { _ukURI = ukVoices[0].voiceURI; localStorage.setItem('ew_ws_uk_voice', _ukURI); }
}
window._renderVoices = _renderVoices;

let _loaded = false;
function _tryLoad(): void {
  if (_loaded) return;
  const v = window.speechSynthesis?.getVoices() ?? [];
  if (v.length) { _loaded = true; _renderVoices(); }
}
function _forceReload(): void {
  _loaded = false;
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const v = window.speechSynthesis.getVoices();
  if (v.length) { _loaded = true; _renderVoices(); }
  else {
    const handler = (): void => { window.speechSynthesis.removeEventListener('voiceschanged', handler); _loaded = false; _tryLoad(); };
    window.speechSynthesis.addEventListener('voiceschanged', handler);
  }
}

if (window.speechSynthesis) {
  _tryLoad();
  window.speechSynthesis.addEventListener('voiceschanged', () => { _loaded = false; _tryLoad(); });
}

document.getElementById('settings-overlay')?.addEventListener('click', _renderVoices);
document.getElementById('voices-reload-btn')?.addEventListener('click', () => {
  const all = _allVoices();
  console.group(`[Voice debug] Всі доступні голоси (${all.length})`);
  all.forEach(v => console.log(`${v.lang} | ${v.name} | local:${v.localService}`));
  console.groupEnd();
  const dbg = document.getElementById('fy-voices-list');
  if (dbg && !_ukVoices().length) {
    const msg = document.createElement('div');
    msg.className = 'voice-debug-msg'; msg.style.cssText = 'font-size:.72rem;color:var(--text3);margin-top:8px;padding:8px;background:rgba(255,255,255,.05);border-radius:8px;word-break:break-all;';
    const ukFound = all.filter(v => (v.lang ?? '').toLowerCase().includes('uk') || (v.name ?? '').toLowerCase().includes('ukra'));
    msg.textContent = `Знайдено ${all.length} голосів. UA голоси: ${ukFound.map(v => `${v.name} (${v.lang})`).join(', ') || 'не знайдено'}`;
    dbg.querySelector('.voice-debug-msg')?.remove(); dbg.appendChild(msg);
  }
  _forceReload();
});
