# Imperative Core Migration Plan (items 35+36 з REACT_MIGRATION_PLAN.md)

## Контекст

`REACT_MIGRATION_PLAN.md` завершив React-міграцію UI-шару (items 1-34,
529/529 тестів). Залишились два пов'язані пункти, свідомо винесені за межі
того плану через масштаб:

- **Item 35** — решта `$e`/`querySelector`/`addEventListener` boilerplate
  поза React-компонентами.
- **Item 36** — `window.*` глобали як інтерфейс між `js/app.ts` (джерело
  істини стану: `deck`, `idx`, `flipped`, `cw`, `known`, `srsData`, …) і
  десятками ще-imperative модулів.

Обидва пункти не можна закрити окремо: відкриття/закриття оверлеїв (35) і
читання/запис стану (36) переплетені в одних і тих самих файлах. Закриття
вимагає переписування "ядра" — модулів, які або тримають стан, або є
основним циклом взаємодії користувача (картка, дуель, сайдбар).

## Поточний `window.*`-інтерфейс (з `js/app.ts`, 319 рядків)

`app.ts` експортує в `window`: `TODAY`, `W`, `known`, `srsData`, `render`,
`stopAuto`/`startAuto`/`isAutoRunning`, `getGameData`/`saveGameData`,
`onWordLearned`, `ACHIEVEMENTS`, `openWordDetail`, `setIdx`/`setDeck`/
`setBaseWords`/`setFlipped`/`setCw`/`setKnown`/`setSrsData`, `_wordIdx`,
`_customWords`, `invalidateSimilarCache`, `knownEs`/`knownFr`, `animCard`,
`updateRing`, `playSound`, `recordModeComplete`, `recordCustomWordAdded`.

Читачів цього інтерфейсу (`window.xxx as (...)`) — **31 файл** у `js/`
(features + modes), плюс саму `duel.ts` (1763 рядки) і `sidebar.ts`
(193 рядки), які додатково мають власні `window.*`-точки входу.

## Фази (від найменш ризикованих до найбільших)

### Фаза 7.1 — i18n / learning-path refresh-checks
- `js/features/i18n.ts` (187 рядків) і `js/features/learning-path.ts`
  (307 рядків): мають `classList.contains('open')`-перевірки та
  `window.*`-рефреш виклики при зміні мови/прогресу.
- Мета: перевести on/off стан відкритих сторінок на `useStateVersion()`/
  `notifyStateChange()` (вже є механізм з item 34), де це можливо без
  переписування `app.ts`.
- Найменший і найбезпечніший крок — гарний кандидат для старту.
- **[x] Перший прохід виконано**: `renderGameBar`/`refreshGameBarLevel`
  (== `notifyStateChange()`-обгортки з item 34) переведені з `window.*` на
  прямі імпорти в листових файлах, де циклічного імпорту з `i18n.ts` немає:
  `card-actions.ts`, `catpairs.tsx`, `daily-challenge.ts`, `goal-modal.tsx`,
  `progress-io.ts`, `settings.ts`. `sidebar.ts` тепер імпортує
  `refreshAchievementsPage` напряму (прибрано дублюючий
  `window.renderAchievements`/`window.renderLevelsRoadmap` подвійний
  виклик → один прямий). 529/529 тестів, tsc чистий.
- **[x] Другий прохід — `applyI18n()` в `i18n.ts`**: ~10 окремих
  `window._refreshXxx`/`window.renderXxx` викликів (`_refreshLangPairSelect`,
  `_refreshWordOfDay`, `_refreshSearchInline`, `_refreshSearchOverlay`,
  `_refreshTagOptions`, `renderLevelBadge`, `renderGameBar`,
  `renderLevelsRoadmap`) виявились усі тонкими `notifyStateChange()`-
  обгортками (item 34). `src/store.ts` не має циклічних залежностей з
  `i18n.ts`, тож замінено на один прямий `import { notifyStateChange }
  from '../../src/store.ts'` + один викоик. Видалено стали
  `window.renderGameBar`/`renderLevelBadge`/`renderLevelProgress`/
  `renderLevelsRoadmap` з `render-game-bar.ts` і
  `window._refreshTagOptions`/`refreshTagFilterSelect` з
  `tag-filter-select.tsx` (нічого більше їх не читало). Залишились
  `window._refreshRangeOptions` (deck-filter.ts, справжній DOM-рендер) і
  `window.render`/умовні `classList.contains('open')`-перевірки для
  `renderLearningPath`/`renderDuel`/`openGrammarContent`/`_refreshIdiomsUI`/
  settings-overlay/stats-overlay рефрешів — усі це або імперативний
  DOM-рендер, або `_bumpTick`-локальний стан (item 36 territory). 529/529
  тестів, tsc чистий.

