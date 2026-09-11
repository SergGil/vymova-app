// Vymova — data/grammar-data/grammar_my.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_MY: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "နာမ်စား — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У бірманській займенник \"я\" залежить від статі мовця: чоловіки кажуть \"ကျွန်တော်\" (kyanaw), жінки — \"ကျွန်မ\" (kyama).",
            "en": {
              "text": "In Burmese, the pronoun \"I\" depends on the speaker's gender: men say \"ကျွန်တော်\" (kyanaw), women say \"ကျွန်မ\" (kyama)."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я (чоловік / жінка)",
                "ကျွန်တော် / ကျွန်မ (kyanaw / kyama)"
              ],
              [
                "ти",
                "သင် (thin)"
              ],
              [
                "він / вона",
                "သူ (thu)"
              ],
              [
                "ми",
                "ကျွန်တော်တို့ (kyanaw-dó)"
              ],
              [
                "ви",
                "သင်တို့ (thin-dó)"
              ],
              [
                "вони",
                "သူတို့ (thu-dó)"
              ]
            ],
            "en": {
              "title": "Personal Pronouns"
            }
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "achiek-alay-4",
        "title": "အသံနေအသံထား — A1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Бірманська має чотири тони — низький, високий, рипучий і обірваний — які розрізняють значення складів, записаних однаковими буквами, але з різними тоновими позначками.",
            "en": {
              "text": "Burmese has four tones — low, high, creaky, and checked — which distinguish the meaning of syllables spelled with the same letters but different tone marks."
            }
          },
          {
            "type": "table",
            "title": "Приклад тонового розрізнення",
            "rows": [
              [
                "ka (низький тон, 'нести на собі')",
                "ká (високий тон, зовсім інше значення)"
              ]
            ],
            "en": {
              "title": "Tone Distinction Example"
            }
          }
        ],
        "titleEn": "The Four Tones — A1"
      },
      {
        "id": "wagwet-akshara",
        "title": "စက်ဝိုင်းပုံ အက္ခရာ — A2",
        "emoji": "⭕",
        "sections": [
          {
            "type": "intro",
            "text": "Бірманське письмо складається з круглих, заокруглених форм — таку форму літерам надали навмисно, щоб не проривати листя пальми, на якому писали загостреним стилем до появи паперу.",
            "en": {
              "text": "Burmese script consists of round, curved letterforms — deliberately shaped that way to avoid tearing the palm leaves that were written on with a sharp stylus before paper became common."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "မြန်မာစာ ဝိုင်းပုံဖြစ်သည်။",
                "Бірманське письмо кругле за формою."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Round-Shaped Script — A2"
      },
      {
        "id": "sentence-final-particle-tal",
        "title": "တယ်: ဝါကျအဆုံးအမှတ် — A1",
        "emoji": "🔚",
        "sections": [
          {
            "type": "intro",
            "text": "Кожне стверджувальне речення в теперішньому чи загальному часі обов'язково завершується часткою တယ် (tal) — без неї речення граматично незавершене, незалежно від того, скільки слів уже сказано.",
            "en": {
              "text": "Every declarative sentence in the present or general tense obligatorily ends with the particle တယ် (tal) — without it, the sentence is grammatically incomplete, no matter how many words have already been said."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "သူ စာဖတ်တယ်။",
                "Він/вона читає (буквально 'він читає-tal')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sentence-Final Particle: တယ် — A1"
      },
      {
        "id": "preguntas",
        "title": "မေးခွန်းများ — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання без питального слова заміняють завершальну частку တယ် на частку လား (lá), а не додають окреме питальне слово.",
            "en": {
              "text": "Yes/no questions replace the closing particle တယ် with the particle လား (lá), rather than adding a separate question word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "သူ စာဖတ်လား။",
                "Він/вона читає?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Questions — A1"
      }
    ]
  },
  {
    "id": "tenses",
    "title": "Часи та способи дієслова",
    "titleEn": "Tenses & Moods",
    "emoji": "⏰",
    "rules": [
      {
        "id": "present-general-tal",
        "title": "ယခုအချိန်: တယ် — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Загальний теперішній час чи факт передає частка တယ် (tal) у кінці речення — сам дієслівний корінь не змінюється за особою чи часом взагалі.",
            "en": {
              "text": "The general present or a fact is marked by the particle တယ် (tal) at the end of the sentence — the verb root itself never changes for person or tense at all."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ငါ ထမင်းစားတယ်။",
                "Я їм рис."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "General Present: တယ် — A1"
      },
      {
        "id": "past-tense-khe-tal",
        "title": "အတိတ်ကာလ: ခဲ့တယ် — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час позначається часткою ခဲ့ (khe), вставленою перед фінальною часткою တယ', — 'зробив' замість загального 'робить'.",
            "en": {
              "text": "The past tense is marked with the particle ခဲ့ (khe), inserted before the final particle tal — 'did' instead of the general 'does'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ငါ ထမင်းစားခဲ့တယ်။",
                "Я їв рис."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Tense: ခဲ့တယ် — A2"
      },
      {
        "id": "future-tense-mal",
        "title": "အနာဂတ်ကာလ: မယ် — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час чи намір передає частка မယ် (mal), яка заміняє загальну တယ' у кінці речення.",
            "en": {
              "text": "The future or intention is marked with the particle မယ် (mal), which replaces the general tal at the end of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ငါ ထမင်းစားမယ်။",
                "Я їстиму рис."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Tense: မယ် — A2"
      },
      {
        "id": "progressive-aspect-nay-tal",
        "title": "ဆက်တိုက်ဖြစ်စဉ်: နေတယ် — A1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в момент мовлення передається часткою နေ (nay), вставленою перед တယ' — 'саме зараз роблю'.",
            "en": {
              "text": "An action in progress at the moment of speaking is expressed with the particle နေ (nay), inserted before tal — 'am doing right now'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ငါ ထမင်းစားနေတယ်။",
                "Я саме їм рис."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Progressive: နေတယ် — A1"
      },
      {
        "id": "perfect-aspect-pi",
        "title": "ပြီးစီးမှု: ပြီ — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ပြီ (pi), ужита замість တယ' у кінці речення, позначає завершену дію з наголосом на теперішньому результаті — 'уже зроблено'.",
            "en": {
              "text": "The particle ပြီ (pi), used instead of tal at the end of the sentence, marks a completed action with emphasis on the present result — 'already done'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ငါ ထမင်းစားပြီ။",
                "Я вже поїв."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfect: ပြီ — B1"
      },
      {
        "id": "experiential-aspect-bu",
        "title": "အတွေ့အကြုံ: ဖူး — B1",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ဖူး (bu), вставлена перед фінальним маркером, виражає досвід, набутий колись у минулому, — 'бувало таке, що робив'.",
            "en": {
              "text": "The particle ဖူး (bu), inserted before the final marker, expresses an experience gained at some unspecified point in the past — 'have ever done'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ငါ ဂျပန်ကို သွားဖူးတယ်။",
                "Я колись бував в Японії."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Experiential: ဖူး — B1"
      },
      {
        "id": "imperative-mood-pa",
        "title": "အမိန့်: ပါ — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказ пом'якшується часткою ပါ (pa) у кінці речення — без неї наказ звучить різко чи навіть грубо в буденному мовленні.",
            "en": {
              "text": "A command is softened with the particle ပါ (pa) at the end of the sentence — without it, an order sounds blunt or even rude in everyday speech."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ထိုင်ပါ။",
                "Сідайте, будь ласка."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imperative: ပါ — A2"
      },
      {
        "id": "prohibitive-mood-ma-nge",
        "title": "တားမြစ်ခြင်း: မ...နဲ့ — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заборона утворюється циркумфіксом မ...နဲ့ — частка မ перед дієсловом і частка နဲ့ у кінці речення, обидві одночасно.",
            "en": {
              "text": "A prohibition is formed with the circumfix မ...နဲ့ — the particle မ before the verb and the particle နဲ့ at the end of the sentence, both at once."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "မသွားနဲ့။",
                "Не йди!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Prohibitive: မ...နဲ့ — A2"
      },
      {
        "id": "negative-general-ma-bu",
        "title": "ငြင်းဆိုချက်: မ...ဘူး — A1",
        "emoji": "🙅",
        "sections": [
          {
            "type": "intro",
            "text": "Звичайне заперечення теж утворюється циркумфіксом: မ перед дієсловом і ဘူး у кінці замість фінальної частки часу.",
            "en": {
              "text": "Ordinary negation is also formed with a circumfix: မ before the verb and ဘူး at the end, replacing the final tense particle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ငါ ထမင်းမစားဘူး။",
                "Я не їм рис."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation: မ...ဘူး — A1"
      },
      {
        "id": "conditional-mood-yin",
        "title": "အကယ်၍: ရင် — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовна частка ရင်/လျှင် (yin), приєднана прямо до дієслова підрядного речення, означає 'якщо' — без окремого сполучникового слова на початку.",
            "en": {
              "text": "The conditional particle ရင်/လျှင် (yin), attached directly to the subordinate clause's verb, means 'if' — with no separate conjunction word at the start."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "မိုးရွာရင် အိမ်မှာနေမယ်။",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: ရင် — B1"
      },
      {
        "id": "potential-mood-nai",
        "title": "စွမ်းနိုင်မှု: နိုင် — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість позначає частка နိုင် (nai), вставлена одразу після дієслівного кореня, перед фінальним маркером часу.",
            "en": {
              "text": "Ability or possibility is marked with the particle နိုင် (nai), inserted right after the verb root, before the final tense marker."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ငါ မြန်မာလို ပြောနိုင်တယ်။",
                "Я вмію говорити бірманською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential: နိုင် — B1"
      },
      {
        "id": "desiderative-mood-chin",
        "title": "အလိုရှိမှု: ချင် — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажання виражає частка ချင် (chin), вставлена одразу після дієслівного кореня, — 'хотіти зробити щось'.",
            "en": {
              "text": "A wish is expressed with the particle ချင် (chin), inserted right after the verb root — 'to want to do something'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ငါ ထမင်းစားချင်တယ်။",
                "Я хочу їсти рис."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Desiderative: ချင် — A2"
      },
      {
        "id": "habitual-aspect-tat",
        "title": "အလေ့အထ: တတ် — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звичну дію позначає частка တတ် (tat), вставлена одразу після дієслівного кореня, — 'зазвичай робить, має звичку'.",
            "en": {
              "text": "A habitual action is marked with the particle တတ် (tat), inserted right after the verb root — 'usually does, has the habit of'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "သူ စောစောထတတ်တယ်။",
                "Він зазвичай встає рано."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Habitual: တတ် — B1"
      }
    ]
  },
  {
    "id": "grammar",
    "title": "Граматика",
    "titleEn": "Grammar",
    "emoji": "📖",
    "rules": [
      {
        "id": "subject-particle-ka-nge",
        "title": "ကတ္တားပုဒ်ပြ: က/ကို — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Частка က (ka), приєднана після підмета, позначає його граматичну роль — не відмінкове закінчення на самому слові, а окрема частка, що йде за ним.",
            "en": {
              "text": "The particle က (ka), attached after the subject, marks its grammatical role — not a case ending on the word itself, but a separate particle following it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ငါက စာဖတ်တယ်။",
                "Я (саме я) читаю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Subject Particle: က — A2"
      },
      {
        "id": "object-particle-ko",
        "title": "ကံပုဒ်ပြ: ကို — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ကို (ko), приєднана після прямого додатка, позначає його граматичну роль, особливо коли додаток означений чи одушевлений.",
            "en": {
              "text": "The particle ကို (ko), attached after the direct object, marks its grammatical role, especially when the object is definite or animate."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ငါ သူ့ကို မြင်တယ်။",
                "Я бачу його."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Object Particle: ကို — A2"
      },
      {
        "id": "topic-particle-tha",
        "title": "ခေါင်းစဉ်ပြ: တော့ — B1",
        "emoji": "🔝",
        "sections": [
          {
            "type": "intro",
            "text": "Частка တော့ (dó), приєднана після теми речення, виносить її на перший план і протиставляє чомусь іншому, — окрема функція від простого підмета.",
            "en": {
              "text": "The particle တော့ (dó), attached after the sentence's topic, foregrounds it and contrasts it with something else — a distinct function from a plain subject."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ငါတော့ သွားမယ်။",
                "Щодо мене, то я піду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Topic Particle: တော့ — B1"
      },
      {
        "id": "classifiers-counting-system",
        "title": "အရေအတွက်ပြပစ္စည်း — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Лічба предметів вимагає класифікатора, що узгоджується з категорією предмета — ယောက် для людей, ကောင် для тварин, ခု для загальних неживих предметів.",
            "en": {
              "text": "Counting objects requires a classifier agreeing with the item's category — ယောက် for people, ကောင် for animals, ခု for general inanimate objects."
            }
          },
          {
            "type": "table",
            "title": "Приклади класифікаторів",
            "rows": [
              [
                "လူ သုံးယောက် (три людини)",
                "класифікатор для людей"
              ],
              [
                "ကြောင် နှစ်ကောင် (два коти)",
                "класифікатор для тварин"
              ]
            ],
            "en": {
              "title": "Classifier Examples"
            }
          }
        ],
        "titleEn": "Numeral Classifiers — A2"
      },
      {
        "id": "no-default-plural-marking",
        "title": "အများကိန်း မပါဝင် — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники зазвичай не мають окремої форми множини — множинність випливає з контексту чи числівника, а не з суфікса на самому іменнику.",
            "en": {
              "text": "Nouns usually have no separate plural form — plurality is inferred from context or a numeral, not from a suffix on the noun itself."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "စာအုပ် (книга/книги, залежно від контексту)",
                "та сама форма для однини й множини"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "No Default Plural Marking — A1"
      },
      {
        "id": "plural-marker-tway",
        "title": "အများကိန်းပြ: တွေ — B1",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Коли множинність усе ж потрібно підкреслити, після іменника додають частку တွေ (twe) чи його формальніший варіант များ (mya).",
            "en": {
              "text": "When plurality does need emphasis, the particle တွေ (twe) or its more formal variant များ (mya) is added after the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "စာအုပ်တွေ",
                "книги (з підкресленою множинністю)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural Marker: တွေ — B1"
      },
      {
        "id": "demonstratives-di-ho",
        "title": "ညွှန်ပြစကား: ဒီ, ဟို — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівне ဒီ (di, 'цей') позначає близький предмет, ဟို (ho, 'он той') — далекий; обидва стоять перед іменником.",
            "en": {
              "text": "The demonstrative ဒီ (di, 'this') marks a near item, ဟို (ho, 'that over there') a far one; both stand before the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ဒီစာအုပ်",
                "ця книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Demonstratives: ဒီ, ဟို — A1"
      },
      {
        "id": "question-words",
        "title": "မေးခွန်းအသုံးအနှုန်း — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова ဘာ (що), ဘယ်သူ (хто), ဘယ်မှာ (де), ဘယ်တော့ (коли) зазвичай стоять на тому самому місці в реченні, де було б слово, яке вони заміняють.",
            "en": {
              "text": "The question words ဘာ (what), ဘယ်သူ (who), ဘယ်မှာ (where), ဘယ်တော့ (when) normally stand in the same sentence position the replaced word would occupy."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "နင် ဘယ်မှာ နေလဲ။",
                "Де ти живеш?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Question Words — A1"
      },
      {
        "id": "possessive-particle-yay",
        "title": "ပိုင်ဆိုင်မှုပြ: ရဲ့ — A2",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність передається часткою ရဲ့ (yay), приєднаною після власника, — 'мій' стає буквально 'я-присвійна частка'.",
            "en": {
              "text": "Possession is expressed with the particle ရဲ့ (yay), attached after the possessor — 'my' literally becomes 'I-possessive particle'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ငါ့ရဲ့ စာအုပ်",
                "моя книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessive Particle: ရဲ့ — A2"
      },
      {
        "id": "comparison-par",
        "title": "နှိုင်းယှဉ်ချက်: ထက် — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння вищого ступеня утворюється прикметником-дієсловом плюс частка ထက် ('ніж') після предмета порівняння — без окремого суфікса на прикметнику.",
            "en": {
              "text": "Comparison of superiority is formed with the stative verb/adjective plus the particle ထက် ('than') after the compared item — with no dedicated suffix on the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "သူ ငါ့ထက် မြင့်တယ်။",
                "Він вищий за мене."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparison with ထက် — A2"
      },
      {
        "id": "superlative-construction",
        "title": "အထွဋ်အထိပ်: အများဆုံး — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь додає слово အများဆုံး ('найбільше з усіх') перед прикметником-дієсловом.",
            "en": {
              "text": "The superlative adds the word အများဆုံး ('the most of all') before the stative verb/adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "သူ အများဆုံး မြင့်တယ်။",
                "Він найвищий."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative — B1"
      },
      {
        "id": "relative-clause-strategy",
        "title": "ဆွယ်ဆိုင်ဝါကျ: ပြင်ဆင်ဝိသေသနပုဒ် — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Замість відносного займенника дієслово з часткою минулого чи теперішнього стану ставиться прямо перед іменником, — ціле підрядне речення стискається в одне слово-означення.",
            "en": {
              "text": "Instead of a relative pronoun, a verb with a past- or present-state particle is placed right before the noun — a whole relative clause compressed into a single modifying word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ငါ ဖတ်ခဲ့တဲ့ စာအုပ်",
                "книга, яку я прочитав"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clause Strategy — B1"
      },
      {
        "id": "adjective-as-stative-verb",
        "title": "နာမဝိသေသန ကြိယာအဖြစ် — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники поводяться як окремий клас стативних дієслів — самі є присудком речення й приймають ті самі фінальні частки часу, що й звичайні дієслова.",
            "en": {
              "text": "Adjectives behave as a distinct class of stative verbs — they themselves serve as the predicate and take the same final tense particles as ordinary verbs."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "အိမ် ကြီးတယ်။",
                "Дім великий (буквально 'дім великіє')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjectives as Stative Verbs — A2"
      },
      {
        "id": "reduplication-intensity",
        "title": "ထပ်ခါထပ်ခါ ပြောဆိုခြင်း — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Подвоєння прикметника-дієслова підсилює його значення чи натякає на розмаїття, — граматична стратегія без окремого афікса.",
            "en": {
              "text": "Doubling a stative verb/adjective intensifies its meaning or hints at variety — a grammatical strategy with no dedicated affix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "လှလှ",
                "дуже гарний (посилене значення)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reduplication for Intensity — B1"
      },
      {
        "id": "compound-word-formation",
        "title": "စာလုံးပေါင်းစပ်ခြင်း — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова поєднують два корені в одне ціле, часто описуючи предмет через його функцію чи зовнішній вигляд.",
            "en": {
              "text": "Compound words join two roots into one unit, often describing an item through its function or appearance."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "စာ (текст) + အိမ် (дім) → စာအိမ် (пошта, буквально 'дім тексту')",
                "приклад складного слова"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Word Formation — B2"
      },
      {
        "id": "vocative-forms",
        "title": "ခေါ်ဆိုသောစကား — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Звертання часто вживає родинний термін чи титул замість імені, з часткою на кінці, що пом'якшує тон звертання.",
            "en": {
              "text": "Direct address often uses a kinship term or title instead of a name, with an ending particle softening the tone of address."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "မမေ!",
                "Старша сестро! (звертання)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vocative Forms — B1"
      },
      {
        "id": "word-order-sov",
        "title": "စကားလုံးအစီအစဉ်: SOV — A1",
        "emoji": "↔️",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-додаток-присудок, з дієсловом завжди в самому кінці речення разом з фінальною часткою.",
            "en": {
              "text": "The basic word order is subject-object-verb, with the verb always at the very end of the sentence together with the final particle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ငါ ထမင်းစားတယ်။",
                "Я їм рис (я-рис-їм)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Word Order: SOV — A1"
      },
      {
        "id": "negative-existential-mashibhu",
        "title": "မရှိဘူး: မရှိခြင်းပြ — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечне існування утворюється тим самим циркумфіксом мати...ဘူး, застосованим до дієслова ရှိ ('існувати').",
            "en": {
              "text": "Negative existence is formed with the same ma...ဘူး circumfix applied to the verb ရှိ ('to exist')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ငွေ မရှိဘူး။",
                "Немає грошей."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negative Existence: မရှိဘူး — A2"
      },
      {
        "id": "numeral-cardinal",
        "title": "အခြေခံကိန်းဂဏန်း — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Кількісні числівники мають власні бірманські корені й завжди вживаються з класифікатором після іменника.",
            "en": {
              "text": "Cardinal numbers have their own Burmese roots and are always used with a classifier after the noun."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "တစ်, နှစ်, သုံး",
                "один, два, три"
              ]
            ],
            "en": {
              "title": "Numbers"
            }
          }
        ],
        "titleEn": "Cardinal Numbers — A1"
      },
      {
        "id": "numeral-ordinal",
        "title": "အစဉ်လိုက်ကိန်းဂဏန်း: အ...မြောက် — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються циркумфіксом အ...မြောက်, що обрамляє кількісний числівник.",
            "en": {
              "text": "Ordinal numbers are formed with the circumfix အ...မြောက်, enclosing the cardinal number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "အတတိယမြောက်",
                "третій"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ordinal Numbers: အ...မြောက် — A2"
      },
      {
        "id": "honorific-vocabulary-basic",
        "title": "ရိုသေလေးစားသောစကားလုံး — B1",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Окремий шар шанобливої лексики вживається при зверненні до старших, монахів чи офіційних осіб — власні слова замість буденних відповідників для 'їсти', 'спати', 'йти'.",
            "en": {
              "text": "A separate layer of honorific vocabulary is used when addressing elders, monks, or officials — dedicated words instead of the everyday equivalents for 'to eat', 'to sleep', 'to go'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ဆွမ်းကပ် (шанобливо 'їсти' щодо монаха, не буденне 'စား')",
                "шаноблива лексика"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Basic Honorific Vocabulary — B1"
      },
      {
        "id": "kinship-terms-elaborate",
        "title": "ဆွေမျိုးအမည်များ — B1",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Родинні терміни часто заміняють особові займенники в розмові, розрізняючи родичів за відносним віком і стороною сім'ї.",
            "en": {
              "text": "Kinship terms often replace personal pronouns in conversation, distinguishing relatives by relative age and side of the family."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "အကို (старший брат) vs ညီ (молодший брат)",
                "розрізнення за відносним віком"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Elaborate Kinship Terminology — B1"
      },
      {
        "id": "locative-particle-hma",
        "title": "နေရာပြ: မှာ — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Частка မှာ (hma), приєднана після іменника місця, позначає локативне значення — 'у, на, при'.",
            "en": {
              "text": "The particle မှာ (hma), attached after a place noun, marks locative meaning — 'in, at, on'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "အိမ်မှာ",
                "вдома"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Locative Particle: မှာ — A2"
      },
      {
        "id": "instrumental-comitative-particle-nge",
        "title": "ကိရိယာပြ: နဲ့ — A2",
        "emoji": "🛠️",
        "sections": [
          {
            "type": "intro",
            "text": "Частка နဲ့ (nge) одночасно позначає знаряддя дії й супровід — 'чим' і 'з ким' одним і тим самим словом, залежно від контексту.",
            "en": {
              "text": "The particle နဲ့ (nge) simultaneously marks the instrument of an action and accompaniment — 'with what' and 'with whom', with the same word, depending on context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ခဲတံနဲ့ ရေးတယ်။",
                "Пишу олівцем."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Instrumental/Comitative Particle: နဲ့ — A2"
      },
      {
        "id": "kyi-particle-purpose",
        "title": "ရည်ရွယ်ချက်ပြ: ဖို့ — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ဖို့ (bo), приєднана до дієслова, вводить мету дії — 'щоб', без окремого сполучникового слова.",
            "en": {
              "text": "The particle ဖို့ (bo), attached to a verb, introduces the purpose of an action — 'in order to', with no separate conjunction word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ငါ စာဖတ်ဖို့ လာတယ်။",
                "Я прийшов, щоб читати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Purpose Particle: ဖို့ — B1"
      },
      {
        "id": "monastic-royal-honorific-vocabulary",
        "title": "ရဟန်းတော်နှင့်မင်းမျိုးစကားလုံး — B2",
        "emoji": "🛕",
        "sections": [
          {
            "type": "intro",
            "text": "Мова щодо буддійських монахів уживає повністю окремий словник — 'їсти', 'спати', 'ходити', 'помирати' монаха називаються геть іншими словами, ніж для звичайної людини, а історичний королівський регістр зберіг ще детальнішу, нині майже архаїчну лексику.",
            "en": {
              "text": "Language about Buddhist monks uses an entirely separate vocabulary — a monk's 'eating', 'sleeping', 'walking', 'dying' are called by completely different words than for an ordinary person, and the historical royal register preserved an even more elaborate, now nearly archaic vocabulary."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ပျံတော်မူ (шанобливо 'йти' щодо монаха, зовсім інше слово)",
                "монастирська шаноблива лексика"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Monastic and Royal Honorific Vocabulary — B2"
      },
      {
        "id": "particle-stacking-fixed-order",
        "title": "အနက်ပြစကားလုံးများ စီစဉ်ခြင်း — B2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька часток аспекту, модальності й ввічливості можуть поєднуватися навколо одного дієслова в чіткому фіксованому порядку — кожна на своєму місці, ближче чи далі від кореня.",
            "en": {
              "text": "Several aspect, modal, and politeness particles can combine around a single verb in a strict fixed order — each in its own slot, closer to or farther from the root."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "သွားချင်နေတယ်။ (бажання + тривалість + фінальна частка, три поспіль)",
                "Мені весь час хочеться йти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Particle Stacking Order — B2"
      },
      {
        "id": "politeness-particle-pa-mid-sentence",
        "title": "ယဉ်ကျေးမှုပြ: ပါ အလယ်တွင် — B1",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ပါ вживається не лише в кінці наказу, а й усередині речення, одразу після дієслівного кореня, — ввічливість, вбудована прямо в саму дієслівну структуру, а не лише додана в кінці.",
            "en": {
              "text": "The particle ပါ is used not only at the end of a command but also mid-sentence, right after the verb root — politeness built directly into the verb structure, not just tacked on at the end."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ငါ သွားပါတယ်။ (ввічлива, не проста форма)",
                "Я йду (ввічливо)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Politeness Particle ပါ Mid-Sentence — B1"
      },
      {
        "id": "classifier-depth-monks-royalty",
        "title": "ရဟန်းတော်များအတွက် အရေအတွက်ပြပစ္စည်း — B2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Лічба ченців вимагає особливого шанобливого класифікатора ပါး, відмінного від класифікатора ယောက', вживаного для звичайних людей.",
            "en": {
              "text": "Counting monks requires a special honorific classifier ပါး, distinct from the classifier ယောက်, used for ordinary people."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ဘုန်းကြီး သုံးပါး (три монахи, шанобливий класифікатор)",
                "класифікатор для ченців"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Special Classifier for Monks — B2"
      },
      {
        "id": "pali-sanskrit-buddhist-vocabulary",
        "title": "ပါဠိနှင့်သက္ကတစကားလုံးများ — B1",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Буддійська релігійна й філософська лексика запозичена з палі й санскриту — окремий шар, відмінний від питомої бірманської й пізніших запозичень з англійської.",
            "en": {
              "text": "Buddhist religious and philosophical vocabulary is borrowed from Pali and Sanskrit — a separate layer, distinct from native Burmese and later English borrowings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "နိဗ္ဗာန် (нірвана) — з палі",
                "палійське релігійне запозичення"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pali/Sanskrit Buddhist Vocabulary — B1"
      },
      {
        "id": "code-switching-english-loanwords",
        "title": "အင်္ဂလိပ်စကားလုံးများ ရောနှောသုံးခြင်း — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "У міському й освіченому мовленні типове перемикання кодів усередині одного речення — граматичний каркас бірманський, а частина лексики чи цілі фрази вставляються з англійської без адаптації.",
            "en": {
              "text": "Urban, educated speech typically code-switches within a single sentence — the grammatical frame is Burmese, while chunks of vocabulary or whole phrases are inserted from English without adaptation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ငါ office မှာ ရှိတယ်။",
                "Я в офісі (English office вставлене напряму)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "English Code-Switching — B2"
      },
      {
        "id": "traditional-vs-arabic-numerals",
        "title": "မြန်မာဂဏန်းနှင့် အာရဗီဂဏန်း — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Бірманська має власну систему цифрових знаків, повністю відмінну від арабських цифр, — обидві системи вживаються паралельно, залежно від контексту.",
            "en": {
              "text": "Burmese has its own numeral digit system, entirely different from Arabic numerals — both systems are used in parallel, depending on context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "၁၂၃ (бірманські цифри) = 123 (арабські цифри)",
                "паралельні системи цифр"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Traditional Burmese Numerals vs. Arabic — B1"
      },
      {
        "id": "script-medial-consonant-stacking",
        "title": "အလယ်ကဗျည်းတွဲစာလုံးများ — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Медіальні приголосні (y, r, w, h) позначаються спеціальними невеличкими символами, приєднаними до основної літери зверху, знизу чи збоку, а не окремим буквенним знаком у рядку.",
            "en": {
              "text": "Medial consonants (y, r, w, h) are marked with special small symbols attached to the base letter above, below, or beside it, rather than as a separate letter sign in the line."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ကျ (k + медіальний y, злитий знак)",
                "медіальний приголосний, приєднаний до основної літери"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Script: Medial Consonant Marks — B2"
      },
      {
        "id": "dialectal-variation-rakhine-tavoyan",
        "title": "ရခိုင်နှင့်ထားဝယ်ဒေသိယစကား — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Ракхайнська (араканська) говірка заходу й тавойська говірка півдня розходяться з бірманським стандартом настільки в тонах і лексиці, що частина лінгвістів вважає їх окремими, хоч і близькоспорідненими мовами.",
            "en": {
              "text": "The western Rakhine (Arakanese) and southern Tavoyan varieties diverge from the Burmese standard so much in tone and vocabulary that some linguists consider them separate, though closely related, languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ракхайнська зберігає деякі старіші тонові розрізнення, втрачені в стандартній бірманській.",
                "діалектна дивергенція"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Rakhine and Tavoyan Dialect Variation — B2"
      },
      {
        "id": "topic-comment-sentence-structure",
        "title": "ခေါင်းစဉ်-ရှင်းလင်းချက် ဖွဲ့စည်းပုံ — B1",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Речення часто будується як 'тема-коментар': тема, про яку йдеться, виноситься на початок з часткою тема, а решта речення коментує чи описує її.",
            "en": {
              "text": "A sentence is often built as 'topic-comment': the topic being discussed is fronted with the topic particle, and the rest of the sentence comments on or describes it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ဒီစာအုပ်တော့ ကောင်းတယ်။",
                "Ця книга — вона хороша (тема винесена наперед)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Topic-Comment Structure — B1"
      },
      {
        "id": "converb-sequential-pi",
        "title": "အစဉ်လိုက်ဆက်စပ်ခြင်း: ပြီး — B1",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ပြီး (pí), додана після дієслова, зв'язує послідовні дії в реченні без окремого сполучника 'і' — 'зробивши це, потім...'.",
            "en": {
              "text": "The particle ပြီး (pí), added after a verb, links sequential actions in a sentence with no separate conjunction 'and' — 'having done this, then...'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ထမင်းစားပြီး အိပ်ရာဝင်တယ်။",
                "Я поїв і ліг спати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sequential Converb: ပြီး — B1"
      },
      {
        "id": "causative-construction-hce",
        "title": "စေတွန်းအားပေးမှု: ခိုင်း/စေ — B2",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Каузацію ('змушувати щось зробити') передають допоміжними дієсловами ခိုင်း чи စေ, поставленими після смислового дієслова, — без окремого граматичного суфікса.",
            "en": {
              "text": "Causation ('to make someone do something') is expressed with the auxiliary verbs ခိုင်း or စေ, placed after the meaning verb — with no dedicated grammatical suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ငါ သူ့ကို သွားခိုင်းတယ်။",
                "Я змусив його піти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Causative Construction: ခိုင်း/စေ — B2"
      },
      {
        "id": "passive-like-strategies",
        "title": "ကတ္တားဝါကျအစား အသုံးအနှုန်းများ — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "У бірманській немає окремого граматичного пасивного стану — потрібну увагу до постраждалого предмета передають зміною порядку слів чи безособовою конструкцією, а не спеціальним дієслівним закінченням.",
            "en": {
              "text": "Burmese has no dedicated grammatical passive voice — the needed focus on the affected item is conveyed by word-order shift or an impersonal construction, not a special verb ending."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "အိမ် ပျက်စီးတယ်။ (стан речі, без вказівки на винуватця)",
                "Дім зруйнований."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive-Like Strategies — B2"
      },
      {
        "id": "double-negative-emphasis",
        "title": "ငြင်းဆိုချက်ကိုအလေးပေးခြင်း — B1",
        "emoji": "❌",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення підсилюється словом လုံးဝ ('зовсім') перед заперечним циркумфіксом — 'зовсім не, ніскілечки не', сильніше за просте заперечення.",
            "en": {
              "text": "Negation is intensified with the word လုံးဝ ('at all') before the negative circumfix — 'not at all, not in the slightest', stronger than plain negation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "လုံးဝ မသိဘူး။",
                "Я взагалі нічого не знаю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Emphatic Negation — B1"
      },
      {
        "id": "religious-object-classifiers",
        "title": "ဘာသာရေးပစ္စည်းများအတွက် အရေအတွက်ပြ — B2",
        "emoji": "🛕",
        "sections": [
          {
            "type": "intro",
            "text": "Священні предмети — статуї Будди, пагоди — рахуються особливим класифікатором ဆူ, відмінним від класифікатора звичайних предметів ခု.",
            "en": {
              "text": "Sacred objects — Buddha statues, pagodas — are counted with the special classifier ဆူ, distinct from the ordinary-object classifier ခု."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ဘုရား သုံးဆူ (три статуї Будди)",
                "класифікатор для священних предметів"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Classifier for Religious Objects — B2"
      },
      {
        "id": "time-expression-particles",
        "title": "အချိန်ပြစကားလုံးများ — B1",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Вираження часу доби вживає власну систему частинок, відмінну від звичайної лічби, — окремий словниковий набір для годин, днів і місяців.",
            "en": {
              "text": "Time-of-day expressions use their own particle system, distinct from ordinary counting — a separate vocabulary set for hours, days, and months."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "သုံးနာရီ",
                "о третій годині"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Time Expression Particles — B1"
      },
      {
        "id": "avoiding-direct-you-kinship-titles",
        "title": "'နင်' ရှောင်ရှားခြင်း — B2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Пряме звертання 'ти' (нин) вважається грубим щодо старших чи незнайомих, тож замість нього вживають родинний термін, титул чи навіть власне ім'я співрозмовника.",
            "en": {
              "text": "Direct 'you' (nin) is considered blunt toward elders or strangers, so a kinship term, title, or even the addressee's own name is used instead."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ဆရာ လာမလား။ (буквально 'учитель прийде?', замість 'ти прийдеш?')",
                "уникнення прямого 'ти'"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Avoiding Direct 'You' — B2"
      },
      {
        "id": "verb-serialization-direction-result",
        "title": "ကြိယာအဆက်ဆက် — B2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Два дієслова поспіль без сполучника описують одну складену подію — перше дієслово способу, друге напрямку чи результату.",
            "en": {
              "text": "Two verbs in a row with no conjunction describe one compound event — the first verb of manner, the second of direction or result."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ငါ ပြေးထွက်တယ်။",
                "Я вибіг (буквально 'бігти-вийти')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Serial Verb Constructions — B2"
      },
      {
        "id": "numeral-classifier-monks-depth",
        "title": "ရဟန်းတော်များ အတွက်အရေအတွက်ပြထပ်ဆင့် — B2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Класифікатор для ченців ပါး також уживається для абстрактніших релігійних понять, як-от заповіді чи чесноти, — семантичне поширення класифікатора за межі буквальної лічби людей.",
            "en": {
              "text": "The monk classifier ပါး is also used for more abstract religious concepts, like precepts or virtues — a semantic extension of the classifier beyond literal counting of people."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ငါးပါးသီလ (п'ять заповідей, той самий класифікатор)",
                "розширене вживання класифікатора"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Monk Classifier: Extended Use — B2"
      },
      {
        "id": "formal-informal-register-lexical-doublets",
        "title": "စာရေးဘာသာနှင့် ပြောဆိုဘာသာ — B2",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Для багатьох понять існує пара слів — формальне, книжкове, і повсякденне, розмовне, — вибір між ними задає рівень офіційності всього висловлювання.",
            "en": {
              "text": "For many concepts there's a word pair — a formal, literary one and an everyday, colloquial one — the choice between them sets the formality level of the whole utterance."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "စားသုံးသည် (формальне 'споживати') vs စားတယ် (буденне 'їсти')",
                "'їсти' у двох регістрах"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Formal/Informal Lexical Doublets — B2"
      },
      {
        "id": "emphatic-particle-tot",
        "title": "အလေးပေးသောစကားလုံး: ပဲ — B1",
        "emoji": "💯",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ပဲ (pe), додана після будь-якого слова, підкреслює виключність чи наголос — 'саме, тільки', виключаючи альтернативи.",
            "en": {
              "text": "The particle ပဲ (pe), added after any word, emphasizes exclusivity or focus — 'exactly, only', ruling out alternatives."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "သူပဲ လာတယ်။",
                "Саме він і прийшов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Emphatic Particle: ပဲ — B1"
      },
      {
        "id": "address-terms-social-hierarchy",
        "title": "လူမှုအဆင့်အတန်းအလိုက် ခေါ်ဆိုမှု — B2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Крім вибору займенника, соціальну ієрархію передають ще й окремі титульні звертання перед іменем — професійний чи адміністративний титул визначає, як до людини звертатимуться в будь-якій розмові.",
            "en": {
              "text": "Besides pronoun choice, social hierarchy is also expressed through dedicated title terms placed before a name — a professional or administrative title determines how a person will be addressed in any conversation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ဦးဘသန်း (пане Ба Тан, титул перед іменем)",
                "звертання, що відображає статус"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Address Terms and Social Hierarchy — B2"
      },
      {
        "id": "loanword-adaptation-phonology",
        "title": "ချေးငှားစကားလုံးများ အသံထွက်လိုက်လျောညီထွေဖြစ်ခြင်း — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Запозичені слова, потрапивши в мову, адаптуються до бірманської складової структури й тонової системи, а не зберігають вихідну вимову без змін.",
            "en": {
              "text": "Loanwords, once they enter the language, are adapted to Burmese syllable structure and tone system, rather than keeping their original pronunciation unchanged."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ကားရ် (не 'car', адаптована бірманська вимова з тоном)",
                "фонологічно адаптоване запозичення"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Phonological Adaptation of Loanwords — B1"
      },
      {
        "id": "fixed-idiomatic-expressions",
        "title": "ဗန်းစကားအသုံးအနှုန်းများ — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Численні застиглі ідіоми вживаються цілими блоками з переносним значенням, не виведеним з буквального перекладу окремих слів.",
            "en": {
              "text": "Numerous fixed idioms are used as whole blocks with a figurative meaning not derived from the literal translation of the individual words."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ခေါင်းပေါ်စီးတယ်။ (буквально 'сидить на голові' → зловживає добротою)",
                "застигла ідіома"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Idiomatic Expressions — B2"
      }
    ]
  },
  {
    "id": "exceptions",
    "title": "Виключення",
    "titleEn": "Exceptions",
    "emoji": "⚡",
    "rules": [
      {
        "id": "irregular-verbs-common",
        "title": "ပုံမှန်မဟုတ်သောကြိယာများ — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частовживаних дієслів мають особливі скорочені чи злиті форми в поєднанні з певними частками, що не виводяться регулярно.",
            "en": {
              "text": "A few common verbs have special shortened or fused forms when combined with certain particles, which can't be regularly derived."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "လာ (приходити) + ခဲ့ → злита нерегулярна вимова в швидкому мовленні",
                "нерегулярне злиття частки з коренем"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs — B1"
      },
      {
        "id": "irregular-classifier-assignment",
        "title": "မမှန်သောအရေအတွက်ပြပစ္စည်း — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька предметів отримують несподіваний класифікатор, що не відповідає жодній із очікуваних семантичних категорій, — суто традиційний виняток.",
            "en": {
              "text": "A few items take an unexpected classifier that doesn't match any of the expected semantic categories — a purely traditional exception."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Деякі культурно значущі предмети мають власний, історично закріплений класифікатор.",
                "нерегулярний класифікатор за традицією"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Classifier Assignment — B2"
      },
      {
        "id": "fixed-proverbs-archaic-grammar",
        "title": "စကားပုံများတွင် ရှေးဟောင်းသဒ္ဒါ — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Прислів'я зберігають архаїчну граматичну структуру й лексику, вже втрачену в живій мові, і вживаються цілими блоками без граматичного розбору.",
            "en": {
              "text": "Proverbs preserve archaic grammatical structure and vocabulary already lost from the living language, and are used as whole blocks with no grammatical analysis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ရေတွင်းတူး၍ ရေမသောက်နှင့်။",
                "Не копай колодязь, якщо не питимеш воду (застигла приказка з архаїчними формами)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Archaic Grammar in Proverbs — B2"
      }
    ]
  }
];
