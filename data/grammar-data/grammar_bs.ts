// Vymova — data/grammar-data/grammar_bs.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_BS: GrammarCategory[] = [
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
            "text": "Боснійські дієслова показують особу закінченням, тому займенник у звичайній розмові часто опускають — як і в українській.",
            "en": {
              "text": "Bosnian verbs mark person through their ending, so the pronoun is often dropped in normal speech — much like in Ukrainian."
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
                "ti",
                "ти"
              ],
              [
                "on / ona / ono",
                "він / вона / воно"
              ],
              [
                "mi",
                "ми"
              ],
              [
                "oni / one",
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
                "Ja sam učitelj.",
                "Я вчитель."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be",
        "title": "Дієслово \"biti\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "\"Biti\" відмінюється схоже на українське \"бути\" й активно використовується і як зв'язка, і в складених минулих часах.",
            "en": {
              "text": "\"Biti\" conjugates similarly to Ukrainian \"бути\" and is actively used both as a copula and in compound past tenses."
            }
          },
          {
            "type": "formula",
            "title": "sam / si / je / smo / ste / su",
            "rows": [
              [
                "Ja sam učitelj.",
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
                "Ona je liječnica.",
                "Вона лікарка."
              ]
            ]
          }
        ],
        "titleEn": "The Verb Biti (To Be) — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"ne\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечна частка ne ставиться безпосередньо перед дієсловом.",
            "en": {
              "text": "The negative particle ne goes directly before the verb."
            }
          },
          {
            "type": "formula",
            "title": "ne + дієслово",
            "rows": [
              [
                "Ne znam.",
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
                "On nije došao.",
                "Він не прийшов."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Ne — A1"
      },
      {
        "id": "questions",
        "title": "Питання з \"li\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні часто утворюються часткою li одразу після дієслова.",
            "en": {
              "text": "Yes/no questions are often formed with the particle li right after the verb."
            }
          },
          {
            "type": "formula",
            "title": "Дієслово + li + решта речення?",
            "rows": [
              [
                "Jesi li umoran?",
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
                "Imaš li vremena?",
                "У тебе є час?"
              ]
            ]
          }
        ],
        "titleEn": "Questions with Li — A1"
      },
      {
        "id": "cases",
        "title": "Сім відмінків — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Боснійські іменники, як і українські, змінюються за сімома відмінками — закінчення показують роль слова в реченні.",
            "en": {
              "text": "Bosnian nouns, like Ukrainian ones, decline through seven cases — the ending shows a word's role in the sentence."
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
                "Vidim psa.",
                "Я бачу собаку (знахідний відмінок від \"pas\")."
              ]
            ]
          }
        ],
        "titleEn": "The Seven Cases — A1"
      }
    ]
  }
];