### Фаза 7.2 — daily-challenge.ts + sidebar.ts
- `js/modes/daily-challenge.ts` (122 рядки) і `js/features/sidebar.ts`
  (193 рядки) — відносно невеликі, але `sidebar.ts` керує навігацією
  (`openPage`/`closePage`), яку викликають майже всі React-компоненти
  через `window.openPage`/`window.closePage`. Переписування сайдбару на
  React-роутинг (стан "активна сторінка" в `src/store.ts`) усуває
  найпоширеніший `window.*`-виклик одразу в десятках файлів.
- **[x] Перший прохід — `openPage('duel'|'grammar'|'idioms')`**: 3
  `window.*`-виклики (`renderDuel`, `openGrammarContent`,
  `openIdiomsContent`) замінено на прямі імпорти — жодного циклу немає
  (`duel.ts`/`grammar-page.tsx`/`idioms-page.tsx` не імпортують
  `sidebar.ts`). Видалено мертвий `window.openIdiomsContent` (нічим не
  читався після переходу). `window.openGrammarContent` і `window.renderDuel`
  залишені — потрібні `i18n.ts`/`profile-switcher.tsx`, які імпортують
  `duel.ts`/`grammar-page.tsx` ⇒ цикл з `sidebar.ts` неможливий, але цикл з
  `i18n.ts` (бо `duel.ts`/`grammar-page.tsx` самі імпортують `i18n.ts` для
  `t()`) — лишається.
- **[x] Другий прохід — `state.activePage`**: додано поле `activePage:
  string | null` у `AppState`/`src/state.ts` — єдине джерело істини для
  "яка сторінка відкрита", синхронізоване з `openPage()`/`closePage()` у
  `sidebar.ts` через `notifyStateChange()`. Локальна `_activePage`-змінна
  (write-only дублікат) видалена. Це не змінює існуючу DOM-логіку
  (`classList`/`style.display`/`MODE_OVERLAY_IDS`/localStorage-restore
  залишились як були — їх ризиковано чіпати без браузерного тестування), але
  дає React-компонентам реактивний доступ до поточної сторінки через
  `useStateVersion()` для майбутніх `useEffect`-рефрешів.
- **[x] Третій прохід — `window.closePage` у листових файлах**:
  `word-of-day.tsx` (немає циклу з `sidebar.ts`) і `learning-path.ts` (вже
  імпортував `openPage`, додано `closePage` до того ж імпорту) переведені
  на прямий імпорт.
- **[x] Четвертий прохід — `window.openPage`/`window.closePage` усунено
  повністю**: `duel.ts`, `grammar-page.tsx`, `idioms-page.tsx` та
  `overlay-utils.ts` (`bindOverlayDismiss`) переведені на **динамічний
  імпорт** `import('./sidebar.ts').then(m => m.openPage(...)/closePage())`
  замість `window.*`. Динамічний імпорт вирішує статичний цикл
  (`sidebar.ts` → `duel.ts`/`grammar-page.tsx`/`idioms-page.tsx` з проходу
  1) — модуль `sidebar.ts` довантажується лише в момент кліку, а не при
  ініціалізації цих файлів. Це водночас усуває й проблему DOM-side-effects
  на рівні модуля в `sidebar.ts` (querySelector сайдбару тощо), яка при
  спробі статичного імпорту ламала `duel-logic.test.ts` (немає потрібних
  DOM-елементів у jsdom). `window.openPage =`/`window.closePage =` у
  `sidebar.ts` видалені — `window.*`-інтерфейс для роутингу сторінок
  повністю закритий. 529/529 тестів, tsc чистий.

