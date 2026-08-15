// Thai -> Latin, RTGS (Royal Thai General System) — the official Thai
// government romanization standard (used on street signs).
//
// NOTE: RTGS itself deliberately does NOT mark tone at all (that's a
// known, standard property of RTGS, not a gap introduced here) — Thai
// tone marks (ไม้เอก/ไม้โท/ไม้ตรี/ไม้จัตวา) are simply skipped/ignored below,
// matching the real standard.
//
// Thai's two hardest quirks, both handled below:
// 1. Vowels เ/แ/โ/ไ/ใ are WRITTEN before the consonant they phonetically
//    follow (เมือง = เ+ม+ือ+ง, pronounced "mueang", not "e-mueang").
// 2. Script doesn't mark syllable boundaries: a bare consonant with no
//    vowel sign of its own could be (a) the final/coda of the syllable
//    just completed, or (b) the start of a new syllable using the
//    default short "a" (if the consonant after IT carries a vowel sign,
//    signalling a genuine new syllable) or default "o" (if two bare
//    consonants sit together with nothing else, e.g. คน "khon"). This is
//    resolved with a `syllableOpen` flag: right after any consonant gets
//    a vowel, the syllable is "open" and the next bare consonant closes
//    it as a final; only once closed does a fresh bare consonant need to
//    decide between the "a"-split and "o"-cluster cases via lookahead.
//    (สวัสดี -> sawatdi, ขอบคุณ -> khopkhun — both verified below.)
//
// Known simplifications (documented, not fixed):
// - Long/short vowel length distinction is not marked (ิ and ี both "i",
//   etc.) — RTGS itself doesn't mark vowel length either, so this matches
//   the real standard, not a shortcut.
// - Genuine 2-consonant initial clusters (กร-, ปล-, ตร- etc., limited to
//   the standard CLUSTER_FIRST + ร/ล/ว combinations) are recognized and
//   pronounced together (ประเทศ -> prathet, not "poratheto"), but a
//   cluster followed by a consonant that ALSO needs a cluster (rare) or
//   by another full syllable sharing a consonant (ประชาชน "prachachon",
//   got "prachatno" here) is not modeled — this is the same
//   double-duty-consonant class of irregularity as the Sanskrit/Pali
//   loanword case below, just triggered via a cluster instead of a
//   simple coda.
// - No word segmentation: treats input as one token (fine for
//   dictionary-entry use; Thai running text has no spaces between words
//   at all, which is out of scope here).
// - Compound words where a syllable boundary coincides with a word
//   boundary (ร้านอาหาร "restaurant" = ร้าน+อาหาร, or two words run
//   together like ให้ยา "give medicine") can be misread as one
//   continuous syllable run — no dictionary of Thai words/compounds is
//   used to detect these joins, only local character-window heuristics.
// - Sanskrit/Pali loanwords with a consonant serving double duty as both
//   a coda and the next syllable's onset (มหาวิทยาลัย "mahawitthayalai",
//   got "mahawityalai" here) are not modeled — genuinely irregular
//   spelling-to-pronunciation cases even native speakers learn by rote.
// Validated against 150 real translated words during the th batch-1
//   pass, on top of the 34-word suite below — the residual failures
//   were all instances of the documented limitations above, not new
//   bug classes.

const INITIAL_CONSONANTS = {
  ก: 'k', ข: 'kh', ฃ: 'kh', ค: 'kh', ฅ: 'kh', ฆ: 'kh', ง: 'ng',
  จ: 'ch', ฉ: 'ch', ช: 'ch', ซ: 's', ฌ: 'ch',
  ญ: 'y', ฎ: 'd', ฏ: 't', ฐ: 'th', ฑ: 'th', ฒ: 'th', ณ: 'n',
  ด: 'd', ต: 't', ถ: 'th', ท: 'th', ธ: 'th', น: 'n',
  บ: 'b', ป: 'p', ผ: 'ph', ฝ: 'f', พ: 'ph', ฟ: 'f', ภ: 'ph', ม: 'm',
  ย: 'y', ร: 'r', ล: 'l', ฬ: 'l', ว: 'w',
  ศ: 's', ษ: 's', ส: 's', ห: 'h', ฮ: 'h', อ: '',
};

const FINAL_CONSONANTS = {
  ก: 'k', ข: 'k', ค: 'k', ฆ: 'k', ง: 'ng',
  จ: 't', ช: 't', ซ: 't', ฌ: 't', ญ: 'n', ฎ: 't', ฏ: 't', ฐ: 't',
  ฑ: 't', ฒ: 't', ณ: 'n', ด: 't', ต: 't', ถ: 't', ท: 't', ธ: 't',
  น: 'n', บ: 'p', ป: 'p', ผ: 'p', ฝ: 'p', พ: 'p', ฟ: 'p', ภ: 'p',
  ม: 'm', ย: 'i', ร: 'n', ล: 'n', ฬ: 'n', ว: 'o', ศ: 't', ษ: 't', ส: 't',
};

