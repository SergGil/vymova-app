// Vymova — data/grammar-data/grammar_tlh.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_TLH: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "ghojmoHwI' mu'mey — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У клінгонській, мові, створеній лінгвістом Марком Окрандом для \"Зоряного шляху\", дієслово зазвичай має незвичний для людських мов порядок додаток-присудок-підмет, а займенник підмета часто пропускають, бо його показує префікс дієслова.",
            "en": {
              "text": "In Klingon, created by linguist Marc Okrand for Star Trek, the verb usually follows an object-verb-subject order rare among human languages, and the subject pronoun is often dropped since a verb prefix already marks it."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "jIH"
              ],
              [
                "ти",
                "SoH"
              ],
              [
                "він / вона (розумна істота)",
                "ghaH"
              ],
              [
                "воно (нежива річ)",
                "'oH"
              ],
              [
                "ми",
                "maH"
              ],
              [
                "ви",
                "tlhIH"
              ],
              [
                "вони (розумні істоти)",
                "chaH"
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
