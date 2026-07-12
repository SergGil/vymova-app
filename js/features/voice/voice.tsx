// Vymova — js/features/voice.tsx
// Web Speech API voice picker: EN + UA
import { useEffect, type ReactElement } from 'react';
import { synth } from '../../core/srs.ts';
import { t, getLang } from '../i18n.ts';
import { flagUrl } from '../../core/flags.ts';

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
let _viURI = localStorage.getItem('ew_ws_vi_voice') ?? '';
let _hiURI = localStorage.getItem('ew_ws_hi_voice') ?? '';
let _bnURI = localStorage.getItem('ew_ws_bn_voice') ?? '';
let _idURI = localStorage.getItem('ew_ws_id_voice') ?? '';
let _pcmURI = localStorage.getItem('ew_ws_pcm_voice') ?? '';
let _koURI = localStorage.getItem('ew_ws_ko_voice') ?? '';
let _faURI = localStorage.getItem('ew_ws_fa_voice') ?? '';
let _swURI = localStorage.getItem('ew_ws_sw_voice') ?? '';
let _msURI = localStorage.getItem('ew_ws_ms_voice') ?? '';
let _thURI = localStorage.getItem('ew_ws_th_voice') ?? '';
let _azURI = localStorage.getItem('ew_ws_az_voice') ?? '';
let _roURI = localStorage.getItem('ew_ws_ro_voice') ?? '';
let _huURI = localStorage.getItem('ew_ws_hu_voice') ?? '';
let _csURI = localStorage.getItem('ew_ws_cs_voice') ?? '';
let _kkURI = localStorage.getItem('ew_ws_kk_voice') ?? '';
let _svURI = localStorage.getItem('ew_ws_sv_voice') ?? '';
let _kaURI = localStorage.getItem('ew_ws_ka_voice') ?? '';
let _hrURI = localStorage.getItem('ew_ws_hr_voice') ?? '';
let _srURI = localStorage.getItem('ew_ws_sr_voice') ?? '';
let _bsURI = localStorage.getItem('ew_ws_bs_voice') ?? '';
let _bgURI = localStorage.getItem('ew_ws_bg_voice') ?? '';
let _skURI = localStorage.getItem('ew_ws_sk_voice') ?? '';
let _hyURI = localStorage.getItem('ew_ws_hy_voice') ?? '';
let _daURI = localStorage.getItem('ew_ws_da_voice') ?? '';
let _fiURI = localStorage.getItem('ew_ws_fi_voice') ?? '';
let _noURI = localStorage.getItem('ew_ws_no_voice') ?? '';
let _laURI = localStorage.getItem('ew_ws_la_voice') ?? '';
let _ltURI = localStorage.getItem('ew_ws_lt_voice') ?? '';
let _lvURI = localStorage.getItem('ew_ws_lv_voice') ?? '';
let _etURI = localStorage.getItem('ew_ws_et_voice') ?? '';
let _slURI = localStorage.getItem('ew_ws_sl_voice') ?? '';
let _mkURI = localStorage.getItem('ew_ws_mk_voice') ?? '';
let _sqURI = localStorage.getItem('ew_ws_sq_voice') ?? '';
let _isURI = localStorage.getItem('ew_ws_is_voice') ?? '';
let _cyURI = localStorage.getItem('ew_ws_cy_voice') ?? '';
let _gaURI = localStorage.getItem('ew_ws_ga_voice') ?? '';
let _tlURI = localStorage.getItem('ew_ws_tl_voice') ?? '';
let _mnURI = localStorage.getItem('ew_ws_mn_voice') ?? '';
let _uzURI = localStorage.getItem('ew_ws_uz_voice') ?? '';
let _amURI = localStorage.getItem('ew_ws_am_voice') ?? '';
let _eoURI = localStorage.getItem('ew_ws_eo_voice') ?? '';
let _taURI = localStorage.getItem('ew_ws_ta_voice') ?? '';
let _paURI = localStorage.getItem('ew_ws_pa_voice') ?? '';
let _zuURI = localStorage.getItem('ew_ws_zu_voice') ?? '';
let _afURI = localStorage.getItem('ew_ws_af_voice') ?? '';
let _kyURI = localStorage.getItem('ew_ws_ky_voice') ?? '';
let _tgURI = localStorage.getItem('ew_ws_tg_voice') ?? '';
let _tkURI = localStorage.getItem('ew_ws_tk_voice') ?? '';
let _ugURI = localStorage.getItem('ew_ws_ug_voice') ?? '';
let _euURI = localStorage.getItem('ew_ws_eu_voice') ?? '';
let _caURI = localStorage.getItem('ew_ws_ca_voice') ?? '';
let _glURI = localStorage.getItem('ew_ws_gl_voice') ?? '';
let _mtURI = localStorage.getItem('ew_ws_mt_voice') ?? '';
let _lbURI = localStorage.getItem('ew_ws_lb_voice') ?? '';
let _htURI = localStorage.getItem('ew_ws_ht_voice') ?? '';
let _boURI = localStorage.getItem('ew_ws_bo_voice') ?? '';
let _myURI = localStorage.getItem('ew_ws_my_voice') ?? '';
let _kmURI = localStorage.getItem('ew_ws_km_voice') ?? '';
let _loURI = localStorage.getItem('ew_ws_lo_voice') ?? '';
let _neURI = localStorage.getItem('ew_ws_ne_voice') ?? '';
let _siURI = localStorage.getItem('ew_ws_si_voice') ?? '';
let _urURI = localStorage.getItem('ew_ws_ur_voice') ?? '';
let _teURI = localStorage.getItem('ew_ws_te_voice') ?? '';
let _mlURI = localStorage.getItem('ew_ws_ml_voice') ?? '';
let _knURI = localStorage.getItem('ew_ws_kn_voice') ?? '';
let _mrURI = localStorage.getItem('ew_ws_mr_voice') ?? '';
let _guURI = localStorage.getItem('ew_ws_gu_voice') ?? '';
let _orURI = localStorage.getItem('ew_ws_or_voice') ?? '';
let _asURI = localStorage.getItem('ew_ws_as_voice') ?? '';
let _sdURI = localStorage.getItem('ew_ws_sd_voice') ?? '';
let _psURI = localStorage.getItem('ew_ws_ps_voice') ?? '';
let _soURI = localStorage.getItem('ew_ws_so_voice') ?? '';
let _haURI = localStorage.getItem('ew_ws_ha_voice') ?? '';
let _yoURI = localStorage.getItem('ew_ws_yo_voice') ?? '';
let _igURI = localStorage.getItem('ew_ws_ig_voice') ?? '';
let _tiURI = localStorage.getItem('ew_ws_ti_voice') ?? '';
let _woURI = localStorage.getItem('ew_ws_wo_voice') ?? '';
let _mgURI = localStorage.getItem('ew_ws_mg_voice') ?? '';
let _xhURI = localStorage.getItem('ew_ws_xh_voice') ?? '';
let _snURI = localStorage.getItem('ew_ws_sn_voice') ?? '';
let _nyURI = localStorage.getItem('ew_ws_ny_voice') ?? '';
let _fjURI = localStorage.getItem('ew_ws_fj_voice') ?? '';
let _smURI = localStorage.getItem('ew_ws_sm_voice') ?? '';
let _toURI = localStorage.getItem('ew_ws_to_voice') ?? '';
let _miURI = localStorage.getItem('ew_ws_mi_voice') ?? '';
let _hawURI = localStorage.getItem('ew_ws_haw_voice') ?? '';
let _jvURI = localStorage.getItem('ew_ws_jv_voice') ?? '';
let _suURI = localStorage.getItem('ew_ws_su_voice') ?? '';
let _gdURI = localStorage.getItem('ew_ws_gd_voice') ?? '';
let _brURI = localStorage.getItem('ew_ws_br_voice') ?? '';
let _kwURI = localStorage.getItem('ew_ws_kw_voice') ?? '';
let _gvURI = localStorage.getItem('ew_ws_gv_voice') ?? '';
let _foURI = localStorage.getItem('ew_ws_fo_voice') ?? '';
let _ocURI = localStorage.getItem('ew_ws_oc_voice') ?? '';
let _coURI = localStorage.getItem('ew_ws_co_voice') ?? '';
let _scURI = localStorage.getItem('ew_ws_sc_voice') ?? '';
let _fyURI = localStorage.getItem('ew_ws_fy_voice') ?? '';
let _yiURI = localStorage.getItem('ew_ws_yi_voice') ?? '';
let _ladURI = localStorage.getItem('ew_ws_lad_voice') ?? '';
let _quURI = localStorage.getItem('ew_ws_qu_voice') ?? '';
let _gnURI = localStorage.getItem('ew_ws_gn_voice') ?? '';
let _ayURI = localStorage.getItem('ew_ws_ay_voice') ?? '';
let _dzURI = localStorage.getItem('ew_ws_dz_voice') ?? '';
let _dvURI = localStorage.getItem('ew_ws_dv_voice') ?? '';
let _tetURI = localStorage.getItem('ew_ws_tet_voice') ?? '';
let _beURI = localStorage.getItem('ew_ws_be_voice') ?? '';
let _qyaURI = localStorage.getItem('ew_ws_qya_voice') ?? '';
let _sjnURI = localStorage.getItem('ew_ws_sjn_voice') ?? '';

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
function _viVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('vi') || n.includes('vietnamese') || n.includes('tiếng việt');
  });
}
function _hiVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('hi') || n.includes('hindi');
  });
}
function _bnVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('bn') || n.includes('bengali');
  });
}
function _idVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('id') || n.includes('indonesian');
  });
}
function _pcmVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('pcm') || n.includes('nigerian pidgin');
  });
}
function _koVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('ko') || n.includes('korean');
  });
}
function _faVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('fa') || n.includes('persian');
  });
}
function _swVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('sw') || n.includes('swahili');
  });
}
function _msVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('ms') || n.includes('malay');
  });
}
function _thVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('th') || n.includes('thai');
  });
}
function _azVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('az') || n.includes('azerbaijani');
  });
}
function _roVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('ro') || n.includes('romanian');
  });
}
function _huVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('hu') || n.includes('hungarian');
  });
}
function _csVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('cs') || n.includes('czech');
  });
}
function _kkVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('kk') || n.includes('kazakh');
  });
}
function _svVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('sv') || n.includes('swedish');
  });
}
function _kaVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('ka') || n.includes('georgian');
  });
}
function _hrVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('hr') || n.includes('croatian');
  });
}
function _srVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('sr') || n.includes('serbian');
  });
}
function _bsVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('bs') || n.includes('bosnian');
  });
}
function _bgVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('bg') || n.includes('bulgarian');
  });
}
function _skVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('sk') || n.includes('slovak');
  });
}
function _hyVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('hy') || n.includes('armenian');
  });
}
function _daVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('da') || n.includes('danish');
  });
}
function _fiVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('fi') || n.includes('finnish');
  });
}
function _noVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('nb') || n.includes('norwegian');
  });
}
function _laVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('la') || n.includes('latin');
  });
}
function _ltVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('lt') || n.includes('lithuanian');
  });
}
function _lvVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('lv') || n.includes('latvian');
  });
}
function _etVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('et') || n.includes('estonian');
  });
}
function _slVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('sl') || n.includes('slovenian');
  });
}
function _mkVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('mk') || n.includes('macedonian');
  });
}
function _sqVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('sq') || n.includes('albanian');
  });
}
function _isVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('is') || n.includes('icelandic');
  });
}
function _cyVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('cy') || n.includes('welsh');
  });
}
function _gaVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('ga') || n.includes('irish');
  });
}
function _tlVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('tl') || l.startsWith('fil') || n.includes('filipino') || n.includes('tagalog');
  });
}
function _mnVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('mn') || n.includes('mongolian');
  });
}
function _uzVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('uz') || n.includes('uzbek');
  });
}
function _amVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('am') || n.includes('amharic');
  });
}
function _eoVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('eo') || n.includes('esperanto');
  });
}
function _taVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('ta') || n.includes('tamil');
  });
}
function _paVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('pa') || n.includes('punjabi');
  });
}
function _zuVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('zu') || n.includes('zulu');
  });
}
function _afVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('af') || n.includes('afrikaans');
  });
}
function _kyVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('ky') || n.includes('kyrgyz');
  });
}
function _tgVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('tg') || n.includes('tajik');
  });
}
function _tkVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('tk') || n.includes('turkmen');
  });
}
function _ugVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('ug') || n.includes('uyghur');
  });
}
function _euVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('eu') || n.includes('basque');
  });
}
function _caVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('ca') || n.includes('catalan');
  });
}
function _glVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('gl') || n.includes('galician');
  });
}
function _mtVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('mt') || n.includes('maltese');
  });
}
function _lbVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('lb') || n.includes('luxembourgish');
  });
}
function _htVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('ht') || n.includes('haitian creole');
  });
}
function _boVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('bo') || n.includes('tibetan');
  });
}
function _myVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('my') || n.includes('burmese');
  });
}
function _kmVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('km') || n.includes('khmer');
  });
}
function _loVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('lo') || n.includes('lao');
  });
}
function _neVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('ne') || n.includes('nepali');
  });
}
function _siVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('si') || n.includes('sinhala');
  });
}
function _urVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('ur') || n.includes('urdu');
  });
}
function _teVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('te') || n.includes('telugu');
  });
}
function _mlVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('ml') || n.includes('malayalam');
  });
}
function _knVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('kn') || n.includes('kannada');
  });
}
function _mrVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('mr') || n.includes('marathi');
  });
}
function _guVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('gu') || n.includes('gujarati');
  });
}
function _orVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('or') || n.includes('odia');
  });
}
function _asVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('as') || n.includes('assamese');
  });
}
function _sdVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('sd') || n.includes('sindhi');
  });
}
function _psVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('ps') || n.includes('pashto');
  });
}
function _soVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('so') || n.includes('somali');
  });
}
function _haVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('ha') || n.includes('hausa');
  });
}
function _yoVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('yo') || n.includes('yoruba');
  });
}
function _igVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('ig') || n.includes('igbo');
  });
}
function _tiVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('ti') || n.includes('tigrinya');
  });
}
function _woVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('wo') || n.includes('wolof');
  });
}
function _mgVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('mg') || n.includes('malagasy');
  });
}
function _xhVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('xh') || n.includes('xhosa');
  });
}
function _snVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('sn') || n.includes('shona');
  });
}
function _nyVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('ny') || n.includes('chewa');
  });
}
function _fjVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('fj') || n.includes('fijian');
  });
}
function _smVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('sm') || n.includes('samoan');
  });
}
function _toVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('to') || n.includes('tongan');
  });
}
function _miVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('mi') || n.includes('maori');
  });
}
function _hawVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('haw') || n.includes('hawaiian');
  });
}
function _jvVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('jv') || n.includes('javanese');
  });
}
function _suVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('su') || n.includes('sundanese');
  });
}
function _gdVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('gd') || n.includes('scottish gaelic');
  });
}
function _brVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('br') || n.includes('breton');
  });
}
function _kwVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('kw') || n.includes('cornish');
  });
}
function _gvVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('gv') || n.includes('manx');
  });
}
function _foVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('fo') || n.includes('faroese');
  });
}
function _ocVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('oc') || n.includes('occitan');
  });
}
function _coVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('co') || n.includes('corsican');
  });
}
function _scVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('sc') || n.includes('sardinian');
  });
}
function _fyVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('fy') || n.includes('frisian');
  });
}
function _yiVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('yi') || n.includes('yiddish');
  });
}
function _ladVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('lad') || n.includes('ladino');
  });
}
function _quVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('qu') || n.includes('quechua');
  });
}
function _gnVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('gn') || n.includes('guarani');
  });
}
function _ayVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('ay') || n.includes('aymara');
  });
}
function _dzVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('dz') || n.includes('dzongkha');
  });
}
function _dvVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('dv') || n.includes('maldivian');
  });
}
function _tetVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('tet') || n.includes('tetum');
  });
}
function _beVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('be') || n.includes('belarusian');
  });
}
// No browser ships real Quenya/Sindarin voices — Tolkien modeled Quenya's
// phonology on Finnish and Sindarin's on Welsh, so those voice pools are
// reused as the closest-sounding approximation instead of staying silent.
function _qyaVoices(): SpeechSynthesisVoice[] {
  return _fiVoices();
}
function _sjnVoices(): SpeechSynthesisVoice[] {
  return _cyVoices();
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
export function getSelectedViVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_viURI, _viVoices()) ?? _viVoices()[0] ?? null;
}
export function getSelectedHiVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_hiURI, _hiVoices()) ?? _hiVoices()[0] ?? null;
}
export function getSelectedBnVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_bnURI, _bnVoices()) ?? _bnVoices()[0] ?? null;
}
export function getSelectedIdVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_idURI, _idVoices()) ?? _idVoices()[0] ?? null;
}
export function getSelectedPcmVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_pcmURI, _pcmVoices()) ?? _pcmVoices()[0] ?? null;
}
export function getSelectedKoVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_koURI, _koVoices()) ?? _koVoices()[0] ?? null;
}
export function getSelectedFaVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_faURI, _faVoices()) ?? _faVoices()[0] ?? null;
}
export function getSelectedSwVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_swURI, _swVoices()) ?? _swVoices()[0] ?? null;
}
export function getSelectedMsVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_msURI, _msVoices()) ?? _msVoices()[0] ?? null;
}
export function getSelectedThVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_thURI, _thVoices()) ?? _thVoices()[0] ?? null;
}
export function getSelectedAzVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_azURI, _azVoices()) ?? _azVoices()[0] ?? null;
}
export function getSelectedRoVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_roURI, _roVoices()) ?? _roVoices()[0] ?? null;
}
export function getSelectedHuVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_huURI, _huVoices()) ?? _huVoices()[0] ?? null;
}
export function getSelectedCsVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_csURI, _csVoices()) ?? _csVoices()[0] ?? null;
}
export function getSelectedKkVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_kkURI, _kkVoices()) ?? _kkVoices()[0] ?? null;
}
export function getSelectedSvVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_svURI, _svVoices()) ?? _svVoices()[0] ?? null;
}
export function getSelectedKaVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_kaURI, _kaVoices()) ?? _kaVoices()[0] ?? null;
}
export function getSelectedHrVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_hrURI, _hrVoices()) ?? _hrVoices()[0] ?? null;
}
export function getSelectedSrVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_srURI, _srVoices()) ?? _srVoices()[0] ?? null;
}
export function getSelectedBsVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_bsURI, _bsVoices()) ?? _bsVoices()[0] ?? null;
}
export function getSelectedBgVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_bgURI, _bgVoices()) ?? _bgVoices()[0] ?? null;
}
export function getSelectedSkVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_skURI, _skVoices()) ?? _skVoices()[0] ?? null;
}
export function getSelectedHyVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_hyURI, _hyVoices()) ?? _hyVoices()[0] ?? null;
}
export function getSelectedDaVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_daURI, _daVoices()) ?? _daVoices()[0] ?? null;
}
export function getSelectedFiVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_fiURI, _fiVoices()) ?? _fiVoices()[0] ?? null;
}
export function getSelectedNoVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_noURI, _noVoices()) ?? _noVoices()[0] ?? null;
}
export function getSelectedLaVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_laURI, _laVoices()) ?? _laVoices()[0] ?? null;
}
export function getSelectedLtVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_ltURI, _ltVoices()) ?? _ltVoices()[0] ?? null;
}
export function getSelectedLvVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_lvURI, _lvVoices()) ?? _lvVoices()[0] ?? null;
}
export function getSelectedEtVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_etURI, _etVoices()) ?? _etVoices()[0] ?? null;
}
export function getSelectedSlVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_slURI, _slVoices()) ?? _slVoices()[0] ?? null;
}
export function getSelectedMkVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_mkURI, _mkVoices()) ?? _mkVoices()[0] ?? null;
}
export function getSelectedSqVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_sqURI, _sqVoices()) ?? _sqVoices()[0] ?? null;
}
export function getSelectedIsVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_isURI, _isVoices()) ?? _isVoices()[0] ?? null;
}
export function getSelectedCyVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_cyURI, _cyVoices()) ?? _cyVoices()[0] ?? null;
}
export function getSelectedGaVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_gaURI, _gaVoices()) ?? _gaVoices()[0] ?? null;
}
export function getSelectedTlVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_tlURI, _tlVoices()) ?? _tlVoices()[0] ?? null;
}
export function getSelectedMnVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_mnURI, _mnVoices()) ?? _mnVoices()[0] ?? null;
}
export function getSelectedUzVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_uzURI, _uzVoices()) ?? _uzVoices()[0] ?? null;
}
export function getSelectedAmVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_amURI, _amVoices()) ?? _amVoices()[0] ?? null;
}
export function getSelectedEoVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_eoURI, _eoVoices()) ?? _eoVoices()[0] ?? null;
}
export function getSelectedTaVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_taURI, _taVoices()) ?? _taVoices()[0] ?? null;
}
export function getSelectedPaVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_paURI, _paVoices()) ?? _paVoices()[0] ?? null;
}
export function getSelectedZuVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_zuURI, _zuVoices()) ?? _zuVoices()[0] ?? null;
}
export function getSelectedAfVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_afURI, _afVoices()) ?? _afVoices()[0] ?? null;
}
export function getSelectedKyVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_kyURI, _kyVoices()) ?? _kyVoices()[0] ?? null;
}
export function getSelectedTgVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_tgURI, _tgVoices()) ?? _tgVoices()[0] ?? null;
}
export function getSelectedTkVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_tkURI, _tkVoices()) ?? _tkVoices()[0] ?? null;
}
export function getSelectedUgVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_ugURI, _ugVoices()) ?? _ugVoices()[0] ?? null;
}
export function getSelectedEuVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_euURI, _euVoices()) ?? _euVoices()[0] ?? null;
}
export function getSelectedCaVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_caURI, _caVoices()) ?? _caVoices()[0] ?? null;
}
export function getSelectedGlVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_glURI, _glVoices()) ?? _glVoices()[0] ?? null;
}
export function getSelectedMtVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_mtURI, _mtVoices()) ?? _mtVoices()[0] ?? null;
}
export function getSelectedLbVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_lbURI, _lbVoices()) ?? _lbVoices()[0] ?? null;
}
export function getSelectedHtVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_htURI, _htVoices()) ?? _htVoices()[0] ?? null;
}
export function getSelectedBoVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_boURI, _boVoices()) ?? _boVoices()[0] ?? null;
}
export function getSelectedMyVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_myURI, _myVoices()) ?? _myVoices()[0] ?? null;
}
export function getSelectedKmVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_kmURI, _kmVoices()) ?? _kmVoices()[0] ?? null;
}
export function getSelectedLoVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_loURI, _loVoices()) ?? _loVoices()[0] ?? null;
}
export function getSelectedNeVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_neURI, _neVoices()) ?? _neVoices()[0] ?? null;
}
export function getSelectedSiVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_siURI, _siVoices()) ?? _siVoices()[0] ?? null;
}
export function getSelectedUrVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_urURI, _urVoices()) ?? _urVoices()[0] ?? null;
}
export function getSelectedTeVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_teURI, _teVoices()) ?? _teVoices()[0] ?? null;
}
export function getSelectedMlVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_mlURI, _mlVoices()) ?? _mlVoices()[0] ?? null;
}
export function getSelectedKnVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_knURI, _knVoices()) ?? _knVoices()[0] ?? null;
}
export function getSelectedMrVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_mrURI, _mrVoices()) ?? _mrVoices()[0] ?? null;
}
export function getSelectedGuVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_guURI, _guVoices()) ?? _guVoices()[0] ?? null;
}
export function getSelectedOrVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_orURI, _orVoices()) ?? _orVoices()[0] ?? null;
}
export function getSelectedAsVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_asURI, _asVoices()) ?? _asVoices()[0] ?? null;
}
export function getSelectedSdVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_sdURI, _sdVoices()) ?? _sdVoices()[0] ?? null;
}
export function getSelectedPsVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_psURI, _psVoices()) ?? _psVoices()[0] ?? null;
}
export function getSelectedSoVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_soURI, _soVoices()) ?? _soVoices()[0] ?? null;
}
export function getSelectedHaVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_haURI, _haVoices()) ?? _haVoices()[0] ?? null;
}
export function getSelectedYoVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_yoURI, _yoVoices()) ?? _yoVoices()[0] ?? null;
}
export function getSelectedIgVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_igURI, _igVoices()) ?? _igVoices()[0] ?? null;
}
export function getSelectedTiVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_tiURI, _tiVoices()) ?? _tiVoices()[0] ?? null;
}
export function getSelectedWoVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_woURI, _woVoices()) ?? _woVoices()[0] ?? null;
}
export function getSelectedMgVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_mgURI, _mgVoices()) ?? _mgVoices()[0] ?? null;
}
export function getSelectedXhVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_xhURI, _xhVoices()) ?? _xhVoices()[0] ?? null;
}
export function getSelectedSnVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_snURI, _snVoices()) ?? _snVoices()[0] ?? null;
}
export function getSelectedNyVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_nyURI, _nyVoices()) ?? _nyVoices()[0] ?? null;
}
export function getSelectedFjVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_fjURI, _fjVoices()) ?? _fjVoices()[0] ?? null;
}
export function getSelectedSmVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_smURI, _smVoices()) ?? _smVoices()[0] ?? null;
}
export function getSelectedToVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_toURI, _toVoices()) ?? _toVoices()[0] ?? null;
}
export function getSelectedMiVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_miURI, _miVoices()) ?? _miVoices()[0] ?? null;
}
export function getSelectedHawVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_hawURI, _hawVoices()) ?? _hawVoices()[0] ?? null;
}
export function getSelectedJvVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_jvURI, _jvVoices()) ?? _jvVoices()[0] ?? null;
}
export function getSelectedSuVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_suURI, _suVoices()) ?? _suVoices()[0] ?? null;
}
export function getSelectedGdVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_gdURI, _gdVoices()) ?? _gdVoices()[0] ?? null;
}
export function getSelectedBrVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_brURI, _brVoices()) ?? _brVoices()[0] ?? null;
}
export function getSelectedKwVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_kwURI, _kwVoices()) ?? _kwVoices()[0] ?? null;
}
export function getSelectedGvVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_gvURI, _gvVoices()) ?? _gvVoices()[0] ?? null;
}
export function getSelectedFoVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_foURI, _foVoices()) ?? _foVoices()[0] ?? null;
}
export function getSelectedOcVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_ocURI, _ocVoices()) ?? _ocVoices()[0] ?? null;
}
export function getSelectedCoVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_coURI, _coVoices()) ?? _coVoices()[0] ?? null;
}
export function getSelectedScVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_scURI, _scVoices()) ?? _scVoices()[0] ?? null;
}
export function getSelectedFyVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_fyURI, _fyVoices()) ?? _fyVoices()[0] ?? null;
}
export function getSelectedYiVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_yiURI, _yiVoices()) ?? _yiVoices()[0] ?? null;
}
export function getSelectedLadVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_ladURI, _ladVoices()) ?? _ladVoices()[0] ?? null;
}
export function getSelectedQuVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_quURI, _quVoices()) ?? _quVoices()[0] ?? null;
}
export function getSelectedGnVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_gnURI, _gnVoices()) ?? _gnVoices()[0] ?? null;
}
export function getSelectedAyVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_ayURI, _ayVoices()) ?? _ayVoices()[0] ?? null;
}
export function getSelectedDzVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_dzURI, _dzVoices()) ?? _dzVoices()[0] ?? null;
}
export function getSelectedDvVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_dvURI, _dvVoices()) ?? _dvVoices()[0] ?? null;
}
export function getSelectedTetVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_tetURI, _tetVoices()) ?? _tetVoices()[0] ?? null;
}
export function getSelectedBeVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_beURI, _beVoices()) ?? _beVoices()[0] ?? null;
}
export function getSelectedQyaVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_qyaURI, _qyaVoices()) ?? _qyaVoices()[0] ?? null;
}
export function getSelectedSjnVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_sjnURI, _sjnVoices()) ?? _sjnVoices()[0] ?? null;
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
    nlVoices = _sortVoices(_nlVoices()),
    viVoices = _sortVoices(_viVoices()),
    hiVoices = _sortVoices(_hiVoices()),
    bnVoices = _sortVoices(_bnVoices()),
    idVoices = _sortVoices(_idVoices()),
    pcmVoices = _sortVoices(_pcmVoices()),
    koVoices = _sortVoices(_koVoices()),
    faVoices = _sortVoices(_faVoices()),
    swVoices = _sortVoices(_swVoices()),
    msVoices = _sortVoices(_msVoices()),
    thVoices = _sortVoices(_thVoices()),
    azVoices = _sortVoices(_azVoices()),
    roVoices = _sortVoices(_roVoices()),
    huVoices = _sortVoices(_huVoices()),
    csVoices = _sortVoices(_csVoices()),
    kkVoices = _sortVoices(_kkVoices()),
    svVoices = _sortVoices(_svVoices()),
    kaVoices = _sortVoices(_kaVoices()),
    hrVoices = _sortVoices(_hrVoices()),
    srVoices = _sortVoices(_srVoices()),
    bsVoices = _sortVoices(_bsVoices()),
    bgVoices = _sortVoices(_bgVoices()),
    skVoices = _sortVoices(_skVoices()),
    hyVoices = _sortVoices(_hyVoices()),
    daVoices = _sortVoices(_daVoices()),
    fiVoices = _sortVoices(_fiVoices()),
    noVoices = _sortVoices(_noVoices()),
    laVoices = _sortVoices(_laVoices()),
    ltVoices = _sortVoices(_ltVoices()),
    lvVoices = _sortVoices(_lvVoices()),
    etVoices = _sortVoices(_etVoices()),
    slVoices = _sortVoices(_slVoices()),
    mkVoices = _sortVoices(_mkVoices()),
    sqVoices = _sortVoices(_sqVoices()),
    isVoices = _sortVoices(_isVoices()),
    cyVoices = _sortVoices(_cyVoices()),
    gaVoices = _sortVoices(_gaVoices()),
    tlVoices = _sortVoices(_tlVoices()),
    mnVoices = _sortVoices(_mnVoices()),
    uzVoices = _sortVoices(_uzVoices()),
    amVoices = _sortVoices(_amVoices()),
    eoVoices = _sortVoices(_eoVoices()),
    taVoices = _sortVoices(_taVoices()),
    paVoices = _sortVoices(_paVoices()),
    zuVoices = _sortVoices(_zuVoices()),
    afVoices = _sortVoices(_afVoices()),
    kyVoices = _sortVoices(_kyVoices()),
    tgVoices = _sortVoices(_tgVoices()),
    tkVoices = _sortVoices(_tkVoices()),
    ugVoices = _sortVoices(_ugVoices()),
    euVoices = _sortVoices(_euVoices()),
    caVoices = _sortVoices(_caVoices()),
    glVoices = _sortVoices(_glVoices()),
    mtVoices = _sortVoices(_mtVoices()),
    lbVoices = _sortVoices(_lbVoices()),
    htVoices = _sortVoices(_htVoices()),
    boVoices = _sortVoices(_boVoices()),
    myVoices = _sortVoices(_myVoices()),
    kmVoices = _sortVoices(_kmVoices()),
    loVoices = _sortVoices(_loVoices()),
    neVoices = _sortVoices(_neVoices()),
    siVoices = _sortVoices(_siVoices()),
    urVoices = _sortVoices(_urVoices()),
    teVoices = _sortVoices(_teVoices()),
    mlVoices = _sortVoices(_mlVoices()),
    knVoices = _sortVoices(_knVoices()),
    mrVoices = _sortVoices(_mrVoices()),
    guVoices = _sortVoices(_guVoices()),
    orVoices = _sortVoices(_orVoices()),
    asVoices = _sortVoices(_asVoices()),
    sdVoices = _sortVoices(_sdVoices()),
    psVoices = _sortVoices(_psVoices()),
    soVoices = _sortVoices(_soVoices()),
    haVoices = _sortVoices(_haVoices()),
    yoVoices = _sortVoices(_yoVoices()),
    igVoices = _sortVoices(_igVoices()),
    tiVoices = _sortVoices(_tiVoices()),
    woVoices = _sortVoices(_woVoices()),
    mgVoices = _sortVoices(_mgVoices()),
    xhVoices = _sortVoices(_xhVoices()),
    snVoices = _sortVoices(_snVoices()),
    nyVoices = _sortVoices(_nyVoices()),
    fjVoices = _sortVoices(_fjVoices()),
    smVoices = _sortVoices(_smVoices()),
    toVoices = _sortVoices(_toVoices()),
    miVoices = _sortVoices(_miVoices()),
    hawVoices = _sortVoices(_hawVoices()),
    jvVoices = _sortVoices(_jvVoices()),
    suVoices = _sortVoices(_suVoices()),
    gdVoices = _sortVoices(_gdVoices()),
    brVoices = _sortVoices(_brVoices()),
    kwVoices = _sortVoices(_kwVoices()),
    gvVoices = _sortVoices(_gvVoices()),
    foVoices = _sortVoices(_foVoices()),
    ocVoices = _sortVoices(_ocVoices()),
    coVoices = _sortVoices(_coVoices()),
    scVoices = _sortVoices(_scVoices()),
    fyVoices = _sortVoices(_fyVoices()),
    yiVoices = _sortVoices(_yiVoices()),
    ladVoices = _sortVoices(_ladVoices()),
    quVoices = _sortVoices(_quVoices()),
    gnVoices = _sortVoices(_gnVoices()),
    ayVoices = _sortVoices(_ayVoices()),
    dzVoices = _sortVoices(_dzVoices()),
    dvVoices = _sortVoices(_dvVoices()),
    tetVoices = _sortVoices(_tetVoices()),
    beVoices = _sortVoices(_beVoices()),
    qyaVoices = _sortVoices(_qyaVoices()),
    sjnVoices = _sortVoices(_sjnVoices());
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
    !nlVoices.length &&
    !viVoices.length &&
    !hiVoices.length &&
    !bnVoices.length &&
    !idVoices.length &&
    !pcmVoices.length &&
    !koVoices.length &&
    !faVoices.length &&
    !swVoices.length &&
    !msVoices.length &&
    !thVoices.length &&
    !azVoices.length &&
    !roVoices.length &&
    !huVoices.length &&
    !csVoices.length &&
    !kkVoices.length &&
    !svVoices.length &&
    !kaVoices.length &&
    !hrVoices.length &&
    !srVoices.length &&
    !bsVoices.length &&
    !bgVoices.length &&
    !skVoices.length &&
    !hyVoices.length &&
    !daVoices.length &&
    !fiVoices.length &&
    !noVoices.length &&
    !laVoices.length &&
    !ltVoices.length &&
    !lvVoices.length &&
    !etVoices.length &&
    !slVoices.length &&
    !mkVoices.length &&
    !sqVoices.length &&
    !isVoices.length &&
    !cyVoices.length &&
    !gaVoices.length &&
    !tlVoices.length &&
    !mnVoices.length &&
    !uzVoices.length &&
    !amVoices.length &&
    !eoVoices.length &&
    !taVoices.length &&
    !paVoices.length &&
    !zuVoices.length &&
    !afVoices.length &&
    !kyVoices.length &&
    !tgVoices.length &&
    !tkVoices.length &&
    !ugVoices.length &&
    !euVoices.length &&
    !caVoices.length &&
    !glVoices.length &&
    !mtVoices.length &&
    !lbVoices.length &&
    !htVoices.length &&
    !boVoices.length &&
    !myVoices.length &&
    !kmVoices.length &&
    !loVoices.length &&
    !neVoices.length &&
    !siVoices.length &&
    !urVoices.length &&
    !teVoices.length &&
    !mlVoices.length &&
    !knVoices.length &&
    !mrVoices.length &&
    !guVoices.length &&
    !orVoices.length &&
    !asVoices.length &&
    !sdVoices.length &&
    !psVoices.length &&
    !soVoices.length &&
    !haVoices.length &&
    !yoVoices.length &&
    !igVoices.length &&
    !tiVoices.length &&
    !woVoices.length &&
    !mgVoices.length &&
    !xhVoices.length &&
    !snVoices.length &&
    !nyVoices.length &&
    !fjVoices.length &&
    !smVoices.length &&
    !toVoices.length &&
    !miVoices.length &&
    !hawVoices.length &&
    !jvVoices.length &&
    !suVoices.length &&
    !gdVoices.length &&
    !brVoices.length &&
    !kwVoices.length &&
    !gvVoices.length &&
    !foVoices.length &&
    !ocVoices.length &&
    !coVoices.length &&
    !scVoices.length &&
    !fyVoices.length &&
    !yiVoices.length &&
    !ladVoices.length &&
    !quVoices.length &&
    !gnVoices.length &&
    !ayVoices.length &&
    !dzVoices.length &&
    !dvVoices.length &&
    !tetVoices.length &&
    !beVoices.length &&
    !qyaVoices.length &&
    !sjnVoices.length
  ) {
    container.innerHTML =
      '<span style="font-size:.78rem;color:var(--text3);">' +
      t('settings.voicesNotFound') +
      '</span>';
    return;
  }
  // Sections are collected here instead of appended directly, so they can be
  // sorted alphabetically (by the localized language name) before being
  // flushed to `container` in one pass — see the sort right after the last
  // addSection/addMissing call below.
  const sections: { key: string; el: HTMLElement }[] = [];
  const langSortKey = (id: string): string => t(`lang.${id === 'uk' ? 'ua' : id}`);
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
          else if (storageKey === 'ew_ws_vi_voice') _viURI = uri;
          else if (storageKey === 'ew_ws_hi_voice') _hiURI = uri;
          else if (storageKey === 'ew_ws_bn_voice') _bnURI = uri;
          else if (storageKey === 'ew_ws_id_voice') _idURI = uri;
          else if (storageKey === 'ew_ws_pcm_voice') _pcmURI = uri;
          else if (storageKey === 'ew_ws_ko_voice') _koURI = uri;
          else if (storageKey === 'ew_ws_fa_voice') _faURI = uri;
          else if (storageKey === 'ew_ws_sw_voice') _swURI = uri;
          else if (storageKey === 'ew_ws_ms_voice') _msURI = uri;
          else if (storageKey === 'ew_ws_th_voice') _thURI = uri;
          else if (storageKey === 'ew_ws_az_voice') _azURI = uri;
          else if (storageKey === 'ew_ws_ro_voice') _roURI = uri;
          else if (storageKey === 'ew_ws_hu_voice') _huURI = uri;
          else if (storageKey === 'ew_ws_cs_voice') _csURI = uri;
          else if (storageKey === 'ew_ws_kk_voice') _kkURI = uri;
          else if (storageKey === 'ew_ws_sv_voice') _svURI = uri;
          else if (storageKey === 'ew_ws_ka_voice') _kaURI = uri;
          else if (storageKey === 'ew_ws_hr_voice') _hrURI = uri;
          else if (storageKey === 'ew_ws_sr_voice') _srURI = uri;
          else if (storageKey === 'ew_ws_bs_voice') _bsURI = uri;
          else if (storageKey === 'ew_ws_bg_voice') _bgURI = uri;
          else if (storageKey === 'ew_ws_sk_voice') _skURI = uri;
          else if (storageKey === 'ew_ws_hy_voice') _hyURI = uri;
          else if (storageKey === 'ew_ws_da_voice') _daURI = uri;
          else if (storageKey === 'ew_ws_fi_voice') _fiURI = uri;
          else if (storageKey === 'ew_ws_no_voice') _noURI = uri;
          else if (storageKey === 'ew_ws_la_voice') _laURI = uri;
          else if (storageKey === 'ew_ws_lt_voice') _ltURI = uri;
          else if (storageKey === 'ew_ws_lv_voice') _lvURI = uri;
          else if (storageKey === 'ew_ws_et_voice') _etURI = uri;
          else if (storageKey === 'ew_ws_sl_voice') _slURI = uri;
          else if (storageKey === 'ew_ws_mk_voice') _mkURI = uri;
          else if (storageKey === 'ew_ws_sq_voice') _sqURI = uri;
          else if (storageKey === 'ew_ws_is_voice') _isURI = uri;
          else if (storageKey === 'ew_ws_cy_voice') _cyURI = uri;
          else if (storageKey === 'ew_ws_ga_voice') _gaURI = uri;
          else if (storageKey === 'ew_ws_tl_voice') _tlURI = uri;
          else if (storageKey === 'ew_ws_mn_voice') _mnURI = uri;
          else if (storageKey === 'ew_ws_uz_voice') _uzURI = uri;
          else if (storageKey === 'ew_ws_am_voice') _amURI = uri;
          else if (storageKey === 'ew_ws_eo_voice') _eoURI = uri;
          else if (storageKey === 'ew_ws_ta_voice') _taURI = uri;
          else if (storageKey === 'ew_ws_pa_voice') _paURI = uri;
          else if (storageKey === 'ew_ws_zu_voice') _zuURI = uri;
          else if (storageKey === 'ew_ws_af_voice') _afURI = uri;
          else if (storageKey === 'ew_ws_ky_voice') _kyURI = uri;
          else if (storageKey === 'ew_ws_tg_voice') _tgURI = uri;
          else if (storageKey === 'ew_ws_tk_voice') _tkURI = uri;
          else if (storageKey === 'ew_ws_ug_voice') _ugURI = uri;
          else if (storageKey === 'ew_ws_eu_voice') _euURI = uri;
          else if (storageKey === 'ew_ws_ca_voice') _caURI = uri;
          else if (storageKey === 'ew_ws_gl_voice') _glURI = uri;
          else if (storageKey === 'ew_ws_mt_voice') _mtURI = uri;
          else if (storageKey === 'ew_ws_lb_voice') _lbURI = uri;
          else if (storageKey === 'ew_ws_ht_voice') _htURI = uri;
          else if (storageKey === 'ew_ws_bo_voice') _boURI = uri;
          else if (storageKey === 'ew_ws_my_voice') _myURI = uri;
          else if (storageKey === 'ew_ws_km_voice') _kmURI = uri;
          else if (storageKey === 'ew_ws_lo_voice') _loURI = uri;
          else if (storageKey === 'ew_ws_ne_voice') _neURI = uri;
          else if (storageKey === 'ew_ws_si_voice') _siURI = uri;
          else if (storageKey === 'ew_ws_ur_voice') _urURI = uri;
          else if (storageKey === 'ew_ws_te_voice') _teURI = uri;
          else if (storageKey === 'ew_ws_ml_voice') _mlURI = uri;
          else if (storageKey === 'ew_ws_kn_voice') _knURI = uri;
          else if (storageKey === 'ew_ws_mr_voice') _mrURI = uri;
          else if (storageKey === 'ew_ws_gu_voice') _guURI = uri;
          else if (storageKey === 'ew_ws_or_voice') _orURI = uri;
          else if (storageKey === 'ew_ws_as_voice') _asURI = uri;
          else if (storageKey === 'ew_ws_sd_voice') _sdURI = uri;
          else if (storageKey === 'ew_ws_ps_voice') _psURI = uri;
          else if (storageKey === 'ew_ws_so_voice') _soURI = uri;
          else if (storageKey === 'ew_ws_ha_voice') _haURI = uri;
          else if (storageKey === 'ew_ws_yo_voice') _yoURI = uri;
          else if (storageKey === 'ew_ws_ig_voice') _igURI = uri;
          else if (storageKey === 'ew_ws_ti_voice') _tiURI = uri;
          else if (storageKey === 'ew_ws_wo_voice') _woURI = uri;
          else if (storageKey === 'ew_ws_mg_voice') _mgURI = uri;
          else if (storageKey === 'ew_ws_xh_voice') _xhURI = uri;
          else if (storageKey === 'ew_ws_sn_voice') _snURI = uri;
          else if (storageKey === 'ew_ws_ny_voice') _nyURI = uri;
          else if (storageKey === 'ew_ws_fj_voice') _fjURI = uri;
          else if (storageKey === 'ew_ws_sm_voice') _smURI = uri;
          else if (storageKey === 'ew_ws_to_voice') _toURI = uri;
          else if (storageKey === 'ew_ws_mi_voice') _miURI = uri;
          else if (storageKey === 'ew_ws_haw_voice') _hawURI = uri;
          else if (storageKey === 'ew_ws_jv_voice') _jvURI = uri;
          else if (storageKey === 'ew_ws_su_voice') _suURI = uri;
          else if (storageKey === 'ew_ws_gd_voice') _gdURI = uri;
          else if (storageKey === 'ew_ws_br_voice') _brURI = uri;
          else if (storageKey === 'ew_ws_kw_voice') _kwURI = uri;
          else if (storageKey === 'ew_ws_gv_voice') _gvURI = uri;
          else if (storageKey === 'ew_ws_fo_voice') _foURI = uri;
          else if (storageKey === 'ew_ws_oc_voice') _ocURI = uri;
          else if (storageKey === 'ew_ws_co_voice') _coURI = uri;
          else if (storageKey === 'ew_ws_sc_voice') _scURI = uri;
          else if (storageKey === 'ew_ws_fy_voice') _fyURI = uri;
          else if (storageKey === 'ew_ws_yi_voice') _yiURI = uri;
          else if (storageKey === 'ew_ws_lad_voice') _ladURI = uri;
          else if (storageKey === 'ew_ws_qu_voice') _quURI = uri;
          else if (storageKey === 'ew_ws_gn_voice') _gnURI = uri;
          else if (storageKey === 'ew_ws_ay_voice') _ayURI = uri;
          else if (storageKey === 'ew_ws_dz_voice') _dzURI = uri;
          else if (storageKey === 'ew_ws_dv_voice') _dvURI = uri;
          else if (storageKey === 'ew_ws_tet_voice') _tetURI = uri;
          else if (storageKey === 'ew_ws_be_voice') _beURI = uri;
          else if (storageKey === 'ew_ws_qya_voice') _qyaURI = uri;
          else if (storageKey === 'ew_ws_sjn_voice') _sjnURI = uri;
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
    sections.push({ key: langSortKey(id), el: details });
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
    sections.push({ key: langSortKey(id), el: details });
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
  if (viVoices.length)
    addSection(
      'vi',
      'vn',
      t('settings.viVoicesTitle'),
      viVoices,
      _viURI,
      'ew_ws_vi_voice',
      'Xin chào, bạn khỏe không?',
    );
  else addMissing('vi', 'vn', 'settings.noViVoicesTitle', 'settings.noViVoicesDesc');
  if (hiVoices.length)
    addSection(
      'hi',
      'in',
      t('settings.hiVoicesTitle'),
      hiVoices,
      _hiURI,
      'ew_ws_hi_voice',
      "नमस्ते! आपसे मिलकर खुशी हुई।",
    );
  else addMissing('hi', 'in', 'settings.noHiVoicesTitle', 'settings.noHiVoicesDesc');
  if (bnVoices.length)
    addSection(
      'bn',
      'bd',
      t('settings.bnVoicesTitle'),
      bnVoices,
      _bnURI,
      'ew_ws_bn_voice',
      "হ্যালো! আপনার সাথে দেখা করে ভালো লাগলো।",
    );
  else addMissing('bn', 'bd', 'settings.noBnVoicesTitle', 'settings.noBnVoicesDesc');
  if (idVoices.length)
    addSection(
      'id',
      'id',
      t('settings.idVoicesTitle'),
      idVoices,
      _idURI,
      'ew_ws_id_voice',
      "Halo! Senang bertemu denganmu.",
    );
  else addMissing('id', 'id', 'settings.noIdVoicesTitle', 'settings.noIdVoicesDesc');
  if (pcmVoices.length)
    addSection(
      'pcm',
      'ng',
      t('settings.pcmVoicesTitle'),
      pcmVoices,
      _pcmURI,
      'ew_ws_pcm_voice',
      "Hello! E good to meet you.",
    );
  else addMissing('pcm', 'ng', 'settings.noPcmVoicesTitle', 'settings.noPcmVoicesDesc');
  if (koVoices.length)
    addSection(
      'ko',
      'kr',
      t('settings.koVoicesTitle'),
      koVoices,
      _koURI,
      'ew_ws_ko_voice',
      "안녕하세요! 만나서 반갑습니다.",
    );
  else addMissing('ko', 'kr', 'settings.noKoVoicesTitle', 'settings.noKoVoicesDesc');
  if (faVoices.length)
    addSection(
      'fa',
      'ir',
      t('settings.faVoicesTitle'),
      faVoices,
      _faURI,
      'ew_ws_fa_voice',
      "سلام! از آشنایی با شما خوشحالم.",
    );
  else addMissing('fa', 'ir', 'settings.noFaVoicesTitle', 'settings.noFaVoicesDesc');
  if (swVoices.length)
    addSection(
      'sw',
      'tz',
      t('settings.swVoicesTitle'),
      swVoices,
      _swURI,
      'ew_ws_sw_voice',
      "Habari! Nafurahi kukutana nawe.",
    );
  else addMissing('sw', 'tz', 'settings.noSwVoicesTitle', 'settings.noSwVoicesDesc');
  if (msVoices.length)
    addSection(
      'ms',
      'my',
      t('settings.msVoicesTitle'),
      msVoices,
      _msURI,
      'ew_ws_ms_voice',
      "Helo! Gembira bertemu dengan awak.",
    );
  else addMissing('ms', 'my', 'settings.noMsVoicesTitle', 'settings.noMsVoicesDesc');
  if (thVoices.length)
    addSection(
      'th',
      'th',
      t('settings.thVoicesTitle'),
      thVoices,
      _thURI,
      'ew_ws_th_voice',
      "สวัสดี! ยินดีที่ได้พบคุณ",
    );
  else addMissing('th', 'th', 'settings.noThVoicesTitle', 'settings.noThVoicesDesc');
  if (azVoices.length)
    addSection(
      'az',
      'az',
      t('settings.azVoicesTitle'),
      azVoices,
      _azURI,
      'ew_ws_az_voice',
      "Salam! Sizinlə tanış olmağıma şadam.",
    );
  else addMissing('az', 'az', 'settings.noAzVoicesTitle', 'settings.noAzVoicesDesc');
  if (roVoices.length)
    addSection(
      'ro',
      'ro',
      t('settings.roVoicesTitle'),
      roVoices,
      _roURI,
      'ew_ws_ro_voice',
      "Salut! Mă bucur să te cunosc.",
    );
  else addMissing('ro', 'ro', 'settings.noRoVoicesTitle', 'settings.noRoVoicesDesc');
  if (huVoices.length)
    addSection(
      'hu',
      'hu',
      t('settings.huVoicesTitle'),
      huVoices,
      _huURI,
      'ew_ws_hu_voice',
      "Szia! Örülök, hogy megismertelek.",
    );
  else addMissing('hu', 'hu', 'settings.noHuVoicesTitle', 'settings.noHuVoicesDesc');
  if (csVoices.length)
    addSection(
      'cs',
      'cz',
      t('settings.csVoicesTitle'),
      csVoices,
      _csURI,
      'ew_ws_cs_voice',
      "Ahoj! Těší mě, že tě poznávám.",
    );
  else addMissing('cs', 'cz', 'settings.noCsVoicesTitle', 'settings.noCsVoicesDesc');
  if (kkVoices.length)
    addSection(
      'kk',
      'kz',
      t('settings.kkVoicesTitle'),
      kkVoices,
      _kkURI,
      'ew_ws_kk_voice',
      "Сәлем! Танысқаныма қуаныштымын.",
    );
  else addMissing('kk', 'kz', 'settings.noKkVoicesTitle', 'settings.noKkVoicesDesc');
  if (svVoices.length)
    addSection(
      'sv',
      'se',
      t('settings.svVoicesTitle'),
      svVoices,
      _svURI,
      'ew_ws_sv_voice',
      "Hej! Trevligt att träffa dig.",
    );
  else addMissing('sv', 'se', 'settings.noSvVoicesTitle', 'settings.noSvVoicesDesc');
  if (kaVoices.length)
    addSection(
      'ka',
      'ge',
      t('settings.kaVoicesTitle'),
      kaVoices,
      _kaURI,
      'ew_ws_ka_voice',
      "გამარჯობა! სასიხარულოა შენი გაცნობა.",
    );
  else addMissing('ka', 'ge', 'settings.noKaVoicesTitle', 'settings.noKaVoicesDesc');
  if (hrVoices.length)
    addSection(
      'hr',
      'hr',
      t('settings.hrVoicesTitle'),
      hrVoices,
      _hrURI,
      'ew_ws_hr_voice',
      "Bok! Drago mi je upoznati te.",
    );
  else addMissing('hr', 'hr', 'settings.noHrVoicesTitle', 'settings.noHrVoicesDesc');
  if (srVoices.length)
    addSection(
      'sr',
      'rs',
      t('settings.srVoicesTitle'),
      srVoices,
      _srURI,
      'ew_ws_sr_voice',
      "Здраво! Драго ми је што сам те упознао.",
    );
  else addMissing('sr', 'rs', 'settings.noSrVoicesTitle', 'settings.noSrVoicesDesc');
  if (bsVoices.length)
    addSection(
      'bs',
      'ba',
      t('settings.bsVoicesTitle'),
      bsVoices,
      _bsURI,
      'ew_ws_bs_voice',
      "Zdravo! Drago mi je što smo se upoznali.",
    );
  else addMissing('bs', 'ba', 'settings.noBsVoicesTitle', 'settings.noBsVoicesDesc');
  if (bgVoices.length)
    addSection(
      'bg',
      'bg',
      t('settings.bgVoicesTitle'),
      bgVoices,
      _bgURI,
      'ew_ws_bg_voice',
      "Здравей! Приятно ми е да се запознаем.",
    );
  else addMissing('bg', 'bg', 'settings.noBgVoicesTitle', 'settings.noBgVoicesDesc');
  if (skVoices.length)
    addSection(
      'sk',
      'sk',
      t('settings.skVoicesTitle'),
      skVoices,
      _skURI,
      'ew_ws_sk_voice',
      "Ahoj! Teší ma, že ťa spoznávam.",
    );
  else addMissing('sk', 'sk', 'settings.noSkVoicesTitle', 'settings.noSkVoicesDesc');
  if (hyVoices.length)
    addSection(
      'hy',
      'am',
      t('settings.hyVoicesTitle'),
      hyVoices,
      _hyURI,
      'ew_ws_hy_voice',
      "Բարև! Ուրախ եմ ծանոթանալ ձեզ հետ.",
    );
  else addMissing('hy', 'am', 'settings.noHyVoicesTitle', 'settings.noHyVoicesDesc');
  if (daVoices.length)
    addSection(
      'da',
      'dk',
      t('settings.daVoicesTitle'),
      daVoices,
      _daURI,
      'ew_ws_da_voice',
      "Hej! Rart at møde dig.",
    );
  else addMissing('da', 'dk', 'settings.noDaVoicesTitle', 'settings.noDaVoicesDesc');
  if (fiVoices.length)
    addSection(
      'fi',
      'fi',
      t('settings.fiVoicesTitle'),
      fiVoices,
      _fiURI,
      'ew_ws_fi_voice',
      "Hei! Hauska tavata sinut.",
    );
  else addMissing('fi', 'fi', 'settings.noFiVoicesTitle', 'settings.noFiVoicesDesc');
  if (noVoices.length)
    addSection(
      'no',
      'no',
      t('settings.noVoicesTitle'),
      noVoices,
      _noURI,
      'ew_ws_no_voice',
      "Hei! Hyggelig å møte deg.",
    );
  else addMissing('no', 'no', 'settings.noNoVoicesTitle', 'settings.noNoVoicesDesc');
  if (laVoices.length)
    addSection(
      'la',
      'spqr',
      t('settings.laVoicesTitle'),
      laVoices,
      _laURI,
      'ew_ws_la_voice',
      "Salve! Gratum est te cognoscere.",
    );
  else addMissing('la', 'spqr', 'settings.noLaVoicesTitle', 'settings.noLaVoicesDesc');
  if (ltVoices.length)
    addSection(
      'lt',
      'lt',
      t('settings.ltVoicesTitle'),
      ltVoices,
      _ltURI,
      'ew_ws_lt_voice',
      "Sveiki! Malonu su jumis susipažinti.",
    );
  else addMissing('lt', 'lt', 'settings.noLtVoicesTitle', 'settings.noLtVoicesDesc');
  if (lvVoices.length)
    addSection(
      'lv',
      'lv',
      t('settings.lvVoicesTitle'),
      lvVoices,
      _lvURI,
      'ew_ws_lv_voice',
      "Sveiki! Prieks iepazīties.",
    );
  else addMissing('lv', 'lv', 'settings.noLvVoicesTitle', 'settings.noLvVoicesDesc');
  if (etVoices.length)
    addSection(
      'et',
      'ee',
      t('settings.etVoicesTitle'),
      etVoices,
      _etURI,
      'ew_ws_et_voice',
      "Tere! Meeldiv tutvuda.",
    );
  else addMissing('et', 'ee', 'settings.noEtVoicesTitle', 'settings.noEtVoicesDesc');
  if (slVoices.length)
    addSection(
      'sl',
      'si',
      t('settings.slVoicesTitle'),
      slVoices,
      _slURI,
      'ew_ws_sl_voice',
      "Živjo! Lepo, da sva se spoznala.",
    );
  else addMissing('sl', 'si', 'settings.noSlVoicesTitle', 'settings.noSlVoicesDesc');
  if (mkVoices.length)
    addSection(
      'mk',
      'mk',
      t('settings.mkVoicesTitle'),
      mkVoices,
      _mkURI,
      'ew_ws_mk_voice',
      "Здраво! Мило ми е што те запознав.",
    );
  else addMissing('mk', 'mk', 'settings.noMkVoicesTitle', 'settings.noMkVoicesDesc');
  if (sqVoices.length)
    addSection(
      'sq',
      'al',
      t('settings.sqVoicesTitle'),
      sqVoices,
      _sqURI,
      'ew_ws_sq_voice',
      "Përshëndetje! Gëzohem që të njoha.",
    );
  else addMissing('sq', 'al', 'settings.noSqVoicesTitle', 'settings.noSqVoicesDesc');
  if (isVoices.length)
    addSection(
      'is',
      'is',
      t('settings.isVoicesTitle'),
      isVoices,
      _isURI,
      'ew_ws_is_voice',
      "Hæ! Gaman að kynnast þér.",
    );
  else addMissing('is', 'is', 'settings.noIsVoicesTitle', 'settings.noIsVoicesDesc');
  if (cyVoices.length)
    addSection(
      'cy',
      'wls',
      t('settings.cyVoicesTitle'),
      cyVoices,
      _cyURI,
      'ew_ws_cy_voice',
      "Helo! Braf cwrdd â chi.",
    );
  else addMissing('cy', 'wls', 'settings.noCyVoicesTitle', 'settings.noCyVoicesDesc');
  if (gaVoices.length)
    addSection(
      'ga',
      'ie',
      t('settings.gaVoicesTitle'),
      gaVoices,
      _gaURI,
      'ew_ws_ga_voice',
      "Dia duit! Tá áthas orm bualadh leat.",
    );
  else addMissing('ga', 'ie', 'settings.noGaVoicesTitle', 'settings.noGaVoicesDesc');
  if (tlVoices.length)
    addSection(
      'tl',
      'ph',
      t('settings.tlVoicesTitle'),
      tlVoices,
      _tlURI,
      'ew_ws_tl_voice',
      "Kamusta! Ikinagagalak kitang makilala.",
    );
  else addMissing('tl', 'ph', 'settings.noTlVoicesTitle', 'settings.noTlVoicesDesc');
  if (mnVoices.length)
    addSection(
      'mn',
      'mn',
      t('settings.mnVoicesTitle'),
      mnVoices,
      _mnURI,
      'ew_ws_mn_voice',
      "Сайн байна уу! Танилцаж сайхан байна.",
    );
  else addMissing('mn', 'mn', 'settings.noMnVoicesTitle', 'settings.noMnVoicesDesc');
  if (uzVoices.length)
    addSection(
      'uz',
      'uz',
      t('settings.uzVoicesTitle'),
      uzVoices,
      _uzURI,
      'ew_ws_uz_voice',
      "Salom! Siz bilan tanishganimdan xursandman.",
    );
  else addMissing('uz', 'uz', 'settings.noUzVoicesTitle', 'settings.noUzVoicesDesc');
  if (amVoices.length)
    addSection(
      'am',
      'et',
      t('settings.amVoicesTitle'),
      amVoices,
      _amURI,
      'ew_ws_am_voice',
      "ሰላም! በመተዋወቃችን ደስ ብሎኛል።",
    );
  else addMissing('am', 'et', 'settings.noAmVoicesTitle', 'settings.noAmVoicesDesc');
  if (eoVoices.length)
    addSection(
      'eo',
      'eo',
      t('settings.eoVoicesTitle'),
      eoVoices,
      _eoURI,
      'ew_ws_eo_voice',
      "Saluton! Mi ĝojas vin renkonti.",
    );
  if (taVoices.length)
    addSection(
      'ta',
      'in',
      t('settings.taVoicesTitle'),
      taVoices,
      _taURI,
      'ew_ws_ta_voice',
      "Hello!",
    );
  else addMissing('ta', 'in', 'settings.noTaVoicesTitle', 'settings.noTaVoicesDesc');
  if (paVoices.length)
    addSection(
      'pa',
      'in',
      t('settings.paVoicesTitle'),
      paVoices,
      _paURI,
      'ew_ws_pa_voice',
      "Hello!",
    );
  else addMissing('pa', 'in', 'settings.noPaVoicesTitle', 'settings.noPaVoicesDesc');
  if (zuVoices.length)
    addSection(
      'zu',
      'za',
      t('settings.zuVoicesTitle'),
      zuVoices,
      _zuURI,
      'ew_ws_zu_voice',
      "Hello!",
    );
  else addMissing('zu', 'za', 'settings.noZuVoicesTitle', 'settings.noZuVoicesDesc');
  if (afVoices.length)
    addSection(
      'af',
      'za',
      t('settings.afVoicesTitle'),
      afVoices,
      _afURI,
      'ew_ws_af_voice',
      "Hello!",
    );
  else addMissing('af', 'za', 'settings.noAfVoicesTitle', 'settings.noAfVoicesDesc');
  if (kyVoices.length)
    addSection(
      'ky',
      'kg',
      t('settings.kyVoicesTitle'),
      kyVoices,
      _kyURI,
      'ew_ws_ky_voice',
      "Hello!",
    );
  else addMissing('ky', 'kg', 'settings.noKyVoicesTitle', 'settings.noKyVoicesDesc');
  if (tgVoices.length)
    addSection(
      'tg',
      'tj',
      t('settings.tgVoicesTitle'),
      tgVoices,
      _tgURI,
      'ew_ws_tg_voice',
      "Hello!",
    );
  else addMissing('tg', 'tj', 'settings.noTgVoicesTitle', 'settings.noTgVoicesDesc');
  if (tkVoices.length)
    addSection(
      'tk',
      'tm',
      t('settings.tkVoicesTitle'),
      tkVoices,
      _tkURI,
      'ew_ws_tk_voice',
      "Hello!",
    );
  else addMissing('tk', 'tm', 'settings.noTkVoicesTitle', 'settings.noTkVoicesDesc');
  if (ugVoices.length)
    addSection(
      'ug',
      'cn',
      t('settings.ugVoicesTitle'),
      ugVoices,
      _ugURI,
      'ew_ws_ug_voice',
      "Hello!",
    );
  else addMissing('ug', 'cn', 'settings.noUgVoicesTitle', 'settings.noUgVoicesDesc');
  if (euVoices.length)
    addSection(
      'eu',
      'eu',
      t('settings.euVoicesTitle'),
      euVoices,
      _euURI,
      'ew_ws_eu_voice',
      "Hello!",
    );
  else addMissing('eu', 'eu', 'settings.noEuVoicesTitle', 'settings.noEuVoicesDesc');
  if (caVoices.length)
    addSection(
      'ca',
      'cat',
      t('settings.caVoicesTitle'),
      caVoices,
      _caURI,
      'ew_ws_ca_voice',
      "Hello!",
    );
  else addMissing('ca', 'cat', 'settings.noCaVoicesTitle', 'settings.noCaVoicesDesc');
  if (glVoices.length)
    addSection(
      'gl',
      'gal',
      t('settings.glVoicesTitle'),
      glVoices,
      _glURI,
      'ew_ws_gl_voice',
      "Hello!",
    );
  else addMissing('gl', 'gal', 'settings.noGlVoicesTitle', 'settings.noGlVoicesDesc');
  if (mtVoices.length)
    addSection(
      'mt',
      'mt',
      t('settings.mtVoicesTitle'),
      mtVoices,
      _mtURI,
      'ew_ws_mt_voice',
      "Hello!",
    );
  else addMissing('mt', 'mt', 'settings.noMtVoicesTitle', 'settings.noMtVoicesDesc');
  if (lbVoices.length)
    addSection(
      'lb',
      'lu',
      t('settings.lbVoicesTitle'),
      lbVoices,
      _lbURI,
      'ew_ws_lb_voice',
      "Hello!",
    );
  else addMissing('lb', 'lu', 'settings.noLbVoicesTitle', 'settings.noLbVoicesDesc');
  if (htVoices.length)
    addSection(
      'ht',
      'ht',
      t('settings.htVoicesTitle'),
      htVoices,
      _htURI,
      'ew_ws_ht_voice',
      "Hello!",
    );
  else addMissing('ht', 'ht', 'settings.noHtVoicesTitle', 'settings.noHtVoicesDesc');
  if (boVoices.length)
    addSection(
      'bo',
      'cn',
      t('settings.boVoicesTitle'),
      boVoices,
      _boURI,
      'ew_ws_bo_voice',
      "Hello!",
    );
  else addMissing('bo', 'cn', 'settings.noBoVoicesTitle', 'settings.noBoVoicesDesc');
  if (myVoices.length)
    addSection(
      'my',
      'mm',
      t('settings.myVoicesTitle'),
      myVoices,
      _myURI,
      'ew_ws_my_voice',
      "Hello!",
    );
  else addMissing('my', 'mm', 'settings.noMyVoicesTitle', 'settings.noMyVoicesDesc');
  if (kmVoices.length)
    addSection(
      'km',
      'kh',
      t('settings.kmVoicesTitle'),
      kmVoices,
      _kmURI,
      'ew_ws_km_voice',
      "Hello!",
    );
  else addMissing('km', 'kh', 'settings.noKmVoicesTitle', 'settings.noKmVoicesDesc');
  if (loVoices.length)
    addSection(
      'lo',
      'la',
      t('settings.loVoicesTitle'),
      loVoices,
      _loURI,
      'ew_ws_lo_voice',
      "Hello!",
    );
  else addMissing('lo', 'la', 'settings.noLoVoicesTitle', 'settings.noLoVoicesDesc');
  if (neVoices.length)
    addSection(
      'ne',
      'np',
      t('settings.neVoicesTitle'),
      neVoices,
      _neURI,
      'ew_ws_ne_voice',
      "Hello!",
    );
  else addMissing('ne', 'np', 'settings.noNeVoicesTitle', 'settings.noNeVoicesDesc');
  if (siVoices.length)
    addSection(
      'si',
      'lk',
      t('settings.siVoicesTitle'),
      siVoices,
      _siURI,
      'ew_ws_si_voice',
      "Hello!",
    );
  else addMissing('si', 'lk', 'settings.noSiVoicesTitle', 'settings.noSiVoicesDesc');
  if (urVoices.length)
    addSection(
      'ur',
      'pk',
      t('settings.urVoicesTitle'),
      urVoices,
      _urURI,
      'ew_ws_ur_voice',
      "Hello!",
    );
  else addMissing('ur', 'pk', 'settings.noUrVoicesTitle', 'settings.noUrVoicesDesc');
  if (teVoices.length)
    addSection(
      'te',
      'in',
      t('settings.teVoicesTitle'),
      teVoices,
      _teURI,
      'ew_ws_te_voice',
      "Hello!",
    );
  else addMissing('te', 'in', 'settings.noTeVoicesTitle', 'settings.noTeVoicesDesc');
  if (mlVoices.length)
    addSection(
      'ml',
      'in',
      t('settings.mlVoicesTitle'),
      mlVoices,
      _mlURI,
      'ew_ws_ml_voice',
      "Hello!",
    );
  else addMissing('ml', 'in', 'settings.noMlVoicesTitle', 'settings.noMlVoicesDesc');
  if (knVoices.length)
    addSection(
      'kn',
      'in',
      t('settings.knVoicesTitle'),
      knVoices,
      _knURI,
      'ew_ws_kn_voice',
      "Hello!",
    );
  else addMissing('kn', 'in', 'settings.noKnVoicesTitle', 'settings.noKnVoicesDesc');
  if (mrVoices.length)
    addSection(
      'mr',
      'in',
      t('settings.mrVoicesTitle'),
      mrVoices,
      _mrURI,
      'ew_ws_mr_voice',
      "Hello!",
    );
  else addMissing('mr', 'in', 'settings.noMrVoicesTitle', 'settings.noMrVoicesDesc');
  if (guVoices.length)
    addSection(
      'gu',
      'in',
      t('settings.guVoicesTitle'),
      guVoices,
      _guURI,
      'ew_ws_gu_voice',
      "Hello!",
    );
  else addMissing('gu', 'in', 'settings.noGuVoicesTitle', 'settings.noGuVoicesDesc');
  if (orVoices.length)
    addSection(
      'or',
      'in',
      t('settings.orVoicesTitle'),
      orVoices,
      _orURI,
      'ew_ws_or_voice',
      "Hello!",
    );
  else addMissing('or', 'in', 'settings.noOrVoicesTitle', 'settings.noOrVoicesDesc');
  if (asVoices.length)
    addSection(
      'as',
      'in',
      t('settings.asVoicesTitle'),
      asVoices,
      _asURI,
      'ew_ws_as_voice',
      "Hello!",
    );
  else addMissing('as', 'in', 'settings.noAsVoicesTitle', 'settings.noAsVoicesDesc');
  if (sdVoices.length)
    addSection(
      'sd',
      'pk',
      t('settings.sdVoicesTitle'),
      sdVoices,
      _sdURI,
      'ew_ws_sd_voice',
      "Hello!",
    );
  else addMissing('sd', 'pk', 'settings.noSdVoicesTitle', 'settings.noSdVoicesDesc');
  if (psVoices.length)
    addSection(
      'ps',
      'af',
      t('settings.psVoicesTitle'),
      psVoices,
      _psURI,
      'ew_ws_ps_voice',
      "Hello!",
    );
  else addMissing('ps', 'af', 'settings.noPsVoicesTitle', 'settings.noPsVoicesDesc');
  if (soVoices.length)
    addSection(
      'so',
      'so',
      t('settings.soVoicesTitle'),
      soVoices,
      _soURI,
      'ew_ws_so_voice',
      "Hello!",
    );
  else addMissing('so', 'so', 'settings.noSoVoicesTitle', 'settings.noSoVoicesDesc');
  if (haVoices.length)
    addSection(
      'ha',
      'ng',
      t('settings.haVoicesTitle'),
      haVoices,
      _haURI,
      'ew_ws_ha_voice',
      "Hello!",
    );
  else addMissing('ha', 'ng', 'settings.noHaVoicesTitle', 'settings.noHaVoicesDesc');
  if (yoVoices.length)
    addSection(
      'yo',
      'ng',
      t('settings.yoVoicesTitle'),
      yoVoices,
      _yoURI,
      'ew_ws_yo_voice',
      "Hello!",
    );
  else addMissing('yo', 'ng', 'settings.noYoVoicesTitle', 'settings.noYoVoicesDesc');
  if (igVoices.length)
    addSection(
      'ig',
      'ng',
      t('settings.igVoicesTitle'),
      igVoices,
      _igURI,
      'ew_ws_ig_voice',
      "Hello!",
    );
  else addMissing('ig', 'ng', 'settings.noIgVoicesTitle', 'settings.noIgVoicesDesc');
  if (tiVoices.length)
    addSection(
      'ti',
      'er',
      t('settings.tiVoicesTitle'),
      tiVoices,
      _tiURI,
      'ew_ws_ti_voice',
      "Hello!",
    );
  else addMissing('ti', 'er', 'settings.noTiVoicesTitle', 'settings.noTiVoicesDesc');
  if (woVoices.length)
    addSection(
      'wo',
      'sn',
      t('settings.woVoicesTitle'),
      woVoices,
      _woURI,
      'ew_ws_wo_voice',
      "Hello!",
    );
  else addMissing('wo', 'sn', 'settings.noWoVoicesTitle', 'settings.noWoVoicesDesc');
  if (mgVoices.length)
    addSection(
      'mg',
      'mg',
      t('settings.mgVoicesTitle'),
      mgVoices,
      _mgURI,
      'ew_ws_mg_voice',
      "Hello!",
    );
  else addMissing('mg', 'mg', 'settings.noMgVoicesTitle', 'settings.noMgVoicesDesc');
  if (xhVoices.length)
    addSection(
      'xh',
      'za',
      t('settings.xhVoicesTitle'),
      xhVoices,
      _xhURI,
      'ew_ws_xh_voice',
      "Hello!",
    );
  else addMissing('xh', 'za', 'settings.noXhVoicesTitle', 'settings.noXhVoicesDesc');
  if (snVoices.length)
    addSection(
      'sn',
      'zw',
      t('settings.snVoicesTitle'),
      snVoices,
      _snURI,
      'ew_ws_sn_voice',
      "Hello!",
    );
  else addMissing('sn', 'zw', 'settings.noSnVoicesTitle', 'settings.noSnVoicesDesc');
  if (nyVoices.length)
    addSection(
      'ny',
      'mw',
      t('settings.nyVoicesTitle'),
      nyVoices,
      _nyURI,
      'ew_ws_ny_voice',
      "Hello!",
    );
  else addMissing('ny', 'mw', 'settings.noNyVoicesTitle', 'settings.noNyVoicesDesc');
  if (fjVoices.length)
    addSection(
      'fj',
      'fj',
      t('settings.fjVoicesTitle'),
      fjVoices,
      _fjURI,
      'ew_ws_fj_voice',
      "Hello!",
    );
  else addMissing('fj', 'fj', 'settings.noFjVoicesTitle', 'settings.noFjVoicesDesc');
  if (smVoices.length)
    addSection(
      'sm',
      'ws',
      t('settings.smVoicesTitle'),
      smVoices,
      _smURI,
      'ew_ws_sm_voice',
      "Hello!",
    );
  else addMissing('sm', 'ws', 'settings.noSmVoicesTitle', 'settings.noSmVoicesDesc');
  if (toVoices.length)
    addSection(
      'to',
      'to',
      t('settings.toVoicesTitle'),
      toVoices,
      _toURI,
      'ew_ws_to_voice',
      "Hello!",
    );
  else addMissing('to', 'to', 'settings.noToVoicesTitle', 'settings.noToVoicesDesc');
  if (miVoices.length)
    addSection(
      'mi',
      'nz',
      t('settings.miVoicesTitle'),
      miVoices,
      _miURI,
      'ew_ws_mi_voice',
      "Hello!",
    );
  else addMissing('mi', 'nz', 'settings.noMiVoicesTitle', 'settings.noMiVoicesDesc');
  if (hawVoices.length)
    addSection(
      'haw',
      'us',
      t('settings.hawVoicesTitle'),
      hawVoices,
      _hawURI,
      'ew_ws_haw_voice',
      "Hello!",
    );
  else addMissing('haw', 'us', 'settings.noHawVoicesTitle', 'settings.noHawVoicesDesc');
  if (jvVoices.length)
    addSection(
      'jv',
      'id',
      t('settings.jvVoicesTitle'),
      jvVoices,
      _jvURI,
      'ew_ws_jv_voice',
      "Hello!",
    );
  else addMissing('jv', 'id', 'settings.noJvVoicesTitle', 'settings.noJvVoicesDesc');
  if (suVoices.length)
    addSection(
      'su',
      'id',
      t('settings.suVoicesTitle'),
      suVoices,
      _suURI,
      'ew_ws_su_voice',
      "Hello!",
    );
  else addMissing('su', 'id', 'settings.noSuVoicesTitle', 'settings.noSuVoicesDesc');
  if (gdVoices.length)
    addSection(
      'gd',
      'sct',
      t('settings.gdVoicesTitle'),
      gdVoices,
      _gdURI,
      'ew_ws_gd_voice',
      "Hello!",
    );
  else addMissing('gd', 'sct', 'settings.noGdVoicesTitle', 'settings.noGdVoicesDesc');
  if (brVoices.length)
    addSection(
      'br',
      'fr',
      t('settings.brVoicesTitle'),
      brVoices,
      _brURI,
      'ew_ws_br_voice',
      "Hello!",
    );
  else addMissing('br', 'fr', 'settings.noBrVoicesTitle', 'settings.noBrVoicesDesc');
  if (kwVoices.length)
    addSection(
      'kw',
      'corn',
      t('settings.kwVoicesTitle'),
      kwVoices,
      _kwURI,
      'ew_ws_kw_voice',
      "Hello!",
    );
  else addMissing('kw', 'corn', 'settings.noKwVoicesTitle', 'settings.noKwVoicesDesc');
  if (gvVoices.length)
    addSection(
      'gv',
      'gb',
      t('settings.gvVoicesTitle'),
      gvVoices,
      _gvURI,
      'ew_ws_gv_voice',
      "Hello!",
    );
  else addMissing('gv', 'gb', 'settings.noGvVoicesTitle', 'settings.noGvVoicesDesc');
  if (foVoices.length)
    addSection(
      'fo',
      'fo',
      t('settings.foVoicesTitle'),
      foVoices,
      _foURI,
      'ew_ws_fo_voice',
      "Hello!",
    );
  else addMissing('fo', 'fo', 'settings.noFoVoicesTitle', 'settings.noFoVoicesDesc');
  if (ocVoices.length)
    addSection(
      'oc',
      'fr',
      t('settings.ocVoicesTitle'),
      ocVoices,
      _ocURI,
      'ew_ws_oc_voice',
      "Hello!",
    );
  else addMissing('oc', 'fr', 'settings.noOcVoicesTitle', 'settings.noOcVoicesDesc');
  if (coVoices.length)
    addSection(
      'co',
      'fr',
      t('settings.coVoicesTitle'),
      coVoices,
      _coURI,
      'ew_ws_co_voice',
      "Hello!",
    );
  else addMissing('co', 'fr', 'settings.noCoVoicesTitle', 'settings.noCoVoicesDesc');
  if (scVoices.length)
    addSection(
      'sc',
      'it',
      t('settings.scVoicesTitle'),
      scVoices,
      _scURI,
      'ew_ws_sc_voice',
      "Hello!",
    );
  else addMissing('sc', 'it', 'settings.noScVoicesTitle', 'settings.noScVoicesDesc');
  if (fyVoices.length)
    addSection(
      'fy',
      'nl',
      t('settings.fyVoicesTitle'),
      fyVoices,
      _fyURI,
      'ew_ws_fy_voice',
      "Hello!",
    );
  else addMissing('fy', 'nl', 'settings.noFyVoicesTitle', 'settings.noFyVoicesDesc');
  if (yiVoices.length)
    addSection(
      'yi',
      'il',
      t('settings.yiVoicesTitle'),
      yiVoices,
      _yiURI,
      'ew_ws_yi_voice',
      "Hello!",
    );
  else addMissing('yi', 'il', 'settings.noYiVoicesTitle', 'settings.noYiVoicesDesc');
  if (ladVoices.length)
    addSection(
      'lad',
      'es',
      t('settings.ladVoicesTitle'),
      ladVoices,
      _ladURI,
      'ew_ws_lad_voice',
      "Hello!",
    );
  else addMissing('lad', 'es', 'settings.noLadVoicesTitle', 'settings.noLadVoicesDesc');
  if (quVoices.length)
    addSection(
      'qu',
      'pe',
      t('settings.quVoicesTitle'),
      quVoices,
      _quURI,
      'ew_ws_qu_voice',
      "Hello!",
    );
  else addMissing('qu', 'pe', 'settings.noQuVoicesTitle', 'settings.noQuVoicesDesc');
  if (gnVoices.length)
    addSection(
      'gn',
      'py',
      t('settings.gnVoicesTitle'),
      gnVoices,
      _gnURI,
      'ew_ws_gn_voice',
      "Hello!",
    );
  else addMissing('gn', 'py', 'settings.noGnVoicesTitle', 'settings.noGnVoicesDesc');
  if (ayVoices.length)
    addSection(
      'ay',
      'bo',
      t('settings.ayVoicesTitle'),
      ayVoices,
      _ayURI,
      'ew_ws_ay_voice',
      "Hello!",
    );
  else addMissing('ay', 'bo', 'settings.noAyVoicesTitle', 'settings.noAyVoicesDesc');
  if (dzVoices.length)
    addSection(
      'dz',
      'bt',
      t('settings.dzVoicesTitle'),
      dzVoices,
      _dzURI,
      'ew_ws_dz_voice',
      "Hello!",
    );
  else addMissing('dz', 'bt', 'settings.noDzVoicesTitle', 'settings.noDzVoicesDesc');
  if (dvVoices.length)
    addSection(
      'dv',
      'mv',
      t('settings.dvVoicesTitle'),
      dvVoices,
      _dvURI,
      'ew_ws_dv_voice',
      "Hello!",
    );
  else addMissing('dv', 'mv', 'settings.noDvVoicesTitle', 'settings.noDvVoicesDesc');
  if (tetVoices.length)
    addSection(
      'tet',
      'tl',
      t('settings.tetVoicesTitle'),
      tetVoices,
      _tetURI,
      'ew_ws_tet_voice',
      "Hello!",
    );
  else addMissing('tet', 'tl', 'settings.noTetVoicesTitle', 'settings.noTetVoicesDesc');
  if (beVoices.length)
    addSection(
      'be',
      'by',
      t('settings.beVoicesTitle'),
      beVoices,
      _beURI,
      'ew_ws_be_voice',
      "Hello!",
    );
  else addMissing('be', 'by', 'settings.noBeVoicesTitle', 'settings.noBeVoicesDesc');
  if (qyaVoices.length)
    addSection(
      'qya',
      'qya',
      t('settings.qyaVoicesTitle'),
      qyaVoices,
      _qyaURI,
      'ew_ws_qya_voice',
      "Elen síla lúmenn' omentielvo.",
    );
  else addMissing('qya', 'qya', 'settings.noQyaVoicesTitle', 'settings.noQyaVoicesDesc');
  if (sjnVoices.length)
    addSection(
      'sjn',
      'sjn',
      t('settings.sjnVoicesTitle'),
      sjnVoices,
      _sjnURI,
      'ew_ws_sjn_voice',
      'Mae govannen.',
    );
  else addMissing('sjn', 'sjn', 'settings.noSjnVoicesTitle', 'settings.noSjnVoicesDesc');
  sections.sort((a, b) => a.key.localeCompare(b.key, getLang()));
  for (const s of sections) container.appendChild(s.el);
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
  if (!_viURI && viVoices.length) {
    _viURI = (viVoices.find((v) => v.name.toLowerCase().includes('google')) ?? viVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_vi_voice', _viURI);
  }
  if (!_hiURI && hiVoices.length) {
    _hiURI = (hiVoices.find((v) => v.name.toLowerCase().includes('google')) ?? hiVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_hi_voice', _hiURI);
  }
  if (!_bnURI && bnVoices.length) {
    _bnURI = (bnVoices.find((v) => v.name.toLowerCase().includes('google')) ?? bnVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_bn_voice', _bnURI);
  }
  if (!_idURI && idVoices.length) {
    _idURI = (idVoices.find((v) => v.name.toLowerCase().includes('google')) ?? idVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_id_voice', _idURI);
  }
  if (!_pcmURI && pcmVoices.length) {
    _pcmURI = (pcmVoices.find((v) => v.name.toLowerCase().includes('google')) ?? pcmVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_pcm_voice', _pcmURI);
  }
  if (!_koURI && koVoices.length) {
    _koURI = (koVoices.find((v) => v.name.toLowerCase().includes('google')) ?? koVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_ko_voice', _koURI);
  }
  if (!_faURI && faVoices.length) {
    _faURI = (faVoices.find((v) => v.name.toLowerCase().includes('google')) ?? faVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_fa_voice', _faURI);
  }
  if (!_swURI && swVoices.length) {
    _swURI = (swVoices.find((v) => v.name.toLowerCase().includes('google')) ?? swVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_sw_voice', _swURI);
  }
  if (!_msURI && msVoices.length) {
    _msURI = (msVoices.find((v) => v.name.toLowerCase().includes('google')) ?? msVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_ms_voice', _msURI);
  }
  if (!_thURI && thVoices.length) {
    _thURI = (thVoices.find((v) => v.name.toLowerCase().includes('google')) ?? thVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_th_voice', _thURI);
  }
  if (!_azURI && azVoices.length) {
    _azURI = (azVoices.find((v) => v.name.toLowerCase().includes('google')) ?? azVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_az_voice', _azURI);
  }
  if (!_roURI && roVoices.length) {
    _roURI = (roVoices.find((v) => v.name.toLowerCase().includes('google')) ?? roVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_ro_voice', _roURI);
  }
  if (!_huURI && huVoices.length) {
    _huURI = (huVoices.find((v) => v.name.toLowerCase().includes('google')) ?? huVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_hu_voice', _huURI);
  }
  if (!_csURI && csVoices.length) {
    _csURI = (csVoices.find((v) => v.name.toLowerCase().includes('google')) ?? csVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_cs_voice', _csURI);
  }
  if (!_kkURI && kkVoices.length) {
    _kkURI = (kkVoices.find((v) => v.name.toLowerCase().includes('google')) ?? kkVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_kk_voice', _kkURI);
  }
  if (!_svURI && svVoices.length) {
    _svURI = (svVoices.find((v) => v.name.toLowerCase().includes('google')) ?? svVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_sv_voice', _svURI);
  }
  if (!_kaURI && kaVoices.length) {
    _kaURI = (kaVoices.find((v) => v.name.toLowerCase().includes('google')) ?? kaVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_ka_voice', _kaURI);
  }
  if (!_hrURI && hrVoices.length) {
    _hrURI = (hrVoices.find((v) => v.name.toLowerCase().includes('google')) ?? hrVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_hr_voice', _hrURI);
  }
  if (!_srURI && srVoices.length) {
    _srURI = (srVoices.find((v) => v.name.toLowerCase().includes('google')) ?? srVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_sr_voice', _srURI);
  }
  if (!_bsURI && bsVoices.length) {
    _bsURI = (bsVoices.find((v) => v.name.toLowerCase().includes('google')) ?? bsVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_bs_voice', _bsURI);
  }
  if (!_bgURI && bgVoices.length) {
    _bgURI = (bgVoices.find((v) => v.name.toLowerCase().includes('google')) ?? bgVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_bg_voice', _bgURI);
  }
  if (!_skURI && skVoices.length) {
    _skURI = (skVoices.find((v) => v.name.toLowerCase().includes('google')) ?? skVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_sk_voice', _skURI);
  }
  if (!_hyURI && hyVoices.length) {
    _hyURI = (hyVoices.find((v) => v.name.toLowerCase().includes('google')) ?? hyVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_hy_voice', _hyURI);
  }
  if (!_daURI && daVoices.length) {
    _daURI = (daVoices.find((v) => v.name.toLowerCase().includes('google')) ?? daVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_da_voice', _daURI);
  }
  if (!_fiURI && fiVoices.length) {
    _fiURI = (fiVoices.find((v) => v.name.toLowerCase().includes('google')) ?? fiVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_fi_voice', _fiURI);
  }
  if (!_noURI && noVoices.length) {
    _noURI = (noVoices.find((v) => v.name.toLowerCase().includes('google')) ?? noVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_no_voice', _noURI);
  }
  if (!_laURI && laVoices.length) {
    _laURI = (laVoices.find((v) => v.name.toLowerCase().includes('google')) ?? laVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_la_voice', _laURI);
  }
  if (!_ltURI && ltVoices.length) {
    _ltURI = (ltVoices.find((v) => v.name.toLowerCase().includes('google')) ?? ltVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_lt_voice', _ltURI);
  }
  if (!_lvURI && lvVoices.length) {
    _lvURI = (lvVoices.find((v) => v.name.toLowerCase().includes('google')) ?? lvVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_lv_voice', _lvURI);
  }
  if (!_etURI && etVoices.length) {
    _etURI = (etVoices.find((v) => v.name.toLowerCase().includes('google')) ?? etVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_et_voice', _etURI);
  }
  if (!_slURI && slVoices.length) {
    _slURI = (slVoices.find((v) => v.name.toLowerCase().includes('google')) ?? slVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_sl_voice', _slURI);
  }
  if (!_mkURI && mkVoices.length) {
    _mkURI = (mkVoices.find((v) => v.name.toLowerCase().includes('google')) ?? mkVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_mk_voice', _mkURI);
  }
  if (!_sqURI && sqVoices.length) {
    _sqURI = (sqVoices.find((v) => v.name.toLowerCase().includes('google')) ?? sqVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_sq_voice', _sqURI);
  }
  if (!_isURI && isVoices.length) {
    _isURI = (isVoices.find((v) => v.name.toLowerCase().includes('google')) ?? isVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_is_voice', _isURI);
  }
  if (!_cyURI && cyVoices.length) {
    _cyURI = (cyVoices.find((v) => v.name.toLowerCase().includes('google')) ?? cyVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_cy_voice', _cyURI);
  }
  if (!_gaURI && gaVoices.length) {
    _gaURI = (gaVoices.find((v) => v.name.toLowerCase().includes('google')) ?? gaVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_ga_voice', _gaURI);
  }
  if (!_tlURI && tlVoices.length) {
    _tlURI = (tlVoices.find((v) => v.name.toLowerCase().includes('google')) ?? tlVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_tl_voice', _tlURI);
  }
  if (!_mnURI && mnVoices.length) {
    _mnURI = (mnVoices.find((v) => v.name.toLowerCase().includes('google')) ?? mnVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_mn_voice', _mnURI);
  }
  if (!_uzURI && uzVoices.length) {
    _uzURI = (uzVoices.find((v) => v.name.toLowerCase().includes('google')) ?? uzVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_uz_voice', _uzURI);
  }
  if (!_amURI && amVoices.length) {
    _amURI = (amVoices.find((v) => v.name.toLowerCase().includes('google')) ?? amVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_am_voice', _amURI);
  }
  if (!_eoURI && eoVoices.length) {
    _eoURI = (eoVoices.find((v) => v.name.toLowerCase().includes('google')) ?? eoVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_eo_voice', _eoURI);
  }
  if (!_taURI && taVoices.length) {
    _taURI = (taVoices.find((v) => v.name.toLowerCase().includes('google')) ?? taVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_ta_voice', _taURI);
  }
  if (!_paURI && paVoices.length) {
    _paURI = (paVoices.find((v) => v.name.toLowerCase().includes('google')) ?? paVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_pa_voice', _paURI);
  }
  if (!_zuURI && zuVoices.length) {
    _zuURI = (zuVoices.find((v) => v.name.toLowerCase().includes('google')) ?? zuVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_zu_voice', _zuURI);
  }
  if (!_afURI && afVoices.length) {
    _afURI = (afVoices.find((v) => v.name.toLowerCase().includes('google')) ?? afVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_af_voice', _afURI);
  }
  if (!_kyURI && kyVoices.length) {
    _kyURI = (kyVoices.find((v) => v.name.toLowerCase().includes('google')) ?? kyVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_ky_voice', _kyURI);
  }
  if (!_tgURI && tgVoices.length) {
    _tgURI = (tgVoices.find((v) => v.name.toLowerCase().includes('google')) ?? tgVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_tg_voice', _tgURI);
  }
  if (!_tkURI && tkVoices.length) {
    _tkURI = (tkVoices.find((v) => v.name.toLowerCase().includes('google')) ?? tkVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_tk_voice', _tkURI);
  }
  if (!_ugURI && ugVoices.length) {
    _ugURI = (ugVoices.find((v) => v.name.toLowerCase().includes('google')) ?? ugVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_ug_voice', _ugURI);
  }
  if (!_euURI && euVoices.length) {
    _euURI = (euVoices.find((v) => v.name.toLowerCase().includes('google')) ?? euVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_eu_voice', _euURI);
  }
  if (!_caURI && caVoices.length) {
    _caURI = (caVoices.find((v) => v.name.toLowerCase().includes('google')) ?? caVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_ca_voice', _caURI);
  }
  if (!_glURI && glVoices.length) {
    _glURI = (glVoices.find((v) => v.name.toLowerCase().includes('google')) ?? glVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_gl_voice', _glURI);
  }
  if (!_mtURI && mtVoices.length) {
    _mtURI = (mtVoices.find((v) => v.name.toLowerCase().includes('google')) ?? mtVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_mt_voice', _mtURI);
  }
  if (!_lbURI && lbVoices.length) {
    _lbURI = (lbVoices.find((v) => v.name.toLowerCase().includes('google')) ?? lbVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_lb_voice', _lbURI);
  }
  if (!_htURI && htVoices.length) {
    _htURI = (htVoices.find((v) => v.name.toLowerCase().includes('google')) ?? htVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_ht_voice', _htURI);
  }
  if (!_boURI && boVoices.length) {
    _boURI = (boVoices.find((v) => v.name.toLowerCase().includes('google')) ?? boVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_bo_voice', _boURI);
  }
  if (!_myURI && myVoices.length) {
    _myURI = (myVoices.find((v) => v.name.toLowerCase().includes('google')) ?? myVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_my_voice', _myURI);
  }
  if (!_kmURI && kmVoices.length) {
    _kmURI = (kmVoices.find((v) => v.name.toLowerCase().includes('google')) ?? kmVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_km_voice', _kmURI);
  }
  if (!_loURI && loVoices.length) {
    _loURI = (loVoices.find((v) => v.name.toLowerCase().includes('google')) ?? loVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_lo_voice', _loURI);
  }
  if (!_neURI && neVoices.length) {
    _neURI = (neVoices.find((v) => v.name.toLowerCase().includes('google')) ?? neVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_ne_voice', _neURI);
  }
  if (!_siURI && siVoices.length) {
    _siURI = (siVoices.find((v) => v.name.toLowerCase().includes('google')) ?? siVoices[0])
      .voiceURI;
    localStorage.setItem('ew_ws_si_voice', _siURI);
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
