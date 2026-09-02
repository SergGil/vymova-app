// Vymova — data/grammar-data/grammar_to.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_TO: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Ngaahi Poloniva Fakafoʻituitui — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У тонганській є окремі форми числа для двох осіб (двоїна) і трьох та більше (множина) — тут наведено форми множини.",
            "en": {
              "text": "Tongan has separate forms for two people (dual) and three or more (plural) — the plural forms are shown here."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ou"
              ],
              [
                "ти",
                "koe"
              ],
              [
                "він / вона / воно",
                "ia"
              ],
              [
                "ми (без вас)",
                "kimautolu"
              ],
              [
                "ми (з вами)",
                "kitautolu"
              ],
              [
                "ви",
                "kimoutolu"
              ],
              [
                "вони",
                "kinautolu"
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
