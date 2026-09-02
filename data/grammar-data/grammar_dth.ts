// Vymova — data/grammar-data/grammar_dth.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_DTH: GrammarCategory[] = [
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
            "text": "Дотракійська, мова, створена лінгвістом Девідом Дж. Петерсоном для \"Гри престолів\", відображає культуру кочового народу вершників — граматика й лексика тісно пов'язані з життям у степу.",
            "en": {
              "text": "Dothraki, created by linguist David J. Peterson for Game of Thrones, reflects the culture of a nomadic horse-riding people — its grammar and vocabulary are closely tied to life on the steppe."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники (однина)",
            "rows": [
              [
                "я",
                "anha"
              ],
              [
                "ти",
                "yer"
              ],
              [
                "він / вона / воно",
                "me"
              ]
            ],
            "en": {
              "title": "Personal Pronouns (singular)"
            }
          },
          {
            "type": "note",
            "text": "Дотракійці у творі не мають власної писемності — Джордж Р. Р. Мартін і Девід Дж. Петерсон свідомо розробляли дотракійську як усну мову.",
            "en": {
              "text": "The Dothraki, in the story, have no writing system of their own — George R. R. Martin and David J. Peterson deliberately developed Dothraki as a purely oral language."
            }
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      }
    ]
  }
];
