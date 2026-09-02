// Vymova — data/grammar-data/grammar_kk.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_KK: GrammarCategory[] = [
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
            "text": "Казахська не має граматичного роду — ол означає і \"він\", і \"вона\", і \"воно\".",
            "en": {
              "text": "Kazakh has no grammatical gender — ол means \"he\", \"she\", and \"it\" alike."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "мен",
                "я"
              ],
              [
                "сен / сіз",
                "ти / ви (ввічливо)"
              ],
              [
                "ол",
                "він / вона / воно"
              ],
              [
                "біз",
                "ми"
              ],
              [
                "олар",
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
                "Мен мұғаліммін.",
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
            "text": "Як і в інших тюркських мовах, \"бути\" в теперішньому часі виражається особовим суфіксом, приєднаним прямо до присудка.",
            "en": {
              "text": "As in other Turkic languages, \"to be\" in the present is expressed by a personal suffix attached directly to the predicate."
            }
          },
          {
            "type": "formula",
            "title": "Присудок + -мын/-мін/-бын/...",
            "rows": [
              [
                "Мен мұғаліммін.",
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
                "Ол дәрігер.",
                "Він/вона лікар."
              ]
            ]
          }
        ],
        "titleEn": "The Copula Suffix — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"емес\" / -ма- — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Для заперечення іменного присудка вживають емес, а для дієслів — інфікс -ма-/-ме- перед закінченням.",
            "en": {
              "text": "Nominal predicates are negated with емес, while verbs take the infix -ма-/-ме- before the ending."
            }
          },
          {
            "type": "formula",
            "title": "Присудок + емес / дієслово + -ма-",
            "rows": [
              [
                "Мен мұғалім емеспін.",
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
                "Білмеймін.",
                "Я не знаю."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Емес / -Ма- — A1"
      },
      {
        "id": "questions",
        "title": "Питання з частками ма/ме/ба/бе — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні утворюються приєднанням питальної частки ма/ме/ба/бе (за законом гармонії голосних) до ключового слова.",
            "en": {
              "text": "Yes/no questions are formed by attaching the question particle ма/ме/ба/бе (following vowel harmony) to the key word."
            }
          },
          {
            "type": "formula",
            "title": "Слово + ма/ме/ба/бе?",
            "rows": [
              [
                "Сен аш па?",
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
                "Уақытың бар ма?",
                "У тебе є час?"
              ]
            ]
          }
        ],
        "titleEn": "Questions with Ма/Ме/Ба/Бе — A1"
      },
      {
        "id": "word-order",
        "title": "Порядок слів SOV — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-додаток-присудок (SOV), а відмінкові та особові суфікси приєднуються за законом гармонії голосних.",
            "en": {
              "text": "The basic word order is Subject-Object-Predicate (SOV), with case and personal suffixes attaching following vowel harmony."
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
                "Мен кітап оқимын.",
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
