// Vymova — data/grammar-data/grammar_fi.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_FI: GrammarCategory[] = [
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
            "text": "Фінська не має граматичного роду — hän означає і \"він\", і \"вона\".",
            "en": {
              "text": "Finnish has no grammatical gender — hän means both \"he\" and \"she\"."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "minä",
                "я"
              ],
              [
                "sinä",
                "ти"
              ],
              [
                "hän",
                "він / вона"
              ],
              [
                "me",
                "ми"
              ],
              [
                "he",
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
                "Minä olen opettaja.",
                "Я вчитель."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be",
        "title": "Дієслово \"olla\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "\"Olla\" відмінюється регулярно за особами, як і українське \"бути\" в минулому часі.",
            "en": {
              "text": "\"Olla\" conjugates regularly for each person, similar to how Ukrainian \"бути\" behaves in the past tense."
            }
          },
          {
            "type": "formula",
            "title": "olen / olet / on / olemme / olette / ovat",
            "rows": [
              [
                "Minä olen opettaja.",
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
                "Hän on lääkäri.",
                "Він/вона лікар."
              ]
            ]
          }
        ],
        "titleEn": "The Verb Olla (To Be) — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення дієсловом \"ei\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від простої частки, заперечення у фінській — це окреме дієслово ei, яке саме відмінюється за особами, а основне дієслово стоїть у незмінній основі.",
            "en": {
              "text": "Unlike a simple particle, negation in Finnish is a separate verb ei that itself conjugates for person, while the main verb stays in an unchanging stem form."
            }
          },
          {
            "type": "formula",
            "title": "en/et/ei/emme/ette/eivät + основа дієслова",
            "rows": [
              [
                "En tiedä.",
                "(Я не знаю, en + tiedä.)"
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
                "Hän ei tullut.",
                "Він/вона не прийшов(-ла)."
              ]
            ]
          }
        ],
        "titleEn": "Negation with the Verb Ei — A1"
      },
      {
        "id": "questions",
        "title": "Питання з суфіксом \"-ko/-kö\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні утворюються приєднанням суфікса -ko/-kö (за законом гармонії голосних) до першого слова речення.",
            "en": {
              "text": "Yes/no questions are formed by attaching the suffix -ko/-kö (following vowel harmony) to the first word of the sentence."
            }
          },
          {
            "type": "formula",
            "title": "Слово+ko/kö + решта речення?",
            "rows": [
              [
                "Oletko väsynyt?",
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
                "Onko sinulla aikaa?",
                "У тебе є час?"
              ]
            ]
          }
        ],
        "titleEn": "Questions with -Ko/-Kö — A1"
      },
      {
        "id": "cases",
        "title": "П'ятнадцять відмінків — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Замість прийменників фінська використовує аж 15 відмінків-закінчень, які приєднуються прямо до слова.",
            "en": {
              "text": "Instead of prepositions, Finnish uses as many as 15 case endings attached directly to the word."
            }
          },
          {
            "type": "table",
            "title": "Приклад: \"у/в\" (inessive -ssa/-ssä)",
            "rows": [
              [
                "talo → talossa",
                "дім → у домі"
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
                "Kirja on pöydällä.",
                "Книга на столі (-llä = \"на\")."
              ]
            ]
          }
        ],
        "titleEn": "The Fifteen Cases — A1"
      }
    ]
  }
];
