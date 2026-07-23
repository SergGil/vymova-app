// Vymova — data/grammar-data/grammar_nah.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_NAH: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Tētlahtōltiliztli — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Науатль була державною мовою ацтецької імперії; наведені тут повні форми займенників у розмовній мові часто скорочують.",
            "en": {
              "text": "Nahuatl was the state language of the Aztec Empire; the full pronoun forms shown here are often shortened in everyday speech."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "nehuātl"
              ],
              [
                "ти",
                "tehuātl"
              ],
              [
                "він / вона / воно",
                "yehuātl"
              ],
              [
                "ми",
                "tehuāntin"
              ],
              [
                "ви",
                "amehuāntin"
              ],
              [
                "вони",
                "yehuāntin"
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
