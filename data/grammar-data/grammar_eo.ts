// Vymova — data/grammar-data/grammar_eo.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_EO: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Personaj pronomoj — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Есперанто має цілком регулярну систему без винятків: \"vi\" однаково означає і \"ти\", і \"ви\" — окремої форми множини не потрібно.",
            "en": {
              "text": "Esperanto has a fully regular system with no exceptions: \"vi\" means both \"you\" (singular) and \"you\" (plural) — no separate plural form is needed."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "mi"
              ],
              [
                "ти / ви",
                "vi"
              ],
              [
                "він / вона / воно",
                "li / ŝi / ĝi"
              ],
              [
                "ми",
                "ni"
              ],
              [
                "вони",
                "ili"
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
