// Vymova — data/grammar-data/grammar_ml.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_ML: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "സർവ്വനാമങ്ങൾ — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У малаялам, як і в тамільській, ввічлива форма \"നിങ്ങൾ\" (ningaḷ) служить і поважним звертанням, і звичайною множиною.",
            "en": {
              "text": "In Malayalam, as in Tamil, the polite form \"നിങ്ങൾ\" (ningaḷ) serves both as a respectful address and as the ordinary plural."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ഞാൻ (njān)"
              ],
              [
                "ти (зв. / ввічл.)",
                "നീ / നിങ്ങൾ (nī / ningaḷ)"
              ],
              [
                "він / вона",
                "അവൻ / അവൾ (avan / avaḷ)"
              ],
              [
                "ми",
                "ഞങ്ങൾ (njangaḷ)"
              ],
              [
                "ви",
                "നിങ്ങൾ (ningaḷ)"
              ],
              [
                "вони",
                "അവർ (avar)"
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