### Фаза 7.3 — card-actions / swipe / keyboard (ядро картки)
- `js/features/card-actions.ts` (324 рядки), `swipe.ts` (20), `keyboard.ts`
  (26) — основний цикл "показати картку → дія користувача → наступна
  картка". Тісно зчеплені з `app.ts` (`window.setIdx`/`setCw`/`setFlipped`/
  `animCard`/`render`). Переписування вимагає перенесення `deck`/`idx`/
  `flipped`/`cw` зі змінних модуля `app.ts` у `src/state.ts` як єдине
  джерело істини з реактивними підписниками.
- **[x] `keyboard.ts`** — найменша безпечна частина зроблена: відкриття
  оверлею клавіатурних скорочень переведено на `bindOverlayOpenClose`
  (item 35 helper) замість ручного `addEventListener`. `swipe.ts` вже
  ізольований і не використовує `window.*` — без змін.
- **[x] card-actions.ts — читання `cw`/`deck`/`idx`/`flipped`/`TODAY`**:
  `app.ts` вже синхронізує ці значення у `state` на кожній мутації
  (`_setDeck`/`_setIdx`/`_setCw`, `window.flipped`-сеттер, `render()`),
  тож усі ~14 read-сайтів `win.cw`/`win.deck`/`win.idx`/`win.flipped`/
  `win.TODAY` у `card-actions.ts` замінено на прямі читання `state.cw`/
  `state.deck`/`state.idx`/`state.flipped`/`state.TODAY` — без жодної
  зміни поведінки (значення завжди ідентичні). Запис прапорця flip
  (`win.flipped = true`) переведено на існуючий сеттер `win.setFlipped()`
  (вже був у `app.ts`, просто не використовувався). Тип `win` звужено до
  лише setter/action-функцій (`setIdx`/`setDeck`/`setFlipped`/`setSrsData`/
  `render`/`animCard`/`stopAuto`/`startAuto`/`isAutoRunning`/
  `onWordLearned`/`updateRing`/`knownEs`/`knownFr`). Тест
  `card-actions.test.ts` оновлено: мокає `state.cw`/`state.deck`/
  `state.idx`/`state.flipped` замість `win.*`. 529/529 тестів, tsc чистий.
- **Залишок (card-actions.ts) — не зроблено**: записи через `win.setIdx`/
  `win.setDeck`/`win.setFlipped`/`win.setSrsData`/`win.render`/
  `win.animCard`/`win.stopAuto`/`win.startAuto`/`win.isAutoRunning`/
  `win.onWordLearned`/`win.updateRing`/`win.knownEs`/`win.knownFr` —
  справжнє "ядро картки" (мутації `deck`/`idx`/`flipped`/`cw`,
  auto-play timer, рендер-цикл). Перенесення володіння цим станом у
  `src/state.ts` (замість дзеркалювання з `app.ts`) зачіпає одночасно
  `app.ts` і всі читачі/писачі — окремий **великий і ризикований**
  під-проєкт, що вимагає власного детального плану. Не виконувався в межах
  цього проходу.

### Фаза 7.4 — duel.ts (1763 рядки)
- Найбільший файл, Firebase realtime polling + game loop. React-компоненти
  дуелі (items 29-33) вже мігровані й викликають `refreshXxx()` →
  `notifyStateChange()` — сам `duel.ts` залишається imperative
  "контролером". Повне переписування — окремий великий під-проєкт.
- **[x] Прибрано останній `window.*` (`window.renderDuel`)**: видалено
  `window.renderDuel=renderDuel;` (рядок 1650 `duel.ts`, функція
  залишається `export`-нутою). `profile-switcher.tsx` — статичний
  `import { renderDuel } from './duel.ts'` (циклу немає), `i18n.ts` —
  динамічний `import('./duel.ts').then(({ renderDuel }) => renderDuel())`
  (уникнення циклу, бо `duel.ts` сам імпортує `i18n.ts`). 529/529, tsc
  чистий. Повне переписування 43 module-level змінних `duel.ts` у
  `AppState` лишається окремим майбутнім під-проєктом (Фаза 7.4-B).

### Фаза 7.4-B — duel.ts: imperative → `AppState`/React (окремий під-проєкт)

