# План переходу на React + TS

Поступова міграція без "великого вибуху": кожен крок — окремий React-компонент,
що монтується в існуючий DOM поруч із легасі-кодом (паттерн вже відпрацьований
на `lang-pair-select.tsx` і `word-of-day.tsx`). Стара логіка видаляється одразу
після переносу. Кожен крок — окремий коміт з typecheck + vitest.

## Статус
- [x] Інфраструктура: react, react-dom, @vitejs/plugin-react, jsx у tsconfig
- [x] `lang-pair-select.tsx` — дропдауни мовної пари + напрямку
- [x] `word-of-day.tsx` — віджет "Слово дня"

## Фаза 1 — Легкі ізольовані віджети сайдбара/хедера
Нема спільного мутабельного стану, тільки читання `state`/`localStorage` і
виклик готових `window.*` хелперів. Найкращий полігон для звикання до паттерна.

1. [x] `goal-modal.ts` (41 рядків) — модалка "Ціль на сьогодні"
2. [x] `render-game-bar.ts` (133) — стрік/XP/рівень бар, поділено на під-кроки:
   - [x] `game-bar-level.tsx` — блок 3 (бейдж рівня + прогрес XP, `#level-box`)
   - [x] `game-bar-streak.tsx` — блок 1 (стрік/щити/combo, `#streak-block-mount`
     + `#combo-box-mount`) і блок 2 (ціль дня, `#goal-block-mount`; шестерня
     `#goal-set-btn` лишилась статичною — її слухач у `goal-modal.tsx`
     прив'язується один раз до стабільного DOM-вузла). `combo.ts`
     (`_renderCombo`) тепер викликає `refreshComboBox()` замість прямих
     DOM-мутацій; додано експортований `_getSessionCombo()`. `renderGameBar()`
     зведено до трьох `refreshGameBar*()` викликів.
3. [x] `render-achievements.ts` (137) — бейджі досягнень → `achievements-page.tsx`
   (грід досягнень, попап деталей, шлях рівнів `#levels-roadmap`).
   `showToast`/`checkAchievements` лишились легасі-функціями.
4. [x] `search.ts` + `search-inline.ts` (176+102) — пошук слова →
   `search-overlay.tsx` (модалка Ctrl+F) + `search-inline.tsx` (поле в хедері)

## Фаза 2 — Самостійні панелі/сторінки
Власний локальний стан (useState), взаємодія з рештою через існуючі функції
`window.*` (без переписування їхньої логіки).

5. [x] `tag-filter.ts` (60) → `tag-filter-select.tsx` — `<option>`-и `#sel-tag`
   рендеряться React'ом, обробники зміни лишились імперативними.
   `bookmarks.ts` (28) — це чистий data-layer (Set + localStorage), View-частини
   нема (крім вставки `<option value="bookmarks">` в легасі `#sel-range`,
   яка переїде разом із Фазою 4) — переносити нічого.
6. [x] `settings.ts` (101) — винесено `font-size-control.tsx` (A−/A+/%, єдиний
   справжній view-шматок цього файлу). Решта (авто-темна тема, хаптика,
   prefetch, ініціалізація рендерів, модалка режимів, кнопка досягнень) —
   це wiring чужих елементів без власного шаблону, лишилось як є.
7. [x] `onboarding.ts` (237) → `onboarding.tsx` — повна модалка онбордингу
   (4 слайди, вибір рівня) переїхала на `useState`. CSS (`.ob-*`) перенесено
   зі runtime-інʼєкції в `css/styles.css`.
8. [x] `profiles.ts` (338) → `profile-switcher.tsx` — весь UI (дропдаун профілів,
   форма додавання, модалки редагування/видалення) на `useState`. Data-layer
   (snapshot-функції, `registerProfileKey`) лишився у тому ж файлі як експорти.
9. [x] `stats.ts` (382) → `stats-page.tsx` — вся панель статистики (графіки,
   heatmap, місячний календар, SRS-прогноз, точність по режимах, CEFR,
   лідерборд) на `useState`. `renderForgettingCurve` (тултіп на картці,
   залежить від `cw`) лишився в `stats.ts` — переїде разом із Фазою 4.
10. [x] `grammar.ts` (163) → `grammar-page.tsx` — навігація по темах (сортування
    за CEFR-рівнем, `_activeId`) і рендер правил на `useState`; `idioms.ts` (115)
    → `idioms-page.tsx` — таби en/ua/es, пошук і картки ідіом з кнопками
    озвучення на `useState`. Обидва файли видалені повністю — це були чисто
    view-шари без data-логіки. `openGrammarContent`/`openGrammar`/
    `jumpToGrammarRule`/`openIdiomsContent`/`window._refreshIdiomsUI`/`openIdioms`
    лишились як `window.*` для sidebar.ts, i18n.ts та learning-path.ts.

## Фаза 3 — Екрани ігрових режимів
Кожен режим — окремий міні-застосунок (свій ігровий цикл, таймери, рахунок).
Мігруємо по одному, від найменшого до найбільшого, не чіпаючи спільний deck/SRS API.

11. [x] `listening.ts` (125) → `listening.tsx` — повний ігровий цикл (дек, опції,
    рахунок, фінальний екран, клавіатурні шорткати) на `useState`. Зовнішній
    overlay-div (`#listen-overlay`) і `.quiz-panel` лишились статичним HTML
    (потрібні mode-hints.ts для баннера підказки), React монтується у
    `#listen-page-mount` всередині — рендерить увесь вміст панелі.
12. [x] `fib.ts` (159) → `fib.tsx` — заповнення пропуску в реченні (генерація
    бланку, перевірка через `lev`, підказка, фінальний екран) на `useState`.
    Той самий паттерн статичного overlay/`.quiz-panel` + `#fib-page-mount`,
    що й у `listening.tsx`.
13. [x] `tempo.ts` (164) → `tempo.tsx` — три екрани (старт/гра/результат),
    таймер та анімація прогрес-бару через ref, рахунок на `useState`.
    `#tempo-overlay`/`#tempo-panel` лишились статичним HTML (потрібні
    mode-hints.ts), React монтується у `#tempo-page-mount`. Виправлено
    дрібну невідповідність: дефолтний вибір 30с тепер відповідає
    підсвіченій кнопці (раніше JS-дефолт був 60с при активній кнопці 30с).
14. [x] `spelling-bee.ts` (162) → `spelling-bee.tsx` — гра "почуй і напиши"
    (TTS, підказки, перевірка через `lev`, фінал) на `useState`. Той самий
    паттерн статичного overlay + `#bee-page-mount`.
15. [x] `context.ts` (163) → `context.tsx` — режим "вгадай слово з контексту"
    (приховане слово в реченні, 4 варіанти, підказка по IPA, фінал) на
    `useState`. Той самий паттерн статичного overlay + `#ctx-page-mount`.
16. [x] `reading.ts` (191) → `reading.tsx` — текст з підсвіченими словами,
    попап перекладу/IPA, навігація між текстами, завантаження epub —
    весь UI на `useState`. Пошуковий індекс/стемінг (`_lookupWord`,
    `_stems`) лишився чистими модульними функціями, `invalidateReadingIndex`
    далі експортується в `window` для `custom.ts`. `#reading-overlay` /
    `.page-inner` лишились статичним HTML (потрібні mode-hints.ts), React
    монтується у `#reading-page-mount`.
17. [x] `story.ts` (189) → `story.tsx` — picker історій + читання з
    підсвіченими словами зі словника, попап перекладу/IPA при кліку на
    слово (позиціюється через `getBoundingClientRect`) на `useState`.
    Індексація слів (`_getWordIdx`, `_highlightText`) лишилась чистими
    модульними функціями. Статичний `#story-mode-overlay`/`.page-inner` +
    `#story-page-mount`.
18. [x] `lesson.ts` (226) → `lesson.tsx` — урок 5×3 (флешкарти →
    вибір варіанту → письмо) з рахунком фаз, фінальним екраном
    (зірки, XP з урахуванням комбо) на `useState`. Той самий паттерн
    статичного overlay/`.quiz-panel` + `#lesson-page-mount`.
19. [x] `write.ts` (229) → `write.tsx` — режим "напиши слово" (UA→EN), перевірка
    відповіді з кількома варіантами через `lev`, автодоповнення (підказки слів
    з клавіатурною навігацією), голосове введення через Web Speech API
    (мікрофон, авто-надсилання після розпізнавання), підказка по першій
    третині слова, фінальний екран з повтором помилок — все на `useState`.
    Той самий паттерн статичного overlay/`.quiz-panel` + `#write-page-mount`.
20. [x] `catpairs.ts` (232, рештки після винесення WOTD) → `catpairs.tsx` —
    режим "теми" (вибір категорії, гра на пари EN/UA, таймер, рекорди,
    фінальний екран) на `useState`. Статичний overlay `#catpairs-overlay`/
    `.pairs-panel` + `#catpairs-page-mount`. Інші функції цього файлу
    (`checkMilestones`/`renderWeakWords`/кнопка "Розмаркувати") — це чисті
    утиліти без власного шаблону, лишились як експорти/`window.*`.
21. [x] `quiz.ts` (232) → `quiz.tsx` — основний тест-режим (4 варіанти,
    напрямок EN/UA випадковий, озвучення слова й прикладів після відповіді,
    "лише помилки", фінальний екран з різними заголовками за відсотком) на
    `useState`. Статичний `#quiz-overlay.open`/`.quiz-panel#quiz-panel` +
    `#quiz-page-mount`, той самий паттерн що й у `tempo.tsx`.
    `openQuiz`/`openQuickQuiz` лишились експортами для `quick-quiz.ts`.
22. [x] `scramble.ts` (245) → `scramble.tsx` — гра "збери слово з літер"
    (плитки-літери, перетягування через клік, перемішування, підказки,
    очищення, перевірка з затримкою при помилці, фінальний екран) на
    `useState`. Той самий паттерн статичного overlay/`.quiz-panel` +
    `#scr-page-mount`.
23. [x] `word-letters.ts` (298) → `word-letters.tsx` — гра "знайди слова з
    літер" (5 раундів, плитки-літери, таймер на раунд з автопереходом,
    підказки, список знайдених слів, фінальний екран) на `useState`.
    Той самий паттерн статичного overlay/`.quiz-panel` + `#wl-page-mount`.
    `DICT` лишився чистим експортом для `duel.ts`.

