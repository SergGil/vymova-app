// Vymova — js/features/voice/voice.tsx
// Web Speech API voice picker: EN + UA
import { useCallback, useEffect, useState, type ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { synth } from '../../core/srs.ts';
import { t, getLang } from '../i18n.ts';
import { flagUrl } from '../../core/flags.ts';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../../../src/components/ui/collapsible.tsx';
import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion';

let _enURI = localStorage.getItem('ew_ws_voice') ?? '';

// .speak-btn.on/.accent-btn.on/.listen-play-btn.on all toggle the same bare
// 'on' token through this shared helper (whatever button element they're
// given), but .listen-play-btn.on's @keyframes (listenPulse) differs from
// the other two's shared pulse-flash — branch on the button's own
// pre-existing base class, the same way the original compound CSS selectors
// did implicitly (docs/full-css-tailwind-migration-roadmap.md Tier 2d).
function addPulseOn(btn: HTMLElement): void {
  btn.classList.add(
    'on',
    btn.classList.contains('listen-play-btn')
      ? 'animate-[listenPulse_0.7s_ease-in-out_infinite_alternate]'
      : 'animate-[pulse-flash_0.7s_ease-in-out_infinite_alternate]',
  );
}
function removePulseOn(btn: HTMLElement): void {
  btn.classList.remove(
    'on',
    'animate-[pulse-flash_0.7s_ease-in-out_infinite_alternate]',
    'animate-[listenPulse_0.7s_ease-in-out_infinite_alternate]',
  );
}

// Data-driven replacement for what used to be 137 near-identical hand-written
// _xxVoices()/getSelectedXxVoice() functions (one per language) — extracted
// mechanically from the prior implementation, not retyped, and verified
// against it via a synthetic-voice parity check before this rewrite landed.
// Every language's actual behavior (which lang-prefix/name patterns select
// its voices, its Settings-section identity) is preserved exactly.
export interface LangVoiceConfig {
  id: string;
  langPrefixes: string[];
  nameIncludes: string[];
  flagCode: string;
  titleKey: string;
  noTitleKey: string | null;
  descKey: string | null;
  storageKey: string;
  testText: string;
  defaultSelect: 'google' | 'first' | null;
}

// Exported (read-only in practice) so tests/features/voice.test.tsx can
// verify every language's getSelectedXxVoice() behavior generically instead
// of hand-picking a handful — see that file's "generic per-language voice
// resolution" describe block.
export const LANG_VOICE_CONFIG: LangVoiceConfig[] = [
  {
    id: 'uk',
    langPrefixes: ['uk'],
    nameIncludes: ['ukrainian', 'укра'],
    flagCode: 'ua',
    titleKey: 'settings.ukVoicesTitle',
    noTitleKey: 'settings.noUkVoicesTitle',
    descKey: 'settings.noUkVoicesDesc',
    storageKey: 'ew_ws_uk_voice',
    testText: 'Привіт, як справи',
    defaultSelect: 'first',
  },
  {
    id: 'es',
    langPrefixes: ['es'],
    nameIncludes: ['spanish', 'español', 'espanol'],
    flagCode: 'es',
    titleKey: 'settings.esVoicesTitle',
    noTitleKey: 'settings.noEsVoicesTitle',
    descKey: 'settings.noEsVoicesDesc',
    storageKey: 'ew_ws_es_voice',
    testText: 'Hola, ¿cómo estás?',
    defaultSelect: 'google',
  },
  {
    id: 'fr',
    langPrefixes: ['fr'],
    nameIncludes: ['french', 'français', 'francais'],
    flagCode: 'fr',
    titleKey: 'settings.frVoicesTitle',
    noTitleKey: 'settings.noFrVoicesTitle',
    descKey: 'settings.noFrVoicesDesc',
    storageKey: 'ew_ws_fr_voice',
    testText: 'Bonjour, comment ça va ?',
    defaultSelect: 'google',
  },
  {
    id: 'it',
    langPrefixes: ['it'],
    nameIncludes: ['italian', 'italiano'],
    flagCode: 'it',
    titleKey: 'settings.itVoicesTitle',
    noTitleKey: 'settings.noItVoicesTitle',
    descKey: 'settings.noItVoicesDesc',
    storageKey: 'ew_ws_it_voice',
    testText: 'Ciao, come stai?',
    defaultSelect: 'google',
  },
  {
    id: 'pt',
    langPrefixes: ['pt'],
    nameIncludes: ['portuguese', 'português', 'portugues'],
    flagCode: 'pt',
    titleKey: 'settings.ptVoicesTitle',
    noTitleKey: 'settings.noPtVoicesTitle',
    descKey: 'settings.noPtVoicesDesc',
    storageKey: 'ew_ws_pt_voice',
    testText: 'Olá, como você está?',
    defaultSelect: 'google',
  },
  {
    id: 'de',
    langPrefixes: ['de'],
    nameIncludes: ['german', 'deutsch'],
    flagCode: 'de',
    titleKey: 'settings.deVoicesTitle',
    noTitleKey: 'settings.noDeVoicesTitle',
    descKey: 'settings.noDeVoicesDesc',
    storageKey: 'ew_ws_de_voice',
    testText: 'Hallo, wie geht es dir?',
    defaultSelect: 'google',
  },
  {
    id: 'he',
    langPrefixes: ['he', 'iw'],
    nameIncludes: ['hebrew', 'עברית'],
    flagCode: 'il',
    titleKey: 'settings.heVoicesTitle',
    noTitleKey: 'settings.noHeVoicesTitle',
    descKey: 'settings.noHeVoicesDesc',
    storageKey: 'ew_ws_he_voice',
    testText: 'שלום, מה נשמע?',
    defaultSelect: 'google',
  },
  {
    id: 'ar',
    langPrefixes: ['ar'],
    nameIncludes: ['arabic', 'العربية'],
    flagCode: 'sa',
    titleKey: 'settings.arVoicesTitle',
    noTitleKey: 'settings.noArVoicesTitle',
    descKey: 'settings.noArVoicesDesc',
    storageKey: 'ew_ws_ar_voice',
    testText: 'مرحبا، كيف حالك؟',
    defaultSelect: 'google',
  },
  {
    id: 'pl',
    langPrefixes: ['pl'],
    nameIncludes: ['polish', 'polski'],
    flagCode: 'pl',
    titleKey: 'settings.plVoicesTitle',
    noTitleKey: 'settings.noPlVoicesTitle',
    descKey: 'settings.noPlVoicesDesc',
    storageKey: 'ew_ws_pl_voice',
    testText: 'Cześć, jak się masz?',
    defaultSelect: 'google',
  },
  {
    id: 'zh',
    langPrefixes: ['zh', 'cmn'],
    nameIncludes: ['chinese', 'mandarin', '中文'],
    flagCode: 'cn',
    titleKey: 'settings.zhVoicesTitle',
    noTitleKey: 'settings.noZhVoicesTitle',
    descKey: 'settings.noZhVoicesDesc',
    storageKey: 'ew_ws_zh_voice',
    testText: '你好，你怎么样？',
    defaultSelect: 'google',
  },
  {
    id: 'el',
    langPrefixes: ['el'],
    nameIncludes: ['greek', 'ελληνικά'],
    flagCode: 'gr',
    titleKey: 'settings.elVoicesTitle',
    noTitleKey: 'settings.noElVoicesTitle',
    descKey: 'settings.noElVoicesDesc',
    storageKey: 'ew_ws_el_voice',
    testText: 'Γεια σου, τι κάνεις;',
    defaultSelect: 'google',
  },
  {
    id: 'ja',
    langPrefixes: ['ja'],
    nameIncludes: ['japanese', '日本語'],
    flagCode: 'jp',
    titleKey: 'settings.jaVoicesTitle',
    noTitleKey: 'settings.noJaVoicesTitle',
    descKey: 'settings.noJaVoicesDesc',
    storageKey: 'ew_ws_ja_voice',
    testText: 'こんにちは、お元気ですか？',
    defaultSelect: 'google',
  },
  {
    id: 'tr',
    langPrefixes: ['tr'],
    nameIncludes: ['turkish', 'türkçe'],
    flagCode: 'tr',
    titleKey: 'settings.trVoicesTitle',
    noTitleKey: 'settings.noTrVoicesTitle',
    descKey: 'settings.noTrVoicesDesc',
    storageKey: 'ew_ws_tr_voice',
    testText: 'Merhaba, nasılsın?',
    defaultSelect: 'google',
  },
  {
    id: 'nl',
    langPrefixes: ['nl'],
    nameIncludes: ['dutch', 'nederlands'],
    flagCode: 'nl',
    titleKey: 'settings.nlVoicesTitle',
    noTitleKey: 'settings.noNlVoicesTitle',
    descKey: 'settings.noNlVoicesDesc',
    storageKey: 'ew_ws_nl_voice',
    testText: 'Hallo, hoe gaat het?',
    defaultSelect: 'google',
  },
  {
    id: 'vi',
    langPrefixes: ['vi'],
    nameIncludes: ['vietnamese', 'tiếng việt'],
    flagCode: 'vn',
    titleKey: 'settings.viVoicesTitle',
    noTitleKey: 'settings.noViVoicesTitle',
    descKey: 'settings.noViVoicesDesc',
    storageKey: 'ew_ws_vi_voice',
    testText: 'Xin chào, bạn khỏe không?',
    defaultSelect: 'google',
  },
  {
    id: 'hi',
    langPrefixes: ['hi'],
    nameIncludes: ['hindi'],
    flagCode: 'in',
    titleKey: 'settings.hiVoicesTitle',
    noTitleKey: 'settings.noHiVoicesTitle',
    descKey: 'settings.noHiVoicesDesc',
    storageKey: 'ew_ws_hi_voice',
    testText: 'नमस्ते! आपसे मिलकर खुशी हुई।',
    defaultSelect: 'google',
  },
  {
    id: 'bn',
    langPrefixes: ['bn'],
    nameIncludes: ['bengali'],
    flagCode: 'bd',
    titleKey: 'settings.bnVoicesTitle',
    noTitleKey: 'settings.noBnVoicesTitle',
    descKey: 'settings.noBnVoicesDesc',
    storageKey: 'ew_ws_bn_voice',
    testText: 'হ্যালো! আপনার সাথে দেখা করে ভালো লাগলো।',
    defaultSelect: 'google',
  },
  {
    id: 'id',
    langPrefixes: ['id'],
    nameIncludes: ['indonesian'],
    flagCode: 'id',
    titleKey: 'settings.idVoicesTitle',
    noTitleKey: 'settings.noIdVoicesTitle',
    descKey: 'settings.noIdVoicesDesc',
    storageKey: 'ew_ws_id_voice',
    testText: 'Halo! Senang bertemu denganmu.',
    defaultSelect: 'google',
  },
  {
    id: 'pcm',
    langPrefixes: ['pcm'],
    nameIncludes: ['nigerian pidgin'],
    flagCode: 'ng',
    titleKey: 'settings.pcmVoicesTitle',
    noTitleKey: 'settings.noPcmVoicesTitle',
    descKey: 'settings.noPcmVoicesDesc',
    storageKey: 'ew_ws_pcm_voice',
    testText: 'Hello! E good to meet you.',
    defaultSelect: 'google',
  },
  {
    id: 'ko',
    langPrefixes: ['ko'],
    nameIncludes: ['korean'],
    flagCode: 'kr',
    titleKey: 'settings.koVoicesTitle',
    noTitleKey: 'settings.noKoVoicesTitle',
    descKey: 'settings.noKoVoicesDesc',
    storageKey: 'ew_ws_ko_voice',
    testText: '안녕하세요! 만나서 반갑습니다.',
    defaultSelect: 'google',
  },
  {
    id: 'fa',
    langPrefixes: ['fa'],
    nameIncludes: ['persian'],
    flagCode: 'ir',
    titleKey: 'settings.faVoicesTitle',
    noTitleKey: 'settings.noFaVoicesTitle',
    descKey: 'settings.noFaVoicesDesc',
    storageKey: 'ew_ws_fa_voice',
    testText: 'سلام! از آشنایی با شما خوشحالم.',
    defaultSelect: 'google',
  },
  {
    id: 'sw',
    langPrefixes: ['sw'],
    nameIncludes: ['swahili'],
    flagCode: 'tz',
    titleKey: 'settings.swVoicesTitle',
    noTitleKey: 'settings.noSwVoicesTitle',
    descKey: 'settings.noSwVoicesDesc',
    storageKey: 'ew_ws_sw_voice',
    testText: 'Habari! Nafurahi kukutana nawe.',
    defaultSelect: 'google',
  },
  {
    id: 'ms',
    langPrefixes: ['ms'],
    nameIncludes: ['malay'],
    flagCode: 'my',
    titleKey: 'settings.msVoicesTitle',
    noTitleKey: 'settings.noMsVoicesTitle',
    descKey: 'settings.noMsVoicesDesc',
    storageKey: 'ew_ws_ms_voice',
    testText: 'Helo! Gembira bertemu dengan awak.',
    defaultSelect: 'google',
  },
  {
    id: 'th',
    langPrefixes: ['th'],
    nameIncludes: ['thai'],
    flagCode: 'th',
    titleKey: 'settings.thVoicesTitle',
    noTitleKey: 'settings.noThVoicesTitle',
    descKey: 'settings.noThVoicesDesc',
    storageKey: 'ew_ws_th_voice',
    testText: 'สวัสดี! ยินดีที่ได้พบคุณ',
    defaultSelect: 'google',
  },
  {
    id: 'az',
    langPrefixes: ['az'],
    nameIncludes: ['azerbaijani'],
    flagCode: 'az',
    titleKey: 'settings.azVoicesTitle',
    noTitleKey: 'settings.noAzVoicesTitle',
    descKey: 'settings.noAzVoicesDesc',
    storageKey: 'ew_ws_az_voice',
    testText: 'Salam! Sizinlə tanış olmağıma şadam.',
    defaultSelect: 'google',
  },
  {
    id: 'ro',
    langPrefixes: ['ro'],
    nameIncludes: ['romanian'],
    flagCode: 'ro',
    titleKey: 'settings.roVoicesTitle',
    noTitleKey: 'settings.noRoVoicesTitle',
    descKey: 'settings.noRoVoicesDesc',
    storageKey: 'ew_ws_ro_voice',
    testText: 'Salut! Mă bucur să te cunosc.',
    defaultSelect: 'google',
  },
  {
    id: 'hu',
    langPrefixes: ['hu'],
    nameIncludes: ['hungarian'],
    flagCode: 'hu',
    titleKey: 'settings.huVoicesTitle',
    noTitleKey: 'settings.noHuVoicesTitle',
    descKey: 'settings.noHuVoicesDesc',
    storageKey: 'ew_ws_hu_voice',
    testText: 'Szia! Örülök, hogy megismertelek.',
    defaultSelect: 'google',
  },
  {
    id: 'cs',
    langPrefixes: ['cs'],
    nameIncludes: ['czech'],
    flagCode: 'cz',
    titleKey: 'settings.csVoicesTitle',
    noTitleKey: 'settings.noCsVoicesTitle',
    descKey: 'settings.noCsVoicesDesc',
    storageKey: 'ew_ws_cs_voice',
    testText: 'Ahoj! Těší mě, že tě poznávám.',
    defaultSelect: 'google',
  },
  {
    id: 'kk',
    langPrefixes: ['kk'],
    nameIncludes: ['kazakh'],
    flagCode: 'kz',
    titleKey: 'settings.kkVoicesTitle',
    noTitleKey: 'settings.noKkVoicesTitle',
    descKey: 'settings.noKkVoicesDesc',
    storageKey: 'ew_ws_kk_voice',
    testText: 'Сәлем! Танысқаныма қуаныштымын.',
    defaultSelect: 'google',
  },
  {
    id: 'sv',
    langPrefixes: ['sv'],
    nameIncludes: ['swedish'],
    flagCode: 'se',
    titleKey: 'settings.svVoicesTitle',
    noTitleKey: 'settings.noSvVoicesTitle',
    descKey: 'settings.noSvVoicesDesc',
    storageKey: 'ew_ws_sv_voice',
    testText: 'Hej! Trevligt att träffa dig.',
    defaultSelect: 'google',
  },
  {
    id: 'ka',
    langPrefixes: ['ka'],
    nameIncludes: ['georgian'],
    flagCode: 'ge',
    titleKey: 'settings.kaVoicesTitle',
    noTitleKey: 'settings.noKaVoicesTitle',
    descKey: 'settings.noKaVoicesDesc',
    storageKey: 'ew_ws_ka_voice',
    testText: 'გამარჯობა! სასიხარულოა შენი გაცნობა.',
    defaultSelect: 'google',
  },
  {
    id: 'hr',
    langPrefixes: ['hr'],
    nameIncludes: ['croatian'],
    flagCode: 'hr',
    titleKey: 'settings.hrVoicesTitle',
    noTitleKey: 'settings.noHrVoicesTitle',
    descKey: 'settings.noHrVoicesDesc',
    storageKey: 'ew_ws_hr_voice',
    testText: 'Bok! Drago mi je upoznati te.',
    defaultSelect: 'google',
  },
  {
    id: 'sr',
    langPrefixes: ['sr'],
    nameIncludes: ['serbian'],
    flagCode: 'rs',
    titleKey: 'settings.srVoicesTitle',
    noTitleKey: 'settings.noSrVoicesTitle',
    descKey: 'settings.noSrVoicesDesc',
    storageKey: 'ew_ws_sr_voice',
    testText: 'Здраво! Драго ми је што сам те упознао.',
    defaultSelect: 'google',
  },
  {
    id: 'bs',
    langPrefixes: ['bs'],
    nameIncludes: ['bosnian'],
    flagCode: 'ba',
    titleKey: 'settings.bsVoicesTitle',
    noTitleKey: 'settings.noBsVoicesTitle',
    descKey: 'settings.noBsVoicesDesc',
    storageKey: 'ew_ws_bs_voice',
    testText: 'Zdravo! Drago mi je što smo se upoznali.',
    defaultSelect: 'google',
  },
  {
    id: 'bg',
    langPrefixes: ['bg'],
    nameIncludes: ['bulgarian'],
    flagCode: 'bg',
    titleKey: 'settings.bgVoicesTitle',
    noTitleKey: 'settings.noBgVoicesTitle',
    descKey: 'settings.noBgVoicesDesc',
    storageKey: 'ew_ws_bg_voice',
    testText: 'Здравей! Приятно ми е да се запознаем.',
    defaultSelect: 'google',
  },
  {
    id: 'sk',
    langPrefixes: ['sk'],
    nameIncludes: ['slovak'],
    flagCode: 'sk',
    titleKey: 'settings.skVoicesTitle',
    noTitleKey: 'settings.noSkVoicesTitle',
    descKey: 'settings.noSkVoicesDesc',
    storageKey: 'ew_ws_sk_voice',
    testText: 'Ahoj! Teší ma, že ťa spoznávam.',
    defaultSelect: 'google',
  },
  {
    id: 'hy',
    langPrefixes: ['hy'],
    nameIncludes: ['armenian'],
    flagCode: 'am',
    titleKey: 'settings.hyVoicesTitle',
    noTitleKey: 'settings.noHyVoicesTitle',
    descKey: 'settings.noHyVoicesDesc',
    storageKey: 'ew_ws_hy_voice',
    testText: 'Բարև! Ուրախ եմ ծանոթանալ ձեզ հետ.',
    defaultSelect: 'google',
  },
  {
    id: 'da',
    langPrefixes: ['da'],
    nameIncludes: ['danish'],
    flagCode: 'dk',
    titleKey: 'settings.daVoicesTitle',
    noTitleKey: 'settings.noDaVoicesTitle',
    descKey: 'settings.noDaVoicesDesc',
    storageKey: 'ew_ws_da_voice',
    testText: 'Hej! Rart at møde dig.',
    defaultSelect: 'google',
  },
  {
    id: 'fi',
    langPrefixes: ['fi'],
    nameIncludes: ['finnish'],
    flagCode: 'fi',
    titleKey: 'settings.fiVoicesTitle',
    noTitleKey: 'settings.noFiVoicesTitle',
    descKey: 'settings.noFiVoicesDesc',
    storageKey: 'ew_ws_fi_voice',
    testText: 'Hei! Hauska tavata sinut.',
    defaultSelect: 'google',
  },
  {
    id: 'no',
    langPrefixes: ['nb'],
    nameIncludes: ['norwegian'],
    flagCode: 'no',
    titleKey: 'settings.noVoicesTitle',
    noTitleKey: 'settings.noNoVoicesTitle',
    descKey: 'settings.noNoVoicesDesc',
    storageKey: 'ew_ws_no_voice',
    testText: 'Hei! Hyggelig å møte deg.',
    defaultSelect: 'google',
  },
  {
    id: 'la',
    langPrefixes: ['la'],
    nameIncludes: ['latin'],
    flagCode: 'spqr',
    titleKey: 'settings.laVoicesTitle',
    noTitleKey: 'settings.noLaVoicesTitle',
    descKey: 'settings.noLaVoicesDesc',
    storageKey: 'ew_ws_la_voice',
    testText: 'Salve! Gratum est te cognoscere.',
    defaultSelect: 'google',
  },
  {
    id: 'lt',
    langPrefixes: ['lt'],
    nameIncludes: ['lithuanian'],
    flagCode: 'lt',
    titleKey: 'settings.ltVoicesTitle',
    noTitleKey: 'settings.noLtVoicesTitle',
    descKey: 'settings.noLtVoicesDesc',
    storageKey: 'ew_ws_lt_voice',
    testText: 'Sveiki! Malonu su jumis susipažinti.',
    defaultSelect: 'google',
  },
  {
    id: 'lv',
    langPrefixes: ['lv'],
    nameIncludes: ['latvian'],
    flagCode: 'lv',
    titleKey: 'settings.lvVoicesTitle',
    noTitleKey: 'settings.noLvVoicesTitle',
    descKey: 'settings.noLvVoicesDesc',
    storageKey: 'ew_ws_lv_voice',
    testText: 'Sveiki! Prieks iepazīties.',
    defaultSelect: 'google',
  },
  {
    id: 'et',
    langPrefixes: ['et'],
    nameIncludes: ['estonian'],
    flagCode: 'ee',
    titleKey: 'settings.etVoicesTitle',
    noTitleKey: 'settings.noEtVoicesTitle',
    descKey: 'settings.noEtVoicesDesc',
    storageKey: 'ew_ws_et_voice',
    testText: 'Tere! Meeldiv tutvuda.',
    defaultSelect: 'google',
  },
  {
    id: 'sl',
    langPrefixes: ['sl'],
    nameIncludes: ['slovenian'],
    flagCode: 'si',
    titleKey: 'settings.slVoicesTitle',
    noTitleKey: 'settings.noSlVoicesTitle',
    descKey: 'settings.noSlVoicesDesc',
    storageKey: 'ew_ws_sl_voice',
    testText: 'Živjo! Lepo, da sva se spoznala.',
    defaultSelect: 'google',
  },
  {
    id: 'mk',
    langPrefixes: ['mk'],
    nameIncludes: ['macedonian'],
    flagCode: 'mk',
    titleKey: 'settings.mkVoicesTitle',
    noTitleKey: 'settings.noMkVoicesTitle',
    descKey: 'settings.noMkVoicesDesc',
    storageKey: 'ew_ws_mk_voice',
    testText: 'Здраво! Мило ми е што те запознав.',
    defaultSelect: 'google',
  },
  {
    id: 'sq',
    langPrefixes: ['sq'],
    nameIncludes: ['albanian'],
    flagCode: 'al',
    titleKey: 'settings.sqVoicesTitle',
    noTitleKey: 'settings.noSqVoicesTitle',
    descKey: 'settings.noSqVoicesDesc',
    storageKey: 'ew_ws_sq_voice',
    testText: 'Përshëndetje! Gëzohem që të njoha.',
    defaultSelect: 'google',
  },
  {
    id: 'is',
    langPrefixes: ['is'],
    nameIncludes: ['icelandic'],
    flagCode: 'is',
    titleKey: 'settings.isVoicesTitle',
    noTitleKey: 'settings.noIsVoicesTitle',
    descKey: 'settings.noIsVoicesDesc',
    storageKey: 'ew_ws_is_voice',
    testText: 'Hæ! Gaman að kynnast þér.',
    defaultSelect: 'google',
  },
  {
    id: 'cy',
    langPrefixes: ['cy'],
    nameIncludes: ['welsh'],
    flagCode: 'wls',
    titleKey: 'settings.cyVoicesTitle',
    noTitleKey: 'settings.noCyVoicesTitle',
    descKey: 'settings.noCyVoicesDesc',
    storageKey: 'ew_ws_cy_voice',
    testText: 'Helo! Braf cwrdd â chi.',
    defaultSelect: 'google',
  },
  {
    id: 'ga',
    langPrefixes: ['ga'],
    nameIncludes: ['irish'],
    flagCode: 'ie',
    titleKey: 'settings.gaVoicesTitle',
    noTitleKey: 'settings.noGaVoicesTitle',
    descKey: 'settings.noGaVoicesDesc',
    storageKey: 'ew_ws_ga_voice',
    testText: 'Dia duit! Tá áthas orm bualadh leat.',
    defaultSelect: 'google',
  },
  {
    id: 'tl',
    langPrefixes: ['tl', 'fil'],
    nameIncludes: ['filipino', 'tagalog'],
    flagCode: 'ph',
    titleKey: 'settings.tlVoicesTitle',
    noTitleKey: 'settings.noTlVoicesTitle',
    descKey: 'settings.noTlVoicesDesc',
    storageKey: 'ew_ws_tl_voice',
    testText: 'Kamusta! Ikinagagalak kitang makilala.',
    defaultSelect: 'google',
  },
  {
    id: 'mn',
    langPrefixes: ['mn'],
    nameIncludes: ['mongolian'],
    flagCode: 'mn',
    titleKey: 'settings.mnVoicesTitle',
    noTitleKey: 'settings.noMnVoicesTitle',
    descKey: 'settings.noMnVoicesDesc',
    storageKey: 'ew_ws_mn_voice',
    testText: 'Сайн байна уу! Танилцаж сайхан байна.',
    defaultSelect: 'google',
  },
  {
    id: 'uz',
    langPrefixes: ['uz'],
    nameIncludes: ['uzbek'],
    flagCode: 'uz',
    titleKey: 'settings.uzVoicesTitle',
    noTitleKey: 'settings.noUzVoicesTitle',
    descKey: 'settings.noUzVoicesDesc',
    storageKey: 'ew_ws_uz_voice',
    testText: 'Salom! Siz bilan tanishganimdan xursandman.',
    defaultSelect: 'google',
  },
  {
    id: 'am',
    langPrefixes: ['am'],
    nameIncludes: ['amharic'],
    flagCode: 'et',
    titleKey: 'settings.amVoicesTitle',
    noTitleKey: 'settings.noAmVoicesTitle',
    descKey: 'settings.noAmVoicesDesc',
    storageKey: 'ew_ws_am_voice',
    testText: 'ሰላም! በመተዋወቃችን ደስ ብሎኛል።',
    defaultSelect: 'google',
  },
  {
    id: 'eo',
    langPrefixes: ['eo'],
    nameIncludes: ['esperanto'],
    flagCode: 'eo',
    titleKey: 'settings.eoVoicesTitle',
    noTitleKey: null,
    descKey: null,
    storageKey: 'ew_ws_eo_voice',
    testText: 'Saluton! Mi ĝojas vin renkonti.',
    defaultSelect: 'google',
  },
  {
    id: 'ta',
    langPrefixes: ['ta'],
    nameIncludes: ['tamil'],
    flagCode: 'in',
    titleKey: 'settings.taVoicesTitle',
    noTitleKey: 'settings.noTaVoicesTitle',
    descKey: 'settings.noTaVoicesDesc',
    storageKey: 'ew_ws_ta_voice',
    testText: 'Hello!',
    defaultSelect: 'google',
  },
  {
    id: 'pa',
    langPrefixes: ['pa'],
    nameIncludes: ['punjabi'],
    flagCode: 'in',
    titleKey: 'settings.paVoicesTitle',
    noTitleKey: 'settings.noPaVoicesTitle',
    descKey: 'settings.noPaVoicesDesc',
    storageKey: 'ew_ws_pa_voice',
    testText: 'Hello!',
    defaultSelect: 'google',
  },
  {
    id: 'zu',
    langPrefixes: ['zu'],
    nameIncludes: ['zulu'],
    flagCode: 'za',
    titleKey: 'settings.zuVoicesTitle',
    noTitleKey: 'settings.noZuVoicesTitle',
    descKey: 'settings.noZuVoicesDesc',
    storageKey: 'ew_ws_zu_voice',
    testText: 'Hello!',
    defaultSelect: 'google',
  },
  {
    id: 'af',
    langPrefixes: ['af'],
    nameIncludes: ['afrikaans'],
    flagCode: 'za',
    titleKey: 'settings.afVoicesTitle',
    noTitleKey: 'settings.noAfVoicesTitle',
    descKey: 'settings.noAfVoicesDesc',
    storageKey: 'ew_ws_af_voice',
    testText: 'Hello!',
    defaultSelect: 'google',
  },
  {
    id: 'ky',
    langPrefixes: ['ky'],
    nameIncludes: ['kyrgyz'],
    flagCode: 'kg',
    titleKey: 'settings.kyVoicesTitle',
    noTitleKey: 'settings.noKyVoicesTitle',
    descKey: 'settings.noKyVoicesDesc',
    storageKey: 'ew_ws_ky_voice',
    testText: 'Hello!',
    defaultSelect: 'google',
  },
  {
    id: 'tg',
    langPrefixes: ['tg'],
    nameIncludes: ['tajik'],
    flagCode: 'tj',
    titleKey: 'settings.tgVoicesTitle',
    noTitleKey: 'settings.noTgVoicesTitle',
    descKey: 'settings.noTgVoicesDesc',
    storageKey: 'ew_ws_tg_voice',
    testText: 'Hello!',
    defaultSelect: 'google',
  },
  {
    id: 'tk',
    langPrefixes: ['tk'],
    nameIncludes: ['turkmen'],
    flagCode: 'tm',
    titleKey: 'settings.tkVoicesTitle',
    noTitleKey: 'settings.noTkVoicesTitle',
    descKey: 'settings.noTkVoicesDesc',
    storageKey: 'ew_ws_tk_voice',
    testText: 'Hello!',
    defaultSelect: 'google',
  },
  {
    id: 'ug',
    langPrefixes: ['ug'],
    nameIncludes: ['uyghur'],
    flagCode: 'cn',
    titleKey: 'settings.ugVoicesTitle',
    noTitleKey: 'settings.noUgVoicesTitle',
    descKey: 'settings.noUgVoicesDesc',
    storageKey: 'ew_ws_ug_voice',
    testText: 'Hello!',
    defaultSelect: 'google',
  },
  {
    id: 'eu',
    langPrefixes: ['eu'],
    nameIncludes: ['basque'],
    flagCode: 'eu',
    titleKey: 'settings.euVoicesTitle',
    noTitleKey: 'settings.noEuVoicesTitle',
    descKey: 'settings.noEuVoicesDesc',
    storageKey: 'ew_ws_eu_voice',
    testText: 'Hello!',
    defaultSelect: 'google',
  },
  {
    id: 'ca',
    langPrefixes: ['ca'],
    nameIncludes: ['catalan'],
    flagCode: 'cat',
    titleKey: 'settings.caVoicesTitle',
    noTitleKey: 'settings.noCaVoicesTitle',
    descKey: 'settings.noCaVoicesDesc',
    storageKey: 'ew_ws_ca_voice',
    testText: 'Hello!',
    defaultSelect: 'google',
  },
  {
    id: 'gl',
    langPrefixes: ['gl'],
    nameIncludes: ['galician'],
    flagCode: 'gal',
    titleKey: 'settings.glVoicesTitle',
    noTitleKey: 'settings.noGlVoicesTitle',
    descKey: 'settings.noGlVoicesDesc',
    storageKey: 'ew_ws_gl_voice',
    testText: 'Hello!',
    defaultSelect: 'google',
  },
  {
    id: 'mt',
    langPrefixes: ['mt'],
    nameIncludes: ['maltese'],
    flagCode: 'mt',
    titleKey: 'settings.mtVoicesTitle',
    noTitleKey: 'settings.noMtVoicesTitle',
    descKey: 'settings.noMtVoicesDesc',
    storageKey: 'ew_ws_mt_voice',
    testText: 'Hello!',
    defaultSelect: 'google',
  },
  {
    id: 'lb',
    langPrefixes: ['lb'],
    nameIncludes: ['luxembourgish'],
    flagCode: 'lu',
    titleKey: 'settings.lbVoicesTitle',
    noTitleKey: 'settings.noLbVoicesTitle',
    descKey: 'settings.noLbVoicesDesc',
    storageKey: 'ew_ws_lb_voice',
    testText: 'Hello!',
    defaultSelect: 'google',
  },
  {
    id: 'ht',
    langPrefixes: ['ht'],
    nameIncludes: ['haitian creole'],
    flagCode: 'ht',
    titleKey: 'settings.htVoicesTitle',
    noTitleKey: 'settings.noHtVoicesTitle',
    descKey: 'settings.noHtVoicesDesc',
    storageKey: 'ew_ws_ht_voice',
    testText: 'Hello!',
    defaultSelect: 'google',
  },
  {
    id: 'bo',
    langPrefixes: ['bo'],
    nameIncludes: ['tibetan'],
    flagCode: 'cn',
    titleKey: 'settings.boVoicesTitle',
    noTitleKey: 'settings.noBoVoicesTitle',
    descKey: 'settings.noBoVoicesDesc',
    storageKey: 'ew_ws_bo_voice',
    testText: 'Hello!',
    defaultSelect: 'google',
  },
  {
    id: 'my',
    langPrefixes: ['my'],
    nameIncludes: ['burmese'],
    flagCode: 'mm',
    titleKey: 'settings.myVoicesTitle',
    noTitleKey: 'settings.noMyVoicesTitle',
    descKey: 'settings.noMyVoicesDesc',
    storageKey: 'ew_ws_my_voice',
    testText: 'Hello!',
    defaultSelect: 'google',
  },
  {
    id: 'km',
    langPrefixes: ['km'],
    nameIncludes: ['khmer'],
    flagCode: 'kh',
    titleKey: 'settings.kmVoicesTitle',
    noTitleKey: 'settings.noKmVoicesTitle',
    descKey: 'settings.noKmVoicesDesc',
    storageKey: 'ew_ws_km_voice',
    testText: 'Hello!',
    defaultSelect: 'google',
  },
  {
    id: 'lo',
    langPrefixes: ['lo'],
    nameIncludes: ['lao'],
    flagCode: 'la',
    titleKey: 'settings.loVoicesTitle',
    noTitleKey: 'settings.noLoVoicesTitle',
    descKey: 'settings.noLoVoicesDesc',
    storageKey: 'ew_ws_lo_voice',
    testText: 'Hello!',
    defaultSelect: 'google',
  },
  {
    id: 'ne',
    langPrefixes: ['ne'],
    nameIncludes: ['nepali'],
    flagCode: 'np',
    titleKey: 'settings.neVoicesTitle',
    noTitleKey: 'settings.noNeVoicesTitle',
    descKey: 'settings.noNeVoicesDesc',
    storageKey: 'ew_ws_ne_voice',
    testText: 'Hello!',
    defaultSelect: 'google',
  },
  {
    id: 'si',
    langPrefixes: ['si'],
    nameIncludes: ['sinhala'],
    flagCode: 'lk',
    titleKey: 'settings.siVoicesTitle',
    noTitleKey: 'settings.noSiVoicesTitle',
    descKey: 'settings.noSiVoicesDesc',
    storageKey: 'ew_ws_si_voice',
    testText: 'Hello!',
    defaultSelect: 'google',
  },
  {
    id: 'ur',
    langPrefixes: ['ur'],
    nameIncludes: ['urdu'],
    flagCode: 'pk',
    titleKey: 'settings.urVoicesTitle',
    noTitleKey: 'settings.noUrVoicesTitle',
    descKey: 'settings.noUrVoicesDesc',
    storageKey: 'ew_ws_ur_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'te',
    langPrefixes: ['te'],
    nameIncludes: ['telugu'],
    flagCode: 'in',
    titleKey: 'settings.teVoicesTitle',
    noTitleKey: 'settings.noTeVoicesTitle',
    descKey: 'settings.noTeVoicesDesc',
    storageKey: 'ew_ws_te_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'ml',
    langPrefixes: ['ml'],
    nameIncludes: ['malayalam'],
    flagCode: 'in',
    titleKey: 'settings.mlVoicesTitle',
    noTitleKey: 'settings.noMlVoicesTitle',
    descKey: 'settings.noMlVoicesDesc',
    storageKey: 'ew_ws_ml_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'kn',
    langPrefixes: ['kn'],
    nameIncludes: ['kannada'],
    flagCode: 'in',
    titleKey: 'settings.knVoicesTitle',
    noTitleKey: 'settings.noKnVoicesTitle',
    descKey: 'settings.noKnVoicesDesc',
    storageKey: 'ew_ws_kn_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'mr',
    langPrefixes: ['mr'],
    nameIncludes: ['marathi'],
    flagCode: 'in',
    titleKey: 'settings.mrVoicesTitle',
    noTitleKey: 'settings.noMrVoicesTitle',
    descKey: 'settings.noMrVoicesDesc',
    storageKey: 'ew_ws_mr_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'gu',
    langPrefixes: ['gu'],
    nameIncludes: ['gujarati'],
    flagCode: 'in',
    titleKey: 'settings.guVoicesTitle',
    noTitleKey: 'settings.noGuVoicesTitle',
    descKey: 'settings.noGuVoicesDesc',
    storageKey: 'ew_ws_gu_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'or',
    langPrefixes: ['or'],
    nameIncludes: ['odia'],
    flagCode: 'in',
    titleKey: 'settings.orVoicesTitle',
    noTitleKey: 'settings.noOrVoicesTitle',
    descKey: 'settings.noOrVoicesDesc',
    storageKey: 'ew_ws_or_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'as',
    langPrefixes: ['as'],
    nameIncludes: ['assamese'],
    flagCode: 'in',
    titleKey: 'settings.asVoicesTitle',
    noTitleKey: 'settings.noAsVoicesTitle',
    descKey: 'settings.noAsVoicesDesc',
    storageKey: 'ew_ws_as_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'sd',
    langPrefixes: ['sd'],
    nameIncludes: ['sindhi'],
    flagCode: 'pk',
    titleKey: 'settings.sdVoicesTitle',
    noTitleKey: 'settings.noSdVoicesTitle',
    descKey: 'settings.noSdVoicesDesc',
    storageKey: 'ew_ws_sd_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'ps',
    langPrefixes: ['ps'],
    nameIncludes: ['pashto'],
    flagCode: 'af',
    titleKey: 'settings.psVoicesTitle',
    noTitleKey: 'settings.noPsVoicesTitle',
    descKey: 'settings.noPsVoicesDesc',
    storageKey: 'ew_ws_ps_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'so',
    langPrefixes: ['so'],
    nameIncludes: ['somali'],
    flagCode: 'so',
    titleKey: 'settings.soVoicesTitle',
    noTitleKey: 'settings.noSoVoicesTitle',
    descKey: 'settings.noSoVoicesDesc',
    storageKey: 'ew_ws_so_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'ha',
    langPrefixes: ['ha'],
    nameIncludes: ['hausa'],
    flagCode: 'ng',
    titleKey: 'settings.haVoicesTitle',
    noTitleKey: 'settings.noHaVoicesTitle',
    descKey: 'settings.noHaVoicesDesc',
    storageKey: 'ew_ws_ha_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'yo',
    langPrefixes: ['yo'],
    nameIncludes: ['yoruba'],
    flagCode: 'ng',
    titleKey: 'settings.yoVoicesTitle',
    noTitleKey: 'settings.noYoVoicesTitle',
    descKey: 'settings.noYoVoicesDesc',
    storageKey: 'ew_ws_yo_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'ig',
    langPrefixes: ['ig'],
    nameIncludes: ['igbo'],
    flagCode: 'ng',
    titleKey: 'settings.igVoicesTitle',
    noTitleKey: 'settings.noIgVoicesTitle',
    descKey: 'settings.noIgVoicesDesc',
    storageKey: 'ew_ws_ig_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'ti',
    langPrefixes: ['ti'],
    nameIncludes: ['tigrinya'],
    flagCode: 'er',
    titleKey: 'settings.tiVoicesTitle',
    noTitleKey: 'settings.noTiVoicesTitle',
    descKey: 'settings.noTiVoicesDesc',
    storageKey: 'ew_ws_ti_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'wo',
    langPrefixes: ['wo'],
    nameIncludes: ['wolof'],
    flagCode: 'sn',
    titleKey: 'settings.woVoicesTitle',
    noTitleKey: 'settings.noWoVoicesTitle',
    descKey: 'settings.noWoVoicesDesc',
    storageKey: 'ew_ws_wo_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'mg',
    langPrefixes: ['mg'],
    nameIncludes: ['malagasy'],
    flagCode: 'mg',
    titleKey: 'settings.mgVoicesTitle',
    noTitleKey: 'settings.noMgVoicesTitle',
    descKey: 'settings.noMgVoicesDesc',
    storageKey: 'ew_ws_mg_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'xh',
    langPrefixes: ['xh'],
    nameIncludes: ['xhosa'],
    flagCode: 'za',
    titleKey: 'settings.xhVoicesTitle',
    noTitleKey: 'settings.noXhVoicesTitle',
    descKey: 'settings.noXhVoicesDesc',
    storageKey: 'ew_ws_xh_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'sn',
    langPrefixes: ['sn'],
    nameIncludes: ['shona'],
    flagCode: 'zw',
    titleKey: 'settings.snVoicesTitle',
    noTitleKey: 'settings.noSnVoicesTitle',
    descKey: 'settings.noSnVoicesDesc',
    storageKey: 'ew_ws_sn_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'ny',
    langPrefixes: ['ny'],
    nameIncludes: ['chewa'],
    flagCode: 'mw',
    titleKey: 'settings.nyVoicesTitle',
    noTitleKey: 'settings.noNyVoicesTitle',
    descKey: 'settings.noNyVoicesDesc',
    storageKey: 'ew_ws_ny_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'fj',
    langPrefixes: ['fj'],
    nameIncludes: ['fijian'],
    flagCode: 'fj',
    titleKey: 'settings.fjVoicesTitle',
    noTitleKey: 'settings.noFjVoicesTitle',
    descKey: 'settings.noFjVoicesDesc',
    storageKey: 'ew_ws_fj_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'sm',
    langPrefixes: ['sm'],
    nameIncludes: ['samoan'],
    flagCode: 'ws',
    titleKey: 'settings.smVoicesTitle',
    noTitleKey: 'settings.noSmVoicesTitle',
    descKey: 'settings.noSmVoicesDesc',
    storageKey: 'ew_ws_sm_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'to',
    langPrefixes: ['to'],
    nameIncludes: ['tongan'],
    flagCode: 'to',
    titleKey: 'settings.toVoicesTitle',
    noTitleKey: 'settings.noToVoicesTitle',
    descKey: 'settings.noToVoicesDesc',
    storageKey: 'ew_ws_to_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'mi',
    langPrefixes: ['mi'],
    nameIncludes: ['maori'],
    flagCode: 'nz',
    titleKey: 'settings.miVoicesTitle',
    noTitleKey: 'settings.noMiVoicesTitle',
    descKey: 'settings.noMiVoicesDesc',
    storageKey: 'ew_ws_mi_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'haw',
    langPrefixes: ['haw'],
    nameIncludes: ['hawaiian'],
    flagCode: 'us',
    titleKey: 'settings.hawVoicesTitle',
    noTitleKey: 'settings.noHawVoicesTitle',
    descKey: 'settings.noHawVoicesDesc',
    storageKey: 'ew_ws_haw_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'jv',
    langPrefixes: ['jv'],
    nameIncludes: ['javanese'],
    flagCode: 'id',
    titleKey: 'settings.jvVoicesTitle',
    noTitleKey: 'settings.noJvVoicesTitle',
    descKey: 'settings.noJvVoicesDesc',
    storageKey: 'ew_ws_jv_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'su',
    langPrefixes: ['su'],
    nameIncludes: ['sundanese'],
    flagCode: 'id',
    titleKey: 'settings.suVoicesTitle',
    noTitleKey: 'settings.noSuVoicesTitle',
    descKey: 'settings.noSuVoicesDesc',
    storageKey: 'ew_ws_su_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'gd',
    langPrefixes: ['gd'],
    nameIncludes: ['scottish gaelic'],
    flagCode: 'sct',
    titleKey: 'settings.gdVoicesTitle',
    noTitleKey: 'settings.noGdVoicesTitle',
    descKey: 'settings.noGdVoicesDesc',
    storageKey: 'ew_ws_gd_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'br',
    langPrefixes: ['br'],
    nameIncludes: ['breton'],
    flagCode: 'fr',
    titleKey: 'settings.brVoicesTitle',
    noTitleKey: 'settings.noBrVoicesTitle',
    descKey: 'settings.noBrVoicesDesc',
    storageKey: 'ew_ws_br_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'kw',
    langPrefixes: ['kw'],
    nameIncludes: ['cornish'],
    flagCode: 'corn',
    titleKey: 'settings.kwVoicesTitle',
    noTitleKey: 'settings.noKwVoicesTitle',
    descKey: 'settings.noKwVoicesDesc',
    storageKey: 'ew_ws_kw_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'gv',
    langPrefixes: ['gv'],
    nameIncludes: ['manx'],
    flagCode: 'gb',
    titleKey: 'settings.gvVoicesTitle',
    noTitleKey: 'settings.noGvVoicesTitle',
    descKey: 'settings.noGvVoicesDesc',
    storageKey: 'ew_ws_gv_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'fo',
    langPrefixes: ['fo'],
    nameIncludes: ['faroese'],
    flagCode: 'fo',
    titleKey: 'settings.foVoicesTitle',
    noTitleKey: 'settings.noFoVoicesTitle',
    descKey: 'settings.noFoVoicesDesc',
    storageKey: 'ew_ws_fo_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'oc',
    langPrefixes: ['oc'],
    nameIncludes: ['occitan'],
    flagCode: 'fr',
    titleKey: 'settings.ocVoicesTitle',
    noTitleKey: 'settings.noOcVoicesTitle',
    descKey: 'settings.noOcVoicesDesc',
    storageKey: 'ew_ws_oc_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'co',
    langPrefixes: ['co'],
    nameIncludes: ['corsican'],
    flagCode: 'fr',
    titleKey: 'settings.coVoicesTitle',
    noTitleKey: 'settings.noCoVoicesTitle',
    descKey: 'settings.noCoVoicesDesc',
    storageKey: 'ew_ws_co_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'sc',
    langPrefixes: ['sc'],
    nameIncludes: ['sardinian'],
    flagCode: 'it',
    titleKey: 'settings.scVoicesTitle',
    noTitleKey: 'settings.noScVoicesTitle',
    descKey: 'settings.noScVoicesDesc',
    storageKey: 'ew_ws_sc_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'fy',
    langPrefixes: ['fy'],
    nameIncludes: ['frisian'],
    flagCode: 'nl',
    titleKey: 'settings.fyVoicesTitle',
    noTitleKey: 'settings.noFyVoicesTitle',
    descKey: 'settings.noFyVoicesDesc',
    storageKey: 'ew_ws_fy_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'yi',
    langPrefixes: ['yi'],
    nameIncludes: ['yiddish'],
    flagCode: 'il',
    titleKey: 'settings.yiVoicesTitle',
    noTitleKey: 'settings.noYiVoicesTitle',
    descKey: 'settings.noYiVoicesDesc',
    storageKey: 'ew_ws_yi_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'lad',
    langPrefixes: ['lad'],
    nameIncludes: ['ladino'],
    flagCode: 'es',
    titleKey: 'settings.ladVoicesTitle',
    noTitleKey: 'settings.noLadVoicesTitle',
    descKey: 'settings.noLadVoicesDesc',
    storageKey: 'ew_ws_lad_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'qu',
    langPrefixes: ['qu'],
    nameIncludes: ['quechua'],
    flagCode: 'pe',
    titleKey: 'settings.quVoicesTitle',
    noTitleKey: 'settings.noQuVoicesTitle',
    descKey: 'settings.noQuVoicesDesc',
    storageKey: 'ew_ws_qu_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'gn',
    langPrefixes: ['gn'],
    nameIncludes: ['guarani'],
    flagCode: 'py',
    titleKey: 'settings.gnVoicesTitle',
    noTitleKey: 'settings.noGnVoicesTitle',
    descKey: 'settings.noGnVoicesDesc',
    storageKey: 'ew_ws_gn_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'ay',
    langPrefixes: ['ay'],
    nameIncludes: ['aymara'],
    flagCode: 'bo',
    titleKey: 'settings.ayVoicesTitle',
    noTitleKey: 'settings.noAyVoicesTitle',
    descKey: 'settings.noAyVoicesDesc',
    storageKey: 'ew_ws_ay_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'dz',
    langPrefixes: ['dz'],
    nameIncludes: ['dzongkha'],
    flagCode: 'bt',
    titleKey: 'settings.dzVoicesTitle',
    noTitleKey: 'settings.noDzVoicesTitle',
    descKey: 'settings.noDzVoicesDesc',
    storageKey: 'ew_ws_dz_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'dv',
    langPrefixes: ['dv'],
    nameIncludes: ['maldivian'],
    flagCode: 'mv',
    titleKey: 'settings.dvVoicesTitle',
    noTitleKey: 'settings.noDvVoicesTitle',
    descKey: 'settings.noDvVoicesDesc',
    storageKey: 'ew_ws_dv_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'tet',
    langPrefixes: ['tet'],
    nameIncludes: ['tetum'],
    flagCode: 'tl',
    titleKey: 'settings.tetVoicesTitle',
    noTitleKey: 'settings.noTetVoicesTitle',
    descKey: 'settings.noTetVoicesDesc',
    storageKey: 'ew_ws_tet_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'be',
    langPrefixes: ['be'],
    nameIncludes: ['belarusian'],
    flagCode: 'by',
    titleKey: 'settings.beVoicesTitle',
    noTitleKey: 'settings.noBeVoicesTitle',
    descKey: 'settings.noBeVoicesDesc',
    storageKey: 'ew_ws_be_voice',
    testText: 'Hello!',
    defaultSelect: null,
  },
  {
    id: 'qya',
    langPrefixes: ['fi'],
    nameIncludes: ['finnish'],
    flagCode: 'qya',
    titleKey: 'settings.qyaVoicesTitle',
    noTitleKey: 'settings.noQyaVoicesTitle',
    descKey: 'settings.noQyaVoicesDesc',
    storageKey: 'ew_ws_qya_voice',
    testText: "Elen síla lúmenn' omentielvo.",
    defaultSelect: null,
  },
  {
    id: 'sjn',
    langPrefixes: ['cy'],
    nameIncludes: ['welsh'],
    flagCode: 'sjn',
    titleKey: 'settings.sjnVoicesTitle',
    noTitleKey: 'settings.noSjnVoicesTitle',
    descKey: 'settings.noSjnVoicesDesc',
    storageKey: 'ew_ws_sjn_voice',
    testText: 'Mae govannen.',
    defaultSelect: null,
  },
  {
    id: 'ku',
    langPrefixes: ['ku'],
    nameIncludes: ['kurdish'],
    flagCode: 'ku',
    titleKey: 'settings.kuVoicesTitle',
    noTitleKey: 'settings.noKuVoicesTitle',
    descKey: 'settings.noKuVoicesDesc',
    storageKey: 'ew_ws_ku_voice',
    testText: 'Silav!',
    defaultSelect: null,
  },
  {
    id: 'om',
    langPrefixes: ['om'],
    nameIncludes: ['oromo'],
    flagCode: 'et',
    titleKey: 'settings.omVoicesTitle',
    noTitleKey: 'settings.noOmVoicesTitle',
    descKey: 'settings.noOmVoicesDesc',
    storageKey: 'ew_ws_om_voice',
    testText: 'Akkam?',
    defaultSelect: null,
  },
  {
    id: 'ln',
    langPrefixes: ['ln'],
    nameIncludes: ['lingala'],
    flagCode: 'cd',
    titleKey: 'settings.lnVoicesTitle',
    noTitleKey: 'settings.noLnVoicesTitle',
    descKey: 'settings.noLnVoicesDesc',
    storageKey: 'ew_ws_ln_voice',
    testText: 'Mbote!',
    defaultSelect: null,
  },
  {
    id: 'bho',
    langPrefixes: ['bho'],
    nameIncludes: ['bhojpuri'],
    flagCode: 'in',
    titleKey: 'settings.bhoVoicesTitle',
    noTitleKey: 'settings.noBhoVoicesTitle',
    descKey: 'settings.noBhoVoicesDesc',
    storageKey: 'ew_ws_bho_voice',
    testText: 'प्रणाम!',
    defaultSelect: null,
  },
  {
    id: 'ceb',
    langPrefixes: ['ceb'],
    nameIncludes: ['cebuano'],
    flagCode: 'ph',
    titleKey: 'settings.cebVoicesTitle',
    noTitleKey: 'settings.noCebVoicesTitle',
    descKey: 'settings.noCebVoicesDesc',
    storageKey: 'ew_ws_ceb_voice',
    testText: 'Kumusta!',
    defaultSelect: null,
  },
  {
    id: 'rm',
    langPrefixes: ['rm'],
    nameIncludes: ['romansh'],
    flagCode: 'ch',
    titleKey: 'settings.rmVoicesTitle',
    noTitleKey: 'settings.noRmVoicesTitle',
    descKey: 'settings.noRmVoicesDesc',
    storageKey: 'ew_ws_rm_voice',
    testText: 'Allegra!',
    defaultSelect: null,
  },
  {
    id: 'ty',
    langPrefixes: ['ty'],
    nameIncludes: ['tahitian'],
    flagCode: 'pf',
    titleKey: 'settings.tyVoicesTitle',
    noTitleKey: 'settings.noTyVoicesTitle',
    descKey: 'settings.noTyVoicesDesc',
    storageKey: 'ew_ws_ty_voice',
    testText: 'Ia ora na!',
    defaultSelect: null,
  },
  {
    id: 'ch',
    langPrefixes: ['ch'],
    nameIncludes: ['chamorro'],
    flagCode: 'gu',
    titleKey: 'settings.chVoicesTitle',
    noTitleKey: 'settings.noChVoicesTitle',
    descKey: 'settings.noChVoicesDesc',
    storageKey: 'ew_ws_ch_voice',
    testText: 'Håfa adai!',
    defaultSelect: null,
  },
  {
    id: 'mh',
    langPrefixes: ['mh'],
    nameIncludes: ['marshallese'],
    flagCode: 'mh',
    titleKey: 'settings.mhVoicesTitle',
    noTitleKey: 'settings.noMhVoicesTitle',
    descKey: 'settings.noMhVoicesDesc',
    storageKey: 'ew_ws_mh_voice',
    testText: 'Yokwe!',
    defaultSelect: null,
  },
  {
    id: 'pau',
    langPrefixes: ['pau'],
    nameIncludes: ['palauan'],
    flagCode: 'pw',
    titleKey: 'settings.pauVoicesTitle',
    noTitleKey: 'settings.noPauVoicesTitle',
    descKey: 'settings.noPauVoicesDesc',
    storageKey: 'ew_ws_pau_voice',
    testText: 'Alii!',
    defaultSelect: null,
  },
  {
    id: 'nah',
    langPrefixes: ['nah'],
    nameIncludes: ['nahuatl'],
    flagCode: 'mx',
    titleKey: 'settings.nahVoicesTitle',
    noTitleKey: 'settings.noNahVoicesTitle',
    descKey: 'settings.noNahVoicesDesc',
    storageKey: 'ew_ws_nah_voice',
    testText: 'Niltze!',
    defaultSelect: null,
  },
  {
    id: 'nv',
    langPrefixes: ['nv'],
    nameIncludes: ['navajo'],
    flagCode: 'us',
    titleKey: 'settings.nvVoicesTitle',
    noTitleKey: 'settings.noNvVoicesTitle',
    descKey: 'settings.noNvVoicesDesc',
    storageKey: 'ew_ws_nv_voice',
    testText: "Yá'át'ééh!",
    defaultSelect: null,
  },
  {
    id: 'tlh',
    langPrefixes: ['tlh'],
    nameIncludes: ['klingon'],
    flagCode: 'tlh',
    titleKey: 'settings.tlhVoicesTitle',
    noTitleKey: 'settings.noTlhVoicesTitle',
    descKey: 'settings.noTlhVoicesDesc',
    storageKey: 'ew_ws_tlh_voice',
    testText: 'nuqneH!',
    defaultSelect: null,
  },
  {
    id: 'val',
    langPrefixes: ['val'],
    nameIncludes: ['valyrian'],
    flagCode: 'val',
    titleKey: 'settings.valVoicesTitle',
    noTitleKey: 'settings.noValVoicesTitle',
    descKey: 'settings.noValVoicesDesc',
    storageKey: 'ew_ws_val_voice',
    testText: 'Rytsas!',
    defaultSelect: null,
  },
  {
    id: 'dth',
    langPrefixes: ['dth'],
    nameIncludes: ['dothraki'],
    flagCode: 'dth',
    titleKey: 'settings.dthVoicesTitle',
    noTitleKey: 'settings.noDthVoicesTitle',
    descKey: 'settings.noDthVoicesDesc',
    storageKey: 'ew_ws_dth_voice',
    testText: "M'athchomaroon!",
    defaultSelect: null,
  },
];

const LANG_VOICE_CONFIG_BY_ID: Map<string, LangVoiceConfig> = new Map(
  LANG_VOICE_CONFIG.map((c) => [c.id, c]),
);

const _uriState: Record<string, string> = Object.fromEntries(
  LANG_VOICE_CONFIG.map((c) => [c.id, localStorage.getItem(c.storageKey) ?? '']),
);

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
  if (l.startsWith('vi')) return 'VN';
  if (l.startsWith('hi')) return 'IN';
  if (l.startsWith('bn')) return 'BD';
  if (l.startsWith('id')) return 'ID';
  if (l.startsWith('pcm')) return 'NG';
  if (l.startsWith('ko')) return 'KR';
  if (l.startsWith('fa')) return 'IR';
  if (l.startsWith('sw')) return 'TZ';
  if (l.startsWith('ms')) return 'MY';
  if (l.startsWith('th')) return 'TH';
  if (l.startsWith('az')) return 'AZ';
  if (l.startsWith('ro')) return 'RO';
  if (l.startsWith('hu')) return 'HU';
  if (l.startsWith('cs')) return 'CZ';
  if (l.startsWith('kk')) return 'KZ';
  if (l.startsWith('sv')) return 'SE';
  if (l.startsWith('ka')) return 'GE';
  if (l.startsWith('hr')) return 'HR';
  if (l.startsWith('sr')) return 'RS';
  if (l.startsWith('bs')) return 'BA';
  if (l.startsWith('bg')) return 'BG';
  if (l.startsWith('sk')) return 'SK';
  if (l.startsWith('hy')) return 'AM';
  if (l.startsWith('da')) return 'DK';
  if (l.startsWith('fi')) return 'FI';
  if (l.startsWith('nb')) return 'NO';
  return '🌐';
}

