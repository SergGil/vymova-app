// Vymova — data/grammar-data/grammar_bho.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_BHO: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "सर्वनाम — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У бходжпурі \"я\" часто позначають словом \"हम\" (ham), яке в гінді означає \"ми\" — одна з відмінностей між спорідненими мовами долини Гангу.",
            "en": {
              "text": "In Bhojpuri, \"I\" is often \"हम\" (ham) — the same word that means \"we\" in Hindi, one of the differences among the related Ganges Valley languages."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "हम (ham)"
              ],
              [
                "ти (зв. / ввічл.)",
                "तू / रउआ (tū / raua)"
              ],
              [
                "він / вона",
                "ऊ (ū)"
              ],
              [
                "ми",
                "हमनी (hamnī)"
              ],
              [
                "ви",
                "रउआ सब (raua sab)"
              ],
              [
                "вони",
                "ऊ लोग (ū log)"
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