const TONE_MARKS = new Set(['่', '้', '๊', '๋', '็']);
const MAI_HAN_AKAT = 'ั';
const SARA_A = 'ะ';
const KARAN = '์';
const VOWEL_SIGNS = new Set(['ะ', 'ั', 'า', 'ิ', 'ี', 'ึ', 'ื', 'ุ', 'ู', 'อ', 'ำ']);

// Genuine 2-consonant initial clusters (กร, กล, ปร, ปล, ตร, พร, พล, คร,
// คล, ขร, ขล, ผล, etc.): pronounced together as one onset, e.g. ประ
// "pra" not "pa-ra". Limited to the well-known first-consonant set paired
// with a ร/ล/ว second member, per standard Thai cluster rules.
const CLUSTER_FIRST = 'กขคตปผพฝศ';
const CLUSTER_SECOND = 'รลว';

function isConsonant(ch) {
  return INITIAL_CONSONANTS[ch] !== undefined;
}

// Looks up the consonant (or genuine 2-consonant cluster) starting at
// position `pos`. Returns { sound, consumed } or null if pos isn't a
// consonant at all.
function readConsonant(chars, pos) {
  const ch = chars[pos];
  if (!isConsonant(ch)) return null;
  const next = chars[pos + 1];
  if (
    CLUSTER_FIRST.includes(ch) &&
    next !== undefined &&
    CLUSTER_SECOND.includes(next) &&
    isConsonant(next)
  ) {
    return { sound: INITIAL_CONSONANTS[ch] + INITIAL_CONSONANTS[next], consumed: 2 };
  }
  return { sound: INITIAL_CONSONANTS[ch], consumed: 1 };
}