function _allVoices(): SpeechSynthesisVoice[] {
  return window.speechSynthesis?.getVoices() ?? [];
}
function _enVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => v.lang?.toLowerCase().startsWith('en'));
}

function _voicesForLang(cfg: LangVoiceConfig): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return (
      cfg.langPrefixes.some((p) => l.startsWith(p)) || cfg.nameIncludes.some((s) => n.includes(s))
    );
  });
}

function _findByURI(uri: string, voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  return voices.find((v) => v.voiceURI === uri) ?? null;
}

function _getSelectedVoiceById(id: string): SpeechSynthesisVoice | null {
  const cfg = LANG_VOICE_CONFIG_BY_ID.get(id)!;
  const voices = _voicesForLang(cfg);
  return _findByURI(_uriState[id], voices) ?? voices[0] ?? null;
}

export function getSelectedUkVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('uk');
}
export function getSelectedEsVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('es');
}
export function getSelectedFrVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('fr');
}
export function getSelectedItVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('it');
}
export function getSelectedPtVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('pt');
}
export function getSelectedDeVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('de');
}
export function getSelectedHeVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('he');
}
export function getSelectedArVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('ar');
}
export function getSelectedPlVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('pl');
}
export function getSelectedZhVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('zh');
}
export function getSelectedElVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('el');
}
export function getSelectedJaVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('ja');
}
export function getSelectedTrVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('tr');
}
export function getSelectedNlVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('nl');
}
export function getSelectedViVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('vi');
}
export function getSelectedHiVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('hi');
}
export function getSelectedBnVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('bn');
}
export function getSelectedIdVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('id');
}
export function getSelectedPcmVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('pcm');
}
export function getSelectedKoVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('ko');
}
export function getSelectedFaVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('fa');
}
export function getSelectedSwVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('sw');
}
export function getSelectedMsVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('ms');
}
export function getSelectedThVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('th');
}
export function getSelectedAzVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('az');
}
export function getSelectedRoVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('ro');
}
export function getSelectedHuVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('hu');
}
export function getSelectedCsVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('cs');
}
export function getSelectedKkVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('kk');
}
export function getSelectedSvVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('sv');
}
export function getSelectedKaVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('ka');
}
export function getSelectedHrVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('hr');
}
export function getSelectedSrVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('sr');
}
export function getSelectedBsVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('bs');
}
export function getSelectedBgVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('bg');
}
export function getSelectedSkVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('sk');
}
export function getSelectedHyVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('hy');
}
export function getSelectedDaVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('da');
}
export function getSelectedFiVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('fi');
}
export function getSelectedNoVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('no');
}
export function getSelectedLaVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('la');
}
export function getSelectedLtVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('lt');
}
export function getSelectedLvVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('lv');
}
export function getSelectedEtVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('et');
}
export function getSelectedSlVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('sl');
}
export function getSelectedMkVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('mk');
}
export function getSelectedSqVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('sq');
}
export function getSelectedIsVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('is');
}
export function getSelectedCyVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('cy');
}
export function getSelectedGaVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('ga');
}
export function getSelectedTlVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('tl');
}
export function getSelectedMnVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('mn');
}
export function getSelectedUzVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('uz');
}
export function getSelectedAmVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('am');
}
export function getSelectedEoVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('eo');
}
export function getSelectedTaVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('ta');
}
export function getSelectedPaVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('pa');
}
export function getSelectedZuVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('zu');
}
export function getSelectedAfVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('af');
}
export function getSelectedKyVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('ky');
}
export function getSelectedTgVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('tg');
}
export function getSelectedTkVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('tk');
}
export function getSelectedUgVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('ug');
}
export function getSelectedEuVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('eu');
}
export function getSelectedCaVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('ca');
}
export function getSelectedGlVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('gl');
}
export function getSelectedMtVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('mt');
}
export function getSelectedLbVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('lb');
}
export function getSelectedHtVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('ht');
}
export function getSelectedBoVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('bo');
}
export function getSelectedMyVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('my');
}
export function getSelectedKmVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('km');
}
export function getSelectedLoVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('lo');
}
export function getSelectedNeVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('ne');
}
export function getSelectedSiVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('si');
}
export function getSelectedUrVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('ur');
}
export function getSelectedTeVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('te');
}
export function getSelectedMlVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('ml');
}
export function getSelectedKnVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('kn');
}
export function getSelectedMrVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('mr');
}
export function getSelectedGuVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('gu');
}
export function getSelectedOrVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('or');
}
export function getSelectedAsVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('as');
}
export function getSelectedSdVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('sd');
}
export function getSelectedPsVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('ps');
}
export function getSelectedSoVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('so');
}
export function getSelectedHaVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('ha');
}
export function getSelectedYoVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('yo');
}
export function getSelectedIgVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('ig');
}
export function getSelectedTiVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('ti');
}
export function getSelectedWoVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('wo');
}
export function getSelectedMgVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('mg');
}
export function getSelectedXhVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('xh');
}
export function getSelectedSnVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('sn');
}
export function getSelectedNyVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('ny');
}
export function getSelectedFjVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('fj');
}
export function getSelectedSmVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('sm');
}
export function getSelectedToVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('to');
}
export function getSelectedMiVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('mi');
}
export function getSelectedHawVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('haw');
}
export function getSelectedJvVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('jv');
}
export function getSelectedSuVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('su');
}
export function getSelectedGdVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('gd');
}
export function getSelectedBrVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('br');
}
export function getSelectedKwVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('kw');
}
export function getSelectedGvVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('gv');
}
export function getSelectedFoVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('fo');
}
export function getSelectedOcVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('oc');
}
export function getSelectedCoVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('co');
}
export function getSelectedScVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('sc');
}
export function getSelectedFyVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('fy');
}
export function getSelectedYiVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('yi');
}
export function getSelectedLadVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('lad');
}
export function getSelectedQuVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('qu');
}
export function getSelectedGnVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('gn');
}
export function getSelectedAyVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('ay');
}
export function getSelectedDzVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('dz');
}
export function getSelectedDvVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('dv');
}
export function getSelectedTetVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('tet');
}
export function getSelectedBeVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('be');
}
export function getSelectedQyaVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('qya');
}
export function getSelectedSjnVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('sjn');
}
export function getSelectedKuVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('ku');
}
export function getSelectedOmVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('om');
}
export function getSelectedLnVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('ln');
}
export function getSelectedBhoVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('bho');
}
export function getSelectedCebVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('ceb');
}
export function getSelectedRmVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('rm');
}
export function getSelectedTyVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('ty');
}
export function getSelectedChVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('ch');
}
export function getSelectedMhVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('mh');
}
export function getSelectedPauVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('pau');
}
export function getSelectedNahVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('nah');
}
export function getSelectedNvVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('nv');
}
export function getSelectedTlhVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('tlh');
}
export function getSelectedValVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('val');
}
export function getSelectedDthVoice(): SpeechSynthesisVoice | null {
  return _getSelectedVoiceById('dth');
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
    addPulseOn(btn);
    u.onend = u.onerror = () => removePulseOn(btn);
  }
  synth.speak(u);
}

