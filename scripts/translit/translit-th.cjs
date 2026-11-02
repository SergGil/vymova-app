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
// Further rules (added 2026-11 after Thai vowel marks leaked raw into 23
// stored transcriptions — every one traced to a case below):
// - อ is either the vowel "o" (ขอ "kho") or a silent onset carrying the next
//   vowel (อา "a"). It's the carrier whenever a dependent vowel follows it,
//   so ทางอากาศ is thang+akat, not "thango" + a stray า.
// - การันต์ ์ silences the consonant under it; a would-be cluster whose second
//   member is silenced isn't a cluster (สัตว์ "sat"), and two consonants
//   before ์ after a closed syllable are both silent (ลักษณ์ "lak", จันทร์ "chan").
// - ร หัน รร: Cรร is "Ca" + the next consonant as final (ธรรม "tham"), or
//   "Can" when nothing closes it (บรรเทา "banthao").
// - Final ร after a bare onset reads "on" (นคร "nakhon", อุปกรณ์ "...kon").
// - Three bare consonants in a row are C1+a, then C2+o+C3 (ถนน "thanon").
// - After ไ/ใ the ห-nam and trailing-ย shortcuts only apply when the
//   consonant doesn't carry its own vowel (ให้ยา "haiya", ใจยาก "chaiyak").
// - Short vowels ะ and ำ close their syllable: the next consonant is an
//   onset, not a final (ประสงค์ "prasong", จำนวน "chamnuan").
// - อ นำ ย: silent อ before ย + vowel (อยู่ "yu", อยาก "yak").
// - ๆ repeats the preceding syllable (ใดๆ "daidai"); Thai digits -> 0-9.
// - A dependent vowel the rules above didn't attach (shouldn't happen, but
//   unsegmented running text is unpredictable) is spelled as its sound
//   rather than passed through, so the output is always Latin.
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
//   boundary (ร้านอาหาร "restaurant" = ร้าน+อาหาร, or พร+ที่ "phon thi") can
//   be misread as one continuous syllable run — no dictionary of Thai
//   words/compounds is used to detect these joins, only local
//   character-window heuristics.
// - Sanskrit/Pali loanwords with a consonant serving double duty as both
//   a coda and the next syllable's onset (มหาวิทยาลัย "mahawitthayalai",
//   got "mahawityalai" here) are not modeled — genuinely irregular
//   spelling-to-pronunciation cases even native speakers learn by rote.
// Validated against 150 real translated words during the th batch-1
//   pass, on top of the suite below — the residual failures
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
const SARA_AM = 'ำ';
const KARAN = '์';
const MAI_YAMOK = 'ๆ';
const LEADING_VOWELS = 'เแโไใ';
const THAI_DIGITS = '๐๑๒๓๔๕๖๗๘๙';
// Vowel signs written after/above/below their consonant (อ is handled apart).
const DEPENDENT_VOWELS = new Set(['ะ', 'ั', 'า', 'ิ', 'ี', 'ึ', 'ื', 'ุ', 'ู', 'ำ']);

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
  [SARA_AM]: 'am',
};

// Genuine 2-consonant initial clusters: pronounced together as one onset,
// e.g. ประ "pra" not "pa-ra". Only the standard true clusters — ตล, ผล, ศร
// look like them but aren't (ตลาด "talat", ผลิต "phalit", ศรี "si").
const CLUSTERS = new Set([
  'กร', 'กล', 'กว', 'ขร', 'ขล', 'ขว', 'คร', 'คล', 'คว', 'ปร', 'ปล', 'พร', 'พล', 'ตร',
]);

function isConsonant(ch) {
  return INITIAL_CONSONANTS[ch] !== undefined;
}

// End of the Thai run: end of input, or a space/punctuation/Latin character.
function isBoundary(ch) {
  return ch === undefined || !/[฀-๿]/u.test(ch);
}

