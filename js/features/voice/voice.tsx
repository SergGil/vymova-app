// Vymova — js/features/voice.tsx
// Web Speech API voice picker: EN + UA
import { useCallback, useEffect, useState, type ReactElement } from 'react';
import { createPortal } from 'react-dom';
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
let _kuURI = localStorage.getItem('ew_ws_ku_voice') ?? '';
let _omURI = localStorage.getItem('ew_ws_om_voice') ?? '';
let _lnURI = localStorage.getItem('ew_ws_ln_voice') ?? '';
let _bhoURI = localStorage.getItem('ew_ws_bho_voice') ?? '';
let _cebURI = localStorage.getItem('ew_ws_ceb_voice') ?? '';
let _rmURI = localStorage.getItem('ew_ws_rm_voice') ?? '';
let _tyURI = localStorage.getItem('ew_ws_ty_voice') ?? '';
let _chURI = localStorage.getItem('ew_ws_ch_voice') ?? '';
let _mhURI = localStorage.getItem('ew_ws_mh_voice') ?? '';
let _pauURI = localStorage.getItem('ew_ws_pau_voice') ?? '';
let _nahURI = localStorage.getItem('ew_ws_nah_voice') ?? '';
let _nvURI = localStorage.getItem('ew_ws_nv_voice') ?? '';
let _tlhURI = localStorage.getItem('ew_ws_tlh_voice') ?? '';
let _valURI = localStorage.getItem('ew_ws_val_voice') ?? '';
let _dthURI = localStorage.getItem('ew_ws_dth_voice') ?? '';

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
function _kuVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('ku') || n.includes('kurdish');
  });
}
function _omVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('om') || n.includes('oromo');
  });
}
function _lnVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('ln') || n.includes('lingala');
  });
}
function _bhoVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('bho') || n.includes('bhojpuri');
  });
}
function _cebVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('ceb') || n.includes('cebuano');
  });
}
function _rmVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('rm') || n.includes('romansh');
  });
}
function _tyVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('ty') || n.includes('tahitian');
  });
}
function _chVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('ch') || n.includes('chamorro');
  });
}
function _mhVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('mh') || n.includes('marshallese');
  });
}
function _pauVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('pau') || n.includes('palauan');
  });
}
function _nahVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('nah') || n.includes('nahuatl');
  });
}
function _nvVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('nv') || n.includes('navajo');
  });
}
function _tlhVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('tlh') || n.includes('klingon');
  });
}
function _valVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('val') || n.includes('valyrian');
  });
}
function _dthVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter((v) => {
    const l = (v.lang ?? '').toLowerCase(),
      n = (v.name ?? '').toLowerCase();
    return l.startsWith('dth') || n.includes('dothraki');
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
export function getSelectedKuVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_kuURI, _kuVoices()) ?? _kuVoices()[0] ?? null;
}
export function getSelectedOmVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_omURI, _omVoices()) ?? _omVoices()[0] ?? null;
}
export function getSelectedLnVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_lnURI, _lnVoices()) ?? _lnVoices()[0] ?? null;
}
export function getSelectedBhoVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_bhoURI, _bhoVoices()) ?? _bhoVoices()[0] ?? null;
}
export function getSelectedCebVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_cebURI, _cebVoices()) ?? _cebVoices()[0] ?? null;
}
export function getSelectedRmVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_rmURI, _rmVoices()) ?? _rmVoices()[0] ?? null;
}
export function getSelectedTyVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_tyURI, _tyVoices()) ?? _tyVoices()[0] ?? null;
}
export function getSelectedChVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_chURI, _chVoices()) ?? _chVoices()[0] ?? null;
}
export function getSelectedMhVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_mhURI, _mhVoices()) ?? _mhVoices()[0] ?? null;
}
export function getSelectedPauVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_pauURI, _pauVoices()) ?? _pauVoices()[0] ?? null;
}
export function getSelectedNahVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_nahURI, _nahVoices()) ?? _nahVoices()[0] ?? null;
}
export function getSelectedNvVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_nvURI, _nvVoices()) ?? _nvVoices()[0] ?? null;
}
export function getSelectedTlhVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_tlhURI, _tlhVoices()) ?? _tlhVoices()[0] ?? null;
}
export function getSelectedValVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_valURI, _valVoices()) ?? _valVoices()[0] ?? null;
}
export function getSelectedDthVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_dthURI, _dthVoices()) ?? _dthVoices()[0] ?? null;
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

