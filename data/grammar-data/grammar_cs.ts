// Vymova — data/grammar-data/grammar_cs.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_CS: GrammarCategory[] = [
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
            "text": "Чеські дієслова показують особу закінченням, тому займенник у звичайній розмові часто опускають — як і в українській.",
            "en": {
              "text": "Czech verbs mark person through their ending, so the pronoun is often dropped in normal speech — much like in Ukrainian."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "já",
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
                "Já jsem učitel.",
                "Я вчитель."
              ]
            ]
          }
        ]
      },
      {
        "id": "to-be",
        "title": "Дієслово \"být\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "\"Být\" відмінюється неправильно, але дуже схоже на українське \"бути\" за формою вживання.",
            "en": {
              "text": "\"Být\" conjugates irregularly, but is used very similarly to Ukrainian \"бути\"."
            }
          },
          {
            "type": "formula",
            "title": "jsem / jsi / je / jsme / jste / jsou",
            "rows": [
              [
                "Já jsem učitel.",
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
                "Ona je lékařka.",
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
            "text": "На відміну від окремого слова, заперечення в чеській приєднується прямо до дієслова як префікс ne-.",
            "en": {
              "text": "Unlike a separate word, negation in Czech attaches directly to the verb as the prefix ne-."
            }
          },
          {
            "type": "formula",
            "title": "ne- + дієслово",
            "rows": [
              [
                "Nevím.",
                "(Я не знаю, ne+vím.)"
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
                "On nepřišel.",
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
                "Jsi unavený?",
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
        "title": "Сім відмінків — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Чеські іменники, як і українські, змінюються за сімома відмінками — закінчення показують роль слова в реченні без прийменника.",
            "en": {
              "text": "Czech nouns, like Ukrainian ones, decline through seven cases — the ending shows a word's role in the sentence without needing a preposition."
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
