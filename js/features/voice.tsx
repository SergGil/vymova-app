// Vymova — js/features/voice.tsx
// Web Speech API voice picker: EN + UA
import { useEffect, type ReactElement } from 'react';
import { synth } from '../core/srs.ts';
import { t } from './i18n.ts';
import { flagUrl } from '../core/flags.ts';

let _enURI = localStorage.getItem('ew_ws_voice') ?? '';
let _ukURI = localStorage.getItem('ew_ws_uk_voice') ?? '';
let _esURI = localStorage.getItem('ew_ws_es_voice') ?? '';
let _frURI = localStorage.getItem('ew_ws_fr_voice') ?? '';
let _itURI = localStorage.getItem('ew_ws_it_voice') ?? '';
let _ptURI = localStorage.getItem('ew_ws_pt_voice') ?? '';
let _deURI = localStorage.getItem('ew_ws_de_voice') ?? '';
let _heURI = localStorage.getItem('ew_ws_he_voice') ?? '';
let _arURI = localStorage.getItem('ew_ws_ar_voice') ?? '';
let _plURI = localStorage.getItem('ew_ws_pl_voice') ?? '';
let _zhURI = localStorage.getItem('ew_ws_zh_voice') ?? '';
let _elURI = localStorage.getItem('ew_ws_el_voice') ?? '';
let _jaURI = localStorage.getItem('ew_ws_ja_voice') ?? '';
let _trURI = localStorage.getItem('ew_ws_tr_voice') ?? '';
let _nlURI = localStorage.getItem('ew_ws_nl_voice') ?? '';

type VoiceMapEntry = { match: string; label: string; gender: string; accent: string };

