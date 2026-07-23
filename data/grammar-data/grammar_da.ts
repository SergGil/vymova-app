// Vymova — data/grammar-data/grammar_da.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_DA: GrammarCategory[] = [
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
            "text": "Данські дієслова не змінюються за особами чи числом — форма дієслова однакова для jeg, du, han тощо.",
            "en": {
              "text": "Danish verbs never change for person or number — the verb form is identical for jeg, du, han, and so on."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "jeg",
                "я"
              ],
              [
                "du",
                "ти"
              ],
              [
                "han / hun / den / det",
                "він / вона / воно"
              ],
              [
                "vi",
                "ми"
              ],
              [
                "de",
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
                "Jeg er lærer.",
                "Я вчитель."
              ]
            ]
          }
        ]
      },
      {
        "id": "to-be",
        "title": "Дієслово \"at være\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово \"være\" (бути) має ЄДИНУ форму теперішнього часу — er — для всіх осіб та чисел.",
            "en": {
              "text": "The verb \"være\" (to be) has just ONE present-tense form — er — for every person and number."
            }
          },
          {
            "type": "formula",
            "title": "Підмет + er + присудок",
            "rows": [
              [
                "Jeg er lærer.",
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
                "De er trætte.",
                "Вони втомлені."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation",
        "title": "Заперечення \"ikke\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від українського \"не\" перед дієсловом, заперечна частка ikke в данській ставиться ПІСЛЯ дієслова.",
            "en": {
              "text": "Unlike Ukrainian's pre-verbal negation, the negative particle ikke in Danish comes AFTER the verb."
            }
          },
          {
            "type": "formula",
            "title": "Дієслово + ikke",
            "rows": [
              [
                "Jeg ved ikke.",
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
                "Han kommer ikke.",
                "Він не прийде."
              ]
            ]
          }
        ]
      },
      {
        "id": "questions",
        "title": "Питання — інверсія — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні утворюються перестановкою дієслова перед підметом (інверсія), без додаткових допоміжних слів.",
            "en": {
              "text": "Yes/no questions are formed by moving the verb before the subject (inversion), with no extra auxiliary word needed."
            }
          },
          {
            "type": "formula",
            "title": "Дієслово + підмет + ...?",
            "rows": [
              [
                "Er du træt?",
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
                "Har du tid?",
                "У тебе є час?"
              ]
            ]
          }
        ]
      },
      {
        "id": "suffixed-article",
        "title": "Артикль-суфікс — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль у данській зазвичай приєднується як суфікс в кінці іменника, а не окремим словом перед ним.",
            "en": {
              "text": "The definite article in Danish is usually attached as a suffix at the end of the noun, rather than as a separate word before it."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "en bog → bogen",
                "книга → ця книга"
              ],
              [
                "et hus → huset",
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
                "Bogen er god.",
                "Ця книга хороша."
              ]
            ]
          }
        ]
      }
    ]
  }
];
