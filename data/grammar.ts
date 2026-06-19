// English Words App — data/grammar.ts
// Grammar reference data: structured rules, tables, examples
// Format: self-contained, easy to extend
import type { Lang } from '../js/features/i18n.ts';

export interface GSection {
  type:     'intro' | 'formula' | 'table' | 'examples' | 'markers' | 'note' | 'tip' | 'subtitle';
  title?:   string;
  text?:    string;
  rows?:    string[][];        // for table/formula
  items?:   string[];          // for markers/list
  en?: {
    title?: string;
    text?:  string;
    rows?:  string[][];
    items?: string[];
  };
}

export interface GrammarRule {
  id:       string;
  title:    string;
  titleEn?: string;
  emoji:    string;
  sections: GSection[];
}

export interface GrammarCategory {
  id:    string;
  title: string;
  titleEn?: string;
  emoji: string;
  rules: GrammarRule[];
}

export const GRAMMAR: GrammarCategory[] = [

  // ══════════════════════════════════════
  //   ЧАСИ ДІЄСЛІВ
  // ══════════════════════════════════════
  {
    id: 'tenses', title: 'Часи дієслів', titleEn: 'Verb Tenses', emoji: '🕐',
    rules: [

      {
        id: 'present-simple', title: 'Present Simple — A1', emoji: '📌',
        sections: [
          {
            type: 'intro',
            text: 'Теперішній простий час. Використовують для постійних фактів, звичних дій, розкладів та законів природи.',
            en: { text: 'Present Simple tense. Used for permanent facts, habitual actions, schedules and natural laws.' },
          },
          {
            type: 'formula', title: 'Структура',
            rows: [
              ['✅ (+)', 'I / You / We / They', 'work', '→ I work every day.'],
              ['✅ (+)', 'He / She / It', 'work<u>s</u>', '→ She work<u>s</u> here.'],
              ['❌ (−)', 'I / You / We / They', "don't + V₁", "→ They don't play."],
              ['❌ (−)', 'He / She / It', "doesn't + V₁", "→ He doesn't know."],
              ['❓ (?)', 'I / You / We / They', 'Do + V₁?', '→ Do you like tea?'],
              ['❓ (?)', 'He / She / It', 'Does + V₁?', '→ Does she drive?'],
            ],
            en: { title: 'Structure' },
          },
          {
            type: 'markers', title: 'Маркери часу',
            items: ['always', 'usually', 'often', 'sometimes', 'rarely', 'never', 'every day / week / year', 'on Mondays', 'once a week'],
            en: { title: 'Time Markers' },
          },
          {
            type: 'note', title: 'Правила написання -s',
            text: 'he plays, she watches, it goes, he studies → після -s, -sh, -ch, -x, -o додаємо -es; слова на приголосний + -y замінюють -y на -ies (study → studies)',
            en: { title: '-s Spelling Rules', text: 'he plays, she watches, it goes, he studies → after -s, -sh, -ch, -x, -o add -es; words ending in consonant + -y replace -y with -ies (study → studies)' },
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['The sun rises in the east.', 'Сонце сходить на сході.'],
              ['She doesn\'t eat meat.', 'Вона не їсть м\'ясо.'],
              ['Does he speak French?', 'Він розмовляє французькою?'],
              ['The train leaves at 9.', 'Поїзд відправляється о 9.'],
            ],
          },
        ],
      },

      {
        id: 'present-continuous', title: 'Present Continuous — A1', emoji: '▶️',
        sections: [
          {
            type: 'intro',
            text: 'Теперішній тривалий час. Дія відбувається зараз або в цей період часу. Також — заплановане майбутнє.',
            en: { text: 'Present Continuous tense. The action is happening right now or during this period. Also used for planned future arrangements.' },
          },
          {
            type: 'formula', title: 'Структура',
            rows: [
              ['✅ (+)', 'I', 'am + V-ing', '→ I am working now.'],
              ['✅ (+)', 'He / She / It', 'is + V-ing', '→ She is reading.'],
              ['✅ (+)', 'You / We / They', 'are + V-ing', '→ They are playing.'],
              ['❌ (−)', 'I', "am not + V-ing", "→ I'm not sleeping."],
              ['❌ (−)', 'He / She / It', "is not + V-ing", "→ He isn't coming."],
              ['❌ (−)', 'You / We / They', "are not + V-ing", "→ We aren't waiting."],
              ['❓ (?)', 'I', 'Am I + V-ing?', '→ Am I doing this right?'],
              ['❓ (?)', 'He / She / It', 'Is + V-ing?', '→ Is she coming?'],
              ['❓ (?)', 'You / We / They', 'Are + V-ing?', '→ Are they watching?'],
            ],
            en: { title: 'Structure' },
          },
          {
            type: 'markers', title: 'Маркери часу',
            items: ['now', 'right now', 'at the moment', 'currently', 'today', 'this week', 'Look! Listen! (+ команди уваги)'],
            en: { title: 'Time Markers', items: ['now', 'right now', 'at the moment', 'currently', 'today', 'this week', 'Look! Listen! (+ attention commands)'] },
          },
          {
            type: 'note', title: 'Stative verbs — НЕ вживаються в Continuous!',
            text: 'know, understand, believe, love, hate, want, need, seem, belong, contain, mean — ці дієслова описують стани, а не дії.',
            en: { title: 'Stative verbs — NOT used in Continuous!', text: 'know, understand, believe, love, hate, want, need, seem, belong, contain, mean — these verbs describe states, not actions.' },
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['I am learning English now.', 'Я зараз вивчаю англійську.'],
              ['She isn\'t working today.', 'Вона сьогодні не працює.'],
              ['We are meeting them tomorrow.', 'Ми зустрічаємося з ними завтра. (план)'],
              ['What are you doing?', 'Що ти робиш?'],
            ],
          },
        ],
      },

      {
        id: 'past-simple', title: 'Past Simple — A1', emoji: '⏮️',
        sections: [
          {
            type: 'intro',
            text: 'Минулий простий час. Дія завершилась у конкретний момент у минулому.',
            en: { text: 'Past Simple tense. The action was completed at a specific moment in the past.' },
          },
          {
            type: 'formula', title: 'Структура',
            rows: [
              ['✅ (+)', 'Правильні дієслова', 'V₁ + -ed', '→ She worked / They played'],
              ['✅ (+)', 'Неправильні', 'V₂ (2-а форма)', '→ He went / I saw'],
              ['❌ (−)', 'Всі особи', "didn't + V₁", "→ I didn't know / She didn't go"],
              ['❓ (?)', 'Всі особи', 'Did + V₁?', '→ Did you call? / Did he come?'],
            ],
            en: { title: 'Structure', rows: [
              ['✅ (+)', 'Regular verbs', 'V₁ + -ed', '→ She worked / They played'],
              ['✅ (+)', 'Irregular verbs', 'V₂ (2nd form)', '→ He went / I saw'],
              ['❌ (−)', 'All persons', "didn't + V₁", "→ I didn't know / She didn't go"],
              ['❓ (?)', 'All persons', 'Did + V₁?', '→ Did you call? / Did he come?'],
            ]},
          },
          {
            type: 'markers', title: 'Маркери часу',
            items: ['yesterday', 'ago (2 days ago)', 'last (last week, last year)', 'in + рік (in 2020)', 'on + день (on Monday)', 'when + підрядне речення'],
            en: { title: 'Time Markers', items: ['yesterday', 'ago (2 days ago)', 'last (last week, last year)', 'in + year (in 2020)', 'on + day (on Monday)', 'when + clause'] },
          },
          {
            type: 'note', title: 'Правила написання -ed',
            text: 'work → worked, play → played; stop → stopped (подвоєння кінцевої приголосної); study → studied (заміна -y → -ied)',
            en: { title: '-ed Spelling Rules', text: 'work → worked, play → played; stop → stopped (double final consonant); study → studied (replace -y → -ied)' },
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['I visited London last year.', 'Минулого року я відвідав Лондон.'],
              ['She didn\'t finish her homework.', 'Вона не закінчила домашнє завдання.'],
              ['Did they arrive on time?', 'Вони прийшли вчасно?'],
              ['He broke the window.', 'Він розбив вікно.'],
            ],
          },
        ],
      },

      {
        id: 'past-continuous', title: 'Past Continuous — A2', emoji: '🔁',
        sections: [
          {
            type: 'intro',
            text: 'Минулий тривалий час. Дія тривала в певний момент у минулому. Часто вживається поряд із Past Simple — тривала дія переривається короткою.',
            en: { text: 'Past Continuous tense. The action was in progress at a specific moment in the past. Often used with Past Simple — a continuous action is interrupted by a short one.' },
          },
          {
            type: 'formula', title: 'Структура',
            rows: [
              ['✅ (+)', 'I / He / She / It', 'was + V-ing', '→ I was sleeping.'],
              ['✅ (+)', 'You / We / They', 'were + V-ing', '→ They were talking.'],
              ['❌ (−)', 'I / He / She / It', 'was not + V-ing', '→ He wasn\'t driving.'],
              ['❌ (−)', 'You / We / They', 'were not + V-ing', '→ We weren\'t waiting.'],
              ['❓ (?)', 'I / He / She / It', 'Was + V-ing?', '→ Was she crying?'],
              ['❓ (?)', 'You / We / They', 'Were + V-ing?', '→ Were they dancing?'],
            ],
            en: { title: 'Structure' },
          },
          {
            type: 'tip', title: 'While vs When',
            text: 'While → тривала дія: "While I was cooking, the phone rang."\nWhen → коротка дія перериває тривалу: "When she arrived, I was sleeping."',
            en: { title: 'While vs When', text: 'While → ongoing action: "While I was cooking, the phone rang."\nWhen → short action interrupts the ongoing one: "When she arrived, I was sleeping."' },
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['I was reading when he called.', 'Я читав, коли він подзвонив.'],
              ['They were playing all evening.', 'Вони грали весь вечір.'],
              ['Was it raining this morning?', 'Вранці йшов дощ?'],
              ['She wasn\'t listening to me.', 'Вона мене не слухала.'],
            ],
          },
        ],
      },

      {
        id: 'present-perfect', title: 'Present Perfect — B1', emoji: '✔️',
        sections: [
          {
            type: 'intro',
            text: 'Теперішній доконаний час. Дія відбулась у минулому, але має зв\'язок із теперішнім — результат, досвід або незавершена дія.',
            en: { text: 'Present Perfect tense. The action happened in the past but has a connection to the present — result, experience or unfinished action.' },
          },
          {
            type: 'formula', title: 'Структура',
            rows: [
              ['✅ (+)', 'I / You / We / They', 'have + V₃', '→ I have seen it.'],
              ['✅ (+)', 'He / She / It', 'has + V₃', '→ She has arrived.'],
              ['❌ (−)', 'I / You / We / They', "haven't + V₃", "→ I haven't eaten yet."],
              ['❌ (−)', 'He / She / It', "hasn't + V₃", "→ He hasn't called."],
              ['❓ (?)', 'I / You / We / They', 'Have + V₃?', '→ Have you ever been to Paris?'],
              ['❓ (?)', 'He / She / It', 'Has + V₃?', '→ Has she finished?'],
            ],
            en: { title: 'Structure' },
          },
          {
            type: 'markers', title: 'Маркери часу',
            items: ['ever / never', 'already', 'just', 'yet (питання/заперечення)', 'recently', 'since + момент (since 2020)', 'for + тривалість (for 3 years)', 'so far', 'lately'],
            en: { title: 'Time Markers', items: ['ever / never', 'already', 'just', 'yet (questions/negatives)', 'recently', 'since + point in time (since 2020)', 'for + duration (for 3 years)', 'so far', 'lately'] },
          },
          {
            type: 'tip', title: 'Present Perfect vs Past Simple',
            text: 'I have lost my keys. → я ще не знайшов (результат є зараз)\nI lost my keys yesterday. → конкретний момент у минулому (вчора)',
            en: { title: 'Present Perfect vs Past Simple', text: 'I have lost my keys. → I still haven\'t found them (result exists now)\nI lost my keys yesterday. → specific moment in the past (yesterday)' },
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['I have never tried sushi.', 'Я ніколи не пробував суші.'],
              ['She has just left the office.', 'Вона щойно пішла з офісу.'],
              ['Have you ever visited Italy?', 'Ти коли-небудь відвідував Італію?'],
              ['They haven\'t finished yet.', 'Вони ще не закінчили.'],
            ],
          },
        ],
      },

      {
        id: 'future-simple', title: 'Future Simple (will) — A2', emoji: '🔮',
        sections: [
          {
            type: 'intro',
            text: 'Майбутній простий час із will. Спонтанні рішення, прогнози, обіцянки, пропозиції.',
            en: { text: 'Future Simple with will. Used for spontaneous decisions, predictions, promises and offers.' },
          },
          {
            type: 'formula', title: 'Структура',
            rows: [
              ['✅ (+)', 'Всі особи', "will + V₁", "→ I will help you. / She'll come."],
              ['❌ (−)', 'Всі особи', "won't + V₁", "→ He won't tell anyone."],
              ['❓ (?)', 'Всі особи', 'Will + V₁?', '→ Will you marry me?'],
            ],
            en: { title: 'Structure', rows: [
              ['✅ (+)', 'All persons', "will + V₁", "→ I will help you. / She'll come."],
              ['❌ (−)', 'All persons', "won't + V₁", "→ He won't tell anyone."],
              ['❓ (?)', 'All persons', 'Will + V₁?', '→ Will you marry me?'],
            ]},
          },
          {
            type: 'tip', title: 'Will vs Going to',
            text: 'Will → спонтанне рішення: "I\'ll get the phone."\nGoing to → заздалегідь запланована дія: "I\'m going to visit Paris next month."',
            en: { title: 'Will vs Going to', text: 'Will → spontaneous decision: "I\'ll get the phone."\nGoing to → pre-planned action: "I\'m going to visit Paris next month."' },
          },
          {
            type: 'markers', title: 'Маркери часу',
            items: ['tomorrow', 'next week / month / year', 'in the future', 'soon', 'one day', 'probably', 'I think / I believe / I\'m sure'],
            en: { title: 'Time Markers' },
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['I think it will rain tomorrow.', 'Я думаю, завтра буде дощ.'],
              ['Will you help me?', 'Ти мені допоможеш?'],
              ['She won\'t be late, I\'m sure.', 'Вона не запізниться, я впевнений.'],
              ['I\'ll call you back.', 'Я передзвоню тобі.'],
            ],
          },
        ],
      },

      // ─── Additional tenses ─────────────────────────────────────
      // ── Ще часи (merged) ──

      {
        id: 'past-perfect', title: 'Past Perfect — B1', emoji: '⏪',
        sections: [
          { type: 'intro', text: 'Минулий доконаний час. Дія відбулась ДО іншої дії в минулому. Використовується з Past Simple для показу послідовності подій.',
          en: { text: 'Past Perfect tense. The action happened BEFORE another action in the past. Used with Past Simple to show the sequence of events.' } },
          {
            type: 'formula', title: 'Структура',
            rows: [
              ['✅ (+)', 'Всі особи', 'had + V₃', '→ She had already left.'],
              ['❌ (−)', 'Всі особи', "hadn't + V₃", "→ He hadn't eaten before."],
              ['❓ (?)', 'Всі особи', 'Had + V₃?', '→ Had they met before?'],
            ],
            en: { title: 'Structure', rows: [
              ['✅ (+)', 'All persons', 'had + V₃', '→ She had already left.'],
              ['❌ (−)', 'All persons', "hadn't + V₃", "→ He hadn't eaten before."],
              ['❓ (?)', 'All persons', 'Had + V₃?', '→ Had they met before?'],
            ]},
          },
          { type: 'tip', title: 'Past Perfect vs Past Simple',
            text: 'When I arrived, she had already left. (спочатку пішла → потім я прийшов)\nПасивний: The cake had been eaten. (хтось з\'їв до моменту в минулому)',
            en: { title: 'Past Perfect vs Past Simple', text: 'When I arrived, she had already left. (she left first → then I arrived)\nPassive: The cake had been eaten. (someone ate it before the moment in the past)' },
          },
          { type: 'markers', title: 'Маркери часу',
            items: ['before', 'after', 'already', 'just', 'never', 'when', 'by the time', 'as soon as'],
            en: { title: 'Time Markers' },
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['By the time he arrived, we had finished.', 'На момент коли він прийшов, ми вже закінчили.'],
              ['She had never seen snow before.', 'Вона ніколи раніше не бачила снігу.'],
              ['Had you eaten before the meeting?', 'Ти поїв до наради?'],
            ],
          },
        ],
      },

      {
        id: 'present-perfect-cont', title: 'Present Perfect Continuous — B1', emoji: '🔄✔️',
        sections: [
          { type: 'intro', text: 'Теперішній доконано-тривалий час. Дія почалась у минулому і продовжується зараз. Акцент на тривалості процесу.',
            en: { text: 'Present Perfect Continuous tense. The action started in the past and is still going on now. Emphasis on the duration of the process.' } },
          {
            type: 'formula', title: 'Структура',
            rows: [
              ['✅ (+)', 'I / You / We / They', 'have been + V-ing', '→ I have been waiting for an hour.'],
              ['✅ (+)', 'He / She / It', 'has been + V-ing', '→ She has been working all day.'],
              ['❌ (−)', 'I / You / We / They', "haven't been + V-ing", "→ We haven't been sleeping well."],
              ['❌ (−)', 'He / She / It', "hasn't been + V-ing", "→ He hasn't been feeling well."],
              ['❓ (?)', '', 'Have/Has + been + V-ing?', '→ How long have you been waiting?'],
            ],
            en: { title: 'Structure' },
          },
          { type: 'tip', title: 'Present Perfect vs Present Perfect Continuous',
            text: 'I have read 3 books this week. (скільки — результат, кількість)\nI have been reading all evening. (як довго — процес, тривалість)',
            en: { title: 'Present Perfect vs Present Perfect Continuous', text: 'I have read 3 books this week. (how many — result, quantity)\nI have been reading all evening. (how long — process, duration)' },
          },
          { type: 'markers', title: 'Маркери часу',
            items: ['for + тривалість (for 2 hours)', 'since + момент (since morning)', 'how long?', 'all day / all week', 'lately', 'recently'],
            en: { title: 'Time Markers', items: ['for + duration (for 2 hours)', 'since + point in time (since morning)', 'how long?', 'all day / all week', 'lately', 'recently'] },
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['I have been learning French for 3 years.', 'Я вивчаю французьку вже 3 роки.'],
              ['She has been crying. Her eyes are red.', 'Вона плакала. Очі червоні. (видний результат)'],
              ['How long have you been waiting?', 'Як довго ти чекаєш?'],
            ],
          },
        ],
      },

      {
        id: 'future-going-to', title: 'Future: Going to — A2', emoji: '🗓️',
        sections: [
          { type: 'intro', text: 'Going to вживається для заздалегідь запланованих дій або для прогнозів на основі видимих ознак.',
            en: { text: 'Going to is used for pre-planned actions or for predictions based on visible signs.' } },
          {
            type: 'formula', title: 'Структура',
            rows: [
              ['✅ (+)', 'I', 'am going to + V₁', "→ I'm going to travel next month."],
              ['✅ (+)', 'He / She / It', 'is going to + V₁', "→ She's going to study abroad."],
              ['✅ (+)', 'You / We / They', 'are going to + V₁', "→ They're going to buy a house."],
              ['❌ (−)', '', "not going to + V₁", "→ I'm not going to apologize."],
              ['❓ (?)', '', 'Am/Is/Are + going to + V₁?', '→ Are you going to call him?'],
            ],
            en: { title: 'Structure' },
          },
          {
            type: 'table', title: 'Will vs Going to',
            rows: [
              ['', 'WILL', 'GOING TO'],
              ['Рішення', 'Спонтанне (зараз)', 'Заздалегідь заплановане'],
              ['Прогноз', 'Думка/припущення', 'На основі ознак зараз'],
              ['Приклад', '"I\'ll answer the phone."', '"I\'m going to visit Paris."'],
              ['Приклад', '"I think it will rain."', '"Look at those clouds — it\'s going to rain!"'],
            ],
            en: { title: 'Will vs Going to', rows: [
              ['', 'WILL', 'GOING TO'],
              ['Decision', 'Spontaneous (right now)', 'Pre-planned'],
              ['Prediction', 'Opinion / assumption', 'Based on visible signs'],
              ['Example', '"I\'ll answer the phone."', '"I\'m going to visit Paris."'],
              ['Example', '"I think it will rain."', '"Look at those clouds — it\'s going to rain!"'],
            ]},
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ["We're going to move to a new city.", 'Ми плануємо переїхати в нове місто.'],
              ["She's going to have a baby!", 'Вона чекає дитину!'],
              ["They're not going to be late.", 'Вони не спізняться.'],
            ],
          },
        ],
      },

      {
        id: 'future-continuous', title: 'Future Continuous — B1', emoji: '🔮▶️',
        sections: [
          { type: 'intro', text: 'Майбутній тривалий час. Дія буде тривати в певний момент у майбутньому або відбуватиметься паралельно з іншою дією.',
            en: { text: 'Future Continuous tense. The action will be in progress at a specific moment in the future or will occur simultaneously with another action.' } },
          {
            type: 'formula', title: 'Структура',
            rows: [
              ['✅ (+)', 'Всі особи', 'will be + V-ing', '→ I will be working at 8 pm.'],
              ['❌ (−)', 'Всі особи', "won't be + V-ing", "→ She won't be sleeping then."],
              ['❓ (?)', 'Всі особи', 'Will + be + V-ing?', '→ Will you be using the car?'],
            ],
            en: { title: 'Structure', rows: [
              ['✅ (+)', 'All persons', 'will be + V-ing', '→ I will be working at 8 pm.'],
              ['❌ (−)', 'All persons', "won't be + V-ing", "→ She won't be sleeping then."],
              ['❓ (?)', 'All persons', 'Will + be + V-ing?', '→ Will you be using the car?'],
            ]},
          },
          { type: 'markers', title: 'Маркери часу',
            items: ['at this time tomorrow', 'at 8 pm tonight', 'this time next week', 'while', 'when'],
            en: { title: 'Time Markers' },
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['This time tomorrow I will be flying to London.', 'Завтра в цей час я буду летіти до Лондона.'],
              ["Don't call at 7 — I'll be having dinner.", 'Не телефонуй о 7 — я буду вечеряти.'],
              ['Will you be attending the conference?', 'Ти будеш на конференції?'],
            ],
          },
        ],
      },

      {
        id: 'future-perfect', title: 'Future Perfect — B2', emoji: '✅🔮',
        sections: [
          { type: 'intro', text: 'Майбутній доконаний час. Дія буде ЗАВЕРШЕНА до певного моменту в майбутньому.',
            en: { text: 'Future Perfect tense. The action will be COMPLETED before a specific moment in the future.' } },
          {
            type: 'formula', title: 'Структура',
            rows: [
              ['✅ (+)', 'Всі особи', 'will have + V₃', '→ I will have finished by 6 pm.'],
              ['❌ (−)', 'Всі особи', "won't have + V₃", "→ He won't have arrived by then."],
              ['❓ (?)', 'Всі особи', 'Will + have + V₃?', '→ Will you have done it by Monday?'],
            ],
            en: { title: 'Structure', rows: [
              ['✅ (+)', 'All persons', 'will have + V₃', '→ I will have finished by 6 pm.'],
              ['❌ (−)', 'All persons', "won't have + V₃", "→ He won't have arrived by then."],
              ['❓ (?)', 'All persons', 'Will + have + V₃?', '→ Will you have done it by Monday?'],
            ]},
          },
          { type: 'markers', title: 'Маркери часу',
            items: ['by + час/момент (by 5 pm)', 'by the time', 'before', 'in + тривалість (in 2 years)'],
            en: { title: 'Time Markers', items: ['by + time/moment (by 5 pm)', 'by the time', 'before', 'in + duration (in 2 years)'] },
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['By Friday, I will have completed the project.', 'До п\'ятниці я завершу проєкт.'],
              ['She will have graduated by next summer.', 'Вона закінчить навчання до наступного літа.'],
              ['Will you have read the book by then?', 'Ти прочитаєш книгу до того часу?'],
            ],
          },
        ],
      },

      {
        id: 'past-perfect-cont', title: 'Past Perfect Continuous — B2', emoji: '⏪🔄',
        sections: [
          { type: 'intro', text: 'Минулий доконано-тривалий час. Дія тривала протягом певного часу ДО іншої дії або моменту в минулому. Акцент на тривалості процесу.',
            en: { text: 'Past Perfect Continuous tense. The action was in progress for a period of time BEFORE another action or moment in the past. Emphasis on the duration of the process.' } },
          {
            type: 'formula', title: 'Структура',
            rows: [
              ['✅ (+)', 'Всі особи', 'had been + V-ing', '→ She had been waiting for an hour.'],
              ['❌ (−)', 'Всі особи', "hadn't been + V-ing", "→ He hadn't been sleeping well."],
              ['❓ (?)', 'Всі особи', 'Had + been + V-ing?', '→ How long had they been arguing?'],
            ],
            en: { title: 'Structure', rows: [
              ['✅ (+)', 'All persons', 'had been + V-ing', '→ She had been waiting for an hour.'],
              ['❌ (−)', 'All persons', "hadn't been + V-ing", "→ He hadn't been sleeping well."],
              ['❓ (?)', 'All persons', 'Had + been + V-ing?', '→ How long had they been arguing?'],
            ]},
          },
          { type: 'tip', title: 'Past Perfect vs Past Perfect Continuous',
            text: 'She had read 3 books. (скільки — акцент на результаті/кількості)\nShe had been reading all evening. (як довго — акцент на тривалості процесу)',
            en: { title: 'Past Perfect vs Past Perfect Continuous', text: 'She had read 3 books. (how many — emphasis on result/quantity)\nShe had been reading all evening. (how long — emphasis on duration of the process)' },
          },
          { type: 'tip', title: 'Видимі результати в минулому',
            text: 'Her eyes were red because she had been crying. (очі були червоні — результат тривалої дії)\nHe was tired because he had been working all day. (втомився — результат)',
            en: { title: 'Visible results in the past', text: 'Her eyes were red because she had been crying. (red eyes — result of ongoing action)\nHe was tired because he had been working all day. (tired — result)' },
          },
          { type: 'markers', title: 'Маркери часу',
            items: ['for + тривалість (for 2 hours)', 'since + момент (since morning)', 'how long?', 'all day / all week', 'before', 'when', 'by the time'],
            en: { title: 'Time Markers', items: ['for + duration (for 2 hours)', 'since + point in time (since morning)', 'how long?', 'all day / all week', 'before', 'when', 'by the time'] },
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['I was exhausted because I had been running for an hour.', 'Я був виснажений, бо пробіг годину.'],
              ['She had been studying French for 5 years before she moved to Paris.', 'Вона вчила французьку 5 років до переїзду в Париж.'],
              ['How long had he been waiting when you arrived?', 'Як довго він чекав, коли ти прийшов?'],
              ['The ground was wet — it had been raining.', 'Земля була мокрою — йшов дощ.'],
            ],
          },
        ],
      },

      {
        id: 'future-perfect-cont', title: 'Future Perfect Continuous — C1', emoji: '🔮🔄',
        sections: [
          { type: 'intro', text: 'Майбутній доконано-тривалий час. Дія буде тривати протягом певного часу до конкретного моменту в майбутньому. Акцент на тривалості процесу, а не результаті.',
            en: { text: 'Future Perfect Continuous tense. The action will have been in progress for a period of time up to a specific moment in the future. Emphasis on duration, not result.' } },
          {
            type: 'formula', title: 'Структура',
            rows: [
              ['✅ (+)', 'Всі особи', 'will have been + V-ing', '→ I will have been working here for 10 years.'],
              ['❌ (−)', 'Всі особи', "won't have been + V-ing", "→ She won't have been sleeping long."],
              ['❓ (?)', 'Всі особи', 'Will + have been + V-ing?', '→ How long will you have been studying?'],
            ],
            en: { title: 'Structure', rows: [
              ['✅ (+)', 'All persons', 'will have been + V-ing', '→ I will have been working here for 10 years.'],
              ['❌ (−)', 'All persons', "won't have been + V-ing", "→ She won't have been sleeping long."],
              ['❓ (?)', 'All persons', 'Will + have been + V-ing?', '→ How long will you have been studying?'],
            ]},
          },
          { type: 'tip', title: 'Future Perfect vs Future Perfect Continuous',
            text: 'By 2030, I will have written 5 books. (скільки — результат, кількість)\nBy 2030, I will have been writing for 20 years. (як довго — тривалість процесу)',
            en: { title: 'Future Perfect vs Future Perfect Continuous', text: 'By 2030, I will have written 5 books. (how many — result, quantity)\nBy 2030, I will have been writing for 20 years. (how long — duration of the process)' },
          },
          { type: 'markers', title: 'Маркери часу',
            items: ['by + час (by next year)', 'for + тривалість (for 3 hours)', 'how long?', 'by the time'],
            en: { title: 'Time Markers', items: ['by + time (by next year)', 'for + duration (for 3 hours)', 'how long?', 'by the time'] },
          },
          { type: 'note', title: 'Вживається рідко',
            text: 'Future Perfect Continuous — один з найрідших часів у щоденному мовленні. Найчастіше вживається для підкреслення тривалості дії до певного моменту в майбутньому.',
            en: { title: 'Rarely used', text: 'Future Perfect Continuous is one of the rarest tenses in everyday speech. Most commonly used to emphasise the duration of an action up to a specific moment in the future.' },
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['By December, I will have been learning English for 2 years.', 'До грудня я вивчатиму англійську вже 2 роки.'],
              ['When she retires, she will have been teaching for 30 years.', 'Коли вона вийде на пенсію, вона викладатиме вже 30 років.'],
              ['Will you have been driving for long when you reach London?', 'Ти їдеш довго до того, як доберешся до Лондона?'],
            ],
          },
        ],
      },

    ],
  },

  // ══════════════════════════════════════
  //   ГРАМАТИКА (усі теми разом)
  // ══════════════════════════════════════
  {
    id: 'grammar', title: 'Граматика', titleEn: 'Grammar', emoji: '📖',
    rules: [

      {
        id: 'articles', title: 'Артиклі (a / an / the) — A2', titleEn: 'Articles (a / an / the) — A2', emoji: '🔤',
        sections: [
          {
            type: 'intro',
            text: 'Артиклі — це службові слова перед іменниками. В англійській є невизначений артикль (a/an) та визначений (the). Нульовий артикль означає, що артикль не потрібен.',
            en: { text: 'Articles are function words placed before nouns. English has an indefinite article (a/an) and a definite article (the). Zero article means no article is needed.' },
          },
          {
            type: 'table', title: 'A vs AN',
            rows: [
              ['A', 'перед приголосним звуком', 'a book, a car, a university (звук /j/)'],
              ['AN', 'перед голосним звуком', 'an apple, an hour (h — мовчазна), an umbrella'],
            ],
            en: { title: 'A vs AN', rows: [
              ['A', 'before a consonant sound', 'a book, a car, a university (sound /j/)'],
              ['AN', 'before a vowel sound', 'an apple, an hour (silent h), an umbrella'],
            ]},
          },
          {
            type: 'table', title: 'Коли вживати?',
            rows: [
              ['A / AN', 'Перша згадка предмета', '"I saw a dog. The dog was big."'],
              ['A / AN', 'Загальне (будь-який)', '"I need a pen." (будь-яка)'],
              ['A / AN', 'Назва професії', '"She is a teacher."'],
              ['THE', 'Конкретний (відомий)', '"Close the door." (яку саме — знаємо)'],
              ['THE', 'Єдиний у своєму роді', '"The sun / the Moon / the Earth"'],
              ['THE', 'Повторна згадка', '"I have a cat. The cat is black."'],
              ['THE', 'Наднаціональні назви', '"the USA, the UK, the Nile, the Alps"'],
              ['∅ (нуль)', 'Власні імена', '"London, Ukraine, John"'],
              ['∅ (нуль)', 'Мови та предмети', '"I study English / Math"'],
              ['∅ (нуль)', 'Їжа/напої загалом', '"I like coffee / bread"'],
            ],
            en: { title: 'When to use?', rows: [
              ['A / AN', 'First mention of a noun', '"I saw a dog. The dog was big."'],
              ['A / AN', 'General (any one)', '"I need a pen." (any pen)'],
              ['A / AN', 'Job/profession', '"She is a teacher."'],
              ['THE', 'Specific (known)', '"Close the door." (we know which one)'],
              ['THE', 'Unique in its kind', '"The sun / the Moon / the Earth"'],
              ['THE', 'Second mention', '"I have a cat. The cat is black."'],
              ['THE', 'Supranational names', '"the USA, the UK, the Nile, the Alps"'],
              ['∅ (zero)', 'Proper nouns', '"London, Ukraine, John"'],
              ['∅ (zero)', 'Languages and subjects', '"I study English / Math"'],
              ['∅ (zero)', 'Food/drinks in general', '"I like coffee / bread"'],
            ]},
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['Can I have a coffee?', 'Можна мені кави? (одну)'],
              ['The coffee is cold.', 'Кава холодна. (та, що ми замовили)'],
              ['She plays the piano.', 'Вона грає на піаніно. (the + інструменти)'],
              ['He works as a doctor.', 'Він працює лікарем.'],
            ],
          },
        ],
      },

      {
        id: 'articles-zero', title: 'Нульовий артикль (∅) — B1', titleEn: 'Zero Article (∅) — B1', emoji: '⭕',
        sections: [
          {
            type: 'intro',
            text: 'Нульовий артикль (∅) — ситуації, коли артикль не вживається взагалі. Це одна з найпоширеніших помилок українських мовців.',
            en: { text: 'Zero article (∅) — situations where no article is used at all. This is one of the most common mistakes for Ukrainian learners.' },
          },
          {
            type: 'table', title: 'Коли НЕ вживається артикль',
            rows: [
              ['Категорія', 'Правило', 'Приклади'],
              ['Власні імена', 'Імена людей, міста, країни (більшість)', 'John, Ukraine, Paris, London'],
              ['Мови', 'Назви мов без артикля', 'She speaks English / French / German.'],
              ['Предмети та науки', 'Навчальні дисципліни', 'I study math / history / biology.'],
              ['Спорт та ігри', 'Назви видів спорту', 'He plays football / tennis / chess.'],
              ['Їжа та напої (загалом)', 'Коли говоримо загалом, не конкретно', 'I like coffee. / She eats rice. / Bread is healthy.'],
              ['Абстрактні іменники', 'Загальні поняття', 'Love is blind. / Time flies. / Knowledge is power.'],
              ['Транспортні засоби', 'by + вид транспорту', 'by car / by train / by plane / on foot'],
              ['Прийом їжі', 'breakfast, lunch, dinner без уточнення', 'Have breakfast. / Let\'s have lunch.'],
              ['Пори року (загалом)', 'У загальному контексті (Am.E)', 'Summer is hot. / I love winter.'],
              ['Дні тижня та місяці', 'У ствердних реченнях без the', 'See you on Monday. / She was born in May.'],
            ],
            en: { title: 'When NOT to use an article', rows: [
              ['Category', 'Rule', 'Examples'],
              ['Proper nouns', 'People\'s names, cities, countries (most)', 'John, Ukraine, Paris, London'],
              ['Languages', 'Language names without article', 'She speaks English / French / German.'],
              ['Subjects & sciences', 'Academic disciplines', 'I study math / history / biology.'],
              ['Sports & games', 'Names of sports', 'He plays football / tennis / chess.'],
              ['Food & drinks (in general)', 'When speaking generally, not specifically', 'I like coffee. / She eats rice. / Bread is healthy.'],
              ['Abstract nouns', 'General concepts', 'Love is blind. / Time flies. / Knowledge is power.'],
              ['Transport', 'by + mode of transport', 'by car / by train / by plane / on foot'],
              ['Meals', 'breakfast, lunch, dinner without specification', 'Have breakfast. / Let\'s have lunch.'],
              ['Seasons (in general)', 'In general context (AmE)', 'Summer is hot. / I love winter.'],
              ['Days & months', 'In affirmative sentences without the', 'See you on Monday. / She was born in May.'],
            ]},
          },
          {
            type: 'table', title: 'Установи: ∅ vs THE — різниця в значенні',
            rows: [
              ['∅ (функція / призначення)', 'THE (конкретне місце/будівля)', 'Переклад різниці'],
              ['go to school (учень)', 'go to the school (відвідати будівлю)', 'вчитися / відвідати школу'],
              ['go to church (молитися)', 'go to the church (будівля)', 'йти до церкви (обряд) / будівля'],
              ['go to hospital (лікуватися, Brit)', 'go to the hospital (навідати)', 'лягти в лікарню / піти в лікарню'],
              ['go to prison (злочинець)', 'go to the prison (навідати)', 'потрапити у в\'язницю / відвідати'],
              ['go to bed', 'sit on the bed', 'лягти спати / сидіти на ліжку'],
            ],
            en: { title: 'Institutions: ∅ vs THE — difference in meaning', rows: [
              ['∅ (function / purpose)', 'THE (specific place/building)', 'Difference'],
              ['go to school (as a student)', 'go to the school (visit the building)', 'to study / to visit the school'],
              ['go to church (to pray)', 'go to the church (the building)', 'religious attendance / visit the building'],
              ['go to hospital (to be treated, Brit)', 'go to the hospital (to visit)', 'to be admitted / to visit someone'],
              ['go to prison (as a criminal)', 'go to the prison (to visit)', 'to be imprisoned / to visit someone'],
              ['go to bed', 'sit on the bed', 'to sleep / sitting on the bed'],
            ]},
          },
          {
            type: 'note', title: 'Музичні інструменти — THE',
            text: 'Артикль THE вживається з музичними інструментами:\nShe plays the piano / the guitar / the violin.\nАле: He plays drums (у рок-групі, розмовне — без артикля).',
            en: { title: 'Musical instruments — THE', text: 'THE is used with musical instruments:\nShe plays the piano / the guitar / the violin.\nBut: He plays drums (in a rock band, informal — no article).' },
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['Life is short. Enjoy every moment.', 'Життя коротке. (абстрактне — без артикля)'],
              ['She goes to school by bus.', 'Вона їздить до школи автобусом. (∅ + ∅)'],
              ['I had breakfast before leaving.', 'Я поснідав перед виходом.'],
              ['He plays the violin beautifully.', 'Він чудово грає на скрипці. (the + інструмент)'],
              ['I love summer, but winter is hard.', 'Я люблю літо, але зима важка. (загальне)'],
            ],
          },
        ],
      },

      {
        id: 'articles-geography', title: 'Артиклі з географією — B1', titleEn: 'Articles with Geography — B1', emoji: '🌍',
        sections: [
          {
            type: 'intro',
            text: 'Географічні назви — одне з найскладніших правил артиклів. Одні назви вживаються з THE, інші — без.',
            en: { text: 'Geographical names are one of the most complex article rules. Some names take THE, others do not.' },
          },
          {
            type: 'table', title: 'THE — обов\'язковий',
            rows: [
              ['Категорія', 'Приклади'],
              ['Річки, моря, океани', 'the Nile, the Thames, the Black Sea, the Pacific (Ocean), the Amazon'],
              ['Гірські системи', 'the Alps, the Himalayas, the Rocky Mountains, the Carpathians'],
              ['Острівні групи та архіпелаги', 'the Maldives, the Philippines, the Canary Islands, the British Isles'],
              ['Пустелі', 'the Sahara, the Gobi, the Mojave'],
              ['Канали і протоки', 'the Panama Canal, the English Channel, the Suez Canal'],
              ['Держави з "Republic/Kingdom/States"', 'the USA, the UK, the UAE, the Czech Republic'],
              ['Регіони', 'the Middle East, the North Pole, the Balkans, the Far East'],
              ['Газети та готелі', 'the Times, the Guardian, the Hilton, the Ritz'],
            ],
            en: { title: 'THE — required', rows: [
              ['Category', 'Examples'],
              ['Rivers, seas, oceans', 'the Nile, the Thames, the Black Sea, the Pacific (Ocean), the Amazon'],
              ['Mountain ranges', 'the Alps, the Himalayas, the Rocky Mountains, the Carpathians'],
              ['Island groups & archipelagos', 'the Maldives, the Philippines, the Canary Islands, the British Isles'],
              ['Deserts', 'the Sahara, the Gobi, the Mojave'],
              ['Canals & straits', 'the Panama Canal, the English Channel, the Suez Canal'],
              ['Countries with "Republic/Kingdom/States"', 'the USA, the UK, the UAE, the Czech Republic'],
              ['Regions', 'the Middle East, the North Pole, the Balkans, the Far East'],
              ['Newspapers & hotels', 'the Times, the Guardian, the Hilton, the Ritz'],
            ]},
          },
          {
            type: 'table', title: '∅ — БЕЗ артикля',
            rows: [
              ['Категорія', 'Приклади'],
              ['Більшість країн', 'France, Ukraine, Germany, Japan, Brazil, Canada'],
              ['Міста і села', 'Paris, Kyiv, New York, London, Tokyo'],
              ['Континенти', 'Europe, Asia, Africa, Australia, America'],
              ['Окремі острови', 'Sicily, Cyprus, Cuba, Majorca'],
              ['Окремі гори', 'Mount Everest, Ben Nevis, Kilimanjaro'],
              ['Озера', 'Lake Baikal, Lake Victoria, Lake Ontario'],
              ['Вулиці та площі', 'Oxford Street, Times Square, Trafalgar Square'],
              ['Аеропорти та станції', 'Heathrow Airport, Waterloo Station'],
            ],
            en: { title: '∅ — WITHOUT article', rows: [
              ['Category', 'Examples'],
              ['Most countries', 'France, Ukraine, Germany, Japan, Brazil, Canada'],
              ['Cities & towns', 'Paris, Kyiv, New York, London, Tokyo'],
              ['Continents', 'Europe, Asia, Africa, Australia, America'],
              ['Individual islands', 'Sicily, Cyprus, Cuba, Majorca'],
              ['Individual mountains', 'Mount Everest, Ben Nevis, Kilimanjaro'],
              ['Lakes', 'Lake Baikal, Lake Victoria, Lake Ontario'],
              ['Streets & squares', 'Oxford Street, Times Square, Trafalgar Square'],
              ['Airports & stations', 'Heathrow Airport, Waterloo Station'],
            ]},
          },
          {
            type: 'tip', title: 'Підказка: множина та описові назви → THE',
            text: 'Якщо назва у множині або містить описове слово (Republic, Kingdom, States, Islands) — зазвичай потрібен THE:\nthe United States, the Netherlands, the Philippines, the British Isles\n\nОдинична назва без опису — зазвичай без артикля:\nFrance, Italy, Japan, Sicily, Everest.',
            en: { title: 'Tip: plural & descriptive names → THE', text: 'If the name is plural or contains a descriptive word (Republic, Kingdom, States, Islands) — THE is usually required:\nthe United States, the Netherlands, the Philippines, the British Isles\n\nSingle name without a descriptor — usually no article:\nFrance, Italy, Japan, Sicily, Everest.' },
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['The Nile is the longest river in Africa.', 'Ніл — найдовша річка в Африці. (THE + річка)'],
              ['I have never been to Japan.', 'Я ніколи не був у Японії. (∅ + країна)'],
              ['She climbed Mount Everest last year.', 'Торік вона підкорила Еверест. (∅ + гора)'],
              ['The Alps stretch across several countries.', 'Альпи простягаються через кілька країн. (THE + гори)'],
              ['He lives near the Dead Sea.', 'Він живе біля Мертвого моря. (THE + море)'],
            ],
          },
        ],
      },

      {
        id: 'modal-verbs', title: 'Модальні дієслова — A2', titleEn: 'Modal Verbs — A2', emoji: '🎛️',
        sections: [
          {
            type: 'intro',
            text: 'Модальні дієслова не змінюються за особами (no -s), після них використовується інфінітив без to. Вони виражають можливість, дозвіл, обов\'язок, пораду.',
            en: { text: 'Modal verbs do not change by person (no -s), they are followed by the bare infinitive (no to). They express ability, permission, obligation and advice.' },
          },
          {
            type: 'table', title: 'Основні модальні дієслова',
            rows: [
              ['CAN', 'вміти / можу', 'I can swim. Can you help me?'],
              ['COULD', 'міг би / можна? (ввічливо)', 'Could you open the door, please?'],
              ['MAY', 'можливо / дозвіл (формально)', 'It may rain. May I come in?'],
              ['MIGHT', 'можливо (менша впевненість)', 'She might be late.'],
              ['MUST', 'зобов\'язаний / мусить', 'You must wear a seatbelt.'],
              ['HAVE TO', 'зобов\'язаний (зовнішнє)', 'I have to work on Saturdays.'],
              ['SHOULD', 'слід / порада', 'You should see a doctor.'],
              ['OUGHT TO', 'слід (моральний обов\'язок)', 'We ought to help them.'],
              ['WILL', 'будете / намір', 'I will call you tomorrow.'],
              ['WOULD', 'хотів би / умовний', 'I would like a coffee.'],
            ],
            en: { title: 'Main modal verbs', rows: [
              ['CAN', 'ability / can', 'I can swim. Can you help me?'],
              ['COULD', 'could / polite request', 'Could you open the door, please?'],
              ['MAY', 'possibility / permission (formal)', 'It may rain. May I come in?'],
              ['MIGHT', 'possibility (less certain)', 'She might be late.'],
              ['MUST', 'obligation / must', 'You must wear a seatbelt.'],
              ['HAVE TO', 'obligation (external)', 'I have to work on Saturdays.'],
              ['SHOULD', 'should / advice', 'You should see a doctor.'],
              ['OUGHT TO', 'should (moral obligation)', 'We ought to help them.'],
              ['WILL', 'will / intention', 'I will call you tomorrow.'],
              ['WOULD', 'would like / conditional', 'I would like a coffee.'],
            ]},
          },
          {
            type: 'tip', title: 'Must vs Have to',
            text: 'MUST → внутрішнє рішення: "I must go to bed early (я сам вирішив)"\nHAVE TO → зовнішній обов\'язок: "I have to wake up at 6 (правило/обставини)"',
            en: { title: 'Must vs Have to', text: 'MUST → internal decision: "I must go to bed early (I decided myself)"\nHAVE TO → external obligation: "I have to wake up at 6 (rule/circumstances)"' },
          },
          {
            type: 'note', title: 'Заперечення — зміна значення!',
            text: 'mustn\'t ≠ don\'t have to\nmustn\'t = заборонено ("You mustn\'t smoke here.")\ndon\'t have to = не обов\'язково ("You don\'t have to come.")',
            en: { title: 'Negatives — change of meaning!', text: 'mustn\'t ≠ don\'t have to\nmustn\'t = forbidden ("You mustn\'t smoke here.")\ndon\'t have to = not necessary ("You don\'t have to come.")' },
          },
          {
            type: 'table', title: 'Модальні для вираження можливості (шкала впевненості)',
            rows: [
              ['Модальне', 'Впевненість', 'Приклад'],
              ['must', '~95% (логічний висновок)', 'He must be home — the lights are on.'],
              ['should / ought to', '~80% (очікування)', 'She should be here by now.'],
              ['may', '~50% (нейтральна можливість)', 'It may rain this afternoon.'],
              ['might / could', '~30% (слабка можливість)', 'He might not come to the party.'],
              ["can't / couldn't", '~5% (майже неможливо)', "She can't be sleeping — it's only 7 pm."],
            ],
            en: { title: 'Modals for probability (certainty scale)', rows: [
              ['Modal', 'Certainty', 'Example'],
              ['must', '~95% (logical conclusion)', 'He must be home — the lights are on.'],
              ['should / ought to', '~80% (expectation)', 'She should be here by now.'],
              ['may', '~50% (neutral possibility)', 'It may rain this afternoon.'],
              ['might / could', '~30% (weak possibility)', 'He might not come to the party.'],
              ["can't / couldn't", '~5% (nearly impossible)', "She can't be sleeping — it's only 7 pm."],
            ]},
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['She can speak three languages fluently.', 'Вона може говорити трьома мовами вільно.'],
              ['Could you turn down the music, please?', 'Міг би ти зменшити музику, будь ласка?'],
              ['You may leave the room when you finish.', 'Можеш виходити, коли закінчиш. (дозвіл)'],
              ['He might not come — he seemed tired.', 'Він може не прийти — здавався втомленим.'],
              ['You must try this dish — it\'s incredible!', 'Ти повинен спробувати цю страву! (наполягання)'],
              ['I have to submit the report by Friday.', 'Мені потрібно здати звіт до п\'ятниці. (зовнішній обов\'язок)'],
              ['You should get more sleep.', 'Тобі варто більше спати. (порада)'],
              ['Would you like another cup of tea?', 'Хотів би ще чашку чаю?'],
            ],
          },
        ],
      },

      {
        id: 'conditionals', title: 'Умовні речення — B1', titleEn: 'Conditional Sentences — B1', emoji: '🔀',
        sections: [
          {
            type: 'intro',
            text: 'Conditionals (умовні речення) описують умови та їх результати. Є 4 основні типи.',
            en: { text: 'Conditionals describe conditions and their results. There are 4 main types.' },
          },
          {
            type: 'table', title: 'Типи умовних речень',
            rows: [
              ['Zero', 'Завжди правда', 'If + Present Simple → Present Simple', 'If you heat water, it boils.'],
              ['First', 'Реальна умова', 'If + Present Simple → will + V₁', 'If it rains, I will stay home.'],
              ['Second', 'Нереальна/гіпотетична', 'If + Past Simple → would + V₁', 'If I had money, I would buy a car.'],
              ['Third', 'Нереальна в минулому', 'If + Past Perfect → would have + V₃', 'If I had studied, I would have passed.'],
            ],
            en: { title: 'Types of conditional sentences', rows: [
              ['Zero', 'Always true', 'If + Present Simple → Present Simple', 'If you heat water, it boils.'],
              ['First', 'Real condition', 'If + Present Simple → will + V₁', 'If it rains, I will stay home.'],
              ['Second', 'Unreal/hypothetical', 'If + Past Simple → would + V₁', 'If I had money, I would buy a car.'],
              ['Third', 'Unreal in the past', 'If + Past Perfect → would have + V₃', 'If I had studied, I would have passed.'],
            ]},
          },
          {
            type: 'tip', title: 'Were для всіх осіб (2nd Conditional)',
            text: 'У 2nd Conditional для "I/he/she/it" формально вживається "were":\n"If I were you, I would apologize."\n"If she were here, she would know."',
            en: { title: 'Were for all persons (2nd Conditional)', text: 'In 2nd Conditional, "were" is formally used for "I/he/she/it":\n"If I were you, I would apologize."\n"If she were here, she would know."' },
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['If you study hard, you will pass.', '(1st) Якщо будеш вчитись, здаси.'],
              ['If I were rich, I would travel.', '(2nd) Якби я був багатий, я б подорожував.'],
              ['If it had rained, we would have stayed.', '(3rd) Якби йшов дощ, ми б залишились.'],
            ],
          },
        ],
      },

      {
        id: 'passive-voice', title: 'Пасивний стан — B1', titleEn: 'Passive Voice — B1', emoji: '🔄',
        sections: [
          {
            type: 'intro',
            text: 'Passive voice (пасивний стан) — дія спрямована на підмет, а не виконується ним. Структура: be + V₃ (дієприкметник минулого часу).',
            en: { text: 'Passive voice — the action is directed at the subject, not performed by it. Structure: be + V₃ (past participle).' },
          },
          {
            type: 'table', title: 'Пасивний стан у різних часах',
            rows: [
              ['Present Simple', 'am/is/are + V₃', 'The letter is written.'],
              ['Past Simple', 'was/were + V₃', 'The letter was written.'],
              ['Future Simple', 'will be + V₃', 'The letter will be written.'],
              ['Present Continuous', 'am/is/are being + V₃', 'The letter is being written.'],
              ['Present Perfect', 'have/has been + V₃', 'The letter has been written.'],
              ['Past Perfect', 'had been + V₃', 'The letter had been written.'],
            ],
            en: { title: 'Passive voice in different tenses' },
          },
          {
            type: 'tip', title: 'By — хто виконав дію',
            text: '"The book was written by Tolkien." — "by" вказує на виконавця дії (agent).',
            en: { title: 'By — who performed the action', text: '"The book was written by Tolkien." — "by" indicates the agent (doer of the action).' },
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['English is spoken worldwide.', 'Англійська мова вживається у всьому світі.'],
              ['The car was repaired yesterday.', 'Машину відремонтували вчора.'],
              ['The project will be finished soon.', 'Проєкт буде завершено незабаром.'],
            ],
          },
        ],
      },


      // ─── Additional grammar topics ───────────────────────────────
      {
        id: 'reported-speech', title: 'Непряма мова — B1', titleEn: 'Reported Speech — B1', emoji: '💬→📄',
        sections: [
          { type: 'intro', text: 'Reported speech (непряма мова) — переказ чужих слів без прямого цитування. Час дієслова зазвичай "зсувається" назад.',
            en: { text: 'Reported speech — retelling someone\'s words without direct quotation. The verb tense usually "shifts back" (backshift).' } },
          {
            type: 'table', title: 'Зсув часів',
            rows: [
              ['Пряма мова (Direct)', 'Непряма мова (Reported)'],
              ['Present Simple: "I work."', 'Past Simple: She said she worked.'],
              ['Present Continuous: "I\'m working."', 'Past Continuous: He said he was working.'],
              ['Past Simple: "I worked."', 'Past Perfect: She said she had worked.'],
              ['Present Perfect: "I have worked."', 'Past Perfect: He said he had worked.'],
              ['will: "I will help."', 'would: She said she would help.'],
              ['can: "I can swim."', 'could: He said he could swim.'],
              ['must: "I must go."', 'had to: She said she had to go.'],
            ],
            en: { title: 'Tense backshift' },
          },
          {
            type: 'table', title: 'Зміна займенників та слів',
            rows: [
              ['Пряма', 'Непряма'],
              ['I / me', 'he / she / him / her'],
              ['we / our', 'they / their'],
              ['here', 'there'],
              ['now', 'then'],
              ['today', 'that day'],
              ['yesterday', 'the day before'],
              ['tomorrow', 'the next day'],
              ['this', 'that'],
              ['these', 'those'],
            ],
            en: { title: 'Changes in pronouns and time expressions', rows: [
              ['Direct', 'Reported'],
              ['I / me', 'he / she / him / her'],
              ['we / our', 'they / their'],
              ['here', 'there'],
              ['now', 'then'],
              ['today', 'that day'],
              ['yesterday', 'the day before'],
              ['tomorrow', 'the next day'],
              ['this', 'that'],
              ['these', 'those'],
            ]},
          },
          { type: 'note', title: 'Say vs Tell',
            text: 'say + (that): He said (that) he was tired.\ntell + object: He told me (that) he was tired.',
            en: { title: 'Say vs Tell', text: 'say + (that): He said (that) he was tired.\ntell + object: He told me (that) he was tired.' },
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['"I love Paris." → She said she loved Paris.', 'Вона сказала, що любить Париж.'],
              ['"We will come." → They said they would come.', 'Вони сказали, що прийдуть.'],
              ['"I can\'t swim." → He said he couldn\'t swim.', 'Він сказав, що не вміє плавати.'],
            ],
          },
        ],
      },

      {
        id: 'gerunds-infinitives', title: 'Герундій і Інфінітив — B1', titleEn: 'Gerunds & Infinitives — B1', emoji: '🔡',
        sections: [
          { type: 'intro', text: 'Після різних дієслів вживається або герундій (V-ing) або інфінітив (to + V). Знання різниці — ключ до правильної мови.',
            en: { text: 'After different verbs, either a gerund (V-ing) or an infinitive (to + V) is used. Knowing the difference is key to speaking correctly.' } },
          {
            type: 'table', title: 'Дієслова + Герундій (V-ing)',
            rows: [
              ['Дієслово', 'Приклад'],
              ['enjoy', 'I enjoy swimming.'],
              ['mind', 'Do you mind waiting?'],
              ['avoid', 'She avoids making mistakes.'],
              ['finish', 'He finished reading the book.'],
              ['suggest', 'She suggested going by train.'],
              ['consider', 'They considered moving abroad.'],
              ['keep', 'Keep trying!'],
              ['can\'t help', 'I can\'t help laughing.'],
              ['miss', 'I miss living in the city.'],
              ['risk', 'Don\'t risk losing everything.'],
            ],
            en: { title: 'Verbs + Gerund (V-ing)' },
          },
          {
            type: 'table', title: 'Дієслова + Інфінітив (to + V)',
            rows: [
              ['Дієслово', 'Приклад'],
              ['want', 'I want to travel.'],
              ['decide', 'She decided to quit.'],
              ['plan', 'He plans to study abroad.'],
              ['hope', 'We hope to see you soon.'],
              ['agree', 'They agreed to help.'],
              ['refuse', 'She refused to answer.'],
              ['manage', 'He managed to escape.'],
              ['need', 'You need to practice more.'],
              ['seem', 'She seems to be happy.'],
              ['tend', 'People tend to forget.'],
            ],
            en: { title: 'Verbs + Infinitive (to + V)' },
          },
          {
            type: 'table', title: 'Дієслова з обома (зміна значення!)',
            rows: [
              ['Дієслово', 'Gerund (V-ing)', 'Infinitive (to V)'],
              ['remember', 'remember doing = пам\'ятаю, що робив', 'remember to do = не забути зробити'],
              ['forget', 'forget doing = не пам\'ятаю, що робив', 'forget to do = забув зробити'],
              ['stop', 'stop doing = перестати', 'stop to do = зупинитись, щоб зробити'],
              ['try', 'try doing = спробувати (може спрацює)', 'try to do = намагатись (важко)'],
            ],
            en: { title: 'Verbs with both (change of meaning!)', rows: [
              ['Verb', 'Gerund (V-ing)', 'Infinitive (to V)'],
              ['remember', 'remember doing = remember that you did', 'remember to do = not to forget to do'],
              ['forget', 'forget doing = don\'t remember doing', 'forget to do = forgot to do'],
              ['stop', 'stop doing = cease', 'stop to do = stop in order to do'],
              ['try', 'try doing = try (might work)', 'try to do = attempt (difficult)'],
            ]},
          },
          { type: 'examples', title: 'Приклади зміни значення',
            rows: [
              ['I remember meeting him.', 'Я пам\'ятаю, що зустрічав його.'],
              ['Remember to call me.', 'Не забудь мені зателефонувати.'],
              ['She stopped smoking.', 'Вона кинула курити.'],
              ['He stopped to smoke.', 'Він зупинився, щоб покурити.'],
            ],
          },
        ],
      },

      {
        id: 'quantifiers', title: 'Квантифікатори — B1', titleEn: 'Quantifiers — B1', emoji: '🔢',
        sections: [
          { type: 'intro', text: 'Квантифікатори — слова, що позначають кількість. Вибір залежить від типу іменника (злічуваний / незлічуваний) та контексту (питальне, заперечне, ствердне речення).',
            en: { text: 'Quantifiers are words that indicate quantity. The choice depends on the type of noun (countable/uncountable) and the context (question, negative, affirmative).' } },
          {
            type: 'table', title: 'Основна таблиця',
            rows: [
              ['Квантифікатор', 'Злічувані', 'Незлічувані', 'Значення'],
              ['many', '✅ (many books)', '❌', 'багато (+ заперечення/питання)'],
              ['much', '❌', '✅ (much water)', 'багато (+ заперечення/питання)'],
              ['a lot of / lots of', '✅', '✅', 'багато (+ ствердження)'],
              ['a few', '✅ (a few friends)', '❌', 'кілька (позитивне)'],
              ['few', '✅ (few friends)', '❌', 'мало, майже немає (негативне)'],
              ['a little', '❌', '✅ (a little time)', 'трохи (позитивне)'],
              ['little', '❌', '✅ (little time)', 'мало, майже немає (негативне)'],
              ['some', '✅', '✅', 'якийсь, кілька (ствердження)'],
              ['any', '✅', '✅', 'якийсь, будь-який (питання/заперечення)'],
              ['no', '✅', '✅', 'жодного'],
              ['enough', '✅', '✅', 'достатньо'],
              ['plenty of', '✅', '✅', 'більш ніж достатньо'],
            ],
            en: { title: 'Main table', rows: [
              ['Quantifier', 'Countable', 'Uncountable', 'Meaning'],
              ['many', '✅ (many books)', '❌', 'a lot of (+ negatives/questions)'],
              ['much', '❌', '✅ (much water)', 'a lot of (+ negatives/questions)'],
              ['a lot of / lots of', '✅', '✅', 'a lot of (+ affirmatives)'],
              ['a few', '✅ (a few friends)', '❌', 'some (positive — there are some)'],
              ['few', '✅ (few friends)', '❌', 'little, almost none (negative)'],
              ['a little', '❌', '✅ (a little time)', 'some (positive)'],
              ['little', '❌', '✅ (little time)', 'little, almost none (negative)'],
              ['some', '✅', '✅', 'some, a few (affirmative)'],
              ['any', '✅', '✅', 'any (questions/negatives)'],
              ['no', '✅', '✅', 'none at all'],
              ['enough', '✅', '✅', 'enough, sufficient'],
              ['plenty of', '✅', '✅', 'more than enough'],
            ]},
          },
          { type: 'tip', title: 'A few vs Few',
            text: 'A few friends came. → Кілька друзів прийшло. (позитивно — хтось є)\nFew friends came. → Мало хто з друзів прийшов. (негативно — майже ніхто)',
            en: { title: 'A few vs Few', text: 'A few friends came. → Some friends came. (positive — there are some)\nFew friends came. → Hardly any friends came. (negative — almost none)' },
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['I have a lot of work today.', 'У мене сьогодні багато роботи.'],
              ['There\'s a little milk left.', 'Залишилось трохи молока.'],
              ['I have few friends here.', 'У мене тут мало друзів.'],
              ['Do you have any questions?', 'Є якісь питання?'],
              ['There are some apples in the fridge.', 'У холодильнику є яблука.'],
            ],
          },
        ],
      },

      {
        id: 'comparatives', title: 'Ступені порівняння — A2', titleEn: 'Degrees of Comparison — A2', emoji: '📊',
        sections: [
          { type: 'intro', text: 'Прикметники мають три ступені порівняння: звичайний (positive), порівняльний (comparative) та найвищий (superlative).',
            en: { text: 'Adjectives have three degrees of comparison: positive, comparative and superlative.' } },
          {
            type: 'table', title: 'Утворення ступенів',
            rows: [
              ['Тип', 'Звичайний', 'Порівняльний', 'Найвищий'],
              ['1 склад', 'tall', 'tall-er', 'the tall-est'],
              ['1 склад + VC', 'big', 'bigg-er', 'the bigg-est'],
              ['1 склад на -e', 'nice', 'nicer', 'the nicest'],
              ['2 склади на -y', 'happy', 'happier', 'the happiest'],
              ['2+ склади', 'beautiful', 'more beautiful', 'the most beautiful'],
              ['2+ склади', 'interesting', 'more interesting', 'the most interesting'],
            ],
            en: { title: 'Forming degrees', rows: [
              ['Type', 'Positive', 'Comparative', 'Superlative'],
              ['1 syllable', 'tall', 'tall-er', 'the tall-est'],
              ['1 syllable + CVC', 'big', 'bigg-er', 'the bigg-est'],
              ['1 syllable ending -e', 'nice', 'nicer', 'the nicest'],
              ['2 syllables ending -y', 'happy', 'happier', 'the happiest'],
              ['2+ syllables', 'beautiful', 'more beautiful', 'the most beautiful'],
              ['2+ syllables', 'interesting', 'more interesting', 'the most interesting'],
            ]},
          },
          {
            type: 'table', title: 'Неправильні форми',
            rows: [
              ['Звичайний', 'Порівняльний', 'Найвищий'],
              ['good / well', 'better', 'the best'],
              ['bad / ill', 'worse', 'the worst'],
              ['much / many', 'more', 'the most'],
              ['little', 'less', 'the least'],
              ['far', 'farther / further', 'the farthest / furthest'],
              ['old', 'older / elder', 'the oldest / eldest'],
            ],
            en: { title: 'Irregular forms' },
          },
          {
            type: 'table', title: 'Структури порівняння',
            rows: [
              ['Структура', 'Значення', 'Приклад'],
              ['as ... as', 'так само як', 'She is as tall as me.'],
              ['not as ... as', 'не такий як', 'He is not as fast as before.'],
              ['comparative + than', 'порівняння', 'This is better than that.'],
              ['the + superlative + of/in', 'найвищий ступінь', 'It\'s the best in the world.'],
              ['the + comparative, the + comparative', 'чим... тим...', 'The more you read, the smarter you get.'],
            ],
            en: { title: 'Comparison structures', rows: [
              ['Structure', 'Meaning', 'Example'],
              ['as ... as', 'as ... as (equal)', 'She is as tall as me.'],
              ['not as ... as', 'not as ... as (unequal)', 'He is not as fast as before.'],
              ['comparative + than', 'comparison', 'This is better than that.'],
              ['the + superlative + of/in', 'superlative degree', 'It\'s the best in the world.'],
              ['the + comparative, the + comparative', 'the more... the more...', 'The more you read, the smarter you get.'],
            ]},
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['She is taller than her sister.', 'Вона вища за свою сестру.'],
              ['This is the most expensive hotel.', 'Це найдорожчий готель.'],
              ['He runs faster than me.', 'Він бігає швидше за мене.'],
              ['The earlier, the better.', 'Чим раніше, тим краще.'],
            ],
          },
        ],
      },

      {
        id: 'questions', title: 'Питальні речення — A2', titleEn: 'Question Sentences — A2', emoji: '❓',
        sections: [
          { type: 'intro', text: 'Порядок слів у питальних реченнях в англійській відрізняється від стверджувального. Загальне правило: допоміжне дієслово виходить на перше місце.',
            en: { text: 'Word order in English questions differs from statements. General rule: the auxiliary verb comes first.' } },
          {
            type: 'table', title: 'Типи питань',
            rows: [
              ['Тип', 'Структура', 'Приклад'],
              ['Yes/No (загальне)', 'Aux + S + V?', 'Do you work here?'],
              ['Wh- (спеціальне)', 'Wh- + Aux + S + V?', 'Where do you work?'],
              ['До підмета', 'Wh- + V (без Aux)?', 'Who called you?'],
              ['Розділове (Tag)', 'S + V, Aux + pronoun?', 'You speak English, don\'t you?'],
              ['Непряме (Indirect)', 'I wonder if/whether...', 'Can you tell me where she is?'],
            ],
            en: { title: 'Types of questions', rows: [
              ['Type', 'Structure', 'Example'],
              ['Yes/No', 'Aux + S + V?', 'Do you work here?'],
              ['Wh- question', 'Wh- + Aux + S + V?', 'Where do you work?'],
              ['Subject question', 'Wh- + V (no Aux)?', 'Who called you?'],
              ['Tag question', 'S + V, Aux + pronoun?', 'You speak English, don\'t you?'],
              ['Indirect question', 'I wonder if/whether...', 'Can you tell me where she is?'],
            ]},
          },
          {
            type: 'table', title: 'Питальні слова (Wh-)',
            rows: [
              ['Слово', 'Питання про', 'Приклад'],
              ['What', 'що / який', 'What time is it?'],
              ['Who', 'хто (підмет)', 'Who called you?'],
              ['Whom', 'кого (додаток)', 'Whom did you call?'],
              ['Which', 'який (з групи)', 'Which colour do you prefer?'],
              ['Where', 'де / куди', 'Where are you going?'],
              ['When', 'коли', 'When does it start?'],
              ['Why', 'чому', 'Why are you late?'],
              ['How', 'як', 'How are you?'],
              ['How much', 'скільки (незлічуване)', 'How much does it cost?'],
              ['How many', 'скільки (злічуване)', 'How many people came?'],
              ['How long', 'як довго', 'How long have you waited?'],
              ['How often', 'як часто', 'How often do you exercise?'],
              ['How old', 'скільки років', 'How old are you?'],
            ],
            en: { title: 'Question words (Wh-)', rows: [
              ['Word', 'Asks about', 'Example'],
              ['What', 'what / which', 'What time is it?'],
              ['Who', 'who (subject)', 'Who called you?'],
              ['Whom', 'whom (object)', 'Whom did you call?'],
              ['Which', 'which one (from a group)', 'Which colour do you prefer?'],
              ['Where', 'where / to where', 'Where are you going?'],
              ['When', 'when', 'When does it start?'],
              ['Why', 'why', 'Why are you late?'],
              ['How', 'how', 'How are you?'],
              ['How much', 'how much (uncountable)', 'How much does it cost?'],
              ['How many', 'how many (countable)', 'How many people came?'],
              ['How long', 'how long', 'How long have you waited?'],
              ['How often', 'how often', 'How often do you exercise?'],
              ['How old', 'how old', 'How old are you?'],
            ]},
          },
          { type: 'note', title: 'Непрямі питання — порядок слів ствердного!',
            text: 'Direct: Where does she live?\nIndirect: Could you tell me where she lives? (NO auxiliary!)\n\nDirect: Is he home?\nIndirect: I wonder if he is home.',
            en: { title: 'Indirect questions — affirmative word order!', text: 'Direct: Where does she live?\nIndirect: Could you tell me where she lives? (NO auxiliary!)\n\nDirect: Is he home?\nIndirect: I wonder if he is home.' },
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['What do you do for a living?', 'Чим ти займаєшся?'],
              ['Who told you that?', 'Хто тобі це сказав?'],
              ['How often do you go to the gym?', 'Як часто ти ходиш в зал?'],
              ['You\'re coming, aren\'t you?', 'Ти прийдеш, правда ж?'],
            ],
          },
        ],
      },

      {
        id: 'prepositions', title: 'Прийменники — A2', titleEn: 'Prepositions — A2', emoji: '📍',
        sections: [
          { type: 'intro', text: 'Прийменники часу та місця — одна з найпоширеніших тем для помилок. Основні: in, on, at.',
            en: { text: 'Prepositions of time and place — one of the most common areas for mistakes. The key ones: in, on, at.' } },
          {
            type: 'table', title: 'Прийменники ЧАСУ',
            rows: [
              ['Прийменник', 'Вживання', 'Приклади'],
              ['IN', 'місяці, роки, пори року, частини дня', 'in January, in 2020, in summer, in the morning'],
              ['ON', 'дні тижня, конкретні дати, свята', 'on Monday, on 5th March, on Christmas Day'],
              ['AT', 'конкретний час, свята (AT night/noon)', 'at 3 pm, at noon, at midnight, at Christmas'],
              ['FOR', 'тривалість (як довго)', 'for 2 hours, for a week, for years'],
              ['SINCE', 'з певного моменту (початок)', 'since Monday, since 2015, since morning'],
              ['DURING', 'протягом (в межах події)', 'during the lesson, during summer'],
              ['BY', 'до (крайній термін)', 'by Friday, by 5 pm, by next year'],
              ['UNTIL', 'до (тривалість до моменту)', 'until midnight, until next week'],
            ],
            en: { title: 'TIME Prepositions', rows: [
              ['Preposition', 'Usage', 'Examples'],
              ['IN', 'months, years, seasons, parts of day', 'in January, in 2020, in summer, in the morning'],
              ['ON', 'days of week, specific dates, holidays', 'on Monday, on 5th March, on Christmas Day'],
              ['AT', 'specific time, holidays (AT night/noon)', 'at 3 pm, at noon, at midnight, at Christmas'],
              ['FOR', 'duration (how long)', 'for 2 hours, for a week, for years'],
              ['SINCE', 'from a specific point (start)', 'since Monday, since 2015, since morning'],
              ['DURING', 'throughout (within an event)', 'during the lesson, during summer'],
              ['BY', 'by (deadline)', 'by Friday, by 5 pm, by next year'],
              ['UNTIL', 'until (duration up to a moment)', 'until midnight, until next week'],
            ]},
          },
          {
            type: 'table', title: 'Прийменники МІСЦЯ',
            rows: [
              ['Прийменник', 'Вживання', 'Приклади'],
              ['IN', 'всередині (простір)', 'in the room, in London, in a car'],
              ['ON', 'на поверхні', 'on the table, on the wall, on the floor'],
              ['AT', 'конкретна точка, місце призначення', 'at the bus stop, at school, at home'],
              ['ABOVE', 'вище (без контакту)', 'above the clouds'],
              ['BELOW', 'нижче', 'below the surface'],
              ['OVER', 'над (рух або покриття)', 'fly over the city, a bridge over the river'],
              ['UNDER', 'під', 'under the table, under the bridge'],
              ['BETWEEN', 'між (двома)', 'between the bank and the post office'],
              ['AMONG', 'серед (трьох і більше)', 'among the crowd'],
              ['BESIDE/NEXT TO', 'поряд', 'beside the door, next to the window'],
              ['OPPOSITE', 'навпроти', 'opposite the cinema'],
            ],
            en: { title: 'PLACE Prepositions', rows: [
              ['Preposition', 'Usage', 'Examples'],
              ['IN', 'inside (enclosed space)', 'in the room, in London, in a car'],
              ['ON', 'on a surface', 'on the table, on the wall, on the floor'],
              ['AT', 'specific point, destination', 'at the bus stop, at school, at home'],
              ['ABOVE', 'higher (no contact)', 'above the clouds'],
              ['BELOW', 'lower', 'below the surface'],
              ['OVER', 'above (movement or covering)', 'fly over the city, a bridge over the river'],
              ['UNDER', 'below', 'under the table, under the bridge'],
              ['BETWEEN', 'between (two things)', 'between the bank and the post office'],
              ['AMONG', 'among (three or more)', 'among the crowd'],
              ['BESIDE/NEXT TO', 'next to', 'beside the door, next to the window'],
              ['OPPOSITE', 'opposite, across from', 'opposite the cinema'],
            ]},
          },
          { type: 'tip', title: 'in / at / on — транспорт',
            text: 'in a car / in a taxi / in a helicopter (закрите, особисте)\non a bus / on a train / on a plane / on a boat (громадський / великий)',
            en: { title: 'in / at / on — transport', text: 'in a car / in a taxi / in a helicopter (enclosed, personal)\non a bus / on a train / on a plane / on a boat (public / large)' },
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['I was born in 1995, on a Friday.', 'Я народився у 1995, у п\'ятницю.'],
              ['The meeting is at 3 pm on Monday.', 'Зустріч о 15:00 в понеділок.'],
              ['She\'s been working here since March.', 'Вона працює тут з березня.'],
              ['The keys are on the table.', 'Ключі на столі.'],
              ['I\'ll be home by 6.', 'Я буду вдома до 6.'],
            ],
          },
        ],
      },

      // ─── Merged from exceptions2 ─────────────────────────────

      {
        id: 'phrasal-verbs', title: 'Фразові дієслова 150 — A1–C1', titleEn: 'Phrasal Verbs 150 — A1–C1', emoji: '🔗',
        sections: [
          { type: 'intro', text: 'Phrasal verbs — дієслова + прийменник/прислівник. Їх значення часто не можна передбачити. 150 найуживаніших розподілено за рівнем.',
            en: { text: 'Phrasal verbs — verb + preposition/adverb. Their meaning is often unpredictable. The 150 most common ones are arranged by level.' } },
          {
            type: 'table', title: 'A1–A2 — Базові (1–25)',
            rows: [
              ['Фразове дієслово', 'Значення', 'Приклад'],
              ['come in', 'входити', 'Come in, please!'],
              ['come back', 'повернутись', "She'll come back soon."],
              ['get up', 'вставати', 'I get up at 7 every day.'],
              ['go out', 'виходити / гаснути', "Let's go out tonight."],
              ['go back', 'повернутись', 'We went back home.'],
              ['give back', 'повернути', 'Give my book back!'],
              ['look at', 'дивитись на', 'Look at this picture!'],
              ['look for', 'шукати', "I'm looking for my keys."],
              ['pick up', 'підняти / підібрати / навчитись', 'Pick it up from the floor.'],
              ['put down', 'покласти / припинити', 'Put the phone down.'],
              ['put on', 'одягнути / увімкнути', 'Put on your coat.'],
              ['take off', 'зняти / злетіти', 'Take off your shoes. / The plane takes off.'],
              ['turn on', 'увімкнути', 'Turn on the light.'],
              ['turn off', 'вимкнути', 'Turn off the TV.'],
              ['sit down', 'сісти', 'Please sit down.'],
              ['stand up', 'встати', 'Stand up, please.'],
              ['slow down', 'уповільнитись', 'Slow down, you drive too fast!'],
              ['write down', 'записати', 'Write down the address.'],
              ['grow up', 'виростати', 'Where did you grow up?'],
              ['wake up', 'прокинутись / розбудити', 'I wake up at 6.'],
              ['go away', 'іди геть / поїхати', "Go away! / We're going away next week."],
              ['get on', 'сісти в транспорт / поладнати', 'Get on the bus.'],
              ['get off', 'вийти з транспорту', 'Get off at the next stop.'],
              ['hurry up', 'поспішати', 'Hurry up or we\'ll be late!'],
              ['look up', 'знайти в словнику', 'Look it up in a dictionary.'],
            ],
            en: { title: 'A1–A2 — Basic (1–25)' },
          },
          {
            type: 'table', title: 'B1–B2 — Середній (26–110)',
            rows: [
              ['Фразове дієслово', 'Значення', 'Приклад'],
              ['break down', 'зламатись / розплакатись', 'The car broke down on the highway.'],
              ['break up', 'розлучитись / розпастись', 'They broke up last year.'],
              ['bring up', 'виховувати / порушити тему', 'She brought up an interesting point.'],
              ['call off', 'скасувати', 'They called off the meeting.'],
              ['calm down', 'заспокоїтись', 'Calm down, everything is fine.'],
              ['carry on', 'продовжувати', 'Carry on with your work.'],
              ['catch up (with)', 'наздогнати / надолужити', "I need to catch up with the news."],
              ['check in', 'зареєструватись (готель/рейс)', 'We checked in at the hotel.'],
              ['check out', 'виїхати / перевірити', 'Check out this article!'],
              ['cheer up', 'розвеселитись / розвеселити', "Cheer up! It's not so bad."],
              ['come across', 'натрапити на / справити враження', 'I came across an old photo.'],
              ['come along', 'приєднатись / просуватись', 'How is the project coming along?'],
              ['come out', 'вийти / стати відомим', 'The truth finally came out.'],
              ['come up with', 'придумати / запропонувати', 'She came up with a great idea.'],
              ['count on', 'розраховувати на', 'You can count on me.'],
              ['cross out', 'закреслити', 'Cross out the wrong answer.'],
              ['cut down on', 'скоротити споживання', 'You should cut down on sugar.'],
              ['cut off', 'відрізати / відключити', 'We were cut off during the call.'],
              ['deal with', 'справлятись з', 'How do you deal with stress?'],
              ['drop in', 'зайти ненадовго', 'Drop in anytime you want.'],
              ['drop off', 'підвезти / заснути', "I'll drop you off at the station."],
              ['drop out', 'кинути навчання/гонку', 'He dropped out of university.'],
              ['end up', 'опинитись / закінчити несподівано', 'We ended up staying all night.'],
              ['fall apart', 'розвалитись', 'The plan fell apart quickly.'],
              ['fall behind', 'відставати', "Don't fall behind with your studies."],
              ['fall for', 'закохатись / піддатись обману', 'She fell for him immediately.'],
              ['fall out (with)', 'посваритись', 'They fell out over money.'],
              ['fall through', 'зірватись (про план)', 'The deal fell through at the last moment.'],
              ['figure out', 'зрозуміти / вирішити', "I can't figure out this problem."],
              ['fill in', 'заповнити бланк', 'Fill in the form, please.'],
              ['fill up', 'наповнити повністю', 'Fill up the tank.'],
              ['find out', 'дізнатись', 'How did you find out?'],
              ['fit in', 'вписатись в компанію', 'It takes time to fit in at a new school.'],
              ['get along (with)', 'ладнати з кимось', 'We get along really well.'],
              ['get away', 'тікати / вирватись на відпочинок', "We need to get away for the weekend."],
              ['get back (to)', 'повернутись / відповісти пізніше', "I'll get back to you soon."],
              ['get by', 'якось зводити кінці з кінцями', "It's hard to get by on this salary."],
              ['get over', 'пережити / подолати', 'It takes time to get over a breakup.'],
              ['get rid of', 'позбутись', 'I need to get rid of this junk.'],
              ['get through', 'пережити / додзвонитись', 'How did you get through that year?'],
              ['give away', 'роздати / видати секрет', 'She gave away the ending.'],
              ['give in', 'здатись / поступитись', 'He finally gave in.'],
              ['give up', 'здатись / кинути звичку', 'Never give up on your dreams.'],
              ['go ahead', 'продовжуй / будь ласка', 'Go ahead, I\'m listening.'],
              ['go off', 'спрацювати / зіпсуватись / вибухнути', 'The alarm went off at 6.'],
              ['go on', 'продовжувати / відбуватись', 'Go on, tell me more.'],
              ['go through', 'пережити / переглянути', 'She went through a difficult time.'],
              ['hand in', 'здати роботу/завдання', 'Hand in your assignments by Friday.'],
              ['hand out', 'роздати', 'The teacher handed out the worksheets.'],
              ['hang on', 'зачекати / триматись', "Hang on, I'll be right back."],
              ['join in', 'приєднатись', 'Everyone joined in the celebration.'],
              ['keep up with', 'не відставати від', "It's hard to keep up with the news."],
              ['let down', 'підвести', "Don't let me down."],
              ['look after', 'доглядати за', 'Can you look after my cat?'],
              ['look forward to', 'чекати з нетерпінням', "I'm looking forward to seeing you."],
              ['look into', 'розслідувати / вивчити', 'The police are looking into the case.'],
              ['look out', 'бути обережним', 'Look out! There\'s a car coming!'],
              ['make up', 'помиритись / придумати / накласти макіяж', 'They made up after the fight.'],
              ['move in', 'в\'їхати', 'We moved into the new house last week.'],
              ['move on', 'рухатись далі / забути минуле', "It's time to move on."],
              ['pass away', 'померти (евфемізм)', 'His grandfather passed away last year.'],
              ['pass out', 'знепритомніти', 'She passed out from the heat.'],
              ['pay back', 'повернути борг', "I'll pay you back next week."],
              ['point out', 'вказати на', 'He pointed out the mistake.'],
              ['pull out', 'виїхати / вийти з угоди', 'They pulled out of the deal.'],
              ['put off', 'відкладати', 'Stop putting things off!'],
              ['put up with', 'терпіти', "I can't put up with this noise."],
              ['run into', 'випадково зустріти', 'I ran into my teacher yesterday.'],
              ['run out of', 'вичерпати запаси', 'We ran out of milk.'],
              ['set up', 'налаштувати / заснувати', 'She set up her own company.'],
              ['show off', 'хвалитись', "He's just showing off."],
              ['sign up (for)', 'записатись / зареєструватись', 'Sign up for the newsletter.'],
              ['sort out', 'вирішити проблему / розібратись', "Let's sort this out together."],
              ['speak up', 'говорити голосніше / висловитись', 'Please speak up, I can\'t hear you.'],
              ['stand out', 'виділятись / бути помітним', 'She always stands out in a crowd.'],
              ['stay up', 'не лягати спати до пізна', 'We stayed up talking all night.'],
              ['stick to', 'дотримуватись / не відхилятись', 'Stick to the plan.'],
              ['take on', 'взяти на роботу / взяти на себе', 'She took on too much work.'],
              ['take over', 'перейняти / захопити', 'He took over the company.'],
              ['think over', 'добре обдумати', "I'll think it over and let you know."],
              ['throw away', 'викинути', "Don't throw away old letters."],
              ['turn down', 'відмовити / зменшити гучність', 'He turned down the offer.'],
              ['turn out', 'виявитись / вийти в результаті', 'It turned out to be a great idea.'],
              ['turn up', 'з\'явитись / збільшити гучність', 'He turned up two hours late.'],
              ['work out', 'тренуватись / вийти добре / вирахувати', 'It all worked out in the end.'],
            ],
            en: { title: 'B1–B2 — Intermediate (26–110)' },
          },
          {
            type: 'table', title: 'B2–C1 — Просунутий (111–150)',
            rows: [
              ['Фразове дієслово', 'Значення', 'Приклад'],
              ['blow up', 'вибухнути / надути / збільшити фото', 'The building blew up.'],
              ['bring about', 'спричинити / призвести до', 'What brought about this change?'],
              ['brush up (on)', 'освіжити знання', 'I need to brush up on my French.'],
              ['burn out', 'вигоріти фізично/емоційно', 'She burned out after years of overwork.'],
              ['call back', 'передзвонити', "I'll call you back in 10 minutes."],
              ['call up', 'викликати на службу / дзвонити', 'He was called up to the army.'],
              ['clear up', 'прояснитись / прибрати безлад', 'The weather cleared up after lunch.'],
              ['close down', 'закрити бізнес назавжди', 'The factory closed down last year.'],
              ['come about', 'статись / виникнути', 'How did this situation come about?'],
              ['come forward', 'вийти з ініціативою / заявити себе', 'A witness came forward with new information.'],
              ['cut out', 'вирізати / кинути звичку', "Cut out sugar if you want to lose weight."],
              ['draw up', 'скласти документ/план', "Let's draw up a contract."],
              ['fix up', 'відремонтувати / організувати зустріч', "We need to fix up the apartment."],
              ['hand over', 'передати / здатись владі', 'Hand over the documents.'],
              ['hold back', 'стримувати / приховувати', "Don't hold back — say what you think."],
              ['hold up', 'затримати / пограбувати / витримати', 'What held you up?'],
              ['lay off', 'звільнити через скорочення', 'The company laid off 200 workers.'],
              ['let in', 'впустити / посвятити в таємницю', "Don't let him in on the secret."],
              ['let out', 'випустити / здати в оренду', "We're letting out the spare room."],
              ['log in / log out', 'увійти / вийти з системи', 'Log in with your username.'],
              ['make out', 'розібрати написане / розуміти', "I can't make out what he's saying."],
              ['make up for', 'компенсувати / надолужити', "I'll make up for the lost time."],
              ['open up', 'відкритись / розкритись', 'She finally opened up about her feelings.'],
              ['pay off', 'окупитись / виплатити повністю', 'Hard work always pays off.'],
              ['pull off', 'вдатись (про щось складне)', 'She pulled off an amazing performance.'],
              ['put away', 'прибрати на місце / відкласти гроші', 'Put your toys away.'],
              ['put out', 'загасити / видати публікацію', 'Firefighters put out the blaze.'],
              ['put up', 'розмістити / підняти / прийняти гостя', 'Can you put me up for the night?'],
              ['rule out', 'виключити можливість', 'The doctor ruled out pneumonia.'],
              ['run away', 'тікати / уникати проблем', 'You can\'t run away from your problems.'],
              ['set off', 'вирушити в дорогу / запустити (сигналізацію)', 'We set off at dawn.'],
              ['set out', 'вирушити / викласти детально план', 'He set out his plans clearly.'],
              ['settle down', 'осісти / заспокоїтись', 'He settled down in the countryside.'],
              ['settle for', 'погодитись на менше', "Don't settle for second best."],
              ['take back', 'повернути / взяти слова назад', 'I take back what I said.'],
              ['take up', 'зайнятись чимось / займати місце', 'She took up yoga last year.'],
              ['tidy up', 'прибрати / навести лад', 'Tidy up your room before leaving.'],
              ['try on', 'приміряти (одяг)', 'Can I try on this jacket?'],
              ['try out', 'випробувати / спробувати', "Let's try out the new restaurant."],
              ['wrap up', 'загорнути / завершити / одягтись тепліше', "Let's wrap up the meeting."],
            ],
            en: { title: 'B2–C1 — Advanced (111–150)' },
          },
        ],
      },

      {
        id: 'confusing-words', title: 'Слова, які плутають — B1', titleEn: 'Confusing Words — B1', emoji: '🤔',
        sections: [
          { type: 'intro', text: 'Деякі англійські слова мають схоже звучання або значення, але використовуються по-різному. Це типові помилки навіть досвідчених учнів.',
            en: { text: 'Some English words have a similar sound or meaning but are used differently. These are typical mistakes even for experienced learners.' } },
          {
            type: 'table', title: 'Make vs Do',
            rows: [
              ['MAKE (створити, виготовити)', 'DO (виконати, займатись)'],
              ['make a mistake', 'do homework / work'],
              ['make a decision', 'do business'],
              ['make money', 'do exercise / sport'],
              ['make a plan / list', 'do the dishes / cleaning'],
              ['make coffee / tea / food', 'do someone a favour'],
              ['make an effort', 'do well / badly'],
              ['make friends', 'do research'],
            ],
            en: { title: 'Make vs Do', rows: [
              ['MAKE (create, produce)', 'DO (perform, carry out)'],
              ['make a mistake', 'do homework / work'],
              ['make a decision', 'do business'],
              ['make money', 'do exercise / sport'],
              ['make a plan / list', 'do the dishes / cleaning'],
              ['make coffee / tea / food', 'do someone a favour'],
              ['make an effort', 'do well / badly'],
              ['make friends', 'do research'],
            ]},
          },
          {
            type: 'table', title: 'Say vs Tell vs Speak vs Talk',
            rows: [
              ['Слово', 'Структура', 'Приклад'],
              ['SAY', 'say + (that) / say + quote', 'He said he was tired. / "Hello," she said.'],
              ['TELL', 'tell + OBJECT + (that)', 'She told me the truth.'],
              ['SPEAK', 'speak (to sb) / speak + мова', 'Can I speak to the manager? / She speaks French.'],
              ['TALK', 'talk (to/with sb) about sth', 'We need to talk. / Let\'s talk about it.'],
            ],
            en: { title: 'Say vs Tell vs Speak vs Talk' },
          },
          {
            type: 'table', title: 'Affect vs Effect',
            rows: [
              ['AFFECT (дієслово)', 'вплинути на', 'Stress affects your health.'],
              ['EFFECT (іменник)', 'ефект, результат', 'The effects of stress are serious.'],
            ],
            en: { title: 'Affect vs Effect', rows: [
              ['AFFECT (verb)', 'to influence', 'Stress affects your health.'],
              ['EFFECT (noun)', 'effect, result', 'The effects of stress are serious.'],
            ]},
          },
          {
            type: 'table', title: 'Infer vs Imply',
            rows: [
              ['IMPLY (мовець)', 'натякати, мати на увазі', 'Are you implying that I\'m wrong?'],
              ['INFER (слухач)', 'робити висновок', 'What can we infer from this data?'],
            ],
            en: { title: 'Infer vs Imply', rows: [
              ['IMPLY (speaker)', 'to hint, to suggest', 'Are you implying that I\'m wrong?'],
              ['INFER (listener)', 'to draw a conclusion', 'What can we infer from this data?'],
            ]},
          },
          {
            type: 'table', title: 'Other Common Confusions',
            rows: [
              ['Слова', 'Різниця'],
              ['lend vs borrow', 'lend = дати позику (I lend you); borrow = взяти позику (I borrow from you)'],
              ['bring vs take', 'bring = принести (до мовця); take = взяти (від мовця)'],
              ['rise vs raise', 'rise = підніматись (само); raise = піднімати (когось/щось)'],
              ['lie vs lay', 'lie = лежати (no object); lay = класти (needs object)'],
              ['fewer vs less', 'fewer = злічувані (fewer people); less = незлічувані (less water)'],
              ['who vs whom', 'who = підмет (Who called?); whom = додаток (Whom did you call?)'],
              ['practice vs practise', 'practice (noun, Brit); practise (verb, Brit); practice = обидва (Am)'],
            ],
            en: { title: 'Other Common Confusions', rows: [
              ['Words', 'Difference'],
              ['lend vs borrow', 'lend = give a loan (I lend you); borrow = take a loan (I borrow from you)'],
              ['bring vs take', 'bring = carry towards speaker; take = carry away from speaker'],
              ['rise vs raise', 'rise = go up (intransitive); raise = lift something (transitive)'],
              ['lie vs lay', 'lie = to recline (no object); lay = to place (needs object)'],
              ['fewer vs less', 'fewer = countable (fewer people); less = uncountable (less water)'],
              ['who vs whom', 'who = subject (Who called?); whom = object (Whom did you call?)'],
              ['practice vs practise', 'practice (noun, Brit); practise (verb, Brit); practice = both (Am)'],
            ]},
          },
          {
            type: 'examples', title: 'Приклади в контексті',
            rows: [
              ['She made a huge mistake. / I did the dishes after dinner.', 'make a mistake / do the dishes'],
              ['He said nothing. / She told me the truth. / Can I speak to the manager?', 'say / tell / speak'],
              ['Cold weather affects your mood. / The effect was immediate.', 'affect (дієслово) / effect (іменник)'],
              ['Can I borrow your pen? / I\'ll lend you mine.', 'borrow (від) / lend (комусь)'],
              ['Bring your laptop to the meeting. / Take this letter to the post office.', 'bring (сюди) / take (туди)'],
              ['Prices are rising. / They raised their salaries.', 'rise (само) / raise (хтось)'],
              ['There are fewer cars on the road. / There is less traffic today.', 'fewer (злічувані) / less (незлічувані)'],
              ['Who called? / To whom did you speak?', 'who (підмет) / whom (додаток)'],
            ],
          },
        ],
      },

      {
        id: 'british-american', title: 'British vs American English — B1', emoji: '🌐',
        sections: [
          { type: 'intro', text: 'Британська та американська англійська мають відмінності у написанні, вимові та лексиці. Обидва варіанти правильні — важливо бути послідовним.',
            en: { text: 'British and American English differ in spelling, pronunciation and vocabulary. Both variants are correct — consistency is what matters.' } },
          {
            type: 'table', title: 'Відмінності в написанні',
            en: { title: 'Spelling Differences' },
            rows: [
              ['British', 'American', 'Переклад'],
              ['colour', 'color', 'колір'],
              ['favourite', 'favorite', 'улюблений'],
              ['honour', 'honor', 'честь'],
              ['centre', 'center', 'центр'],
              ['theatre', 'theater', 'театр'],
              ['travelling', 'traveling', 'подорожуючи'],
              ['organised', 'organized', 'організований'],
              ['defence', 'defense', 'захист'],
              ['practise (v)', 'practice (v)', 'практикувати'],
              ['programme', 'program', 'програма'],
              ['cheque', 'check', 'чек'],
            ],
          },
          {
            type: 'table', title: 'Відмінності у лексиці',
            en: { title: 'Vocabulary Differences' },
            rows: [
              ['British', 'American', 'Переклад'],
              ['flat', 'apartment', 'квартира'],
              ['lift', 'elevator', 'ліфт'],
              ['underground / tube', 'subway / metro', 'метро'],
              ['motorway', 'freeway / highway', 'автострада'],
              ['autumn', 'fall', 'осінь'],
              ['holiday', 'vacation', 'відпустка'],
              ['rubbish', 'garbage / trash', 'сміття'],
              ['biscuit', 'cookie', 'печиво'],
              ['chips', 'French fries', 'картопля-фрі'],
              ['crisps', 'chips', 'чіпси'],
              ['mobile (phone)', 'cell phone', 'мобільний'],
              ['petrol', 'gas', 'бензин'],
              ['shop', 'store', 'магазин'],
              ['post', 'mail', 'пошта'],
              ['football', 'soccer', 'футбол'],
              ['jumper / pullover', 'sweater', 'светр'],
              ['trousers', 'pants', 'штани'],
            ],
          },
          {
            type: 'table', title: 'Ще відмінності у лексиці',
            en: { title: 'More Vocabulary Differences' },
            rows: [
              ['British', 'American', 'Переклад'],
              ['queue', 'line', 'черга'],
              ['pavement', 'sidewalk', 'тротуар'],
              ['boot (of a car)', 'trunk', 'багажник'],
              ['bonnet (of a car)', 'hood', 'капот'],
              ['lorry', 'truck', 'вантажівка'],
              ['torch', 'flashlight', 'ліхтарик'],
              ['tap', 'faucet', 'кран (водопровідний)'],
              ['dustbin / bin', 'trash can / garbage can', 'смітник'],
              ['flat tyre', 'flat tire', 'спущена шина'],
              ['wardrobe', 'closet', 'шафа для одягу'],
              ['ground floor', 'first floor', 'перший поверх'],
              ['first floor', 'second floor', 'другий поверх'],
            ],
          },
          {
            type: 'table', title: 'Відмінності в граматиці',
            en: { title: 'Grammar Differences' },
            rows: [
              ['British', 'American'],
              ['Have you eaten yet? (Present Perfect)', 'Did you eat yet? (Past Simple — also common)'],
              ['I\'ve just seen him. (Present Perfect)', 'I just saw him. (Past Simple — more natural)'],
              ['at weekends', 'on weekends'],
              ['in the street', 'on the street'],
              ['different from / to', 'different from / than'],
            ],
          },
          {
            type: 'examples', title: 'Приклади в реченнях',
            en: { title: 'Examples in Sentences' },
            rows: [
              ['"Take the lift to the 3rd floor." (BrE) / "Take the elevator." (AmE)', 'lift = elevator = ліфт'],
              ['"There\'s a long queue outside." (BrE) / "There\'s a long line outside." (AmE)', 'queue = line = черга'],
              ['"I put the bags in the boot." (BrE) / "...in the trunk." (AmE)', 'boot = trunk = багажник'],
              ['"It\'s on the ground floor." (BrE) = "It\'s on the first floor." (AmE)', 'Увага: поверхи відраховуються по-різному!'],
              ['"I\'ve already done it." (BrE) / "I already did it." (AmE)', 'Present Perfect (BrE) vs Past Simple (AmE)'],
            ],
          },
          {
            type: 'tip', title: 'Яку обирати?',
            text: 'Обидва варіанти правильні. Головне — послідовність у межах одного тексту чи іспиту. IELTS/Cambridge — зазвичай British. TOEFL — зазвичай American.',
            en: { title: 'Which to choose?', text: 'Both variants are correct. Consistency within a text or exam is what matters. IELTS/Cambridge — usually British. TOEFL — usually American.' },
          },
        ],
      },

      {
        id: 'false-friends', title: 'False Friends — B1', emoji: '🚫',
        sections: [
          { type: 'intro', text: 'False friends — слова, що схожі на українські або інші мови, але мають інше значення. Дуже поширене джерело помилок!',
            en: { text: 'False friends — words that look similar to Ukrainian (or other languages) but have a different meaning. A very common source of mistakes!' } },
          {
            type: 'table', title: 'Типові помилки (EN ↔ UA)',
            rows: [
              ['Англійське слово', 'Здається означає', 'Насправді означає'],
              ['magazine', 'магазин', 'журнал (shop = магазин)'],
              ['fabric', 'фабрика', 'тканина (factory = фабрика)'],
              ['academic', 'академік', 'академічний / університетський'],
              ['sympathetic', 'симпатичний', 'співчутливий, розуміючий (good-looking = симпатичний)'],
              ['actual', 'актуальний', 'справжній, реальний (relevant = актуальний)'],
              ['accurate', 'акуратний', 'точний, правильний (neat/tidy = акуратний)'],
              ['lunatic', 'лунатик', 'божевільний (sleepwalker = лунатик)'],
              ['decade', 'декада', '10 років (ten days = десять днів)'],
              ['data', 'дата', 'дані (date = дата)'],
              ['cabinet', 'кабінет', 'шафа / уряд (office/study = кабінет)'],
              ['angina', 'ангіна', 'стенокардія (tonsillitis = ангіна)'],
              ['disco', 'диско', 'нічний клуб / дискотека (disc = диск)'],
              ['intelligent', 'інтелігентний', 'розумний, кмітливий (cultured/refined = інтелігентний)'],
              ['replica', 'репліка', 'точна копія (remark = репліка)'],
              ['receipt', 'рецепт', 'квитанція/чек (recipe = рецепт)'],
            ],
          },
          {
            type: 'examples', title: 'Хибні друзі в реченнях',
            rows: [
              ['I bought a magazine at the newsstand.', '❌ "магазин" → ✅ журнал'],
              ['The dress is made of a delicate fabric.', '❌ "фабрика" → ✅ тканина'],
              ['She was very sympathetic when I told her my problems.', '❌ "симпатична" → ✅ співчутлива'],
              ['That story is not accurate — check the facts.', '❌ "акуратна" → ✅ точна'],
              ['The data shows a clear trend.', '❌ "дата" → ✅ дані'],
              ['This is an actual problem, not a theoretical one.', '❌ "актуальна" → ✅ реальна, справжня'],
              ['Ask the chef for the recipe. Keep the receipt for returns.', 'recipe = рецепт / receipt = чек'],
              ['He spent a decade working abroad.', '❌ "декада (10 днів)" → ✅ десятиліття'],
            ],
          },
          {
            type: 'tip', title: 'Як запам\'ятати',
            text: 'Асоціюй з правильним значенням, а не з українським звучанням:\n"magazine" → mag (скорочення) = журнал\n"fabric" → fabric softener (пом\'якшувач тканини) — на упаковці!\n"receipt" → receive (отримати) → те що отримуєш після оплати = чек',
            en: { title: 'How to remember', text: 'Associate with the correct meaning, not the Ukrainian-sounding one:\n"magazine" → mag (abbreviation) = journal/periodical\n"fabric" → fabric softener — on the label of your laundry product!\n"receipt" → receive → what you get after paying = receipt (not check)' },
          },
        ],
      },

      {
        id: 'numbers-determiners', title: 'Числівники і Детермінери — A2', titleEn: 'Numbers & Determiners — A2', emoji: '🔢',
        sections: [
          {
            type: 'intro',
            text: 'Числівники (Cardinals/Ordinals) та детермінери (a/an/the/this/that/some/any/each/every) — слова що визначають кількість та конкретність іменника.',
            en: { text: 'Numbers (Cardinals/Ordinals) and determiners (a/an/the/this/that/some/any/each/every) — words that determine the quantity and specificity of a noun.' },
          },
          {
            type: 'table', title: 'Кількісні vs Порядкові',
            rows: [
              ['Кількісний (Cardinal)', 'Порядковий (Ordinal)', 'Вживання'],
              ['one', 'first (1st)', 'один / перший'],
              ['two', 'second (2nd)', 'два / другий'],
              ['three', 'third (3rd)', 'три / третій'],
              ['four', 'fourth (4th)', 'чотири / четвертий'],
              ['twenty', 'twentieth (20th)', 'двадцять / двадцятий'],
              ['hundred', 'hundredth (100th)', 'сто / сотий'],
            ],
            en: { title: 'Cardinal vs Ordinal numbers', rows: [
              ['Cardinal Number', 'Ordinal Number', 'Usage'],
              ['one', 'first (1st)', 'one / first'],
              ['two', 'second (2nd)', 'two / second'],
              ['three', 'third (3rd)', 'three / third'],
              ['four', 'fourth (4th)', 'four / fourth'],
              ['twenty', 'twentieth (20th)', 'twenty / twentieth'],
              ['hundred', 'hundredth (100th)', 'hundred / hundredth'],
            ]},
          },
          {
            type: 'table', title: 'Детермінери',
            rows: [
              ['Детермінер', 'Вживання', 'Приклад'],
              ['this / these', 'ближчий предмет', 'This book / These books'],
              ['that / those', 'дальший предмет', 'That car / Those cars'],
              ['each', 'кожен (окремо)', 'Each student has a book.'],
              ['every', 'кожен (разом)', 'Every day is different.'],
              ['both', 'обидва', 'Both answers are correct.'],
              ['either', 'будь-який з двох', 'Either day works for me.'],
              ['neither', 'жоден з двох', 'Neither option is perfect.'],
              ['all', 'всі', 'All students passed.'],
              ['no', 'жодного', 'No time to waste.'],
            ],
            en: { title: 'Determiners', rows: [
              ['Determiner', 'Usage', 'Example'],
              ['this / these', 'nearer object', 'This book / These books'],
              ['that / those', 'farther object', 'That car / Those cars'],
              ['each', 'each (individually)', 'Each student has a book.'],
              ['every', 'every (as a group)', 'Every day is different.'],
              ['both', 'both', 'Both answers are correct.'],
              ['either', 'either of two', 'Either day works for me.'],
              ['neither', 'neither of two', 'Neither option is perfect.'],
              ['all', 'all', 'All students passed.'],
              ['no', 'none at all', 'No time to waste.'],
            ]},
          },
          {
            type: 'tip', title: 'Each vs Every — тонка різниця',
            text: 'EACH → думаємо про кожного окремо: "Each student got a different task."\nEVERY → думаємо про групу в цілому: "Every student passed the exam."\n\nTільки EVERY з частотою: "every day / every week" (не "each day" — хоча обидва можливі)\nТільки EACH з двома: "each of the two candidates" (not "every of the two")',
            en: { title: 'Each vs Every — subtle difference', text: 'EACH → we think of each individual separately: "Each student got a different task."\nEVERY → we think of the group as a whole: "Every student passed the exam."\n\nOnly EVERY with frequency: "every day / every week"\nOnly EACH with two: "each of the two candidates" (not "every of the two")' },
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['She finished third in the race.', 'Вона фінішувала третьою. (ordinal)'],
              ['Each child received a different gift.', 'Кожна дитина отримала різний подарунок. (окремо)'],
              ['Every student in the class passed.', 'Усі учні в класі склали. (група)'],
              ['Neither answer was correct.', 'Жодна з двох відповідей не була правильною.'],
              ['Both solutions work, but this one is faster.', 'Обидва рішення працюють, але це — швидше.'],
              ['Is this your bag or that one?', 'Це твоя сумка чи та?'],
              ['Either day is fine — Monday or Tuesday.', 'Будь-який день підходить — понеділок або вівторок.'],
              ['All students must submit their essays by Friday.', 'Усі студенти мають здати есе до п\'ятниці.'],
            ],
          },
        ],
      },

      {
        id: 'reported-questions', title: 'Непряме питання — B1', titleEn: 'Reported Questions — B1', emoji: '❓📄',
        sections: [
          {
            type: 'intro',
            text: 'Непрямі питання (Reported Questions) вставляються в речення без допоміжного дієслова та з прямим порядком слів.',
            en: { text: 'Reported questions are embedded in a sentence without the auxiliary verb and use affirmative word order.' },
          },
          {
            type: 'table', title: 'Структура непрямих питань',
            rows: [
              ['Тип', 'Пряме питання', 'Непряме питання'],
              ['Yes/No', 'Is she home?', 'He asked if/whether she was home.'],
              ['Wh-', 'Where does he live?', 'She asked where he lived.'],
              ['How', 'How much does it cost?', 'I wondered how much it cost.'],
              ['What time', 'What time does it start?', 'He asked what time it started.'],
            ],
            en: { title: 'Structure of reported questions', rows: [
              ['Type', 'Direct question', 'Reported question'],
              ['Yes/No', 'Is she home?', 'He asked if/whether she was home.'],
              ['Wh-', 'Where does he live?', 'She asked where he lived.'],
              ['How', 'How much does it cost?', 'I wondered how much it cost.'],
              ['What time', 'What time does it start?', 'He asked what time it started.'],
            ]},
          },
          {
            type: 'note', title: 'Зміни при непрямому питанні',
            text: '1. Немає допоміжного (do/does/did)\n2. Прямий порядок слів (Subject + Verb)\n3. Час зсувається назад (як у reported speech)\n4. Yes/No → if/whether',
            en: { title: 'Changes in reported questions', text: '1. No auxiliary verb (do/does/did)\n2. Affirmative word order (Subject + Verb)\n3. Tense shifts back (as in reported speech)\n4. Yes/No questions → if/whether' },
          },
          {
            type: 'table', title: 'Типова помилка — зайвий do/does/did',
            rows: [
              ['❌ Неправильно', '✅ Правильно'],
              ['She asked where did I live.', 'She asked where I lived.'],
              ['He wanted to know what did she want.', 'He wanted to know what she wanted.'],
              ['I wondered why did he leave.', 'I wondered why he had left.'],
              ['Can you tell me where is the station?', 'Can you tell me where the station is?'],
            ],
            en: { title: 'Common mistake — extra do/does/did' },
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['"Where are you going?" → He asked where I was going.', 'Він запитав, куди я йшов.'],
              ['"Do you speak French?" → She asked if I spoke French.', 'Вона запитала, чи я говорю французькою.'],
              ['"What time is it?" → I asked what time it was.', 'Я запитав, котра година.'],
              ['"Are you hungry?" → She asked if I was hungry.', 'Вона запитала, чи я голодний.'],
              ['"Why did you do that?" → She asked why I had done that.', 'Вона запитала, чому я це зробив.'],
              ['"How long have you been waiting?" → He asked how long I had been waiting.', 'Він запитав, як довго я чекав.'],
              ['Can you tell me where the nearest bank is?', 'Непряме питання в політ. проханні (порядок слів — прямий!)'],
            ],
          },
        ],
      },

      {
        id: 'wish-would-rather', title: 'Wish / Would rather — B2', emoji: '🌠',
        sections: [
          {
            type: 'intro',
            text: 'Wish та Would rather виражають бажання щодо нереальних або небажаних ситуацій.',
            en: { text: 'Wish and Would rather express desires about unreal or unwanted situations.' },
          },
          {
            type: 'table', title: 'Структури з Wish',
            rows: [
              ['Час', 'Структура', 'Значення', 'Приклад'],
              ['Теперішнє/майбутнє', 'wish + Past Simple', 'Жаль що зараз не так', 'I wish I knew the answer.'],
              ['Минуле', 'wish + Past Perfect', 'Жаль що в минулому не так', 'I wish I had studied harder.'],
              ['Майбутнє (скарга)', 'wish + would + V', 'Хотів би щоб хтось щось зробив', 'I wish you would stop smoking.'],
              ['Постійний стан', 'wish + could', 'Жаль що не вмію', 'I wish I could fly.'],
            ],
            en: { title: 'Wish structures', rows: [
              ['Time', 'Structure', 'Meaning', 'Example'],
              ['Present/future', 'wish + Past Simple', 'Regret about now', 'I wish I knew the answer.'],
              ['Past', 'wish + Past Perfect', 'Regret about the past', 'I wish I had studied harder.'],
              ['Future (complaint)', 'wish + would + V', 'Want someone to do something', 'I wish you would stop smoking.'],
              ['Permanent state', 'wish + could', 'Regret about inability', 'I wish I could fly.'],
            ]},
          },
          {
            type: 'table', title: 'Would rather',
            rows: [
              ['Структура', 'Значення', 'Приклад'],
              ["would rather + V₁ (than)", 'Надаю перевагу', "I'd rather stay home."],
              ["would rather + V than + V", 'Краще X ніж Y', "I'd rather walk than drive."],
              ["would rather + S + Past Simple", 'Хотів би щоб хтось зробив', "I'd rather you didn't tell anyone."],
            ],
            en: { title: 'Would rather', rows: [
              ['Structure', 'Meaning', 'Example'],
              ["would rather + V₁ (than)", 'I prefer', "I'd rather stay home."],
              ["would rather + V than + V", 'I\'d rather X than Y', "I'd rather walk than drive."],
              ["would rather + S + Past Simple", 'I\'d prefer someone to do', "I'd rather you didn't tell anyone."],
            ]},
          },
          {
            type: 'examples',
            rows: [
              ['I wish it were summer already.', 'Хотів би щоб вже було літо.'],
              ['She wishes she had taken the job.', 'Вона шкодує, що не взяла ту роботу.'],
              ["I'd rather you came tomorrow.", 'Я б хотів, щоб ти прийшов завтра.'],
              ["He'd rather read than watch TV.", 'Він воліє читати, а не дивитися ТВ.'],
            ],
          },
        ],
      },

      {
        id: 'relative-clauses', title: 'Відносні речення — B1', titleEn: 'Relative Clauses — B1', emoji: '🔗',
        sections: [
          { type: 'intro', text: 'Відносні речення уточнюють або доповнюють іменник. Є два типи: визначальні (Defining) — без ком, та невизначальні (Non-defining) — з комами.',
            en: { text: 'Relative clauses define or add information to a noun. There are two types: defining — no commas, and non-defining — with commas.' } },
          {
            type: 'table', title: 'Відносні займенники',
            rows: [
              ['Займенник', 'Відноситься до', 'Приклад'],
              ['who', 'людина (підмет/додаток)', 'The man who called is my boss.'],
              ['whom', 'людина (додаток, формально)', 'The person whom I met was kind.'],
              ['which', 'предмет або тварина', 'The book which I bought is great.'],
              ['that', 'людина або предмет (тільки defining)', 'The car that she drives is red.'],
              ['whose', 'приналежність', 'The girl whose bag was stolen cried.'],
              ['where', 'місце', 'The city where I was born is small.'],
              ['when', 'час', 'The year when we met was 2020.'],
            ],
            en: { title: 'Relative pronouns', rows: [
              ['Pronoun', 'Refers to', 'Example'],
              ['who', 'person (subject/object)', 'The man who called is my boss.'],
              ['whom', 'person (object, formal)', 'The person whom I met was kind.'],
              ['which', 'thing or animal', 'The book which I bought is great.'],
              ['that', 'person or thing (defining only)', 'The car that she drives is red.'],
              ['whose', 'possession', 'The girl whose bag was stolen cried.'],
              ['where', 'place', 'The city where I was born is small.'],
              ['when', 'time', 'The year when we met was 2020.'],
            ]},
          },
          {
            type: 'table', title: 'Defining vs Non-defining',
            rows: [
              ['', 'Defining (без ком)', 'Non-defining (з комами)'],
              ['Значення', 'Уточнює — без нього незрозуміло про кого/що', 'Додає інфо — без нього речення залишається зрозумілим'],
              ['Займенник', 'who / which / that / whose', 'who / which / whose (НЕ that)'],
              ['Коми', 'НЕ вживаються', 'Обов\'язкові коми'],
              ['Приклад', 'The woman who lives next door is a nurse.', 'My sister, who lives in Paris, is a nurse.'],
            ],
            en: { title: 'Defining vs Non-defining', rows: [
              ['', 'Defining (no commas)', 'Non-defining (with commas)'],
              ['Meaning', 'Defines — without it unclear who/what is meant', 'Adds info — sentence remains clear without it'],
              ['Pronoun', 'who / which / that / whose', 'who / which / whose (NOT that)'],
              ['Commas', 'NOT used', 'Commas required'],
              ['Example', 'The woman who lives next door is a nurse.', 'My sister, who lives in Paris, is a nurse.'],
            ]},
          },
          { type: 'tip', title: 'Коли можна опустити займенник',
            text: 'Якщо відносний займенник є додатком (object), його можна опустити:\n"The book (that) I read was amazing." ✅\nЯкщо займенник є підметом (subject) — опустити не можна:\n"The man who called is here." ❌ "The man called is here."',
            en: { title: 'When can you omit the pronoun?', text: 'If the relative pronoun is an object, it can be omitted:\n"The book (that) I read was amazing." ✅\nIf it is the subject — it cannot be omitted:\n"The man who called is here." ❌ "The man called is here."' },
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['The student who got the highest mark is Maria.', 'Студентка, яка отримала найвищу оцінку — Марія. (defining)'],
              ['Shakespeare, who wrote Hamlet, was born in 1564.', 'Шекспір, який написав Гамлета, народився у 1564. (non-defining)'],
              ['Is this the file (that) you were looking for?', 'Це той файл, який ти шукав? (that — опущено)'],
              ["She lives in a house whose roof is green.", 'Вона живе в будинку із зеленим дахом.'],
            ],
          },
        ],
      },

      {
        id: 'used-to', title: 'Used to / Be used to — B1', emoji: '🔁',
        sections: [
          { type: 'intro', text: 'Три схожі конструкції з різними значеннями — одна з найпоширеніших точок плутанини.',
            en: { text: 'Three similar constructions with different meanings — one of the most common points of confusion.' } },
          {
            type: 'table', title: 'Порівняльна таблиця',
            rows: [
              ['Конструкція', 'Структура', 'Значення', 'Приклад'],
              ['used to + V₁', 'used to + інфінітив', 'Звичка/стан у минулому, якої більше немає', 'I used to smoke. (тепер не курю)'],
              ['would + V₁', 'would + інфінітив', 'Повторна дія в минулому (НЕ для станів)', 'We would go to the beach every summer.'],
              ['be used to + V-ing', 'am/is/are used to + герундій', 'Звик до чогось (зараз)', 'I am used to working late.'],
              ['get used to + V-ing', 'get/got used to + герундій', 'Звикати до чогось (процес)', 'She is getting used to the cold.'],
            ],
            en: { title: 'Comparison table', rows: [
              ['Construction', 'Structure', 'Meaning', 'Example'],
              ['used to + V₁', 'used to + infinitive', 'Past habit/state that no longer exists', 'I used to smoke. (I don\'t now)'],
              ['would + V₁', 'would + infinitive', 'Repeated past action (NOT for states)', 'We would go to the beach every summer.'],
              ['be used to + V-ing', 'am/is/are used to + gerund', 'Accustomed to something (now)', 'I am used to working late.'],
              ['get used to + V-ing', 'get/got used to + gerund', 'Becoming accustomed (process)', 'She is getting used to the cold.'],
            ]},
          },
          { type: 'formula', title: 'Структура used to',
            rows: [
              ['✅ (+)', 'Всі особи', 'used to + V₁', '→ He used to play tennis.'],
              ['❌ (−)', 'Всі особи', "didn't use to + V₁", "→ She didn't use to drink coffee."],
              ['❓ (?)', 'Всі особи', 'Did + use to + V₁?', '→ Did you use to live here?'],
            ],
            en: { title: 'used to structure', rows: [
              ['✅ (+)', 'All persons', 'used to + V₁', '→ He used to play tennis.'],
              ['❌ (−)', 'All persons', "didn't use to + V₁", "→ She didn't use to drink coffee."],
              ['❓ (?)', 'All persons', 'Did + use to + V₁?', '→ Did you use to live here?'],
            ]},
          },
          { type: 'note', title: 'would НЕ вживається зі статичними дієсловами',
            text: 'would НЕ можна вжити зі stative verbs (know, love, have, believe):\n❌ "I would know him." → ✅ "I used to know him."\n❌ "We would have a dog." → ✅ "We used to have a dog."',
            en: { title: 'would is NOT used with stative verbs', text: 'would CANNOT be used with stative verbs (know, love, have, believe):\n❌ "I would know him." → ✅ "I used to know him."\n❌ "We would have a dog." → ✅ "We used to have a dog."' },
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['I used to be very shy.', 'Я колись був дуже сором\'язливим. (минула риса — більше немає)'],
              ['We would walk to school every day.', 'Ми щодня ходили до школи пішки. (повторна дія в минулому)'],
              ['He is used to driving on the left.', 'Він звик їздити по лівій стороні. (звик — сейчас)'],
              ["She'll get used to the new city soon.", 'Вона скоро звикне до нового міста. (процес звикання)'],
            ],
          },
        ],
      },

      {
        id: 'linking-words', title: 'Linking Words — B1', emoji: '🧩',
        sections: [
          { type: 'intro', text: 'Linking words з\'єднують речення та ідеї. Є різні групи залежно від логічного зв\'язку: протиставлення, додавання, причина/наслідок, приклад.',
            en: { text: 'Linking words connect sentences and ideas. There are different groups depending on the logical relationship: contrast, addition, cause/effect, example.' } },
          {
            type: 'table', title: 'Протиставлення та контраст',
            rows: [
              ['Слово/фраза', 'Структура', 'Приклад'],
              ['however', 'на початку/в середині речення', 'It was cold. However, we went out.'],
              ['although / even though', '+ підрядне речення', 'Although it was cold, we went out.'],
              ['despite / in spite of', '+ noun / V-ing', 'Despite the cold, we went out.'],
              ['whereas / while', '+ підрядне (порівняння)', 'She is tall, whereas her sister is short.'],
              ['yet / but', 'сполучник', 'He is poor yet happy.'],
              ['on the other hand', 'початок речення', 'On the other hand, prices are rising.'],
            ],
            en: { title: 'Contrast & opposition' },
          },
          {
            type: 'table', title: 'Додавання',
            rows: [
              ['Слово/фраза', 'Значення', 'Приклад'],
              ['moreover / furthermore', 'крім того, до того ж', 'Moreover, the food was delicious.'],
              ['in addition (to)', 'на додаток', 'In addition to English, she speaks French.'],
              ['besides', 'до того ж, крім того', "Besides, it's too expensive."],
              ['also / as well / too', 'також', 'She sings. She also plays guitar.'],
              ['not only... but also', 'не лише... але й', 'Not only is he smart, but he\'s also kind.'],
            ],
            en: { title: 'Addition' },
          },
          {
            type: 'table', title: 'Причина та наслідок',
            rows: [
              ['Слово/фраза', 'Структура', 'Приклад'],
              ['because', '+ підрядне', 'She stayed home because she was sick.'],
              ['because of / due to', '+ noun / V-ing', 'Due to the rain, the match was cancelled.'],
              ['therefore / thus / hence', 'наслідок (початок речення)', 'She worked hard; therefore, she succeeded.'],
              ['as a result / consequently', 'наслідок', 'As a result, prices increased.'],
              ['so (that)', 'мета / наслідок', 'She studied so that she could pass.'],
            ],
            en: { title: 'Cause & effect' },
          },
          {
            type: 'table', title: 'Приклад, уточнення, висновок',
            rows: [
              ['Функція', 'Слово/фраза', 'Приклад'],
              ['Приклад', 'for example / for instance / such as', 'For example, cats and dogs are popular pets.'],
              ['Уточнення', 'in other words / that is (to say)', 'In other words, it\'s too expensive.'],
              ['Висновок', 'in conclusion / to sum up / overall', 'In conclusion, the results are positive.'],
              ['Послідовність', 'firstly / then / finally / subsequently', 'Firstly, mix the ingredients. Then bake.'],
            ],
            en: { title: 'Example, clarification, conclusion', rows: [
              ['Function', 'Word/phrase', 'Example'],
              ['Example', 'for example / for instance / such as', 'For example, cats and dogs are popular pets.'],
              ['Clarification', 'in other words / that is (to say)', 'In other words, it\'s too expensive.'],
              ['Conclusion', 'in conclusion / to sum up / overall', 'In conclusion, the results are positive.'],
              ['Sequence', 'firstly / then / finally / subsequently', 'Firstly, mix the ingredients. Then bake.'],
            ]},
          },
          {
            type: 'tip', title: 'Although vs Despite — найпоширеніша помилка',
            text: 'ALTHOUGH + підрядне речення (S + V):\n✅ "Although it was raining, we went out."\n❌ "Although the rain, we went out."\n\nDESPITE / IN SPITE OF + іменник або V-ing:\n✅ "Despite the rain, we went out."\n✅ "Despite feeling tired, she finished."\n❌ "Despite it was raining, we went out."',
            en: { title: 'Although vs Despite — most common mistake', text: 'ALTHOUGH + clause (S + V):\n✅ "Although it was raining, we went out."\n❌ "Although the rain, we went out."\n\nDESPITE / IN SPITE OF + noun or V-ing:\n✅ "Despite the rain, we went out."\n✅ "Despite feeling tired, she finished."\n❌ "Despite it was raining, we went out."' },
          },
          {
            type: 'examples', title: 'Приклади зв\'язків у дії',
            rows: [
              ['It was cold. However, we decided to go for a walk.', 'Протиставлення (два речення)'],
              ['Although she studied hard, she failed the exam.', 'Протиставлення (одне речення)'],
              ['Despite being tired, he finished all the work.', 'Протиставлення (despite + V-ing)'],
              ['The project was late. Moreover, the budget was exceeded.', 'Додавання (до того ж)'],
              ['She missed the bus. As a result, she was late.', 'Наслідок'],
              ['He trained every day. Therefore, he won the championship.', 'Висновок/наслідок'],
              ['There are many options — for example, coffee, tea or juice.', 'Приклад'],
              ['Firstly, preheat the oven. Then mix the ingredients. Finally, bake for 30 minutes.', 'Послідовність'],
            ],
          },
        ],
      },

      {
        id: 'countable-uncountable', title: 'Злічувані та незлічувані — A2', titleEn: 'Countable & Uncountable Nouns — A2', emoji: '🧮',
        sections: [
          { type: 'intro', text: 'Злічувані іменники (Countable) можна рахувати: a book / two books. Незлічувані (Uncountable) — не мають множини і не вживаються з a/an.',
            en: { text: 'Countable nouns can be counted: a book / two books. Uncountable nouns have no plural and cannot be used with a/an.' } },
          {
            type: 'table', title: 'Порівняння',
            rows: [
              ['', 'Countable (злічувані)', 'Uncountable (незлічувані)'],
              ['Однина', 'a car, an apple, a chair', '— (не має)'],
              ['Множина', 'cars, apples, chairs', '— (не має)'],
              ['Артикль', 'a/an + однина; the + будь-яке', 'the або ∅; НЕ a/an'],
              ['Квантифікатори', 'many, a few, few, several', 'much, a little, little'],
              ['A lot of / some / any', 'обидва типи', 'обидва типи'],
            ],
            en: { title: 'Comparison', rows: [
              ['', 'Countable', 'Uncountable'],
              ['Singular', 'a car, an apple, a chair', '— (none)'],
              ['Plural', 'cars, apples, chairs', '— (none)'],
              ['Article', 'a/an + singular; the + any', 'the or ∅; NOT a/an'],
              ['Quantifiers', 'many, a few, few, several', 'much, a little, little'],
              ['A lot of / some / any', 'both types', 'both types'],
            ]},
          },
          {
            type: 'table', title: 'Типові незлічувані (часто плутають)',
            rows: [
              ['Іменник', 'Чому незлічуваний', 'Як сказати "один/два"'],
              ['advice', 'a piece of advice / some advice', ''],
              ['information', 'a piece of information', ''],
              ['news', '"the news is" (не are!)', 'a piece of news'],
              ['furniture', 'a piece of furniture', ''],
              ['luggage / baggage', 'a bag, a suitcase', ''],
              ['money', 'a coin, a note, a sum of money', ''],
              ['work', 'a job, a task, a piece of work', ''],
              ['research', 'a study, a piece of research', ''],
              ['progress', 'a step forward', ''],
              ['knowledge', 'a fact, a piece of knowledge', ''],
              ['weather', 'a sunny day', ''],
              ['traffic', 'a car, a vehicle', ''],
            ],
            en: { title: 'Common uncountable nouns (often confused)', rows: [
              ['Noun', 'How to count', 'Note'],
              ['advice', 'a piece of advice / some advice', ''],
              ['information', 'a piece of information', ''],
              ['news', '"the news is" (not "are"!)', 'a piece of news'],
              ['furniture', 'a piece of furniture', ''],
              ['luggage / baggage', 'a bag, a suitcase', ''],
              ['money', 'a coin, a note, a sum of money', ''],
              ['work', 'a job, a task, a piece of work', ''],
              ['research', 'a study, a piece of research', ''],
              ['progress', 'a step forward', ''],
              ['knowledge', 'a fact, a piece of knowledge', ''],
              ['weather', 'a sunny day', ''],
              ['traffic', 'a car, a vehicle', ''],
            ]},
          },
          {
            type: 'table', title: 'Іменники з двома значеннями',
            rows: [
              ['Іменник', 'Незлічуване', 'Злічуване'],
              ['hair', 'hair — волосся (загально)', 'a hair — одна волосинка'],
              ['light', 'light — світло', 'a light — лампа, джерело світла'],
              ['glass', 'glass — скло (матеріал)', 'a glass — склянка'],
              ['paper', 'paper — папір', 'a paper — газета, документ'],
              ['time', 'time — час (загально)', 'a time — раз, випадок'],
              ['room', 'room — місце, простір', 'a room — кімната'],
            ],
            en: { title: 'Nouns with two meanings', rows: [
              ['Noun', 'Uncountable', 'Countable'],
              ['hair', 'hair — hair in general', 'a hair — a single strand'],
              ['light', 'light — light (illumination)', 'a light — a lamp, light source'],
              ['glass', 'glass — glass (material)', 'a glass — a drinking glass'],
              ['paper', 'paper — paper (material)', 'a paper — a newspaper, document'],
              ['time', 'time — time in general', 'a time — an occasion, instance'],
              ['room', 'room — space, area', 'a room — a room (in a house)'],
            ]},
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['I need some advice. / Can you give me a piece of advice?', 'Мені потрібна порада.'],
              ['The news was shocking. (не "were"!)', 'Новини були шокуючими.'],
              ['I have little time but a few ideas.', 'У мене мало часу, але кілька ідей.'],
              ['She has beautiful hair. / I found a hair in my soup.', 'У неї гарне волосся. / Я знайшов волосину в супі.'],
            ],
          },
        ],
      },

      {
        id: 'adjective-order', title: 'Порядок прикметників — B1', titleEn: 'Order of Adjectives — B1', emoji: '📐',
        sections: [
          { type: 'intro', text: 'Коли перед іменником стоїть кілька прикметників, вони вживаються у суворо визначеному порядку. Порушення цього порядку звучить неприродно.',
            en: { text: 'When several adjectives precede a noun, they are used in a strictly defined order. Breaking this order sounds unnatural.' } },
          {
            type: 'table', title: 'Порядок (OSASCOMP)',
            rows: [
              ['1. Opinion (думка)', 'beautiful, lovely, boring, awful', ''],
              ['2. Size (розмір)', 'big, small, tiny, enormous', ''],
              ['3. Age (вік)', 'old, young, ancient, new', ''],
              ['4. Shape (форма)', 'round, square, flat, triangular', ''],
              ['5. Colour (колір)', 'red, blue, dark, light', ''],
              ['6. Origin (походження)', 'French, wooden, British, Chinese', ''],
              ['7. Material (матеріал)', 'wooden, metal, plastic, silk', ''],
              ['8. Purpose (призначення)', 'sleeping (bag), dining (table)', ''],
              ['→ NOUN', '', ''],
            ],
            en: { title: 'Order (OSASCOMP)' },
          },
          { type: 'tip', title: 'Мнемоніка OSASCOMP',
            text: 'Opinion – Size – Age – Shape – Colour – Origin – Material – Purpose\n"A beautiful small old round red Italian metal dining table."',
            en: { title: 'OSASCOMP mnemonic', text: 'Opinion – Size – Age – Shape – Colour – Origin – Material – Purpose\n"A beautiful small old round red Italian metal dining table."' },
          },
          { type: 'note', title: 'На практиці — не більше 3-4 прикметників',
            text: 'У живому мовленні рідко вживають більше 2-3 прикметників поспіль. Перелік з 7+ — лише для пояснення правила.',
            en: { title: 'In practice — no more than 3-4 adjectives', text: 'In natural speech, more than 2-3 adjectives in a row are rarely used. The list of 7+ is only for explaining the rule.' },
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['a lovely old French house', '✅ думка → вік → походження'],
              ['a big black leather bag', '✅ розмір → колір → матеріал'],
              ['some delicious hot Italian pasta', '✅ думка → температура → походження'],
              ['an old red wooden chair', '✅ вік → колір → матеріал'],
              ['❌ a red old big bag → ✅ a big old red bag', 'розмір перед віком перед кольором'],
            ],
          },
        ],
      },

      {
        id: 'adverbs', title: 'Прислівники — A2', titleEn: 'Adverbs — A2', emoji: '💨',
        sections: [
          { type: 'intro', text: 'Прислівники модифікують дієслова, прикметники або інші прислівники. Відповідають на питання: як? де? коли? як часто? якою мірою?',
            en: { text: 'Adverbs modify verbs, adjectives or other adverbs. They answer the questions: how? where? when? how often? to what degree?' } },
          {
            type: 'table', title: 'Типи прислівників',
            rows: [
              ['Тип', 'Питання', 'Приклади'],
              ['Manner (образу дії)', 'Як?', 'quickly, slowly, well, hard, fast'],
              ['Place (місця)', 'Де? Куди?', 'here, there, inside, abroad, everywhere'],
              ['Time (часу)', 'Коли?', 'now, yesterday, soon, already, still, yet'],
              ['Frequency (частоти)', 'Як часто?', 'always, usually, often, sometimes, rarely, never'],
              ['Degree (ступеня)', 'Якою мірою?', 'very, quite, rather, fairly, extremely, too, enough'],
            ],
            en: { title: 'Types of adverbs', rows: [
              ['Type', 'Question', 'Examples'],
              ['Manner', 'How?', 'quickly, slowly, well, hard, fast'],
              ['Place', 'Where? Where to?', 'here, there, inside, abroad, everywhere'],
              ['Time', 'When?', 'now, yesterday, soon, already, still, yet'],
              ['Frequency', 'How often?', 'always, usually, often, sometimes, rarely, never'],
              ['Degree', 'To what degree?', 'very, quite, rather, fairly, extremely, too, enough'],
            ]},
          },
          {
            type: 'table', title: 'Утворення (прикметник → прислівник)',
            rows: [
              ['Правило', 'Прикметник', 'Прислівник'],
              ['Просто + -ly', 'quick, slow, careful', 'quickly, slowly, carefully'],
              ['Кінцева -y → -ily', 'happy, easy, heavy', 'happily, easily, heavily'],
              ['Кінцева -le → -ly', 'gentle, simple', 'gently, simply'],
              ['Кінцева -ic → -ically', 'automatic, basic', 'automatically, basically'],
              ['Неправильні', 'good, fast, hard, early', 'well, fast, hard, early'],
              ['Однакові форми', 'fast car / drive fast', 'hard work / work hard'],
            ],
            en: { title: 'Formation (adjective → adverb)', rows: [
              ['Rule', 'Adjective', 'Adverb'],
              ['Simply + -ly', 'quick, slow, careful', 'quickly, slowly, carefully'],
              ['Final -y → -ily', 'happy, easy, heavy', 'happily, easily, heavily'],
              ['Final -le → -ly', 'gentle, simple', 'gently, simply'],
              ['Final -ic → -ically', 'automatic, basic', 'automatically, basically'],
              ['Irregular', 'good, fast, hard, early', 'well, fast, hard, early'],
              ['Same form', 'fast car / drive fast', 'hard work / work hard'],
            ]},
          },
          {
            type: 'table', title: 'Позиція в реченні',
            rows: [
              ['Тип', 'Позиція', 'Приклад'],
              ['Frequency (частоти)', 'Перед основним дієсловом, після be', 'She often reads. / He is always late.'],
              ['Manner (образу дії)', 'Після дієслова або об\'єкта', 'She sings beautifully. / He drove fast.'],
              ['Place та Time', 'Зазвичай в кінці речення', 'I saw him yesterday at school.'],
              ['Degree (ступеня)', 'Перед прикметником/прислівником', 'It\'s very cold. / She speaks quite well.'],
            ],
            en: { title: 'Position in the sentence', rows: [
              ['Type', 'Position', 'Example'],
              ['Frequency', 'Before main verb, after be', 'She often reads. / He is always late.'],
              ['Manner', 'After verb or object', 'She sings beautifully. / He drove fast.'],
              ['Place & Time', 'Usually at end of sentence', 'I saw him yesterday at school.'],
              ['Degree', 'Before adjective/adverb', 'It\'s very cold. / She speaks quite well.'],
            ]},
          },
          { type: 'note', title: 'Увага: late / lately, hard / hardly',
            text: 'late = пізно: "She arrived late."\nlately = нещодавно: "I haven\'t seen her lately."\n\nhard = сильно, наполегливо: "He works hard."\nhardly = ледве, майже ні: "I can hardly hear you."',
            en: { title: 'Note: late / lately, hard / hardly', text: 'late = late: "She arrived late."\nlately = recently: "I haven\'t seen her lately."\n\nhard = hard, intensely: "He works hard."\nhardly = barely, almost not: "I can hardly hear you."' },
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['She spoke so quietly that nobody heard her.', 'Вона говорила так тихо, що ніхто не почув.'],
              ['He is always on time.', 'Він завжди вчасно. (після be)'],
              ['I hardly ever go to the cinema.', 'Я майже ніколи не ходжу в кіно.'],
              ['The test was extremely difficult.', 'Тест був надзвичайно складним.'],
            ],
          },
        ],
      },

      {
        id: 'too-enough-so-such', title: 'Too / Enough / So / Such — B1', emoji: '⚖️',
        titleEn: 'Too / Enough / So / Such — B1',
        sections: [
          { type: 'intro', text: 'Чотири конструкції для вираження ступеня або інтенсивності. Кожна має свою структуру та значення.',
            en: { text: 'Four constructions for expressing degree or intensity. Each has its own structure and meaning.' } },
          {
            type: 'formula', title: 'TOO — "надто" (негативне значення: більше ніж потрібно)',
            rows: [
              ['✅ Структура', 'too + adj/adv', '→ It\'s too hot to drink.'],
              ['✅ Структура', 'too + adj/adv + for + noun', '→ This is too difficult for beginners.'],
              ['✅ Структура', 'too + adj/adv + to + V', '→ She\'s too tired to work.'],
            ],
            en: { title: 'TOO — "too much" (negative: more than needed)' },
          },
          {
            type: 'formula', title: 'ENOUGH — "достатньо"',
            rows: [
              ['✅ Структура', 'adj/adv + enough', '→ Is it warm enough?'],
              ['✅ Структура', 'enough + noun', '→ I don\'t have enough time.'],
              ['✅ Структура', 'adj + enough + to + V', '→ She\'s old enough to drive.'],
            ],
            en: { title: 'ENOUGH — "enough, sufficient"' },
          },
          {
            type: 'formula', title: 'SO — "так, настільки" (+ прикметник або прислівник)',
            rows: [
              ['✅ Структура', 'so + adj/adv', '→ It was so cold!'],
              ['✅ Структура', 'so + adj/adv + that', '→ It was so cold that we stayed home.'],
            ],
            en: { title: 'SO — "so, such" (+ adjective or adverb)' },
          },
          {
            type: 'formula', title: 'SUCH — "такий" (+ іменникова група)',
            rows: [
              ['✅ Структура', 'such + a/an + adj + noun', '→ It was such a cold day!'],
              ['✅ Структура', 'such + adj + noun (мн.)', '→ They are such nice people.'],
              ['✅ Структура', 'such + adj + noun + that', '→ It was such a storm that trees fell.'],
            ],
            en: { title: 'SUCH — "such a" (+ noun phrase)' },
          },
          { type: 'tip', title: 'So vs Such',
            text: 'SO + прикметник/прислівник: "so beautiful / so quickly"\nSUCH + іменникова група: "such a beautiful girl / such kind people"\n\n✅ She is so beautiful.\n✅ She is such a beautiful girl.',
            en: { title: 'So vs Such', text: 'SO + adjective/adverb: "so beautiful / so quickly"\nSUCH + noun phrase: "such a beautiful girl / such kind people"\n\n✅ She is so beautiful.\n✅ She is such a beautiful girl.' },
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['The coffee was too hot to drink.', 'Кава була надто гарячою, щоб пити.'],
              ["I don't have enough money to buy it.", 'У мене не вистачає грошей, щоб купити це.'],
              ['The film was so boring that I fell asleep.', 'Фільм був таким нудним, що я заснув.'],
              ['It was such a long journey!', 'Це була така довга поїздка!'],
            ],
          },
        ],
      },

      {
        id: 'mixed-conditionals', title: 'Змішані умовні — B2', emoji: '🔀🔀',
        titleEn: 'Mixed Conditionals — B2',
        sections: [
          { type: 'intro', text: 'Mixed Conditionals поєднують умову одного типу з наслідком іншого — для вираження зв\'язку між минулим та теперішнім (або навпаки).',
            en: { text: 'Mixed Conditionals combine the condition from one type with the result of another — to express the connection between past and present (or vice versa).' } },
          {
            type: 'table', title: 'Два типи змішаних умовних',
            rows: [
              ['Тип', 'IF-частина', 'Головна частина', 'Значення'],
              ['3rd → 2nd\n(минуле → теперішнє)', 'If + Past Perfect', 'would + V₁', 'Нереальна дія в минулому → результат у теперішньому'],
              ['2nd → 3rd\n(теперішнє → минуле)', 'If + Past Simple', 'would have + V₃', 'Нереальний стан зараз → наслідок у минулому'],
            ],
            en: { title: 'Two types of mixed conditionals',
              rows: [
                ['Type', 'IF-clause', 'Main clause', 'Meaning'],
                ['3rd → 2nd\n(past → present)', 'If + Past Perfect', 'would + V₁', 'Unreal past action → present result'],
                ['2nd → 3rd\n(present → past)', 'If + Past Simple', 'would have + V₃', 'Unreal present state → past consequence'],
              ] },
          },
          { type: 'tip', title: 'Приклади з поясненням',
            text: '3rd → 2nd:\n"If I had studied medicine, I would be a doctor now."\n(Не навчився у минулому → зараз не є лікарем)\n\n2nd → 3rd:\n"If I were braver, I would have spoken to her."\n(Я не сміливий зараз → тому не заговорив тоді)',
            en: { title: 'Examples with explanation',
              text: '3rd → 2nd:\n"If I had studied medicine, I would be a doctor now."\n(Didn\'t study in the past → not a doctor now)\n\n2nd → 3rd:\n"If I were braver, I would have spoken to her."\n(I am not brave now → so I didn\'t speak to her then)' },
          },
          {
            type: 'table', title: 'Порівняння з чистими типами',
            rows: [
              ['Тип', 'Приклад'],
              ['2nd Conditional (чистий)', 'If I had money, I would buy a car. (зараз)'],
              ['3rd Conditional (чистий)', 'If I had had money, I would have bought a car. (минуле)'],
              ['Mixed 3rd→2nd', 'If I had saved money, I would be rich now. (минуле → теперішнє)'],
              ['Mixed 2nd→3rd', 'If I were more careful, I wouldn\'t have made that mistake. (зараз → минуле)'],
            ],
            en: { title: 'Comparison with pure types',
              rows: [
                ['Type', 'Example'],
                ['2nd Conditional (pure)', 'If I had money, I would buy a car. (now)'],
                ['3rd Conditional (pure)', 'If I had had money, I would have bought a car. (past)'],
                ['Mixed 3rd→2nd', 'If I had saved money, I would be rich now. (past → present)'],
                ['Mixed 2nd→3rd', 'If I were more careful, I wouldn\'t have made that mistake. (now → past)'],
              ] },
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['If she had taken the job, she would be living in Paris now.', 'Якби вона взяла ту роботу, зараз жила б у Парижі.'],
              ['If I spoke Spanish, I would have understood that conversation.', 'Якби я говорив іспанською, я б зрозумів ту розмову.'],
              ['If he had slept earlier, he wouldn\'t be tired now.', 'Якби він ліг раніше, зараз не був би втомленим.'],
            ],
          },
        ],
      },

      {
        id: 'participle-clauses', title: 'Participle Clauses — B2', emoji: '📎',
        titleEn: 'Participle Clauses — B2',
        sections: [
          { type: 'intro', text: 'Participle clauses — скорочені підрядні речення з дієприкметником замість підрядного речення. Роблять мову стислішою та формальнішою.',
            en: { text: 'Participle clauses — shortened subordinate clauses using a participle instead of a full clause. They make language more concise and formal.' } },
          {
            type: 'table', title: 'Три типи',
            rows: [
              ['Тип', 'Структура', 'Значення', 'Приклад'],
              ['Present Participle', 'V-ing + ...', 'активна дія, одночасна або наступна', 'Walking home, I noticed a strange car.'],
              ['Past Participle', 'V₃ + ...', 'пасивна дія або завершена перед основною', 'Built in 1900, the bridge is still strong.'],
              ['Perfect Participle', 'Having + V₃ + ...', 'активна, завершена ДО основної дії', 'Having finished the report, she left the office.'],
            ],
          },
          { type: 'note', title: 'Підмет має бути однаковим!',
            text: '✅ Seeing the sign, I stopped the car. (я побачив → я зупинив)\n❌ Seeing the sign, the car stopped. (хто побачив? Машина?)\n\nЯкщо підмети різні — підрядне речення обов\'язкове:\n"When I saw the sign, the car stopped."',
            en: { title: 'The subject must be the same!',
              text: '✅ Seeing the sign, I stopped the car. (I saw → I stopped)\n❌ Seeing the sign, the car stopped. (Who saw? The car?)\n\nIf the subjects differ — a full clause is required:\n"When I saw the sign, the car stopped."' },
          },
          { type: 'tip', title: 'Заміна підрядних речень',
            text: 'Because she was tired → Being tired, she went to bed.\nAfter he had eaten → Having eaten, he washed the dishes.\nWhen I arrived → Arriving at the station, I called a taxi.\nAs it was built in 1900 → Built in 1900, the bridge is historic.',
            en: { title: 'Replacing subordinate clauses',
              text: 'Because she was tired → Being tired, she went to bed.\nAfter he had eaten → Having eaten, he washed the dishes.\nWhen I arrived → Arriving at the station, I called a taxi.\nAs it was built in 1900 → Built in 1900, the bridge is historic.' },
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['Not knowing what to say, he left the room.', 'Не знаючи що сказати, він вийшов з кімнати.'],
              ['Having read the book, she recommended it to everyone.', 'Прочитавши книгу, вона порадила її всім.'],
              ['Surprised by the news, she sat down slowly.', 'Здивована новинами, вона повільно сіла.'],
              ['Located near the centre, the hotel is very convenient.', 'Розташований біля центру, готель дуже зручний.'],
            ],
          },
        ],
      },

      {
        id: 'inversion', title: 'Інверсія — C1', emoji: '🔃',
        titleEn: 'Inversion — C1',
        sections: [
          { type: 'intro', text: 'Інверсія — перестановка підмета та допоміжного дієслова для підсилення або після заперечних/обмежувальних слів. Характерна для формального стилю та C1–C2.',
            en: { text: 'Inversion — reversing the subject and auxiliary verb for emphasis or after negative/restrictive words. Typical of formal style at C1–C2 level.' } },
          {
            type: 'table', title: 'Негативна інверсія (після заперечних слів)',
            rows: [
              ['Тригер', 'Структура', 'Приклад'],
              ['Never', 'Never + aux + S + V', 'Never have I seen such courage.'],
              ['Seldom / Rarely', 'Seldom/Rarely + aux + S + V', 'Seldom does she complain.'],
              ['Hardly / Scarcely ... when', 'Hardly had S + V₃ when...', 'Hardly had I sat down when the phone rang.'],
              ['No sooner ... than', 'No sooner had S + V₃ than...', 'No sooner had he left than she arrived.'],
              ['Not only ... but also', 'Not only + aux + S + V...', 'Not only did he lie, but he also stole.'],
              ['Not until', 'Not until + clause + aux + S + V', 'Not until I saw it did I believe it.'],
              ['Under no circumstances', 'Under no circumstances + aux + S + V', 'Under no circumstances should you open this.'],
              ['On no account', 'On no account + aux + S + V', 'On no account are you to leave.'],
              ['Little', 'Little + aux + S + V', 'Little did she know what awaited her.'],
              ['At no time', 'At no time + aux + S + V', 'At no time was the building safe.'],
            ],
            en: { title: 'Negative inversion (after negative words)' },
          },
          {
            type: 'table', title: 'Умовна інверсія (замість if)',
            rows: [
              ['Звичайне умовне', 'Інверсія (формальне)', 'Тип'],
              ['If I had known...', 'Had I known...', '3rd Conditional'],
              ['If I were you...', 'Were I you...', '2nd Conditional'],
              ['If this should happen...', 'Should this happen...', '1st Conditional (малоймовірне)'],
            ],
            en: { title: 'Conditional inversion (instead of if)',
              rows: [
                ['Normal conditional', 'Inversion (formal)', 'Type'],
                ['If I had known...', 'Had I known...', '3rd Conditional'],
                ['If I were you...', 'Were I you...', '2nd Conditional'],
                ['If this should happen...', 'Should this happen...', '1st Conditional (unlikely)'],
              ] },
          },
          { type: 'tip', title: 'Як будується інверсія',
            text: '1. Заперечне/обмежувальне слово виходить на перше місце\n2. Допоміжне дієслово (do/did/have/had/will/is тощо) — перед підметом\n3. Основне дієслово — після підмета\n\n"She had never seen it." → "Never had she seen it."',
            en: { title: 'How inversion is formed',
              text: '1. The negative/restrictive word comes first\n2. Auxiliary verb (do/did/have/had/will/is etc.) — before the subject\n3. Main verb — after the subject\n\n"She had never seen it." → "Never had she seen it."' },
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['Never have I been so embarrassed in my life.', 'Ніколи в житті мені не було так незручно.'],
              ['Had I known about the problem, I would have fixed it.', 'Якби я знав про проблему, я б виправив її.'],
              ['Not only is the price high, but the quality is poor.', 'Не лише ціна висока, але й якість погана.'],
              ['Should you need any help, please call me.', 'Якщо вам знадобиться допомога — зателефонуйте.'],
            ],
          },
        ],
      },

      {
        id: 'cleft-sentences', title: 'Cleft Sentences — C1', emoji: '✂️',
        titleEn: 'Cleft Sentences — C1',
        sections: [
          { type: 'intro', text: 'Cleft sentences — спосіб виділити певний елемент речення, перебудувавши його. Два основних типи: It-cleft і Wh-cleft (What-cleft).',
            en: { text: 'Cleft sentences — a way to emphasise a specific element of a sentence by restructuring it. Two main types: It-cleft and Wh-cleft (What-cleft).' } },
          {
            type: 'formula', title: 'IT-CLEFT: виділяє підмет, додаток або обставину',
            rows: [
              ['✅ Структура', 'It + be + виділений елемент + that/who + решта', ''],
              ['Звичайне', 'John broke the window.', '→ виділити: хто'],
              ['It-cleft', 'It was John who broke the window.', '(не Пол, не Марія — саме Джон)'],
              ['Звичайне', 'She met him in Paris.', '→ виділити: де'],
              ['It-cleft', 'It was in Paris that she met him.', ''],
              ['Звичайне', 'He called me yesterday.', '→ виділити: коли'],
              ['It-cleft', 'It was yesterday that he called me.', ''],
            ],
          },
          {
            type: 'formula', title: 'WH-CLEFT (What-cleft): виділяє дію або ідею',
            rows: [
              ['✅ Структура', 'What + S + V + be + виділений елемент', ''],
              ['Звичайне', 'I need a holiday.', '→ виділити: що'],
              ['Wh-cleft', 'What I need is a holiday.', ''],
              ['Звичайне', 'She wants you to apologise.', '→ виділити: що'],
              ['Wh-cleft', 'What she wants is for you to apologise.', ''],
            ],
          },
          {
            type: 'table', title: 'Порівняння двох типів',
            rows: [
              ['Тип', 'Виділяє', 'Структура', 'Приклад'],
              ['It-cleft', 'Конкретний факт (хто, де, коли, що саме)', 'It was X that/who...', 'It was the noise that woke me up.'],
              ['Wh-cleft', 'Дію або ситуацію в цілому', 'What S V is/was...', 'What surprised me was his reaction.'],
            ],
            en: { title: 'Comparison of the two types',
              rows: [
                ['Type', 'Emphasises', 'Structure', 'Example'],
                ['It-cleft', 'A specific fact (who, where, when, what exactly)', 'It was X that/who...', 'It was the noise that woke me up.'],
                ['Wh-cleft', 'An action or situation as a whole', 'What S V is/was...', 'What surprised me was his reaction.'],
              ] },
          },
          { type: 'note', title: 'All-cleft — варіант Wh-cleft',
            text: '"All I want is some peace and quiet." (все що мені потрібно — лише...)\n"All she did was cry." (все що вона робила — лише плакала)',
            en: { title: 'All-cleft — a variant of Wh-cleft',
              text: '"All I want is some peace and quiet." (the only thing I need is...)\n"All she did was cry." (the only thing she did was cry)' },
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['It was the manager who made the decision.', 'Саме менеджер прийняв рішення. (не хтось інший)'],
              ['It was last year that they got married.', 'Саме минулого року вони одружились.'],
              ['What I find difficult is speaking in public.', 'Те, що мені важко — це виступати публічно.'],
              ["What she needs is a good night's sleep.", 'Те, що їй потрібно — це добре виспатись.'],
            ],
          },
        ],
      },

      {
        id: 'subjunctive', title: 'Subjunctive — C1', emoji: '🎭',
        titleEn: 'Subjunctive — C1',
        sections: [
          { type: 'intro', text: 'Subjunctive (умовний спосіб) — особлива форма дієслова для вираження побажань, рекомендацій, вимог і гіпотетичних ситуацій. Найчастіше: base form (V₁) без закінчень та were для всіх осіб.',
            en: { text: 'The subjunctive — a special verb form for expressing wishes, recommendations, demands, and hypothetical situations. Most commonly: base form (V₁) without endings, and "were" for all persons.' } },
          {
            type: 'table', title: 'Present Subjunctive — після дієслів рекомендації/вимоги',
            rows: [
              ['Тригерне дієслово', 'Структура', 'Приклад'],
              ['suggest, recommend', 'S + V + that + S + V₁ (base form)', 'I suggest that he take the exam again.'],
              ['insist, demand', '', 'She insisted that he be present.'],
              ['propose, request', '', 'They requested that the meeting be postponed.'],
              ['require, ask', '', 'The law requires that everyone pay taxes.'],
              ['advise, urge', '', 'The doctor advised that she rest completely.'],
            ],
            en: { title: 'Present Subjunctive — after verbs of recommendation/demand',
              rows: [
                ['Trigger verb', 'Structure', 'Example'],
                ['suggest, recommend', 'S + V + that + S + V₁ (base form)', 'I suggest that he take the exam again.'],
                ['insist, demand', '', 'She insisted that he be present.'],
                ['propose, request', '', 'They requested that the meeting be postponed.'],
                ['require, ask', '', 'The law requires that everyone pay taxes.'],
                ['advise, urge', '', 'The doctor advised that she rest completely.'],
              ] },
          },
          {
            type: 'table', title: 'Після прикметників важливості/необхідності',
            rows: [
              ['Тригерний прикметник', 'Структура', 'Приклад'],
              ['essential, vital', 'It\'s + adj + that + S + V₁', 'It\'s essential that everyone arrive on time.'],
              ['important, necessary', '', 'It\'s important that she be informed.'],
              ['crucial, imperative', '', 'It\'s crucial that he not miss the deadline.'],
              ['advisable, recommended', '', 'It\'s advisable that you consult a doctor.'],
            ],
            en: { title: 'After adjectives of importance/necessity',
              rows: [
                ['Trigger adjective', 'Structure', 'Example'],
                ['essential, vital', 'It\'s + adj + that + S + V₁', 'It\'s essential that everyone arrive on time.'],
                ['important, necessary', '', 'It\'s important that she be informed.'],
                ['crucial, imperative', '', 'It\'s crucial that he not miss the deadline.'],
                ['advisable, recommended', '', 'It\'s advisable that you consult a doctor.'],
              ] },
          },
          {
            type: 'table', title: 'Were-subjunctive — гіпотетичні ситуації',
            rows: [
              ['Вживання', 'Приклад'],
              ['2nd Conditional (всі особи)', 'If I were you, I would apologise.'],
              ['Після wish (теперішнє)', 'I wish I were taller.'],
              ['Після as if / as though', 'She acts as if she were the boss.'],
              ['Після if only', 'If only he were here right now!'],
              ['Після it\'s time', 'It\'s time you were in bed. / It\'s high time she knew the truth.'],
            ],
            en: { title: 'Were-subjunctive — hypothetical situations',
              rows: [
                ['Use', 'Example'],
                ['2nd Conditional (all persons)', 'If I were you, I would apologise.'],
                ['After wish (present)', 'I wish I were taller.'],
                ['After as if / as though', 'She acts as if she were the boss.'],
                ['After if only', 'If only he were here right now!'],
                ['After it\'s time', 'It\'s time you were in bed. / It\'s high time she knew the truth.'],
              ] },
          },
          { type: 'note', title: 'Британська vs Американська англійська',
            text: 'Subjunctive поширеніший в американській англійській.\nУ британській часто замість нього вживають should:\n\nAm.E: "I suggest that he take the job."\nBr.E: "I suggest that he should take the job." (або "I suggest he takes the job.")',
            en: { title: 'British vs American English',
              text: 'The subjunctive is more common in American English.\nIn British English, "should" is often used instead:\n\nAm.E: "I suggest that he take the job."\nBr.E: "I suggest that he should take the job." (or "I suggest he takes the job.")' },
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['The committee demanded that the report be submitted immediately.', 'Комітет вимагав, щоб звіт було подано негайно.'],
              ['It\'s vital that every passenger wear a seatbelt.', 'Важливо, щоб кожен пасажир пристебнувся.'],
              ['She talks to him as if he were a child.', 'Вона розмовляє з ним, наче він дитина.'],
              ['It\'s high time you started saving money.', 'Давно час починати заощаджувати гроші.'],
            ],
          },
        ],
      },

      {
        id: 'past-modals', title: 'Modal Perfects — B2', emoji: '🕵️',
        titleEn: 'Modal Perfects — B2',
        sections: [
          { type: 'intro', text: 'Modal Perfect = модальне дієслово + have + V₃. Вживається для висновків, здогадок і жалкувань про минуле.',
            en: { text: 'Modal Perfect = modal verb + have + V₃. Used for deductions, guesses, and regrets about the past.' } },
          {
            type: 'table', title: 'Здогадки та висновки про минуле',
            rows: [
              ['Конструкція', 'Ступінь впевненості', 'Значення', 'Приклад'],
              ['must have + V₃', '~95% впевненість (+)', 'майже точно відбулось', 'She must have missed the train.'],
              ['can\'t / couldn\'t have + V₃', '~95% впевненість (−)', 'майже точно НЕ відбулось', 'He can\'t have seen you — he was abroad.'],
              ['may / might have + V₃', '~50% можливість', 'можливо відбулось', 'She might have forgotten about it.'],
              ['could have + V₃', 'можливість (не реалізована)', 'могло б бути, але не сталось', 'He could have been a doctor.'],
              ['should have + V₃', 'очікування (але так не сталось)', 'мало б статись', 'They should have arrived by now.'],
              ['needn\'t have + V₃', 'зайва дія', 'зробив непотрібне', 'You needn\'t have bought so much food.'],
            ],
            en: { title: 'Deductions and conclusions about the past',
              rows: [
                ['Structure', 'Degree of certainty', 'Meaning', 'Example'],
                ['must have + V₃', '~95% certainty (+)', 'almost certainly happened', 'She must have missed the train.'],
                ['can\'t / couldn\'t have + V₃', '~95% certainty (−)', 'almost certainly did NOT happen', 'He can\'t have seen you — he was abroad.'],
                ['may / might have + V₃', '~50% possibility', 'possibly happened', 'She might have forgotten about it.'],
                ['could have + V₃', 'unrealised possibility', 'could have happened, but didn\'t', 'He could have been a doctor.'],
                ['should have + V₃', 'expectation (but didn\'t happen)', 'should have happened', 'They should have arrived by now.'],
                ['needn\'t have + V₃', 'unnecessary action', 'did something needlessly', 'You needn\'t have bought so much food.'],
              ] },
          },
          {
            type: 'table', title: 'Жалкування та критика',
            rows: [
              ['Конструкція', 'Значення', 'Приклад'],
              ['should have + V₃', 'Треба було зробити (але не зробив) — жаль', 'I should have studied harder.'],
              ['shouldn\'t have + V₃', 'Не треба було робити (але зробив) — критика', 'You shouldn\'t have said that.'],
              ['could have + V₃', 'Міг зробити, але не зробив — упущена можливість', 'We could have won the match.'],
              ['might have + V₃', 'Міг би зробити — мʼяка критика', 'You might have told me earlier!'],
            ],
            en: { title: 'Regrets and criticism',
              rows: [
                ['Structure', 'Meaning', 'Example'],
                ['should have + V₃', 'Should have done it (but didn\'t) — regret', 'I should have studied harder.'],
                ['shouldn\'t have + V₃', 'Shouldn\'t have done it (but did) — criticism', 'You shouldn\'t have said that.'],
                ['could have + V₃', 'Could have done it, but didn\'t — missed opportunity', 'We could have won the match.'],
                ['might have + V₃', 'Could have done it — mild criticism', 'You might have told me earlier!'],
              ] },
          },
          { type: 'tip', title: 'Логіка висновків',
            text: 'Впевненість 100% → звичайні дієслова: "She was tired."\nВпевненість ~95% → must have / can\'t have\nВпевненість ~50% → might have / may have\nВпевненість ~30% → could have\n\n"The lights are off — she must have gone home." (логічний висновок)\n"She can\'t have finished already — it\'s too early." (логічне заперечення)',
            en: { title: 'Logic of deductions',
              text: 'Certainty 100% → ordinary verbs: "She was tired."\nCertainty ~95% → must have / can\'t have\nCertainty ~50% → might have / may have\nCertainty ~30% → could have\n\n"The lights are off — she must have gone home." (logical deduction)\n"She can\'t have finished already — it\'s too early." (logical negation)' },
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['He\'s not answering — he must have fallen asleep.', 'Він не відповідає — мабуть, заснув.'],
              ['She can\'t have understood — her face was blank.', 'Вона не могла зрозуміти — у неї було порожнє обличчя.'],
              ['I should have listened to your advice.', 'Мені треба було послухати твою пораду.'],
              ['You needn\'t have waited — I took a taxi.', 'Тобі не треба було чекати — я взяв таксі.'],
              ['They might have taken the wrong turn.', 'Можливо, вони повернули не туди.'],
            ],
          },
        ],
      },

      {
        id: 'causative-have-get', title: 'Каузатив — B2', emoji: '🔧',
        titleEn: 'Causative Have/Get — B2',
        sections: [
          {
            type: 'intro',
            text: "Каузативна конструкція використовується коли суб'єкт не сам виконує дію, а організовує її виконання кимось іншим.",
            en: { text: 'The causative construction is used when the subject does not perform the action themselves but arranges for someone else to do it.' },
          },
          {
            type: 'formula', title: 'Структура',
            rows: [
              ['✅ have + O + V₃', 'Організувати виконання', 'I had my car repaired.', 'Я здав машину на ремонт.'],
              ['✅ get + O + to + V', 'Переконати зробити', 'I got him to fix my car.', 'Я умовив його полагодити машину.'],
              ['✅ have + O + V₁', 'Доручити (AmE)', 'She had the assistant book tickets.', 'Вона доручила асистенту забронювати квитки.'],
            ],
            en: { title: 'Structure',
              rows: [
                ['✅ have + O + V₃', 'Arrange for sth to be done', 'I had my car repaired.', 'I arranged for my car to be fixed.'],
                ['✅ get + O + to + V', 'Persuade/cause to do', 'I got him to fix my car.', 'I persuaded him to fix my car.'],
                ['✅ have + O + V₁', 'Instruct (AmE)', 'She had the assistant book tickets.', 'She instructed the assistant to book tickets.'],
              ] },
          },
          {
            type: 'note', title: 'Have vs Get',
            text: 'HAVE: офіційніше, акцент на результаті: "I had my hair cut."\nGET: менш офіційне, акцент на процесі переконання: "I got him to cut my hair."',
            en: { title: 'Have vs Get',
              text: 'HAVE: more formal, focus on the result: "I had my hair cut."\nGET: less formal, focus on persuading: "I got him to cut my hair."' },
          },
          {
            type: 'examples',
            rows: [
              ['I need to have my phone fixed.', 'Мені потрібно здати телефон у ремонт.'],
              ['She got her students to write essays.', 'Вона змусила студентів написати есе.'],
              ['We had the house painted last summer.', 'Минулого літа ми пофарбували будинок.'],
            ],
          },
        ],
      },

      {
        id: 'pronouns', title: 'Займенники — A2', emoji: '👤',
        titleEn: 'Pronouns — A2',
        sections: [
          { type: 'intro', text: 'Займенники замінюють іменники. Основні групи: зворотні (reflexive), взаємні (reciprocal) та неозначені (indefinite).',
            en: { text: 'Pronouns replace nouns. Main groups: reflexive, reciprocal, and indefinite pronouns.' } },
          {
            type: 'table', title: 'Зворотні займенники (Reflexive)',
            rows: [
              ['Особа', 'Займенник', 'Приклад'],
              ['I', 'myself', 'I did it myself. (сам зробив)'],
              ['you (ти)', 'yourself', 'Did you hurt yourself?'],
              ['he', 'himself', 'He taught himself French.'],
              ['she', 'herself', 'She looked at herself in the mirror.'],
              ['it', 'itself', 'The cat cleaned itself.'],
              ['we', 'ourselves', "Let's not fool ourselves."],
              ['you (ви)', 'yourselves', 'Help yourselves to food.'],
              ['they', 'themselves', 'They introduced themselves.'],
            ],
            en: { title: 'Reflexive Pronouns' },
          },
          {
            type: 'table', title: 'Два вживання зворотних займенників',
            rows: [
              ['Вживання', 'Значення', 'Приклад'],
              ['Зворотна дія (reflexive)', 'Суб\'єкт = об\'єкт', 'She cut herself while cooking.'],
              ['Підсилення (emphatic)', 'Акцент: "саме/особисто"', 'The president himself opened the event.'],
            ],
            en: { title: 'Two uses of reflexive pronouns',
              rows: [
                ['Use', 'Meaning', 'Example'],
                ['Reflexive action', 'Subject = object', 'She cut herself while cooking.'],
                ['Emphatic', 'Stress: "personally / in person"', 'The president himself opened the event.'],
              ] },
          },
          {
            type: 'table', title: 'Взаємні займенники (Reciprocal)',
            rows: [
              ['Займенник', 'Вживання', 'Приклад'],
              ['each other', '2 особи', 'They looked at each other.'],
              ['one another', '3+ особи (формально)', 'The students helped one another.'],
            ],
            en: { title: 'Reciprocal Pronouns',
              rows: [
                ['Pronoun', 'Used for', 'Example'],
                ['each other', '2 people', 'They looked at each other.'],
                ['one another', '3+ people (formal)', 'The students helped one another.'],
              ] },
          },
          {
            type: 'table', title: 'Неозначені займенники (Indefinite)',
            rows: [
              ['Група', 'Людина', 'Предмет', 'Місце'],
              ['some- (ствердне)', 'someone / somebody', 'something', 'somewhere'],
              ['any- (питання / заперечення)', 'anyone / anybody', 'anything', 'anywhere'],
              ['no- (заперечне значення)', 'no one / nobody', 'nothing', 'nowhere'],
              ['every- (всі)', 'everyone / everybody', 'everything', 'everywhere'],
            ],
            en: { title: 'Indefinite Pronouns',
              rows: [
                ['Group', 'Person', 'Thing', 'Place'],
                ['some- (affirmative)', 'someone / somebody', 'something', 'somewhere'],
                ['any- (questions / negatives)', 'anyone / anybody', 'anything', 'anywhere'],
                ['no- (negative meaning)', 'no one / nobody', 'nothing', 'nowhere'],
                ['every- (all)', 'everyone / everybody', 'everything', 'everywhere'],
              ] },
          },
          { type: 'note', title: 'Неозначені займенники — завжди однина!',
            text: 'Everyone IS here. (не "are")\nSomebody HAS called. (не "have")\nНавіть якщо значення множинне — дієслово в однині.\n\nАле займенник після може бути множинним (розмовне):\n"Everyone has their own opinion." ✅ (формально: his or her)',
            en: { title: 'Indefinite pronouns — always singular!',
              text: 'Everyone IS here. (not "are")\nSomebody HAS called. (not "have")\nEven when the meaning is plural — the verb is singular.\n\nBut a following pronoun can be plural (informal):\n"Everyone has their own opinion." ✅ (formally: his or her)' },
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['Nobody told me about the meeting.', 'Ніхто не сказав мені про зустріч.'],
              ['Is there anything I can do?', 'Чи є щось, що я можу зробити?'],
              ['She did everything herself.', 'Вона зробила все сама. (reflexive + emphatic)'],
              ['They congratulated each other.', 'Вони привітали одне одного.'],
              ['Somewhere out there is the answer.', 'Десь там є відповідь.'],
            ],
          },
        ],
      },

      {
        id: 'word-formation', title: 'Утворення слів — B1', emoji: '🔨',
        titleEn: 'Word Formation — B1',
        sections: [
          { type: 'intro', text: 'Word formation — додавання префіксів і суфіксів для утворення нових слів. Знання цих закономірностей дозволяє здогадуватись про значення нових слів і будувати словниковий запас швидше.',
            en: { text: 'Word formation — adding prefixes and suffixes to create new words. Knowing these patterns lets you guess the meaning of new words and build vocabulary faster.' } },
          {
            type: 'table', title: 'Префікси — заперечення / протилежність',
            rows: [
              ['Префікс', 'Значення', 'Приклади'],
              ['un-', 'не-, без-', 'unhappy, unfair, unusual, undo, unclear'],
              ['dis-', 'не-, роз-', 'disagree, disappear, dishonest, disconnect, dislike'],
              ['in- / im- / il- / ir-', 'не- (залежно від звуку)', 'informal, impossible, illegal, irregular, incorrect'],
              ['non-', 'не-, без-', 'non-stop, non-fiction, non-profit, non-violent'],
            ],
            en: { title: 'Prefixes — negation / opposite',
              rows: [
                ['Prefix', 'Meaning', 'Examples'],
                ['un-', 'not, opposite', 'unhappy, unfair, unusual, undo, unclear'],
                ['dis-', 'not, reverse', 'disagree, disappear, dishonest, disconnect, dislike'],
                ['in- / im- / il- / ir-', 'not (depends on sound)', 'informal, impossible, illegal, irregular, incorrect'],
                ['non-', 'not, without', 'non-stop, non-fiction, non-profit, non-violent'],
              ] },
          },
          {
            type: 'table', title: 'Префікси — значення',
            rows: [
              ['Префікс', 'Значення', 'Приклади'],
              ['over-', 'над-, пере- (надмірно)', 'overdo, overestimate, overlook, overwork, overreact'],
              ['under-', 'недо-, під-', 'underestimate, underpay, undercooked, underperform'],
              ['re-', 'знову, пере-', 'redo, rewrite, reconsider, reorganise, reuse'],
              ['mis-', 'неправильно, хибно', 'misunderstand, mislead, misuse, misspell, misinterpret'],
              ['pre-', 'до-, перед-', 'preview, predict, prevent, preorder, prehistory'],
              ['co-', 'спільно', 'cooperate, co-author, coexist, co-worker'],
            ],
            en: { title: 'Prefixes — meaning',
              rows: [
                ['Prefix', 'Meaning', 'Examples'],
                ['over-', 'too much, excessively', 'overdo, overestimate, overlook, overwork, overreact'],
                ['under-', 'too little, below', 'underestimate, underpay, undercooked, underperform'],
                ['re-', 'again, back', 'redo, rewrite, reconsider, reorganise, reuse'],
                ['mis-', 'wrongly, incorrectly', 'misunderstand, mislead, misuse, misspell, misinterpret'],
                ['pre-', 'before, in advance', 'preview, predict, prevent, preorder, prehistory'],
                ['co-', 'together, jointly', 'cooperate, co-author, coexist, co-worker'],
              ] },
          },
          {
            type: 'table', title: 'Суфікси — іменники від дієслів',
            rows: [
              ['Суфікс', 'Приклади'],
              ['-tion / -sion', 'education, decision, production, confusion, invitation'],
              ['-ment', 'development, management, improvement, agreement, movement'],
              ['-ance / -ence', 'performance, experience, independence, existence, entrance'],
              ['-er / -or', 'teacher, writer, driver, actor, director, visitor'],
              ['-al', 'arrival, refusal, survival, approval, denial'],
            ],
            en: { title: 'Suffixes — nouns from verbs' },
          },
          {
            type: 'table', title: 'Суфікси — іменники від прикметників',
            rows: [
              ['Суфікс', 'Приклади'],
              ['-ness', 'happiness, kindness, awareness, weakness, darkness'],
              ['-ity / -ty', 'creativity, quality, ability, beauty, reality, popularity'],
              ['-ism', 'realism, optimism, capitalism, criticism, tourism'],
            ],
            en: { title: 'Suffixes — nouns from adjectives' },
          },
          {
            type: 'table', title: 'Суфікси — прикметники',
            rows: [
              ['Суфікс', 'Значення', 'Приклади'],
              ['-ful', 'що має певну якість', 'beautiful, careful, helpful, powerful, useful'],
              ['-less', 'без певної якості', 'careless, hopeless, homeless, worthless, useless'],
              ['-ous / -ious', 'що має, характеризується', 'dangerous, famous, serious, obvious, furious'],
              ['-able / -ible', 'можна, придатний до', 'comfortable, reasonable, possible, responsible'],
              ['-al', 'що стосується', 'natural, cultural, traditional, original, global'],
              ['-ic', 'що стосується', 'romantic, realistic, systematic, historic, dramatic'],
              ['-ish', 'схожий на / приблизно', 'childish, foolish, British, reddish, tallish'],
            ],
            en: { title: 'Suffixes — adjectives',
              rows: [
                ['Suffix', 'Meaning', 'Examples'],
                ['-ful', 'having a quality', 'beautiful, careful, helpful, powerful, useful'],
                ['-less', 'without a quality', 'careless, hopeless, homeless, worthless, useless'],
                ['-ous / -ious', 'having, characterised by', 'dangerous, famous, serious, obvious, furious'],
                ['-able / -ible', 'can be, suitable for', 'comfortable, reasonable, possible, responsible'],
                ['-al', 'relating to', 'natural, cultural, traditional, original, global'],
                ['-ic', 'relating to', 'romantic, realistic, systematic, historic, dramatic'],
                ['-ish', 'like / approximately', 'childish, foolish, British, reddish, tallish'],
              ] },
          },
          {
            type: 'table', title: 'Суфікси — дієслова та прислівники',
            rows: [
              ['Суфікс', 'Частина мови', 'Приклади'],
              ['-ise / -ize', 'дієслово', 'modernise, organise, realise, summarise, specialise'],
              ['-en', 'дієслово', 'strengthen, widen, shorten, darken, deepen'],
              ['-ly', 'прислівник', 'quickly, carefully, seriously, honestly, surprisingly'],
            ],
            en: { title: 'Suffixes — verbs and adverbs',
              rows: [
                ['Suffix', 'Part of speech', 'Examples'],
                ['-ise / -ize', 'verb', 'modernise, organise, realise, summarise, specialise'],
                ['-en', 'verb', 'strengthen, widen, shorten, darken, deepen'],
                ['-ly', 'adverb', 'quickly, carefully, seriously, honestly, surprisingly'],
              ] },
          },
          { type: 'tip', title: 'Стратегія: розкладай слово на частини',
            text: '"Unacceptable" = un- (не) + accept (приймати) + -able (можна) = неприйнятний\n"Misunderstanding" = mis- (неправильно) + understand + -ing = непорозуміння\n"Overdevelopment" = over- (надмірно) + develop + -ment = надмірний розвиток',
            en: { title: 'Strategy: break a word into parts',
              text: '"Unacceptable" = un- (not) + accept + -able (can be) = not acceptable\n"Misunderstanding" = mis- (wrongly) + understand + -ing = failure to understand\n"Overdevelopment" = over- (excessively) + develop + -ment = excessive development' },
          },
        ],
      },

      {
        id: 'ellipsis-substitution', title: 'Еліпсис і заміна — B1', emoji: '♻️',
        titleEn: 'Ellipsis & Substitution — B1',
        sections: [
          { type: 'intro', text: 'Еліпсис (ellipsis) — пропуск слів, які вже зрозумілі з контексту. Заміна (substitution) — використання коротших слів замість довших фраз. Обидва роблять мову природною і уникають повторень.',
            en: { text: 'Ellipsis — omitting words that are already clear from context. Substitution — using shorter words instead of longer phrases. Both make speech natural and avoid repetition.' } },
          {
            type: 'table', title: 'So / Not — заміна цілого речення',
            rows: [
              ['Вираз', 'Значення', 'Приклад'],
              ['I think so.', 'Я думаю, що так.', '"Will it rain?" — "I think so."'],
              ["I don't think so.", 'Я думаю, що ні.', '"Is he coming?" — "I don\'t think so."'],
              ['I hope so.', 'Я сподіваюсь, що так.', '"Will they win?" — "I hope so."'],
              ['I hope not.', 'Я сподіваюсь, що ні.', '"Is it serious?" — "I hope not."'],
              ["I'm afraid so.", 'На жаль, так.', '"Did we miss it?" — "I\'m afraid so."'],
              ["I'm afraid not.", 'На жаль, ні.', '"Can you help?" — "I\'m afraid not."'],
              ['I suppose so.', 'Мабуть, так.', '"Should we wait?" — "I suppose so."'],
              ['I guess so.', 'Напевно, так. (розмовне)', '"Ready?" — "I guess so."'],
            ],
            en: { title: 'So / Not — substituting a whole clause',
              rows: [
                ['Expression', 'Meaning', 'Example'],
                ['I think so.', 'I think that is true.', '"Will it rain?" — "I think so."'],
                ["I don't think so.", 'I think not.', '"Is he coming?" — "I don\'t think so."'],
                ['I hope so.', 'I hope that is true.', '"Will they win?" — "I hope so."'],
                ['I hope not.', 'I hope that is not true.', '"Is it serious?" — "I hope not."'],
                ["I'm afraid so.", 'Unfortunately, yes.', '"Did we miss it?" — "I\'m afraid so."'],
                ["I'm afraid not.", 'Unfortunately, no.', '"Can you help?" — "I\'m afraid not."'],
                ['I suppose so.', 'Probably yes.', '"Should we wait?" — "I suppose so."'],
                ['I guess so.', 'Probably yes. (informal)', '"Ready?" — "I guess so."'],
              ] },
          },
          {
            type: 'table', title: 'So do I / Neither do I — згода з твердженням',
            rows: [
              ['Ствердне речення', 'Погодитись', 'Не погодитись'],
              ['I like jazz.', 'So do I. / I do too.', "I don't."],
              ["She's tired.", 'So am I. / I am too.', "I'm not."],
              ["They've finished.", 'So have I. / I have too.', "I haven't."],
              ['He works hard.', 'So does she. / She does too.', "She doesn't."],
              ['I was there.', 'So was I. / I was too.', "I wasn't."],
            ],
            en: { title: 'So do I / Neither do I — agreeing with a positive statement',
              rows: [
                ['Positive statement', 'Agree', 'Disagree'],
                ['I like jazz.', 'So do I. / I do too.', "I don't."],
                ["She's tired.", 'So am I. / I am too.', "I'm not."],
                ["They've finished.", 'So have I. / I have too.', "I haven't."],
                ['He works hard.', 'So does she. / She does too.', "She doesn't."],
                ['I was there.', 'So was I. / I was too.', "I wasn't."],
              ] },
          },
          {
            type: 'table', title: 'Neither do I / Nor do I — згода із запереченням',
            rows: [
              ['Заперечне речення', 'Погодитись', 'Не погодитись'],
              ["I don't like it.", 'Neither do I. / I don\'t either.', 'I do.'],
              ["He isn't ready.", "Neither am I. / I'm not either.", 'I am.'],
              ["She hasn't called.", "Neither has he. / He hasn't either.", 'He has.'],
              ["We can't come.", "Neither can I. / I can't either.", 'I can.'],
            ],
            en: { title: 'Neither do I / Nor do I — agreeing with a negative statement',
              rows: [
                ['Negative statement', 'Agree', 'Disagree'],
                ["I don't like it.", 'Neither do I. / I don\'t either.', 'I do.'],
                ["He isn't ready.", "Neither am I. / I'm not either.", 'I am.'],
                ["She hasn't called.", "Neither has he. / He hasn't either.", 'He has.'],
                ["We can't come.", "Neither can I. / I can't either.", 'I can.'],
              ] },
          },
          {
            type: 'table', title: 'Еліпсис — пропуск зрозумілих слів',
            rows: [
              ['Повне речення', 'З еліпсисом', 'Примітка'],
              ['I want to go, but I don\'t want to go alone.', "I want to go, but not alone.", 'пропуск "want to go"'],
              ['She can play piano and he can play piano too.', 'She can play piano and he can too.', 'пропуск "play piano"'],
              ['Are you coming? I hope you are coming.', "I hope so.", 'замість "you are coming"'],
              ["I meant to call you.", "I meant to.", 'пропуск "call you"'],
              ['Can you help? I\'ll try to help.', "I'll try to.", 'пропуск "help"'],
            ],
            en: { title: 'Ellipsis — omitting understood words',
              rows: [
                ['Full sentence', 'With ellipsis', 'Note'],
                ['I want to go, but I don\'t want to go alone.', "I want to go, but not alone.", 'omit "want to go"'],
                ['She can play piano and he can play piano too.', 'She can play piano and he can too.', 'omit "play piano"'],
                ['Are you coming? I hope you are coming.', "I hope so.", 'instead of "you are coming"'],
                ["I meant to call you.", "I meant to.", 'omit "call you"'],
                ['Can you help? I\'ll try to help.', "I'll try to.", 'omit "help"'],
              ] },
          },
          { type: 'tip', title: 'Do so — офіційна заміна дієслівної фрази',
            text: '"Please submit the report." — "I will do so immediately." (офіційне)\n"He signed the contract, and so did she."\n"If you need to leave early, feel free to do so."',
            en: { title: 'Do so — formal substitution for a verb phrase',
              text: '"Please submit the report." — "I will do so immediately." (formal)\n"He signed the contract, and so did she."\n"If you need to leave early, feel free to do so."' },
          },
        ],
      },

      {
        id: 'emphatic-do', title: 'Емфатичне do — B1', emoji: '💪',
        titleEn: 'Emphatic Do — B1',
        sections: [
          { type: 'intro', text: 'Емфатичне do/does/did + інфінітив без to — для підсилення, вираження несподіванки, суперечності або наполягання. Наголос завжди падає на do/does/did.',
            en: { text: 'Emphatic do/does/did + bare infinitive — used for emphasis, expressing surprise, contradiction or insistence. Stress always falls on do/does/did.' } },
          {
            type: 'formula', title: 'Структура',
            rows: [
              ['Present', 'I / You / We / They', 'DO + V₁', '→ I DO understand you!'],
              ['Present', 'He / She / It', 'DOES + V₁', '→ She DOES care about it.'],
              ['Past', 'Всі особи', 'DID + V₁', '→ He DID call — I heard it myself.'],
              ['Imperative', 'Запрошення / ввічливе прохання', 'DO + V₁', '→ Do sit down. / Do help yourself.'],
            ],
            en: { title: 'Structure',
              rows: [
                ['Present', 'I / You / We / They', 'DO + V₁', '→ I DO understand you!'],
                ['Present', 'He / She / It', 'DOES + V₁', '→ She DOES care about it.'],
                ['Past', 'All persons', 'DID + V₁', '→ He DID call — I heard it myself.'],
                ['Imperative', 'Invitation / polite request', 'DO + V₁', '→ Do sit down. / Do help yourself.'],
              ] },
          },
          {
            type: 'table', title: 'Коли вживається',
            rows: [
              ['Функція', 'Приклад', 'Переклад'],
              ['Суперечність', '"You never listen!" — "I DO listen!"', '"Я таки слухаю!"'],
              ['Підтвердження несподіваного', 'She did pass the exam after all.', 'Вона все-таки склала іспит.'],
              ['Наполягання', 'I did tell you about it last week.', 'Я таки казав тобі про це.'],
              ['Ввічлива команда/запрошення', 'Do come in. / Do try the cake.', 'Заходьте. / Спробуйте торт.'],
              ['Підсилення після прислівника', 'She rarely writes, but she did write to me.', 'Вона рідко пише, але таки написала.'],
              ['Контраст у порівнянні', 'I don\'t love opera, but I do enjoy musicals.', 'Опера — ні, але мюзикли — так.'],
            ],
            en: { title: 'When it is used',
              rows: [
                ['Function', 'Example', 'Translation'],
                ['Contradiction', '"You never listen!" — "I DO listen!"', '"I really do listen!"'],
                ['Confirming the unexpected', 'She did pass the exam after all.', 'She actually passed the exam.'],
                ['Insistence', 'I did tell you about it last week.', 'I really did tell you.'],
                ['Polite command/invitation', 'Do come in. / Do try the cake.', 'Please come in. / Please try the cake.'],
                ['Emphasis after an adverb', 'She rarely writes, but she did write to me.', 'She rarely writes but she actually wrote.'],
                ['Contrast', 'I don\'t love opera, but I do enjoy musicals.', 'Not opera, but musicals — yes.'],
              ] },
          },
          { type: 'note', title: 'Емфатичне do ≠ заперечення',
            text: 'Емфатичне do вживається ТІЛЬКИ у СТВЕРДЖУВАЛЬНИХ реченнях.\n✅ "I DO agree." (наголошено)\n❌ "I do not agree." (це звичайне заперечення, не емфатичне)',
            en: { title: 'Emphatic do ≠ negation',
              text: 'Emphatic do is used ONLY in AFFIRMATIVE sentences.\n✅ "I DO agree." (stressed)\n❌ "I do not agree." (this is an ordinary negative, not emphatic)' },
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['"You don\'t believe me." "I DO believe you!"', '"Ти мені не віриш." "Я таки вірю!"'],
              ['He did make a good impression on everyone.', 'Він справді справив хороше враження на всіх.'],
              ['Do feel free to ask any questions.', 'Будь ласка, не соромтесь ставити запитання.'],
              ['She does have a point, you know.', 'Вона, знаєш, має рацію.'],
            ],
          },
        ],
      },

      {
        id: 'advanced-passive', title: 'Просунутий пасив — C1', emoji: '🔄📢',
        titleEn: 'Advanced Passive — C1',
        sections: [
          { type: 'intro', text: 'Просунуті форми пасивного стану: пасив із дієсловами повідомлення (reporting verbs), get-пасив і подвійний пасив. Типові для академічного, журналістського та офіційного стилю.',
            en: { text: 'Advanced passive forms: passive with reporting verbs, get-passive, and double passive. Typical of academic, journalistic, and formal styles.' } },
          {
            type: 'table', title: 'Пасив із дієсловами повідомлення (Impersonal Passive)',
            rows: [
              ['Active (активний)', 'It is... (безособовий)', 'Subject is... (особовий)'],
              ['People say he is rich.', 'It is said that he is rich.', 'He is said to be rich.'],
              ['They believe she stole it.', 'It is believed that she stole it.', 'She is believed to have stolen it.'],
              ['They report he has escaped.', 'It is reported that he has escaped.', 'He is reported to have escaped.'],
              ['People consider her brilliant.', 'It is considered that she is brilliant.', 'She is considered to be brilliant.'],
              ['They claim the drug is safe.', 'It is claimed that the drug is safe.', 'The drug is claimed to be safe.'],
              ['Everyone knows he lied.', 'It is known that he lied.', 'He is known to have lied.'],
            ],
            en: { title: 'Passive with reporting verbs (Impersonal Passive)' },
          },
          {
            type: 'table', title: 'Часові форми в особовому пасиві',
            rows: [
              ['Значення', 'Структура', 'Приклад'],
              ['Теперішнє', 'is/are + said + to + V₁', 'He is thought to live abroad.'],
              ['Минуле', 'is/are + said + to + have + V₃', 'She is believed to have left the country.'],
              ['Тривале', 'is/are + said + to + be + V-ing', 'The suspects are reported to be hiding.'],
            ],
            en: { title: 'Tense forms in personal passive',
              rows: [
                ['Meaning', 'Structure', 'Example'],
                ['Present', 'is/are + said + to + V₁', 'He is thought to live abroad.'],
                ['Past', 'is/are + said + to + have + V₃', 'She is believed to have left the country.'],
                ['Continuous', 'is/are + said + to + be + V-ing', 'The suspects are reported to be hiding.'],
              ] },
          },
          {
            type: 'table', title: 'Get-пасив (розмовний)',
            rows: [
              ['Значення', 'Приклад', 'Be-пасив (формальніший)'],
              ['Несподівана або небажана дія', 'He got fired last week.', 'He was fired last week.'],
              ['Нещасний випадок', 'She got hurt in the accident.', 'She was hurt in the accident.'],
              ['Досягнення/процес', 'The work got done eventually.', 'The work was done eventually.'],
              ['Passive з reflexive', 'Get dressed. / Get lost.', 'Be dressed. (рідше)'],
            ],
            en: { title: 'Get-passive (informal)',
              rows: [
                ['Meaning', 'Example', 'Be-passive (more formal)'],
                ['Unexpected or unwanted action', 'He got fired last week.', 'He was fired last week.'],
                ['Accident', 'She got hurt in the accident.', 'She was hurt in the accident.'],
                ['Achievement/process', 'The work got done eventually.', 'The work was done eventually.'],
                ['Passive with reflexive', 'Get dressed. / Get lost.', 'Be dressed. (less common)'],
              ] },
          },
          {
            type: 'table', title: 'Пасив + модальні в минулому',
            rows: [
              ['Структура', 'Значення', 'Приклад'],
              ['must have been + V₃', 'майже точно сталось (пасивно)', 'The file must have been deleted.'],
              ['could have been + V₃', 'могло статись (пасивно)', 'The mistake could have been avoided.'],
              ['should have been + V₃', 'мало б статись (пасивно)', 'The report should have been submitted.'],
              ['might have been + V₃', 'можливо сталось (пасивно)', 'He might have been informed already.'],
            ],
            en: { title: 'Passive + past modals',
              rows: [
                ['Structure', 'Meaning', 'Example'],
                ['must have been + V₃', 'almost certainly happened (passive)', 'The file must have been deleted.'],
                ['could have been + V₃', 'possibly happened (passive)', 'The mistake could have been avoided.'],
                ['should have been + V₃', 'should have happened (passive)', 'The report should have been submitted.'],
                ['might have been + V₃', 'possibly happened (passive)', 'He might have been informed already.'],
              ] },
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['It is widely believed that the economy will recover.', 'Широко вважається, що економіка відновиться.'],
              ['The suspect is thought to have fled the country.', 'Підозрюваний, як вважають, втік з країни.'],
              ['She got promoted after only six months.', 'Вона отримала підвищення всього за пів року.'],
              ['The documents are said to have been destroyed.', 'Кажуть, що документи були знищені.'],
            ],
          },
        ],
      },

      {
        id: 'hedging', title: 'Хеджинг (Hedging) — C1', emoji: '🛡️',
        titleEn: 'Hedging — C1',
        sections: [
          { type: 'intro', text: 'Hedging — навмисно обережна, пом\'якшена мова для уникнення категоричних тверджень. Необхідна в академічному письмі, діловому спілкуванні та дипломатичному мовленні.',
            en: { text: 'Hedging — deliberately cautious, softened language to avoid making absolute claims. Essential in academic writing, business communication, and diplomatic speech.' } },
          {
            type: 'table', title: 'Модальні хеджі',
            rows: [
              ['Слово/фраза', 'Ступінь невпевненості', 'Приклад'],
              ['would / could', 'гіпотетично', '"This would suggest that..." / "This could indicate..."'],
              ['might / may', 'можливо', '"There might be other factors involved."'],
              ['should', 'очікувано, але не певно', '"This should improve the results."'],
              ['tend to', 'зазвичай, як правило', '"Students tend to underestimate the workload."'],
              ['seem / appear', 'здається, схоже', '"It appears to be correct." / "She seems to understand."'],
            ],
            en: { title: 'Modal hedges',
              rows: [
                ['Word/phrase', 'Degree of uncertainty', 'Example'],
                ['would / could', 'hypothetically', '"This would suggest that..." / "This could indicate..."'],
                ['might / may', 'possibly', '"There might be other factors involved."'],
                ['should', 'expected, but not certain', '"This should improve the results."'],
                ['tend to', 'generally, as a rule', '"Students tend to underestimate the workload."'],
                ['seem / appear', 'seems, appears to be', '"It appears to be correct." / "She seems to understand."'],
              ] },
          },
          {
            type: 'table', title: 'Дієслова-хеджі',
            rows: [
              ['Дієслово', 'Замість', 'Приклад'],
              ['suggest / indicate', 'prove / show', '"The data suggests a link..." (не "proves")'],
              ['appear / seem', 'be', '"It appears to be effective."'],
              ['believe / think', 'know', '"We believe this is the case."'],
              ['assume / suppose', 'know for certain', '"We can assume that..."'],
              ['estimate / approximate', 'calculate exactly', '"We estimate the cost to be..."'],
            ],
            en: { title: 'Verb hedges',
              rows: [
                ['Verb', 'Instead of', 'Example'],
                ['suggest / indicate', 'prove / show', '"The data suggests a link..." (not "proves")'],
                ['appear / seem', 'be', '"It appears to be effective."'],
                ['believe / think', 'know', '"We believe this is the case."'],
                ['assume / suppose', 'know for certain', '"We can assume that..."'],
                ['estimate / approximate', 'calculate exactly', '"We estimate the cost to be..."'],
              ] },
          },
          {
            type: 'table', title: 'Прислівники та фрази-хеджі',
            rows: [
              ['Тип', 'Слова/фрази'],
              ['Частота/типовість', 'generally, usually, typically, in most cases, as a rule'],
              ['Невпевненість', 'arguably, apparently, seemingly, supposedly, presumably'],
              ['Наближеність', 'roughly, approximately, around, about, in the region of'],
              ['Обмеження', 'to some extent, to a certain degree, in some ways, in many respects'],
              ['Дистанціювання', '"It could be argued that..." / "It would seem that..."'],
            ],
            en: { title: 'Adverbs and hedging phrases',
              rows: [
                ['Type', 'Words/phrases'],
                ['Frequency/typicality', 'generally, usually, typically, in most cases, as a rule'],
                ['Uncertainty', 'arguably, apparently, seemingly, supposedly, presumably'],
                ['Approximation', 'roughly, approximately, around, about, in the region of'],
                ['Limitation', 'to some extent, to a certain degree, in some ways, in many respects'],
                ['Distancing', '"It could be argued that..." / "It would seem that..."'],
              ] },
          },
          {
            type: 'table', title: 'Академічні хеджингові фрази',
            rows: [
              ['Категорична мова ❌', 'Хеджингова мова ✅'],
              ['This proves that...', 'This suggests / indicates that...'],
              ['It is clear that...', 'It would appear that... / It seems that...'],
              ['This causes...', 'This may contribute to... / This tends to cause...'],
              ['All students feel...', 'Many students tend to feel... / Some students appear to...'],
              ['The results show...', 'The results would seem to indicate...'],
            ],
            en: { title: 'Academic hedging phrases' },
          },
          { type: 'tip', title: 'Хеджинг ≠ слабкість',
            text: 'Хеджинг не означає, що ти не впевнений — він показує, що ти добросовісний і чесний у своїх твердженнях.\n\nНауковець, який пише "this may indicate" замість "this proves", виглядає БІЛЬШ авторитетно — бо не перебільшує.',
            en: { title: 'Hedging ≠ weakness',
              text: 'Hedging does not mean you are uncertain — it shows you are conscientious and honest in your claims.\n\nA researcher who writes "this may indicate" instead of "this proves" sounds MORE authoritative — because they do not overstate.' },
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['There tends to be a gap between theory and practice.', 'Зазвичай існує розрив між теорією і практикою.'],
              ['It would appear that the situation is improving.', 'Схоже, ситуація покращується.'],
              ['The findings suggest a possible link between stress and illness.', 'Результати вказують на можливий зв\'язок між стресом та хворобою.'],
              ['To some extent, success depends on luck.', 'Певною мірою успіх залежить від удачі.'],
            ],
          },
        ],
      },

      {
        id: 'nominalisation', title: 'Номіналізація — C1', emoji: '📝',
        titleEn: 'Nominalisation — C1',
        sections: [
          { type: 'intro', text: 'Номіналізація (nominalisation) — перетворення дієслів і прикметників на іменники. Робить мову офіційнішою, стислішою та характерною для академічного і ділового письма.',
            en: { text: 'Nominalisation — converting verbs and adjectives into nouns. Makes language more formal, concise, and typical of academic and business writing.' } },
          {
            type: 'table', title: 'Схеми перетворення',
            rows: [
              ['Джерело', 'Суфікс', 'Приклади'],
              ['Дієслово → іменник', '-tion / -sion', 'decide → decision, produce → production, discuss → discussion'],
              ['Дієслово → іменник', '-ment', 'develop → development, improve → improvement, manage → management'],
              ['Дієслово → іменник', '-al', 'arrive → arrival, refuse → refusal, propose → proposal'],
              ['Дієслово → іменник', '-ance / -ence', 'perform → performance, exist → existence, prefer → preference'],
              ['Дієслово → іменник', '-ing (process)', 'teach → teaching, manage → managing, understand → understanding'],
              ['Прикметник → іменник', '-ness', 'happy → happiness, aware → awareness, weak → weakness'],
              ['Прикметник → іменник', '-ity', 'creative → creativity, able → ability, similar → similarity'],
              ['Прикметник → іменник', '-th', 'strong → strength, wide → width, warm → warmth'],
            ],
            en: { title: 'Conversion patterns',
              rows: [
                ['Source', 'Suffix', 'Examples'],
                ['Verb → noun', '-tion / -sion', 'decide → decision, produce → production, discuss → discussion'],
                ['Verb → noun', '-ment', 'develop → development, improve → improvement, manage → management'],
                ['Verb → noun', '-al', 'arrive → arrival, refuse → refusal, propose → proposal'],
                ['Verb → noun', '-ance / -ence', 'perform → performance, exist → existence, prefer → preference'],
                ['Verb → noun', '-ing (process)', 'teach → teaching, manage → managing, understand → understanding'],
                ['Adjective → noun', '-ness', 'happy → happiness, aware → awareness, weak → weakness'],
                ['Adjective → noun', '-ity', 'creative → creativity, able → ability, similar → similarity'],
                ['Adjective → noun', '-th', 'strong → strength, wide → width, warm → warmth'],
              ] },
          },
          {
            type: 'table', title: 'Порівняння: розмовний vs формальний стиль',
            rows: [
              ['Розмовний (дієслова)', 'Формальний (номіналізація)'],
              ['We discussed how to solve the problem.', 'Our discussion focused on problem-solving solutions.'],
              ['The government decided to increase taxes.', "The government's decision to increase taxes..."],
              ['If we improve the system, we\'ll succeed.', 'System improvement will lead to success.'],
              ['He failed to meet the deadline.', 'His failure to meet the deadline resulted in...'],
              ['They analysed the data carefully.', 'A careful analysis of the data revealed...'],
              ['The company expanded rapidly.', 'The rapid expansion of the company led to...'],
              ['Scientists discovered a new planet.', 'The discovery of a new planet by scientists...'],
            ],
            en: { title: 'Comparison: informal vs formal style',
              rows: [
                ['Informal (verbs)', 'Formal (nominalisation)'],
                ['We discussed how to solve the problem.', 'Our discussion focused on problem-solving solutions.'],
                ['The government decided to increase taxes.', "The government's decision to increase taxes..."],
                ['If we improve the system, we\'ll succeed.', 'System improvement will lead to success.'],
                ['He failed to meet the deadline.', 'His failure to meet the deadline resulted in...'],
                ['They analysed the data carefully.', 'A careful analysis of the data revealed...'],
                ['The company expanded rapidly.', 'The rapid expansion of the company led to...'],
                ['Scientists discovered a new planet.', 'The discovery of a new planet by scientists...'],
              ] },
          },
          { type: 'tip', title: 'Переваги номіналізації',
            text: '✅ Офіційний, нейтральний тон\n✅ Дозволяє будувати складніші речення\n✅ Акцент на дії, а не на діяча ("the decision was made" vs "they decided")\n✅ Стисліше у деяких контекстах\n\n⚠️ Надмірна номіналізація робить текст громіздким:\n❌ "The facilitation of the implementation of the reorganisation..." → ✅ "Helping to reorganise..."',
            en: { title: 'Advantages of nominalisation',
              text: '✅ Formal, neutral tone\n✅ Allows building more complex sentences\n✅ Focus on the action, not the agent ("the decision was made" vs "they decided")\n✅ More concise in some contexts\n\n⚠️ Excessive nominalisation makes text heavy:\n❌ "The facilitation of the implementation of the reorganisation..." → ✅ "Helping to reorganise..."' },
          },
          { type: 'note', title: 'Артикль + номіналізація',
            text: 'Номіналізовані іменники часто вживаються з артиклями або присвійними займенниками:\n"The announcement of the results..." (the + noun + of)\n"Their refusal to cooperate..." (possessive + noun + to)\n"A significant improvement in..." (a/an + adj + noun + in)',
            en: { title: 'Article + nominalisation',
              text: 'Nominalised nouns are often used with articles or possessives:\n"The announcement of the results..." (the + noun + of)\n"Their refusal to cooperate..." (possessive + noun + to)\n"A significant improvement in..." (a/an + adj + noun + in)' },
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['The investigation into corruption took two years.', 'Розслідування корупції тривало два роки.'],
              ['Her understanding of the situation was impressive.', 'Її розуміння ситуації вражало.'],
              ['The introduction of new technology changed everything.', 'Введення нової технології змінило все.'],
              ['There has been a significant improvement in air quality.', 'Якість повітря значно покращилась.'],
            ],
          },
        ],
      },

      // ── 1. There is / There are ───────────────────────────────
      {
        id: 'there-is-are', title: 'There is / There are — A1', emoji: '📍',
        sections: [
          {
            type: 'intro',
            text: '<b>There is / There are</b> — конструкція для позначення існування або наявності чогось. Відповідає українському "є", "існує", "знаходиться".',
            en: { text: '<b>There is / There are</b> — a construction for expressing the existence or presence of something. Equivalent to "there is/are" in terms of location or existence.' },
          },
          {
            type: 'formula', title: 'Структура',
            rows: [
              ['✅ Одн.', 'There is', '+ іменник (одн.)', 'There is a cat on the roof.'],
              ['✅ Мн.', 'There are', '+ іменник (мн.)', 'There are five students here.'],
              ['❌ Одн.', 'There is not / isn\'t', '+ іменник', 'There isn\'t any milk.'],
              ['❌ Мн.', 'There are not / aren\'t', '+ іменник', 'There aren\'t any chairs.'],
              ['❓ Одн.', 'Is there', '+ іменник?', 'Is there a problem?'],
              ['❓ Мн.', 'Are there', '+ іменник?', 'Are there any questions?'],
            ],
            en: { title: 'Structure',
              rows: [
                ['✅ Sing.', 'There is', '+ noun (singular)', 'There is a cat on the roof.'],
                ['✅ Pl.', 'There are', '+ noun (plural)', 'There are five students here.'],
                ['❌ Sing.', 'There is not / isn\'t', '+ noun', 'There isn\'t any milk.'],
                ['❌ Pl.', 'There are not / aren\'t', '+ noun', 'There aren\'t any chairs.'],
                ['❓ Sing.', 'Is there', '+ noun?', 'Is there a problem?'],
                ['❓ Pl.', 'Are there', '+ noun?', 'Are there any questions?'],
              ] },
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['There is a bank near here.', 'Поруч є банк.'],
              ['There are many people in the park.', 'У парку багато людей.'],
              ['There isn\'t any coffee left.', 'Кави не залишилось.'],
              ['Are there any rooms available?', 'Є вільні номери?'],
              ['There was a great party last night.', 'Вчора була чудова вечірка.'],
              ['There will be a meeting tomorrow.', 'Завтра буде зустріч.'],
            ],
          },
          {
            type: 'tip',
            title: 'There is vs It is',
            text: '<b>There is</b> = "є/існує" (нова інформація)\n<b>It is</b> = "це є" (про вже відомий предмет)\nThere is a dog outside. → It is very big.',
            en: { title: 'There is vs It is',
              text: '<b>There is</b> = existence (new information)\n<b>It is</b> = describing a known object\nThere is a dog outside. → It is very big.' },
          },
          {
            type: 'note',
            title: 'Some / Any',
            text: 'У стверджувальних реченнях використовуємо <b>some</b>: There is some bread.\nУ питальних та заперечних — <b>any</b>: Is there any bread? / There isn\'t any bread.',
            en: { title: 'Some / Any',
              text: 'In affirmative sentences we use <b>some</b>: There is some bread.\nIn questions and negatives — <b>any</b>: Is there any bread? / There isn\'t any bread.' },
          },
        ],
      },

      // ── 2. Possessives ────────────────────────────────────────
      {
        id: 'possessives', title: 'Присвійні форми — A2', emoji: '🏷️',
        titleEn: 'Possessives — A2',
        sections: [
          {
            type: 'intro',
            text: 'Англійська має три способи вираження приналежності: <b>\'s</b> (Saxon genitive), <b>of</b>, та <b>присвійні займенники</b> (my, mine тощо).',
            en: { text: 'English has three ways to express possession: <b>\'s</b> (Saxon genitive), <b>of</b>, and <b>possessive pronouns</b> (my, mine, etc.).' },
          },
          {
            type: 'table', title: 'Присвійні займенники',
            rows: [
              ['Особа', 'Присвійний прикметник', 'Присвійний займенник'],
              ['I', 'my (мій/моя)', 'mine (мій/моя)'],
              ['You', 'your (твій/ваш)', 'yours (твій/ваш)'],
              ['He', 'his (його)', 'his (його)'],
              ['She', 'her (її)', 'hers (її)'],
              ['We', 'our (наш)', 'ours (наш)'],
              ['They', 'their (їхній)', 'theirs (їхній)'],
            ],
            en: { title: 'Possessive pronouns',
              rows: [
                ['Person', 'Possessive adjective', 'Possessive pronoun'],
                ['I', 'my', 'mine'],
                ['You', 'your', 'yours'],
                ['He', 'his', 'his'],
                ['She', 'her', 'hers'],
                ['We', 'our', 'ours'],
                ['They', 'their', 'theirs'],
              ] },
          },
          {
            type: 'formula', title: '\'s — Saxon genitive',
            rows: [
              ['✅ Одна особа', 'noun + \'s', '', 'John\'s car, the dog\'s tail'],
              ['✅ Мн. на -s', 'noun + \'', '', 'the teachers\' room'],
              ['✅ Мн. без -s', 'noun + \'s', '', 'children\'s books, men\'s shoes'],
            ],
            en: { title: '\'s — Saxon genitive',
              rows: [
                ['✅ Single person/thing', 'noun + \'s', '', 'John\'s car, the dog\'s tail'],
                ['✅ Plural ending in -s', 'noun + \'', '', 'the teachers\' room'],
                ['✅ Plural not ending in -s', 'noun + \'s', '', 'children\'s books, men\'s shoes'],
              ] },
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['This is my book. That book is mine.', 'Це моя книга. Та книга — моя.'],
              ['Is this your jacket? — No, it\'s hers.', 'Це твоя куртка? — Ні, її.'],
              ['Tom\'s phone is broken.', 'Телефон Тома зламаний.'],
              ['The children\'s toys are everywhere.', 'Іграшки дітей скрізь.'],
              ['The roof of the building is flat.', 'Дах будівлі плаский.'],
              ['Our house is bigger than theirs.', 'Наш будинок більший за їхній.'],
            ],
          },
          {
            type: 'tip',
            title: '\'s vs of',
            text: '\'s — для людей, тварин, часу: <i>Anna\'s idea, yesterday\'s news</i>\nof — для речей, місць, абстракцій: <i>the centre of the city, the end of the film</i>',
            en: { title: '\'s vs of',
              text: '\'s — for people, animals, time: <i>Anna\'s idea, yesterday\'s news</i>\nof — for things, places, abstractions: <i>the centre of the city, the end of the film</i>' },
          },
        ],
      },

      // ── 3. Tag Questions ──────────────────────────────────────
      {
        id: 'tag-questions', title: 'Питальні хвостики — A2', emoji: '❔',
        titleEn: 'Tag Questions — A2',
        sections: [
          {
            type: 'intro',
            text: '<b>Tag questions</b> (питальні хвостики) — короткі питання в кінці речення для підтвердження або уточнення інформації. Відповідають українському "чи не так?", "правда?", "так?".',
            en: { text: '<b>Tag questions</b> — short questions added at the end of a sentence to seek confirmation or clarification. Equivalent to "isn\'t it?", "right?", "don\'t you?" etc.' },
          },
          {
            type: 'formula', title: 'Правило',
            rows: [
              ['✅ Стверджувальне', '→ від\'ємний хвостик', '', 'You are ready, aren\'t you?'],
              ['❌ Від\'ємне', '→ стверджувальний хвостик', '', 'She isn\'t home, is she?'],
              ['❓ Спеціальні', 'I am → aren\'t I?', '', 'I am late, aren\'t I?'],
            ],
            en: { title: 'Rule',
              rows: [
                ['✅ Affirmative statement', '→ negative tag', '', 'You are ready, aren\'t you?'],
                ['❌ Negative statement', '→ positive tag', '', 'She isn\'t home, is she?'],
                ['❓ Special cases', 'I am → aren\'t I?', '', 'I am late, aren\'t I?'],
              ] },
          },
          {
            type: 'table', title: 'Часто вживані хвостики',
            rows: [
              ['Речення', 'Хвостик'],
              ['You are a student,', 'aren\'t you?'],
              ['He can swim,', 'can\'t he?'],
              ['They went home,', 'didn\'t they?'],
              ['She has never been there,', 'has she?'],
              ['It was raining,', 'wasn\'t it?'],
              ['We should call,', 'shouldn\'t we?'],
              ['Nobody came,', 'did they?'],
            ],
            en: { title: 'Common tag questions' },
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['It\'s a beautiful day, isn\'t it?', 'Чудовий день, чи не так?'],
              ['You don\'t like coffee, do you?', 'Ти не любиш каву, так?'],
              ['She can speak French, can\'t she?', 'Вона вміє говорити французькою, чи не так?'],
              ['They didn\'t tell you, did they?', 'Вони тобі не сказали, так?'],
              ['Let\'s go for a walk, shall we?', 'Ходімо на прогулянку, добре?'],
              ['Nothing happened, did it?', 'Нічого не сталось, правда?'],
            ],
          },
          {
            type: 'note',
            title: 'Інтонація',
            text: 'Спадна інтонація (↘) на хвостику = справжнє питання, чекаємо відповідь.\nЗростаюча інтонація (↗) = шукаємо підтвердження того, в чому впевнені.',
            en: { title: 'Intonation',
              text: 'Falling intonation (↘) on the tag = genuine question, expecting an answer.\nRising intonation (↗) = seeking confirmation of something we believe to be true.' },
          },
        ],
      },

      // ── 4. Future Forms Contrast ──────────────────────────────
      {
        id: 'future-forms', title: 'Майбутнє: контраст форм — B1', emoji: '🔮',
        titleEn: 'Future Forms: Contrasted — B1',
        sections: [
          {
            type: 'intro',
            text: 'Англійська не має одного "майбутнього часу". Залежно від контексту використовуються <b>will, be going to</b> або <b>Present Continuous</b>.',
            en: { text: 'English has no single "future tense". Depending on context, we use <b>will, be going to</b>, or <b>Present Continuous</b>.' },
          },
          {
            type: 'table', title: 'Порівняння форм майбутнього',
            rows: [
              ['Форма', 'Коли використовувати', 'Приклад'],
              ['will + V', 'Спонтанне рішення, пропозиція, передбачення', 'I\'ll help you! / It will rain.'],
              ['be going to', 'Заплановане рішення, очевидне майбутнє', 'I\'m going to study tonight.'],
              ['Present Continuous', 'Конкретна домовленість у майбутньому', 'We\'re meeting at 6 pm.'],
              ['Present Simple', 'Розклад, програма', 'The train leaves at 9.'],
            ],
            en: { title: 'Comparison of future forms',
              rows: [
                ['Form', 'When to use', 'Example'],
                ['will + V', 'Spontaneous decision, offer, prediction', 'I\'ll help you! / It will rain.'],
                ['be going to', 'Planned decision, evident future', 'I\'m going to study tonight.'],
                ['Present Continuous', 'Specific arrangement in the future', 'We\'re meeting at 6 pm.'],
                ['Present Simple', 'Schedule, timetable', 'The train leaves at 9.'],
              ] },
          },
          {
            type: 'examples', title: 'Will — спонтанне рішення',
            rows: [
              ['The phone is ringing. — I\'ll get it!', 'Телефон дзвонить. — Я відповім!'],
              ['I think it will be sunny tomorrow.', 'Думаю, завтра буде сонячно.'],
              ['Don\'t worry, I\'ll help you.', 'Не хвилюйся, я допоможу тобі.'],
            ],
          },
          {
            type: 'examples', title: 'Be going to — план/намір',
            rows: [
              ['I\'m going to learn Spanish next year.', 'Наступного року я планую вивчати іспанську.'],
              ['Look at those clouds! It\'s going to rain.', 'Подивись на ті хмари! Зараз піде дощ.'],
              ['She\'s going to quit her job.', 'Вона збирається звільнитися.'],
            ],
          },
          {
            type: 'examples', title: 'Present Continuous — домовленість',
            rows: [
              ['We\'re having dinner with my parents on Friday.', 'У п\'ятницю ми вечеряємо з моїми батьками.'],
              ['She\'s flying to Paris next Monday.', 'Наступного понеділка вона летить до Парижа.'],
              ['They\'re getting married in June.', 'Вони одружуються у червні.'],
            ],
          },
          {
            type: 'tip',
            title: 'Ключова відмінність',
            text: '<b>Will</b> — рішення прямо зараз (щойно вирішили)\n<b>Going to</b> — рішення вже прийняте раніше\n<b>Present Continuous</b> — вже запланована, конкретна зустріч/подія',
            en: { title: 'Key difference',
              text: '<b>Will</b> — decision made right now (just decided)\n<b>Going to</b> — decision already made earlier\n<b>Present Continuous</b> — already arranged, specific appointment/event' },
          },
        ],
      },

      // ── 5. Verb Patterns ──────────────────────────────────────
      {
        id: 'verb-patterns', title: 'Дієслівні моделі з об\'єктом — B1', emoji: '🎯',
        titleEn: 'Verb Patterns with Object — B1',
        sections: [
          {
            type: 'intro',
            text: 'Деякі дієслова вимагають після себе об\'єкт + певну форму дієслова: <b>make sb do, let sb do, see sb doing, ask sb to do</b>. Це фіксовані моделі — їх потрібно вивчати.',
            en: { text: 'Some verbs require an object + a specific verb form after them: <b>make sb do, let sb do, see sb doing, ask sb to do</b>. These are fixed patterns that need to be learned.' },
          },
          {
            type: 'table', title: 'Основні моделі',
            rows: [
              ['Дієслово', 'Модель', 'Приклад'],
              ['make', 'make sb do (без to)', 'She made me apologize.'],
              ['let', 'let sb do (без to)', 'Let me try!'],
              ['have', 'have sb do (без to)', 'I\'ll have someone fix it.'],
              ['see / hear / watch', 'see/hear sb do або doing', 'I saw him leave / leaving.'],
              ['ask / tell / want / need', '+ sb + to do', 'Ask her to call back.'],
              ['help', 'help sb (to) do', 'Can you help me (to) carry this?'],
              ['allow / permit / enable', '+ sb + to do', 'She allowed us to leave early.'],
            ],
            en: { title: 'Key patterns',
              rows: [
                ['Verb', 'Pattern', 'Example'],
                ['make', 'make sb do (no to)', 'She made me apologize.'],
                ['let', 'let sb do (no to)', 'Let me try!'],
                ['have', 'have sb do (no to)', 'I\'ll have someone fix it.'],
                ['see / hear / watch', 'see/hear sb do or doing', 'I saw him leave / leaving.'],
                ['ask / tell / want / need', '+ sb + to do', 'Ask her to call back.'],
                ['help', 'help sb (to) do', 'Can you help me (to) carry this?'],
                ['allow / permit / enable', '+ sb + to do', 'She allowed us to leave early.'],
              ] },
          },
          {
            type: 'examples', title: 'Make vs Let',
            rows: [
              ['My boss made me work overtime.', 'Шеф змусив мене працювати понаднормово.'],
              ['My parents didn\'t let me go out.', 'Батьки не дозволили мені виходити.'],
              ['She made us wait for an hour.', 'Вона змусила нас чекати годину.'],
              ['Let him speak — don\'t interrupt.', 'Дайте йому говорити — не перебивайте.'],
            ],
          },
          {
            type: 'examples', title: 'See / hear + object',
            rows: [
              ['I saw her cross the street.', 'Я бачив, як вона перейшла вулицю (вся дія).'],
              ['I saw her crossing the street.', 'Я бачив, як вона переходила вулицю (в процесі).'],
              ['We heard someone knock at the door.', 'Ми почули, як хтось постукав у двері.'],
              ['I heard him playing the guitar.', 'Я чув, як він грав на гітарі.'],
            ],
          },
          {
            type: 'examples', title: 'Ask / tell / want + to',
            rows: [
              ['She asked me to help her.', 'Вона попросила мене допомогти.'],
              ['The teacher told us to be quiet.', 'Вчитель сказав нам замовкнути.'],
              ['I want you to understand this.', 'Я хочу, щоб ти це зрозумів.'],
              ['They need someone to fix the roof.', 'Їм потрібен хтось, щоб полагодити дах.'],
            ],
          },
          {
            type: 'note',
            title: 'Пасивний стан',
            text: 'У пасивному стані після make і let з\'являється to:\nShe made him wait. → He was made <b>to</b> wait.\nPassive: be made to do, be allowed to do, be seen to do',
            en: { title: 'Passive voice',
              text: 'In the passive, make and let require to:\nShe made him wait. → He was made <b>to</b> wait.\nPassive: be made to do, be allowed to do, be seen to do' },
          },
        ],
      },

      // ── 6. It + to-infinitive ─────────────────────────────────
      {
        id: 'it-infinitive', title: 'It + to-infinitive — B1', emoji: '💡',
        titleEn: 'It + to-infinitive — B1',
        sections: [
          {
            type: 'intro',
            text: 'Конструкція <b>It + прикметник/іменник + to-infinitive</b> дозволяє уникнути важкого підмета. "It" є формальним підметом, а справжній зміст — у to-інфінітиві.',
            en: { text: 'The construction <b>It + adjective/noun + to-infinitive</b> allows avoiding a heavy subject. "It" is the formal subject; the real meaning is in the to-infinitive.' },
          },
          {
            type: 'formula', title: 'Структура',
            rows: [
              ['✅ Базова', 'It + is + adj + to do', '', 'It is important to exercise.'],
              ['✅ З for sb', 'It + is + adj + for sb + to do', '', 'It is hard for me to decide.'],
              ['✅ З дієсловом', 'It + takes/costs + to do', '', 'It takes time to learn.'],
              ['✅ Worth', 'It is worth + -ing', '', 'It\'s worth trying.'],
            ],
          },
          {
            type: 'table', title: 'Поширені прикметники в цій конструкції',
            rows: [
              ['Категорія', 'Прикметники'],
              ['Складність', 'easy, hard, difficult, impossible, complicated'],
              ['Важливість', 'important, essential, vital, necessary, crucial'],
              ['Емоції', 'great, wonderful, nice, terrible, exciting, strange'],
              ['Час/вартість', 'takes time, costs money, worth doing'],
            ],
            en: { title: 'Common adjectives in this construction',
              rows: [
                ['Category', 'Adjectives'],
                ['Difficulty', 'easy, hard, difficult, impossible, complicated'],
                ['Importance', 'important, essential, vital, necessary, crucial'],
                ['Emotions', 'great, wonderful, nice, terrible, exciting, strange'],
                ['Time/cost', 'takes time, costs money, worth doing'],
              ] },
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['It\'s important to drink enough water.', 'Важливо пити достатньо води.'],
              ['It\'s difficult to learn a new language.', 'Важко вивчити нову мову.'],
              ['It\'s easy for her to make friends.', 'Їй легко заводити друзів.'],
              ['It takes courage to admit mistakes.', 'Потрібна сміливість, щоб визнавати помилки.'],
              ['It\'s worth seeing that film.', 'Той фільм вартий перегляду.'],
              ['It would be great to travel the world.', 'Було б чудово подорожувати світом.'],
              ['It\'s no use crying over spilled milk.', 'Немає сенсу плакати над пролитим молоком.'],
            ],
          },
          {
            type: 'tip',
            title: 'It vs Gerund як підмет',
            text: 'Обидва варіанти правильні:\n→ <b>It is</b> fun to swim. = <b>Swimming</b> is fun.\nАле "It" — більш формальний та природний у розмовній мові.',
            en: { title: 'It vs Gerund as subject',
              text: 'Both options are correct:\n→ <b>It is</b> fun to swim. = <b>Swimming</b> is fun.\nBut "It" is more formal and natural in spoken language.' },
          },
        ],
      },

      // ── 7. Collocations ───────────────────────────────────────
      {
        id: 'collocations', title: 'Колокації — B1', emoji: '🤝',
        titleEn: 'Collocations — B1',
        sections: [
          {
            type: 'intro',
            text: '<b>Колокації</b> — стійкі словосполучення, де слова природно йдуть разом. Англійці не кажуть "do a mistake" — кажуть "make a mistake". Це потрібно просто запам\'ятати.',
            en: { text: '<b>Collocations</b> — fixed word combinations that naturally go together. Native speakers don\'t say "do a mistake" — they say "make a mistake". These just have to be memorized.' },
          },
          {
            type: 'table', title: 'MAKE — творення, результат',
            rows: [
              ['make + noun', 'Переклад'],
              ['make a mistake', 'зробити помилку'],
              ['make a decision', 'прийняти рішення'],
              ['make an effort', 'докласти зусиль'],
              ['make progress', 'робити прогрес'],
              ['make a phone call', 'зателефонувати'],
              ['make a suggestion', 'зробити пропозицію'],
              ['make money', 'заробляти гроші'],
              ['make friends', 'заводити друзів'],
            ],
            en: { title: 'MAKE — creation, result',
              rows: [
                ['make + noun', 'Meaning'],
                ['make a mistake', 'to make an error'],
                ['make a decision', 'to decide'],
                ['make an effort', 'to try hard'],
                ['make progress', 'to improve, advance'],
                ['make a phone call', 'to call someone'],
                ['make a suggestion', 'to suggest'],
                ['make money', 'to earn money'],
                ['make friends', 'to become friends'],
              ] },
          },
          {
            type: 'table', title: 'DO — дії, робота, завдання',
            rows: [
              ['do + noun', 'Переклад'],
              ['do homework', 'робити домашнє завдання'],
              ['do the dishes', 'мити посуд'],
              ['do exercise', 'займатися вправами'],
              ['do research', 'проводити дослідження'],
              ['do someone a favour', 'зробити комусь послугу'],
              ['do your best', 'робити все можливе'],
              ['do damage', 'завдати шкоди'],
            ],
            en: { title: 'DO — activities, work, tasks',
              rows: [
                ['do + noun', 'Meaning'],
                ['do homework', 'to complete homework'],
                ['do the dishes', 'to wash the dishes'],
                ['do exercise', 'to exercise'],
                ['do research', 'to conduct research'],
                ['do someone a favour', 'to help someone out'],
                ['do your best', 'to try as hard as you can'],
                ['do damage', 'to cause harm'],
              ] },
          },
          {
            type: 'table', title: 'TAKE / HAVE / GET / GIVE',
            rows: [
              ['Дієслово + noun', 'Переклад'],
              ['take a break', 'зробити перерву'],
              ['take a photo', 'зробити фото'],
              ['take an exam', 'скласти іспит'],
              ['have a look', 'подивитися'],
              ['have a shower', 'прийняти душ'],
              ['have fun', 'весело провести час'],
              ['get a job', 'отримати роботу'],
              ['give advice', 'дати пораду'],
              ['give a speech', 'виголосити промову'],
            ],
            en: { title: 'TAKE / HAVE / GET / GIVE',
              rows: [
                ['Verb + noun', 'Meaning'],
                ['take a break', 'to rest briefly'],
                ['take a photo', 'to photograph'],
                ['take an exam', 'to sit an exam'],
                ['have a look', 'to look at something'],
                ['have a shower', 'to shower'],
                ['have fun', 'to enjoy oneself'],
                ['get a job', 'to find employment'],
                ['give advice', 'to advise'],
                ['give a speech', 'to speak publicly'],
              ] },
          },
          {
            type: 'examples', title: 'Приклади речень',
            rows: [
              ['I made a big mistake at work.', 'Я зробив велику помилку на роботі.'],
              ['Can you do me a favour?', 'Можеш зробити мені послугу?'],
              ['Let\'s take a break — I need coffee.', 'Зробімо перерву — мені потрібна кава.'],
              ['She gave a brilliant speech at the conference.', 'Вона виголосила блискучу промову на конференції.'],
              ['Have you had a chance to check the report?', 'Ти мав нагоду перевірити звіт?'],
              ['He\'s making great progress with his English.', 'Він робить великий прогрес у вивченні англійської.'],
            ],
          },
          {
            type: 'tip',
            title: 'Як вчити колокації',
            text: 'Вчи як цілий блок, а не окремі слова: "make a decision" — одна одиниця.\nКорисний ресурс: Oxford Collocations Dictionary.',
            en: { title: 'How to learn collocations',
              text: 'Learn as a whole chunk, not separate words: "make a decision" is one unit.\nUseful resource: Oxford Collocations Dictionary.' },
          },
        ],
      },

      // ── 8. Register ───────────────────────────────────────────
      {
        id: 'register', title: 'Формальний vs Неформальний стиль — C1', emoji: '🎩',
        titleEn: 'Formal vs Informal Style — C1',
        sections: [
          {
            type: 'intro',
            text: '<b>Register</b> — це стиль мовлення, пристосований до ситуації. Вміння перемикатися між формальним та неформальним стилем є ознакою рівня C1.',
            en: { text: '<b>Register</b> — the style of language adapted to a situation. The ability to switch between formal and informal style is a hallmark of C1 level.' },
          },
          {
            type: 'table', title: 'Лексичні відмінності',
            rows: [
              ['Неформально', 'Формально', 'Переклад'],
              ['get', 'obtain / receive', 'отримати'],
              ['show', 'demonstrate / indicate', 'показати'],
              ['ask', 'request / enquire', 'запитати'],
              ['tell', 'inform / notify', 'повідомити'],
              ['help', 'assist / facilitate', 'допомогти'],
              ['need', 'require / necessitate', 'потребувати'],
              ['use', 'utilise / employ', 'використовувати'],
              ['look at', 'examine / investigate', 'розглянути'],
              ['think about', 'consider / contemplate', 'розглянути/обдумати'],
              ['enough', 'sufficient', 'достатній'],
              ['but', 'however / nevertheless', 'але/проте'],
              ['so', 'therefore / consequently', 'тому/отже'],
            ],
            en: { title: 'Lexical differences',
              rows: [
                ['Informal', 'Formal', 'Meaning'],
                ['get', 'obtain / receive', 'to get'],
                ['show', 'demonstrate / indicate', 'to show'],
                ['ask', 'request / enquire', 'to ask'],
                ['tell', 'inform / notify', 'to tell'],
                ['help', 'assist / facilitate', 'to help'],
                ['need', 'require / necessitate', 'to need'],
                ['use', 'utilise / employ', 'to use'],
                ['look at', 'examine / investigate', 'to look at'],
                ['think about', 'consider / contemplate', 'to think about'],
                ['enough', 'sufficient', 'enough'],
                ['but', 'however / nevertheless', 'but'],
                ['so', 'therefore / consequently', 'so'],
              ] },
          },
          {
            type: 'table', title: 'Граматичні відмінності',
            rows: [
              ['Особливість', 'Неформально', 'Формально'],
              ['Скорочення', 'I\'m, don\'t, can\'t', 'I am, do not, cannot'],
              ['Пасивний стан', 'рідко', 'часто (It was decided that...)'],
              ['Питання', 'Got a minute?', 'Would you have a moment?'],
              ['Речення', 'короткі, прості', 'складні, підрядні'],
              ['Особовий займенник', 'we, you', 'one (One should consider...)'],
            ],
            en: { title: 'Grammatical differences',
              rows: [
                ['Feature', 'Informal', 'Formal'],
                ['Contractions', 'I\'m, don\'t, can\'t', 'I am, do not, cannot'],
                ['Passive voice', 'rarely used', 'common (It was decided that...)'],
                ['Questions', 'Got a minute?', 'Would you have a moment?'],
                ['Sentences', 'short, simple', 'complex, subordinate clauses'],
                ['Personal pronoun', 'we, you', 'one (One should consider...)'],
              ] },
          },
          {
            type: 'examples', title: 'Той самий зміст — різний стиль',
            rows: [
              ['I need your help ASAP.', 'I would appreciate your assistance at your earliest convenience.'],
              ['Can you check this out?', 'Would you be so kind as to examine this document?'],
              ['Sorry for the late reply.', 'I apologise for the delay in responding.'],
              ['We\'re looking into it.', 'The matter is currently under investigation.'],
              ['Thanks a lot for coming!', 'We are most grateful for your attendance.'],
              ['I think this is a good idea.', 'It would appear that this proposal has considerable merit.'],
            ],
          },
          {
            type: 'table', title: 'Де який стиль',
            rows: [
              ['Ситуація', 'Стиль'],
              ['Листування з другом / SMS', 'Неформальний'],
              ['Соціальні мережі', 'Неформальний / нейтральний'],
              ['Діловий лист / Email', 'Формальний / нейтральний'],
              ['Академічне есе', 'Формальний'],
              ['Офіційна заява / скарга', 'Формальний'],
              ['Усна презентація', 'Нейтральний / формальний'],
            ],
            en: { title: 'Which style for which context',
              rows: [
                ['Situation', 'Style'],
                ['Message to a friend / SMS', 'Informal'],
                ['Social media', 'Informal / neutral'],
                ['Business letter / Email', 'Formal / neutral'],
                ['Academic essay', 'Formal'],
                ['Official statement / complaint', 'Formal'],
                ['Oral presentation', 'Neutral / formal'],
              ] },
          },
          {
            type: 'tip',
            title: 'Типові помилки',
            text: 'Змішування стилів — найпоширеніша помилка рівня B2–C1.\nНе пишіть "I\'m writing to inform you" і відразу "BTW" — це суперечить стилю.\nНе використовуйте сленг у формальних листах і навпаки.',
            en: { title: 'Common mistakes',
              text: 'Mixing styles is the most common mistake at B2–C1 level.\nDon\'t write "I\'m writing to inform you" and then "BTW" — it contradicts the style.\nDon\'t use slang in formal letters and vice versa.' },
          },
        ],
      },

      // ── Вітання та знайомство ─────────────────────────────────
      {
        id: 'greetings-intro', title: 'Вітання та знайомство — A1', emoji: '👋',
        titleEn: 'Greetings & Introductions — A1',
        sections: [
          {
            type: 'intro',
            text: 'Вміння представитися та привітатися — перший крок у вивченні англійської. Ці конструкції фіксовані: їх треба знати напам\'ять.',
            en: { text: 'Being able to introduce yourself and greet others is the first step in learning English. These phrases are fixed — you need to know them by heart.' },
          },
          {
            type: 'table', title: 'Офіційне vs Неофіційне вітання',
            rows: [
              ['Ситуація', 'Неофіційно', 'Офіційно'],
              ['Вітання', 'Hi! / Hey!', 'Good morning / afternoon / evening.'],
              ['Як справи?', 'How are you? / How\'s it going?', 'How do you do? / How are you?'],
              ['Відповідь', 'Fine, thanks! / Not bad.', 'Very well, thank you. / I\'m doing well.'],
              ['До побачення', 'Bye! / See you later!', 'Goodbye. / It was a pleasure.'],
            ],
            en: { title: 'Formal vs Informal greeting',
              rows: [
                ['Situation', 'Informal', 'Formal'],
                ['Greeting', 'Hi! / Hey!', 'Good morning / afternoon / evening.'],
                ['How are you?', 'How are you? / How\'s it going?', 'How do you do? / How are you?'],
                ['Reply', 'Fine, thanks! / Not bad.', 'Very well, thank you. / I\'m doing well.'],
                ['Goodbye', 'Bye! / See you later!', 'Goodbye. / It was a pleasure.'],
              ] },
          },
          {
            type: 'formula', title: 'Знайомство — структура',
            rows: [
              ['✅ Ім\'я', 'My name is / I\'m', '+ ім\'я', 'My name is Anna. / I\'m Tom.'],
              ['✅ Звідки', 'I\'m from', '+ країна/місто', 'I\'m from Ukraine.'],
              ['✅ Де живу', 'I live in', '+ місто', 'I live in Kyiv.'],
              ['✅ Робота', 'I work as / I\'m a', '+ посада', 'I\'m a teacher.'],
              ['✅ Вік', 'I\'m', '+ число + years old', 'I\'m 25 years old.'],
              ['✅ Задоволений', 'Nice to meet you! / Pleased to meet you!', '', ''],
            ],
            en: { title: 'Introduction — structure' },
          },
          {
            type: 'examples', title: 'Типовий діалог знайомства',
            rows: [
              ['Hi! My name\'s Kate. What\'s your name?', 'Привіт! Мене звати Кейт. Як тебе звати?'],
              ['I\'m Alex. Nice to meet you!', 'Я Алекс. Приємно познайомитися!'],
              ['Where are you from?', 'Звідки ти?'],
              ['I\'m from Ukraine. I live in Kyiv.', 'Я з України. Я живу в Києві.'],
              ['What do you do?', 'Чим ти займаєшся?'],
              ['I\'m a software engineer. And you?', 'Я програміст. А ти?'],
            ],
          },
          {
            type: 'table', title: 'Питальні слова для знайомства',
            rows: [
              ['Питання', 'Відповідь (шаблон)'],
              ['What\'s your name?', 'My name is... / I\'m...'],
              ['Where are you from?', 'I\'m from... / I come from...'],
              ['Where do you live?', 'I live in... / I\'m based in...'],
              ['What do you do (for a living)?', 'I work as... / I\'m a... / I study...'],
              ['How old are you?', 'I\'m... years old.'],
            ],
            en: { title: 'Question words for introductions',
              rows: [
                ['Question', 'Answer (template)'],
                ['What\'s your name?', 'My name is... / I\'m...'],
                ['Where are you from?', 'I\'m from... / I come from...'],
                ['Where do you live?', 'I live in... / I\'m based in...'],
                ['What do you do (for a living)?', 'I work as... / I\'m a... / I study...'],
                ['How old are you?', 'I\'m... years old.'],
              ] },
          },
          {
            type: 'tip',
            title: 'Nice to meet you vs How do you do?',
            text: '"Nice to meet you!" — природне і часте, підходить для будь-якої ситуації.\n"How do you do?" — дуже формальне (британський стиль). Відповідь на нього: "How do you do?" (повторити питання!).',
            en: { title: 'Nice to meet you vs How do you do?',
              text: '"Nice to meet you!" — natural and common, suitable for any situation.\n"How do you do?" — very formal (British style). The reply is: "How do you do?" (repeat the question!).' },
          },
        ],
      },

      // ── Сім'я та тіло ─────────────────────────────────────────
      {
        id: 'family-body', title: 'Сім\'я та тіло — A1', emoji: '👨‍👩‍👧‍👦',
        titleEn: 'Family & Body — A1',
        sections: [
          {
            type: 'intro',
            text: 'Базова лексика про родину та частини тіла — одна з перших тем для опису себе й оточення. Разом із "have got" вона дозволяє будувати прості описові речення про людей.',
            en: { text: 'Basic vocabulary for family and body parts — one of the first topics for describing yourself and others. Together with "have got" it allows building simple descriptive sentences about people.' },
          },
          {
            type: 'table', title: 'Члени родини',
            rows: [
              ['Слово', 'Переклад'],
              ['parents', 'батьки'],
              ['mother / mum', 'мати / мама'],
              ['father / dad', 'батько / тато'],
              ['son / daughter', 'син / дочка'],
              ['brother / sister', 'брат / сестра'],
              ['grandmother / grandfather', 'бабуся / дідусь'],
              ['grandson / granddaughter', 'онук / онука'],
              ['aunt / uncle', 'тітка / дядько'],
              ['cousin', 'двоюрідний брат / двоюрідна сестра'],
              ['niece / nephew', 'племінниця / племінник'],
              ['husband / wife', 'чоловік / дружина'],
            ],
            en: { title: 'Family members',
              rows: [
                ['Word', 'Meaning'],
                ['parents', 'parents'],
                ['mother / mum', 'mother / mum'],
                ['father / dad', 'father / dad'],
                ['son / daughter', 'son / daughter'],
                ['brother / sister', 'brother / sister'],
                ['grandmother / grandfather', 'grandmother / grandfather'],
                ['grandson / granddaughter', 'grandson / granddaughter'],
                ['aunt / uncle', 'aunt / uncle'],
                ['cousin', 'cousin (male or female)'],
                ['niece / nephew', 'niece / nephew'],
                ['husband / wife', 'husband / wife'],
              ] },
          },
          {
            type: 'table', title: 'Частини тіла',
            rows: [
              ['Слово', 'Переклад'],
              ['head / face', 'голова / обличчя'],
              ['eye(s) / ear(s)', 'око (очі) / вухо (вуха)'],
              ['nose / mouth', 'ніс / рот'],
              ['hair', 'волосся'],
              ['arm / hand / finger', 'рука (від плеча) / кисть / палець'],
              ['leg / foot / toe', 'нога / ступня / палець ноги'],
              ['shoulder / back', 'плече / спина'],
              ['stomach', 'живіт'],
            ],
            en: { title: 'Body parts',
              rows: [
                ['Word', 'Meaning'],
                ['head / face', 'head / face'],
                ['eye(s) / ear(s)', 'eye(s) / ear(s)'],
                ['nose / mouth', 'nose / mouth'],
                ['hair', 'hair'],
                ['arm / hand / finger', 'arm / hand / finger'],
                ['leg / foot / toe', 'leg / foot / toe'],
                ['shoulder / back', 'shoulder / back'],
                ['stomach', 'stomach'],
              ] },
          },
          {
            type: 'formula', title: 'Опис родини та зовнішності — структура',
            rows: [
              ['✅ Хто це', 'This is', '+ присвійний займенник + член родини', 'This is my brother.'],
              ['✅ Маю (є)', 'I\'ve got / I have', '+ іменник', 'I\'ve got two sisters.'],
              ['✅ Опис зовнішності', 'He/She has got', '+ прикметник + частина тіла', 'She has got long hair and blue eyes.'],
              ['✅ Скільки', 'How many', '+ іменник у множині + have you got?', 'How many brothers have you got?'],
            ],
            en: { title: 'Describing family and appearance — structure',
              rows: [
                ['✅ Who is this', 'This is', '+ possessive + family member', 'This is my brother.'],
                ['✅ I have', 'I\'ve got / I have', '+ noun', 'I\'ve got two sisters.'],
                ['✅ Appearance', 'He/She has got', '+ adjective + body part', 'She has got long hair and blue eyes.'],
                ['✅ How many', 'How many', '+ plural noun + have you got?', 'How many brothers have you got?'],
              ] },
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['This is my mother. Her name is Olena.', 'Це моя мама. Її звуть Олена.'],
              ['I\'ve got an older brother and a younger sister.', 'У мене є старший брат і молодша сестра.'],
              ['My grandfather has got grey hair and a beard.', 'У мого дідуся сиве волосся і борода.'],
              ['She has got brown eyes and a small nose.', 'У неї карі очі та маленький ніс.'],
              ['How many cousins have you got?', 'Скільки в тебе двоюрідних братів і сестер?'],
            ],
          },
          {
            type: 'tip',
            title: 'Have got vs Have',
            text: '"I\'ve got a sister." та "I have a sister." означають те саме — обидва варіанти правильні. "Have got" частіше вживається в розмовній британській англійській, а "have" — універсальний і поширений у американській.',
            en: { title: 'Have got vs Have',
              text: '"I\'ve got a sister." and "I have a sister." mean the same thing — both are correct. "Have got" is more common in conversational British English, while "have" is universal and common in American English.' },
          },
        ],
      },

      // ── Поради та пропозиції ──────────────────────────────────
      {
        id: 'advice-suggestions', title: 'Поради та пропозиції — B1', emoji: '🗣️',
        titleEn: 'Advice & Suggestions — B1',
        sections: [
          {
            type: 'intro',
            text: 'Англійська має кілька способів дати пораду або зробити пропозицію — від м\'яких ("maybe you could") до прямих ("you must"). Вибір залежить від ситуації та стосунків.',
            en: { text: 'English has several ways to give advice or make a suggestion — from gentle ("maybe you could") to direct ("you must"). The choice depends on the situation and relationship.' },
          },
          {
            type: 'table', title: 'Структури для порад',
            rows: [
              ['Конструкція', 'Сила', 'Приклад'],
              ['You should / shouldn\'t', 'Нейтральна порада', 'You should see a doctor.'],
              ['You ought to', 'Легкий обов\'язок', 'You ought to apologize.'],
              ['You had better (\'d better)', 'Попередження/наполегливо', 'You\'d better hurry — it\'s late.'],
              ['Why don\'t you...?', 'М\'яка порада', 'Why don\'t you try talking to him?'],
              ['If I were you, I would...', 'Особиста порада', 'If I were you, I\'d take the job.'],
              ['I suggest / recommend + -ing', 'Формальна порада', 'I suggest taking a break.'],
              ['It would be better to...', 'Нейтральна рекомендація', 'It would be better to call first.'],
              ['Have you tried + -ing?', 'Нова ідея', 'Have you tried changing the settings?'],
            ],
            en: { title: 'Advice structures',
              rows: [
                ['Structure', 'Strength', 'Example'],
                ['You should / shouldn\'t', 'Neutral advice', 'You should see a doctor.'],
                ['You ought to', 'Mild obligation', 'You ought to apologize.'],
                ['You had better (\'d better)', 'Warning/strong advice', 'You\'d better hurry — it\'s late.'],
                ['Why don\'t you...?', 'Gentle suggestion', 'Why don\'t you try talking to him?'],
                ['If I were you, I would...', 'Personal advice', 'If I were you, I\'d take the job.'],
                ['I suggest / recommend + -ing', 'Formal advice', 'I suggest taking a break.'],
                ['It would be better to...', 'Neutral recommendation', 'It would be better to call first.'],
                ['Have you tried + -ing?', 'New idea', 'Have you tried changing the settings?'],
              ] },
          },
          {
            type: 'table', title: 'Пропозиції (Suggestions)',
            rows: [
              ['Конструкція', 'Контекст', 'Приклад'],
              ['Let\'s + infinitive', 'Разом / неформально', 'Let\'s take a taxi.'],
              ['Shall we + infinitive?', 'Пропозиція / запит', 'Shall we meet at 6?'],
              ['What about / How about + -ing?', 'Ідея', 'What about going to the cinema?'],
              ['We could + infinitive', 'Варіант', 'We could try the new restaurant.'],
              ['I suggest + -ing / that + clause', 'Формальна пропозиція', 'I suggest leaving early.'],
            ],
            en: { title: 'Suggestions',
              rows: [
                ['Structure', 'Context', 'Example'],
                ['Let\'s + infinitive', 'Together / informal', 'Let\'s take a taxi.'],
                ['Shall we + infinitive?', 'Suggestion / request', 'Shall we meet at 6?'],
                ['What about / How about + -ing?', 'Idea', 'What about going to the cinema?'],
                ['We could + infinitive', 'Option', 'We could try the new restaurant.'],
                ['I suggest + -ing / that + clause', 'Formal suggestion', 'I suggest leaving early.'],
              ] },
          },
          {
            type: 'examples', title: 'Приклади порад',
            rows: [
              ['You should drink more water every day.', 'Тобі варто пити більше води щодня.'],
              ['You\'d better leave now or you\'ll miss the train.', 'Краще виходь зараз, а то спізнишся на потяг.'],
              ['If I were you, I wouldn\'t take that offer.', 'На твоєму місці я б не брав цю пропозицію.'],
              ['Why don\'t you ask for help?', 'Чому б тобі не попросити про допомогу?'],
              ['I recommend reading the instructions first.', 'Раджу спочатку прочитати інструкцію.'],
              ['Have you tried restarting the computer?', 'Ти пробував перезавантажити комп\'ютер?'],
            ],
          },
          {
            type: 'note',
            title: 'had better vs should',
            text: '<b>Should</b> — загальна порада: "You should exercise more."\n<b>Had better</b> — наполегливе попередження з наслідком: "You\'d better call her — she\'s worried."\nПомилково плутати: had better НЕ є минулим часом!',
            en: { title: 'had better vs should',
              text: '<b>Should</b> — general advice: "You should exercise more."\n<b>Had better</b> — strong warning with implied consequence: "You\'d better call her — she\'s worried."\nCommon mistake: had better is NOT a past tense!' },
          },
        ],
      },

      // ── Ділова комунікація ────────────────────────────────────
      {
        id: 'business-english', title: 'Ділова комунікація — B2', emoji: '💼',
        titleEn: 'Business Communication — B2',
        sections: [
          {
            type: 'intro',
            text: '<b>Business English</b> — це не інша мова, а інший регістр. Ключові відмінності: формальна лексика, пасивний стан, ввічливі запити та чіткі структури листів.',
            en: { text: '<b>Business English</b> is not a different language — it is a different register. Key differences: formal vocabulary, passive voice, polite requests, and clear letter structures.' },
          },
          {
            type: 'table', title: 'Структура ділового листа / email',
            rows: [
              ['Частина', 'Фраза'],
              ['Відкриття', 'Dear Mr/Ms Smith, / To Whom It May Concern,'],
              ['Мета листа', 'I am writing to... / I am contacting you regarding...'],
              ['Посилання', 'With reference to your email of... / Following our conversation...'],
              ['Запит', 'Could you please... / I would be grateful if you could...'],
              ['Прикладення', 'Please find attached... / I am enclosing...'],
              ['Очікування відповіді', 'I look forward to hearing from you.'],
              ['Закриття', 'Yours sincerely, (ім\'я відомо) / Yours faithfully, (невідомо)'],
            ],
            en: { title: 'Business letter / email structure',
              rows: [
                ['Part', 'Phrase'],
                ['Opening', 'Dear Mr/Ms Smith, / To Whom It May Concern,'],
                ['Purpose', 'I am writing to... / I am contacting you regarding...'],
                ['Reference', 'With reference to your email of... / Following our conversation...'],
                ['Request', 'Could you please... / I would be grateful if you could...'],
                ['Attachment', 'Please find attached... / I am enclosing...'],
                ['Closing', 'I look forward to hearing from you.'],
                ['Sign-off', 'Yours sincerely, (name known) / Yours faithfully, (name unknown)'],
              ] },
          },
          {
            type: 'table', title: 'Ввічливі запити (Polite Requests)',
            rows: [
              ['Пряме (неформально)', 'Ввічливе (формально)'],
              ['Send me the report.', 'Could you please send me the report?'],
              ['I need this by Friday.', 'I would appreciate receiving this by Friday.'],
              ['Call me back.', 'I would be grateful if you could return my call.'],
              ['We want to meet.', 'We would like to arrange a meeting.'],
              ['Fix the problem.', 'We kindly request that this matter be resolved.'],
            ],
            en: { title: 'Polite Requests',
              rows: [
                ['Direct (informal)', 'Polite (formal)'],
                ['Send me the report.', 'Could you please send me the report?'],
                ['I need this by Friday.', 'I would appreciate receiving this by Friday.'],
                ['Call me back.', 'I would be grateful if you could return my call.'],
                ['We want to meet.', 'We would like to arrange a meeting.'],
                ['Fix the problem.', 'We kindly request that this matter be resolved.'],
              ] },
          },
          {
            type: 'examples', title: 'Ключові ділові фрази',
            rows: [
              ['I am writing to enquire about the position.', 'Пишу, щоб дізнатися про вакансію.'],
              ['Please do not hesitate to contact me.', 'Будь ласка, не вагайтеся зв\'язатися зі мною.'],
              ['We regret to inform you that...', 'З жалем повідомляємо, що...'],
              ['I would like to take this opportunity to...', 'Хотів би скористатися нагодою, щоб...'],
              ['Further to my previous email...', 'На додаток до мого попереднього листа...'],
              ['As per our agreement, the deadline is...', 'Згідно з нашою угодою, термін...'],
            ],
          },
          {
            type: 'table', title: 'Корисна лексика на нарадах',
            rows: [
              ['Ситуація', 'Фрази'],
              ['Почати нараду', 'Shall we get started? / Let\'s begin.'],
              ['Передати слово', 'I\'d like to hand over to... / Over to you, John.'],
              ['Уточнити', 'Could you clarify what you mean by...?'],
              ['Погодитися', 'That\'s a valid point. / I\'d agree with that.'],
              ['Не погодитися', 'With respect, I see it differently. / I\'m not sure that\'s the case.'],
              ['Підсумувати', 'To summarise... / In conclusion...'],
            ],
            en: { title: 'Useful language for meetings',
              rows: [
                ['Situation', 'Phrases'],
                ['Start a meeting', 'Shall we get started? / Let\'s begin.'],
                ['Hand over', 'I\'d like to hand over to... / Over to you, John.'],
                ['Clarify', 'Could you clarify what you mean by...?'],
                ['Agree', 'That\'s a valid point. / I\'d agree with that.'],
                ['Disagree', 'With respect, I see it differently. / I\'m not sure that\'s the case.'],
                ['Summarise', 'To summarise... / In conclusion...'],
              ] },
          },
          {
            type: 'tip',
            title: 'Золоте правило ділової мови',
            text: 'Уникай: contractions (I\'m → I am), phrasal verbs (find out → ascertain), надто прямих наказів.\nВикористовуй: passive voice, hedging (tend to, may, might), nominalization (discuss → discussion).',
            en: { title: 'Golden rule of business language',
              text: 'Avoid: contractions (I\'m → I am), phrasal verbs (find out → ascertain), overly direct commands.\nUse: passive voice, hedging (tend to, may, might), nominalisation (discuss → discussion).' },
          },
        ],
      },

      // ── Мова переговорів ──────────────────────────────────────
      {
        id: 'negotiation-language', title: 'Мова переговорів — C1', emoji: '🤝',
        titleEn: 'Negotiation Language — C1',
        sections: [
          {
            type: 'intro',
            text: 'Переговори вимагають точної мови: поступки, умови, відмова без конфлікту, пом\'якшення позицій. Англійська переговорна мова спирається на conditionals, hedging та tentative language.',
            en: { text: 'Negotiations require precise language: concessions, conditions, polite refusals, softening positions. English negotiation language relies on conditionals, hedging, and tentative language.' },
          },
          {
            type: 'table', title: 'Ключові стратегії та фрази',
            rows: [
              ['Стратегія', 'Фрази'],
              ['Відкриття позиції', 'Our position is... / We are looking for... / What we\'re proposing is...'],
              ['Поступка', 'We\'d be willing to... / We could consider... / That might be possible if...'],
              ['Умова', 'On condition that... / Provided that... / As long as...'],
              ['Відмова без конфлікту', 'I\'m afraid that\'s not quite what we had in mind. / That would be difficult for us.'],
              ['Пауза / обдумування', 'I\'d need to think about that. / Could we come back to this point?'],
              ['Підсумок', 'So, if I understand correctly... / Let me recap what we\'ve agreed...'],
            ],
            en: { title: 'Key strategies and phrases',
              rows: [
                ['Strategy', 'Phrases'],
                ['Opening position', 'Our position is... / We are looking for... / What we\'re proposing is...'],
                ['Concession', 'We\'d be willing to... / We could consider... / That might be possible if...'],
                ['Condition', 'On condition that... / Provided that... / As long as...'],
                ['Polite refusal', 'I\'m afraid that\'s not quite what we had in mind. / That would be difficult for us.'],
                ['Pause / thinking', 'I\'d need to think about that. / Could we come back to this point?'],
                ['Summary', 'So, if I understand correctly... / Let me recap what we\'ve agreed...'],
              ] },
          },
          {
            type: 'table', title: 'Conditionals у переговорах',
            rows: [
              ['Структура', 'Використання', 'Приклад'],
              ['If you... , we could...', 'Реальна поступка', 'If you order 500 units, we could offer a 10% discount.'],
              ['If you were to... , we would...', 'Гіпотетична пропозиція', 'If you were to extend the deadline, we would accept the terms.'],
              ['Provided that... , we\'ll...', 'Чітка умова', 'Provided that the price is fixed, we\'ll sign today.'],
              ['Unless... , we can\'t...', 'Межа переговорів', 'Unless the quality improves, we can\'t renew the contract.'],
            ],
            en: { title: 'Conditionals in negotiations',
              rows: [
                ['Structure', 'Use', 'Example'],
                ['If you... , we could...', 'Real concession', 'If you order 500 units, we could offer a 10% discount.'],
                ['If you were to... , we would...', 'Hypothetical proposal', 'If you were to extend the deadline, we would accept the terms.'],
                ['Provided that... , we\'ll...', 'Clear condition', 'Provided that the price is fixed, we\'ll sign today.'],
                ['Unless... , we can\'t...', 'Negotiating limit', 'Unless the quality improves, we can\'t renew the contract.'],
              ] },
          },
          {
            type: 'examples', title: 'Переговорні фрази',
            rows: [
              ['That\'s a reasonable point, but we\'d need something in return.', 'Це слушна думка, але нам потрібно щось натомість.'],
              ['We\'re flexible on the timeline if you can meet us on the price.', 'Ми гнучкі щодо термінів, якщо ви підете нам назустріч у ціні.'],
              ['I understand your position, but I\'m not in a position to agree to that.', 'Я розумію вашу позицію, але не можу на це погодитися.'],
              ['Let\'s see if we can find some common ground here.', 'Давайте подивимось, чи можемо знайти спільну мову.'],
              ['That\'s outside our budget, but perhaps we could explore alternatives.', 'Це поза нашим бюджетом, але можливо варто розглянути альтернативи.'],
              ['I think we\'re close to a deal — just a few points to finalise.', 'Думаю, ми близько до угоди — лишилось кілька моментів.'],
            ],
          },
          {
            type: 'note',
            title: 'Tentative language (пом\'якшення)',
            text: 'Замість категоричних тверджень використовуй пом\'якшувачі:\n→ "That\'s wrong" → "I\'m not entirely sure that\'s accurate."\n→ "We can\'t do that" → "That would be rather difficult for us at this stage."\n→ "The price is too high" → "The price point gives us some concern."',
            en: { title: 'Tentative language (softening)', text: 'Instead of blunt statements, use hedged alternatives:\n→ "That\'s wrong" → "I\'m not entirely sure that\'s accurate."\n→ "We can\'t do that" → "That would be rather difficult for us at this stage."\n→ "The price is too high" → "The price point gives us some concern."' },
          },
        ],
      },

      // ── Ідіоми та усталені вирази ─────────────────────────────
      {
        id: 'idioms', title: 'Ідіоми та усталені вирази — C1', emoji: '🎨',
        titleEn: 'Idioms & Fixed Expressions — C1',
        sections: [
          {
            type: 'intro',
            text: '<b>Ідіома</b> — вираз, значення якого не виводиться з окремих слів. "It\'s raining cats and dogs" ≠ кішки і собаки. Знання ідіом відрізняє B2 від C1.',
            en: { text: '<b>An idiom</b> — an expression whose meaning cannot be deduced from the individual words. "It\'s raining cats and dogs" ≠ actual cats and dogs. Knowing idioms distinguishes B2 from C1.' },
          },
          {
            type: 'table', title: 'Ідіоми з частинами тіла (Body idioms)',
            rows: [
              ['Ідіома', 'Значення', 'Приклад'],
              ['cost an arm and a leg', 'дуже дорого коштувати', 'That jacket cost an arm and a leg!'],
              ['keep an eye on', 'стежити за', 'Can you keep an eye on my bag?'],
              ['pull someone\'s leg', 'жартувати / дурити', 'Are you serious or pulling my leg?'],
              ['bite the bullet', 'стиснути зуби і зробити', 'Just bite the bullet and call him.'],
              ['get cold feet', 'злякатися в останній момент', 'She got cold feet before the speech.'],
              ['have a gut feeling', 'мати передчуття', 'I have a gut feeling this will work.'],
              ['turn a blind eye', 'закривати очі на щось', 'The manager turned a blind eye to it.'],
            ],
            en: { title: 'Body idioms',
              rows: [
                ['Idiom', 'Meaning', 'Example'],
                ['cost an arm and a leg', 'to be very expensive', 'That jacket cost an arm and a leg!'],
                ['keep an eye on', 'to watch over', 'Can you keep an eye on my bag?'],
                ['pull someone\'s leg', 'to joke / to tease', 'Are you serious or pulling my leg?'],
                ['bite the bullet', 'to do something difficult', 'Just bite the bullet and call him.'],
                ['get cold feet', 'to lose courage at the last moment', 'She got cold feet before the speech.'],
                ['have a gut feeling', 'to have an instinct/premonition', 'I have a gut feeling this will work.'],
                ['turn a blind eye', 'to ignore something on purpose', 'The manager turned a blind eye to it.'],
              ] },
          },
          {
            type: 'table', title: 'Ідіоми з часом (Time idioms)',
            rows: [
              ['Ідіома', 'Значення', 'Приклад'],
              ['once in a blue moon', 'дуже рідко', 'He calls once in a blue moon.'],
              ['in the nick of time', 'якраз вчасно', 'We arrived in the nick of time.'],
              ['at the drop of a hat', 'негайно / без вагань', 'She\'d help you at the drop of a hat.'],
              ['burning the midnight oil', 'працювати до ночі', 'I\'ve been burning the midnight oil.'],
              ['kill time', 'вбивати час', 'We killed time at the airport.'],
              ['better late than never', 'краще пізно, ніж ніколи', 'Better late than never, I suppose.'],
            ],
            en: { title: 'Time idioms',
              rows: [
                ['Idiom', 'Meaning', 'Example'],
                ['once in a blue moon', 'very rarely', 'He calls once in a blue moon.'],
                ['in the nick of time', 'just in time', 'We arrived in the nick of time.'],
                ['at the drop of a hat', 'immediately / without hesitation', 'She\'d help you at the drop of a hat.'],
                ['burning the midnight oil', 'working very late', 'I\'ve been burning the midnight oil.'],
                ['kill time', 'to pass time', 'We killed time at the airport.'],
                ['better late than never', 'better to do something late than not at all', 'Better late than never, I suppose.'],
              ] },
          },
          {
            type: 'table', title: 'Ідіоми про ситуації та рішення',
            rows: [
              ['Ідіома', 'Значення', 'Приклад'],
              ['hit the nail on the head', 'влучити в крапку', 'You hit the nail on the head!'],
              ['in hot water', 'у халепі', 'He\'s in hot water with his boss.'],
              ['spill the beans', 'розказати секрет', 'Who spilled the beans?'],
              ['beat around the bush', 'ходити навкруги', 'Stop beating around the bush.'],
              ['bite off more than you can chew', 'взяти більше, ніж можеш', 'Don\'t bite off more than you can chew.'],
              ['under the weather', 'недобре себе почувати', 'I\'m feeling a bit under the weather.'],
              ['the ball is in your court', 'тепер твій хід / рішення за тобою', 'The ball is in your court now.'],
            ],
            en: { title: 'Idioms about situations and decisions',
              rows: [
                ['Idiom', 'Meaning', 'Example'],
                ['hit the nail on the head', 'to be exactly right', 'You hit the nail on the head!'],
                ['in hot water', 'in trouble', 'He\'s in hot water with his boss.'],
                ['spill the beans', 'to reveal a secret', 'Who spilled the beans?'],
                ['beat around the bush', 'to avoid the main point', 'Stop beating around the bush.'],
                ['bite off more than you can chew', 'to take on more than you can handle', 'Don\'t bite off more than you can chew.'],
                ['under the weather', 'to feel unwell', 'I\'m feeling a bit under the weather.'],
                ['the ball is in your court', 'it\'s your turn / your decision', 'The ball is in your court now.'],
              ] },
          },
          {
            type: 'tip',
            title: 'Як вчити ідіоми',
            text: 'Не вчи списком — вчи в контексті речення. Запам\'ятай одне яскраве речення з кожною ідіомою.\nГрупуй за темою (тіло, час, природа) — так легше запам\'ятати через асоціації.\nПеревір себе: чи можеш пояснити значення без словника?',
            en: { title: 'How to learn idioms',
              text: 'Don\'t learn in a list — learn in context. Memorize one vivid sentence with each idiom.\nGroup by theme (body, time, nature) — it\'s easier to remember through associations.\nTest yourself: can you explain the meaning without a dictionary?' },
          },
          {
            type: 'note',
            title: 'Ідіома vs Фразовий дієслово',
            text: '<b>Ідіома</b>: цілий вираз з переносним значенням — "kick the bucket" (померти).\n<b>Фразовий дієслово</b>: дієслово + прийменник/прислівник — "give up" (здатися).\nОбидва — фіксовані, обидва треба вчити як одиницю.',
            en: { title: 'Idiom vs Phrasal verb',
              text: '<b>Idiom</b>: a whole expression with a figurative meaning — "kick the bucket" (to die).\n<b>Phrasal verb</b>: verb + preposition/adverb — "give up" (to quit).\nBoth are fixed; both should be learned as a unit.' },
          },
        ],
      },

    ],
  },

  // ══════════════════════════════════════
  //   ВИКЛЮЧЕННЯ
  // ══════════════════════════════════════
  {
    id: 'exceptions', title: 'Виключення', emoji: '⚠️',
    titleEn: 'Exceptions',
    rules: [

      {
        id: 'irregular-verbs', title: 'Неправильні дієслова 150 — A1–B2', emoji: '📋',
        titleEn: 'Irregular Verbs 150 — A1–B2',
        sections: [
          {
            type: 'intro',
            text: 'Неправильні дієслова не утворюють Past Simple та Past Participle за допомогою -ed. 150 найуживаніших — від базових A1 до просунутих B2.',
            en: { text: 'Irregular verbs do not form the Past Simple and Past Participle with -ed. The 150 most common — from basic A1 to advanced B2.' },
          },
          {
            type: 'table', title: 'Неправильні дієслова (A–M)',
            en: { title: 'Irregular Verbs (A–M)' },
            rows: [
              ['Base (V₁)', 'Past Simple (V₂)', 'Past Participle (V₃)', 'Переклад'],
              ['arise', 'arose', 'arisen', 'виникати'],
              ['awake', 'awoke', 'awoken', 'прокидатись'],
              ['be', 'was / were', 'been', 'бути'],
              ['bear', 'bore', 'borne', 'нести / терпіти'],
              ['beat', 'beat', 'beaten', 'бити'],
              ['become', 'became', 'become', 'ставати'],
              ['begin', 'began', 'begun', 'починати'],
              ['bend', 'bent', 'bent', 'гнути'],
              ['bet', 'bet', 'bet', 'ставити (на гроші)'],
              ['bind', 'bound', 'bound', 'в\'язати / зобов\'язувати'],
              ['bite', 'bit', 'bitten', 'кусати'],
              ['bleed', 'bled', 'bled', 'кровоточити'],
              ['blow', 'blew', 'blown', 'дути'],
              ['break', 'broke', 'broken', 'ламати'],
              ['breed', 'bred', 'bred', 'розводити / виводити породу'],
              ['bring', 'brought', 'brought', 'приносити'],
              ['broadcast', 'broadcast', 'broadcast', 'транслювати'],
              ['build', 'built', 'built', 'будувати'],
              ['burst', 'burst', 'burst', 'лопатись / вибухати'],
              ['buy', 'bought', 'bought', 'купувати'],
              ['cast', 'cast', 'cast', 'кидати / відливати'],
              ['catch', 'caught', 'caught', 'ловити'],
              ['choose', 'chose', 'chosen', 'вибирати'],
              ['cling', 'clung', 'clung', 'чіплятись / триматись'],
              ['come', 'came', 'come', 'приходити'],
              ['cost', 'cost', 'cost', 'коштувати'],
              ['creep', 'crept', 'crept', 'повзати / підкрадатись'],
              ['cut', 'cut', 'cut', 'різати'],
              ['deal', 'dealt', 'dealt', 'мати справу / роздавати'],
              ['dig', 'dug', 'dug', 'копати'],
              ['dive', 'dived / dove', 'dived', 'пірнати (dove — AmE)'],
              ['do', 'did', 'done', 'робити'],
              ['draw', 'drew', 'drawn', 'малювати'],
              ['dream', 'dreamt / dreamed', 'dreamt / dreamed', 'мріяти / снити'],
              ['drink', 'drank', 'drunk', 'пити'],
              ['drive', 'drove', 'driven', 'їздити'],
              ['eat', 'ate', 'eaten', 'їсти'],
              ['fall', 'fell', 'fallen', 'падати'],
              ['feed', 'fed', 'fed', 'годувати'],
              ['feel', 'felt', 'felt', 'відчувати'],
              ['fight', 'fought', 'fought', 'битись / воювати'],
              ['find', 'found', 'found', 'знаходити'],
              ['flee', 'fled', 'fled', 'тікати'],
              ['fling', 'flung', 'flung', 'шпурляти'],
              ['fly', 'flew', 'flown', 'летіти'],
              ['forbid', 'forbade', 'forbidden', 'забороняти'],
              ['forget', 'forgot', 'forgotten', 'забувати'],
              ['forgive', 'forgave', 'forgiven', 'прощати'],
              ['forsake', 'forsook', 'forsaken', 'покидати (formal)'],
              ['freeze', 'froze', 'frozen', 'морозити / заморожуватись'],
              ['get', 'got', 'got / gotten', 'отримувати'],
              ['give', 'gave', 'given', 'давати'],
              ['go', 'went', 'gone', 'іти'],
              ['grind', 'ground', 'ground', 'молоти / шліфувати'],
              ['grow', 'grew', 'grown', 'рости'],
              ['hang', 'hung', 'hung', 'вішати (hanged — для страти)'],
              ['have', 'had', 'had', 'мати'],
              ['hear', 'heard', 'heard', 'чути'],
              ['hide', 'hid', 'hidden', 'ховати'],
              ['hit', 'hit', 'hit', 'вдаряти'],
              ['hold', 'held', 'held', 'тримати'],
              ['hurt', 'hurt', 'hurt', 'боліти / ранити'],
              ['keep', 'kept', 'kept', 'тримати / зберігати'],
              ['kneel', 'knelt', 'knelt', 'стояти на колінах'],
              ['know', 'knew', 'known', 'знати'],
              ['lay', 'laid', 'laid', 'класти (≠ lie!)'],
              ['lead', 'led', 'led', 'вести'],
              ['lean', 'leant / leaned', 'leant / leaned', 'спиратись'],
              ['leap', 'leapt / leaped', 'leapt / leaped', 'стрибати'],
              ['leave', 'left', 'left', 'залишати'],
              ['lend', 'lent', 'lent', 'позичати (давати)'],
              ['let', 'let', 'let', 'дозволяти'],
              ['lie', 'lay', 'lain', 'лежати (≠ lay!)'],
              ['light', 'lit', 'lit', 'запалювати'],
              ['lose', 'lost', 'lost', 'губити / програвати'],
              ['make', 'made', 'made', 'робити / виготовляти'],
              ['mean', 'meant', 'meant', 'означати'],
              ['meet', 'met', 'met', 'зустрічати'],
              ['mow', 'mowed', 'mown / mowed', 'косити'],
            ],
          },
          {
            type: 'table', title: 'Неправильні дієслова (O–Z)',
            en: { title: 'Irregular Verbs (O–Z)' },
            rows: [
              ['Base (V₁)', 'Past Simple (V₂)', 'Past Participle (V₃)', 'Переклад'],
              ['overcome', 'overcame', 'overcome', 'долати / перемагати'],
              ['overtake', 'overtook', 'overtaken', 'обганяти'],
              ['pay', 'paid', 'paid', 'платити'],
              ['prove', 'proved', 'proved / proven', 'доводити'],
              ['put', 'put', 'put', 'класти'],
              ['quit', 'quit', 'quit', 'кидати / звільнятись'],
              ['read', 'read', 'read', 'читати (вимовляється "ред")'],
              ['rid', 'rid', 'rid', 'позбуватись (rid of)'],
              ['ride', 'rode', 'ridden', 'їхати (на велосипеді/коні)'],
              ['ring', 'rang', 'rung', 'дзвонити'],
              ['rise', 'rose', 'risen', 'підніматись / сходити'],
              ['run', 'ran', 'run', 'бігти'],
              ['say', 'said', 'said', 'казати'],
              ['see', 'saw', 'seen', 'бачити'],
              ['seek', 'sought', 'sought', 'шукати (formal)'],
              ['sell', 'sold', 'sold', 'продавати'],
              ['send', 'sent', 'sent', 'надсилати'],
              ['set', 'set', 'set', 'ставити / заходити (сонце)'],
              ['shake', 'shook', 'shaken', 'трясти'],
              ['shed', 'shed', 'shed', 'скидати (листя) / проливати (сльози)'],
              ['shine', 'shone', 'shone', 'сяяти / світити'],
              ['shoot', 'shot', 'shot', 'стріляти'],
              ['show', 'showed', 'shown', 'показувати'],
              ['shrink', 'shrank', 'shrunk', 'зменшуватись'],
              ['shut', 'shut', 'shut', 'зачиняти'],
              ['sing', 'sang', 'sung', 'співати'],
              ['sink', 'sank', 'sunk', 'тонути'],
              ['sit', 'sat', 'sat', 'сидіти'],
              ['sleep', 'slept', 'slept', 'спати'],
              ['slide', 'slid', 'slid', 'ковзати'],
              ['smell', 'smelt / smelled', 'smelt / smelled', 'нюхати / пахнути'],
              ['sow', 'sowed', 'sown / sowed', 'сіяти'],
              ['speak', 'spoke', 'spoken', 'говорити'],
              ['speed', 'sped', 'sped', 'мчати'],
              ['spell', 'spelt / spelled', 'spelt / spelled', 'писати по буквах'],
              ['spend', 'spent', 'spent', 'витрачати / проводити (час)'],
              ['spill', 'spilt / spilled', 'spilt / spilled', 'проливати'],
              ['spin', 'spun', 'spun', 'крутити'],
              ['spit', 'spat', 'spat', 'плювати'],
              ['split', 'split', 'split', 'розколоти / розділяти'],
              ['spread', 'spread', 'spread', 'розповсюджувати'],
              ['spring', 'sprang', 'sprung', 'стрибати (раптово)'],
              ['stand', 'stood', 'stood', 'стояти'],
              ['steal', 'stole', 'stolen', 'красти'],
              ['stick', 'stuck', 'stuck', 'прилипати / застрягати'],
              ['sting', 'stung', 'stung', 'жалити'],
              ['stink', 'stank', 'stunk', 'смердіти'],
              ['stride', 'strode', 'stridden', 'крокувати'],
              ['strike', 'struck', 'struck', 'вдаряти / страйкувати'],
              ['string', 'strung', 'strung', 'нанизувати'],
              ['strive', 'strove', 'striven', 'прагнути / намагатись'],
              ['swear', 'swore', 'sworn', 'клястись / лаятись'],
              ['sweep', 'swept', 'swept', 'мести'],
              ['swell', 'swelled', 'swollen', 'набрякати'],
              ['swim', 'swam', 'swum', 'плавати'],
              ['swing', 'swung', 'swung', 'гойдатись'],
              ['take', 'took', 'taken', 'брати'],
              ['teach', 'taught', 'taught', 'вчити'],
              ['tear', 'tore', 'torn', 'рвати'],
              ['tell', 'told', 'told', 'розказувати'],
              ['think', 'thought', 'thought', 'думати'],
              ['throw', 'threw', 'thrown', 'кидати'],
              ['tread', 'trod', 'trodden', 'ступати'],
              ['undergo', 'underwent', 'undergone', 'зазнавати / піддаватись'],
              ['understand', 'understood', 'understood', 'розуміти'],
              ['undertake', 'undertook', 'undertaken', 'братись за / зобов\'язуватись'],
              ['upset', 'upset', 'upset', 'засмучувати'],
              ['wake', 'woke', 'woken', 'будити / прокидатись'],
              ['wear', 'wore', 'worn', 'носити (одяг)'],
              ['weave', 'wove', 'woven', 'ткати'],
              ['weep', 'wept', 'wept', 'плакати (literary)'],
              ['win', 'won', 'won', 'перемагати'],
              ['wind', 'wound', 'wound', 'мотати / вигинатись'],
              ['withdraw', 'withdrew', 'withdrawn', 'знімати (гроші) / відступати'],
              ['write', 'wrote', 'written', 'писати'],
              ['wring', 'wrung', 'wrung', 'вижимати'],
            ],
          },
          {
            type: 'note', title: 'lie vs lay — найпоширеніша плутанина',
            text: 'lie / lay / lain → лежати (без додатка): "She lay on the sofa."\nlay / laid / laid → класти (з додатком): "I laid the book on the table."',
            en: { title: 'lie vs lay — the most common confusion', text: 'lie / lay / lain → to recline (no object): "She lay on the sofa."\nlay / laid / laid → to place (with object): "I laid the book on the table."' },
          },
        ],
      },

      {
        id: 'irregular-plurals', title: 'Неправильна множина — A2', emoji: '👥',
        titleEn: 'Irregular Plurals — A2',
        sections: [
          { type: 'intro', text: 'Більшість іменників утворюють множину додаванням -s/-es. Але є група слів з нестандартними формами — їх треба вивчити окремо.',
            en: { text: 'Most nouns form the plural by adding -s/-es. But some words have irregular forms — these need to be learned separately.' } },
          {
            type: 'table', title: 'Внутрішня зміна голосної (Vowel change)',
            rows: [
              ['Однина', 'Множина', 'Переклад'],
              ['man', 'men', 'чоловік / чоловіки'],
              ['woman', 'women', 'жінка / жінки'],
              ['child', 'children', 'дитина / діти'],
              ['tooth', 'teeth', 'зуб / зуби'],
              ['foot', 'feet', 'нога / ноги'],
              ['goose', 'geese', 'гуска / гуси'],
              ['mouse', 'mice', 'миша / миші'],
              ['louse', 'lice', 'воша / воші'],
              ['ox', 'oxen', 'бик / воли'],
            ],
            en: { title: 'Internal vowel change',
              rows: [
                ['Singular', 'Plural', 'Meaning'],
                ['man', 'men', 'man / men'],
                ['woman', 'women', 'woman / women'],
                ['child', 'children', 'child / children'],
                ['tooth', 'teeth', 'tooth / teeth'],
                ['foot', 'feet', 'foot / feet'],
                ['goose', 'geese', 'goose / geese'],
                ['mouse', 'mice', 'mouse / mice'],
                ['louse', 'lice', 'louse / lice'],
                ['ox', 'oxen', 'ox / oxen'],
              ] },
          },
          {
            type: 'table', title: 'Кінцева -f / -fe → -ves',
            rows: [
              ['Однина', 'Множина'],
              ['leaf', 'leaves'],
              ['knife', 'knives'],
              ['wife', 'wives'],
              ['wolf', 'wolves'],
              ['shelf', 'shelves'],
              ['life', 'lives'],
              ['half', 'halves'],
              ['loaf', 'loaves'],
              ['⚠️ Винятки: roof → roofs, cliff → cliffs, belief → beliefs', '', ''],
            ],
            en: { title: 'Final -f / -fe → -ves',
              rows: [
                ['Singular', 'Plural'],
                ['leaf', 'leaves'],
                ['knife', 'knives'],
                ['wife', 'wives'],
                ['wolf', 'wolves'],
                ['shelf', 'shelves'],
                ['life', 'lives'],
                ['half', 'halves'],
                ['loaf', 'loaves'],
                ['⚠️ Exceptions: roof → roofs, cliff → cliffs, belief → beliefs', '', ''],
              ] },
          },
          {
            type: 'table', title: 'Латинські та грецькі запозичення',
            rows: [
              ['Однина', 'Множина', 'Переклад'],
              ['analysis', 'analyses', 'аналіз'],
              ['basis', 'bases', 'основа'],
              ['crisis', 'crises', 'криза'],
              ['thesis', 'theses', 'теза'],
              ['phenomenon', 'phenomena', 'явище'],
              ['criterion', 'criteria', 'критерій'],
              ['datum', 'data', 'дані'],
              ['medium', 'media', 'засіб / медіа'],
              ['nucleus', 'nuclei', 'ядро'],
              ['cactus', 'cacti / cactuses', 'кактус'],
              ['index', 'indices / indexes', 'індекс'],
            ],
            en: { title: 'Latin and Greek borrowings',
              rows: [
                ['Singular', 'Plural', 'Meaning'],
                ['analysis', 'analyses', 'analysis'],
                ['basis', 'bases', 'basis'],
                ['crisis', 'crises', 'crisis'],
                ['thesis', 'theses', 'thesis'],
                ['phenomenon', 'phenomena', 'phenomenon'],
                ['criterion', 'criteria', 'criterion'],
                ['datum', 'data', 'data / datum'],
                ['medium', 'media', 'medium / media'],
                ['nucleus', 'nuclei', 'nucleus'],
                ['cactus', 'cacti / cactuses', 'cactus'],
                ['index', 'indices / indexes', 'index'],
              ] },
          },
          {
            type: 'table', title: 'Незмінні форми (однина = множина)',
            rows: [
              ['Слово', 'Приклад'],
              ['sheep', 'one sheep / three sheep'],
              ['fish', 'one fish / many fish (або fishes)'],
              ['deer', 'one deer / two deer'],
              ['species', 'one species / many species'],
              ['aircraft', 'one aircraft / ten aircraft'],
              ['series', 'a series / two series'],
            ],
            en: { title: 'Unchanging forms (singular = plural)',
              rows: [
                ['Word', 'Example'],
                ['sheep', 'one sheep / three sheep'],
                ['fish', 'one fish / many fish (or fishes)'],
                ['deer', 'one deer / two deer'],
                ['species', 'one species / many species'],
                ['aircraft', 'one aircraft / ten aircraft'],
                ['series', 'a series / two series'],
              ] },
          },
          { type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['The children were playing in the garden.', 'Діти гралися в саду.'],
              ['There are two geese on the lake.', 'На озері два гусаки.'],
              ['The data show interesting results.', 'Дані показують цікаві результати. (data = множина!)'],
              ['She caught three fish in the river.', 'Вона впіймала трьох риб у річці.'],
            ],
          },
        ],
      },

      {
        id: 'spelling-rules', title: 'Правила написання — A1', emoji: '✏️',
        titleEn: 'Spelling Rules — A1',
        sections: [
          {
            type: 'intro',
            text: 'Основні правила написання дієслів при додаванні -ing, -ed, та -s/-es.',
            en: { text: 'Basic spelling rules for verbs when adding -ing, -ed, and -s/-es.' },
          },
          {
            type: 'table', title: 'Правила додавання -ing',
            rows: [
              ['Правило', 'Приклад → результат'],
              ['Просто додати -ing', 'work → working, play → playing'],
              ['Кінцева -e зникає', 'make → making, drive → driving'],
              ['1 склад, CVC — подвоїти', 'run → running, sit → sitting'],
              ['Кінцева -ie → -ying', 'lie → lying, die → dying'],
              ['l → ll (British)', 'travel → travelling (Brit), traveling (Am)'],
            ],
            en: { title: 'Rules for adding -ing',
              rows: [
                ['Rule', 'Example → result'],
                ['Simply add -ing', 'work → working, play → playing'],
                ['Final -e drops', 'make → making, drive → driving'],
                ['1 syllable, CVC — double consonant', 'run → running, sit → sitting'],
                ['Final -ie → -ying', 'lie → lying, die → dying'],
                ['l → ll (British)', 'travel → travelling (Brit), traveling (Am)'],
              ] },
          },
          {
            type: 'table', title: 'Правила додавання -ed',
            rows: [
              ['Правило', 'Приклад → результат'],
              ['Просто додати -ed', 'work → worked, play → played'],
              ['Кінцева -e → тільки -d', 'like → liked, close → closed'],
              ['1 склад, CVC — подвоїти', 'stop → stopped, plan → planned'],
              ['Приголосна + -y → -ied', 'study → studied, try → tried'],
              ['Голосна + -y → -ed', 'play → played, enjoy → enjoyed'],
            ],
            en: { title: 'Rules for adding -ed',
              rows: [
                ['Rule', 'Example → result'],
                ['Simply add -ed', 'work → worked, play → played'],
                ['Final -e → add only -d', 'like → liked, close → closed'],
                ['1 syllable, CVC — double consonant', 'stop → stopped, plan → planned'],
                ['Consonant + -y → -ied', 'study → studied, try → tried'],
                ['Vowel + -y → -ed', 'play → played, enjoy → enjoyed'],
              ] },
          },
        ],
      },

    ],
  },


];

// ══════════════════════════════════════════════════════════════
//   ІСПАНСЬКА ГРАМАТИКА
// ══════════════════════════════════════════════════════════════
export const GRAMMAR_ES: GrammarCategory[] = [

  {
    id: 'basics', title: 'Основи', titleEn: 'Basics', emoji: '🧩',
    rules: [

      {
        id: 'ser-estar', title: 'Ser vs Estar — A1', emoji: '🟢',
        sections: [
          {
            type: 'intro',
            text: 'В іспанській є два дієслова "бути" — ser та estar. Ser використовують для постійних характеристик, estar — для тимчасових станів і місцезнаходження.',
            en: { text: 'Spanish has two verbs for "to be" — ser and estar. Ser is for permanent characteristics, estar is for temporary states and location.' },
          },
          {
            type: 'formula', title: 'Дієвідмінювання (теперішній час)',
            rows: [
              ['yo', 'soy', 'estoy'],
              ['tú', 'eres', 'estás'],
              ['él/ella/usted', 'es', 'está'],
              ['nosotros/as', 'somos', 'estamos'],
              ['vosotros/as', 'sois', 'estáis'],
              ['ellos/ellas/ustedes', 'son', 'están'],
            ],
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['Soy profesor.', 'Я (є) вчитель. (постійна риса)'],
              ['Estoy cansado.', 'Я втомлений. (тимчасовий стан)'],
              ['Madrid está en España.', 'Мадрид у Іспанії. (місце)'],
              ['Ella es alta.', 'Вона висока. (характеристика)'],
            ],
          },
        ],
      },

      {
        id: 'gender-nouns', title: 'Рід іменників — A1', emoji: '⚥',
        sections: [
          {
            type: 'intro',
            text: 'Усі іменники в іспанській мають рід — чоловічий або жіночий. Артикль і прикметник узгоджуються з родом і числом іменника.',
            en: { text: 'All Spanish nouns have a gender — masculine or feminine. Articles and adjectives agree with the noun in gender and number.' },
          },
          {
            type: 'table', title: 'Типові закінчення',
            rows: [
              ['-o → чоловічий', 'el libro (книга)', 'el chico (хлопець)'],
              ['-a → жіночий', 'la mesa (стіл)', 'la chica (дівчина)'],
              ['-ción/-sión → жіночий', 'la canción (пісня)', 'la decisión (рішення)'],
              ['-ema/-oma → чоловічий', 'el problema (проблема)', 'el idioma (мова)'],
            ],
          },
          {
            type: 'note',
            text: 'Артиклі: el / la (однина), los / las (множина). Перед іменниками жіночого роду, що починаються на наголошене "a"/"ha", вживають el: el agua.',
            en: { text: 'Articles: el / la (singular), los / las (plural). Before feminine nouns starting with stressed "a"/"ha", use el: el agua.' },
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['El libro es interesante.', 'Книга цікава.'],
              ['La chica habla español.', 'Дівчина говорить іспанською.'],
              ['Los problemas son grandes.', 'Проблеми великі.'],
              ['El agua está fría.', 'Вода холодна.'],
            ],
          },
        ],
      },

      {
        id: 'articles', title: 'Артиклі — A1', emoji: '🔖',
        sections: [
          {
            type: 'intro',
            text: 'Означений артикль (el, la, los, las) вживають для конкретних, відомих предметів. Неозначений (un, una, unos, unas) — для нових, невизначених.',
            en: { text: 'The definite article (el, la, los, las) is used for specific, known things. The indefinite article (un, una, unos, unas) is used for new, unspecified things.' },
          },
          {
            type: 'table', title: 'Форми артиклів',
            rows: [
              ['', 'однина', 'множина'],
              ['чоловічий', 'el / un', 'los / unos'],
              ['жіночий', 'la / una', 'las / unas'],
            ],
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['Tengo un coche.', 'У мене є машина. (якась)'],
              ['El coche es rojo.', 'Машина червона. (та сама, відома)'],
              ['Hay unas manzanas en la mesa.', 'На столі є кілька яблук.'],
              ['Las manzanas son verdes.', 'Ці яблука зелені.'],
            ],
          },
        ],
      },

      {
        id: 'plural-nouns', title: 'Множина іменників — A1', emoji: '🔢',
        sections: [
          {
            type: 'intro',
            text: 'Множина іменників та прикметників утворюється за простими правилами залежно від закінчення слова.',
            en: { text: 'The plural of nouns and adjectives is formed with simple rules depending on the word ending.' },
          },
          {
            type: 'table', title: 'Правила утворення множини',
            rows: [
              ['голосна → +s', 'libro → libros', 'casa → casas'],
              ['згодна/-í/-ú → +es', 'profesor → profesores', 'país → países'],
              ['-z → -ces', 'lápiz → lápices', 'voz → voces'],
            ],
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['Tengo dos libros nuevos.', 'У мене дві нові книги.'],
              ['Los profesores son simpáticos.', 'Викладачі приємні.'],
              ['Compré tres lápices.', 'Я купив три карандаші.'],
            ],
          },
        ],
      },

      {
        id: 'adjectives', title: 'Прикметники — A1', emoji: '🎨',
        sections: [
          {
            type: 'intro',
            text: 'Прикметники узгоджуються з іменником у роді та числі і зазвичай стоять після іменника.',
            en: { text: 'Adjectives agree with the noun in gender and number and usually come after the noun.' },
          },
          {
            type: 'table', title: 'Узгодження',
            rows: [
              ['чол. одн.', 'un coche rojo', 'червона машина (ч.р.)'],
              ['жін. одн.', 'una casa roja', 'червоний будинок (ж.р.)'],
              ['чол. мн.', 'unos coches rojos', 'червоні машини (мн.)'],
              ['жін. мн.', 'unas casas rojas', 'червоні будинки (мн.)'],
            ],
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['Tengo un perro pequeño.', 'У мене маленький пес.'],
              ['Mis amigas son inteligentes.', 'Мої подруги розумні.'],
              ['Es una ciudad muy bonita.', 'Це дуже гарне місто.'],
            ],
          },
        ],
      },

      {
        id: 'possessives', title: 'Присвійні прикметники — A1', emoji: '👪',
        sections: [
          {
            type: 'intro',
            text: 'Присвійні прикметники вказують на належність і узгоджуються з іменником у числі (а nuestro/vuestro — і в роді).',
            en: { text: 'Possessive adjectives show ownership and agree with the noun in number (and nuestro/vuestro also in gender).' },
          },
          {
            type: 'table', title: 'Форми',
            rows: [
              ['mi / mis', 'мій, моя, моє, мої'],
              ['tu / tus', 'твій, твоя, твоє, твої'],
              ['su / sus', 'його, її, їхній'],
              ['nuestro/a(s)', 'наш, наша, наше, наші'],
              ['vuestro/a(s)', 'ваш, ваша, ваше, ваші'],
            ],
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['Mi hermano vive en Lima.', 'Мій брат живе в Лімі.'],
              ['¿Dónde están tus llaves?', 'Де твої ключі?'],
              ['Nuestra casa es pequeña.', 'Наш будинок маленький.'],
              ['Sus padres son muy amables.', 'Його/її батьки дуже приємні.'],
            ],
          },
        ],
      },

      {
        id: 'demonstratives', title: 'Вказівні займенники — A1', emoji: '👉',
        sections: [
          {
            type: 'intro',
            text: 'Вказівні займенники показують, наскільки далеко предмет від мовця: este (тут), ese (там, недалеко), aquel (там, далеко).',
            en: { text: 'Demonstratives show how far an object is from the speaker: este (here), ese (there, nearby), aquel (over there, far away).' },
          },
          {
            type: 'table', title: 'Форми',
            rows: [
              ['тут', 'este / esta', 'estos / estas'],
              ['там (поруч)', 'ese / esa', 'esos / esas'],
              ['там (далеко)', 'aquel / aquella', 'aquellos / aquellas'],
            ],
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['Este libro es mío.', 'Ця книга моя.'],
              ['Esa chica es mi hermana.', 'Та дівчина — моя сестра.'],
              ['Aquellas montañas son muy altas.', 'Ті (далекі) гори дуже високі.'],
            ],
          },
        ],
      },

      {
        id: 'question-words', title: 'Питальні слова — A1', emoji: '❓',
        sections: [
          {
            type: 'intro',
            text: 'Питальні слова завжди пишуться з наголосом (тильда) і обрамлюються знаками ¿ ... ?',
            en: { text: 'Question words always carry a written accent and the sentence is framed with ¿ ... ?' },
          },
          {
            type: 'table', title: 'Основні питальні слова',
            rows: [
              ['¿Qué?', 'Що?'],
              ['¿Quién?', 'Хто?'],
              ['¿Dónde?', 'Де?'],
              ['¿Cuándo?', 'Коли?'],
              ['¿Por qué?', 'Чому?'],
              ['¿Cómo?', 'Як?'],
              ['¿Cuánto/a?', 'Скільки?'],
            ],
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['¿Qué hora es?', 'Котра година?'],
              ['¿Dónde vives?', 'Де ти живеш?'],
              ['¿Por qué estudias español?', 'Чому ти вивчаєш іспанську?'],
              ['¿Cuánto cuesta esto?', 'Скільки це коштує?'],
            ],
          },
        ],
      },

      {
        id: 'negation', title: 'Заперечення — A1', emoji: '🚫',
        sections: [
          {
            type: 'intro',
            text: 'Заперечення утворюється словом "no" перед дієсловом. Інші заперечні слова (nada, nadie, nunca, tampoco) можна поєднувати з "no".',
            en: { text: 'Negation is formed with "no" before the verb. Other negative words (nada, nadie, nunca, tampoco) can combine with "no".' },
          },
          {
            type: 'formula', title: 'Структура',
            rows: [
              ['❌ (−)', 'no + verbo', '→ No hablo francés.'],
              ['❌ (−−)', 'no + verbo + nada/nadie/nunca', '→ No tengo nada.'],
            ],
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['No hablo francés.', 'Я не говорю французькою.'],
              ['No hay nadie en casa.', 'Удома нікого немає.'],
              ['Nunca como carne.', 'Я ніколи не їм м\'ясо.'],
              ['Yo tampoco quiero ir.', 'Я також не хочу йти.'],
            ],
          },
        ],
      },

      {
        id: 'reflexive-verbs', title: 'Зворотні дієслова — A2', emoji: '🔁',
        sections: [
          {
            type: 'intro',
            text: 'Зворотні дієслова (закінчуються на -se в інфінітиві) описують дії, які людина виконує над собою. Зворотний займенник узгоджується з підметом і зазвичай стоїть перед дієсловом.',
            en: { text: 'Reflexive verbs (ending in -se in the infinitive) describe actions the subject does to themselves. The reflexive pronoun agrees with the subject and usually comes before the verb.' },
          },
          {
            type: 'formula', title: 'levantarse (вставати)',
            rows: [
              ['yo', 'me levanto', '→ Me levanto a las siete.'],
              ['tú', 'te levantas', '→ ¿A qué hora te levantas?'],
              ['él/ella/usted', 'se levanta', '→ Ella se levanta tarde.'],
              ['nosotros/as', 'nos levantamos', '→ Nos levantamos pronto.'],
              ['vosotros/as', 'os levantáis', '→ Os levantáis tarde.'],
              ['ellos/ellas/ustedes', 'se levantan', '→ Se levantan a las ocho.'],
            ],
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['Me ducho por la mañana.', 'Я приймаю душ зранку.'],
              ['¿Cómo te llamas?', 'Як тебе звати?'],
              ['Nos acostamos a las once.', 'Ми лягаємо спати об одинадцятій.'],
            ],
          },
        ],
      },

    ],
  },

  // ══════════════════════════════════════
  //   ЧАСИ ДІЄСЛІВ
  // ══════════════════════════════════════
  {
    id: 'tenses', title: 'Часи дієслів', titleEn: 'Verb Tenses', emoji: '🕐',
    rules: [

      {
        id: 'preterite', title: 'Pretérito Indefinido — A2', emoji: '📅',
        sections: [
          {
            type: 'intro',
            text: 'Простий минулий час використовують для завершених дій у конкретний момент у минулому.',
            en: { text: 'The simple past tense is used for completed actions at a specific point in the past.' },
          },
          {
            type: 'formula', title: 'hablar (-ar), comer (-er), vivir (-ir)',
            rows: [
              ['yo', 'hablé', 'comí', 'viví'],
              ['tú', 'hablaste', 'comiste', 'viviste'],
              ['él/ella/usted', 'habló', 'comió', 'vivió'],
              ['nosotros/as', 'hablamos', 'comimos', 'vivimos'],
              ['vosotros/as', 'hablasteis', 'comisteis', 'vivisteis'],
              ['ellos/ellas/ustedes', 'hablaron', 'comieron', 'vivieron'],
            ],
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['Ayer hablé con mi madre.', 'Вчора я говорив з мамою.'],
              ['Comimos en un restaurante.', 'Ми їли в ресторані.'],
              ['Ella vivió en Madrid dos años.', 'Вона жила в Мадриді два роки.'],
            ],
          },
          {
            type: 'markers', title: 'Маркери часу',
            items: ['ayer', 'anteayer', 'la semana pasada', 'el año pasado', 'hace dos días'],
          },
        ],
      },

      {
        id: 'future-simple', title: 'Futuro Simple — A2', emoji: '🔮',
        sections: [
          {
            type: 'intro',
            text: 'Простий майбутній час утворюють додаванням закінчень до повного інфінітива (однаково для -ar, -er, -ir дієслів).',
            en: { text: 'The simple future is formed by adding endings to the full infinitive (the same for -ar, -er and -ir verbs).' },
          },
          {
            type: 'formula', title: 'hablar / comer / vivir + закінчення',
            rows: [
              ['yo', 'hablar-é', '→ Hablaré con ella mañana.'],
              ['tú', 'hablar-ás', '→ ¿Hablarás con él?'],
              ['él/ella/usted', 'hablar-á', '→ Vivirá en Roma.'],
              ['nosotros/as', 'hablar-emos', '→ Comeremos juntos.'],
              ['vosotros/as', 'hablar-éis', '→ Viviréis aquí.'],
              ['ellos/ellas/ustedes', 'hablar-án', '→ Comerán a las dos.'],
            ],
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['Mañana iré al médico.', 'Завтра я піду до лікаря.'],
              ['El año que viene viviremos en España.', 'Наступного року ми житимемо в Іспанії.'],
              ['¿Qué harás este fin de semana?', 'Що ти робитимеш цими вихідними?'],
            ],
          },
          {
            type: 'note',
            text: 'Деякі дієслова мають неправильну основу майбутнього часу: tener → tendr-, hacer → har-, decir → dir-, poder → podr-, venir → vendr-.',
            en: { text: 'Some verbs have an irregular future stem: tener → tendr-, hacer → har-, decir → dir-, poder → podr-, venir → vendr-.' },
          },
        ],
      },

      {
        id: 'present-regular', title: 'Теперішній час правильних дієслів — A1', emoji: '📌',
        sections: [
          {
            type: 'intro',
            text: 'Правильні дієслова поділяють на три групи за закінченням інфінітива: -ar, -er, -ir. Кожна група має свій набір закінчень у теперішньому часі.',
            en: { text: 'Regular verbs fall into three groups by infinitive ending: -ar, -er, -ir. Each group has its own set of present-tense endings.' },
          },
          {
            type: 'formula', title: 'hablar (-ar), comer (-er), vivir (-ir)',
            rows: [
              ['yo', 'habl-o', 'com-o', 'viv-o'],
              ['tú', 'habl-as', 'com-es', 'viv-es'],
              ['él/ella/usted', 'habl-a', 'com-e', 'viv-e'],
              ['nosotros/as', 'habl-amos', 'com-emos', 'viv-imos'],
              ['vosotros/as', 'habl-áis', 'com-éis', 'viv-ís'],
              ['ellos/ellas/ustedes', 'habl-an', 'com-en', 'viv-en'],
            ],
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['Hablo español.', 'Я говорю іспанською.'],
              ['Comemos a las dos.', 'Ми їмо о другій.'],
              ['¿Vives en Madrid?', 'Ти живеш у Мадриді?'],
              ['No trabajamos los domingos.', 'Ми не працюємо по неділях.'],
            ],
          },
        ],
      },

    ],
  },

];

// ── French grammar ───────────────────────────────────────────
export const GRAMMAR_FR: GrammarCategory[] = [

  {
    id: 'basics', title: 'Основи', titleEn: 'Basics', emoji: '🧩',
    rules: [

      {
        id: 'etre-avoir', title: 'Être vs Avoir — A1', emoji: '🟢',
        sections: [
          {
            type: 'intro',
            text: 'Être (бути) та avoir (мати) — два найважливіші дієслова у французькій. Вони використовуються самостійно і як допоміжні дієслова для утворення інших часів.',
            en: { text: 'Être (to be) and avoir (to have) are the two most important French verbs. They are used on their own and as auxiliary verbs for other tenses.' },
          },
          {
            type: 'formula', title: 'Дієвідмінювання (теперішній час)',
            rows: [
              ['je', 'suis', 'ai'],
              ['tu', 'es', 'as'],
              ['il / elle', 'est', 'a'],
              ['nous', 'sommes', 'avons'],
              ['vous', 'êtes', 'avez'],
              ['ils / elles', 'sont', 'ont'],
            ],
          },
          {
            type: 'note',
            text: 'Avoir вживають там, де в українській кажуть "є" про вік чи наявність: "il a vingt ans" — буквально "він має двадцять років".',
            en: { text: 'Avoir is used where Ukrainian/English say "to be" about age: "il a vingt ans" literally means "he has twenty years".' },
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['Je suis étudiant.', 'Я студент.'],
              ['Il a vingt ans.', 'Йому двадцять років.'],
              ['Nous sommes en France.', 'Ми у Франції.'],
              ['Elle a une voiture.', 'У неї є машина.'],
            ],
          },
        ],
      },

      {
        id: 'gender-nouns', title: 'Рід іменників — A1', emoji: '⚥',
        sections: [
          {
            type: 'intro',
            text: 'Усі іменники у французькій мають рід — чоловічий або жіночий. Артикль узгоджується з родом і числом іменника.',
            en: { text: 'All French nouns have a gender — masculine or feminine. The article agrees with the noun in gender and number.' },
          },
          {
            type: 'table', title: 'Артиклі',
            rows: [
              ['', 'однина', 'множина'],
              ['чоловічий', 'le / un', 'les / des'],
              ['жіночий', 'la / une', 'les / des'],
              ['перед голосною', "l'", 'les / des'],
            ],
          },
          {
            type: 'note',
            text: 'Типові закінчення жіночого роду: -e, -tion, -sion, -té. Типові закінчення чоловічого роду: -age, -ment, -isme (з винятками).',
            en: { text: 'Typical feminine endings: -e, -tion, -sion, -té. Typical masculine endings: -age, -ment, -isme (with exceptions).' },
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['Le livre est intéressant.', 'Книга цікава.'],
              ['La maison est grande.', 'Дім великий.'],
              ['Les enfants jouent.', 'Діти грають.'],
              ["J'ai une pomme.", 'У мене є яблуко.'],
            ],
          },
        ],
      },

    ],
  },

];

// ── Italian grammar ──────────────────────────────────────────
export const GRAMMAR_IT: GrammarCategory[] = [

  {
    id: 'basics', title: 'Основи', titleEn: 'Basics', emoji: '🧩',
    rules: [

      {
        id: 'essere-avere', title: 'Essere vs Avere — A1', emoji: '🟢',
        sections: [
          {
            type: 'intro',
            text: 'Essere (бути) та avere (мати) — два найважливіші дієслова в італійській. Вони використовуються самостійно і як допоміжні дієслова для утворення складених часів.',
            en: { text: 'Essere (to be) and avere (to have) are the two most important Italian verbs. They are used on their own and as auxiliary verbs for compound tenses.' },
          },
          {
            type: 'formula', title: 'Дієвідмінювання (теперішній час)',
            rows: [
              ['io', 'sono', 'ho'],
              ['tu', 'sei', 'hai'],
              ['lui / lei', 'è', 'ha'],
              ['noi', 'siamo', 'abbiamo'],
              ['voi', 'siete', 'avete'],
              ['loro', 'sono', 'hanno'],
            ],
          },
          {
            type: 'note',
            text: 'Avere вживають там, де українською кажуть "є" про вік чи наявність: "ho vent\'anni" — буквально "я маю двадцять років".',
            en: { text: 'Avere is used where Ukrainian/English say "to be" about age: "ho vent\'anni" literally means "I have twenty years".' },
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['Sono insegnante.', 'Я вчитель.'],
              ["Ho vent'anni.", 'Мені двадцять років.'],
              ['Siamo a Roma.', 'Ми в Римі.'],
              ['Lei ha un gatto.', 'У неї є кіт.'],
            ],
          },
        ],
      },

      {
        id: 'gender-nouns', title: 'Рід іменників — A1', emoji: '⚥',
        sections: [
          {
            type: 'intro',
            text: 'Усі іменники в італійській мають рід — чоловічий або жіночий. Артикль узгоджується з родом і числом іменника.',
            en: { text: 'All Italian nouns have a gender — masculine or feminine. The article agrees with the noun in gender and number.' },
          },
          {
            type: 'table', title: 'Типові закінчення та артиклі',
            rows: [
              ['-o → чоловічий', 'il libro (книга)', 'i libri (книги)'],
              ['-a → жіночий', 'la casa (дім)', 'le case (дома)'],
              ['голосна на початку слова', "l'amico (друг)", "l'amica (подруга)"],
              ['-e → чол. або жін.', 'il padre / la madre', 'i padri / le madri'],
            ],
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['Il libro è interessante.', 'Книга цікава.'],
              ['La casa è grande.', 'Дім великий.'],
              ['I bambini giocano.', 'Діти грають.'],
              ['Ho una mela.', 'У мене є яблуко.'],
            ],
          },
        ],
      },

    ],
  },

];

// ── Portuguese grammar ───────────────────────────────────────
export const GRAMMAR_PT: GrammarCategory[] = [

  {
    id: 'basics', title: 'Основи', titleEn: 'Basics', emoji: '🧩',
    rules: [

      {
        id: 'ser-estar', title: 'Ser vs Estar — A1', emoji: '🟢',
        sections: [
          {
            type: 'intro',
            text: 'У португальській є два дієслова "бути" — ser та estar. Ser використовують для постійних характеристик, estar — для тимчасових станів і місцезнаходження.',
            en: { text: 'Portuguese has two verbs for "to be" — ser and estar. Ser is for permanent characteristics, estar is for temporary states and location.' },
          },
          {
            type: 'formula', title: 'Дієвідмінювання (теперішній час)',
            rows: [
              ['eu', 'sou', 'estou'],
              ['tu', 'és', 'estás'],
              ['ele / ela', 'é', 'está'],
              ['nós', 'somos', 'estamos'],
              ['vós', 'sois', 'estais'],
              ['eles / elas', 'são', 'estão'],
            ],
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['Sou professor.', 'Я (є) вчитель. (постійна риса)'],
              ['Estou cansado.', 'Я втомлений. (тимчасовий стан)'],
              ['Lisboa está em Portugal.', 'Лісабон у Португалії. (місце)'],
              ['Ela é alta.', 'Вона висока. (характеристика)'],
            ],
          },
        ],
      },

      {
        id: 'gender-nouns', title: 'Рід іменників — A1', emoji: '⚥',
        sections: [
          {
            type: 'intro',
            text: 'Усі іменники в португальській мають рід — чоловічий або жіночий. Артикль узгоджується з родом і числом іменника.',
            en: { text: 'All Portuguese nouns have a gender — masculine or feminine. The article agrees with the noun in gender and number.' },
          },
          {
            type: 'table', title: 'Типові закінчення та артиклі',
            rows: [
              ['-o → чоловічий', 'o livro (книга)', 'os livros (книги)'],
              ['-a → жіночий', 'a casa (дім)', 'as casas (дома)'],
              ['неозначений артикль', 'um / uns', 'uma / umas'],
            ],
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['O livro é interessante.', 'Книга цікава.'],
              ['A casa é grande.', 'Дім великий.'],
              ['Os livros são novos.', 'Книги нові.'],
              ['Tenho uma maçã.', 'У мене є яблуко.'],
            ],
          },
        ],
      },

    ],
  },

];

// ── German grammar ───────────────────────────────────────────
export const GRAMMAR_DE: GrammarCategory[] = [

  {
    id: 'basics', title: 'Основи', titleEn: 'Basics', emoji: '🧩',
    rules: [

      {
        id: 'sein-haben', title: 'Sein vs Haben — A1', emoji: '🟢',
        sections: [
          {
            type: 'intro',
            text: 'Sein (бути) та haben (мати) — два найважливіші дієслова в німецькій. Вони використовуються самостійно і як допоміжні дієслова для утворення інших часів.',
            en: { text: 'Sein (to be) and haben (to have) are the two most important German verbs. They are used on their own and as auxiliary verbs for other tenses.' },
          },
          {
            type: 'formula', title: 'Дієвідмінювання (теперішній час)',
            rows: [
              ['ich', 'bin', 'habe'],
              ['du', 'bist', 'hast'],
              ['er / sie / es', 'ist', 'hat'],
              ['wir', 'sind', 'haben'],
              ['ihr', 'seid', 'habt'],
              ['sie / Sie', 'sind', 'haben'],
            ],
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['Ich bin Lehrer.', 'Я вчитель.'],
              ['Er hat ein Auto.', 'У нього є машина.'],
              ['Wir sind in Berlin.', 'Ми в Берліні.'],
              ['Sie ist groß.', 'Вона висока.'],
            ],
          },
        ],
      },

      {
        id: 'articles', title: 'Артиклі der / die / das — A1', emoji: '🔖',
        sections: [
          {
            type: 'intro',
            text: 'У німецькій кожен іменник має рід — чоловічий (der), жіночий (die) або середній (das). Рід потрібно запам\'ятовувати разом зі словом.',
            en: { text: 'Every German noun has a gender — masculine (der), feminine (die) or neuter (das). The gender must be memorised together with the word.' },
          },
          {
            type: 'table', title: 'Означений і неозначений артиклі (Nominativ)',
            rows: [
              ['чоловічий', 'der Tisch', 'ein Tisch'],
              ['жіночий', 'die Frau', 'eine Frau'],
              ['середній', 'das Kind', 'ein Kind'],
              ['множина', 'die Bücher', '— (без артикля)'],
            ],
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['Der Tisch ist groß.', 'Стіл великий.'],
              ['Die Frau ist nett.', 'Жінка приємна.'],
              ['Das Kind spielt.', 'Дитина грає.'],
              ['Ich habe ein Buch.', 'У мене є книга.'],
            ],
          },
        ],
      },

    ],
  },

];

export const GRAMMAR_HE: GrammarCategory[] = [

  {
    id: 'basics', title: 'Основи', titleEn: 'Basics', emoji: '🧩',
    rules: [

      {
        id: 'definite-article', title: 'ה\' הידיעה — A1', emoji: '🔖',
        sections: [
          {
            type: 'intro',
            text: 'У івриті означеність позначається префіксом <span dir="rtl">ה-</span>, який додається перед іменником і означає "цей/ця/ці" (the).',
            en: { text: 'In Hebrew, definiteness is marked by the prefix ה- attached before a noun, meaning "the".' },
          },
          {
            type: 'table', title: 'Без артикля → з артиклем',
            rows: [
              ['<span dir="rtl">ספר</span> (книга)', '<span dir="rtl">הספר</span> (ця книга)'],
              ['<span dir="rtl">בית</span> (дім)', '<span dir="rtl">הבית</span> (цей дім)'],
              ['<span dir="rtl">אישה</span> (жінка)', '<span dir="rtl">האישה</span> (ця жінка)'],
            ],
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['<span dir="rtl">הספר על השולחן.</span>', 'Книга на столі.'],
              ['<span dir="rtl">האישה יושבת בבית.</span>', 'Жінка сидить вдома.'],
            ],
          },
        ],
      },

      {
        id: 'gender', title: 'זכר ונקבה — A1', emoji: '👫',
        sections: [
          {
            type: 'intro',
            text: 'Іменники та прикметники в івриті мають рід — чоловічий або жіночий. Жіночий рід часто утворюється додаванням <span dir="rtl">ה-</span> або <span dir="rtl">ת-</span> в кінці слова.',
            en: { text: 'Hebrew nouns and adjectives have gender — masculine or feminine. The feminine form is often created by adding ה- or ת- at the end of the word.' },
          },
          {
            type: 'table', title: 'Чоловічий і жіночий рід',
            rows: [
              ['<span dir="rtl">טוב</span> (хороший)', '<span dir="rtl">טובה</span> (хороша)'],
              ['<span dir="rtl">גדול</span> (великий)', '<span dir="rtl">גדולה</span> (велика)'],
              ['<span dir="rtl">ילד</span> (хлопчик)', '<span dir="rtl">ילדה</span> (дівчинка)'],
            ],
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['<span dir="rtl">הוא ילד טוב.</span>', 'Він хороший хлопчик.'],
              ['<span dir="rtl">היא ילדה טובה.</span>', 'Вона хороша дівчинка.'],
            ],
          },
        ],
      },

      {
        id: 'present-tense', title: 'הווה — הטיית פעלים — A1', emoji: '🟢',
        sections: [
          {
            type: 'intro',
            text: 'У теперішньому часі дієслово змінюється за родом і числом підмета. Дієслово <span dir="rtl">לכתוב</span> (писати) у формі теперішнього часу <span dir="rtl">כותב</span>.',
            en: { text: 'In the present tense, the verb changes according to the gender and number of the subject. The verb לכתוב (to write) has the present-tense form כותב.' },
          },
          {
            type: 'formula', title: '<span dir="rtl">לכתוב</span> (писати) — теперішній час',
            rows: [
              ['<span dir="rtl">אני</span> (я, ч.р.)', '<span dir="rtl">כותב</span>'],
              ['<span dir="rtl">אני</span> (я, ж.р.)', '<span dir="rtl">כותבת</span>'],
              ['<span dir="rtl">אתה</span> (ти, ч.р.)', '<span dir="rtl">כותב</span>'],
              ['<span dir="rtl">את</span> (ти, ж.р.)', '<span dir="rtl">כותבת</span>'],
              ['<span dir="rtl">אנחנו</span> (ми)', '<span dir="rtl">כותבים / כותבות</span>'],
            ],
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['<span dir="rtl">אני כותב מכתב.</span>', 'Я пишу листа. (чоловік)'],
              ['<span dir="rtl">היא כותבת ספר.</span>', 'Вона пише книгу.'],
            ],
          },
        ],
      },

      {
        id: 'pronouns-to-be', title: 'כינויי גוף — A1', emoji: '🙋',
        sections: [
          {
            type: 'intro',
            text: 'На відміну від української, у теперішньому часі іврит не використовує окреме дієслово "бути" — займенник одразу поєднується з прикметником або іменником.',
            en: { text: 'Unlike English, in the present tense Hebrew has no separate verb "to be" — the pronoun connects directly with an adjective or noun.' },
          },
          {
            type: 'table', title: 'Особові займенники',
            rows: [
              ['<span dir="rtl">אני</span>', 'я'],
              ['<span dir="rtl">אתה / את</span>', 'ти (ч./ж.)'],
              ['<span dir="rtl">הוא / היא</span>', 'він / вона'],
              ['<span dir="rtl">אנחנו</span>', 'ми'],
              ['<span dir="rtl">הם / הן</span>', 'вони (ч./ж.)'],
            ],
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['<span dir="rtl">אני מורה.</span>', 'Я (є) вчитель.'],
              ['<span dir="rtl">היא רעבה.</span>', 'Вона (є) голодна.'],
            ],
          },
          {
            type: 'tip', title: 'Без "є"',
            text: 'אני מורה буквально "я вчитель" — слово "є" не потрібне і не має окремого еквівалента в теперішньому часі.',
            en: { title: 'No "is/am/are"', text: 'אני מורה literally means "I teacher" — no equivalent of "am/is/are" is needed in the present tense.' },
          },
        ],
      },

      {
        id: 'plural', title: 'רבים — A1', emoji: '🔢',
        sections: [
          {
            type: 'intro',
            text: 'Множина чоловічого роду зазвичай утворюється закінченням <span dir="rtl">ים-</span>, жіночого — <span dir="rtl">ות-</span>, але є й винятки.',
            en: { text: 'The masculine plural is usually formed with the ending ים-, the feminine with ות-, though there are exceptions.' },
          },
          {
            type: 'table', title: 'Однина → множина',
            rows: [
              ['<span dir="rtl">ספר</span> (книга)', '<span dir="rtl">ספרים</span> (книги)'],
              ['<span dir="rtl">מורה</span> (учитель)', '<span dir="rtl">מורים</span> (учителі)'],
              ['<span dir="rtl">אישה</span> (жінка)', '<span dir="rtl">נשים</span> (жінки, виняток)'],
              ['<span dir="rtl">ילדה</span> (дівчинка)', '<span dir="rtl">ילדות</span> (дівчинки)'],
            ],
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['<span dir="rtl">יש לי שני ספרים.</span>', 'У мене є дві книги.'],
              ['<span dir="rtl">הילדות משחקות בחוץ.</span>', 'Дівчатка грають на вулиці.'],
            ],
          },
        ],
      },

    ],
  },

];

export const GRAMMAR_AR: GrammarCategory[] = [

  {
    id: 'basics', title: 'Основи', titleEn: 'Basics', emoji: '🧩',
    rules: [

      {
        id: 'definite-article', title: 'أل التعريف — A1', emoji: '🔖',
        sections: [
          {
            type: 'intro',
            text: 'Означеність в арабській позначається префіксом <span dir="rtl">ال</span>, який додається перед іменником незалежно від роду і числа.',
            en: { text: 'Definiteness in Arabic is marked by the prefix ال, attached before a noun regardless of gender or number.' },
          },
          {
            type: 'table', title: 'Без артикля → з артиклем',
            rows: [
              ['<span dir="rtl">كتاب</span> (книга)', '<span dir="rtl">الكتاب</span> (ця книга)'],
              ['<span dir="rtl">بيت</span> (дім)', '<span dir="rtl">البيت</span> (цей дім)'],
              ['<span dir="rtl">مدينة</span> (місто)', '<span dir="rtl">المدينة</span> (це місто)'],
            ],
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['<span dir="rtl">الكتاب على الطاولة.</span>', 'Книга на столі.'],
              ['<span dir="rtl">البيت كبير.</span>', 'Дім великий.'],
            ],
          },
        ],
      },

      {
        id: 'gender', title: 'المذكر والمؤنث — A1', emoji: '👫',
        sections: [
          {
            type: 'intro',
            text: 'Іменники та прикметники в арабській мають рід — чоловічий або жіночий. Жіночий рід зазвичай утворюється додаванням <span dir="rtl">ة</span> (та марбута) в кінці слова.',
            en: { text: 'Arabic nouns and adjectives have gender — masculine or feminine. The feminine form is usually created by adding ة (ta marbuta) at the end of the word.' },
          },
          {
            type: 'table', title: 'Чоловічий і жіночий рід',
            rows: [
              ['<span dir="rtl">كبير</span> (великий)', '<span dir="rtl">كبيرة</span> (велика)'],
              ['<span dir="rtl">طالب</span> (студент)', '<span dir="rtl">طالبة</span> (студентка)'],
              ['<span dir="rtl">جميل</span> (гарний)', '<span dir="rtl">جميلة</span> (гарна)'],
            ],
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['<span dir="rtl">هو طالب جيد.</span>', 'Він хороший студент.'],
              ['<span dir="rtl">هي طالبة جيدة.</span>', 'Вона хороша студентка.'],
            ],
          },
        ],
      },

      {
        id: 'present-tense', title: 'الفعل في المضارع — A1', emoji: '🟢',
        sections: [
          {
            type: 'intro',
            text: 'У теперішньому часі дієслово отримує префікси й суфікси залежно від особи. Дієслово <span dir="rtl">كتب</span> (писати) у теперішньому часі — <span dir="rtl">يكتب</span>.',
            en: { text: 'In the present tense, the verb takes prefixes and suffixes depending on the person. The verb كتب (to write) becomes يكتب in the present tense.' },
          },
          {
            type: 'formula', title: '<span dir="rtl">يكتب</span> (писати) — теперішній час',
            rows: [
              ['<span dir="rtl">أنا</span> (я)', '<span dir="rtl">أكتب</span>'],
              ['<span dir="rtl">أنتَ</span> (ти, ч.р.)', '<span dir="rtl">تكتب</span>'],
              ['<span dir="rtl">أنتِ</span> (ти, ж.р.)', '<span dir="rtl">تكتبين</span>'],
              ['<span dir="rtl">هو</span> (він)', '<span dir="rtl">يكتب</span>'],
              ['<span dir="rtl">هي</span> (вона)', '<span dir="rtl">تكتب</span>'],
              ['<span dir="rtl">نحن</span> (ми)', '<span dir="rtl">نكتب</span>'],
            ],
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['<span dir="rtl">أنا أكتب رسالة.</span>', 'Я пишу листа.'],
              ['<span dir="rtl">هي تكتب كتابًا.</span>', 'Вона пише книгу.'],
            ],
          },
        ],
      },

      {
        id: 'pronouns', title: 'الضمائر الشخصية — A1', emoji: '🙋',
        sections: [
          {
            type: 'intro',
            text: 'Особові займенники в арабській розрізняють рід уже в другій особі однини (ти — чоловік/жінка) та у множині.',
            en: { text: 'Arabic personal pronouns distinguish gender already in the second person singular ("you" — masculine/feminine) and in the plural.' },
          },
          {
            type: 'table', title: 'Особові займенники',
            rows: [
              ['<span dir="rtl">أنا</span>', 'я'],
              ['<span dir="rtl">أنتَ / أنتِ</span>', 'ти (ч./ж.)'],
              ['<span dir="rtl">هو / هي</span>', 'він / вона'],
              ['<span dir="rtl">نحن</span>', 'ми'],
              ['<span dir="rtl">هم / هن</span>', 'вони (ч./ж.)'],
            ],
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['<span dir="rtl">أنا مدرّس.</span>', 'Я (є) вчитель.'],
              ['<span dir="rtl">هي جائعة.</span>', 'Вона (є) голодна.'],
            ],
          },
        ],
      },

      {
        id: 'plural', title: 'الجمع — A1', emoji: '🔢',
        sections: [
          {
            type: 'intro',
            text: 'В арабській є "правильна" множина (додавання закінчення) та "зламана" множина (зміна внутрішньої структури слова, яку потрібно запам\'ятовувати окремо).',
            en: { text: 'Arabic has a "sound" plural (formed by adding an ending) and a "broken" plural (formed by changing the word\'s internal structure, which must be memorised separately).' },
          },
          {
            type: 'table', title: 'Однина → множина',
            rows: [
              ['<span dir="rtl">معلم</span> → <span dir="rtl">معلمون</span>', 'учитель → учителі (правильна)'],
              ['<span dir="rtl">طالبة</span> → <span dir="rtl">طالبات</span>', 'студентка → студентки (правильна)'],
              ['<span dir="rtl">كتاب</span> → <span dir="rtl">كتب</span>', 'книга → книги (зламана)'],
              ['<span dir="rtl">بيت</span> → <span dir="rtl">بيوت</span>', 'дім → будинки (зламана)'],
            ],
          },
          {
            type: 'examples', title: 'Приклади', en: { title: 'Examples' },
            rows: [
              ['<span dir="rtl">لدي كتب كثيرة.</span>', 'У мене багато книг.'],
              ['<span dir="rtl">البيوت قديمة.</span>', 'Будинки старі.'],
            ],
          },
        ],
      },

    ],
  },

];

// ── Grammar content per language being learned ─────────────────
export const GRAMMAR_BY_LANG: Partial<Record<Lang | 'he' | 'ar', GrammarCategory[]>> = {
  en: GRAMMAR,
  es: GRAMMAR_ES,
  fr: GRAMMAR_FR,
  it: GRAMMAR_IT,
  pt: GRAMMAR_PT,
  de: GRAMMAR_DE,
  he: GRAMMAR_HE,
  ar: GRAMMAR_AR,
};