const VOICE_MAP: VoiceMapEntry[] = [
  { match: 'Google US English', label: 'Google Samantha', gender: '👩', accent: 'US' },
  { match: 'Google UK English Female', label: 'Google Emma', gender: '👩', accent: 'GB' },
  { match: 'Google UK English Male', label: 'Google James', gender: '👨', accent: 'GB' },
  { match: 'Google Australian English', label: 'Google Olivia', gender: '👩', accent: 'AU' },
  { match: 'Microsoft David', label: 'Microsoft David', gender: '👨', accent: 'US' },
  { match: 'Microsoft Mark', label: 'Microsoft Mark', gender: '👨', accent: 'US' },
  { match: 'Microsoft Zira', label: 'Microsoft Zira', gender: '👩', accent: 'US' },
  { match: 'Microsoft Jenny', label: 'Microsoft Jenny', gender: '👩', accent: 'US' },
  { match: 'Microsoft Guy', label: 'Microsoft Guy', gender: '👨', accent: 'US' },
  { match: 'Microsoft Aria', label: 'Microsoft Aria', gender: '👩', accent: 'US' },
  { match: 'Microsoft Davis', label: 'Microsoft Davis', gender: '👨', accent: 'US' },
  { match: 'Microsoft Ana', label: 'Microsoft Ana', gender: '👩', accent: 'US' },
  { match: 'Microsoft Eric', label: 'Microsoft Eric', gender: '👨', accent: 'US' },
  { match: 'Microsoft Ryan', label: 'Microsoft Ryan', gender: '👨', accent: 'GB' },
  { match: 'Microsoft Sonia', label: 'Microsoft Sonia', gender: '👩', accent: 'GB' },
  { match: 'Microsoft Libby', label: 'Microsoft Libby', gender: '👩', accent: 'GB' },
  { match: 'Microsoft Maisie', label: 'Microsoft Maisie', gender: '👩', accent: 'GB' },
  { match: 'Microsoft Natasha', label: 'Microsoft Natasha', gender: '👩', accent: 'AU' },
  { match: 'Microsoft William', label: 'Microsoft William', gender: '👨', accent: 'AU' },
  { match: 'Alex', label: 'Apple Alex', gender: '👨', accent: 'US' },
  { match: 'Samantha', label: 'Apple Samantha', gender: '👩', accent: 'US' },
  { match: 'Victoria', label: 'Apple Victoria', gender: '👩', accent: 'US' },
  { match: 'Daniel', label: 'Apple Daniel', gender: '👨', accent: 'GB' },
  { match: 'Kate', label: 'Apple Kate', gender: '👩', accent: 'GB' },
  { match: 'Karen', label: 'Apple Karen', gender: '👩', accent: 'AU' },
  { match: 'Lee', label: 'Apple Lee', gender: '👨', accent: 'AU' },
  { match: 'Moira', label: 'Apple Moira', gender: '👩', accent: 'IE' },
  { match: 'Google українська', label: 'Google Українська', gender: '👩', accent: 'UA' },
  { match: 'Google Ukrainian', label: 'Google Ukrainian', gender: '👩', accent: 'UA' },
  { match: 'Microsoft Ostap', label: 'Microsoft Остап', gender: '👨', accent: 'UA' },
  { match: 'Microsoft Polina', label: 'Microsoft Поліна', gender: '👩', accent: 'UA' },
  { match: 'Ukrainian', label: 'Українська', gender: '👩', accent: 'UA' },
  { match: 'Google español', label: 'Google Español', gender: '👩', accent: 'ES' },
  { match: 'Google Spanish', label: 'Google Spanish', gender: '👩', accent: 'ES' },
  { match: 'Microsoft Helena', label: 'Microsoft Helena', gender: '👩', accent: 'ES' },
  { match: 'Microsoft Pablo', label: 'Microsoft Pablo', gender: '👨', accent: 'ES' },
  { match: 'Microsoft Sabina', label: 'Microsoft Sabina', gender: '👩', accent: 'MX' },
  { match: 'Microsoft Dalia', label: 'Microsoft Dalia', gender: '👩', accent: 'MX' },
  { match: 'Microsoft Raul', label: 'Microsoft Raul', gender: '👨', accent: 'MX' },
  { match: 'Microsoft Jorge', label: 'Microsoft Jorge', gender: '👨', accent: 'MX' },
  { match: 'Microsoft Alvaro', label: 'Microsoft Álvaro', gender: '👨', accent: 'ES' },
  { match: 'Microsoft Elvira', label: 'Microsoft Elvira', gender: '👩', accent: 'ES' },
  { match: 'Monica', label: 'Apple Mónica', gender: '👩', accent: 'ES' },
  { match: 'Paulina', label: 'Apple Paulina', gender: '👩', accent: 'MX' },
  { match: 'Diego', label: 'Apple Diego', gender: '👨', accent: 'AR' },
  { match: 'Juan', label: 'Apple Juan', gender: '👨', accent: 'MX' },
  { match: 'Marisol', label: 'Apple Marisol', gender: '👩', accent: 'ES' },
  { match: 'Jorge', label: 'Apple Jorge', gender: '👨', accent: 'ES' },
  { match: 'Spanish', label: 'Español', gender: '👩', accent: 'ES' },
  { match: 'español', label: 'Español', gender: '👩', accent: 'ES' },
  { match: 'Google français', label: 'Google Français', gender: '👩', accent: 'FR' },
  { match: 'Google French', label: 'Google French', gender: '👩', accent: 'FR' },
  { match: 'Microsoft Henri', label: 'Microsoft Henri', gender: '👨', accent: 'FR' },
  { match: 'Microsoft Denise', label: 'Microsoft Denise', gender: '👩', accent: 'FR' },
  { match: 'Microsoft Vivienne', label: 'Microsoft Vivienne', gender: '👩', accent: 'FR' },
  { match: 'Microsoft Antoine', label: 'Microsoft Antoine', gender: '👨', accent: 'FR' },
  { match: 'Microsoft Sylvie', label: 'Microsoft Sylvie', gender: '👩', accent: 'CA' },
  { match: 'Microsoft Jean', label: 'Microsoft Jean', gender: '👨', accent: 'CA' },
  { match: 'Thomas', label: 'Apple Thomas', gender: '👨', accent: 'FR' },
  { match: 'Amelie', label: 'Apple Amélie', gender: '👩', accent: 'CA' },
  { match: 'French', label: 'Français', gender: '👩', accent: 'FR' },
  { match: 'français', label: 'Français', gender: '👩', accent: 'FR' },
  { match: 'Google italiano', label: 'Google Italiano', gender: '👩', accent: 'IT' },
  { match: 'Google Italian', label: 'Google Italian', gender: '👩', accent: 'IT' },
  { match: 'Microsoft Diego', label: 'Microsoft Diego', gender: '👨', accent: 'IT' },
  { match: 'Microsoft Elsa', label: 'Microsoft Elsa', gender: '👩', accent: 'IT' },
  { match: 'Microsoft Isabella', label: 'Microsoft Isabella', gender: '👩', accent: 'IT' },
  { match: 'Microsoft Cosimo', label: 'Microsoft Cosimo', gender: '👨', accent: 'IT' },
  { match: 'Alice', label: 'Apple Alice', gender: '👩', accent: 'IT' },
  { match: 'Italian', label: 'Italiano', gender: '👩', accent: 'IT' },
  { match: 'italiano', label: 'Italiano', gender: '👩', accent: 'IT' },
  { match: 'Google português', label: 'Google Português', gender: '👩', accent: 'BR' },
  { match: 'Google Portuguese', label: 'Google Portuguese', gender: '👩', accent: 'BR' },
  { match: 'Microsoft Francisca', label: 'Microsoft Francisca', gender: '👩', accent: 'PT' },
  { match: 'Microsoft Raquel', label: 'Microsoft Raquel', gender: '👩', accent: 'PT' },
  { match: 'Microsoft Duarte', label: 'Microsoft Duarte', gender: '👨', accent: 'PT' },
  { match: 'Microsoft Fabio', label: 'Microsoft Fábio', gender: '👨', accent: 'BR' },
  { match: 'Microsoft Francisca', label: 'Microsoft Francisca', gender: '👩', accent: 'BR' },
  { match: 'Microsoft Antonio', label: 'Microsoft Antônio', gender: '👨', accent: 'BR' },
  { match: 'Luciana', label: 'Apple Luciana', gender: '👩', accent: 'BR' },
  { match: 'Joana', label: 'Apple Joana', gender: '👩', accent: 'PT' },
  { match: 'Portuguese', label: 'Português', gender: '👩', accent: 'PT' },
  { match: 'português', label: 'Português', gender: '👩', accent: 'PT' },
  { match: 'Google Deutsch', label: 'Google Deutsch', gender: '👩', accent: 'DE' },
  { match: 'Google German', label: 'Google German', gender: '👩', accent: 'DE' },
  { match: 'Microsoft Katja', label: 'Microsoft Katja', gender: '👩', accent: 'DE' },
  { match: 'Microsoft Conrad', label: 'Microsoft Conrad', gender: '👨', accent: 'DE' },
  { match: 'Microsoft Amala', label: 'Microsoft Amala', gender: '👩', accent: 'DE' },
  { match: 'Microsoft Killian', label: 'Microsoft Killian', gender: '👨', accent: 'DE' },
  { match: 'Anna', label: 'Apple Anna', gender: '👩', accent: 'DE' },
  { match: 'German', label: 'Deutsch', gender: '👩', accent: 'DE' },
  { match: 'Deutsch', label: 'Deutsch', gender: '👩', accent: 'DE' },
  { match: 'Google עברית', label: 'Google עברית', gender: '👩', accent: 'IL' },
  { match: 'Google Hebrew', label: 'Google Hebrew', gender: '👩', accent: 'IL' },
  { match: 'Microsoft Avri', label: 'Microsoft Avri', gender: '👨', accent: 'IL' },
  { match: 'Microsoft Hila', label: 'Microsoft Hila', gender: '👩', accent: 'IL' },
  { match: 'Carmit', label: 'Apple Carmit', gender: '👩', accent: 'IL' },
  { match: 'Hebrew', label: 'עברית', gender: '👩', accent: 'IL' },
  { match: 'Google العربية', label: 'Google العربية', gender: '👩', accent: 'SA' },
  { match: 'Google Arabic', label: 'Google Arabic', gender: '👩', accent: 'SA' },
  { match: 'Microsoft Hamed', label: 'Microsoft Hamed', gender: '👨', accent: 'SA' },
  { match: 'Microsoft Salma', label: 'Microsoft Salma', gender: '👩', accent: 'SA' },
  { match: 'Maged', label: 'Apple Maged', gender: '👨', accent: 'SA' },
  { match: 'Arabic', label: 'العربية', gender: '👩', accent: 'SA' },
  { match: 'Google polski', label: 'Google Polski', gender: '👩', accent: 'PL' },
  { match: 'Google Polish', label: 'Google Polish', gender: '👩', accent: 'PL' },
  { match: 'Microsoft Marek', label: 'Microsoft Marek', gender: '👨', accent: 'PL' },
  { match: 'Microsoft Zofia', label: 'Microsoft Zofia', gender: '👩', accent: 'PL' },
  { match: 'Microsoft Agnieszka', label: 'Microsoft Agnieszka', gender: '👩', accent: 'PL' },
  { match: 'Ewa', label: 'Apple Ewa', gender: '👩', accent: 'PL' },
  { match: 'Zosia', label: 'Apple Zosia', gender: '👩', accent: 'PL' },
  { match: 'Polish', label: 'Polski', gender: '👩', accent: 'PL' },
  { match: 'polski', label: 'Polski', gender: '👩', accent: 'PL' },
  { match: 'Google 中文', label: 'Google 中文', gender: '👩', accent: 'CN' },
  { match: 'Google Mandarin', label: 'Google Mandarin', gender: '👩', accent: 'CN' },
  { match: 'Google Chinese', label: 'Google Chinese', gender: '👩', accent: 'CN' },
  { match: 'Microsoft Yunxi', label: 'Microsoft Yunxi', gender: '👨', accent: 'CN' },
  { match: 'Microsoft Xiaoxiao', label: 'Microsoft Xiaoxiao', gender: '👩', accent: 'CN' },
  { match: 'Microsoft Yunjian', label: 'Microsoft Yunjian', gender: '👨', accent: 'CN' },
  { match: 'Tingting', label: 'Apple Tingting', gender: '👩', accent: 'CN' },
  { match: 'Chinese', label: '中文', gender: '👩', accent: 'CN' },
  { match: 'Mandarin', label: '中文', gender: '👩', accent: 'CN' },
  { match: 'Google ελληνικά', label: 'Google Ελληνικά', gender: '👩', accent: 'GR' },
  { match: 'Google Greek', label: 'Google Greek', gender: '👩', accent: 'GR' },
  { match: 'Microsoft Nestoras', label: 'Microsoft Nestoras', gender: '👨', accent: 'GR' },
  { match: 'Microsoft Athina', label: 'Microsoft Athina', gender: '👩', accent: 'GR' },
  { match: 'Melina', label: 'Apple Melina', gender: '👩', accent: 'GR' },
  { match: 'Greek', label: 'Ελληνικά', gender: '👩', accent: 'GR' },
  { match: 'Google 日本語', label: 'Google 日本語', gender: '👩', accent: 'JP' },
  { match: 'Google Japanese', label: 'Google Japanese', gender: '👩', accent: 'JP' },
  { match: 'Microsoft Keita', label: 'Microsoft Keita', gender: '👨', accent: 'JP' },
  { match: 'Microsoft Nanami', label: 'Microsoft Nanami', gender: '👩', accent: 'JP' },
  { match: 'Kyoko', label: 'Apple Kyoko', gender: '👩', accent: 'JP' },
  { match: 'Japanese', label: '日本語', gender: '👩', accent: 'JP' },
  { match: 'Google Türkçe', label: 'Google Türkçe', gender: '👩', accent: 'TR' },
  { match: 'Google Turkish', label: 'Google Turkish', gender: '👩', accent: 'TR' },
  { match: 'Microsoft Ahmet', label: 'Microsoft Ahmet', gender: '👨', accent: 'TR' },
  { match: 'Microsoft Emel', label: 'Microsoft Emel', gender: '👩', accent: 'TR' },
  { match: 'Yelda', label: 'Apple Yelda', gender: '👩', accent: 'TR' },
  { match: 'Turkish', label: 'Türkçe', gender: '👩', accent: 'TR' },
  { match: 'Google Nederlands', label: 'Google Nederlands', gender: '👩', accent: 'NL' },
  { match: 'Google Dutch', label: 'Google Dutch', gender: '👩', accent: 'NL' },
  { match: 'Microsoft Maarten', label: 'Microsoft Maarten', gender: '👨', accent: 'NL' },
  { match: 'Microsoft Fenna', label: 'Microsoft Fenna', gender: '👩', accent: 'NL' },
  { match: 'Microsoft Colette', label: 'Microsoft Colette', gender: '👩', accent: 'NL' },
  { match: 'Xander', label: 'Apple Xander', gender: '👨', accent: 'NL' },
  { match: 'Claire', label: 'Apple Claire', gender: '👩', accent: 'NL' },
  { match: 'Dutch', label: 'Nederlands', gender: '👩', accent: 'NL' },
];

