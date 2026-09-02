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
  },
  {
    "id": "grammar",
    "title": "व्याकरण",
    "titleEn": "Grammar",
    "emoji": "📖",
    "rules": [
      {
        "id": "gender-nouns",
        "title": "संज्ञा का लिंग — A1",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "У гінді два роди — чоловічий і жіночий; іменники на -आ переважно чоловічого, на -ई/-िया — жіночого роду, але є багато винятків.",
            "en": {
              "text": "Hindi has two genders — masculine and feminine; nouns ending in -आ are mostly masculine, -ई/-िया mostly feminine, but there are many exceptions."
            }
          },
          {
            "type": "table",
            "title": "Рід за закінченням",
            "rows": [
              [
                "लड़का (хлопчик)",
                "чоловічий (-आ)"
              ],
              [
                "लड़की (дівчинка)",
                "жіночий (-ई)"
              ],
              [
                "किताब (книга)",
                "жіночий (без правила)"
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
                "यह किताब अच्छी है।",
                "Ця книга хороша."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-nouns",
        "title": "संज्ञा का बहुवचन — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється за родом і закінченням: чоловічий рід на -आ → -е, жіночий на приголосну → +ें, жіночий на -ई → +याँ.",
            "en": {
              "text": "The plural is formed by gender and ending: masculine -आ → -े, feminine ending in a consonant → +ें, feminine -ई → +याँ."
            }
          },
          {
            "type": "table",
            "title": "Однина → множина",
            "rows": [
              [
                "लड़का → लड़के",
                "хлопчик → хлопчики"
              ],
              [
                "किताब → किताबें",
                "книга → книги"
              ],
              [
                "लड़की → लड़कियाँ",
                "дівчинка → дівчатка"
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
                "लड़के खेल रहे हैं।",
                "Хлопчики грають."
              ]
            ]
          }
        ]
      },
      {
        "id": "oblique-case",
        "title": "परोक्ष कारक — A2",
        "emoji": "🏷️",
        "sections": [
          {
            "type": "intro",
            "text": "Ключова риса гінді — перед будь-яким післяйменником іменник (і узгоджений з ним прикметник) переходить у непряму («косу») форму, відмінну від прямої.",
            "en": {
              "text": "A key Hindi feature — before any postposition, the noun (and its agreeing adjective) shifts to the oblique ('slanted') form, distinct from the direct form."
            }
          },
          {
            "type": "table",
            "title": "Пряма vs непряма форма",
            "rows": [
              [
                "लड़का (прямий) → लड़के को (непрямий)",
                "хлопчик → хлопчику (додаток)"
              ],
              [
                "घर (прямий) → घर में (без зміни, незмінне слово)",
                "дім → у домі"
              ],
              [
                "अच्छा लड़का → अच्छे लड़के को",
                "хороший хлопчик → хорошому хлопчику"
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
                "मैं लड़के को देखता हूँ।",
                "Я бачу хлопчика."
              ]
            ]
          }
        ]
      },
      {
        "id": "postposition-ka",
        "title": "संबंधकारक \"का/की/के\" — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Післяйменник का (та його форми की/के) виражає належність і узгоджується не з володарем, а з предметом володіння.",
            "en": {
              "text": "The postposition का (and its forms की/के) expresses possession and agrees not with the owner, but with the possessed thing."
            }
          },
          {
            "type": "table",
            "title": "का / की / के",
            "rows": [
              [
                "राम का घर",
                "дім Рама (чол. однина)"
              ],
              [
                "राम की किताब",
                "книга Рама (жін.)"
              ],
              [
                "राम के बच्चे",
                "діти Рама (чол. множина)"
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
                "यह मेरे भाई का कमरा है।",
                "Це кімната мого брата."
              ]
            ]
          }
        ]
      },
      {
        "id": "postposition-ko",
        "title": "कर्म कारक \"को\" — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Післяйменник को позначає непрямий додаток (кому?) і часто — означений прямий додаток (особу).",
            "en": {
              "text": "The postposition को marks the indirect object (to whom?) and often the definite direct object (a person)."
            }
          },
          {
            "type": "table",
            "title": "को",
            "rows": [
              [
                "मुझे यह पसंद है।",
                "Мені це подобається."
              ],
              [
                "मैंने उसे किताब दी।",
                "Я дав йому книгу."
              ],
              [
                "मैं राम को जानता हूँ।",
                "Я знаю Рама. (особа-додаток)"
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
                "उसे भूख लगी है।",
                "Він голодний."
              ]
            ]
          }
        ]
      },
      {
        "id": "postposition-se",
        "title": "करण कारक \"से\" — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Післяйменник से означає «з/за допомогою/від» — знаряддя, джерело чи порівняння.",
            "en": {
              "text": "The postposition से means 'with/by means of/from' — instrument, source, or comparison."
            }
          },
          {
            "type": "table",
            "title": "से",
            "rows": [
              [
                "पेंसिल से लिखो।",
                "Пиши олівцем."
              ],
              [
                "मैं यूक्रेन से हूँ।",
                "Я з України."
              ],
              [
                "वह मुझसे लंबा है।",
                "Він вищий за мене."
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
                "मैं स्कूल से आया।",
                "Я прийшов зі школи."
              ]
            ]
          }
        ]
      },
      {
        "id": "postposition-mein-par",
        "title": "अधिकरण कारक \"में/पर\" — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "में означає «в», पर — «на»; обидва вимагають непрямої форми попереднього іменника.",
            "en": {
              "text": "में means 'in', पर means 'on'; both require the preceding noun to be in the oblique form."
            }
          },
          {
            "type": "table",
            "title": "में / पर",
            "rows": [
              [
                "घर में",
                "у домі"
              ],
              [
                "मेज़ पर",
                "на столі"
              ],
              [
                "भारत में",
                "в Індії"
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
                "किताब मेज़ पर है।",
                "Книга на столі."
              ]
            ]
          }
        ]
      },
      {
        "id": "postposition-others",
        "title": "अन्य परसर्ग (के लिए, के साथ, के बिना) — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Складені післяйменники будуються з के + слово: के लिए (для), के साथ (з/разом), के बिना (без).",
            "en": {
              "text": "Compound postpositions are built with के + a word: के लिए (for), के साथ (with), के बिना (without)."
            }
          },
          {
            "type": "table",
            "title": "के लिए / के साथ / के बिना",
            "rows": [
              [
                "तुम्हारे लिए",
                "для тебе"
              ],
              [
                "दोस्त के साथ",
                "з другом"
              ],
              [
                "पानी के बिना",
                "без води"
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
                "यह उपहार तुम्हारे लिए है।",
                "Цей подарунок для тебе."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-agreement",
        "title": "विशेषण का लिंग-वचन अनुसार रूप — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники на -आ змінюють закінчення за родом і числом іменника (-आ/-ी/-े); прикметники на інші голосні незмінні.",
            "en": {
              "text": "Adjectives ending in -आ change their ending according to the noun's gender and number (-आ/-ी/-े); adjectives ending in other vowels are invariable."
            }
          },
          {
            "type": "table",
            "title": "अच्छा (гарний) — узгодження",
            "rows": [
              [
                "अच्छा लड़का",
                "хороший хлопчик"
              ],
              [
                "अच्छी लड़की",
                "хороша дівчинка"
              ],
              [
                "अच्छे लड़के",
                "хороші хлопчики"
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
                "यह सुंदर घर है।",
                "Це гарний дім. (सुंदर незмінне)"
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "तुलना (से ज़्यादा, सबसे ज़्यादा) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь: [іменник] + से + прикметник; найвищий ступінь: सबसे + прикметник.",
            "en": {
              "text": "Comparative: [noun] + से + adjective; superlative: सबसे + adjective."
            }
          },
          {
            "type": "table",
            "title": "से / सबसे",
            "rows": [
              [
                "वह मुझसे बड़ा है।",
                "Він старший за мене."
              ],
              [
                "वह सबसे बड़ा है।",
                "Він найстарший."
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
                "दिल्ली मुंबई से बड़ी है।",
                "Делі більший за Мумбаї."
              ]
            ]
          }
        ]
      },
      {
        "id": "personal-pronoun-oblique",
        "title": "सर्वनाम का परोक्ष रूप — A2",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Особові займенники мають окремі непрямі форми перед післяйменниками, часто зливаючись з को в скорочену форму.",
            "en": {
              "text": "Personal pronouns have distinct oblique forms before postpositions, often fusing with को into a shortened form."
            }
          },
          {
            "type": "table",
            "title": "Непрямі форми",
            "rows": [
              [
                "मैं → मुझे / मुझसे",
                "я → мені / мною"
              ],
              [
                "तुम → तुम्हें / तुमसे",
                "ти → тобі / тобою"
              ],
              [
                "वह → उसे / उससे",
                "він/вона → йому/їй / ним/нею"
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
                "मुझे यह पसंद है।",
                "Мені це подобається."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-pronouns",
        "title": "संबंधवाचक सर्वनाम — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники узгоджуються з предметом володіння, як прикметники на -आ.",
            "en": {
              "text": "Possessive pronouns agree with the possessed thing, like -आ adjectives."
            }
          },
          {
            "type": "table",
            "title": "मेरा / तुम्हारा / उसका",
            "rows": [
              [
                "मेरा घर / मेरी किताब",
                "мій дім / моя книга"
              ],
              [
                "तुम्हारा घर / तुम्हारी किताब",
                "твій дім / твоя книга"
              ],
              [
                "उसका घर / उसकी किताब",
                "його/її дім / книга"
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
                "यह मेरी बहन है।",
                "Це моя сестра."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "निश्चयवाचक सर्वनाम (यह/वह) — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "यह (це/цей) вказує на ближче, वह (те/той) — на дальше; обидва вживаються і як займенники, і як означення.",
            "en": {
              "text": "यह (this) points to something near, वह (that) to something farther; both are used as pronouns and as determiners."
            }
          },
          {
            "type": "table",
            "title": "यह / वह",
            "rows": [
              [
                "यह किताब",
                "ця книга"
              ],
              [
                "वह घर",
                "той дім"
              ],
              [
                "ये / वे (множина)",
                "ці / ті"
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
                "यह मेरा दोस्त है।",
                "Це мій друг."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-pronouns",
        "title": "संबंधवाचक सर्वनाम जो...वह — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Гінді використовує кореляцію जो (який)...वह (той) — обидва слова присутні в реченні, на відміну від англійської.",
            "en": {
              "text": "Hindi uses the correlative जो (who/which)...वह (that one) — both words appear in the sentence, unlike English."
            }
          },
          {
            "type": "table",
            "title": "जो...वह",
            "rows": [
              [
                "जो लड़का आया, वह मेरा भाई है।",
                "Хлопчик, який прийшов, — мій брат."
              ],
              [
                "जो किताब मैंने पढ़ी, वह अच्छी थी।",
                "Книга, яку я прочитав, була хорошою."
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
                "जो चाहो, वह करो।",
                "Роби, що хочеш."
              ]
            ]
          }
        ]
      },
      {
        "id": "interrogative-pronouns",
        "title": "प्रश्नवाचक सर्वनाम (कौन, क्या, कितना) — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "कौन (хто) вживається для осіб; क्या (що) для речей; कितना узгоджується за родом і числом («скільки»).",
            "en": {
              "text": "कौन (who) is used for people; क्या (what) for things; कितना agrees in gender and number ('how much/many')."
            }
          },
          {
            "type": "table",
            "title": "कौन / क्या / कितना",
            "rows": [
              [
                "कौन है?",
                "Хто це?"
              ],
              [
                "यह क्या है?",
                "Що це?"
              ],
              [
                "यह कितने का है?",
                "Скільки це коштує?"
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
                "तुम्हारा नाम क्या है?",
                "Як тебе звати?"
              ]
            ]
          }
        ]
      },
      {
        "id": "indefinite-pronouns",
        "title": "अनिश्चयवाचक सर्वनाम (कोई, कुछ) — A2",
        "emoji": "🔘",
        "sections": [
          {
            "type": "intro",
            "text": "कोई (хтось/будь-хто) для осіб; कुछ (щось/дещо) для речей і незлічуваних понять.",
            "en": {
              "text": "कोई (someone/anyone) is for people; कुछ (something/some) is for things and uncountable concepts."
            }
          },
          {
            "type": "table",
            "title": "कोई / कुछ",
            "rows": [
              [
                "कोई आया।",
                "Хтось прийшов."
              ],
              [
                "मुझे कुछ चाहिए।",
                "Мені щось потрібно."
              ],
              [
                "कोई बात नहीं।",
                "Нічого страшного."
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
                "कुछ मत कहो।",
                "Нічого не кажи."
              ]
            ]
          }
        ]
      },
      {
        "id": "compound-verbs",
        "title": "संयुक्त क्रिया — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса гінді — основне дієслово + допоміжне «легке» дієслово (जाना, लेना, देना, डालना), яке додає відтінок завершеності, користі собі/іншим чи раптовості.",
            "en": {
              "text": "A unique Hindi feature — main verb + a 'light' auxiliary verb (जाना, लेना, देना, डालना) that adds a nuance of completion, benefit to self/others, or suddenness."
            }
          },
          {
            "type": "table",
            "title": "Складені дієслова",
            "rows": [
              [
                "खा लेना",
                "з'їсти (для себе)"
              ],
              [
                "खा जाना",
                "з'їсти все (завершено)"
              ],
              [
                "बता देना",
                "розповісти (комусь)"
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
                "उसने सारा खाना खा लिया।",
                "Він з'їв усю їжу."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunct-verbs",
        "title": "समासयुक्त क्रिया — A2",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Багато дієслів утворюються поєднанням іменника (частіше запозиченого) з करना (робити) чи होना (бути): काम करना (працювати), पसंद होना (подобатися).",
            "en": {
              "text": "Many verbs are formed by combining a noun (often borrowed) with करना (to do) or होना (to be): काम करना (to work), पसंद होना (to be liked)."
            }
          },
          {
            "type": "table",
            "title": "संज्ञा + करना",
            "rows": [
              [
                "काम करना",
                "працювати"
              ],
              [
                "मदद करना",
                "допомагати"
              ],
              [
                "शादी करना",
                "одружуватися"
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
                "मैं ऑफिस में काम करता हूँ।",
                "Я працюю в офісі."
              ]
            ]
          }
        ]
      },
      {
        "id": "honorific-verb-agreement",
        "title": "सम्मानसूचक क्रिया रूप — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Ввічливе आप завжди узгоджується з дієсловом у множині, навіть для однієї людини.",
            "en": {
              "text": "The polite आप always agrees with the verb in the plural, even when referring to one person."
            }
          },
          {
            "type": "table",
            "title": "आप + множина",
            "rows": [
              [
                "आप कैसे हैं?",
                "Як ви? (हैं — множина)"
              ],
              [
                "आप क्या कर रहे हैं?",
                "Що ви зараз робите?"
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
                "आप आइए, बैठिए।",
                "Прошу, заходьте, сідайте."
              ]
            ]
          }
        ]
      },
      {
        "id": "infinitive-uses",
        "title": "क्रियार्थक संज्ञा (-ना) — A2",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Форма на -ना (словникова форма дієслова) функціонує як віддієслівний іменник і може відмінюватися за родом/числом/відмінком, як звичайний іменник.",
            "en": {
              "text": "The -ना form (the verb's dictionary form) functions as a verbal noun and can be inflected for gender/number/case, like an ordinary noun."
            }
          },
          {
            "type": "table",
            "title": "-ना як іменник",
            "rows": [
              [
                "पढ़ना अच्छा है।",
                "Читання — це добре."
              ],
              [
                "मुझे तैरना पसंद है।",
                "Мені подобається плавати."
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
                "सोना ज़रूरी है।",
                "Спати необхідно."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-expressions",
        "title": "चाहिए, सकना, पड़ना — A1",
        "emoji": "🧠",
        "sections": [
          {
            "type": "intro",
            "text": "चाहिए (треба, безособове), सकना (могти, приєднується до основи), पड़ना (доводитися, вимушений обов'язок).",
            "en": {
              "text": "चाहिए (should, impersonal), सकना (can, attaches to the stem), पड़ना (to be forced to, compulsion)."
            }
          },
          {
            "type": "table",
            "title": "Модальні конструкції",
            "rows": [
              [
                "मुझे जाना चाहिए।",
                "Мені треба йти."
              ],
              [
                "मैं तैर सकता हूँ।",
                "Я вмію плавати."
              ],
              [
                "मुझे जाना पड़ा।",
                "Мені довелося піти."
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
                "तुम्हें पढ़ना चाहिए।",
                "Тобі варто вчитися."
              ]
            ]
          }
        ]
      },
      {
        "id": "numbers-cardinal",
        "title": "गिनती — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числа 1-100 у гінді здебільшого нерегулярні й вимагають індивідуального запам'ятовування (на відміну від багатьох інших мов).",
            "en": {
              "text": "Numbers 1-100 in Hindi are mostly irregular and must be memorized individually (unlike many other languages)."
            }
          },
          {
            "type": "table",
            "title": "1–10",
            "rows": [
              [
                "एक, दो, तीन",
                "1, 2, 3"
              ],
              [
                "चार, पाँच",
                "4, 5"
              ],
              [
                "छह...दस",
                "6...10"
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
                "मेरे तीन भाई हैं।",
                "У мене три брати."
              ]
            ]
          }
        ]
      }
    ]
  }
];
