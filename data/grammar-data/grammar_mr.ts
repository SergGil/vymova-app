// Vymova — data/grammar-data/grammar_mr.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_MR: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "सर्वनामे — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У маратхі є граматичний рід не лише в іменниках, а й у формах дієслова минулого часу, узгоджених з підметом.",
            "en": {
              "text": "Marathi has grammatical gender not just in nouns but also in past-tense verb forms, which agree with the subject."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "मी (mī)"
              ],
              [
                "ти (зв. / ввічл.)",
                "तू / तुम्ही (tū / tumhī)"
              ],
              [
                "він / вона",
                "तो / ती (to / tī)"
              ],
              [
                "ми",
                "आम्ही (āmhī)"
              ],
              [
                "ви",
                "तुम्ही (tumhī)"
              ],
              [
                "вони (ч./ж.)",
                "ते / त्या (te / tyā)"
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
