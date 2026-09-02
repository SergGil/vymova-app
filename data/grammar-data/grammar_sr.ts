// Vymova — data/grammar-data/grammar_sr.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_SR: GrammarCategory[] = [
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
            "text": "Сербські дієслова показують особу закінченням, тому займенник у звичайній розмові часто опускають — як і в українській.",
            "en": {
              "text": "Serbian verbs mark person through their ending, so the pronoun is often dropped in normal speech — much like in Ukrainian."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "ја",
                "я"
              ],
              [
                "ти",
                "ти"
              ],
              [
                "он / она / оно",
                "він / вона / воно"
              ],
              [
                "ми",
                "ми"
              ],
              [
                "они / оне",
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
                "Ја сам учитељ.",
                "Я вчитель."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be",
        "title": "Дієслово \"бити\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "\"Бити\" відмінюється схоже на українське \"бути\" й активно використовується і як зв'язка, і в складених минулих часах.",
            "en": {
              "text": "\"Бити\" conjugates similarly to Ukrainian \"бути\" and is actively used both as a copula and in compound past tenses."
            }
          },
          {
            "type": "formula",
            "title": "сам / си / је / смо / сте / су",
            "rows": [
              [
                "Ја сам учитељ.",
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
                "Она је лекарка.",
                "Вона лікарка."
              ]
            ]
          }
        ],
        "titleEn": "The Verb Бити (To Be) — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"не\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечна частка не ставиться безпосередньо перед дієсловом.",
            "en": {
              "text": "The negative particle не goes directly before the verb."
            }
          },
          {
            "type": "formula",
            "title": "не + дієслово",
            "rows": [
              [
                "Не знам.",
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
                "Он није дошао.",
                "Він не прийшов."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Не — A1"
      },
      {
        "id": "questions",
        "title": "Питання з \"ли\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні часто утворюються часткою ли одразу після дієслова (або конструкцією \"да ли\" на початку речення).",
            "en": {
              "text": "Yes/no questions are often formed with the particle ли right after the verb (or the \"да ли\" construction at the start of the sentence)."
            }
          },
          {
            "type": "formula",
            "title": "Да ли + твердження?",
            "rows": [
              [
                "Да ли си уморан?",
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
                "Имаш ли времена?",
                "У тебе є час?"
              ]
            ]
          }
        ],
        "titleEn": "Questions with Ли — A1"
      },
      {
        "id": "cases",
        "title": "Сім відмінків — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Сербські іменники, як і українські, змінюються за сімома відмінками — закінчення показують роль слова в реченні.",
            "en": {
              "text": "Serbian nouns, like Ukrainian ones, decline through seven cases — the ending shows a word's role in the sentence."
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
                "Видим пса.",
                "Я бачу собаку (знахідний відмінок від \"пас\")."
              ]
            ]
          }
        ],
        "titleEn": "The Seven Cases — A1"
      }
    ]
  }
];