// Is chars[k] a vowel of the syllable before it? อ only when no dependent
// vowel follows it (otherwise it's the silent onset carrying that vowel), it
// isn't อ นำ ย (ความอยาก: อ is silent before ยา), and it doesn't open one of
// the Sanskrit prefixes อนุ/อธิ/อภิ (การอนุมัติ "kananumat").
function isVowelAt(chars, k) {
  if (chars[k] === 'อ') {
    if (chars[k + 1] === 'ย' && DEPENDENT_VOWELS.has(chars[k + 2])) return false;
    if (['นุ', 'ธิ', 'ภิ'].includes(chars[k + 1] + chars[k + 2])) return false;
    return !DEPENDENT_VOWELS.has(chars[k + 1]);
  }
  return DEPENDENT_VOWELS.has(chars[k]);
}

// Does the consonant at k start a syllable of its own? It carries a vowel
// directly or through a true cluster (กรด "krot" has an implicit o), is the
// onset of ร หัน or of C+ว+final (กวน "kuan"), or is a silent ห/อ นำ
// introducing one (หลบหนี: ห starts หนี).
function startsSyllableAt(chars, k) {
  if (!isConsonant(chars[k])) return false;
  if (isVowelAt(chars, k + 1)) return true;
  if (chars[k] === 'ห' && 'งนมญวรลย'.includes(chars[k + 1])) return startsSyllableAt(chars, k + 1);
  if (chars[k + 1] === 'ร' && chars[k + 2] === 'ร') return true;
  if (CLUSTERS.has(chars[k] + chars[k + 1]) && (isVowelAt(chars, k + 2) || isConsonant(chars[k + 2]))) {
    return true;
  }
  return chars[k + 1] === 'ว' && isConsonant(chars[k + 2]) && !isVowelAt(chars, k + 3);
}

// Looks up the consonant (or genuine 2-consonant cluster) starting at
// position `pos`. Returns { sound, consumed } or null if pos isn't a
// consonant at all. Not a cluster when the second member is silenced by ์
// (สัตว์) or is the first ร of ร หัน (กรรม). ร after ส/ศ/ท is silent when
// that onset takes a vowel (สร้าง "sang", ทราบ "sap", ศรี "si", เสร็จ "set" —
// `afterLeadVowel`: the vowel was written before it).
function readConsonant(chars, pos, afterLeadVowel = false) {
  const ch = chars[pos];
  if (!isConsonant(ch)) return null;
  const next = chars[pos + 1];
  if ('สศท'.includes(ch) && next === 'ร' && (afterLeadVowel || isVowelAt(chars, pos + 2))) {
    return { sound: 's', consumed: 2 };
  }
  if (
    CLUSTERS.has(ch + next) &&
    chars[pos + 2] !== KARAN &&
    !(next === 'ร' && chars[pos + 2] === 'ร')
  ) {
    return { sound: INITIAL_CONSONANTS[ch] + INITIAL_CONSONANTS[next], consumed: 2 };
  }
  return { sound: INITIAL_CONSONANTS[ch], consumed: 1 };
}

// ก็ ("also", "then") is read "ko" — its ็ is the only cue, and the tone-mark
// filter would drop it, so the pair is kept as one token.
const KO = 'ก็';

