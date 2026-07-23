// Vymova — data/grammar-data/grammar_gl.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_GL: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Pronomes persoais — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Галісійська близько споріднена з португальською — обидві мови походять зі спільної середньовічної галісійсько-португальської.",
            "en": {
              "text": "Galician is closely related to Portuguese — both descend from a shared medieval Galician-Portuguese."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "eu"
              ],
              [
                "ти",
                "ti"
              ],
              [
                "він / вона",
                "el / ela"
              ],
              [
                "ми",
                "nós"
              ],
              [
                "ви",
                "vós"
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
