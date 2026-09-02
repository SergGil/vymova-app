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
  }
];
