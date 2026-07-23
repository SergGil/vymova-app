// Vymova — data/grammar-data/grammar_fa.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_FA: GrammarCategory[] = [
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
            "text": "Перська не має граматичного роду — займенник او (u) означає і \"він\", і \"вона\".",
            "en": {
              "text": "Persian has no grammatical gender — the pronoun او (u) means both \"he\" and \"she\"."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "من (man)",
                "я"
              ],
              [
                "تو (to)",
                "ти"
              ],
              [
                "او (u)",
                "він / вона"
              ],
              [
                "ما (mâ)",
                "ми"
              ],
              [
                "آنها (ânhâ)",
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
                "من دانشجو هستم.",
                "Я студент."
              ]
            ]
          }
        ]
      },
      {
        "id": "to-be",
        "title": "Дієслово \"بودن\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово \"بودن\" (бути) в теперішньому часі приєднується як суфікс до присудка: هستم (я є), هستی (ти є) тощо.",
            "en": {
              "text": "The verb \"بودن\" (to be) attaches as a suffix to the predicate in the present tense: هستم (I am), هستی (you are), etc."
            }
          },
          {
            "type": "formula",
            "title": "Присудок + هستم/هستی/است",
            "rows": [
              [
                "من دانشجو هستم.",
                "(Я студент.)"
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
                "او پزشک است.",
                "Він/вона лікар."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation",
        "title": "Заперечення \"نـ\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється префіксом نـ (na-/ne-), який приєднується безпосередньо до дієслова.",
            "en": {
              "text": "Negation is formed with the prefix نـ (na-/ne-), attached directly to the verb."
            }
          },
          {
            "type": "formula",
            "title": "نـ + дієслово",
            "rows": [
              [
                "نمی‌دانم.",
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
                "او نیامد.",
                "Він/вона не прийшов(-ла)."
              ]
            ]
          }
        ]
      },
      {
        "id": "questions",
        "title": "Питання \"آیا\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Формальні питання так/ні починаються з частки آیا; в розмовній мові її часто пропускають, лишаючи саму інтонацію.",
            "en": {
              "text": "Formal yes/no questions start with the particle آیا; in casual speech it is often dropped, leaving just the rising intonation."
            }
          },
          {
            "type": "formula",
            "title": "آیا + твердження؟",
            "rows": [
              [
                "آیا تو گرسنه‌ای؟",
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
                "خسته‌ای؟",
                "Ти втомлений? (без آیا)"
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order",
        "title": "Порядок слів SOV — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів у перській — підмет-додаток-дієслово (SOV): дієслово завжди стоїть в кінці речення.",
            "en": {
              "text": "Persian's basic word order is Subject-Object-Verb (SOV): the verb always comes at the end of the sentence."
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
                "من کتاب می‌خوانم.",
                "Я читаю книгу (букв. \"я книгу читаю\")."
              ]
            ]
          }
        ]
      }
    ]
  }
];