**Постійні Playwright e2e-тести**: замість одноразових `tmp_*.cjs`-скриптів
для браузерних smoke-тестів додано `@playwright/test`
(`playwright.config.ts`, `tests-e2e/`, `npm run test:e2e`). Конфіг сам
піднімає `vite --port 5183` (`webServer`). `tests-e2e/helpers.ts` —
`openApp()` відкриває апку й видаляє onboarding-оверлей. Перший набір —
`tests-e2e/duel-lobby.spec.ts` (3 тести: лобі відкривається без помилок,
вибір режиму/складності зберігається після reopen, перевірка
resume-сесій не кидає помилок на порожньому списку) — покриває
браузерну верифікацію під-фаз 1-2. Для кожної наступної під-фази додавати
тести сюди ж.

Додатково `tests-e2e/duel-options.spec.ts` (4 тести): категорія/best-of/
hints/power-ups зберігаються після reopen лобі, join з порожнім кодом
показує inline-помилку без падіння, кнопка ✕ закриває сторінку дуелі
(`#duel-overlay` втрачає клас `open`).

Розбито на 9 під-фаз за зростанням ризику (lobby selection → resume →
chat → spectator → tournament → question/UI → room/game core → таймери
(не переносяться) → DOM-show/hide екранів). Кожна під-фаза — окремий
коміт із tsc+vitest+браузерним smoke-тестом дуелі.

- **[x] Під-фаза 1 — Lobby selection state**: `_selMode`/`_selCategory`/
  `_selDifficulty`/`_selBestOf`/`_selMaxHints`/`_selPowerups` (6
  module-level `let`) перенесено в `state.duelSel` (нове поле `AppState`
  у `src/types.ts`/`src/state.ts`, тип `DuelSelState`). Геттери/сеттери
  `_getSelXxx`/`_setSelXxx` тепер читають/пишуть `state.duelSel.*` +
  `notifyStateChange()` у сеттерах; усі внутрішні використання в
  `duel.ts` (createRoom/joinAsync/тощо) переведено на `state.duelSel.*`.
  Сигнатури геттерів/сеттерів незмінні — `duel-lobby-options.tsx` та інші
  React-пікери не зачеплені. 529/529, tsc чистий. Браузерний smoke-тест
  (Playwright, встановлено локально як devDependency): відкриття лобі
  дуелі, вибір режиму "Навпаки" та складності A1 коректно застосовуються
  й зберігаються після закриття/відкриття лобі, без помилок у консолі.

- **[x] Під-фаза 2 — Resume sessions**: `_resumeSessions` (масив
  `ResumeSessionVM`, читається `duel-resume.tsx` через
  `_getResumeSessions()`) перенесено в `state.duelResumeSessions` (нове
  поле `AppState`); усі присвоєння в `_tryResumeSession()`/
  `_onResumeContinue()` тепер пишуть у `state.duelResumeSessions` +
  `notifyStateChange()`. `_resumeValid` (внутрішній bookkeeping —
  `{sess,room}` пари для `_onResumeContinue`, не читається React) лишився
  module-level `let`. 529/529, tsc чистий. Браузерний smoke-тест: лобі
  дуелі відкривається, `_tryResumeSession()` коректно обробляє порожній
  список збережених сесій (resume-mount порожній), без помилок у консолі.

- **[x] Під-фаза 3 — Chat history**: `_chatHistory` (масив
  `{text,isMe}`, читається `duel-chat-log.tsx` через `_getChatHistory()`)
  перенесено в `state.duelChatHistory` (нове поле `AppState`). Усі
  присвоєння/мутації (`_showGame()` reset, `_initGame()` reset,
  `_appendChatMsg()` push, `_onResumeContinue()` restore з сесії) тепер
  пишуть у `state.duelChatHistory` + `notifyStateChange()`. 529/529, tsc
  чистий, 7/7 e2e (лобі не зачеплене — chat-лог рендериться лише в
  ігровому екрані, який вимагає Firebase-кімнати; порожній масив за
  замовчуванням покритий існуючими лобі-тестами, що не падають).

- **[x] Під-фаза 4 — Spectator state**: `_specRoom` (`RoomData|null`,
  читається `duel-spectator.tsx` через `_getSpecRoom()`) перенесено в
  `state.duelSpecRoom` (нове поле `AppState`; `RoomData` зроблено
  `export`-ним з `duel.ts`). `_renderSpectatorView()` пише
  `state.duelSpecRoom` + `notifyStateChange()`. `_isSpectator`/`_specId`
  (внутрішній bookkeeping для cleanup, не читається React) лишились
  module-level `let`. 529/529, tsc чистий, 7/7 e2e.

