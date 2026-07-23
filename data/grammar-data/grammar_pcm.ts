// Vymova — data/grammar-data/grammar_pcm.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_PCM: GrammarCategory[] = [
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
            "text": "Займенники нігерійського піджину подібні до англійських, але спрощені — форма не змінюється за відмінком так, як в англійській \"I/me\".",
            "en": {
              "text": "Nigerian Pidgin pronouns resemble English but are simplified — they do not change by case the way English \"I/me\" does."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "I",
                "я"
              ],
              [
                "you",
                "ти / ви"
              ],
              [
                "im / e",
                "він / вона / воно"
              ],
              [
                "we",
                "ми"
              ],
              [
                "dem",
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
                "I dey fine.",
                "Я в порядку."
              ],
              [
                "Dem dey house.",
                "Вони вдома."
              ]
            ]
          }
        ]
      },
      {
        "id": "na-copula",
        "title": "Зв'язка \"na\" — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Для ототожнення (\"я — вчитель\") використовується слово na перед іменником, а для місцезнаходження/існування — dey.",
            "en": {
              "text": "For identity statements (\"I am a teacher\"), use na before the noun; for location/existence, use dey."
            }
          },
          {
            "type": "formula",
            "title": "Підмет + na + іменник",
            "rows": [
              [
                "I na teacher.",
                "(Я вчитель.)"
              ],
              [
                "E dey house.",
                "(Він вдома.)"
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
                "Im na doctor.",
                "Він/вона лікар."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation",
        "title": "Заперечення \"no\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою no, яка ставиться перед дієсловом.",
            "en": {
              "text": "Negation is formed with the particle no, placed right before the verb."
            }
          },
          {
            "type": "formula",
            "title": "Підмет + no + дієслово",
            "rows": [
              [
                "I no know.",
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
                "E no dey work today.",
                "Він не працює сьогодні."
              ]
            ]
          }
        ]
      },
      {
        "id": "questions",
        "title": "Питання — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні найчастіше утворюються висхідною інтонацією без зміни порядку слів, іноді з часткою abi в кінці.",
            "en": {
              "text": "Yes/no questions are usually formed just by rising intonation, without changing word order, sometimes with abi at the end."
            }
          },
          {
            "type": "formula",
            "title": "Твердження + висхідна інтонація?",
            "rows": [
              [
                "You dey fine?",
                "(Ти в порядку?)"
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
                "You dey come, abi?",
                "Ти йдеш, чи не так?"
              ]
            ]
          }
        ]
      },
      {
        "id": "dey-marker",
        "title": "Маркер \"dey\" — A1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Слово dey перед дієсловом позначає тривалу/звичну дію — подібно до англійського \"-ing\" чи Present Simple.",
            "en": {
              "text": "The word dey before a verb marks an ongoing or habitual action — similar to English \"-ing\" or the Present Simple."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "I dey work.",
                "Я працюю (зараз або регулярно)."
              ],
              [
                "Dem dey chop.",
                "Вони їдять."
              ]
            ]
          }
        ]
      }
    ]
  }
];
