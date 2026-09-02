// Vymova — data/grammar-data/grammar_sv.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_SV: GrammarCategory[] = [
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
            "text": "Шведські дієслова не змінюються за особами чи числом — форма дієслова однакова для jag, du, han тощо.",
            "en": {
              "text": "Swedish verbs never change for person or number — the verb form is identical for jag, du, han, and so on."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "jag",
                "я"
              ],
              [
                "du",
                "ти"
              ],
              [
                "han / hon / den / det",
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
                "Jag är lärare.",
                "Я вчитель."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be",
        "title": "Дієслово \"att vara\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово \"vara\" (бути) має ЄДИНУ форму теперішнього часу — är — для всіх осіб та чисел.",
            "en": {
              "text": "The verb \"vara\" (to be) has just ONE present-tense form — är — for every person and number."
            }
          },
          {
            "type": "formula",
            "title": "Підмет + är + присудок",
            "rows": [
              [
                "Jag är lärare.",
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
                "De är trötta.",
                "Вони втомлені."
              ]
            ]
          }
        ],
        "titleEn": "The Verb Att Vara (To Be) — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"inte\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від українського \"не\" перед дієсловом, заперечна частка inte в шведській ставиться ПІСЛЯ дієслова.",
            "en": {
              "text": "Unlike Ukrainian's pre-verbal negation, the negative particle inte in Swedish comes AFTER the verb."
            }
          },
          {
            "type": "formula",
            "title": "Дієслово + inte",
            "rows": [
              [
                "Jag vet inte.",
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
                "Han kommer inte.",
                "Він не прийде."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Inte — A1"
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
                "Är du trött?",
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
        ],
        "titleEn": "Questions — Inversion — A1"
      },
      {
        "id": "suffixed-article",
        "title": "Артикль-суфікс — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль у шведській зазвичай приєднується як суфікс в кінці іменника, а не окремим словом перед ним.",
            "en": {
              "text": "The definite article in Swedish is usually attached as a suffix at the end of the noun, rather than as a separate word before it."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "en bok → boken",
                "книга → ця книга"
              ],
              [
                "ett hus → huset",
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
                "Boken är bra.",
                "Ця книга хороша."
              ]
            ]
          }
        ],
        "titleEn": "The Suffixed Article — A1"
      }
    ]
  }
];