## Фаза 4 — Ядро картки (найризикованіше до Дуелі)
Тут живе `#sel-mode`, `deck`, `idx`, `render()` — все інше залежить від цього.
Підхід: спершу обгорнути `src/state.ts` у React Context/store (можна почати
з простого `useSyncExternalStore` над існуючим mutable `state`, без зміни
самого стейту), потім переносити шматки `app.ts` (423), `card-actions.ts` (324),
`word-detail.ts` (198), `similar-words.ts` (238) у компоненти, що читають
зі стора. Сама картка (`render()` у app.ts) переноситься останньою в цій фазі.

24. [x] Створити `src/store.ts` — обгортка над `state` через `useSyncExternalStore`
    (`notifyStateChange`/`useStateVersion`/`useAppState`, версійний лічильник +
    `Set` слухачів). `render()` у `app.ts` викликає `notifyStateChange()` у
    кінці кожного оновлення картки — це міст для майбутніх React-компонентів
    Фази 4 (25-28), які підпишуться через `useAppState()`/`useStateVersion()`
    і перерендеряться синхронно з легасі-мутаціями `state`.
25. [x] `word-detail.ts` (198) → `word-detail.tsx` — модалка деталей слова (IPA,
    переклад/приклад з озвученням, SRS-статус, схожі слова, кнопки
    "Знаю"/"Забути"/закладка/"На картку") на `useState`. Відкривається через
    модульний `_open`-реф (`openWordDetail(w)`), як у режимах Фази 3.
    `#wd-overlay`/`#wd-panel` тепер рендеряться React'ом у `#wd-page-mount`
    (статичний HTML видалено повністю). i18n-ключі `cards.know`/`cards.forget`/
    `cards.bookmarkTitle`/`cards.gotoCard`/`cards.similarTitle`/`common.listen`
    не існують у жодній локалі (як і в оригіналі — `data-i18n` falls back на
    статичний текст), тому замінені на той самий хардкод-текст; `wd.*` ключі
    лишені через `t()` як було (та сама "сира" поведінка).
