// Vymova — data/grammar-data/grammar_bn.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_BN: GrammarCategory[] = [
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
            "text": "Бенгальська має три ступені ввічливості для \"ти/ви\": তুই (фамільярно), তুমি (нейтрально), আপনি (ввічливо).",
            "en": {
              "text": "Bengali has three politeness levels for \"you\": তুই (intimate), তুমি (neutral), আপনি (polite)."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "আমি (ami)",
                "я"
              ],
              [
                "তুমি / আপনি",
                "ти / ви (ввічливо)"
              ],
              [
                "সে (se)",
                "він / вона"
              ],
              [
                "আমরা (amra)",
                "ми"
              ],
              [
                "তারা (tara)",
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
                "আমি ভালো আছি।",
                "Я почуваюся добре."
              ],
              [
                "আপনি কেমন আছেন?",
                "Як ви поживаєте? (ввічливо)"
              ]
            ]
          }
        ]
      },
      {
        "id": "zero-copula",
        "title": "Нульова зв'язка — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "У теперішньому часі для опису тотожності (\"я — студент\") бенгальська часто обходиться без дієслова-зв'язки взагалі — присудок-іменник ставиться просто після підмета.",
            "en": {
              "text": "For present-tense identity statements (\"I am a student\"), Bengali often drops the linking verb entirely — the noun predicate just follows the subject."
            }
          },
          {
            "type": "formula",
            "title": "Підмет + іменник(-присудок)",
            "rows": [
              [
                "আমি ছাত্র।",
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
                "সে ডাক্তার।",
                "Він/вона лікар."
              ],
              [
                "আমি এখানে আছি।",
                "Я тут (для місця вживається আছি)."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation",
        "title": "Заперечення \"না\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від багатьох мов, заперечна частка না (na) в бенгальській ставиться ПІСЛЯ дієслова, а не перед ним.",
            "en": {
              "text": "Unlike many languages, the negative particle না (na) in Bengali comes AFTER the verb, not before it."
            }
          },
          {
            "type": "formula",
            "title": "Підмет + дієслово + না",
            "rows": [
              [
                "আমি জানি না।",
                "(Я не знаю, букв. \"знаю не\".)"
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
                "আমি জানি না।",
                "Я не знаю."
              ],
              [
                "সে আসেনি।",
                "Він/вона не прийшов(-ла)."
              ]
            ]
          }
        ]
      },
      {
        "id": "questions",
        "title": "Питання з \"কি\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні утворюються часткою কি (ki), яка зазвичай ставиться одразу після підмета, без зміни іншого порядку слів.",
            "en": {
              "text": "Yes/no questions use the particle কি (ki), usually placed right after the subject, without changing the rest of the word order."
            }
          },
          {
            "type": "formula",
            "title": "Підмет + কি + решта речення?",
            "rows": [
              [
                "তুমি কি আসবে?",
                "(Ти прийдеш?)"
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
                "আপনি কি ব্যস্ত?",
                "Ви зайняті?"
              ],
              [
                "তুমি কি ক্ষুধার্ত?",
                "Ти голодний?"
              ]
            ]
          }
        ]
      },
      {
        "id": "plurals",
        "title": "Множина — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина для людей утворюється суфіксом -রা, а для предметів — -গুলো/-গুলি, що приєднуються до іменника.",
            "en": {
              "text": "The plural for people uses the suffix -রা, while for objects it is -গুলো/-গুলি, attached to the noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади суфіксів",
            "rows": [
              [
                "ছেলে → ছেলেরা",
                "хлопчик → хлопчики"
              ],
              [
                "বই → বইগুলো",
                "книга → книги"
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
                "ছেলেরা খেলছে।",
                "Хлопчики граються."
              ]
            ]
          }
        ]
      }
    ]
  }
];
