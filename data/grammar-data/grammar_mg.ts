// Vymova — data/grammar-data/grammar_mg.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_MG: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Mpisolo Anarana — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У малагасійській є два слова для \"ми\": \"izahay\" (без співрозмовника) і \"isika\" (разом із співрозмовником).",
            "en": {
              "text": "Malagasy has two words for \"we\": \"izahay\" (excluding the listener) and \"isika\" (including the listener)."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "izaho (aho)"
              ],
              [
                "ти",
                "ianao"
              ],
              [
                "він / вона / воно",
                "izy"
              ],
              [
                "ми (без вас)",
                "izahay"
              ],
              [
                "ми (з вами)",
                "isika"
              ],
              [
                "ви",
                "ianareo"
              ],
              [
                "вони",
                "izy ireo"
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
