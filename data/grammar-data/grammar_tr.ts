// Vymova — data/grammar-data/grammar_tr.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_TR: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "pronouns",
        "title": "Kişi zamirleri — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "ben",
                "я"
              ],
              [
                "sen",
                "ти"
              ],
              [
                "o",
                "він / вона / воно"
              ],
              [
                "biz",
                "ми"
              ],
              [
                "siz",
                "ви"
              ],
              [
                "onlar",
                "вони"
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
                "Ben öğrenciyim.",
                "Я студент."
              ],
              [
                "Biz evdeyiz.",
                "Ми вдома."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be",
        "title": "-Dır eki (\"olmak\" fiilinin karşılığı) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "У турецькій немає окремого дієслова \"бути\" в теперішньому часі — замість нього використовуються особові закінчення, що додаються прямо до слова.",
            "en": {
              "text": "Turkish has no separate verb \"to be\" in the present tense — instead, personal endings are attached directly to the word."
            }
          },
          {
            "type": "formula",
            "title": "Особові закінчення (приклад: öğrenci - студент)",
            "rows": [
              [
                "ben",
                "öğrenciyim",
                "я студент"
              ],
              [
                "sen",
                "öğrencisin",
                "ти студент"
              ],
              [
                "o",
                "öğrenci(dir)",
                "він/вона студент"
              ],
              [
                "biz",
                "öğrenciyiz",
                "ми студенти"
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
                "Mutluyum.",
                "Я щасливий."
              ],
              [
                "O öğretmendir.",
                "Він/вона вчитель."
              ]
            ]
          }
        ],
        "titleEn": "-Dır / The Equivalent of \"To Be\" — A1"
      },
      {
        "id": "plural",
        "title": "Çoğul eki -lar / -ler — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється додаванням суфікса -lar або -ler залежно від голосних у слові (правило гармонії голосних).",
            "en": {
              "text": "The plural is formed by adding the suffix -lar or -ler depending on the vowels in the word (vowel harmony rule)."
            }
          },
          {
            "type": "table",
            "title": "Однина → множина",
            "rows": [
              [
                "kitap (книга)",
                "kitaplar (книги)"
              ],
              [
                "ev (дім)",
                "evler (дома)"
              ],
              [
                "çocuk (дитина)",
                "çocuklar (діти)"
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
                "İki kitabım var.",
                "У мене є дві книги."
              ],
              [
                "Çocuklar oynuyor.",
                "Діти грають."
              ]
            ]
          }
        ],
        "titleEn": "The Plural Suffix -Lar/-Ler — A1"
      },
      {
        "id": "possessive",
        "title": "İyelik ekleri — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Належність позначається додаванням присвійних суфіксів безпосередньо до іменника, а не окремим словом.",
            "en": {
              "text": "Possession is marked by adding possessive suffixes directly to the noun, rather than a separate word."
            }
          },
          {
            "type": "table",
            "title": "Присвійні суфікси (ev — дім)",
            "rows": [
              [
                "evim",
                "мій дім"
              ],
              [
                "evin",
                "твій дім"
              ],
              [
                "evi",
                "його/її дім"
              ],
              [
                "evimiz",
                "наш дім"
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
                "Evim büyük.",
                "Мій дім великий."
              ],
              [
                "Arabası kırmızı.",
                "Його/її машина червона."
              ]
            ]
          }
        ],
        "titleEn": "Possessive Suffixes — A2"
      },
      {
        "id": "demonstratives",
        "title": "Bu / şu / o — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні займенники bu (це/цей — близько), şu (те/цей — трохи далі, вказуючи), o (те/той — далеко) відмінюються так само, як іменники, і можуть приймати відмінкові закінчення.",
            "en": {
              "text": "The demonstratives bu (this — near), şu (that — pointing at something a bit further), and o (that — far away) decline like nouns and can take case endings."
            }
          },
          {
            "type": "table",
            "title": "Вказівні займенники",
            "rows": [
              [
                "bu",
                "це / цей (близько)"
              ],
              [
                "şu",
                "те / цей (вказуючи)"
              ],
              [
                "o",
                "те / той (далеко)"
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
                "Bu benim kitabım.",
                "Це моя книга."
              ],
              [
                "Şu adam kim?",
                "Хто той чоловік (там)?"
              ],
              [
                "O çok güzel.",
                "Те дуже гарне."
              ]
            ]
          }
        ],
        "titleEn": "Demonstratives: Bu / Şu / O — A1"
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
        "title": "Şimdiki zaman — A1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній тривалий час утворюється додаванням суфікса -yor до основи дієслова та особового закінчення.",
            "en": {
              "text": "The present continuous tense is formed by adding the suffix -yor to the verb stem plus a personal ending."
            }
          },
          {
            "type": "formula",
            "title": "gelmek (приходити) — теперішній час",
            "rows": [
              [
                "ben",
                "geliyorum",
                "я приходжу"
              ],
              [
                "sen",
                "geliyorsun",
                "ти приходиш"
              ],
              [
                "o",
                "geliyor",
                "він/вона приходить"
              ],
              [
                "biz",
                "geliyoruz",
                "ми приходимо"
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
                "Eve gidiyorum.",
                "Я йду додому."
              ],
              [
                "O Türkçe öğreniyor.",
                "Він/вона вчить турецьку."
              ]
            ]
          }
        ],
        "titleEn": "Present Tense — A1"
      },
      {
        "id": "aorist-tense",
        "title": "Geniş zaman — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Geniş zaman (аорист) виражає звичну, регулярну дію або загальну істину — щось, що відбувається завжди чи зазвичай, а не в певний момент. Утворюється суфіксом -r/-ar/-er (для більшості дієслів) або -ir/-ır/-ur/-ür (для односкладових основ).",
            "en": {
              "text": "The aorist expresses habitual actions or general truths — something that happens always or usually, not at a specific moment. Formed with the suffix -r/-ar/-er (most verbs) or -ir/-ır/-ur/-ür (for many one-syllable stems)."
            }
          },
          {
            "type": "formula",
            "title": "okumak (читати) — geniş zaman",
            "rows": [
              [
                "ben",
                "okurum",
                "я читаю (зазвичай)"
              ],
              [
                "sen",
                "okursun",
                "ти читаєш (зазвичай)"
              ],
              [
                "o",
                "okur",
                "він/вона читає (зазвичай)"
              ],
              [
                "biz",
                "okuruz",
                "ми читаємо (зазвичай)"
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
                "Her sabah kahve içerim.",
                "Я п'ю каву щоранку."
              ],
              [
                "Güneş doğudan doğar.",
                "Сонце сходить на сході."
              ]
            ]
          }
        ],
        "titleEn": "Aorist (Simple Present) — A2"
      },
      {
        "id": "simple-past-tense",
        "title": "-Dı'lı geçmiş zaman — A1",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Означений минулий час (-di/-dı/-du/-dü, -ti/-tı/-tu/-tü) використовується для дій, які мовець бачив, знав напевно або пережив особисто.",
            "en": {
              "text": "The definite past tense (-di/-dı/-du/-dü, -ti/-tı/-tu/-tü) is used for actions the speaker witnessed, knew for certain, or personally experienced."
            }
          },
          {
            "type": "formula",
            "title": "gelmek (приходити) — geçmiş zaman",
            "rows": [
              [
                "ben",
                "geldim",
                "я прийшов"
              ],
              [
                "sen",
                "geldin",
                "ти прийшов"
              ],
              [
                "o",
                "geldi",
                "він/вона прийшов(-ла)"
              ],
              [
                "biz",
                "geldik",
                "ми прийшли"
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
                "Dün eve geç geldim.",
                "Учора я пізно прийшов додому."
              ],
              [
                "Filmi izledik.",
                "Ми подивилися фільм."
              ]
            ]
          }
        ],
        "titleEn": "Definite Past Tense (-Di) — A1"
      },
      {
        "id": "reported-past-tense",
        "title": "-Mış'lı geçmiş zaman — B1",
        "emoji": "🗞️",
        "sections": [
          {
            "type": "intro",
            "text": "Переказний минулий час (-miş/-mış/-muş/-müş) вживається для дій, які мовець не бачив особисто — про них дізналися з чужих слів, здогадалися за наслідками або виявили несподівано (здивування).",
            "en": {
              "text": "The reported/inferential past tense (-miş/-mış/-muş/-müş) is used for actions the speaker did not personally witness — learned secondhand, inferred from evidence, or discovered with surprise."
            }
          },
          {
            "type": "formula",
            "title": "gitmek (йти) — miş'li geçmiş",
            "rows": [
              [
                "ben",
                "gitmişim",
                "я, виявляється, пішов"
              ],
              [
                "sen",
                "gitmişsin",
                "ти, кажуть, пішов"
              ],
              [
                "o",
                "gitmiş",
                "він, кажуть, пішов"
              ],
              [
                "biz",
                "gitmişiz",
                "ми, виявляється, пішли"
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
                "Ali dün gelmiş.",
                "Кажуть, Алі вчора приходив (я сам не бачив)."
              ],
              [
                "Çok yorulmuşum.",
                "Виявляється, я дуже втомився."
              ]
            ]
          }
        ],
        "titleEn": "Reported/Inferential Past Tense (-Miş) — B1"
      },
      {
        "id": "future-tense",
        "title": "Gelecek zaman — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється суфіксом -ecek/-acak і виражає дію, яка відбудеться в майбутньому.",
            "en": {
              "text": "The future tense is formed with the suffix -ecek/-acak and expresses an action that will happen in the future."
            }
          },
          {
            "type": "formula",
            "title": "yapmak (робити) — gelecek zaman",
            "rows": [
              [
                "ben",
                "yapacağım",
                "я зроблю"
              ],
              [
                "sen",
                "yapacaksın",
                "ти зробиш"
              ],
              [
                "o",
                "yapacak",
                "він/вона зробить"
              ],
              [
                "biz",
                "yapacağız",
                "ми зробимо"
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
                "Yarın seni arayacağım.",
                "Завтра я тобі подзвоню."
              ],
              [
                "Onlar Türkiye'ye gidecek.",
                "Вони поїдуть до Туреччини."
              ]
            ]
          }
        ],
        "titleEn": "Future Tense (-Ecek) — A2"
      },
      {
        "id": "imperative-mood",
        "title": "Emir kipi — A1",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб виражає прохання, наказ або команду. Форма 2-ї особи однини — це просто основа дієслова без закінчення; інші особи мають власні суфікси.",
            "en": {
              "text": "The imperative expresses a request, order, or command. The 2nd person singular form is simply the bare verb stem with no ending; other persons have their own suffixes."
            }
          },
          {
            "type": "table",
            "title": "Наказовий спосіб (gelmek — приходити)",
            "rows": [
              [
                "gel!",
                "приходь!"
              ],
              [
                "gelsin!",
                "нехай прийде!"
              ],
              [
                "gelin! / geliniz!",
                "приходьте! (ви)"
              ],
              [
                "gelmesin!",
                "нехай не приходить!"
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
                "Buraya gel!",
                "Іди сюди!"
              ],
              [
                "Lütfen kapıyı kapatın.",
                "Будь ласка, зачиніть двері."
              ]
            ]
          }
        ],
        "titleEn": "Imperative Mood — A1"
      },
      {
        "id": "conditional-mood",
        "title": "Şart kipi -se/-sa — B1",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється суфіксом -se/-sa і виражає умову ('якщо'). Він може приєднуватися і до дієслівних основ, і поєднуватися з іншими часовими формами для складніших умовних речень.",
            "en": {
              "text": "The conditional mood is formed with the suffix -se/-sa and expresses a condition ('if'). It can attach to verb stems directly or combine with other tense forms for more complex conditional sentences."
            }
          },
          {
            "type": "formula",
            "title": "gitmek (йти) — şart kipi",
            "rows": [
              [
                "ben",
                "gitsem",
                "якщо я піду"
              ],
              [
                "sen",
                "gitsen",
                "якщо ти підеш"
              ],
              [
                "o",
                "gitse",
                "якщо він/вона піде"
              ],
              [
                "biz",
                "gitsek",
                "якщо ми підемо"
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
                "Yağmur yağmasa dışarı çıkarız.",
                "Якщо не буде дощу, ми вийдемо надвір."
              ],
              [
                "Param olsa yeni bir araba alırdım.",
                "Якби в мене були гроші, я купив би нову машину."
              ]
            ]
          }
        ],
        "titleEn": "Conditional Mood (-Se/-Sa) — B1"
      },
      {
        "id": "necessitative-mood",
        "title": "Gereklilik kipi -meli/-malı — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Спосіб необхідності (-meli/-malı) виражає обов'язок або необхідність — відповідник англійського 'must/should'.",
            "en": {
              "text": "The necessitative mood (-meli/-malı) expresses obligation or necessity — the equivalent of English 'must/should'."
            }
          },
          {
            "type": "formula",
            "title": "çalışmak (працювати) — gereklilik kipi",
            "rows": [
              [
                "ben",
                "çalışmalıyım",
                "я мушу працювати"
              ],
              [
                "sen",
                "çalışmalısın",
                "ти мусиш працювати"
              ],
              [
                "o",
                "çalışmalı",
                "він/вона мусить працювати"
              ],
              [
                "biz",
                "çalışmalıyız",
                "ми мусимо працювати"
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
                "Erken kalkmalıyım.",
                "Я маю рано вставати."
              ],
              [
                "Bu ilacı almalısın.",
                "Ти маєш прийняти ці ліки."
              ]
            ]
          }
        ],
        "titleEn": "Necessitative Mood (-Meli/-Malı) — B1"
      },
      {
        "id": "optative-mood",
        "title": "İstek kipi -e/-a — B1",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Бажальний спосіб (-e/-a) виражає бажання, пропозицію або м'яке спонукання — часто перекладається як 'нехай' або 'давай(мо)'. У 1-й особі множини це найпоширеніший спосіб сказати 'давайте...'.",
            "en": {
              "text": "The optative mood (-e/-a) expresses a wish, suggestion, or gentle prompt — often translated as 'let' or 'may'. In the 1st person plural, it's the most common way to say 'let's...'."
            }
          },
          {
            "type": "formula",
            "title": "gitmek (йти) — istek kipi",
            "rows": [
              [
                "ben",
                "gideyim",
                "дай-но я піду"
              ],
              [
                "sen",
                "gidesin",
                "щоб ти пішов"
              ],
              [
                "o",
                "gide",
                "нехай він/вона піде"
              ],
              [
                "biz",
                "gidelim",
                "давайте підемо"
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
                "Hadi sinemaya gidelim.",
                "Давайте підемо в кіно."
              ],
              [
                "Tanrı seni korusun.",
                "Нехай Бог тебе береже."
              ]
            ]
          }
        ],
        "titleEn": "Optative/Subjunctive Mood (-E/-A) — B1"
      },
      {
        "id": "past-continuous-hikaye",
        "title": "Şimdiki zamanın hikayesi -yordu — B1",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "'Hikaye' (розповідна) форма поєднує суфікс -yor (тривалість) із -du (минулий час допоміжного дієслова 'бути'), утворюючи час, що відповідає англійському Past Continuous — 'робив у той момент у минулому'.",
            "en": {
              "text": "The 'hikaye' (narrative) form combines the -yor suffix (continuity) with -du (past tense of 'to be'), producing a tense equivalent to the English Past Continuous — 'was doing at that moment in the past'."
            }
          },
          {
            "type": "formula",
            "title": "okumak (читати) — -yordu",
            "rows": [
              [
                "ben",
                "okuyordum",
                "я читав (у той момент)"
              ],
              [
                "sen",
                "okuyordun",
                "ти читав"
              ],
              [
                "o",
                "okuyordu",
                "він/вона читав(-ла)"
              ],
              [
                "biz",
                "okuyorduk",
                "ми читали"
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
                "Ben kitap okuyordum.",
                "Я читав книгу (коли це сталося)."
              ],
              [
                "Dışarıda yağmur yağıyordu.",
                "Надворі йшов дощ."
              ]
            ]
          }
        ],
        "titleEn": "Past Continuous (Narrative) — B1"
      },
      {
        "id": "aorist-past-hikaye",
        "title": "Geniş zamanın hikayesi -irdi — B1",
        "emoji": "🔂",
        "sections": [
          {
            "type": "intro",
            "text": "Поєднання аориста з -di ('geniş zamanın hikayesi') виражає повторювану, звичну дію в минулому — 'колись зазвичай робив' (англ. 'used to').",
            "en": {
              "text": "Combining the aorist with -di ('geniş zamanın hikayesi') expresses a habitual, repeated action in the past — 'used to do' something."
            }
          },
          {
            "type": "formula",
            "title": "gitmek (йти) — -erdi",
            "rows": [
              [
                "ben",
                "giderdim",
                "я, бувало, ходив"
              ],
              [
                "sen",
                "giderdin",
                "ти, бувало, ходив"
              ],
              [
                "o",
                "giderdi",
                "він/вона, бувало, ходив(-ла)"
              ],
              [
                "biz",
                "giderdik",
                "ми, бувало, ходили"
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
                "Çocukken her yaz denize giderdik.",
                "У дитинстві ми щоліта їздили на море."
              ],
              [
                "Eskiden sigara içerdi.",
                "Раніше він/вона курив(-ла)."
              ]
            ]
          }
        ],
        "titleEn": "Habitual Past (Aorist + Hikaye) — B1"
      },
      {
        "id": "future-past-hikaye",
        "title": "Gelecek zamanın hikayesi -ecekti — B1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Форма 'gelecek zamanın hikayesi' (-ecekti) виражає намір або план, що існував у минулому, — 'мав намір зробити', 'збирався зробити'.",
            "en": {
              "text": "The 'gelecek zamanın hikayesi' form (-ecekti) expresses an intention or plan that existed in the past — 'was going to do', 'was about to do'."
            }
          },
          {
            "type": "formula",
            "title": "yazmak (писати) — -ecekti",
            "rows": [
              [
                "ben",
                "yazacaktım",
                "я збирався написати"
              ],
              [
                "sen",
                "yazacaktın",
                "ти збирався написати"
              ],
              [
                "o",
                "yazacaktı",
                "він/вона збирався написати"
              ],
              [
                "biz",
                "yazacaktık",
                "ми збиралися написати"
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
                "Sana yazacaktım ama unuttum.",
                "Я збирався тобі написати, але забув."
              ],
              [
                "Erken gelecektik ama trafik vardı.",
                "Ми збиралися прийти рано, але були затори."
              ]
            ]
          }
        ],
        "titleEn": "Past Future (Was Going To) — B1"
      },
      {
        "id": "reported-past-compound",
        "title": "-Mişti / -miymiş — B2",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "-Miş можна поєднувати з іншими часовими маркерами, щоб уточнити переказну дію: -mişti (переказана дія, що вже завершилась ще раніше) та -miymiş (переказ переказаного — 'кажуть, що, мовляв, було...').",
            "en": {
              "text": "-Miş can combine with other tense markers to refine reported actions: -mişti (a reported action already completed even earlier) and -miymiş (report of a report — 'apparently, it was said that...')."
            }
          },
          {
            "type": "table",
            "title": "Приклади складених переказних форм",
            "rows": [
              [
                "gitmişti",
                "виявилося, він вже пішов (раніше)"
              ],
              [
                "hastaymış",
                "кажуть, він/вона хворий/-а"
              ],
              [
                "geliyormuş",
                "кажуть, він/вона йде"
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
                "Toplantı iptal olmuşmuş.",
                "Кажуть, що зустріч, виявляється, скасували."
              ],
              [
                "O sırada evde değilmişim.",
                "Виявляється, мене тоді не було вдома."
              ]
            ]
          }
        ],
        "titleEn": "Compound Reported Tenses — B2"
      }
    ]
  },
  {
    "id": "grammar",
    "title": "Граматика",
    "titleEn": "Grammar",
    "emoji": "📚",
    "rules": [
      {
        "id": "nominative-case",
        "title": "Yalın hal — A1",
        "emoji": "1️⃣",
        "sections": [
          {
            "type": "intro",
            "text": "Називний відмінок (yalın hal) — це базова, немаркована форма іменника, яка не має жодного відмінкового закінчення. Використовується як підмет речення або як прямий додаток у неозначеній формі.",
            "en": {
              "text": "The nominative case is the basic, unmarked form of a noun with no case ending. It's used as the subject of a sentence or as an indefinite direct object."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "kitap",
                "книга (як є, без закінчення)"
              ],
              [
                "ev",
                "дім"
              ],
              [
                "Ali kitap okuyor.",
                "Алі читає книгу (яку-небудь)."
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
                "Kedi burada.",
                "Кіт тут."
              ],
              [
                "Öğrenci geldi.",
                "Студент прийшов."
              ]
            ]
          }
        ],
        "titleEn": "Nominative Case — A1"
      },
      {
        "id": "accusative-case",
        "title": "-İ hali (belirtme durumu) — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Знахідний відмінок (-i/-ı/-u/-ü, з буфером -y-) позначає означений прямий додаток — конкретний, відомий обом співрозмовникам об'єкт дії.",
            "en": {
              "text": "The accusative case (-i/-ı/-u/-ü, with buffer -y-) marks a definite direct object — a specific object known to both speakers."
            }
          },
          {
            "type": "table",
            "title": "kitap (книга) + -i",
            "rows": [
              [
                "kitabı",
                "(ту) книгу"
              ],
              [
                "evi",
                "(той) дім"
              ],
              [
                "arabayı",
                "(ту) машину"
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
                "Kitabı okudum.",
                "Я прочитав ту книгу."
              ],
              [
                "Arabayı yıkadı.",
                "Він/вона помив(-ла) машину."
              ]
            ]
          }
        ],
        "titleEn": "Accusative Case (-İ) — A2"
      },
      {
        "id": "dative-case",
        "title": "-E hali (yönelme durumu) — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Давальний відмінок (-e/-a, з буфером -y-) вказує напрямок дії — 'до', 'на', 'у' — куди спрямований рух чи дія.",
            "en": {
              "text": "The dative case (-e/-a, with buffer -y-) indicates direction — 'to', 'onto', 'into' — where a motion or action is aimed."
            }
          },
          {
            "type": "table",
            "title": "okul (школа) + -e",
            "rows": [
              [
                "okula",
                "до школи"
              ],
              [
                "eve",
                "додому"
              ],
              [
                "Ankara'ya",
                "до Анкари"
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
                "Okula gidiyorum.",
                "Я йду до школи."
              ],
              [
                "Ona bir hediye verdim.",
                "Я подарував(-ла) йому/їй подарунок."
              ]
            ]
          }
        ],
        "titleEn": "Dative Case (-E) — A2"
      },
      {
        "id": "locative-case",
        "title": "-De hali (bulunma durumu) — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Місцевий відмінок (-de/-da, -te/-ta після глухих приголосних) позначає місце знаходження — 'у', 'на', 'в' — де щось відбувається.",
            "en": {
              "text": "The locative case (-de/-da, -te/-ta after voiceless consonants) marks location — 'in', 'on', 'at' — where something is happening."
            }
          },
          {
            "type": "table",
            "title": "ev (дім) + -de",
            "rows": [
              [
                "evde",
                "вдома / у домі"
              ],
              [
                "okulda",
                "у школі"
              ],
              [
                "masada",
                "на столі"
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
                "Kitap masada.",
                "Книга на столі."
              ],
              [
                "Şu anda evdeyim.",
                "Зараз я вдома."
              ]
            ]
          }
        ],
        "titleEn": "Locative Case (-De) — A2"
      },
      {
        "id": "ablative-case",
        "title": "-Den hali (ayrılma durumu) — A2",
        "emoji": "↩️",
        "sections": [
          {
            "type": "intro",
            "text": "Вихідний відмінок (-den/-dan, -ten/-tan після глухих) позначає рух звідкись, джерело або матеріал — 'з', 'від', 'через'.",
            "en": {
              "text": "The ablative case (-den/-dan, -ten/-tan after voiceless consonants) marks motion away from, a source, or material — 'from', 'out of', 'through'."
            }
          },
          {
            "type": "table",
            "title": "okul (школа) + -den",
            "rows": [
              [
                "okuldan",
                "зі школи"
              ],
              [
                "evden",
                "з дому"
              ],
              [
                "Türkiye'den",
                "з Туреччини"
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
                "Okuldan geldim.",
                "Я прийшов зі школи."
              ],
              [
                "Bu masa ahşaptan yapılmış.",
                "Цей стіл зроблений з дерева."
              ]
            ]
          }
        ],
        "titleEn": "Ablative Case (-Den) — A2"
      },
      {
        "id": "genitive-case",
        "title": "-in hali (tamlayan eki) — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок (-in/-ın/-un/-ün, з буфером -n-) позначає належність і використовується разом із присвійними суфіксами в так званому 'ізафеті' — конструкції належності з двох іменників.",
            "en": {
              "text": "The genitive case (-in/-ın/-un/-ün, with buffer -n-) marks possession and is used together with possessive suffixes in the so-called 'izafet' — a two-noun possessive construction."
            }
          },
          {
            "type": "table",
            "title": "öğrenci (студент) + -in",
            "rows": [
              [
                "öğrencinin kitabı",
                "книга студента"
              ],
              [
                "annemin arabası",
                "машина моєї мами"
              ],
              [
                "evin kapısı",
                "двері дому"
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
                "Ali'nin evi büyük.",
                "Дім Алі великий."
              ],
              [
                "Kitabın kapağı mavi.",
                "Обкладинка книги синя."
              ]
            ]
          }
        ],
        "titleEn": "Genitive Case (-İn) — A2"
      },
      {
        "id": "vowel-harmony-major",
        "title": "Büyük ünlü uyumu — A1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Великий закон гармонії голосних вимагає, щоб після 'товстих' голосних (a, ı, o, u) у наступному складі йшла 'товста' голосна, а після 'тонких' (e, i, ö, ü) — 'тонка'. Це правило керує вибором майже всіх суфіксів.",
            "en": {
              "text": "The major vowel harmony rule requires that 'back' vowels (a, ı, o, u) be followed by another back vowel in the next syllable, and 'front' vowels (e, i, ö, ü) by another front vowel. This rule governs the choice of almost every suffix."
            }
          },
          {
            "type": "table",
            "title": "Приклад із суфіксом множини -lar/-ler",
            "rows": [
              [
                "kitap → kitaplar",
                "книга → книги (a→a)"
              ],
              [
                "ev → evler",
                "дім → доми (e→e)"
              ],
              [
                "okul → okullar",
                "школа → школи (u→a)"
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
                "Çocuklar okulda.",
                "Діти у школі."
              ],
              [
                "Kediler burada.",
                "Коти тут."
              ]
            ]
          }
        ],
        "titleEn": "Vowel Harmony (2-Way) — A1"
      },
      {
        "id": "vowel-harmony-minor",
        "title": "Küçük ünlü uyumu — A2",
        "emoji": "🎶",
        "sections": [
          {
            "type": "intro",
            "text": "Малий закон гармонії голосних застосовується до суфіксів із чотирма варіантами (i/ı/u/ü) — наприклад, знахідного відмінка чи присвійних суфіксів. Голосна суфікса узгоджується з останньою голосною слова за рядом (передній/задній) і огубленістю (огублений/неогублений).",
            "en": {
              "text": "The minor vowel harmony rule applies to suffixes with four variants (i/ı/u/ü) — such as the accusative case or possessive suffixes. The suffix vowel matches the word's last vowel in both frontness and rounding."
            }
          },
          {
            "type": "table",
            "title": "Приклад із присвійним суфіксом -im/-ım/-um/-üm",
            "rows": [
              [
                "ev → evim",
                "дім → мій дім"
              ],
              [
                "kız → kızım",
                "дівчина → моя дочка"
              ],
              [
                "okul → okulum",
                "школа → моя школа"
              ],
              [
                "göz → gözüm",
                "око → моє око"
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
                "Elim ağrıyor.",
                "У мене болить рука."
              ],
              [
                "Gözüm yoruldu.",
                "Моє око втомилося."
              ]
            ]
          }
        ],
        "titleEn": "Vowel Harmony (4-Way) — A2"
      },
      {
        "id": "consonant-softening",
        "title": "Ünsüz yumuşaması — A2",
        "emoji": "🪶",
        "sections": [
          {
            "type": "intro",
            "text": "Коли до слова, що закінчується на глухий приголосний p, ç, t, k, додається суфікс, який починається з голосної, цей приголосний часто пом'якшується: p→b, ç→c, t→d, k→ğ (або g після приголосного/деяких запозичень).",
            "en": {
              "text": "When a suffix beginning with a vowel is added to a word ending in the voiceless consonants p, ç, t, k, that consonant often softens: p→b, ç→c, t→d, k→ğ (or g after a consonant/in certain loanwords)."
            }
          },
          {
            "type": "table",
            "title": "Приклади пом'якшення",
            "rows": [
              [
                "kitap → kitabı",
                "книга → книгу"
              ],
              [
                "ağaç → ağacı",
                "дерево → дерево (знах.)"
              ],
              [
                "kanat → kanadı",
                "крило → крило (знах.)"
              ],
              [
                "çocuk → çocuğu",
                "дитина → дитину"
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
                "Kitabı masaya koydu.",
                "Він/вона поклав(-ла) книгу на стіл."
              ],
              [
                "Çocuğu okula götürdü.",
                "Він/вона відвів(-ла) дитину до школи."
              ]
            ]
          }
        ],
        "titleEn": "Consonant Softening — A2"
      },
      {
        "id": "buffer-consonants",
        "title": "Kaynaştırma harfleri — A2",
        "emoji": "🧷",
        "sections": [
          {
            "type": "intro",
            "text": "Коли суфікс, що починається з голосної, приєднується до слова, яке вже закінчується на голосну, між ними вставляється буквений \"місток\" — y, n або s, — щоб уникнути збігу двох голосних.",
            "en": {
              "text": "When a vowel-initial suffix attaches to a word that already ends in a vowel, a buffer consonant — y, n, or s — is inserted between them to avoid two vowels colliding."
            }
          },
          {
            "type": "table",
            "title": "Приклади буферних приголосних",
            "rows": [
              [
                "araba + ı → arabayı",
                "машину (буфер -y-)"
              ],
              [
                "okul + un → okulun",
                "школи (буфер -n-, родовий після голосної)"
              ],
              [
                "kapı + (s)ı → kapısı",
                "її двері (буфер -s-, присвійний 3-ї особи)"
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
                "Arabayı gördüm.",
                "Я побачив(-ла) машину."
              ],
              [
                "Okulun bahçesi büyük.",
                "Двір школи великий."
              ]
            ]
          }
        ],
        "titleEn": "Buffer Consonants (Y, N, S) — A2"
      },
      {
        "id": "verb-negation",
        "title": "Fiil olumsuzluğu -me/-ma — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення дієслова утворюється додаванням суфікса -me/-ma одразу після основи дієслова, перед іншими часовими суфіксами.",
            "en": {
              "text": "Verb negation is formed by adding the suffix -me/-ma directly after the verb stem, before any other tense suffixes."
            }
          },
          {
            "type": "formula",
            "title": "gelmek (приходити) — olumsuz",
            "rows": [
              [
                "ben",
                "gelmiyorum",
                "я не приходжу"
              ],
              [
                "sen",
                "gelmiyorsun",
                "ти не приходиш"
              ],
              [
                "o",
                "gelmiyor",
                "він/вона не приходить"
              ],
              [
                "biz",
                "gelmiyoruz",
                "ми не приходимо"
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
                "Bugün gelmiyorum.",
                "Сьогодні я не прийду."
              ],
              [
                "Anlamıyorum.",
                "Я не розумію."
              ]
            ]
          }
        ],
        "titleEn": "Verb Negation (-Me/-Ma) — A1"
      },
      {
        "id": "question-particle",
        "title": "Soru eki mi/mı/mu/mü — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальна частка mi (з варіантами mı/mu/mü за законом гармонії голосних) пишеться окремим словом і ставиться після слова, яке уточнюється в питанні — часто в кінці речення.",
            "en": {
              "text": "The question particle mi (with variants mı/mu/mü following vowel harmony) is written as a separate word and placed after the word being questioned — often at the end of the sentence."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Geliyor musun?",
                "Ти йдеш?"
              ],
              [
                "Bu senin mi?",
                "Це твоє?"
              ],
              [
                "Öğretmen mi o?",
                "Він вчитель?"
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
                "Aç mısın?",
                "Ти голодний?"
              ],
              [
                "Yorgun musunuz?",
                "Ви втомлені? (ви/множина)"
              ]
            ]
          }
        ],
        "titleEn": "Question Particle (Mi) — A1"
      },
      {
        "id": "word-order-sov",
        "title": "Cümle yapısı: özne-nesne-yüklem — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів у турецькій — підмет-додаток-присудок (SOV), дієслово майже завжди стоїть в кінці речення. Порядок інших членів речення досить гнучкий і залежить від того, що мовець хоче наголосити.",
            "en": {
              "text": "The basic word order in Turkish is Subject-Object-Verb (SOV) — the verb almost always comes at the end of the sentence. The order of other elements is fairly flexible and depends on what the speaker wants to emphasize."
            }
          },
          {
            "type": "table",
            "title": "Приклад побудови речення",
            "rows": [
              [
                "Ali (özne)",
                "Алі (підмет)"
              ],
              [
                "elmayı (nesne)",
                "яблуко (додаток)"
              ],
              [
                "yedi (yüklem)",
                "з'їв (присудок)"
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
                "Ali elmayı yedi.",
                "Алі з'їв яблуко."
              ],
              [
                "Ben sana bir mektup yazdım.",
                "Я написав(-ла) тобі листа."
              ]
            ]
          }
        ],
        "titleEn": "Word Order: Subject-Object-Verb — A2"
      },
      {
        "id": "postpositions",
        "title": "Edatlar (son takılar) — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від багатьох мов, у турецькій немає прийменників — натомість є післяйменники (edatlar), які стоять після іменника і часто вимагають від нього певного відмінка.",
            "en": {
              "text": "Unlike many languages, Turkish has no prepositions — instead it has postpositions, which come after the noun and often require it to take a specific case."
            }
          },
          {
            "type": "table",
            "title": "Поширені післяйменники",
            "rows": [
              [
                "için",
                "для / заради"
              ],
              [
                "gibi",
                "як / подібно до"
              ],
              [
                "kadar",
                "до / настільки"
              ],
              [
                "ile / -le/-la",
                "з (разом)"
              ],
              [
                "sonra",
                "після"
              ],
              [
                "önce",
                "до / перед"
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
                "Senin için geldim.",
                "Я прийшов(-ла) заради тебе."
              ],
              [
                "İki saat kadar bekledim.",
                "Я чекав(-ла) близько двох годин."
              ]
            ]
          }
        ],
        "titleEn": "Postpositions — A2"
      },
      {
        "id": "ile-with-and",
        "title": "İle bağlacı ve eki -le/-la — A2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Слово ile ('з', 'разом з', а також 'та/і') може стояти окремим словом або приєднуватися як суфікс -le/-la (за гармонією голосних) прямо до іменника.",
            "en": {
              "text": "The word ile ('with', 'together with', also 'and') can stand as a separate word or attach as the suffix -le/-la (following vowel harmony) directly to the noun."
            }
          },
          {
            "type": "table",
            "title": "Дві форми ile",
            "rows": [
              [
                "arkadaşım ile",
                "з моїм другом"
              ],
              [
                "arkadaşımla",
                "з моїм другом (те саме, суфіксом)"
              ],
              [
                "annemle babam",
                "моя мама і тато"
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
                "Kalemle yazdım.",
                "Я написав(-ла) ручкою."
              ],
              [
                "Ailemle geldim.",
                "Я прийшов(-ла) зі своєю сім'єю."
              ]
            ]
          }
        ],
        "titleEn": "Ile: 'With' and 'And' — A2"
      },
      {
        "id": "subordinate-ki",
        "title": "Bağlaç 'ki' — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Запозичений з перської сполучник ki вводить підрядне речення на кшталт англійського 'that' — на відміну від питомих турецьких дієприкметникових конструкцій, він ставиться перед підрядним реченням, а не в кінці.",
            "en": {
              "text": "The Persian-derived conjunction ki introduces a subordinate clause similar to English 'that' — unlike native Turkish participle constructions, it comes before the subordinate clause rather than at the end."
            }
          },
          {
            "type": "table",
            "title": "Приклади з ki",
            "rows": [
              [
                "Biliyorum ki haklısın.",
                "Я знаю, що ти маєш рацію."
              ],
              [
                "Öyle güzel ki anlatamam.",
                "Це так гарно, що я не можу описати."
              ],
              [
                "Umarım ki gelirsin.",
                "Сподіваюся, що ти прийдеш."
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
                "Duydum ki taşınıyorsunuz.",
                "Я чув(-ла), що ви переїжджаєте."
              ],
              [
                "Sanıyordum ki evdesin.",
                "Я думав(-ла), що ти вдома."
              ]
            ]
          }
        ],
        "titleEn": "The Conjunction 'Ki' — B1"
      },
      {
        "id": "relative-clauses-en-an",
        "title": "Sıfat-fiil -en/-an — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від англійської чи української, турецька не має відносних займенників 'який/яка'. Замість цього вживається дієприкметник на -en/-an, коли означуваний іменник є підметом дії в підрядному реченні.",
            "en": {
              "text": "Unlike English or Ukrainian, Turkish has no relative pronoun like 'who/which'. Instead, a participle in -en/-an is used when the noun being described is the subject of the action in the relative clause."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "koşan çocuk",
                "дитина, яка біжить"
              ],
              [
                "gelen mektup",
                "лист, що прийшов"
              ],
              [
                "Türkçe konuşan adam",
                "чоловік, який говорить турецькою"
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
                "Orada oturan kadın öğretmenimdir.",
                "Жінка, яка там сидить, — моя вчителька."
              ],
              [
                "Bunu yapan sensin.",
                "Це ти зробив(-ла) (той, хто це зробив, — ти)."
              ]
            ]
          }
        ],
        "titleEn": "Subject Participle Clauses (-En/-An) — B1"
      },
      {
        "id": "relative-clauses-dik-ecek",
        "title": "Sıfat-fiil -dik/-ecek — B1",
        "emoji": "🧷",
        "sections": [
          {
            "type": "intro",
            "text": "Коли означуваний іменник є додатком (а не підметом) підрядної дії, вживається дієприкметник на -dik (для минулого/теперішнього) або -ecek (для майбутнього), разом з присвійним суфіксом, що позначає діяча.",
            "en": {
              "text": "When the noun being described is the object (not the subject) of the subordinate action, a participle in -dik (past/present) or -ecek (future) is used, together with a possessive suffix marking the doer."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "okuduğum kitap",
                "книга, яку я читаю/читав"
              ],
              [
                "yapacağın iş",
                "робота, яку ти зробиш"
              ],
              [
                "gördüğüm film",
                "фільм, який я бачив(-ла)"
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
                "Aldığın hediye çok güzel.",
                "Подарунок, який ти купив(-ла), дуже гарний."
              ],
              [
                "Söylediğin şeyi anlamadım.",
                "Я не зрозумів(-ла) те, що ти сказав(-ла)."
              ]
            ]
          }
        ],
        "titleEn": "Object Participle Clauses (-Dik/-Ecek) — B1"
      },
      {
        "id": "verbal-nouns",
        "title": "İsim-fiil -me/-ma, -iş — B1",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікси -me/-ma та -iş/-ış/-uş/-üş перетворюють дієслово на іменник ('дія' або 'спосіб дії'), подібно до англійського герундія на -ing.",
            "en": {
              "text": "The suffixes -me/-ma and -iş/-ış/-uş/-üş turn a verb into a noun ('the act of' or 'the way of'), similar to the English gerund '-ing'."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "okumak → okuma",
                "читати → читання"
              ],
              [
                "gülmek → gülüş",
                "сміятися → сміх/спосіб сміху"
              ],
              [
                "yürümek → yürüyüş",
                "ходити → хода/прогулянка"
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
                "Kitap okuma alışkanlığım var.",
                "У мене є звичка читати книги."
              ],
              [
                "Onun gülüşünü seviyorum.",
                "Мені подобається його/її сміх."
              ]
            ]
          }
        ],
        "titleEn": "Verbal Nouns (-Me/-Ma, -İş) — B1"
      },
      {
        "id": "converbs-ip-erek",
        "title": "Zarf-fiil -ip, -erek — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівники -ip (з'єднує послідовні дії — 'зробивши і...') та -erek/-arak (позначає спосіб дії — 'роблячи, за допомогою') дозволяють поєднувати кілька дій в одному реченні без повторення часових суфіксів.",
            "en": {
              "text": "The converbs -ip (links sequential actions — 'having done X and...') and -erek/-arak (marks manner — 'by doing X') let several actions be combined in one sentence without repeating tense suffixes."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "kalkıp gitti",
                "встав і пішов"
              ],
              [
                "gülerek anlattı",
                "розповів(-ла), сміючись"
              ],
              [
                "koşarak geldi",
                "прибіг(-ла), біжачи"
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
                "Eve gidip yattım.",
                "Я пішов(-ла) додому і ліг(-ла) спати."
              ],
              [
                "Ağlayarak anlattı.",
                "Він/вона розповів(-ла) плачучи."
              ]
            ]
          }
        ],
        "titleEn": "Converbs: -Ip, -Erek — B1"
      },
      {
        "id": "converbs-ince-diginde",
        "title": "Zarf-fiil -ince, -diğinde — B1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікси -ince/-ınca та -diğinde/-dığında перекладаються як 'коли' і вказують момент, у який відбувається інша дія.",
            "en": {
              "text": "The suffixes -ince/-ınca and -diğinde/-dığında translate as 'when' and mark the moment at which another action occurs."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "eve gelince",
                "коли (він/вона) прийде додому"
              ],
              [
                "okulu bitirdiğinde",
                "коли (він/вона) закінчить школу"
              ],
              [
                "kapıyı açınca",
                "коли (він/вона) відчинить двері"
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
                "Eve gelince beni ara.",
                "Коли прийдеш додому, подзвони мені."
              ],
              [
                "Onu gördüğümde çok sevindim.",
                "Коли я його побачив(-ла), дуже зрадів(-ла)."
              ]
            ]
          }
        ],
        "titleEn": "Converbs: -İnce, -Diğinde ('When') — B1"
      },
      {
        "id": "converbs-meden-once",
        "title": "-Meden önce / -dikten sonra — B1",
        "emoji": "🔃",
        "sections": [
          {
            "type": "intro",
            "text": "Конструкція -meden önce ('перед тим, як') і -dikten sonra ('після того, як') використовуються, щоб позначити послідовність двох дій у часі, без окремого підрядного сполучника.",
            "en": {
              "text": "The constructions -meden önce ('before') and -dikten sonra ('after') mark the sequence of two actions in time without a separate subordinating conjunction."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "yemeden önce",
                "перед тим, як поїсти"
              ],
              [
                "yedikten sonra",
                "після того, як поїв(-ла)"
              ],
              [
                "uyumadan önce",
                "перед сном"
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
                "Yemekten önce ellerini yıka.",
                "Помий руки перед їжею."
              ],
              [
                "Ders çalıştıktan sonra dinlendim.",
                "Після навчання я відпочив(-ла)."
              ]
            ]
          }
        ],
        "titleEn": "Before/After Clauses — B1"
      },
      {
        "id": "ability-suffix",
        "title": "Yeterlik fiili -ebilmek — A2",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Можливість чи вміння виражається суфіксом -ebil/-abil, вставленим між основою дієслова та часовим суфіксом, — відповідник модального дієслова 'могти/вміти'.",
            "en": {
              "text": "Ability or possibility is expressed with the suffix -ebil/-abil, inserted between the verb stem and the tense suffix — the equivalent of the modal verb 'can/be able to'."
            }
          },
          {
            "type": "formula",
            "title": "yüzmek (плавати) + -ebil",
            "rows": [
              [
                "ben",
                "yüzebilirim",
                "я вмію/можу плавати"
              ],
              [
                "sen",
                "yüzebilirsin",
                "ти вмієш/можеш плавати"
              ],
              [
                "o",
                "yüzebilir",
                "він/вона вміє/може плавати"
              ],
              [
                "biz",
                "yüzebiliriz",
                "ми вміємо/можемо плавати"
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
                "Türkçe konuşabiliyorum.",
                "Я можу говорити турецькою."
              ],
              [
                "Yarın gelebilir misin?",
                "Ти зможеш прийти завтра?"
              ]
            ]
          }
        ],
        "titleEn": "Ability Suffix (-Ebilmek, 'Can') — A2"
      },
      {
        "id": "impossibility-suffix",
        "title": "Olumsuz yeterlik -eme(mek) — A2",
        "emoji": "🚷",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечна форма можливості утворюється суфіксом -eme/-ama ('не могти') — комбінацією можливості (-e/-a) і заперечення (-me), яка звучить як єдиний суфікс.",
            "en": {
              "text": "The negative form of ability is formed with the suffix -eme/-ama ('cannot') — a fused combination of the ability marker (-e/-a) and negation (-me)."
            }
          },
          {
            "type": "formula",
            "title": "gelmek (приходити) + -eme",
            "rows": [
              [
                "ben",
                "gelemem",
                "я не можу прийти"
              ],
              [
                "sen",
                "gelemezsin",
                "ти не можеш прийти"
              ],
              [
                "o",
                "gelemez",
                "він/вона не може прийти"
              ],
              [
                "biz",
                "gelemeyiz",
                "ми не можемо прийти"
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
                "Bugün gelemem, çok işim var.",
                "Сьогодні я не можу прийти, у мене багато справ."
              ],
              [
                "Bu soruyu çözemedim.",
                "Я не зміг(-зуміла) розв'язати це питання."
              ]
            ]
          }
        ],
        "titleEn": "Impossibility (-Eme, 'Cannot') — A2"
      },
      {
        "id": "passive-voice",
        "title": "Edilgen çatı -il/-in — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється суфіксом -il/-ıl/-ul/-ül (після приголосної) або -n/-in (після голосної), коли підмет речення зазнає дії, а не виконує її.",
            "en": {
              "text": "The passive voice is formed with the suffix -il/-ıl/-ul/-ül (after a consonant) or -n/-in (after a vowel), when the subject of the sentence undergoes the action rather than performing it."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "yazmak → yazılmak",
                "писати → бути написаним"
              ],
              [
                "okumak → okunmak",
                "читати → бути прочитаним"
              ],
              [
                "yapmak → yapılmak",
                "робити → бути зробленим"
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
                "Bu kitap 1990'da yazıldı.",
                "Ця книга була написана у 1990 році."
              ],
              [
                "Kapı kapatıldı.",
                "Двері були зачинені."
              ]
            ]
          }
        ],
        "titleEn": "Passive Voice — B1"
      },
      {
        "id": "reflexive-voice",
        "title": "Dönüşlü çatı -in/-ın — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслівний зворотний стан (-in/-ın/-un/-ün) показує, що дія спрямована на самого діяча — 'сам себе'.",
            "en": {
              "text": "The reflexive voice suffix (-in/-ın/-un/-ün) shows that the action is directed back at the doer — 'oneself'."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "yıkamak → yıkanmak",
                "мити → митися"
              ],
              [
                "giydirmek → giyinmek",
                "одягати → одягатися"
              ],
              [
                "taramak → taranmak",
                "чесати → чесатися"
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
                "Sabah erken yıkanırım.",
                "Я миюся рано вранці."
              ],
              [
                "Çabuk giyindi.",
                "Він/вона швидко одягнувся(-лася)."
              ]
            ]
          }
        ],
        "titleEn": "Reflexive Voice — B1"
      },
      {
        "id": "reciprocal-voice",
        "title": "İşteş çatı -iş/-ış — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Взаємний стан (-iş/-ış/-uş/-üş) вказує, що дію виконують кілька осіб одна щодо одної, — 'один одного'.",
            "en": {
              "text": "The reciprocal voice (-iş/-ış/-uş/-üş) shows that several people perform the action toward one another — 'each other'."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "görmek → görüşmek",
                "бачити → бачитися одне з одним"
              ],
              [
                "selamlamak → selamlaşmak",
                "вітати → вітатися одне з одним"
              ],
              [
                "yazmak → yazışmak",
                "писати → листуватися"
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
                "Yarın görüşürüz.",
                "Побачимося завтра."
              ],
              [
                "Uzun süredir mektuplaşıyorlar.",
                "Вони давно листуються одне з одним."
              ]
            ]
          }
        ],
        "titleEn": "Reciprocal Voice — B1"
      },
      {
        "id": "causative-voice",
        "title": "Ettirgen çatı -dir/-tir — B1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативний (спонукальний) стан (-dir/-tir, -t, -ir та інші варіанти) показує, що підмет змушує або дозволяє комусь виконати дію, а не виконує її сам.",
            "en": {
              "text": "The causative voice (-dir/-tir, -t, -ir, and other variants) shows that the subject makes or lets someone else perform the action, rather than performing it themselves."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "yapmak → yaptırmak",
                "робити → змушувати зробити"
              ],
              [
                "okumak → okutmak",
                "читати → змушувати читати"
              ],
              [
                "içmek → içirmek",
                "пити → напувати"
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
                "Saçımı kestirdim.",
                "Я підстригся(-глася) (у перукаря)."
              ],
              [
                "Ona çayı içirdi.",
                "Він/вона напоїв(-ла) його/її чаєм."
              ]
            ]
          }
        ],
        "titleEn": "Causative Voice — B1"
      },
      {
        "id": "comparative-superlative",
        "title": "Karşılaştırma: daha / en — A2",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від багатьох мов, турецькі прикметники не змінюють форму для порівняння — замість цього перед прикметником ставиться daha ('більш') для вищого ступеня та en ('най-') для найвищого.",
            "en": {
              "text": "Unlike many languages, Turkish adjectives don't change form for comparison — instead, daha ('more') is placed before the adjective for the comparative, and en ('most') for the superlative."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "büyük → daha büyük → en büyük",
                "великий → більший → найбільший"
              ],
              [
                "güzel → daha güzel → en güzel",
                "гарний → гарніший → найгарніший"
              ],
              [
                "Ali'den daha uzun",
                "вищий, ніж Алі"
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
                "Bu ev daha büyük.",
                "Цей дім більший."
              ],
              [
                "O en zeki öğrenci.",
                "Він/вона найрозумніший(-а) учень(-иця)."
              ]
            ]
          }
        ],
        "titleEn": "Comparative and Superlative — A2"
      },
      {
        "id": "adjective-order",
        "title": "Sıfat sırası — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "У турецькій прикметник завжди стоїть перед іменником, який він описує, і не змінює форми залежно від роду чи числа іменника (роду в турецькій взагалі немає).",
            "en": {
              "text": "In Turkish, the adjective always comes before the noun it describes and doesn't change form based on the noun's gender or number (Turkish has no grammatical gender at all)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "büyük ev",
                "великий дім"
              ],
              [
                "küçük çocuklar",
                "маленькі діти"
              ],
              [
                "güzel bir gün",
                "гарний день"
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
                "Kırmızı araba benim.",
                "Червона машина моя."
              ],
              [
                "Uzun bir yolculuktu.",
                "Це була довга подорож."
              ]
            ]
          }
        ],
        "titleEn": "Adjective Order — A2"
      },
      {
        "id": "adjectives-no-agreement",
        "title": "Sıfatlarda uyum yoktur — A1",
        "emoji": "🟰",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники в турецькій незмінні: вони не узгоджуються з іменником ані в числі, ані у відмінку — форма прикметника залишається однаковою незалежно від того, до якого слова він відноситься.",
            "en": {
              "text": "Turkish adjectives are invariable: they don't agree with the noun in either number or case — the adjective's form stays the same no matter which word it modifies."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "güzel kız",
                "гарна дівчина"
              ],
              [
                "güzel kızlar",
                "гарні дівчата (прикметник не змінюється)"
              ],
              [
                "güzel kızları gördüm",
                "я побачив(-ла) гарних дівчат"
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
                "Küçük köpek uyuyor.",
                "Маленький пес спить."
              ],
              [
                "Küçük köpekleri seviyorum.",
                "Мені подобаються маленькі пси."
              ]
            ]
          }
        ],
        "titleEn": "No Adjective-Noun Agreement — A1"
      },
      {
        "id": "quantifiers",
        "title": "Belirsizlik sıfatları — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Кількісні слова (çok, biraz, bazı, her, hiç та інші) вказують невизначену кількість або охоплення й уживаються перед іменником, який після них зазвичай залишається в однині.",
            "en": {
              "text": "Quantifier words (çok, biraz, bazı, her, hiç, and others) indicate an indefinite amount or scope and are used before a noun, which usually stays in the singular after them."
            }
          },
          {
            "type": "table",
            "title": "Поширені квантифікатори",
            "rows": [
              [
                "çok",
                "багато / дуже"
              ],
              [
                "biraz",
                "трохи"
              ],
              [
                "bazı",
                "деякі"
              ],
              [
                "her",
                "кожен"
              ],
              [
                "hiç",
                "жоден / зовсім"
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
                "Çok param yok.",
                "У мене немає багато грошей."
              ],
              [
                "Her gün spor yapıyorum.",
                "Я займаюся спортом щодня."
              ]
            ]
          }
        ],
        "titleEn": "Quantifiers and Indefinite Pronouns — A2"
      },
      {
        "id": "compound-nouns-tamlama",
        "title": "İsim tamlaması — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Турецька має два типи іменникових словосполучень: означений (belirtili) — обидва слова мають закінчення (родовий + присвійний), і неозначений (belirtisiz) — перше слово без закінчення, а друге має лише присвійний суфікс, вказуючи на тип чи призначення.",
            "en": {
              "text": "Turkish has two types of noun compounds: definite (belirtili) — both words take an ending (genitive + possessive), and indefinite (belirtisiz) — the first word takes no ending while the second takes only the possessive suffix, indicating type or purpose."
            }
          },
          {
            "type": "table",
            "title": "Означений vs неозначений тамламa",
            "rows": [
              [
                "öğrencinin kitabı",
                "книга (того) студента (означений)"
              ],
              [
                "öğrenci kitabı",
                "студентська книга / підручник (неозначений)"
              ],
              [
                "Türkiye'nin başkenti",
                "столиця Туреччини"
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
                "Kapının rengi mavi.",
                "Колір дверей синій."
              ],
              [
                "Türk kahvesi çok güzel.",
                "Турецька кава дуже гарна (смачна)."
              ]
            ]
          }
        ],
        "titleEn": "Noun Compounds (Izafet) — B1"
      },
      {
        "id": "reflexive-pronoun-kendi",
        "title": "Dönüşlü zamir kendi — A2",
        "emoji": "🪄",
        "sections": [
          {
            "type": "intro",
            "text": "Слово kendi ('сам, себе') виражає зворотність дії й відмінюється разом із присвійними суфіксами відповідно до особи.",
            "en": {
              "text": "The word kendi ('self') expresses reflexivity and takes possessive suffixes to match the person."
            }
          },
          {
            "type": "table",
            "title": "Kendi + присвійні суфікси",
            "rows": [
              [
                "kendim",
                "я сам / себе"
              ],
              [
                "kendin",
                "ти сам / себе"
              ],
              [
                "kendisi",
                "він/вона сам(-а) / себе"
              ],
              [
                "kendimiz",
                "ми самі / себе"
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
                "Kendimi tanıtayım.",
                "Дозвольте представитися (сам себе)."
              ],
              [
                "Kendine iyi bak.",
                "Бережи себе."
              ]
            ]
          }
        ],
        "titleEn": "Reflexive Pronoun: Kendi — A2"
      },
      {
        "id": "reciprocal-pronoun-birbiri",
        "title": "Karşılıklı zamir birbiri — A2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Слово birbiri(ni) ('один одного') виражає взаємність дії між двома чи більше особами й у реченні часто приймає відмінкове закінчення.",
            "en": {
              "text": "The word birbiri(ni) ('each other') expresses mutual action between two or more people and often takes a case ending in the sentence."
            }
          },
          {
            "type": "table",
            "title": "Приклади з birbiri",
            "rows": [
              [
                "birbirini seviyorlar",
                "вони люблять одне одного"
              ],
              [
                "birbirine baktılar",
                "вони подивилися одне на одного"
              ],
              [
                "birbirimize yardım ederiz",
                "ми допомагаємо одне одному"
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
                "Uzun zamandır birbirimizi görmedik.",
                "Ми давно не бачили одне одного."
              ],
              [
                "Birbirlerine hediye verdiler.",
                "Вони подарували подарунки одне одному."
              ]
            ]
          }
        ],
        "titleEn": "Reciprocal Pronoun: Birbiri — A2"
      },
      {
        "id": "cardinal-numbers",
        "title": "Sayılar (asal) — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Кількісні числівники у турецькій прості й регулярні: числа від 11 до 19 утворюються поєднанням 'on' (десять) з одиницями, а десятки й сотні мають свої окремі корені.",
            "en": {
              "text": "Cardinal numbers in Turkish are simple and regular: numbers 11–19 combine 'on' (ten) with the units, while tens and hundreds have their own separate roots."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "bir, iki, üç",
                "один, два, три"
              ],
              [
                "on, yirmi, otuz",
                "десять, двадцять, тридцять"
              ],
              [
                "yüz, bin, milyon",
                "сто, тисяча, мільйон"
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
                "On beş yaşındayım.",
                "Мені п'ятнадцять років."
              ],
              [
                "İki yüz lira ödedim.",
                "Я заплатив(-ла) двісті лір."
              ]
            ]
          }
        ],
        "titleEn": "Cardinal Numbers — A1"
      },
      {
        "id": "ordinal-numbers",
        "title": "Sıra sayıları — A1",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються додаванням суфікса -inci/-ıncı/-uncu/-üncü до кількісного числа за законом гармонії голосних.",
            "en": {
              "text": "Ordinal numbers are formed by adding the suffix -inci/-ıncı/-uncu/-üncü to the cardinal number, following vowel harmony."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "bir → birinci",
                "один → перший"
              ],
              [
                "iki → ikinci",
                "два → другий"
              ],
              [
                "üç → üçüncü",
                "три → третій"
              ],
              [
                "beş → beşinci",
                "п'ять → п'ятий"
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
                "Bu benim ilk günüm.",
                "Це мій перший день."
              ],
              [
                "Üçüncü katta oturuyorum.",
                "Я живу на третьому поверсі."
              ]
            ]
          }
        ],
        "titleEn": "Ordinal Numbers — A1"
      },
      {
        "id": "telling-time",
        "title": "Saat sorma ve söyleme — A1",
        "emoji": "🕒",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб запитати час, кажуть 'Saat kaç?' ('Котра година?'), а щоб відповісти — 'Saat...' плюс число, зі спеціальними конструкціями для 'за' та 'з чвертю/половиною'.",
            "en": {
              "text": "To ask the time, you say 'Saat kaç?' ('What time is it?'), and to answer, 'Saat...' plus the number, with special constructions for 'to' and 'quarter/half past'."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Saat kaç?",
                "Котра година?"
              ],
              [
                "Saat üç.",
                "Третя година."
              ],
              [
                "Saat üçü çeyrek geçiyor.",
                "Чверть на четверту."
              ],
              [
                "Saat dörde çeyrek var.",
                "За чверть четверта."
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
                "Saat kaçta buluşuyoruz?",
                "О котрій ми зустрічаємось?"
              ],
              [
                "Saat yediyi yirmi geçiyor.",
                "Двадцять хвилин на восьму."
              ]
            ]
          }
        ],
        "titleEn": "Telling Time — A1"
      },
      {
        "id": "days-months-dates",
        "title": "Günler, aylar, tarihler — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Дні тижня й місяці в турецькій пишуться з малої літери. Дата вказується у форматі 'число + місяць у родовому відмінку'.",
            "en": {
              "text": "Days of the week and months in Turkish are written with a lowercase letter. Dates are given in the format 'day number + month in the genitive case'."
            }
          },
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "pazartesi, salı, çarşamba",
                "понеділок, вівторок, середа"
              ],
              [
                "perşembe, cuma, cumartesi",
                "четвер, п'ятниця, субота"
              ],
              [
                "pazar",
                "неділя"
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
                "Bugün pazartesi.",
                "Сьогодні понеділок."
              ],
              [
                "Doğum günüm 5 Mayıs'ta.",
                "Мій день народження 5 травня."
              ]
            ]
          }
        ],
        "titleEn": "Days, Months, and Dates — A1"
      },
      {
        "id": "seasons-weather",
        "title": "Mevsimler ve hava durumu — A1",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "intro",
            "text": "Опис погоди зазвичай будується безособовою конструкцією — іменник (наприклад, назва явища) плюс дієслово, або прикметник погоди плюс допоміжне дієслово-еквівалент 'бути'.",
            "en": {
              "text": "Weather descriptions are usually built with an impersonal construction — a weather noun plus a verb, or a weather adjective plus the equivalent of 'to be'."
            }
          },
          {
            "type": "table",
            "title": "Пори року та погода",
            "rows": [
              [
                "ilkbahar, yaz, sonbahar, kış",
                "весна, літо, осінь, зима"
              ],
              [
                "Hava güneşli.",
                "Погода сонячна."
              ],
              [
                "Yağmur yağıyor.",
                "Йде дощ."
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
                "Kışın çok soğuk oluyor.",
                "Взимку буває дуже холодно."
              ],
              [
                "Yazın deniz kenarına gideriz.",
                "Влітку ми їздимо на море."
              ]
            ]
          }
        ],
        "titleEn": "Seasons and Weather — A1"
      },
      {
        "id": "reported-speech",
        "title": "Dolaylı anlatım — B1",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Непряма мова в турецькій зазвичай передається дієслівним іменником на -diğini/-eceğini (залежно від часу) разом із дієсловами 'казати' (söylemek) чи 'думати' (düşünmek), а не окремим підрядним реченням, як в українській.",
            "en": {
              "text": "Reported speech in Turkish is usually expressed with a verbal-noun clause in -diğini/-eceğini (depending on tense) together with verbs like 'to say' (söylemek) or 'to think' (düşünmek), rather than a separate subordinate clause as in English."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Geliyor. → Geldiğini söyledi.",
                "Він приходить. → Він сказав, що приходить."
              ],
              [
                "Gelecek. → Geleceğini söyledi.",
                "Він прийде. → Він сказав, що прийде."
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
                "Hasta olduğunu söyledi.",
                "Він/вона сказав(-ла), що хворий(-а)."
              ],
              [
                "Yarın geleceğini düşünüyorum.",
                "Я думаю, що він/вона прийде завтра."
              ]
            ]
          }
        ],
        "titleEn": "Reported Speech — B1"
      },
      {
        "id": "indirect-questions",
        "title": "Dolaylı sorular — B1",
        "emoji": "🤔",
        "sections": [
          {
            "type": "intro",
            "text": "Непрямі питання утворюються так само дієслівними іменниками (-diğini, -ip -medğini для 'чи') разом із дієсловом 'запитати' (sormak) чи 'не знати' (bilmemek).",
            "en": {
              "text": "Indirect questions are formed the same way, with verbal-noun clauses (-diğini, or -ip -mediğini for 'whether') together with verbs like 'to ask' (sormak) or 'not to know' (bilmemek)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Nereye gidiyorsun? → Nereye gittiğini sordu.",
                "Куди ти йдеш? → Він запитав, куди я йду."
              ],
              [
                "Geldi mi? → Gelip gelmediğini bilmiyorum.",
                "Він прийшов? → Я не знаю, чи він прийшов."
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
                "Saat kaç olduğunu bilmiyorum.",
                "Я не знаю, котра година."
              ],
              [
                "Ne istediğini anlamadım.",
                "Я не зрозумів(-ла), чого він/вона хоче."
              ]
            ]
          }
        ],
        "titleEn": "Indirect Questions — B1"
      },
      {
        "id": "formal-informal-register",
        "title": "Sen / siz — resmiyet — A1",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Займенник siz використовується як ввічлива форма звертання до однієї людини (аналог 'ви' замість 'ти') і як звичайне звертання до кількох осіб — контекст визначає значення.",
            "en": {
              "text": "The pronoun siz is used as the polite form of address to one person (like formal 'you' instead of informal 'you') and as the ordinary way to address multiple people — context determines the meaning."
            }
          },
          {
            "type": "table",
            "title": "Sen vs siz",
            "rows": [
              [
                "sen geliyorsun",
                "ти йдеш (неформально)"
              ],
              [
                "siz geliyorsunuz",
                "ви йдете (ввічливо / до кількох)"
              ],
              [
                "Adınız ne?",
                "Як вас звати? (ввічливо)"
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
                "Nasılsınız?",
                "Як ви поживаєте? (ввічливо)"
              ],
              [
                "Sen nasılsın?",
                "Як ти?"
              ]
            ]
          }
        ],
        "titleEn": "Formal vs Informal Register — A1"
      },
      {
        "id": "greetings-common-phrases",
        "title": "Selamlaşma ve kalıp ifadeler — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "intro",
            "text": "У турецькій є багато стійких формул ввічливості на кожен випадок — привітання, прощання, побажання перед їжею чи сном.",
            "en": {
              "text": "Turkish has many fixed politeness formulas for every occasion — greetings, farewells, wishes before eating or sleeping."
            }
          },
          {
            "type": "table",
            "title": "Поширені фрази",
            "rows": [
              [
                "Merhaba / Selam",
                "Привіт"
              ],
              [
                "Nasılsın?",
                "Як справи?"
              ],
              [
                "Görüşürüz",
                "До зустрічі"
              ],
              [
                "Afiyet olsun",
                "Смачного"
              ],
              [
                "Kolay gelsin",
                "Легкої праці"
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
                "Günaydın, nasılsın?",
                "Доброго ранку, як справи?"
              ],
              [
                "İyi geceler, kolay gelsin!",
                "На добраніч, легкої праці!"
              ]
            ]
          }
        ],
        "titleEn": "Greetings and Common Phrases — A1"
      },
      {
        "id": "emphatic-particle-de-da",
        "title": "Vurgu eki de/da — A2",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Частка de/da ('також', 'теж') пишеться окремим словом (на відміну від омонімічного місцевого відмінка -de/-da, який пишеться разом) і додає значення 'теж, також' до слова, після якого стоїть.",
            "en": {
              "text": "The particle de/da ('also, too') is written as a separate word (unlike the homophonous locative case suffix -de/-da, which is written attached) and adds the meaning 'also, too' to the word it follows."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Ben de geliyorum.",
                "Я теж іду."
              ],
              [
                "O da öğrenci.",
                "Він/вона теж студент(ка)."
              ],
              [
                "Sen de mi buradasın?",
                "Ти теж тут?"
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
                "Sen de mi buradasın?",
                "Ти теж тут?"
              ],
              [
                "Bunu ben de bilmiyorum.",
                "Я цього теж не знаю."
              ]
            ]
          }
        ],
        "titleEn": "The Particle De/Da ('Too, Also') — A2"
      },
      {
        "id": "hedging-modality",
        "title": "Belirsizlik ifadeleri: galiba, sanırım — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Слова galiba ('здається'), sanırım ('гадаю'), belki ('можливо') і herhalde ('напевно') додають відтінок невпевненості чи припущення до висловлювання, не змінюючи форми дієслова.",
            "en": {
              "text": "The words galiba ('it seems'), sanırım ('I think'), belki ('maybe'), and herhalde ('probably') add a shade of uncertainty or supposition to a statement without changing the verb form."
            }
          },
          {
            "type": "table",
            "title": "Слова невпевненості",
            "rows": [
              [
                "galiba",
                "здається"
              ],
              [
                "sanırım",
                "гадаю"
              ],
              [
                "belki",
                "можливо"
              ],
              [
                "herhalde",
                "напевно"
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
                "Galiba yağmur yağacak.",
                "Здається, піде дощ."
              ],
              [
                "Sanırım evde unuttum.",
                "Гадаю, я забув(-ла) це вдома."
              ]
            ]
          }
        ],
        "titleEn": "Hedging and Modality — B1"
      },
      {
        "id": "idioms-common-expressions",
        "title": "Deyimler ve kalıp ifadeler — B1",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Турецька мова багата на ідіоми, значення яких не завжди можна вивести з окремих слів. Ось кілька найпоширеніших.",
            "en": {
              "text": "Turkish is rich in idioms whose meaning can't always be deduced from the individual words. Here are a few of the most common ones."
            }
          },
          {
            "type": "table",
            "title": "Поширені ідіоми",
            "rows": [
              [
                "Eline sağlık",
                "Дякую (буквально: 'здоров'я твоїй руці', про приготовану їжу)"
              ],
              [
                "Gözün aydın",
                "Радий(-а) за тебе (з приводу хорошої новини)"
              ],
              [
                "Ağzından yel alsın",
                "Твоїми б устами та мед пити"
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
                "Yemek çok güzeldi, eline sağlık!",
                "Їжа була дуже смачна, дякую!"
              ],
              [
                "Başın sağ olsun.",
                "Мої співчуття (буквально: 'нехай твоя голова буде здоровою')."
              ]
            ]
          }
        ],
        "titleEn": "Idioms and Fixed Expressions — B1"
      },
      {
        "id": "collocations",
        "title": "Sık kullanılan kelime öbekleri — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі дієслова в турецькій регулярно поєднуються з певними іменниками, утворюючи стійкі словосполучення (колокації), які варто запам'ятовувати цілком, а не перекладати дослівно.",
            "en": {
              "text": "Certain verbs in Turkish regularly pair with specific nouns to form fixed collocations, which are best memorized as whole units rather than translated word for word."
            }
          },
          {
            "type": "table",
            "title": "Приклади колокацій",
            "rows": [
              [
                "karar vermek",
                "прийняти рішення (букв. 'дати рішення')"
              ],
              [
                "yardım etmek",
                "допомагати (букв. 'робити допомогу')"
              ],
              [
                "dikkat etmek",
                "звертати увагу"
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
                "Sonunda karar verdim.",
                "Нарешті я прийняв(-ла) рішення."
              ],
              [
                "Lütfen dikkat et.",
                "Будь ласка, будь уважним(-ою)."
              ]
            ]
          }
        ],
        "titleEn": "Common Collocations — B1"
      },
      {
        "id": "word-formation-suffixes",
        "title": "Yapım ekleri -ci, -lik, -li, -siz — B1",
        "emoji": "🏗️",
        "sections": [
          {
            "type": "intro",
            "text": "Словотвірні суфікси дозволяють утворювати нові слова: -ci/-cı/-cu/-cü (професія/прихильник), -lik/-lık (абстрактне поняття/місце), -li/-lı (наявність ознаки), -siz/-sız (відсутність ознаки).",
            "en": {
              "text": "Derivational suffixes let you build new words: -ci/-cı/-cu/-cü (profession/enthusiast), -lik/-lık (abstract concept/place), -li/-lı (having a quality), -siz/-sız (lacking a quality)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ekmek → ekmekçi",
                "хліб → пекар"
              ],
              [
                "mutlu → mutluluk",
                "щасливий → щастя"
              ],
              [
                "tuz → tuzlu / tuzsuz",
                "сіль → солоний / несолоний"
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
                "O bir gazeteci.",
                "Він/вона журналіст(ка)."
              ],
              [
                "Bu yemek çok tuzlu.",
                "Ця страва дуже солона."
              ]
            ]
          }
        ],
        "titleEn": "Derivational Suffixes — B1"
      }
    ]
  },
  {
    "id": "exceptions",
    "title": "Виключення",
    "titleEn": "Exceptions",
    "emoji": "⚠️",
    "rules": [
      {
        "id": "irregular-verbs",
        "title": "Düzensiz fiiller — A2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча турецька дуже регулярна мова, є кілька дієслів із непередбачуваними змінами основи: demek ('казати') змінює e на i перед деякими суфіксами, yemek ('їсти') має форму yiyor замість очікуваної *yeyor, а існування/відсутність передається окремими незмінними словами var/yok, які не мають інфінітива.",
            "en": {
              "text": "Although Turkish is a very regular language, a handful of verbs have unpredictable stem changes: demek ('to say') changes e to i before certain suffixes, yemek ('to eat') has the form yiyor instead of the expected *yeyor, and existence/absence is expressed with the separate invariable words var/yok, which have no infinitive."
            }
          },
          {
            "type": "table",
            "title": "Приклади винятків",
            "rows": [
              [
                "demek → diyor, dedi",
                "казати → каже, сказав (e→i)"
              ],
              [
                "yemek → yiyor",
                "їсти → їсть (не *yeyor)"
              ],
              [
                "var / yok",
                "є / немає (без інфінітива)"
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
                "Bana ne dedin?",
                "Що ти мені сказав(-ла)?"
              ],
              [
                "Evde ekmek yok.",
                "Вдома немає хліба."
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs — A2"
      },
      {
        "id": "spelling-rules",
        "title": "Yazım kuralları — B1",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька правил правопису варто запам'ятати окремо: власні назви відокремлюються від відмінкового суфікса апострофом, а частку de/da ('теж') завжди пишуть окремо від слова, на відміну від омонімічного місцевого відмінка -de/-da, який пишеться разом.",
            "en": {
              "text": "A few spelling rules are worth memorizing separately: proper nouns are separated from their case suffix by an apostrophe, and the particle de/da ('also') is always written as a separate word, unlike the homophonous locative case suffix -de/-da, which is attached."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "İstanbul'da",
                "в Стамбулі (апостроф перед відмінком)"
              ],
              [
                "2024'te",
                "у 2024-му (апостроф після цифри)"
              ],
              [
                "Ben de geldim. / Evde kaldım.",
                "Я теж прийшов. / Я залишився вдома."
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
                "Ali'nin arabası kırmızı.",
                "Машина Алі червона."
              ],
              [
                "O da benimle geldi.",
                "Він/вона теж прийшов(-ла) зі мною."
              ]
            ]
          }
        ],
        "titleEn": "Spelling Rules — B1"
      },
      {
        "id": "plural-exceptions",
        "title": "Çoğul ekinin kullanılmadığı durumlar — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Після числівника чи слів на позначення кількості іменник у турецькій залишається в однині, оскільки саме число вже вказує на множинність, — на відміну від багатьох інших мов.",
            "en": {
              "text": "After a number or a quantity word, the noun stays in the singular in Turkish, since the number itself already indicates plurality — unlike in many other languages."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "üç kitap",
                "три книги (не kitaplar)"
              ],
              [
                "beş çocuk",
                "п'ять дітей (не çocuklar)"
              ],
              [
                "birçok insan",
                "багато людей (однина)"
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
                "Masada dört sandalye var.",
                "На столі є чотири стільці."
              ],
              [
                "Sınıfta yirmi öğrenci var.",
                "У класі двадцять учнів."
              ]
            ]
          }
        ],
        "titleEn": "When Not to Use the Plural Suffix — A2"
      }
    ]
  }
];
