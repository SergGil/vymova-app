// Vymova — data/grammar-data/grammar_ga.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_GA: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Forainmneacha Pearsanta — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "В ірландській дієслово зазвичай стоїть на першому місці в реченні (порядок VSO), перед займенником-підметом.",
            "en": {
              "text": "In Irish, the verb usually comes first in the sentence (VSO word order), before the pronoun subject."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "mé"
              ],
              [
                "ти",
                "tú"
              ],
              [
                "він",
                "sé"
              ],
              [
                "вона",
                "sí"
              ],
              [
                "ми",
                "muid"
              ],
              [
                "ви",
                "sibh"
              ],
              [
                "вони",
                "siad"
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