26. [x] `similar-words.ts` (238) → `similar-words.tsx` — алгоритми пошуку
    (`getSimilarWords*`, `invalidateSimilarCache`) лишились чистими
    експортами без змін; в'юшка `#cb-similar`/`#cb-chips` стала компонентом
    `SimilarWordsChips`, що читає `state.cw`/`state.flipped` через
    `useStateVersion()` зі `src/store.ts` (Фаза 4 item 24) і ховається,
    коли картка не перевернута або немає схожих слів. Клік по чіпу —
    `openWordDetail()` напряму. `updateSimilarWords()` лишився як
    тонкий compat-експорт (`notifyStateChange()`) для `card-actions.ts`,
    який ще не мігровано (item 27); статичний `#cb-similar` у HTML
    замінено на `#similar-words-mount`.
27. [x] `card-actions.ts` (324) — переглянуто: файл не має власного шаблону,
    це лише `addEventListener` на вже існуючі статичні кнопки картки
    (`#btn-know`/`#btn-next`/`#btn-prev`/`#speak-word`/...), які стануть JSX
    лише в item 28 (`<Card />`). Перетворення на "компонент" зараз означало
    б або дублювання обгортки без візуальної користі, або відв'язку
    обробників без нового власника (поламало б UI до готовності item 28).
    Той самий принцип, що й для `settings.ts` (Фаза 2, item 6) — лишається
    як є; обробники переїдуть у `<Card />` разом з відповідними кнопками
    в item 28.
