// Vymova — data/antonyms.ts
// Curated antonym (opposite-meaning) pairs, mirroring the structure of
// data/synonyms.ts. Each pair is stored in one direction only — Association
// Chain (and any other consumer) is expected to build a symmetric view at
// runtime via synonyms.ts's buildSynonymReverse/its own buildSymmetricDict,
// exactly like it already does for SYNONYMS.
//
// Coverage is intentionally limited to en/ua for now (the two languages
// Association Chain is actually used with day to day) — extend to more
// SYNONYMS_BY_LANG languages later following the same native-curation
// approach (i.e. real antonym pairs in that language, not translations of
// the English list).

import { buildSynonymReverse } from './synonyms.ts';

interface AntonymEntry {
  word: string;
  note?: string;
}

export const ANTONYMS: Record<string, AntonymEntry[]> = {
  // ── Adjectives: feelings / character ──────────────────────────────────
  happy: [{ word: 'sad' }],
  excited: [{ word: 'bored' }],
  brave: [{ word: 'cowardly' }],
  calm: [{ word: 'nervous' }],
  confident: [{ word: 'shy' }],
  kind: [{ word: 'cruel' }],
  generous: [{ word: 'stingy' }],
  patient: [{ word: 'impatient' }],
  honest: [{ word: 'dishonest' }],
  polite: [{ word: 'rude' }],
  optimistic: [{ word: 'pessimistic' }],
  humble: [{ word: 'arrogant' }],
  sociable: [{ word: 'reserved' }],
  cautious: [{ word: 'reckless' }],

  // ── Adjectives: size / physical ─────────────────────────────────────────
  big: [{ word: 'small' }],
  large: [{ word: 'tiny' }],
  tall: [{ word: 'short' }],
  wide: [{ word: 'narrow' }],
  thick: [{ word: 'thin' }],
  heavy: [{ word: 'light', note: 'про вагу' }],
  strong: [{ word: 'weak' }],
  fast: [{ word: 'slow' }],
  hot: [{ word: 'cold' }],
  wet: [{ word: 'dry' }],
  loud: [{ word: 'quiet' }],
  sharp: [{ word: 'blunt' }],
  smooth: [{ word: 'rough' }],
  soft: [{ word: 'hard' }],
  clean: [{ word: 'dirty' }],
  full: [{ word: 'empty' }],
  bright: [{ word: 'dim' }],
  light: [{ word: 'dark', note: 'про колір/освітлення' }],
  deep: [{ word: 'shallow' }],
  straight: [{ word: 'crooked' }],
  fat: [{ word: 'thin', note: 'про статуру' }],

  // ── Adjectives: quality / state ─────────────────────────────────────────
  easy: [{ word: 'difficult' }],
  simple: [{ word: 'complex' }],
  cheap: [{ word: 'expensive' }],
  rich: [{ word: 'poor' }],
  old: [{ word: 'young', note: 'про людину' }],
  new: [{ word: 'old', note: 'про предмет' }],
  modern: [{ word: 'ancient' }],
  safe: [{ word: 'dangerous' }],
  healthy: [{ word: 'sick' }],
  clever: [{ word: 'stupid' }],
  beautiful: [{ word: 'ugly' }],
  formal: [{ word: 'informal' }],
  public: [{ word: 'private' }],
  legal: [{ word: 'illegal' }],
  visible: [{ word: 'invisible' }],
  possible: [{ word: 'impossible' }],
  comfortable: [{ word: 'uncomfortable' }],
  sufficient: [{ word: 'insufficient' }],
  active: [{ word: 'passive' }],
  positive: [{ word: 'negative' }],
  direct: [{ word: 'indirect' }],
  permanent: [{ word: 'temporary' }],
  similar: [{ word: 'different' }],
  familiar: [{ word: 'unfamiliar' }],
  common: [{ word: 'rare' }],
  ordinary: [{ word: 'extraordinary' }],
  careful: [{ word: 'careless' }],
  tidy: [{ word: 'messy' }],
  mature: [{ word: 'immature' }],
  flexible: [{ word: 'rigid' }],
  transparent: [{ word: 'opaque' }],
  genuine: [{ word: 'fake' }],
  natural: [{ word: 'artificial' }],
  voluntary: [{ word: 'compulsory' }],
  urban: [{ word: 'rural' }],
  single: [{ word: 'married' }],
  early: [{ word: 'late' }],

  // ── Directions / positions ──────────────────────────────────────────────
  right: [{ word: 'left' }],
  up: [{ word: 'down' }],
  inside: [{ word: 'outside' }],
  above: [{ word: 'below' }],
  north: [{ word: 'south' }],
  east: [{ word: 'west' }],

  // ── Verbs ────────────────────────────────────────────────────────────────
  open: [{ word: 'close' }],
  begin: [{ word: 'end' }],
  start: [{ word: 'finish' }],
  arrive: [{ word: 'depart' }],
  buy: [{ word: 'sell' }],
  win: [{ word: 'lose' }],
  increase: [{ word: 'decrease' }],
  accept: [{ word: 'reject' }],
  agree: [{ word: 'disagree' }],
  allow: [{ word: 'forbid' }],
  remember: [{ word: 'forget' }],
  succeed: [{ word: 'fail' }],
  love: [{ word: 'hate' }],
  attack: [{ word: 'defend' }],
  borrow: [{ word: 'lend' }],
  hire: [{ word: 'fire', note: 'звільнити з роботи' }],
  praise: [{ word: 'criticize' }],
  encourage: [{ word: 'discourage' }],
  include: [{ word: 'exclude' }],
  expand: [{ word: 'shrink' }],
  rise: [{ word: 'fall' }],
  appear: [{ word: 'disappear' }],
  build: [{ word: 'destroy' }],
  push: [{ word: 'pull' }],
  give: [{ word: 'take' }],
  save: [{ word: 'spend' }],
  freeze: [{ word: 'melt' }],
  laugh: [{ word: 'cry' }],

  // ── Nouns ────────────────────────────────────────────────────────────────
  friend: [{ word: 'enemy' }],
  war: [{ word: 'peace' }],
  success: [{ word: 'failure' }],
  truth: [{ word: 'lie' }],
  day: [{ word: 'night' }],
  life: [{ word: 'death' }],
  beginning: [{ word: 'end' }],
  majority: [{ word: 'minority' }],
  advantage: [{ word: 'disadvantage' }],
  strength: [{ word: 'weakness' }],
  profit: [{ word: 'loss' }],
  supply: [{ word: 'demand' }],
};

