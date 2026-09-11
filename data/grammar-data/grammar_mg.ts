// Vymova — data/grammar-data/grammar_mg.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_MG: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Mpisolo Anarana — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У малагасійській є два слова для \"ми\": \"izahay\" (без співрозмовника) і \"isika\" (разом із співрозмовником).",
            "en": {
              "text": "Malagasy has two words for \"we\": \"izahay\" (excluding the listener) and \"isika\" (including the listener)."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "izaho (aho)"
              ],
              [
                "ти",
                "ianao"
              ],
              [
                "він / вона / воно",
                "izy"
              ],
              [
                "ми (без вас)",
                "izahay"
              ],
              [
                "ми (з вами)",
                "isika"
              ],
              [
                "ви",
                "ianareo"
              ],
              [
                "вони",
                "izy ireo"
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
        "id": "vos-fandaharana",
        "title": "VOS: Fandaharan-teny — A1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Малагасійська має вкрай рідкісний порядок слів дієслово-додаток-підмет (VOS) — підмет завжди стоїть в самому кінці речення, а не на початку, як у більшості мов світу.",
            "en": {
              "text": "Malagasy has an extremely rare verb-object-subject (VOS) word order — the subject always comes at the very end of the sentence, not at the beginning as in most world languages."
            }
          },
          {
            "type": "table",
            "title": "Приклад VOS",
            "rows": [
              [
                "Mamaky boky ny mpianatra. (читає книгу учень)",
                "дієслово-додаток-підмет, підмет останній"
              ]
            ],
            "en": {
              "title": "VOS Example"
            }
          }
        ],
        "titleEn": "VOS Word Order — A1"
      },
      {
        "id": "fokus-sistema",
        "title": "Rafitra Fokus — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово само визначає, яка роль (діяч, об'єкт чи обставина) стоїть у фокусі й буде граматичним підметом у кінці речення, — та сама фокусна система, що й у філіппінських мовах, але геть незалежно розвинена в малагасійській.",
            "en": {
              "text": "The verb itself determines which role (agent, object, or circumstance) is in focus and becomes the grammatical subject at the end of the sentence — the same kind of focus system found in Philippine languages, but developed completely independently in Malagasy."
            }
          },
          {
            "type": "table",
            "title": "Приклад зсуву фокусу",
            "rows": [
              [
                "Manasa ny lamba ny reny. (мати у фокусі)",
                "Мати миє одяг."
              ],
              [
                "Sasan'ny reny ny lamba. (одяг у фокусі)",
                "Одяг миється матір'ю."
              ]
            ],
            "en": {
              "title": "Focus Shift Example"
            }
          }
        ],
        "titleEn": "The Focus System — B1"
      },
      {
        "id": "prestamos-multiples",
        "title": "Teny Nindramina — A2",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Малагасійська — австронезійська мова, яка опинилася найдалі від своєї батьківщини Борнео, тож увібрала запозичення з банту, арабської (через торгівлю) і французької (колоніальний період) — унікальне поєднання шарів, якого немає в жодній іншій австронезійській мові.",
            "en": {
              "text": "Malagasy is the Austronesian language that traveled farthest from its Bornean homeland, absorbing loanwords from Bantu, Arabic (through trade), and French (the colonial period) — a unique layering found in no other Austronesian language."
            }
          },
          {
            "type": "table",
            "title": "Приклади запозичень",
            "rows": [
              [
                "sokatra (черепаха) — банту коріння",
                "запозичення з мов банту"
              ],
              [
                "alahady (неділя) — з арабської al-ahad",
                "арабське запозичення через торгівлю"
              ]
            ],
            "en": {
              "title": "Loanword Examples"
            }
          }
        ],
        "titleEn": "Loanwords from Many Languages — A2"
      },
      {
        "id": "negasion-i-preguntas",
        "title": "Fandavana sy Fanontaniana — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою tsy перед дієсловом; питання без питального слова передаються висхідною інтонацією або часткою ve одразу після дієслова.",
            "en": {
              "text": "Negation is formed with the particle tsy before the verb; yes/no questions are marked with rising intonation or with the particle ve right after the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tsy mahay aho.",
                "Я не вмію."
              ],
              [
                "Mamaky boky ve ianao?",
                "Ти читаєш книгу?"
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
        "id": "present-tense-m",
        "title": "Ankehitriny: Miandalana M- — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час позначає префікс m-, доданий до дієслівного кореня — та сама форма охоплює і теперішню дію, і загальний факт.",
            "en": {
              "text": "The present tense is marked with the prefix m- added to the verb root — the same form covers both a present action and a general fact."
            }
          },
          {
            "type": "table",
            "title": "manasa (мити) у теперішньому часі",
            "rows": [
              [
                "manasa lamba aho.",
                "Я мию одяг."
              ]
            ],
            "en": {
              "title": "manasa (to wash) in the present"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mianatra teny malagasy aho.",
                "Я вивчаю малагасійську мову."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Tense with m- — A1"
      },
      {
        "id": "past-tense-n",
        "title": "Lasa: N- — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час утворюється заміною префікса m- на n- — той самий корінь, лише один звук змінено, і час одразу стає минулим.",
            "en": {
              "text": "The past tense is formed by replacing the prefix m- with n- — the same root, only one sound changed, and the tense immediately shifts to past."
            }
          },
          {
            "type": "table",
            "title": "manasa → nanasa",
            "rows": [
              [
                "Nanasa lamba aho.",
                "Я мив (вимив) одяг."
              ]
            ],
            "en": {
              "title": "manasa → nanasa"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nianatra teny malagasy aho.",
                "Я вивчав малагасійську мову."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Tense with n- — A2"
      },
      {
        "id": "future-tense-h",
        "title": "Ho Avy: H- — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється заміною того самого префікса на h- — той самий простий однозвуковий шаблон, що й для минулого.",
            "en": {
              "text": "The future tense is formed by replacing the same prefix with h- — the same simple one-sound pattern as for the past."
            }
          },
          {
            "type": "table",
            "title": "manasa → hanasa",
            "rows": [
              [
                "Hanasa lamba aho.",
                "Я митиму (помию) одяг."
              ]
            ],
            "en": {
              "title": "manasa → hanasa"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Hianatra teny malagasy aho.",
                "Я вивчатиму малагасійську мову."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Tense with h- — A2"
      },
      {
        "id": "actor-trigger-voice",
        "title": "Fokus Mpanao — A2",
        "emoji": "👤",
        "sections": [
          {
            "type": "intro",
            "text": "Актив діяча — базова форма дієслова з префіксами man-/mi-/maha-, де підметом у кінці речення є той, хто виконує дію.",
            "en": {
              "text": "The actor trigger is the basic verb form with prefixes man-/mi-/maha-, where the sentence-final subject is the one performing the action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Manasa ny lamba ny reny.",
                "Мати миє одяг (мати у фокусі)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Actor Trigger Voice — A2"
      },
      {
        "id": "object-trigger-voice",
        "title": "Fokus Zavatra Atao — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Об'єктний фокус утворюється суфіксом -ina/-ana, і підметом стає предмет, над яким виконується дія, — той самий корінь дієслова, інший підмет у центрі уваги.",
            "en": {
              "text": "The object trigger is formed with the suffix -ina/-ana, and the subject becomes the item the action is performed on — the same verb root, a different subject in focus."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sasan'ny reny ny lamba.",
                "Одяг миється матір'ю (одяг у фокусі)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Object Trigger Voice — B1"
      },
      {
        "id": "circumstantial-trigger-voice",
        "title": "Fokus Fomba na Fitaovana — B2",
        "emoji": "🛠️",
        "sections": [
          {
            "type": "intro",
            "text": "Обставинний фокус утворюється суфіксом -ana й робить підметом знаряддя, місце чи причину дії — третя можлива 'роль у фокусі' поряд з діячем і об'єктом.",
            "en": {
              "text": "The circumstantial trigger is formed with the suffix -ana and makes the subject the instrument, location, or reason for the action — a third possible 'role in focus' alongside actor and object."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Anasan'ny reny ny lamba ny savony.",
                "Мило — те, чим мати миє одяг (мило у фокусі)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Circumstantial Trigger Voice — B2"
      },
      {
        "id": "imperative-mood",
        "title": "Baiko — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб утворюється закінченням -y на актив-дієслові чи -o на об'єктному фокусі, замінюючи звичайне закінчення дієслова.",
            "en": {
              "text": "The imperative is formed with the ending -y on the actor-trigger verb or -o on the object-trigger form, replacing the usual verb ending."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sasao ny lamba!",
                "Помий одяг!"
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
        "id": "potential-mood-voa",
        "title": "Voa-: Vita Tampoka — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс voa- позначає завершену дію, часто без явного вказання на те, хто саме її виконав, — 'уже зроблено', з наголосом на результаті, а не на виконавцеві.",
            "en": {
              "text": "The prefix voa- marks a completed action, often without explicitly stating who performed it — 'already done', with the emphasis on the result rather than the doer."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Voasasa ny lamba.",
                "Одяг уже випраний."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Voa-: Completed Result — B1"
      },
      {
        "id": "abilitative-mood-maha",
        "title": "Maha-: Fahavitana — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс maha- перед коренем виражає здатність чи спричинення стану — 'здатний зробити' чи 'здатний спричинити щось'.",
            "en": {
              "text": "The prefix maha- before the root expresses ability or the causing of a state — 'able to do' or 'able to cause something'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mahay miteny malagasy aho.",
                "Я вмію говорити малагасійською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Maha-: Ability — B1"
      },
      {
        "id": "spontaneous-tafa",
        "title": "Tafa-: Vita Tsy Nahy — B2",
        "emoji": "😌",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс tafa- позначає дію, що сталася випадково, спонтанно чи успішно попри труднощі, без свідомого наміру виконавця, — форма, якої немає в більшості мов світу.",
            "en": {
              "text": "The prefix tafa- marks an action that happened accidentally, spontaneously, or successfully despite difficulty, with no deliberate intent by the doer — a form absent from most world languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tafasasa ny lamba.",
                "Одяг якось виправся (не навмисно чи всупереч труднощам)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tafa-: Spontaneous/Accidental Action — B2"
      },
      {
        "id": "reciprocal-mifan",
        "title": "Mifan-: Fifanaovana — B1",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс mifan- позначає взаємну дію між двома чи більше учасниками — 'робити одне одному', без потреби в окремому займеннику 'одне одного'.",
            "en": {
              "text": "The prefix mifan- marks a mutual action between two or more participants — 'to do to each other', with no need for a separate 'each other' pronoun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mifankatia izy roa.",
                "Вони двоє люблять одне одного."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Mifan-: Reciprocal — B1"
      },
      {
        "id": "causative-mampan",
        "title": "Mampan-: Mahatonga — B2",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс mampan- додає значення каузації — 'змушувати когось робити' — до звичайного актив-дієслова, без окремого допоміжного слова.",
            "en": {
              "text": "The prefix mampan- adds a causative meaning — 'to make someone do' — to an ordinary actor-trigger verb, with no separate auxiliary word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mampanasa lamba ny reny.",
                "Мати змушує (когось) прати одяг."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Mampan-: Causative — B2"
      },
      {
        "id": "habitual-aspect-reduplication",
        "title": "Fanindroan-teny: Fahazarana — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Подвоєння дієслівного кореня позначає звичну, недбалу чи неквапну дію — 'потроху щось робити' чи 'робити щось без напруги'.",
            "en": {
              "text": "Doubling the verb root marks a habitual, casual, or unhurried action — 'to do something bit by bit' or 'to do something without strain'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mamaky-mamaky boky izy.",
                "Він потроху почитує книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reduplication for Habitual/Casual Aspect — B1"
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
        "id": "ny-artikolo-voafaritra",
        "title": "Ny: Artikolo Voafaritra — A1",
        "emoji": "📘",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль ny стоїть перед означеним іменником — на відміну від багатьох австронезійських мов, малагасійська має справжній окремий артикль, а не лише позиційну визначеність.",
            "en": {
              "text": "The definite article ny stands before a definite noun — unlike many Austronesian languages, Malagasy has a true separate article, not just positional definiteness."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ny boky",
                "книга (означена)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ny: The Definite Article — A1"
      },
      {
        "id": "i-artikolo-anarana",
        "title": "I / Ra-: Artikolon'Anarana — A1",
        "emoji": "👤",
        "sections": [
          {
            "type": "intro",
            "text": "Власні імена людей отримують окремий особовий артикль i (чи розмовний префікс Ra-), відмінний від артикля ny, що вживається лише для звичайних іменників.",
            "en": {
              "text": "Proper names of people take a separate personal article i (or the colloquial prefix Ra-), distinct from the article ny, which is used only for common nouns."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "i Soa",
                "Соа (ім'я з особовим артиклем)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "I / Ra-: The Personal Article — A1"
      },
      {
        "id": "vos-podmet-viznachenist",
        "title": "VOS sy ny Fahafantarana — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Оскільки підмет завжди стоїть у кінці речення, він майже завжди означений; для введення нового, невизначеного предмета мова вдається до окремої конструкції з misy, а не просто ставить іменник на позицію підмета.",
            "en": {
              "text": "Since the subject always stands at the end of the sentence, it's almost always definite; to introduce a new, indefinite item the language resorts to a separate misy construction rather than simply placing the noun in subject position."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Misy boky eto.",
                "Тут є (якась) книга."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "VOS and Subject Definiteness — B1"
      },
      {
        "id": "tsy-misy-jinsia",
        "title": "Tsy Misy Jinsia — A1",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "У малагасійській немає граматичного роду взагалі — жоден іменник, прикметник чи займенник не змінюється залежно від статі референта.",
            "en": {
              "text": "Malagasy has no grammatical gender at all — no noun, adjective, or pronoun changes based on the referent's sex."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "izy (він/вона/воно, той самий займенник для всіх)",
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
        "id": "tsy-misy-isa-maro",
        "title": "Tsy Misy Marika Isa Maro — A2",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники зазвичай не мають окремої форми множини — множинність випливає з контексту чи з числівника поряд з іменником, а не з суфікса на самому іменнику.",
            "en": {
              "text": "Nouns usually have no separate plural form — plurality is inferred from context or from a numeral next to the noun, not from a suffix on the noun itself."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "boky (книга/книги, залежно від контексту)",
                "та сама форма для однини й множини"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "No Default Plural Marking — A2"
      },
      {
        "id": "fanindroana-maro",
        "title": "Fanindroan-teny ho an'ny Maro — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Коли множинність усе ж потрібно підкреслити, іменник чи прикметник можна подвоїти — граматична альтернатива відсутньому суфіксу множини.",
            "en": {
              "text": "When plurality still needs to be emphasized, a noun or adjective can be reduplicated — a grammatical alternative to the missing plural suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "vary maro-maro (багато-багато рису, розсипано скрізь)",
                "подвоєння підкреслює розсіяну множинність"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reduplication for Emphasized Plurality — B1"
      },
      {
        "id": "fanindroana-kely",
        "title": "Fanindroan-teny ho an'ny Kely — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Те саме подвоєння, застосоване до прикметника, натомість пом'якшує значення — позначає меншу інтенсивність чи приблизність, а не множинність.",
            "en": {
              "text": "The same reduplication, applied to an adjective, instead softens the meaning — marking lesser intensity or approximation rather than plurality."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mena-mena (трохи червонуватий, не яскраво-червоний)",
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
        "id": "mpamaritra-toerana",
        "title": "Mpamaritra Toerana: Ity, Iny, Iroa — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні займенники мають три ступені віддаленості: ity (тут, поряд з мовцем), iny (там, поряд зі слухачем), iroa (там, далеко від обох).",
            "en": {
              "text": "Demonstratives have three degrees of distance: ity (here, near the speaker), iny (there, near the listener), iroa (over there, far from both)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ity boky ity",
                "ця книга (поряд зі мною)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Demonstratives: ity, iny, iroa — A2"
      },
      {
        "id": "mpamaritra-fananana",
        "title": "Fananana: -N' — A2",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність передається зв'язкою -n', приєднаною до кінця предмета володіння, за якою йде власник, — без окремого прийменника 'з' чи присвійного прикметника.",
            "en": {
              "text": "Possession is expressed with the linker -n', attached to the end of the possessed item, followed by the possessor — with no separate preposition 'of' or possessive adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ny bokin'i Soa",
                "книга Соа"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possession with -n' — A2"
      },
      {
        "id": "misy-fisiana",
        "title": "Misy: Fisiana — A1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово misy виражає існування чи наявність — 'є, існує' — і водночас слугує способом ввести новий, невизначений підмет у речення.",
            "en": {
              "text": "The verb misy expresses existence or presence — 'there is' — and also serves as the way to introduce a new, indefinite subject into a sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Misy rano ao anaty tavoahangy.",
                "У пляшці є вода."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Misy: Existence — A1"
      },
      {
        "id": "fampitahana-mihoatra",
        "title": "Fampitahana: Mihoatra Noho — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння вищого ступеня утворюється зворотом mihoatra noho ('перевершує, ніж') чи просто прикметником плюс noho, без окремого суфікса на прикметнику.",
            "en": {
              "text": "Comparison of superiority is formed with the phrase mihoatra noho ('surpasses, than') or simply the adjective plus noho, with no dedicated suffix on the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Lehibe noho ny rahalahiny izy.",
                "Він більший за свого брата."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparison with mihoatra noho — A2"
      },
      {
        "id": "fampitahana-indrindra",
        "title": "Fampitahana Indrindra: Indrindra — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь додає слово indrindra ('найбільше') після прикметника, без окремого артикля чи суфікса.",
            "en": {
              "text": "The superlative adds the word indrindra ('the most') after the adjective, with no dedicated article or suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Lehibe indrindra izy.",
                "Він найбільший."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative with indrindra — B1"
      },
      {
        "id": "mpanontany",
        "title": "Mpanontany: Inona, Iza, Aiza — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова inona (що), iza (хто), aiza (де), oviana (коли), ahoana (як) зазвичай стоять на початку речення, коли на них падає наголос запитання.",
            "en": {
              "text": "The question words inona (what), iza (who), aiza (where), oviana (when), ahoana (how) normally stand at the start of the sentence when the question's emphasis falls on them."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Iza no mamaky boky?",
                "Хто читає книгу?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Question Words: inona, iza, aiza — A1"
      },
      {
        "id": "mpamaritra-fifandraisana-izay",
        "title": "Fehezanteny Fifandraisana: Izay — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Відносне підрядне речення вводиться незмінним словом izay, яке заміняє будь-який відмінюваний відносний займенник.",
            "en": {
              "text": "A relative clause is introduced by the invariant word izay, which replaces any declined relative pronoun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ny olona izay miteny malagasy",
                "людина, яка говорить малагасійською"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clauses with izay — B1"
      },
      {
        "id": "mpamari-toetra-toy-matoanteny",
        "title": "Mpamaritra Toetra Toy ny Matoanteny — B1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники поводяться майже як окремий клас стативних дієслів — самі є присудком речення й можуть навіть приймати ті самі часові префікси m-/n-/h-.",
            "en": {
              "text": "Adjectives behave almost like a distinct class of stative verbs — they themselves serve as the predicate and can even take the same tense prefixes m-/n-/h-."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mainty ny volony. (буквально 'чорніє його волосся')",
                "Його волосся чорне."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjectives as Stative Verbs — B1"
      },
      {
        "id": "laharan-mpamaritra",
        "title": "Laharan'ny Mpamaritra — A2",
        "emoji": "↔️",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник завжди стоїть після іменника, який він описує, — точна протилежність порядку в українській чи англійській.",
            "en": {
              "text": "An adjective always follows the noun it describes — the exact opposite of the order in Ukrainian or English."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "trano lehibe",
                "великий дім (буквально 'дім великий')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Placement After the Noun — A2"
      },
      {
        "id": "isa-tsotra",
        "title": "Isa Tsotra — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Кількісні числівники мають власні малагасійські корені й ставляться перед іменником без потреби в класифікаторі, на відміну від багатьох сусідніх австронезійських мов.",
            "en": {
              "text": "Cardinal numbers have their own native Malagasy roots and are placed before the noun with no need for a classifier, unlike many neighboring Austronesian languages."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "iray, roa, telo",
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
        "id": "isa-filaharana",
        "title": "Isa Filaharana — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються префіксом faha-, доданим перед кількісним числівником.",
            "en": {
              "text": "Ordinal numbers are formed with the prefix faha-, added before the cardinal number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "fahatelo",
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
        "id": "dia-fanamafisana-lohahevitra",
        "title": "Dia: Fanamafisana ny Lohahevitra — B1",
        "emoji": "🔝",
        "sections": [
          {
            "type": "intro",
            "text": "Частка dia виносить елемент речення на позицію теми й підкреслює його, водночас позначаючи межу між темою й рештою речення.",
            "en": {
              "text": "The particle dia fronts an element of the sentence into topic position and emphasizes it, while also marking the boundary between the topic and the rest of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Izaho dia mianatra teny malagasy.",
                "Щодо мене, то я вивчаю малагасійську мову."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Dia: Topicalization Particle — B1"
      },
      {
        "id": "no-fanamafisana-fanambarana",
        "title": "No: Fanamafisana ny Fokus — B2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Частка no сполучає винесений на початок елемент фокусу із рештою речення, коли саме цей елемент, а не підмет у кінці, відповідає на запитання 'хто/що саме'.",
            "en": {
              "text": "The particle no connects a fronted focus element to the rest of the sentence, when that element, rather than the sentence-final subject, answers the question 'who/what exactly'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ny reniko no manasa ny lamba.",
                "Саме моя мати миє одяг."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "No: Focus-Marking Particle — B2"
      },
      {
        "id": "teny-mpampiankina-toerana",
        "title": "Teny Mpampiankina Toerana — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Місцеві прийменники ao (усередині), eo (тут, поряд), any (там, далеко) поєднуються з іменником для позначення місця, часто уточнені словом anaty ('всередині') чи ambony ('на, зверху').",
            "en": {
              "text": "The locative prepositions ao (inside), eo (here, nearby), any (there, far away) combine with a noun to mark location, often further specified with anaty ('inside') or ambony ('on top of')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ao anaty trano",
                "усередині дому"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Locative Prepositions — A2"
      },
      {
        "id": "miaraka-amin-fiaraha",
        "title": "Miaraka Amin': Fanarahana — A2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Супровідність ('разом з') виражається зворотом miaraka amin' плюс іменник — власна конструкція, відмінна від простого прийменника 'з'.",
            "en": {
              "text": "Accompaniment ('together with') is expressed with the phrase miaraka amin' plus a noun — its own construction, distinct from a simple preposition 'with'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Miaraka amin'ny namako aho.",
                "Я разом зі своїм другом."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Miaraka Amin': Accompaniment — A2"
      },
      {
        "id": "mpamaritra-lalana",
        "title": "Mpamaritra Lalana: Eto, Eroa, Erỳ — B1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Дейктичні частки місця eto, eroa, erỳ вказують на близькість чи віддаленість щодо мовця, часто узгоджені з тим самим тристороннім розрізненням, що й вказівні займенники.",
            "en": {
              "text": "The deictic place particles eto, eroa, erỳ indicate proximity or distance relative to the speaker, often aligned with the same three-way distinction as the demonstratives."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Eto aho.",
                "Я тут."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Deictic Place Particles — B1"
      },
      {
        "id": "fanamboarana-teny-mifangaro",
        "title": "Fanamboarana Teny Mifangaro — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова поєднують два корені в одне ціле, часто зі скороченням чи асиміляцією звуків на межі поєднання.",
            "en": {
              "text": "Compound words join two roots into one unit, often with shortening or sound assimilation at the boundary of the join."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tanàna (місто) + dehibe (велике) → tanàndehibe (столиця)",
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
        "id": "teny-tsy-miova",
        "title": "Teny Tsy Miova — B1",
        "emoji": "🔒",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники й частки ніколи не відмінюються й не узгоджуються з іменником — незмінний клас слів, що контрастує з багатим афіксальним дієслівним словотвором.",
            "en": {
              "text": "Prepositions and particles never inflect or agree with a noun — an invariant word class, contrasting with the rich affixal verb derivation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "amin' (незмінне у всіх контекстах)",
                "прийменник, що ніколи не змінюється"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Invariant Particles — B1"
      },
      {
        "id": "circumstantial-trigger-subtypes",
        "title": "Fokus Fomba: Karazany Maro — B2",
        "emoji": "🛠️",
        "sections": [
          {
            "type": "intro",
            "text": "Обставинний фокус насправді охоплює кілька різних ролей — знаряддя, отримувач, причина — розрізнюваних лише контекстом і значенням самого дієслова, попри однаковий суфікс -ana.",
            "en": {
              "text": "The circumstantial trigger actually covers several different roles — instrument, beneficiary, reason — distinguished only by context and the meaning of the verb itself, despite the identical suffix -ana."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Anasan-dreniko ny lamba ny savony. (знаряддя)",
                "Anasako ny lamba ny zanako. (отримувач)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Circumstantial Trigger Subtypes — B2"
      },
      {
        "id": "tafa-spontane-politeness",
        "title": "Tafa- ho an'ny Fihavanana — B2",
        "emoji": "🕊️",
        "sections": [
          {
            "type": "intro",
            "text": "Уживання префікса tafa- дозволяє повідомити про наслідок, не покладаючи явної відповідальності на виконавця, — граматична стратегія збереження соціальної гармонії (fihavanana), центральної цінності малагасійської культури.",
            "en": {
              "text": "Using the prefix tafa- allows one to report a result without explicitly assigning blame to the doer — a grammatical strategy for preserving social harmony (fihavanana), a central value of Malagasy culture."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tafavaky ny fitaratra. (не 'хтось розбив', а 'якось розбилося')",
                "Скло якось розбилося."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tafa- for Social Harmony (Fihavanana) — B2"
      },
      {
        "id": "voa-perfect-completion",
        "title": "Voa- kontra Tafa- — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від tafa-, що наголошує на випадковості, voa- просто позначає завершену дію без жодного натяку на те, чи була вона навмисною, — тонша відмінність між двома результативними префіксами.",
            "en": {
              "text": "Unlike tafa-, which emphasizes accidentalness, voa- simply marks a completed action with no hint about whether it was intentional — a finer distinction between the two resultative prefixes."
            }
          },
          {
            "type": "table",
            "title": "voa- проти tafa-",
            "rows": [
              [
                "voasasa (просто випраний, спосіб не важливий)",
                "нейтральний результат"
              ],
              [
                "tafasasa (виправся якось, ненавмисно/попри труднощі)",
                "наголос на випадковості"
              ]
            ],
            "en": {
              "title": "voa- vs. tafa-"
            }
          }
        ],
        "titleEn": "Voa- vs. Tafa- — B2"
      },
      {
        "id": "reciprocal-causative-stacking",
        "title": "Mifampan-: Fifampiantoka — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Реципрокальний і каузативний префікси можуть поєднуватися в одному дієслові — mifampan-, позначаючи, що учасники взаємно змушують чи допомагають одне одному щось зробити.",
            "en": {
              "text": "The reciprocal and causative prefixes can combine in one verb — mifampan-, marking that participants mutually cause or help each other to do something."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mifampianatra izy roa.",
                "Вони двоє навчають одне одного."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reciprocal-Causative Stacking — B2"
      },
      {
        "id": "root-word-family-derivation",
        "title": "Fianakavian-teny Iray Faka — B2",
        "emoji": "🌳",
        "sections": [
          {
            "type": "intro",
            "text": "Один корінь може породити цілу родину похідних слів через систематичне додавання афіксів — дієслово дії, дієслово стану, назву діяча, назву знаряддя, абстрактний іменник — усе з того самого кореня.",
            "en": {
              "text": "One root can generate a whole family of derived words through systematic affixation — an action verb, a state verb, an agent noun, an instrument noun, an abstract noun — all from the same root."
            }
          },
          {
            "type": "table",
            "title": "Родина слів від sasa (прати)",
            "rows": [
              [
                "manasa (прати), mpanasa (пральник), fanasana (пральна машина/спосіб прання)",
                "три похідних слова від одного кореня"
              ]
            ],
            "en": {
              "title": "Word Family from sasa (to wash)"
            }
          }
        ],
        "titleEn": "Root Word Family Derivation — B2"
      },
      {
        "id": "passive-preference-culture",
        "title": "Fanamafisana ny Toe-javatra fa tsy ny Mpanao — B2",
        "emoji": "🤐",
        "sections": [
          {
            "type": "intro",
            "text": "Малагасійські мовці часто обирають об'єктний чи обставинний фокус замість актив-фокусу саме для того, щоб змістити увагу з виконавця дії на сам предмет чи наслідок, — мовна звичка, вкорінена в цінності непрямого, ввічливого мовлення.",
            "en": {
              "text": "Malagasy speakers often choose the object or circumstantial trigger instead of the actor trigger precisely to shift attention away from the doer of the action toward the item or result itself — a linguistic habit rooted in the value of indirect, polite speech."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Vaky ny fitaratra. (стан речі, не хто розбив)",
                "Скло розбите."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Preference for Non-Agentive Focus — B2"
      },
      {
        "id": "honorific-vocabulary",
        "title": "Voambolana Fanajana — B2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Окремий шар шанобливої лексики вживається при зверненні до старших, посадовців чи в офіційному контексті — власні слова замість буденних відповідників.",
            "en": {
              "text": "A separate layer of honorific vocabulary is used when addressing elders, officials, or in a formal context — dedicated words instead of the everyday equivalents."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mangataka (шанобливо просити, замість буденного mitady)",
                "шаноблива лексика"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Honorific Vocabulary — B2"
      },
      {
        "id": "highland-coastal-dialect-variation",
        "title": "Fiteny Antanety sy Amoron-tsiraka — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Стандартна малагасійська базується на нагірному діалекті мерина, тоді як прибережні говірки (сакалава, бецимісарака) розходяться в лексиці й вимові настільки, що взаєморозуміння між далекими регіонами буває утрудненим.",
            "en": {
              "text": "Standard Malagasy is based on the highland Merina dialect, while coastal dialects (Sakalava, Betsimisaraka) diverge in vocabulary and pronunciation enough that mutual intelligibility between distant regions can be difficult."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Стандартна мова базується на діалекті Мерина з нагір'я.",
                "офіційна мова vs. прибережні говірки"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Highland vs. Coastal Dialects — B2"
      },
      {
        "id": "french-malagasy-code-switching",
        "title": "Fifangaroan-teny Frantsay sy Malagasy — B2",
        "emoji": "🇫🇷",
        "sections": [
          {
            "type": "intro",
            "text": "У міському й освіченому мовленні типове перемикання кодів усередині одного речення — граматичний каркас малагасійський, а частина лексики чи цілі фрази вставляються з французької без адаптації.",
            "en": {
              "text": "Urban, educated speech typically code-switches within a single sentence — the grammatical frame is Malagasy, while chunks of vocabulary or whole phrases are inserted from French without adaptation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Any amin'ny bureau aho.",
                "Я в офісі (French bureau вставлене напряму)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "French-Malagasy Code-Switching — B2"
      },
      {
        "id": "kinship-terminology-fihavanana",
        "title": "Voambolana Fihavanana — B2",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Розлога система термінів спорідненості відображає цінність fihavanana (родинної гармонії) — окремі слова для старшого й молодшого брата/сестри, і навіть для двоюрідних родичів різного ступеня, замінюють особові займенники в розмові.",
            "en": {
              "text": "An elaborate kinship-term system reflects the value of fihavanana (family harmony) — separate words for older and younger sibling, and even for cousins of different degrees, replace personal pronouns in conversation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "zoky (старший брат/сестра) vs zandry (молодший)",
                "розрізнення за відносним віком, не лише статтю"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Kinship Terminology and Fihavanana — B2"
      },
      {
        "id": "deictic-directional-compass-based",
        "title": "Fanondroan-toerana: Araka ny Faritra — B2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "У деяких регіональних говірках напрямок позначається не простим 'тут/там', а орієнтирами ландшафту чи сторонами світу — 'у бік моря' чи 'у бік гір' замість абстрактного вказівного слова.",
            "en": {
              "text": "In some regional dialects, direction is marked not with simple 'here/there' but with landscape landmarks or compass directions — 'seaward' or 'mountainward' instead of an abstract deictic word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Приклад орієнтації за ландшафтом у прибережних говірках, а не за абстрактним 'там'.",
                "напрямок відносно моря чи гір"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Landscape/Compass-Based Directionals — B2"
      },
      {
        "id": "numeral-classifier-like-counting-words",
        "title": "Teny Fanisana Manokana — B2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Хоч загального обов'язкового класифікатора, як у в'єтнамській, малагасійська не має, кілька спеціальних слів для лічби (наприклад, для плодів чи довгастих предметів) усе ж уживаються з окремими категоріями предметів.",
            "en": {
              "text": "While Malagasy lacks a general obligatory classifier system like Vietnamese, a few special counting words (for instance, for fruit or elongated objects) are still used with specific categories of items."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "vongana iray (один шматок, для нерахункових предметів)",
                "спеціальне слово для лічби шматків"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Classifier-Like Counting Words — B2"
      },
      {
        "id": "verb-derivation-multiple-affixes-stacking",
        "title": "Fanovan-teny Marotokana Mifanindry — B2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька афіксів фокусу, виду й каузації можуть поєднуватися на одному й тому самому корені в чіткому фіксованому порядку, утворюючи складні дієслівні форми з дуже точним значенням.",
            "en": {
              "text": "Several focus, aspect, and causative affixes can combine on the same root in a strict fixed order, forming complex verb forms with a very precise meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mampifankatia (каузатив + реципрокальність: 'змушувати любити одне одного')",
                "два афікси поспіль на одному корені"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Multiple Affix Stacking — B2"
      },
      {
        "id": "adjectival-intensifier-particles",
        "title": "Teny Fanamafisana: Dia Ilaina Indray — B2",
        "emoji": "💯",
        "sections": [
          {
            "type": "intro",
            "text": "Та сама частка dia, що позначає тему речення, у поєднанні з прикметником означає інтенсивність — 'справді дуже' — окрема функція, відмінна від топікалізації.",
            "en": {
              "text": "The same particle dia that marks a sentence's topic, when combined with an adjective, means intensity — 'really very' — a separate function from topicalization."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Dia tsara izany!",
                "Це справді дуже добре!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Dia as an Intensifier — B2"
      },
      {
        "id": "existential-negative-tsisy",
        "title": "Tsisy: Tsy Fisiana — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечне існування утворюється злиттям tsy й misy в одне слово tsisy — 'немає взагалі', на противагу ствердному misy.",
            "en": {
              "text": "Negative existence is formed by fusing tsy and misy into one word tsisy — 'there isn't any at all', the opposite of affirmative misy."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tsisy rano.",
                "Немає води."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tsisy: Negative Existence — A2"
      },
      {
        "id": "possessive-pronoun-suffixes",
        "title": "Mpamaritra Fananana Mifikitra — B1",
        "emoji": "🔡",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники приєднуються прямо до кінця іменника як суфікси -ko (мій), -nao (твій), -ny (його/її), а не стоять окремим словом перед іменником.",
            "en": {
              "text": "Possessive pronouns attach directly to the end of a noun as suffixes -ko (my), -nao (your), -ny (his/her), rather than standing as a separate word before the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "boky + ko → bokiko",
                "моя книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessive Pronoun Suffixes — B1"
      },
      {
        "id": "comparative-equality-toa",
        "title": "Fampitahana Mitovy: Toa — B1",
        "emoji": "🟰",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння рівності чи схожості виражається словом toa ('немов, як') перед іменником чи цілим реченням порівняння.",
            "en": {
              "text": "Comparison of equality or resemblance is expressed with the word toa ('like, as') before a noun or a whole comparison clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Toa anjely izy.",
                "Вона немов ангел."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Equality Comparison with toa — B1"
      },
      {
        "id": "verb-nominalization-fi-prefix",
        "title": "Fi-: Fanovana ho Anarana — B2",
        "emoji": "📘",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс fi- перетворює дієслово на абстрактний іменник, що позначає саму дію чи спосіб дії, — окремий словотворчий шлях поряд з агентивним mpi-.",
            "en": {
              "text": "The prefix fi- turns a verb into an abstract noun denoting the action itself or its manner — a distinct derivational path alongside the agentive mpi-."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mianatra (навчатися) → fianarana (навчання)",
                "дієслово → абстрактний іменник"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fi-: Verb-to-Noun Nominalization — B2"
      },
      {
        "id": "agent-nominalization-mpi-prefix",
        "title": "Mpi-: Ilay Manao — B2",
        "emoji": "👤",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс mpi- (чи mpan-) утворює іменник-діяч, що позначає того, хто регулярно виконує дію, — паралель до українського суфікса '-ач/-ач(ка)'.",
            "en": {
              "text": "The prefix mpi- (or mpan-) forms an agent noun denoting one who regularly performs the action — a parallel to the Ukrainian '-er/-or' agent suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mianatra (навчатися) → mpianatra (учень)",
                "дієслово → діяч"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Mpi-: Agent Nominalization — B2"
      },
      {
        "id": "instrument-nominalization-fan-prefix",
        "title": "Fan-: Fitaovana — B2",
        "emoji": "🛠️",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс fan- утворює іменник-знаряддя, що позначає предмет, яким виконується дія, — третій словотворчий шлях поряд з fi- і mpi-.",
            "en": {
              "text": "The prefix fan- forms an instrument noun denoting the object with which the action is performed — a third derivational path alongside fi- and mpi-."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "manasa (мити) → fanasana (пральна машина/засіб миття)",
                "дієслово → знаряддя"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fan-: Instrument Nominalization — B2"
      },
      {
        "id": "relative-time-clauses-rehefa-raha",
        "title": "Fehezanteny Fotoana: Rehefa, Raha — B1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Сполучник rehefa ('коли') вводить часове підрядне речення для завершених подій, а raha ('якщо/коли') — для гіпотетичних чи умовних ситуацій.",
            "en": {
              "text": "The conjunction rehefa ('when') introduces a temporal clause for completed events, while raha ('if/when') introduces hypothetical or conditional situations."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Rehefa tonga izy, dia hiara-misakafo isika.",
                "Коли він прийде, ми разом поїмо."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Temporal Clauses: rehefa, raha — B1"
      },
      {
        "id": "double-negation-tsy-mihitsy",
        "title": "Fanamafisana ny Fandavana: Tsy...Mihitsy — B1",
        "emoji": "❌",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення підсилюється словом mihitsy ('взагалі') в кінці речення — 'зовсім не, ніскілечки не', сильніше за просте tsy.",
            "en": {
              "text": "Negation is intensified with the word mihitsy ('at all') at the end of the sentence — 'not at all, not in the slightest', stronger than plain tsy."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tsy mahalala mihitsy aho.",
                "Я взагалі нічого не знаю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Emphatic Negation with tsy...mihitsy — B1"
      },
      {
        "id": "loanword-morphological-adaptation",
        "title": "Fampidirana Teny Nindramina — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Запозичені слова, потрапивши в мову, отримують повноцінну малагасійську дієслівну морфологію — вони можуть приймати ті самі часові префікси й афікси фокусу, що й питомі корені.",
            "en": {
              "text": "Loanwords, once they enter the language, receive full Malagasy verb morphology — they can take the same tense prefixes and focus affixes as native roots."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "telefaonina (телефонувати, від запозиченого кореня + повна морфологія)",
                "запозичення з повною малагасійською морфологією"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Morphological Adaptation of Loanwords — B1"
      },
      {
        "id": "polite-imperative-softener",
        "title": "Baiko Malefaka: Azafady, Kely — B1",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Голий наказовий спосіб звучить різко, тож у ввічливому мовленні його майже завжди пом'якшують словом azafady ('будь ласка, перепрошую') на початку чи kely ('трошки') у кінці речення.",
            "en": {
              "text": "The bare imperative sounds abrupt, so in polite speech it's almost always softened with azafady ('please, excuse me') at the start or kely ('a little') at the end of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Azafady, mba omeo rano kely aho.",
                "Перепрошую, дайте мені трохи води, будь ласка."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Softened Polite Imperative — B1"
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
        "title": "Matoanteny Tsy Manara-dalàna — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частовживаних дієслів (mandeha 'йти', manao 'робити') мають форми фокусу чи часу, що не виводяться регулярно з очікуваного зразка афіксації.",
            "en": {
              "text": "A few common verbs (mandeha 'to go', manao 'to do') have focus or tense forms that can't be regularly derived from the expected affixation pattern."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна форма",
            "rows": [
              [
                "mandeha → lasa (пішов, не за звичайним зразком n-)",
                "суплетивна форма минулого часу"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Common Verbs — B1"
      },
      {
        "id": "irregular-plural-forms",
        "title": "Fanindroan-teny Tsy Manara-dalàna — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька іменників мають застиглу форму подвоєння, що вже втратила пряме значення множинності й сприймається носіями просто як окреме слово.",
            "en": {
              "text": "A few nouns have a fossilized reduplicated form that has already lost its direct plural meaning and is perceived by speakers simply as a separate word."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "zaza-zaza (не просто 'багато дітей', а ідіоматично 'дитинство/по-дитячому')",
                "застигла редуплікація з новим значенням"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Reduplicated Forms — B2"
      },
      {
        "id": "fixed-proverbs-ohabolana",
        "title": "Ohabolana: Fitenim-paritra Miorina — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Традиційні прислів'я (ohabolana) зберігають архаїчну граматичну структуру й лексику, які вже вийшли з ужитку в повсякденній мові, і вживаються цілими блоками без граматичного розбору.",
            "en": {
              "text": "Traditional proverbs (ohabolana) preserve archaic grammatical structure and vocabulary already out of use in everyday language, and are used as whole blocks with no grammatical analysis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aleo very tsikalakalam-bola toy izay very tsikalakalam-panahy.",
                "Краще втратити гроші, ніж честь (застигла приказка з архаїчною лексикою)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Proverbs (Ohabolana) — B2"
      }
    ]
  }
];
