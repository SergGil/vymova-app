// Vymova — data/grammar-data/grammar_su.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_SU: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Kecap Ganti Jalma — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У сунданській, як і в яванській, є мовні регістри ввічливості — тут наведено нейтральні розмовні форми.",
            "en": {
              "text": "Sundanese, like Javanese, has politeness registers — the neutral everyday forms are shown here."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "kuring"
              ],
              [
                "ти",
                "anjeun"
              ],
              [
                "він / вона",
                "manéhna"
              ],
              [
                "ми",
                "urang"
              ],
              [
                "ви",
                "aranjeun"
              ],
              [
                "вони",
                "maranéhna"
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
