/**
 * English Words App — config.js
 * Усі налаштовувані константи в одному місці.
 * Змінюй тут, не шукай по 6000 рядків коду.
 */
export const APP_CONFIG = {

  // ── Розміри сесій ──────────────────────────────
  QUIZ_SIZE:        10,   // питань за Quiz сесію
  WRITE_SIZE:       10,   // питань за Write сесію
  LISTEN_SIZE:      10,   // питань за Listening сесію
  FIB_SIZE:         10,   // речень за Fill-in-blank сесію
  LESSON_WORDS:      5,   // слів за Щоденний урок
  PAIRS_COUNT:       6,   // пар у Match Pairs
  CATPAIRS_COUNT:    6,   // пар у Category Pairs
  NEW_PER_SRS:      10,   // нових слів за одну SRS сесію

  // ── SM-2 SRS ───────────────────────────────────
  SM2_MIN_EF:      1.3,   // мінімальний Ease Factor
  SM2_DEFAULT_EF:  2.5,   // початковий Ease Factor

  // ── Геймфікація ────────────────────────────────
  DEFAULT_DAILY_GOAL: 20, // денна ціль по замовчуванню
  COMBO_LEVEL_1:       5, // комбо для ×2
  COMBO_LEVEL_2:      10, // комбо для ×3

  // ── Продуктивність ─────────────────────────────
  PREFETCH_AHEAD:      4, // карток для predictive prefetch
  SEARCH_DEBOUNCE:   180, // мс debounce для пошуку
  AC_DEBOUNCE:       120, // мс debounce для autocomplete
  IMG_CACHE_LIMIT:   800, // максимум URL у localStorage image cache

  // ── Зображення ─────────────────────────────────
  PIXABAY_PARAMS: '&image_type=photo&per_page=3&safesearch=true&lang=en&min_width=100&min_height=100',
  WIKI_RESULTS:    5,     // кількість пошукових результатів Wikipedia

  // ── Фільтри ────────────────────────────────────
  STALE_PRESETS: [7, 30], // опції "не бачені N днів"
  WORD_GROUPS:   500,     // слів у кожному числовому блоці (1-500, 501-1000...)

  // ── Функціональні прапорці ─────────────────────
  FEATURES: {
    autocomplete:   true,  // підказки в Write режимі
    predictiveFetch:true,  // завантаження зображень наперед
    haptic:         true,  // вібрація на мобільному
    offlinePlaceholder: true, // SVG-заглушка коли немає мережі
    comboSystem:    true,  // комбо-множник XP
    wordOfDay:      true,  // блок "Слово дня"
  },
};