// Which per-language <details> section is expanded is no longer tracked
// separately (used to be _openSectionIds, needed only because the old
// implementation did container.innerHTML = '' and rebuilt every element
// from scratch on every _renderVoices() call, which reset native
// <details open> state along with everything else). With real React
// reconciliation and a stable key={section.id} per <details>, the same DOM
// node is reused across re-renders, so leaving `open` uncontrolled lets the
// browser own it exactly like any other native disclosure widget.

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
    id: "en",
    flagCode: "gb",
    titleKey: "settings.enVoicesTitle",
    noTitleKey: null,
    descKey: null,
    voicesFn: _enVoices,
    getURI: () => _enURI,
    setURI: (u: string) => { _enURI = u; },
    storageKey: "ew_ws_voice",
    testText: "Hello there, general Kenobi",
    defaultSelect: 'google',
  },
  {
    id: "uk",
    flagCode: "ua",
    titleKey: "settings.ukVoicesTitle",
    noTitleKey: "settings.noUkVoicesTitle",
    descKey: "settings.noUkVoicesDesc",
    voicesFn: _ukVoices,
    getURI: () => _ukURI,
    setURI: (u: string) => { _ukURI = u; },
    storageKey: "ew_ws_uk_voice",
    testText: "Привіт, як справи",
    defaultSelect: 'first',
  },
  {
    id: "es",
    flagCode: "es",
    titleKey: "settings.esVoicesTitle",
    noTitleKey: "settings.noEsVoicesTitle",
    descKey: "settings.noEsVoicesDesc",
    voicesFn: _esVoices,
    getURI: () => _esURI,
    setURI: (u: string) => { _esURI = u; },
    storageKey: "ew_ws_es_voice",
    testText: "Hola, ¿cómo estás?",
    defaultSelect: 'google',
  },
  {
    id: "fr",
    flagCode: "fr",
    titleKey: "settings.frVoicesTitle",
    noTitleKey: "settings.noFrVoicesTitle",
    descKey: "settings.noFrVoicesDesc",
    voicesFn: _frVoices,
    getURI: () => _frURI,
    setURI: (u: string) => { _frURI = u; },
    storageKey: "ew_ws_fr_voice",
    testText: "Bonjour, comment ça va ?",
    defaultSelect: 'google',
  },
  {
    id: "it",
    flagCode: "it",
    titleKey: "settings.itVoicesTitle",
    noTitleKey: "settings.noItVoicesTitle",
    descKey: "settings.noItVoicesDesc",
    voicesFn: _itVoices,
    getURI: () => _itURI,
    setURI: (u: string) => { _itURI = u; },
    storageKey: "ew_ws_it_voice",
    testText: "Ciao, come stai?",
    defaultSelect: 'google',
  },
  {
    id: "pt",
    flagCode: "pt",
    titleKey: "settings.ptVoicesTitle",
    noTitleKey: "settings.noPtVoicesTitle",
    descKey: "settings.noPtVoicesDesc",
    voicesFn: _ptVoices,
    getURI: () => _ptURI,
    setURI: (u: string) => { _ptURI = u; },
    storageKey: "ew_ws_pt_voice",
    testText: "Olá, como você está?",
    defaultSelect: 'google',
  },
  {
    id: "de",
    flagCode: "de",
    titleKey: "settings.deVoicesTitle",
    noTitleKey: "settings.noDeVoicesTitle",
    descKey: "settings.noDeVoicesDesc",
    voicesFn: _deVoices,
    getURI: () => _deURI,
    setURI: (u: string) => { _deURI = u; },
    storageKey: "ew_ws_de_voice",
    testText: "Hallo, wie geht es dir?",
    defaultSelect: 'google',
  },
  {
    id: "he",
    flagCode: "il",
    titleKey: "settings.heVoicesTitle",
    noTitleKey: "settings.noHeVoicesTitle",
    descKey: "settings.noHeVoicesDesc",
    voicesFn: _heVoices,
    getURI: () => _heURI,
    setURI: (u: string) => { _heURI = u; },
    storageKey: "ew_ws_he_voice",
    testText: "שלום, מה נשמע?",
    defaultSelect: 'google',
  },
  {
    id: "ar",
    flagCode: "sa",
    titleKey: "settings.arVoicesTitle",
    noTitleKey: "settings.noArVoicesTitle",
    descKey: "settings.noArVoicesDesc",
    voicesFn: _arVoices,
    getURI: () => _arURI,
    setURI: (u: string) => { _arURI = u; },
    storageKey: "ew_ws_ar_voice",
    testText: "مرحبا، كيف حالك؟",
    defaultSelect: 'google',
  },
  {
    id: "pl",
    flagCode: "pl",
    titleKey: "settings.plVoicesTitle",
    noTitleKey: "settings.noPlVoicesTitle",
    descKey: "settings.noPlVoicesDesc",
    voicesFn: _plVoices,
    getURI: () => _plURI,
    setURI: (u: string) => { _plURI = u; },
    storageKey: "ew_ws_pl_voice",
    testText: "Cześć, jak się masz?",
    defaultSelect: 'google',
  },
  {
    id: "zh",
    flagCode: "cn",
    titleKey: "settings.zhVoicesTitle",
    noTitleKey: "settings.noZhVoicesTitle",
    descKey: "settings.noZhVoicesDesc",
    voicesFn: _zhVoices,
    getURI: () => _zhURI,
    setURI: (u: string) => { _zhURI = u; },
    storageKey: "ew_ws_zh_voice",
    testText: "你好，你怎么样？",
    defaultSelect: 'google',
  },
  {
    id: "el",
    flagCode: "gr",
    titleKey: "settings.elVoicesTitle",
    noTitleKey: "settings.noElVoicesTitle",
    descKey: "settings.noElVoicesDesc",
    voicesFn: _elVoices,
    getURI: () => _elURI,
    setURI: (u: string) => { _elURI = u; },
    storageKey: "ew_ws_el_voice",
    testText: "Γεια σου, τι κάνεις;",
    defaultSelect: 'google',
  },
  {
    id: "ja",
    flagCode: "jp",
    titleKey: "settings.jaVoicesTitle",
    noTitleKey: "settings.noJaVoicesTitle",
    descKey: "settings.noJaVoicesDesc",
    voicesFn: _jaVoices,
    getURI: () => _jaURI,
    setURI: (u: string) => { _jaURI = u; },
    storageKey: "ew_ws_ja_voice",
    testText: "こんにちは、お元気ですか？",
    defaultSelect: 'google',
  },
  {
    id: "tr",
    flagCode: "tr",
    titleKey: "settings.trVoicesTitle",
    noTitleKey: "settings.noTrVoicesTitle",
    descKey: "settings.noTrVoicesDesc",
    voicesFn: _trVoices,
    getURI: () => _trURI,
    setURI: (u: string) => { _trURI = u; },
    storageKey: "ew_ws_tr_voice",
    testText: "Merhaba, nasılsın?",
    defaultSelect: 'google',
  },
  {
    id: "nl",
    flagCode: "nl",
    titleKey: "settings.nlVoicesTitle",
    noTitleKey: "settings.noNlVoicesTitle",
    descKey: "settings.noNlVoicesDesc",
    voicesFn: _nlVoices,
    getURI: () => _nlURI,
    setURI: (u: string) => { _nlURI = u; },
    storageKey: "ew_ws_nl_voice",
    testText: "Hallo, hoe gaat het?",
    defaultSelect: 'google',
  },
  {
    id: "vi",
    flagCode: "vn",
    titleKey: "settings.viVoicesTitle",
    noTitleKey: "settings.noViVoicesTitle",
    descKey: "settings.noViVoicesDesc",
    voicesFn: _viVoices,
    getURI: () => _viURI,
    setURI: (u: string) => { _viURI = u; },
    storageKey: "ew_ws_vi_voice",
    testText: "Xin chào, bạn khỏe không?",
    defaultSelect: 'google',
  },
  {
    id: "hi",
    flagCode: "in",
    titleKey: "settings.hiVoicesTitle",
    noTitleKey: "settings.noHiVoicesTitle",
    descKey: "settings.noHiVoicesDesc",
    voicesFn: _hiVoices,
    getURI: () => _hiURI,
    setURI: (u: string) => { _hiURI = u; },
    storageKey: "ew_ws_hi_voice",
    testText: "नमस्ते! आपसे मिलकर खुशी हुई।",
    defaultSelect: 'google',
  },
  {
    id: "bn",
    flagCode: "bd",
    titleKey: "settings.bnVoicesTitle",
    noTitleKey: "settings.noBnVoicesTitle",
    descKey: "settings.noBnVoicesDesc",
    voicesFn: _bnVoices,
    getURI: () => _bnURI,
    setURI: (u: string) => { _bnURI = u; },
    storageKey: "ew_ws_bn_voice",
    testText: "হ্যালো! আপনার সাথে দেখা করে ভালো লাগলো।",
    defaultSelect: 'google',
  },
  {
    id: "id",
    flagCode: "id",
    titleKey: "settings.idVoicesTitle",
    noTitleKey: "settings.noIdVoicesTitle",
    descKey: "settings.noIdVoicesDesc",
    voicesFn: _idVoices,
    getURI: () => _idURI,
    setURI: (u: string) => { _idURI = u; },
    storageKey: "ew_ws_id_voice",
    testText: "Halo! Senang bertemu denganmu.",
    defaultSelect: 'google',
  },
  {
    id: "pcm",
    flagCode: "ng",
    titleKey: "settings.pcmVoicesTitle",
    noTitleKey: "settings.noPcmVoicesTitle",
    descKey: "settings.noPcmVoicesDesc",
    voicesFn: _pcmVoices,
    getURI: () => _pcmURI,
    setURI: (u: string) => { _pcmURI = u; },
    storageKey: "ew_ws_pcm_voice",
    testText: "Hello! E good to meet you.",
    defaultSelect: 'google',
  },
  {
    id: "ko",
    flagCode: "kr",
    titleKey: "settings.koVoicesTitle",
    noTitleKey: "settings.noKoVoicesTitle",
    descKey: "settings.noKoVoicesDesc",
    voicesFn: _koVoices,
    getURI: () => _koURI,
    setURI: (u: string) => { _koURI = u; },
    storageKey: "ew_ws_ko_voice",
    testText: "안녕하세요! 만나서 반갑습니다.",
    defaultSelect: 'google',
  },
  {
    id: "fa",
    flagCode: "ir",
    titleKey: "settings.faVoicesTitle",
    noTitleKey: "settings.noFaVoicesTitle",
    descKey: "settings.noFaVoicesDesc",
    voicesFn: _faVoices,
    getURI: () => _faURI,
    setURI: (u: string) => { _faURI = u; },
    storageKey: "ew_ws_fa_voice",
    testText: "سلام! از آشنایی با شما خوشحالم.",
    defaultSelect: 'google',
  },
  {
    id: "sw",
    flagCode: "tz",
    titleKey: "settings.swVoicesTitle",
    noTitleKey: "settings.noSwVoicesTitle",
    descKey: "settings.noSwVoicesDesc",
    voicesFn: _swVoices,
    getURI: () => _swURI,
    setURI: (u: string) => { _swURI = u; },
    storageKey: "ew_ws_sw_voice",
    testText: "Habari! Nafurahi kukutana nawe.",
    defaultSelect: 'google',
  },
  {
    id: "ms",
    flagCode: "my",
    titleKey: "settings.msVoicesTitle",
    noTitleKey: "settings.noMsVoicesTitle",
    descKey: "settings.noMsVoicesDesc",
    voicesFn: _msVoices,
    getURI: () => _msURI,
    setURI: (u: string) => { _msURI = u; },
    storageKey: "ew_ws_ms_voice",
    testText: "Helo! Gembira bertemu dengan awak.",
    defaultSelect: 'google',
  },
  {
    id: "th",
    flagCode: "th",
    titleKey: "settings.thVoicesTitle",
    noTitleKey: "settings.noThVoicesTitle",
    descKey: "settings.noThVoicesDesc",
    voicesFn: _thVoices,
    getURI: () => _thURI,
    setURI: (u: string) => { _thURI = u; },
    storageKey: "ew_ws_th_voice",
    testText: "สวัสดี! ยินดีที่ได้พบคุณ",
    defaultSelect: 'google',
  },
  {
    id: "az",
    flagCode: "az",
    titleKey: "settings.azVoicesTitle",
    noTitleKey: "settings.noAzVoicesTitle",
    descKey: "settings.noAzVoicesDesc",
    voicesFn: _azVoices,
    getURI: () => _azURI,
    setURI: (u: string) => { _azURI = u; },
    storageKey: "ew_ws_az_voice",
    testText: "Salam! Sizinlə tanış olmağıma şadam.",
    defaultSelect: 'google',
  },
  {
    id: "ro",
    flagCode: "ro",
    titleKey: "settings.roVoicesTitle",
    noTitleKey: "settings.noRoVoicesTitle",
    descKey: "settings.noRoVoicesDesc",
    voicesFn: _roVoices,
    getURI: () => _roURI,
    setURI: (u: string) => { _roURI = u; },
    storageKey: "ew_ws_ro_voice",
    testText: "Salut! Mă bucur să te cunosc.",
    defaultSelect: 'google',
  },
  {
    id: "hu",
    flagCode: "hu",
    titleKey: "settings.huVoicesTitle",
    noTitleKey: "settings.noHuVoicesTitle",
    descKey: "settings.noHuVoicesDesc",
    voicesFn: _huVoices,
    getURI: () => _huURI,
    setURI: (u: string) => { _huURI = u; },
    storageKey: "ew_ws_hu_voice",
    testText: "Szia! Örülök, hogy megismertelek.",
    defaultSelect: 'google',
  },
  {
    id: "cs",
    flagCode: "cz",
    titleKey: "settings.csVoicesTitle",
    noTitleKey: "settings.noCsVoicesTitle",
    descKey: "settings.noCsVoicesDesc",
    voicesFn: _csVoices,
    getURI: () => _csURI,
    setURI: (u: string) => { _csURI = u; },
    storageKey: "ew_ws_cs_voice",
    testText: "Ahoj! Těší mě, že tě poznávám.",
    defaultSelect: 'google',
  },
  {
    id: "kk",
    flagCode: "kz",
    titleKey: "settings.kkVoicesTitle",
    noTitleKey: "settings.noKkVoicesTitle",
    descKey: "settings.noKkVoicesDesc",
    voicesFn: _kkVoices,
    getURI: () => _kkURI,
    setURI: (u: string) => { _kkURI = u; },
    storageKey: "ew_ws_kk_voice",
    testText: "Сәлем! Танысқаныма қуаныштымын.",
    defaultSelect: 'google',
  },
  {
    id: "sv",
    flagCode: "se",
    titleKey: "settings.svVoicesTitle",
    noTitleKey: "settings.noSvVoicesTitle",
    descKey: "settings.noSvVoicesDesc",
    voicesFn: _svVoices,
    getURI: () => _svURI,
    setURI: (u: string) => { _svURI = u; },
    storageKey: "ew_ws_sv_voice",
    testText: "Hej! Trevligt att träffa dig.",
    defaultSelect: 'google',
  },
  {
    id: "ka",
    flagCode: "ge",
    titleKey: "settings.kaVoicesTitle",
    noTitleKey: "settings.noKaVoicesTitle",
    descKey: "settings.noKaVoicesDesc",
    voicesFn: _kaVoices,
    getURI: () => _kaURI,
    setURI: (u: string) => { _kaURI = u; },
    storageKey: "ew_ws_ka_voice",
    testText: "გამარჯობა! სასიხარულოა შენი გაცნობა.",
    defaultSelect: 'google',
  },
  {
    id: "hr",
    flagCode: "hr",
    titleKey: "settings.hrVoicesTitle",
    noTitleKey: "settings.noHrVoicesTitle",
    descKey: "settings.noHrVoicesDesc",
    voicesFn: _hrVoices,
    getURI: () => _hrURI,
    setURI: (u: string) => { _hrURI = u; },
    storageKey: "ew_ws_hr_voice",
    testText: "Bok! Drago mi je upoznati te.",
    defaultSelect: 'google',
  },
  {
    id: "sr",
    flagCode: "rs",
    titleKey: "settings.srVoicesTitle",
    noTitleKey: "settings.noSrVoicesTitle",
    descKey: "settings.noSrVoicesDesc",
    voicesFn: _srVoices,
    getURI: () => _srURI,
    setURI: (u: string) => { _srURI = u; },
    storageKey: "ew_ws_sr_voice",
    testText: "Здраво! Драго ми је што сам те упознао.",
    defaultSelect: 'google',
  },
  {
    id: "bs",
    flagCode: "ba",
    titleKey: "settings.bsVoicesTitle",
    noTitleKey: "settings.noBsVoicesTitle",
    descKey: "settings.noBsVoicesDesc",
    voicesFn: _bsVoices,
    getURI: () => _bsURI,
    setURI: (u: string) => { _bsURI = u; },
    storageKey: "ew_ws_bs_voice",
    testText: "Zdravo! Drago mi je što smo se upoznali.",
    defaultSelect: 'google',
  },
  {
    id: "bg",
    flagCode: "bg",
    titleKey: "settings.bgVoicesTitle",
    noTitleKey: "settings.noBgVoicesTitle",
    descKey: "settings.noBgVoicesDesc",
    voicesFn: _bgVoices,
    getURI: () => _bgURI,
    setURI: (u: string) => { _bgURI = u; },
    storageKey: "ew_ws_bg_voice",
    testText: "Здравей! Приятно ми е да се запознаем.",
    defaultSelect: 'google',
  },
  {
    id: "sk",
    flagCode: "sk",
    titleKey: "settings.skVoicesTitle",
    noTitleKey: "settings.noSkVoicesTitle",
    descKey: "settings.noSkVoicesDesc",
    voicesFn: _skVoices,
    getURI: () => _skURI,
    setURI: (u: string) => { _skURI = u; },
    storageKey: "ew_ws_sk_voice",
    testText: "Ahoj! Teší ma, že ťa spoznávam.",
    defaultSelect: 'google',
  },
  {
    id: "hy",
    flagCode: "am",
    titleKey: "settings.hyVoicesTitle",
    noTitleKey: "settings.noHyVoicesTitle",
    descKey: "settings.noHyVoicesDesc",
    voicesFn: _hyVoices,
    getURI: () => _hyURI,
    setURI: (u: string) => { _hyURI = u; },
    storageKey: "ew_ws_hy_voice",
    testText: "Բարև! Ուրախ եմ ծանոթանալ ձեզ հետ.",
    defaultSelect: 'google',
  },
  {
    id: "da",
    flagCode: "dk",
    titleKey: "settings.daVoicesTitle",
    noTitleKey: "settings.noDaVoicesTitle",
    descKey: "settings.noDaVoicesDesc",
    voicesFn: _daVoices,
    getURI: () => _daURI,
    setURI: (u: string) => { _daURI = u; },
    storageKey: "ew_ws_da_voice",
    testText: "Hej! Rart at møde dig.",
    defaultSelect: 'google',
  },
  {
    id: "fi",
    flagCode: "fi",
    titleKey: "settings.fiVoicesTitle",
    noTitleKey: "settings.noFiVoicesTitle",
    descKey: "settings.noFiVoicesDesc",
    voicesFn: _fiVoices,
    getURI: () => _fiURI,
    setURI: (u: string) => { _fiURI = u; },
    storageKey: "ew_ws_fi_voice",
    testText: "Hei! Hauska tavata sinut.",
    defaultSelect: 'google',
  },
  {
    id: "no",
    flagCode: "no",
    titleKey: "settings.noVoicesTitle",
    noTitleKey: "settings.noNoVoicesTitle",
    descKey: "settings.noNoVoicesDesc",
    voicesFn: _noVoices,
    getURI: () => _noURI,
    setURI: (u: string) => { _noURI = u; },
    storageKey: "ew_ws_no_voice",
    testText: "Hei! Hyggelig å møte deg.",
    defaultSelect: 'google',
  },
  {
    id: "la",
    flagCode: "spqr",
    titleKey: "settings.laVoicesTitle",
    noTitleKey: "settings.noLaVoicesTitle",
    descKey: "settings.noLaVoicesDesc",
    voicesFn: _laVoices,
    getURI: () => _laURI,
    setURI: (u: string) => { _laURI = u; },
    storageKey: "ew_ws_la_voice",
    testText: "Salve! Gratum est te cognoscere.",
    defaultSelect: 'google',
  },
  {
    id: "lt",
    flagCode: "lt",
    titleKey: "settings.ltVoicesTitle",
    noTitleKey: "settings.noLtVoicesTitle",
    descKey: "settings.noLtVoicesDesc",
    voicesFn: _ltVoices,
    getURI: () => _ltURI,
    setURI: (u: string) => { _ltURI = u; },
    storageKey: "ew_ws_lt_voice",
    testText: "Sveiki! Malonu su jumis susipažinti.",
    defaultSelect: 'google',
  },
  {
    id: "lv",
    flagCode: "lv",
    titleKey: "settings.lvVoicesTitle",
    noTitleKey: "settings.noLvVoicesTitle",
    descKey: "settings.noLvVoicesDesc",
    voicesFn: _lvVoices,
    getURI: () => _lvURI,
    setURI: (u: string) => { _lvURI = u; },
    storageKey: "ew_ws_lv_voice",
    testText: "Sveiki! Prieks iepazīties.",
    defaultSelect: 'google',
  },
  {
    id: "et",
    flagCode: "ee",
    titleKey: "settings.etVoicesTitle",
    noTitleKey: "settings.noEtVoicesTitle",
    descKey: "settings.noEtVoicesDesc",
    voicesFn: _etVoices,
    getURI: () => _etURI,
    setURI: (u: string) => { _etURI = u; },
    storageKey: "ew_ws_et_voice",
    testText: "Tere! Meeldiv tutvuda.",
    defaultSelect: 'google',
  },
  {
    id: "sl",
    flagCode: "si",
    titleKey: "settings.slVoicesTitle",
    noTitleKey: "settings.noSlVoicesTitle",
    descKey: "settings.noSlVoicesDesc",
    voicesFn: _slVoices,
    getURI: () => _slURI,
    setURI: (u: string) => { _slURI = u; },
    storageKey: "ew_ws_sl_voice",
    testText: "Živjo! Lepo, da sva se spoznala.",
    defaultSelect: 'google',
  },
  {
    id: "mk",
    flagCode: "mk",
    titleKey: "settings.mkVoicesTitle",
    noTitleKey: "settings.noMkVoicesTitle",
    descKey: "settings.noMkVoicesDesc",
    voicesFn: _mkVoices,
    getURI: () => _mkURI,
    setURI: (u: string) => { _mkURI = u; },
    storageKey: "ew_ws_mk_voice",
    testText: "Здраво! Мило ми е што те запознав.",
    defaultSelect: 'google',
  },
  {
    id: "sq",
    flagCode: "al",
    titleKey: "settings.sqVoicesTitle",
    noTitleKey: "settings.noSqVoicesTitle",
    descKey: "settings.noSqVoicesDesc",
    voicesFn: _sqVoices,
    getURI: () => _sqURI,
    setURI: (u: string) => { _sqURI = u; },
    storageKey: "ew_ws_sq_voice",
    testText: "Përshëndetje! Gëzohem që të njoha.",
    defaultSelect: 'google',
  },
  {
    id: "is",
    flagCode: "is",
    titleKey: "settings.isVoicesTitle",
    noTitleKey: "settings.noIsVoicesTitle",
    descKey: "settings.noIsVoicesDesc",
    voicesFn: _isVoices,
    getURI: () => _isURI,
    setURI: (u: string) => { _isURI = u; },
    storageKey: "ew_ws_is_voice",
    testText: "Hæ! Gaman að kynnast þér.",
    defaultSelect: 'google',
  },
  {
    id: "cy",
    flagCode: "wls",
    titleKey: "settings.cyVoicesTitle",
    noTitleKey: "settings.noCyVoicesTitle",
    descKey: "settings.noCyVoicesDesc",
    voicesFn: _cyVoices,
    getURI: () => _cyURI,
    setURI: (u: string) => { _cyURI = u; },
    storageKey: "ew_ws_cy_voice",
    testText: "Helo! Braf cwrdd â chi.",
    defaultSelect: 'google',
  },
  {
    id: "ga",
    flagCode: "ie",
    titleKey: "settings.gaVoicesTitle",
    noTitleKey: "settings.noGaVoicesTitle",
    descKey: "settings.noGaVoicesDesc",
    voicesFn: _gaVoices,
    getURI: () => _gaURI,
    setURI: (u: string) => { _gaURI = u; },
    storageKey: "ew_ws_ga_voice",
    testText: "Dia duit! Tá áthas orm bualadh leat.",
    defaultSelect: 'google',
  },
  {
    id: "tl",
    flagCode: "ph",
    titleKey: "settings.tlVoicesTitle",
    noTitleKey: "settings.noTlVoicesTitle",
    descKey: "settings.noTlVoicesDesc",
    voicesFn: _tlVoices,
    getURI: () => _tlURI,
    setURI: (u: string) => { _tlURI = u; },
    storageKey: "ew_ws_tl_voice",
    testText: "Kamusta! Ikinagagalak kitang makilala.",
    defaultSelect: 'google',
  },
  {
    id: "mn",
    flagCode: "mn",
    titleKey: "settings.mnVoicesTitle",
    noTitleKey: "settings.noMnVoicesTitle",
    descKey: "settings.noMnVoicesDesc",
    voicesFn: _mnVoices,
    getURI: () => _mnURI,
    setURI: (u: string) => { _mnURI = u; },
    storageKey: "ew_ws_mn_voice",
    testText: "Сайн байна уу! Танилцаж сайхан байна.",
    defaultSelect: 'google',
  },
  {
    id: "uz",
    flagCode: "uz",
    titleKey: "settings.uzVoicesTitle",
    noTitleKey: "settings.noUzVoicesTitle",
    descKey: "settings.noUzVoicesDesc",
    voicesFn: _uzVoices,
    getURI: () => _uzURI,
    setURI: (u: string) => { _uzURI = u; },
    storageKey: "ew_ws_uz_voice",
    testText: "Salom! Siz bilan tanishganimdan xursandman.",
    defaultSelect: 'google',
  },
  {
    id: "am",
    flagCode: "et",
    titleKey: "settings.amVoicesTitle",
    noTitleKey: "settings.noAmVoicesTitle",
    descKey: "settings.noAmVoicesDesc",
    voicesFn: _amVoices,
    getURI: () => _amURI,
    setURI: (u: string) => { _amURI = u; },
    storageKey: "ew_ws_am_voice",
    testText: "ሰላም! በመተዋወቃችን ደስ ብሎኛል።",
    defaultSelect: 'google',
  },
  {
    id: "eo",
    flagCode: "eo",
    titleKey: "settings.eoVoicesTitle",
    noTitleKey: null,
    descKey: null,
    voicesFn: _eoVoices,
    getURI: () => _eoURI,
    setURI: (u: string) => { _eoURI = u; },
    storageKey: "ew_ws_eo_voice",
    testText: "Saluton! Mi ĝojas vin renkonti.",
    defaultSelect: 'google',
  },
  {
    id: "ta",
    flagCode: "in",
    titleKey: "settings.taVoicesTitle",
    noTitleKey: "settings.noTaVoicesTitle",
    descKey: "settings.noTaVoicesDesc",
    voicesFn: _taVoices,
    getURI: () => _taURI,
    setURI: (u: string) => { _taURI = u; },
    storageKey: "ew_ws_ta_voice",
    testText: "Hello!",
    defaultSelect: 'google',
  },
  {
    id: "pa",
    flagCode: "in",
    titleKey: "settings.paVoicesTitle",
    noTitleKey: "settings.noPaVoicesTitle",
    descKey: "settings.noPaVoicesDesc",
    voicesFn: _paVoices,
    getURI: () => _paURI,
    setURI: (u: string) => { _paURI = u; },
    storageKey: "ew_ws_pa_voice",
    testText: "Hello!",
    defaultSelect: 'google',
  },
  {
    id: "zu",
    flagCode: "za",
    titleKey: "settings.zuVoicesTitle",
    noTitleKey: "settings.noZuVoicesTitle",
    descKey: "settings.noZuVoicesDesc",
    voicesFn: _zuVoices,
    getURI: () => _zuURI,
    setURI: (u: string) => { _zuURI = u; },
    storageKey: "ew_ws_zu_voice",
    testText: "Hello!",
    defaultSelect: 'google',
  },
  {
    id: "af",
    flagCode: "za",
    titleKey: "settings.afVoicesTitle",
    noTitleKey: "settings.noAfVoicesTitle",
    descKey: "settings.noAfVoicesDesc",
    voicesFn: _afVoices,
    getURI: () => _afURI,
    setURI: (u: string) => { _afURI = u; },
    storageKey: "ew_ws_af_voice",
    testText: "Hello!",
    defaultSelect: 'google',
  },
  {
    id: "ky",
    flagCode: "kg",
    titleKey: "settings.kyVoicesTitle",
    noTitleKey: "settings.noKyVoicesTitle",
    descKey: "settings.noKyVoicesDesc",
    voicesFn: _kyVoices,
    getURI: () => _kyURI,
    setURI: (u: string) => { _kyURI = u; },
    storageKey: "ew_ws_ky_voice",
    testText: "Hello!",
    defaultSelect: 'google',
  },
  {
    id: "tg",
    flagCode: "tj",
    titleKey: "settings.tgVoicesTitle",
    noTitleKey: "settings.noTgVoicesTitle",
    descKey: "settings.noTgVoicesDesc",
    voicesFn: _tgVoices,
    getURI: () => _tgURI,
    setURI: (u: string) => { _tgURI = u; },
    storageKey: "ew_ws_tg_voice",
    testText: "Hello!",
    defaultSelect: 'google',
  },
  {
    id: "tk",
    flagCode: "tm",
    titleKey: "settings.tkVoicesTitle",
    noTitleKey: "settings.noTkVoicesTitle",
    descKey: "settings.noTkVoicesDesc",
    voicesFn: _tkVoices,
    getURI: () => _tkURI,
    setURI: (u: string) => { _tkURI = u; },
    storageKey: "ew_ws_tk_voice",
    testText: "Hello!",
    defaultSelect: 'google',
  },
  {
    id: "ug",
    flagCode: "cn",
    titleKey: "settings.ugVoicesTitle",
    noTitleKey: "settings.noUgVoicesTitle",
    descKey: "settings.noUgVoicesDesc",
    voicesFn: _ugVoices,
    getURI: () => _ugURI,
    setURI: (u: string) => { _ugURI = u; },
    storageKey: "ew_ws_ug_voice",
    testText: "Hello!",
    defaultSelect: 'google',
  },
  {
    id: "eu",
    flagCode: "eu",
    titleKey: "settings.euVoicesTitle",
    noTitleKey: "settings.noEuVoicesTitle",
    descKey: "settings.noEuVoicesDesc",
    voicesFn: _euVoices,
    getURI: () => _euURI,
    setURI: (u: string) => { _euURI = u; },
    storageKey: "ew_ws_eu_voice",
    testText: "Hello!",
    defaultSelect: 'google',
  },
  {
    id: "ca",
    flagCode: "cat",
    titleKey: "settings.caVoicesTitle",
    noTitleKey: "settings.noCaVoicesTitle",
    descKey: "settings.noCaVoicesDesc",
    voicesFn: _caVoices,
    getURI: () => _caURI,
    setURI: (u: string) => { _caURI = u; },
    storageKey: "ew_ws_ca_voice",
    testText: "Hello!",
    defaultSelect: 'google',
  },
  {
    id: "gl",
    flagCode: "gal",
    titleKey: "settings.glVoicesTitle",
    noTitleKey: "settings.noGlVoicesTitle",
    descKey: "settings.noGlVoicesDesc",
    voicesFn: _glVoices,
    getURI: () => _glURI,
    setURI: (u: string) => { _glURI = u; },
    storageKey: "ew_ws_gl_voice",
    testText: "Hello!",
    defaultSelect: 'google',
  },
  {
    id: "mt",
    flagCode: "mt",
    titleKey: "settings.mtVoicesTitle",
    noTitleKey: "settings.noMtVoicesTitle",
    descKey: "settings.noMtVoicesDesc",
    voicesFn: _mtVoices,
    getURI: () => _mtURI,
    setURI: (u: string) => { _mtURI = u; },
    storageKey: "ew_ws_mt_voice",
    testText: "Hello!",
    defaultSelect: 'google',
  },
  {
    id: "lb",
    flagCode: "lu",
    titleKey: "settings.lbVoicesTitle",
    noTitleKey: "settings.noLbVoicesTitle",
    descKey: "settings.noLbVoicesDesc",
    voicesFn: _lbVoices,
    getURI: () => _lbURI,
    setURI: (u: string) => { _lbURI = u; },
    storageKey: "ew_ws_lb_voice",
    testText: "Hello!",
    defaultSelect: 'google',
  },
  {
    id: "ht",
    flagCode: "ht",
    titleKey: "settings.htVoicesTitle",
    noTitleKey: "settings.noHtVoicesTitle",
    descKey: "settings.noHtVoicesDesc",
    voicesFn: _htVoices,
    getURI: () => _htURI,
    setURI: (u: string) => { _htURI = u; },
    storageKey: "ew_ws_ht_voice",
    testText: "Hello!",
    defaultSelect: 'google',
  },
  {
    id: "bo",
    flagCode: "cn",
    titleKey: "settings.boVoicesTitle",
    noTitleKey: "settings.noBoVoicesTitle",
    descKey: "settings.noBoVoicesDesc",
    voicesFn: _boVoices,
    getURI: () => _boURI,
    setURI: (u: string) => { _boURI = u; },
    storageKey: "ew_ws_bo_voice",
    testText: "Hello!",
    defaultSelect: 'google',
  },
  {
    id: "my",
    flagCode: "mm",
    titleKey: "settings.myVoicesTitle",
    noTitleKey: "settings.noMyVoicesTitle",
    descKey: "settings.noMyVoicesDesc",
    voicesFn: _myVoices,
    getURI: () => _myURI,
    setURI: (u: string) => { _myURI = u; },
    storageKey: "ew_ws_my_voice",
    testText: "Hello!",
    defaultSelect: 'google',
  },
  {
    id: "km",
    flagCode: "kh",
    titleKey: "settings.kmVoicesTitle",
    noTitleKey: "settings.noKmVoicesTitle",
    descKey: "settings.noKmVoicesDesc",
    voicesFn: _kmVoices,
    getURI: () => _kmURI,
    setURI: (u: string) => { _kmURI = u; },
    storageKey: "ew_ws_km_voice",
    testText: "Hello!",
    defaultSelect: 'google',
  },
  {
    id: "lo",
    flagCode: "la",
    titleKey: "settings.loVoicesTitle",
    noTitleKey: "settings.noLoVoicesTitle",
    descKey: "settings.noLoVoicesDesc",
    voicesFn: _loVoices,
    getURI: () => _loURI,
    setURI: (u: string) => { _loURI = u; },
    storageKey: "ew_ws_lo_voice",
    testText: "Hello!",
    defaultSelect: 'google',
  },
  {
    id: "ne",
    flagCode: "np",
    titleKey: "settings.neVoicesTitle",
    noTitleKey: "settings.noNeVoicesTitle",
    descKey: "settings.noNeVoicesDesc",
    voicesFn: _neVoices,
    getURI: () => _neURI,
    setURI: (u: string) => { _neURI = u; },
    storageKey: "ew_ws_ne_voice",
    testText: "Hello!",
    defaultSelect: 'google',
  },
  {
    id: "si",
    flagCode: "lk",
    titleKey: "settings.siVoicesTitle",
    noTitleKey: "settings.noSiVoicesTitle",
    descKey: "settings.noSiVoicesDesc",
    voicesFn: _siVoices,
    getURI: () => _siURI,
    setURI: (u: string) => { _siURI = u; },
    storageKey: "ew_ws_si_voice",
    testText: "Hello!",
    defaultSelect: 'google',
  },
  {
    id: "ur",
    flagCode: "pk",
    titleKey: "settings.urVoicesTitle",
    noTitleKey: "settings.noUrVoicesTitle",
    descKey: "settings.noUrVoicesDesc",
    voicesFn: _urVoices,
    getURI: () => _urURI,
    setURI: (u: string) => { _urURI = u; },
    storageKey: "ew_ws_ur_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "te",
    flagCode: "in",
    titleKey: "settings.teVoicesTitle",
    noTitleKey: "settings.noTeVoicesTitle",
    descKey: "settings.noTeVoicesDesc",
    voicesFn: _teVoices,
    getURI: () => _teURI,
    setURI: (u: string) => { _teURI = u; },
    storageKey: "ew_ws_te_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "ml",
    flagCode: "in",
    titleKey: "settings.mlVoicesTitle",
    noTitleKey: "settings.noMlVoicesTitle",
    descKey: "settings.noMlVoicesDesc",
    voicesFn: _mlVoices,
    getURI: () => _mlURI,
    setURI: (u: string) => { _mlURI = u; },
    storageKey: "ew_ws_ml_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "kn",
    flagCode: "in",
    titleKey: "settings.knVoicesTitle",
    noTitleKey: "settings.noKnVoicesTitle",
    descKey: "settings.noKnVoicesDesc",
    voicesFn: _knVoices,
    getURI: () => _knURI,
    setURI: (u: string) => { _knURI = u; },
    storageKey: "ew_ws_kn_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "mr",
    flagCode: "in",
    titleKey: "settings.mrVoicesTitle",
    noTitleKey: "settings.noMrVoicesTitle",
    descKey: "settings.noMrVoicesDesc",
    voicesFn: _mrVoices,
    getURI: () => _mrURI,
    setURI: (u: string) => { _mrURI = u; },
    storageKey: "ew_ws_mr_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "gu",
    flagCode: "in",
    titleKey: "settings.guVoicesTitle",
    noTitleKey: "settings.noGuVoicesTitle",
    descKey: "settings.noGuVoicesDesc",
    voicesFn: _guVoices,
    getURI: () => _guURI,
    setURI: (u: string) => { _guURI = u; },
    storageKey: "ew_ws_gu_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "or",
    flagCode: "in",
    titleKey: "settings.orVoicesTitle",
    noTitleKey: "settings.noOrVoicesTitle",
    descKey: "settings.noOrVoicesDesc",
    voicesFn: _orVoices,
    getURI: () => _orURI,
    setURI: (u: string) => { _orURI = u; },
    storageKey: "ew_ws_or_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "as",
    flagCode: "in",
    titleKey: "settings.asVoicesTitle",
    noTitleKey: "settings.noAsVoicesTitle",
    descKey: "settings.noAsVoicesDesc",
    voicesFn: _asVoices,
    getURI: () => _asURI,
    setURI: (u: string) => { _asURI = u; },
    storageKey: "ew_ws_as_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "sd",
    flagCode: "pk",
    titleKey: "settings.sdVoicesTitle",
    noTitleKey: "settings.noSdVoicesTitle",
    descKey: "settings.noSdVoicesDesc",
    voicesFn: _sdVoices,
    getURI: () => _sdURI,
    setURI: (u: string) => { _sdURI = u; },
    storageKey: "ew_ws_sd_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "ps",
    flagCode: "af",
    titleKey: "settings.psVoicesTitle",
    noTitleKey: "settings.noPsVoicesTitle",
    descKey: "settings.noPsVoicesDesc",
    voicesFn: _psVoices,
    getURI: () => _psURI,
    setURI: (u: string) => { _psURI = u; },
    storageKey: "ew_ws_ps_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "so",
    flagCode: "so",
    titleKey: "settings.soVoicesTitle",
    noTitleKey: "settings.noSoVoicesTitle",
    descKey: "settings.noSoVoicesDesc",
    voicesFn: _soVoices,
    getURI: () => _soURI,
    setURI: (u: string) => { _soURI = u; },
    storageKey: "ew_ws_so_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "ha",
    flagCode: "ng",
    titleKey: "settings.haVoicesTitle",
    noTitleKey: "settings.noHaVoicesTitle",
    descKey: "settings.noHaVoicesDesc",
    voicesFn: _haVoices,
    getURI: () => _haURI,
    setURI: (u: string) => { _haURI = u; },
    storageKey: "ew_ws_ha_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "yo",
    flagCode: "ng",
    titleKey: "settings.yoVoicesTitle",
    noTitleKey: "settings.noYoVoicesTitle",
    descKey: "settings.noYoVoicesDesc",
    voicesFn: _yoVoices,
    getURI: () => _yoURI,
    setURI: (u: string) => { _yoURI = u; },
    storageKey: "ew_ws_yo_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "ig",
    flagCode: "ng",
    titleKey: "settings.igVoicesTitle",
    noTitleKey: "settings.noIgVoicesTitle",
    descKey: "settings.noIgVoicesDesc",
    voicesFn: _igVoices,
    getURI: () => _igURI,
    setURI: (u: string) => { _igURI = u; },
    storageKey: "ew_ws_ig_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "ti",
    flagCode: "er",
    titleKey: "settings.tiVoicesTitle",
    noTitleKey: "settings.noTiVoicesTitle",
    descKey: "settings.noTiVoicesDesc",
    voicesFn: _tiVoices,
    getURI: () => _tiURI,
    setURI: (u: string) => { _tiURI = u; },
    storageKey: "ew_ws_ti_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "wo",
    flagCode: "sn",
    titleKey: "settings.woVoicesTitle",
    noTitleKey: "settings.noWoVoicesTitle",
    descKey: "settings.noWoVoicesDesc",
    voicesFn: _woVoices,
    getURI: () => _woURI,
    setURI: (u: string) => { _woURI = u; },
    storageKey: "ew_ws_wo_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "mg",
    flagCode: "mg",
    titleKey: "settings.mgVoicesTitle",
    noTitleKey: "settings.noMgVoicesTitle",
    descKey: "settings.noMgVoicesDesc",
    voicesFn: _mgVoices,
    getURI: () => _mgURI,
    setURI: (u: string) => { _mgURI = u; },
    storageKey: "ew_ws_mg_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "xh",
    flagCode: "za",
    titleKey: "settings.xhVoicesTitle",
    noTitleKey: "settings.noXhVoicesTitle",
    descKey: "settings.noXhVoicesDesc",
    voicesFn: _xhVoices,
    getURI: () => _xhURI,
    setURI: (u: string) => { _xhURI = u; },
    storageKey: "ew_ws_xh_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "sn",
    flagCode: "zw",
    titleKey: "settings.snVoicesTitle",
    noTitleKey: "settings.noSnVoicesTitle",
    descKey: "settings.noSnVoicesDesc",
    voicesFn: _snVoices,
    getURI: () => _snURI,
    setURI: (u: string) => { _snURI = u; },
    storageKey: "ew_ws_sn_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "ny",
    flagCode: "mw",
    titleKey: "settings.nyVoicesTitle",
    noTitleKey: "settings.noNyVoicesTitle",
    descKey: "settings.noNyVoicesDesc",
    voicesFn: _nyVoices,
    getURI: () => _nyURI,
    setURI: (u: string) => { _nyURI = u; },
    storageKey: "ew_ws_ny_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "fj",
    flagCode: "fj",
    titleKey: "settings.fjVoicesTitle",
    noTitleKey: "settings.noFjVoicesTitle",
    descKey: "settings.noFjVoicesDesc",
    voicesFn: _fjVoices,
    getURI: () => _fjURI,
    setURI: (u: string) => { _fjURI = u; },
    storageKey: "ew_ws_fj_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "sm",
    flagCode: "ws",
    titleKey: "settings.smVoicesTitle",
    noTitleKey: "settings.noSmVoicesTitle",
    descKey: "settings.noSmVoicesDesc",
    voicesFn: _smVoices,
    getURI: () => _smURI,
    setURI: (u: string) => { _smURI = u; },
    storageKey: "ew_ws_sm_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "to",
    flagCode: "to",
    titleKey: "settings.toVoicesTitle",
    noTitleKey: "settings.noToVoicesTitle",
    descKey: "settings.noToVoicesDesc",
    voicesFn: _toVoices,
    getURI: () => _toURI,
    setURI: (u: string) => { _toURI = u; },
    storageKey: "ew_ws_to_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "mi",
    flagCode: "nz",
    titleKey: "settings.miVoicesTitle",
    noTitleKey: "settings.noMiVoicesTitle",
    descKey: "settings.noMiVoicesDesc",
    voicesFn: _miVoices,
    getURI: () => _miURI,
    setURI: (u: string) => { _miURI = u; },
    storageKey: "ew_ws_mi_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "haw",
    flagCode: "us",
    titleKey: "settings.hawVoicesTitle",
    noTitleKey: "settings.noHawVoicesTitle",
    descKey: "settings.noHawVoicesDesc",
    voicesFn: _hawVoices,
    getURI: () => _hawURI,
    setURI: (u: string) => { _hawURI = u; },
    storageKey: "ew_ws_haw_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "jv",
    flagCode: "id",
    titleKey: "settings.jvVoicesTitle",
    noTitleKey: "settings.noJvVoicesTitle",
    descKey: "settings.noJvVoicesDesc",
    voicesFn: _jvVoices,
    getURI: () => _jvURI,
    setURI: (u: string) => { _jvURI = u; },
    storageKey: "ew_ws_jv_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "su",
    flagCode: "id",
    titleKey: "settings.suVoicesTitle",
    noTitleKey: "settings.noSuVoicesTitle",
    descKey: "settings.noSuVoicesDesc",
    voicesFn: _suVoices,
    getURI: () => _suURI,
    setURI: (u: string) => { _suURI = u; },
    storageKey: "ew_ws_su_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "gd",
    flagCode: "sct",
    titleKey: "settings.gdVoicesTitle",
    noTitleKey: "settings.noGdVoicesTitle",
    descKey: "settings.noGdVoicesDesc",
    voicesFn: _gdVoices,
    getURI: () => _gdURI,
    setURI: (u: string) => { _gdURI = u; },
    storageKey: "ew_ws_gd_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "br",
    flagCode: "fr",
    titleKey: "settings.brVoicesTitle",
    noTitleKey: "settings.noBrVoicesTitle",
    descKey: "settings.noBrVoicesDesc",
    voicesFn: _brVoices,
    getURI: () => _brURI,
    setURI: (u: string) => { _brURI = u; },
    storageKey: "ew_ws_br_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "kw",
    flagCode: "corn",
    titleKey: "settings.kwVoicesTitle",
    noTitleKey: "settings.noKwVoicesTitle",
    descKey: "settings.noKwVoicesDesc",
    voicesFn: _kwVoices,
    getURI: () => _kwURI,
    setURI: (u: string) => { _kwURI = u; },
    storageKey: "ew_ws_kw_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "gv",
    flagCode: "gb",
    titleKey: "settings.gvVoicesTitle",
    noTitleKey: "settings.noGvVoicesTitle",
    descKey: "settings.noGvVoicesDesc",
    voicesFn: _gvVoices,
    getURI: () => _gvURI,
    setURI: (u: string) => { _gvURI = u; },
    storageKey: "ew_ws_gv_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "fo",
    flagCode: "fo",
    titleKey: "settings.foVoicesTitle",
    noTitleKey: "settings.noFoVoicesTitle",
    descKey: "settings.noFoVoicesDesc",
    voicesFn: _foVoices,
    getURI: () => _foURI,
    setURI: (u: string) => { _foURI = u; },
    storageKey: "ew_ws_fo_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "oc",
    flagCode: "fr",
    titleKey: "settings.ocVoicesTitle",
    noTitleKey: "settings.noOcVoicesTitle",
    descKey: "settings.noOcVoicesDesc",
    voicesFn: _ocVoices,
    getURI: () => _ocURI,
    setURI: (u: string) => { _ocURI = u; },
    storageKey: "ew_ws_oc_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "co",
    flagCode: "fr",
    titleKey: "settings.coVoicesTitle",
    noTitleKey: "settings.noCoVoicesTitle",
    descKey: "settings.noCoVoicesDesc",
    voicesFn: _coVoices,
    getURI: () => _coURI,
    setURI: (u: string) => { _coURI = u; },
    storageKey: "ew_ws_co_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "sc",
    flagCode: "it",
    titleKey: "settings.scVoicesTitle",
    noTitleKey: "settings.noScVoicesTitle",
    descKey: "settings.noScVoicesDesc",
    voicesFn: _scVoices,
    getURI: () => _scURI,
    setURI: (u: string) => { _scURI = u; },
    storageKey: "ew_ws_sc_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "fy",
    flagCode: "nl",
    titleKey: "settings.fyVoicesTitle",
    noTitleKey: "settings.noFyVoicesTitle",
    descKey: "settings.noFyVoicesDesc",
    voicesFn: _fyVoices,
    getURI: () => _fyURI,
    setURI: (u: string) => { _fyURI = u; },
    storageKey: "ew_ws_fy_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "yi",
    flagCode: "il",
    titleKey: "settings.yiVoicesTitle",
    noTitleKey: "settings.noYiVoicesTitle",
    descKey: "settings.noYiVoicesDesc",
    voicesFn: _yiVoices,
    getURI: () => _yiURI,
    setURI: (u: string) => { _yiURI = u; },
    storageKey: "ew_ws_yi_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "lad",
    flagCode: "es",
    titleKey: "settings.ladVoicesTitle",
    noTitleKey: "settings.noLadVoicesTitle",
    descKey: "settings.noLadVoicesDesc",
    voicesFn: _ladVoices,
    getURI: () => _ladURI,
    setURI: (u: string) => { _ladURI = u; },
    storageKey: "ew_ws_lad_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "qu",
    flagCode: "pe",
    titleKey: "settings.quVoicesTitle",
    noTitleKey: "settings.noQuVoicesTitle",
    descKey: "settings.noQuVoicesDesc",
    voicesFn: _quVoices,
    getURI: () => _quURI,
    setURI: (u: string) => { _quURI = u; },
    storageKey: "ew_ws_qu_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "gn",
    flagCode: "py",
    titleKey: "settings.gnVoicesTitle",
    noTitleKey: "settings.noGnVoicesTitle",
    descKey: "settings.noGnVoicesDesc",
    voicesFn: _gnVoices,
    getURI: () => _gnURI,
    setURI: (u: string) => { _gnURI = u; },
    storageKey: "ew_ws_gn_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "ay",
    flagCode: "bo",
    titleKey: "settings.ayVoicesTitle",
    noTitleKey: "settings.noAyVoicesTitle",
    descKey: "settings.noAyVoicesDesc",
    voicesFn: _ayVoices,
    getURI: () => _ayURI,
    setURI: (u: string) => { _ayURI = u; },
    storageKey: "ew_ws_ay_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "dz",
    flagCode: "bt",
    titleKey: "settings.dzVoicesTitle",
    noTitleKey: "settings.noDzVoicesTitle",
    descKey: "settings.noDzVoicesDesc",
    voicesFn: _dzVoices,
    getURI: () => _dzURI,
    setURI: (u: string) => { _dzURI = u; },
    storageKey: "ew_ws_dz_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "dv",
    flagCode: "mv",
    titleKey: "settings.dvVoicesTitle",
    noTitleKey: "settings.noDvVoicesTitle",
    descKey: "settings.noDvVoicesDesc",
    voicesFn: _dvVoices,
    getURI: () => _dvURI,
    setURI: (u: string) => { _dvURI = u; },
    storageKey: "ew_ws_dv_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "tet",
    flagCode: "tl",
    titleKey: "settings.tetVoicesTitle",
    noTitleKey: "settings.noTetVoicesTitle",
    descKey: "settings.noTetVoicesDesc",
    voicesFn: _tetVoices,
    getURI: () => _tetURI,
    setURI: (u: string) => { _tetURI = u; },
    storageKey: "ew_ws_tet_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "be",
    flagCode: "by",
    titleKey: "settings.beVoicesTitle",
    noTitleKey: "settings.noBeVoicesTitle",
    descKey: "settings.noBeVoicesDesc",
    voicesFn: _beVoices,
    getURI: () => _beURI,
    setURI: (u: string) => { _beURI = u; },
    storageKey: "ew_ws_be_voice",
    testText: "Hello!",
    defaultSelect: null,
  },
  {
    id: "qya",
    flagCode: "qya",
    titleKey: "settings.qyaVoicesTitle",
    noTitleKey: "settings.noQyaVoicesTitle",
    descKey: "settings.noQyaVoicesDesc",
    voicesFn: _qyaVoices,
    getURI: () => _qyaURI,
    setURI: (u: string) => { _qyaURI = u; },
    storageKey: "ew_ws_qya_voice",
    testText: "Elen síla lúmenn' omentielvo.",
    defaultSelect: null,
  },
  {
    id: "sjn",
    flagCode: "sjn",
    titleKey: "settings.sjnVoicesTitle",
    noTitleKey: "settings.noSjnVoicesTitle",
    descKey: "settings.noSjnVoicesDesc",
    voicesFn: _sjnVoices,
    getURI: () => _sjnURI,
    setURI: (u: string) => { _sjnURI = u; },
    storageKey: "ew_ws_sjn_voice",
    testText: "Mae govannen.",
    defaultSelect: null,
  },
  {
    id: "ku",
    flagCode: "ku",
    titleKey: "settings.kuVoicesTitle",
    noTitleKey: "settings.noKuVoicesTitle",
    descKey: "settings.noKuVoicesDesc",
    voicesFn: _kuVoices,
    getURI: () => _kuURI,
    setURI: (u: string) => { _kuURI = u; },
    storageKey: "ew_ws_ku_voice",
    testText: "Silav!",
    defaultSelect: null,
  },
  {
    id: "om",
    flagCode: "et",
    titleKey: "settings.omVoicesTitle",
    noTitleKey: "settings.noOmVoicesTitle",
    descKey: "settings.noOmVoicesDesc",
    voicesFn: _omVoices,
    getURI: () => _omURI,
    setURI: (u: string) => { _omURI = u; },
    storageKey: "ew_ws_om_voice",
    testText: "Akkam?",
    defaultSelect: null,
  },
  {
    id: "ln",
    flagCode: "cd",
    titleKey: "settings.lnVoicesTitle",
    noTitleKey: "settings.noLnVoicesTitle",
    descKey: "settings.noLnVoicesDesc",
    voicesFn: _lnVoices,
    getURI: () => _lnURI,
    setURI: (u: string) => { _lnURI = u; },
    storageKey: "ew_ws_ln_voice",
    testText: "Mbote!",
    defaultSelect: null,
  },
  {
    id: "bho",
    flagCode: "in",
    titleKey: "settings.bhoVoicesTitle",
    noTitleKey: "settings.noBhoVoicesTitle",
    descKey: "settings.noBhoVoicesDesc",
    voicesFn: _bhoVoices,
    getURI: () => _bhoURI,
    setURI: (u: string) => { _bhoURI = u; },
    storageKey: "ew_ws_bho_voice",
    testText: "प्रणाम!",
    defaultSelect: null,
  },
  {
    id: "ceb",
    flagCode: "ph",
    titleKey: "settings.cebVoicesTitle",
    noTitleKey: "settings.noCebVoicesTitle",
    descKey: "settings.noCebVoicesDesc",
    voicesFn: _cebVoices,
    getURI: () => _cebURI,
    setURI: (u: string) => { _cebURI = u; },
    storageKey: "ew_ws_ceb_voice",
    testText: "Kumusta!",
    defaultSelect: null,
  },
  {
    id: "rm",
    flagCode: "ch",
    titleKey: "settings.rmVoicesTitle",
    noTitleKey: "settings.noRmVoicesTitle",
    descKey: "settings.noRmVoicesDesc",
    voicesFn: _rmVoices,
    getURI: () => _rmURI,
    setURI: (u: string) => { _rmURI = u; },
    storageKey: "ew_ws_rm_voice",
    testText: "Allegra!",
    defaultSelect: null,
  },
  {
    id: "ty",
    flagCode: "pf",
    titleKey: "settings.tyVoicesTitle",
    noTitleKey: "settings.noTyVoicesTitle",
    descKey: "settings.noTyVoicesDesc",
    voicesFn: _tyVoices,
    getURI: () => _tyURI,
    setURI: (u: string) => { _tyURI = u; },
    storageKey: "ew_ws_ty_voice",
    testText: "Ia ora na!",
    defaultSelect: null,
  },
  {
    id: "ch",
    flagCode: "gu",
    titleKey: "settings.chVoicesTitle",
    noTitleKey: "settings.noChVoicesTitle",
    descKey: "settings.noChVoicesDesc",
    voicesFn: _chVoices,
    getURI: () => _chURI,
    setURI: (u: string) => { _chURI = u; },
    storageKey: "ew_ws_ch_voice",
    testText: "Håfa adai!",
    defaultSelect: null,
  },
  {
    id: "mh",
    flagCode: "mh",
    titleKey: "settings.mhVoicesTitle",
    noTitleKey: "settings.noMhVoicesTitle",
    descKey: "settings.noMhVoicesDesc",
    voicesFn: _mhVoices,
    getURI: () => _mhURI,
    setURI: (u: string) => { _mhURI = u; },
    storageKey: "ew_ws_mh_voice",
    testText: "Yokwe!",
    defaultSelect: null,
  },
  {
    id: "pau",
    flagCode: "pw",
    titleKey: "settings.pauVoicesTitle",
    noTitleKey: "settings.noPauVoicesTitle",
    descKey: "settings.noPauVoicesDesc",
    voicesFn: _pauVoices,
    getURI: () => _pauURI,
    setURI: (u: string) => { _pauURI = u; },
    storageKey: "ew_ws_pau_voice",
    testText: "Alii!",
    defaultSelect: null,
  },
  {
    id: "nah",
    flagCode: "mx",
    titleKey: "settings.nahVoicesTitle",
    noTitleKey: "settings.noNahVoicesTitle",
    descKey: "settings.noNahVoicesDesc",
    voicesFn: _nahVoices,
    getURI: () => _nahURI,
    setURI: (u: string) => { _nahURI = u; },
    storageKey: "ew_ws_nah_voice",
    testText: "Niltze!",
    defaultSelect: null,
  },
  {
    id: "nv",
    flagCode: "us",
    titleKey: "settings.nvVoicesTitle",
    noTitleKey: "settings.noNvVoicesTitle",
    descKey: "settings.noNvVoicesDesc",
    voicesFn: _nvVoices,
    getURI: () => _nvURI,
    setURI: (u: string) => { _nvURI = u; },
    storageKey: "ew_ws_nv_voice",
    testText: "Yá'át'ééh!",
    defaultSelect: null,
  },
  {
    id: "tlh",
    flagCode: "tlh",
    titleKey: "settings.tlhVoicesTitle",
    noTitleKey: "settings.noTlhVoicesTitle",
    descKey: "settings.noTlhVoicesDesc",
    voicesFn: _tlhVoices,
    getURI: () => _tlhURI,
    setURI: (u: string) => { _tlhURI = u; },
    storageKey: "ew_ws_tlh_voice",
    testText: "nuqneH!",
    defaultSelect: null,
  },
  {
    id: "val",
    flagCode: "val",
    titleKey: "settings.valVoicesTitle",
    noTitleKey: "settings.noValVoicesTitle",
    descKey: "settings.noValVoicesDesc",
    voicesFn: _valVoices,
    getURI: () => _valURI,
    setURI: (u: string) => { _valURI = u; },
    storageKey: "ew_ws_val_voice",
    testText: "Rytsas!",
    defaultSelect: null,
  },
  {
    id: "dth",
    flagCode: "dth",
    titleKey: "settings.dthVoicesTitle",
    noTitleKey: "settings.noDthVoicesTitle",
    descKey: "settings.noDthVoicesDesc",
    voicesFn: _dthVoices,
    getURI: () => _dthURI,
    setURI: (u: string) => { _dthURI = u; },
    storageKey: "ew_ws_dth_voice",
    testText: "M'athchomaroon!",
    defaultSelect: null,
  },
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
      className={'voice-card' + (active ? ' voice-card-active' : '')}
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
      <details className="voice-section" style={{ width: '100%', margin: '6px 0' }}>
        <summary
          style={{
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
        </summary>
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
      </details>
    );
  }

  const activeURI = section.getURI();
  const activeVoice = voices.find((v) => v.voiceURI === activeURI);
  return (
    <details className="voice-section" style={{ width: '100%', margin: '6px 0' }}>
      <summary
        style={{
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
      </summary>
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
    </details>
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
      {sorted.map((section) => (
        <VoiceSectionView key={section.id} section={section} onSelect={onVoiceCardSelect} />
      ))}
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
      if (!_ukVoices().length) {
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