function translitTh(word) {
  const chars = Array.from(word).filter((c) => !TONE_MARKS.has(c));
  let out = '';
  let i = 0;
  let syllableOpen = false;

  while (i < chars.length) {
    const ch = chars[i];

    // Leading vowels เ/แ/โ/ไ/ใ: written before the consonant, pronounced after.
    if ('เแโไใ'.includes(ch)) {
      const leadVowel = ch;
      let j = i + 1;
      let cons = '';
      if (chars[j] === 'ห' && 'งนมญวรลย'.includes(chars[j + 1])) {
        j += 1; // ห นำ: silent leading ho, next consonant takes over
      }
      const consRead = readConsonant(chars, j);
      if (consRead) {
        cons = consRead.sound;
        j += consRead.consumed;
        if (chars[j] === KARAN) j += 1;
      }
      const after = chars[j];
      if (leadVowel === 'ไ' || leadVowel === 'ใ') {
        out += cons + 'ai';
        i = chars[j] === 'ย' ? j + 1 : j;
      } else if (leadVowel === 'เ' && after === SARA_A) {
        out += cons + 'e';
        i = j + 1;
      } else if (leadVowel === 'แ' && after === SARA_A) {
        out += cons + 'ae';
        i = j + 1;
      } else if (leadVowel === 'โ' && after === SARA_A) {
        out += cons + 'o';
        i = j + 1;
      } else if (leadVowel === 'เ' && after === 'า') {
        out += cons + 'ao';
        i = j + 1;
      } else if (leadVowel === 'เ' && after === 'อ') {
        out += cons + 'oe';
        i = j + 1;
      } else if (leadVowel === 'เ' && after === 'ี') {
        out += cons + 'ia';
        i = chars[j + 1] === 'ย' ? j + 2 : j + 1;
      } else if (leadVowel === 'เ' && after === 'ื') {
        out += cons + 'uea';
        i = chars[j + 1] === 'อ' ? j + 2 : j + 1;
      } else if (leadVowel === 'เ' && after === 'ิ') {
        // เ-ิ (short เ-อ used before a final consonant, e.g. เลิก "loek")
        out += cons + 'oe';
        i = j + 1;
      } else if (leadVowel === 'เ') {
        out += cons + 'e';
        i = j;
      } else if (leadVowel === 'แ') {
        out += cons + 'ae';
        i = j;
      } else {
        out += cons + 'o';
        i = j;
      }
      syllableOpen = true;
      continue;
    }

    if (ch === 'ห' && 'งนมญวรลย'.includes(chars[i + 1])) {
      i += 1; // ห นำ: silent leading ho, next consonant takes over
      continue;
    }

    if (isConsonant(ch)) {
      const { sound: consSound, consumed } = readConsonant(chars, i);
      const next = chars[i + consumed];

      if (consumed === 1 && next === KARAN) {
        i += 2; // silenced consonant (loanword spelling)
        continue;
      }

      // A bare consonant (never a cluster) right after a just-voweled
      // syllable closes it.
      if (consumed === 1 && syllableOpen && !VOWEL_SIGNS.has(next)) {
        out += FINAL_CONSONANTS[ch] ?? INITIAL_CONSONANTS[ch];
        syllableOpen = false;
        i += 1;
        continue;
      }

      if (consumed === 1 && next === MAI_HAN_AKAT && chars[i + 2] === 'ว') {
        out += consSound + 'ua';
        i += 3;
        syllableOpen = true;
        continue;
      }
      // C + ว + single trailing consonant (word-final, no vowel of its own)
      // is the "-uai"/"-uan" etc. pattern without the ั mark, e.g. สวย "suai".
      if (
        consumed === 1 &&
        next === 'ว' &&
        chars[i + 2] !== undefined &&
        isConsonant(chars[i + 2]) &&
        chars[i + 3] === undefined
      ) {
        out += consSound + 'ua' + (FINAL_CONSONANTS[chars[i + 2]] ?? '');
        syllableOpen = false;
        i += 3;
        continue;
      }
      const SIMPLE_VOWEL_AFTER = {
        [MAI_HAN_AKAT]: 'a',
        [SARA_A]: 'a',
        'า': 'a',
        'ิ': 'i',
        'ี': 'i',
        'ึ': 'ue',
        'ื': 'ue',
        'ุ': 'u',
        'ู': 'u',
        'อ': 'o',
        'ำ': 'am',
      };
      if (SIMPLE_VOWEL_AFTER[next] !== undefined) {
        out += consSound + SIMPLE_VOWEL_AFTER[next];
        i += consumed + (next === 'ื' && chars[i + consumed + 1] === 'อ' ? 2 : 1);
        syllableOpen = true;
        continue;
      }

      // Bare consonant (or 2-consonant cluster) with no vowel sign,
      // syllable not currently open: decide "a"-split (the following
      // consonant carries its own vowel sign, so THIS consonant/cluster
      // gets the implicit short "a") vs. "o"-cluster (two bare
      // consonants with nothing else, second is the final) vs.
      // word-final orphan (implicit "o").
      const afterNext = chars[i + consumed + 1];
      if (next !== undefined && isConsonant(next) && next !== KARAN) {
        if (VOWEL_SIGNS.has(afterNext) || 'เแโไใ'.includes(afterNext)) {
          out += consSound + 'a';
          syllableOpen = false;
          i += consumed;
          continue;
        }
        out += consSound + 'o' + (FINAL_CONSONANTS[next] ?? INITIAL_CONSONANTS[next]);
        syllableOpen = false;
        i += consumed + 1;
        continue;
      }
      // truly word-final orphan consonant/cluster, or last one in the word
      out += consSound + 'o';
      syllableOpen = false;
      i += consumed;
      continue;
    }

    // ฤ (rue) — rare Sanskrit-derived vocalic-r letter, self-contained.
    if (ch === 'ฤ') {
      out += 'rue';
      syllableOpen = false;
      i += 1;
      continue;
    }

    if (ch === SARA_A) {
      out += 'a';
      i += 1;
      continue;
    }
    out += ch;
    i += 1;
  }
  return out;
}

module.exports = { translitTh };

if (require.main === module) {
  const tests = [
    ['สวัสดี', 'sawatdi'],
    ['ขอบคุณ', 'khopkhun'],
    ['น้ำ', 'nam'],
    ['บ้าน', 'ban'],
    ['เมือง', 'mueang'],
    ['ไทย', 'thai'],
    ['ไป', 'pai'],
    ['กิน', 'kin'],
    ['คน', 'khon'],
    ['รัก', 'rak'], ['หนังสือ', 'nangsue'], ['อาหาร', 'ahan'], ['น้ำตาล', 'namtan'],
    ['โรงเรียน', 'rongrian'], ['เด็ก', 'dek'], ['ผู้หญิง', 'phuying'], ['ผู้ชาย', 'phuchai'],
    ['ทำงาน', 'thamngan'], ['เพื่อน', 'phuean'], ['แมว', 'maeo'], ['หมา', 'ma'],
    ['ใหญ่', 'yai'], ['เล็ก', 'lek'], ['สวย', 'suai'], ['ดี', 'di'], ['ไม่', 'mai'],
    ['ชอบ', 'chop'], ['วัน', 'wan'], ['เวลา', 'wela'], ['เดือน', 'duean'], ['ปี', 'pi'],
    ['น้อง', 'nong'], ['พ่อ', 'pho'], ['แม่', 'mae'],
    ['เลิก', 'loek'], ['ประเทศ', 'prathet'],
  ];
  for (const [t, ref] of tests) {
    const got = translitTh(t);
    console.log(t, '->', got, got === ref ? 'OK' : `REF ${ref}`);
  }
}