// Speaks English text with a specific accent (GB/US), bypassing the user's globally selected voice.
export function speakEnAccent(text: string, accent: 'GB' | 'US', btn: HTMLElement | null): void {
  _speakAccent(_enVoices(), text, accent, accent === 'GB' ? 'en-GB' : 'en-US', btn);
}

// Speaks Spanish text with a specific accent (ES/MX), bypassing the user's globally selected voice.
export function speakEsAccent(text: string, accent: 'ES' | 'MX', btn: HTMLElement | null): void {
  _speakAccent(
    _voicesForLang(LANG_VOICE_CONFIG_BY_ID.get('es')!),
    text,
    accent,
    accent === 'ES' ? 'es-ES' : 'es-MX',
    btn,
  );
}

// Speaks Portuguese text with a specific accent (PT/BR), bypassing the user's globally selected voice.
export function speakPtAccent(text: string, accent: 'PT' | 'BR', btn: HTMLElement | null): void {
  _speakAccent(
    _voicesForLang(LANG_VOICE_CONFIG_BY_ID.get('pt')!),
    text,
    accent,
    accent === 'PT' ? 'pt-PT' : 'pt-BR',
    btn,
  );
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
  return _hasAccent(
    _voicesForLang(LANG_VOICE_CONFIG_BY_ID.get('es')!),
    accent,
    accent === 'ES' ? 'es-ES' : 'es-MX',
  );
}

