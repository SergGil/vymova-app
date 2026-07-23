// Vymova — data/grammar-data/grammar_bg.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_BG: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "pronouns",
        "title": "Особові займенники — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Болгарські дієслова показують особу закінченням, тому займенник у звичайній розмові часто опускають.",
            "en": {
              "text": "Bulgarian verbs mark person through their ending, so the pronoun is often dropped in normal speech."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "аз",
                "я"
              ],
              [
                "ти",
                "ти"
              ],
              [
                "той / тя / то",
                "він / вона / воно"
              ],
              [
                "ние",
                "ми"
              ],
              [
                "те",
                "вони"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Аз съм учител.",
                "Я вчитель."
              ]
            ]
          }
        ]
      },
      {
        "id": "to-be",
        "title": "Дієслово \"съм\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "\"Съм\" відмінюється схоже на українське \"бути\" й активно використовується як зв'язка.",
            "en": {
              "text": "\"Съм\" conjugates similarly to Ukrainian \"бути\" and is actively used as a copula."
            }
          },
          {
            "type": "formula",
            "title": "съм / си / е / сме / сте / са",
            "rows": [
              [
                "Аз съм учител.",
                "(Я вчитель.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Тя е лекарка.",
                "Вона лікарка."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation",
        "title": "Заперечення \"не\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечна частка не ставиться безпосередньо перед дієсловом.",
            "en": {
              "text": "The negative particle не goes directly before the verb."
            }
          },
          {
            "type": "formula",
            "title": "не + дієслово",
            "rows": [
              [
                "Не знам.",
                "(Я не знаю.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Той не дойде.",
                "Він не прийшов."
              ]
            ]
          }
        ]
      },
      {
        "id": "questions",
        "title": "Питання з \"ли\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні часто утворюються часткою ли одразу після ключового слова.",
            "en": {
              "text": "Yes/no questions are often formed with the particle ли right after the key word."
            }
          },
          {
            "type": "formula",
            "title": "Слово + ли + решта речення?",
            "rows": [
              [
                "Уморен ли си?",
                "(Ти втомлений?)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Имаш ли време?",
                "У тебе є час?"
              ]
            ]
          }
        ]
      },
      {
        "id": "suffixed-article",
        "title": "Артикль-суфікс, без відмінків — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від інших слов'янських мов, болгарська втратила відмінки іменників, але має означений артикль, приєднаний як суфікс в кінці слова.",
            "en": {
              "text": "Unlike other Slavic languages, Bulgarian lost noun cases, but has a definite article attached as a suffix at the end of the word."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "книга → книгата",
                "книга → ця книга"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Книгата е интересна.",
                "Ця книга цікава."
              ]
            ]
          }
        ]
      }
    ]
  }
];
