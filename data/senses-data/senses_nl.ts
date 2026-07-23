// Vymova — data/senses-data/senses_nl.ts
// Auto-split from the former data/senses.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { SenseEntry } from '../senses.ts';

export const SENSES_NL: Record<string, SenseEntry[]> = {
  "klok": [
    {
      "pos": "noun",
      "translation": "годинник (настінний)",
      "exTarget": "De klok aan de muur toont de verkeerde tijd.",
      "exKnow": "Годинник на стіні показує неправильний час."
    },
    {
      "pos": "noun",
      "translation": "дзвін (церковний)",
      "exTarget": "De kerkklok luidde luid elk uur door de dag.",
      "exKnow": "Церковний дзвін голосно дзвонив щогодини протягом дня."
    }
  ],
  "band": [
    {
      "pos": "noun",
      "translation": "емоційний звʼязок",
      "exTarget": "Kinderen ontwikkelen sterke gehechtheid en een hechte band met hun verzorgers.",
      "exKnow": "Діти розвивають міцну прив'язаність і тісний звʼязок зі своїми опікунами."
    },
    {
      "pos": "noun",
      "translation": "музичний гурт",
      "exTarget": "De rockband speelde drie toegiften voor het enthousiaste publiek.",
      "exKnow": "Рок-гурт зіграв три біси для захопленої публіки."
    }
  ],
  "bot": [
    {
      "pos": "noun",
      "translation": "кістка",
      "exTarget": "De hond begroef zijn favoriete bot in de tuin.",
      "exKnow": "Пес закопав свою улюблену кістку в саду."
    },
    {
      "pos": "adj",
      "translation": "грубий, нечемний",
      "exTarget": "Zijn botte manieren stootten veel mensen af.",
      "exKnow": "Його грубі манери відштовхували багатьох людей."
    }
  ]
};