function _getLabel(voice: SpeechSynthesisVoice): VoiceMapEntry {
  const name = voice.name;
  for (const entry of VOICE_MAP) {
    if (name.toLowerCase().includes(entry.match.toLowerCase())) return entry;
  }
  const femaleWords = [
    'female',
    'woman',
    'girl',
    'zira',
    'jenny',
    'aria',
    'ana',
    'sonia',
    'libby',
    'maisie',
    'natasha',
    'samantha',
    'victoria',
    'kate',
    'karen',
    'moira',
    'emma',
    'joanna',
    'amy',
    'polina',
    'поліна',
  ];
  const isFemale = femaleWords.some((w) => name.toLowerCase().includes(w));
  return { match: '', label: name, gender: isFemale ? '👩' : '👨', accent: _langFlag(voice.lang) };
}

function _langFlag(lang: string): string {
  if (!lang) return '🌐';
  const l = lang.toLowerCase();
  if (l.startsWith('uk')) return 'UA';
  if (l === 'en-gb' || l === 'en-ie') return 'GB';
  if (l === 'en-au') return 'AU';
  if (l === 'en-in') return 'IN';
  if (l.startsWith('en-us') || l.startsWith('en-ca')) return 'US';
  if (l.startsWith('en')) return '🌍';
  if (l === 'es-mx') return 'MX';
  if (l === 'es-ar') return 'AR';
  if (l === 'es-us') return 'US';
  if (l.startsWith('es')) return 'ES';
  if (l === 'fr-ca') return 'CA';
  if (l.startsWith('fr')) return 'FR';
  if (l.startsWith('it')) return 'IT';
  if (l === 'pt-br') return 'BR';
  if (l.startsWith('pt')) return 'PT';
  if (l.startsWith('de')) return 'DE';
  if (l.startsWith('he') || l.startsWith('iw')) return 'IL';
  if (l.startsWith('ar')) return 'SA';
  if (l.startsWith('pl')) return 'PL';
  if (l.startsWith('zh') || l.startsWith('cmn')) return 'CN';
  if (l.startsWith('el')) return 'GR';
  if (l.startsWith('ja')) return 'JP';
  if (l.startsWith('tr')) return 'TR';
  if (l.startsWith('nl')) return 'NL';
  return '🌐';
}

