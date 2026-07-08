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
  happy: [{ word: 'sad' }, { word: 'unhappy' }],
  excited: [{ word: 'bored' }, { word: 'indifferent' }],
  brave: [{ word: 'cowardly' }],
  calm: [{ word: 'nervous' }],
  confident: [{ word: 'shy' }, { word: 'insecure' }],
  kind: [{ word: 'cruel' }, { word: 'unkind' }],
  generous: [{ word: 'stingy' }],
  patient: [{ word: 'impatient' }],
  honest: [{ word: 'dishonest' }, { word: 'deceitful' }],
  polite: [{ word: 'rude' }, { word: 'impolite' }],
  optimistic: [{ word: 'pessimistic' }],
  humble: [{ word: 'arrogant' }, { word: 'boastful' }],
  sociable: [{ word: 'reserved' }],
  cautious: [{ word: 'reckless' }],

  // ── Adjectives: size / physical ─────────────────────────────────────────
  big: [{ word: 'small' }, { word: 'little' }],
  large: [{ word: 'tiny' }, { word: 'small' }],
  tall: [{ word: 'short' }],
  wide: [{ word: 'narrow' }],
  thick: [{ word: 'thin' }],
  heavy: [{ word: 'light', note: 'про вагу' }],
  strong: [{ word: 'weak' }],
  fast: [{ word: 'slow' }],
  hot: [{ word: 'cold' }, { word: 'cool' }],
  wet: [{ word: 'dry' }],
  loud: [{ word: 'quiet' }],
  sharp: [{ word: 'blunt' }],
  smooth: [{ word: 'rough' }],
  soft: [{ word: 'hard' }],
  clean: [{ word: 'dirty' }],
  full: [{ word: 'empty' }],
  bright: [{ word: 'dim' }, { word: 'dark' }],
  light: [{ word: 'dark', note: 'про колір/освітлення' }],
  deep: [{ word: 'shallow' }],
  straight: [{ word: 'crooked' }],
  fat: [{ word: 'thin', note: 'про статуру' }],

  // ── Adjectives: quality / state ─────────────────────────────────────────
  easy: [{ word: 'difficult' }, { word: 'hard' }],
  simple: [{ word: 'complex' }],
  cheap: [{ word: 'expensive' }],
  rich: [{ word: 'poor' }],
  old: [{ word: 'young', note: 'про людину' }],
  new: [{ word: 'old', note: 'про предмет' }],
  modern: [{ word: 'ancient' }],
  safe: [{ word: 'dangerous' }, { word: 'unsafe' }],
  healthy: [{ word: 'sick' }],
  clever: [{ word: 'stupid' }, { word: 'foolish' }],
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
  similar: [{ word: 'different' }, { word: 'distinct' }],
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
  open: [{ word: 'close' }, { word: 'shut' }],
  begin: [{ word: 'end' }, { word: 'finish' }],
  start: [{ word: 'finish' }],
  arrive: [{ word: 'depart' }],
  buy: [{ word: 'sell' }],
  win: [{ word: 'lose' }],
  increase: [{ word: 'decrease' }, { word: 'reduce' }],
  accept: [{ word: 'reject' }, { word: 'refuse' }],
  agree: [{ word: 'disagree' }],
  allow: [{ word: 'forbid' }],
  remember: [{ word: 'forget' }],
  succeed: [{ word: 'fail' }],
  love: [{ word: 'hate' }, { word: 'dislike' }],
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

  // ── Adjectives: feelings / character (extra) ────────────────────────────
  proud: [{ word: 'ashamed' }],
  friendly: [{ word: 'hostile' }, { word: 'unfriendly' }],
  loyal: [{ word: 'disloyal' }],
  selfish: [{ word: 'selfless' }],
  cheerful: [{ word: 'gloomy' }],
  curious: [{ word: 'indifferent' }],
  tolerant: [{ word: 'intolerant' }],
  gentle: [{ word: 'harsh' }, { word: 'rough' }],
  modest: [{ word: 'boastful' }],
  sincere: [{ word: 'insincere' }, { word: 'fake' }],
  faithful: [{ word: 'unfaithful' }],
  graceful: [{ word: 'clumsy' }],
  wise: [{ word: 'foolish' }, { word: 'unwise' }],
  strict: [{ word: 'lenient' }],
  grateful: [{ word: 'ungrateful' }],
  punctual: [{ word: 'unpunctual' }],
  serious: [{ word: 'playful' }],
  talkative: [{ word: 'silent' }],
  stubborn: [{ word: 'compliant' }],

  // ── Adjectives: size / physical (extra) ──────────────────────────────────
  solid: [{ word: 'hollow' }],
  dense: [{ word: 'sparse' }],
  steep: [{ word: 'flat' }],
  crowded: [{ word: 'deserted' }],
  noisy: [{ word: 'quiet' }],
  spacious: [{ word: 'cramped' }],
  shiny: [{ word: 'dull' }],
  fresh: [{ word: 'stale' }],
  ripe: [{ word: 'unripe' }],

  // ── Adjectives: quality / state (extra) ──────────────────────────────────
  useful: [{ word: 'useless' }],
  valuable: [{ word: 'worthless' }],
  reliable: [{ word: 'unreliable' }],
  efficient: [{ word: 'inefficient' }],
  accurate: [{ word: 'inaccurate' }],
  adequate: [{ word: 'inadequate' }],
  relevant: [{ word: 'irrelevant' }],
  logical: [{ word: 'illogical' }, { word: 'irrational' }],
  regular: [{ word: 'irregular' }],
  optional: [{ word: 'mandatory' }],
  explicit: [{ word: 'implicit' }],
  abstract: [{ word: 'concrete' }],
  superior: [{ word: 'inferior' }],
  major: [{ word: 'minor' }],
  senior: [{ word: 'junior' }],
  domestic: [{ word: 'foreign' }],
  official: [{ word: 'unofficial' }],
  constant: [{ word: 'variable' }],
  gradual: [{ word: 'sudden' }],
  vague: [{ word: 'precise' }],
  general: [{ word: 'specific' }],
  loose: [{ word: 'tight' }],
  superficial: [{ word: 'profound' }],
  abundant: [{ word: 'scarce' }],
  fertile: [{ word: 'barren' }],

  // ── Directions / positions (extra) ───────────────────────────────────────
  forward: [{ word: 'backward' }],
  front: [{ word: 'back' }],
  top: [{ word: 'bottom' }],
  near: [{ word: 'far' }],
  inner: [{ word: 'outer' }],

  // ── Verbs (extra) ─────────────────────────────────────────────────────────
  enter: [{ word: 'exit' }],
  lock: [{ word: 'unlock' }],
  tie: [{ word: 'untie' }],
  connect: [{ word: 'disconnect' }],
  attach: [{ word: 'detach' }],
  wake: [{ word: 'sleep' }],
  raise: [{ word: 'lower' }],
  tighten: [{ word: 'loosen' }],
  gather: [{ word: 'scatter' }],
  combine: [{ word: 'separate' }],
  create: [{ word: 'destroy' }],
  earn: [{ word: 'spend' }],
  teach: [{ word: 'learn' }],
  ask: [{ word: 'answer' }],
  import: [{ word: 'export' }],
  produce: [{ word: 'consume' }],
  hide: [{ word: 'reveal' }],
  whisper: [{ word: 'shout' }],
  smile: [{ word: 'frown' }],
  forgive: [{ word: 'blame' }],
  protect: [{ word: 'harm' }],
  heal: [{ word: 'hurt' }],
  improve: [{ word: 'worsen' }],
  simplify: [{ word: 'complicate' }],
  approve: [{ word: 'disapprove' }],
  admit: [{ word: 'deny' }],
  obey: [{ word: 'disobey' }],
  unite: [{ word: 'divide' }],
  advance: [{ word: 'retreat' }],
  promote: [{ word: 'demote' }],
  deposit: [{ word: 'withdraw' }],
  multiply: [{ word: 'divide' }],

  // ── Nouns (extra) ────────────────────────────────────────────────────────
  joy: [{ word: 'sorrow' }],
  courage: [{ word: 'fear' }],
  wealth: [{ word: 'poverty' }],
  freedom: [{ word: 'slavery' }],
  order: [{ word: 'chaos' }],
  health: [{ word: 'illness' }],
  victory: [{ word: 'defeat' }],
  question: [{ word: 'answer' }],
  cause: [{ word: 'effect' }],
  problem: [{ word: 'solution' }],
  host: [{ word: 'guest' }],
  teacher: [{ word: 'student' }],
  buyer: [{ word: 'seller' }],
  employer: [{ word: 'employee' }],
  husband: [{ word: 'wife' }],
  male: [{ word: 'female' }],
  adult: [{ word: 'child' }],
  summer: [{ word: 'winter' }],
  sunrise: [{ word: 'sunset' }],

  // ── Adverbs (extra) ──────────────────────────────────────────────────────
  always: [{ word: 'never' }],
  often: [{ word: 'rarely' }, { word: 'seldom' }],
  everywhere: [{ word: 'nowhere' }],
  together: [{ word: 'separately' }],

  // ── Taste / food ─────────────────────────────────────────────────────────
  sweet: [{ word: 'sour' }],
  spicy: [{ word: 'bland' }],
  bitter: [{ word: 'mild' }],
  raw: [{ word: 'cooked' }],

  // ── Weather / nature ─────────────────────────────────────────────────────
  sunny: [{ word: 'cloudy' }],
  windy: [{ word: 'still' }],
  humid: [{ word: 'arid' }],
  stormy: [{ word: 'serene' }],
  wild: [{ word: 'tame' }],

  // ── Body / health / state ────────────────────────────────────────────────
  awake: [{ word: 'asleep' }],
  alive: [{ word: 'dead' }],
  fit: [{ word: 'unfit' }],
  energetic: [{ word: 'exhausted' }],
  conscious: [{ word: 'unconscious' }],
  employed: [{ word: 'unemployed' }],
  busy: [{ word: 'idle' }],

  // ── Technology ───────────────────────────────────────────────────────────
  digital: [{ word: 'analog' }],
  online: [{ word: 'offline' }],
  compatible: [{ word: 'incompatible' }],
  secure: [{ word: 'insecure' }],

  // ── Business / economy ───────────────────────────────────────────────────
  wholesale: [{ word: 'retail' }],
  debit: [{ word: 'credit' }],
  income: [{ word: 'expense' }],
  surplus: [{ word: 'deficit' }],
  inflation: [{ word: 'deflation' }],

  // ── Time ─────────────────────────────────────────────────────────────────
  past: [{ word: 'future' }],
  present: [{ word: 'absent' }],
  before: [{ word: 'after' }],
  now: [{ word: 'later' }],
  recent: [{ word: 'outdated' }],

  // ── Quantity ─────────────────────────────────────────────────────────────
  many: [{ word: 'few' }],
  much: [{ word: 'little' }],
  maximum: [{ word: 'minimum' }],
  whole: [{ word: 'partial' }],
  entire: [{ word: 'partial' }],
  individual: [{ word: 'collective' }],
  singular: [{ word: 'plural' }],

  // ── Position / geometry ──────────────────────────────────────────────────
  central: [{ word: 'peripheral' }],
  horizontal: [{ word: 'vertical' }],
  parallel: [{ word: 'perpendicular' }],

  // ── Color / sound ────────────────────────────────────────────────────────
  colorful: [{ word: 'colorless' }],
  audible: [{ word: 'inaudible' }],

  // ── Emotions / mental states (extra) ─────────────────────────────────────
  relaxed: [{ word: 'tense' }, { word: 'anxious' }],
  hopeful: [{ word: 'hopeless' }, { word: 'pessimistic' }],
  satisfied: [{ word: 'dissatisfied' }, { word: 'unhappy' }],
  willing: [{ word: 'unwilling' }],
  eager: [{ word: 'reluctant' }],
  determined: [{ word: 'indecisive' }],
  rational: [{ word: 'irrational' }],
  sane: [{ word: 'insane' }],
  anxious: [{ word: 'calm' }],
  impulsive: [{ word: 'cautious' }],

  // ── Communication ────────────────────────────────────────────────────────
  clear: [{ word: 'vague' }, { word: 'confusing' }],
  fluent: [{ word: 'hesitant' }],
  legible: [{ word: 'illegible' }],

  // ── Nature / animals ─────────────────────────────────────────────────────
  carnivore: [{ word: 'herbivore' }],
  predator: [{ word: 'prey' }],

  // ── Materials / science ──────────────────────────────────────────────────
  synthetic: [{ word: 'organic' }],
  organic: [{ word: 'inorganic' }],
  liquid: [{ word: 'solid' }],

  // ── Legal / social ───────────────────────────────────────────────────────
  guilty: [{ word: 'innocent' }],
  civilian: [{ word: 'military' }],

  // ── Education ────────────────────────────────────────────────────────────
  pass: [{ word: 'fail' }],
  correct: [{ word: 'incorrect' }],

  // ── Environment ──────────────────────────────────────────────────────────
  polluted: [{ word: 'clean' }],
  renewable: [{ word: 'nonrenewable' }],

  // ── Movement ─────────────────────────────────────────────────────────────
  ascend: [{ word: 'descend' }],
  accelerate: [{ word: 'decelerate' }],
  inhale: [{ word: 'exhale' }],

  // ── Style / register ─────────────────────────────────────────────────────
  casual: [{ word: 'formal' }],
  literal: [{ word: 'figurative' }],
  spoken: [{ word: 'written' }],

  // ── Geography ────────────────────────────────────────────────────────────
  coastal: [{ word: 'inland' }],
  mountainous: [{ word: 'flat' }],

  // ── Skill / competence ───────────────────────────────────────────────────
  amateur: [{ word: 'professional' }],
  skilled: [{ word: 'unskilled' }, { word: 'incompetent' }],
  experienced: [{ word: 'inexperienced' }],
  qualified: [{ word: 'unqualified' }],
  competent: [{ word: 'incompetent' }],
  capable: [{ word: 'incapable' }, { word: 'unable' }],

  // ── Character / creativity (extra) ───────────────────────────────────────
  straightforward: [{ word: 'complicated' }],
  spontaneous: [{ word: 'planned' }],
  creative: [{ word: 'unimaginative' }],
  original: [{ word: 'unoriginal' }, { word: 'derivative' }],
  innovative: [{ word: 'conventional' }],
  traditional: [{ word: 'modern' }],
  dependent: [{ word: 'independent' }],
  dominant: [{ word: 'subordinate' }],
  luxurious: [{ word: 'modest' }],
  elegant: [{ word: 'shabby' }],
  neat: [{ word: 'sloppy' }],

  // ── Nouns (extra 2) ──────────────────────────────────────────────────────
  winner: [{ word: 'loser' }],
  optimist: [{ word: 'pessimist' }],

  // ── Interest ─────────────────────────────────────────────────────────────
  dull: [{ word: 'exciting' }],
  boring: [{ word: 'interesting' }],

  // ── Common basics ────────────────────────────────────────────────────────
  black: [{ word: 'white' }],
  true: [{ word: 'false' }],

  // ── Adjectives: durability / condition ───────────────────────────────────
  fragile: [{ word: 'durable' }],
  flimsy: [{ word: 'sturdy' }],
  organized: [{ word: 'disorganized' }],
  fancy: [{ word: 'plain' }],

  // ── Health / medical ─────────────────────────────────────────────────────
  chronic: [{ word: 'acute' }],
  benign: [{ word: 'malignant' }],

  // ── Family ───────────────────────────────────────────────────────────────
  parent: [{ word: 'child' }],
  ancestor: [{ word: 'descendant' }],

  // ── School / education (extra) ───────────────────────────────────────────
  literate: [{ word: 'illiterate' }],
  attentive: [{ word: 'distracted' }],
  diligent: [{ word: 'lazy' }],

  // ── Workplace ────────────────────────────────────────────────────────────
  productive: [{ word: 'unproductive' }],
  motivated: [{ word: 'unmotivated' }],
  ambitious: [{ word: 'unambitious' }],
  cooperative: [{ word: 'uncooperative' }],

  // ── Clothing / fashion ───────────────────────────────────────────────────
  fashionable: [{ word: 'outdated' }, { word: 'unfashionable' }],

  // ── Food (extra) ─────────────────────────────────────────────────────────
  edible: [{ word: 'inedible' }],

  // ── Sports / competition ─────────────────────────────────────────────────
  offense: [{ word: 'defense' }],
  competitive: [{ word: 'cooperative' }],

  // ── Grammar (extra) ──────────────────────────────────────────────────────
  masculine: [{ word: 'feminine' }],

  // ── Nature / biology ─────────────────────────────────────────────────────
  nocturnal: [{ word: 'diurnal' }],

  // ── Science / chemistry ──────────────────────────────────────────────────
  soluble: [{ word: 'insoluble' }],

  // ── Legal (extra) ────────────────────────────────────────────────────────
  plaintiff: [{ word: 'defendant' }],

  // ── Math ─────────────────────────────────────────────────────────────────
  odd: [{ word: 'even' }],
  addition: [{ word: 'subtraction' }],
  multiplication: [{ word: 'division' }],
  plus: [{ word: 'minus' }],

  // ── Music / arts ─────────────────────────────────────────────────────────
  harmony: [{ word: 'discord' }],

  // ── Direction (extra) ────────────────────────────────────────────────────
  clockwise: [{ word: 'counterclockwise' }],

  // ── Verbs: containers / packing ──────────────────────────────────────────
  fill: [{ word: 'empty' }],
  load: [{ word: 'unload' }],
  pack: [{ word: 'unpack' }],
  wrap: [{ word: 'unwrap' }],

  // ── Verbs: technology / devices ──────────────────────────────────────────
  charge: [{ word: 'discharge' }],
  subscribe: [{ word: 'unsubscribe' }],
  follow: [{ word: 'unfollow' }],

  // ── Verbs: intensity ─────────────────────────────────────────────────────
  inflate: [{ word: 'deflate' }],
  widen: [{ word: 'narrow' }],
  strengthen: [{ word: 'weaken' }],
  soften: [{ word: 'harden' }],
  brighten: [{ word: 'darken' }],

  // ── Verbs: process control ───────────────────────────────────────────────
  postpone: [{ word: 'expedite' }],
  initiate: [{ word: 'terminate' }],
  resume: [{ word: 'pause' }],
  continue: [{ word: 'stop' }, { word: 'pause' }],
  confirm: [{ word: 'cancel' }],

  // ── Verbs: attitude ──────────────────────────────────────────────────────
  like: [{ word: 'dislike' }, { word: 'hate' }],
  support: [{ word: 'oppose' }],
  compliment: [{ word: 'insult' }],

  // ── Nouns: people / roles ────────────────────────────────────────────────
  ally: [{ word: 'enemy' }],
  doctor: [{ word: 'patient' }],
  landlord: [{ word: 'tenant' }],
  producer: [{ word: 'consumer' }],
  creditor: [{ word: 'debtor' }],
  welcome: [{ word: 'farewell' }],
  famous: [{ word: 'unknown' }],
  popular: [{ word: 'unpopular' }],
};

