// Vymova — data/grammar-data/grammar_pau.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_PAU: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Omesungel — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Палау за менш ніж століття пережила іспанське, німецьке, японське та американське колоніальне правління, кожне з яких залишило слід у мові.",
            "en": {
              "text": "In under a century, Palau experienced Spanish, German, Japanese, and American colonial rule, each leaving a mark on the language."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ngak"
              ],
              [
                "ти",
                "kau"
              ],
              [
                "він / вона / воно",
                "ngii"
              ],
              [
                "ми (з вами)",
                "kid"
              ],
              [
                "ми (без вас)",
                "kemam"
              ],
              [
                "ви",
                "kemiu"
              ],
              [
                "вони",
                "tir"
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
        "id": "western-malayo-polynesian",
        "title": "Klengar er a Tekoi — A2",
        "emoji": "🌏",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від гавайської, маорі чи маршалльської, які належать до океанійської гілки австронезійських мов, палау належить до західномалайсько-полінезійської гілки — генетично віддаленіша спорідненість, попри географічну близькість до Мікронезії.",
            "en": {
              "text": "Unlike Hawaiian, Māori, or Marshallese, which belong to the Oceanic branch of Austronesian languages, Palauan belongs to the Western Malayo-Polynesian branch — a more distant genetic relationship despite geographic proximity to Micronesia."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Палау генетично ближча до філіппінських мов, ніж до сусідньої маршалльської.",
                "західномалайсько-полінезійська класифікація"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Western Malayo-Polynesian Classification — A2"
      },
      {
        "id": "vowel-reduction-schwa",
        "title": "Klekedellel a Onger — B1",
        "emoji": "🔉",
        "sections": [
          {
            "type": "intro",
            "text": "Ненаголошені голосні систематично редукуються до невиразного звука шва, а наголос падає переважно на останній склад, — це надає палау виразно наголосового, а не силабічного ритму, нетипового для більшості австронезійських мов.",
            "en": {
              "text": "Unstressed vowels are systematically reduced to a neutral schwa sound, with stress falling mostly on the final syllable — this gives Palauan a distinctly stress-timed rather than syllable-timed rhythm, atypical for most Austronesian languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ненаголошені склади зводяться до звука шва.",
                "редукція голосних до шва"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vowel Reduction to Schwa — B1"
      },
      {
        "id": "multi-colonial-loanwords",
        "title": "Tekoi el di Blechoel — A2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Іспанське, німецьке, японське й американське колоніальне правління наклали чотири окремі шари запозичень одне на одного — рідкісна лексична стратиграфія навіть серед мов Тихого океану.",
            "en": {
              "text": "Spanish, German, Japanese, and American colonial rule each layered a separate set of loanwords on top of the others — a rare lexical stratigraphy even among Pacific languages."
            }
          },
          {
            "type": "table",
            "title": "Приклади шарів",
            "rows": [
              [
                "benjo (туалет) — з японської",
                "японський колоніальний шар"
              ],
              [
                "kompyuter (комп'ютер) — з англійської",
                "сучасний американський шар"
              ]
            ],
            "en": {
              "title": "Layer Examples"
            }
          }
        ],
        "titleEn": "Four Colonial Loanword Layers — A2"
      },
      {
        "id": "negasion-i-preguntas",
        "title": "Diak me a Ker — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою diak ('немає, не') перед дієсловом; питання без питального слова передаються лише висхідною інтонацією.",
            "en": {
              "text": "Negation is formed with the particle diak ('there isn't, not') before the verb; yes/no questions are marked with rising intonation alone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ak diak kudengei.",
                "Я не знаю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation and Questions — A1"
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
        "id": "imperfective-aspect",
        "title": "Diak Lomekek: Blechoel — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Недоконаний вид позначає незавершену чи звичну дію взагалі — базова, немаркована форма дієслова, що охоплює і теперішній момент, і повторювану дію.",
            "en": {
              "text": "The imperfective aspect marks an incomplete or habitual action in general — the basic, unmarked verb form, covering both the present moment and a repeated action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ng mengiil a Droteo.",
                "Дротео їсть."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imperfective Aspect — A1"
      },
      {
        "id": "perfective-object-pronoun-suffix",
        "title": "Bltkil: Ulterir — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Доконаність перехідної дії позначається не окремим часовим суфіксом на самому дієслові, а спеціальною формою займенникового суфікса прямого додатка, — граматична стратегія, характерна саме для палау.",
            "en": {
              "text": "Completedness of a transitive action is marked not by a separate tense suffix on the verb itself, but by a special form of the direct-object pronoun suffix — a grammatical strategy characteristic specifically of Palauan."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ak milengiil er ngii.",
                "Я з'їв це (доконано, через форму займенникового суфікса)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfectivity via Object Pronoun Suffix — B1"
      },
      {
        "id": "recent-past-il-infix",
        "title": "Uche el Taem: -il- — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Минула дія позначається інфіксом -il-, вставленим усередину дієслівного кореня, — вставна морфема замість префікса чи суфікса на краю слова.",
            "en": {
              "text": "A past action is marked with the infix -il-, inserted inside the verb root — an infixed morpheme rather than a prefix or suffix at the word's edge."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ak milengiil.",
                "Я їв."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Action: -il- Infix — A2"
      },
      {
        "id": "future-particle-mo",
        "title": "Uriul el Taem: Mo — A2",
        "emoji": "🔜",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутня дія передається часткою mo ('йти'), поставленою перед дієсловом, — той самий корінь, що й для звичайного руху, граматикалізований у маркер майбутнього.",
            "en": {
              "text": "A future action is expressed with the particle mo ('to go'), placed before the verb — the same root used for ordinary motion, grammaticalized into a future marker."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ak mo mengiil.",
                "Я їстиму."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future: Mo — A2"
      },
      {
        "id": "imperative-mood",
        "title": "Omtechei — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб — гола основа дієслова без займенникового префікса підмета, адресована безпосередньо співрозмовнику.",
            "en": {
              "text": "The imperative is the bare verb stem with no subject pronoun prefix, addressed directly to the listener."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mengiil!",
                "Їж!"
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
        "id": "habitual-aspect-reduplication",
        "title": "Blechoel el Meruul: Kltkil — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звичну, регулярно повторювану дію позначає подвоєння частини дієслівного кореня — граматична стратегія без окремого суфікса.",
            "en": {
              "text": "A habitual, regularly repeated action is marked by reduplicating part of the verb root — a grammatical strategy with no dedicated suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ng kekerei el meruul.",
                "Він постійно потроху це робить."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Habitual Aspect via Reduplication — B1"
      },
      {
        "id": "potential-mood-sebechel",
        "title": "Sebechel: Klisichel — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість виражається словом sebechel ('можна, вдається'), поставленим перед смисловим дієсловом.",
            "en": {
              "text": "Ability or possibility is expressed with the word sebechel ('it's possible, one manages to'), placed before the meaning verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ng sebechek el melekoi er a tekoi er a Belau.",
                "Я можу говорити мовою палау."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential: Sebechel — B1"
      },
      {
        "id": "desiderative-soal",
        "title": "Soal: Ureor — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажання виражається словом soal ('хотіти'), поставленим перед смисловим дієсловом, — 'хотіти зробити щось'.",
            "en": {
              "text": "A wish is expressed with the word soal ('to want'), placed before the meaning verb — 'to want to do something'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ng soal el mengiil.",
                "Він хоче їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Desiderative: Soal — A2"
      },
      {
        "id": "negative-existential-diak",
        "title": "Diak: Diak El Ngar — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечне існування виражається незмінним словом diak ('немає, нічого немає'), без потреби в окремій зв'язці.",
            "en": {
              "text": "Negative existence is expressed with the invariant word diak ('there is none, nothing'), with no need for a separate copula."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Diak a udoud.",
                "Немає грошей."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diak: Negative Existence — A1"
      },
      {
        "id": "progressive-aspect-mesaod",
        "title": "Chelecha el Taem: Mesaod — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в момент мовлення підкреслюється допоміжним словом mesaod чи еквівалентним зворотом плюс основне дієслово, — уточнює недоконаний вид, щоб позначити саме тривалість зараз.",
            "en": {
              "text": "An action in progress at the moment of speaking is emphasized with the auxiliary word mesaod or an equivalent phrase plus the main verb — clarifying the imperfective to mark ongoing action right now."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ng mesaod el meruul a subelel.",
                "Він саме робить своє домашнє завдання."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Progressive Emphasis: Mesaod — B1"
      },
      {
        "id": "conditional-mood-a-lsekum",
        "title": "A Lsekum: Bo Lduusbech — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться зворотом a lsekum ('якщо'), за яким слідує дієслово в потрібному виді, — головне речення зазвичай з майбутнім маркером mo.",
            "en": {
              "text": "A conditional sentence is introduced with the phrase a lsekum ('if'), followed by the verb in the required aspect — the main clause usually takes the future marker mo."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "A lsekum e ngar er ngii a chull, e ak mo er a blik.",
                "Якщо піде дощ, я піду додому."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: A Lsekum — B1"
      },
      {
        "id": "reciprocal-verb-form",
        "title": "Kltmokl: Klausechelei — B2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Взаємна дія позначається спеціальним афіксом на дієслові, що вказує, що учасники роблять щось один одному, — без окремого займенника 'один одного'.",
            "en": {
              "text": "A mutual action is marked with a special verb affix indicating that participants do something to each other — with no separate 'each other' pronoun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Te milkakerous.",
                "Вони посварилися одне з одним (взаємна форма)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reciprocal Verb Form — B2"
      },
      {
        "id": "causative-verb-form",
        "title": "Omeksemeriar: Kirel — B2",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативний префікс, доданий до дієслівного кореня, додає значення 'змушувати робити' — граматично вбудована причиновість без окремого допоміжного дієслова.",
            "en": {
              "text": "A causative prefix, added to the verb root, adds the meaning 'to make someone do' — grammatically built-in causation with no separate auxiliary verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Каузативний префікс уводить значення спричинення дії кимось іншим.",
                "приклад каузативного префікса"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Causative Verb Form — B2"
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
        "id": "verb-medial-subject-pronoun-marking",
        "title": "Chelellakl er a Ngalek: Blsibs — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Займенник підмета приєднується прямо перед дієслівним комплексом як залежна частка, а не стоїть окремим повнозначним словом, — тісна злука підмета з дієсловом.",
            "en": {
              "text": "The subject pronoun attaches right before the verb complex as a dependent particle, rather than standing as a separate full word — a tight fusion of subject and verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ak mengiil.",
                "Я їм (ak злите з дієслівним комплексом)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Verb-Medial Subject Pronoun Marking — B1"
      },
      {
        "id": "independent-vs-dependent-pronouns",
        "title": "Blsibs el Chad: Kau me a Kemiu — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Незалежні займенники (ngak, kau, ngii) уживаються для наголосу чи самостійно, тоді як залежні форми приєднуються прямо до дієслова, — дві паралельні парадигми того самого значення.",
            "en": {
              "text": "Independent pronouns (ngak, kau, ngii) are used for emphasis or standalone, while dependent forms attach directly to the verb — two parallel paradigms of the same meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ngak, ng diak kbo.",
                "Я — я не піду (незалежний займенник для наголосу)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Independent vs. Dependent Pronouns — A2"
      },
      {
        "id": "possessive-suffix-system",
        "title": "Bltkil: Delal — A2",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність передається суфіксом, приєднаним прямо до іменника, — особливо обов'язково для невід'ємних предметів, як частини тіла чи родинні терміни.",
            "en": {
              "text": "Possession is expressed with a suffix attached directly to the noun — especially mandatory for inalienable items, like body parts or kinship terms."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "delak (моя мати, суфікс присвійності)",
                "невід'ємна присвійність"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessive Suffix System — A2"
      },
      {
        "id": "article-a-depth",
        "title": "A: Osumech — A1",
        "emoji": "📘",
        "sections": [
          {
            "type": "intro",
            "text": "Частка a стоїть перед майже кожним іменником у реченні, функціонуючи як щось середнє між означеним артиклем і граматичним маркером, що взагалі відкриває іменникову фразу.",
            "en": {
              "text": "The particle a stands before almost every noun in a sentence, functioning as something between a definite article and a grammatical marker that opens a noun phrase at all."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "a blai (дім)",
                "маркер a перед іменником"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Particle A — A1"
      },
      {
        "id": "demonstratives",
        "title": "Osisecheklel: Tiang, Tilecha — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівне tiang ('цей') позначає близький предмет, tilecha ('той') — далекий; обидва стоять після іменника.",
            "en": {
              "text": "The demonstrative tiang ('this') marks a near item, tilecha ('that') a far one; both stand after the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "a blai tiang",
                "цей дім"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Demonstratives: Tiang, Tilecha — A1"
      },
      {
        "id": "numeral-classifier-system",
        "title": "Osismek el Ulekoad — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Лічба предметів вимагає класифікатора, що узгоджується з категорією предмета — окремий класифікатор для людей, окремий для плоских предметів, окремий для довгастих, — своя власна система, відмінна від мікронезійських сусідів.",
            "en": {
              "text": "Counting objects requires a classifier agreeing with the item's category — a separate classifier for people, another for flat objects, another for elongated ones — its own system, distinct from Micronesian neighbors."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Класифікатори узгоджуються з формою чи категорією предмета.",
                "приклад класифікаторної системи"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Numeral Classifier System — B1"
      },
      {
        "id": "question-words",
        "title": "Ker: Ngera, Techa — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова ngera (що), techa (хто), ker (де) зазвичай стоять на початку речення.",
            "en": {
              "text": "The question words ngera (what), techa (who), ker (where) normally stand at the start of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ke mo er ker?",
                "Куди ти йдеш?"
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
        "id": "relative-clause-strategy",
        "title": "Osisecheklel a Tekoi: El — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Відносне підрядне речення часто вводиться незмінною часткою el, тією самою, що зв'язує дієслово з доповненням, — універсальна сполучна частка.",
            "en": {
              "text": "A relative clause is often introduced with the invariant particle el, the same one that links a verb to its complement — a universal connecting particle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "a chad el milengiil",
                "людина, яка їла"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clauses with El — B1"
      },
      {
        "id": "word-order-svo",
        "title": "Rullel a Tekoi: SVO — A1",
        "emoji": "↔️",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-присудок-додаток, на відміну від багатьох австронезійських мов з порядком VSO чи VOS.",
            "en": {
              "text": "The basic word order is subject-verb-object, unlike many Austronesian languages with VSO or VOS order."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "A Droteo a mengiil a ngikel.",
                "Дротео їсть рибу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Word Order: SVO — A1"
      },
      {
        "id": "adjective-as-stative-verb",
        "title": "Osisecheklel a Klumech: Kall — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники поводяться як окремий клас стативних дієслів — самі є присудком речення без потреби в дієслові-зв'язці.",
            "en": {
              "text": "Adjectives behave as a distinct class of stative verbs — they themselves serve as the predicate with no need for a copula verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "A blai a kekerei.",
                "Дім маленький (буквально 'дім маленькіє')."
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
        "id": "comparison-construction",
        "title": "Klekois: Mo Ungil er — B1",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння вищого ступеня утворюється прикметником-дієсловом плюс er ('за, ніж') після предмета порівняння.",
            "en": {
              "text": "Comparison of superiority is formed with the stative verb/adjective plus er ('than') after the compared item."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ng klou er ngak.",
                "Він більший за мене."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparison Construction — B1"
      },
      {
        "id": "plural-marking-limited",
        "title": "Rechad el Klou: Bek — B1",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники не мають окремої граматичної множини — множинність передається окремим словом rechad ('люди/багато') чи контекстом, а не суфіксом на самому іменнику.",
            "en": {
              "text": "Nouns have no dedicated grammatical plural — plurality is conveyed by a separate word rechad ('people/many') or by context, not by a suffix on the noun itself."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "a rechad er a Belau",
                "народ Палау (люди Палау)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Limited Plural Marking — B1"
      },
      {
        "id": "reduplication-intensity-plurality",
        "title": "Kltkil: Klou el Kekerei — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Подвоєння прикметника-дієслова може підсилювати його значення чи натякати на розмаїття предметів, — та сама граматична стратегія, що й у habitual виді, різні функції.",
            "en": {
              "text": "Doubling a stative verb/adjective can intensify its meaning or hint at variety among items — the same grammatical strategy used in the habitual aspect, different functions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kekerei-kerei",
                "дуже маленький (посилене значення)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reduplication for Intensity/Plurality — B1"
      },
      {
        "id": "vocative-forms",
        "title": "Omeluches — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Звертання часто вживає ім'я саме по собі чи родинний термін, без окремого граматичного маркера звертання.",
            "en": {
              "text": "Direct address often uses a name on its own or a kinship term, with no separate grammatical address marker."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Delak!",
                "Мамо!"
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
        "id": "kinship-terms-elaborate",
        "title": "Klauchad: Rekim — B1",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Розлога система термінів спорідненості тісно пов'язана з матрилінійною клановою структурою суспільства палау, розрізняючи родичів за материнською лінією окремо від батьківської.",
            "en": {
              "text": "An elaborate kinship-term system is closely tied to the matrilineal clan structure of Palauan society, distinguishing maternal-line relatives separately from paternal ones."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Терміни спорідненості відображають матрилінійну структуру суспільства.",
                "матрилінійна спорідненість"
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
        "id": "compound-word-formation",
        "title": "Osisecheklel a Tekoi elOsisiu — B2",
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
                "Приклад складного слова, що описує предмет через функцію.",
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
        "id": "directional-particle-el",
        "title": "El: Osisechakl — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Частка el виконує безліч граматичних функцій одночасно — зв'язує дієслово з інфінітивом, прикметник з іменником, головне речення з підрядним, — одна частка, багато синтаксичних ролей.",
            "en": {
              "text": "The particle el performs many grammatical functions at once — linking a verb to an infinitive complement, an adjective to a noun, a main clause to a subordinate one — one particle, many syntactic roles."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "soal el mengiil",
                "хоче їсти (el зв'язує дієслово з інфінітивом)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Multifunctional Particle El — B2"
      },
      {
        "id": "emphatic-particle",
        "title": "Osisechakl el Klisiich — B1",
        "emoji": "💯",
        "sections": [
          {
            "type": "intro",
            "text": "Наголос на конкретному слові в реченні часто передається зміною порядку слів чи винесенням його на початок, а не окремою часткою.",
            "en": {
              "text": "Emphasis on a specific word in the sentence is often conveyed by changing word order or fronting it, rather than by a dedicated particle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Наголос передається зміною порядку слів у реченні.",
                "наголос через порядок слів"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Emphasis via Word Order — B1"
      },
      {
        "id": "locative-prepositions",
        "title": "Osisecheklel a Bler: Er — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Універсальний прийменник er охоплює і місце, і час, і додаток непрямої дії, — той самий склад для 'у', 'до', 'з' залежно від контексту.",
            "en": {
              "text": "The all-purpose preposition er covers place, time, and an indirect object — the same word for 'in', 'to', 'from' depending on context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "er a blai",
                "у домі / до дому"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The All-Purpose Preposition Er — A2"
      },
      {
        "id": "numeral-cardinal",
        "title": "Ulekoad — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Кількісні числівники мають власні палауанські корені й уживаються з класифікатором залежно від категорії лічених предметів.",
            "en": {
              "text": "Cardinal numbers have their own Palauan roots and are used with a classifier depending on the category of items counted."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "tang, erung, edei",
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
        "title": "Ulekoad el Osisechakl — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються префіксом a-, доданим до кількісного числівника.",
            "en": {
              "text": "Ordinal numbers are formed with the prefix a- added to the cardinal number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Порядкові числівники мають окремий префікс.",
                "приклад порядкового числівника"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ordinal Numbers — A2"
      },
      {
        "id": "negative-imperative-lak",
        "title": "Lak: Mekngit — A2",
        "emoji": "🙅",
        "sections": [
          {
            "type": "intro",
            "text": "Заборона утворюється часткою lak ('не треба'), поставленою перед дієсловом, — окрема заборонна частка, відмінна від звичайного заперечення diak.",
            "en": {
              "text": "A prohibition is formed with the particle lak ('don't'), placed before the verb — a dedicated prohibitive particle, distinct from ordinary negation diak."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Lak mo!",
                "Не йди!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negative Imperative: Lak — A2"
      },
      {
        "id": "existential-possessive-ngar",
        "title": "Ngar: Ngar Er Ngii — A1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово ngar виражає і наявність предмета, і володіння ним — 'є, існує' — одне слово для обох значень.",
            "en": {
              "text": "The verb ngar expresses both the presence of something and possession of it — 'there is, exists' — one word for both meanings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ngar er ngii a udoud er ngak.",
                "У мене є гроші."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ngar: Existence and Possession — A1"
      },
      {
        "id": "topic-fronting",
        "title": "Omekedmokl a Uldasu — B2",
        "emoji": "🔝",
        "sections": [
          {
            "type": "intro",
            "text": "Тему речення можна винести на початок для наголосу, навіть якщо граматично вона не є підметом, — решта речення коментує цю тему.",
            "en": {
              "text": "A sentence's topic can be fronted for emphasis, even when it's not grammatically the subject — the rest of the sentence comments on that topic."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "A ngikel, ng soak.",
                "Риба — мені подобається (тема винесена наперед)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Topic Fronting — B2"
      },
      {
        "id": "compound-noun-formation",
        "title": "Kltkil el Osisechakl — B2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники можуть поєднуватися з дієслівним коренем через частку er, утворюючи опис предмета через його функцію.",
            "en": {
              "text": "Nouns can combine with a verb root through the particle er, forming a description of an item through its function."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Складене поняття, побудоване через частку er.",
                "приклад складеного поняття"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Formation with Er — B2"
      },
      {
        "id": "verb-medial-pronoun-depth",
        "title": "Blsibs er a Chelellakl: Klemedaol — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслівний комплекс може містити водночас підмет і додаток, приєднані до основного дієслова у фіксованому порядку, — ціле речення стискається в один граматичний блок навколо дієслова.",
            "en": {
              "text": "The verb complex can contain both subject and object attached to the main verb in a fixed order — a whole sentence compresses into one grammatical block around the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Дієслівний комплекс поєднує підмет і додаток в одному блоці.",
                "приклад дієслівного комплексу"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Verb Complex in Depth — B2"
      },
      {
        "id": "el-particle-multifunction",
        "title": "El: Bek el Ureor — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Частка el також зв'язує числівник з класифікатором і прислівник з дієсловом, — її синтаксична роль поширюється на щонайменше п'ять різних граматичних контекстів.",
            "en": {
              "text": "The particle el also links a numeral to its classifier and an adverb to a verb — its syntactic role extends to at least five different grammatical contexts."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Частка el поєднує числівник з класифікатором так само, як дієслово з доповненням.",
                "el у контексті числівника"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "El: Five Grammatical Functions — B2"
      },
      {
        "id": "japanese-loanword-layer-depth",
        "title": "Tekoi er a Siabal: Klaidudechelel — B1",
        "emoji": "🇯🇵",
        "sections": [
          {
            "type": "intro",
            "text": "Тридцять років японського мандату (1914-1944) залишили в палау найгустіший з чотирьох колоніальних шарів запозичень, особливо в побутовій і технічній лексиці, — глибше вкорінений, ніж коротший іспанський чи німецький періоди.",
            "en": {
              "text": "Thirty years of Japanese mandate rule (1914-1944) left Palauan with the densest of the four colonial loanword layers, especially in everyday and technical vocabulary — more deeply rooted than the shorter Spanish or German periods."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Японський шар запозичень найгустіший серед усіх чотирьох колоніальних періодів.",
                "японський колоніальний шар"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Japanese Loanword Layer in Depth — B1"
      },
      {
        "id": "german-loanword-layer-depth",
        "title": "Tekoi er a Siamani — B2",
        "emoji": "🇩🇪",
        "sections": [
          {
            "type": "intro",
            "text": "Коротший німецький колоніальний період (1899-1914) залишив вужчий, але виразний шар запозичень в адміністративній лексиці, окремий від пізнішого японського шару.",
            "en": {
              "text": "The shorter German colonial period (1899-1914) left a narrower but distinct layer of loanwords in administrative vocabulary, separate from the later Japanese layer."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Німецький адміністративний шар вужчий за японський, але виразний.",
                "німецький колоніальний шар"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The German Loanword Layer — B2"
      },
      {
        "id": "spanish-loanword-layer-depth",
        "title": "Tekoi er a Sipain: Kot el Klekool — B2",
        "emoji": "🇪🇸",
        "sections": [
          {
            "type": "intro",
            "text": "Найраніший і найменш помітний з чотирьох колоніальних шарів — іспанський (1885-1899) — залишив кілька релігійних термінів, майже повністю витіснених пізнішими шарами.",
            "en": {
              "text": "The earliest and least prominent of the four colonial layers — Spanish (1885-1899) — left a few religious terms, almost entirely displaced by the later layers."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Іспанський шар найраніший і найменш помітний серед чотирьох.",
                "іспанський колоніальний шар"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Spanish Loanword Layer — B2"
      },
      {
        "id": "english-official-co-official-status",
        "title": "Tekoi er a Merikel: Uldiil el Tekoi — B1",
        "emoji": "🇺🇸",
        "sections": [
          {
            "type": "intro",
            "text": "Палау й англійська — обидві офіційні мови Республіки Палау, з окремим законом, що вимагає обов'язкового викладання й палау, й англійської в державних школах.",
            "en": {
              "text": "Palauan and English are both official languages of the Republic of Palau, with a dedicated law requiring mandatory teaching of both Palauan and English in public schools."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Обидві мови обов'язково викладаються в державних школах Палау.",
                "співофіційний статус з англійською"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Co-Official Status with English — B1"
      },
      {
        "id": "rock-islands-geographic-vocabulary",
        "title": "Chelbacheb: Osisecheklel a Chutem — B2",
        "emoji": "🏝️",
        "sections": [
          {
            "type": "intro",
            "text": "Скельні острови (Chelbacheb), визнані ЮНЕСКО об'єктом світової спадщини, мають власний шар географічної лексики для лагун, рифів і карстових утворень, розвинений через тісний зв'язок традиційного рибальства з цим ландшафтом.",
            "en": {
              "text": "The Rock Islands (Chelbacheb), a UNESCO World Heritage site, have their own layer of geographic vocabulary for lagoons, reefs, and karst formations, developed through the close connection of traditional fishing to this landscape."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Географічна лексика Скельних островів пов'язана з традиційним рибальством.",
                "спеціалізована географічна лексика"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Rock Islands Geographic Vocabulary — B2"
      },
      {
        "id": "bai-traditional-architecture-vocabulary",
        "title": "Bai: Osisecheklel a Blai — B2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Традиційний громадський дім bai, прикрашений розписами й різьбленням, має власний спеціалізований словниковий шар для елементів конструкції й символічних зображень.",
            "en": {
              "text": "The traditional community meeting house (bai), decorated with paintings and carvings, has its own specialized vocabulary layer for structural elements and symbolic imagery."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Лексика bai описує елементи традиційної конструкції й символіку.",
                "спеціалізований шар архітектурної лексики"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Bai: Traditional Meeting House Vocabulary — B2"
      },
      {
        "id": "matrilineal-clan-system",
        "title": "Klobak: Klechibelbuu el Blekeradel — B2",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Суспільство палау організоване матрилінійними кланами, що визначають спадкування традиційних титулів і землі, — граматика термінів спорідненості й звертання прямо відображає цю систему.",
            "en": {
              "text": "Palauan society is organized into matrilineal clans that determine the inheritance of traditional titles and land — the grammar of kinship terms and address directly reflects this system."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Матрилінійні клани визначають спадкування традиційних титулів.",
                "матрилінійна кланова структура"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Matrilineal Clan System — B2"
      },
      {
        "id": "money-traditional-valuables-vocabulary",
        "title": "Udoud: Bina er a Belau — B2",
        "emoji": "💰",
        "sections": [
          {
            "type": "intro",
            "text": "Традиційні цінності (udoud) — намисто з бусин і черепахових панцирів — мають власну складну класифікаційну лексику за формою, кольором і походженням, уживану досі в церемоніальному обміні.",
            "en": {
              "text": "Traditional valuables (udoud) — bead necklaces and turtle-shell items — have their own elaborate classificatory vocabulary by shape, color, and origin, still used in ceremonial exchange today."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Традиційні цінності класифікуються за формою, кольором і походженням.",
                "класифікаційна лексика традиційних цінностей"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Traditional Valuables (Udoud) Vocabulary — B2"
      },
      {
        "id": "dialectal-variation",
        "title": "Osisecheklel a Klengar: Belau — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Хоч Палау невелика за площею, окремі штати архіпелагу мають помітні відмінності у вимові й лексиці, особливо між столичним Корором і віддаленішими південними штатами.",
            "en": {
              "text": "Although Palau is small in area, individual states of the archipelago show noticeable differences in pronunciation and vocabulary, especially between the capital Koror and the more remote southern states."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Столичний Корор і південні штати мають помітні мовні відмінності.",
                "регіональна варіація"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Regional Dialect Variation — B2"
      },
      {
        "id": "code-switching-english-japanese",
        "title": "Kltkil el Tekoi: Merikel me a Siabal — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "У сучасному мовленні типове перемикання кодів з обома найвпливовішими зовнішніми мовами — англійською в молоді й японською серед старшого покоління, що застало японський мандат.",
            "en": {
              "text": "Modern speech typically code-switches with both the most influential outside languages — English among youth and Japanese among the older generation who experienced the Japanese mandate."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Код-світчинг відрізняється поколіннями: англійська в молоді, японська у старших.",
                "поколіннєвий код-світчинг"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Code-Switching: English and Japanese — B2"
      },
      {
        "id": "numeral-classifier-depth",
        "title": "Osismek: Kltkil — B2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Окремий класифікатор уживається спеціально для традиційних цінностей udoud, відмінний від класифікаторів для звичайних предметів, — свідчення культурної важливості цих об'єктів.",
            "en": {
              "text": "A dedicated classifier is used specifically for traditional udoud valuables, distinct from classifiers for ordinary objects — evidence of these items' cultural importance."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Окремий класифікатор для udoud відображає їхню культурну цінність.",
                "спеціалізований класифікатор"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Numeral Classifiers: Further Depth — B2"
      },
      {
        "id": "honorific-register",
        "title": "Klisiich el Tekoi: Rubak — B2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Звертання до старійшин (rubak) і носіїв традиційних титулів уживає окремий шанобливий словниковий шар, відображаючи матрилінійну титульну систему.",
            "en": {
              "text": "Addressing elders (rubak) and holders of traditional titles uses a separate honorific vocabulary layer, reflecting the matrilineal title system."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Шаноблива лексика відображає титульну систему й статус старійшин.",
                "шанобливий регістр"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Honorific Register for Elders — B2"
      },
      {
        "id": "fixed-idiomatic-expressions",
        "title": "Omesodel: Klilt — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Численні застиглі вирази вживаються цілими блоками з переносним значенням, не виведеним з буквального перекладу окремих слів.",
            "en": {
              "text": "Numerous fixed expressions are used as whole blocks with a figurative meaning not derived from the literal translation of the individual words."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Застиглий вираз вживається цілим блоком з переносним значенням.",
                "приклад застиглого виразу"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Idiomatic Expressions — B2"
      },
      {
        "id": "passive-like-construction",
        "title": "Osisecheklel a Rullel: El Mo — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний відтінок часто передається зміною порядку слів чи безособовою конструкцією без явного вказівника на виконавця, а не окремим граматичним пасивним станом.",
            "en": {
              "text": "A passive shade is often conveyed by a word-order shift or an impersonal construction with no explicit doer, rather than a dedicated grammatical passive voice."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Безособова конструкція передає значення, близьке до пасиву.",
                "приклад безособової конструкції"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive-Like Constructions — B2"
      },
      {
        "id": "double-negative-emphasis",
        "title": "Diak el Klisichel: Osisechakl — B1",
        "emoji": "❌",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення підсилюється додатковим словом чи повторенням diak у стійкому виразі — 'зовсім немає, нічогісінько', сильніше за просте заперечення.",
            "en": {
              "text": "Negation is intensified with an additional word or a repetition of diak in a fixed expression — 'there's absolutely nothing', stronger than plain negation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Підсилене заперечення виражає повну відсутність чогось.",
                "приклад підсиленого заперечення"
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
        "id": "discourse-particles",
        "title": "Osisechakl er a Cheldechedechal — B1",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Дискурсивні частки організують розмову, позначаючи підтвердження почутого чи перехід між думками, без власного лексичного значення поза контекстом діалогу.",
            "en": {
              "text": "Discourse particles organize conversation, marking confirmation of what was heard or a transition between thoughts, with no lexical meaning of their own outside dialogue."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Дискурсивна частка структурує розмову поза буквальним значенням.",
                "приклад дискурсивної частки"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Discourse Particles — B1"
      },
      {
        "id": "time-expression-vocabulary",
        "title": "Osisecheklel a Taem — B1",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Вираження часу доби вживає власну систему слів, частково пов'язану з морським припливом і відпливом, важливим для рибальської культури Палау.",
            "en": {
              "text": "Time-of-day expressions use their own word system, partly tied to the tides important to Palau's fishing culture."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Лексика часу частково пов'язана з морськими припливами.",
                "лексика часу, вкорінена в морській культурі"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Time Expression Vocabulary — B1"
      },
      {
        "id": "loanword-adaptation-phonology",
        "title": "Tekoi el Kmeed: Klekedellel — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Запозичені слова, потрапивши в мову, адаптуються до палауанської складової структури, включно з характерною редукцією ненаголошених голосних до шва.",
            "en": {
              "text": "Loanwords, once they enter the language, are adapted to Palauan syllable structure, including the characteristic reduction of unstressed vowels to schwa."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Запозичення адаптуються до фонологічної структури палау, з редукцією голосних.",
                "фонологічно адаптоване запозичення"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Loanword Phonological Adaptation — B1"
      },
      {
        "id": "verb-nominalization",
        "title": "Osisecheklel a Rullel: Omengull — B2",
        "emoji": "📘",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово можна перетворити на абстрактний іменник, що позначає саму дію, додаванням певного префікса, — продуктивний спосіб творення нових слів.",
            "en": {
              "text": "A verb can be turned into an abstract noun denoting the action itself by adding a certain prefix — a productive way of forming new words."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Дієслово, перетворене на абстрактний іменник дії.",
                "приклад іменникового префікса"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Verb-to-Noun Nominalization — B2"
      },
      {
        "id": "agent-nominalization",
        "title": "Osisecheklel a Chad el Meruul — B1",
        "emoji": "👤",
        "sections": [
          {
            "type": "intro",
            "text": "Іменник-діяч, що позначає того, хто регулярно виконує дію, утворюється додаванням слова chad ('людина') перед дієприслівниковою формою дієслова.",
            "en": {
              "text": "An agent noun denoting one who regularly performs an action is formed by adding the word chad ('person') before the converb form of the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "chad el mengull",
                "той, хто працює (учитель чи робітник)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Agent Nominalization with Chad — B1"
      },
      {
        "id": "relative-time-clauses",
        "title": "Osisecheklel a Taem: Sel — B1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Сполучник sel ('коли') вводить часове підрядне речення, вказуючи, що дія головного речення відбулася одночасно з подією в підрядному.",
            "en": {
              "text": "The conjunction sel ('when') introduces a temporal clause, indicating that the main clause's action happened simultaneously with the event in the subordinate clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sel bo lekim, e ak mla mo.",
                "Коли він прийде, я вже піду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Temporal Clauses with Sel — B1"
      },
      {
        "id": "coordinating-conjunctions",
        "title": "Osisechakl el Ta: Me, Malengaii — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Сурядний сполучник me ('і') з'єднує слова й речення, тоді як malengaii ('або') позначає вибір, — базові сполучники без впливу на порядок слів навколо себе.",
            "en": {
              "text": "The coordinating conjunction me ('and') connects words and clauses, while malengaii ('or') marks a choice — basic conjunctions with no effect on the word order around them."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ngak me a Droteo",
                "я і Дротео"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Coordinating Conjunctions: Me, Malengaii — A1"
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
        "title": "Rullel el Diak Loruul er a Bldekel — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частовживаних дієслів мають нерегулярні форми, що не виводяться з очікуваного зразка інфіксації -il-.",
            "en": {
              "text": "A few common verbs have irregular forms that can't be derived from the expected -il- infixation pattern."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Нерегулярна форма минулого часу не за звичайним зразком.",
                "нерегулярне утворення минулого часу"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs — B1"
      },
      {
        "id": "irregular-classifier-assignment",
        "title": "Osismek el Diak Loruul er a Bldekel — B2",
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
        "title": "Klilt el Tekoi me a Bldekel el Blechoel — B2",
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
                "Застиглий вислів зберігає архаїчну структуру, вже втрачену деінде в мові.",
                "застигла архаїчна формула"
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
