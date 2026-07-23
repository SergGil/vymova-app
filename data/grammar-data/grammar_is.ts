// Vymova — data/grammar-data/grammar_is.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_IS: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Persónufornöfn — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Ісландська зберегла давньоскандинавську систему займенників практично незмінною — вона виглядає майже так само, як тисячу років тому.",
            "en": {
              "text": "Icelandic has preserved the Old Norse pronoun system almost unchanged — it looks nearly the same as it did a thousand years ago."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ég"
              ],
              [
                "ти",
                "þú"
              ],
              [
                "він / вона / воно",
                "hann / hún / það"
              ],
              [
                "ми",
                "við"
              ],
              [
                "ви",
                "þið"
              ],
              [
                "вони (ч./ж./с.р.)",
                "þeir / þær / þau"
              ]
            ],
            "en": {
              "title": "Personal Pronouns"
            }
          }
        ]
      }
    ]
  }
];
