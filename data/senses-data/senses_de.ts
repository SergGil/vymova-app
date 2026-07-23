// Vymova — data/senses-data/senses_de.ts
// Auto-split from the former data/senses.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { SenseEntry } from '../senses.ts';

export const SENSES_DE: Record<string, SenseEntry[]> = {
  "bank": [
    {
      "pos": "noun",
      "translation": "берег (річки)",
      "exTarget": "Sie saßen am grasbewachsenen Flussufer und angelten, nahe der alten Bank.",
      "exKnow": "Вони сиділи на трав'янистому березі річки і рибалили, біля старої лавки."
    },
    {
      "pos": "noun",
      "translation": "лавка, скамія",
      "exTarget": "Ein alter Mann saß allein auf einer hölzernen Parkbank.",
      "exKnow": "Старий чоловік сидів сам на деревʼяній лавці в парку."
    }
  ],
  "decke": [
    {
      "pos": "noun",
      "translation": "ковдра",
      "exTarget": "Sie zog sich die warme weiche Decke um die Schultern.",
      "exKnow": "Вона накинула теплу м'яку ковдру на плечі."
    },
    {
      "pos": "noun",
      "translation": "стеля",
      "exTarget": "Der hohe alte Raum hatte eine kunstvoll bemalte Decke.",
      "exKnow": "У високій старій кімнаті була майстерно розписана стеля."
    }
  ]
};
