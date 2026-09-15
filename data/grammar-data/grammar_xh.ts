// Vymova — data/grammar-data/grammar_xh.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_XH: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Izabizwana Zobuqu — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Кхоса, як і зулу, не має граматичного роду — займенник \"yena\" однаково означає і \"він\", і \"вона\".",
            "en": {
              "text": "Xhosa, like Zulu, has no grammatical gender — the pronoun \"yena\" means both \"he\" and \"she\"."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "mna"
              ],
              [
                "ти",
                "wena"
              ],
              [
                "він / вона",
                "yena"
              ],
              [
                "ми",
                "thina"
              ],
              [
                "ви",
                "nina"
              ],
              [
                "вони",
                "bona"
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
        "id": "click-consonants",
        "title": "Izikhamiso Zokutyefuza — B1",
        "emoji": "👅",
        "sections": [
          {
            "type": "intro",
            "text": "Кхоса запозичила з мов койсан (сан і кхоі) три типи клацних приголосних — зубний (c), боковий (x) і піднебінний (q) — риса, яка визначає звучання мови й відсутня в більшості банту мов, окрім кількох сусідніх нгуні.",
            "en": {
              "text": "Xhosa borrowed from Khoisan languages (San and Khoi) three types of click consonants — dental (c), lateral (x), and palatal (q) — a feature that defines the sound of the language and is absent from most Bantu languages except a few neighboring Nguni ones."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "icawa (зубний клац c), ixesha (боковий клац x), iqanda (піднебінний клац q)",
                "church (dental click), time (lateral click), egg (palatal click)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Click Consonants — B1"
      },
      {
        "id": "click-consonant-combinations",
        "title": "Iindibaniselwano Zokutyefuza — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Кожен із трьох клацних звуків поєднується з фонацією (дзвінка gc/gx/gq, придихова ch/xh/qh, назалізована nc/nx/nq), утворюючи дев'ять окремих клацних літер — значно багатшу систему, ніж проста наявність клацних як така.",
            "en": {
              "text": "Each of the three click sounds combines with phonation (voiced gc/gx/gq, aspirated ch/xh/qh, nasalized nc/nx/nq), producing nine distinct click letters — a much richer system than the mere presence of clicks alone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "gqirha (придихово-піднебінний qh, 'лікар')",
                "gqirha ('doctor', aspirated palatal click)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Click Consonant Combinations — B2"
      },
      {
        "id": "hlonipha-avoidance-speech",
        "title": "Ukuhlonipha — B2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Укухлоніпха — традиційний звичай мовної поваги, за яким заміжня жінка уникає вимовляти звуки чи склади, присутні в іменах свого свекра й чоловікової рідні, замінюючи їх іншими словами, — окремий соціолінгвістичний регістр.",
            "en": {
              "text": "Ukuhlonipha is a traditional custom of linguistic respect in which a married woman avoids pronouncing sounds or syllables present in her father-in-law's and husband's relatives' names, substituting other words — a distinct sociolinguistic register."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "isihlonipho sabafazi (мова поваги заміжніх жінок)",
                "isihlonipho sabafazi (the respect-language of married women)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ukuhlonipha: Avoidance Speech — B2"
      },
      {
        "id": "nguni-noun-class-overview",
        "title": "Iindidi Zamabizo — B1",
        "emoji": "🗂️",
        "sections": [
          {
            "type": "intro",
            "text": "Кхоса має систему іменникових класів нгуні-банту з префіксами (umu-/aba-, isi-/izi-, in-/izin- тощо), відмінними від суахілі чи чева, — вже частково розглянуту в спорідненій зулу, хоч сама кхоса має власний набір алофонів і специфічних класових пар.",
            "en": {
              "text": "Xhosa has a Nguni-Bantu noun-class system with prefixes (umu-/aba-, isi-/izi-, in-/izin-, etc.), distinct from Swahili's or Chewa's — partly comparable to the closely related Zulu, though Xhosa has its own set of allophones and specific class pairings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "umntu (людина, клас 1) → abantu (люди, клас 2)",
                "person (class 1) → people (class 2)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Nguni Noun Class System — B1"
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
        "id": "present-tense-subject-concord",
        "title": "Present Tense: Subject Concord — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється підметовим узгоджувальним префіксом (concord), доданим безпосередньо до дієслівної основи, без окремого допоміжного дієслова.",
            "en": {
              "text": "The present tense is formed with a subject concord prefix, added directly to the verb stem, without a separate auxiliary verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndiyabhala.",
                "Я пишу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Tense: Subject Concord — A1"
      },
      {
        "id": "past-tense-a",
        "title": "Past Tense: -a — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час позначається зміною кінцевого голосного основи на -a плюс минулий узгоджувальний префікс, відмінний від теперішнього.",
            "en": {
              "text": "The past tense is marked by changing the stem's final vowel to -a plus a past-tense subject concord, distinct from the present."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndabhala.",
                "Я написав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Tense: -a — A2"
      },
      {
        "id": "future-tense-ya",
        "title": "Future Tense: -ya ku- — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється допоміжною часткою -ya плюс інфінітивний префікс ku-, поставленим перед основою дієслова.",
            "en": {
              "text": "The future tense is formed with the auxiliary particle -ya plus the infinitive prefix ku-, placed before the verb stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndiya kubhala.",
                "Я писатиму."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Tense: -ya ku- — A2"
      },
      {
        "id": "present-progressive-sa",
        "title": "Present Progressive: -sa- — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в теперішньому передається інфіксом -sa- ('все ще'), вставленим між підметовим префіксом і основою.",
            "en": {
              "text": "An ongoing present action is expressed with the infix -sa- ('still'), inserted between the subject prefix and the stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndisabhala.",
                "Я ще пишу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Progressive: -sa- — B1"
      },
      {
        "id": "remote-past-tense",
        "title": "Remote Past Tense — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Далеке минуле (події, віддалені в часі) позначається окремою формою з подовженим інфіксом, відмінною від нещодавнього минулого.",
            "en": {
              "text": "The remote past (events distant in time) is marked with a separate form using an extended infix, distinct from the recent past."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndaye ndibhala.",
                "Я писав (давно тому)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Remote Past Tense — B1"
      },
      {
        "id": "perfect-tense-ile",
        "title": "Perfect Tense: -ile — B1",
        "emoji": "✔️",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект утворюється суфіксом -ile, доданим до основи дієслова, наголошуючи на теперішньому результаті завершеної дії.",
            "en": {
              "text": "The perfect is formed with the suffix -ile, added to the verb stem, emphasizing the present result of a completed action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndibhalile.",
                "Я вже написав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfect Tense: -ile — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Imperative Mood — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб для однини — гола основа дієслова, для множини — суфікс -ni, доданий до основи.",
            "en": {
              "text": "The imperative for singular is the bare verb stem; for plural, the suffix -ni is added to the stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bhala! / Bhalani!",
                "Пиши! / Пишіть!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imperative Mood — A2"
      },
      {
        "id": "subjunctive-mood-e",
        "title": "Subjunctive Mood: -e — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Кон'юнктив змінює кінцевий голосний основи на -e й уживається після дієслів волевиявлення чи в послідовних діях.",
            "en": {
              "text": "The subjunctive changes the stem's final vowel to -e and is used after verbs of volition or in sequential actions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndifuna ukuba abhale.",
                "Я хочу, щоб він написав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Subjunctive Mood: -e — B1"
      },
      {
        "id": "conditional-ukuba",
        "title": "Conditional: ukuba — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться сполучником ukuba ('якщо'), поставленим на початку підрядного речення.",
            "en": {
              "text": "A conditional sentence is introduced with the conjunction ukuba ('if'), placed at the start of the subordinate clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ukuba kunetha, ndiya kuhlala ekhaya.",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: ukuba — B1"
      },
      {
        "id": "habitual-aspect-hlala",
        "title": "Habitual Aspect: -hlala- — B2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звична дія виражається допоміжним дієсловом hlala ('сидіти/зазвичай'), поставленим перед основним дієсловом у формі кон'юнктива.",
            "en": {
              "text": "A habitual action is expressed with the auxiliary verb hlala ('to sit/usually'), placed before the main verb in the subjunctive form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndihlala ndibhala.",
                "Я зазвичай пишу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Habitual Aspect: -hlala- — B2"
      },
      {
        "id": "negation-present-andi",
        "title": "Negation (Present): a-...-i — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення в теперішньому часі утворюється циркумфіксом: префікс a- перед підметовим узгодженням і суфікс -i замість кінцевого -a.",
            "en": {
              "text": "Present-tense negation is formed with a circumfix: the prefix a- before the subject concord and the suffix -i replacing the final -a."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Andibhali.",
                "Я не пишу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation (Present): a-...-i — A2"
      },
      {
        "id": "negation-past-anga",
        "title": "Negation (Past): a-...-anga — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення в минулому часі утворюється префіксом a- плюс суфіксом -anga, доданим до основи замість -a.",
            "en": {
              "text": "Past-tense negation is formed with the prefix a- plus the suffix -anga, added to the stem instead of -a."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Andibhalanga.",
                "Я не написав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation (Past): a-...-anga — B1"
      },
      {
        "id": "potential-nako",
        "title": "Potential: -nako — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість виражається допоміжним дієсловом -nako ('могти'), поставленим після дієслова в кон'юнктиві.",
            "en": {
              "text": "Ability or possibility is expressed with the auxiliary verb -nako ('to be able'), placed after the verb in the subjunctive."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndinako ukubhala.",
                "Я можу писати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential: -nako — B1"
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
        "id": "noun-class-prefixes-1-2",
        "title": "Noun Classes 1/2: umu-/aba- — A2",
        "emoji": "👤",
        "sections": [
          {
            "type": "table",
            "title": "Класи 1/2 (люди)",
            "rows": [
              [
                "людина",
                "umntu"
              ],
              [
                "люди",
                "abantu"
              ]
            ],
            "en": {
              "title": "Classes 1/2 (people)"
            }
          }
        ],
        "titleEn": "Noun Classes 1/2: umu-/aba- (People) — A2"
      },
      {
        "id": "noun-class-prefixes-7-8",
        "title": "Noun Classes 7/8: isi-/izi- — A2",
        "emoji": "📦",
        "sections": [
          {
            "type": "table",
            "title": "Класи 7/8 (речі)",
            "rows": [
              [
                "річ",
                "into"
              ],
              [
                "мова",
                "isiXhosa"
              ]
            ],
            "en": {
              "title": "Classes 7/8 (things/languages)"
            }
          }
        ],
        "titleEn": "Noun Classes 7/8: isi-/izi- — A2"
      },
      {
        "id": "noun-class-prefixes-9-10",
        "title": "Noun Classes 9/10: in-/izin- — A2",
        "emoji": "🐄",
        "sections": [
          {
            "type": "table",
            "title": "Класи 9/10 (тварини)",
            "rows": [
              [
                "корова",
                "inkomo"
              ],
              [
                "корови",
                "iinkomo"
              ]
            ],
            "en": {
              "title": "Classes 9/10 (animals)"
            }
          }
        ],
        "titleEn": "Noun Classes 9/10: in-/izin- — A2"
      },
      {
        "id": "subject-concord-agreement",
        "title": "Subject Concord Agreement — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово, прикметник і присвійник узгоджуються з підметом через узгоджувальний префікс, що змінюється залежно від іменникового класу підмета, — розлога концордна система.",
            "en": {
              "text": "The verb, adjective, and possessive all agree with the subject through a concord prefix that changes depending on the subject's noun class — an extensive concordial system."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Umntu uyabhala. Abantu bayabhala.",
                "The person writes. The people write. (concord changes with class)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Subject Concord Agreement — B1"
      },
      {
        "id": "object-concord",
        "title": "Object Concord — B2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Прямий додаток теж може бути позначений на дієслові окремим об'єктним узгоджувальним префіксом, вставленим безпосередньо перед основою.",
            "en": {
              "text": "The direct object can also be marked on the verb with a separate object concord prefix, inserted directly before the stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndiyambona.",
                "Я бачу його/її. (об'єктний концорд -m-)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Object Concord — B2"
      },
      {
        "id": "possessive-concord",
        "title": "Possessive Concord — B1",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійна конструкція узгоджується з класом означуваного іменника через префікс плюс частку -a, а не через окреме присвійне слово.",
            "en": {
              "text": "The possessive construction agrees with the class of the possessed noun through a prefix plus the particle -a, rather than a separate possessive word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "incwadi yomntu",
                "the person's book"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessive Concord — B1"
      },
      {
        "id": "adjective-concord",
        "title": "Adjective Concord — B1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники узгоджуються з іменником через власний, дещо відмінний від підметового, набір узгоджувальних префіксів.",
            "en": {
              "text": "Adjectives agree with the noun through their own set of concord prefixes, somewhat different from the subject concords."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "umntu omkhulu",
                "the big person"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Concord — B1"
      },
      {
        "id": "demonstratives-class-based",
        "title": "Class-Based Demonstratives — B2",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні займенники мають три ступені відстані (близько, помірно, далеко) і узгоджуються з класом іменника через власний набір форм.",
            "en": {
              "text": "Demonstratives have three degrees of distance (near, medium, far) and agree with the noun's class through their own set of forms."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "lo mntu (ця людина, близько)",
                "this person (near)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Class-Based Demonstratives — B2"
      },
      {
        "id": "locative-suffix-ini",
        "title": "Locative: -ini — B1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Місцевий відмінок утворюється суфіксом -ini (з альтернацією початкового префікса), доданим до основи іменника для позначення 'у, на, до' місця.",
            "en": {
              "text": "The locative is formed with the suffix -ini (with alternation of the initial prefix), added to the noun stem to mark 'in, on, to' the place."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ekhaya",
                "at home (locative form of 'home')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Locative: -ini — B1"
      },
      {
        "id": "interrogatives",
        "title": "Interrogatives — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто?",
                "ngubani?"
              ],
              [
                "що?",
                "yintoni?"
              ],
              [
                "де?",
                "phi?"
              ]
            ],
            "en": {
              "title": "Interrogatives"
            }
          }
        ],
        "titleEn": "Interrogatives — A1"
      },
      {
        "id": "reflexive-infix-zi",
        "title": "Reflexive: -zi- — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотність виражається інфіксом -zi-, вставленим безпосередньо перед основою дієслова, незалежно від особи підмета.",
            "en": {
              "text": "Reflexivity is expressed with the infix -zi-, inserted directly before the verb stem, regardless of the subject's person."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndiyazibona.",
                "Я бачу себе."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive: -zi- — B1"
      },
      {
        "id": "cardinal-numbers",
        "title": "Cardinal Numbers — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Кількісні числівники",
            "rows": [
              [
                "1",
                "-nye"
              ],
              [
                "2",
                "-bini"
              ],
              [
                "3",
                "-thathu"
              ],
              [
                "4",
                "-ne"
              ],
              [
                "5",
                "-hlanu"
              ]
            ],
            "en": {
              "title": "Cardinal Numbers"
            }
          }
        ],
        "titleEn": "Cardinal Numbers — A1"
      },
      {
        "id": "comparative-nga",
        "title": "Comparative: ngaphezu — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється описово: прикметник плюс ngaphezu kwa- ('понад'), а не окремим суфіксом на прикметнику.",
            "en": {
              "text": "The comparative is formed periphrastically: the adjective plus ngaphezu kwa- ('above/more than'), rather than a dedicated suffix on the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mkhulu ngaphezu kwakhe",
                "bigger than him"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: ngaphezu ('more than') — B1"
      },
      {
        "id": "verbal-extension-causative",
        "title": "Verbal Extension: Causative -is- — B2",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативне розширення -is-, вставлене перед кінцевим голосним основи, позначає, що підмет змушує когось виконати дію.",
            "en": {
              "text": "The causative extension -is-, inserted before the stem's final vowel, marks that the subject causes someone to perform the action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "bhalisa (примусити писати)",
                "to make (someone) write"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Verbal Extension: Causative -is- — B2"
      },
      {
        "id": "verbal-extension-passive",
        "title": "Verbal Extension: Passive -w- — B2",
        "emoji": "🔃",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивне розширення -w-, вставлене перед кінцевим голосним, змінює підмет речення на того, хто зазнає дії.",
            "en": {
              "text": "The passive extension -w-, inserted before the final vowel, changes the sentence's subject to the one undergoing the action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "incwadi ibhalwa",
                "the book is being written"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Verbal Extension: Passive -w- — B2"
      },
      {
        "id": "verbal-extension-applicative",
        "title": "Verbal Extension: Applicative -el- — B2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Аплікативне розширення -el- додає бенефіціара чи мету дії без окремого прийменника, вбудовуючи значення 'для/заради' у саме дієслово.",
            "en": {
              "text": "The applicative extension -el- adds a beneficiary or purpose to the action without a separate preposition, building the meaning 'for/on behalf of' into the verb itself."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "bhalela (писати для когось)",
                "to write for (someone)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Verbal Extension: Applicative -el- — B2"
      },
      {
        "id": "word-order-svo",
        "title": "Word Order: SVO — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-присудок-додаток (SVO), причому підметовий концорд робить окреме займенникове слово часто необов'язковим.",
            "en": {
              "text": "The basic word order is subject-verb-object (SVO), with the subject concord often making a separate pronoun word optional."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Umntu ubona indlu.",
                "Людина бачить будинок."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Word Order: SVO — A2"
      },
      {
        "id": "yes-no-question-intonation",
        "title": "Yes/No Questions via Intonation — A2",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "Загальне питання часто утворюється лише зміною інтонації речення, без зміни порядку слів чи додавання частки.",
            "en": {
              "text": "A yes/no question is often formed simply by changing the sentence's intonation, without changing word order or adding a particle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Uyabhala? (з питальною інтонацією)",
                "Are you writing? (marked by rising intonation)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Yes/No Questions via Intonation — A2"
      },
      {
        "id": "diminutive-suffix-ana",
        "title": "Diminutive: -ana — B1",
        "emoji": "🔎",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувальне значення виражається суфіксом -ana, доданим до основи іменника, часто зі зміною початкового класового префікса.",
            "en": {
              "text": "The diminutive is expressed with the suffix -ana, added to the noun stem, often accompanied by a change in the initial class prefix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "umntwana (мала дитина, з -ana)",
                "small child (with the -ana diminutive)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive: -ana — B1"
      },
      {
        "id": "copulative-construction",
        "title": "Copulative Construction — B1",
        "emoji": "🟰",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово-зв'язка 'бути' у теперішньому часі часто виражається лише префіксом ng- перед іменником, без окремого дієслова.",
            "en": {
              "text": "The copula 'to be' in the present tense is often expressed simply with the prefix ng- before the noun, without a separate verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ngumntu.",
                "Він/вона людина."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Copulative Construction — B1"
      },
      {
        "id": "conjunctions",
        "title": "Conjunctions — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і, та",
                "kunye"
              ],
              [
                "але",
                "kodwa"
              ],
              [
                "або",
                "okanye"
              ],
              [
                "тому що",
                "kuba"
              ]
            ],
            "en": {
              "title": "Conjunctions"
            }
          }
        ],
        "titleEn": "Conjunctions — A2"
      },
      {
        "id": "relative-clause-concord",
        "title": "Relative Clauses via Concord — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Підрядні відносні речення позначаються відносним узгоджувальним префіксом, доданим до дієслова, замість окремого відносного займенника.",
            "en": {
              "text": "Relative clauses are marked with a relative concord prefix attached to the verb, instead of a separate relative pronoun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "umntu obhalayo",
                "the person who is writing (relative concord o-)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clauses via Concord — B2"
      },
      {
        "id": "tone-lexical-distinction",
        "title": "Tone as a Lexical Distinguisher — B2",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Кхоса — тональна мова: однакові за написанням слова можуть різнитися значенням залежно від висотного тону складу, хоча тон зазвичай не позначається на письмі.",
            "en": {
              "text": "Xhosa is a tonal language: words identical in spelling can differ in meaning depending on the pitch tone of a syllable, although tone is usually not marked in writing."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ukubona (бачити) — тон розрізняє відтінки значення",
                "to see — tone distinguishes shades of meaning"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tone as a Lexical Distinguisher — B2"
      },
      {
        "id": "infinitive-ku",
        "title": "The Infinitive: uku- — A2",
        "emoji": "♾️",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив утворюється префіксом uku-, доданим до основи дієслова, і граматично поводиться як іменник класу 15.",
            "en": {
              "text": "The infinitive is formed with the prefix uku-, added to the verb stem, and grammatically behaves as a class-15 noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ukubhala",
                "to write / the act of writing"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Infinitive: uku- — A2"
      },
      {
        "id": "vocative-address",
        "title": "Vocative Address — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Звертання позначається втратою початкового голосного класового префікса іменника, а не окремим закінченням.",
            "en": {
              "text": "Address is marked by dropping the noun's initial class-prefix vowel, rather than a separate ending."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mntwana! (замість umntwana)",
                "Child! (address form, dropping the initial vowel)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vocative Address — A2"
      },
      {
        "id": "amaxhosa-kingdoms-history",
        "title": "The amaXhosa Kingdoms — B2",
        "emoji": "👑",
        "sections": [
          {
            "type": "intro",
            "text": "Народ амакхоса історично поділявся на кілька королівств у Східному Капі — Рхарабе, Гцалека та інші, — що вели багаторічні прикордонні війни з європейськими колонізаторами, відомі як Кафрські війни.",
            "en": {
              "text": "The amaXhosa people were historically divided into several kingdoms in the Eastern Cape — Rharhabe, Gcaleka, and others — who fought decades of frontier wars against European colonizers, known as the Cape Frontier Wars."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "uHintsa, uNgqika (історичні вожді)",
                "Hintsa, Ngqika (historical Xhosa kings)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The amaXhosa Kingdoms — B2"
      },
      {
        "id": "nelson-mandela-native-speaker",
        "title": "Nelson Mandela's Mother Tongue — A2",
        "emoji": "✊",
        "sections": [
          {
            "type": "intro",
            "text": "Нельсон Мандела народився в Транскеї й виріс у родині амакхоса, — кхоса була його рідною мовою, а Тхабо Мбекі, ще один президент ПАР, також є носієм кхоса.",
            "en": {
              "text": "Nelson Mandela was born in the Transkei and raised in an amaXhosa family — Xhosa was his mother tongue, and Thabo Mbeki, another president of South Africa, is also a native Xhosa speaker."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Madiba (клановий, шанобливий титул Мандели)",
                "Madiba (Mandela's clan/honorific name)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Nelson Mandela's Mother Tongue — A2"
      },
      {
        "id": "ulwaluko-initiation",
        "title": "Ulwaluko Initiation Rite — B2",
        "emoji": "🌾",
        "sections": [
          {
            "type": "intro",
            "text": "Улваluko — традиційний обряд ініціації дорослих чоловіків, що включає усамітнення й символізує перехід юнака до статусу дорослого чоловіка в суспільстві амакхоса.",
            "en": {
              "text": "Ulwaluko is the traditional male initiation rite, which includes a period of seclusion and symbolizes a young man's transition to adult status in amaXhosa society."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "abakhwetha (посвячувані юнаки)",
                "the initiates undergoing ulwaluko"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Ulwaluko Initiation Rite — B2"
      },
      {
        "id": "miriam-makeba-click-song",
        "title": "Miriam Makeba's 'Click Song' — B1",
        "emoji": "🎤",
        "sections": [
          {
            "type": "intro",
            "text": "Пісня Кхосіла ('Пісня клацань') Мір'ям Макеби принесла клацні приголосні кхоса на світову сцену в 1960-х, познайомивши мільйони слухачів зі звуковою специфікою мови.",
            "en": {
              "text": "Miriam Makeba's 'Qongqothwane' (the 'Click Song') brought Xhosa's click consonants to the world stage in the 1960s, introducing millions of listeners to the language's distinctive sound."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Qongqothwane",
                "'Qongqothwane' (the Click Song's Xhosa title, featuring clicks)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Miriam Makeba's 'Click Song' — B1"
      },
      {
        "id": "izibongo-praise-poetry",
        "title": "Izibongo Praise Poetry — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Ізібонго — усна традиція хвалебної поезії, яка вихваляє вождів, предків чи видатні події, виконувана спеціальним оратором imbongi під час важливих церемоній.",
            "en": {
              "text": "Izibongo is the oral tradition of praise poetry that lauds chiefs, ancestors, or significant events, performed by a specialized orator called imbongi at important ceremonies."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "imbongi (хвалебний поет-декламатор)",
                "imbongi (the praise-poet performer)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Izibongo Praise Poetry — B2"
      },
      {
        "id": "xhosa-bible-orthography",
        "title": "Missionary Orthography History — B2",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Кхоса стала однією з перших мов банту, для якої в 19 столітті місіонери розробили латинську орфографію, переклавши Біблію й заклавши основи писемної традиції, що вплинула на сусідні мови нгуні.",
            "en": {
              "text": "Xhosa was one of the first Bantu languages for which 19th-century missionaries developed a Latin orthography, translating the Bible and laying the foundations of a written tradition that influenced neighboring Nguni languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "iBhayibhile (Біблія)",
                "iBhayibhile (the Bible, an early landmark translation)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Missionary Orthography History — B2"
      },
      {
        "id": "eastern-cape-geography",
        "title": "Eastern Cape Geography — B1",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Східний Кейп — провінція Південної Африки, історична батьківщина амакхоса, з містами Іст-Лондон, Мтата та колишньою столицею Транскею.",
            "en": {
              "text": "The Eastern Cape is a South African province, the historical homeland of the amaXhosa, with cities like East London, Mthatha, and the former Transkei capital."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "eMonti (Іст-Лондон, назва кхоса)",
                "eMonti (the Xhosa name for East London)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Eastern Cape Geography — B1"
      },
      {
        "id": "lobolo-bride-price",
        "title": "Lobolo — B1",
        "emoji": "🐄",
        "sections": [
          {
            "type": "intro",
            "text": "Лоболо — традиційний шлюбний викуп, який родина нареченого сплачує родині нареченої, історично худобою, — досі важлива соціальна практика в культурі амакхоса.",
            "en": {
              "text": "Lobolo is the traditional bridewealth that the groom's family pays to the bride's family, historically in cattle — still an important social practice in amaXhosa culture."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ilobolo",
                "the bridewealth payment (lobolo)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Lobolo: Bridewealth — B1"
      },
      {
        "id": "xhosa-beadwork-traditional-dress",
        "title": "Traditional Beadwork and Dress — B1",
        "emoji": "📿",
        "sections": [
          {
            "type": "intro",
            "text": "Кольорове бісерне мереживо й традиційний одяг амакхоса (умбхако, охра на обличчі й тілі) позначають вік, статус і стадію життя людини в громаді.",
            "en": {
              "text": "The colorful beadwork and traditional dress of the amaXhosa (umbhaco, ochre applied to the face and body) mark a person's age, status, and life stage within the community."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "umbhaco",
                "umbhaco (traditional Xhosa ceremonial dress)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Traditional Beadwork and Dress — B1"
      },
      {
        "id": "umqombothi-traditional-beer",
        "title": "Umqombothi — B1",
        "emoji": "🍺",
        "sections": [
          {
            "type": "intro",
            "text": "Умкомботі — традиційне пиво з кукурудзи й солоду, приготоване для церемоній вшанування предків, важлива частина ритуального й соціального життя.",
            "en": {
              "text": "Umqombothi is traditional beer made from maize and malt, brewed for ancestor-veneration ceremonies — an important part of ritual and social life."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "umqombothi",
                "umqombothi (traditional maize beer)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Umqombothi: Traditional Beer — B1"
      },
      {
        "id": "colors",
        "title": "Colors — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "червоний",
                "bomvu"
              ],
              [
                "синій",
                "luhlaza"
              ],
              [
                "жовтий",
                "tyheli"
              ],
              [
                "чорний",
                "mnyama"
              ],
              [
                "білий",
                "mhlophe"
              ]
            ],
            "en": {
              "title": "Colors"
            }
          }
        ],
        "titleEn": "Colors — A1"
      },
      {
        "id": "days-of-week",
        "title": "Days of the Week — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "понеділок",
                "uMvulo"
              ],
              [
                "вівторок",
                "uLwesibini"
              ],
              [
                "середа",
                "uLwesithathu"
              ],
              [
                "четвер",
                "uLwesine"
              ],
              [
                "п'ятниця",
                "uLwesihlanu"
              ],
              [
                "субота",
                "uMgqibelo"
              ],
              [
                "неділя",
                "iCawa"
              ]
            ],
            "en": {
              "title": "Days of the Week"
            }
          }
        ],
        "titleEn": "Days of the Week — A1"
      },
      {
        "id": "family-terms",
        "title": "Family Terms — A1",
        "emoji": "👨‍👩‍👧",
        "sections": [
          {
            "type": "table",
            "title": "Родинні терміни",
            "rows": [
              [
                "батько",
                "utata"
              ],
              [
                "мати",
                "umama"
              ],
              [
                "брат/сестра",
                "umzalwana"
              ],
              [
                "дитина",
                "umntwana"
              ]
            ],
            "en": {
              "title": "Family Terms"
            }
          }
        ],
        "titleEn": "Family Terms — A1"
      },
      {
        "id": "greetings",
        "title": "Greetings — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Привітання",
            "rows": [
              [
                "Привіт (до одного)",
                "Molo"
              ],
              [
                "Привіт (до кількох)",
                "Molweni"
              ],
              [
                "Дякую",
                "Enkosi"
              ]
            ],
            "en": {
              "title": "Greetings"
            }
          }
        ],
        "titleEn": "Greetings — A1"
      },
      {
        "id": "weather-vocabulary",
        "title": "Weather Vocabulary — A2",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "ilanga"
              ],
              [
                "дощ",
                "imvula"
              ],
              [
                "вітер",
                "umoya"
              ]
            ],
            "en": {
              "title": "Weather"
            }
          }
        ],
        "titleEn": "Weather Vocabulary — A2"
      },
      {
        "id": "body-parts",
        "title": "Body Parts — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "intloko"
              ],
              [
                "рука",
                "isandla"
              ],
              [
                "нога",
                "unyawo"
              ],
              [
                "око",
                "iliso"
              ]
            ],
            "en": {
              "title": "Body Parts"
            }
          }
        ],
        "titleEn": "Body Parts — A2"
      },
      {
        "id": "food-vocabulary",
        "title": "Food Vocabulary — A2",
        "emoji": "🍞",
        "sections": [
          {
            "type": "table",
            "title": "Їжа",
            "rows": [
              [
                "хліб",
                "isonka"
              ],
              [
                "м'ясо",
                "inyama"
              ],
              [
                "кукурудза",
                "umbona"
              ]
            ],
            "en": {
              "title": "Food"
            }
          }
        ],
        "titleEn": "Food Vocabulary — A2"
      },
      {
        "id": "animals-vocabulary",
        "title": "Animals — A2",
        "emoji": "🐄",
        "sections": [
          {
            "type": "table",
            "title": "Тварини",
            "rows": [
              [
                "корова",
                "inkomo"
              ],
              [
                "собака",
                "inja"
              ],
              [
                "коза",
                "ibhokhwe"
              ]
            ],
            "en": {
              "title": "Animals"
            }
          }
        ],
        "titleEn": "Animals — A2"
      },
      {
        "id": "cardinal-directions",
        "title": "Cardinal Directions — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "table",
            "title": "Сторони світу",
            "rows": [
              [
                "північ",
                "umntla"
              ],
              [
                "південь",
                "umzantsi"
              ],
              [
                "схід",
                "impumalanga"
              ],
              [
                "захід",
                "entshonalanga"
              ]
            ],
            "en": {
              "title": "Cardinal Directions"
            }
          }
        ],
        "titleEn": "Cardinal Directions — A2"
      },
      {
        "id": "ubuntu-philosophy-xhosa-context",
        "title": "Ubuntu in amaXhosa Thought — B2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Філософія убунту ('я є, бо ми є') пронизує амакхоса розуміння особистості як невіддільної від громади — ключовий концепт, поширений через мандеївські промови на весь світ.",
            "en": {
              "text": "The philosophy of ubuntu ('I am because we are') pervades amaXhosa understanding of personhood as inseparable from community — a key concept spread worldwide through Mandela's speeches."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Umntu ngumntu ngabantu.",
                "A person is a person through other people. (ubuntu maxim)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ubuntu in amaXhosa Thought — B2"
      },
      {
        "id": "imbizo-community-gathering",
        "title": "Imbizo: Community Gathering — B2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Імбізо — традиційне зібрання громади для обговорення важливих питань і прийняття колективних рішень, форма, яку перейняли й сучасні політичні лідери ПАР.",
            "en": {
              "text": "An imbizo is a traditional community gathering for discussing important matters and reaching collective decisions, a form also adopted by modern South African political leaders."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "imbizo",
                "imbizo (a community gathering/council)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imbizo: Community Gathering — B2"
      },
      {
        "id": "market-street-vocabulary",
        "title": "Market and Street Vocabulary — A2",
        "emoji": "🏪",
        "sections": [
          {
            "type": "table",
            "title": "Ринок і вулиця",
            "rows": [
              [
                "гроші",
                "imali"
              ],
              [
                "ринок",
                "imarike"
              ],
              [
                "дорога",
                "indlela"
              ]
            ],
            "en": {
              "title": "Market and Street"
            }
          }
        ],
        "titleEn": "Market and Street Vocabulary — A2"
      },
      {
        "id": "steve-biko-black-consciousness",
        "title": "Steve Biko and Black Consciousness — B2",
        "emoji": "✊",
        "sections": [
          {
            "type": "intro",
            "text": "Стів Біко, носій кхоса й засновник руху 'чорна свідомість' (Black Consciousness), був одним із найвпливовіших антиапартеїдних мислителів Південної Африки, загинувши в поліцейському ув'язненні 1977 року.",
            "en": {
              "text": "Steve Biko, a Xhosa speaker and founder of the Black Consciousness Movement, was one of South Africa's most influential anti-apartheid thinkers, killed in police custody in 1977."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Black Consciousness Movement",
                "the Black Consciousness Movement Biko founded"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Steve Biko and Black Consciousness — B2"
      },
      {
        "id": "xhosa-clan-names-izithakazelo",
        "title": "Clan Names: Izithakazelo — B2",
        "emoji": "🏷️",
        "sections": [
          {
            "type": "intro",
            "text": "Ізітаказело — клановi привітальні імена, які виражають шану до предків роду й вживаються поряд з особистим ім'ям для ідентифікації родинної лінії.",
            "en": {
              "text": "Izithakazelo are clan praise-names that express respect for a lineage's ancestors and are used alongside a personal name to identify one's family line."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "isithakazelo",
                "a clan praise-name"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Clan Names: Izithakazelo — B2"
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
        "id": "irregular-verb-ukuza",
        "title": "Irregular Verb: -za ('to come') — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово -za ('приходити') утворює наказовий спосіб від нерегулярної форми yiza замість очікуваної *za, — одне з небагатьох дієслів кхоса з повністю супплетивним наказовим способом.",
            "en": {
              "text": "The verb -za ('to come') forms its imperative from the irregular form yiza instead of the expected *za — one of the few Xhosa verbs with a fully suppletive imperative."
            }
          },
          {
            "type": "table",
            "title": "Супплетивна форма",
            "rows": [
              [
                "-za (приходити) → Yiza! (не *Za!)",
                "come → Come! (suppletive imperative, not the expected regular form)"
              ]
            ],
            "en": {
              "title": "Suppletive Form"
            }
          }
        ],
        "titleEn": "Irregular Verb: -za ('to come') — B1"
      },
      {
        "id": "irregular-noun-class-umntu",
        "title": "Irregular Class Behavior: umntu — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Іменник umntu ('людина', клас 1) утворює множину abantu (клас 2) з незвичною зміною основи -ntu → -antu, замінюючи лише перший склад, а не просто змінюючи префікс.",
            "en": {
              "text": "The noun umntu ('person', class 1) forms its plural abantu (class 2) with an unusual stem change -ntu → -antu, altering the first syllable rather than just swapping the prefix."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна зміна основи",
            "rows": [
              [
                "umntu → abantu (не *abamntu)",
                "person → people (irregular stem change, not the expected simple prefix swap)"
              ]
            ],
            "en": {
              "title": "Irregular Stem Change"
            }
          }
        ],
        "titleEn": "Irregular Class Behavior: umntu ('person') — B2"
      },
      {
        "id": "irregular-comparative-hle",
        "title": "Irregular Comparative: -hle — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник -hle ('гарний') уживає в порівняльній конструкції особливу вкорочену форму замість повної основи, — нерегулярний виняток серед прикметників.",
            "en": {
              "text": "The adjective -hle ('beautiful') uses a special shortened form in the comparative construction instead of the full stem — an irregular exception among adjectives."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна скорочена форма",
            "rows": [
              [
                "-hle → ngconywana (нерегулярна скорочена форма)",
                "beautiful → a bit better/nicer (irregular shortened comparative form)"
              ]
            ],
            "en": {
              "title": "Irregular Shortened Form"
            }
          }
        ],
        "titleEn": "Irregular Comparative: -hle ('beautiful') — B1"
      }
    ]
  }
];
