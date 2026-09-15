// Vymova — data/grammar-data/grammar_wo.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_WO: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Sant Wu Nit — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У волоф займенники мають дві форми: незалежну (як у таблиці нижче) і коротку, яка приєднується до дієслова як суфікс.",
            "en": {
              "text": "Wolof pronouns have two forms: an independent one (shown below) and a short one that attaches to the verb as a suffix."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "man"
              ],
              [
                "ти",
                "yow"
              ],
              [
                "він / вона / воно",
                "moom"
              ],
              [
                "ми",
                "nun"
              ],
              [
                "ви",
                "yeen"
              ],
              [
                "вони",
                "ñoom"
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
        "id": "noun-class-system",
        "title": "Ñoñal — B1",
        "emoji": "🗂️",
        "sections": [
          {
            "type": "intro",
            "text": "Волоф має систему іменникових класів, позначену не префіксом на самому іменнику (як у банту), а узгоджувальним приголосним означеного артикля — b-, g-, j-, k-, l-, m-, s-, w-, y- — що змінюється залежно від класу іменника.",
            "en": {
              "text": "Wolof has a noun-class system marked not by a prefix on the noun itself (as in Bantu), but by an agreeing consonant on the definite article — b-, g-, j-, k-, l-, m-, s-, w-, y- — which varies by the noun's class."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "xale bi (дитина, b-клас), kër gi (дім, g-клас)",
                "the child (b-class), the house (g-class)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Noun Class System — B1"
      },
      {
        "id": "no-grammatical-gender",
        "title": "Amul Doom — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від французької (колишньої колоніальної мови Сенегалу), волоф не має граматичного роду взагалі — іменникові класи ґрунтуються на формі й категорії, а не на статі.",
            "en": {
              "text": "Unlike French (Senegal's former colonial language), Wolof has no grammatical gender at all — the noun classes are based on shape and category, not sex."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "moom (він / вона / воно — одне слово)",
                "he / she / it (one and the same word)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "No Grammatical Gender — A2"
      },
      {
        "id": "focus-based-verb-system",
        "title": "Maa Ngi, Dafa, La — B2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Замість простої часової дієвідміни волоф організовує дієслівну систему навколо фокусу: окремий набір дієслівних маркерів для підметового, додаткового чи дієслівного фокусу — типологічно порівнянно з австронезійською фокусною системою тагальської, хоч і зовсім іншого походження.",
            "en": {
              "text": "Instead of simple tense conjugation, Wolof organizes its verbal system around focus: a distinct set of verbal markers for subject focus, object focus, or verb focus — typologically comparable to Tagalog's Austronesian focus system, though of entirely unrelated origin."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Maa ngi dem. (я, фокус на підметі) vs. Dinaa dem. (нейтральне майбутнє)",
                "It's ME who is going (subject focus) vs. I will go (neutral)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Focus-Based Verbal System — B2"
      },
      {
        "id": "wolofal-arabic-script",
        "title": "Wolofal — B2",
        "emoji": "✒️",
        "sections": [
          {
            "type": "intro",
            "text": "До поширення латиниці волоф записували арабським письмом (система wolofal), яка й досі вживається в релігійних текстах мусульманських братств, — паралельно з офіційною латинською орфографією.",
            "en": {
              "text": "Before the spread of the Latin alphabet, Wolof was written with Arabic script (the wolofal system), which is still used in the religious texts of Muslim brotherhoods — running parallel to the official Latin orthography."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "wolofal (арабське письмо для волоф)",
                "wolofal (the Arabic-based script for Wolof)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Wolofal Arabic-Based Script — B2"
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
        "id": "subject-focus-perfective",
        "title": "Subject Focus: 'maa ngi' — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Конструкція 'maa ngi' наголошує на підметі як фокусі речення, водночас позначаючи теперішню чи щойно завершену дію.",
            "en": {
              "text": "The 'maa ngi' construction emphasizes the subject as the focus of the sentence, while also marking a present or just-completed action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Maa ngi bind.",
                "Це я пишу (наголос на 'я')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Subject Focus: 'maa ngi' — A2"
      },
      {
        "id": "neutral-completive-na",
        "title": "Neutral Completive: -na — A1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -na позначає завершену дію без наголосу на жодному фокусі — найнейтральніша форма минулого часу.",
            "en": {
              "text": "The suffix -na marks a completed action without emphasis on any particular focus — the most neutral past-tense form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bind naa.",
                "Я написав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Neutral Completive: -na — A1"
      },
      {
        "id": "imperfective-di",
        "title": "Imperfective: -di — A1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Частка di позначає незавершену, звичну чи тривалу дію — центральна форма для теперішнього/загального часу.",
            "en": {
              "text": "The particle di marks an incomplete, habitual, or ongoing action — the central form for present/general tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Dama bind.",
                "Я пишу (звично / зараз)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imperfective: -di — A1"
      },
      {
        "id": "future-dina",
        "title": "Future: dina — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється допоміжним dina плюс особовий суфікс, поставленим перед основним дієсловом.",
            "en": {
              "text": "The future tense is formed with the auxiliary dina plus a personal suffix, placed before the main verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Dinaa bind.",
                "Я писатиму."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future: dina — A2"
      },
      {
        "id": "object-focus",
        "title": "Object Focus: la — B1",
        "emoji": "📦",
        "sections": [
          {
            "type": "intro",
            "text": "Конструкція з допоміжним la наголошує на прямому додатку як фокусі речення — паралельна форма до підметового фокусу maa ngi.",
            "en": {
              "text": "The construction with the auxiliary la emphasizes the direct object as the focus of the sentence — a parallel form to the subject-focus maa ngi."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Téere laa bind.",
                "Саме книгу я написав (наголос на 'книга')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Object Focus: la — B1"
      },
      {
        "id": "verb-focus",
        "title": "Verb Focus: dafa — B1",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Конструкція з допоміжним dafa наголошує на самій дії дієслова як фокусі речення, а не на підметі чи додатку.",
            "en": {
              "text": "The construction with the auxiliary dafa emphasizes the verb's action itself as the focus of the sentence, rather than the subject or object."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Dafa bind.",
                "Він саме пише (наголос на дії)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Verb Focus: dafa — B1"
      },
      {
        "id": "narrative-past-woon",
        "title": "Narrative Past: woon — B1",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Частка woon, додана після дієслівної форми, зсуває дію в глибше минуле або наративний контекст, віддалений від моменту мовлення.",
            "en": {
              "text": "The particle woon, added after the verb form, shifts the action into a deeper past or narrative context, removed from the moment of speaking."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bind naa woon.",
                "Я був написав (у минулому оповіданні)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Narrative Past: woon — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Imperative Mood — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб має гол основу для однини та суфікс -leen для множинного адресата.",
            "en": {
              "text": "The imperative has the bare stem for singular and the suffix -leen for a plural addressee."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bind! / Bindleen!",
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
        "id": "obligation-war",
        "title": "Obligation: war (a) — B1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Необхідність виражається допоміжним war(a), доданим перед головним дієсловом, — 'мусити' зробити щось.",
            "en": {
              "text": "Necessity is expressed with the auxiliary war(a), placed before the main verb — 'must' do something."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Warugna bind.",
                "Я мушу писати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Obligation: war(a) — B1"
      },
      {
        "id": "negation-perfective-du",
        "title": "Negation (Imperfective): du — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення незавершеної дії утворюється допоміжним du, поставленим перед дієсловом.",
            "en": {
              "text": "Negation of an incomplete action is formed with the auxiliary du, placed before the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Duma bind.",
                "Я не писатиму / не пишу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation (Imperfective): du — A2"
      },
      {
        "id": "negation-completive-ul",
        "title": "Negation (Completive): -ul — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення завершеної дії утворюється суфіксом -ul, доданим до дієслівної основи.",
            "en": {
              "text": "Negation of a completed action is formed with the suffix -ul, added to the verb stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bindulla.",
                "Я не написав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation (Completive): -ul — B1"
      },
      {
        "id": "conditional-su",
        "title": "Conditional: su — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться часткою su ('якщо/коли'), поставленою на початку підрядного речення.",
            "en": {
              "text": "A conditional sentence is introduced with the particle su ('if/when'), placed at the start of the subordinate clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Su taw-taw, dinaa dal ci kër gi.",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: su — B1"
      },
      {
        "id": "habitual-dana",
        "title": "Habitual with 'dañu' — B2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звична дія без наголосу на фокусі часто виражається допоміжним dañu (форма dafa для інших осіб), окремим набором маркерів залежно від особи.",
            "en": {
              "text": "A habitual action without focus emphasis is often expressed with the auxiliary dañu (the dafa form for other persons), a separate set of markers depending on person."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Dañuy bind bés bu nekk.",
                "Він пише щодня."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Habitual with 'dañu' — B2"
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
        "id": "definite-article-by-class",
        "title": "Definite Article by Class — A2",
        "emoji": "📇",
        "sections": [
          {
            "type": "table",
            "title": "Означений артикль за класом",
            "rows": [
              [
                "b-клас (люди, малі речі)",
                "bi"
              ],
              [
                "g-клас (місця, будівлі)",
                "gi"
              ],
              [
                "j-клас (мала кількість)",
                "ji"
              ],
              [
                "k-клас (тварини, деякі люди)",
                "ki"
              ],
              [
                "m-клас (рідини)",
                "mi"
              ]
            ],
            "en": {
              "title": "Definite Article by Class"
            }
          }
        ],
        "titleEn": "Definite Article by Class — A2"
      },
      {
        "id": "indefinite-article-am",
        "title": "Indefinite Marker: benn — A2",
        "emoji": "1️⃣",
        "sections": [
          {
            "type": "intro",
            "text": "Неозначеність виражається числівником benn ('один'), поставленим після іменника, а не окремим артиклем.",
            "en": {
              "text": "Indefiniteness is expressed with the numeral benn ('one'), placed after the noun, rather than a separate article."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "xale benn",
                "a child (one child)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Indefinite Marker: benn — A2"
      },
      {
        "id": "plural-formation-yi",
        "title": "Plural: -yi — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється єдиним артиклем yi, спільним для всіх класів, — на відміну від однини, де кожен клас має свій означений артикль.",
            "en": {
              "text": "The plural is formed with a single article yi, shared across all classes — unlike the singular, where each class has its own definite article."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "xale yi (замість bi у множині)",
                "the children (yi replaces bi in the plural)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural: -yi — A2"
      },
      {
        "id": "demonstratives-by-class",
        "title": "Demonstratives by Class — B1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні займенники узгоджуються з іменниковим класом, додаючи -i (близько) або -a (далеко) до класового приголосного.",
            "en": {
              "text": "Demonstratives agree with the noun class, adding -i (near) or -a (far) to the class consonant."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kër gii / kër gale",
                "this house / that house (g-class demonstratives)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Demonstratives by Class — B1"
      },
      {
        "id": "possessive-construction",
        "title": "Possession: -u — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійна конструкція вживає сполучник -u між означуваним і означенням, подібний до генітивної частки.",
            "en": {
              "text": "The possessive construction uses the linker -u between the possessed noun and the possessor, similar to a genitive particle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kër-u Musaa",
                "Musa's house"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possession: -u — B1"
      },
      {
        "id": "quinary-numeral-system",
        "title": "Quinary Numeral System — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Числівники (п'ятірна основа)",
            "rows": [
              [
                "1",
                "benn"
              ],
              [
                "2",
                "ñaar"
              ],
              [
                "3",
                "ñett"
              ],
              [
                "4",
                "ñeent"
              ],
              [
                "5",
                "juróom"
              ],
              [
                "6",
                "juróom-benn"
              ],
              [
                "10",
                "fukk"
              ]
            ],
            "en": {
              "title": "Numerals (base-5 pattern)"
            }
          }
        ],
        "titleEn": "The Quinary Numeral System — A2"
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
                "kan?"
              ],
              [
                "що?",
                "lan?"
              ],
              [
                "де?",
                "fan?"
              ],
              [
                "коли?",
                "kañ?"
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
        "id": "reflexive-boppam",
        "title": "Reflexive: bopp — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотність виражається словом bopp ('голова'), поєднаним із присвійним суфіксом, — дослівно 'своя голова' в значенні 'себе'.",
            "en": {
              "text": "Reflexivity is expressed with the word bopp ('head'), combined with a possessive suffix — literally 'one's own head' meaning 'oneself'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "boppam",
                "himself/herself (literally 'his/her own head')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive: bopp ('head') — B1"
      },
      {
        "id": "stative-verb-adjectives",
        "title": "Adjectives as Stative Verbs — B2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Волоф не має окремого класу прикметників — властивості виражаються статичними дієсловами, які дієвідмінюються так само, як дії.",
            "en": {
              "text": "Wolof has no separate class of adjectives — properties are expressed with stative verbs, which are conjugated the same way as action verbs."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Rafet na.",
                "Він гарний. (дослівно: 'гарніє')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjectives Expressed as Stative Verbs — B2"
      },
      {
        "id": "comparative-degree",
        "title": "Comparative: gën — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється дієсловом gën ('перевершувати'), поставленим після статичного дієслова-прикметника.",
            "en": {
              "text": "The comparative is formed with the verb gën ('to surpass'), placed after the stative verb-adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Rafet na gën.",
                "Він гарніший."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: gën ('to surpass') — B1"
      },
      {
        "id": "relative-clause-marker",
        "title": "Relative Clauses — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Підрядні відносні речення позначаються класовим приголосним, узгодженим з означуваним іменником, замість окремого відносного займенника.",
            "en": {
              "text": "Relative clauses are marked by the class consonant, agreed with the modified noun, instead of a separate relative pronoun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "xale bi bind bi",
                "the child who wrote (b-class relative marker)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clauses via the Class Consonant — B2"
      },
      {
        "id": "causative-suffix-al",
        "title": "Causative: -al — B2",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативний стан утворюється суфіксом -al, доданим до дієслівної основи, позначаючи, що підмет спричиняє дію.",
            "en": {
              "text": "The causative is formed with the suffix -al, added to the verb stem, marking that the subject causes the action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "bindal (примусити писати)",
                "to make (someone) write"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Causative: -al — B2"
      },
      {
        "id": "reciprocal-suffix-ante",
        "title": "Reciprocal: -ante — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Взаємний стан утворюється суфіксом -ante, доданим до основи, позначаючи взаємну дію між кількома підметами.",
            "en": {
              "text": "The reciprocal voice is formed with the suffix -ante, added to the stem, marking a mutual action between several subjects."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "gisante (бачити одне одного)",
                "to see each other"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reciprocal: -ante — B2"
      },
      {
        "id": "benefactive-suffix-al",
        "title": "Benefactive: -al — B2",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Той самий суфікс -al, що й у каузативі (омонім), також може позначати вигодонабувача дії — 'зробити щось для когось'.",
            "en": {
              "text": "The same suffix -al used in the causative (a homonym) can also mark the beneficiary of an action — 'to do something for someone'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "bindal ko",
                "write it for him/her (benefactive)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Benefactive: -al — B2"
      },
      {
        "id": "word-order-svo-flexible",
        "title": "Word Order: SVO with Focus Flexibility — B1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-присудок-додаток (SVO), але фокусні конструкції дозволяють висувати будь-який елемент на початок речення для наголосу.",
            "en": {
              "text": "The basic word order is subject-verb-object (SVO), but focus constructions allow any element to be fronted to the start of the sentence for emphasis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Dama gis xale bi.",
                "Я бачу дитину. (нейтральний порядок)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Word Order: SVO with Focus Flexibility — B1"
      },
      {
        "id": "postpositions-ci",
        "title": "The Preposition ci — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Універсальний прийменник ci ('у, на, в') покриває широкий спектр просторових і часових значень, які в українській передавалися б різними прийменниками.",
            "en": {
              "text": "The all-purpose preposition ci ('in, on, at') covers a wide range of spatial and temporal meanings that Ukrainian would express with different prepositions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ci kër gi",
                "in/at the house"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The All-Purpose Preposition: ci — A2"
      },
      {
        "id": "ideophones",
        "title": "Ideophones — B2",
        "emoji": "💥",
        "sections": [
          {
            "type": "intro",
            "text": "Волоф широко вживає ідеофони — звуконаслідувальні чи образні слова, що підсилюють значення прикметника чи дії експресивним звуковим ефектом.",
            "en": {
              "text": "Wolof makes extensive use of ideophones — sound-symbolic or expressive words that intensify the meaning of an adjective or action with an expressive sound effect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "weex tàll (дуже білий, з ідеофоном tàll)",
                "very white (with the intensifying ideophone tàll)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ideophones — B2"
      },
      {
        "id": "compound-nouns",
        "title": "Compound Nouns — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Складні іменники часто утворюються поєднанням двох коренів без сполучного елемента, набуваючи класу останнього компонента.",
            "en": {
              "text": "Compound nouns are often formed by combining two roots without a linking element, taking on the class of the final component."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kër-doom (родина, дослівно 'дім-дитина')",
                "family (literally 'house-child')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Nouns — B1"
      },
      {
        "id": "yes-no-question-ndax",
        "title": "Yes/No Questions: ndax — A2",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "Загальне питання утворюється часткою ndax, поставленою на початку речення, без зміни порядку слів.",
            "en": {
              "text": "A yes/no question is formed with the particle ndax, placed at the start of the sentence, without changing word order."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndax dinga dem?",
                "Ти підеш?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Yes/No Questions: ndax — A2"
      },
      {
        "id": "emphatic-particle-de",
        "title": "Emphatic Particle: de — B2",
        "emoji": "❕",
        "sections": [
          {
            "type": "intro",
            "text": "Підсилювальна частка de додається в кінці речення для наголошення впевненості чи попередження, близько до 'ж' в українській.",
            "en": {
              "text": "The emphatic particle de is added at the end of a sentence to emphasize certainty or a warning, close to Ukrainian 'zh' (emphatic 'indeed')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Dinaa dem de!",
                "Я ж піду!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Emphatic Particle: de — B2"
      },
      {
        "id": "existential-am",
        "title": "Existential: am — A1",
        "emoji": "✔️",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність виражається дієсловом am ('мати/існувати'), а заперечна наявність — формою amul.",
            "en": {
              "text": "Existence is expressed with the verb am ('to have/exist'), and negative existence with the form amul."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Am na téere. / Amul téere.",
                "Є книга. / Немає книги."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Existential: am ('to have/exist') — A1"
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
                "ak"
              ],
              [
                "але",
                "waaye"
              ],
              [
                "або",
                "walla"
              ],
              [
                "тому що",
                "ndax(te)"
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
        "id": "short-pronoun-suffixes",
        "title": "Short Pronoun Suffixes — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Крім незалежних займенників, волоф має коротку форму, приєднану безпосередньо до дієслівного маркера, — обов'язкову частину фокусних конструкцій.",
            "en": {
              "text": "Besides the independent pronouns, Wolof has a short form attached directly to the verbal marker — an obligatory part of the focus constructions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Dama (я, коротка форма + dafa)",
                "I (short-form pronoun fused into dafa)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Short Pronoun Suffixes — B1"
      },
      {
        "id": "vocative-address",
        "title": "Vocative Address — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Звертання не має окремого відмінка — іменник просто вживається без артикля на початку речення для прямого звертання до когось.",
            "en": {
              "text": "Address has no separate case — the noun is simply used without the article at the start of a sentence for direct address to someone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Xale, kaay fii!",
                "Дитино, іди сюди!"
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
        "id": "diminutive-class-shift",
        "title": "Diminutive via Class Shift — B2",
        "emoji": "🔎",
        "sections": [
          {
            "type": "intro",
            "text": "Пестливе чи зменшувальне значення можна виразити, перевівши іменник в інший клас (наприклад, у s-клас), що змінює лише означений артикль без зміни самого кореня.",
            "en": {
              "text": "A diminutive or affectionate meaning can be expressed by shifting a noun into a different class (e.g., the s-class), which changes only the definite article without altering the root itself."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kër gi → kër si (маленький дім)",
                "the house → the little house (class-shift diminutive)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive via Noun Class Shift — B2"
      },
      {
        "id": "teranga-hospitality",
        "title": "Teranga — A2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Терангa — центральна культурна цінність гостинності в Сенегалі, що визначає ставлення до гостей і незнайомців як до почесних членів родини.",
            "en": {
              "text": "Teranga is a central cultural value of hospitality in Senegal, defining the treatment of guests and strangers as honored members of the family."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Teranga bu Senegaal",
                "Senegalese hospitality (teranga)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Teranga: the Culture of Hospitality — A2"
      },
      {
        "id": "mouride-brotherhood",
        "title": "Mouride Brotherhood — B2",
        "emoji": "🕌",
        "sections": [
          {
            "type": "intro",
            "text": "Мурідське братство, засноване Шейхом Амаду Бамбою наприкінці 19 століття, — одна з найвпливовіших суфійських спільнот Сенегалу, чиєю духовною столицею є місто Туба.",
            "en": {
              "text": "The Mouride brotherhood, founded by Cheikh Amadou Bamba in the late 19th century, is one of Senegal's most influential Sufi communities, whose spiritual capital is the city of Touba."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sëriñ Tuubaa",
                "the holy leader of Touba (Cheikh Amadou Bamba)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Mouride Brotherhood — B2"
      },
      {
        "id": "grand-magal-touba",
        "title": "Grand Magal de Touba — B2",
        "emoji": "🕋",
        "sections": [
          {
            "type": "intro",
            "text": "Гранд Магаль — щорічне паломництво мільйонів мурідів до Туби на честь заслання Шейха Амаду Бамби, одне з найбільших релігійних зібрань Західної Африки.",
            "en": {
              "text": "The Grand Magal is an annual pilgrimage of millions of Mourides to Touba commemorating Cheikh Amadou Bamba's exile — one of West Africa's largest religious gatherings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Magal Tuubaa",
                "the Touba Magal pilgrimage"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Grand Magal de Touba — B2"
      },
      {
        "id": "griot-oral-tradition",
        "title": "Griot Oral Tradition — B1",
        "emoji": "🎤",
        "sections": [
          {
            "type": "intro",
            "text": "Гріоти (géwél) — спадкові оповідачі, музиканти й генеалоги, які зберігають усну історію родів у волофському суспільстві через пісню й декламацію.",
            "en": {
              "text": "Griots (géwél) are hereditary storytellers, musicians, and genealogists who preserve the oral history of lineages in Wolof society through song and recitation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "géwél",
                "griot (hereditary oral historian and musician)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Griot Oral Tradition — B1"
      },
      {
        "id": "french-loanword-layer",
        "title": "French Loanwords — B1",
        "emoji": "🇫🇷",
        "sections": [
          {
            "type": "intro",
            "text": "Колишня французька колонізація залишила у волоф значний шар французьких запозичень, особливо в урбаністичному «урбан волоф» Дакара, де вживається постійний перемикання кодів між волоф і французькою.",
            "en": {
              "text": "Former French colonization left a significant layer of French loanwords in Wolof, especially in the urban 'Urban Wolof' of Dakar, where constant code-switching between Wolof and French is common."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "voiture (машина, з французької)",
                "car (from French, common in Urban Wolof)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The French Loanword Layer — B1"
      },
      {
        "id": "arabic-loanword-islam",
        "title": "Arabic Loanwords from Islam — B1",
        "emoji": "☪️",
        "sections": [
          {
            "type": "intro",
            "text": "Іслам приніс у волоф масивний шар арабської релігійної лексики — молитви, свята, релігійні звертання, — паралельно французькому світському шару.",
            "en": {
              "text": "Islam brought a massive layer of Arabic religious vocabulary into Wolof — prayers, holidays, religious address — running parallel to the secular French layer."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Alxamdulilaay (слава Богу, з арабської)",
                "praise be to God (from Arabic)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Arabic Loanwords from Islam — B1"
      },
      {
        "id": "mbalax-music",
        "title": "Mbalax Music — B1",
        "emoji": "🥁",
        "sections": [
          {
            "type": "intro",
            "text": "Мбалáкс — популярний музичний жанр Сенегалу, що поєднує традиційні сабарські ритми з сучасними інструментами, уславлений виконавцем Юссу Н'Дуром.",
            "en": {
              "text": "Mbalax is a popular Senegalese music genre that blends traditional sabar rhythms with modern instruments, made famous by performer Youssou N'Dour."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "sabar (традиційний барабан)",
                "sabar (traditional drum central to mbalax)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Mbalax Music — B1"
      },
      {
        "id": "laamb-wrestling",
        "title": "Laamb Wrestling — B1",
        "emoji": "🤼",
        "sections": [
          {
            "type": "intro",
            "text": "Ламб — традиційна сенегальська боротьба, найпопулярніший вид спорту в країні, поєднаний із ритуальними піснями й амулетами перед боєм.",
            "en": {
              "text": "Laamb is traditional Senegalese wrestling, the country's most popular sport, combined with ritual songs and amulets before the match."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "lamb-jërrëñ",
                "wrestling with striking (a laamb variant)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Laamb Wrestling — B1"
      },
      {
        "id": "baobab-tree-culture",
        "title": "The Baobab Tree — A2",
        "emoji": "🌳",
        "sections": [
          {
            "type": "intro",
            "text": "Баобаб (guy) — національне дерево Сенегалу, символ довголіття й мудрості, традиційне місце сходин старійшин під його кроною.",
            "en": {
              "text": "The baobab tree (guy) is Senegal's national tree, a symbol of longevity and wisdom, traditionally a gathering place for elders under its canopy."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "guy gi",
                "the baobab tree"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Baobab Tree — A2"
      },
      {
        "id": "thieboudienne-cuisine",
        "title": "Thiéboudienne — A2",
        "emoji": "🍚",
        "sections": [
          {
            "type": "intro",
            "text": "Чебуджен (ceebu jën, 'рис із рибою') — національна страва Сенегалу з рису, риби й овочів, тушкованих у томатному соусі, — символ національної кухні.",
            "en": {
              "text": "Thiéboudienne (ceebu jën, 'rice with fish') is Senegal's national dish of rice, fish, and vegetables stewed in tomato sauce — a symbol of the national cuisine."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ceebu jën",
                "thiéboudienne (rice with fish)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Thiéboudienne — A2"
      },
      {
        "id": "attaya-tea-ceremony",
        "title": "Attaya Tea Ceremony — B1",
        "emoji": "🍵",
        "sections": [
          {
            "type": "intro",
            "text": "Атайя — ритуал приготування зеленого чаю з м'ятою й піною в три заходи, кожен із власним ступенем міцності й солодкості, — соціальний ритуал, а не просто напій.",
            "en": {
              "text": "Attaya is a ritual of preparing frothy mint green tea in three rounds, each with its own degree of strength and sweetness — a social ritual, not just a beverage."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "attaya bu njëkk (перша порція чаю)",
                "the first round of attaya tea"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Attaya Tea Ceremony — B1"
      },
      {
        "id": "goree-island-history",
        "title": "Gorée Island — B2",
        "emoji": "🏝️",
        "sections": [
          {
            "type": "intro",
            "text": "Острів Горе біля Дакара — місце пам'яті про трансатлантичну работоргівлю, увічнене в 'Дверях без повернення' та об'єктом ЮНЕСКО.",
            "en": {
              "text": "Gorée Island off Dakar is a memorial site of the transatlantic slave trade, immortalized by the 'Door of No Return' and a UNESCO World Heritage site."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Gore (Горе, острів)",
                "Gorée Island"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gorée Island — B2"
      },
      {
        "id": "senghor-negritude",
        "title": "Senghor and Négritude — B2",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "Леопольд Седар Сенгор — перший президент Сенегалу й поет, співзасновник руху негритюд, що утверджував гідність і самобутність африканської культурної спадщини.",
            "en": {
              "text": "Léopold Sédar Senghor was Senegal's first president and a poet, co-founder of the Négritude movement, which affirmed the dignity and distinctiveness of African cultural heritage."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "négritude",
                "Négritude (the literary/cultural movement)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Senghor and the Négritude Movement — B2"
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
                "xonq"
              ],
              [
                "синій",
                "bulo"
              ],
              [
                "жовтий",
                "mboq"
              ],
              [
                "зелений",
                "vert"
              ],
              [
                "чорний",
                "ñuul"
              ],
              [
                "білий",
                "weex"
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
                "altine"
              ],
              [
                "вівторок",
                "talaata"
              ],
              [
                "середа",
                "àlarba"
              ],
              [
                "четвер",
                "alxames"
              ],
              [
                "п'ятниця",
                "àjjuma"
              ],
              [
                "субота",
                "gaawu"
              ],
              [
                "неділя",
                "dibéer"
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
                "baay"
              ],
              [
                "мати",
                "yaay"
              ],
              [
                "брат/сестра",
                "mag/rakk"
              ],
              [
                "дитина",
                "doom"
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
                "Мир вам / Привіт",
                "Asalaa maalekum"
              ],
              [
                "Дякую",
                "Jërëjëf"
              ],
              [
                "Гаразд / Ок",
                "Waaw"
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
                "jant"
              ],
              [
                "дощ",
                "taw"
              ],
              [
                "вітер",
                "ngelaw"
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
                "bopp"
              ],
              [
                "рука",
                "loxo"
              ],
              [
                "нога",
                "tank"
              ],
              [
                "око",
                "bët"
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
                "рис",
                "ceeb"
              ],
              [
                "риба",
                "jën"
              ],
              [
                "хліб",
                "mburu"
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
        "emoji": "🐎",
        "sections": [
          {
            "type": "table",
            "title": "Тварини",
            "rows": [
              [
                "собака",
                "xaj"
              ],
              [
                "кінь",
                "fas"
              ],
              [
                "коза",
                "béy"
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
        "id": "dakar-urban-culture",
        "title": "Dakar Urban Culture — B1",
        "emoji": "🏙️",
        "sections": [
          {
            "type": "intro",
            "text": "Дакар, столиця Сенегалу, — найбільше волофомовне місто, де формується 'урбан волоф' із масивними французькими вкрапленнями, відмінний від сільського волоф.",
            "en": {
              "text": "Dakar, Senegal's capital, is the largest Wolof-speaking city, where 'Urban Wolof' forms with massive French insertions, distinct from rural Wolof."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndakaaru",
                "Dakar (the Wolof name for the city)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Dakar Urban Culture — B1"
      },
      {
        "id": "cheikh-anta-diop-legacy",
        "title": "Cheikh Anta Diop — B2",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Шейх Анта Діоп — сенегальський історик і фізик, який обстоював африканське походження давньоєгипетської цивілізації, ім'ям якого названо головний університет Дакара.",
            "en": {
              "text": "Cheikh Anta Diop was a Senegalese historian and physicist who argued for the African origins of ancient Egyptian civilization, and after whom Dakar's main university is named."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Université Cheikh Anta Diop",
                "Cheikh Anta Diop University (Dakar's main university)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Cheikh Anta Diop's Legacy — B2"
      },
      {
        "id": "xalima-naming-ceremony",
        "title": "Naming Ceremony: Ngénte — B2",
        "emoji": "👶",
        "sections": [
          {
            "type": "intro",
            "text": "Церемонія найменування дитини (ngénte) відбувається на восьмий день після народження, коли імам дає дитині ім'я, а родина влаштовує святкування з музикою та їжею.",
            "en": {
              "text": "The naming ceremony (ngénte) takes place on the eighth day after birth, when an imam gives the child their name and the family holds a celebration with music and food."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ngénte",
                "the naming ceremony"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Ngénte Naming Ceremony — B2"
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
        "id": "irregular-verb-dem",
        "title": "Irregular Verb: dem ('to go') — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово dem ('іти') утворює наказову форму від зовсім іншого кореня (kaay замість очікуваного *dem), коли йдеться про запрошення йти разом, — супплетивна форма.",
            "en": {
              "text": "The verb dem ('to go') forms its invitational imperative from an entirely different root (kaay instead of the expected *dem) when inviting someone to go together — a suppletive form."
            }
          },
          {
            "type": "table",
            "title": "Супплетивна форма",
            "rows": [
              [
                "dem (іти) → Kaay! (Ходи!, не *Demal!)",
                "go → Come! (suppletive invitational imperative, not the expected regular form)"
              ]
            ],
            "en": {
              "title": "Suppletive Form"
            }
          }
        ],
        "titleEn": "Irregular Verb: dem ('to go') — B1"
      },
      {
        "id": "irregular-class-nit",
        "title": "Irregular Class Assignment: nit — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Іменник nit ('людина') належить до k-класу, хоч більшість слів на приголосний тяжіють до інших класів, — його клас треба запам'ятовувати окремо, а не виводити за формою слова.",
            "en": {
              "text": "The noun nit ('person') belongs to the k-class, although most consonant-final words tend toward other classes — its class must be memorized separately rather than derived from the word's shape."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярне класове призначення",
            "rows": [
              [
                "nit ki (людина, k-клас, нерегулярно)",
                "the person (k-class, an irregular assignment)"
              ]
            ],
            "en": {
              "title": "Irregular Class Assignment"
            }
          }
        ],
        "titleEn": "Irregular Class Assignment: nit ('person') — B2"
      },
      {
        "id": "irregular-comparative-baax",
        "title": "Irregular Comparative: baax → gën a baax — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Статичне дієслово baax ('бути добрим') утворює порівняльний ступінь особливою конструкцією gën a baax, де частка a вставлена між gën і самим дієсловом, — не за загальною моделлю gën + дієслово.",
            "en": {
              "text": "The stative verb baax ('to be good') forms its comparative with the special construction gën a baax, where the particle a is inserted between gën and the verb itself — not following the general gën + verb pattern."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярний порівняльний ступінь",
            "rows": [
              [
                "baax → gën a baax (не просто *baax gën)",
                "good → better (irregular construction with inserted particle a)"
              ]
            ],
            "en": {
              "title": "Irregular Comparative"
            }
          }
        ],
        "titleEn": "Irregular Comparative: baax → gën a baax — B1"
      }
    ]
  }
];
