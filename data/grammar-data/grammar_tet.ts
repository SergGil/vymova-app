// Vymova — data/grammar-data/grammar_tet.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_TET: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Pronomi Pesoál — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У тетум, як і в кечуа чи ґуарані, розрізняють \"ми з вами\" (ita) і \"ми без вас\" (ami).",
            "en": {
              "text": "Tetum, like Quechua or Guarani, distinguishes \"we including you\" (ita) from \"we excluding you\" (ami)."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ha'u"
              ],
              [
                "ти",
                "o"
              ],
              [
                "він / вона / воно",
                "nia"
              ],
              [
                "ми (з вами)",
                "ita"
              ],
              [
                "ми (без вас)",
                "ami"
              ],
              [
                "ви",
                "imi"
              ],
              [
                "вони",
                "sira"
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