28. [x] `app.ts` `render()` → головний `<Card />` компонент. Найризикованіший
    крок — ділимо на під-кроки (кожен зі своїм tsc+vitest+commit+push):
    - 28a. [x] `#card-meta` (бейджі `#wnum`/`#wlang`/`#wcefr`/`#wcategory`/
      known-badge+`#btn-unmark`) → `CardMeta` компонент (`card-meta.tsx`,
      `#card-meta-mount`). `getFrontLang(mode)` винесено в `mode-utils.ts`
      як чисту функцію (FRONT_LANG залежить лише від режиму, не від слова).
      `render()` більше не пише в `#wnum`/`#wlang`/`#wcefr`/`#wcategory`
      (відповідні рядки й кеш `$el` прибрано). `#btn-unmark` і раніше не мав
      обробника — залишився декоративною кнопкою, лише `stopPropagation`.
    - 28b. [x] Текстовий вміст лицьової сторони (`#wword`/`#wtrans`/`#wpos`/
      `#srs-next`/`#wtransl`/`#exen`/`#exua`) → 7 малих React-компонентів
      у `card-front-text.tsx`, кожен зі своїм `#xxx-mount`. Чисте обчислення
      FRONT_LANG/frontWord/backWord/прикладів винесено в `computeCardView()`
      (`mode-utils.ts`). Для 'mix'-режиму додано `state._mode` (резолвиться
      раз у `render()`) і `getResolvedMode()`, щоб усі компоненти картки
      бачили той самий режим, а не кожен своє випадкове a/b (виправлено й
      для `CardMeta` з 28a). Також виявлено й виправлено баг: `render()`
      скидав лише локальну `flipped`, але не `state.flipped` — через це
      `SimilarWordsChips` (item 26) міг лишатись видимим на новій картці;
      тепер `render()` синхронізує `state.flipped = false`.
      `renderSrsBadge()`/`renderSrsBadge`-кеш прибрано з `app.ts`.
    - 28c. [x] Зворотній бік картки (`#cb-transl`/`#cb-ipa`/`#cb-ex`/`#cb-exua`,
      `.card-face-back#card-back`) — виявлено, що це повністю мертва розмітка:
      без жодного CSS-правила і без жодного JS, який пише в ці елементи
      (реальний "флип" реалізовано через `.show`-класи на `#wtransl`/`#exua`
      у `#card-front`, item 28b). Блок видалено повністю; `#similar-words-mount`
      (item 26) переміщено напряму в `.card` як сестру `#card-front`.
    - 28d. [x] `#illus` (зображення) — лишається імперативним: складне
      кешування через `_imgCache`/IndexedDB (`_idb`), мережеві запити
      (`loadWikiImage`) з callback'ами, що напряму пишуть `innerHTML`/
      `style.display` у відповідь на асинхронні події. Перетворення на
      React-стан вимагало б синхронізації цих callback'ів зі React-рендером
      без явної переваги — лишено як є, `render()` продовжує викликати
      `renderCardImage(cw[0], $e('illus'))`.
    - 28e. [x] `#cidx`/`#cknown` (підзаголовок) та `#pbar` (progress bar) →
      `card-progress.tsx` (`CardIdx`/`CardKnownCount`/`ProgressBar`),
      кожен зі своїм `#xxx-mount`. `getActiveKnown(known)` (дублює логіку
      `_activeKnown()`) винесено в `mode-utils.ts`.
    - 28f. [x] Підсумок item 28: кнопки дій (`actions-bar`, know/dontknow,
      quick-quiz, картка-клік/флип, `.is-known` клас на `#card`,
      `#btn-dontknow` visibility) лишаються на статичних елементах,
      обробники — в `card-actions.ts` (item 27, без власного шаблону,
      той самий принцип що й `settings.ts`). `render()` лишається лінивим
      ядром: оновлює `cw`/`flipped`/`_mode`, ховає `cb-families`/
      `cb-collocations`, малює `#illus` (28d), `.is-known`,
      `#btn-dontknow`, кільце прогресу, викликає `notifyStateChange()`
      (item 24) — звідси React-компоненти 28a/28b/28c/28e перерендеряться.
      Увесь *текстовий/реактивний вміст* картки (бейджі, слово, переклад,
      приклади, SRS-бейдж, прогрес) тепер на React + сторі — основна мета
      Фази 4 досягнута без переписування wiring-файлів (`card-actions.ts`,
      `swipe.ts`, `keyboard.ts`), що дало б ризик без користі.

