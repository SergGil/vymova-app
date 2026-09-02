// Vymova — data/grammar-data/grammar_sc.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_SC: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Pronòmines Personales — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Сардинська вважається найконсервативнішою романською мовою — вона зберегла найбільше рис латинської фонетики.",
            "en": {
              "text": "Sardinian is considered the most conservative Romance language — it retains the most features of Latin phonetics."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "deu"
              ],
              [
                "ти",
                "tue"
              ],
              [
                "він / вона",
                "issu / issa"
              ],
              [
                "ми",
                "nois"
              ],
              [
                "ви",
                "bois"
              ],
              [
                "вони (ч./ж.)",
                "issos / issas"
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