function _allVoices(): SpeechSynthesisVoice[] {
  return window.speechSynthesis?.getVoices() ?? [];
}
function _enVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => v.lang?.toLowerCase().startsWith('en'));
}
function _ukVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return (
      l.startsWith('uk') ||
      l === 'uk-ua' ||
      l === 'uk_ua' ||
      n.includes('ukrainian') ||
      n.includes('укра')
    );
  });
}
function _esVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return (
      l.startsWith('es') || n.includes('spanish') || n.includes('español') || n.includes('espanol')
    );
  });
}
function _frVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return (
      l.startsWith('fr') || n.includes('french') || n.includes('français') || n.includes('francais')
    );
  });
}
function _itVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('it') || n.includes('italian') || n.includes('italiano');
  });
}
function _ptVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return (
      l.startsWith('pt') ||
      n.includes('portuguese') ||
      n.includes('português') ||
      n.includes('portugues')
    );
  });
}
function _deVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('de') || n.includes('german') || n.includes('deutsch');
  });
}
function _heVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('he') || l.startsWith('iw') || n.includes('hebrew') || n.includes('עברית');
  });
}
function _arVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('ar') || n.includes('arabic') || n.includes('العربية');
  });
}
function _plVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('pl') || n.includes('polish') || n.includes('polski');
  });
}
function _zhVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return (
      l.startsWith('zh') ||
      l.startsWith('cmn') ||
      n.includes('chinese') ||
      n.includes('mandarin') ||
      n.includes('中文')
    );
  });
}
function _elVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('el') || n.includes('greek') || n.includes('ελληνικά');
  });
}
function _jaVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('ja') || n.includes('japanese') || n.includes('日本語');
  });
}
function _trVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('tr') || n.includes('turkish') || n.includes('türkçe');
  });
}
function _nlVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('nl') || n.includes('dutch') || n.includes('nederlands');
  });
}
function _findByURI(uri: string, voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  return voices.find((v) => v.voiceURI === uri) ?? null;
}

export function getSelectedUkVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_ukURI, _ukVoices()) ?? _ukVoices()[0] ?? null;
}
export function getSelectedEsVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_esURI, _esVoices()) ?? _esVoices()[0] ?? null;
}
export function getSelectedFrVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_frURI, _frVoices()) ?? _frVoices()[0] ?? null;
}
export function getSelectedItVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_itURI, _itVoices()) ?? _itVoices()[0] ?? null;
}
export function getSelectedPtVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_ptURI, _ptVoices()) ?? _ptVoices()[0] ?? null;
}
export function getSelectedDeVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_deURI, _deVoices()) ?? _deVoices()[0] ?? null;
}
export function getSelectedHeVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_heURI, _heVoices()) ?? _heVoices()[0] ?? null;
}
export function getSelectedArVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_arURI, _arVoices()) ?? _arVoices()[0] ?? null;
}
export function getSelectedPlVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_plURI, _plVoices()) ?? _plVoices()[0] ?? null;
}
export function getSelectedZhVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_zhURI, _zhVoices()) ?? _zhVoices()[0] ?? null;
}
export function getSelectedElVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_elURI, _elVoices()) ?? _elVoices()[0] ?? null;
}
export function getSelectedJaVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_jaURI, _jaVoices()) ?? _jaVoices()[0] ?? null;
}
export function getSelectedTrVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_trURI, _trVoices()) ?? _trVoices()[0] ?? null;
}
export function getSelectedNlVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_nlURI, _nlVoices()) ?? _nlVoices()[0] ?? null;
}

