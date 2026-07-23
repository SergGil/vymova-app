// Vymova — data/grammar-data/grammar_ka.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_KA: GrammarCategory[] = [
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
            "text": "Грузинська не має граматичного роду — ის означає і \"він\", і \"вона\", і \"воно\".",
            "en": {
              "text": "Georgian has no grammatical gender — ის means \"he\", \"she\", and \"it\" alike."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "მე (me)",
                "я"
              ],
              [
                "შენ (shen)",
                "ти"
              ],
              [
                "ის (is)",
                "він / вона / воно"
              ],
              [
                "ჩვენ (chven)",
                "ми"
              ],
              [
                "ისინი (isini)",
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
                "მე მასწავლებელი ვარ.",
                "Я вчитель."
              ]
            ]
          }
        ]
      },
      {
        "id": "to-be",
        "title": "Зв'язка \"ვარ/ხარ/არის\" — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово-зв'язка ставиться в кінці речення, після присудка, а не одразу після підмета.",
            "en": {
              "text": "The linking verb goes at the end of the sentence, after the predicate, rather than right after the subject."
            }
          },
          {
            "type": "formula",
            "title": "Присудок + ვარ/ხარ/არის",
            "rows": [
              [
                "მე მასწავლებელი ვარ.",
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
                "ის ექიმია.",
                "Він/вона лікар (скорочена форма -ია замість არის)."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation",
        "title": "Заперечення \"არ\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечна частка არ ставиться перед дієсловом.",
            "en": {
              "text": "The negative particle არ goes before the verb."
            }
          },
          {
            "type": "formula",
            "title": "არ + дієслово",
            "rows": [
              [
                "არ ვიცი.",
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
                "ის არ მოვიდა.",
                "Він/вона не прийшов(-ла)."
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
            "text": "Питання так/ні найчастіше утворюються висхідною інтонацією, без зміни порядку слів чи додаткової частки.",
            "en": {
              "text": "Yes/no questions are most often formed with rising intonation, without changing word order or adding a particle."
            }
          },
          {
            "type": "formula",
            "title": "Твердження + висхідна інтонація?",
            "rows": [
              [
                "შენ დაღლილი ხარ?",
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
                "დრო გაქვს?",
                "У тебе є час?"
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-agreement",
        "title": "Узгодження дієслова з двома учасниками — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Грузинське дієслово може одночасно узгоджуватися і з підметом, і з додатком через префікси/суфікси — це рідкісна риса, яку називають поліперсоналізмом.",
            "en": {
              "text": "A Georgian verb can agree with both the subject and the object at once through prefixes/suffixes — a rare feature called polypersonalism."
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
                "გნახე.",
                "Я тебе бачив (одне дієслово-форма кодує і \"я\", і \"тебе\")."
              ]
            ]
          }
        ]
      }
    ]
  }
];
