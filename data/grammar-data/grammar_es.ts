// Vymova — data/grammar-data/grammar_es.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_ES: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "ser-estar",
        "title": "Ser vs Estar — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "В іспанській є два дієслова \"бути\" — ser та estar. Ser використовують для постійних характеристик, estar — для тимчасових станів і місцезнаходження.",
            "en": {
              "text": "Spanish has two verbs for \"to be\" — ser and estar. Ser is for permanent characteristics, estar is for temporary states and location."
            }
          },
          {
            "type": "formula",
            "title": "Дієвідмінювання (теперішній час)",
            "rows": [
              [
                "yo",
                "soy",
                "estoy"
              ],
              [
                "tú",
                "eres",
                "estás"
              ],
              [
                "él/ella/usted",
                "es",
                "está"
              ],
              [
                "nosotros/as",
                "somos",
                "estamos"
              ],
              [
                "vosotros/as",
                "sois",
                "estáis"
              ],
              [
                "ellos/ellas/ustedes",
                "son",
                "están"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Soy profesor.",
                "Я (є) вчитель. (постійна риса)"
              ],
              [
                "Estoy cansado.",
                "Я втомлений. (тимчасовий стан)"
              ],
              [
                "Madrid está en España.",
                "Мадрид у Іспанії. (місце)"
              ],
              [
                "Ella es alta.",
                "Вона висока. (характеристика)"
              ]
            ]
          }
        ],
        "titleEn": "Ser vs Estar — A1"
      },
      {
        "id": "gender-nouns",
        "title": "Рід іменників — A1",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Усі іменники в іспанській мають рід — чоловічий або жіночий. Артикль і прикметник узгоджуються з родом і числом іменника.",
            "en": {
              "text": "All Spanish nouns have a gender — masculine or feminine. Articles and adjectives agree with the noun in gender and number."
            }
          },
          {
            "type": "table",
            "title": "Типові закінчення",
            "rows": [
              [
                "-o → чоловічий",
                "el libro (книга)",
                "el chico (хлопець)"
              ],
              [
                "-a → жіночий",
                "la mesa (стіл)",
                "la chica (дівчина)"
              ],
              [
                "-ción/-sión → жіночий",
                "la canción (пісня)",
                "la decisión (рішення)"
              ],
              [
                "-ema/-oma → чоловічий",
                "el problema (проблема)",
                "el idioma (мова)"
              ]
            ]
          },
          {
            "type": "note",
            "text": "Артиклі: el / la (однина), los / las (множина). Перед іменниками жіночого роду, що починаються на наголошене \"a\"/\"ha\", вживають el: el agua.",
            "en": {
              "text": "Articles: el / la (singular), los / las (plural). Before feminine nouns starting with stressed \"a\"/\"ha\", use el: el agua."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "El libro es interesante.",
                "Книга цікава."
              ],
              [
                "La chica habla español.",
                "Дівчина говорить іспанською."
              ],
              [
                "Los problemas son grandes.",
                "Проблеми великі."
              ],
              [
                "El agua está fría.",
                "Вода холодна."
              ]
            ]
          }
        ],
        "titleEn": "Noun Gender — A1"
      },
      {
        "id": "articles",
        "title": "Артиклі — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль (el, la, los, las) вживають для конкретних, відомих предметів. Неозначений (un, una, unos, unas) — для нових, невизначених.",
            "en": {
              "text": "The definite article (el, la, los, las) is used for specific, known things. The indefinite article (un, una, unos, unas) is used for new, unspecified things."
            }
          },
          {
            "type": "table",
            "title": "Форми артиклів",
            "rows": [
              [
                "",
                "однина",
                "множина"
              ],
              [
                "чоловічий",
                "el / un",
                "los / unos"
              ],
              [
                "жіночий",
                "la / una",
                "las / unas"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tengo un coche.",
                "У мене є машина. (якась)"
              ],
              [
                "El coche es rojo.",
                "Машина червона. (та сама, відома)"
              ],
              [
                "Hay unas manzanas en la mesa.",
                "На столі є кілька яблук."
              ],
              [
                "Las manzanas son verdes.",
                "Ці яблука зелені."
              ]
            ]
          }
        ],
        "titleEn": "Articles — A1"
      },
      {
        "id": "plural-nouns",
        "title": "Множина іменників — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина іменників та прикметників утворюється за простими правилами залежно від закінчення слова.",
            "en": {
              "text": "The plural of nouns and adjectives is formed with simple rules depending on the word ending."
            }
          },
          {
            "type": "table",
            "title": "Правила утворення множини",
            "rows": [
              [
                "голосна → +s",
                "libro → libros",
                "casa → casas"
              ],
              [
                "згодна/-í/-ú → +es",
                "profesor → profesores",
                "país → países"
              ],
              [
                "-z → -ces",
                "lápiz → lápices",
                "voz → voces"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tengo dos libros nuevos.",
                "У мене дві нові книги."
              ],
              [
                "Los profesores son simpáticos.",
                "Викладачі приємні."
              ],
              [
                "Compré tres lápices.",
                "Я купив три карандаші."
              ]
            ]
          }
        ],
        "titleEn": "Plural Nouns — A1"
      },
      {
        "id": "adjectives",
        "title": "Прикметники — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники узгоджуються з іменником у роді та числі і зазвичай стоять після іменника.",
            "en": {
              "text": "Adjectives agree with the noun in gender and number and usually come after the noun."
            }
          },
          {
            "type": "table",
            "title": "Узгодження",
            "rows": [
              [
                "чол. одн.",
                "un coche rojo",
                "червона машина (ч.р.)"
              ],
              [
                "жін. одн.",
                "una casa roja",
                "червоний будинок (ж.р.)"
              ],
              [
                "чол. мн.",
                "unos coches rojos",
                "червоні машини (мн.)"
              ],
              [
                "жін. мн.",
                "unas casas rojas",
                "червоні будинки (мн.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tengo un perro pequeño.",
                "У мене маленький пес."
              ],
              [
                "Mis amigas son inteligentes.",
                "Мої подруги розумні."
              ],
              [
                "Es una ciudad muy bonita.",
                "Це дуже гарне місто."
              ]
            ]
          }
        ],
        "titleEn": "Adjectives — A1"
      },
      {
        "id": "possessives",
        "title": "Присвійні прикметники — A1",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні прикметники вказують на належність і узгоджуються з іменником у числі (а nuestro/vuestro — і в роді).",
            "en": {
              "text": "Possessive adjectives show ownership and agree with the noun in number (and nuestro/vuestro also in gender)."
            }
          },
          {
            "type": "table",
            "title": "Форми",
            "rows": [
              [
                "mi / mis",
                "мій, моя, моє, мої"
              ],
              [
                "tu / tus",
                "твій, твоя, твоє, твої"
              ],
              [
                "su / sus",
                "його, її, їхній"
              ],
              [
                "nuestro/a(s)",
                "наш, наша, наше, наші"
              ],
              [
                "vuestro/a(s)",
                "ваш, ваша, ваше, ваші"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mi hermano vive en Lima.",
                "Мій брат живе в Лімі."
              ],
              [
                "¿Dónde están tus llaves?",
                "Де твої ключі?"
              ],
              [
                "Nuestra casa es pequeña.",
                "Наш будинок маленький."
              ],
              [
                "Sus padres son muy amables.",
                "Його/її батьки дуже приємні."
              ]
            ]
          }
        ],
        "titleEn": "Possessive Adjectives — A1"
      },
      {
        "id": "demonstratives",
        "title": "Вказівні займенники — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні займенники показують, наскільки далеко предмет від мовця: este (тут), ese (там, недалеко), aquel (там, далеко).",
            "en": {
              "text": "Demonstratives show how far an object is from the speaker: este (here), ese (there, nearby), aquel (over there, far away)."
            }
          },
          {
            "type": "table",
            "title": "Форми",
            "rows": [
              [
                "тут",
                "este / esta",
                "estos / estas"
              ],
              [
                "там (поруч)",
                "ese / esa",
                "esos / esas"
              ],
              [
                "там (далеко)",
                "aquel / aquella",
                "aquellos / aquellas"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Este libro es mío.",
                "Ця книга моя."
              ],
              [
                "Esa chica es mi hermana.",
                "Та дівчина — моя сестра."
              ],
              [
                "Aquellas montañas son muy altas.",
                "Ті (далекі) гори дуже високі."
              ]
            ]
          }
        ],
        "titleEn": "Demonstrative Pronouns — A1"
      },
      {
        "id": "question-words",
        "title": "Питальні слова — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова завжди пишуться з наголосом (тильда) і обрамлюються знаками ¿ ... ?",
            "en": {
              "text": "Question words always carry a written accent and the sentence is framed with ¿ ... ?"
            }
          },
          {
            "type": "table",
            "title": "Основні питальні слова",
            "rows": [
              [
                "¿Qué?",
                "Що?"
              ],
              [
                "¿Quién?",
                "Хто?"
              ],
              [
                "¿Dónde?",
                "Де?"
              ],
              [
                "¿Cuándo?",
                "Коли?"
              ],
              [
                "¿Por qué?",
                "Чому?"
              ],
              [
                "¿Cómo?",
                "Як?"
              ],
              [
                "¿Cuánto/a?",
                "Скільки?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "¿Qué hora es?",
                "Котра година?"
              ],
              [
                "¿Dónde vives?",
                "Де ти живеш?"
              ],
              [
                "¿Por qué estudias español?",
                "Чому ти вивчаєш іспанську?"
              ],
              [
                "¿Cuánto cuesta esto?",
                "Скільки це коштує?"
              ]
            ]
          }
        ],
        "titleEn": "Question Words — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється словом \"no\" перед дієсловом. Інші заперечні слова (nada, nadie, nunca, tampoco) можна поєднувати з \"no\".",
            "en": {
              "text": "Negation is formed with \"no\" before the verb. Other negative words (nada, nadie, nunca, tampoco) can combine with \"no\"."
            }
          },
          {
            "type": "formula",
            "title": "Структура",
            "rows": [
              [
                "❌ (−)",
                "no + verbo",
                "→ No hablo francés."
              ],
              [
                "❌ (−−)",
                "no + verbo + nada/nadie/nunca",
                "→ No tengo nada."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "No hablo francés.",
                "Я не говорю французькою."
              ],
              [
                "No hay nadie en casa.",
                "Удома нікого немає."
              ],
              [
                "Nunca como carne.",
                "Я ніколи не їм м'ясо."
              ],
              [
                "Yo tampoco quiero ir.",
                "Я також не хочу йти."
              ]
            ]
          }
        ],
        "titleEn": "Negation — A1"
      },
      {
        "id": "reflexive-verbs",
        "title": "Зворотні дієслова — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотні дієслова (закінчуються на -se в інфінітиві) описують дії, які людина виконує над собою. Зворотний займенник узгоджується з підметом і зазвичай стоїть перед дієсловом.",
            "en": {
              "text": "Reflexive verbs (ending in -se in the infinitive) describe actions the subject does to themselves. The reflexive pronoun agrees with the subject and usually comes before the verb."
            }
          },
          {
            "type": "formula",
            "title": "levantarse (вставати)",
            "rows": [
              [
                "yo",
                "me levanto",
                "→ Me levanto a las siete."
              ],
              [
                "tú",
                "te levantas",
                "→ ¿A qué hora te levantas?"
              ],
              [
                "él/ella/usted",
                "se levanta",
                "→ Ella se levanta tarde."
              ],
              [
                "nosotros/as",
                "nos levantamos",
                "→ Nos levantamos pronto."
              ],
              [
                "vosotros/as",
                "os levantáis",
                "→ Os levantáis tarde."
              ],
              [
                "ellos/ellas/ustedes",
                "se levantan",
                "→ Se levantan a las ocho."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Me ducho por la mañana.",
                "Я приймаю душ зранку."
              ],
              [
                "¿Cómo te llamas?",
                "Як тебе звати?"
              ],
              [
                "Nos acostamos a las once.",
                "Ми лягаємо спати об одинадцятій."
              ]
            ]
          }
        ],
        "titleEn": "Reflexive Verbs — A2"
      }
    ]
  },
  {
    "id": "tenses",
    "title": "Часи дієслів",
    "titleEn": "Verb Tenses",
    "emoji": "🕐",
    "rules": [
      {
        "id": "preterite",
        "title": "Pretérito Indefinido — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Простий минулий час використовують для завершених дій у конкретний момент у минулому.",
            "en": {
              "text": "The simple past tense is used for completed actions at a specific point in the past."
            }
          },
          {
            "type": "formula",
            "title": "hablar (-ar), comer (-er), vivir (-ir)",
            "rows": [
              [
                "yo",
                "hablé",
                "comí",
                "viví"
              ],
              [
                "tú",
                "hablaste",
                "comiste",
                "viviste"
              ],
              [
                "él/ella/usted",
                "habló",
                "comió",
                "vivió"
              ],
              [
                "nosotros/as",
                "hablamos",
                "comimos",
                "vivimos"
              ],
              [
                "vosotros/as",
                "hablasteis",
                "comisteis",
                "vivisteis"
              ],
              [
                "ellos/ellas/ustedes",
                "hablaron",
                "comieron",
                "vivieron"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ayer hablé con mi madre.",
                "Вчора я говорив з мамою."
              ],
              [
                "Comimos en un restaurante.",
                "Ми їли в ресторані."
              ],
              [
                "Ella vivió en Madrid dos años.",
                "Вона жила в Мадриді два роки."
              ]
            ]
          },
          {
            "type": "markers",
            "title": "Маркери часу",
            "items": [
              "ayer",
              "anteayer",
              "la semana pasada",
              "el año pasado",
              "hace dos días"
            ]
          }
        ],
        "titleEn": "Pretérito Indefinido (Simple Past) — A2"
      },
      {
        "id": "future-simple",
        "title": "Futuro Simple — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Простий майбутній час утворюють додаванням закінчень до повного інфінітива (однаково для -ar, -er, -ir дієслів).",
            "en": {
              "text": "The simple future is formed by adding endings to the full infinitive (the same for -ar, -er and -ir verbs)."
            }
          },
          {
            "type": "formula",
            "title": "hablar / comer / vivir + закінчення",
            "rows": [
              [
                "yo",
                "hablar-é",
                "→ Hablaré con ella mañana."
              ],
              [
                "tú",
                "hablar-ás",
                "→ ¿Hablarás con él?"
              ],
              [
                "él/ella/usted",
                "hablar-á",
                "→ Vivirá en Roma."
              ],
              [
                "nosotros/as",
                "hablar-emos",
                "→ Comeremos juntos."
              ],
              [
                "vosotros/as",
                "hablar-éis",
                "→ Viviréis aquí."
              ],
              [
                "ellos/ellas/ustedes",
                "hablar-án",
                "→ Comerán a las dos."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mañana iré al médico.",
                "Завтра я піду до лікаря."
              ],
              [
                "El año que viene viviremos en España.",
                "Наступного року ми житимемо в Іспанії."
              ],
              [
                "¿Qué harás este fin de semana?",
                "Що ти робитимеш цими вихідними?"
              ]
            ]
          },
          {
            "type": "note",
            "text": "Деякі дієслова мають неправильну основу майбутнього часу: tener → tendr-, hacer → har-, decir → dir-, poder → podr-, venir → vendr-.",
            "en": {
              "text": "Some verbs have an irregular future stem: tener → tendr-, hacer → har-, decir → dir-, poder → podr-, venir → vendr-."
            }
          }
        ],
        "titleEn": "Futuro Simple — A2"
      },
      {
        "id": "present-regular",
        "title": "Теперішній час правильних дієслів — A1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Правильні дієслова поділяють на три групи за закінченням інфінітива: -ar, -er, -ir. Кожна група має свій набір закінчень у теперішньому часі.",
            "en": {
              "text": "Regular verbs fall into three groups by infinitive ending: -ar, -er, -ir. Each group has its own set of present-tense endings."
            }
          },
          {
            "type": "formula",
            "title": "hablar (-ar), comer (-er), vivir (-ir)",
            "rows": [
              [
                "yo",
                "habl-o",
                "com-o",
                "viv-o"
              ],
              [
                "tú",
                "habl-as",
                "com-es",
                "viv-es"
              ],
              [
                "él/ella/usted",
                "habl-a",
                "com-e",
                "viv-e"
              ],
              [
                "nosotros/as",
                "habl-amos",
                "com-emos",
                "viv-imos"
              ],
              [
                "vosotros/as",
                "habl-áis",
                "com-éis",
                "viv-ís"
              ],
              [
                "ellos/ellas/ustedes",
                "habl-an",
                "com-en",
                "viv-en"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hablo español.",
                "Я говорю іспанською."
              ],
              [
                "Comemos a las dos.",
                "Ми їмо о другій."
              ],
              [
                "¿Vives en Madrid?",
                "Ти живеш у Мадриді?"
              ],
              [
                "No trabajamos los domingos.",
                "Ми не працюємо по неділях."
              ]
            ]
          }
        ],
        "titleEn": "Present Tense (Regular Verbs) — A1"
      },
      {
        "id": "ir-a-infinitivo",
        "title": "Futuro Próximo (ir a + infinitivo) — A1",
        "emoji": "🚶",
        "sections": [
          {
            "type": "intro",
            "text": "Найпоширеніший спосіб говорити про найближче майбутнє — дієслово ir (йти) у теперішньому часі + a + інфінітив. Вживається частіше за Futuro Simple в розмовній мові.",
            "en": {
              "text": "The most common way to talk about the near future is the verb ir (to go) in the present tense + a + infinitive. It is used more often than the Futuro Simple in everyday speech."
            }
          },
          {
            "type": "formula",
            "title": "ir + a + infinitivo",
            "rows": [
              [
                "yo",
                "voy a",
                "→ Voy a viajar mañana."
              ],
              [
                "tú",
                "vas a",
                "→ ¿Vas a venir a la fiesta?"
              ],
              [
                "él/ella/usted",
                "va a",
                "→ Va a llover."
              ],
              [
                "nosotros/as",
                "vamos a",
                "→ Vamos a comer ahora."
              ],
              [
                "vosotros/as",
                "vais a",
                "→ Vais a llegar tarde."
              ],
              [
                "ellos/ellas/ustedes",
                "van a",
                "→ Van a estudiar esta noche."
              ]
            ],
            "en": {
              "title": "ir + a + infinitive"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Voy a llamar a mi madre.",
                "Я зателефоную мамі."
              ],
              [
                "¿Qué vas a hacer este fin de semana?",
                "Що ти робитимеш цими вихідними?"
              ],
              [
                "Va a empezar a las ocho.",
                "Це почнеться о восьмій."
              ]
            ]
          }
        ],
        "titleEn": "Near Future (Ir A + Infinitive) — A1"
      },
      {
        "id": "present-continuous",
        "title": "Presente Continuo (estar + gerundio) — A2",
        "emoji": "▶️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній тривалий час підкреслює, що дія відбувається саме зараз. Утворюється: estar (теперішній час) + герундій (-ando для -ar дієслів, -iendo для -er/-ir).",
            "en": {
              "text": "The present continuous emphasizes that an action is happening right now. It is formed with estar (present tense) + gerund (-ando for -ar verbs, -iendo for -er/-ir verbs)."
            }
          },
          {
            "type": "table",
            "title": "Утворення герундія",
            "rows": [
              [
                "hablar → hablando",
                "comer → comiendo",
                "escribir → escribiendo"
              ],
              [
                "leer → leyendo",
                "dormir → durmiendo",
                "pedir → pidiendo"
              ]
            ],
            "en": {
              "title": "Forming the gerund"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Estoy comiendo ahora mismo.",
                "Я зараз їм."
              ],
              [
                "¿Qué estás haciendo?",
                "Що ти зараз робиш?"
              ],
              [
                "Están durmiendo todavía.",
                "Вони ще сплять."
              ]
            ]
          }
        ],
        "titleEn": "Present Continuous (Estar + Gerund) — A2"
      },
      {
        "id": "imperfecto",
        "title": "Pretérito Imperfecto — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий незавершений час — для звичних дій у минулому, опису людей/місць та фону подій. На відміну від Pretérito Indefinido, не вказує на завершеність дії.",
            "en": {
              "text": "The imperfect past tense — for habitual past actions, descriptions of people/places, and background. Unlike the Pretérito Indefinido, it does not mark the action as completed."
            }
          },
          {
            "type": "formula",
            "title": "hablar (-ar), comer (-er), vivir (-ir)",
            "rows": [
              [
                "yo",
                "hablaba",
                "comía",
                "vivía"
              ],
              [
                "tú",
                "hablabas",
                "comías",
                "vivías"
              ],
              [
                "él/ella/usted",
                "hablaba",
                "comía",
                "vivía"
              ],
              [
                "nosotros/as",
                "hablábamos",
                "comíamos",
                "vivíamos"
              ],
              [
                "vosotros/as",
                "hablabais",
                "comíais",
                "vivíais"
              ],
              [
                "ellos/ellas/ustedes",
                "hablaban",
                "comían",
                "vivían"
              ]
            ]
          },
          {
            "type": "note",
            "title": "Неправильні форми",
            "text": "Лише три дієслова неправильні: ser → era, ir → iba, ver → veía.",
            "en": {
              "title": "Irregular forms"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Cuando era niño, vivía en Madrid.",
                "Коли я був дитиною, я жив у Мадриді."
              ],
              [
                "Hacía sol todos los días.",
                "Щодня було сонячно."
              ],
              [
                "Mi abuela cocinaba muy bien.",
                "Моя бабуся дуже добре готувала."
              ]
            ]
          }
        ],
        "titleEn": "Pretérito Imperfecto — A2"
      },
      {
        "id": "preterito-perfecto",
        "title": "Pretérito Perfecto Compuesto — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Складений минулий час для дій, що відбулись у незавершеному відрізку часу (сьогодні, цього тижня) або мають зв'язок із теперішнім. Утворюється: haber (теперішній час) + дієприкметник минулого часу.",
            "en": {
              "text": "A compound past tense for actions in a time period that is not yet over (today, this week) or that relate to the present. Formed with haber (present tense) + past participle."
            }
          },
          {
            "type": "table",
            "title": "Дієприкметник минулого часу",
            "rows": [
              [
                "-ar → -ado",
                "hablar → hablado",
                "trabajar → trabajado"
              ],
              [
                "-er → -ido",
                "comer → comido",
                "tener → tenido"
              ],
              [
                "-ir → -ido",
                "vivir → vivido",
                "salir → salido"
              ]
            ]
          },
          {
            "type": "formula",
            "title": "haber + participio",
            "rows": [
              [
                "yo",
                "he hablado",
                "→ Hoy he hablado con ella."
              ],
              [
                "tú",
                "has comido",
                "→ ¿Has comido ya?"
              ],
              [
                "él/ella/usted",
                "ha vivido",
                "→ Ha vivido aquí toda su vida."
              ],
              [
                "nosotros/as",
                "hemos trabajado",
                "→ Hemos trabajado mucho hoy."
              ],
              [
                "vosotros/as",
                "habéis salido",
                "→ ¿Habéis salido esta semana?"
              ],
              [
                "ellos/ellas/ustedes",
                "han tenido",
                "→ Han tenido suerte."
              ]
            ]
          },
          {
            "type": "note",
            "title": "Неправильні дієприкметники",
            "text": "hacer → hecho, decir → dicho, escribir → escrito, ver → visto, poner → puesto, volver → vuelto, abrir → abierto, romper → roto.",
            "en": {
              "title": "Irregular participles"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Esta mañana he desayunado tarde.",
                "Цього ранку я пізно поснідав."
              ],
              [
                "Nunca he estado en Japón.",
                "Я ніколи не був у Японії."
              ],
              [
                "¿Has visto mi teléfono?",
                "Ти бачив мій телефон?"
              ]
            ]
          }
        ],
        "titleEn": "Pretérito Perfecto Compuesto (Present Perfect) — A2"
      },
      {
        "id": "pluscuamperfecto",
        "title": "Pretérito Pluscuamperfecto — B1",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Передминулий час — для дії, що відбулась раніше за іншу минулу дію. Утворюється: haber в imperfecto + дієприкметник минулого часу.",
            "en": {
              "text": "The past perfect — for an action that happened before another past action. Formed with haber in the imperfect + past participle."
            }
          },
          {
            "type": "formula",
            "title": "haber (imperfecto) + participio",
            "rows": [
              [
                "yo",
                "había hablado",
                "→ Ya había comido cuando llegaste."
              ],
              [
                "tú",
                "habías comido",
                "→ Habías salido antes de la llamada."
              ],
              [
                "él/ella/usted",
                "había vivido",
                "→ Nunca había visto algo así."
              ],
              [
                "nosotros/as",
                "habíamos trabajado",
                "→ Habíamos terminado antes de las seis."
              ],
              [
                "vosotros/as",
                "habíais salido",
                "→ Ya habíais llegado."
              ],
              [
                "ellos/ellas/ustedes",
                "habían tenido",
                "→ Habían tenido un problema antes."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Cuando llegué, ya habían comido.",
                "Коли я прийшов, вони вже поїли."
              ],
              [
                "Nunca había viajado en avión antes de ese día.",
                "Я ніколи не літав літаком до того дня."
              ],
              [
                "Ella ya se había ido.",
                "Вона вже пішла."
              ]
            ]
          }
        ],
        "titleEn": "Pretérito Pluscuamperfecto (Past Perfect) — B1"
      },
      {
        "id": "condicional-simple",
        "title": "Condicional Simple — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб для гіпотетичних дій, ввічливих прохань і порад. Утворюється так само, як Futuro Simple — від повного інфінітива + закінчення -ía.",
            "en": {
              "text": "The conditional mood, used for hypothetical actions, polite requests and advice. Formed like the Futuro Simple — from the full infinitive + -ía endings."
            }
          },
          {
            "type": "formula",
            "title": "hablar / comer / vivir + закінчення",
            "rows": [
              [
                "yo",
                "hablar-ía",
                "→ Yo hablaría con él."
              ],
              [
                "tú",
                "comer-ías",
                "→ ¿Qué comerías tú?"
              ],
              [
                "él/ella/usted",
                "vivir-ía",
                "→ Viviría en otra ciudad."
              ],
              [
                "nosotros/as",
                "hablar-íamos",
                "→ Hablaríamos más despacio."
              ],
              [
                "vosotros/as",
                "comer-íais",
                "→ ¿Comeríais aquí?"
              ],
              [
                "ellos/ellas/ustedes",
                "vivir-ían",
                "→ Vivirían felices."
              ]
            ]
          },
          {
            "type": "note",
            "text": "Ті самі неправильні основи, що й у Futuro Simple: tener → tendr-, hacer → har-, decir → dir-, poder → podr-, salir → saldr-.",
            "en": {
              "text": "The same irregular stems as the Futuro Simple: tener → tendr-, hacer → har-, decir → dir-, poder → podr-, salir → saldr-."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "¿Podrías ayudarme, por favor?",
                "Не міг би ти мені допомогти, будь ласка?"
              ],
              [
                "Me gustaría viajar a España.",
                "Мені б хотілося поїхати до Іспанії."
              ],
              [
                "Deberías descansar más.",
                "Тобі варто б більше відпочивати."
              ]
            ]
          }
        ],
        "titleEn": "Condicional Simple — B1"
      },
      {
        "id": "subjuntivo-presente",
        "title": "Presente de Subjuntivo — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслівний спосіб для бажань, сумнівів, емоцій та порад (після que). На відміну від дійсного способу, не виражає об'єктивного факту.",
            "en": {
              "text": "A verbal mood for wishes, doubts, emotions and advice (after que). Unlike the indicative, it does not express an objective fact."
            }
          },
          {
            "type": "formula",
            "title": "hablar (-ar), comer (-er), vivir (-ir)",
            "rows": [
              [
                "yo",
                "hable",
                "coma",
                "viva"
              ],
              [
                "tú",
                "hables",
                "comas",
                "vivas"
              ],
              [
                "él/ella/usted",
                "hable",
                "coma",
                "viva"
              ],
              [
                "nosotros/as",
                "hablemos",
                "comamos",
                "vivamos"
              ],
              [
                "vosotros/as",
                "habléis",
                "comáis",
                "viváis"
              ],
              [
                "ellos/ellas/ustedes",
                "hablen",
                "coman",
                "vivan"
              ]
            ]
          },
          {
            "type": "markers",
            "title": "Тригери subjuntivo",
            "items": [
              "quiero que...",
              "espero que...",
              "dudo que...",
              "es importante que...",
              "ojalá que...",
              "no creo que..."
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Quiero que vengas a la fiesta.",
                "Я хочу, щоб ти прийшов на вечірку."
              ],
              [
                "Espero que todo vaya bien.",
                "Сподіваюсь, що все буде добре."
              ],
              [
                "Ojalá que llueva mañana.",
                "Якби тільки завтра пішов дощ."
              ]
            ]
          }
        ],
        "titleEn": "Presente de Subjuntivo — B1"
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
        "id": "gustar",
        "title": "Verbo Gustar — A2",
        "emoji": "❤️",
        "sections": [
          {
            "type": "intro",
            "text": "Gustar будується \"навпаки\": підметом речення є те, що подобається, а особа, якій подобається, виражається непрямим займенником (me, te, le, nos, os, les). Дієслово узгоджується з тим, що подобається — однина чи множина.",
            "en": {
              "text": "Gustar works \"backwards\": the subject of the sentence is the thing that is liked, while the person who likes it is expressed with an indirect object pronoun (me, te, le, nos, os, les). The verb agrees with the thing liked — singular or plural."
            }
          },
          {
            "type": "formula",
            "title": "gustar (з однини / множини)",
            "rows": [
              [
                "me",
                "gusta el café",
                "gustan los gatos",
                "→ Me gusta el café."
              ],
              [
                "te",
                "gusta la música",
                "gustan las películas",
                "→ Te gustan las películas."
              ],
              [
                "le",
                "gusta bailar",
                "gustan los libros",
                "→ Le gusta bailar."
              ],
              [
                "nos",
                "gusta este plan",
                "gustan estas ideas",
                "→ Nos gustan estas ideas."
              ],
              [
                "os",
                "gusta el viaje",
                "gustan las fiestas",
                "→ Os gusta el viaje."
              ],
              [
                "les",
                "gusta el fútbol",
                "gustan los deportes",
                "→ Les gustan los deportes."
              ]
            ],
            "en": {
              "title": "gustar (with singular / plural)"
            }
          },
          {
            "type": "note",
            "text": "Так само працюють encantar (дуже подобатись), interesar (цікавити), molestar (заважати), doler (боліти): Me duele la cabeza.",
            "en": {
              "text": "The same pattern applies to encantar (to love), interesar (to interest), molestar (to bother), doler (to hurt): Me duele la cabeza."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Me gusta el chocolate.",
                "Мені подобається шоколад."
              ],
              [
                "¿Te gustan los animales?",
                "Тобі подобаються тварини?"
              ],
              [
                "A ella le gusta leer.",
                "Їй подобається читати."
              ]
            ]
          }
        ],
        "titleEn": "The Verb Gustar (To Like) — A2"
      },
      {
        "id": "por-para",
        "title": "Por vs Para — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Por і para обидва перекладаються як \"для/через/за\", але вживаються в різних контекстах. Por — причина, засіб, тривалість, обмін. Para — мета, призначення, напрямок, термін.",
            "en": {
              "text": "Por and para both can translate as \"for/through/by\", but are used in different contexts. Por is for cause, means, duration, exchange. Para is for purpose, destination, recipient, deadline."
            }
          },
          {
            "type": "table",
            "title": "Коли вживати",
            "rows": [
              [
                "",
                "por",
                "para"
              ],
              [
                "причина",
                "por amor (через кохання)",
                "—"
              ],
              [
                "тривалість",
                "por dos horas",
                "—"
              ],
              [
                "засіб",
                "por correo, por avión",
                "—"
              ],
              [
                "мета/призначення",
                "—",
                "para aprender"
              ],
              [
                "отримувач",
                "—",
                "un regalo para ti"
              ],
              [
                "термін",
                "—",
                "para el lunes"
              ]
            ],
            "en": {
              "title": "When to use"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Gracias por tu ayuda.",
                "Дякую за твою допомогу."
              ],
              [
                "Caminamos por el parque.",
                "Ми гуляли парком."
              ],
              [
                "Este regalo es para ti.",
                "Цей подарунок для тебе."
              ],
              [
                "Necesito esto para mañana.",
                "Мені потрібно це на завтра."
              ]
            ]
          }
        ],
        "titleEn": "Por vs Para — B1"
      },
      {
        "id": "direct-object-pronouns",
        "title": "Pronombres de Objeto Directo — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Прямі додаткові займенники замінюють іменник, на якому виконується дія, і зазвичай ставляться перед дієсловом.",
            "en": {
              "text": "Direct object pronouns replace the noun that receives the action, and usually go right before the conjugated verb."
            }
          },
          {
            "type": "table",
            "title": "Форми",
            "rows": [
              [
                "me",
                "мене"
              ],
              [
                "te",
                "тебе"
              ],
              [
                "lo / la",
                "його / її, Вас (ч./ж.)"
              ],
              [
                "nos",
                "нас"
              ],
              [
                "os",
                "вас"
              ],
              [
                "los / las",
                "їх (ч./ж.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "¿Tienes el libro? Sí, lo tengo.",
                "У тебе є книга? Так, вона в мене."
              ],
              [
                "¿Conoces a María? No, no la conozco.",
                "Ти знаєш Марію? Ні, я її не знаю."
              ],
              [
                "Te quiero mucho.",
                "Я тебе дуже люблю."
              ],
              [
                "¿Dónde están mis llaves? Las tienes tú.",
                "Де мої ключі? Вони в тебе."
              ]
            ]
          }
        ],
        "titleEn": "Direct Object Pronouns — A2"
      },
      {
        "id": "imperative-affirmative",
        "title": "Imperativo Afirmativo — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Стверджувальний наказовий спосіб використовують для прохань, порад і команд. Форма tú для правильних дієслів збігається з формою él/ella теперішнього часу.",
            "en": {
              "text": "The affirmative imperative is used for requests, advice and commands. For regular verbs, the tú form matches the present-tense él/ella form."
            }
          },
          {
            "type": "formula",
            "title": "hablar (-ar), comer (-er), escribir (-ir)",
            "rows": [
              [
                "tú",
                "habla",
                "come",
                "escribe"
              ],
              [
                "usted",
                "hable",
                "coma",
                "escriba"
              ],
              [
                "nosotros/as",
                "hablemos",
                "comamos",
                "escribamos"
              ],
              [
                "vosotros/as",
                "hablad",
                "comed",
                "escribid"
              ],
              [
                "ustedes",
                "hablen",
                "coman",
                "escriban"
              ]
            ]
          },
          {
            "type": "note",
            "title": "Неправильні форми tú",
            "text": "decir → di, hacer → haz, ir → ve, poner → pon, salir → sal, ser → sé, tener → ten, venir → ven.",
            "en": {
              "title": "Irregular tú forms"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "¡Habla más despacio, por favor!",
                "Говори повільніше, будь ласка!"
              ],
              [
                "Coma verduras todos los días.",
                "Їжте овочі щодня. (Ви)"
              ],
              [
                "¡Ven aquí ahora mismo!",
                "Іди сюди негайно!"
              ]
            ]
          }
        ],
        "titleEn": "Affirmative Imperative — A2"
      },
      {
        "id": "comparatives",
        "title": "Comparativos y Superlativos — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння будується за допомогою más/menos...que (більше/менше, ніж) або tan...como (так само, як). Найвищий ступінь — el/la/los/las más...de.",
            "en": {
              "text": "Comparisons are formed with más/menos...que (more/less than) or tan...como (as...as). The superlative is el/la/los/las más...de."
            }
          },
          {
            "type": "table",
            "title": "Структура",
            "rows": [
              [
                "вищий ступінь",
                "más + прикм. + que",
                "Ana es más alta que yo."
              ],
              [
                "нижчий ступінь",
                "menos + прикм. + que",
                "Es menos caro que ese."
              ],
              [
                "рівність",
                "tan + прикм. + como",
                "Es tan alto como tú."
              ],
              [
                "найвищий",
                "el/la más + прикм. + de",
                "Es la más inteligente de la clase."
              ]
            ]
          },
          {
            "type": "note",
            "title": "Неправильні форми",
            "text": "bueno → mejor (краще), malo → peor (гірше), grande → mayor (старший/більший), pequeño → menor (молодший/менший).",
            "en": {
              "title": "Irregular forms"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mi hermano es mayor que yo.",
                "Мій брат старший за мене."
              ],
              [
                "Este libro es mejor que el otro.",
                "Ця книга краща за ту."
              ],
              [
                "Es el restaurante más caro de la ciudad.",
                "Це найдорожчий ресторан у місті."
              ]
            ]
          }
        ],
        "titleEn": "Comparatives & Superlatives — A2"
      },
      {
        "id": "indirect-object-pronouns",
        "title": "Pronombres de Objeto Indirecto — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Непрямі додаткові займенники вказують, кому/для кого виконується дія, і, як і прямі, ставляться перед дієсловом.",
            "en": {
              "text": "Indirect object pronouns show to/for whom an action is done, and like direct ones, go right before the verb."
            }
          },
          {
            "type": "table",
            "title": "Форми",
            "rows": [
              [
                "me",
                "мені"
              ],
              [
                "te",
                "тобі"
              ],
              [
                "le",
                "йому/їй/Вам"
              ],
              [
                "nos",
                "нам"
              ],
              [
                "os",
                "вам"
              ],
              [
                "les",
                "їм"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Le doy un regalo a mi madre.",
                "Я даю мамі подарунок."
              ],
              [
                "¿Me puedes ayudar?",
                "Ти можеш мені допомогти?"
              ],
              [
                "Les escribo un correo.",
                "Я пишу їм листа."
              ]
            ]
          }
        ],
        "titleEn": "Indirect Object Pronouns — A2"
      },
      {
        "id": "double-object-pronouns",
        "title": "Pronombres Combinados (se lo) — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Коли в реченні є і непрямий, і прямий займенник, непрямий ставиться першим. Якщо обидва займенники починаються на l- (le/les + lo/la/los/las), le/les замінюється на se.",
            "en": {
              "text": "When a sentence has both an indirect and a direct object pronoun, the indirect one comes first. If both start with l- (le/les + lo/la/los/las), le/les becomes se."
            }
          },
          {
            "type": "formula",
            "title": "se + lo/la/los/las",
            "rows": [
              [
                "le + lo → se lo",
                "",
                "→ Se lo doy a él. (= le doy el regalo)"
              ],
              [
                "les + la → se la",
                "",
                "→ Se la envío a ellos."
              ],
              [
                "me + lo → me lo",
                "",
                "→ Me lo explicó bien."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "¿El libro? Se lo di a María.",
                "Книгу? Я віддав її Марії."
              ],
              [
                "Me lo dijo ayer.",
                "Він сказав мені це вчора."
              ],
              [
                "¿Puedes prestármelo?",
                "Можеш позичити мені це?"
              ]
            ]
          }
        ],
        "titleEn": "Combined Pronouns (Se Lo) — B1"
      },
      {
        "id": "relative-pronouns",
        "title": "Pronombres Relativos (que, quien, donde) — B1",
        "emoji": "🧵",
        "sections": [
          {
            "type": "intro",
            "text": "Відносні займенники з'єднують два речення, уникаючи повторення іменника. Que — найуживаніший (особи й речі), quien(es) — лише особи (після прийменника), donde — місце.",
            "en": {
              "text": "Relative pronouns join two clauses without repeating the noun. Que is the most common (people and things), quien(es) is for people only (after a preposition), donde is for place."
            }
          },
          {
            "type": "table",
            "title": "Основні відносні слова",
            "rows": [
              [
                "que",
                "який/яка/яке/які (особи й речі)"
              ],
              [
                "quien(es)",
                "хто (після прийменника, лише особи)"
              ],
              [
                "donde",
                "де"
              ],
              [
                "el/la cual, los/las cuales",
                "який/яка (формальний стиль)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "El hombre que vive aquí es médico.",
                "Чоловік, який тут живе, лікар."
              ],
              [
                "La persona con quien hablé es mi jefa.",
                "Людина, з якою я говорив, моя начальниця."
              ],
              [
                "Esta es la casa donde nací.",
                "Це дім, де я народився."
              ]
            ]
          }
        ],
        "titleEn": "Relative Pronouns (Que, Quien, Donde) — B1"
      },
      {
        "id": "passive-voice",
        "title": "Voz Pasiva (ser + participio) — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан вживають, коли важливіша дія, а не той, хто її виконує. Утворюється: ser + дієприкметник, що узгоджується з підметом у роді й числі. Виконавець дії вводиться через por.",
            "en": {
              "text": "The passive voice is used when the action matters more than who performs it. Formed with ser + past participle, which agrees with the subject in gender and number. The agent is introduced with por."
            }
          },
          {
            "type": "formula",
            "title": "ser + participio (+ por)",
            "rows": [
              [
                "presente",
                "es construido/a",
                "→ La casa es construida por obreros."
              ],
              [
                "pasado",
                "fue escrito/a",
                "→ El libro fue escrito por ella."
              ],
              [
                "futuro",
                "será anunciado/a",
                "→ El resultado será anunciado mañana."
              ]
            ]
          },
          {
            "type": "note",
            "text": "У розмовній мові частіше вживають пасивну конструкцію з se: Se construyó la casa en 1990.",
            "en": {
              "text": "In everyday speech, the se-passive construction is more common: Se construyó la casa en 1990."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "El cuadro fue pintado por Picasso.",
                "Картину намалював Пікассо."
              ],
              [
                "Las cartas son enviadas todos los días.",
                "Листи відправляють щодня."
              ],
              [
                "Se habla español aquí.",
                "Тут розмовляють іспанською."
              ]
            ]
          }
        ],
        "titleEn": "Passive Voice (Ser + Participle) — B1"
      },
      {
        "id": "gerund-uses",
        "title": "Usos del Gerundio — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Окрім Presente Continuo, герундій вживають як обставину способу дії (як саме щось відбувається) і з дієсловами seguir/llevar для тривалості.",
            "en": {
              "text": "Besides the Presente Continuo, the gerund is used to show how an action is done, and with seguir/llevar to express duration."
            }
          },
          {
            "type": "table",
            "title": "Типові конструкції",
            "rows": [
              [
                "спосіб дії",
                "Aprendió español viajando.",
                "Він вивчив іспанську подорожуючи."
              ],
              [
                "seguir + gerundio",
                "Sigue trabajando aquí.",
                "Він досі тут працює."
              ],
              [
                "llevar + gerundio",
                "Llevo dos años estudiando.",
                "Я вже два роки навчаюся."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mejoró su inglés escuchando música.",
                "Він покращив англійську, слухаючи музику."
              ],
              [
                "Sigue lloviendo desde ayer.",
                "Досі дощить від учора."
              ],
              [
                "Llevamos una hora esperando.",
                "Ми чекаємо вже годину."
              ]
            ]
          }
        ],
        "titleEn": "Uses of the Gerund — B1"
      }
    ]
  },
  {
    "id": "advanced",
    "title": "Просунута граматика",
    "titleEn": "Advanced grammar",
    "emoji": "🚀",
    "rules": [
      {
        "id": "conditional-sentences",
        "title": "Oraciones Condicionales con Si — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовні речення з si мають три основні типи залежно від реалістичності умови.",
            "en": {
              "text": "Conditional sentences with si have three main types depending on how realistic the condition is."
            }
          },
          {
            "type": "table",
            "title": "Типи умовних речень",
            "rows": [
              [
                "реальна умова",
                "Si + presente, + presente/futuro/imperativo",
                "Si tengo tiempo, te llamo."
              ],
              [
                "нереальна теперішня",
                "Si + imperfecto subjuntivo, + condicional",
                "Si tuviera dinero, viajaría."
              ],
              [
                "нереальна минула",
                "Si + pluscuamperfecto subjuntivo, + condicional perfecto",
                "Si hubiera estudiado, habría aprobado."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Si llueve, no salimos.",
                "Якщо піде дощ, ми не вийдемо."
              ],
              [
                "Si fuera rico, compraría una casa.",
                "Якби я був багатим, я б купив будинок."
              ],
              [
                "Si hubiera sabido, te habría avisado.",
                "Якби я знав, я б тебе попередив."
              ]
            ]
          }
        ],
        "titleEn": "Conditional Sentences with Si — B1"
      },
      {
        "id": "reported-speech",
        "title": "Estilo Indirecto — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "У непрямій мові, коли головне дієслово (dijo, comentó) стоїть у минулому часі, час дієслова в підрядному реченні зазвичай зміщується на крок назад.",
            "en": {
              "text": "In reported speech, when the main verb (dijo, comentó) is in the past, the verb tense in the reported clause usually shifts one step back."
            }
          },
          {
            "type": "table",
            "title": "Зміщення часів",
            "rows": [
              [
                "presente → imperfecto",
                "\"Estudio\" → Dijo que estudiaba."
              ],
              [
                "pretérito → pluscuamperfecto",
                "\"Comí\" → Dijo que había comido."
              ],
              [
                "futuro → condicional",
                "\"Vendré\" → Dijo que vendría."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "\"Tengo hambre\" → Dijo que tenía hambre.",
                "\"Я голодний\" → Він сказав, що голодний."
              ],
              [
                "\"Llegaré tarde\" → Dijo que llegaría tarde.",
                "\"Я прийду пізно\" → Він сказав, що прийде пізно."
              ]
            ]
          }
        ],
        "titleEn": "Reported Speech — B1"
      },
      {
        "id": "indefinite-pronouns",
        "title": "Pronombres Indefinidos — A2",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "Невизначені займенники вказують на невідомі, неконкретні особи, предмети чи кількості.",
            "en": {
              "text": "Indefinite pronouns refer to unknown or unspecified people, things or quantities."
            }
          },
          {
            "type": "table",
            "title": "Основні форми",
            "rows": [
              [
                "algo / nada",
                "щось / нічого"
              ],
              [
                "alguien / nadie",
                "хтось / ніхто"
              ],
              [
                "alguno/a / ninguno/a",
                "якийсь / жодний"
              ],
              [
                "todo / cada",
                "все / кожен"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "¿Hay alguien en casa?",
                "Хтось є вдома?"
              ],
              [
                "No tengo nada que decir.",
                "Мені нічого сказати."
              ],
              [
                "Ninguno de ellos vino.",
                "Жоден з них не прийшов."
              ]
            ]
          }
        ],
        "titleEn": "Indefinite Pronouns — A2"
      },
      {
        "id": "ordinal-numbers",
        "title": "Números Ordinales — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники узгоджуються з іменником у роді й числі. Після десятого зазвичай вживають кількісні числівники замість порядкових.",
            "en": {
              "text": "Ordinal numbers agree with the noun in gender and number. After \"tenth\", cardinal numbers are usually used instead of ordinals."
            }
          },
          {
            "type": "table",
            "title": "Перші десять",
            "rows": [
              [
                "primero/a",
                "1-й",
                "sexto/a",
                "6-й"
              ],
              [
                "segundo/a",
                "2-й",
                "séptimo/a",
                "7-й"
              ],
              [
                "tercero/a",
                "3-й",
                "octavo/a",
                "8-й"
              ],
              [
                "cuarto/a",
                "4-й",
                "noveno/a",
                "9-й"
              ],
              [
                "quinto/a",
                "5-й",
                "décimo/a",
                "10-й"
              ]
            ]
          },
          {
            "type": "note",
            "text": "primero й tercero втрачають -o перед іменником чоловічого роду в однині: el primer día, el tercer piso.",
            "en": {
              "text": "primero and tercero drop the -o before a singular masculine noun: el primer día, el tercer piso."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vivo en el tercer piso.",
                "Я живу на третьому поверсі."
              ],
              [
                "Es la primera vez que vengo aquí.",
                "Це перший раз, коли я тут."
              ]
            ]
          }
        ],
        "titleEn": "Ordinal Numbers — A2"
      },
      {
        "id": "exclamatory-sentences",
        "title": "Oraciones Exclamativas — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Окличні речення утворюють за допомогою qué, cuánto/a(s) або cómo, обрамлених знаками ¡ ... !",
            "en": {
              "text": "Exclamatory sentences are formed with qué, cuánto/a(s) or cómo, framed with ¡ ... !"
            }
          },
          {
            "type": "table",
            "title": "Структури",
            "rows": [
              [
                "¡Qué + прикм./ім.!",
                "для якості/предмету",
                "¡Qué bonito!"
              ],
              [
                "¡Cuánto/a(s) + ім.!",
                "для кількості",
                "¡Cuánta gente!"
              ],
              [
                "¡Cómo + дієслово!",
                "для способу",
                "¡Cómo llueve!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "¡Qué calor hace hoy!",
                "Як же сьогодні спекотно!"
              ],
              [
                "¡Cuánto te quiero!",
                "Як же я тебе люблю!"
              ],
              [
                "¡Cómo ha crecido tu hijo!",
                "Як же виріс твій син!"
              ]
            ]
          }
        ],
        "titleEn": "Exclamatory Sentences — A2"
      },
      {
        "id": "prepositions-a-en-de",
        "title": "Preposiciones A, En, De — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Три з найуживаніших прийменників: a (напрямок, час), en (місце знаходження, транспорт, місяці), de (походження, матеріал, належність).",
            "en": {
              "text": "Three of the most common prepositions: a (direction, time), en (location, transport, months), de (origin, material, possession)."
            }
          },
          {
            "type": "table",
            "title": "Вживання",
            "rows": [
              [
                "a",
                "напрямок/час",
                "Voy a Madrid. A las tres."
              ],
              [
                "en",
                "місце/транспорт",
                "Estoy en casa. Viajo en tren."
              ],
              [
                "de",
                "походження/матеріал",
                "Soy de Ucrania. Es de madera."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Llegamos a las nueve.",
                "Ми прибуваємо о дев'ятій."
              ],
              [
                "Vivo en Barcelona.",
                "Я живу в Барселоні."
              ],
              [
                "Este anillo es de oro.",
                "Ця обручка золота."
              ]
            ]
          }
        ],
        "titleEn": "Prepositions A, En, De — A2"
      },
      {
        "id": "diminutives",
        "title": "Diminutivos (-ito/-ita) — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестливі суфікси -ito/-ita (та варіанти -cito/-ecito) виражають малий розмір, ніжність або пом'якшення тону, особливо популярні в розмовній мові Латинської Америки.",
            "en": {
              "text": "The diminutive suffixes -ito/-ita (and the -cito/-ecito variants) express small size, affection, or softened tone, especially common in Latin American spoken Spanish."
            }
          },
          {
            "type": "table",
            "title": "Приклади утворення",
            "rows": [
              [
                "casa → casita",
                "будиночок"
              ],
              [
                "perro → perrito",
                "песик"
              ],
              [
                "momento → momentito",
                "хвилинка"
              ],
              [
                "café → cafecito",
                "кавчик"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Espera un momentito, por favor.",
                "Зачекай хвилинку, будь ласка."
              ],
              [
                "¡Qué perrito tan bonito!",
                "Який же гарненький песик!"
              ],
              [
                "Vivimos en una casita pequeña.",
                "Ми живемо в маленькому будиночку."
              ]
            ]
          }
        ],
        "titleEn": "Diminutives (-Ito/-Ita) — B1"
      },
      {
        "id": "prepositional-pronouns",
        "title": "Pronombres Preposicionales — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Після прийменників (a, de, con, para...) особові займенники змінюють форму. Виняток: con + mí/ti дають conmigo/contigo.",
            "en": {
              "text": "After prepositions (a, de, con, para...) personal pronouns change form. Exception: con + mí/ti become conmigo/contigo."
            }
          },
          {
            "type": "table",
            "title": "Форми",
            "rows": [
              [
                "mí",
                "для мене",
                "ti",
                "для тебе"
              ],
              [
                "él/ella/usted",
                "для нього/неї/Вас",
                "nosotros/as",
                "для нас"
              ],
              [
                "vosotros/as",
                "для вас",
                "ellos/ellas/ustedes",
                "для них"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Este regalo es para ti.",
                "Цей подарунок для тебе."
              ],
              [
                "¿Quieres venir conmigo?",
                "Хочеш піти зі мною?"
              ],
              [
                "Hablaban de mí.",
                "Вони говорили про мене."
              ]
            ]
          }
        ],
        "titleEn": "Pronouns After Prepositions — A2"
      },
      {
        "id": "time-expressions",
        "title": "Desde, Hace, Durante — B1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Три способи виразити тривалість: desde (з якого моменту), hace (скільки часу тому/назад), durante (протягом якого періоду).",
            "en": {
              "text": "Three ways to express duration: desde (since when), hace (how long ago), durante (for how long/during)."
            }
          },
          {
            "type": "table",
            "title": "Вживання",
            "rows": [
              [
                "desde",
                "з (моменту)",
                "Vivo aquí desde 2015."
              ],
              [
                "hace",
                "(скільки) тому",
                "Llegué hace dos horas."
              ],
              [
                "durante",
                "протягом",
                "Estudié durante tres años."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "No la veo desde el verano.",
                "Я не бачив її з літа."
              ],
              [
                "Hace una semana que no llueve.",
                "Вже тиждень, як не йде дощ."
              ],
              [
                "Trabajó durante diez años en esa empresa.",
                "Він працював у тій компанії десять років."
              ]
            ]
          }
        ],
        "titleEn": "Desde, Hace, Durante — B1"
      },
      {
        "id": "uses-of-se",
        "title": "Usos de \"Se\" — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Частка se має кілька різних функцій в іспанській: зворотну, взаємну, пасивну та безособову.",
            "en": {
              "text": "The particle se has several different functions in Spanish: reflexive, reciprocal, passive, and impersonal."
            }
          },
          {
            "type": "table",
            "title": "Функції se",
            "rows": [
              [
                "зворотне",
                "дія на себе",
                "Se lava las manos."
              ],
              [
                "взаємне",
                "дія один на одного",
                "Se quieren mucho."
              ],
              [
                "пасивне se",
                "хто виконує — неважливо",
                "Se venden casas aquí."
              ],
              [
                "безособове se",
                "без конкретного підмета",
                "Se vive bien en este pueblo."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Se despierta a las siete.",
                "Він прокидається о сьомій."
              ],
              [
                "Mis padres se escriben cada semana.",
                "Мої батьки пишуть одне одному щотижня."
              ],
              [
                "Se habla inglés en la recepción.",
                "На рецепції розмовляють англійською."
              ]
            ]
          }
        ],
        "titleEn": "Uses of \"Se\" — B2"
      }
    ]
  },
  {
    "id": "mastery",
    "title": "Майстерність",
    "titleEn": "Mastery",
    "emoji": "🏆",
    "rules": [
      {
        "id": "subjuntivo-imperfecto",
        "title": "Imperfecto de Subjuntivo — B2",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час підрядного способу — для бажань, сумнівів і гіпотез у минулому, а також в умовних реченнях нереального типу (si + imperfecto de subjuntivo). Утворюється від основи 3-ї особи множини Pretérito Indefinido.",
            "en": {
              "text": "The past subjunctive — for wishes, doubts and hypotheses in the past, and in unreal si-conditionals. Formed from the ellos/ellas Pretérito Indefinido stem."
            }
          },
          {
            "type": "formula",
            "title": "hablar, comer, vivir (основа -ron → -ra)",
            "rows": [
              [
                "yo",
                "hablara",
                "comiera",
                "viviera"
              ],
              [
                "tú",
                "hablaras",
                "comieras",
                "vivieras"
              ],
              [
                "él/ella/usted",
                "hablara",
                "comiera",
                "viviera"
              ],
              [
                "nosotros/as",
                "habláramos",
                "comiéramos",
                "viviéramos"
              ],
              [
                "vosotros/as",
                "hablarais",
                "comierais",
                "vivierais"
              ],
              [
                "ellos/ellas/ustedes",
                "hablaran",
                "comieran",
                "vivieran"
              ]
            ]
          },
          {
            "type": "note",
            "text": "Існує також альтернативна форма на -se (hablase, comiese...), рівнозначна формі на -ra, поширена в Іспанії в офіційному стилі.",
            "en": {
              "text": "There is also an alternative -se form (hablase, comiese...), equivalent to the -ra form, common in formal Spanish in Spain."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Quería que vinieras conmigo.",
                "Я хотів, щоб ти пішов зі мною."
              ],
              [
                "Si tuviera más tiempo, viajaría más.",
                "Якби в мене було більше часу, я б подорожував більше."
              ],
              [
                "Dudaba que ella supiera la verdad.",
                "Я сумнівався, що вона знає правду."
              ]
            ]
          }
        ],
        "titleEn": "Imperfecto de Subjuntivo — B2"
      },
      {
        "id": "subjuntivo-perfecto",
        "title": "Pretérito Perfecto de Subjuntivo — B2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Складений час підрядного способу — для дій, що мали б завершитись до моменту мовлення, при вираженні сумніву, емоцій чи бажання. Утворюється: haya/hayas... (subjuntivo дієслова haber) + дієприкметник минулого часу.",
            "en": {
              "text": "A compound subjunctive tense — for actions that should be completed by the moment of speaking, when expressing doubt, emotion or wish. Formed with haya/hayas... (subjunctive of haber) + past participle."
            }
          },
          {
            "type": "formula",
            "title": "haber (subjuntivo) + participio",
            "rows": [
              [
                "yo",
                "haya hablado",
                "→ Espero que haya llegado bien."
              ],
              [
                "tú",
                "hayas comido",
                "→ No creo que hayas terminado."
              ],
              [
                "él/ella/usted",
                "haya vivido",
                "→ Dudo que haya vivido allí."
              ],
              [
                "nosotros/as",
                "hayamos trabajado",
                "→ Ojalá que hayamos acertado."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Espero que hayas dormido bien.",
                "Сподіваюсь, ти добре виспався."
              ],
              [
                "Me alegro de que hayan venido.",
                "Я радий, що вони прийшли."
              ],
              [
                "Es posible que se haya equivocado.",
                "Можливо, він помилився."
              ]
            ]
          }
        ],
        "titleEn": "Pretérito Perfecto de Subjuntivo — B2"
      },
      {
        "id": "imperative-negative",
        "title": "Imperativo Negativo — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечний наказовий спосіб утворюється не від стверджувального, а від форм Presente de Subjuntivo, поставлених після no.",
            "en": {
              "text": "The negative imperative is not formed from the affirmative imperative but from the Presente de Subjuntivo forms, placed after no."
            }
          },
          {
            "type": "formula",
            "title": "no + subjuntivo presente",
            "rows": [
              [
                "tú",
                "no hables / no comas / no vivas",
                "→ ¡No hables tan alto!"
              ],
              [
                "usted",
                "no hable / no coma / no viva",
                "→ No fume aquí, por favor."
              ],
              [
                "vosotros/as",
                "no habléis / no comáis / no viváis",
                "→ No habléis durante el examen."
              ],
              [
                "ustedes",
                "no hablen / no coman / no vivan",
                "→ No lleguen tarde."
              ]
            ]
          },
          {
            "type": "note",
            "text": "У заперечному наказовому способі займенники ставляться ПЕРЕД дієсловом (на відміну від стверджувального, де вони приєднуються до кінця): ¡No me lo digas!",
            "en": {
              "text": "In the negative imperative, pronouns go BEFORE the verb (unlike the affirmative, where they attach to the end): ¡No me lo digas!"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "¡No te preocupes!",
                "Не хвилюйся!"
              ],
              [
                "No lo hagas así.",
                "Не роби так."
              ],
              [
                "No me llames después de las diez.",
                "Не дзвони мені після десятої."
              ]
            ]
          }
        ],
        "titleEn": "Negative Imperative — A2"
      },
      {
        "id": "possessive-pronouns",
        "title": "Pronombres Posesivos — B1",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники (на відміну від прикметників) замінюють іменник повністю і зазвичай вживаються з артиклем: el mío, la tuya...",
            "en": {
              "text": "Possessive pronouns (unlike adjectives) replace the noun entirely and are usually used with an article: el mío, la tuya..."
            }
          },
          {
            "type": "table",
            "title": "Форми (чол. одн. / жін. одн.)",
            "rows": [
              [
                "el mío / la mía",
                "мій / моя"
              ],
              [
                "el tuyo / la tuya",
                "твій / твоя"
              ],
              [
                "el suyo / la suya",
                "його/її/Ваш"
              ],
              [
                "el nuestro / la nuestra",
                "наш/наша"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mi coche es azul, ¿y el tuyo?",
                "Моя машина синя, а твоя?"
              ],
              [
                "Esta mesa es la nuestra.",
                "Цей стіл наш."
              ],
              [
                "Sus ideas son mejores que las mías.",
                "Його/її ідеї кращі за мої."
              ]
            ]
          }
        ],
        "titleEn": "Possessive Pronouns — B1"
      },
      {
        "id": "absolute-superlative",
        "title": "Superlativo Absoluto (-ísimo) — B1",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Абсолютний найвищий ступінь виражає дуже високу міру якості без порівняння з кимось/чимось. Утворюється додаванням -ísimo/-ísima до основи прикметника.",
            "en": {
              "text": "The absolute superlative expresses a very high degree of a quality without comparing to anyone/anything else. Formed by adding -ísimo/-ísima to the adjective stem."
            }
          },
          {
            "type": "table",
            "title": "Приклади утворення",
            "rows": [
              [
                "alto → altísimo",
                "дуже високий"
              ],
              [
                "fácil → facilísimo",
                "дуже легкий"
              ],
              [
                "rico → riquísimo",
                "дуже смачний/багатий"
              ],
              [
                "largo → larguísimo",
                "дуже довгий"
              ]
            ]
          },
          {
            "type": "note",
            "text": "Так само можна сказати muy + прикметник (muy alto), але -ísimo звучить емоційніше й розмовніше.",
            "en": {
              "text": "You can also say muy + adjective (muy alto), but -ísimo sounds more emphatic and colloquial."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Esta película es buenísima.",
                "Цей фільм дуже хороший."
              ],
              [
                "Estoy cansadísimo hoy.",
                "Я сьогодні дуже втомлений."
              ],
              [
                "El examen fue dificilísimo.",
                "Іспит був дуже важким."
              ]
            ]
          }
        ],
        "titleEn": "Absolute Superlative (-Ísimo) — B1"
      },
      {
        "id": "estar-resultant-state",
        "title": "Estar + Participio (estado resultante) — A2",
        "emoji": "🔒",
        "sections": [
          {
            "type": "intro",
            "text": "Estar + дієприкметник минулого часу описує стан, що є результатом дії (а не саму дію). Дієприкметник тут узгоджується з підметом, як прикметник.",
            "en": {
              "text": "Estar + past participle describes a state that results from an action (not the action itself). Here the participle agrees with the subject like an adjective."
            }
          },
          {
            "type": "table",
            "title": "Порівняння: дія vs стан",
            "rows": [
              [
                "дія (пасив)",
                "La puerta es cerrada (por alguien).",
                "Двері зачиняються (кимось)."
              ],
              [
                "стан (результат)",
                "La puerta está cerrada.",
                "Двері зачинені."
              ],
              [
                "стан (результат)",
                "Las tiendas están abiertas.",
                "Магазини відчинені."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "La ventana está rota.",
                "Вікно розбите."
              ],
              [
                "Estamos cansados después del viaje.",
                "Ми втомлені після подорожі."
              ],
              [
                "El trabajo ya está terminado.",
                "Робота вже завершена."
              ]
            ]
          }
        ],
        "titleEn": "Estar + Participle (Resultant State) — A2"
      },
      {
        "id": "acabar-de",
        "title": "Acabar de + Infinitivo — A2",
        "emoji": "⏪",
        "sections": [
          {
            "type": "intro",
            "text": "Конструкція acabar de + інфінітив виражає дію, що відбулась щойно, буквально \"закінчити щойно робити щось\".",
            "en": {
              "text": "The construction acabar de + infinitive expresses an action that just happened, literally \"to just finish doing something\"."
            }
          },
          {
            "type": "formula",
            "title": "acabar + de + infinitivo",
            "rows": [
              [
                "yo",
                "acabo de",
                "→ Acabo de llegar."
              ],
              [
                "tú",
                "acabas de",
                "→ ¿Acabas de comer?"
              ],
              [
                "él/ella/usted",
                "acaba de",
                "→ Acaba de salir."
              ],
              [
                "nosotros/as",
                "acabamos de",
                "→ Acabamos de terminar."
              ]
            ],
            "en": {
              "title": "acabar + de + infinitive"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Acabo de recibir tu mensaje.",
                "Я щойно отримав твоє повідомлення."
              ],
              [
                "Acaban de mudarse.",
                "Вони щойно переїхали."
              ]
            ]
          }
        ],
        "titleEn": "Acabar De + Infinitive (To Have Just Done) — A2"
      },
      {
        "id": "volver-a",
        "title": "Volver a + Infinitivo — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Конструкція volver a + інфінітив означає повторення дії — \"знову зробити щось\".",
            "en": {
              "text": "The construction volver a + infinitive expresses repeating an action — \"to do something again\"."
            }
          },
          {
            "type": "formula",
            "title": "volver + a + infinitivo",
            "rows": [
              [
                "yo",
                "vuelvo a",
                "→ Vuelvo a intentarlo."
              ],
              [
                "tú",
                "vuelves a",
                "→ ¿Vuelves a llamarlo?"
              ],
              [
                "él/ella/usted",
                "vuelve a",
                "→ Vuelve a llover."
              ],
              [
                "nosotros/as",
                "volvemos a",
                "→ Volvemos a vernos pronto."
              ]
            ],
            "en": {
              "title": "volver + a + infinitive"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Volvió a leer la carta.",
                "Він перечитав листа знову."
              ],
              [
                "No vuelvas a hacerlo.",
                "Більше так не роби."
              ]
            ]
          }
        ],
        "titleEn": "Volver A + Infinitive (To Do Again) — B1"
      },
      {
        "id": "obligation-verbs",
        "title": "Hay que, Tener que, Deber — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Три способи виразити необхідність: hay que (безособове, загальне правило), tener que (особисте, конкретне зобов'язання), deber (порада/моральний обов'язок).",
            "en": {
              "text": "Three ways to express necessity: hay que (impersonal, general rule), tener que (personal, specific obligation), deber (advice/moral duty)."
            }
          },
          {
            "type": "table",
            "title": "Різниця",
            "rows": [
              [
                "hay que",
                "безособово",
                "Hay que estudiar para aprobar."
              ],
              [
                "tener que",
                "особисто",
                "Tengo que terminar este informe."
              ],
              [
                "deber",
                "порада",
                "Deberías dormir más."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hay que respetar las normas.",
                "Треба поважати правила."
              ],
              [
                "Tengo que ir al médico mañana.",
                "Мені треба піти до лікаря завтра."
              ],
              [
                "Debes pedir disculpas.",
                "Тобі слід вибачитись."
              ]
            ]
          }
        ],
        "titleEn": "Hay Que, Tener Que, Deber — A2"
      },
      {
        "id": "cual-vs-que",
        "title": "¿Cuál? vs ¿Qué? — B1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Qué запитує про визначення/тип (\"що це таке?\"), cuál — про вибір з-поміж варіантів (\"який саме?\"). Перед іменником зазвичай вживають qué.",
            "en": {
              "text": "Qué asks for a definition/type (\"what is it?\"), cuál asks for a choice among options (\"which one?\"). Before a noun, qué is usually used."
            }
          },
          {
            "type": "table",
            "title": "Порівняння",
            "rows": [
              [
                "¿Qué es esto?",
                "визначення",
                "Що це таке?"
              ],
              [
                "¿Cuál prefieres?",
                "вибір",
                "Який ти волієш?"
              ],
              [
                "¿Qué libro lees?",
                "перед іменником",
                "Яку книгу ти читаєш?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "¿Qué quieres comer?",
                "Що ти хочеш з'їсти?"
              ],
              [
                "¿Cuál es tu color favorito?",
                "Який твій улюблений колір?"
              ],
              [
                "¿Cuáles son tus planes?",
                "Які твої плани?"
              ]
            ]
          }
        ],
        "titleEn": "¿Cuál? vs ¿Qué? — B1"
      },
      {
        "id": "pero-sino",
        "title": "Pero vs Sino — B1",
        "emoji": "↔️",
        "sections": [
          {
            "type": "intro",
            "text": "Pero вживають у звичайному протиставленні. Sino вживають лише після заперечення, коли друга частина повністю заперечує/замінює першу (\"не..., а...\").",
            "en": {
              "text": "Pero is used for a regular contrast. Sino is used only after a negation, when the second part completely contradicts/replaces the first (\"not..., but...\")."
            }
          },
          {
            "type": "table",
            "title": "Порівняння",
            "rows": [
              [
                "pero",
                "звичайний контраст",
                "Es caro, pero bueno."
              ],
              [
                "sino",
                "після заперечення",
                "No es caro, sino barato."
              ],
              [
                "sino que",
                "перед дієсловом",
                "No estudia, sino que trabaja."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "No quiero té, sino café.",
                "Я хочу не чай, а каву."
              ],
              [
                "Es difícil, pero no imposible.",
                "Це важко, але не неможливо."
              ],
              [
                "No fue ella sino él quien llamó.",
                "Дзвонила не вона, а він."
              ]
            ]
          }
        ],
        "titleEn": "Pero vs Sino — B1"
      },
      {
        "id": "infinitive-gerund-verbs",
        "title": "Verbos + Infinitivo/Gerundio — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі дієслова вимагають після себе інфінітив, інші — герундій, залежно від значення.",
            "en": {
              "text": "Some verbs require an infinitive after them, others a gerund, depending on the meaning."
            }
          },
          {
            "type": "table",
            "title": "Типові приклади",
            "rows": [
              [
                "+ infinitivo",
                "querer, poder, decidir, soler",
                "Suelo levantarme temprano."
              ],
              [
                "+ gerundio",
                "seguir, llevar, continuar",
                "Sigue trabajando allí."
              ],
              [
                "+ ambos (різний зміст)",
                "empezar a / empezar + gerundio",
                "Empezó a llover. / Empezó cantando."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Suele llegar tarde.",
                "Він зазвичай приходить пізно."
              ],
              [
                "Lleva dos horas esperando.",
                "Він чекає вже дві години."
              ],
              [
                "Decidió cambiar de trabajo.",
                "Він вирішив змінити роботу."
              ]
            ]
          }
        ],
        "titleEn": "Verbs + Infinitive/Gerund — B2"
      },
      {
        "id": "impersonal-expressions",
        "title": "Expresiones Impersonales (hay, hace, es) — A2",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "intro",
            "text": "Безособові конструкції не мають конкретного підмета і вживаються лише в 3-й особі однини: hay (наявність), hace (погода), es (час, оцінка).",
            "en": {
              "text": "Impersonal constructions have no specific subject and are used only in the third person singular: hay (existence), hace (weather), es (time, evaluation)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "hay",
                "наявність",
                "Hay mucha gente aquí."
              ],
              [
                "hace + погода",
                "погода",
                "Hace frío hoy."
              ],
              [
                "es + час/оцінка",
                "час/оцінка",
                "Es importante estudiar."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hay un problema con el coche.",
                "Є проблема з машиною."
              ],
              [
                "Hace mucho calor en verano.",
                "Влітку дуже спекотно."
              ],
              [
                "Es necesario llegar a tiempo.",
                "Необхідно прийти вчасно."
              ]
            ]
          }
        ],
        "titleEn": "Impersonal Expressions (Hay, Hace, Es) — A2"
      },
      {
        "id": "reported-questions",
        "title": "Preguntas Indirectas — B1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "У непрямих питаннях порядок слів прямий (як у розповідному реченні), знаки питання не вживають. Питання з питальним словом зберігають його; питання без питального слова з'єднують через si.",
            "en": {
              "text": "In indirect questions, the word order is the normal statement order, and question marks are not used. Questions with a question word keep it; yes/no questions are joined with si."
            }
          },
          {
            "type": "table",
            "title": "Структура",
            "rows": [
              [
                "з питальним словом",
                "Me preguntó dónde vivía.",
                "Він запитав мене, де я живу."
              ],
              [
                "без питального слова",
                "Me preguntó si quería venir.",
                "Він запитав мене, чи хочу я прийти."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "\"¿Dónde vives?\" → Me preguntó dónde vivía.",
                "\"Де ти живеш?\" → Він запитав, де я живу."
              ],
              [
                "\"¿Tienes hambre?\" → Me preguntó si tenía hambre.",
                "\"Ти голодний?\" → Він запитав, чи я голодний."
              ]
            ]
          }
        ],
        "titleEn": "Indirect Questions — B1"
      },
      {
        "id": "become-verbs",
        "title": "Ponerse, Volverse, Hacerse, Llegar a ser — B2",
        "emoji": "🦋",
        "sections": [
          {
            "type": "intro",
            "text": "Іспанська не має одного дієслова \"ставати\" — вибір залежить від типу зміни: тимчасова емоція/вигляд, раптова й глибока зміна, зусилля/досягнення, чи поступовий процес.",
            "en": {
              "text": "Spanish has no single verb for \"to become\" — the choice depends on the type of change: temporary emotion/appearance, sudden deep change, effort/achievement, or a gradual process."
            }
          },
          {
            "type": "table",
            "title": "Вибір дієслова",
            "rows": [
              [
                "ponerse",
                "тимчасова емоція/стан",
                "Se puso nervioso."
              ],
              [
                "volverse",
                "раптова, тривала зміна",
                "Se volvió loco."
              ],
              [
                "hacerse",
                "зусилля, ідентичність",
                "Se hizo médico."
              ],
              [
                "llegar a ser",
                "поступовий, тривалий процес",
                "Llegó a ser presidente."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Me puse muy contento con la noticia.",
                "Я дуже зрадів цій новині."
              ],
              [
                "Se hizo rico trabajando duro.",
                "Він розбагатів, важко працюючи."
              ],
              [
                "Con los años, se volvió más paciente.",
                "З роками він став терплячішим."
              ]
            ]
          }
        ],
        "titleEn": "Ponerse, Volverse, Hacerse, Llegar A Ser — B2"
      }
    ]
  },
  {
    "id": "fluency",
    "title": "Вільне володіння",
    "titleEn": "Fluency",
    "emoji": "🎓",
    "rules": [
      {
        "id": "condicional-compuesto",
        "title": "Condicional Compuesto — B2",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Складений умовний спосіб — для нездійснених у минулому гіпотез (\"я б зробив, але...\"), а також у головній частині нереальних умовних речень минулого часу. Утворюється: haber у Condicional Simple + дієприкметник минулого часу.",
            "en": {
              "text": "The compound conditional — for unrealized past hypotheticals (\"I would have done, but...\"), and in the main clause of unreal past conditionals. Formed with haber in the Condicional Simple + past participle."
            }
          },
          {
            "type": "formula",
            "title": "haber (condicional) + participio",
            "rows": [
              [
                "yo",
                "habría hablado",
                "→ Habría llamado, pero no tenía tu número."
              ],
              [
                "tú",
                "habrías comido",
                "→ ¿Habrías comido eso?"
              ],
              [
                "él/ella/usted",
                "habría vivido",
                "→ Habría vivido allí si hubiera podido."
              ],
              [
                "nosotros/as",
                "habríamos trabajado",
                "→ Habríamos trabajado más rápido juntos."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Si hubiera sabido, te habría avisado.",
                "Якби я знав, я б тебе попередив."
              ],
              [
                "Yo no habría dicho eso.",
                "Я б такого не сказав."
              ],
              [
                "Habríamos llegado antes sin tráfico.",
                "Ми б прибули раніше без затору."
              ]
            ]
          }
        ],
        "titleEn": "Condicional Compuesto (Past Conditional) — B2"
      },
      {
        "id": "futuro-perfecto",
        "title": "Futuro Perfecto — B2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Передмайбутній час — для дії, яка завершиться до певного моменту в майбутньому, або для припущення про минуле. Утворюється: haber у Futuro Simple + дієприкметник минулого часу.",
            "en": {
              "text": "The future perfect — for an action that will be completed before a future point, or for a guess about the past. Formed with haber in the Futuro Simple + past participle."
            }
          },
          {
            "type": "formula",
            "title": "haber (futuro) + participio",
            "rows": [
              [
                "yo",
                "habré terminado",
                "→ Habré terminado antes de las seis."
              ],
              [
                "tú",
                "habrás llegado",
                "→ Para entonces ya habrás llegado."
              ],
              [
                "él/ella/usted",
                "habrá salido",
                "→ Ya habrá salido de casa."
              ]
            ]
          },
          {
            "type": "note",
            "text": "Часто вживають для висловлення припущення: ¿Dónde estará Juan? Habrá perdido el tren. (Мабуть, він спізнився на потяг.)",
            "en": {
              "text": "Often used to express a guess: ¿Dónde estará Juan? Habrá perdido el tren. (He probably missed the train.)"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Cuando llegues, ya habré terminado.",
                "Коли ти прийдеш, я вже закінчу."
              ],
              [
                "Habrá tenido sus motivos.",
                "Мабуть, у нього були свої причини."
              ]
            ]
          }
        ],
        "titleEn": "Futuro Perfecto (Future Perfect) — B2"
      },
      {
        "id": "tu-vs-usted",
        "title": "Tú vs Usted (formalidad) — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Tú вживають у неформальному спілкуванні (друзі, родина, ровесники), usted — у формальному (незнайомі люди, начальство, ввічливе звертання). Usted вживається з дієсловами 3-ї особи однини.",
            "en": {
              "text": "Tú is used informally (friends, family, peers), usted formally (strangers, superiors, polite address). Usted takes third-person singular verb forms."
            }
          },
          {
            "type": "table",
            "title": "Порівняння",
            "rows": [
              [
                "tú",
                "2-а ос. одн.",
                "¿Cómo estás?"
              ],
              [
                "usted",
                "3-я ос. одн. (формально)",
                "¿Cómo está usted?"
              ],
              [
                "ustedes",
                "3-я ос. мн. (мн. в Латинській Америці завжди)",
                "¿Cómo están ustedes?"
              ]
            ]
          },
          {
            "type": "note",
            "text": "У Латинській Америці vosotros практично не вживають — навіть у неформальному спілкуванні з кількома людьми використовують ustedes.",
            "en": {
              "text": "In Latin America, vosotros is practically never used — even in informal speech with several people, ustedes is used instead."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "¿Tienes hermanos? (informal)",
                "У тебе є брати чи сестри?"
              ],
              [
                "¿Tiene usted hermanos? (formal)",
                "У Вас є брати чи сестри?"
              ]
            ]
          }
        ],
        "titleEn": "Tú vs Usted (Formality) — A2"
      },
      {
        "id": "lo-neutro",
        "title": "El Artículo Neutro \"Lo\" — B1",
        "emoji": "◾",
        "sections": [
          {
            "type": "intro",
            "text": "Нейтральний артикль lo + прикметник перетворює прикметник на абстрактний іменник (\"те, що є...\"). Не плутати із займенником lo (прямий додаток \"його/це\").",
            "en": {
              "text": "The neutral article lo + adjective turns the adjective into an abstract noun (\"that which is...\"). Not to be confused with the pronoun lo (direct object \"him/it\")."
            }
          },
          {
            "type": "formula",
            "title": "lo + прикметник",
            "rows": [
              [
                "lo + bueno",
                "те хороше, що...",
                "→ Lo bueno es que aprendiste."
              ],
              [
                "lo + importante",
                "те важливе, що...",
                "→ Lo importante es intentarlo."
              ],
              [
                "lo + difícil",
                "те складне, що...",
                "→ Lo difícil fue empezar."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Lo malo es que llegamos tarde.",
                "Погано те, що ми спізнились."
              ],
              [
                "No entiendo lo que dices.",
                "Я не розумію того, що ти кажеш."
              ],
              [
                "Eso es lo mejor de mi día.",
                "Це найкраще, що сталось за мій день."
              ]
            ]
          }
        ],
        "titleEn": "The Neutral Article \"Lo\" — B1"
      },
      {
        "id": "cuyo",
        "title": "Pronombre Relativo \"Cuyo\" — B2",
        "emoji": "🧵",
        "sections": [
          {
            "type": "intro",
            "text": "Cuyo/a/os/as (\"чий, якого\") — присвійний відносний займенник; узгоджується з іменником, що йде ПІСЛЯ нього (тобто з предметом володіння), а не з власником.",
            "en": {
              "text": "Cuyo/a/os/as (\"whose\") is a possessive relative pronoun; it agrees with the noun that follows it (i.e. the thing owned), not with the owner."
            }
          },
          {
            "type": "table",
            "title": "Форми",
            "rows": [
              [
                "cuyo / cuyos",
                "чий (чол. одн./мн.)"
              ],
              [
                "cuya / cuyas",
                "чий (жін. одн./мн.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "El autor cuyo libro leí es famoso.",
                "Автор, чию книгу я читав, відомий."
              ],
              [
                "La mujer cuya casa visitamos es médica.",
                "Жінка, чий будинок ми відвідали, лікарка."
              ]
            ]
          }
        ],
        "titleEn": "The Relative Pronoun \"Cuyo\" (Whose) — B2"
      },
      {
        "id": "causative-hacer-dejar",
        "title": "Hacer/Dejar + Infinitivo — B2",
        "emoji": "🎬",
        "sections": [
          {
            "type": "intro",
            "text": "Hacer + інфінітив означає \"змусити/спричинити, щоб щось сталося\", dejar + інфінітив — \"дозволити, щоб щось сталося\".",
            "en": {
              "text": "Hacer + infinitive means \"to make/cause something to happen\", dejar + infinitive means \"to let/allow something to happen\"."
            }
          },
          {
            "type": "table",
            "title": "Порівняння",
            "rows": [
              [
                "hacer + inf.",
                "примушувати/спричиняти",
                "Me hizo reír mucho."
              ],
              [
                "dejar + inf.",
                "дозволяти",
                "Mis padres me dejan salir."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Esta película me hizo llorar.",
                "Цей фільм змусив мене плакати."
              ],
              [
                "No me dejaron entrar sin entrada.",
                "Мене не пустили без квитка."
              ],
              [
                "Hizo reparar el coche.",
                "Він наказав полагодити машину."
              ]
            ]
          }
        ],
        "titleEn": "Hacer/Dejar + Infinitive (Causative) — B2"
      },
      {
        "id": "ya-todavia",
        "title": "Ya, Todavía, Todavía no — A2",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Ya означає \"вже\", todavía — \"ще\" (у стверджувальних реченнях), todavía no — \"ще не\" (у заперечних).",
            "en": {
              "text": "Ya means \"already\", todavía means \"still\" (in affirmative sentences), todavía no means \"not yet\" (in negative ones)."
            }
          },
          {
            "type": "table",
            "title": "Вживання",
            "rows": [
              [
                "ya",
                "вже",
                "Ya he comido."
              ],
              [
                "todavía",
                "ще",
                "Todavía vive en Madrid."
              ],
              [
                "todavía no",
                "ще не",
                "Todavía no he terminado."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "¿Ya has llegado?",
                "Ти вже прийшов?"
              ],
              [
                "Todavía estoy trabajando.",
                "Я ще працюю."
              ],
              [
                "Todavía no sé la respuesta.",
                "Я ще не знаю відповіді."
              ]
            ]
          }
        ],
        "titleEn": "Ya, Todavía, Todavía No — A2"
      },
      {
        "id": "tan-tanto",
        "title": "Tan vs Tanto — B1",
        "emoji": "📏",
        "sections": [
          {
            "type": "intro",
            "text": "Tan вживають перед прикметниками й прислівниками (\"так, такий\"), tanto/a(s) — перед іменниками (\"стільки\") і узгоджується з ними в роді й числі.",
            "en": {
              "text": "Tan is used before adjectives and adverbs (\"so, such\"), tanto/a(s) before nouns (\"so much/many\") and agrees with them in gender and number."
            }
          },
          {
            "type": "table",
            "title": "Порівняння",
            "rows": [
              [
                "tan + прикм./присл.",
                "так, такий",
                "Es tan alto."
              ],
              [
                "tanto/a + ім.",
                "стільки",
                "Tiene tanta paciencia."
              ],
              [
                "tantos/as + ім. мн.",
                "стільки (мн.)",
                "Hay tantos libros aquí."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "No sabía que eras tan simpático.",
                "Я не знав, що ти такий приємний."
              ],
              [
                "Tengo tanto trabajo esta semana.",
                "У мене стільки роботи цього тижня."
              ],
              [
                "Nunca había visto tanta gente.",
                "Я ніколи не бачив стільки людей."
              ]
            ]
          }
        ],
        "titleEn": "Tan vs Tanto (As...As) — B1"
      },
      {
        "id": "adjective-position",
        "title": "Posición del Adjetivo — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Більшість прикметників стоять після іменника, але деякі змінюють значення залежно від позиції — перед іменником вони набувають переносного/суб'єктивного значення.",
            "en": {
              "text": "Most adjectives come after the noun, but some change meaning depending on position — before the noun they take on a figurative/subjective sense."
            }
          },
          {
            "type": "table",
            "title": "Зміна значення",
            "rows": [
              [
                "un amigo viejo",
                "старий за віком друг",
                "un viejo amigo",
                "давній (по дружбі) друг"
              ],
              [
                "un hombre grande",
                "фізично великий чоловік",
                "un gran hombre",
                "видатна людина"
              ],
              [
                "una mujer pobre",
                "небагата жінка",
                "una pobre mujer",
                "бідолашна жінка"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Es un gran escritor.",
                "Він видатний письменник."
              ],
              [
                "Tiene un coche grande.",
                "У нього велика машина."
              ],
              [
                "Es una pobre niña sin familia.",
                "Це бідолашна дитина без родини."
              ]
            ]
          }
        ],
        "titleEn": "Adjective Position — B2"
      },
      {
        "id": "prepositions-extra",
        "title": "Preposiciones: Sobre, Entre, Hacia, Desde — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Чотири додаткові прийменники місця й напрямку, що часто плутають: sobre (на/про), entre (між), hacia (у напрямку), desde (з/від).",
            "en": {
              "text": "Four additional prepositions of place/direction that are often confused: sobre (on/about), entre (between), hacia (towards), desde (from/since)."
            }
          },
          {
            "type": "table",
            "title": "Вживання",
            "rows": [
              [
                "sobre",
                "на/про",
                "El libro está sobre la mesa."
              ],
              [
                "entre",
                "між",
                "Está entre la silla y la puerta."
              ],
              [
                "hacia",
                "у напрямку",
                "Caminamos hacia el parque."
              ],
              [
                "desde",
                "з/від (місце/час)",
                "Desde aquí se ve el mar."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hablamos sobre el proyecto.",
                "Ми говорили про проєкт."
              ],
              [
                "El pueblo está entre dos montañas.",
                "Село між двома горами."
              ],
              [
                "Vamos hacia el centro.",
                "Ми йдемо в напрямку центру."
              ]
            ]
          }
        ],
        "titleEn": "Prepositions: Sobre, Entre, Hacia, Desde — A2"
      },
      {
        "id": "lo-que-cleft",
        "title": "\"Lo que\" (oraciones enfáticas) — B2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Конструкція lo que + дієслово... es/era... вживається для підкреслення певної частини речення (виокремлювальна конструкція).",
            "en": {
              "text": "The construction lo que + verb... es/era... is used to emphasize a particular part of a sentence (a cleft construction)."
            }
          },
          {
            "type": "formula",
            "title": "Структура",
            "rows": [
              [
                "",
                "Lo que + речення + es/era + ...",
                "→ Lo que necesito es tiempo."
              ]
            ],
            "en": {
              "title": "Structure"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Lo que más me gusta es viajar.",
                "Те, що мені найбільше подобається, — це подорожувати."
              ],
              [
                "Lo que quiero decir es que tienes razón.",
                "Те, що я хочу сказати, — це що ти маєш рацію."
              ]
            ]
          }
        ],
        "titleEn": "\"Lo Que\" (Cleft Sentences) — B2"
      },
      {
        "id": "large-numbers",
        "title": "Números Cardinales Grandes — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Cien(to) узгоджується перед іменником (cien casas), а зі складеними числами вживають ciento (ciento veinte). Mil ніколи не вживають з un (mil, а не un mil).",
            "en": {
              "text": "Cien(to) shortens before a noun (cien casas), while compound numbers use ciento (ciento veinte). Mil is never used with un (mil, not un mil)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "100",
                "cien",
                "1 000",
                "mil"
              ],
              [
                "101",
                "ciento uno",
                "1 000 000",
                "un millón"
              ],
              [
                "200",
                "doscientos",
                "2 000 000",
                "dos millones"
              ]
            ]
          },
          {
            "type": "note",
            "text": "Сотні від 200 узгоджуються в роді з іменником: doscientas personas, quinientos euros.",
            "en": {
              "text": "Hundreds from 200 onwards agree in gender with the noun: doscientas personas, quinientos euros."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Cuesta cien euros.",
                "Це коштує сто євро."
              ],
              [
                "Había quinientas personas en el concierto.",
                "На концерті було п'ятсот людей."
              ],
              [
                "La ciudad tiene un millón de habitantes.",
                "Місто має мільйон жителів."
              ]
            ]
          }
        ],
        "titleEn": "Large Cardinal Numbers — A2"
      },
      {
        "id": "reflexive-emphatic",
        "title": "Pronombres Reflexivos Enfáticos (a mí mismo) — B2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Mismo/a(s) додають до займенників для підсилення зворотності дії — \"сам собі/сам себе\".",
            "en": {
              "text": "Mismo/a(s) is added to pronouns to emphasize the reflexive nature of the action — \"myself/yourself\", emphatically."
            }
          },
          {
            "type": "table",
            "title": "Форми",
            "rows": [
              [
                "a mí mismo/a",
                "самому собі/себе"
              ],
              [
                "a ti mismo/a",
                "самому собі/себе (ти)"
              ],
              [
                "a sí mismo/a",
                "самому собі/себе (він/вона/Ви)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Me hablo a mí mismo cuando estoy nervioso.",
                "Я говорю сам із собою, коли нервую."
              ],
              [
                "Se exige demasiado a sí mismo.",
                "Він вимагає від себе занадто багато."
              ]
            ]
          }
        ],
        "titleEn": "Emphatic Reflexive Pronouns — B2"
      },
      {
        "id": "subjuntivo-con-ojala",
        "title": "Ojalá + Subjuntivo (deseos) — B1",
        "emoji": "🌠",
        "sections": [
          {
            "type": "intro",
            "text": "Ojalá (que) виражає сильне бажання й завжди вимагає subjuntivo. Presente de subjuntivo — для здійсненних бажань, imperfecto de subjuntivo — для малоймовірних/нереальних.",
            "en": {
              "text": "Ojalá (que) expresses a strong wish and always requires the subjunctive. Presente de subjuntivo for achievable wishes, imperfecto de subjuntivo for unlikely/unreal ones."
            }
          },
          {
            "type": "table",
            "title": "Вживання",
            "rows": [
              [
                "ojalá + presente subj.",
                "здійсненне бажання",
                "Ojalá apruebe el examen."
              ],
              [
                "ojalá + imperfecto subj.",
                "малоймовірне бажання",
                "Ojalá tuviera más tiempo."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "¡Ojalá llueva pronto!",
                "Якби тільки скоро пішов дощ!"
              ],
              [
                "¡Ojalá pudiera viajar más!",
                "Якби ж я міг подорожувати більше!"
              ]
            ]
          }
        ],
        "titleEn": "Ojalá + Subjunctive (Wishes) — B1"
      },
      {
        "id": "acentuacion",
        "title": "Reglas de Acentuación — A2",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "Слова без написаного наголосу мають передбачуваний наголос за правилами; письмовий наголос (tilde) ставлять, коли слово порушує ці правила.",
            "en": {
              "text": "Words without a written accent follow predictable stress rules; the written accent (tilde) is added when a word breaks these rules."
            }
          },
          {
            "type": "table",
            "title": "Правила",
            "rows": [
              [
                "закінчення на голосну/n/s",
                "наголос на передостанньому складі",
                "casa, hablan, libros"
              ],
              [
                "закінчення на приголосну (не n/s)",
                "наголос на останньому складі",
                "hablar, ciudad"
              ],
              [
                "виняток із правила",
                "потрібна tilde",
                "café, jardín, fácil"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "música, médico, rápido",
                "esdrújulas — завжди з tilde"
              ],
              [
                "¿Qué? ¿Cómo? ¿Dónde?",
                "питальні слова завжди з tilde"
              ],
              [
                "él (він) vs el (артикль)",
                "tilde розрізняє значення (tilde diacrítica)"
              ]
            ]
          }
        ],
        "titleEn": "Accent Rules — A2"
      }
    ]
  }
];
