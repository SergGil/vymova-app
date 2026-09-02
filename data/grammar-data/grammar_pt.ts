// Vymova — data/grammar-data/grammar_pt.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_PT: GrammarCategory[] = [
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
            "text": "У португальській є два дієслова \"бути\" — ser та estar. Ser використовують для постійних характеристик, estar — для тимчасових станів і місцезнаходження.",
            "en": {
              "text": "Portuguese has two verbs for \"to be\" — ser and estar. Ser is for permanent characteristics, estar is for temporary states and location."
            }
          },
          {
            "type": "formula",
            "title": "Дієвідмінювання (теперішній час)",
            "rows": [
              [
                "eu",
                "sou",
                "estou"
              ],
              [
                "tu",
                "és",
                "estás"
              ],
              [
                "ele / ela",
                "é",
                "está"
              ],
              [
                "nós",
                "somos",
                "estamos"
              ],
              [
                "vós",
                "sois",
                "estais"
              ],
              [
                "eles / elas",
                "são",
                "estão"
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
                "Sou professor.",
                "Я (є) вчитель. (постійна риса)"
              ],
              [
                "Estou cansado.",
                "Я втомлений. (тимчасовий стан)"
              ],
              [
                "Lisboa está em Portugal.",
                "Лісабон у Португалії. (місце)"
              ],
              [
                "Ela é alta.",
                "Вона висока. (характеристика)"
              ]
            ]
          }
        ]
      },
      {
        "id": "gender-nouns",
        "title": "Рід іменників — A1",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Усі іменники в португальській мають рід — чоловічий або жіночий. Артикль узгоджується з родом і числом іменника.",
            "en": {
              "text": "All Portuguese nouns have a gender — masculine or feminine. The article agrees with the noun in gender and number."
            }
          },
          {
            "type": "table",
            "title": "Типові закінчення та артиклі",
            "rows": [
              [
                "-o → чоловічий",
                "o livro (книга)",
                "os livros (книги)"
              ],
              [
                "-a → жіночий",
                "a casa (дім)",
                "as casas (дома)"
              ],
              [
                "неозначений артикль",
                "um / uns",
                "uma / umas"
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
                "O livro é interessante.",
                "Книга цікава."
              ],
              [
                "A casa é grande.",
                "Дім великий."
              ],
              [
                "Os livros são novos.",
                "Книги нові."
              ],
              [
                "Tenho uma maçã.",
                "У мене є яблуко."
              ]
            ]
          }
        ]
      },
      {
        "id": "articles",
        "title": "Artigos Definidos e Indefinidos — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль (o/a/os/as) вказує на конкретний предмет, неозначений (um/uma/uns/umas) — на будь-який. Узгоджується з родом і числом іменника.",
            "en": {
              "text": "The definite article (o/a/os/as) points to a specific thing, the indefinite (um/uma/uns/umas) to any one. It agrees with the noun's gender and number."
            }
          },
          {
            "type": "table",
            "title": "Артиклі",
            "rows": [
              [
                "o livro / os livros",
                "чол. книга / книги"
              ],
              [
                "a casa / as casas",
                "жін. дім / доми"
              ],
              [
                "um livro / uma casa",
                "неозн. книга / дім"
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
                "O gato dorme.",
                "Кіт спить."
              ],
              [
                "Tenho um cão.",
                "У мене є пес."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-nouns",
        "title": "Plural dos Substantivos — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина зазвичай утворюється додаванням -s; слова на -ão мають кілька варіантів множини (-ões, -ães, -ãos).",
            "en": {
              "text": "The plural is usually formed by adding -s; words ending in -ão have several possible plural forms (-ões, -ães, -ãos)."
            }
          },
          {
            "type": "table",
            "title": "Однина → множина",
            "rows": [
              [
                "livro → livros",
                "книга → книги"
              ],
              [
                "casa → casas",
                "дім → доми"
              ],
              [
                "pão → pães",
                "хліб → хліби"
              ],
              [
                "mão → mãos",
                "рука → руки"
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
                "Os livros são novos.",
                "Книги нові."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjectives",
        "title": "Adjetivos — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник узгоджується з іменником у роді й числі та зазвичай стоїть після нього.",
            "en": {
              "text": "An adjective agrees with the noun in gender and number and usually follows it."
            }
          },
          {
            "type": "table",
            "title": "bonito (гарний) — узгодження",
            "rows": [
              [
                "um carro bonito",
                "гарна машина"
              ],
              [
                "uma casa bonita",
                "гарний дім"
              ],
              [
                "carros bonitos / casas bonitas",
                "гарні машини / доми"
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
                "Tenho um carro vermelho.",
                "У мене червона машина."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessives",
        "title": "Adjetivos Possessivos — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні прикметники узгоджуються з іменником, який вони визначають, а не з володарем.",
            "en": {
              "text": "Possessive adjectives agree with the noun they modify, not with the owner."
            }
          },
          {
            "type": "table",
            "title": "meu / minha (мій/моя)",
            "rows": [
              [
                "o meu livro / a minha casa",
                "моя книга / мій дім"
              ],
              [
                "o teu livro / a tua casa",
                "твоя книга / твій дім"
              ],
              [
                "o seu livro / a sua casa",
                "його/її/ваша книга / дім"
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
                "A minha mãe trabalha aqui.",
                "Моя мама тут працює."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstratives",
        "title": "Demonstrativos (Este/Esse/Aquele) — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Три ступені відстані: este (біля мовця), esse (біля співрозмовника), aquele (далеко від обох).",
            "en": {
              "text": "Three degrees of distance: este (near the speaker), esse (near the listener), aquele (far from both)."
            }
          },
          {
            "type": "table",
            "title": "este / esse / aquele",
            "rows": [
              [
                "este livro (тут, у мене)",
                "ця книга"
              ],
              [
                "esse livro (у тебе)",
                "та книга"
              ],
              [
                "aquele livro (там, далеко)",
                "он та книга"
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
                "Aquela casa é antiga.",
                "Он той дім старий."
              ]
            ]
          }
        ]
      },
      {
        "id": "question-words",
        "title": "Palavras Interrogativas — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова стоять на початку речення.",
            "en": {
              "text": "Question words go at the start of the sentence."
            }
          },
          {
            "type": "markers",
            "title": "Питальні слова",
            "items": [
              "quem? (хто?)",
              "o que? (що?)",
              "onde? (де?)",
              "quando? (коли?)",
              "porquê? (чому?)",
              "como? (як?)",
              "quanto? (скільки?)"
            ],
            "en": {
              "title": "Question words"
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
                "Onde moras?",
                "Де ти живеш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "negation",
        "title": "Negação — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою não перед дієсловом; для підсилення додають другий заперечний елемент після дієслова.",
            "en": {
              "text": "Negation is formed with não before the verb; for emphasis a second negative element is added after the verb."
            }
          },
          {
            "type": "table",
            "title": "não + дієслово",
            "rows": [
              [
                "Não percebo.",
                "Я не розумію."
              ],
              [
                "Não tenho nada.",
                "У мене нічого немає."
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
                "Não sei.",
                "Я не знаю."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-verbs",
        "title": "Verbos Reflexivos — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотні дієслова мають зворотний займенник (me/te/se/nos/vos/se), що узгоджується з підметом.",
            "en": {
              "text": "Reflexive verbs take a reflexive pronoun (me/te/se/nos/vos/se) that agrees with the subject."
            }
          },
          {
            "type": "formula",
            "title": "levantar-se (вставати)",
            "rows": [
              [
                "✅ (+)",
                "eu",
                "levanto-me",
                "→ Levanto-me às 7."
              ],
              [
                "✅ (+)",
                "tu",
                "levantas-te",
                "→ Levantas-te tarde."
              ],
              [
                "✅ (+)",
                "ele/ela",
                "levanta-se",
                "→ Levanta-se cedo."
              ]
            ],
            "en": {
              "title": "levantar-se (to get up)"
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
                "Lavo-me de manhã.",
                "Я вмиваюсь вранці."
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "tenses",
    "title": "Часи дієслів",
    "titleEn": "Tenses",
    "emoji": "🕐",
    "rules": [
      {
        "id": "present-regular",
        "title": "Presente do Indicativo (Verbos Regulares) — A1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Правильні дієслова мають три дієвідміни: -ar, -er, -ir — кожна зі своїм набором закінчень.",
            "en": {
              "text": "Regular verbs have three conjugations: -ar, -er, -ir — each with its own set of endings."
            }
          },
          {
            "type": "table",
            "title": "falar / comer / abrir",
            "rows": [
              [
                "eu",
                "falo",
                "como / abro"
              ],
              [
                "tu",
                "falas",
                "comes / abres"
              ],
              [
                "ele/ela",
                "fala",
                "come / abre"
              ],
              [
                "nós",
                "falamos",
                "comemos / abrimos"
              ],
              [
                "vós",
                "falais",
                "comeis / abris"
              ],
              [
                "eles/elas",
                "falam",
                "comem / abrem"
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
                "Falo português.",
                "Я розмовляю португальською."
              ]
            ]
          }
        ]
      },
      {
        "id": "preterito-perfeito",
        "title": "Pretérito Perfeito — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Виражає завершену минулу дію (аналог Past Simple), утворюється простою відмінюваною формою (без допоміжного дієслова, на відміну від іспанської/італійської).",
            "en": {
              "text": "Expresses a completed past action (like Past Simple); it's a simple conjugated form (no auxiliary verb, unlike Spanish/Italian)."
            }
          },
          {
            "type": "formula",
            "title": "falar → Pretérito Perfeito",
            "rows": [
              [
                "✅ (+)",
                "eu",
                "falei",
                "→ Falei com ele."
              ],
              [
                "✅ (+)",
                "tu",
                "falaste",
                "→ Falaste bem?"
              ],
              [
                "✅ (+)",
                "ele/ela",
                "falou",
                "→ Falou muito."
              ]
            ],
            "en": {
              "title": "falar → Preterite"
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
                "Ontem fui ao trabalho.",
                "Вчора я пішов(ла) на роботу."
              ]
            ]
          }
        ]
      },
      {
        "id": "preterito-imperfeito",
        "title": "Pretérito Imperfeito — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Виражає тривалу або звичну дію в минулому (аналог used to / Past Continuous).",
            "en": {
              "text": "Expresses an ongoing or habitual past action (like used to / Past Continuous)."
            }
          },
          {
            "type": "formula",
            "title": "falar → Imperfeito",
            "rows": [
              [
                "✅ (+)",
                "eu",
                "falava",
                "→ Falava com ela todos os dias."
              ],
              [
                "✅ (+)",
                "tu",
                "falavas",
                "→ Falavas português em criança."
              ]
            ],
            "en": {
              "title": "falar → Imperfect"
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
                "Quando era criança, jogava futebol.",
                "Коли я був дитиною, я грав(ла) у футбол."
              ]
            ]
          }
        ]
      },
      {
        "id": "futuro-simples",
        "title": "Futuro do Presente (Simples) — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Простий майбутній час, утворений додаванням закінчень безпосередньо до інфінітива.",
            "en": {
              "text": "The simple future, formed by adding endings directly to the infinitive."
            }
          },
          {
            "type": "formula",
            "title": "falar → Futuro",
            "rows": [
              [
                "✅ (+)",
                "eu",
                "falarei",
                "→ Falarei contigo amanhã."
              ],
              [
                "✅ (+)",
                "tu",
                "falarás",
                "→ Falarás com ele?"
              ]
            ],
            "en": {
              "title": "falar → Future"
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
                "Amanhã irei a Lisboa.",
                "Завтра я поїду до Лісабона."
              ]
            ]
          }
        ]
      },
      {
        "id": "present-continuous",
        "title": "Presente Contínuo (Estar a / Estar + Gerúndio) — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія «просто зараз»: у Португалії — estar a + infinitivo, у Бразилії — estar + gerúndio.",
            "en": {
              "text": "An action happening right now: in Portugal, estar a + infinitive; in Brazil, estar + gerund."
            }
          },
          {
            "type": "table",
            "title": "estar a / estar + gerúndio",
            "rows": [
              [
                "Estou a falar. (PT)",
                "Я зараз говорю."
              ],
              [
                "Estou falando. (BR)",
                "Я зараз говорю."
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
                "Estou a estudar português.",
                "Я зараз вивчаю португальську."
              ]
            ]
          }
        ]
      },
      {
        "id": "mais-que-perfeito",
        "title": "Pretérito Mais-que-Perfeito — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Виражає дію, що відбулася раніше за іншу минулу подію (Past Perfect). У розмовній мові частіше вживають складену форму з ter.",
            "en": {
              "text": "Expresses an action that happened before another past event (Past Perfect). In speech, the compound form with ter is more common."
            }
          },
          {
            "type": "formula",
            "title": "tinha + particípio",
            "rows": [
              [
                "✅ (+)",
                "eu",
                "tinha falado",
                "→ Já tinha saído."
              ],
              [
                "✅ (+)",
                "tu",
                "tinhas falado",
                "→ Já tinhas comido."
              ]
            ],
            "en": {
              "title": "tinha + participle"
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
                "Quando cheguei, ele já tinha saído.",
                "Коли я прибув, він уже пішов."
              ]
            ]
          }
        ]
      },
      {
        "id": "futuro-composto",
        "title": "Futuro Composto (Ir + Infinitivo) — A1",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "У розмовній мові майбутнє частіше виражають ir (у теперішньому часі) + інфінітив, аналог «going to».",
            "en": {
              "text": "In spoken language, the future is more often expressed with ir (in the present) + infinitive, like 'going to'."
            }
          },
          {
            "type": "table",
            "title": "ir + infinitivo",
            "rows": [
              [
                "Vou falar com ele.",
                "Я збираюся поговорити з ним."
              ],
              [
                "Vamos viajar amanhã.",
                "Ми поїдемо завтра."
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
                "Vou comer agora.",
                "Я зараз буду їсти."
              ]
            ]
          }
        ]
      },
      {
        "id": "condicional-simples",
        "title": "Futuro do Pretérito (Condicional) — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб виражає бажання, ввічливу пропозицію або гіпотетичну дію (аналог would). Утворюється так само, як Futuro, з іншими закінченнями.",
            "en": {
              "text": "The conditional expresses a wish, polite suggestion, or hypothetical action (like 'would'). Formed like the Future but with different endings."
            }
          },
          {
            "type": "formula",
            "title": "falar → Condicional",
            "rows": [
              [
                "✅ (+)",
                "eu",
                "falaria",
                "→ Gostaria de um café."
              ],
              [
                "✅ (+)",
                "tu",
                "falarias",
                "→ Poderias ajudar-me?"
              ]
            ],
            "en": {
              "title": "falar → Conditional"
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
                "Gostaria de viajar mais.",
                "Мені хотілося б більше подорожувати."
              ]
            ]
          }
        ]
      },
      {
        "id": "presente-subjuntivo",
        "title": "Presente do Conjuntivo — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Кон'юнктив вживають після дієслів бажання, сумніву, емоції (quero que, espero que, duvido que...), коли підмети головного й підрядного речень різні.",
            "en": {
              "text": "The subjunctive is used after verbs of wish, doubt, emotion (quero que, espero que, duvido que...) when the main and subordinate subjects differ."
            }
          },
          {
            "type": "formula",
            "title": "que eu fale",
            "rows": [
              [
                "✅ (+)",
                "que eu",
                "fale",
                "→ Quero que fales comigo."
              ],
              [
                "✅ (+)",
                "que ele/ela",
                "fale",
                "→ Espero que esteja bem."
              ]
            ],
            "en": {
              "title": "que eu fale (that I speak)"
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
                "Espero que corra tudo bem.",
                "Сподіваюсь, усе піде добре."
              ]
            ]
          }
        ]
      },
      {
        "id": "futuro-subjuntivo",
        "title": "Futuro do Conjuntivo — B2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса португальської — окремий майбутній кон'юнктив, що вживається після se (якщо), quando (коли), enquanto (поки) для майбутніх/гіпотетичних умов.",
            "en": {
              "text": "A unique Portuguese feature — a distinct future subjunctive, used after se (if), quando (when), enquanto (while) for future/hypothetical conditions."
            }
          },
          {
            "type": "table",
            "title": "se/quando + Futuro do Conjuntivo",
            "rows": [
              [
                "Se eu tiver tempo, vou.",
                "Якщо в мене буде час, я піду."
              ],
              [
                "Quando chegares, liga-me.",
                "Коли ти приїдеш, зателефонуй мені."
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
                "Se puderes, ajuda-me.",
                "Якщо зможеш, допоможи мені."
              ]
            ]
          }
        ]
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
        "id": "gostar-de",
        "title": "Verbo Gostar (de) — A2",
        "emoji": "❤️",
        "sections": [
          {
            "type": "intro",
            "text": "Gostar (подобатися/любити) завжди вимагає прийменника de перед додатком, на відміну від дослівного перекладу.",
            "en": {
              "text": "Gostar (to like) always requires the preposition de before its object, unlike the literal translation."
            }
          },
          {
            "type": "table",
            "title": "gostar de",
            "rows": [
              [
                "Gosto de café.",
                "Мені подобається кава."
              ],
              [
                "Gostas de viajar?",
                "Тобі подобається подорожувати?"
              ],
              [
                "Gostamos muito de ti.",
                "Ти нам дуже подобаєшся."
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
                "Não gosto de peixe.",
                "Мені не подобається риба."
              ]
            ]
          }
        ]
      },
      {
        "id": "por-para",
        "title": "Por vs Para — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Por (через/заради/за) вказує причину, обмін, шлях; para (для/до) — мету, призначення, напрям.",
            "en": {
              "text": "Por (for/because of/through) marks cause, exchange, path; para (for/to) marks purpose, destination, direction."
            }
          },
          {
            "type": "table",
            "title": "por / para",
            "rows": [
              [
                "Obrigado por tudo.",
                "Дякую за все. (причина)"
              ],
              [
                "Isto é para ti.",
                "Це для тебе. (мета)"
              ],
              [
                "Vou para Lisboa.",
                "Я їду до Лісабона. (напрям)"
              ],
              [
                "Paguei dez euros por isto.",
                "Я заплатив десять євро за це. (обмін)"
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
                "Trabalho para uma empresa alemã.",
                "Я працюю на німецьку компанію."
              ]
            ]
          }
        ]
      },
      {
        "id": "direct-object-pronouns",
        "title": "Pronomes de Objeto Direto — A2",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Прямі займенники (me, te, o, a, nos, vos, os, as) заміняють прямий додаток.",
            "en": {
              "text": "Direct object pronouns (me, te, o, a, nos, vos, os, as) replace a direct object."
            }
          },
          {
            "type": "table",
            "title": "Прямі займенники",
            "rows": [
              [
                "Vejo-o.",
                "Я його бачу."
              ],
              [
                "Vejo-a.",
                "Я її бачу."
              ],
              [
                "Vejo-os/as.",
                "Я їх бачу."
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
                "Amo-te.",
                "Я тебе люблю."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative-affirmative",
        "title": "Imperativo Afirmativo — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб має свої форми для tu/vós; формальні você/vocês позичають форми з кон'юнктива.",
            "en": {
              "text": "The imperative has its own forms for tu/vós; the formal você/vocês borrow forms from the subjunctive."
            }
          },
          {
            "type": "formula",
            "title": "falar — imperativo",
            "rows": [
              [
                "✅ (+)",
                "tu",
                "fala!",
                "→ Fala mais alto!"
              ],
              [
                "✅ (+)",
                "você",
                "fale!",
                "→ Fale devagar!"
              ],
              [
                "✅ (+)",
                "vós",
                "falai!",
                "→ Falai comigo!"
              ]
            ],
            "en": {
              "title": "falar — imperative"
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
                "Vem cá!",
                "Іди сюди!"
              ]
            ]
          }
        ]
      },
      {
        "id": "comparatives",
        "title": "Comparativos e Superlativos — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь: mais/menos + прикметник + do que; найвищий: o mais/o menos + прикметник.",
            "en": {
              "text": "The comparative: mais/menos + adjective + do que; the superlative: o mais/o menos + adjective."
            }
          },
          {
            "type": "table",
            "title": "Ступені порівняння",
            "rows": [
              [
                "mais alto do que ele",
                "вищий за нього"
              ],
              [
                "menos caro do que aquele",
                "дешевший за той"
              ],
              [
                "o mais inteligente da turma",
                "найрозумніший у класі"
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
                "Lisboa é maior do que o Porto.",
                "Лісабон більший за Порту."
              ]
            ]
          }
        ]
      },
      {
        "id": "indirect-object-pronouns",
        "title": "Pronomes de Objeto Indireto — A2",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Непрямі займенники (me, te, lhe, nos, vos, lhes) заміняють непрямий додаток (кому?).",
            "en": {
              "text": "Indirect object pronouns (me, te, lhe, nos, vos, lhes) replace an indirect object (to whom?)."
            }
          },
          {
            "type": "table",
            "title": "Непрямі займенники",
            "rows": [
              [
                "Dou-lhe o livro.",
                "Я даю йому/їй книгу."
              ],
              [
                "Escrevo-lhes uma carta.",
                "Я пишу їм листа."
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
                "Ela deu-me um presente.",
                "Вона дала мені подарунок."
              ]
            ]
          }
        ]
      },
      {
        "id": "combined-pronouns",
        "title": "Pronomes Combinados (mo, ta) — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Коли є два займенники (непрямий + прямий), вони зливаються в одну форму: me+o→mo, te+a→ta, lhe+o→lho.",
            "en": {
              "text": "When there are two pronouns (indirect + direct), they fuse into a single form: me+o→mo, te+a→ta, lhe+o→lho."
            }
          },
          {
            "type": "table",
            "title": "Комбіновані форми",
            "rows": [
              [
                "Dá-mo!",
                "Дай мені це! (mo = me+o)"
              ],
              [
                "Empresto-ta.",
                "Я тобі це позичаю. (ta = te+a)"
              ],
              [
                "Ele deu-lho.",
                "Він дав це йому/їй. (lho = lhe+o)"
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
                "Explico-to já.",
                "Я тобі це зараз поясню."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-pronouns",
        "title": "Pronomes Relativos (que, quem, cujo) — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Que — універсальний (особи й речі); quem — тільки після прийменника для осіб; cujo (чий) узгоджується з іменником, що йде після нього.",
            "en": {
              "text": "Que is universal (people and things); quem is used only after a preposition for people; cujo (whose) agrees with the noun that follows it."
            }
          },
          {
            "type": "table",
            "title": "que / quem / cujo",
            "rows": [
              [
                "o livro que li",
                "книга, яку я прочитав"
              ],
              [
                "a pessoa com quem falei",
                "людина, з якою я говорив"
              ],
              [
                "o homem cujo livro li",
                "чоловік, чию книгу я прочитав"
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
                "A casa em que vivo é grande.",
                "Дім, у якому я живу, великий."
              ]
            ]
          }
        ]
      },
      {
        "id": "passive-voice",
        "title": "Voz Passiva (Ser + Particípio) — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється ser + причастя минулого часу, узгоджене з підметом.",
            "en": {
              "text": "The passive voice is formed with ser + past participle, agreeing with the subject."
            }
          },
          {
            "type": "table",
            "title": "ser + particípio",
            "rows": [
              [
                "O livro foi escrito por ela.",
                "Книга написана нею."
              ],
              [
                "As portas são fechadas às 18h.",
                "Двері зачиняються о 18:00."
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
                "A casa foi vendida.",
                "Дім було продано."
              ]
            ]
          }
        ]
      },
      {
        "id": "personal-infinitive",
        "title": "Infinitivo Pessoal — B1",
        "emoji": "🌟",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса португальської — інфінітив може відмінюватися за особами, коли в підрядному реченні свій власний підмет (після para, ao, prepositions тощо).",
            "en": {
              "text": "A unique Portuguese feature — the infinitive can be conjugated by person when the subordinate clause has its own subject (after para, ao, and other prepositions)."
            }
          },
          {
            "type": "table",
            "title": "Infinitivo pessoal",
            "rows": [
              [
                "para eu falar",
                "щоб я говорив(ла)"
              ],
              [
                "para tu falares",
                "щоб ти говорив(ла)"
              ],
              [
                "para eles falarem",
                "щоб вони говорили"
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
                "É importante nós estudarmos.",
                "Важливо, щоб ми навчалися."
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "advanced",
    "title": "Просунута граматика",
    "titleEn": "Advanced Grammar",
    "emoji": "🎯",
    "rules": [
      {
        "id": "conditional-sentences",
        "title": "Orações Condicionais com Se — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовні речення з se мають три типи: реальний (presente/futuro do conjuntivo), можливий (imperfeito do conjuntivo + condicional), нереальний минулий (mais-que-perfeito do conjuntivo + condicional composto).",
            "en": {
              "text": "Conditional sentences with se have three types: real (present/future subjunctive), possible (imperfect subjunctive + conditional), unreal past (pluperfect subjunctive + past conditional)."
            }
          },
          {
            "type": "table",
            "title": "Три типи",
            "rows": [
              [
                "Se chover, fico em casa.",
                "Якщо піде дощ, я залишусь удома. (реальний)"
              ],
              [
                "Se chovesse, ficaria em casa.",
                "Якби пішов дощ, я б залишився вдома. (можливий)"
              ],
              [
                "Se tivesse sabido, teria vindo.",
                "Якби я знав, я б прийшов. (нереальний, минулий)"
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
                "Se tivesse tempo, viajaria mais.",
                "Якби в мене був час, я б більше подорожував."
              ]
            ]
          }
        ]
      },
      {
        "id": "reported-speech",
        "title": "Discurso Indireto — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "У непрямій мові часи зсуваються назад (presente → imperfeito, futuro → condicional), як і в англійській.",
            "en": {
              "text": "In reported speech, tenses shift back (present → imperfect, future → conditional), similar to English."
            }
          },
          {
            "type": "table",
            "title": "Пряма → непряма мова",
            "rows": [
              [
                "\"Estou cansado\" → Disse que estava cansado.",
                "«Я втомлений» → Він сказав, що втомлений."
              ],
              [
                "\"Virei amanhã\" → Disse que viria.",
                "«Я прийду завтра» → Він сказав, що прийде."
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
                "Disse-me que não percebia.",
                "Він/вона сказав(ла) мені, що не розуміє."
              ]
            ]
          }
        ]
      },
      {
        "id": "indefinite-pronouns",
        "title": "Pronomes Indefinidos — A2",
        "emoji": "🔘",
        "sections": [
          {
            "type": "intro",
            "text": "Неозначені займенники: alguém (хтось), ninguém (ніхто), tudo/todos (все/всі), cada (кожен).",
            "en": {
              "text": "Indefinite pronouns: alguém (someone), ninguém (no one), tudo/todos (all/everyone), cada (each)."
            }
          },
          {
            "type": "table",
            "title": "Основні неозначені займенники",
            "rows": [
              [
                "alguém",
                "хтось"
              ],
              [
                "ninguém",
                "ніхто"
              ],
              [
                "todos / tudo",
                "всі / все"
              ],
              [
                "cada",
                "кожен"
              ],
              [
                "nada",
                "нічого"
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
                "Alguém ligou.",
                "Хтось телефонував."
              ]
            ]
          }
        ]
      },
      {
        "id": "ordinal-numbers",
        "title": "Numerais Ordinais — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники узгоджуються з іменником, як прикметники.",
            "en": {
              "text": "Ordinal numbers agree with the noun like adjectives."
            }
          },
          {
            "type": "table",
            "title": "1-й – 10-й",
            "rows": [
              [
                "primeiro, -a",
                "1-й"
              ],
              [
                "segundo",
                "2-й"
              ],
              [
                "terceiro",
                "3-й"
              ],
              [
                "quarto ... décimo",
                "4-й ... 10-й"
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
                "Moro no terceiro andar.",
                "Я живу на третьому поверсі."
              ]
            ]
          }
        ]
      },
      {
        "id": "exclamatory-sentences",
        "title": "Frases Exclamativas — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Окличні речення часто починаються з que (який/яка) або como (як).",
            "en": {
              "text": "Exclamatory sentences often start with que (what a) or como (how)."
            }
          },
          {
            "type": "table",
            "title": "que / como",
            "rows": [
              [
                "Que belo dia!",
                "Який гарний день!"
              ],
              [
                "Como és inteligente!",
                "Який ти розумний!"
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
                "Que surpresa!",
                "Який сюрприз!"
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-a-em-de",
        "title": "Preposições A, Em, De — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "A (до), em (у), de (з/про) — найуживаніші прийменники; em/de зливаються з артиклем (em+o→no, de+a→da).",
            "en": {
              "text": "A (to), em (in), de (of/about/from) — the most common prepositions; em/de contract with the article (em+o→no, de+a→da)."
            }
          },
          {
            "type": "table",
            "title": "a / em / de",
            "rows": [
              [
                "Vou a Lisboa.",
                "Я їду до Лісабона."
              ],
              [
                "Estou no Porto.",
                "Я в Порту."
              ],
              [
                "Venho da Ucrânia.",
                "Я з України."
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
                "O livro está na mesa.",
                "Книга на столі."
              ]
            ]
          }
        ]
      },
      {
        "id": "diminutives",
        "title": "Diminutivos (-inho/-zinho) — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Пестливий суфікс -inho/-inha (-zinho після голосної) надає значення «маленький» або ласкавого відтінку.",
            "en": {
              "text": "The diminutive suffix -inho/-inha (-zinho after a vowel) adds a 'small' or affectionate meaning."
            }
          },
          {
            "type": "table",
            "title": "Пестливі суфікси",
            "rows": [
              [
                "casa → casinha",
                "дім → будиночок"
              ],
              [
                "cão → cãozinho",
                "пес → песик"
              ],
              [
                "café → cafezinho",
                "кава → кавка"
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
                "Que gatinho fofo!",
                "Яке миле кошенятко!"
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositional-pronouns",
        "title": "Pronomes com Preposição (comigo, contigo) — A2",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Займенники mim/ti/si зливаються з com в особливі форми: comigo, contigo, consigo, connosco/conosco, convosco.",
            "en": {
              "text": "The pronouns mim/ti/si fuse with com into special forms: comigo, contigo, consigo, connosco/conosco, convosco."
            }
          },
          {
            "type": "table",
            "title": "com + займенник",
            "rows": [
              [
                "comigo",
                "зі мною"
              ],
              [
                "contigo",
                "з тобою"
              ],
              [
                "consigo",
                "з собою/з ним/нею (ввічл.)"
              ],
              [
                "connosco (PT) / conosco (BR)",
                "з нами"
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
                "Vem comigo.",
                "Ходи зі мною."
              ]
            ]
          }
        ]
      },
      {
        "id": "time-expressions",
        "title": "Desde, Há, Durante — B1",
        "emoji": "🕒",
        "sections": [
          {
            "type": "intro",
            "text": "Desde (з — момент початку), há (тому/протягом — з дієсловом «є»), durante (протягом — з іменником).",
            "en": {
              "text": "Desde (since — starting point), há (ago/for — with the verb 'there is'), durante (during — with a noun)."
            }
          },
          {
            "type": "table",
            "title": "desde / há / durante",
            "rows": [
              [
                "Moro aqui desde 2020.",
                "Я живу тут з 2020 року."
              ],
              [
                "Cheguei há duas horas.",
                "Я приїхав дві години тому."
              ],
              [
                "Durante o verão viajo.",
                "Влітку я подорожую."
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
                "Não o vejo há um mês.",
                "Я не бачив його місяць."
              ]
            ]
          }
        ]
      },
      {
        "id": "clitic-placement",
        "title": "Colocação Pronominal (Próclise/Ênclise/Mesóclise) — B2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса португальської: слабкий займенник може стояти перед дієсловом (próclise, після заперечення/сполучника), після дієслова через дефіс (ênclise, за замовчуванням) або всередині дієслова (mesóclise, у Futuro/Condicional у формальному/письмовому стилі).",
            "en": {
              "text": "A unique Portuguese feature: the weak pronoun can go before the verb (próclise, after negation/conjunctions), after the verb with a hyphen (ênclise, the default), or inside the verb (mesóclise, in the Future/Conditional in formal/written style)."
            }
          },
          {
            "type": "table",
            "title": "Три позиції",
            "rows": [
              [
                "Não te vejo. (próclise)",
                "Я тебе не бачу."
              ],
              [
                "Vejo-te. (ênclise)",
                "Я тебе бачу."
              ],
              [
                "Falar-te-ei amanhã. (mesóclise)",
                "Я поговорю з тобою завтра. (формально)"
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
                "Quando te vir, digo-te.",
                "Коли я тебе побачу, я тобі скажу."
              ]
            ]
          }
        ]
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
        "id": "imperfeito-subjuntivo",
        "title": "Pretérito Imperfeito do Conjuntivo — B2",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Вживається після дієслів у минулому часі, що вимагають кон'юнктива, або в нереальних умовних реченнях.",
            "en": {
              "text": "Used after past-tense verbs that require the subjunctive, or in unreal conditional sentences."
            }
          },
          {
            "type": "formula",
            "title": "que eu falasse",
            "rows": [
              [
                "✅ (+)",
                "que eu",
                "falasse",
                "→ Queria que falasses comigo."
              ],
              [
                "✅ (+)",
                "que ele/ela",
                "falasse",
                "→ Pensava que fosse verdade."
              ]
            ],
            "en": {
              "title": "que eu falasse (that I spoke)"
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
                "Esperava que viesses.",
                "Я сподівався(лась), що ти прийдеш."
              ]
            ]
          }
        ]
      },
      {
        "id": "preterito-perfeito-subjuntivo",
        "title": "Pretérito Perfeito do Conjuntivo — B2",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Виражає завершену дію в реченнях, що вимагають кон'юнктива. Утворюється ter у Presente do Conjuntivo + причастя.",
            "en": {
              "text": "Expresses a completed action in clauses requiring the subjunctive. Formed with ter in the Present Subjunctive + participle."
            }
          },
          {
            "type": "formula",
            "title": "que eu tenha falado",
            "rows": [
              [
                "✅ (+)",
                "que eu",
                "tenha falado",
                "→ Espero que tenha corrido bem."
              ],
              [
                "✅ (+)",
                "que ele/ela",
                "tenha falado",
                "→ Duvido que tenha chegado."
              ]
            ],
            "en": {
              "title": "que eu tenha falado"
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
                "Espero que tenhas entendido.",
                "Сподіваюсь, ти зрозумів."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative-negative",
        "title": "Imperativo Negativo — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечний наказ для всіх осіб позичає форми з кон'юнктива (на відміну від стверджувального, який має власні tu/vós форми).",
            "en": {
              "text": "The negative imperative for all persons borrows forms from the subjunctive (unlike the affirmative, which has its own tu/vós forms)."
            }
          },
          {
            "type": "table",
            "title": "não + conjuntivo",
            "rows": [
              [
                "Não fales!",
                "Не говори! (tu)"
              ],
              [
                "Não fale!",
                "Не говоріть! (você)"
              ],
              [
                "Não faleis!",
                "Не говоріть! (vós)"
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
                "Não toques nisso!",
                "Не чіпай це!"
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-pronouns",
        "title": "Pronomes Possessivos — B1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники (окремо від прикметників) заміняють іменник + присвійний прикметник і зберігають артикль.",
            "en": {
              "text": "Possessive pronouns (as distinct from adjectives) replace noun + possessive adjective and keep the article."
            }
          },
          {
            "type": "table",
            "title": "o meu, o teu...",
            "rows": [
              [
                "Este é o meu.",
                "Це моє."
              ],
              [
                "Aquela é a tua.",
                "Те твоє."
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
                "O meu carro é vermelho, o teu é azul.",
                "Моя машина червона, твоя синя."
              ]
            ]
          }
        ]
      },
      {
        "id": "absolute-superlative",
        "title": "Superlativo Absoluto (-íssimo) — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Абсолютний найвищий ступінь (дуже...) утворюється додаванням -íssimo/-íssima до основи прикметника.",
            "en": {
              "text": "The absolute superlative (very...) is formed by adding -íssimo/-íssima to the adjective's stem."
            }
          },
          {
            "type": "table",
            "title": "-íssimo",
            "rows": [
              [
                "bonito → bonitíssimo",
                "гарний → дуже гарний"
              ],
              [
                "fácil → facílimo",
                "легкий → дуже легкий (нерегулярне)"
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
                "Este café está boníssimo.",
                "Ця кава дуже хороша."
              ]
            ]
          }
        ]
      },
      {
        "id": "estar-a-infinitivo",
        "title": "Estar a + Infinitivo (Europeu) — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "У європейській португальській тривала дія завжди виражається estar a + інфінітив (не герундієм, як у бразильській).",
            "en": {
              "text": "In European Portuguese, an ongoing action is always expressed with estar a + infinitive (not the gerund, as in Brazilian)."
            }
          },
          {
            "type": "table",
            "title": "estar a + infinitivo",
            "rows": [
              [
                "Estou a trabalhar.",
                "Я зараз працюю."
              ],
              [
                "Estavas a dormir?",
                "Ти спав?"
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
                "Está a chover.",
                "Йде дощ."
              ]
            ]
          }
        ]
      },
      {
        "id": "acabar-de",
        "title": "Acabar de + Infinitivo — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Acabar de + інфінітив виражає щойно завершену дію («щойно зробив»).",
            "en": {
              "text": "Acabar de + infinitive expresses a just-completed action ('to have just done')."
            }
          },
          {
            "type": "table",
            "title": "acabar de + infinitivo",
            "rows": [
              [
                "Acabo de chegar.",
                "Я щойно прибув."
              ],
              [
                "Acabou de sair.",
                "Він/вона щойно вийшов(ла)."
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
                "Acabámos de comer.",
                "Ми щойно поїли."
              ]
            ]
          }
        ]
      },
      {
        "id": "voltar-a",
        "title": "Voltar a + Infinitivo — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Voltar a + інфінітив виражає повторення дії («знову зробити»).",
            "en": {
              "text": "Voltar a + infinitive expresses repeating an action ('to do again')."
            }
          },
          {
            "type": "table",
            "title": "voltar a + infinitivo",
            "rows": [
              [
                "Voltei a ler o livro.",
                "Я знову прочитав книгу."
              ],
              [
                "Vou voltar a tentar.",
                "Я спробую знову."
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
                "Voltámos a encontrar-nos.",
                "Ми знову зустрілися."
              ]
            ]
          }
        ]
      },
      {
        "id": "obligation-verbs",
        "title": "Ter Que, Dever, É Preciso — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "intro",
            "text": "Ter que/de (мусити, особисто), dever (бути повинним, м'якший обов'язок), é preciso (треба, безособове).",
            "en": {
              "text": "Ter que/de (must, personal), dever (should, softer obligation), é preciso (it's necessary, impersonal)."
            }
          },
          {
            "type": "table",
            "title": "Конструкції необхідності",
            "rows": [
              [
                "Tenho que estudar.",
                "Мені треба вчитися."
              ],
              [
                "Devias estudar mais.",
                "Тобі варто більше вчитися."
              ],
              [
                "É preciso partir já.",
                "Треба виїжджати негайно."
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
                "Tenho de ir embora.",
                "Мені треба йти."
              ]
            ]
          }
        ]
      },
      {
        "id": "qual-vs-que",
        "title": "Qual? vs Que? — B1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Qual (який з...) передбачає вибір серед варіантів; que (що/який) — загальніше питання.",
            "en": {
              "text": "Qual (which one) implies a choice among options; que (what/which) is a more general question."
            }
          },
          {
            "type": "table",
            "title": "qual / que",
            "rows": [
              [
                "Qual preferes, este ou aquele?",
                "Який тобі більше подобається, цей чи той?"
              ],
              [
                "Que livro estás a ler?",
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
                "Qual é o teu nome?",
                "Як тебе звати?"
              ]
            ]
          }
        ]
      },
      {
        "id": "mas-porem-senao",
        "title": "Mas vs Porém vs Senão — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Mas і porém обидва означають «але» (porém формальніший, може стояти в середині речення); senão («інакше/а то») вводить наслідок або протиставлення.",
            "en": {
              "text": "Mas and porém both mean 'but' (porém is more formal and can go mid-sentence); senão ('otherwise/but rather') introduces a consequence or contrast."
            }
          },
          {
            "type": "table",
            "title": "mas / porém / senão",
            "rows": [
              [
                "É caro, mas bonito.",
                "Це дорого, але гарно."
              ],
              [
                "Estuda, senão reprovas.",
                "Вчися, а то провалишся."
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
                "Queria vir, mas não posso.",
                "Я б хотів прийти, але не можу."
              ]
            ]
          }
        ]
      },
      {
        "id": "infinitive-gerund-verbs",
        "title": "Verbos + Infinitivo/Gerúndio — B2",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі дієслова початку/продовження дії поєднуються з інфінітивом із власними прийменниками.",
            "en": {
              "text": "Some beginning/continuing verbs combine with the infinitive, using their own prepositions."
            }
          },
          {
            "type": "table",
            "title": "Приклади конструкцій",
            "rows": [
              [
                "começar a + infinitivo",
                "почати..."
              ],
              [
                "continuar a + infinitivo",
                "продовжувати..."
              ],
              [
                "deixar de + infinitivo",
                "перестати..."
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
                "Deixei de fumar.",
                "Я кинув(ла) палити."
              ]
            ]
          }
        ]
      },
      {
        "id": "impersonal-expressions",
        "title": "Expressões Impessoais (Há, Faz, É) — A2",
        "emoji": "🌐",
        "sections": [
          {
            "type": "intro",
            "text": "Há (є/тому) і faz (тому — про погоду/час) вживаються без особи; é + прикметник виражає загальні судження.",
            "en": {
              "text": "Há (there is/ago) and faz (ago — about weather/time) are used with no personal subject; é + adjective expresses general judgments."
            }
          },
          {
            "type": "table",
            "title": "há / faz / é",
            "rows": [
              [
                "Há um problema.",
                "Є проблема."
              ],
              [
                "Faz frio hoje.",
                "Сьогодні холодно."
              ],
              [
                "É importante estudar.",
                "Важливо вчитися."
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
                "Há uma farmácia aqui perto?",
                "Тут поблизу є аптека?"
              ]
            ]
          }
        ]
      },
      {
        "id": "reported-questions",
        "title": "Perguntas Indiretas — B1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Непрямі питання не мають знака питання; питання так/ні вводяться se (чи).",
            "en": {
              "text": "Indirect questions have no question mark; yes/no questions are introduced by se (whether)."
            }
          },
          {
            "type": "table",
            "title": "Пряме → непряме питання",
            "rows": [
              [
                "\"Vens?\" → Perguntou-me se eu vinha.",
                "«Ти йдеш?» → Він запитав, чи я йду."
              ],
              [
                "\"Onde vais?\" → Perguntou onde eu ia.",
                "«Куди ти йдеш?» → Він запитав, куди я йду."
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
                "Não sei se ele vem.",
                "Я не знаю, чи він прийде."
              ]
            ]
          }
        ]
      },
      {
        "id": "ficar-tornar-se",
        "title": "Ficar, Tornar-se, Fazer-se — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Ficar — швидка зміна стану/емоції; tornar-se — загальне «ставати» (тривалий процес); fazer-se — про поступове набуття якості.",
            "en": {
              "text": "Ficar — a quick change of state/emotion; tornar-se — the general 'to become' (a gradual process); fazer-se — gradually acquiring a quality."
            }
          },
          {
            "type": "table",
            "title": "ficar / tornar-se / fazer-se",
            "rows": [
              [
                "ficar contente",
                "зрадіти"
              ],
              [
                "tornar-se famoso",
                "стати відомим"
              ],
              [
                "fazer-se tarde",
                "ставати пізно"
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
                "Fiquei surpreendido.",
                "Я був здивований."
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "fluency",
    "title": "Вільне володіння",
    "titleEn": "Fluency",
    "emoji": "🚀",
    "rules": [
      {
        "id": "condicional-composto",
        "title": "Futuro do Pretérito Composto — B2",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Виражає дію, яка сталася б у минулому за певної умови. Утворюється ter у Condicional + причастя.",
            "en": {
              "text": "Expresses an action that would have happened in the past given a condition. Formed with ter in the Conditional + participle."
            }
          },
          {
            "type": "formula",
            "title": "teria + particípio",
            "rows": [
              [
                "✅ (+)",
                "eu",
                "teria falado",
                "→ Teria falado, se tivesse podido."
              ],
              [
                "✅ (+)",
                "tu",
                "terias falado",
                "→ Terias vindo?"
              ]
            ],
            "en": {
              "title": "teria + participle"
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
                "Teria ido, mas estava a chover.",
                "Я б пішов, але йшов дощ."
              ]
            ]
          }
        ]
      },
      {
        "id": "futuro-probabilidade",
        "title": "Futuro para Probabilidade — B2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Futuro може виражати не лише майбутнє, а й припущення про теперішнє (аналог «мабуть»).",
            "en": {
              "text": "The future can express not only future time, but also a guess about the present (like 'probably')."
            }
          },
          {
            "type": "table",
            "title": "Futuro для припущення",
            "rows": [
              [
                "Que horas são? Serão as três.",
                "Котра година? Мабуть, третя."
              ],
              [
                "Terá trinta anos.",
                "Йому/їй, мабуть, тридцять."
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
                "Estará cansado depois da viagem.",
                "Він, мабуть, втомлений після подорожі."
              ]
            ]
          }
        ]
      },
      {
        "id": "tu-vs-voce",
        "title": "Tu vs Você (Formalidade) — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Tu — неформальне «ти» (переважно в Португалії); você — ввічливе/нейтральне звертання (стандарт у Бразилії), з дієсловом у 3-й особі однини.",
            "en": {
              "text": "Tu is informal 'you' (mainly in Portugal); você is the polite/neutral form (standard in Brazil), used with the verb in 3rd person singular."
            }
          },
          {
            "type": "table",
            "title": "tu vs você",
            "rows": [
              [
                "Como estás? (tu)",
                "Як справи? (неформально)"
              ],
              [
                "Como está? (você)",
                "Як справи? (ввічливо/нейтрально)"
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
                "Você é brasileiro?",
                "Ти бразилець?"
              ]
            ]
          }
        ]
      },
      {
        "id": "o-neutro",
        "title": "O Pronome Neutro \"O\" — B1",
        "emoji": "🔘",
        "sections": [
          {
            "type": "intro",
            "text": "О може заміняти цілу ідею, прикметник або дієслово-присудок, а не лише іменник чоловічого роду.",
            "en": {
              "text": "O can replace a whole idea, an adjective, or a predicate verb, not just a masculine noun."
            }
          },
          {
            "type": "table",
            "title": "o нейтральне",
            "rows": [
              [
                "Estás cansado? Sim, estou.",
                "Ти втомлений? Так."
              ],
              [
                "Eu já o sabia!",
                "Я вже це знав!"
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
                "Não o creio.",
                "Я в це не вірю."
              ]
            ]
          }
        ]
      },
      {
        "id": "cujo",
        "title": "Pronome Relativo \"Cujo\" — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Cujo/cuja/cujos/cujas означає «чий/чия» — узгоджується з іменником, що йде після нього, а не з попереднім, і не приймає артикля.",
            "en": {
              "text": "Cujo/cuja/cujos/cujas means 'whose' — it agrees with the noun that follows it, not with the preceding one, and takes no article."
            }
          },
          {
            "type": "table",
            "title": "cujo",
            "rows": [
              [
                "o homem cujo livro li",
                "чоловік, чию книгу я прочитав"
              ],
              [
                "a mulher cuja filha estuda aqui",
                "жінка, чия дочка тут навчається"
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
                "O professor cujo curso sigo é bom.",
                "Викладач, чий курс я відвідую, хороший."
              ]
            ]
          }
        ]
      },
      {
        "id": "causativa-mandar-deixar",
        "title": "Mandar/Deixar + Infinitivo (Causativa) — B2",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Mandar/Fazer + інфінітив виражає спонукання («примусити зробити»), deixar + інфінітив — дозвіл («дозволити зробити»).",
            "en": {
              "text": "Mandar/Fazer + infinitive expresses causation ('to make someone do'), deixar + infinitive expresses permission ('to let someone do')."
            }
          },
          {
            "type": "table",
            "title": "mandar / deixar + infinitivo",
            "rows": [
              [
                "Mandei consertar o carro.",
                "Я віддав машину в ремонт."
              ],
              [
                "Deixo-o falar.",
                "Я дозволяю йому говорити."
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
                "Fez-me rir.",
                "Він/вона мене розсмішив(ла)."
              ]
            ]
          }
        ]
      },
      {
        "id": "ja-ainda-mais",
        "title": "Já, Ainda, Não...Mais — A2",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Já (вже), ainda (ще), não...mais (більше не) — ключові прислівники для опису стану дії в часі.",
            "en": {
              "text": "Já (already), ainda (still/yet), não...mais (no longer) — key adverbs for describing the state of an action over time."
            }
          },
          {
            "type": "table",
            "title": "já / ainda / não...mais",
            "rows": [
              [
                "Já o fiz.",
                "Я вже це зробив."
              ],
              [
                "Ainda estás aqui?",
                "Ти ще тут?"
              ],
              [
                "Não fumo mais.",
                "Я більше не палю."
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
                "Já não trabalha aqui.",
                "Він/вона тут більше не працює."
              ]
            ]
          }
        ]
      },
      {
        "id": "tao-quanto",
        "title": "Tão...Quanto/Como — B1",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Tão...quanto/como виражає рівність із прикметниками («настільки ж... як»); tanto...quanto — з іменниками/дієсловами.",
            "en": {
              "text": "Tão...quanto/como expresses equality with adjectives ('as... as'); tanto...quanto is used with nouns/verbs."
            }
          },
          {
            "type": "table",
            "title": "tão...quanto",
            "rows": [
              [
                "É tão inteligente quanto bonita.",
                "Вона настільки ж розумна, наскільки красива."
              ],
              [
                "Tenho tantos livros quanto tu.",
                "У мене стільки ж книг, скільки в тебе."
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
                "É tão alto como o pai.",
                "Він такий же високий, як батько."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-position",
        "title": "Posição do Adjetivo — B2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі прикметники змінюють значення залежно від позиції: перед іменником — переносне/суб'єктивне значення, після — буквальне.",
            "en": {
              "text": "Some adjectives change meaning depending on position: before the noun — figurative/subjective meaning, after — literal."
            }
          },
          {
            "type": "table",
            "title": "Позиція змінює значення",
            "rows": [
              [
                "um velho amigo",
                "давній друг (перен.)"
              ],
              [
                "um amigo velho",
                "старий (за віком) друг (букв.)"
              ],
              [
                "um grande homem",
                "велика людина (значуща)"
              ],
              [
                "um homem grande",
                "велика (фізично) людина"
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
                "É um caro amigo.",
                "Це любий друг."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-extra",
        "title": "Preposições: Sobre, Entre, Perante, Sob — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Інші вживані прийменники: sobre (на/про), entre (між), perante (перед/зважаючи на), sob (під).",
            "en": {
              "text": "Other common prepositions: sobre (on/about), entre (between), perante (before/in view of), sob (under)."
            }
          },
          {
            "type": "table",
            "title": "sobre / entre / perante / sob",
            "rows": [
              [
                "O livro está sobre a mesa.",
                "Книга на столі."
              ],
              [
                "Entre nós, é segredo.",
                "Між нами, це секрет."
              ],
              [
                "Sob pressão.",
                "Під тиском."
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
                "Falamos sobre este assunto.",
                "Ми поговорили на цю тему."
              ]
            ]
          }
        ]
      },
      {
        "id": "o-que-cleft",
        "title": "\"O Que\" (Frases Enfáticas) — B2",
        "emoji": "💫",
        "sections": [
          {
            "type": "intro",
            "text": "O que (те, що) вводить підмет чи додаток, коли референт неозначений, часто в емфатичних конструкціях.",
            "en": {
              "text": "O que (that which/what) introduces a subject or object when the referent is unspecified, often in emphatic constructions."
            }
          },
          {
            "type": "table",
            "title": "o que",
            "rows": [
              [
                "O que dizes é verdade.",
                "Те, що ти кажеш, правда."
              ],
              [
                "Não percebo o que queres.",
                "Я не розумію, чого ти хочеш."
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
                "O que importa é a saúde.",
                "Те, що важливо, — це здоров'я."
              ]
            ]
          }
        ]
      },
      {
        "id": "large-numbers",
        "title": "Numerais Cardinais Grandes — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Великі числа утворюються послідовним поєднанням: сотні (cem/cento), тисячі (mil), мільйони (milhão/milhões).",
            "en": {
              "text": "Large numbers are formed by chaining: hundreds (cem/cento), thousands (mil), millions (milhão/milhões)."
            }
          },
          {
            "type": "table",
            "title": "Великі числа",
            "rows": [
              [
                "cem / cento e um",
                "100 / 101"
              ],
              [
                "mil / dois mil",
                "1000 / 2000"
              ],
              [
                "um milhão / dois milhões",
                "1 000 000 / 2 000 000"
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
                "Custa dois mil euros.",
                "Це коштує дві тисячі євро."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-emphatic",
        "title": "Pronomes Reflexivos Enfáticos (a mim mesmo) — B2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Mesmo/mesma додається до тонічного займенника для підсилення зворотного значення («сам собі»).",
            "en": {
              "text": "Mesmo/mesma is added to the stressed pronoun to emphasize a reflexive meaning ('to myself')."
            }
          },
          {
            "type": "table",
            "title": "a mim mesmo / a ti mesmo",
            "rows": [
              [
                "Fi-lo por mim mesmo.",
                "Я зробив це для себе самого."
              ],
              [
                "Fala consigo mesmo.",
                "Він говорить сам до себе."
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
                "Tens de acreditar em ti mesmo.",
                "Ти маєш вірити в себе."
              ]
            ]
          }
        ]
      },
      {
        "id": "tomara-oxala",
        "title": "Tomara/Oxalá + Conjuntivo (Desejos) — B1",
        "emoji": "🌠",
        "sections": [
          {
            "type": "intro",
            "text": "Oxalá (якби ж/дай Боже) і tomara (розм., бразильське) виражають сильне бажання й вимагають кон'юнктива.",
            "en": {
              "text": "Oxalá (if only/would that) and tomara (colloquial, Brazilian) express a strong wish and require the subjunctive."
            }
          },
          {
            "type": "table",
            "title": "oxalá / tomara + conjuntivo",
            "rows": [
              [
                "Oxalá seja verdade!",
                "Якби ж це було правдою!"
              ],
              [
                "Tomara que venhas!",
                "Хоч би ти прийшов!"
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
                "Oxalá pudesse ir!",
                "Якби ж я міг піти!"
              ]
            ]
          }
        ]
      },
      {
        "id": "accent-rules",
        "title": "Regras de Acentuação — A2",
        "emoji": "✏️",
        "sections": [
          {
            "type": "intro",
            "text": "Наголос падає переважно на передостанній склад; слова з наголосом на іншому місці позначаються графічним знаком (á, â, ã, ê, ó, ô, ú).",
            "en": {
              "text": "Stress usually falls on the second-to-last syllable; words stressed elsewhere carry a written accent mark (á, â, ã, ê, ó, ô, ú)."
            }
          },
          {
            "type": "table",
            "title": "Приклади наголосу",
            "rows": [
              [
                "café, você, também",
                "наголос на останньому складі — обов'язковий знак"
              ],
              [
                "ânimo, música",
                "наголос на третьому складі від кінця — завжди зі знаком"
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
                "Moro numa cidade pequena.",
                "Я живу в маленькому місті."
              ]
            ]
          }
        ]
      }
    ]
  }
];
