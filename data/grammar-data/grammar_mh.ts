// Vymova — data/grammar-data/grammar_mh.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_MH: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Naan ko Armij — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Маршальська — мова атолового архіпелагу Тихого океану, чиї навігатори традиційно використовували плетені карти хвиль для орієнтування в морі.",
            "en": {
              "text": "Marshallese is the language of a Pacific atoll archipelago whose navigators traditionally used woven stick charts to find their way at sea."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ña"
              ],
              [
                "ти",
                "kwe"
              ],
              [
                "він / вона / воно",
                "e"
              ],
              [
                "ми (без вас)",
                "kōm"
              ],
              [
                "ми (з вами)",
                "kōj"
              ],
              [
                "ви",
                "koṃ"
              ],
              [
                "вони",
                "er"
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
        "id": "vertikal-vowel-sistema",
        "title": "Vowel eo ej Jutak — B1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Маршальська має рідкісну 'вертикальну' систему голосних: лише кілька фонем голосних, розрізнених за висотою язика, тоді як передньо-задня якість голосного визначається сусідніми приголосними, а не окремою фонемою.",
            "en": {
              "text": "Marshallese has a rare 'vertical' vowel system: only a few vowel phonemes distinguished by tongue height, while front-back vowel quality is determined by the surrounding consonants rather than being its own phoneme."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Один і той самий голосний звучить по-різному залежно від сусідніх приголосних.",
                "вертикальна система голосних, рідкісна серед мов світу"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Vertical Vowel System — B1"
      },
      {
        "id": "kotam-i-metowa",
        "title": "Kōtam im Metowa — A1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Напрямок часто позначають не абстрактним 'ліворуч/праворуч', а орієнтирами атола: iar ('у бік лагуни') і lik ('у бік відкритого океану') — навігаційна система, вкорінена в географії атолів.",
            "en": {
              "text": "Direction is often marked not with abstract 'left/right' but with atoll landmarks: iar ('lagoon-ward') and lik ('ocean-ward') — a navigational system rooted in atoll geography."
            }
          },
          {
            "type": "table",
            "title": "Приклади напрямку",
            "rows": [
              [
                "iar (у бік лагуни)",
                "lik (у бік відкритого океану)"
              ]
            ],
            "en": {
              "title": "Direction Examples"
            }
          }
        ],
        "titleEn": "Lagoon-ward and Ocean-ward Directionals — A1"
      },
      {
        "id": "prestamos-anglais",
        "title": "Naan ko jān Injlij — A2",
        "emoji": "🇺🇸",
        "sections": [
          {
            "type": "intro",
            "text": "Тісні зв'язки з США за Угодою про вільну асоціацію та десятиліття американської адміністрації залишили в маршальській численні англійські запозичення в сучасній побутовій і технічній лексиці.",
            "en": {
              "text": "Close ties with the US under the Compact of Free Association, and decades of American administration, left Marshallese with numerous English loanwords in modern everyday and technical vocabulary."
            }
          },
          {
            "type": "table",
            "title": "Приклади запозичень",
            "rows": [
              [
                "kar (машина) — з англ. car",
                "англійське запозичення"
              ],
              [
                "kọñpiuta (комп'ютер) — з англ. computer",
                "англійське запозичення"
              ]
            ],
            "en": {
              "title": "Loanword Examples"
            }
          }
        ],
        "titleEn": "English Loanwords — A2"
      },
      {
        "id": "negasion-i-preguntas",
        "title": "Kaarmejjete im Kajjitōk — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою jab перед дієсловом; питання без питального слова часто передаються лише висхідною інтонацією.",
            "en": {
              "text": "Negation is formed with the particle jab before the verb; yes/no questions are often marked with rising intonation alone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ij jab meḷeḷe.",
                "Я не розумію."
              ],
              [
                "Kwōj ilān eo?",
                "Ти йдеш туди?"
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
        "id": "present-continuous-ej",
        "title": "Ej: Ien Kiiō — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішня тривала дія позначається часткою ej, що зливається з підметом в одне слово перед дієсловом.",
            "en": {
              "text": "The present continuous is marked with the particle ej, which fuses with the subject into one word before the verb."
            }
          },
          {
            "type": "table",
            "title": "Приклад із ej",
            "rows": [
              [
                "Ij kōnono. (ña + ej → ij)",
                "Я саме говорю."
              ]
            ],
            "en": {
              "title": "Example with ej"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kwōj mour ilo aelōñ in.",
                "Ти живеш на цьому атолі."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ej: Present Continuous — A1"
      },
      {
        "id": "past-tense-ar",
        "title": "Ar: Ien Eo Mootḷọk — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час позначається часткою ar, яка так само зливається з підметом в одне слово перед дієсловом.",
            "en": {
              "text": "The past tense is marked with the particle ar, which also fuses with the subject into one word before the verb."
            }
          },
          {
            "type": "table",
            "title": "Приклад з ar",
            "rows": [
              [
                "Iar kōnono. (ña + ar → iar)",
                "Я говорив."
              ]
            ],
            "en": {
              "title": "Example with ar"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ear itok inne.",
                "Він прийшов учора."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ar: Simple Past — A2"
      },
      {
        "id": "remote-past-kar",
        "title": "Kar: Ien Ettoḷọk — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Частка kar позначає віддаленіший, завершений минулий час — подію, що сталася давніше й уже не пов'язана з теперішнім станом справ.",
            "en": {
              "text": "The particle kar marks a more remote, completed past — an event that happened further back and is no longer connected to the present state of affairs."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kar bar juon aelōñ ijin.",
                "Тут колись давно був інший острів."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Kar: Remote Past — B1"
      },
      {
        "id": "future-tense-naaj",
        "title": "Naaj: Ien Enaaj Itok — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час позначається часткою naaj, що зливається з підметом в одне слово, — та сама модель, що й для ej і ar.",
            "en": {
              "text": "The future tense is marked with the particle naaj, which fuses with the subject into one word — the same pattern as for ej and ar."
            }
          },
          {
            "type": "table",
            "title": "Приклад з naaj",
            "rows": [
              [
                "Inaaj kōnono. (ña + naaj → inaaj)",
                "Я говоритиму."
              ]
            ],
            "en": {
              "title": "Example with naaj"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Enaaj wōt ilju.",
                "Завтра піде дощ."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Naaj: Future Tense — A2"
      },
      {
        "id": "habitual-aspect-reduplication",
        "title": "Fanindroan-naan: Iien Otemjej — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звичну, регулярно повторювану дію позначає подвоєння частини дієслівного кореня — граматична стратегія без окремого допоміжного слова.",
            "en": {
              "text": "A habitual, regularly repeated action is marked by reduplicating part of the verb root — a grammatical strategy with no separate helper word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ej eọñōd-eọñōd. (подвоєння кореня 'ловити рибу')",
                "Він постійно рибалить."
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
        "id": "imperative-mood",
        "title": "Kaiñ: Naan in Jiroñ — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказ передається голим дієсловом без жодної частки підмета чи часу, — найпростіша форма дієслова в мові.",
            "en": {
              "text": "A command is expressed with the bare verb, with no subject or tense particle at all — the simplest verb form in the language."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Itok!",
                "Іди сюди!"
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
        "id": "potential-mood-maron",
        "title": "Maroñ: Kōkajoor — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість передається дієсловом maroñ ('могти'), поставленим перед головним дієсловом, без зміни його форми.",
            "en": {
              "text": "Ability or possibility is expressed with the verb maroñ ('to be able to'), placed before the main verb, with no change to its form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ij maroñ kōnono Kajin M̧ajeḷ.",
                "Я вмію говорити маршальською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Maroñ: Potential/Ability — B1"
      },
      {
        "id": "desiderative-konaan",
        "title": "Kōṇaan: Ankil — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажання виражається дієсловом kōṇaan ('хотіти'), поставленим перед головним дієсловом, — буквально 'хотіти зробити щось'.",
            "en": {
              "text": "A wish is expressed with the verb kōṇaan ('to want'), placed before the main verb — literally 'to want to do something'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ij kōṇaan ṃōñā.",
                "Я хочу їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Kōṇaan: Desiderative — A2"
      },
      {
        "id": "necessity-aikuj",
        "title": "Aikuj: Aikuj in Kōṃṃane — B1",
        "emoji": "☑️",
        "sections": [
          {
            "type": "intro",
            "text": "Обов'язковість передається дієсловом aikuj ('потребувати, мусити'), поставленим перед головним дієсловом.",
            "en": {
              "text": "Necessity is expressed with the verb aikuj ('to need, must'), placed before the main verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ij aikuj jerbal.",
                "Мені треба працювати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Aikuj: Necessity — B1"
      },
      {
        "id": "completive-aspect-dedeeo",
        "title": "Dedeeo: Ej Dedeeo — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Завершеність дії з наголосом на її остаточності передається словом dedeeo ('уже готово'), доданим до дієслівної фрази.",
            "en": {
              "text": "The completeness of an action, with emphasis on finality, is expressed with the word dedeeo ('already done'), added to the verb phrase."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ej dedeeo aō jerbal.",
                "Моя робота вже закінчена."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Dedeeo: Completive Aspect — B1"
      },
      {
        "id": "prohibitive-jab",
        "title": "Jab ilo Kaiñ: Bōbrae — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Та сама частка jab, поставлена перед голим наказовим дієсловом, утворює заборону — 'не роби цього'.",
            "en": {
              "text": "The same particle jab, placed before the bare imperative verb, forms a prohibition — 'don't do this'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Jab kōnono!",
                "Не говори!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Jab in the Imperative: Prohibitive — A2"
      },
      {
        "id": "conditional-elane",
        "title": "Eḷaññe: Kōnke Emaroñ Waḷọk — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться сполучником eḷaññe ('якщо'), за яким слідує дієслівна фраза з відповідним часовим маркером у головному реченні.",
            "en": {
              "text": "A conditional sentence is introduced with the conjunction eḷaññe ('if'), followed by a verb phrase with the appropriate tense marker in the main clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Eḷaññe ewōt, inaaj pād mweo.",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Eḷaññe: Conditional — B1"
      },
      {
        "id": "causative-kon",
        "title": "Kōṃṃan: Kōttōpar — B2",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Каузацію ('змушувати щось статися') передають дієсловом kōṃṃan ('робити'), поставленим перед підрядним реченням з bwe ('щоб').",
            "en": {
              "text": "Causation ('to make something happen') is expressed with the verb kōṃṃan ('to make'), placed before a clause introduced with bwe ('so that')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ear kōṃṃan bwe en itok.",
                "Він зробив так, щоб той прийшов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Kōṃṃan bwe: Causative — B2"
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
        "id": "possessive-classifiers-general",
        "title": "Naan in Bōk: Aō, Aṃ, An — A2",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Загальна присвійність позначається окремими класифікаторними словами aō ('мій'), aṃ ('твій'), an ('його/її'), що стоять перед іменником, — базовий, найзагальніший тип володіння.",
            "en": {
              "text": "General possession is marked with dedicated classifier words aō ('my'), aṃ ('your'), an ('his/her'), placed before the noun — the basic, most general kind of ownership."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "bok eo aō",
                "моя книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "General Possessive Classifiers — A2"
      },
      {
        "id": "possessive-classifier-edible",
        "title": "Naan in Bōk ñan Ṃōñā: Kijō — B1",
        "emoji": "🍽️",
        "sections": [
          {
            "type": "intro",
            "text": "Коли предмет володіння їстівний, замість загального класифікатора вживають окремий — kijō ('моя їжа'), а не aō, — типова океанійська присвійна класифікація за типом предмета.",
            "en": {
              "text": "When the possessed item is edible, a separate classifier is used instead of the general one — kijō ('my food') rather than aō — a typical Oceanic possessive classification by the type of item."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kijō ṃōñā",
                "моя їжа (їстівний класифікатор)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Edible Possessive Classifier — B1"
      },
      {
        "id": "possessive-classifier-drinkable",
        "title": "Naan in Bōk ñan Idaak: Limō — B1",
        "emoji": "🥤",
        "sections": [
          {
            "type": "intro",
            "text": "Для питних предметів вживається ще один окремий класифікатор — limō ('моє питво') — третя категорія володіння поряд із загальною й їстівною.",
            "en": {
              "text": "For drinkable items yet another dedicated classifier is used — limō ('my drink') — a third possession category alongside the general and edible ones."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "limō dān",
                "моя питна вода (питний класифікатор)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Drinkable Possessive Classifier — B1"
      },
      {
        "id": "numeral-classifiers",
        "title": "Naan in Bwini: Karōk Otemjej — B2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Лічба предметів вимагає класифікатора, що узгоджується з категорією предмета — окремий класифікатор для довгастих предметів, окремий для плоских, окремий для людей.",
            "en": {
              "text": "Counting objects requires a classifier agreeing with the item's category — a separate classifier for elongated objects, another for flat ones, another for people."
            }
          },
          {
            "type": "table",
            "title": "Приклади класифікаторів",
            "rows": [
              [
                "ruo armej (дві людини, класифікатор для людей)",
                "лічба людей"
              ],
              [
                "ruo wōjke (два дерева, класифікатор для рослин)",
                "лічба дерев"
              ]
            ],
            "en": {
              "title": "Classifier Examples"
            }
          }
        ],
        "titleEn": "Numeral Classifiers — B2"
      },
      {
        "id": "demonstrative-three-way",
        "title": "Naan in Kajjitōk Jikin: In, Eo, Uweo — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні слова мають три ступені віддаленості: in ('цей, поряд зі мною'), eo ('той, поряд з тобою'), uweo ('он той, далеко від обох').",
            "en": {
              "text": "Demonstratives have three degrees of distance: in ('this, near me'), eo ('that, near you'), uweo ('that over there, far from both')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "bok in",
                "ця книга (поряд зі мною)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Demonstratives: in, eo, uweo — A2"
      },
      {
        "id": "no-artikolo-europeenne",
        "title": "Ejjeḷọk Naan in Kōkajoor Āinwōt Injlij — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "У маршальській немає означеного чи неозначеного артикля в європейському сенсі — означеність передає вказівний займенник чи контекст.",
            "en": {
              "text": "Marshallese has no definite or indefinite article in the European sense — definiteness is conveyed by a demonstrative or by context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ij lo bok.",
                "Я бачу (якусь) книгу / книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "No European-Style Articles — A1"
      },
      {
        "id": "reduplication-plurality",
        "title": "Fanindroan-naan ñan Elōñ — B1",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Подвоєння частини кореня може підкреслювати множинність чи розсіяність предметів — граматична альтернатива відсутньому суфіксу множини.",
            "en": {
              "text": "Reduplicating part of the root can emphasize the plurality or scatter of items — a grammatical alternative to the missing plural suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ek-ek (риба тут і там, розсипана)",
                "подвоєння підкреслює розсіяну множинність"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reduplication for Plurality — B1"
      },
      {
        "id": "reduplication-diminutive",
        "title": "Fanindroan-naan ñan Dik — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Те саме подвоєння, застосоване до прикметника-дієслова, натомість пом'якшує значення чи позначає меншу інтенсивність, а не множинність.",
            "en": {
              "text": "The same reduplication, applied to a stative verb/adjective, instead softens the meaning or marks lesser intensity, rather than plurality."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kilep-kilep (трохи великуватий, не дуже великий)",
                "пом'якшене значення прикметника"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reduplication for Attenuation — B1"
      },
      {
        "id": "adjectives-as-stative-verbs",
        "title": "Naan in Kōkajoor Āinwōt Kaiñ — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники поводяться як окремий клас стативних дієслів — самі є присудком речення й можуть приймати ту саму часову частку ej.",
            "en": {
              "text": "Adjectives behave as a distinct class of stative verbs — they themselves serve as the predicate and can take the same tense particle ej."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ej kilep mweo.",
                "Дім великий (буквально 'дім є-великий')."
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
        "id": "word-order-svo",
        "title": "Karōkkaj in Naan: SVO — A1",
        "emoji": "↔️",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-присудок-додаток, як і в українській, хоч часові частки зливаються з підметом в одне слово.",
            "en": {
              "text": "The basic word order is subject-verb-object, as in Ukrainian, though the tense particles fuse with the subject into one word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kōrā eo ej wia.",
                "Жінка купує."
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
        "id": "no-grammatical-gender",
        "title": "Ejjeḷọk Kōkeḷaajaḷ — A1",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "У маршальській немає граматичного роду взагалі — займенник третьої особи e охоплює і 'він', і 'вона', і 'воно'.",
            "en": {
              "text": "Marshallese has no grammatical gender at all — the third-person pronoun e covers 'he', 'she', and 'it' alike."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "e (він/вона/воно, той самий займенник для всіх)",
                "займенник без роду"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "No Grammatical Gender — A1"
      },
      {
        "id": "locative-prepositions-ilo-nan",
        "title": "Naan in Jikin: Ilo, Ñan — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменник ilo позначає перебування в місці чи стані, ñan — рух до чогось чи призначення для когось.",
            "en": {
              "text": "The preposition ilo marks being at a place or in a state, ñan marks movement toward something or a purpose for someone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ij pād ilo aelōñ in.",
                "Я на цьому острові."
              ],
              [
                "Ej ilān ñan Mājro.",
                "Він їде до Маджуро."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Locative Prepositions: ilo, ñan — A2"
      },
      {
        "id": "question-words",
        "title": "Naan in Kajjitōk: Ta, Wōn, Ewi — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова ta (що), wōn (хто), ewi (де/який), ñāāt (коли) зазвичай залишаються на місці слова, яке вони заміняють, без винесення на початок речення.",
            "en": {
              "text": "The question words ta (what), wōn (who), ewi (where/which), ñāāt (when) normally stay in the position of the replaced word, with no fronting to the sentence start."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kwōj ilān ñāāt?",
                "Коли ти йдеш?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Question Words: ta, wōn, ewi — A1"
      },
      {
        "id": "relative-clause-eo",
        "title": "Naan in Kōkoṃṃan: Eo, Ro — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Відносне підрядне речення вводиться незмінним словом eo (однина) чи ro (множина), яке заміняє будь-який відмінюваний відносний займенник.",
            "en": {
              "text": "A relative clause is introduced by the invariant word eo (singular) or ro (plural), which replaces any declined relative pronoun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "armej eo ej kōnono",
                "людина, яка говорить"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clauses with eo/ro — B1"
      },
      {
        "id": "comparison-lo-jen",
        "title": "Bōkkajoor: Ḷapḷọk jān — B1",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння вищого ступеня утворюється прикметником-дієсловом плюс jān ('ніж') — без окремого суфікса на прикметнику.",
            "en": {
              "text": "Comparison of superiority is formed with the stative verb/adjective plus jān ('than') — with no dedicated suffix on the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ej ḷapḷọk jān ña.",
                "Він більший за мене."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparison with jān — B1"
      },
      {
        "id": "superlative-tata",
        "title": "Superlativ: Tata — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь додає слово tata ('найбільше') після прикметника-дієслова.",
            "en": {
              "text": "The superlative adds the word tata ('the most') after the stative verb/adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ej ḷap tata.",
                "Він найбільший."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative with tata — B1"
      },
      {
        "id": "kinship-terms-elaborate",
        "title": "Naan in Nukwiiö — B1",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Розлога система термінів спорідненості розрізняє родичів за відносним віком і за тим, з якого боку сім'ї вони походять, — точніше, ніж у більшості європейських мов.",
            "en": {
              "text": "An elaborate kinship-term system distinguishes relatives by relative age and by which side of the family they come from — more precisely than in most European languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "jeiō (старший брат/сестра) vs jatiō (молодший)",
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
        "id": "numerals-cardinal",
        "title": "Bwini: Juon, Ruo, Jilu — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Кількісні числівники мають власні маршальські корені й зазвичай уживаються з класифікатором залежно від категорії лічених предметів.",
            "en": {
              "text": "Cardinal numbers have their own native Marshallese roots and are usually used with a classifier depending on the category of items counted."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "juon, ruo, jilu",
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
        "id": "numerals-ordinal",
        "title": "Bwini in Laajrak: Kein Ka- — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються префіксом kein ka- плюс кількісний числівник.",
            "en": {
              "text": "Ordinal numbers are formed with the prefix kein ka- plus the cardinal number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kein ka jilu",
                "третій"
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
        "id": "compound-word-formation",
        "title": "Kōṃṃan Naan in Kobban — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова поєднують два корені в одне ціле, часто описуючи предмет через його функцію чи спосіб виготовлення.",
            "en": {
              "text": "Compound words join two roots into one unit, often describing an item through its function or method of making."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "wa (човен) + kōrkōr (веслувати) → wa-kōrkōr (весловий човен)",
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
        "id": "emphatic-possession-suffix",
        "title": "Bōk eo Kake: Kajjoor Ḷapḷọk — B2",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Для наголошення власності можна повторити присвійне слово чи додати підсилювальну частку — 'моя і тільки моя' замість простого 'моя'.",
            "en": {
              "text": "To emphasize ownership, the possessive word can be repeated or an intensifying particle added — 'mine and mine alone' instead of a plain 'mine'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aō de in.",
                "Це справді моє (з наголосом)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Emphatic Possession — B2"
      },
      {
        "id": "inclusive-exclusive-deeper",
        "title": "Kōm im Kōj: Meḷeḷein Dikḷọk — B1",
        "emoji": "👥",
        "sections": [
          {
            "type": "intro",
            "text": "Вибір між виключним kōm і включним kōj залежить виключно від того, чи входить слухач до 'ми', — граматично обов'язкове розрізнення, яке не можна оминути жодною нейтральною формою.",
            "en": {
              "text": "The choice between exclusive kōm and inclusive kōj depends solely on whether the listener is part of 'we' — a grammatically mandatory distinction with no neutral form to fall back on."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kōmij ilān, kwe jab. (виключне, без тебе)",
                "Ми йдемо, а ти ні."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Inclusive vs. Exclusive 'We' in Depth — B1"
      },
      {
        "id": "directional-particles-toward-speaker",
        "title": "Naan in Ijo: Tok, Waj — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Дейктичні частки tok ('сюди, до мовця') і waj ('туди, від мовця') додаються до дієслова руху, вказуючи напрямок відносно того, хто говорить.",
            "en": {
              "text": "The deictic particles tok ('hither, toward the speaker') and waj ('thither, away from the speaker') attach to a motion verb, indicating direction relative to the speaker."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Itok!",
                "Приходь сюди!"
              ],
              [
                "Ilọk waj!",
                "Іди туди!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Directional Particles: tok, waj — B1"
      },
      {
        "id": "negative-existential",
        "title": "Ejjeḷọk: Ejjeḷọk Ta — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечне існування виражається незмінним словом ejjeḷọk ('немає, нічого немає'), без потреби в окремій зв'язці.",
            "en": {
              "text": "Negative existence is expressed with the invariant word ejjeḷọk ('there is none, nothing'), with no need for a separate copula."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ejjeḷọk dān.",
                "Немає води."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ejjeḷọk: Negative Existence — A2"
      },
      {
        "id": "word-final-consonant-clusters",
        "title": "Ṃ, Ñ, Ḷ: Konsonan ko Rejjab Waḷọk Ilo Injlij — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Правопис розрізняє велярні й палаталізовані варіанти приголосних (ṃ, ṇ, ḷ проти m, n, l) — фонематичний контраст, якого англійська абетка не могла б передати без діакритичних знаків.",
            "en": {
              "text": "The orthography distinguishes velarized and palatalized consonant variants (ṃ, ṇ, ḷ vs. m, n, l) — a phonemic contrast the English alphabet couldn't represent without diacritics."
            }
          },
          {
            "type": "table",
            "title": "Приклад контрасту",
            "rows": [
              [
                "ṃ (веляризований, задньоязиковий) vs m (звичайний)",
                "різні фонеми, різне значення слова"
              ]
            ],
            "en": {
              "title": "Contrast Example"
            }
          }
        ],
        "titleEn": "Velarized Consonants: ṃ, ṇ, ḷ — B2"
      },
      {
        "id": "possessive-classifier-vehicle",
        "title": "Naan in Bōk ñan Wa: Waō — B1",
        "emoji": "🚗",
        "sections": [
          {
            "type": "intro",
            "text": "Транспортні засоби (човни, машини) отримують ще один спеціальний класифікатор waō ('мій засіб пересування'), четверту категорію володіння поряд із загальною, їстівною й питною.",
            "en": {
              "text": "Vehicles (boats, cars) take yet another dedicated classifier waō ('my means of transport'), a fourth possession category alongside the general, edible, and drinkable ones."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "waō wa",
                "мій човен (класифікатор транспорту)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vehicle Possessive Classifier — B1"
      },
      {
        "id": "atoll-geography-vocabulary-grammar",
        "title": "Naan in Aelōñ: Kōkajoor Jikin — B2",
        "emoji": "🏝️",
        "sections": [
          {
            "type": "intro",
            "text": "Лексика й граматика географічних термінів настільки прив'язані до форми атола, що носії мови, які виросли не на атолах, часто засвоюють ці терміни лише метафорично, не в буквальному просторовому значенні.",
            "en": {
              "text": "Geographic terminology and its grammar are so tied to atoll shape that speakers who didn't grow up on an atoll often learn these terms only metaphorically, not in their literal spatial sense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "iar/lik зберігають буквальне значення лише на самих атолах.",
                "просторова прив'язка до географії атола"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Atoll-Geography Grammar — B2"
      },
      {
        "id": "directional-particles-vertical",
        "title": "Naan in Ijo: Lōñ, Laḷ — B1",
        "emoji": "⬆️",
        "sections": [
          {
            "type": "intro",
            "text": "Крім горизонтальних напрямків iar/lik, є окрема пара вертикальних дейктичних часток lōñ ('вгору') і laḷ ('вниз') — повний набір просторової орієнтації без європейських прийменників на кшталт 'над/під'.",
            "en": {
              "text": "Besides the horizontal iar/lik, there's a separate pair of vertical deictic particles lōñ ('up') and laḷ ('down') — a complete spatial-orientation set without European-style prepositions like 'above/below'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ej pād lōñ.",
                "Воно там нагорі."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vertical Directional Particles: lōñ, laḷ — B1"
      },
      {
        "id": "compass-based-atoll-navigation-lexicon",
        "title": "Meto ko: Naan in Kappeḷaak — B2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Традиційна навігаційна лексика включає слова для хвильових патернів і морських течій, які досвідчені навігатори читали як карту, — сліди цієї системи знань досі живуть у мовних виразах про море.",
            "en": {
              "text": "Traditional navigational vocabulary includes words for wave patterns and sea currents that experienced navigators read like a map — traces of this knowledge system still live on in expressions about the sea."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Специфічні терміни для хвильових закономірностей, які використовували традиційні навігатори.",
                "навігаційна лексика хвиль"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Traditional Navigation Vocabulary — B2"
      },
      {
        "id": "portmanteau-pronoun-tense-fusion",
        "title": "Bōktokoni: Kein Kobo Naan Ko — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Займенник підмета й частка часу зливаються не просто на письмі, а й фонологічно, в одну морфему з унікальною формою для кожної комбінації особи й часу, — справжня портманто-морфологія, а не просте скорочення.",
            "en": {
              "text": "The subject pronoun and tense particle merge not just in spelling but phonologically, into one morpheme with a unique form for each person-tense combination — genuine portmanteau morphology, not simple contraction."
            }
          },
          {
            "type": "table",
            "title": "Приклади злиття",
            "rows": [
              [
                "ña + ej → ij",
                "я (теперішній)"
              ],
              [
                "kwe + ar → kwaar",
                "ти (минулий)"
              ]
            ],
            "en": {
              "title": "Fusion Examples"
            }
          }
        ],
        "titleEn": "Pronoun-Tense Portmanteau Fusion — B2"
      },
      {
        "id": "serial-verb-motion-direction",
        "title": "Kaiñ ko Ilo Laajrak: Kadeḷọñ — B2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова руху часто поєднуються з дейктичною часткою напрямку одразу після себе, утворюючи стійку конструкцію, а не два окремих слова, — рух і напрямок описано в одному функціональному блоці.",
            "en": {
              "text": "Motion verbs often combine with a directional deictic particle right after them, forming a fixed construction rather than two separate words — motion and direction described in a single functional block."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ilọk tok ('прийти сюди', рух + напрямок разом)",
                "стійка конструкція руху й напрямку"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Motion Verb + Directional Particle — B2"
      },
      {
        "id": "passive-like-construction",
        "title": "Kōkajoor Āinwōt Passif — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Немає окремого граматичного пасивного стану, як у європейських мовах, — потрібну увагу до постраждалого предмета передають зміною порядку слів чи безособовою конструкцією без явного виконавця.",
            "en": {
              "text": "There's no dedicated grammatical passive voice as in European languages — the needed focus on the affected item is conveyed by word-order shift or an impersonal construction with no explicit doer."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ejorrāān mweo. (стан речі, без вказівки на винуватця)",
                "Дім пошкоджений."
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
        "id": "compact-of-free-association-vocabulary-layer",
        "title": "Naan in Kien: Jān Ien Tariṇae — B2",
        "emoji": "☢️",
        "sections": [
          {
            "type": "intro",
            "text": "Історія ядерних випробувань США на атолах Бікіні й Еневетак у 1940-1950-х роках залишила в мові окремий шар термінології про переселення, компенсацію й радіацію, якого немає в жодній іншій мові Тихого океану.",
            "en": {
              "text": "The history of US nuclear testing on the Bikini and Enewetak atolls in the 1940s-1950s left the language with a distinct layer of terminology about relocation, compensation, and radiation, found in no other Pacific language."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Специфічна лексика про переселення й компенсацію, вкорінена в історії ядерних випробувань.",
                "історичний шар лексики"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Nuclear-Testing-Era Vocabulary Layer — B2"
      },
      {
        "id": "honorific-chiefly-vocabulary",
        "title": "Naan in Iroij: Fanajan — B2",
        "emoji": "👑",
        "sections": [
          {
            "type": "intro",
            "text": "Окремий шар шанобливої лексики вживається щодо вождів (iroij) традиційної матрилінійної системи влади — власні слова замість буденних відповідників для їжі, дій і предметів вождя.",
            "en": {
              "text": "A separate layer of honorific vocabulary is used regarding chiefs (iroij) of the traditional matrilineal power system — dedicated words instead of everyday equivalents for a chief's food, actions, and belongings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Шаноблива лексика вживається окремо для дій і предметів вождя.",
                "шанобливий регістр"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Chiefly Honorific Vocabulary — B2"
      },
      {
        "id": "matrilineal-kinship-grammar",
        "title": "Bwij: Ainikien jān Jinen — B2",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Приналежність до клану (bwij) успадковується по материнській лінії, і терміни спорідненості граматично відображають саме цю матрилінійну структуру, а не патрилінійну, звичну для більшості європейських мов.",
            "en": {
              "text": "Clan membership (bwij) is inherited through the maternal line, and kinship terms grammatically reflect exactly this matrilineal structure, rather than the patrilineal one familiar from most European languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Приналежність до bwij передається по материнській лінії.",
                "матрилінійна спорідненість"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Matrilineal Kinship Grammar — B2"
      },
      {
        "id": "dialectal-variation-ralik-ratak",
        "title": "Ralik im Ratak: Aelōñ ko Ruo — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Маршальські острови діляться на два ланцюги атолів — Ралік (західний) і Ратак (східний), кожен з власним варіантом вимови й трохи відмінною лексикою.",
            "en": {
              "text": "The Marshall Islands are divided into two atoll chains — Ralik (western) and Ratak (eastern), each with its own pronunciation variant and somewhat different vocabulary."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Вимова й лексика Раліка й Ратака трохи різняться.",
                "два діалектні варіанти"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ralik and Ratak Dialect Variation — B2"
      },
      {
        "id": "code-switching-english-marshallese",
        "title": "Fifangaroan Injlij im Kajin M̧ajeḷ — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "У міському й освіченому мовленні типове перемикання кодів усередині одного речення — граматичний каркас маршальський, а частина лексики чи цілі фрази вставляються з англійської без адаптації.",
            "en": {
              "text": "Urban, educated speech typically code-switches within a single sentence — the grammatical frame is Marshallese, while chunks of vocabulary or whole phrases are inserted from English without adaptation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ij work ilo ofis eo.",
                "Я працюю в офісі (English work вставлене напряму)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "English-Marshallese Code-Switching — B2"
      },
      {
        "id": "double-negative-emphasis",
        "title": "Kōkajoor Jab Jidik — B1",
        "emoji": "❌",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення підсилюється словом jidik ('трохи') у заперечній формі 'jab...jidik' — 'зовсім не, ніскілечки не', сильніше за просте jab.",
            "en": {
              "text": "Negation is intensified with the word jidik ('a little') in the negative frame 'jab...jidik' — 'not at all, not in the slightest', stronger than plain jab."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ij jab meḷeḷe jidik.",
                "Я взагалі нічого не розумію."
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
        "id": "reciprocal-construction",
        "title": "Doon: Ippān Doon — B1",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Взаємна дія позначається словом doon ('одне одного'), доданим після дієслова, — не окремим займенником, а фіксованим словом взаємності.",
            "en": {
              "text": "A mutual action is marked with the word doon ('each other'), added after the verb — not a separate pronoun but a fixed word of reciprocity."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Rej yokwe doon.",
                "Вони люблять одне одного."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reciprocal Construction with doon — B1"
      },
      {
        "id": "emphatic-pronoun-doubling",
        "title": "Bōktokoni ñan Kajjoor: Ña Make — B2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Слово make ('сам, особисто'), додане після займенника, підкреслює, що дію виконав саме цей суб'єкт, а не хтось інший, — граматична стратегія наголосу без інтонаційної зміни.",
            "en": {
              "text": "The word make ('self, personally'), added after a pronoun, emphasizes that this exact subject performed the action, not someone else — a grammatical emphasis strategy with no intonational change."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ña make iar kōṃṃane.",
                "Я особисто це зробив."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Emphatic Pronoun with make — B2"
      },
      {
        "id": "verb-nominalization",
        "title": "Kōṃṃan Naan jān Kaiñ — B2",
        "emoji": "📘",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово можна перетворити на абстрактний іменник, що позначає саму дію, додаванням певних словотворчих часток — продуктивний спосіб творення нових слів.",
            "en": {
              "text": "A verb can be turned into an abstract noun denoting the action itself by adding certain derivational particles — a productive way of forming new words."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "jerbal (працювати) → jerbal (робота, той самий корінь як іменник)",
                "дієслово, що вживається й як іменник"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Verb-to-Noun Conversion — B2"
      },
      {
        "id": "purism-vs-english-borrowing-tension",
        "title": "Ainikien Kōn Naan Ekāāl — B2",
        "emoji": "🧼",
        "sections": [
          {
            "type": "intro",
            "text": "Мовні активісти пропонують власні маршальські неологізми для сучасних понять, тоді як повсякденна розмова часто просто запозичує англійське слово, — постійна напруга між мовним пуризмом і практичною зручністю.",
            "en": {
              "text": "Language activists propose native Marshallese neologisms for modern concepts, while everyday conversation often simply borrows the English word — a constant tension between linguistic purism and practical convenience."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Спроби замінити англійські запозичення власними неологізмами не завжди приживаються в повсякденній мові.",
                "напруга пуризм-запозичення"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Purism vs. English-Borrowing Tension — B2"
      },
      {
        "id": "emphatic-topic-fronting",
        "title": "Kōkajoor Lohaevitra: Ippān Naan Mokta — B2",
        "emoji": "🔝",
        "sections": [
          {
            "type": "intro",
            "text": "Елемент, винесений на початок речення, отримує особливий наголос, залишаючи слід на своєму звичайному місці у вигляді займенника чи паузи.",
            "en": {
              "text": "An element fronted to the start of the sentence receives special emphasis, leaving a trace in its usual position as a pronoun or pause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bok eo, iar loe.",
                "Книгу — я знайшов (саме книгу)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Emphatic Topic Fronting — B2"
      },
      {
        "id": "temporal-clause-nan-ien",
        "title": "Fehezanteny Fotoana: Ke — B1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Сполучник ke ('коли') вводить часове підрядне речення, вказуючи, що дія головного речення відбулася одночасно чи слідом за подією в підрядному.",
            "en": {
              "text": "The conjunction ke ('when') introduces a temporal clause, indicating that the main clause's action happened simultaneously with or following the event in the subordinate clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Iar lo e ke iar pād ilo aelōñ eo.",
                "Я бачив його, коли був на тому острові."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Temporal Clauses with ke — B1"
      },
      {
        "id": "adjective-intensifier-particle",
        "title": "Naan in Kōkajoor: Kanooj — B1",
        "emoji": "💯",
        "sections": [
          {
            "type": "intro",
            "text": "Частка kanooj ('дуже'), поставлена перед прикметником-дієсловом, підсилює його значення без зміни граматичної структури речення.",
            "en": {
              "text": "The particle kanooj ('very'), placed before a stative verb/adjective, intensifies its meaning with no change to the sentence's grammatical structure."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ej kanooj aiboojoj.",
                "Це справді дуже гарно."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Intensifier Particle: kanooj — B1"
      },
      {
        "id": "verb-plus-object-fixed-idioms",
        "title": "Kaiñ im Kobban Fiksiḷọk — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька застиглих словосполучень дієслово-додаток набули ідіоматичного значення, відмінного від буквального перекладу кожного слова окремо.",
            "en": {
              "text": "A few fixed verb-object phrases have taken on an idiomatic meaning different from the literal translation of each word separately."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "bōk jerbal (буквально 'взяти роботу' → братися до справи)",
                "ідіоматичне словосполучення"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Verb-Object Idioms — B2"
      },
      {
        "id": "loanword-morphological-adaptation",
        "title": "Naan in Kaake: Ekāāl — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Запозичені з англійської слова адаптуються до маршальської фонології, вписуючись у вертикальну систему голосних і набір приголосних, а не лишаючись у вихідній англійській вимові.",
            "en": {
              "text": "Words borrowed from English are adapted to Marshallese phonology, fitting into the vertical vowel system and consonant inventory, rather than staying in their original English pronunciation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kāāj (гачок) — з англ. hook, з адаптованою фонологією",
                "фонологічно адаптоване запозичення"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Morphological/Phonological Loanword Adaptation — B1"
      },
      {
        "id": "greeting-formula-yokwe",
        "title": "Yokwe: Naan eo ej Bōktoñ — B1",
        "emoji": "💛",
        "sections": [
          {
            "type": "intro",
            "text": "Слово yokwe виконує одразу кілька функцій — 'привіт', 'бувай' і 'я тебе люблю' водночас, — те саме багатозначне поєднання, що й гавайське aloha, розрізнюване лише контекстом.",
            "en": {
              "text": "The word yokwe performs several functions at once — 'hello', 'goodbye', and 'I love you' all in one — the same kind of multipurpose merger found in Hawaiian aloha, distinguished only by context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Yokwe eok!",
                "Привіт тобі! (або: люблю тебе, залежно від контексту)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Yokwe: The Multipurpose Word — B1"
      },
      {
        "id": "compound-tense-aspect-stacking",
        "title": "Bōktokoni in Ien: Enaaj Kar — B2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Дві часові частки можуть поєднуватися одна за одною для позначення складного часового відношення — 'майбутнє в минулому' чи подібні відтінки, недоступні лише одній частці.",
            "en": {
              "text": "Two tense particles can combine one after the other to mark a complex temporal relationship — 'future in the past' or similar shades unavailable to a single particle alone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Enaaj kar itok, ak ear jab maroñ.",
                "Він мав би був прийти, але не зміг."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Stacked Tense-Particle Combinations — B2"
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
        "title": "Kaiñ ko Rejjab Karōk — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частовживаних дієслів (itok 'приходити', ilọk 'йти') мають форми, що поєднують дейктичну частку з коренем нерегулярним чином.",
            "en": {
              "text": "A few common verbs (itok 'to come', ilọk 'to go') have forms that combine a deictic particle with the root in an irregular way."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "itok (не 'ilọk tok', зрощена нерегулярна форма)",
                "нерегулярне поєднання руху й напрямку"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Common Verbs — B1"
      },
      {
        "id": "irregular-classifier-exceptions",
        "title": "Naan in Bōk ko Rejjab Karōk — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька предметів отримують несподіваний присвійний класифікатор, що не відповідає жодній із чотирьох основних категорій (загальна, їстівна, питна, транспортна), — суто традиційний виняток.",
            "en": {
              "text": "A few items take an unexpected possessive classifier that doesn't match any of the four main categories (general, edible, drinkable, vehicle) — a purely traditional exception."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Певні культурно значущі предмети мають власний, історично закріплений класифікатор.",
                "нерегулярний класифікатор за традицією"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Classifier Exceptions — B2"
      },
      {
        "id": "fixed-idiomatic-expressions-navigation",
        "title": "Naan in Meto Fiksiḷọk — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Застиглі вирази, пов'язані з традиційним мореплавством, зберігають архаїчну лексику й граматичну структуру, вже не вживану деінде в мові, і передаються цілими блоками від навігаторів до учнів.",
            "en": {
              "text": "Fixed expressions tied to traditional seafaring preserve archaic vocabulary and grammatical structure no longer used elsewhere in the language, and are passed down as whole blocks from navigators to students."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Традиційні навігаційні формули передаються дослівно, без граматичного розбору.",
                "застигла навігаційна формула"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Navigational Expressions — B2"
      }
    ]
  }
];
