// Vymova — data/grammar-data/grammar_val.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_VAL: GrammarCategory[] = [
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
            "text": "У високій валірійській, мові, розробленій лінгвістом Девідом Дж. Петерсоном для \"Гри престолів\", іменники та займенники відмінюються за чотирма родами — сонячним, місячним, земним і водним — а не за чоловічим/жіночим.",
            "en": {
              "text": "In High Valyrian, developed by linguist David J. Peterson for Game of Thrones, nouns and pronouns decline by four genders — solar, lunar, terrestrial, and aquatic — rather than masculine/feminine."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники (однина)",
            "rows": [
              [
                "я",
                "nyke"
              ],
              [
                "ти",
                "kesy"
              ],
              [
                "він / вона / воно",
                "ziry"
              ]
            ],
            "en": {
              "title": "Personal Pronouns (singular)"
            }
          },
          {
            "type": "note",
            "text": "Множину займенників у валірійській творять відмінковими закінченнями залежно від роду іменника, а не окремим словом, як в англійській чи українській.",
            "en": {
              "text": "Valyrian forms the plural of pronouns through case endings that depend on noun gender, rather than a separate word as in English or Ukrainian."
            }
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      }
    ]
  }
];