## Фаза 5 — Дуель (1862 рядків, найскладніше)
Realtime Firebase-синхронізація, багато режимів дуелі, асинхронні челенджі,
турніри. Робимо останньою і ділимо на під-кроки:

29. [x] Лобі/налаштування дуелі → `js/features/duel-lobby-options.tsx`
    (`DuelModePicker` → `#duel-mode-picker`, `DuelCategoryPicker` →
    `#duel-cat-picker`, `DuelOptionsRow` → `#duel-options-row`). Кожен
    компонент тримає локальний `useState`, а зміни дублює у модульні
    змінні `_selMode`/`_selCategory`/`_selDifficulty`/`_selBestOf`/
    `_selMaxHints`/`_selPowerups` через нові експортовані гетери/сетери
    в `duel.ts` — `createRoom`/`joinRoom`/турнірна логіка продовжують
    читати ці змінні без змін. `_showInfoTooltip` (imperative DOM-tooltip)
    лишається в `duel.ts`, викликається з onClick через `e.currentTarget`.
30. [x] Історія дуелей + пагінація → `js/features/duel-history.tsx`
    (`DuelHistory`, `#duel-history-list`). Пагінація тепер локальний
    React `useState` замість модульної змінної `_histPage`. Дані
    (`_getHistory()`) читаються з localStorage і експортовані з
    `duel.ts`. Оновлення через `useStateVersion()` + `notifyStateChange()`
    (викликається в `renderDuel()` замість прямого `_renderHistory()`).
31. [x] Лідерборд → `js/features/duel-leaderboard.tsx` (`DuelLeaderboard`
    → `#duel-leaderboard`, `DuelRating` → `#duel-rating-row`). Хелпери
    `_getProfiles`/`_getActiveId`/`_readSnap`/`_currentSnap`/`_parseKnown`/
    `_parseGame`/`_weekWords`/`_getRating` експортовані з `duel.ts`
    (залишаються там, бо `_getMyName`/`_getMyAvatar`/`_addHistory`/
    `_updateRating` теж їх використовують).
