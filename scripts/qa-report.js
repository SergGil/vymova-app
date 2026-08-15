// Vymova — scripts/qa-report.js
// Periodic, human-reviewed report: flags data/words.js entries whose English
// example sentence never seems to contain the headword itself (the "loot"
// bug — an example that demonstrates a different, related word instead of
// the one being taught). NOT wired into `npm test` or CI: a full run across
// ~10,400 entries has a high false-positive rate (~90% in past runs), mostly
// from irregular verb morphology (cling→clung, lead→led, wear→wore, ...) and
// short acronyms — a cheap suffix-stemmer can't reliably rule those out. Run
// this by hand occasionally and skim the (much shorter) output list instead.
//
// Usage: node scripts/qa-report.js
import { W } from '../data/words.js';

const INFLECTION_SUFFIXES = ['s', 'es', 'ed', 'd', 'ing'];

// Loose containment check: does `example` contain the headword, any simple
// suffixed inflection of it, or (for short/irregular words) at least a
// substantial substring overlap? This intentionally over-matches (favoring
// false negatives, i.e. NOT flagging) to keep the flagged list short and
// worth a human's time — see the module comment above.
function containsHeadword(word, example) {
  const w = word.toLowerCase();
  const ex = example.toLowerCase();
  if (ex.includes(w)) return true;
  for (const suf of INFLECTION_SUFFIXES) {
    if (ex.includes(w + suf)) return true;
  }
  // Drop a trailing 'e' before -ing/-ed style suffixes (e.g. "hope" -> "hoping").
  if (w.endsWith('e') && (ex.includes(w.slice(0, -1) + 'ing') || ex.includes(w.slice(0, -1) + 'ed')))
    return true;
  // Short words (<=4 chars) are too likely to false-positive on substring
  // checks in the other direction, so require an exact/suffix match only —
  // skip the loose substring fallback below for them.
  if (w.length <= 4) return false;
  // Loose fallback for irregular forms: a long-enough shared prefix/substring
  // (e.g. cling/clung, lead/led sadly won't match this either — the report
  // is expected to need human judgement on what's left after this).
  const stem = w.slice(0, Math.ceil(w.length * 0.6));
  return stem.length >= 4 && ex.includes(stem);
}

const flagged = [];
for (const entry of W) {
  const [word, , exampleSrc] = entry;
  if (!containsHeadword(word, exampleSrc)) {
    flagged.push({ word, exampleSrc });
  }
}

console.log(`Checked ${W.length} entries — ${flagged.length} flagged for manual review.\n`);
for (const { word, exampleSrc } of flagged) {
  console.log(`${word}\n  ${exampleSrc}\n`);
}
console.log(
  'Reminder: most of these are expected false positives (irregular verb forms,\n' +
    'plurals, short words) — only fix entries where the example genuinely never\n' +
    'demonstrates the headword, same class of bug as the "loot"/"ink"/"poison"/\n' +
    '"slut"/"whore" fixes. This script does not modify any files.',
);
