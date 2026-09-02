// Vymova — data/grammar-data/grammar_ht.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_HT: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Pwonon Pèsonèl — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Гаїтянська креольська має спрощену граматику — дієслово не змінюється за особами чи часом через закінчення, а часові маркери йдуть окремими словами перед дієсловом.",
            "en": {
              "text": "Haitian Creole has simplified grammar — verbs don't change form by person or tense; tense is instead marked by separate words placed before the verb."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "mwen"
              ],
              [
                "ти",
                "ou"
              ],
              [
                "він / вона / воно",
                "li"
              ],
              [
                "ми",
                "nou"
              ],
              [
                "ви",
                "nou"
              ],
              [
                "вони",
                "yo"
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
