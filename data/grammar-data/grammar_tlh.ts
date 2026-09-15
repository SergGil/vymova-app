// Vymova — data/grammar-data/grammar_tlh.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_TLH: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "ghojmoHwI' mu'mey — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У клінгонській, мові, створеній лінгвістом Марком Окрандом для \"Зоряного шляху\", дієслово зазвичай має незвичний для людських мов порядок додаток-присудок-підмет, а займенник підмета часто пропускають, бо його показує префікс дієслова.",
            "en": {
              "text": "In Klingon, created by linguist Marc Okrand for Star Trek, the verb usually follows an object-verb-subject order rare among human languages, and the subject pronoun is often dropped since a verb prefix already marks it."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "jIH"
              ],
              [
                "ти",
                "SoH"
              ],
              [
                "він / вона (розумна істота)",
                "ghaH"
              ],
              [
                "воно (нежива річ)",
                "'oH"
              ],
              [
                "ми",
                "maH"
              ],
              [
                "ви",
                "tlhIH"
              ],
              [
                "вони (розумні істоти)",
                "chaH"
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
        "id": "no-adjectives-stative-verbs",
        "title": "pagh Del mu'mey: mu'tlheghvam vIneH — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Клінгонська взагалі не має окремого класу прикметників: значення 'бути великим' передає саме стативне дієслово tIn, без потреби в допоміжному дієслові 'бути'.",
            "en": {
              "text": "Klingon has no separate adjective word class at all: the meaning 'to be big' is conveyed by the stative verb tIn itself, with no need for an auxiliary 'to be'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "juH tIn.",
                "Дім великий (букв. 'дім великіє')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "No Adjectives: Stative Verbs Only — A2"
      },
      {
        "id": "subject-object-prefix-portmanteau",
        "title": "mIw'a': verbal prefixes — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслівний префікс одночасно кодує і підмет, і додаток однією неподільною формою (не двома окремими морфемами): існує близько 29 таких комбінованих префіксів залежно від пари 'хто-кого'.",
            "en": {
              "text": "The verb prefix simultaneously encodes both subject and object in a single indivisible form (not two separate morphemes): there are around 29 such combined prefixes depending on the 'who-whom' pair."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "qatlho' (я-тобі + дякувати)",
                "I thank you (single prefix qa- = 'I to you')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Subject-Object Prefix Portmanteau — B2"
      },
      {
        "id": "verb-suffix-type-slots",
        "title": "mu'meH mIw: 9 Hoch — B2",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікси дієслова поділені на дев'ять пронумерованих типів (заперечення, здатність, вид, синтаксис тощо), і вони обов'язково приєднуються в цьому строгому порядку, а не довільно.",
            "en": {
              "text": "Verb suffixes are grouped into nine numbered types (negation, ability, aspect, syntax, and so on), and they must attach in this strict order, not arbitrarily."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "vIlegh + laH + pu' (могти + завершено, у визначеному порядку)",
                "'could have seen' (ability-suffix before perfective-suffix, fixed order)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Nine Ordered Verb Suffix Types — B2"
      },
      {
        "id": "deliberately-alien-design",
        "title": "wo' Hol: Qotlh Hol — B1",
        "emoji": "👽",
        "sections": [
          {
            "type": "intro",
            "text": "Лінгвіст Марк Окранд навмисно уникав типових для людських мов рис (поширеного порядку слів, м'яких приголосних, прикметників), щоб клінгонська звучала й граматично 'по-справжньому чужою', а не просто екзотично.",
            "en": {
              "text": "Linguist Marc Okrand deliberately avoided features typical of human languages (common word orders, soft consonants, adjectives) so that Klingon would sound and function 'genuinely alien' rather than merely exotic."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "OVS-порядок, увулярні й гортанні приголосні",
                "OVS order, uvular and ejective consonants — deliberately rare among human languages"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Deliberately Alien Design Philosophy — B1"
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
        "id": "perfective-pu",
        "title": "-pu': ta'lu'pu' — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Доконаний вид утворюється суфіксом -pu', доданим до основи дієслова, позначаючи завершену дію без наголосу на навмисності.",
            "en": {
              "text": "The perfective aspect is formed with the suffix -pu', added to the verb stem, marking a completed action with no emphasis on intentionality."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "jIlegh-pu'.",
                "Я вже побачив."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfective: -pu' — A2"
      },
      {
        "id": "deliberate-perfective-ta",
        "title": "-ta': meqvam vIta'pu' — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -ta' позначає завершену дію, зроблену навмисно, — окремий від -pu', що лишає навмисність невизначеною.",
            "en": {
              "text": "The suffix -ta' marks a completed action done on purpose — distinct from -pu', which leaves intentionality unspecified."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "jIQoy-ta'.",
                "Я почув це навмисно (уважно слухав)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Deliberate Perfective: -ta' — B1"
      },
      {
        "id": "continuous-tah",
        "title": "-taH: rIntaH — A1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривалий вид утворюється суфіксом -taH, доданим до основи дієслова, позначаючи дію, що триває без визначеного кінця.",
            "en": {
              "text": "The continuous aspect is formed with the suffix -taH, added to the verb stem, marking an action ongoing with no defined endpoint."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "jIleghtaH.",
                "Я саме бачу (триває)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Continuous: -taH — A1"
      },
      {
        "id": "approaching-completion-li",
        "title": "-lI': ghoS — B1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -lI' позначає тривалу дію, що наближається до завершення, — окремий від -taH, який не має цього відтінку 'скоро закінчиться'.",
            "en": {
              "text": "The suffix -lI' marks an ongoing action approaching completion — distinct from -taH, which carries no 'soon to finish' nuance."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "jIleghlI'.",
                "Я саме дивлюся (і скоро закінчу)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Approaching Completion: -lI' — B1"
      },
      {
        "id": "imperative-mood",
        "title": "ra'meH mIw: yI-/pe- — A1",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб утворюється не суфіксом, а зміною самого дієслівного префікса на yI- (однина) чи pe- (множина), заміняючи звичайний підметово-додатковий префікс.",
            "en": {
              "text": "The imperative is formed not with a suffix but by changing the verb prefix itself to yI- (singular) or pe- (plural), replacing the ordinary subject-object prefix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "yIleghQo'!",
                "Не дивись!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imperative Prefix: yI-/pe- — A1"
      },
      {
        "id": "negation-be",
        "title": "-be': ghobe' — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Загальне заперечення утворюється суфіксом -be', доданим одразу після дієслівного кореня, — той самий суфікс, що заперечує будь-яку частину мови.",
            "en": {
              "text": "General negation is formed with the suffix -be', added right after the verb root — the same suffix negates virtually any part of speech."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "jIleghbe'.",
                "Я не бачу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation: -be' — A2"
      },
      {
        "id": "refusal-qo",
        "title": "-Qo': lajQo' — B1",
        "emoji": "🙅",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -Qo' позначає навмисну відмову виконати дію, — окремий від нейтрального заперечення -be', яке лише повідомляє про відсутність дії.",
            "en": {
              "text": "The suffix -Qo' marks a deliberate refusal to do something — distinct from the neutral negator -be', which merely states that the action is absent."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "jIleghQo'.",
                "Я відмовляюся дивитися."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Refusal: -Qo' — B1"
      },
      {
        "id": "potential-lah",
        "title": "-laH: laH — A2",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість виражається суфіксом -laH, доданим до основи дієслова, — 'могти зробити'.",
            "en": {
              "text": "Ability or possibility is expressed with the suffix -laH, added to the verb stem — 'can/be able to do'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "jIleghlaH.",
                "Я можу бачити."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential: -laH — A2"
      },
      {
        "id": "necessity-nis",
        "title": "-nIS: pab — B1",
        "emoji": "📋",
        "sections": [
          {
            "type": "intro",
            "text": "Необхідність виражається суфіксом -nIS, доданим до основи дієслова, — 'мусити зробити'.",
            "en": {
              "text": "Necessity is expressed with the suffix -nIS, added to the verb stem — 'must/need to do'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "jIleghnIS.",
                "Я мушу бачити."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Necessity: -nIS — B1"
      },
      {
        "id": "willingness-qang",
        "title": "-qang: yajqang — B2",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Готовність чи бажання виражається суфіксом -qang, доданим до основи дієслова, — 'охоче зробити'.",
            "en": {
              "text": "Willingness or readiness is expressed with the suffix -qang, added to the verb stem — 'be willing to do'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "jIleghqang.",
                "Я охоче подивлюся."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Willingness: -qang — B2"
      },
      {
        "id": "conditional-chugh",
        "title": "-chugh: teplu' — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення утворюється суфіксом -chugh, доданим до дієслова підрядного речення, — сам суфікс означає 'якщо', без окремого сполучника.",
            "en": {
              "text": "A conditional sentence is formed with the suffix -chugh, added to the verb of the subordinate clause — the suffix itself means 'if', with no separate conjunction needed."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "SIS chugh, juHDaq jIratlh.",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: -chugh — B1"
      },
      {
        "id": "causal-mo",
        "title": "-mo': meq — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Причиновий зв'язок утворюється суфіксом -mo', доданим до дієслова підрядного речення, — 'тому що'.",
            "en": {
              "text": "A causal link is formed with the suffix -mo', added to the verb of the subordinate clause — 'because'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "SIS mo', juHDaq jIratlh.",
                "Я залишаюся вдома, бо йде дощ."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Causal: -mo' — B1"
      },
      {
        "id": "inceptive-choh",
        "title": "-choH: lIH — B2",
        "emoji": "🌱",
        "sections": [
          {
            "type": "intro",
            "text": "Початковий вид утворюється суфіксом -choH, доданим до основи дієслова, — позначає, що дія чи стан щойно почалися.",
            "en": {
              "text": "The inceptive aspect is formed with the suffix -choH, added to the verb stem — marking that an action or state has just begun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tIn-choH.",
                "Він почав рости."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Inceptive: -choH — B2"
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
        "id": "word-order-ovs",
        "title": "mu'tlhegh: chuv-verb-subject — A1",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — додаток-присудок-підмет (OVS), — один із найрідкісніших порядків слів серед людських мов, обраний навмисно для чужинського звучання.",
            "en": {
              "text": "The basic word order is Object-Verb-Subject (OVS) — one of the rarest word orders among human languages, deliberately chosen for an alien feel."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "puq legh yaS. (дитину-бачить-офіцер)",
                "The officer sees the child (object-verb-subject order)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Word Order: OVS — A1"
      },
      {
        "id": "plural-suffix-classes",
        "title": "Hoch mu'mey: -pu', -Du', -mey — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється трьома різними суфіксами залежно від класу іменника: -pu' для розумних істот, -Du' для частин тіла, -mey для решти предметів.",
            "en": {
              "text": "The plural is formed with three different suffixes depending on the noun class: -pu' for sentient beings, -Du' for body parts, -mey for everything else."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tlhIngan → tlhInganpu' (клінгони, розумні)",
                "Klingon → Klingons (sentient-being plural)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Three Plural Suffix Classes — B1"
      },
      {
        "id": "no-copula-identity",
        "title": "pagh vam: 'oH — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Речення тотожності ('X — це Y') утворюється просто зіставленням двох іменникових фраз плюс займенниковий суфікс -'e' на першій, без окремого дієслова 'бути'.",
            "en": {
              "text": "An identity sentence ('X is Y') is formed simply by juxtaposing two noun phrases plus the pronominal suffix -'e' on the first, with no separate verb 'to be'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tlhIngan jIH.",
                "Я клінгон (букв. 'клінгон я')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "No Copula for Identity — A2"
      },
      {
        "id": "comparative-law-pus",
        "title": "-law'/-puS: rap — B2",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється незвичайною двочастинною конструкцією: 'X дуже [прикметник], Y мало [прикметник]' (-law'/-puS), а не окремим граматичним ступенем.",
            "en": {
              "text": "The comparative is formed with an unusual two-clause construction: 'X is very [adjective], Y is little [adjective]' (-law'/-puS), rather than a dedicated grammatical degree."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tIn puH'a' law', tIn tera' puS.",
                "Земля більша за планету (букв. 'планета дуже велика, Земля мало велика')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: -law'/-puS Construction — B2"
      },
      {
        "id": "relative-clause-bogh",
        "title": "-bogh: mu'tlhegh — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Означальні (відносні) підрядні речення вводяться суфіксом -bogh, доданим до дієслова підрядного речення, без окремого відносного займенника.",
            "en": {
              "text": "Relative clauses are introduced by the suffix -bogh, added to the verb of the subordinate clause, with no separate relative pronoun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "legh-bogh yaS",
                "офіцер, що бачить"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clause: -bogh — B1"
      },
      {
        "id": "noun-suffix-type-slots",
        "title": "DIp mu'mey: vagh Hoch — B2",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Іменникові суфікси теж поділені на п'ять пронумерованих типів (збільшувальний -'a', зменшувальний -Hom, множина, 'так званий' -qoq, означений -na') у строго визначеному порядку.",
            "en": {
              "text": "Noun suffixes are also grouped into five numbered types (augmentative -'a', diminutive -Hom, plural, 'so-called' -qoq, definite -na') in a strictly fixed order."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tlhIngan-Hom (маленький клінгон)",
                "little Klingon (diminutive suffix)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Five Noun Suffix Types — B2"
      },
      {
        "id": "topicalizer-e",
        "title": "-'e': mIw — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -'e', доданий до іменника, позначає його як тему висловлювання (те, про що йдеться), надаючи особливого наголосу.",
            "en": {
              "text": "The suffix -'e', added to a noun, marks it as the topic of the statement (what is being talked about), giving it special emphasis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tlhIngan Hol'e' vIjatlh.",
                "Що стосується клінгонської мови, я нею говорю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Topicalizer: -'e' — B1"
      },
      {
        "id": "cardinal-numbers",
        "title": "mI': wa'-Hut — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "1",
                "wa'"
              ],
              [
                "2",
                "cha'"
              ],
              [
                "3",
                "wej"
              ],
              [
                "5",
                "vagh"
              ],
              [
                "10",
                "wa'maH"
              ]
            ],
            "en": {
              "title": "Numbers 1-10"
            }
          }
        ],
        "titleEn": "Cardinal Numbers 1-10 — A1"
      },
      {
        "id": "interrogatives",
        "title": "wanI' mu'mey — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто",
                "'Iv"
              ],
              [
                "що",
                "nuq"
              ],
              [
                "де",
                "nuqDaq"
              ],
              [
                "коли",
                "ghorgh"
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
        "id": "possessive-suffix-pronoun",
        "title": "wIj, lIj: Hey — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність позначається суфіксом, доданим до самого іменника (-wIj 'мій', -lIj 'твій'), без окремого присвійного займенника перед ним.",
            "en": {
              "text": "Possession is marked with a suffix attached to the noun itself (-wIj 'my', -lIj 'your'), with no separate possessive pronoun placed before it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "juH → juHwIj",
                "дім → мій дім"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessive Suffixes: -wIj, -lIj — A2"
      },
      {
        "id": "existence-ghaj-ghoj",
        "title": "ghaj: ownership — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Володіння передається дієсловом ghaj ('мати'), яке граматично поводиться як звичайне перехідне дієслово, узгоджене з підметом і додатком через звичайний префікс.",
            "en": {
              "text": "Ownership is expressed with the verb ghaj ('to have'), which behaves grammatically like an ordinary transitive verb, agreeing with subject and object through the regular prefix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "taj vIghaj.",
                "У мене є ніж."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possession Verb: ghaj — A2"
      },
      {
        "id": "no-articles",
        "title": "pagh mu'meH: articles — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Клінгонська взагалі не має артиклів, ні означеного, ні неозначеного: контекст сам визначає, чи йдеться про конкретний предмет.",
            "en": {
              "text": "Klingon has no articles at all, neither definite nor indefinite: context alone determines whether a specific thing is meant."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "taj (ніж/цей ніж/якийсь ніж)",
                "knife/the knife/a knife — all the same bare word"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "No Articles — A2"
      },
      {
        "id": "suppose-so-called-qoq",
        "title": "-qoq: 'так звана' — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -qoq, доданий до іменника, передає значення 'так звана/нібито', виражаючи сумнів чи іронію щодо позначуваного, — риса рідкісна серед мовних систем.",
            "en": {
              "text": "The suffix -qoq, added to a noun, conveys the meaning 'so-called/alleged', expressing doubt or irony about the referent — a feature rare among grammatical systems."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "yaS-qoq",
                "так званий офіцер"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Suffix -qoq: 'So-Called' — B2"
      },
      {
        "id": "adverbs-first-position",
        "title": "vIttlhegh mu'mey: bIH — B1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівники завжди стоять на самому початку речення, перед додатком і дієсловом, а не поруч із дієсловом, як у більшості мов.",
            "en": {
              "text": "Adverbs always stand at the very start of the sentence, before the object and verb, rather than next to the verb as in most languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "reH puq legh yaS.",
                "Офіцер завжди бачить дитину (прислівник reH на початку)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adverbs in First Position — B1"
      },
      {
        "id": "conjunctions",
        "title": "mu'meychaj: 'ej — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і (для речень)",
                "'ej"
              ],
              [
                "і (для іменників)",
                "je"
              ],
              [
                "але",
                "'ach"
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
        "id": "vocative-simple",
        "title": "pongmey: звертання — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "При звертанні до когось ім'я вживається без жодних змін, часто на самому початку речення перед головним підметом.",
            "en": {
              "text": "In direct address, a name is used unchanged, often placed at the very start of the sentence before the main clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Worf, yIghoS!",
                "Ворфе, іди сюди!"
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
        "id": "type-9-suffix-final",
        "title": "DIp 9: mu'tlhegh HochHom — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікси дев'ятого типу (умовний -chugh, причиновий -mo', часовий -DI' 'як тільки') обов'язково стоять останніми серед усіх суфіксів дієслова, замикаючи весь ланцюжок.",
            "en": {
              "text": "Type-9 suffixes (conditional -chugh, causal -mo', temporal -DI' 'as soon as') must come last among all verb suffixes, closing off the entire chain."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "legh-taH-DI' (бачить-триває-щойно)",
                "as soon as [he] is seeing (aspect suffix before type-9 suffix)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Type-9 Suffixes Close the Chain — B2"
      },
      {
        "id": "pronoun-as-verb",
        "title": "mu'mey rur verb: jIH — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Особовий займенник сам по собі може функціонувати як повне речення тотожності без будь-якого дієслова, — 'jIH' саме означає 'це я'.",
            "en": {
              "text": "A personal pronoun by itself can function as a complete identity sentence with no verb whatsoever — 'jIH' alone means 'it is I'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "'Iv? jIH.",
                "Хто? Я."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pronoun as a Complete Sentence — B2"
      },
      {
        "id": "aspiration-consonant-inventory",
        "title": "ghItlh: consonants — B1",
        "emoji": "🔊",
        "sections": [
          {
            "type": "intro",
            "text": "Приголосна система містить увулярний Q, гортанну змичку ' та ретрофлексний D — набір, що поєднує звуки з різних, географічно віддалених людських мов світу, аби уникнути звучання, притаманного якійсь одній земній мовній родині.",
            "en": {
              "text": "The consonant inventory includes the uvular Q, the glottal stop ', and the retroflex D — a mix of sounds drawn from geographically distant human languages, avoiding any resemblance to a single Earth language family."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Qapla' (успіх)",
                "success (uvular Q, distinctive Klingon sound)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Klingon Consonant Inventory — B1"
      },
      {
        "id": "verb-as-noun-nominalizer",
        "title": "-wI'/-ghach: nominalizer — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово перетворюється на іменник суфіксом -wI' ('той, хто робить дію') чи -ghach (абстрактне поняття дії), утворюючи нові слова без окремого кореня.",
            "en": {
              "text": "A verb is turned into a noun with the suffix -wI' ('the one who does the action') or -ghach (the abstract concept of the action), forming new words with no separate root."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ghoj (учитися) → ghojwI' (учень)",
                "to learn → student (the one who learns)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Nominalizer Suffixes: -wI'/-ghach — B2"
      },
      {
        "id": "question-word-position",
        "title": "wanI' mu': ghorgh chuv — B1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальне слово зазвичай стоїть на тому самому місці в реченні, яке б посідав відповідник у стверджувальному реченні, а не переноситься на початок, як в англійській.",
            "en": {
              "text": "A question word usually stays in the same position in the sentence that its answer would occupy in a statement, rather than fronting to the start as in English."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "nuq legh yaS?",
                "Що бачить офіцер?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Question Words Stay In Place — B1"
      },
      {
        "id": "exhortative-jup-prefix",
        "title": "jup ra'meH: 'нехай' — B2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Для наказу третій особі ('нехай він зробить') уживається частка jup перед дієсловом зі звичайним префіксом третьої особи, а не окремий граматичний спосіб, як юссив в інших мовах.",
            "en": {
              "text": "For a third-person command ('let him do it'), the particle jup is used before the verb with the ordinary third-person prefix, rather than a dedicated grammatical mood like the jussive found in other languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "jup legh.",
                "Нехай він побачить."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Third-Person Command: jup — B2"
      },
      {
        "id": "compound-noun-formation",
        "title": "mu'mey rojmeH: складні слова — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Складні іменники утворюються прямим поєднанням двох коренів без сполучного звука чи дефіса, причому другий елемент часто уточнює перший.",
            "en": {
              "text": "Compound nouns are formed by directly joining two roots with no connecting sound or hyphen, with the second element often specifying the first."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Hol (мова) + ghojmoH (навчати) → Hol ghojmoHwI' (учитель мови)",
                "language + teach → language teacher"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Noun Formation — B1"
      },
      {
        "id": "exclamation-particle",
        "title": "chaq, wa'leS: вигуки — B1",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Окремі вигукові частки (chaq 'можливо', vaj 'тоді') можуть уживатися самостійно без дієслова як цілі репліки, — характерна риса розмовної клінгонської, засвідчена в діалогах серіалу.",
            "en": {
              "text": "Standalone exclamatory particles (chaq 'perhaps', vaj 'then') can be used alone with no verb as complete utterances — a characteristic feature of colloquial Klingon attested in the show's dialogue."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "chaq!",
                "Можливо!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Standalone Exclamatory Particles — B1"
      },
      {
        "id": "no-passive-voice-marker",
        "title": "pagh Deghmey: passive — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан позначається окремим суфіксом -lu', доданим до дієслова, коли підмет пасивної форми лишається невизначеним чи неважливим, а не через зміну самого дієслова.",
            "en": {
              "text": "The passive is marked with the dedicated suffix -lu', added to the verb when the agent is unspecified or unimportant, rather than by altering the verb itself."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "leghlu'.",
                "Це побачено (ким — невідомо)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive-Like Suffix: -lu' — B2"
      },
      {
        "id": "nuqneh-greeting",
        "title": "nuqneH: 'Що ти хочеш?' — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "intro",
            "text": "Клінгонською немає слова для звичайного 'привіт': натомість вітаються фразою nuqneH ('Що ти хочеш?'), що прямо відображає прямолінійну воїнську культуру, для якої дружня балаканина зайва.",
            "en": {
              "text": "Klingon has no word for an ordinary 'hello': instead, people greet each other with nuqneH ('What do you want?'), directly reflecting a blunt warrior culture with no use for friendly small talk."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "nuqneH!",
                "Що ти хочеш! (вітання)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "nuqneH: The Klingon Greeting — A1"
      },
      {
        "id": "qapla-success",
        "title": "Qapla'! — A1",
        "emoji": "🎉",
        "sections": [
          {
            "type": "intro",
            "text": "Qapla' ('успіх') — універсальне побажання удачі й вітання з перемогою, що вживається так само часто, як 'вдачі' чи 'слава' у людських культурах.",
            "en": {
              "text": "Qapla' ('success') is the universal wish for luck and congratulation on victory, used as often as 'good luck' or 'glory' in human cultures."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Qapla'!",
                "Успіху!/Слава!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Qapla': Success — A1"
      },
      {
        "id": "honor-batlh",
        "title": "batlh: честь — B1",
        "emoji": "⚔️",
        "sections": [
          {
            "type": "intro",
            "text": "Слово batlh ('честь') — центральне поняття клінгонської культури, що визначає всю поведінку воїна; вислів batlh Daqawlu'taH ('тебе пам'ятатимуть із честю') — типова клінгонська епітафія.",
            "en": {
              "text": "The word batlh ('honor') is a central concept of Klingon culture, governing all warrior conduct; the phrase batlh Daqawlu'taH ('you will be remembered with honor') is a typical Klingon epitaph."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "batlh Daqawlu'taH.",
                "Тебе пам'ятатимуть із честю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Batlh: Honor — B1"
      },
      {
        "id": "petaq-insult",
        "title": "petaQ: образа — B1",
        "emoji": "😠",
        "sections": [
          {
            "type": "intro",
            "text": "petaQ — одна з найвідоміших клінгонських образ, що позначає боягуза чи людину без честі, — слово стало культурним символом клінгонської мови поза межами самого Star Trek.",
            "en": {
              "text": "petaQ is one of the most famous Klingon insults, denoting a coward or someone without honor — the word has become a cultural symbol of the Klingon language beyond Star Trek itself."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "petaQ!",
                "Боягузе! (образа)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "petaQ: An Insult — B1"
      },
      {
        "id": "bat-leth-weapon",
        "title": "bat'leth: зброя — B1",
        "emoji": "⚔️",
        "sections": [
          {
            "type": "intro",
            "text": "Бат'лет — фірмова вигнута двостороння шабля клінгонських воїнів, зі спеціальною термінологією для кожного бойового прийому, — один із найвпізнаваніших культурних символів клінгонів.",
            "en": {
              "text": "The bat'leth is the signature curved double-bladed sword of Klingon warriors, with dedicated terminology for each combat maneuver — one of the most recognizable Klingon cultural symbols."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "bat'leth luDelqu'",
                "битва на бат'летах"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Bat'leth: The Warrior's Weapon — B1"
      },
      {
        "id": "gagh-food-culture",
        "title": "gagh — B1",
        "emoji": "🍲",
        "sections": [
          {
            "type": "intro",
            "text": "Gagh — страва з живих серпентин-хробаків, яку клінгони їдять ще рухомою для найкращого смаку, — символ 'чужинської' кулінарної естетики, що навмисно суперечить людським харчовим нормам.",
            "en": {
              "text": "Gagh is a dish of live serpent worms, eaten still wriggling by Klingons for the best flavor — a symbol of an 'alien' culinary aesthetic deliberately at odds with human food norms."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "gagh vISop.",
                "Я їм ґаг."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gagh: Live-Worm Cuisine — B1"
      },
      {
        "id": "piqad-script",
        "title": "pIqaD — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "pIqaD — офіційна клінгонська писемність, зображувана в серіалі, але майже ніколи не вживана для реального навчання мови, оскільки Окранд не розробив послідовної системи відповідності знаків звукам.",
            "en": {
              "text": "pIqaD is the official Klingon script seen on screen in the show, but almost never used for actually learning the language, since Okrand never developed a consistent sound-to-symbol correspondence system for it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "latinizовану систему KLI використовують замість pIqaD",
                "the KLI's Latin-based romanization is used instead of pIqaD for real study"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "pIqaD: The On-Screen Script — B2"
      },
      {
        "id": "klingon-language-institute",
        "title": "Klingon Language Institute — B2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Інститут клінгонської мови (KLI) — реальна організація, заснована 1992 року, що досі проводить курси, публікує журнал і навіть організовує сертифікаційні іспити з клінгонської, рідкісний приклад активно живого штучного фандомного мови.",
            "en": {
              "text": "The Klingon Language Institute (KLI) is a real organization founded in 1992 that still runs courses, publishes a journal, and even administers Klingon proficiency certification exams — a rare example of an actively living fandom conlang."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "KLI (Klingon Language Institute)",
                "the Klingon Language Institute"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Klingon Language Institute — B2"
      },
      {
        "id": "hamlet-untranslated",
        "title": "\"taH pagh taHbe'\": Hamlet — B2",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Клінгонський переклад 'Гамлета' випущено з жартівливим підзаголовком 'неперекладений оригінал', обігруючи вигадку про те, що Шекспір насправді писав клінгонською.",
            "en": {
              "text": "A Klingon translation of 'Hamlet' was published with the joking subtitle 'the Restored Klingon Version', playing on the fictional conceit that Shakespeare originally wrote in Klingon."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "taH pagh taHbe'",
                "бути чи не бути (клінгонський Гамлет)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Klingon Hamlet — B2"
      },
      {
        "id": "empire-wo",
        "title": "tlhIngan wo': Імперія — B1",
        "emoji": "👑",
        "sections": [
          {
            "type": "intro",
            "text": "tlhIngan wo' ('Клінгонська Імперія') — офіційна назва держави клінгонів у леґендаріумі Star Trek, керованої Головним Радником і Верховною Радою, з окремою термінологією для рангів і територій.",
            "en": {
              "text": "tlhIngan wo' ('the Klingon Empire') is the official name of the Klingon state in the Star Trek canon, governed by a Chancellor and High Council, with its own terminology for ranks and territories."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tlhIngan wo'",
                "Клінгонська Імперія"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "tlhIngan wo': The Klingon Empire — B1"
      },
      {
        "id": "colors",
        "title": "rItlh: кольори — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "червоний",
                "Doq"
              ],
              [
                "чорний",
                "qIj"
              ],
              [
                "білий",
                "chIS"
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
        "title": "mI': maHmaH — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "Десятки",
            "rows": [
              [
                "20",
                "cha'maH"
              ],
              [
                "100",
                "vatlh"
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
        "id": "family-terms",
        "title": "qorDu': родина — A2",
        "emoji": "👪",
        "sections": [
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "батько",
                "vav"
              ],
              [
                "мати",
                "SoS"
              ],
              [
                "брат",
                "loDnI'"
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
        "id": "body-parts",
        "title": "porgh cheghmey: тіло — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "nach"
              ],
              [
                "рука",
                "ghop"
              ],
              [
                "око",
                "mIn"
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
        "id": "targ-animal",
        "title": "targh: тварина — B1",
        "emoji": "🐗",
        "sections": [
          {
            "type": "intro",
            "text": "Тарг — дика вепроподібна тварина клінгонської планети, полювання на яку вважається випробуванням честі, а її м'ясо — делікатесом, невіддільним від бенкетів клінгонського благородства.",
            "en": {
              "text": "The targ is a wild boar-like creature of the Klingon homeworld, hunting it considered a test of honor, and its meat a delicacy inseparable from feasts of Klingon nobility."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "targh vISop.",
                "Я їм тарга."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Targ: A Symbolic Animal — B1"
      },
      {
        "id": "opera-culture",
        "title": "paghmo' tIn mIS: опера — B2",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Клінгонська опера вважається вершиною мистецтва, а спів навмисно гучний і гортанний, схвально описуваний людьми в леґендаріумі як 'наче кричать', — навмисна відмова від людських музичних естетичних норм.",
            "en": {
              "text": "Klingon opera is considered a cultural pinnacle, its singing deliberately loud and guttural, described approvingly in canon by humans as sounding 'like screaming' — a deliberate rejection of human musical aesthetic norms."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "paghmo' tIn mIS bom",
                "клінгонська опера (пісня)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Klingon Opera Culture — B2"
      },
      {
        "id": "death-ritual-language",
        "title": "SoSlI' Quch: ритуал смерті — B2",
        "emoji": "⚰️",
        "sections": [
          {
            "type": "intro",
            "text": "Клінгонський поховальний обряд включає ритуальний крик воїна в момент смерті, що, за віруванням, попереджає духів у Сто-во-кор про прихід нового воїна, — специфічна лексика й церемонія, відсутня в реальних людських культурах.",
            "en": {
              "text": "The Klingon death ritual includes a warrior's ritual death howl, believed to warn the spirits in Sto-Vo-Kor of an incoming new warrior — specific vocabulary and ceremony absent from any real human culture."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "SIQ jIH.",
                "Я готовий (до смерті з честю)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Death Ritual Vocabulary — B2"
      },
      {
        "id": "greetings-farewell",
        "title": "прощання — A2",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Прощання",
            "rows": [
              [
                "Хай щастить тобі",
                "Qapla' batlh je"
              ],
              [
                "До зустрічі",
                "DIvI' Hol vIjatlhlaH"
              ]
            ],
            "en": {
              "title": "Farewells"
            }
          }
        ],
        "titleEn": "Farewell Expressions — A2"
      },
      {
        "id": "weather-vocabulary",
        "title": "muD tay': погода — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "pemHov"
              ],
              [
                "дощ",
                "SIS"
              ],
              [
                "вітер",
                "SuS"
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
        "id": "ranks-military",
        "title": "yaS pongmey: військові звання — B1",
        "emoji": "🎖️",
        "sections": [
          {
            "type": "table",
            "title": "Військові звання",
            "rows": [
              [
                "капітан",
                "HoD"
              ],
              [
                "генерал",
                "la'"
              ],
              [
                "солдат",
                "mang"
              ]
            ],
            "en": {
              "title": "Military Ranks"
            }
          }
        ],
        "titleEn": "Military Ranks — B1"
      },
      {
        "id": "star-trek-canon-status",
        "title": "Hol Qub: канонічний статус — B2",
        "emoji": "🖖",
        "sections": [
          {
            "type": "intro",
            "text": "Клінгонська — одна з небагатьох повністю розроблених мов, спеціально створених для кіно чи телебачення (разом із на'ві й дотракійською), із власною фонологією, граматикою й активним словником, який продовжує зростати.",
            "en": {
              "text": "Klingon is one of the few fully developed languages specifically created for film or television (alongside Na'vi and Dothraki), with its own phonology, grammar, and active vocabulary that continues to grow."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tlhIngan Hol (клінгонська мова)",
                "tlhIngan Hol (the Klingon language, its own self-name)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Klingon's Status as a Constructed Language — B2"
      },
      {
        "id": "hovqij-first-city",
        "title": "Qo'noS: домашня планета — B1",
        "emoji": "🪐",
        "sections": [
          {
            "type": "intro",
            "text": "Кроноc (Qo'noS) — рідна планета клінгонів у леґендаріумі, назва якої стала настільки культурно значущою, що фанати активно використовують її для позначення 'справжнього' клінгонського походження.",
            "en": {
              "text": "Qo'noS (Kronos) is the Klingon homeworld in canon, its name so culturally significant that fans actively use it to denote 'authentic' Klingon origin."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Qo'noSDaq jIghoS.",
                "Я йду на Кронос."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Qo'noS: The Klingon Homeworld — B1"
      },
      {
        "id": "mauk-tovar-ritual",
        "title": "mauk-to'vor: ритуал смерті — B2",
        "emoji": "🗡️",
        "sections": [
          {
            "type": "intro",
            "text": "Мок-товор — ритуал асистованої смерті для смертельно хворого клінгона, коли близька людина ритуально позбавляє його життя з честю, — специфічний культурний концепт без прямого людського відповідника.",
            "en": {
              "text": "Mauk-to'vor is the ritual of assisted death for a terminally ill Klingon, in which a close person ritually takes their life with honor — a specific cultural concept with no direct human equivalent."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mauk-to'vor chov",
                "провести ритуал мок-товор"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Mauk-to'Vor: The Death Ritual — B2"
      },
      {
        "id": "coordinating-conjunctions-extra",
        "title": "latlh mu'meychaj — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Частка qoj ('чи, або') і сполучник vaj ('отже, тоді') розширюють базовий набір 'ej/je/'ach, додаючи альтернативні й наслідкові зв'язки.",
            "en": {
              "text": "The particle qoj ('or, either') and the connector vaj ('so, then') extend the basic 'ej/je/'ach set, adding alternative and consequential links."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "SIS; vaj juHDaq jIratlh.",
                "Йде дощ; отже, я залишуся вдома."
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
        "id": "irregular-verb-taH",
        "title": "pagh mIw: taH — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово taH ('тривати/продовжувати бути') самé вживається без префікса підмет-додаток у певних ідіоматичних зворотах (наприклад, у знаменитій цитаті 'бути чи не бути'), — виняток із загального правила обов'язкового префікса.",
            "en": {
              "text": "The verb taH ('to continue/keep being') is itself used without a subject-object prefix in certain idiomatic constructions (such as the famous 'to be or not to be' quote) — an exception to the general rule of an obligatory prefix."
            }
          },
          {
            "type": "table",
            "title": "Виняток із правила префікса",
            "rows": [
              [
                "taH pagh taHbe' (без префікса)",
                "to be or not to be (no prefix, idiomatic exception)"
              ]
            ],
            "en": {
              "title": "Prefix Rule Exception"
            }
          }
        ],
        "titleEn": "Irregular Prefix-Free Usage: taH — B1"
      },
      {
        "id": "irregular-plural-loD-be",
        "title": "pagh mIw'a': loD → loDpu' — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дуже частотних іменників на позначення людей (наприклад, loD 'чоловік') мають множину, яка не завжди узгоджується строго з очікуваним класом -pu' через історичні фонетичні зміни, тож форму слід запам'ятовувати окремо.",
            "en": {
              "text": "A handful of very frequent nouns for people (such as loD 'man') have plurals that don't always align strictly with the expected -pu' class due to historical phonetic shifts, so the form must be memorized separately."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна множина",
            "rows": [
              [
                "loD → loDpu' (регулярне за формою, але вживання відрізняється)",
                "man → men (regular in form, but usage patterns differ from the strict rule)"
              ]
            ],
            "en": {
              "title": "Irregular Usage"
            }
          }
        ],
        "titleEn": "Irregular Plural Usage: loD → loDpu' — B2"
      },
      {
        "id": "irregular-comparative-qaq",
        "title": "pagh mIw: QaQ → QaQqu' — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Замість очікуваної регулярної конструкції -law'/-puS, прикметник QaQ ('добрий') найчастіше підсилюють суфіксом -qu' ('справді'), а не через двочастинну порівняльну модель, коли йдеться про абсолютну, а не відносну якість.",
            "en": {
              "text": "Instead of the expected regular -law'/-puS construction, the adjective QaQ ('good') is most often intensified with the suffix -qu' ('really'), rather than the two-clause comparative pattern, when absolute rather than relative quality is meant."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярне підсилення",
            "rows": [
              [
                "QaQ → QaQqu' (не двочастинна конструкція)",
                "good → really good (intensifying suffix, not the two-clause comparative)"
              ]
            ],
            "en": {
              "title": "Irregular Intensification"
            }
          }
        ],
        "titleEn": "Irregular Intensifier: QaQ → QaQqu' — B1"
      }
    ]
  }
];
