// Vymova — data/grammar-data/grammar_sc.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_SC: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Pronòmines Personales — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Сардинська вважається найконсервативнішою романською мовою — вона зберегла найбільше рис латинської фонетики.",
            "en": {
              "text": "Sardinian is considered the most conservative Romance language — it retains the most features of Latin phonetics."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "deu"
              ],
              [
                "ти",
                "tue"
              ],
              [
                "він / вона",
                "issu / issa"
              ],
              [
                "ми",
                "nois"
              ],
              [
                "ви",
                "bois"
              ],
              [
                "вони (ч./ж.)",
                "issos / issas"
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
        "id": "definite-article-su-sa",
        "title": "Artìculu: Su, Sa — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль su/sa походить від латинського ipse/ipsa ('сам'), а не від ille/illa, як у майже всіх інших романських мовах, — унікальна риса сардинської серед романської родини.",
            "en": {
              "text": "The definite article su/sa derives from Latin ipse/ipsa ('itself'), not from ille/illa as in almost every other Romance language — a unique feature of Sardinian within the Romance family."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "su sole / sa domo",
                "сонце / дім"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Definite Article: su, sa — A1"
      },
      {
        "id": "retention-latin-velars",
        "title": "Conservatzione: Chelu, non Cielo — B1",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Сардинська зберегла латинські задньоязикові /k/ та /g/ перед голосними переднього ряду, там де італійська та більшість романських мов їх пом'якшили: лат. caelum → сард. chelu /k/, а не італ. cielo /tʃ/.",
            "en": {
              "text": "Sardinian preserved the Latin velars /k/ and /g/ before front vowels, where Italian and most Romance languages softened them: Lat. caelum → Sardinian chelu /k/, not Italian cielo /tʃ/."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "chelu (небо, /k/) vs. італ. cielo (/tʃ/)",
                "sky: Sardinian keeps the Latin /k/"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Retention of Latin Velars — B1"
      },
      {
        "id": "masculine-u-ending",
        "title": "Final -u, non -o — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники й прикметники чоловічого роду закінчуються на -u, точно як латинський знахідний відмінок -um, тоді як італійська, іспанська та португальська змінили це закінчення на -o.",
            "en": {
              "text": "Masculine nouns and adjectives end in -u, exactly as the Latin accusative -um, whereas Italian, Spanish, and Portuguese all shifted this ending to -o."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "fizu (син, лат. filium) vs. італ. figlio",
                "son: Sardinian keeps the Latin -u"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Masculine -u Ending — A2"
      },
      {
        "id": "metaphony-vowel-raising",
        "title": "Metafonia: Onori de Sonos — B2",
        "emoji": "🔊",
        "sections": [
          {
            "type": "intro",
            "text": "Кінцеве -u чи -i в слові спричиняє підняття кореневого середнього голосного (e→i, o→u) у попередньому складі — метафонія, характерна фонологічна риса, успадкована прямо з народної латини.",
            "en": {
              "text": "A final -u or -i in a word triggers the raising of a mid vowel (e→i, o→u) in the preceding syllable — vowel metaphony, a characteristic phonological trait inherited directly from Vulgar Latin."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "porcu (свиня, o→u перед -u)",
                "pig: the root vowel raises before final -u"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Metaphony: Vowel Raising — B2"
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
        "id": "present-tense",
        "title": "Presente — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється особовими закінченнями, доданими до основи дієслова, і поділяється на три дієвідміни за закінченням інфінітива (-are, -ere, -ire).",
            "en": {
              "text": "The present tense is formed with person endings added to the verb stem, split into three conjugation classes by the infinitive ending (-are, -ere, -ire)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Deu fueddo sardu.",
                "Я говорю сардинською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Tense — A1"
      },
      {
        "id": "imperfect-tense",
        "title": "Imperfetu — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Імперфект позначає тривалу чи звичну дію в минулому і утворюється суфіксом -aia (перша дієвідміна) чи -ia (інші), доданим до основи.",
            "en": {
              "text": "The imperfect marks an ongoing or habitual past action and is formed with the suffix -aia (first conjugation) or -ia (others), added to the stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Deu fueddaia sardu.",
                "Я, бувало, говорив сардинською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imperfect Tense — A2"
      },
      {
        "id": "simple-past-preterite",
        "title": "Perfetu Simple — B1",
        "emoji": "⏪",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від французької, романшу чи навіть італійської розмовної мови, сардинська зберігає живий простий претерит в усному мовленні, особливо в кампіданському діалекті, а не лише в літературних текстах.",
            "en": {
              "text": "Unlike French, Romansh, or even spoken Italian, Sardinian keeps a living simple preterite in everyday speech, especially in the Campidanese dialect, rather than confining it to literary texts."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Deu fueddesi sardu.",
                "Я поговорив сардинською (простий претерит, живий у мовленні)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Simple Preterite (Still Living) — B1"
      },
      {
        "id": "compound-perfect",
        "title": "Perfetu Cumpostu — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Складений перфект утворюється допоміжним дієсловом aer ('мати') у теперішньому часі плюс дієприкметник минулого часу, вживаний паралельно з живим простим претеритом.",
            "en": {
              "text": "The compound perfect is formed with the auxiliary aer ('to have') in the present tense plus the past participle, used alongside the still-living simple preterite."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Apo fueddadu.",
                "Я поговорив (складений перфект)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Perfect — A2"
      },
      {
        "id": "pluperfect",
        "title": "Prus-che-Perfetu — B1",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект утворюється допоміжним дієсловом в імперфекті плюс дієприкметник минулого часу, позначаючи дію, завершену до іншої минулої дії.",
            "en": {
              "text": "The pluperfect is formed with the auxiliary in the imperfect plus the past participle, marking an action completed before another past action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aia fueddadu.",
                "Я вже був поговорив."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pluperfect — B1"
      },
      {
        "id": "periphrastic-future",
        "title": "Futuru: Apo a — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час здебільшого утворюється периферичною конструкцією apo a + інфінітив (букв. 'маю зробити'), а не синтетичним закінченням, типовим для більшості романських мов.",
            "en": {
              "text": "The future tense is mostly formed with the periphrastic construction apo a + infinitive (lit. 'I have to do'), rather than the synthetic ending typical of most Romance languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Apo a fueddare.",
                "Я говоритиму."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Periphrastic Future: apo a — A2"
      },
      {
        "id": "conditional-mood",
        "title": "Cundizionale — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється закінченням -ia, доданим до основи майбутнього часу, і вживається в умовних реченнях і для ввічливих прохань.",
            "en": {
              "text": "The conditional mood is formed with the ending -ia added to the future stem, and is used in conditional sentences and for polite requests."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Fueddaria.",
                "Я б поговорив."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional Mood — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Imperativu — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб однини утворюється власним закінченням, відмінним від теперішнього часу; множина здебільшого запозичує форму другої особи множини теперішнього часу.",
            "en": {
              "text": "The singular imperative is formed with its own ending, distinct from the present tense; the plural mostly borrows the second-person-plural present form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Fueddad'!",
                "Говори!"
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
        "id": "subjunctive-present",
        "title": "Congiuntivu Presente — B2",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Умовно-бажальний спосіб теперішнього часу вживається після дієслів сумніву чи бажання й утворюється власним набором закінчень, відмінним від дійсного способу.",
            "en": {
              "text": "The present subjunctive is used after verbs of doubt or wishing, and is formed with its own set of endings distinct from the indicative."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "chi issu fueddet",
                "щоб він говорив"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Subjunctive — B2"
      },
      {
        "id": "subjunctive-imperfect",
        "title": "Congiuntivu Imperfetu — B2",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Умовно-бажальний спосіб минулого часу утворюється власним набором закінчень і вживається в непрямій мові та умовних реченнях у минулому.",
            "en": {
              "text": "The imperfect subjunctive is formed with its own set of endings and is used in reported speech and past conditional clauses."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "si issu fueddesse",
                "якби він говорив"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imperfect Subjunctive — B2"
      },
      {
        "id": "progressive-istare-gerund",
        "title": "Progressivu: Istare a — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в теперішньому моменті передається перифразою istare a + інфінітив (букв. 'бути зайнятим робленням'), подібно до іспанської конструкції estar + герундій.",
            "en": {
              "text": "An action in progress right now is expressed with the periphrasis istare a + infinitive (lit. 'to be busy doing'), similar to the Spanish estar + gerund construction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Isto a fueddare.",
                "Я саме говорю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Progressive: istare a — B1"
      },
      {
        "id": "gerund-form",
        "title": "Gerùndiu — B1",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівник (герундій) утворюється суфіксом -ende/-inde, доданим до основи, і вживається у прогресивних конструкціях і для вираження супровідної дії.",
            "en": {
              "text": "The gerund is formed with the suffix -ende/-inde added to the stem, and is used in progressive constructions and to express an accompanying action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "fueddende",
                "говорячи"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gerund — B1"
      },
      {
        "id": "infinitive-form",
        "title": "Infinidu — A1",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив (словникова форма дієслова) закінчується на -are, -ere чи -ire залежно від дієвідміни, і саме ця форма подається в словниках.",
            "en": {
              "text": "The infinitive (dictionary form of the verb) ends in -are, -ere, or -ire depending on the conjugation class, and this is the form listed in dictionaries."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "fueddare",
                "говорити (інфінітив)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Infinitive — A1"
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
        "id": "gender-two-way",
        "title": "Gènere: Mascu e Fèmina — A1",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники мають чоловічий (-u) або жіночий (-a) рід, і означений артикль та прикметники узгоджуються з ним.",
            "en": {
              "text": "Nouns are masculine (-u) or feminine (-a), and the definite article and adjectives agree with it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "su fizu / sa fiza",
                "син / дочка"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gender: Masculine and Feminine — A1"
      },
      {
        "id": "plural-s-ending",
        "title": "Plurale: -s — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється закінченням -s, доданим до однини, — так само, як у французькій, каталанській чи романші, на відміну від -i в італійській.",
            "en": {
              "text": "The plural is formed with the ending -s added to the singular — as in French, Catalan, or Romansh, unlike -i in Italian."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "su fizu → sos fizos",
                "син → сини"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural: -s — A1"
      },
      {
        "id": "adjective-agreement",
        "title": "Agetivu: Cuncordàntzia — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники узгоджуються з іменником у роді й числі, зазвичай приймаючи -a в жіночому роді й -s у множині.",
            "en": {
              "text": "Adjectives agree with the noun in gender and number, typically taking -a in the feminine and -s in the plural."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "fizu bellu / fiza bella",
                "гарний син / гарна дочка"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Agreement — A2"
      },
      {
        "id": "word-order-svo",
        "title": "Òrdine de sas Paràulas: SVO — A2",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-присудок-додаток (SVO), типовий для романських мов, хоча сардинська дозволяє винесення додатка на початок речення для наголосу.",
            "en": {
              "text": "The basic word order is Subject-Verb-Object (SVO), typical of Romance languages, though Sardinian allows fronting the object to the start of the sentence for emphasis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Deu bido sa domo.",
                "Я бачу дім."
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
        "id": "reflexive-verbs",
        "title": "Verbos Reflessivos: Si — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотні дієслова вживаються з частками, узгодженими за особою (mi, ti, si, nos, bos, si), поставленими перед дієсловом.",
            "en": {
              "text": "Reflexive verbs are used with particles agreeing in person (mi, ti, si, nos, bos, si), placed before the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Deu mi lavo.",
                "Я вмиваюся."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Verbs: si — B1"
      },
      {
        "id": "comparative-degree",
        "title": "Cumparativu: Prus...de — B1",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється часткою prus ('більш') перед прикметником, а об'єкт порівняння вводиться прийменником de ('ніж').",
            "en": {
              "text": "The comparative degree is formed with the particle prus ('more') before the adjective, and the compared object is introduced with the preposition de ('than')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Custu est prus mannu de cussu.",
                "Це більше за те."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: prus...de — B1"
      },
      {
        "id": "superlative-degree",
        "title": "Superlativu: Su Prus — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь порівняння утворюється означеним артиклем плюс часткою prus перед прикметником.",
            "en": {
              "text": "The superlative is formed with the definite article plus the particle prus before the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "su prus mannu",
                "найбільший"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative: su prus — B1"
      },
      {
        "id": "cardinal-numbers",
        "title": "Nùmeros: 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "1",
                "unu"
              ],
              [
                "2",
                "duos"
              ],
              [
                "3",
                "tres"
              ],
              [
                "5",
                "chimbe"
              ],
              [
                "10",
                "deghe"
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
        "title": "Pronòmines Interrogativos — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто",
                "chie"
              ],
              [
                "що",
                "ite"
              ],
              [
                "де",
                "aue"
              ],
              [
                "коли",
                "cando"
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
        "id": "demonstratives",
        "title": "Pronòmines Dimustrativos — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Вказівні займенники",
            "rows": [
              [
                "цей",
                "custu"
              ],
              [
                "той",
                "cuddu"
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
        "id": "possessive-adjectives",
        "title": "Agetivos Possessivos — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "table",
            "title": "Присвійні прикметники",
            "rows": [
              [
                "мій",
                "meu / mea"
              ],
              [
                "твій",
                "tuo / tua"
              ],
              [
                "наш",
                "nostru / nostra"
              ]
            ],
            "en": {
              "title": "Possessives"
            }
          }
        ],
        "titleEn": "Possessive Adjectives — A2"
      },
      {
        "id": "negation-non",
        "title": "Negatzione: Non — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою non, поставленою перед дієсловом, — проста префіксальна модель, типова для більшості романських мов.",
            "en": {
              "text": "Negation is formed with the particle non placed before the verb — a simple prefixal pattern typical of most Romance languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Deu non isco.",
                "Я не знаю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation: non — A1"
      },
      {
        "id": "object-pronoun-clitics",
        "title": "Pronòmines Clìticos — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Ненаголошені займенники-додатки (клітики) ставляться перед дієсловом у розповідних реченнях, але приєднуються після нього в наказовому способі та інфінітиві.",
            "en": {
              "text": "Unstressed object pronouns (clitics) are placed before the verb in declarative sentences, but attach after it in the imperative and infinitive."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Deu lu bido. / Bide-lu!",
                "Я його бачу. / Побач його!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Object Pronoun Clitics — B1"
      },
      {
        "id": "prepositions-simple",
        "title": "Prepositziones — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "table",
            "title": "Прийменники",
            "rows": [
              [
                "в",
                "in"
              ],
              [
                "на",
                "in subra de"
              ],
              [
                "з",
                "cun"
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
        "id": "conjunctions",
        "title": "Cungiuntziones — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і",
                "e"
              ],
              [
                "або",
                "o"
              ],
              [
                "але",
                "ma"
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
        "id": "relative-pronoun-chi",
        "title": "Pronòmine Relativu: Chi — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Означальні (відносні) підрядні речення вводяться незмінним відносним займенником chi ('що/який'), незалежно від роду й числа означуваного іменника.",
            "en": {
              "text": "Relative clauses are introduced by the invariable relative pronoun chi ('who/which'), regardless of the gender and number of the noun being modified."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "s'òmine chi fueddat",
                "чоловік, що говорить"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Pronoun: chi — B1"
      },
      {
        "id": "passive-voice",
        "title": "Passivu: Essere — B2",
        "emoji": "📥",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється допоміжним дієсловом essere ('бути') плюс дієприкметник минулого часу, узгоджений із підметом за родом і числом.",
            "en": {
              "text": "The passive voice is formed with the auxiliary essere ('to be') plus the past participle, agreeing with the subject in gender and number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sa domo est fabbricada.",
                "Будинок побудований."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive Voice: essere — B2"
      },
      {
        "id": "diminutive-suffix",
        "title": "Diminutivu: -eddu — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестлива форма утворюється суфіксом -eddu (ч.р.) або -edda (ж.р.), доданим до основи іменника, і вживається надзвичайно часто в побутовому мовленні.",
            "en": {
              "text": "The diminutive is formed with the suffix -eddu (masculine) or -edda (feminine), added to the noun stem, and is used extremely frequently in everyday speech."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "domo → domitta / domixedda",
                "дім → будиночок"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive: -eddu — B1"
      },
      {
        "id": "adjective-position-flexible",
        "title": "Positzione de s'Agetivu — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Більшість описових прикметників стоїть після іменника, підкреслюючи об'єктивну властивість, тоді як позиція перед іменником надає прикметнику суб'єктивного, оцінного відтінку.",
            "en": {
              "text": "Most descriptive adjectives follow the noun, emphasizing an objective property, while a preceding position gives the adjective a subjective, evaluative shade."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "domo manna / manna domo",
                "великий дім (об'єктивно / експресивно)"
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
        "id": "auxiliary-aer-only",
        "title": "Auxiliar: Isceti Aer — B1",
        "emoji": "⚙️",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від італійської чи романшу, сардинська вживає лише одне допоміжне дієслово aer ('мати') у складених часах для всіх дієслів, включно з дієсловами руху, без чергування з essere.",
            "en": {
              "text": "Unlike Italian or Romansh, Sardinian uses only the single auxiliary aer ('to have') in compound tenses for all verbs, including motion verbs, with no alternation with essere."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Apo andadu.",
                "Я пішов. (aer навіть із дієсловом руху)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Single Auxiliary: aer — B1"
      },
      {
        "id": "infinitive-as-noun",
        "title": "Infinidu comente Nòmine — B1",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив може вживатися як іменник з означеним артиклем su, позначаючи саму дію абстрактно.",
            "en": {
              "text": "The infinitive can be used as a noun with the definite article su, denoting the action itself abstractly."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "su fueddare",
                "говоріння (сам процес)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Infinitive as Noun — B1"
      },
      {
        "id": "contraction-prepositions",
        "title": "Cuntratziones: In Su → In Su — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменник de зливається з означеним артиклем su/sa в одну форму (de su → 'e su в розмовній мові), подібно до італійських del/della.",
            "en": {
              "text": "The preposition de fuses with the definite article su/sa into a single form (de su → 'e su in colloquial speech), similar to Italian del/della."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "sa domo 'e su re",
                "дім короля"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Preposition-Article Contractions — B1"
      },
      {
        "id": "double-negation",
        "title": "Negatzione Dòppia: Non...Mancu — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечні слова mancu ('навіть не') і nudda ('нічого') утворюють подвійне заперечення разом із non, посилюючи заперечну конструкцію, а не скасовуючи одне одного.",
            "en": {
              "text": "The negative words mancu ('not even') and nudda ('nothing') form a double negation together with non, reinforcing the negative rather than cancelling it out."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Non apo nudda.",
                "У мене нічого немає."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Double Negation: non...nudda — B1"
      },
      {
        "id": "vocative-simple",
        "title": "Vocativu — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "При прямому звертанні форма іменника не змінюється, а звертання зазвичай супроводжується вигуком o перед іменем для урочистого чи ласкавого відтінку.",
            "en": {
              "text": "In direct address, the noun form stays unchanged, and address is often accompanied by the exclamation o before the name for a solemn or affectionate tone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "O Maria, beni!",
                "О Маріє, приходь!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vocative — A2"
      },
      {
        "id": "existential-ci-b",
        "title": "Esistentzia: Bi Est — B1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чогось у певному місці передається зворотом bi est ('там є'), із локативною часткою bi перед дієсловом 'бути', подібно до французького il y a.",
            "en": {
              "text": "The existence of something at a place is expressed with bi est ('there is'), with the locative particle bi before the verb 'to be', similar to French il y a."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bi at zente meda.",
                "Там багато людей."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Existential: bi est — B1"
      },
      {
        "id": "question-inversion",
        "title": "Dimandas: Inversione — A2",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання без питального слова здебільшого утворюється підйомом інтонації в кінці речення, без обов'язкової інверсії підмета й дієслова.",
            "en": {
              "text": "A yes/no question is mostly formed by rising intonation at the end of the sentence, without obligatory subject-verb inversion."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Fueddas sardu?",
                "Ти говориш сардинською?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Yes/No Questions: Intonation — A2"
      },
      {
        "id": "sardinian-dialect-groups",
        "title": "Sos Grupos Dialetales — B1",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Сардинська мова поділяється на дві основні гілки — логудорсько-нуорську (північ, найконсервативніша) і кампіданську (південь) — часто настільки різні, що їх іноді вважають окремими мовами.",
            "en": {
              "text": "Sardinian splits into two main branches — Logudorese-Nuorese (north, most conservative) and Campidanese (south) — often different enough that they are sometimes considered separate languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Logudoresu vs. Campidanesu",
                "дві головні гілки сардинської"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sardinian Dialect Groups — B1"
      },
      {
        "id": "limba-sarda-comuna",
        "title": "Limba Sarda Comuna: Su Standard — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Limba Sarda Comuna (LSC) — експериментальний наддіалектний стандарт, ухвалений 2006 року для офіційного вжитку, що досі не витіснив жоден із живих діалектів у побутовому мовленні.",
            "en": {
              "text": "Limba Sarda Comuna (LSC) is an experimental pan-dialectal standard adopted in 2006 for official use, which has still not displaced any living dialect in everyday speech."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "LSC: documentos ufitziales",
                "офіційні документи ЛСК"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Limba Sarda Comuna Standard — B2"
      },
      {
        "id": "nuragic-substrate",
        "title": "Su Sustratu Nuràgicu — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька слів сардинської не мають латинського чи романського походження й, імовірно, збереглися з долатинської нурагічної цивілізації бронзової доби, якій належать тисячі веж-нурагів на острові.",
            "en": {
              "text": "A handful of Sardinian words have no Latin or Romance origin and likely survive from the pre-Latin Nuragic Bronze Age civilization, responsible for the island's thousands of nuraghe towers."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "nuraghe (сама назва, долатинське)",
                "nuraghe (the word itself is pre-Latin)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Nuragic Substrate — B2"
      },
      {
        "id": "cantu-a-tenore",
        "title": "Cantu a Tenore — B2",
        "emoji": "🎤",
        "sections": [
          {
            "type": "intro",
            "text": "Cantu a tenore — поліфонічний горловий спів чотирьох чоловічих голосів, визнаний ЮНЕСКО шедевром нематеріальної культурної спадщини, з унікальною термінологією для кожного голосу (bassu, contra, boghe, mesu boghe).",
            "en": {
              "text": "Cantu a tenore is a polyphonic throat-singing style for four male voices, recognized by UNESCO as a Masterpiece of Intangible Cultural Heritage, with unique terminology for each voice part (bassu, contra, boghe, mesu boghe)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "su tenore de Bitti",
                "гурт горлового співу з Бітті"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Cantu a Tenore Throat Singing — B2"
      },
      {
        "id": "launeddas-instrument",
        "title": "Sas Launeddas — B1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Launeddas — потрійна очеретяна флейта з технікою кругового дихання, що дозволяє безперервну гру без пауз, один із найдавніших безперервно вживаних музичних інструментів Європи.",
            "en": {
              "text": "The launeddas is a triple reed pipe played with circular breathing, allowing continuous play without pauses, one of the oldest continuously used musical instruments in Europe."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "sonare sas launeddas",
                "грати на лаунеддас"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Launeddas — B1"
      },
      {
        "id": "pastoral-vocabulary",
        "title": "Sa Pastoritzia — B1",
        "emoji": "🐑",
        "sections": [
          {
            "type": "intro",
            "text": "Вівчарство історично було основою сардинської сільської економіки, тож мова має надзвичайно розвинену й точну лексику для овець, сирів і загонів, недоступну для перекладу одним словом.",
            "en": {
              "text": "Shepherding was historically the backbone of the Sardinian rural economy, so the language has an unusually rich and precise vocabulary for sheep, cheeses, and pens, often untranslatable in a single word."
            }
          },
          {
            "type": "table",
            "title": "Пастуша лексика",
            "rows": [
              [
                "пастух",
                "pastore"
              ],
              [
                "кошара",
                "cuile"
              ],
              [
                "овеча отара",
                "cussorza"
              ]
            ],
            "en": {
              "title": "Pastoral Vocabulary"
            }
          }
        ],
        "titleEn": "Pastoral Vocabulary — B1"
      },
      {
        "id": "unesco-endangered-status",
        "title": "Perìgulu de Sparèssida — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "ЮНЕСКО класифікує сардинську як 'вразливу' мову: попри 1-1.5 млн потенційних носіїв, більшість молоді переходить на італійську, і міжпоколінна передача мови стрімко слабшає.",
            "en": {
              "text": "UNESCO classifies Sardinian as 'vulnerable': despite 1-1.5 million potential speakers, most young people are shifting to Italian, and intergenerational transmission is weakening rapidly."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "sos giovanos fueddant prus italianu",
                "молодь дедалі частіше говорить італійською"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "UNESCO Endangered Status — B2"
      },
      {
        "id": "judicates-medieval-history",
        "title": "Sos Giudicados — B2",
        "emoji": "👑",
        "sections": [
          {
            "type": "intro",
            "text": "У Середньовіччі Сардинія була поділена на чотири незалежні Судькатства (Giudicados) — унікальну форму держави, більше ніде не засвідчену, з власним юридичним кодексом, написаним сардинською.",
            "en": {
              "text": "In the Middle Ages, Sardinia was divided into four independent Judicates (Giudicados) — a unique state form attested nowhere else, with their own legal code written in Sardinian."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "sa Carta de Logu (кодекс законів)",
                "the Carta de Logu legal code"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Medieval Judicates — B2"
      },
      {
        "id": "spanish-catalan-loanword-layer",
        "title": "Prèstidos Ispagnolos — B1",
        "emoji": "🇪🇸",
        "sections": [
          {
            "type": "intro",
            "text": "Століття арагонського й іспанського панування (XIV-XVIII ст.) залишили в сардинській значний шар іспанських та каталанських запозичень, особливо в адміністративній і кулінарній лексиці.",
            "en": {
              "text": "Centuries of Aragonese and Spanish rule (14th-18th c.) left Sardinian a significant layer of Spanish and Catalan loanwords, especially in administrative and culinary vocabulary."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "cracaxu (з ісп. cárcel)",
                "в'язниця"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Spanish and Catalan Loanword Layer — B1"
      },
      {
        "id": "colors",
        "title": "Colores — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "червоний",
                "ruju"
              ],
              [
                "чорний",
                "nieddu"
              ],
              [
                "білий",
                "biancu"
              ],
              [
                "зелений",
                "birde"
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
        "title": "Nùmeros: Deghe — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "Десятки",
            "rows": [
              [
                "20",
                "binti"
              ],
              [
                "30",
                "trinta"
              ],
              [
                "100",
                "chentu"
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
        "title": "Sas Dies de sa Chida — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "понеділок",
                "lunis"
              ],
              [
                "п'ятниця",
                "chenàbura"
              ],
              [
                "неділя",
                "dominiga"
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
        "title": "Famìlia — A2",
        "emoji": "👪",
        "sections": [
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "батько",
                "babbu"
              ],
              [
                "мати",
                "mama"
              ],
              [
                "брат",
                "frade"
              ],
              [
                "сестра",
                "sorre"
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
        "id": "food-vocabulary",
        "title": "Su Manigare — A2",
        "emoji": "🍞",
        "sections": [
          {
            "type": "intro",
            "text": "Pane carasau (хрустке хлібне листя, 'музичний хліб') і culurgiones (равіолі з картоплею й м'ятою) — дві страви, невід'ємні від сардинської кулінарної ідентичності.",
            "en": {
              "text": "Pane carasau (crisp flatbread, 'music paper bread') and culurgiones (potato-and-mint-filled ravioli) are two dishes central to Sardinian culinary identity."
            }
          },
          {
            "type": "table",
            "title": "Їжа",
            "rows": [
              [
                "хліб",
                "pane"
              ],
              [
                "сир",
                "casu"
              ],
              [
                "хрусткий хліб",
                "pane carasau"
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
        "id": "greetings",
        "title": "Sos Saludos — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Вітання",
            "rows": [
              [
                "Привіт",
                "Ajò / Salude"
              ],
              [
                "Дякую",
                "Gràtzias"
              ],
              [
                "До побачення",
                "A si biere"
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
        "title": "Su Tempus — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "sole"
              ],
              [
                "дощ",
                "proa"
              ],
              [
                "вітер",
                "bentu"
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
        "title": "Su Corpus — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "conca"
              ],
              [
                "рука",
                "manu"
              ],
              [
                "око",
                "ogru"
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
        "id": "animals-vocabulary",
        "title": "Sos Animales — A2",
        "emoji": "🐑",
        "sections": [
          {
            "type": "table",
            "title": "Тварини",
            "rows": [
              [
                "вівця",
                "berbeghe"
              ],
              [
                "кінь",
                "cabaddu"
              ],
              [
                "орел",
                "abile"
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
        "id": "clothing-vocabulary",
        "title": "Su Bestimentu Traditzionale — B1",
        "emoji": "👗",
        "sections": [
          {
            "type": "intro",
            "text": "Кожне сардинське село історично мало власний, візуально впізнаваний традиційний костюм (su costùmene), що досі вдягають на свята й процесії.",
            "en": {
              "text": "Each Sardinian village historically had its own visually distinct traditional costume (su costùmene), still worn for festivals and processions today."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "su costùmene de Sant'Efis",
                "костюм на свято Сант'Ефізіо"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Traditional Costume Vocabulary — B1"
      },
      {
        "id": "sant-efisio-festival",
        "title": "Sa Festa de Sant'Efis — B1",
        "emoji": "🎉",
        "sections": [
          {
            "type": "intro",
            "text": "Свято Сант'Ефізіо в Кальярі — одне з найбільших релігійних процесій Італії, коли тисячі учасників у традиційних костюмах з усіх регіонів острова йдуть за статуєю святого сардинською.",
            "en": {
              "text": "The Feast of Sant'Efisio in Cagliari is one of Italy's largest religious processions, when thousands of participants in traditional costume from across the island follow the saint's statue speaking Sardinian."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "sa prucessione de Sant'Efis",
                "процесія Сант'Ефізіо"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Feast of Sant'Efisio — B1"
      },
      {
        "id": "cardinal-directions",
        "title": "Sas Diretziones — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "table",
            "title": "Сторони світу",
            "rows": [
              [
                "північ",
                "nord"
              ],
              [
                "південь",
                "sud"
              ],
              [
                "схід",
                "levante"
              ],
              [
                "захід",
                "ponente"
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
        "id": "sardinian-diaspora",
        "title": "Sa Diàspora Sarda — B2",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Значна сардиномовна діаспора живе в континентальній Італії, Європі та Америці — багато міграційних хвиль XX ст. пов'язані з занепадом шахт і сільського господарства острова.",
            "en": {
              "text": "A significant Sardinian-speaking diaspora lives in mainland Italy, Europe, and the Americas — many 20th-century migration waves linked to the decline of the island's mines and agriculture."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "sos sardos in continente",
                "сардинці на континенті"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Sardinian Diaspora — B2"
      },
      {
        "id": "coordinating-conjunctions-extra",
        "title": "Àteras Cungiuntziones — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Сполучник ca ('тому що') і частка però ('однак') розширюють базовий набір e/o/ma, додаючи причинові й протиставні зв'язки.",
            "en": {
              "text": "The conjunction ca ('because') and the particle però ('however') extend the basic e/o/ma set, adding causal and contrastive links."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Abarro in domo ca proet.",
                "Я залишаюся вдома, бо йде дощ."
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
        "id": "irregular-verb-essere",
        "title": "Verbu Irregulare: Essere — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово essere ('бути') має повністю супплетивні форми в різних часах, не пов'язані спільним коренем, — типова риса для дієслова 'бути' в багатьох мовах світу.",
            "en": {
              "text": "The verb essere ('to be') has fully suppletive forms across different tenses, not sharing a common root — a typical trait for the verb 'to be' across many world languages."
            }
          },
          {
            "type": "table",
            "title": "Супплетивні форми",
            "rows": [
              [
                "so (я є) vs. fia (я був)",
                "am vs. was (suppletive roots)"
              ]
            ],
            "en": {
              "title": "Suppletive Forms"
            }
          }
        ],
        "titleEn": "Irregular Verb: essere ('to be') — B1"
      },
      {
        "id": "irregular-plural-omu",
        "title": "Plurale Irregulare: Òmine → Òmines — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частотних іменників, що закінчуються на -ne, утворюють множину не простим додаванням -s, а вставним голосним перед закінченням, порушуючи звичайну модель.",
            "en": {
              "text": "A handful of frequent nouns ending in -ne form the plural not with a simple -s but with an inserted vowel before the ending, departing from the regular pattern."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна множина",
            "rows": [
              [
                "s'òmine → sos òmines",
                "чоловік → чоловіки (вставний голосний)"
              ]
            ],
            "en": {
              "title": "Irregular Plural"
            }
          }
        ],
        "titleEn": "Irregular Plural: òmine → òmines — B2"
      },
      {
        "id": "irregular-comparative-bonu",
        "title": "Cumparativu Irregulare: Bonu → Menzus — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник bonu ('добрий') має супплетивний порівняльний ступінь menzus ('кращий') замість очікуваного *prus bonu, як у більшості інших мов.",
            "en": {
              "text": "The adjective bonu ('good') has a suppletive comparative menzus ('better') instead of the expected *prus bonu, as in most other languages."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярний порівняльний ступінь",
            "rows": [
              [
                "bonu → menzus (не *prus bonu)",
                "good → better (suppletive)"
              ]
            ],
            "en": {
              "title": "Irregular Comparative"
            }
          }
        ],
        "titleEn": "Irregular Comparative: bonu → menzus — B1"
      }
    ]
  }
];
