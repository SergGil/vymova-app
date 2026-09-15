// Vymova — data/grammar-data/grammar_so.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_SO: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Magac-u-yaalka Shakhsiga — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У сомалійській є короткі форми займенників (наприклад, \"aan\" замість \"aniga\"), які вживають разом із дієсловом у швидкому мовленні.",
            "en": {
              "text": "Somali has short pronoun forms (e.g. \"aan\" instead of \"aniga\") that attach to the verb in fast speech."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "aniga"
              ],
              [
                "ти",
                "adiga"
              ],
              [
                "він / вона",
                "isaga / iyada"
              ],
              [
                "ми",
                "annaga"
              ],
              [
                "ви",
                "idinka"
              ],
              [
                "вони",
                "iyaga"
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
        "id": "tone-marks-case",
        "title": "Codka: Sumcadda Kiisaska — B2",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Сомалійська позначає відмінок не суфіксом, а зміною тону на останньому складі іменника: називний і абсолютив мають однакове написання, але різний тон, — хрестоматійна риса, унікальна серед мов Африканського Рогу.",
            "en": {
              "text": "Somali marks case not with a suffix but by shifting the tone on the noun's final syllable: the nominative and absolutive are spelled the same but carry different tone — a textbook feature unique among the languages of the Horn of Africa."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "nínku (наз.) vs. nin (абсолютив)",
                "the man [as subject] vs. a man (same word, different tone)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tone Marks Grammatical Case — B2"
      },
      {
        "id": "focus-marker-obligatory",
        "title": "Sumcaddaha Fiiro: Baa, Ayaa, Waxaa — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Майже кожне стверджувальне речення сомалійською обов'язково містить одну з часток фокусу (baa, ayaa, waxaa), що вказує, яка частина речення несе нову чи важливу інформацію, — без неї речення звучить неповним.",
            "en": {
              "text": "Almost every declarative Somali sentence obligatorily contains one of the focus particles (baa, ayaa, waxaa), marking which part of the sentence carries new or important information — without it, the sentence sounds incomplete."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Cali baa yimid.",
                "Прийшов саме Алі (фокус на Алі)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Obligatory Focus Markers — B1"
      },
      {
        "id": "script-history-latin-1972",
        "title": "Far-Soomaali: Taariikh — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "До 1972 року для сомалійської пропонували кілька писемностей — власне письмо османія, арабське письмо вадаад, борама, — доки уряд не обрав латинку офіційним стандартом, за одну ніч зробивши мову писемною для мільйонів.",
            "en": {
              "text": "Before 1972, several scripts were proposed for Somali — the indigenous Osmanya script, Arabic-based Wadaad writing, the Borama script — until the government chose the Latin alphabet as the official standard, making the language literate for millions almost overnight."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "𐒋 (літера османія) → 'c' (латинка з 1972 р.)",
                "the Osmanya letter for a sound now written 'c' in Latin Somali"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Script History: Latin Since 1972 — B1"
      },
      {
        "id": "gender-two-way",
        "title": "Jinsi: Lab iyo Dheddig — A2",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники мають чоловічий або жіночий рід, який визначає форму означеного артикля (-ka/-ta) і узгодження прикметника, часто непередбачуваний із самого значення слова.",
            "en": {
              "text": "Nouns are masculine or feminine, which determines the form of the definite article (-ka/-ta) and adjective agreement, often unpredictable from the word's meaning alone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ninka (чоловік, ч.р.) / naagta (жінка, ж.р.)",
                "the man (masculine) / the woman (feminine)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gender: Masculine and Feminine — A2"
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
        "id": "present-habitual",
        "title": "Waqtiga Hadda: Caadi — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній/звичний час утворюється особовими закінченнями, доданими до основи дієслова, однаковим для загальних тверджень і звичних дій.",
            "en": {
              "text": "The present/habitual tense is formed with person endings added to the verb stem, the same for general statements and habitual actions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Waan cunaa.",
                "Я їм (взагалі)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present/Habitual — A1"
      },
      {
        "id": "present-progressive",
        "title": "Waqtiga Socda: -ayaa — A2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в момент мовлення утворюється суфіксом -ayaa, доданим до основи дієслова, окремим від звичайного теперішнього часу.",
            "en": {
              "text": "An action in progress at the moment of speaking is formed with the suffix -ayaa added to the verb stem, distinct from the plain present tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Waan cunayaa.",
                "Я саме їм (зараз)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Progressive: -ayaa — A2"
      },
      {
        "id": "past-tense",
        "title": "Waqtiga Tegey — A2",
        "emoji": "⏪",
        "sections": [
          {
            "type": "intro",
            "text": "Простий минулий час утворюється суфіксом -ay, доданим до основи дієслова, позначаючи завершену дію.",
            "en": {
              "text": "The simple past tense is formed with the suffix -ay added to the verb stem, marking a completed action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Waan cunay.",
                "Я з'їв."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Tense: -ay — A2"
      },
      {
        "id": "past-progressive",
        "title": "Waqtiga Tegey ee Socday — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в минулому утворюється суфіксом -ayay, поєднанням прогресивного -ay(a)- з минулим -ay, окремим від простого минулого.",
            "en": {
              "text": "A past ongoing action is formed with the suffix -ayay, combining the progressive -ay(a)- with the past -ay, distinct from the simple past."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Waan cunayay.",
                "Я їв (тривало)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Progressive: -ayay — B1"
      },
      {
        "id": "future-doon",
        "title": "Mustaqbalka: Doon — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється допоміжним дієсловом doon ('прагнути/збиратися'), поставленим після основного дієслова, а не окремим суфіксом чи часткою.",
            "en": {
              "text": "The future tense is formed with the auxiliary doon ('to intend/be about to'), placed after the main verb, rather than a separate suffix or particle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Waan cuni doonaa.",
                "Я їстиму."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future: doon — A2"
      },
      {
        "id": "perfect-tense",
        "title": "Waqtiga Dhammaystiran — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект утворюється тим самим минулим часом -ay, вжитим із прислівником 'вже' (hore/durba), наголошуючи на теперішній актуальності результату.",
            "en": {
              "text": "The perfect is formed with the same past-tense -ay, used with an adverb like 'already' (hore/durba), emphasizing the present relevance of the result."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Horeba waan cunay.",
                "Я вже поїв."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfect (via -ay + 'already') — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Amarka — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб однини — гола основа дієслова; множина додає суфікс -a для звертання до кількох осіб.",
            "en": {
              "text": "The singular imperative is the bare verb stem; the plural adds the suffix -a for addressing several people."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Cun! / Cuna!",
                "Їж! / Їжте!"
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
        "id": "negative-imperative",
        "title": "Amarka Diidmada: Ha — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечний наказовий спосіб уживає окрему частку ha ('не смій'), поставлену перед дієсловом, замість звичайного заперечення.",
            "en": {
              "text": "The negative imperative uses the dedicated particle ha ('don't'), placed before the verb, instead of ordinary negation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ha cunin!",
                "Не їж!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negative Imperative: ha — B1"
      },
      {
        "id": "negation-present-ma-n",
        "title": "Diidmada Hadda: Ma...n — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Звичайне заперечення теперішнього часу утворюється циркумфіксом ma...n, що охоплює дієслово частками з обох боків.",
            "en": {
              "text": "Ordinary negation of the present tense is formed with the circumfix ma...n, wrapping the verb with particles on both sides."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ma cunayo.",
                "Я не їм."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation: ma...n — A2"
      },
      {
        "id": "potential-karin",
        "title": "Awoodda: Kar — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість виражається допоміжним дієсловом kar ('могти'), доданим після основного дієслова в інфінітивній формі.",
            "en": {
              "text": "Ability or possibility is expressed with the auxiliary kar ('to be able'), added after the main verb in its infinitive form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Waan cuni karaa.",
                "Я можу їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential: kar — B1"
      },
      {
        "id": "desiderative-jecelahay",
        "title": "Rabitaanka: Rab — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажання виражається дієсловом rab ('хотіти'), доданим після основного дієслова в інфінітивній формі.",
            "en": {
              "text": "A wish is expressed with the verb rab ('to want'), added after the main verb in its infinitive form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Waan cuni rabaa.",
                "Я хочу їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Desiderative: rab — A2"
      },
      {
        "id": "conditional-haddii",
        "title": "Haddii: Xaaladda — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться сполучником haddii ('якщо'), поставленим на початку підрядного речення.",
            "en": {
              "text": "A conditional sentence is introduced with the conjunction haddii ('if'), placed at the start of the subordinate clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Haddii roob da'o, guriga ayaan joogi doonaa.",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: haddii — B1"
      },
      {
        "id": "optative-jussive",
        "title": "Rajada: Ha ... -o — B2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Бажальний спосіб (нехай станеться) уживає частку ha плюс закінчення -o на дієслові, вживаний для благословень і побажань третій особі.",
            "en": {
              "text": "The optative (may it happen) uses the particle ha plus the ending -o on the verb, used for blessings and wishes toward a third person."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ilaahay ha ku barakeeyo!",
                "Хай Аллах благословить тебе!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Optative: ha ... -o — B2"
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
        "id": "definite-article-postposed",
        "title": "Sumcadda La Yaqaan: -ka, -ta — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль приєднується як суфікс до кінця іменника (-ka для чоловічого роду, -ta для жіночого), а не стоїть перед ним окремим словом.",
            "en": {
              "text": "The definite article attaches as a suffix at the end of the noun (-ka for masculine, -ta for feminine), rather than standing before it as a separate word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "nin → ninka (чоловік → цей чоловік)",
                "man → the man"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Postposed Definite Article: -ka, -ta — A1"
      },
      {
        "id": "word-order-sov",
        "title": "Habka Weedha: SOV — A2",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-додаток-присудок (SOV), причому дієслово майже завжди стоїть у кінці речення.",
            "en": {
              "text": "The basic word order is Subject-Object-Verb (SOV), with the verb almost always placed at the end of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ninku buug wuu akhriyayaa.",
                "Чоловік читає книгу (чоловік-книгу-читає)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Word Order: SOV — A2"
      },
      {
        "id": "plural-formation-classes",
        "title": "Jamaca: Qaababka — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється кількома різними класами закінчень (повторенням останнього приголосного, суфіксом -yaal, суфіксом -o) залежно від фонетичної форми слова.",
            "en": {
              "text": "Plurals are formed with several distinct classes (reduplicating the final consonant, the suffix -yaal, the suffix -o) depending on the word's phonetic shape."
            }
          },
          {
            "type": "table",
            "title": "Класи множини",
            "rows": [
              [
                "buug → buugag (книга → книги)",
                "book → books (consonant reduplication)"
              ],
              [
                "gees → geesyaal (герой → герої)",
                "hero → heroes (-yaal class)"
              ]
            ],
            "en": {
              "title": "Plural Classes"
            }
          }
        ],
        "titleEn": "Plural: Multiple Classes — B1"
      },
      {
        "id": "possessive-suffixes",
        "title": "Sumcaddaha Hantida — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність позначається закінченням, доданим до самого іменника (-kayga 'мій', -kaaga 'твій'), без окремого присвійного займенника перед ним.",
            "en": {
              "text": "Possession is marked with an ending attached to the noun itself (-kayga 'my', -kaaga 'your'), with no separate possessive pronoun placed before it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "buugga → buuggayga",
                "книга → моя книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessive Suffixes — A2"
      },
      {
        "id": "gender-adjective-agreement",
        "title": "Cuncundhigga: Jinsi — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники узгоджуються з іменником у числі (множина утворюється частим подвоєнням складу), але не за родом, — на відміну від означеного артикля, що завжди чутливий до роду.",
            "en": {
              "text": "Adjectives agree with the noun in number (the plural is often formed by reduplicating a syllable), but not in gender — unlike the definite article, which is always gender-sensitive."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "wiil weyn / wiilal waaweyn",
                "великий хлопчик / великі хлопчики (подвоєння в множині)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Number Agreement — B1"
      },
      {
        "id": "demonstratives",
        "title": "Tilmaamayaasha — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Вказівні займенники",
            "rows": [
              [
                "цей (ч.р.)",
                "kan"
              ],
              [
                "ця (ж.р.)",
                "tan"
              ],
              [
                "той (ч.р.)",
                "kaas"
              ]
            ],
            "en": {
              "title": "Demonstratives"
            }
          }
        ],
        "titleEn": "Demonstratives — A2"
      },
      {
        "id": "interrogatives",
        "title": "Su'aalaha — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто",
                "yaa"
              ],
              [
                "що",
                "maxay"
              ],
              [
                "де",
                "xaggee"
              ],
              [
                "коли",
                "goorma"
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
        "id": "cardinal-numbers",
        "title": "Tirooyinka: 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "1",
                "kow"
              ],
              [
                "2",
                "laba"
              ],
              [
                "3",
                "saddex"
              ],
              [
                "5",
                "shan"
              ],
              [
                "10",
                "toban"
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
        "id": "relative-clause-oo",
        "title": "Weedha Sifeynta: Oo — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Означальні (відносні) підрядні речення вводяться незмінною часткою oo, з'єднаною з наступним дієсловом безпосередньо, без окремого відносного займенника.",
            "en": {
              "text": "Relative clauses are introduced by the invariable particle oo, joined directly to the following verb, with no separate relative pronoun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ninka oo socda",
                "чоловік, що йде"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clause: oo — B1"
      },
      {
        "id": "negation-particle-maan",
        "title": "Diidmada Guud: Ma — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ma перед дієсловом одночасно позначає і заперечення, і (з іншою інтонацією) питання — контекст і тон визначають, яке значення передбачено.",
            "en": {
              "text": "The particle ma before the verb marks both negation and, with different intonation, a question — context and tone determine which meaning is intended."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ma tahay?",
                "Ти? (питання) vs. заперечення в іншому контексті"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Particle ma: Negation/Question — A2"
      },
      {
        "id": "comparative-ka-badan",
        "title": "Isbarbardhigga: Ka Badan — B1",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється прийменником ka ('від') перед об'єктом порівняння плюс прикметником, а не окремою граматичною формою прикметника.",
            "en": {
              "text": "The comparative is formed with the preposition ka ('from') before the compared object plus the adjective, rather than a separate grammatical adjective form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kani waa ka weyn kaas.",
                "Це більше за те."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: ka + adjective — B1"
      },
      {
        "id": "superlative-ugu",
        "title": "Ugu Sarreeya — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь порівняння утворюється часткою ugu ('за все') перед прикметником.",
            "en": {
              "text": "The superlative is formed with the particle ugu ('of all') before the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ugu weyn",
                "найбільший"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative: ugu — B1"
      },
      {
        "id": "conjunctions",
        "title": "Xidhiidhiyayaasha — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і",
                "iyo"
              ],
              [
                "або",
                "ama"
              ],
              [
                "але",
                "laakiin"
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
        "id": "prepositions-particles",
        "title": "Xardhaanka Fal-tix — B2",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Замість повноцінних прийменників сомалійська здебільшого вживає короткі дієслівні частки (u, ku, la, ka), приєднані безпосередньо перед дієсловом, а не окремі слова перед іменником.",
            "en": {
              "text": "Instead of full prepositions, Somali mostly uses short verbal particles (u, ku, la, ka), attached directly before the verb rather than as separate words before the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Wuu ii sheegay.",
                "Він сказав мені (ii = 'до мене')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Verbal Particles Instead of Prepositions — B2"
      },
      {
        "id": "construct-state-genitive",
        "title": "Xiriirinta Hantida — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійний зв'язок між двома іменниками передається їхнім прямим сусідством без окремого прийменника чи закінчення, — власник просто ставиться після посідомого предмета.",
            "en": {
              "text": "The possessive relation between two nouns is conveyed by their direct adjacency, with no separate preposition or ending — the possessor is simply placed after the possessed noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "buugga ninka",
                "книга чоловіка"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Construct-State Possession — B2"
      },
      {
        "id": "diminutive-suffix",
        "title": "Yareynta: -yar — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестлива форма утворюється прикметником yar ('малий'), поставленим після іменника, а не суфіксом, доданим до нього.",
            "en": {
              "text": "The diminutive is formed with the adjective yar ('small') placed after the noun, rather than a suffix attached to it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "wiil yar",
                "малий хлопчик"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive: yar — B1"
      },
      {
        "id": "vocative-simple",
        "title": "Yeedhista — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "При звертанні до когось ім'я вживається без означеного артикля -ka/-ta, на відміну від звичайного вживання іменника в реченні.",
            "en": {
              "text": "In direct address, a name is used without the definite article -ka/-ta, unlike its ordinary use as a noun in a sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Cali, kaalay!",
                "Алі, ходи сюди!"
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
        "id": "existential-waa-jira",
        "title": "Jiritaanka: Waa Jira — B1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чогось передається дієсловом jir ('існувати'), незалежно від живості чи класу предмета, про який ідеться.",
            "en": {
              "text": "The existence of something is expressed with the verb jir ('to exist'), regardless of the animacy or class of the thing being talked about."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Dad badan ayaa jira.",
                "Там багато людей."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Existential: jir — B1"
      },
      {
        "id": "reduplication-plural-adjective",
        "title": "Ku Celcelinta: Jamaca Cuncundhigga — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Множина прикметника часто утворюється подвоєнням першого складу, — окрема система від множини самого іменника.",
            "en": {
              "text": "The plural of an adjective is often formed by reduplicating its first syllable — a separate system from the noun's own plural."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "weyn → waaweyn",
                "великий → великі (подвоєння)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Plural via Reduplication — B1"
      },
      {
        "id": "abtirsiimo-lineage-suffix",
        "title": "Abtirsiimo: -eex — B2",
        "emoji": "🌳",
        "sections": [
          {
            "type": "intro",
            "text": "По-батькові й по-дідові утворюється простим додаванням імені батька й діда після власного імені без спеціального суфікса, — родовід (abtirsiimo) може містити десятки поколінь, промовлені підряд.",
            "en": {
              "text": "A patronymic and grandpatronymic is formed by simply adding the father's and grandfather's names after one's own with no special suffix — a genealogy (abtirsiimo) can string together dozens of generations recited in sequence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Cali Axmed Xasan",
                "Алі, син Ахмеда, син Хасана"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Patronymic Naming: Abtirsiimo — B2"
      },
      {
        "id": "adjective-position",
        "title": "Meesha Cuncundhigga — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник завжди стоїть після іменника, який він означає.",
            "en": {
              "text": "The adjective always follows the noun it modifies."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "guri weyn",
                "великий дім"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Position — A2"
      },
      {
        "id": "three-vowel-length",
        "title": "Dhererka Shaqallada — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Довгота голосного фонематична: короткий і подовжений варіант того самого голосного розрізняють значення слів, а на письмі позначаються подвоєнням літери.",
            "en": {
              "text": "Vowel length is phonemic: the short and lengthened version of the same vowel distinguish word meanings, and are marked in writing by doubling the letter."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "fur (відкрий!) vs. fuur (човен)",
                "open! vs. boat (short vs. long vowel)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Phonemic Vowel Length — B2"
      },
      {
        "id": "atr-vowel-harmony",
        "title": "ATR Wadajirka Shaqallada — C1",
        "emoji": "🔊",
        "sections": [
          {
            "type": "intro",
            "text": "Голосні поділяються на дві гармонійні групи за положенням кореня язика (ATR), і всі голосні в слові, включно з закінченнями, зазвичай узгоджуються з групою кореневого голосного.",
            "en": {
              "text": "Vowels split into two harmonic sets based on advanced tongue root (ATR) position, and all vowels in a word, including endings, typically agree with the set of the root vowel."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "buug (+ATR набір) → buugga (закінчення узгоджене)",
                "book (+ATR set) → the book (matching ending)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "ATR Vowel Harmony — C1"
      },
      {
        "id": "short-pronoun-attachment",
        "title": "Magac-u-yaalka Gaagaaban — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "У швидкому мовленні повні займенники (aniga, adiga) скорочуються (aan, aad) і приєднуються безпосередньо перед часткою waa чи дієсловом, зливаючись у майже єдине фонетичне слово.",
            "en": {
              "text": "In fast speech, full pronouns (aniga, adiga) shorten (aan, aad) and attach directly before the particle waa or the verb, merging into an almost single phonetic word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Waan tegayaa. (waa + aan)",
                "I am going (fused particle + short pronoun)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Short Pronoun Attachment — B1"
      },
      {
        "id": "question-particle-ma-position",
        "title": "Su'aasha Haa/Maya — A2",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні ставиться на початку речення часткою ma, з тим самим порядком слів, що й у стверджувальному реченні.",
            "en": {
              "text": "A yes/no question is formed with the particle ma at the start of the sentence, with the same word order as a declarative sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ma soomaali baad tahay?",
                "Ти сомалієць?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Yes/No Question: ma — A2"
      },
      {
        "id": "somali-poetic-tradition",
        "title": "Gabay: Farshaxanka Maansada — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Сомалійців нерідко називають 'нацією поетів': алітераційна поезія (gabay, geeraar, buraanbur) — центральна форма політичного дискурсу й історичної пам'яті, де кожен рядок вірша має починатися на той самий звук.",
            "en": {
              "text": "Somalis are often called a 'nation of poets': alliterative poetry (gabay, geeraar, buraanbur) is a central form of political discourse and historical memory, where every line of a poem must begin with the same sound."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "gabay (довга алітераційна поема)",
                "gabay (long alliterative poem form)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Somali Poetic Tradition — B2"
      },
      {
        "id": "xeer-customary-law",
        "title": "Xeer: Sharciga Dhaqameed — B2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Xeer — незаписаний звичаєвий кодекс, що регулює відносини між кланами (компенсацію за шкоду, шлюб, землю) і досі діє паралельно з державним правом у багатьох регіонах.",
            "en": {
              "text": "Xeer is an unwritten customary code governing inter-clan relations (compensation for harm, marriage, land) and still operates alongside state law in many regions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "go'aan xeer ah (рішення за xeer)",
                "a xeer-based ruling"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Xeer: Customary Law — B2"
      },
      {
        "id": "camel-vocabulary-richness",
        "title": "Geel: Erayada Badan — B1",
        "emoji": "🐫",
        "sections": [
          {
            "type": "intro",
            "text": "Через центральну роль верблюда в кочовому скотарстві сомалійська має десятки окремих слів для верблюда залежно від віку, статі, масті й призначення, набагато точніших, ніж загальне слово 'верблюд'.",
            "en": {
              "text": "Because of the camel's central role in nomadic pastoralism, Somali has dozens of distinct words for camels depending on age, sex, color, and purpose, far more precise than the general word 'camel'."
            }
          },
          {
            "type": "table",
            "title": "Верблюжа лексика",
            "rows": [
              [
                "верблюд (загальне слово)",
                "geel"
              ],
              [
                "молода верблюдиця",
                "qaalin"
              ]
            ],
            "en": {
              "title": "Camel Vocabulary"
            }
          }
        ],
        "titleEn": "Camel Vocabulary Richness — B1"
      },
      {
        "id": "hospitality-martida-soor",
        "title": "Martida Soor: Soo Dhawaynta — B1",
        "emoji": "🍽️",
        "sections": [
          {
            "type": "intro",
            "text": "Гостинність (martinimo) — фундаментальний соціальний обов'язок: гостя годують найкращою наявною їжею незалежно від власного достатку господаря, а відмова прийняти гостя вважається серйозним порушенням честі.",
            "en": {
              "text": "Hospitality (martinimo) is a fundamental social obligation: a guest is fed the best available food regardless of the host's own means, and refusing a guest is considered a serious breach of honor."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "martida soor la siiyaa",
                "гостю подають найкращу їжу"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Hospitality: Martida Soor — B1"
      },
      {
        "id": "osmanya-script-detail",
        "title": "Far Soomaali: Osmanya — B2",
        "emoji": "𐒘",
        "sections": [
          {
            "type": "intro",
            "text": "Письмо османія, створене Османом Юсуфом Кенадідом у 1920-х роках, — цілком оригінальна абетка, не запозичена з жодної іншої писемної системи, і досі використовується частиною письменників попри офіційне визнання лише латинки.",
            "en": {
              "text": "The Osmanya script, created by Osman Yusuf Kenadid in the 1920s, is an entirely original alphabet borrowed from no other writing system, and is still used by some writers despite only the Latin script having official status."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "𐒋𐒖𐒑𐒛𐒐𐒖𐒒𐒘 (Osmanya)",
                "written in the Osmanya script"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Osmanya Script — B2"
      },
      {
        "id": "clan-lineage-system",
        "title": "Qabiil: Nidaamka Abtirsiinta — B2",
        "emoji": "🌳",
        "sections": [
          {
            "type": "intro",
            "text": "Клан і родовід визначають соціальну ідентичність глибше, ніж місце народження: більшість сомалійців можуть перелічити своє генеалогічне дерево на 20 поколінь назад напам'ять.",
            "en": {
              "text": "Clan and lineage define social identity more deeply than place of birth: most Somalis can recite their genealogical tree back 20 generations from memory."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "qabiil (клан)",
                "clan"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Clan Lineage System — B2"
      },
      {
        "id": "food-vocabulary",
        "title": "Cuntada — A2",
        "emoji": "🍞",
        "sections": [
          {
            "type": "table",
            "title": "Їжа",
            "rows": [
              [
                "коржик з тіста",
                "canjeero"
              ],
              [
                "рис",
                "bariis"
              ],
              [
                "м'ясо",
                "hilib"
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
        "id": "colors",
        "title": "Midabada — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "червоний",
                "casaan"
              ],
              [
                "чорний",
                "madow"
              ],
              [
                "білий",
                "cad"
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
        "title": "Tirooyinka: Toban — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "Десятки",
            "rows": [
              [
                "20",
                "labaatan"
              ],
              [
                "100",
                "boqol"
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
        "id": "days-of-week",
        "title": "Maalmaha Toddobaadka — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "понеділок",
                "Isniin"
              ],
              [
                "п'ятниця",
                "Jimce"
              ],
              [
                "неділя",
                "Axad"
              ]
            ],
            "en": {
              "title": "Days"
            }
          }
        ],
        "titleEn": "Days of the Week — A2"
      },
      {
        "id": "family-terms",
        "title": "Qoyska — A2",
        "emoji": "👪",
        "sections": [
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "батько",
                "aabbe"
              ],
              [
                "мати",
                "hooyo"
              ],
              [
                "брат",
                "walaal"
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
        "title": "Salaanta — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Вітання",
            "rows": [
              [
                "Привіт",
                "Salaan / Nabad"
              ],
              [
                "Дякую",
                "Mahadsanid"
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
        "title": "Cimilada — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "qorrax"
              ],
              [
                "дощ",
                "roob"
              ],
              [
                "вітер",
                "dabayl"
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
        "title": "Qaybaha Jidhka — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "madax"
              ],
              [
                "рука",
                "gacan"
              ],
              [
                "око",
                "il"
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
        "id": "nomadic-pastoralist-vocabulary",
        "title": "Reer Guuraaga — B1",
        "emoji": "🏕️",
        "sections": [
          {
            "type": "intro",
            "text": "Кочове скотарство (reer guuraa) досі формує спосіб життя значної частини сомалійців, тому мова має розвинену лексику для переносного житла (aqal) і сезонних міграційних маршрутів.",
            "en": {
              "text": "Nomadic pastoralism (reer guuraa) still shapes life for a large share of Somalis, so the language has developed vocabulary for portable dwellings (aqal) and seasonal migration routes."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "aqal (переносний намет)",
                "the portable nomadic hut"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Nomadic Pastoralist Vocabulary — B1"
      },
      {
        "id": "somali-star-flag-symbolism",
        "title": "Calanka: Xiddigta Shanta Geesood — B1",
        "emoji": "⭐",
        "sections": [
          {
            "type": "intro",
            "text": "П'ятикутна зірка на прапорі Сомалі символізує п'ять регіонів, населених етнічними сомалійцями (включно з ділянками сусідніх держав), — політично значущий символ, а не просто декоративна форма.",
            "en": {
              "text": "The five-pointed star on the Somali flag symbolizes the five regions inhabited by ethnic Somalis (including portions of neighboring countries) — a politically significant symbol, not merely a decorative shape."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Xiddigta Shanta Geesood",
                "П'ятикутна зірка (символ прапора)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Five-Pointed Star Symbol — B1"
      },
      {
        "id": "horn-of-africa-geography",
        "title": "Geeska Afrika — B1",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Сомалія займає стратегічне положення на Африканському Розі з найдовшою береговою лінією континенту, що історично зробило регіон центром торгівлі між Африкою, Аравією та Індійським океаном.",
            "en": {
              "text": "Somalia occupies a strategic position on the Horn of Africa with the continent's longest coastline, which historically made the region a hub of trade between Africa, Arabia, and the Indian Ocean."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Geeska Afrika (Африканський Ріг)",
                "the Horn of Africa"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Horn of Africa Geography — B1"
      },
      {
        "id": "clothing-vocabulary",
        "title": "Dharka — A2",
        "emoji": "🧣",
        "sections": [
          {
            "type": "table",
            "title": "Одяг",
            "rows": [
              [
                "традиційний чоловічий одяг",
                "macawis"
              ],
              [
                "жіноче вбрання",
                "guntiino"
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
        "id": "animals-vocabulary",
        "title": "Xayawaanka — A2",
        "emoji": "🐐",
        "sections": [
          {
            "type": "table",
            "title": "Тварини",
            "rows": [
              [
                "коза",
                "ri'"
              ],
              [
                "вівця",
                "ido"
              ],
              [
                "кінь",
                "faras"
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
        "title": "Jihooyinka — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "table",
            "title": "Сторони світу",
            "rows": [
              [
                "північ",
                "waqooyi"
              ],
              [
                "південь",
                "koonfur"
              ],
              [
                "схід",
                "bari"
              ],
              [
                "захід",
                "galbeed"
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
        "id": "honorific-address",
        "title": "Sharaf Bixinta — B1",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Звертання до старших чи поважних осіб часто вживає слово mudane ('пане/шановний') або звертання за родинним статусом навіть до незнайомих людей відповідного віку.",
            "en": {
              "text": "Address to elders or respected people often uses the word mudane ('sir/honorable') or kinship-status address even for strangers of an appropriate age."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mudane Xasan",
                "пан Хасан (шанобливе звертання)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Honorific Address — B1"
      },
      {
        "id": "diaspora-vocabulary",
        "title": "Qurbaha: Dadka Diaspora — B2",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Через десятиліття громадянської війни значна сомалійська діаспора живе за кордоном (qurbaha), із розвиненою лексикою для грошових переказів (xawaalad) додому, що є основою економіки багатьох родин.",
            "en": {
              "text": "Through decades of civil war, a significant Somali diaspora lives abroad (qurbaha), with developed vocabulary for remittances (xawaalad) home, which form the backbone of many families' economies."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "xawaalad (переказ грошей)",
                "the remittance transfer system"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diaspora and Remittance Vocabulary — B2"
      },
      {
        "id": "somali-arabic-loanword-layer",
        "title": "Erayada Carabiga — B1",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Через іслам та багатовікові торгові зв'язки з Аравією сомалійська містить значний шар арабських запозичень, особливо в релігійній, юридичній та навчальній лексиці.",
            "en": {
              "text": "Through Islam and centuries of trade links with Arabia, Somali contains a significant layer of Arabic loanwords, especially in religious, legal, and educational vocabulary."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kitaab (з арабської 'книга')",
                "book (Arabic loan)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Arabic Loanword Layer — B1"
      },
      {
        "id": "coordinating-conjunctions-extra",
        "title": "Xidhiidhiyayaal Kale — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Сполучник sababtoo ah ('тому що') і частка balse ('однак') розширюють базовий набір iyo/ama/laakiin, додаючи причинові й протиставні зв'язки.",
            "en": {
              "text": "The conjunction sababtoo ah ('because') and the particle balse ('however') extend the basic iyo/ama/laakiin set, adding causal and contrastive links."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Waan joogay guriga sababtoo ah roob ayaa da'ay.",
                "Я залишився вдома, бо йшов дощ."
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
        "id": "irregular-verb-yahay",
        "title": "Fal Aan Caadi Ahayn: Yahay — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово yahay ('бути') має повністю супплетивні форми в різних часах, не пов'язані спільним коренем із формами минулого часу (ahaa).",
            "en": {
              "text": "The verb yahay ('to be') has fully suppletive forms across different tenses, unrelated in root to its past-tense forms (ahaa)."
            }
          },
          {
            "type": "table",
            "title": "Супплетивні форми",
            "rows": [
              [
                "yahay (є) vs. ahaa (був)",
                "is vs. was (suppletive roots)"
              ]
            ],
            "en": {
              "title": "Suppletive Forms"
            }
          }
        ],
        "titleEn": "Irregular Verb: yahay ('to be') — B1"
      },
      {
        "id": "irregular-plural-nin",
        "title": "Jamaca Aan Caadi Ahayn: Nin → Niman — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дуже частотних іменників, зокрема nin ('чоловік'), мають множину, що не вписується в жоден зі стандартних класів, а утворюється зміною голосного всередині слова.",
            "en": {
              "text": "A handful of very frequent nouns, including nin ('man'), have a plural that fits none of the standard classes, formed instead by an internal vowel change."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна множина",
            "rows": [
              [
                "nin → niman",
                "man → men (irregular internal vowel change)"
              ]
            ],
            "en": {
              "title": "Irregular Plural"
            }
          }
        ],
        "titleEn": "Irregular Plural: nin → niman — B2"
      },
      {
        "id": "irregular-comparative-wanaagsan",
        "title": "Isbarbardhigga Aan Caadi Ahayn: Fiican → Ka Fiican — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Замість очікуваного *ka wanaagsan для порівняльного ступеня 'доброго', розмовна мова часто вживає окрему форму fiican у порівняльній конструкції, витісняючи більш формальне wanaagsan.",
            "en": {
              "text": "Instead of the expected *ka wanaagsan for the comparative of 'good', colloquial speech often uses the separate word fiican in the comparative construction, displacing the more formal wanaagsan."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярне порівняння",
            "rows": [
              [
                "ka fiican (розмовно) замість ka wanaagsan",
                "better (colloquial substitution for the formal comparative)"
              ]
            ],
            "en": {
              "title": "Irregular Comparative"
            }
          }
        ],
        "titleEn": "Irregular Comparative: fiican vs. wanaagsan — B1"
      }
    ]
  }
];
