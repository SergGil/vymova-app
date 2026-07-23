// Vymova — data/grammar-data/grammar_ceb.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_CEB: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Personal Pronoun — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Себуанська, як і тагальська, розрізняє \"ми без вас\" (kami) і \"ми з вами\" (kita).",
            "en": {
              "text": "Cebuano, like Tagalog, distinguishes \"we without you\" (kami) from \"we with you\" (kita)."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ako"
              ],
              [
                "ти",
                "ikaw"
              ],
              [
                "він / вона",
                "siya"
              ],
              [
                "ми (без вас)",
                "kami"
              ],
              [
                "ми (з вами)",
                "kita"
              ],
              [
                "ви",
                "kamo"
              ],
              [
                "вони",
                "sila"
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
