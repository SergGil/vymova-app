// Vymova — data/grammar-data/grammar_la.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_LA: GrammarCategory[] = [
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
            "text": "У латині особові займенники в називному відмінку часто опускаються, бо форма дієслова вже вказує на особу — ego/tu тощо додають лише для наголосу.",
            "en": {
              "text": "Latin personal pronouns in the nominative are often dropped, since the verb ending already marks the person — ego/tu etc. are added only for emphasis."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "ego",
                "я"
              ],
              [
                "tu",
                "ти"
              ],
              [
                "is / ea / id",
                "він / вона / воно"
              ],
              [
                "nos",
                "ми"
              ],
              [
                "vos",
                "ви"
              ],
              [
                "ii / eae / ea",
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
                "Ego magister sum.",
                "Я вчитель."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be",
        "title": "Дієслово \"esse\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово \"esse\" (бути) — одне з небагатьох неправильних дієслів латини і відмінюється за особою та числом.",
            "en": {
              "text": "The verb \"esse\" (to be) is one of the few irregular Latin verbs and is conjugated by person and number."
            }
          },
          {
            "type": "table",
            "title": "Теперішній час",
            "rows": [
              [
                "sum",
                "(я) є"
              ],
              [
                "es",
                "(ти) є"
              ],
              [
                "est",
                "(він/вона/воно) є"
              ],
              [
                "sumus",
                "(ми) є"
              ],
              [
                "estis",
                "(ви) є"
              ],
              [
                "sunt",
                "(вони) є"
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
                "Puella laeta est.",
                "Дівчинка щаслива."
              ]
            ]
          }
        ],
        "titleEn": "The Verb Esse (To Be) — A1"
      }
    ]
  }
];