- **[x] Під-фаза 5 — Tournament state**: `_tournView`
  (`TournamentData|null`, читається `duel-tournament.tsx` через
  `_getTournamentData()`) перенесено в `state.duelTournView` (нове поле
  `AppState`). Обидва присвоєння — у `_createTournament`/`_joinTournament`
  (фаза `'waiting'`) та `_renderTournBracket` (фаза `'bracket'`) — тепер
  пишуть `state.duelTournView` + `notifyStateChange()` перед
  `refreshDuelTournament()`. `_tournId`/`_tournSlot`/`_tournPoll`/
  `_tournFinishHook`/`_tournPlayCtx`/`_tournRejoinRoomId`/`_advanceLock`
  (внутрішній bookkeeping/таймери, не читаються React напряму) лишились
  module-level `let`. 529/529, tsc чистий, 7/7 e2e.

- **[x] Під-фаза 6 — Question/UI state**: 13 module-level `let`
  (`_feedbackHtml`/`_speedText`/`_qPrimary`/`_qSecondary`/`_qTertiary`/
  `_choiceOptions`/`_choiceAnswer`/`_chosenOption`/`_hintNote`/
  `_writeInputValue`/`_inputBorderColor`/`_waitingFinish`/
  `_showNextBtn`), читані `duel-question.tsx`/`duel-feedback.tsx` через
  `_getQuestionData()`/`_getFeedbackData()`, перенесено в нове поле
  `state.duelQuestion` (`DuelQuestionState` у `src/types.ts`/
  `src/state.ts`). Усі сайти запису (`_renderQuestion`/`_renderChoiceQ`/
  `_renderWriteQ`/`_renderAnagramQ`/`_renderLettersQ`/`_onOptionClick`/
  `_onInputChange`/`_submitWrite`/`_onNextClick`/`_useHint`/
  `_startTempoTimer`/`_startOpponentPoll`/`_finishMyGame`/freeze-таймер)
  тепер пишуть у `state.duelQuestion.*` + `notifyStateChange()`. Додано
  `tests/features/duel-question-state.test.ts` (3 тести: дефолтні
  значення `_getFeedbackData()`/`_getQuestionData()` відповідають
  `state.duelQuestion`, `_onInputChange()` оновлює
  `state.duelQuestion.writeInputValue`). 532/532, tsc чистий, 7/7 e2e.

### Фаза 7.5 — app.ts: прибрати `window.*`, перенести стан у `src/state.ts`
- Фінальний крок: коли всі читачі (фази 7.1-7.4) переведені на
  `src/store.ts`/`src/state.ts`, видалити `window.*`-присвоєння з `app.ts`
  і сам глобальний інтерфейс. Це закриває item 36 і залишки item 35
  (overlay-listeners, що читали `window.closePage` тощо, вже централізовані
  в `overlay-utils.ts` і автоматично підхоплять новий API).
- **[x] Перший прохід — мертві `window.*`-присвоєння**: аудит усіх 28
  присвоєнь з `app.ts` показав, що `window.ACHIEVEMENTS`,
  `window.setCw` і `window.recordCustomWordAdded` не мають жодного
  читача в `js/`/`src/` — `achievements-page.tsx`/`render-achievements.ts`
  імпортують `ACHIEVEMENTS` напряму з `data/achievements.ts`, `custom.ts`
  імпортує `recordCustomWordAdded` напряму з `game.ts`, а `setCw` у
  `card-actions.ts` був видалений у попередньому проході (7.3) разом з
  іншими `win.*`-читаннями. Видалено всі три присвоєння (+ невикористаний
  імпорт `ACHIEVEMENTS`/`recordCustomWordAdded` в `app.ts`). `_setCw()` —
  внутрішня функція `app.ts`, далі використовується `render()`, не
  видалена. 529/529 тестів, tsc чистий.
- **[x] Другий прохід — ще 5 мертвих присвоєнь**: `window.openWordDetail`
  (єдиний читач — `word-context.ts` через `(window as any)`, замінено на
  прямий імпорт `openWordDetail` з `word-detail.tsx`, цикл відсутній) і
  `window.W`/`window.known`/`window.srsData` (без жодного читача — скрізь
  використовується `state.known`/`state.srsData`/прямий імпорт `W`)
  видалено. `card-front-text.tsx`'s `SrsBadge` (останній читач
  `win.srsData`/`win.cw`/`win.TODAY`) переведено на `useAppState()` →
  `{ cw, srsData, TODAY }` зі `state`. `setKnown`/`setSrsData` більше не
  пишуть зворотньо у `window.known`/`window.srsData` (нема кому читати).
  529/529 тестів, tsc чистий.
