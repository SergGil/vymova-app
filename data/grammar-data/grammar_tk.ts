// Vymova — data/grammar-data/grammar_tk.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_TK: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Şahs çalyşyklary — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У туркменській, як і в більшості тюркських мов, немає граматичного роду — \"ol\" означає і \"він\", і \"вона\", і \"воно\".",
            "en": {
              "text": "Like most Turkic languages, Turkmen has no grammatical gender — \"ol\" means \"he\", \"she\", and \"it\" alike."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "men"
              ],
              [
                "ти (зв. / ввічл.)",
                "sen / siz"
              ],
              [
                "він / вона / воно",
                "ol"
              ],
              [
                "ми",
                "biz"
              ],
              [
                "ви",
                "siz"
              ],
              [
                "вони",
                "olar"
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