export const ANTONYM_REVERSE: Map<string, string> = buildSynonymReverse(ANTONYMS);

// ════════════════════════════════════════════════════════════════════════
// Ukrainian antonym pairs — native pairs, not translations of ANTONYMS
// above (same relationship to SYNONYMS_UA in synonyms.ts).
// ════════════════════════════════════════════════════════════════════════

export const ANTONYMS_UA: Record<string, AntonymEntry[]> = {
  щасливий: [{ word: 'сумний' }, { word: 'нещасний' }],
  сміливий: [{ word: 'боягузливий' }],
  спокійний: [{ word: 'нервовий' }],
  впевнений: [{ word: 'сором’язливий' }],
  добрий: [{ word: 'жорстокий' }, { word: 'злий' }],
  щедрий: [{ word: 'скупий' }],
  терплячий: [{ word: 'нетерплячий' }],
  чесний: [{ word: 'нечесний' }, { word: 'брехливий' }],
  ввічливий: [{ word: 'грубий' }, { word: 'нечемний' }],
  скромний: [{ word: 'зарозумілий' }, { word: 'хвалькуватий' }],

  великий: [{ word: 'малий' }, { word: 'маленький' }],
  високий: [{ word: 'низький' }],
  широкий: [{ word: 'вузький' }],
  товстий: [{ word: 'тонкий' }],
  важкий: [{ word: 'легкий', note: 'про вагу' }],
  сильний: [{ word: 'слабкий' }],
  швидкий: [{ word: 'повільний' }],
  гарячий: [{ word: 'холодний' }, { word: 'прохолодний' }],
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
  безпечний: [{ word: 'небезпечний' }, { word: 'ризикований' }],
  здоровий: [{ word: 'хворий' }],
  розумний: [{ word: 'дурний' }, { word: 'тупий' }],
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

  відкривати: [{ word: 'закривати' }, { word: 'зачиняти' }],
  починати: [{ word: 'закінчувати' }, { word: 'завершувати' }],
  приїжджати: [{ word: 'від’їжджати' }],
  купувати: [{ word: 'продавати' }],
  вигравати: [{ word: 'програвати' }],
  збільшувати: [{ word: 'зменшувати' }],
  приймати: [{ word: 'відхиляти' }],
  дозволяти: [{ word: 'забороняти' }],
  'памʼятати': [{ word: 'забувати' }],
  любити: [{ word: 'ненавидіти' }, { word: 'недолюблювати' }],
  атакувати: [{ word: 'захищати' }],
  хвалити: [{ word: 'критикувати' }],
  будувати: [{ word: 'руйнувати' }],
  'зʼявлятися': [{ word: 'зникати' }],

  друг: [{ word: 'ворог' }, { word: 'недруг' }],
  війна: [{ word: 'мир' }],
  успіх: [{ word: 'невдача' }],
  правда: [{ word: 'брехня' }],
  день: [{ word: 'ніч' }],
  життя: [{ word: 'смерть' }],
  сила: [{ word: 'слабкість' }],
  прибуток: [{ word: 'збиток' }],

  дружній: [{ word: 'ворожий' }],
  вірний: [{ word: 'невірний' }],
  егоїстичний: [{ word: 'безкорисливий' }],
  веселий: [{ word: 'похмурий' }],
  допитливий: [{ word: 'байдужий' }],
  терпимий: [{ word: 'нетерпимий' }],
  лагідний: [{ word: 'жорсткий' }],
  щирий: [{ word: 'нещирий' }],
  граційний: [{ word: 'незграбний' }],
  мудрий: [{ word: 'нерозумний' }],
  суворий: [{ word: 'поблажливий' }],
  вдячний: [{ word: 'невдячний' }],
  пунктуальний: [{ word: 'непунктуальний' }],
  серйозний: [{ word: 'грайливий' }],
  балакучий: [{ word: 'мовчазний' }],
  впертий: [{ word: 'поступливий' }],

  суцільний: [{ word: 'порожнистий' }],
  густий: [{ word: 'рідкий', note: 'про густоту' }],
  стрімкий: [{ word: 'пологий' }],
  переповнений: [{ word: 'безлюдний' }],
  гамірний: [{ word: 'тихий' }],
  просторий: [{ word: 'тісний' }],
  блискучий: [{ word: 'тьмяний' }],
  свіжий: [{ word: 'несвіжий' }],
  стиглий: [{ word: 'недостиглий' }],

  корисний: [{ word: 'марний' }, { word: 'шкідливий' }],
  цінний: [{ word: 'нікчемний' }],
  надійний: [{ word: 'ненадійний' }],
  ефективний: [{ word: 'неефективний' }],
  точний: [{ word: 'неточний' }],
  доречний: [{ word: 'недоречний' }],
  логічний: [{ word: 'нелогічний' }],
  регулярний: [{ word: 'нерегулярний' }],
  'необов’язковий': [{ word: 'обов’язковий' }],
  явний: [{ word: 'неявний' }],
  абстрактний: [{ word: 'конкретний' }],
  старший: [{ word: 'молодший' }],
  вітчизняний: [{ word: 'закордонний' }],
  офіційний: [{ word: 'неофіційний' }],
  сталий: [{ word: 'мінливий' }],
  поступовий: [{ word: 'раптовий' }],
  невизначений: [{ word: 'точний' }],
  загальний: [{ word: 'конкретний' }],
  вільний: [{ word: 'тісний', note: 'про одяг' }],
  поверхневий: [{ word: 'ґрунтовний' }],
  рясний: [{ word: 'мізерний' }],
  родючий: [{ word: 'неродючий' }],

  вперед: [{ word: 'назад' }],
  передній: [{ word: 'задній' }],
  верх: [{ word: 'низ' }],
  близько: [{ word: 'далеко' }],

  заходити: [{ word: 'виходити' }],
  замикати: [{ word: 'відмикати' }],
  'зав’язувати': [{ word: 'розв’язувати' }],
  'з’єднувати': [{ word: 'роз’єднувати' }],
  прикріпляти: [{ word: 'відкріпляти' }],
  прокидатися: [{ word: 'засинати' }],
  піднімати: [{ word: 'опускати' }],
  затягувати: [{ word: 'послаблювати' }],
  збирати: [{ word: 'розкидати' }],
  поєднувати: [{ word: 'розділяти' }],
  створювати: [{ word: 'руйнувати' }],
  заробляти: [{ word: 'витрачати' }],
  навчати: [{ word: 'навчатися' }],
  питати: [{ word: 'відповідати' }],
  імпортувати: [{ word: 'експортувати' }],
  виробляти: [{ word: 'споживати' }],
  приховувати: [{ word: 'розкривати' }],
  шепотіти: [{ word: 'кричати' }],
  посміхатися: [{ word: 'хмуритися' }],
  прощати: [{ word: 'звинувачувати' }],
  оберігати: [{ word: 'шкодити' }],
  лікувати: [{ word: 'ранити' }],
  покращувати: [{ word: 'погіршувати' }],
  спрощувати: [{ word: 'ускладнювати' }],
  схвалювати: [{ word: 'засуджувати' }],
  визнавати: [{ word: 'заперечувати' }],
  коритися: [{ word: 'бунтувати' }],
  'об’єднувати': [{ word: 'розділяти' }],
  наступати: [{ word: 'відступати' }],
  підвищувати: [{ word: 'знижувати' }],
  вкладати: [{ word: 'знімати' }],
  множити: [{ word: 'ділити' }],

  радість: [{ word: 'смуток' }, { word: 'журба' }],
  відвага: [{ word: 'страх' }],
  багатство: [{ word: 'бідність' }],
  свобода: [{ word: 'рабство' }],
  порядок: [{ word: 'хаос' }],
  'здоров’я': [{ word: 'хвороба' }],
  перемога: [{ word: 'поразка' }],
  запитання: [{ word: 'відповідь' }],
  причина: [{ word: 'наслідок' }],
  проблема: [{ word: 'рішення' }],
  господар: [{ word: 'гість' }],
  вчитель: [{ word: 'учень' }],
  покупець: [{ word: 'продавець' }],
  роботодавець: [{ word: 'працівник' }],
  чоловік: [{ word: 'дружина' }],
  чоловічий: [{ word: 'жіночий' }],
  дорослий: [{ word: 'дитина' }],
  літо: [{ word: 'зима' }],
  світанок: [{ word: 'сутінки' }],

  завжди: [{ word: 'ніколи' }],
  часто: [{ word: 'рідко' }, { word: 'зрідка' }],
  всюди: [{ word: 'ніде' }],
  разом: [{ word: 'окремо' }],
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
