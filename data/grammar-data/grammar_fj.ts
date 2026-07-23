// Vymova — data/grammar-data/grammar_fj.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_FJ: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Na Vosa Vakaviti — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У фіджійській займенники різняться не лише за особою, а й за числом — є окремі форми для двох, кількох і багатьох осіб (тут показано однину й загальну множину).",
            "en": {
              "text": "Fijian pronouns vary not just by person but also by number — there are separate forms for two, a few, and many people (only singular and general plural are shown here)."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "au"
              ],
              [
                "ти",
                "iko"
              ],
              [
                "він / вона / воно",
                "o koya"
              ],
              [
                "ми (без вас)",
                "keimami"
              ],
              [
                "ми (з вами)",
                "eda"
              ],
              [
                "ви",
                "kemuni"
              ],
              [
                "вони",
                "ira"
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
