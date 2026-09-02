// Vymova — data/grammar-data/grammar_az.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_AZ: GrammarCategory[] = [
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
            "text": "Азербайджанська не розрізняє граматичного роду — о означає і \"він\", і \"вона\", і \"воно\".",
            "en": {
              "text": "Azerbaijani has no grammatical gender — o means \"he\", \"she\", and \"it\" alike."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "mən",
                "я"
              ],
              [
                "sən",
                "ти"
              ],
              [
                "o",
                "він / вона / воно"
              ],
              [
                "biz",
                "ми"
              ],
              [
                "onlar",
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
                "Mən müəlliməm.",
                "Я вчитель."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be",
        "title": "Зв'язка-суфікс — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Замість окремого дієслова \"бути\" азербайджанська приєднує особовий суфікс прямо до присудка.",
            "en": {
              "text": "Instead of a separate \"to be\" verb, Azerbaijani attaches a personal suffix directly to the predicate."
            }
          },
          {
            "type": "formula",
            "title": "Присудок + -(y)Am/-San/...",
            "rows": [
              [
                "Mən müəlliməm.",
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
                "Sən yorğunsan.",
                "Ти втомлений."
              ]
            ]
          }
        ],
        "titleEn": "The Copula Suffix — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"deyil\" / -mA- — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Для заперечення іменного присудка вживають deyil, а для дієслів — інфікс -mA-/-mə- перед особовим закінченням.",
            "en": {
              "text": "Nominal predicates are negated with deyil, while verbs take the infix -mA-/-mə- before the personal ending."
            }
          },
          {
            "type": "formula",
            "title": "Присудок + deyil / дієслово + -mA-",
            "rows": [
              [
                "Mən müəllim deyiləm.",
                "(Я не вчитель.)"
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
                "Bilmirəm.",
                "Я не знаю."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Deyil / -Ma- — A1"
      },
      {
        "id": "questions",
        "title": "Питання з частками -mı/-mi — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні утворюються приєднанням питальної частки -mı/-mi/-mu/-mü (за законом гармонії голосних) до ключового слова.",
            "en": {
              "text": "Yes/no questions are formed by attaching the question particle -mı/-mi/-mu/-mü (following vowel harmony) to the key word."
            }
          },
          {
            "type": "formula",
            "title": "Слово + -mI (гармонія голосних)?",
            "rows": [
              [
                "Sən acsanmı?",
                "(Ти голодний?)"
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
                "Bu doğrudurmu?",
                "Це правда?"
              ]
            ]
          }
        ],
        "titleEn": "Questions with -Mı/-Mi — A1"
      },
      {
        "id": "word-order",
        "title": "Порядок слів SOV — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-додаток-присудок (SOV), а суфікси приєднуються за законом гармонії голосних.",
            "en": {
              "text": "The basic word order is Subject-Object-Predicate (SOV), and suffixes attach following vowel harmony."
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
                "Mən kitab oxuyuram.",
                "Я читаю книгу (букв. \"я книгу читаю\")."
              ]
            ]
          }
        ],
        "titleEn": "SOV Word Order — A1"
      }
    ]
  }
];