function translitTh(word) {
  const chars = [];
  for (const c of Array.from(word)) {
    if (c === '็' && chars[chars.length - 1] === 'ก' && !LEADING_VOWELS.includes(chars[chars.length - 2])) {
      chars[chars.length - 1] = KO;
    } else if (!TONE_MARKS.has(c)) {
      chars.push(c);
    }
  }
  let out = '';
  let i = 0;
  let syllableOpen = false;
  let syllableStart = 0; // where the current syllable begins in `out`, for ๆ
  const startSyllable = () => {
    syllableStart = out.length;
  };

  while (i < chars.length) {
    const ch = chars[i];

    // Leading vowels เ/แ/โ/ไ/ใ: written before the consonant, pronounced after.
    if (LEADING_VOWELS.includes(ch)) {
      startSyllable();
      const leadVowel = ch;
      const isAi = leadVowel === 'ไ' || leadVowel === 'ใ';
      let j = i + 1;
      let cons = '';
      // ห นำ: silent leading ho, next consonant takes over — except after ไ/ใ
      // when that consonant carries its own vowel (ให้ยา: ย starts ยา).
      if (
        chars[j] === 'ห' &&
        'งนมญวรลย'.includes(chars[j + 1]) &&
        !(isAi && isVowelAt(chars, j + 2))
      ) {
        j += 1;
      }
      const consRead = readConsonant(chars, j, true);
      if (consRead) {
        cons = consRead.sound;
        j += consRead.consumed;
        if (chars[j] === KARAN) j += 1;
      }
      const after = chars[j];
      // -ai, -ao, -oe and the ะ-shortened vowels take no final consonant, so
      // a bare consonant after them starts the next syllable (เทาลง "thaolong").
      let open = false;
      if (isAi) {
        out += cons + 'ai';
        // ไทย: a trailing ย belongs to the vowel, unless it starts the next
        // syllable (เข้าใจยาก "khaochaiyak").
        i = chars[j] === 'ย' && !isVowelAt(chars, j + 1) ? j + 1 : j;
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
      } else if (leadVowel === 'เ' && after === 'อ' && isVowelAt(chars, j)) {
        out += cons + 'oe';
        i = j + 1;
      } else if (leadVowel === 'เ' && after === 'ี') {
        out += cons + 'ia';
        i = chars[j + 1] === 'ย' ? j + 2 : j + 1;
        open = true;
      } else if (leadVowel === 'เ' && after === 'ื') {
        out += cons + 'uea';
        i = chars[j + 1] === 'อ' ? j + 2 : j + 1;
        open = true;
      } else if (leadVowel === 'เ' && after === 'ิ') {
        // เ-ิ (short เ-อ used before a final consonant, e.g. เลิก "loek")
        out += cons + 'oe';
        i = j + 1;
        open = true;
      } else if (leadVowel === 'เ') {
        out += cons + 'e';
        i = j;
        open = true;
      } else if (leadVowel === 'แ') {
        out += cons + 'ae';
        i = j;
        open = true;
      } else {
        out += cons + 'o';
        i = j;
        open = true;
      }
      syllableOpen = open;
      continue;
    }

    if (ch === 'ห' && 'งนมญวรลย'.includes(chars[i + 1])) {
      i += 1; // ห นำ: silent leading ho, next consonant takes over
      continue;
    }
    if (ch === 'อ' && chars[i + 1] === 'ย' && isVowelAt(chars, i + 2)) {
      i += 1; // อ นำ: silent อ before ย (อยู่, อยาก, อย่าง)
      continue;
    }

    if (isConsonant(ch)) {
      // ร หัน: Cรร + a final consonant -> C+a+final (ธรรม "tham"); with
      // nothing closing it -> C+an (บรรเทา "banthao").
      if (chars[i + 1] === 'ร' && chars[i + 2] === 'ร') {
        startSyllable();
        const fin = chars[i + 3];
        if (
          fin !== undefined &&
          isConsonant(fin) &&
          !isVowelAt(chars, i + 4) &&
          !(fin === 'อ' && DEPENDENT_VOWELS.has(chars[i + 4]))
        ) {
          out += INITIAL_CONSONANTS[ch] + 'a' + (FINAL_CONSONANTS[fin] ?? INITIAL_CONSONANTS[fin]);
          i += chars[i + 4] === KARAN ? 5 : 4;
        } else {
          out += INITIAL_CONSONANTS[ch] + 'an';
          i += 3;
        }
        syllableOpen = false;
        continue;
      }

      // ส/ศ/ท before ร closes an open syllable rather than taking the
      // silent-ร onset (อิสระ "itsara", not "isa").
      const { sound: consSound, consumed } =
        syllableOpen && 'สศท'.includes(ch) && chars[i + 1] === 'ร'
          ? { sound: INITIAL_CONSONANTS[ch], consumed: 1 }
          : readConsonant(chars, i);
      const next = chars[i + consumed];

      if (consumed === 1 && next === KARAN) {
        i += 2; // silenced consonant (loanword spelling)
        continue;
      }

      // A final followed by a ร with nothing after it in the word: the ร is
      // silent (มิตร "mit", สมัครเล่น "samaklen").
      if (
        syllableOpen &&
        chars[i + 1] === 'ร' &&
        (isBoundary(chars[i + 2]) || LEADING_VOWELS.includes(chars[i + 2]))
      ) {
        out += FINAL_CONSONANTS[ch] ?? INITIAL_CONSONANTS[ch];
        syllableOpen = false;
        i += 2;
        continue;
      }
      // A bare consonant (never a cluster) right after a just-voweled
      // syllable closes it.
      if (consumed === 1 && syllableOpen && !isVowelAt(chars, i + 1)) {
        out += FINAL_CONSONANTS[ch] ?? INITIAL_CONSONANTS[ch];
        syllableOpen = false;
        i += 1;
        continue;
      }

      startSyllable();
      // C + ฤ: ฤ is the syllable's vowel (ประพฤติ "praphrueti").
      if (next === 'ฤ') {
        out += consSound + 'rue';
        syllableOpen = true;
        i += consumed + 1;
        continue;
      }
      // บร + vowel: the บ takes "o" (บริษัท "borisat", บริหาร "borihan").
      if (ch === 'บ' && next === 'ร' && isVowelAt(chars, i + 2)) {
        out += 'bo';
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
      // C + ว + a final consonant with no vowel of its own is the "-ua-"
      // vowel without the ั mark: สวย "suai", ควร "khuan", กล้วย "kluai".
      const wAt = chars[i + 1] === 'ว' ? i + 1 : consumed === 2 && chars[i + 2] === 'ว' ? i + 2 : -1;
      const wFinal = chars[wAt + 1];
      if (
        wAt !== -1 &&
        isConsonant(wFinal) &&
        wFinal !== 'ว' &&
        !isVowelAt(chars, wAt + 2) &&
        chars[wAt + 2] !== KARAN &&
        !(wFinal === 'อ' && DEPENDENT_VOWELS.has(chars[wAt + 2]))
      ) {
        out += (wAt === i + 1 ? INITIAL_CONSONANTS[ch] : consSound) + 'ua';
        out += FINAL_CONSONANTS[wFinal] ?? INITIAL_CONSONANTS[wFinal];
        syllableOpen = false;
        i = wAt + 2;
        continue;
      }
      if (SIMPLE_VOWEL_AFTER[next] !== undefined && isVowelAt(chars, i + consumed)) {
        out += consSound + SIMPLE_VOWEL_AFTER[next];
        i += consumed + (next === 'ื' && chars[i + consumed + 1] === 'อ' ? 2 : 1);
        // ะ and ำ end their syllable; every other vowel can take a final.
        syllableOpen = next !== SARA_A && next !== SARA_AM;
        continue;
      }

      // Bare consonant (or 2-consonant cluster) with no vowel sign,
      // syllable not currently open: decide "a"-split (the following
      // consonant carries its own vowel sign, so THIS consonant/cluster
      // gets the implicit short "a") vs. "o"-cluster (two bare
      // consonants with nothing else, second is the final) vs.
      // word-final orphan (implicit "o").
      const afterNext = chars[i + consumed + 1];
      if (next !== undefined && isConsonant(next)) {
        if (afterNext === KARAN) {
          if (consumed === 2 && chars[i + 1] === 'ร') {
            // final ร reads "on" even before a silenced consonant (กรณ์ "kon")
            out += INITIAL_CONSONANTS[ch] + 'on';
          } else if (consumed === 2) {
            out += consSound + 'o';
          }
          // otherwise both consonants are silenced by the ์ (ลักษณ์ "lak")
          syllableOpen = false;
          i += consumed + 2;
          continue;
        }
        // C1 C2 C3 all bare at the end of a word: C1+a, then C2+o+C3 (ถนน
        // "thanon", นคร "nakhon"). Mid-word the same letters split either way
        // (ขนมปัง kha-nom vs รถพยาบาล rot-pha), so only the word-final case is
        // taken. If C2 starts a syllable, C1+a (สตรี "satri"); otherwise C1+o+C2,
        // including before a lead vowel (คนไทย "khonthai").
        const threeBare =
          consumed === 1 &&
          isConsonant(afterNext) &&
          !startsSyllableAt(chars, i + 2) &&
          (isBoundary(chars[i + 3]) || LEADING_VOWELS.includes(chars[i + 3]));
        if (threeBare || startsSyllableAt(chars, i + consumed)) {
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
      // truly word-final orphan consonant/cluster, or last one in the word;
      // a cluster ending in ร reads C+on (ศร "son", นคร's คร).
      out += consumed === 2 && chars[i + 1] === 'ร' ? INITIAL_CONSONANTS[ch] + 'on' : consSound + 'o';
      syllableOpen = false;
      i += consumed;
      continue;
    }

    // ฤ (rue) — rare Sanskrit-derived vocalic-r letter, self-contained.
    if (ch === 'ฤ') {
      startSyllable();
      out += 'rue';
      syllableOpen = false;
      i += 1;
      continue;
    }
    if (ch === KO) {
      startSyllable();
      out += 'ko';
      syllableOpen = false;
      i += 1;
      continue;
    }

    if (ch === MAI_YAMOK) {
      out += out.slice(syllableStart);
      i += 1;
      continue;
    }
    if (THAI_DIGITS.includes(ch)) {
      out += String(THAI_DIGITS.indexOf(ch));
      i += 1;
      continue;
    }
    // A dependent vowel no rule attached: spell its sound, never the raw mark.
    if (SIMPLE_VOWEL_AFTER[ch] !== undefined) {
      out += SIMPLE_VOWEL_AFTER[ch];
      syllableOpen = ch !== SARA_A && ch !== SARA_AM;
      i += 1;
      continue;
    }
    if (ch === KARAN) {
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
    // the rule classes behind the 2026-11 leaks
    ['ทางอากาศ', 'thangakat'], ['สัตว์', 'sat'], ['ลักษณ์', 'lak'],
    ['จันทร์', 'chan'], ['ประสงค์', 'prasong'], ['ให้ยา', 'haiya'], ['เข้าใจยาก', 'khaochaiyak'],
    ['ใดๆ', 'daidai'], ['บรรเทา', 'banthao'], ['ธรรม', 'tham'], ['จำนวน', 'chamnuan'],
    ['ถนน', 'thanon'], ['นคร', 'nakhon'], ['อยู่', 'yu'],
    // guards against over-reaching versions of the rules above
    ['หลบหนี', 'lopni'], ['ฝนกรด', 'fonkrot'], ['ส่งผลต่อ', 'songphonto'], ['รถพยาบาล', 'rotphayaban'],
    ['คู่ต่อสู้', 'khutosu'], ['มาขอดู', 'makhodu'], ['ยังไงก็ตาม', 'yangngaikotam'], ['เป็นมิตร', 'penmit'],
    ['สตรี', 'satri'], ['คนไทย', 'khonthai'], ['ตลาด', 'talat'], ['รบกวน', 'ropkuan'], ['สร้าง', 'sang'],
  ];
  for (const [t, ref] of tests) {
    const got = translitTh(t);
    console.log(t, '->', got, got === ref ? 'OK' : `REF ${ref}`);
  }
}
