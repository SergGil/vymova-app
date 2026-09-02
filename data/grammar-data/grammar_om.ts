// Vymova — data/grammar-data/grammar_om.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_OM: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Maqaa Bakalchaa — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Оромо — мова найчисельнішого етносу Ефіопії, записується латинською абеткою кваалі з 1991 року.",
            "en": {
              "text": "Oromo, the language of Ethiopia's largest ethnic group, has been written in the Latin-based Qubee alphabet since 1991."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ani"
              ],
              [
                "ти",
                "ati"
              ],
              [
                "він / вона",
                "inni / isheen"
              ],
              [
                "ми",
                "nu"
              ],
              [
                "ви",
                "isin"
              ],
              [
                "вони",
                "isaan"
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
