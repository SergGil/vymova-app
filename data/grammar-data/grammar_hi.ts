// Vymova — data/grammar-data/grammar_hi.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_HI: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "pronouns",
        "title": "Особові займенники — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Займенник другої особи вибирається за ступенем ввічливості: तुम — до рівних/молодших, आप — ввічливо, до старших чи незнайомих.",
            "en": {
              "text": "The second-person pronoun depends on politeness level: तुम for peers/juniors, आप as the polite/formal form for elders or strangers."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "मैं (maiṅ)",
                "я"
              ],
              [
                "तुम / आप",
                "ти / ви (ввічливо)"
              ],
              [
                "वह (vah)",
                "він / вона / воно"
              ],
              [
                "हम (ham)",
                "ми"
              ],
              [
                "वे (ve)",
                "вони"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "मैं ठीक हूँ।",
                "Я в порядку."
              ],
              [
                "आप कैसे हैं?",
                "Як ви? (ввічливо)"
              ]
            ]
          }
        ]
      },
      {
        "id": "to-be",
        "title": "Дієслово \"होना\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Гінді має порядок слів SOV — дієслово-зв'язка \"होना\" ставиться в кінці речення, а не після підмета, як в українській.",
            "en": {
              "text": "Hindi uses SOV word order — the linking verb \"होना\" (to be) goes at the end of the sentence, not right after the subject."
            }
          },
          {
            "type": "formula",
            "title": "Підмет + присудок + है/हैं",
            "rows": [
              [
                "यह किताब है।",
                "(Це книга.)"
              ],
              [
                "वे अच्छे हैं।",
                "(Вони хороші.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "मैं छात्र हूँ।",
                "Я студент."
              ],
              [
                "वह डॉक्टर है।",
                "Він/вона лікар."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation",
        "title": "Заперечення \"नहीं\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечна частка नहीं (nahīṅ) ставиться перед дієсловом, зберігаючи порядок слів SOV.",
            "en": {
              "text": "The negative particle नहीं (nahīṅ) goes right before the verb, keeping the SOV word order."
            }
          },
          {
            "type": "formula",
            "title": "Підмет + додаток + नहीं + дієслово",
            "rows": [
              [
                "मुझे पता नहीं है।",
                "(Я не знаю.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "मुझे पता नहीं है।",
                "Я не знаю."
              ],
              [
                "वह नहीं आया।",
                "Він не прийшов."
              ]
            ]
          }
        ]
      },
      {
        "id": "questions",
        "title": "Питання \"क्या\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання типу \"так/ні\" утворюються додаванням частки क्या (kyā) на початок стверджувального речення — порядок слів не змінюється.",
            "en": {
              "text": "Yes/no questions are formed by adding the particle क्या (kyā) at the start of the statement — word order stays unchanged."
            }
          },
          {
            "type": "formula",
            "title": "क्या + твердження?",
            "rows": [
              [
                "क्या आप ठीक हैं?",
                "(Ви в порядку?)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "क्या तुम आ रहे हो?",
                "Ти йдеш?"
              ],
              [
                "क्या यह सही है?",
                "Це правильно?"
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order",
        "title": "Порядок слів SOV — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів у гінді — підмет-додаток-присудок (SOV), на відміну від українського/англійського SVO. Дієслово завжди в кінці речення.",
            "en": {
              "text": "Hindi's basic word order is Subject-Object-Verb (SOV), unlike English/Ukrainian SVO — the verb always comes last."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "मैं किताब पढ़ता हूँ।",
                "Я читаю книгу (букв. \"я книгу читаю\")."
              ],
              [
                "वह चाय पीती है।",
                "Вона п'є чай (букв. \"вона чай п'є\")."
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "tenses",
    "title": "काल और भाव",
    "titleEn": "Tenses & Moods",
    "emoji": "🕐",
    "rules": [
      {
        "id": "present-habitual",
        "title": "सामान्य वर्तमान काल — A1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Звичайний теперішній час утворюється дієприкметником на -ता/-ती/-ते (узгодженим за родом і числом підмета) + допоміжне दिло है/हैं.",
            "en": {
              "text": "The habitual present is formed with the -ता/-ती/-ते participle (agreeing with the subject's gender and number) + the auxiliary है/हैं."
            }
          },
          {
            "type": "formula",
            "title": "पढ़ना (читати) — वर्तमान काल",
            "rows": [
              [
                "✅ (+)",
                "मैं (ч.р.)",
                "पढ़ता हूँ",
                "→ मैं किताब पढ़ता हूँ।"
              ],
              [
                "✅ (+)",
                "मैं (ж.р.)",
                "पढ़ती हूँ",
                "→ मैं किताब पढ़ती हूँ।"
              ],
              [
                "✅ (+)",
                "वह (ч.р.)",
                "पढ़ता है",
                "→ वह अख़बार पढ़ता है।"
              ],
              [
                "✅ (+)",
                "वे / आप",
                "पढ़ते हैं",
                "→ वे किताबें पढ़ते हैं।"
              ]
            ],
            "en": {
              "title": "पढ़ना (to read) — habitual present"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "मैं रोज़ स्कूल जाता हूँ।",
                "Я щодня ходжу до школи."
              ]
            ]
          }
        ]
      },
      {
        "id": "present-continuous",
        "title": "अपूर्ण वर्तमान काल — A1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія «просто зараз» виражається основою дієслова + रहा/रही/रहे (узгоджене з підметом) + है/हैं.",
            "en": {
              "text": "An action happening right now is expressed with the verb stem + रहा/रही/रहे (agreeing with the subject) + है/हैं."
            }
          },
          {
            "type": "formula",
            "title": "पढ़ना → अपूर्ण वर्तमान",
            "rows": [
              [
                "✅ (+)",
                "मैं (ч.р.)",
                "पढ़ रहा हूँ",
                "→ मैं किताब पढ़ रहा हूँ।"
              ],
              [
                "✅ (+)",
                "वह (ж.р.)",
                "पढ़ रही है",
                "→ वह पढ़ रही है।"
              ]
            ],
            "en": {
              "title": "पढ़ना → present continuous"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "तुम क्या कर रहे हो?",
                "Що ти зараз робиш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "present-perfect",
        "title": "पूर्ण वर्तमान काल — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній доконаний час виражає дію, результат якої важливий зараз. Утворюється дієприкметником на -या/-यी/-ये + है/हैं.",
            "en": {
              "text": "The present perfect expresses an action whose result matters now. Formed with the -या/-यी/-ये participle + है/हैं."
            }
          },
          {
            "type": "formula",
            "title": "पढ़ना → पूर्ण वर्तमान",
            "rows": [
              [
                "✅ (+)",
                "मैंने (ч.р.)",
                "पढ़ा है",
                "→ मैंने किताब पढ़ी है।"
              ],
              [
                "✅ (+)",
                "वह",
                "आया है",
                "→ वह आया है।"
              ]
            ],
            "en": {
              "title": "पढ़ना → present perfect"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "मैंने खाना खाया है।",
                "Я вже поїв(ла)."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-habitual",
        "title": "सामान्य भूतकाल (आदतन) — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Звичка в минулому виражається дієприкметником на -ता/-ती/-ते + допоміжне था/थी/थे (замість है/हैं).",
            "en": {
              "text": "A past habit is expressed with the -ता/-ती/-ते participle + the auxiliary था/थी/थे (instead of है/हैं)."
            }
          },
          {
            "type": "formula",
            "title": "पढ़ना → आदतन भूतकाल",
            "rows": [
              [
                "✅ (+)",
                "मैं (ч.р.)",
                "पढ़ता था",
                "→ मैं रोज़ पढ़ता था।"
              ],
              [
                "✅ (+)",
                "वह (ж.р.)",
                "पढ़ती थी",
                "→ वह हर दिन पढ़ती थी।"
              ]
            ],
            "en": {
              "title": "पढ़ना → habitual past"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "बचपन में मैं फुटबॉल खेलता था।",
                "У дитинстві я грав у футбол."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-continuous",
        "title": "अपूर्ण भूतकाल — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в минулому виражається основою + रहा/रही/रहे + था/थी/थे.",
            "en": {
              "text": "An ongoing past action is expressed with the stem + रहा/रही/रहे + था/थी/थे."
            }
          },
          {
            "type": "formula",
            "title": "पढ़ना → अपूर्ण भूतकाल",
            "rows": [
              [
                "✅ (+)",
                "मैं (ч.р.)",
                "पढ़ रहा था",
                "→ मैं किताब पढ़ रहा था।"
              ],
              [
                "✅ (+)",
                "वे",
                "पढ़ रहे थे",
                "→ वे पढ़ रहे थे।"
              ]
            ],
            "en": {
              "title": "पढ़ना → past continuous"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "जब मैं आया, वह सो रही थी।",
                "Коли я прийшов, вона спала."
              ]
            ]
          }
        ]
      },
      {
        "id": "simple-past",
        "title": "सामान्य भूतकाल (सरल) — A1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Простий минулий час — сам дієприкметник на -या/-यी/-ये без допоміжного дієслова; для перехідних дієслів підмет вимагає частки ने (див. окреме правило).",
            "en": {
              "text": "The simple past is the -या/-यी/-ये participle alone, with no auxiliary; for transitive verbs the subject requires the particle ने (see the separate rule)."
            }
          },
          {
            "type": "formula",
            "title": "आना (приходити) — सरल भूतकाल",
            "rows": [
              [
                "✅ (+)",
                "वह (ч.р.)",
                "आया",
                "→ वह कल आया।"
              ],
              [
                "✅ (+)",
                "वह (ж.р.)",
                "आयी",
                "→ वह कल आयी।"
              ]
            ],
            "en": {
              "title": "आना (to come) — simple past"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "वह घर गया।",
                "Він пішов додому."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-perfect",
        "title": "पूर्ण भूतकाल — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Виражає дію, що відбулася раніше за іншу минулу подію (Past Perfect). Утворюється дієприкметником на -या + था/थी/थे.",
            "en": {
              "text": "Expresses an action that happened before another past event (Past Perfect). Formed with the -या participle + था/थी/थे."
            }
          },
          {
            "type": "formula",
            "title": "आना → पूर्ण भूतकाल",
            "rows": [
              [
                "✅ (+)",
                "वह",
                "आया था",
                "→ जब मैं पहुँचा, वह जा चुका था।"
              ]
            ],
            "en": {
              "title": "आना → past perfect"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "मैंने खाना खाया था।",
                "Я вже був поїв."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-simple",
        "title": "सामान्य भविष्यकाल — A1",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється особливим закінченням -गा/-गी/-गे, узгодженим з родом і числом підмета, доданим до основи дієслова.",
            "en": {
              "text": "The future tense is formed with the special ending -गा/-गी/-गे, agreeing with the subject's gender and number, added to the verb stem."
            }
          },
          {
            "type": "formula",
            "title": "पढ़ना → भविष्यकाल",
            "rows": [
              [
                "✅ (+)",
                "मैं (ч.р.)",
                "पढ़ूँगा",
                "→ मैं कल पढ़ूँगा।"
              ],
              [
                "✅ (+)",
                "मैं (ж.р.)",
                "पढ़ूँगी",
                "→ मैं कल पढ़ूँगी।"
              ],
              [
                "✅ (+)",
                "वे",
                "पढ़ेंगे",
                "→ वे कल पढ़ेंगे।"
              ]
            ],
            "en": {
              "title": "पढ़ना → simple future"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "कल बारिश होगी।",
                "Завтра піде дощ."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-continuous",
        "title": "अपूर्ण भविष्यकाल — B1",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в майбутньому утворюється основою + रहा/रही/रहे + होगा/होगी/होंगे.",
            "en": {
              "text": "An ongoing future action is formed with the stem + रहा/रही/रहे + होगा/होगी/होंगे."
            }
          },
          {
            "type": "table",
            "title": "रहा होगा",
            "rows": [
              [
                "वह पढ़ रहा होगा।",
                "Він, мабуть, буде читати."
              ],
              [
                "हम काम कर रहे होंगे।",
                "Ми будемо працювати."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "इस समय वह सो रही होगी।",
                "У цей час вона, мабуть, спатиме."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-perfect",
        "title": "पूर्ण भविष्यकाल — B1",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Виражає дію, яка завершиться в майбутньому, або припущення про минуле. Утворюється дієприкметником на -या + होगा/होगी/होंगे.",
            "en": {
              "text": "Expresses an action that will be completed in the future, or a guess about the past. Formed with the -या participle + होगा/होगी/होंगे."
            }
          },
          {
            "type": "table",
            "title": "या होगा",
            "rows": [
              [
                "वह आ चुका होगा।",
                "Він, мабуть, уже прийшов."
              ],
              [
                "उसने खाना खाया होगा।",
                "Він, мабуть, уже поїв."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "तब तक वह पहुँच चुका होगा।",
                "До того часу він уже прибуде."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative",
        "title": "आज्ञार्थक — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб має різні форми ввічливості: неформальна (основа), формальна (основа+ओ), дуже ввічлива (основа+इए).",
            "en": {
              "text": "The imperative has different politeness levels: informal (bare stem), formal (stem+ओ), very polite (stem+इए)."
            }
          },
          {
            "type": "table",
            "title": "Рівні ввічливості",
            "rows": [
              [
                "पढ़ो! (तुम)",
                "читай! (звичайно)"
              ],
              [
                "पढ़िए! (आप)",
                "будь ласка, читайте! (ввічливо)"
              ],
              [
                "मत पढ़ो!",
                "не читай! (заперечення)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "कृपया बैठिए।",
                "Будь ласка, сідайте."
              ]
            ]
          }
        ]
      },
      {
        "id": "subjunctive",
        "title": "संभाव्य भविष्यकाल (विध्यर्थक) — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний/можливий спосіб (без допоміжного дієслова, лише закінчення -ऊँ/-ए/-एँ) виражає можливість, побажання чи ввічливу пропозицію.",
            "en": {
              "text": "The subjunctive/potential mood (no auxiliary, just the endings -ऊँ/-ए/-एँ) expresses possibility, wishes, or polite suggestions."
            }
          },
          {
            "type": "table",
            "title": "विध्यर्थक",
            "rows": [
              [
                "शायद वह आए।",
                "Можливо, він прийде."
              ],
              [
                "काश मैं वहाँ होता।",
                "Якби ж я був там."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "हो सकता है वह जानता हो।",
                "Можливо, він знає."
              ]
            ]
          }
        ]
      },
      {
        "id": "ergative-ne",
        "title": "कर्ता कारक \"ने\" के साथ भूतकाल — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса гінді — у простому/доконаному минулому часі перехідних дієслів підмет отримує частку ने (ергативна конструкція); дієслово тоді узгоджується з додатком, а не з підметом.",
            "en": {
              "text": "A unique Hindi feature — in the simple/perfective past of transitive verbs, the subject takes the particle ने (ergative construction); the verb then agrees with the object, not the subject."
            }
          },
          {
            "type": "table",
            "title": "ने + перехідне дієслово",
            "rows": [
              [
                "उसने किताब पढ़ी।",
                "Він прочитав книгу. (पढ़ी узгоджено з жіночим किताब)"
              ],
              [
                "मैंने खाना खाया।",
                "Я з'їв їжу. (खाया узгоджено з чоловічим खाना)"
              ]
            ]
          },
          {
            "type": "note",
            "title": "Коли не вживається ne",
            "text": "Неперехідні дієслова (जाना, आना, होना) ніколи не беруть ने, навіть у минулому часі: वह गया (він пішов), а не *उसने गया.",
            "en": {
              "title": "When ne is not used",
              "text": "Intransitive verbs (जाना, आना, होना) never take ने, even in the past tense: वह गया (he went), not *उसने गया."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "लड़की ने गाना गाया।",
                "Дівчина заспівала пісню."
              ]
            ]
          }
        ]
      }
    ]
  }
];