- **[x] Третій прохід — ще 4 мертвих присвоєнь**: `window.getGameData`/
  `window.saveGameData` (єдиний зовнішній читач — `combo.ts`, переведено
  на прямий імпорт з `game.ts`), `window.invalidateSimilarCache`
  (єдиний читач — `custom.ts`, переведено на прямий імпорт з
  `similar-words.tsx`), `window.recordModeComplete` (єдиний читач —
  `pairs.ts`, переведено на прямий імпорт з `game.ts`). У `app.ts`
  видалено відповідні `window.X = X;` присвоєння; `getGameData`/
  `saveGameData` залишились в імпортах `app.ts` (використовуються в
  `onWordLearned()`), `invalidateSimilarCache`/`recordModeComplete`
  видалені з імпортів `app.ts` як невикористані. 529/529 тестів, tsc
  чистий.
- **[x] Під-фаза A — `window.playSound`**: чиста функція з
  `js/core/audio.ts`, без залежності від `app.ts`. ~18 викликів
  `(window.playSound as ...)?.('x')` у 8 файлах (`combo.ts`, `custom.ts`,
  `pairs.ts`, `catpairs.tsx`, `fib.tsx`, `lesson.tsx`, `listening.tsx`,
  `write.tsx`) переведено на прямий `import { playSound } from
  '.../core/audio.ts'` + `playSound('x')`; локальні `type PlaySound = ...`
  видалені. `window.playSound = playSound;` і відповідний імпорт у
  `app.ts` видалені. 529/529, tsc чистий.
- **[x] Під-фаза B — `window.updateRing`**: єдиний читач —
  `card-actions.ts` (`win.updateRing?.()`), `updateRing` вже
  експортується з `ring.ts`. Переведено на прямий
  `import { updateRing } from './ring.ts'`. `window.updateRing =
  updateRing;` видалено з `app.ts`, тип `win` у `card-actions.ts`
  звужено. `card-actions.test.ts`: видалено мертвий `win.updateRing =
  vi.fn()`, додано `getLevel`/`getNextLevel` у мок `game.ts` (потрібні
  для реального `updateRing()`, який тепер викликається напряму). 529/529,
  tsc чистий. Залишок `window.*` (17 присвоєнь:
  `render`/`setIdx`/`setDeck`/`animCard`/`startAuto`/`stopAuto`/
  `isAutoRunning`/`knownEs`/`knownFr`/`setBaseWords`/`_wordIdx`/
  `_customWords`/`onWordLearned`/`setFlipped`/`setKnown`/`setSrsData`/
  `TODAY`/`Object.defineProperty(deck/idx/flipped/cw)`) — план продовжує
  Під-фазами C/D (`C:\Users\Serhii\.claude\plans\temporal-roaming-quiche.md`).
- **[x] Під-фаза C — `knownEs`/`knownFr`/`_wordIdx`/`_customWords`/
  `setKnown`/`setSrsData`/`setBaseWords` → `src/state.ts`**: додано поля
  `knownEs`/`knownFr: Set<string>`, `_wordIdx: Map<string, number>`,
  `_customWords: Array<{en,ua,ex_en?,ex_ua?}>` у `AppState`
  (`src/types.ts`/`src/state.ts`). `app.ts`: локальні `known`/`srsData`/
  `_baseWords`/`knownEs`/`knownFr`/`_wordIdx`/`_customWords` прибрано —
  `_activeKnown()` і вся ініціалізація пишуть напряму у
  `state.known`/`state.knownEs`/`state.knownFr`/`state.srsData`/
  `state._baseWords`/`state._wordIdx`/`state._customWords`. Видалено
  `window.setBaseWords`/`window.setKnown`/`window.setSrsData`/
  `window.knownEs`/`window.knownFr`/`window._wordIdx`/
  `window._customWords`. Усі ~12 споживачів (`deck-filter.ts` ×9,
  `progress-io.ts` ×2, `card-actions.ts` (тип `win` звужено), `custom.ts`,
  `mode-utils.ts`, `achievements-page.tsx` ×2, `render-achievements.ts`,
  `search-inline.tsx` ×2, `similar-words.tsx` ×2, `tag-filter-select.tsx`,
  `word-context.ts`, `card-meta.tsx`, `catpairs.tsx` ×3) переведено на
  пряме читання/запис `state.*` (`card-meta.tsx` додатково отримав
  `_wordIdx` через `useAppState()`). `card-actions.test.ts`: видалено
  мертвий `win.knownEs = undefined`/`win.setSrsData` мок. 529/529, tsc
  чистий. Залишок `window.*` (10 присвоєнь:
  `render`/`setIdx`/`setDeck`/`animCard`/`startAuto`/`stopAuto`/
  `isAutoRunning`/`onWordLearned`/`setFlipped`/`TODAY` +
  `Object.defineProperty(deck/idx/flipped/cw)`) — Під-фаза D (найризикованіша:
  екстракція `js/core/card-engine.ts`) лишається в
  `C:\Users\Serhii\.claude\plans\temporal-roaming-quiche.md`.
