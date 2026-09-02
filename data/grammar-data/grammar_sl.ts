// Vymova — data/grammar-data/grammar_sl.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_SL: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Osebni zaimki — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Крім однини й множини, словенська зберегла ще й двоїну — окрему форму для рівно двох осіб (напр. \"midva\" — \"ми двоє\").",
            "en": {
              "text": "Besides singular and plural, Slovenian also kept the dual number — a separate form for exactly two people (e.g. \"midva\" — \"we two\")."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники (однина/множина)",
            "rows": [
              [
                "я",
                "jaz"
              ],
              [
                "ти",
                "ti"
              ],
              [
                "він / вона / воно",
                "on / ona / ono"
              ],
              [
                "ми",
                "mi"
              ],
              [
                "ви",
                "vi"
              ],
              [
                "вони (ч./ж./с.р.)",
                "oni / one / ona"
              ]
            ],
            "en": {
              "title": "Personal Pronouns (singular/plural)"
            }
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      }
    ]
  }
];
