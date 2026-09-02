// Vymova — data/grammar-data/grammar_am.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_AM: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "የግል ተውላጠ ስም — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "В амхарській займенник \"ти\" має окремі форми залежно від того, звертаєшся ти до чоловіка чи до жінки.",
            "en": {
              "text": "In Amharic, the pronoun \"you\" has separate forms depending on whether you're addressing a man or a woman."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "እኔ (ənē)"
              ],
              [
                "ти (до чоловіка)",
                "አንተ (antä)"
              ],
              [
                "ти (до жінки)",
                "አንቺ (anchi)"
              ],
              [
                "він",
                "እሱ (əssu)"
              ],
              [
                "вона",
                "እሷ (əsswa)"
              ],
              [
                "ми",
                "እኛ (ənya)"
              ],
              [
                "ви",
                "እናንተ (ənantä)"
              ],
              [
                "вони",
                "እነሱ (ənässu)"
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
