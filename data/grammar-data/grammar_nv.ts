// Vymova — data/grammar-data/grammar_nv.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_NV: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Personal Pronoun — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У навахо незалежні займенники часто збігаються за формою (наприклад, \"nihí\" означає і \"ми\", і \"ви\"-множина) — реальне розрізнення несе префікс дієслова, а не сам займенник.",
            "en": {
              "text": "In Navajo, independent pronouns often share the same form (e.g. \"nihí\" means both \"we\" and plural \"you\") — the real distinction is carried by the verb prefix, not the pronoun itself."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "shí"
              ],
              [
                "ти",
                "ni"
              ],
              [
                "він / вона / воно",
                "bí"
              ],
              [
                "ми",
                "nihí"
              ],
              [
                "ви",
                "nihí"
              ],
              [
                "вони",
                "bí"
              ]
            ],
            "en": {
              "title": "Personal Pronouns"
            }
          },
          {
            "type": "note",
            "text": "Дієслово в навахо несе основне граматичне навантаження — незалежний займенник часто взагалі можна опустити, оскільки особу й число вже показують префікси дієслова.",
            "en": {
              "text": "The verb in Navajo carries most of the grammatical load — the independent pronoun can often be dropped entirely, since person and number are already shown by verb prefixes."
            }
          }
        ]
      }
    ]
  }
];