export const ANTONYM_REVERSE: Map<string, string> = buildSynonymReverse(ANTONYMS);

// ════════════════════════════════════════════════════════════════════════
// Ukrainian antonym pairs — native pairs, not translations of ANTONYMS
// above (same relationship to SYNONYMS_UA in synonyms.ts).
// ════════════════════════════════════════════════════════════════════════

export const ANTONYMS_UA: Record<string, AntonymEntry[]> = {
  щасливий: [{ word: 'сумний' }],
  сміливий: [{ word: 'боягузливий' }],
  спокійний: [{ word: 'нервовий' }],
  впевнений: [{ word: 'сором’язливий' }],
  добрий: [{ word: 'жорстокий' }],
  щедрий: [{ word: 'скупий' }],
  терплячий: [{ word: 'нетерплячий' }],
  чесний: [{ word: 'нечесний' }],
  ввічливий: [{ word: 'грубий' }],
  скромний: [{ word: 'зарозумілий' }],

  великий: [{ word: 'малий' }],
  високий: [{ word: 'низький' }],
  широкий: [{ word: 'вузький' }],
  товстий: [{ word: 'тонкий' }],
  важкий: [{ word: 'легкий', note: 'про вагу' }],
  сильний: [{ word: 'слабкий' }],
  швидкий: [{ word: 'повільний' }],
  гарячий: [{ word: 'холодний' }],
  мокрий: [{ word: 'сухий' }],
  гучний: [{ word: 'тихий' }],
  гострий: [{ word: 'тупий' }],
  'м’який': [{ word: 'твердий' }],
  чистий: [{ word: 'брудний' }],
  повний: [{ word: 'порожній' }],
  світлий: [{ word: 'темний' }],
  глибокий: [{ word: 'мілкий' }],
  прямий: [{ word: 'кривий' }],

  легкий: [{ word: 'складний', note: 'про завдання' }],
  дешевий: [{ word: 'дорогий' }],
  багатий: [{ word: 'бідний' }],
  старий: [{ word: 'молодий', note: 'про людину' }],
  новий: [{ word: 'старий', note: 'про предмет' }],
  сучасний: [{ word: 'стародавній' }],
  безпечний: [{ word: 'небезпечний' }],
  здоровий: [{ word: 'хворий' }],
  розумний: [{ word: 'дурний' }],
  гарний: [{ word: 'потворний' }],
  публічний: [{ word: 'приватний' }],
  законний: [{ word: 'незаконний' }],
  видимий: [{ word: 'невидимий' }],
  можливий: [{ word: 'неможливий' }],
  зручний: [{ word: 'незручний' }],
  достатній: [{ word: 'недостатній' }],
  активний: [{ word: 'пасивний' }],
  позитивний: [{ word: 'негативний' }],
  постійний: [{ word: 'тимчасовий' }],
  схожий: [{ word: 'різний' }],
  знайомий: [{ word: 'незнайомий' }],
  звичайний: [{ word: 'незвичайний' }],
  охайний: [{ word: 'неохайний' }],
  зрілий: [{ word: 'незрілий' }],
  гнучкий: [{ word: 'жорсткий' }],

  правий: [{ word: 'лівий' }],
  внутрішній: [{ word: 'зовнішній' }],

  відкривати: [{ word: 'закривати' }],
  починати: [{ word: 'закінчувати' }],
  приїжджати: [{ word: 'від’їжджати' }],
  купувати: [{ word: 'продавати' }],
  вигравати: [{ word: 'програвати' }],
  збільшувати: [{ word: 'зменшувати' }],
  приймати: [{ word: 'відхиляти' }],
  дозволяти: [{ word: 'забороняти' }],
  'памʼятати': [{ word: 'забувати' }],
  любити: [{ word: 'ненавидіти' }],
  атакувати: [{ word: 'захищати' }],
  хвалити: [{ word: 'критикувати' }],
  будувати: [{ word: 'руйнувати' }],
  'зʼявлятися': [{ word: 'зникати' }],

  друг: [{ word: 'ворог' }],
  війна: [{ word: 'мир' }],
  успіх: [{ word: 'невдача' }],
  правда: [{ word: 'брехня' }],
  день: [{ word: 'ніч' }],
  життя: [{ word: 'смерть' }],
  сила: [{ word: 'слабкість' }],
  прибуток: [{ word: 'збиток' }],
};

export const ANTONYM_REVERSE_UA: Map<string, string> = buildSynonymReverse(ANTONYMS_UA);

export const ANTONYMS_BY_LANG: Record<string, Record<string, AntonymEntry[]>> = {
  en: ANTONYMS,
  ua: ANTONYMS_UA,
};

export const ANTONYM_REVERSE_BY_LANG: Record<string, Map<string, string>> = {
  en: ANTONYM_REVERSE,
  ua: ANTONYM_REVERSE_UA,
};
