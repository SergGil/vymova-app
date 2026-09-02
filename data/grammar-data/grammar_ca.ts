// Vymova — data/grammar-data/grammar_ca.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_CA: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Pronoms personals — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Каталанська — окрема романська мова, близька до окситанської, а не діалект іспанської чи французької.",
            "en": {
              "text": "Catalan is a distinct Romance language, close to Occitan, not a dialect of Spanish or French."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "jo"
              ],
              [
                "ти (зв. / ввічл.)",
                "tu / vostè"
              ],
              [
                "він / вона",
                "ell / ella"
              ],
              [
                "ми",
                "nosaltres"
              ],
              [
                "ви",
                "vosaltres"
              ],
              [
                "вони (ч./ж.)",
                "ells / elles"
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
