// Vymova — data/grammar-data/grammar_oc.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_OC: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Pronoms Personals — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Окситанська — мова середньовічних трубадурів, найближче споріднена з каталанською.",
            "en": {
              "text": "Occitan is the language of the medieval troubadours, most closely related to Catalan."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ieu"
              ],
              [
                "ти (зв. / ввічл.)",
                "tu / vos"
              ],
              [
                "він / вона",
                "el / ela"
              ],
              [
                "ми",
                "nosautres"
              ],
              [
                "ви",
                "vosautres"
              ],
              [
                "вони (ч./ж.)",
                "eles / elas"
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
