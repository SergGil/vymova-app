// Vymova — data/grammar-data/grammar_af.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_AF: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Persoonlike Voornaamwoorde — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Африкаанс має спрощену граматику порівняно з нідерландською — дієслово майже не змінюється за особами, тому займенник завжди чітко вказує, хто діє.",
            "en": {
              "text": "Afrikaans has simplified grammar compared to Dutch — the verb barely changes by person, so the pronoun always makes clear who's acting."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ek"
              ],
              [
                "ти (зв. / ввічл.)",
                "jy / u"
              ],
              [
                "він / вона / воно",
                "hy / sy / dit"
              ],
              [
                "ми",
                "ons"
              ],
              [
                "ви",
                "julle"
              ],
              [
                "вони",
                "hulle"
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
