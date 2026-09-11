// Vymova — data/grammar-data/grammar_ln.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_LN: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Bankombo ya Moto — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Лінгала — торгова мова басейну річки Конго, що стала відомою по всій Африці завдяки конголезькій музиці румба.",
            "en": {
              "text": "Lingala is a trade language of the Congo River basin that became famous across Africa through Congolese rumba music."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ngai"
              ],
              [
                "ти",
                "yo"
              ],
              [
                "він / вона / воно",
                "ye"
              ],
              [
                "ми",
                "biso"
              ],
              [
                "ви",
                "bino"
              ],
              [
                "вони",
                "bango"
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
        "id": "klas-ya-nkombo",
        "title": "Bakelasi ya Nkombo — A1",
        "emoji": "🗂️",
        "sections": [
          {
            "type": "intro",
            "text": "Як і всі мови банту, лінгала розподіляє іменники за класами — кожен клас має власний префікс однини й окремий префікс множини; цей префікс визначає узгодження в усьому реченні.",
            "en": {
              "text": "Like all Bantu languages, Lingala sorts nouns into classes — each class has its own singular prefix and a separate plural prefix; this prefix drives agreement throughout the sentence."
            }
          },
          {
            "type": "table",
            "title": "Приклади класів",
            "rows": [
              [
                "moto (людина) → bato (люди)",
                "клас mo-/ba- для людей"
              ],
              [
                "ndako (дім) → bandako (доми)",
                "клас n-/ban- для предметів"
              ],
              [
                "eloko (річ) → biloko (речі)",
                "клас e-/bi- для речей"
              ]
            ],
            "en": {
              "title": "Class Examples"
            }
          }
        ],
        "titleEn": "Noun Classes — A1"
      },
      {
        "id": "tonaliti",
        "title": "Motángo: Lingala Elobamaka na Ton — A1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Лінгала — тональна мова: високий і низький тон розрізняють значення однаково записаних слів і навіть беруть участь у творенні часових форм дієслова.",
            "en": {
              "text": "Lingala is a tonal language: high and low tone distinguish the meaning of otherwise identically spelled words, and tone even participates in forming verb tenses."
            }
          },
          {
            "type": "table",
            "title": "Тон розрізняє значення",
            "rows": [
              [
                "libálá (шлюб, високий тон) vs libala (заміжня жінка)",
                "той самий запис, різний тон"
              ]
            ],
            "en": {
              "title": "Tone Distinguishes Meaning"
            }
          }
        ],
        "titleEn": "Tone: Lingala Is Spoken with Pitch — A1"
      },
      {
        "id": "prestamos-franseses-i-kikongo",
        "title": "Maloba ya Farásé na Kikongo — A2",
        "emoji": "🇫🇷",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від суахілі, яка запозичила базову лексику з арабської, лінгала бере запозичення переважно з французької (колоніальна адміністрація) і кіконго (субстрат мов Конго).",
            "en": {
              "text": "Unlike Swahili, which borrowed core vocabulary from Arabic, Lingala takes loanwords mainly from French (colonial administration) and Kikongo (a Congo-basin substrate language)."
            }
          },
          {
            "type": "table",
            "title": "Приклади запозичень",
            "rows": [
              [
                "mótuka (машина) — з фр. moto/auto",
                "французьке запозичення"
              ],
              [
                "kelasi (клас/школа) — з фр. classe",
                "французьке запозичення"
              ]
            ],
            "en": {
              "title": "Loanword Examples"
            }
          }
        ],
        "titleEn": "French and Kikongo Loanwords — A2"
      },
      {
        "id": "negasion-i-preguntas",
        "title": "Boboyi na Mituna — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється циркумфіксом té/na... — дієслово обрамляється часткою заперечення; питання без питального слова передаються здебільшого висхідною інтонацією.",
            "en": {
              "text": "Negation is formed with a circumfix-like negation marker around the verb; yes/no questions are mostly marked by rising intonation alone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nakoki té.",
                "Я не можу."
              ],
              [
                "Okei na mboka?",
                "Ти йдеш у село?"
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
        "id": "present-general",
        "title": "Ntángo Ya Sika (Général) — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Загальний теперішній час утворюється префіксом підмета плюс основа дієслова з закінченням -i, часто описуючи дію, яка вже сталася або триває зараз.",
            "en": {
              "text": "The general present is formed with a subject prefix plus the verb stem ending in -i, often describing an action that has already happened or is ongoing now."
            }
          },
          {
            "type": "table",
            "title": "koloba (говорити) у теперішньому часі",
            "rows": [
              [
                "nalobi / olobi / alobi",
                "я говорю / ти говориш / він говорить"
              ],
              [
                "tolobi / bolobi / balobi",
                "ми говоримо / ви говорите / вони говорять"
              ]
            ],
            "en": {
              "title": "koloba (to speak) in the present"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nalobi na yo.",
                "Я говорю з тобою."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "General Present — A1"
      },
      {
        "id": "present-progressive",
        "title": "Ntángo Ya Sika Ezali Kosalema — A1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в момент мовлення передається допоміжним дієсловом zala плюс інфінітив на ko- — точна паралель до прогресивних конструкцій інших мов банту.",
            "en": {
              "text": "An action in progress at the moment of speaking is expressed with the auxiliary zala plus the ko- infinitive — a direct parallel to progressive constructions in other Bantu languages."
            }
          },
          {
            "type": "table",
            "title": "nazali koloba",
            "rows": [
              [
                "nazali koloba",
                "я саме говорю"
              ],
              [
                "azali kosala",
                "він саме працює"
              ]
            ],
            "en": {
              "title": "nazali koloba"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nazali kotánga mokanda.",
                "Я саме читаю книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Progressive — A1"
      },
      {
        "id": "habitual-present",
        "title": "Momesano ya Ntángo Ya Sika — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звичну дію позначає суфікс -aka, доданий до основи дієслова — вказує на регулярно повторювану дію, а не одноразовий факт.",
            "en": {
              "text": "A habitual action is marked with the suffix -aka added to the verb stem — it signals a regularly repeated action rather than a one-time fact."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nalobaka lokota mibale.",
                "Я зазвичай говорю двома мовами."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Habitual Present — A2"
      },
      {
        "id": "simple-past",
        "title": "Ntángo Eleká — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час утворюється суфіксом -aki, доданим до основи дієслова після префікса підмета — базова форма для завершеної дії в минулому.",
            "en": {
              "text": "The past tense is formed with the suffix -aki added to the verb stem after the subject prefix — the basic form for a completed past action."
            }
          },
          {
            "type": "table",
            "title": "koloba у минулому часі",
            "rows": [
              [
                "nalobaki / olobaki / alobaki",
                "я сказав / ти сказав / він сказав"
              ]
            ],
            "en": {
              "title": "koloba in the past"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nalobaki na ye lobi.",
                "Я говорив з ним учора."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Simple Past — A1"
      },
      {
        "id": "past-progressive",
        "title": "Ntángo Eleká Ezalaki Kosalema — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в минулому передається допоміжним zala в минулому часі плюс інфінітив на ko-.",
            "en": {
              "text": "An ongoing past action is expressed with the auxiliary zala in the past plus the ko- infinitive."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nazalaki koloba na ye ntango okotaki.",
                "Я саме говорив з ним, коли ти зайшов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Progressive — A2"
      },
      {
        "id": "habitual-past-reduplication",
        "title": "Momesano ya Kala: Kobéngama — B1",
        "emoji": "🔂",
        "sections": [
          {
            "type": "intro",
            "text": "Звичну дію в минулому часто підкреслюють подвоєнням (редуплікацією) основи дієслова разом з допоміжним zalaki — типова стратегія банту для позначення повторюваності без окремого граматичного часу.",
            "en": {
              "text": "A habitual past action is often emphasized by reduplicating (doubling) the verb stem together with the auxiliary zalaki — a typical Bantu strategy for marking repetition without a dedicated grammatical tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Azalaki kosala-sala mikolo nyonso.",
                "Він постійно щось робив кожного дня."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Habitual Past via Reduplication — B1"
      },
      {
        "id": "future-near",
        "title": "Ntángo Ekoya Pene — A2",
        "emoji": "🔜",
        "sections": [
          {
            "type": "intro",
            "text": "Найближче майбутнє утворюється майбутнім префіксом -ko-, вставленим між префіксом підмета й основою дієслова.",
            "en": {
              "text": "The near future is formed with the future prefix -ko- inserted between the subject prefix and the verb stem."
            }
          },
          {
            "type": "table",
            "title": "koloba у майбутньому часі",
            "rows": [
              [
                "nakoloba / okoloba / akoloba",
                "я говоритиму / ти говоритимеш / він говоритиме"
              ]
            ],
            "en": {
              "title": "koloba in the future"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nakoloba na yo lobi.",
                "Я поговорю з тобою завтра."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Near Future — A2"
      },
      {
        "id": "future-remote-periphrastic",
        "title": "Ntángo Ekoya Mosika — B1",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Віддаленіше майбутнє передають перифразою koya (прийти) плюс інфінітив на ko-, часто з часовим уточненням, що вказує на віддаленість у часі.",
            "en": {
              "text": "A more distant future is expressed with the periphrasis koya (to come) plus the ko- infinitive, often with a time expression clarifying the distance."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tokoya kosala yango na mobu ekoya.",
                "Ми зробимо це наступного року."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Remote Future (Periphrastic) — B1"
      },
      {
        "id": "conditional-soki",
        "title": "Soki-Oyo (Kondisiyonel) — B1",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Умовні речення вводяться часткою soki ('якщо'); головне речення зазвичай стоїть у минулому часі, коли йдеться про гіпотетичну, нереальну умову.",
            "en": {
              "text": "Conditional sentences are introduced with the particle soki ('if'); the main clause is usually in the past tense when the condition is hypothetical and unreal."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Soki nazalaki na mbongo, nakosombaki motuka.",
                "Якби я мав гроші, я б купив машину."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional with soki — B1"
      },
      {
        "id": "subjunctive-optative",
        "title": "Motindo ya Mposa (Sibjonktif) — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Умовно-бажальний спосіб позначає побажання чи непряму спонуку до третьої особи — утворюється просто закінченням -a на основі дієслова без часового суфікса.",
            "en": {
              "text": "The subjunctive/optative marks a wish or indirect command directed at a third person — formed simply with the ending -a on the verb stem, with no tense suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aloba na biso.",
                "Хай він скаже нам."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Subjunctive / Optative — B1"
      },
      {
        "id": "imperativ-lingala",
        "title": "Motindo ya Etinda — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб однини — гола основа дієслова без префікса підмета; множина/ввічливість додає префікс bo-.",
            "en": {
              "text": "The singular imperative is the bare verb stem with no subject prefix; the plural/polite form adds the prefix bo-."
            }
          },
          {
            "type": "table",
            "title": "koloba у наказовому способі",
            "rows": [
              [
                "Loba!",
                "Говори! (однина)"
              ],
              [
                "Boloba!",
                "Говоріть! (множина)"
              ]
            ],
            "en": {
              "title": "koloba in the imperative"
            }
          }
        ],
        "titleEn": "Imperative — A2"
      },
      {
        "id": "perfect-anterior-periphrastic",
        "title": "Ntángo Esilá (Antérieur) — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Завершену дію з наголосом на її остаточності передають допоміжним dieслівом sila (закінчувати) плюс інфінітив на ko-.",
            "en": {
              "text": "A completed action with emphasis on its finality is expressed with the auxiliary sila (to finish) plus the ko- infinitive."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nasili kokoma mokanda.",
                "Я вже закінчив писати листа."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfect / Anterior (Periphrastic) — B1"
      },
      {
        "id": "infinitiv-ko",
        "title": "Inifinitifi na ko- — A1",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив утворюється префіксом ko-, який поводиться майже як префікс окремого іменного класу — інфінітивна форма сама може виступати підметом речення.",
            "en": {
              "text": "The infinitive is formed with the prefix ko-, which behaves almost like the prefix of its own noun class — the infinitive form can itself serve as the subject of a sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Koloba na lokota mosusu ezali malamu.",
                "Говорити іншою мовою — це добре."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Infinitive with ko- — A1"
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
        "id": "demonstrativ-oyo-wana",
        "title": "Oyo na Wana (Demonstratif) — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні слова oyo ('цей, біля мене') і wana ('той, далі') узгоджуються з класом іменника через відповідний префікс, замінюючи його початкову частину.",
            "en": {
              "text": "The demonstratives oyo ('this, near me') and wana ('that, further away') agree with the noun's class through a matching prefix that replaces its initial part."
            }
          },
          {
            "type": "table",
            "title": "Приклади узгодження",
            "rows": [
              [
                "moto oyo (ця людина)",
                "клас mo- узгоджено"
              ],
              [
                "bato wana (ті люди)",
                "клас ba- узгоджено"
              ]
            ],
            "en": {
              "title": "Agreement Examples"
            }
          }
        ],
        "titleEn": "Demonstratives: oyo, wana — A1"
      },
      {
        "id": "concord-general",
        "title": "Boyokani ya Bakelasi (Concord) — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Клас іменника-підмета визначає префікс на дієслові, прикметнику, вказівному слові й займеннику — одна узгоджувальна система пронизує все речення.",
            "en": {
              "text": "The class of the subject noun determines the prefix on the verb, adjective, demonstrative, and pronoun — one agreement system runs through the entire sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bato bazali malamu.",
                "Люди добрі (клас ba- на підметі й дієслові)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Noun-Class Concord — A2"
      },
      {
        "id": "concordance-adjective",
        "title": "Boyokani ya Adjectifi — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник стоїть після іменника й отримує префікс того самого класу, що й іменник, котрий він описує.",
            "en": {
              "text": "An adjective follows the noun and takes the prefix of the same class as the noun it describes."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ndako moke (маленький дім)",
                "префікс узгоджений з класом ndako"
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
        "id": "na-multifunksioun",
        "title": "Na: Mosala Mingi — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Частка na одночасно виражає сполучник 'і/з', знаряддя дії, присвійність та багато прийменникових значень — одне слово, безліч функцій, що розрізняються лише контекстом.",
            "en": {
              "text": "The particle na simultaneously expresses the conjunction 'and/with', an instrument, possession, and many prepositional meanings — one word, many functions, distinguished only by context."
            }
          },
          {
            "type": "table",
            "title": "Функції na",
            "rows": [
              [
                "ngai na yo (я і ти)",
                "сполучник"
              ],
              [
                "kosala na mbeli (робити ножем)",
                "знаряддя"
              ],
              [
                "ndako na ngai (мій дім)",
                "присвійність"
              ]
            ],
            "en": {
              "title": "Functions of na"
            }
          }
        ],
        "titleEn": "Na: Many Functions — B1"
      },
      {
        "id": "locative-formation-na",
        "title": "Bisika na Na — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Місце дії виражається тим самим багатофункціональним na плюс іменник, без окремого відмінка чи спеціального прийменника місця.",
            "en": {
              "text": "Location is expressed with the same multifunctional na plus a noun, with no separate case or dedicated locative preposition."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nazali na Kinshasa.",
                "Я в Кіншасі."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Location with na — A2"
      },
      {
        "id": "comparison-koleka",
        "title": "Bokokani na Koleka — B1",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння вищого ступеня утворюється не суфіксом, а дієсловом koleka ('перевершувати, обганяти') — прикметник лишається незмінним, а порівняння виражає сама дієслівна конструкція.",
            "en": {
              "text": "Comparison of superiority is not formed with a suffix but with the verb koleka ('to surpass') — the adjective stays unchanged, and the comparison is expressed by the verbal construction itself."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ye azali molai koleka ngai.",
                "Він вищий за мене (буквально: 'він високий, перевершуючи мене')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparison with koleka — B1"
      },
      {
        "id": "superlativ-mingi",
        "title": "Superlatif na Mingi — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь додає слово mingi ('дуже') до конструкції koleka, підсилюючи порівняння до значення абсолютної переваги.",
            "en": {
              "text": "The superlative adds the word mingi ('very much') to the koleka construction, intensifying the comparison to mean absolute superiority."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Azali malamu koleka bango nyonso.",
                "Він найкращий з усіх них."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative with mingi — B1"
      },
      {
        "id": "cardinal-1-5-vs-6plus",
        "title": "Motángo 1-5 na 6+ — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числівники 1-5 узгоджуються з класом іменника через префікс, як прикметники, тоді як числа від 6 і далі не змінюються і часто запозичені з французької в повсякденній мові.",
            "en": {
              "text": "Numbers 1-5 agree with the noun's class through a prefix, like adjectives, while numbers from 6 onward are invariant and often borrowed from French in everyday speech."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "bato mibale (дві людини, клас-префікс на числівнику)",
                "узгоджене число"
              ],
              [
                "bato sisi (шість людей, запозичено з фр. six)",
                "незмінне число"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Numbers 1-5 vs. 6+ — A2"
      },
      {
        "id": "ordinal-numbers",
        "title": "Motángo ya Molongo — B1",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються сполучником ya плюс кількісний числівник, що стоїть після іменника.",
            "en": {
              "text": "Ordinal numbers are formed with the connector ya plus the cardinal number, placed after the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mokolo ya yambo",
                "перший день"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ordinal Numbers — B1"
      },
      {
        "id": "object-infix-pronoun",
        "title": "Pronoun ya Complément Na Kati ya Verbe — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Займенник прямого додатка не стоїть окремим словом, а вставляється інфіксом усередину дієслова, між префіксом майбутнього/минулого часу й основою дієслова.",
            "en": {
              "text": "The direct object pronoun isn't a separate word but is infixed inside the verb, between the tense prefix and the verb stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nakomoni. (na-ko-mo-oni)",
                "Я побачу його."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Object Pronoun as a Verb Infix — B1"
      },
      {
        "id": "possessive-construction-na",
        "title": "Bozwi na Na — A1",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність виражається тим самим зв'язуючим na плюс займенник чи іменник-власник, а не окремим присвійним прикметником.",
            "en": {
              "text": "Possession is expressed with the same linking na plus a pronoun or possessor noun, not a dedicated possessive adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mokanda na ngai",
                "моя книга"
              ],
              [
                "ndako na tata",
                "дім батька"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possession with na — A1"
      },
      {
        "id": "relative-clause-oyo",
        "title": "Phrase Relative na Oyo — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Відносне підрядне речення вводиться тим самим словом oyo, що й вказівний займенник, — без окремого відмінюваного відносного займенника.",
            "en": {
              "text": "A relative clause is introduced with the same word oyo used for the demonstrative — there's no separate declined relative pronoun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Moto oyo azali koloba azali moteki.",
                "Людина, що говорить, є продавцем."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clauses with oyo — B1"
      },
      {
        "id": "question-words",
        "title": "Maloba ya Motuna — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова nani (хто), nini (що), boni (скільки), wapi (де) зазвичай лишаються на тому самому місці в реченні, де б стояло слово, яке вони заміняють — без винесення на початок.",
            "en": {
              "text": "Question words nani (who), nini (what), boni (how many), wapi (where) normally stay in the same position in the sentence where the replaced word would stand — with no fronting."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Okei wapi?",
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
        "id": "reduplication-iterative",
        "title": "Kobengama Mpo na Kozongela — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Подвоєння основи дієслова позначає повторювану чи інтенсивну дію — граматична стратегія, якої немає в індоєвропейських мовах у такому продуктивному вигляді.",
            "en": {
              "text": "Doubling the verb stem marks a repeated or intensive action — a grammatical strategy absent from Indo-European languages in such a productive form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kotambola-tambola",
                "постійно тинятися, походжати"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reduplication for Repetition — B1"
      },
      {
        "id": "reduplication-diminutive",
        "title": "Kobengama Mpo na Bomoke — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Та сама редуплікація, застосована до прикметника чи іменника, може натомість пом'якшувати значення — позначати зменшеність чи невизначену приблизність, а не повторюваність.",
            "en": {
              "text": "The same reduplication, applied to an adjective or noun, can instead soften the meaning — marking smallness or vague approximation rather than repetition."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "moke-moke",
                "трохи-трохи, потрошку"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reduplication for Diminution — B1"
      },
      {
        "id": "locative-class-prefixes",
        "title": "Bakelasi ya Bisika — B2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі іменникові класи спеціалізовані саме для позначення місця чи простору, і їхні префікси автоматично надають іменнику локативного відтінку незалежно від основного значення слова.",
            "en": {
              "text": "Some noun classes are specialized for marking place or space, and their prefixes automatically give a noun a locative flavor regardless of its core meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "esika (місце)",
                "іменник власного локативного класу"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Locative Noun Classes — B2"
      },
      {
        "id": "plural-across-classes",
        "title": "Bowuti ya Plural na Bakelasi Nyonso — A2",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Кожен іменниковий клас має власну пару префіксів однина/множина, тому правило множини не універсальне, а повністю залежить від класу, до якого належить іменник.",
            "en": {
              "text": "Every noun class has its own singular/plural prefix pair, so the plural rule isn't universal but depends entirely on the class the noun belongs to."
            }
          },
          {
            "type": "table",
            "title": "Приклади пар",
            "rows": [
              [
                "etúmba → bitúmba (клас e-/bi-)",
                "війна → війни"
              ],
              [
                "lopango → mpango (клас lo-/n-)",
                "огорожа → огорожі"
              ]
            ],
            "en": {
              "title": "Pair Examples"
            }
          }
        ],
        "titleEn": "Plural Across Noun Classes — A2"
      },
      {
        "id": "adjectives-invariant-borrowed",
        "title": "Adjectifi Bapesami, Bazangi Boyokani — B2",
        "emoji": "🇫🇷",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники, запозичені з французької, часто не отримують класового префікса і лишаються незмінними незалежно від класу описуваного іменника — винятковий острівець поза узгоджувальною системою.",
            "en": {
              "text": "Adjectives borrowed from French often don't take a class prefix and stay invariant regardless of the class of the noun described — an exceptional island outside the agreement system."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "motuka rouge (червона машина, без узгодження)",
                "запозичений прикметник, незмінний"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Invariant Borrowed Adjectives — B2"
      },
      {
        "id": "noun-compounding",
        "title": "Kosangisa Maloba — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Складні іменники утворюються поєднанням двох основ, часто через зв'язку ya ('з'), причому клас усього слова визначає перший компонент.",
            "en": {
              "text": "Compound nouns are formed by joining two stems, often through the linker ya ('of'), with the class of the whole word determined by the first component."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mwana ya mboka",
                "місцевий мешканець (буквально 'дитина села')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Noun Compounding — B1"
      },
      {
        "id": "infinitive-as-noun",
        "title": "Inifinitifi Lokola Nkombo — B1",
        "emoji": "📘",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс інфінітива ko- поводиться як повноцінний іменниковий клас: сам інфінітив може бути підметом речення й керувати узгодженням дієслова-зв'язки.",
            "en": {
              "text": "The infinitive prefix ko- behaves like a fully-fledged noun class: the infinitive itself can be the subject of a sentence and governs agreement on the copula verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kolala ekoki.",
                "Спати достатньо (буквально 'спання достатнє')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Infinitive as a Noun — B1"
      },
      {
        "id": "serial-verb-kende",
        "title": "Verbe na Verbe: Kende Kosala — B1",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Два дієслова поспіль без сполучника виражають послідовні чи взаємопов'язані дії — перше дієслово рухається, друге називає мету руху.",
            "en": {
              "text": "Two verbs in a row with no conjunction express sequential or interconnected actions — the first verb is motion, the second names the purpose of the motion."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Akei kosomba.",
                "Він пішов купувати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Serial Verbs: kende + Verb — B1"
      },
      {
        "id": "word-order-svo",
        "title": "Molongo ya Maloba: SVO — A1",
        "emoji": "↔️",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-присудок-додаток, але тема речення може бути винесена на перше місце для наголосу, як і в багатьох мовах банту.",
            "en": {
              "text": "The basic word order is subject-verb-object, but the sentence's topic can be fronted for emphasis, as in many Bantu languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ngai, nazali koloba.",
                "Я — я саме говорю (тема винесена наперед)."
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
        "id": "exclamation-particles",
        "title": "Maloba ya Bondimi: Eh, Boye — B1",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Дискурсивні частки eh і boye структурують розмову, підтверджуючи почуте чи підсумовуючи думку, без власного лексичного значення поза контекстом діалогу.",
            "en": {
              "text": "Discourse particles eh and boye structure conversation, confirming what was heard or summing up a thought, with no lexical meaning of their own outside dialogue."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Boye, tokeyi.",
                "Отже, ми йдемо."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Discourse Particles: eh, boye — B1"
      },
      {
        "id": "augmentative-class-shift",
        "title": "Bonene na Kobongwana ya Kelasi — B2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Перенесення іменника в інший клас може додати значення більшого розміру чи грубуватості — граматичний рід тут виконує те, що в інших мовах робить окремий суфікс.",
            "en": {
              "text": "Shifting a noun into a different class can add the meaning of greater size or coarseness — noun class here does what a dedicated suffix does in other languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "liboke (клас li-/ma-, замість mo-/ba-, надає грубуватий відтінок)",
                "здоровань, бугай"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Augmentative via Class Shift — B2"
      },
      {
        "id": "diminutive-class-shift",
        "title": "Bomoke na Kobongwana ya Kelasi — B2",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Перенесення в клас mwana- ('дитина') навпаки надає значення зменшеності чи молодості предмета, незалежно від його вихідного класу.",
            "en": {
              "text": "Shifting into the mwana- ('child') class instead adds a meaning of smallness or youth, regardless of the item's original class."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mwana-ndako (маленький будиночок)",
                "клас mwana- надає зменшувальне значення"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive via Class Shift — B2"
      },
      {
        "id": "verb-extension-applicative",
        "title": "Extension: -el-/-il- (Applicatif) — B2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Аплікативне розширення -el-/-il-, вставлене перед кінцевим голосним дієслова, додає нового учасника дії — того, для кого чи заради кого щось робиться, без окремого прийменника.",
            "en": {
              "text": "The applicative extension -el-/-il-, inserted before the final vowel of the verb, adds a new participant to the action — the person for or on behalf of whom something is done, with no separate preposition."
            }
          },
          {
            "type": "table",
            "title": "koloba → kolobela",
            "rows": [
              [
                "koloba (говорити) → kolobela (говорити для когось)",
                "аплікативне розширення додає бенефіціара"
              ]
            ],
            "en": {
              "title": "koloba → kolobela"
            }
          }
        ],
        "titleEn": "Extension: -el-/-il- (Applicative) — B2"
      },
      {
        "id": "verb-extension-causative",
        "title": "Extension: -is-/-nis- (Kosativi) — B2",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативне розширення -is-/-nis- перетворює дієслово на 'змушувати робити' — граматично вбудовує причиновість у сам дієслівний корінь, без допоміжного дієслова.",
            "en": {
              "text": "The causative extension -is-/-nis- turns a verb into 'to make someone do' — grammatically builds causation right into the verb root, with no auxiliary verb."
            }
          },
          {
            "type": "table",
            "title": "kolala → kolalisa",
            "rows": [
              [
                "kolala (спати) → kolalisa (присипляти когось)",
                "каузативне розширення"
              ]
            ],
            "en": {
              "title": "kolala → kolalisa"
            }
          }
        ],
        "titleEn": "Extension: -is-/-nis- (Causative) — B2"
      },
      {
        "id": "verb-extension-reciprocal",
        "title": "Extension: -an- (Réciproque) — B2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Реципрокальне розширення -an- позначає взаємну дію, коли учасники роблять щось один одному — без окремого займенника 'один одного'.",
            "en": {
              "text": "The reciprocal extension -an- marks a mutual action, when participants do something to each other — with no separate 'each other' pronoun."
            }
          },
          {
            "type": "table",
            "title": "kolinga → kolingana",
            "rows": [
              [
                "kolinga (любити) → kolingana (любити одне одного)",
                "реципрокальне розширення"
              ]
            ],
            "en": {
              "title": "kolinga → kolingana"
            }
          }
        ],
        "titleEn": "Extension: -an- (Reciprocal) — B2"
      },
      {
        "id": "verb-extension-passive",
        "title": "Extension: -am-/-em- (Passif) — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивне розширення -am-/-em- перетворює дієслово на пасивний стан без допоміжного дієслова 'бути' — сам дієслівний корінь несе граматичний стан.",
            "en": {
              "text": "The passive extension -am-/-em- turns a verb passive with no auxiliary 'to be' — the verb root itself carries the grammatical voice."
            }
          },
          {
            "type": "table",
            "title": "kosala → kosalema",
            "rows": [
              [
                "kosala (робити) → kosalema (бути зробленим)",
                "пасивне розширення"
              ]
            ],
            "en": {
              "title": "kosala → kosalema"
            }
          }
        ],
        "titleEn": "Extension: -am-/-em- (Passive) — B2"
      },
      {
        "id": "verb-extension-stacking-order",
        "title": "Bosangisi ya Extension — B2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька розширень можуть додаватися до одного кореня в чіткому фіксованому порядку — каузатив ближче до кореня, пасив завжди останнім перед кінцевим голосним.",
            "en": {
              "text": "Several extensions can be added to the same root in a strict fixed order — causative closer to the root, passive always last before the final vowel."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kosalisama (робити + каузатив + пасив: 'бути змушеним щось зробити')",
                "три морфеми в фіксованому порядку"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Extension Stacking Order — B2"
      },
      {
        "id": "absence-of-grammatical-gender",
        "title": "Kozanga Genre: Ye — A2",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Займенник третьої особи однини ye не розрізняє ані статі, ані навіть одухотвореності — те саме слово означає 'він', 'вона' і навіть інколи 'воно', на відміну від індоєвропейських мов.",
            "en": {
              "text": "The third-person-singular pronoun ye distinguishes neither sex nor even animacy — the same word means 'he', 'she', and even sometimes 'it', unlike Indo-European languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ye azali malamu.",
                "Він/вона добрий(а) — стать невідома з речення."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "No Grammatical Gender: ye — A2"
      },
      {
        "id": "bino-respectful-plural-address",
        "title": "Bino Mpo na Limemya — B1",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Ввічливе звертання до однієї поважної особи передається займенником множини bino замість однини yo — та сама стратегія множини-як-поваги, що й у багатьох європейських мовах, але цілком незалежно виникла.",
            "en": {
              "text": "Respectful address to one esteemed person is expressed with the plural pronoun bino instead of the singular yo — the same plural-as-respect strategy found in many European languages, but arising fully independently."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bino bozali malamu?",
                "Як ви поживаєте? (до однієї поважної особи)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Bino for Respectful Address — B1"
      },
      {
        "id": "dialect-variation-kinshasa-brazzaville",
        "title": "Kinshasa na Brazzaville: Mikakatano — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Лінгала Кіншаси (ДР Конго) і Лінгала Браззавіля (Республіка Конго) розходяться в лексиці, вимові й обсязі французьких запозичень — одна мова, розділена державним кордоном посеред річки Конго.",
            "en": {
              "text": "Kinshasa Lingala (DR Congo) and Brazzaville Lingala (Republic of Congo) diverge in vocabulary, pronunciation, and the amount of French borrowing — one language split by a national border running down the middle of the Congo River."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bangó (Кіншаса) vs bangó (Браззавіль, іший наголос)",
                "той самий займенник, різна вимова"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Kinshasa vs. Brazzaville Lingala — B2"
      },
      {
        "id": "lingala-litteraire-vs-lingala-ya-bina",
        "title": "Lingala Litteraire na Lingala ya Bina — B2",
        "emoji": "⛪",
        "sections": [
          {
            "type": "intro",
            "text": "Стандартизована місіонерами 'літературна' лінгала церков і підручників помітно відрізняється від живої вуличної лінгали пісень румба — різні регістри тієї самої мови з різними правилами й лексикою.",
            "en": {
              "text": "The missionary-standardized 'literary' Lingala of churches and textbooks differs noticeably from the living street Lingala of rumba songs — different registers of the same language with different rules and vocabulary."
            }
          },
          {
            "type": "table",
            "title": "Два регістри",
            "rows": [
              [
                "Lingala littéraire (церква, школа)",
                "консервативніша граматика"
              ],
              [
                "Lingala ya bina/ya zando (вулиця, музика, ринок)",
                "динамічніша, з французькими вкрапленнями"
              ]
            ],
            "en": {
              "title": "Two Registers"
            }
          }
        ],
        "titleEn": "Literary vs. Street Lingala — B2"
      },
      {
        "id": "code-switching-lingala-french-urban",
        "title": "Kosangisa Lingala na Farásé — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "У міській розмові типове перемикання кодів усередині одного речення — граматичний каркас лінгала, а частини лексики чи цілі фрази вставляються з французької без адаптації.",
            "en": {
              "text": "Urban conversation typically code-switches within a single sentence — the grammatical frame is Lingala, while chunks of vocabulary or whole phrases are inserted from French without adaptation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nazali na rendez-vous lelo.",
                "У мене сьогодні зустріч (French rendez-vous вставлене напряму)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Lingala-French Code-Switching — B2"
      },
      {
        "id": "mpe-multifunksioun",
        "title": "Mpe: Ebandeli Mingi — B1",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Частка mpe означає і 'також', і 'і', і слугує зв'язкою послідовних подій у розповіді — багатофункціональна, як і na, але для іншого набору значень.",
            "en": {
              "text": "The particle mpe means both 'also' and 'and', and serves to link sequential events in narration — multifunctional like na, but for a different set of meanings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Alyaki mpe amelaki.",
                "Він поїв і випив (послідовність подій)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Mpe: Many Functions — B1"
      },
      {
        "id": "kende-plus-verb-serial",
        "title": "Kende + Verbe: Molongo ya Misala — B2",
        "emoji": "🚶",
        "sections": [
          {
            "type": "intro",
            "text": "Ланцюжок дієслів kende (йти) плюс дієслово мети граматикалізувався в стійку конструкцію призначення руху, вживану значно частіше, ніж окреме підрядне речення мети.",
            "en": {
              "text": "The verb chain kende (to go) plus a purpose verb has grammaticalized into a fixed motion-purpose construction, used far more often than a separate purpose clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kende kobenga ye.",
                "Іди поклич його."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Kende + Verb: Purpose-Motion Chain — B2"
      },
      {
        "id": "linga-double-sense",
        "title": "Kolinga: Mposa na Bolingo — A2",
        "emoji": "❤️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово kolinga означає і 'хотіти', і 'любити' водночас — типове для мов банту семантичне поєднання, яке розрізняється лише за прямим додатком і контекстом.",
            "en": {
              "text": "The verb kolinga means both 'to want' and 'to love' at once — a semantic merger typical of Bantu languages, distinguished only by the direct object and context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nalingi yo.",
                "Я люблю тебе."
              ],
              [
                "Nalingi kolya.",
                "Я хочу їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Kolinga: Want and Love — A2"
      },
      {
        "id": "tone-distinguishing-tense-pairs",
        "title": "Ton na Bokeseni ya Ntángo — B2",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "У кількох парах часів та й же сегментний запис розрізняється лише тоном — одна й та сама послідовність приголосних і голосних, різна мелодика, різний граматичний час.",
            "en": {
              "text": "In several tense pairs the same segmental spelling is distinguished only by tone — the same sequence of consonants and vowels, different pitch, different grammatical tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "nakoma (я пишу, високий тон) vs nakoma (я писатиму, тоновий контраст)",
                "той самий запис, тон розрізняє час"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tone Distinguishing Tense Pairs — B2"
      },
      {
        "id": "object-pronoun-doubling-emphasis",
        "title": "Bokabwani ya Pronom Mpo na Bozindo — B2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Для наголосу інфіксований займенник прямого додатка можна повторити окремим повнозначним займенником у кінці речення — подвійне маркування того самого учасника.",
            "en": {
              "text": "For emphasis, the infixed direct-object pronoun can be repeated with a separate full pronoun at the end of the clause — double marking of the same participant."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Namoni ye.",
                "Я побачив саме його (подвійне маркування для наголосу)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Object Pronoun Doubling for Emphasis — B2"
      },
      {
        "id": "class-1a-proper-nouns",
        "title": "Kelasi 1a: Nkombo ya Bato Bazangi Préfix — B2",
        "emoji": "👤",
        "sections": [
          {
            "type": "intro",
            "text": "Власні імена людей і слова спорідненості належать до спеціального класу 1a, що не має видимого префікса в однині, хоча узгодження дієслова все одно поводиться так, ніби префікс присутній.",
            "en": {
              "text": "Proper names of people and kinship terms belong to a special class 1a with no visible prefix in the singular, though verb agreement still behaves as if the prefix were there."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tata azali na ndako.",
                "Батько вдома (немає видимого префікса на tata, але дієслово узгоджене за класом 1)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Class 1a: Proper Nouns with No Visible Prefix — B2"
      },
      {
        "id": "locative-inversion",
        "title": "Bobalusi ya Bisika (Inversion Locative) — B2",
        "emoji": "🔃",
        "sections": [
          {
            "type": "intro",
            "text": "Місцевий вираз може стати граматичним підметом речення, а логічний підмет перейти в кінець — знаменита синтаксична риса мов банту, що дозволяє реченню фокусуватися на місці, а не на дійовій особі.",
            "en": {
              "text": "A locative expression can become the grammatical subject of the sentence, with the logical subject moving to the end — a famous Bantu syntactic feature that lets a sentence focus on the place rather than the actor."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Na ndako ezali bato mingi.",
                "У домі є багато людей (буквально 'в-домі є люди-багато', na ndako як підмет)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Locative Inversion — B2"
      },
      {
        "id": "augmentative-pejorative-semantic-shift",
        "title": "Bonene na Elikya Mabe — B2",
        "emoji": "😒",
        "sections": [
          {
            "type": "intro",
            "text": "Той самий зсув класу, що надає значення збільшення, часто несе й пейоративний відтінок — надмірний розмір асоціюється з незграбністю чи грубістю, а не лише з фізичним об'ємом.",
            "en": {
              "text": "The same class shift that adds a meaning of enlargement often also carries a pejorative shade — excessive size is associated with clumsiness or coarseness, not just physical volume."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "liboke (незграбний здоровань, не просто 'велика людина')",
                "пейоративний відтінок класового зсуву"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Augmentative with Pejorative Shift — B2"
      },
      {
        "id": "numeral-borrowing-large-numbers",
        "title": "Motángo Minene Uta na Farásé — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Десятки, сотні й тисячі в повсякденній розмові часто вимовляються французькою навіть носіями, які інакше говорять чистою лінгала, — французька система рахунку витіснила рідну для великих чисел.",
            "en": {
              "text": "Tens, hundreds, and thousands are often said in French in everyday speech even by speakers who otherwise speak pure Lingala — the French counting system has displaced the native one for large numbers."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "cinquante mille (50 000, вимовляється французькою)",
                "французька лексика числа замість лінгала"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Large Numbers Borrowed from French — B1"
      },
      {
        "id": "discourse-particles-eza-wana",
        "title": "Maloba ya Lisolo: Eza, Wana — B2",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Дискурсивні частки eza ('ось') і wana ('от так, отже') організують оповідь, позначаючи перехід між епізодами розповіді, а не описуючи предмет чи дію.",
            "en": {
              "text": "The discourse particles eza ('here it is') and wana ('so, that's how it is') organize narration, marking a transition between episodes of the story rather than describing an object or action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Wana, biso tokeyi.",
                "От так, ми пішли (перехід у розповіді)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Narrative Discourse Particles — B2"
      },
      {
        "id": "plural-of-loanwords-invariant",
        "title": "Plural ya Maloba ya Bapaya — B1",
        "emoji": "🈚",
        "sections": [
          {
            "type": "intro",
            "text": "Свіжі запозичення з французької часто зберігають ту саму форму в множині, не отримуючи класового префікса банту, — сигнал того, що слово ще не повністю засвоєне морфологічно.",
            "en": {
              "text": "Fresh loanwords from French often keep the same form in the plural, without taking a Bantu class prefix — a sign that the word isn't yet fully morphologically integrated."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kelasi ya bango (їхні класи, без множинного префікса на kelasi)",
                "запозичення без класової множини"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Loanword Plurals Stay Invariant — B1"
      },
      {
        "id": "verb-negation-preverbal-postverbal",
        "title": "Boboyi: Na Liboso na Nsima ya Verbe — B2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Крім кінцевого té після дієслова, у деяких формах заперечення додається ще й перед дієслівним коренем — подвійне маркування заперечення в самій дієслівній морфології, глибше за просте td, розглянуте в основах.",
            "en": {
              "text": "Besides the final té after the verb, some forms add negation marking before the verb root as well — a double negation marking built into the verb morphology itself, deeper than the simple té covered in basics."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Akei té.",
                "Він не пішов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation: Pre- and Post-Verbal Marking — B2"
      },
      {
        "id": "relative-clause-resumptive-pronoun",
        "title": "Phrase Relative na Pronom ya Kozongisa — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "У складніших відносних реченнях, коли ідентифікований предмет виконує роль додатка, підрядне речення часто повторює його займенником-інфіксом усередині дієслова — резумптивна стратегія замість пропуску.",
            "en": {
              "text": "In more complex relative clauses, when the identified item is the object, the subordinate clause often repeats it with an infixed pronoun inside the verb — a resumptive strategy instead of a gap."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mokanda oyo nazwaki yango.",
                "Книга, яку я отримав (yango — резумптивний займенник)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clauses with a Resumptive Pronoun — B2"
      },
      {
        "id": "pro-drop-subject-prefix",
        "title": "Kobwaka Pronom: Préfix Eyebisi Yango — B1",
        "emoji": "🫥",
        "sections": [
          {
            "type": "intro",
            "text": "Самостійний займенник підмета часто опускається зовсім, бо префікс класу на дієслові вже повністю передає, хто виконує дію, — окреме слово-підмет стає надлишковим, крім випадків наголосу.",
            "en": {
              "text": "The standalone subject pronoun is often dropped entirely, because the class prefix on the verb already fully conveys who is performing the action — a separate subject word becomes redundant except for emphasis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nakei sikawa. (без 'ngai')",
                "Я йду вже (займенник ngai не потрібен)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pro-Drop: The Prefix Already Says It — B1"
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
        "id": "irregular-verbs-koya-kokende",
        "title": "Baverbe Bazangi Molongo: Koya, Kokende — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "koya (приходити) і kokende (йти) — два найчастіше вживані дієслова руху — мають форми часу, що не підкоряються звичайним правилам суфіксації -aki/-aka, і їх слід запам'ятовувати окремо.",
            "en": {
              "text": "koya (to come) and kokende (to go) — the two most frequently used motion verbs — have tense forms that don't follow the regular -aki/-aka suffixation rules and must be memorized separately."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні форми",
            "rows": [
              [
                "akei (він пішов, не 'akendaki')",
                "суплетивна форма минулого часу kokende"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs: koya, kokende — B1"
      },
      {
        "id": "class-1a-exceptions",
        "title": "Makambo Bazangi Molongo na Kelasi 1a — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька неживих іменників несподівано потрапляють до класу 1a, зазвичай зарезервованого для людей, і тому отримують узгодження дієслова, наче йдеться про особу, а не про предмет.",
            "en": {
              "text": "A few inanimate nouns unexpectedly fall into class 1a, normally reserved for people, and therefore trigger verb agreement as if they were a person rather than a thing."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "sanza (місяць, клас 1a попри неживу природу)",
                "узгодження, наче з особою"
              ]
            ]
          }
        ],
        "titleEn": "Class 1a Exceptions — B2"
      },
      {
        "id": "fixed-idiomatic-expressions-rumba",
        "title": "Maloba ya Ndenge Mosusu Uta na Rumba — B2",
        "emoji": "🎶",
        "sections": [
          {
            "type": "intro",
            "text": "Пісні румба й сукус популяризували цілі застиглі фрази, що вийшли за межі буквальної граматики й тепер уживаються як самостійні ідіоми — впізнавані з тексту пісні, незалежно від їхньої дослівної побудови.",
            "en": {
              "text": "Rumba and soukous songs popularized whole fixed phrases that moved beyond literal grammar and are now used as standalone idioms — recognizable from song lyrics, independent of their literal construction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mabele ekotikala.",
                "Земля залишиться (ідіоматично: 'пам'ять живе далі' — застигла фраза з пісенної традиції)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Idiomatic Expressions from Rumba — B2"
      }
    ]
  }
];
