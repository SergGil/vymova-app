// Vymova — data/grammar-data/grammar_ne.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_NE: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "व्यक्तिवाचक सर्वनाम — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У непальській, як і в гінді, \"तपाईं\" (tapāī) — ввічлива форма звертання, а множину зазвичай утворюють суфіксом \"-हरू\" (-harū).",
            "en": {
              "text": "In Nepali, as in Hindi, \"तपाईं\" (tapāī) is a polite form of address, and the plural is usually formed with the suffix \"-हरू\" (-harū)."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "म (ma)"
              ],
              [
                "ти (зв. / ввічл.)",
                "तिमी / तपाईं (timi / tapāī)"
              ],
              [
                "він / вона",
                "ऊ / उनी (u / uni)"
              ],
              [
                "ми",
                "हामी (hāmī)"
              ],
              [
                "ви",
                "तपाईंहरू (tapāī-harū)"
              ],
              [
                "вони",
                "उनीहरू (uni-harū)"
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