export function hasPtAccent(accent: 'PT' | 'BR'): boolean {
  return _hasAccent(
    _voicesForLang(LANG_VOICE_CONFIG_BY_ID.get('pt')!),
    accent,
    accent === 'PT' ? 'pt-PT' : 'pt-BR',
  );
}

// Speaks non-Cyrillic text (returns false and does nothing for Cyrillic —
// callers fall back to _speakWithLang with the right lang tag for that) via
// the user's selected preferred English voice (_enURI, persisted as
// 'ew_ws_voice'). Despite the old name, this has only ever been browser
// SpeechSynthesis — there is no third-party TTS call anywhere in this file
// or the app (see the "TTS server fallback" finding: the fakeyou.com/
// elevenlabs.io/streamelements.com entries this name referenced were dead
// config in public/sw.js's cache-exclusion list, never actually called).
export const speakPreferredEnVoice = (text: string, btn: HTMLElement | null): boolean => {
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
    addPulseOn(btn);
    u.onend = u.onerror = () => removePulseOn(btn);
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

// Which per-language section is expanded is owned by AccordionPrimitive.Root
// itself (uncontrolled — see VoicePickerList's defaultValue={[]}), not lifted
// into React state here. This used to matter more delicately: the old
// implementation did container.innerHTML = '' and rebuilt every element from
// scratch on every _renderVoices() call, which reset native <details open>
// state along with everything else. That's fixed at the reconciliation level
// now — every section keeps a stable key={section.id}/value={section.id} — so
// bump()-driven re-renders (voice.tsx:2946) never remount these items, and
// Accordion's own internal open-state store persists across them exactly
// like the native <details> it replaced.

type VoiceDefaultSelect = 'google' | 'first' | null;

type LangSection = {
  id: string;
  flagCode: string;
  titleKey: string;
  noTitleKey: string | null; // null only for 'eo'
  descKey: string | null; //   — matches the original, which never had an
  //                             addMissing() branch for it
  voicesFn: () => SpeechSynthesisVoice[];
  getURI: () => string;
  setURI: (uri: string) => void;
  storageKey: string;
  testText: string;
  defaultSelect: VoiceDefaultSelect;
};

const LANG_SECTIONS: LangSection[] = [
  {
    id: 'en',
    flagCode: 'gb',
    titleKey: 'settings.enVoicesTitle',
    noTitleKey: null,
    descKey: null,
    voicesFn: _enVoices,
    getURI: () => _enURI,
    setURI: (u: string) => {
      _enURI = u;
    },
    storageKey: 'ew_ws_voice',
    testText: 'Hello there, general Kenobi',
    defaultSelect: 'google',
  },
  ...LANG_VOICE_CONFIG.map((c): LangSection => ({
    id: c.id,
    flagCode: c.flagCode,
    titleKey: c.titleKey,
    noTitleKey: c.noTitleKey,
    descKey: c.descKey,
    voicesFn: () => _voicesForLang(c),
    getURI: () => _uriState[c.id],
    setURI: (u: string) => {
      _uriState[c.id] = u;
    },
    storageKey: c.storageKey,
    testText: c.testText,
    defaultSelect: c.defaultSelect,
  })),
];

function VoiceFlagImg({ flagCode }: { flagCode: string }): ReactElement | null {
  const url = flagUrl(flagCode);
  if (!url) return null;
  return (
    <img
      src={url}
      alt=""
      width={14}
      height={14}
      style={{
        display: 'inline-block',
        borderRadius: '50%',
        verticalAlign: 'middle',
        marginRight: 6,
        boxShadow: '0 0 0 1px var(--border)',
      }}
    />
  );
}

function VoiceCard({
  voice,
  active,
  onSelect,
}: {
  voice: SpeechSynthesisVoice;
  active: boolean;
  onSelect: (uri: string) => void;
}): ReactElement {
  const info = _getLabel(voice);
  const accentUrl = flagUrl(info.accent);
  return (
    <button
      className={
        'voice-card flex cursor-pointer flex-col rounded-[12px] border-[1.5px] border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-left font-[inherit] transition-colors duration-150 hover:border-[var(--accent)] hover:bg-[var(--card)]' +
        (active ? ' voice-card-active shadow-[var(--voice-card-active-shadow)]' : '')
      }
      onClick={() => onSelect(voice.voiceURI)}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
        <span style={{ fontSize: '1rem' }}>{info.gender}</span>
        {accentUrl ? (
          <img
            src={accentUrl}
            alt={info.accent}
            width={16}
            height={16}
            style={{
              borderRadius: '50%',
              boxShadow: '0 0 0 1px var(--border)',
              verticalAlign: 'middle',
            }}
          />
        ) : (
          info.accent
        )}
        <span style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--text)' }}>
          {info.label}
        </span>
      </div>
      <div style={{ fontSize: '.65rem', color: 'var(--text3)' }}>
        {voice.lang} · {voice.localService ? t('settings.voiceOffline') : t('settings.voiceOnline')}
      </div>
    </button>
  );
}

