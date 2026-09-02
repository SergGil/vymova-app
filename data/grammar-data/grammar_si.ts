// Vymova — data/grammar-data/grammar_si.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_SI: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "නාම පද — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У сингальській дієслово не змінюється за особою — воно однакове для \"я\", \"ти\", \"він\" тощо, тому займенник є єдиним способом зрозуміти, хто діє.",
            "en": {
              "text": "In Sinhala, the verb doesn't change by person — it's the same for \"I\", \"you\", \"he\", etc., so the pronoun is the only way to tell who's acting."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "මම (mama)"
              ],
              [
                "ти (зв. / ввічл.)",
                "ඔයා / ඔබ (oyā / oba)"
              ],
              [
                "він / вона",
                "ඔහු / ඇය (ohu / æya)"
              ],
              [
                "ми",
                "අපි (api)"
              ],
              [
                "ви",
                "ඔයාලා (oyālā)"
              ],
              [
                "вони",
                "එයාලා (eyālā)"
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
