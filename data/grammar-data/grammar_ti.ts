// Vymova — data/grammar-data/grammar_ti.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_TI: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "ናይ ውልቀ ቃላት ኣርእስቲ — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Тигринья, як і амхарська, має окремі форми звертання \"ти\" — одну для чоловіка, іншу для жінки.",
            "en": {
              "text": "Tigrinya, like Amharic, has separate forms of \"you\" — one for addressing a man, another for a woman."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ኣነ (ane)"
              ],
              [
                "ти (до чоловіка / жінки)",
                "ንስኻ / ንስኺ (nsxa / nsxi)"
              ],
              [
                "він / вона",
                "ንሱ / ንሳ (nsu / nsa)"
              ],
              [
                "ми",
                "ንሕና (nḥna)"
              ],
              [
                "ви",
                "ንስኻትኩም (nsxatkum)"
              ],
              [
                "вони",
                "ንሶም (nsom)"
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
