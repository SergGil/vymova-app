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
2. `render-game-bar.ts` (133) — стрік/XP/рівень бар, поділено на під-кроки:
   - [x] `game-bar-level.tsx` — блок 3 (бейдж рівня + прогрес XP, `#level-box`)
   - [ ] блоки 1-2 (стрік/комбо + ціль дня) — лишаються в `render-game-bar.ts`,
     перенесення відкладено через ручні мутації DOM з `combo.ts`
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
28. `app.ts` `render()` → головний `<Card />` компонент. Найризикованіший
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
    - 28d. `#illus` (зображення) — ймовірно лишається імперативним
      (складне кешування через IndexedDB/мережу), документується окремо.
    - 28e. Кнопки дій (`actions-bar`, know/dontknow, quick-quiz,
      `#cidx`/`#cknown`/`#pbar`, `.is-known`) — обробники з `card-actions.ts`
      переїжджають у JSX `onClick`.
    - 28f. Прибирання решток `render()`/`card-actions.ts`, фінальні
      `window.*`-експорти.

## Фаза 5 — Дуель (1862 рядків, найскладніше)
Realtime Firebase-синхронізація, багато режимів дуелі, асинхронні челенджі,
турніри. Робимо останньою і ділимо на під-кроки:

29. Лобі/налаштування дуелі (вибір режиму, коду кімнати) → компонент
30. Історія дуелей + пагінація (уже має локальний `_histPage` — легко переноситься)
31. Лідерборд (`_renderLeaderboard`)
32. Сам ігровий екран дуелі (питання/відповіді/таймер)
33. Спостерігач, асинхронні челенджі, турнірна сітка

## Фаза 6 — Прибирання легасі
34. Перенести `flashcard_trainer_starwars.html` shell у єдиний React-рут
    (`createRoot` на `#app` замість багатьох точок монтування)
35. Видалити DOM-хелпери (`$e`, ручні `querySelector`/`addEventListener`),
    які стали непотрібними
36. Прибрати `window.*` глобали, що більше нічим не використовуються

---
**Правило**: жодна фаза не починається, поки попередній крок не пройшов
`npx tsc --noEmit` + `npx vitest run` (507 тестів) і не запушений у `main`.