function VoiceSectionView({
  section,
  onSelect,
}: {
  section: LangSection;
  onSelect: (section: LangSection, voice: SpeechSynthesisVoice) => void;
}): ReactElement | null {
  const voices = _sortVoices(section.voicesFn());
  if (!voices.length) {
    // 'eo' has no missing-fallback config — matches the original, which
    // simply never called addMissing() for it (nothing rendered).
    if (!section.noTitleKey || !section.descKey) return null;
    return (
      <AccordionPrimitive.Item
        value={section.id}
        className="voice-section"
        style={{ width: '100%', margin: '6px 0' }}
      >
        <AccordionPrimitive.Header style={{ margin: 0 }}>
          <AccordionPrimitive.Trigger
            className="select-none"
            style={{
              display: 'block',
              width: '100%',
              border: 'none',
              background: 'none',
              font: 'inherit',
              textAlign: 'left',
              fontSize: '.7rem',
              fontWeight: 700,
              color: 'var(--text3)',
              letterSpacing: '.05em',
              textTransform: 'uppercase',
              padding: '6px 0',
              cursor: 'pointer',
            }}
          >
            <VoiceFlagImg flagCode={section.flagCode} />
            {t(section.noTitleKey)}
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        {/* keepMounted: matches native <details>, whose content stays in
            the DOM (just hidden) while collapsed — voice.test.tsx's
            .voice-card queries rely on this without ever expanding a
            section. */}
        <AccordionPrimitive.Panel keepMounted>
          <div
            style={{
              marginTop: 6,
              padding: '12px 14px',
              border: '1.5px dashed rgba(255,255,255,.12)',
              borderRadius: 12,
              fontSize: '.78rem',
              color: 'var(--text2)',
              lineHeight: 1.6,
            }}
            dangerouslySetInnerHTML={{ __html: t(section.descKey) }}
          />
        </AccordionPrimitive.Panel>
      </AccordionPrimitive.Item>
    );
  }

  const activeURI = section.getURI();
  const activeVoice = voices.find((v) => v.voiceURI === activeURI);
  return (
    <AccordionPrimitive.Item
      value={section.id}
      className="voice-section"
      style={{ width: '100%', margin: '6px 0' }}
    >
      <AccordionPrimitive.Header style={{ margin: 0 }}>
        <AccordionPrimitive.Trigger
          className="select-none"
          style={{
            display: 'block',
            width: '100%',
            border: 'none',
            background: 'none',
            font: 'inherit',
            textAlign: 'left',
            fontSize: '.7rem',
            fontWeight: 700,
            color: 'var(--text3)',
            letterSpacing: '.05em',
            textTransform: 'uppercase',
            padding: '6px 0',
            cursor: 'pointer',
          }}
        >
          <VoiceFlagImg flagCode={section.flagCode} />
          {t(section.titleKey)} ({voices.length})
          {activeVoice ? ` — ${_getLabel(activeVoice).label}` : ''}
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Panel keepMounted>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr))',
            gap: 6,
            width: '100%',
            marginTop: 6,
          }}
        >
          {voices.map((v) => (
            <VoiceCard
              key={v.voiceURI}
              voice={v}
              active={v.voiceURI === activeURI}
              onSelect={() => onSelect(section, v)}
            />
          ))}
        </div>
      </AccordionPrimitive.Panel>
    </AccordionPrimitive.Item>
  );
}

