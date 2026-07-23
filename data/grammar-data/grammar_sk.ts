// Vymova — data/grammar-data/grammar_sk.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_SK: GrammarCategory[] = [
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
            "text": "Словацькі дієслова показують особу закінченням, тому займенник у звичайній розмові часто опускають — як і в українській.",
            "en": {
              "text": "Slovak verbs mark person through their ending, so the pronoun is often dropped in normal speech — much like in Ukrainian."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "ja",
                "я"
              ],
              [
                "ty",
                "ти"
              ],
              [
                "on / ona / ono",
                "він / вона / воно"
              ],
              [
                "my",
                "ми"
              ],
              [
                "oni / ony",
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
                "Ja som učiteľ.",
                "Я вчитель."
              ]
            ]
          }
        ]
      },
      {
        "id": "to-be",
        "title": "Дієслово \"byť\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "\"Byť\" відмінюється неправильно, дуже схоже на чеське \"být\" і українське \"бути\" за формою вживання.",
            "en": {
              "text": "\"Byť\" conjugates irregularly, very similarly to Czech \"být\" and Ukrainian \"бути\" in how it is used."
            }
          },
          {
            "type": "formula",
            "title": "som / si / je / sme / ste / sú",
            "rows": [
              [
                "Ja som učiteľ.",
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
                "Ona je lekárka.",
                "Вона лікарка."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation",
        "title": "Заперечення префіксом \"ne-\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення в словацькій приєднується прямо до дієслова як префікс ne-, а не окремим словом перед ним.",
            "en": {
              "text": "Negation in Slovak attaches directly to the verb as the prefix ne-, rather than as a separate word before it."
            }
          },
          {
            "type": "formula",
            "title": "ne- + дієслово",
            "rows": [
              [
                "Neviem.",
                "(Я не знаю, ne+viem.)"
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
                "On neprišiel.",
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
            "text": "Питання так/ні найчастіше утворюються висхідною інтонацією або порядком слів дієслово-підмет.",
            "en": {
              "text": "Yes/no questions are most often formed with rising intonation, or with verb-subject word order."
            }
          },
          {
            "type": "formula",
            "title": "Дієслово + підмет + ...?",
            "rows": [
              [
                "Si unavený?",
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
                "Máš čas?",
                "У тебе є час?"
              ]
            ]
          }
        ]
      },
      {
        "id": "cases",
        "title": "Шість відмінків — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Словацькі іменники, як і українські, змінюються за відмінками (шість) — закінчення показують роль слова в реченні без прийменника.",
            "en": {
              "text": "Slovak nouns, like Ukrainian ones, decline through cases (six) — the ending shows a word's role in the sentence without needing a preposition."
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
                "Vidím psa.",
                "Я бачу собаку (знахідний відмінок від \"pes\")."
              ]
            ]
          }
        ]
      }
    ]
  }
];