// Speaks `text` with a voice tagged for `accent` (matched via VOICE_MAP first,
// falling back to a lang-prefix match, then any voice for the language),
// bypassing the user's globally selected voice — used for one-off accent
// toggle buttons (GB/US, ES/MX, PT/BR, ...) next to the transcription.
function _speakAccent(
  voices: SpeechSynthesisVoice[],
  text: string,
  accent: string,
  fallbackLang: string,
  btn: HTMLElement | null,
): void {
  const clean = text
    .replace(/<[^>]+>/g, '')
    .replace(/\s*\([^)]*\)/g, '')
    .trim();
  if (!clean || !synth) return;
  const voice =
    voices.find((v) => _getLabel(v).accent === accent) ??
    voices.find((v) => v.lang?.toLowerCase().startsWith(fallbackLang.toLowerCase())) ??
    voices[0] ??
    null;
  synth.cancel();
  const u = new SpeechSynthesisUtterance(clean);
  if (voice) {
    u.voice = voice;
    u.lang = voice.lang;
  } else {
    u.lang = fallbackLang;
  }
  u.rate = 0.88;
  u.pitch = 1;
  if (btn) {
    btn.classList.add('on');
    u.onend = u.onerror = () => btn.classList.remove('on');
  }
  synth.speak(u);
}

// Speaks English text with a specific accent (GB/US), bypassing the user's globally selected voice.
export function speakEnAccent(text: string, accent: 'GB' | 'US', btn: HTMLElement | null): void {
  _speakAccent(_enVoices(), text, accent, accent === 'GB' ? 'en-GB' : 'en-US', btn);
}

// Speaks Spanish text with a specific accent (ES/MX), bypassing the user's globally selected voice.
export function speakEsAccent(text: string, accent: 'ES' | 'MX', btn: HTMLElement | null): void {
  _speakAccent(_esVoices(), text, accent, accent === 'ES' ? 'es-ES' : 'es-MX', btn);
}

// Speaks Portuguese text with a specific accent (PT/BR), bypassing the user's globally selected voice.
export function speakPtAccent(text: string, accent: 'PT' | 'BR', btn: HTMLElement | null): void {
  _speakAccent(_ptVoices(), text, accent, accent === 'PT' ? 'pt-PT' : 'pt-BR', btn);
}

// Whether a voice actually tagged for `accent` is installed — unlike
// _speakAccent (which always falls back to *some* voice for the language so
// playback never silently fails), this only matches the specific accent, so
// callers can hide the toggle button entirely when that accent isn't available.
function _hasAccent(voices: SpeechSynthesisVoice[], accent: string, langPrefix: string): boolean {
  return voices.some(
    (v) =>
      _getLabel(v).accent === accent || v.lang?.toLowerCase().startsWith(langPrefix.toLowerCase()),
  );
}

export function hasEsAccent(accent: 'ES' | 'MX'): boolean {
  return _hasAccent(_esVoices(), accent, accent === 'ES' ? 'es-ES' : 'es-MX');
}

export function hasPtAccent(accent: 'PT' | 'BR'): boolean {
  return _hasAccent(_ptVoices(), accent, accent === 'PT' ? 'pt-PT' : 'pt-BR');
}

export const speakFakeYou = (text: string, btn: HTMLElement | null): boolean => {
  const enVoices = _enVoices();
  if (!enVoices.length) return false;
  const clean = text
    .replace(/<[^>]+>/g, '')
    .replace(/\s*\([^)]*\)/g, '')
    .trim();
  if (!clean || /[Ѐ-ӿ]/.test(clean)) return false;
  synth?.cancel();
  const u = new SpeechSynthesisUtterance(clean);
  const voice = _findByURI(_enURI, enVoices) ?? enVoices[0];
  u.voice = voice;
  u.lang = voice.lang;
  u.rate = 0.88;
  u.pitch = 1;
  if (btn) {
    btn.classList.add('on');
    u.onend = u.onerror = () => btn.classList.remove('on');
  }
  synth?.speak(u);
  return true;
};

