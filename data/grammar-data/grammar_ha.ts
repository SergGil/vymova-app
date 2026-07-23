// Vymova — data/grammar-data/grammar_ha.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_HA: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Sunayen Suna — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У хауса займенник \"ти\" має окремі форми залежно від статі співрозмовника: \"kai\" (до чоловіка) і \"ke\" (до жінки).",
            "en": {
              "text": "In Hausa, the pronoun \"you\" has separate forms depending on the listener's gender: \"kai\" (to a man) and \"ke\" (to a woman)."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ni"
              ],
              [
                "ти (до чоловіка / жінки)",
                "kai / ke"
              ],
              [
                "він / вона",
                "shi / ita"
              ],
              [
                "ми",
                "mu"
              ],
              [
                "ви",
                "ku"
              ],
              [
                "вони",
                "su"
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
