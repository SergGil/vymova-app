// Vymova — data/grammar-data/grammar_tl.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_TL: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Panghalip Panao — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У тагальській немає граматичного роду (\"siya\" означає і \"він\", і \"вона\"), а окремі \"kami\" й \"tayo\" розрізняють, чи входить співрозмовник у \"ми\".",
            "en": {
              "text": "Tagalog has no grammatical gender (\"siya\" means both \"he\" and \"she\"), and separately distinguishes \"kami\" and \"tayo\" depending on whether the listener is included in \"we\"."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ako"
              ],
              [
                "ти",
                "ikaw (ka)"
              ],
              [
                "він / вона",
                "siya"
              ],
              [
                "ми (без вас)",
                "kami"
              ],
              [
                "ми (з вами)",
                "tayo"
              ],
              [
                "ви",
                "kayo"
              ],
              [
                "вони",
                "sila"
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
        "id": "focus-trigger-system",
        "title": "Pokus ng Pandiwa — B2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Тагальська, як і більшість філіппінських мов, має унікальну систему 'фокуса' дієслова: сам афікс дієслова вказує, яка роль у реченні (діяч, об'єкт, місце, інструмент) стає граматичним підметом, — риса, майже не засвідчена поза філіппінською мовною групою.",
            "en": {
              "text": "Tagalog, like most Philippine languages, has a unique verb 'focus' system: the verb's own affix indicates which role in the sentence (agent, object, location, instrument) becomes the grammatical subject — a feature almost unattested outside the Philippine language group."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bumili ang lalaki ng tinapay. / Binili ng lalaki ang tinapay.",
                "Чоловік купив хліб (фокус на діячі / фокус на об'єкті — різні афікси)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Verb Focus/Trigger System — B2"
      },
      {
        "id": "ang-ng-sa-particles",
        "title": "Ang, Ng, Sa: Mga Kataga — B1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Три частки визначають роль іменникової фрази в реченні: ang позначає граматичний фокус (підмет), ng — невизначений додаток чи власника, sa — місце, напрям чи адресата, — функціонують подібно до відмінків, але як окремі слова.",
            "en": {
              "text": "Three particles determine a noun phrase's role in the sentence: ang marks the grammatical focus (subject), ng marks a non-focus object or possessor, sa marks location, direction, or recipient — functioning like cases but as separate words."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ang bahay / ng bahay / sa bahay",
                "дім (фокус) / дому (не-фокус) / до дому (напрям)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The ang/ng/sa Particle System — B1"
      },
      {
        "id": "aspect-not-tense",
        "title": "Aspekto, Hindi Panahunan — A2",
        "emoji": "⏰",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово граматично виражає вид (завершено/незавершено/заплановано), а не строго час, — вставне подвоєння першого складу основи позначає незавершену чи заплановану дію.",
            "en": {
              "text": "The verb grammatically expresses aspect (completed/ongoing/contemplated) rather than strict tense — reduplicating the first syllable of the stem marks an ongoing or contemplated action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "bumili (завершено) vs. bumibili (незавершено, подвоєння bi-)",
                "bought (completed) vs. is buying (ongoing, reduplicated)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Aspect, Not Tense — A2"
      },
      {
        "id": "spanish-loanword-layer",
        "title": "Mga Salitang Espanyol — B1",
        "emoji": "🇪🇸",
        "sections": [
          {
            "type": "intro",
            "text": "Через три століття іспанського колоніального панування тагальська увібрала величезний шар іспанської лексики — числа, дні тижня, багато побутових слів, — часто вживаний паралельно з питомими тагальськими відповідниками.",
            "en": {
              "text": "Through three centuries of Spanish colonial rule, Tagalog absorbed a massive layer of Spanish vocabulary — numbers, days of the week, many everyday words — often used in parallel with native Tagalog equivalents."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mesa (з ісп. 'стіл'), Lunes (з ісп. 'понеділок')",
                "table, Monday (Spanish loanwords)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Spanish Loanword Layer — B1"
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
        "id": "completed-aspect",
        "title": "Naganap Na — A1",
        "emoji": "⏪",
        "sections": [
          {
            "type": "intro",
            "text": "Завершений вид передає дію, яка вже відбулася, — простий інфікс -um- чи префікс, доданий до кореня без подвоєння.",
            "en": {
              "text": "The completed aspect conveys an action that has already occurred — a simple -um- infix or prefix added to the root with no reduplication."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bumili ako ng tinapay.",
                "Я купив хліб."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Completed Aspect — A1"
      },
      {
        "id": "incompleted-aspect",
        "title": "Nagaganap — A2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Незавершений вид передає тривалу чи звичну дію й утворюється тим самим афіксом, що й завершений, плюс подвоєння першого складу кореня.",
            "en": {
              "text": "The incompleted (ongoing/habitual) aspect is formed with the same affix as the completed one, plus reduplication of the root's first syllable."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bumibili ako ng tinapay.",
                "Я купую хліб (саме зараз/зазвичай)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Incompleted (Ongoing) Aspect — A2"
      },
      {
        "id": "contemplated-aspect",
        "title": "Kakaganapin — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Запланований вид (майбутнє) передає дію, яка ще не почалася, й утворюється подвоєнням першого складу кореня без часового афікса.",
            "en": {
              "text": "The contemplated (future) aspect conveys an action not yet begun, and is formed with reduplication of the root's first syllable and no aspect affix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bibili ako ng tinapay.",
                "Я куплю хліб."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Contemplated (Future) Aspect — A2"
      },
      {
        "id": "actor-focus-mag",
        "title": "Pokus sa Tagatanggap: Mag- — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс mag- позначає фокус на діячі для більшої кількості дієслів, ніж -um-, часто передаючи навмисну чи повторювану дію.",
            "en": {
              "text": "The prefix mag- marks actor focus for a broader range of verbs than -um-, often conveying a deliberate or repeated action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nagluto ako ng adobo.",
                "Я приготував адобо."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Actor Focus: mag- — B1"
      },
      {
        "id": "object-focus-in",
        "title": "Pokus sa Layon: -in — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -in позначає фокус на об'єкті дії: сам об'єкт стає граматичним підметом речення й приймає частку ang.",
            "en": {
              "text": "The suffix -in marks object focus: the object itself becomes the grammatical subject of the sentence and takes the particle ang."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Binili ko ang tinapay.",
                "Я купив (саме) хліб (фокус на хлібі)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Object Focus: -in — B1"
      },
      {
        "id": "locative-focus-an",
        "title": "Pokus sa Lugar: -an — B1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -an позначає фокус на місці чи адресаті дії, який стає граматичним підметом і приймає частку ang.",
            "en": {
              "text": "The suffix -an marks locative or beneficiary focus, where that role becomes the grammatical subject and takes the particle ang."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Binilhan ko siya ng tinapay.",
                "Я купив йому хліб (фокус на адресаті)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Locative/Benefactive Focus: -an — B1"
      },
      {
        "id": "instrumental-focus-i",
        "title": "Pokus sa Kasangkapan: I- — B2",
        "emoji": "🛠️",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс i- позначає фокус на інструменті чи предметі, переданому іншій особі, — той самий префікс, що й для дієприслівникових конструкцій в інших контекстах.",
            "en": {
              "text": "The prefix i- marks instrumental focus or the thing transferred to another person — the same prefix used for converb-like constructions in other contexts."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ibinili ko siya ng tinapay.",
                "Я купив хліб для нього (фокус на переданому предметі)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Instrumental/Conveyance Focus: i- — B2"
      },
      {
        "id": "imperative-mood",
        "title": "Utos — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб зазвичай збігається з коренем дієслова чи основою фокуса без вставного інфікса -um-.",
            "en": {
              "text": "The imperative usually coincides with the verb root or the focus stem, with no -um- infix inserted."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bilhin mo ang tinapay!",
                "Купи хліб!"
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
        "id": "negation-hindi-wala-huwag",
        "title": "Pagsalungat: Hindi, Wala, Huwag — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Тагальська має три різні заперечення: hindi для звичайного заперечення, wala для заперечення наявності, huwag для заперечного наказу, — кожне для окремого граматичного контексту.",
            "en": {
              "text": "Tagalog has three distinct negators: hindi for ordinary negation, wala for negating existence, huwag for negative commands — each for a distinct grammatical context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Hindi ako bumili. / Wala akong pera. / Huwag kang bumili!",
                "Я не купив. / У мене немає грошей. / Не купуй!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Three Negators: hindi, wala, huwag — A2"
      },
      {
        "id": "potential-maka",
        "title": "Pokus na May Kakayahan: Maka- — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи ненавмисна дія виражається префіксом maka- (фокус на діячі) або ma- (фокус на об'єкті), окремим від навмисного mag-/-um-.",
            "en": {
              "text": "Ability or an unintentional action is expressed with the prefix maka- (actor focus) or ma- (object focus), distinct from the intentional mag-/-um-."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nakabili ako ng tinapay.",
                "Мені вдалося купити хліб."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential/Involuntary: maka- — B1"
      },
      {
        "id": "causative-magpa",
        "title": "Sanhi: Magpa- — B2",
        "emoji": "⚙️",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативний префікс magpa-, доданий до кореня, передає значення 'змусити/дозволити зробити'.",
            "en": {
              "text": "The causative prefix magpa-, added to the root, conveys the meaning 'make/let someone do'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nagpabili ako sa kanya ng tinapay.",
                "Я попросив його купити хліб."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Causative: magpa- — B2"
      },
      {
        "id": "conditional-kung",
        "title": "Kundisyon: Kung — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться сполучником kung ('якщо'), поставленим на початку підрядного речення.",
            "en": {
              "text": "A conditional sentence is introduced with the conjunction kung ('if'), placed at the start of the subordinate clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kung uulan, mananatili ako sa bahay.",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: kung — B1"
      },
      {
        "id": "recently-completed-kagagawa",
        "title": "Katatapos Lang: Kaka- — B2",
        "emoji": "🆕",
        "sections": [
          {
            "type": "intro",
            "text": "Дія, завершена щойно перед моментом мовлення, позначається префіксом kaka- (з подвоєнням), наголошуючи на 'тільки-но' на відміну від звичайного завершеного виду.",
            "en": {
              "text": "An action completed just before the moment of speaking is marked with the prefix kaka- (with reduplication), emphasizing 'just now' unlike the ordinary completed aspect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kakabili ko lang ng tinapay.",
                "Я щойно купив хліб."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Recently Completed: kaka- — B2"
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
        "id": "word-order-vso",
        "title": "Ayos ng Pangungusap: VSO — A2",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — присудок-підмет-додаток (VSO): дієслово зазвичай стоїть на першому місці речення.",
            "en": {
              "text": "The basic word order is Verb-Subject-Object (VSO): the verb usually stands at the very start of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kumain ang bata ng mansanas.",
                "Дитина з'їла яблуко (з'їла-дитина-яблуко)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Word Order: VSO — A2"
      },
      {
        "id": "ligature-na-ng",
        "title": "Pang-ugnay: Na / -ng — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Зв'язка na (чи скорочена -ng після голосного) з'єднує прикметник з іменником, обов'язковий елемент, без якого означення граматично не приєднується до слова.",
            "en": {
              "text": "The linker na (or its shortened form -ng after a vowel) connects an adjective to a noun, an obligatory element without which the modifier is not grammatically attached to the word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "magandang bahay",
                "гарний дім (маганда + -ng)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ligature: na / -ng — B1"
      },
      {
        "id": "plural-marker-mga",
        "title": "Pananda ng Maramihan: Mga — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина не позначається закінченням іменника, а окремим словом mga, поставленим перед ним, — сам іменник узагалі не змінюється.",
            "en": {
              "text": "The plural is not marked with a noun ending but with the separate word mga, placed before it — the noun itself remains completely unchanged."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "bahay → mga bahay",
                "дім → доми"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural Marker: mga — A1"
      },
      {
        "id": "demonstratives-three-way",
        "title": "Pamatlig: Tatlong Antas — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Вказівні займенники",
            "rows": [
              [
                "цей (близько до мовця)",
                "ito"
              ],
              [
                "той (близько до слухача)",
                "iyan"
              ],
              [
                "той (далеко від обох)",
                "iyon"
              ]
            ],
            "en": {
              "title": "Demonstratives"
            }
          }
        ],
        "titleEn": "Three-Way Demonstratives — A2"
      },
      {
        "id": "interrogatives",
        "title": "Mga Tanong — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто",
                "sino"
              ],
              [
                "що",
                "ano"
              ],
              [
                "де",
                "saan"
              ],
              [
                "коли",
                "kailan"
              ]
            ],
            "en": {
              "title": "Question Words"
            }
          }
        ],
        "titleEn": "Interrogatives — A1"
      },
      {
        "id": "possessive-ng-particle",
        "title": "Pagmamay-ari: Ng — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність передається часткою ng, поставленою перед власником після посідомого іменника, — та сама частка, що позначає неозначений об'єкт.",
            "en": {
              "text": "Possession is expressed with the particle ng, placed before the possessor after the possessed noun — the same particle used to mark a non-focus object."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "bahay ng lalaki",
                "дім чоловіка"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possession: ng — A2"
      },
      {
        "id": "cardinal-numbers-native",
        "title": "Bilang: Katutubong 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10 (питомі)",
            "rows": [
              [
                "1",
                "isa"
              ],
              [
                "2",
                "dalawa"
              ],
              [
                "3",
                "tatlo"
              ],
              [
                "5",
                "lima"
              ],
              [
                "10",
                "sampu"
              ]
            ],
            "en": {
              "title": "Numbers 1-10 (native)"
            }
          }
        ],
        "titleEn": "Cardinal Numbers 1-10 (Native) — A1"
      },
      {
        "id": "dual-number-systems",
        "title": "Dalawang Sistema: Katutubo at Espanyol — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Тагальська фактично має дві паралельні системи чисел: питому, вживану для лічби предметів, та іспанську, вживану майже виключно для грошей, часу й дат, — обидві активно живуть у мові водночас.",
            "en": {
              "text": "Tagalog effectively has two parallel number systems: the native one, used for counting objects, and the Spanish one, used almost exclusively for money, time, and dates — both actively alive in the language at once."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ala una (перша година, ісп.) vs. isa (один предмет, питоме)",
                "one o'clock (Spanish) vs. one item (native)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Two Parallel Number Systems — B1"
      },
      {
        "id": "comparative-mas-kaysa",
        "title": "Paghahambing: Mas...Kaysa — B1",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється часткою mas ('більш') перед прикметником, а об'єкт порівняння вводиться сполучником kaysa ('ніж').",
            "en": {
              "text": "The comparative is formed with the particle mas ('more') before the adjective, with the compared object introduced by kaysa ('than')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mas malaki ito kaysa doon.",
                "Це більше за те."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: mas...kaysa — B1"
      },
      {
        "id": "superlative-pinaka",
        "title": "Pinakamataas na Antas: Pinaka- — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь порівняння утворюється префіксом pinaka-, доданим безпосередньо до прикметника.",
            "en": {
              "text": "The superlative is formed with the prefix pinaka-, added directly to the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "pinakamalaki",
                "найбільший"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative: pinaka- — B1"
      },
      {
        "id": "conjunctions",
        "title": "Mga Pangatnig — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і",
                "at"
              ],
              [
                "або",
                "o"
              ],
              [
                "але",
                "pero"
              ]
            ],
            "en": {
              "title": "Conjunctions"
            }
          }
        ],
        "titleEn": "Conjunctions — A1"
      },
      {
        "id": "relative-clause-na-ligature",
        "title": "Sugnay na Panuring: Na — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Означальні (відносні) підрядні речення вводяться тією самою зв'язкою na, що й прикметники, — окремого відносного займенника тагальська не має.",
            "en": {
              "text": "Relative clauses are introduced by the same linker na used for adjectives — Tagalog has no separate relative pronoun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ang batang kumakain",
                "дитина, що їсть"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clauses via the Linker na — B1"
      },
      {
        "id": "reduplication-full-repetition",
        "title": "Pag-uulit: Ganap — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Повне подвоєння кореня іменника (окреме від видового подвоєння дієслова) додає значення 'типу/іграшкового варіанту' предмета.",
            "en": {
              "text": "Full reduplication of a noun root (separate from verb aspect reduplication) adds the meaning of a 'toy/imitation version' of the thing."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "bahay-bahay",
                "будиночок (іграшковий, не справжній)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Full Noun Reduplication — B1"
      },
      {
        "id": "diminutive-expression",
        "title": "Munti: Kaliitan — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувальний відтінок передається окремим прикметником maliit ('малий') перед іменником через зв'язку na, а не суфіксом.",
            "en": {
              "text": "A diminutive shade of meaning is conveyed with the separate adjective maliit ('small') before the noun via the linker na, rather than a suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "maliit na bata",
                "малятко (букв. 'мала дитина')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive: maliit — B1"
      },
      {
        "id": "vocative-simple",
        "title": "Panawag — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "При звертанні до когось ім'я вживається без частки ang, іноді з вигуком O попереду для наголосу.",
            "en": {
              "text": "In direct address, a name is used without the particle ang, sometimes with the exclamation O before it for emphasis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Maria, halika!",
                "Маріє, ходи сюди!"
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
        "id": "existential-may-mayroon",
        "title": "May / Mayroon: Pagkakaroon — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чогось передається словом may (перед іменником) чи mayroon (з часткою ang), протиставленим wala для заперечення, — окреме слово від звичайного дієслова.",
            "en": {
              "text": "The existence of something is expressed with the word may (before a noun) or mayroon (with the particle ang), opposed to wala for negation — a separate word from an ordinary verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "May maraming tao.",
                "Там багато людей."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Existential: may / mayroon — A2"
      },
      {
        "id": "question-particle-ba",
        "title": "Ba: Pananda ng Tanong — A2",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні утворюється часткою ba, поставленою після першого фонологічного слова речення, без інверсії порядку слів.",
            "en": {
              "text": "A yes/no question is formed with the particle ba, placed after the first phonological word of the sentence, with no inversion of word order."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Marunong ka ba magsalita ng Tagalog?",
                "Ти вмієш говорити тагальською?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Yes/No Question Particle: ba — A2"
      },
      {
        "id": "reciprocal-magan",
        "title": "Bawian: Mag-...-an — B2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Взаємна дія ('одне одного') утворюється циркумфіксом mag-...-an, що охоплює дієслівний корінь з обох боків.",
            "en": {
              "text": "Reciprocal action ('each other') is formed with the circumfix mag-...-an, wrapping the verb root on both sides."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tulong (допомога) → magtulungan (допомагати одне одному)",
                "help → to help each other (reciprocal)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reciprocal: mag-...-an — B2"
      },
      {
        "id": "inclusive-exclusive-first-plural",
        "title": "Kami vs. Tayo — A2",
        "emoji": "👥",
        "sections": [
          {
            "type": "intro",
            "text": "Займенники першої особи множини розрізняють інклюзивне tayo ('ми з вами') та ексклюзивне kami ('ми без вас'), — обов'язкове розрізнення при кожному вживанні 'ми'.",
            "en": {
              "text": "First-person plural pronouns distinguish inclusive tayo ('we, including you') from exclusive kami ('we, excluding you') — an obligatory distinction every time 'we' is used."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kakain tayo. / Kakain kami.",
                "Ми поїмо (з тобою). / Ми поїмо (без тебе)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Inclusive/Exclusive 'We' — A2"
      },
      {
        "id": "adjective-position-flexible",
        "title": "Posisyon ng Pang-uri — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник може стояти і перед іменником, і після нього, зв'язаний зв'язкою na в обох позиціях, без зміни значення.",
            "en": {
              "text": "The adjective can stand either before or after the noun, linked by na in both positions, with no change in meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "magandang bahay / bahay na maganda",
                "гарний дім (обидва порядки правильні)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Flexible Adjective Position — A2"
      },
      {
        "id": "postposed-question-word-order",
        "title": "Pagsingit: Lang, Din, Naman — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Короткі частки (lang 'лише', din/rin 'також', naman 'ж/зі свого боку') завжди вставляються одразу після першого фонологічного слова речення, у фіксованому взаємному порядку.",
            "en": {
              "text": "Short particles (lang 'only', din/rin 'also', naman 'as for/though') are always inserted right after the sentence's first phonological word, in a fixed mutual order."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kumain na rin ako.",
                "Я теж уже поїв."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Second-Position Particles — B1"
      },
      {
        "id": "negative-existential-wala",
        "title": "Wala: Kawalan — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення наявності передається словом wala, антонімом до may/mayroon, — самостійне слово, а не звичайне заперечення hindi.",
            "en": {
              "text": "Negating existence is expressed with the word wala, the antonym of may/mayroon — a standalone word, not the ordinary negator hindi."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Wala akong pera.",
                "У мене немає грошей."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negative Existential: wala — A2"
      },
      {
        "id": "prepositions-simple",
        "title": "Mga Pang-ukol — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "table",
            "title": "Прийменники",
            "rows": [
              [
                "з (разом)",
                "kasama"
              ],
              [
                "для",
                "para sa"
              ],
              [
                "з (від)",
                "mula sa"
              ]
            ],
            "en": {
              "title": "Prepositions"
            }
          }
        ],
        "titleEn": "Simple Prepositions — A2"
      },
      {
        "id": "topic-fronting-inversion",
        "title": "Pagbaligtad: Ay — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Підмет можна винести на початок речення перед дієсловом, вставивши інверсійну частку ay, — стилістичний варіант звичайного VSO-порядку, вживаний для наголосу чи в офіційному мовленні.",
            "en": {
              "text": "The subject can be fronted to the start of the sentence before the verb, with the inversion particle ay inserted — a stylistic variant of the ordinary VSO order, used for emphasis or formal speech."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ang bata ay kumain.",
                "Дитина з'їла (наголос на дитині, офіційний стиль)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Topic Fronting: ay — B2"
      },
      {
        "id": "stative-verb-prefix-ma",
        "title": "Pandiwang Pang-uri: Ma- — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Багато прикметників-станів утворюються префіксом ma-, доданим до кореня, поводячись граматично як стативні дієслова, а не окрема частина мови.",
            "en": {
              "text": "Many stative adjectives are formed with the prefix ma-, added to the root, behaving grammatically like stative verbs rather than a separate part of speech."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ganda (краса) → maganda (гарний)",
                "beauty → beautiful (stative ma- prefix)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Stative Prefix: ma- — B1"
      },
      {
        "id": "baybayin-script-revival",
        "title": "Baybayin: Sinaunang Sulat — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Байбайін — доколоніальна складова абетка, витіснена латинкою за іспанського панування; сьогодні пережила символічне відродження на грошах, документах і в татуюваннях як символ доколоніальної ідентичності.",
            "en": {
              "text": "Baybayin is a pre-colonial syllabic script, displaced by the Latin alphabet under Spanish rule; today it has seen a symbolic revival on currency, documents, and tattoos as a marker of pre-colonial identity."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ᜊᜌ᜔ᜊᜌᜒᜈ᜔ (baybayin)",
                "written in the Baybayin script"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Baybayin: Pre-Colonial Script Revival — B2"
      },
      {
        "id": "taglish-code-switching",
        "title": "Taglish: Paghahalo ng Wika — B1",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Постколоніальна двомовність із англійською призвела до повсюдного перемикання кодів (Taglish) у повсякденному мовленні, особливо в містах, — окрема соціолінгвістична норма, а не помилка чи неповне знання мови.",
            "en": {
              "text": "Post-colonial bilingualism with English led to pervasive code-switching (Taglish) in everyday speech, especially in cities — a distinct sociolinguistic norm, not an error or incomplete language knowledge."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Type ko yung movie na yun.",
                "Мені подобається той фільм (перемикання кодів)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Taglish Code-Switching — B1"
      },
      {
        "id": "filipino-vs-tagalog-distinction",
        "title": "Filipino at Tagalog: Pagkakaiba — B2",
        "emoji": "🇵🇭",
        "sections": [
          {
            "type": "intro",
            "text": "Офіційна національна мова Філіппін називається 'філіпіно', а не 'тагальська': вона стандартизована на основі тагальської, але офіційно повинна вбирати слова з інших філіппінських мов, — тонка політична й лінгвістична відмінність.",
            "en": {
              "text": "The Philippines' official national language is called 'Filipino', not 'Tagalog': it is standardized on a Tagalog base but officially meant to absorb words from other Philippine languages — a subtle political and linguistic distinction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Filipino (pambansang wika) vs. Tagalog (rehiyon)",
                "Filipino (national language) vs. Tagalog (regional language)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Filipino vs. Tagalog: The Distinction — B2"
      },
      {
        "id": "bayanihan-community-spirit",
        "title": "Bayanihan — B1",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Баяніхан — традиція колективної взаємодопомоги сусідів, символічно втілена в образі перенесення цілого будинку на нове місце спільними зусиллями громади, — уживається сьогодні для будь-якого прояву громадянської солідарності.",
            "en": {
              "text": "Bayanihan is the tradition of collective neighborly mutual aid, symbolically embodied in the image of an entire house being carried to a new location by the community's combined effort — used today for any expression of civic solidarity."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "diwang bayanihan",
                "дух баяніхан (спільної взаємодопомоги)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Bayanihan: Community Spirit — B1"
      },
      {
        "id": "po-opo-respect-particles",
        "title": "Po at Opo: Paggalang — A2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Частки po (у стверджувальних реченнях) та opo ('так', ввічливо) обов'язково додаються при звертанні до старших чи незнайомців, — окремий рівень ввічливості, вбудований у кожне речення, а не лише в займенник.",
            "en": {
              "text": "The particles po (in statements) and opo ('yes', polite) are obligatorily added when addressing elders or strangers — a distinct politeness level built into every sentence, not just the pronoun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Salamat po.",
                "Дякую (ввічливо)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Po and Opo: Respect Particles — A2"
      },
      {
        "id": "jeepney-vocabulary",
        "title": "Jeepney — B1",
        "emoji": "🚙",
        "sections": [
          {
            "type": "intro",
            "text": "Джипні — переобладнані з військових джипів по Другій світовій війні маршрутки, розписані яскравими візерунками, — впізнаваний символ філіппінського міського життя з власною лексикою для маршрутів і плати за проїзд.",
            "en": {
              "text": "Jeepneys — WWII military jeeps repurposed as colorful shared minibuses — are a recognizable symbol of Philippine urban life, with their own vocabulary for routes and fares."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Para po! (сигнал водію зупинитися)",
                "Stop, please! (signal to the driver)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Jeepney Vocabulary — B1"
      },
      {
        "id": "adobo-food-culture",
        "title": "Adobo — A2",
        "emoji": "🍲",
        "sections": [
          {
            "type": "intro",
            "text": "Адобо — тушковане в оцті, соєвому соусі й часнику м'ясо, вважається неофіційною національною стравою, попри те, що назва й спосіб приготування походять від іспанського слова, а не питомого рецепта.",
            "en": {
              "text": "Adobo — meat stewed in vinegar, soy sauce, and garlic — is considered the unofficial national dish, even though the name and cooking method come from a Spanish word rather than a native recipe."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "adobong manok",
                "куряче адобо"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adobo: The National Dish — A2"
      },
      {
        "id": "colors",
        "title": "Mga Kulay — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "червоний",
                "pula"
              ],
              [
                "чорний",
                "itim"
              ],
              [
                "білий",
                "puti"
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
        "id": "numbers-tens",
        "title": "Bilang: Sampu — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "Десятки",
            "rows": [
              [
                "20",
                "dalawampu"
              ],
              [
                "100",
                "isandaan"
              ]
            ],
            "en": {
              "title": "Tens"
            }
          }
        ],
        "titleEn": "Numbers: Tens — A2"
      },
      {
        "id": "days-spanish-derived",
        "title": "Mga Araw: Espanyol na Pinagmulan — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "понеділок",
                "Lunes"
              ],
              [
                "п'ятниця",
                "Biyernes"
              ],
              [
                "неділя",
                "Linggo"
              ]
            ],
            "en": {
              "title": "Days"
            }
          }
        ],
        "titleEn": "Days of the Week (Spanish-Derived) — A2"
      },
      {
        "id": "family-terms",
        "title": "Pamilya — A2",
        "emoji": "👪",
        "sections": [
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "батько",
                "tatay/ama"
              ],
              [
                "мати",
                "nanay/ina"
              ],
              [
                "брат",
                "kapatid"
              ]
            ],
            "en": {
              "title": "Family"
            }
          }
        ],
        "titleEn": "Family Terms — A2"
      },
      {
        "id": "greetings",
        "title": "Pagbati — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Вітання",
            "rows": [
              [
                "Привіт",
                "Kumusta"
              ],
              [
                "Дякую",
                "Salamat"
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
        "title": "Panahon — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "araw"
              ],
              [
                "дощ",
                "ulan"
              ],
              [
                "вітер",
                "hangin"
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
        "title": "Mga Bahagi ng Katawan — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "ulo"
              ],
              [
                "рука",
                "kamay"
              ],
              [
                "око",
                "mata"
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
        "id": "barong-tagalog-clothing",
        "title": "Barong Tagalog — B1",
        "emoji": "👔",
        "sections": [
          {
            "type": "intro",
            "text": "Баронг тагальський — напівпрозора вишита сорочка з волокна ананаса чи банана, офіційний національний одяг чоловіків, який носять поверх майки без піджака навіть на найурочистіших подіях.",
            "en": {
              "text": "The barong tagalog is a semi-transparent embroidered shirt made of pineapple or banana fiber, the official men's national dress, worn over an undershirt with no jacket even at the most formal events."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "magsuot ng barong",
                "надягнути баронг"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Barong Tagalog: National Dress — B1"
      },
      {
        "id": "animals-vocabulary",
        "title": "Mga Hayop — A2",
        "emoji": "🐃",
        "sections": [
          {
            "type": "table",
            "title": "Тварини",
            "rows": [
              [
                "карабао (буйвол)",
                "kalabaw"
              ],
              [
                "собака",
                "aso"
              ],
              [
                "курка",
                "manok"
              ]
            ],
            "en": {
              "title": "Animals"
            }
          }
        ],
        "titleEn": "Animal Vocabulary — A2"
      },
      {
        "id": "cardinal-directions",
        "title": "Mga Direksyon — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "table",
            "title": "Сторони світу",
            "rows": [
              [
                "північ",
                "hilaga"
              ],
              [
                "південь",
                "timog"
              ],
              [
                "схід",
                "silangan"
              ],
              [
                "захід",
                "kanluran"
              ]
            ],
            "en": {
              "title": "Directions"
            }
          }
        ],
        "titleEn": "Cardinal Directions — B1"
      },
      {
        "id": "archipelago-geography",
        "title": "Kapuluan: 7,000 na Isla — B2",
        "emoji": "🏝️",
        "sections": [
          {
            "type": "intro",
            "text": "Філіппінський архіпелаг налічує понад 7000 островів і понад 180 мов, тож тагальська/філіпіно є лише одним із багатьох рідних мовних середовищ, а не єдиною автохтонною мовою країни.",
            "en": {
              "text": "The Philippine archipelago has over 7,000 islands and more than 180 languages, so Tagalog/Filipino is just one of many native linguistic environments, not the country's sole indigenous language."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "7,000 isla, 180+ wika",
                "7,000 islands, 180+ languages"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Philippine Archipelago's Linguistic Diversity — B2"
      },
      {
        "id": "balikbayan-diaspora",
        "title": "Balikbayan: Diaspora — B2",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Balikbayan ('той, хто повертається на батьківщину') — слово для філіппінського трудового мігранта чи діаспорянина, з власним словом balikbayan box — коробкою подарунків, яку відправляють додому родині.",
            "en": {
              "text": "Balikbayan ('one who returns to the homeland') is the word for a Filipino overseas worker or diaspora member, with its own term balikbayan box — a gift box sent home to family."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "balikbayan box",
                "коробка подарунків для родини (від мігранта)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Balikbayan: The Filipino Diaspora — B2"
      },
      {
        "id": "clothing-vocabulary",
        "title": "Damit — A2",
        "emoji": "👕",
        "sections": [
          {
            "type": "table",
            "title": "Одяг",
            "rows": [
              [
                "сорочка",
                "kamiseta"
              ],
              [
                "взуття",
                "sapatos"
              ]
            ],
            "en": {
              "title": "Clothing"
            }
          }
        ],
        "titleEn": "Clothing Vocabulary — A2"
      },
      {
        "id": "food-vocabulary",
        "title": "Pagkain — A2",
        "emoji": "🍚",
        "sections": [
          {
            "type": "table",
            "title": "Їжа",
            "rows": [
              [
                "рис",
                "kanin"
              ],
              [
                "вода",
                "tubig"
              ],
              [
                "риба",
                "isda"
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
        "id": "karaoke-culture",
        "title": "Karaoke: Kultura ng Awitan — B1",
        "emoji": "🎤",
        "sections": [
          {
            "type": "intro",
            "text": "Карaoke (часто зване videoke на Філіппінах) — надзвичайно поширене соціальне дозвілля на святах і вечірках, настільки популярне, що спричинило винахід власного протоколу пісенного етикету.",
            "en": {
              "text": "Karaoke (often called videoke in the Philippines) is an extremely widespread social pastime at celebrations and parties, popular enough to have generated its own singing-etiquette protocol."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mag-videoke",
                "співати відеоке"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Karaoke/Videoke Culture — B1"
      },
      {
        "id": "utang-na-loob-debt-of-gratitude",
        "title": "Utang na Loob — B2",
        "emoji": "💝",
        "sections": [
          {
            "type": "intro",
            "text": "Utang na loob ('внутрішній борг вдячності') — непорушний соціальний обов'язок віддячити за отриману допомогу, що триває часом усе життя й не зводиться до грошового розрахунку, — стрижневе поняття філіппінських стосунків.",
            "en": {
              "text": "Utang na loob ('inner debt of gratitude') is an unbreakable social obligation to repay help received, sometimes lasting a lifetime and not reducible to a monetary transaction — a core concept of Filipino relationships."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "may utang na loob sa kanya",
                "має перед ним борг вдячності"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Utang na Loob: Debt of Gratitude — B2"
      },
      {
        "id": "coordinating-conjunctions-extra",
        "title": "Karagdagang Pangatnig — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Сполучник kasi ('тому що') і частка kaya ('отже') розширюють базовий набір at/o/pero, додаючи причинові й наслідкові зв'язки.",
            "en": {
              "text": "The conjunction kasi ('because') and the particle kaya ('therefore') extend the basic at/o/pero set, adding causal and consequential links."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nasa bahay ako kasi umuulan.",
                "Я вдома, бо йде дощ."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Further Conjunctions — B1"
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
        "id": "zero-copula-no-be-verb",
        "title": "Walang 'To Be': Zero Copula — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Тагальська взагалі не має дієслова 'бути' в теперішньому часі: підмет і присудок просто стоять поруч, — не виняток в одному дієслові, а повна відсутність цілої граматичної категорії.",
            "en": {
              "text": "Tagalog has no verb 'to be' in the present tense at all: the subject and predicate simply stand side by side — not an exception in one verb, but the total absence of an entire grammatical category."
            }
          },
          {
            "type": "table",
            "title": "Нульова зв'язка",
            "rows": [
              [
                "Maganda siya. (немає дієслова 'бути')",
                "She [is] beautiful. (no 'to be' verb present)"
              ]
            ],
            "en": {
              "title": "Zero Copula"
            }
          }
        ],
        "titleEn": "Zero Copula: No 'To Be' Verb — B1"
      },
      {
        "id": "irregular-focus-verb-kain",
        "title": "Di-Regular na Pokus: Kain → Kumain — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дуже частотних дієслів, зокрема kain ('їсти'), утворюють фокус на діячі за допомогою -um-, вставленого нерегулярно порівняно з фонетичною формою більшості інших коренів того самого класу.",
            "en": {
              "text": "A handful of very frequent verbs, including kain ('to eat'), form the actor focus with -um- inserted irregularly compared to the phonetic pattern of most other roots in the same class."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна вставка інфікса",
            "rows": [
              [
                "kain → kumain (не *kainum)",
                "eat → to eat (irregular infix placement)"
              ]
            ],
            "en": {
              "title": "Irregular Infix Placement"
            }
          }
        ],
        "titleEn": "Irregular Focus Formation: kain → kumain — B2"
      },
      {
        "id": "irregular-comparative-mabuti",
        "title": "Di-Regular na Paghahambing: Mabuti → Mas Mabuti — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "У розмовному мовленні порівняльний ступінь mabuti ('добрий') часто замінюють запозиченим з англійської словом mas better, поєднуючи тагальську частку з англійським прикметником, — гібридна форма поза звичайною словотворчою моделлю.",
            "en": {
              "text": "In colloquial speech, the comparative of mabuti ('good') is often replaced with the English-borrowed mas better, combining the Tagalog particle with an English adjective — a hybrid form outside the ordinary derivational pattern."
            }
          },
          {
            "type": "table",
            "title": "Гібридне запозичене порівняння",
            "rows": [
              [
                "mas mabuti (регулярне) vs. mas better (розмовне, гібридне)",
                "better (regular) vs. mas better (colloquial English-Tagalog hybrid)"
              ]
            ],
            "en": {
              "title": "Hybrid Loan Comparative"
            }
          }
        ],
        "titleEn": "Irregular Hybrid Comparative: mas better — B1"
      }
    ]
  }
];
