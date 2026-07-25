// Vymova — data/senses-data/senses_el.ts
// Auto-split from the former data/senses.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { SenseEntry } from '../senses.ts';

export const SENSES_EL: Record<string, SenseEntry[]> = {
  "διαμέρισμα": [
    {
      "pos": "noun",
      "level": "A2",
      "gloss": "ένα σύνολο δωματίων μέσα σε ένα κτίριο, όπου ζει κάποιος",
      "translation": "квартира",
      "exTarget": "Νοίκιασε ένα μικρό διαμέρισμα στο κέντρο της πόλης.",
      "exKnow": "Вона винайняла маленьку квартиру в центрі міста."
    },
    {
      "pos": "noun",
      "level": "B1",
      "gloss": "ένα ξεχωριστό τμήμα μέσα σε κάτι, όπως μια βαλίτσα",
      "translation": "відділення, секція (у валізі тощо)",
      "exTarget": "Φύλασσε το διαβατήριό της σε ξεχωριστό διαμέρισμα της τσάντας της.",
      "exKnow": "Вона зберігала свій паспорт у окремому відділенні своєї сумки."
    }
  ],
  "καφέ": [
    {
      "pos": "adj",
      "level": "A1",
      "gloss": "το χρώμα που μοιάζει με αυτό του καφέ ή του χώματος",
      "translation": "коричневий (колір)",
      "exTarget": "Έχει καφέ μαλλιά και πράσινα μάτια.",
      "exKnow": "У неї коричневе волосся і зелені очі."
    },
    {
      "pos": "noun",
      "level": "A1",
      "gloss": "ένα μικρό μαγαζί όπου πίνεις καφέ ή άλλα ροφήματα",
      "translation": "кафе (заклад)",
      "exTarget": "Συναντήθηκαν σε ένα ευχάριστο καφέ κοντά στον σιδηροδρομικό σταθμό.",
      "exKnow": "Вони зустрілися в приємному кафе біля залізничного вокзалу."
    }
  ]
};