- **[x] Під-фаза D — `js/core/card-engine.ts`**: новий модуль володіє
  `deck`/`idx`/`flipped`/`cw`/`autoTimer` (дзеркалюються у `state.*`) і
  експортує `render`/`setIdx`/`setDeck`/`setFlipped`/`animCard`/
  `stopAuto`/`startAuto`/`isAutoRunning`/`onWordLearned` (+ внутрішні
  `_activeKnown`/`renderCardIndicators`/`renderCardImage`/`$e`/`$el`).
  `app.ts` став тонким bootstrapper (~52 рядки): init-стан (`srsData`/
  `known`/`knownEs`/`knownFr`/`_baseWords`/`_wordIdx`/`_customWords`) +
  `renderGameBar()`/`renderLevelBadge()`/`checkAchievements()`/`render()`.
  10 споживачів (`card-actions.ts`, `custom.ts`, `deck-mode.ts`,
  `search-inline.tsx`, `keyboard.ts`, `swipe.ts`, `search-overlay.tsx`,
  `word-detail.tsx`, `word-of-day.tsx`, `reading.tsx`) перейшли на прямий
  `import ... from '../core/card-engine.ts'`. `i18n.ts`/`notes.ts`
  (транзитивні залежності `card-engine.ts`) — динамічний
  `import('../core/card-engine.ts').then(({ render }) => render())` для
  уникнення циклу. `Object.defineProperty(window, deck/idx/flipped/cw)` і
  решта 10 `window.*` видалені — лічильник для card-engine scope = 0
  (`window._rebuildEsDeck`/`_rebuildFrDeck` у `deck-mode.ts` залишені
  поза скоупом, як і раніше задокументовано). `card-actions.test.ts`:
  замінено `win.*`-моки на `vi.mock('../../js/core/card-engine.ts', ...)`
  з `vi.fn()`-обгортками (`setIdx`/`setDeck`/`setFlipped` дзеркалюють
  `state.*`, як старі `win.*`-мокі); додано `registerCheckAchievements`/
  `recordDailyWord`/`updateStreak`/`_idle` у мок `game.ts` (потрібні для
  реальних викликів з `onWordLearned()`/`render-achievements.ts`).
  529/529, tsc чистий. Фаза 7.3/7.5 (item 36) завершена.

## Верифікація

Як і в `REACT_MIGRATION_PLAN.md`: після кожної фази —
`npx tsc --noEmit -p .` (чисто) + `npx vitest run` (529/529, потім більше
за потреби), commit + push. Кожна фаза — окремий PR/коміт(и), щоб можна
було відкотити проблемну частину без впливу на інші.

## Статус

- [x] Фаза 7.1 — i18n / learning-path refresh-checks
- [x] Фаза 7.2 — daily-challenge.ts + sidebar.ts (роутинг сторінок)
- [x] Фаза 7.3 — card-actions / swipe / keyboard (ядро картки + стан деку)
- [x] Фаза 7.4 — duel.ts: останній `window.*` (`renderDuel`) прибрано;
      повне переписування 43 module-level змінних у `AppState` — окремий
      майбутній під-проєкт (Фаза 7.4-B, не входить в item 36)
- [x] Фаза 7.5 — app.ts: прибрати `window.*`