function _sortVoices(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice[] {
  return voices.slice().sort((a, b) => {
    const rank = (n: string) =>
      n.toLowerCase().includes('google') ? 0 : n.toLowerCase().includes('microsoft') ? 1 : 2;
    return rank(a.name) - rank(b.name) || a.name.localeCompare(b.name);
  });
}

function _makeCard(
  v: SpeechSynthesisVoice,
  activeURI: string,
  onSelect: (uri: string) => void,
): HTMLButtonElement {
  const info = _getLabel(v);
  const btn = document.createElement('button');
  btn.className = 'voice-card' + (v.voiceURI === activeURI ? ' voice-card-active' : '');
  const top = document.createElement('div');
  top.style.cssText = 'display:flex;align-items:center;gap:6px;margin-bottom:3px;';
  (['gender', 'accent', 'label'] as const).forEach((k, i) => {
    if (k === 'accent') {
      const url = flagUrl(info.accent);
      if (url) {
        const img = document.createElement('img');
        img.src = url;
        img.alt = info.accent;
        img.width = 16;
        img.height = 16;
        img.style.cssText =
          'border-radius:50%;box-shadow:0 0 0 1px var(--border);vertical-align:middle;';
        top.appendChild(img);
      } else {
        top.appendChild(document.createTextNode(info.accent));
      }
      return;
    }
    const s = document.createElement('span');
    if (i === 0) {
      s.textContent = info.gender;
      s.style.fontSize = '1rem';
    } else {
      s.textContent = info.label;
      s.style.cssText = 'font-size:.82rem;font-weight:600;color:var(--text);';
    }
    top.appendChild(s);
  });
  const sub = document.createElement('div');
  sub.style.cssText = 'font-size:.65rem;color:var(--text3);';
  sub.textContent =
    v.lang + ' · ' + (v.localService ? t('settings.voiceOffline') : t('settings.voiceOnline'));
  btn.append(top, sub);
  btn.addEventListener('click', () => onSelect(v.voiceURI));
  return btn;
}

// Which per-language <details> sections are expanded, keyed by a stable id
// (not the title text, which changes once a voice is picked) — re-rendering
// rebuilds every <details> from scratch, so without this every dropdown
// would snap shut each time a voice card is clicked.
const _openSectionIds = new Set<string>();

function _sectionFlagImg(flagCode: string): HTMLImageElement | null {
  const url = flagUrl(flagCode);
  if (!url) return null;
  const img = document.createElement('img');
  img.src = url;
  img.alt = '';
  img.width = 14;
  img.height = 14;
  img.style.cssText =
    'border-radius:50%;vertical-align:middle;margin-right:6px;box-shadow:0 0 0 1px var(--border);';
  return img;
}

export function _renderVoices(): void {
  const container = document.getElementById('fy-voices-list');
  if (!container) return;
  container.innerHTML = '';
  const enVoices = _sortVoices(_enVoices()),
    ukVoices = _sortVoices(_ukVoices()),
    esVoices = _sortVoices(_esVoices()),
    frVoices = _sortVoices(_frVoices()),
    itVoices = _sortVoices(_itVoices()),
    ptVoices = _sortVoices(_ptVoices()),
    deVoices = _sortVoices(_deVoices()),
    heVoices = _sortVoices(_heVoices()),
    arVoices = _sortVoices(_arVoices()),
    plVoices = _sortVoices(_plVoices()),
    zhVoices = _sortVoices(_zhVoices()),
    elVoices = _sortVoices(_elVoices()),
    jaVoices = _sortVoices(_jaVoices()),
    trVoices = _sortVoices(_trVoices()),
    nlVoices = _sortVoices(_nlVoices());
  if (
    !enVoices.length &&
    !ukVoices.length &&
    !esVoices.length &&
    !frVoices.length &&
    !itVoices.length &&
    !ptVoices.length &&
    !deVoices.length &&
    !heVoices.length &&
    !arVoices.length &&
    !plVoices.length &&
    !zhVoices.length &&
    !elVoices.length &&
    !jaVoices.length &&
    !trVoices.length &&
    !nlVoices.length
  ) {
    container.innerHTML =
      '<span style="font-size:.78rem;color:var(--text3);">' +
      t('settings.voicesNotFound') +
      '</span>';
    return;
  }
  const addSection = (
    id: string,
    flagCode: string,
    title: string,
    voices: SpeechSynthesisVoice[],
    activeURI: string,
    storageKey: string,
    testText: string,
  ): void => {
    if (!voices.length) return;
    const details = document.createElement('details');
    details.className = 'voice-section';
    details.style.cssText = 'width:100%;margin:6px 0;';
    details.open = _openSectionIds.has(id);
    details.addEventListener('toggle', () => {
      if (details.open) _openSectionIds.add(id);
      else _openSectionIds.delete(id);
    });
    const hdr = document.createElement('summary');
    hdr.style.cssText =
      'font-size:.7rem;font-weight:700;color:var(--text3);letter-spacing:.05em;text-transform:uppercase;padding:6px 0;cursor:pointer;';
    const flagImg = _sectionFlagImg(flagCode);
    if (flagImg) hdr.appendChild(flagImg);
    const activeLabel = voices.find((v) => v.voiceURI === activeURI);
    hdr.appendChild(
      document.createTextNode(
        title + ` (${voices.length})` + (activeLabel ? ` — ${_getLabel(activeLabel).label}` : ''),
      ),
    );
    details.appendChild(hdr);
    const grid = document.createElement('div');
    grid.style.cssText =
      'display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:6px;width:100%;margin-top:6px;';
    voices.forEach((v) =>
      grid.appendChild(
        _makeCard(v, activeURI, (uri) => {
          if (storageKey === 'ew_ws_voice') _enURI = uri;
          else if (storageKey === 'ew_ws_es_voice') _esURI = uri;
          else if (storageKey === 'ew_ws_fr_voice') _frURI = uri;
          else if (storageKey === 'ew_ws_it_voice') _itURI = uri;
          else if (storageKey === 'ew_ws_pt_voice') _ptURI = uri;
          else if (storageKey === 'ew_ws_de_voice') _deURI = uri;
          else if (storageKey === 'ew_ws_he_voice') _heURI = uri;
          else if (storageKey === 'ew_ws_ar_voice') _arURI = uri;
          else if (storageKey === 'ew_ws_pl_voice') _plURI = uri;
          else if (storageKey === 'ew_ws_zh_voice') _zhURI = uri;
          else if (storageKey === 'ew_ws_el_voice') _elURI = uri;
          else if (storageKey === 'ew_ws_ja_voice') _jaURI = uri;
          else if (storageKey === 'ew_ws_tr_voice') _trURI = uri;
          else if (storageKey === 'ew_ws_nl_voice') _nlURI = uri;
          else _ukURI = uri;
          localStorage.setItem(storageKey, uri);
          _renderVoices();
          synth?.cancel();
          const u = new SpeechSynthesisUtterance(testText);
          u.voice = v;
          u.lang = v.lang;
          u.rate = 0.88;
          synth?.speak(u);
        }),
      ),
    );
    details.appendChild(grid);
    container.appendChild(details);
  };
  const addMissing = (id: string, flagCode: string, titleKey: string, descKey: string): void => {
    const details = document.createElement('details');
    details.className = 'voice-section';
    details.style.cssText = 'width:100%;margin:6px 0;';
    details.open = _openSectionIds.has(id);
    details.addEventListener('toggle', () => {
      if (details.open) _openSectionIds.add(id);
      else _openSectionIds.delete(id);
    });
    const hdr = document.createElement('summary');
    hdr.style.cssText =
      'font-size:.7rem;font-weight:700;color:var(--text3);letter-spacing:.05em;text-transform:uppercase;padding:6px 0;cursor:pointer;';
    const flagImg = _sectionFlagImg(flagCode);
    if (flagImg) hdr.appendChild(flagImg);
    hdr.appendChild(document.createTextNode(t(titleKey)));
    const noVoice = document.createElement('div');
    noVoice.style.cssText =
      'margin-top:6px;padding:12px 14px;border:1.5px dashed rgba(255,255,255,.12);border-radius:12px;font-size:.78rem;color:var(--text2);line-height:1.6;';
    noVoice.innerHTML = t(descKey);
    details.append(hdr, noVoice);
    container.appendChild(details);
  };
  addSection(
    'en',
    'gb',
    t('settings.enVoicesTitle'),
    enVoices,
    _enURI,
    'ew_ws_voice',
    'Hello there, general Kenobi',
  );
  if (ukVoices.length)
    addSection(
      'uk',
      'ua',
      t('settings.ukVoicesTitle'),
      ukVoices,
      _ukURI,
      'ew_ws_uk_voice',
      'Привіт, як справи',
    );
  else addMissing('uk', 'ua', 'settings.noUkVoicesTitle', 'settings.noUkVoicesDesc');
  if (esVoices.length)
    addSection(
      'es',
      'es',
      t('settings.esVoicesTitle'),
      esVoices,
      _esURI,
      'ew_ws_es_voice',
      'Hola, ¿cómo estás?',
    );
  else addMissing('es', 'es', 'settings.noEsVoicesTitle', 'settings.noEsVoicesDesc');
  if (frVoices.length)
    addSection(
      'fr',
      'fr',
      t('settings.frVoicesTitle'),
      frVoices,
      _frURI,
      'ew_ws_fr_voice',
      'Bonjour, comment ça va ?',
    );
  else addMissing('fr', 'fr', 'settings.noFrVoicesTitle', 'settings.noFrVoicesDesc');
  if (itVoices.length)
    addSection(
      'it',
      'it',
      t('settings.itVoicesTitle'),
      itVoices,
      _itURI,
      'ew_ws_it_voice',
      'Ciao, come stai?',
    );
  else addMissing('it', 'it', 'settings.noItVoicesTitle', 'settings.noItVoicesDesc');
  if (ptVoices.length)
    addSection(
      'pt',
      'pt',
      t('settings.ptVoicesTitle'),
      ptVoices,
      _ptURI,
      'ew_ws_pt_voice',
      'Olá, como você está?',
    );
  else addMissing('pt', 'pt', 'settings.noPtVoicesTitle', 'settings.noPtVoicesDesc');
  if (deVoices.length)
    addSection(
      'de',
      'de',
      t('settings.deVoicesTitle'),
      deVoices,
      _deURI,
      'ew_ws_de_voice',
      'Hallo, wie geht es dir?',
    );
  else addMissing('de', 'de', 'settings.noDeVoicesTitle', 'settings.noDeVoicesDesc');
  if (heVoices.length)
    addSection(
      'he',
      'il',
      t('settings.heVoicesTitle'),
      heVoices,
      _heURI,
      'ew_ws_he_voice',
      'שלום, מה נשמע?',
    );
  else addMissing('he', 'il', 'settings.noHeVoicesTitle', 'settings.noHeVoicesDesc');
  if (arVoices.length)
    addSection(
      'ar',
      'sa',
      t('settings.arVoicesTitle'),
      arVoices,
      _arURI,
      'ew_ws_ar_voice',
      'مرحبا، كيف حالك؟',
    );
  else addMissing('ar', 'sa', 'settings.noArVoicesTitle', 'settings.noArVoicesDesc');
  if (plVoices.length)
    addSection(
      'pl',
      'pl',
      t('settings.plVoicesTitle'),
      plVoices,
      _plURI,
      'ew_ws_pl_voice',
      'Cześć, jak się masz?',
    );
  else addMissing('pl', 'pl', 'settings.noPlVoicesTitle', 'settings.noPlVoicesDesc');
  if (zhVoices.length)
    addSection(
      'zh',
      'cn',
      t('settings.zhVoicesTitle'),
      zhVoices,
      _zhURI,
      'ew_ws_zh_voice',
      '你好，你怎么样？',
    );
  else addMissing('zh', 'cn', 'settings.noZhVoicesTitle', 'settings.noZhVoicesDesc');
  if (elVoices.length)
    addSection(
      'el',
      'gr',
      t('settings.elVoicesTitle'),
      elVoices,
      _elURI,
      'ew_ws_el_voice',
      'Γεια σου, τι κάνεις;',
    );
  else addMissing('el', 'gr', 'settings.noElVoicesTitle', 'settings.noElVoicesDesc');
  if (jaVoices.length)
    addSection(
      'ja',
      'jp',
      t('settings.jaVoicesTitle'),
      jaVoices,
      _jaURI,
      'ew_ws_ja_voice',
      'こんにちは、お元気ですか？',
    );
  else addMissing('ja', 'jp', 'settings.noJaVoicesTitle', 'settings.noJaVoicesDesc');
  if (trVoices.length)
    addSection(
      'tr',
      'tr',
      t('settings.trVoicesTitle'),
      trVoices,
      _trURI,
      'ew_ws_tr_voice',
      'Merhaba, nasılsın?',
    );
  else addMissing('tr', 'tr', 'settings.noTrVoicesTitle', 'settings.noTrVoicesDesc');
  if (nlVoices.length)
    addSection(
      'nl',
      'nl',
      t('settings.nlVoicesTitle'),
      nlVoices,
      _nlURI,
      'ew_ws_nl_voice',
      'Hallo, hoe gaat het?',
    );
  else addMissing('nl', 'nl', 'settings.noNlVoicesTitle', 'settings.noNlVoicesDesc');
  if (!_enURI && enVoices.length) {
    _enURI = (enVoices.find((v) => v.name.toLowerCase().includes('google')) ?? enVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_voice', _enURI);
  }
  if (!_ukURI && ukVoices.length) {
    _ukURI = ukVoices[0].voiceURI;
    localStorage.setItem('ew_ws_uk_voice', _ukURI);
  }
  if (!_esURI && esVoices.length) {
    _esURI = (esVoices.find((v) => v.name.toLowerCase().includes('google')) ?? esVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_es_voice', _esURI);
  }
  if (!_frURI && frVoices.length) {
    _frURI = (frVoices.find((v) => v.name.toLowerCase().includes('google')) ?? frVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_fr_voice', _frURI);
  }
  if (!_itURI && itVoices.length) {
    _itURI = (itVoices.find((v) => v.name.toLowerCase().includes('google')) ?? itVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_it_voice', _itURI);
  }
  if (!_ptURI && ptVoices.length) {
    _ptURI = (ptVoices.find((v) => v.name.toLowerCase().includes('google')) ?? ptVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_pt_voice', _ptURI);
  }
  if (!_deURI && deVoices.length) {
    _deURI = (deVoices.find((v) => v.name.toLowerCase().includes('google')) ?? deVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_de_voice', _deURI);
  }
  if (!_heURI && heVoices.length) {
    _heURI = (heVoices.find((v) => v.name.toLowerCase().includes('google')) ?? heVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_he_voice', _heURI);
  }
  if (!_arURI && arVoices.length) {
    _arURI = (arVoices.find((v) => v.name.toLowerCase().includes('google')) ?? arVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_ar_voice', _arURI);
  }
  if (!_plURI && plVoices.length) {
    _plURI = (plVoices.find((v) => v.name.toLowerCase().includes('google')) ?? plVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_pl_voice', _plURI);
  }
  if (!_zhURI && zhVoices.length) {
    _zhURI = (zhVoices.find((v) => v.name.toLowerCase().includes('google')) ?? zhVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_zh_voice', _zhURI);
  }
  if (!_elURI && elVoices.length) {
    _elURI = (elVoices.find((v) => v.name.toLowerCase().includes('google')) ?? elVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_el_voice', _elURI);
  }
  if (!_jaURI && jaVoices.length) {
    _jaURI = (jaVoices.find((v) => v.name.toLowerCase().includes('google')) ?? jaVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_ja_voice', _jaURI);
  }
  if (!_trURI && trVoices.length) {
    _trURI = (trVoices.find((v) => v.name.toLowerCase().includes('google')) ?? trVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_tr_voice', _trURI);
  }
  if (!_nlURI && nlVoices.length) {
    _nlURI = (nlVoices.find((v) => v.name.toLowerCase().includes('google')) ?? nlVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_nl_voice', _nlURI);
  }
}

let _loaded = false;
function _tryLoad(): void {
  if (_loaded) return;
  const v = window.speechSynthesis?.getVoices() ?? [];
  if (v.length) {
    _loaded = true;
    _renderVoices();
  }
}
function _forceReload(): void {
  _loaded = false;
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const v = window.speechSynthesis.getVoices();
  if (v.length) {
    _loaded = true;
    _renderVoices();
  } else {
    const handler = (): void => {
      window.speechSynthesis.removeEventListener('voiceschanged', handler);
      _loaded = false;
      _tryLoad();
    };
    window.speechSynthesis.addEventListener('voiceschanged', handler);
  }
}

export function VoiceInit(): ReactElement | null {
  useEffect(() => {
    const onVoicesChanged = () => {
      _loaded = false;
      _tryLoad();
    };
    if (window.speechSynthesis) {
      _tryLoad();
      window.speechSynthesis.addEventListener('voiceschanged', onVoicesChanged);
    }

    // Re-render once when the Settings page opens (so the list reflects
    // voices loaded since last time) — NOT on every click inside it, which
    // would collapse the per-language <details> dropdowns right back up.
    const settingsOverlay = document.getElementById('settings-overlay');
    const onOverlayClassChange = () => {
      if (settingsOverlay?.classList.contains('open')) _renderVoices();
    };
    const overlayObserver = new MutationObserver(onOverlayClassChange);
    if (settingsOverlay)
      overlayObserver.observe(settingsOverlay, { attributes: true, attributeFilter: ['class'] });

    const onReloadClick = () => {
      const all = _allVoices();
      console.group(`[Voice debug] Всі доступні голоси (${all.length})`);
      all.forEach((v) => console.log(`${v.lang} | ${v.name} | local:${v.localService}`));
      console.groupEnd();
      const dbg = document.getElementById('fy-voices-list');
      if (dbg && !_ukVoices().length) {
        const msg = document.createElement('div');
        msg.className = 'voice-debug-msg';
        msg.style.cssText =
          'font-size:.72rem;color:var(--text3);margin-top:8px;padding:8px;background:rgba(255,255,255,.05);border-radius:8px;word-break:break-all;';
        const ukFound = all.filter(
          (v) =>
            (v.lang ?? '').toLowerCase().includes('uk') ||
            (v.name ?? '').toLowerCase().includes('ukra'),
        );
        msg.textContent = `${t('settings.voicesFoundLabel')} ${all.length} ${t('settings.voicesLabel')} ${ukFound.map((v) => `${v.name} (${v.lang})`).join(', ') || t('settings.notFound')}`;
        dbg.querySelector('.voice-debug-msg')?.remove();
        dbg.appendChild(msg);
      }
      _forceReload();
    };
    const reloadBtn = document.getElementById('voices-reload-btn');
    reloadBtn?.addEventListener('click', onReloadClick);

    return () => {
      if (window.speechSynthesis)
        window.speechSynthesis.removeEventListener('voiceschanged', onVoicesChanged);
      overlayObserver.disconnect();
      reloadBtn?.removeEventListener('click', onReloadClick);
    };
  }, []);

  return null;
}