// Applies each section's default-selection heuristic (only ~76 of 138
// languages have one configured — a pre-existing asymmetry inherited
// verbatim from the original file, not introduced here; getSelectedXxVoice()
// already falls back to voices[0] for actual playback regardless, this only
// affects whether the picker shows a highlighted card / persists a choice
// before the user ever picks one manually). Deliberately called before
// building the section list (not after, like the original) so a freshly
// auto-picked voice is highlighted immediately instead of only on the next
// re-render — the original's ordering was an accident of where the block
// happened to sit, not a deliberate deferred-highlight design.
function _applyDefaultSelections(): void {
  for (const section of LANG_SECTIONS) {
    if (section.getURI() || !section.defaultSelect) continue;
    const voices = section.voicesFn();
    if (!voices.length) continue;
    const chosen =
      section.defaultSelect === 'google'
        ? (voices.find((v) => v.name.toLowerCase().includes('google')) ?? voices[0])
        : voices[0];
    section.setURI(chosen.voiceURI);
    localStorage.setItem(section.storageKey, chosen.voiceURI);
  }
}

function onVoiceCardSelect(section: LangSection, voice: SpeechSynthesisVoice): void {
  section.setURI(voice.voiceURI);
  localStorage.setItem(section.storageKey, voice.voiceURI);
  _bumpVoicePicker?.();
  synth?.cancel();
  const u = new SpeechSynthesisUtterance(section.testText);
  u.voice = voice;
  u.lang = voice.lang;
  u.rate = 0.88;
  synth?.speak(u);
}