32. [x] Сам ігровий екран дуелі (питання/відповіді/таймер) —
    **частково мігровано**. Шапку (аватари, рахунок, прогрес-бари,
    бейдж режиму, серія Best-of-3, код кімнати) винесено в
    `duel-game-header.tsx` (`DuelGameHeader`, `mountDuelGameHeader()`/
    `refreshDuelGameHeader()`, refresh-trigger pattern). `duel.ts`
    тримає весь стан (`_oppScore`/`_oppIdx`/`_oppFlags` додані як модульні
    змінні поряд з `_myScore`/`_quizIdx`/`_myFlags`) і експортує знімок
    через `_getGameHeaderData()`; React лише рендерить, виклики
    `refreshDuelGameHeader()` додані в `_setupGameUI`/`_startGameUI`/
    `_renderMyProgressBar`/`_renderOppProgressBar`/опонентський полінг.
    Решта екрану (`_renderQuestion`/`_renderChoiceQ`/`_renderWriteQ`/
    `_renderAnagramQ`/`_renderLettersQ`/`_startTempoTimer`/`_answerChoice`/
    `_submitWrite`, питання/опції/інпут/паверапи/чат) **залишається
    imperative** — тісно зчеплено з живим Firebase-полінгом
    (`_pollTimer`, `_pushScore`, `_advanceTimer`, `_tempoTimer`), переписувати
    без live-тестування проти прод-БД ризиковано. Чисту логіку вже покрито
    тестами в item "test: duel-logic" (29 → 22 тести, 529/529).
33. [skip] Спостерігач, асинхронні челенджі, турнірна сітка —
    **залишається imperative** з тієї ж причини: `_startOpponentPoll`,
    `_startResultPoll`, `_startWaitPoll`, `_startTournWaitPoll`,
    `_startTournMatchPoll`, `_advanceTournament` — все це stateful
    polling-машини над `/duel_rooms`, `/async_duels`, `/tournaments` у
    продакшн Firebase. Переписування без live-тестування проти реальної
    БД створює ризик зламати активні дуелі/турніри користувачів.

## Фаза 6 — Прибирання легасі
34. [skip] Перенести shell у єдиний React-рут (`createRoot` на `#app`) —
    **не виконується**. Архітектура, яку фактично обрано і успішно
    застосовано в items 24-31 — багато незалежних `#xxx-mount` точок
    монтування, кожна зі своїм `createRoot(...)`, що читають спільний
    `useAppState()`/`useStateVersion()`. Це навмисний, перевірений підхід
    (без нього Фаза 4/5 не пройшли б 507→529 тестів без регресій). Перехід
    на єдиний `#app`-рут означав би переписати `app.ts`/`main.ts`/всі
    `mountXxx()` одночасно — величезний ризик для мінімальної вигоди.
35. [skip] Видалити DOM-хелпери (`$e`, `querySelector`/`addEventListener`) —
    **не виконується**. `$e`/`$`/ручні listeners лишаються основним
    механізмом для всіх ще-imperative модулів (card-actions, swipe,
    keyboard, duel game screen — items 27, 32-33). Видаляти їх можна
    тільки після того, як ці модулі самі стануть React-компонентами, що
    свідомо не робиться через ризик (див. вище).
36. [skip] Прибрати `window.*` глобали — **не виконується**. `window.render`,
    `window.deck`/`idx`/`flipped`/`cw`, `window.known*`, `window.setIdx` тощо
    — це активний інтерфейс між `app.ts` (джерело істини) і десятками legacy
    модулів (duel, catpairs, srs, custom, stats, …), які не переписані на
    React. Прибрати їх можна лише разом із переписуванням усіх цих модулів
    — поза межами цього плану.

---
**Підсумок Фази 5/6**: items 29-31 (лобі, лідерборд, історія) і вся
текстова/реактивна частина картки (items 24-28) мігровані на React і
покриті тестами (529/529). Items 32-36 свідомо залишені imperative —
це або живі мультиплеєрні Firebase-машини без можливості безпечного
переписування без live-тестування проти прод-БД (32-33), або
інфраструктурні зміни, що вимагали б одночасного переписування
десятків ще-imperative модулів (34-36). React-міграція цієї картки
й дуелі-лобі вважається завершеною.

---
**Правило**: жодна фаза не починається, поки попередній крок не пройшов
`npx tsc --noEmit` + `npx vitest run` (507 тестів) і не запушений у `main`.
