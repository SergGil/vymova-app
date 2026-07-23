// Vymova — data/grammar-data/grammar_sn.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_SN: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Mazita Emunhu — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У шона немає граматичного роду — займенник \"iye\" однаково означає і \"він\", і \"вона\".",
            "en": {
              "text": "Shona has no grammatical gender — the pronoun \"iye\" means both \"he\" and \"she\"."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ini"
              ],
              [
                "ти",
                "iwe"
              ],
              [
                "він / вона",
                "iye"
              ],
              [
                "ми",
                "isu"
              ],
              [
                "ви",
                "imi"
              ],
              [
                "вони",
                "ivo"
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
