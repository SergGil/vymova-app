// Vymova — data/grammar-data/grammar_fo.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_FO: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Persónlig Fornøvn — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Фарерська близько споріднена з ісландською — обидві мови походять від давньоскандинавської й досі мають подібну граматику.",
            "en": {
              "text": "Faroese is closely related to Icelandic — both descend from Old Norse and still share similar grammar."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "eg"
              ],
              [
                "ти",
                "tú"
              ],
              [
                "він / вона / воно",
                "hann / hon / tað"
              ],
              [
                "ми",
                "vit"
              ],
              [
                "ви",
                "tit"
              ],
              [
                "вони (ч./ж./с.р.)",
                "teir / tær / tey"
              ]
            ],
            "en": {
              "title": "Personal Pronouns"
            }
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      }
    ]
  }
];