let _bumpVoicePicker: (() => void) | null = null;

// External trigger — called from app-root.tsx (settings page onActivate)
// and i18n.ts (on UI language change), same registration-hook pattern as
// stats-trigger.ts's refreshStatsPage()/cloud-sync.tsx's
// _refreshCloudSyncUI(). A no-op if the picker isn't mounted, matching the
// original's `if (!container) return;` guard.
export function _renderVoices(): void {
  _bumpVoicePicker?.();
}

let _loaded = false;
function _tryLoad(bump: () => void): void {
  if (_loaded) return;
  const v = window.speechSynthesis?.getVoices() ?? [];
  if (v.length) {
    _loaded = true;
    bump();
  }
}
function _forceReload(bump: () => void): void {
  _loaded = false;
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const v = window.speechSynthesis.getVoices();
  if (v.length) {
    _loaded = true;
    bump();
  } else {
    const handler = (): void => {
      window.speechSynthesis.removeEventListener('voiceschanged', handler);
      _loaded = false;
      _tryLoad(bump);
    };
    window.speechSynthesis.addEventListener('voiceschanged', handler);
  }
}

// Only the first VOICE_VISIBLE_COUNT sections (in the current sort order)
// show by default — with 138 languages, rendering every <details> section
// at once (mostly "not found" placeholders) made the list unusably long.
// The rest sit behind a "show more" toggle, same pattern as
// fandom-theme-rows.tsx's BASE_THEME_KEYS/EXTRA_THEME_KEYS split.
const VOICE_VISIBLE_COUNT = 3;

