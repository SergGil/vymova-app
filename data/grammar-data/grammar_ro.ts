// Vymova — data/grammar-data/grammar_ro.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_RO: GrammarCategory[] = [
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
            "text": "Румунські дієслова майже завжди вказують особу самі через закінчення, тому займенники часто опускають.",
            "en": {
              "text": "Romanian verbs almost always mark person through their ending, so the pronoun is often dropped."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "eu",
                "я"
              ],
              [
                "tu",
                "ти"
              ],
              [
                "el / ea",
                "він / вона"
              ],
              [
                "noi",
                "ми"
              ],
              [
                "ei / ele",
                "вони (чол. / жін.)"
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
                "Eu sunt profesor.",
                "Я вчитель."
              ]
            ]
          }
        ]
      },
      {
        "id": "to-be",
        "title": "Дієслово \"a fi\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "\"A fi\" — неправильне дієслово, форми якого важливо запам'ятати напам'ять для теперішнього часу.",
            "en": {
              "text": "\"A fi\" is an irregular verb whose present-tense forms need to be memorised directly."
            }
          },
          {
            "type": "formula",
            "title": "sunt / ești / este / suntem / sunteți / sunt",
            "rows": [
              [
                "Eu sunt profesor.",
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
                "Ea este doctor.",
                "Вона лікар."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation",
        "title": "Заперечення \"nu\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою nu безпосередньо перед дієсловом.",
            "en": {
              "text": "Negation is formed with the particle nu directly before the verb."
            }
          },
          {
            "type": "formula",
            "title": "nu + дієслово",
            "rows": [
              [
                "Nu știu.",
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
                "El nu a venit.",
                "Він не прийшов."
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
            "text": "Питання так/ні найчастіше утворюються просто висхідною інтонацією, без зміни порядку слів чи додаткової частки.",
            "en": {
              "text": "Yes/no questions are most often formed just with rising intonation, without changing word order or adding a particle."
            }
          },
          {
            "type": "formula",
            "title": "Твердження + висхідна інтонація?",
            "rows": [
              [
                "Ești obosit?",
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
                "Ai timp acum?",
                "У тебе є час зараз?"
              ]
            ]
          }
        ]
      },
      {
        "id": "definite-article",
        "title": "Означений артикль-суфікс — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від англійської, означений артикль у румунській приєднується як суфікс в кінці іменника, а не стоїть окремим словом перед ним.",
            "en": {
              "text": "Unlike English, Romanian's definite article attaches as a suffix at the end of the noun, rather than standing as a separate word before it."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "băiat → băiatul",
                "хлопчик → цей хлопчик"
              ],
              [
                "casă → casa",
                "дім → цей дім"
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
                "Băiatul citește.",
                "Хлопчик читає."
              ]
            ]
          }
        ]
      }
    ]
  }
];