function VoiceSectionsList({ sorted }: { sorted: LangSection[] }): ReactElement {
  const visible = sorted.slice(0, VOICE_VISIBLE_COUNT);
  const hidden = sorted.slice(VOICE_VISIBLE_COUNT);
  // Always starts collapsed — unlike fandom themes (BASE_THEME_KEYS is 2
  // curated entries), _applyDefaultSelections() auto-picks a voice for
  // ~76 of 138 sections on every render, so "has a URI" isn't a signal of
  // a deliberate user choice here and would leave this permanently expanded.
  const [expanded, setExpanded] = useState(false);

  return (
    // className="contents" keeps the Root invisible in layout — its parent
    // (#fy-voices-list, settings-page.tsx) already lays out this component's
    // top-level children via flex-column+gap, same reasoning as
    // fandom-theme-rows.tsx's FandomThemeRowsController (this section's own
    // twin — same show-more/less shape, same toggle-button class).
    <Collapsible open={expanded} onOpenChange={setExpanded} className="contents">
      {/* multiple + defaultValue={[]}: every section opens/closes
          independently (not single-open, matching the original <details>
          list), and the open-id set lives uncontrolled inside the Root
          itself — see the comment above VoiceSectionView. */}
      <AccordionPrimitive.Root multiple defaultValue={[]} className="contents">
        {visible.map((section) => (
          <VoiceSectionView key={section.id} section={section} onSelect={onVoiceCardSelect} />
        ))}
        {hidden.length > 0 && (
          <CollapsibleContent
            id="voice-sections-extra"
            keepMounted
            // Only apply an unconditional display while open — see
            // fandom-theme-rows.tsx's identical comment: an always-on
            // display would beat base-ui's [hidden]{display:none} UA rule
            // regardless of layers/specificity, since origin is resolved
            // first.
            style={expanded ? { display: 'block' } : undefined}
          >
            {hidden.map((section) => (
              <VoiceSectionView key={section.id} section={section} onSelect={onVoiceCardSelect} />
            ))}
          </CollapsibleContent>
        )}
      </AccordionPrimitive.Root>
      {hidden.length > 0 && (
        <CollapsibleTrigger
          id="voice-sections-toggle"
          className="theme-rows-toggle-btn mt-1 cursor-pointer rounded-[10px] border border-dashed border-[var(--border)] bg-transparent px-3 py-[7px] text-center text-[.78rem] font-semibold text-[var(--text3)] transition-colors duration-150 hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          {t(expanded ? 'settings.showLessVoices' : 'settings.showMoreVoices')}
        </CollapsibleTrigger>
      )}
    </Collapsible>
  );
}

function VoicePickerList({ debugMsg }: { debugMsg: string | null }): ReactElement {
  const allEmpty = LANG_SECTIONS.every((s) => !s.voicesFn().length);
  if (allEmpty) {
    return (
      <span style={{ fontSize: '.78rem', color: 'var(--text3)' }}>
        {t('settings.voicesNotFound')}
      </span>
    );
  }

  _applyDefaultSelections();

  const langSortKey = (id: string): string => t(`lang.${id === 'uk' ? 'ua' : id}`);
  const sorted = LANG_SECTIONS.slice().sort((a, b) =>
    langSortKey(a.id).localeCompare(langSortKey(b.id), getLang()),
  );

  return (
    <>
      <VoiceSectionsList sorted={sorted} />
      {debugMsg && (
        <div
          className="voice-debug-msg"
          style={{
            fontSize: '.72rem',
            color: 'var(--text3)',
            marginTop: 8,
            padding: 8,
            background: 'rgba(255,255,255,.05)',
            borderRadius: 8,
            wordBreak: 'break-all',
          }}
        >
          {debugMsg}
        </div>
      )}
    </>
  );
}

// Settings' "🔊 Голос озвучення" section title + #voices-reload-btn — the
// wrapping markup only (docs/full-react-migration-roadmap.md item 10);
// #voices-reload-btn's click wiring stays exactly where it already was
// (VoiceInit's useEffect below, getElementById + addEventListener) since
// that's the same idiom every other mode/feature controller in this repo
// uses. #fy-voices-list (VoiceInit's own createPortal target, read in its
// render body rather than an effect) is deliberately NOT touched here —
// converting it would need the same care as card-shell.tsx's Portal-into-
// dynamically-created-node fix, not worth it for this section's title row.
export function VoiceSectionHeader(): ReactElement {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}
    >
      <div
        className="mb-1.5 text-[0.9rem] font-bold text-[var(--section-title-color,var(--text))]"
        style={{ marginBottom: 0 }}
        data-i18n="settings.voiceTitle"
      >
        🔊 Голос озвучення
      </div>
      <button
        id="voices-reload-btn"
        className="backup-btn"
        style={{ flex: 'none', padding: '3px 9px', fontSize: '0.68rem' }}
        data-i18n="settings.voiceReload"
        data-i18n-title="settings.voiceReloadTitle"
        title="Перезавантажити список голосів"
      >
        🔄 Оновити
      </button>
    </div>
  );
}

export function VoiceInit(): ReactElement | null {
  const [, bump0] = useState(0);
  const [debugMsg, setDebugMsg] = useState<string | null>(null);
  const bump = useCallback(() => bump0((n) => n + 1), []);

  useEffect(() => {
    _bumpVoicePicker = bump;
    const onVoicesChanged = () => {
      _loaded = false;
      _tryLoad(bump);
    };
    if (window.speechSynthesis) {
      _tryLoad(bump);
      window.speechSynthesis.addEventListener('voiceschanged', onVoicesChanged);
    }

    // Re-render once when the Settings page opens (so the list reflects
    // voices loaded since last time) — NOT on every click inside it, which
    // used to collapse the per-language <details> dropdowns right back up
    // under the old innerHTML-rebuild implementation. Real React
    // reconciliation no longer needs this for state preservation, but it
    // still catches a voice list that changed while settings was closed
    // without 'voiceschanged' ever firing, so it stays.
    const settingsOverlay = document.getElementById('settings-overlay');
    const onOverlayClassChange = () => {
      if (settingsOverlay?.classList.contains('open')) bump();
    };
    const overlayObserver = new MutationObserver(onOverlayClassChange);
    if (settingsOverlay)
      overlayObserver.observe(settingsOverlay, { attributes: true, attributeFilter: ['class'] });

    const onReloadClick = () => {
      const all = _allVoices();
      console.group(`[Voice debug] Всі доступні голоси (${all.length})`);
      all.forEach((v) => console.log(`${v.lang} | ${v.name} | local:${v.localService}`));
      console.groupEnd();
      if (!_voicesForLang(LANG_VOICE_CONFIG_BY_ID.get('uk')!).length) {
        const ukFound = all.filter(
          (v) =>
            (v.lang ?? '').toLowerCase().includes('uk') ||
            (v.name ?? '').toLowerCase().includes('ukra'),
        );
        setDebugMsg(
          `${t('settings.voicesFoundLabel')} ${all.length} ${t('settings.voicesLabel')} ${ukFound.map((v) => `${v.name} (${v.lang})`).join(', ') || t('settings.notFound')}`,
        );
      } else {
        setDebugMsg(null);
      }
      _forceReload(bump);
    };
    const reloadBtn = document.getElementById('voices-reload-btn');
    reloadBtn?.addEventListener('click', onReloadClick);

    return () => {
      _bumpVoicePicker = null;
      if (window.speechSynthesis)
        window.speechSynthesis.removeEventListener('voiceschanged', onVoicesChanged);
      overlayObserver.disconnect();
      reloadBtn?.removeEventListener('click', onReloadClick);
    };
  }, [bump]);

  const container = document.getElementById('fy-voices-list');
  if (!container) return null;
  return createPortal(<VoicePickerList debugMsg={debugMsg} />, container);
}
