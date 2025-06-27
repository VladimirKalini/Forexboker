import React from 'react';
import './Education.css'; 
import BookCrypto from '../../media/BookCrypto.png';
import { Helmet } from 'react-helmet-async';
import { useLang } from '../../components/LangContext';
import BlueBlock from '../../components/BlueBlock';
import PhotoHeader from '../../components/PhotoHeader';

import LibraryHead from '../../media/LibraryHead.png'

import Book1 from '../../media/Book 1.png'
import Book2 from '../../media/Book 2.png'
import Book3 from '../../media/Book 3.png'
import Book4 from '../../media/Book 4.png'
import Book5 from '../../media/Book 5.png'
import Book6 from '../../media/Book 6.png'
import Book7 from '../../media/Book 7.png'
import Book8 from '../../media/Book 8.png'

const booksData = [
    {
      id: 1,
      title: {
        ru: '«Самоучитель трейдинга: практическое пособие для новичков»',
        en: '«The Daily Trading Coach: 101 Lessons for Becoming Your Own Trading Psychologist»'
      },
      author: {
        ru: 'БРЕТТ СТИНБАРДЖЕР',
        en: 'BRETT N. STEENBARGER'
      },
      description: {
        ru: [
          'В данном случае все понятно из названия. Книга написана специально для тех, кто только открывает для себя торговлю. Автор уделяет внимание ключевым вопросам, которые интересуют торговцев: с чего начинать и как организовать учебный процесс, благодаря чему можно улучшить показатели торговли и уменьшить потери.',
          'Стинбарджер считает, что трейдер тренируется подобно спортсмену и благодаря правильно организованным занятиям может изо дня в день улучшать свои показатели.'
        ],
        en: [
          'In this case, everything is clear from the title. The book is written specifically for those who are just discovering trading. The author focuses on the key issues that traders are interested in: where to start and how to organize the training process, thanks to which it is possible to improve trading performance and reduce losses.',
          'Steenbarger believes that a trader trains like an athlete and through properly organized training can improve his performance from day to day.'
        ]
      },
      imageSrc: Book1,
    },
    {
      id: 2,
      title: {
        ru: '«Малая энциклопедия трейдера»',
        en: '«The Little Encyclopedia of a Trader»'
      },
      author: {
        ru: 'ЭРИК НАЙМАН',
        en: 'ERIC NAIMAN'
      },
      description: {
        ru: [
          'Эта книга также подойдет для тех, кто хочет получить базовые знания о торговле. Известный украинский инвестор рассказывает о том, как устроены валютный и фондовый рынок, разбирает основы фундаментального и технического анализа, приводит главные термины и понятия.',
          'Благодаря этой книге можно построить надежный фундамент понимания торговли и дальше углубляться в особенности каждого направления.'
        ],
        en: [
          'This book is also suitable for those who want to get basic knowledge about trading. A well-known Ukrainian investor tells about how the currency and stock markets are organized, discusses the basics of fundamental and technical analysis, and provides the main terms and concepts.',
          'Thanks to this book, you can build a solid foundation for understanding trading and further delve into the peculiarities of each direction.'
        ]
      },
      imageSrc: Book2,
    },
    {
      id: 3,
      title: {
        ru: '«Как играть и выигрывать на бирже»',
        en: '«Trading for a Living: Psychology, Trading Tactics, Money Management»'
      },
      author: {
        ru: 'АЛЕКСАНДР ЭЛДЕР',
        en: 'ALEXANDER ELDER'
      },
      description: {
        ru: [
          'Многие трейдеры начали открывать для себя мир торговли именно с этой книги. Автор сам прошел длительный путь трейдинга и рассказывает не только о теории, но и о личном опыте, что делает ее особенно интересной.',
          'Важно, что Элдер уделяет значительное внимание не только различным торговым стратегиям и анализу рынков, но и психологии трейдинга. В частности, почему успешные работники инвестиционных компаний терпят убытки, как только инвестируют собственные средства, и как не повторять их ошибок.'
        ],
        en: [
           'Many traders began to discover the world of trading with this book. The author himself has traveled a long way of trading and talks not only about theory but also about personal experience, which makes it particularly interesting.',
           'It is important that Elder pays considerable attention not only to various trading strategies and market analysis, but also to the psychology of trading. In particular, why successful employees of investment companies suffer losses as soon as they invest their own funds, and how not to repeat their mistakes.'
        ]
      },
      imageSrc: Book3,
    },
    {
        id: 4,
        title: {
          ru: '«Курс активного трейдера»',
          en: '«Active Trader Course»'
        },
        author: {
          ru: 'АЛЕКСАНДР ГЕРЧИК',
          en: 'ALEXANDER GERCHIK'
        },
        description: {
          ru: [
            'Это произведение еще одного достаточно известного автора, который делится личным опытом и собственной системой торговли. В книге представлен учебный курс. Автор постепенно усложняет материал, начиная с азов и базовой информации и постепенно углубляясь в особенности торговли. ',
            'Одно из преимуществ предлагаемой стратегии в том, что ее автор уже в течение 10 лет каждый месяц торгует «в плюс» и не фиксирует убытков.'
          ],
          en: [
            'This is the work of another quite famous author who shares his personal experience and his own trading system. The book presents a training course. The author gradually complicates the material, starting from the basics and basic information and gradually deepening into the peculiarities of trading.',
            'One of the advantages of the proposed strategy is that its author has been trading “in the plus” every month for 10 years and does not record losses.'
          ]
        },
        imageSrc: Book4,
      },
      {
        id: 5,
        title: {
          ru: '«Торговый хаос»',
          en: '«Trade chaos»'
        },
        author: {
          ru: 'БИЛЛ ВИЛЬЯМСА, ДЖАСТИН ГРЕГОРИ-ВИЛЬЯМС',
          en: 'BILL WILLIAMS, JUSTIN GREGORY-WILLIAMS.'
        },
        description: {
          ru: [
            '«Торговый хаос» – это более специализированная книга для тех, кто уже имеет базовые знания о торговле. Авторы рассказывают о прогнозировании движения рынков и о том, как понять какой из трендов набирает силу. Эти навыки можно использовать для торговли валютами, акциями, фьючерсами и другими активами. ',
            'В своей книге авторы оспаривают некоторые устоявшиеся понятия фундаментального анализа и предлагают собственные решения. В частности, детально рассказывается о том, как рынками управляют мнения и факты и какое значение имеют психологические особенности участников торгов.'
          ],
          en: [
            '«Trading Chaos» is a more specialized book for those who already have a basic knowledge of trading. The authors talk about predicting market movements and how to understand which trends are gaining strength. These skills can be used to trade currencies, stocks, futures and other assets.',
            'In their book, the authors challenge some of the established concepts of fundamental analysis and offer their own solutions. In particular, they detail how markets are governed by opinions and facts and the importance of the psychological characteristics of traders.'
          ]
        },
        imageSrc: Book5,
      },
      {
        id: 6,
        title: {
          ru: '«Путь Черепах»',
          en: '«The Way of the Turtles»'
        },
        author: {
          ru: 'КУРТИС ФЕЙС',
          en: 'CURTIS FEES.'
        },
        description: {
          ru: [
            '«Путь Черепах» – увлекательная история, повествующая о забавном эксперименте. Известный американский инвестор Ричард Деннис поспорил, что сможет в короткое время сделать из группы новичков высококлассных трейдеров, которые будут зарабатывать миллионы. Для эксперимента были отобраны 13 человек. ',
            'В книге рассказывается об основных принципах, которым Деннис обучал своих учеников, а также о результатах так называемых «черепах» миллионеров.'
          ],
          en: [
            '«The Way of the Turtles» is a fascinating story telling about an amusing experiment. Richard Dennis, a famous American investor, bet that he would be able to make a group of beginners into high-class traders who would earn millions in a short time. Thirteen people were selected for the experiment.',
            'The book covers the basic principles that Dennis taught his students, as well as the results of the so-called «turtle» millionaires.'
          ]
        },
        imageSrc: Book6,
      },
      {
        id: 7,
        title: {
          ru: '«Технический анализ – новая наука»',
          en: '«Technical analysis is a new science»'
        },
        author: {
          ru: 'ТОМАС ДЕМАРК',
          en: 'THOMAS DEMARK'
        },
        description: {
          ru: [
            'Несмотря на то, что книга была написана еще в начале 90-х годов, она не теряет своей актуальности и сегодня. Как поясняет аналитик ГК ИнстаФорекс Михаил Макаров, ее автор – один из самых известных экспертов в области технического анализа рынков в США.',
            '«Демарк описывает инструменты, которые использовал в течение многих лет и которые принесли ему успех. Для него важно, чтобы трейдер научился улавливать «пульс рынка» и подстраиваться под него», – говорит Михаил Макаров. Правда, данный труд вряд ли подойдет новичкам. Начинать изучение торговли с этой книги не стоит. К этой ступени в своем развитии в качестве трейдера лучше переходить уже имея базовые знания.'
          ],
          en: [
            'Despite the fact that the book was written back in the early 90s, it does not lose its relevance today. As InstaForex analyst Mikhail Makarov explains, its author is one of the most famous experts in the field of technical analysis of markets in the USA',
            '«Demark describes the tools he has been using for many years and which have brought him success. It is important for him that the trader learns to catch the «pulse of the market» and adjust to it», - says Mikhail Makarov.True, this work is hardly suitable for beginners. You should not start studying trading with this book. It is better to move to this stage in your development as a trader with basic knowledge.'
          ]
        },
        imageSrc: Book7,
      },
      {
        id: 8,
        title: {
          ru: '«Как делать деньги на фондовом рынке»',
          en: '«How to make money on the stock market»'
        },
        author: {
          ru: "УИЛЬЯМ О'НИЛ",
          en: "WILLIAM O'NEILL"
        },
        description: {
          ru: [
            'Эта книга может стать настольной у тех инвесторов, которые хотят сосредоточиться на торговле акциями. Ее автор – известный американский биржевой аналитик, который сотрудничает с крупнейшими страховыми фондами, банками, а также консультирует частных инвесторов. ',
            "О'Нил рассказывает, как решить, в какие акции вкладывать деньги и как правильно анализировать доходность своих инвестиций. На первый взгляд книга кажется вполне доступной для новичков, ведь написана она довольно простым языком без переизбытка терминов. Тем не менее, следует быть готовым к тому, что сама методика, которую предлагает автор, окажется весьма сложной. Зато освоив ее, трейдер сможет эффективно оценивать потенциал акций компаний."
          ],
          en: [
            'This book can become a desk book for investors who want to focus on stock trading. The author is a well-known American stock analyst who works with major insurance funds, banks and advises private investors.',
            "O'Neil tells how to decide which stocks to invest in and how to properly analyze the returns on your investments. At first glance, the book seems quite accessible for beginners, because it is written in a rather simple language without an excess of terms. Nevertheless, you should be prepared for the fact that the methodology offered by the author will be very complex. But having mastered it, the trader will be able to effectively assess the potential of company shares."
          ]
        },
        imageSrc: Book8,
      },
  ];    

export default function Library() {
    const { lang } = useLang();
  return (
    <>
    <PhotoHeader 
         backgroundImage={LibraryHead}
         buttonColor=""
         onButtonClick={() => window.location.href = '/register'}
         overrideTexts={{ 
           title: {
             ru: 'Библиотека трейдера: ',
             en: "Trader's Library: "
           },
           highlightedTitle: {
             ru: 'Все, что нужно для глубокого понимания рынка',
             en: 'Everything you need for a deep understanding of the market'
           },
           subtitle: {
             ru: 'Откройте счет и получите доступ к нашей библиотеке для глубокого обучения',
             en: 'Open an account and get access to our library for in-depth training'
           },
           buttonText: {
             ru: 'Открыть счет',
             en: 'Open an account'
           }
         }}
        />
    <div className="fx-card-wrapper">
      <div className="fx-card-left-col">
        <div className="fx-card-logo">
          <span className="fx-card-logo--red">FX</span>
          <span className="fx-card-logo--dark">Broker</span>
        </div>
        <h1 className="fx-card-heading">
        {lang === 'ru'
                ? 'Лучшие книги про Форекс'
                : 'Avoid common mistakes'}
        </h1>
        <button className="fx-card-action-btn">
        {lang === 'ru'
                ? 'Открыть счет'
                : 'Avoid common mistakes'}
        </button>
      </div>

      <div className="fx-card-right-col">
        <div className="fx-card-divider"></div>
        <div className="fx-card-info">
            <p className="fx-card-info-text">
            {lang === 'ru'
                ? 'В этом разделе представлена литература о мировом валютном рынке Forex (Форекс), особенности интернет-трейдинга, фундаментальном и техническом анализе. В ней собраны полезные рекомендации Форекс и самые эффективные стратегии поведения, разработанные ведущими экспертами в данной области.'
                : 'This section presents literature about the world currency market Forex (Forex), peculiarities of online trading, fundamental and technical analysis. It contains useful Forex recommendations and the most effective behavioral strategies developed by leading experts in this field.'}
                <br /><br />
                {lang === 'ru'
                ? 'Издания предлагают читателю не только теоретическую базу по рынку Forex (Форекс), но и содержат практические рекомендации. Литература по данной теме носит научно-популярный характер, во многих источниках приведены яркие примеры из жизни трейдеров, помогающие усвоению материала.'
                : 'The publications offer the reader not only a theoretical basis for the Forex market (Forex), but also contain practical recommendations. Literature on this topic is of a popular science nature, many sources contain vivid examples from the life of traders, which help to assimilate the material.'}
            </p>
        </div>
        <img src={BookCrypto} alt="Книги про Форекс" className="fx-card-books-img" />
      </div>
    </div>
    <BlueBlock 
     overrideTexts={{
        title: {
          ru: 'Опытные участники рынка настоятельно рекомендуют «новичкам»',
          en: "Experienced market participants strongly advise “newcomers” to "
        },
        description: {
          ru: 'Изучить литературу о Forex (Форекс), чтобы иметь представление о валютном рынке и применять полученную информацию на практике в процессе управления своим счетом. Это упростит Вашу работу на рынке Forex (Форекс) и сделает ее более результативной и интересной. На основе рекомендаций Форекс можно выработать собственную тактику, которая в будущем принесет весомые плоды.',
          en: 'Study Forex (Forex) literature in order to have an idea of the currency market and apply the information obtained in practice in the process of managing your account. This will simplify your work on the Forex (Forex) market and make it more effective and interesting. On the basis of Forex recommendations you can develop your own tactics, which in the future will bring significant fruits.'
        },
        description2: {
          ru: '',
          en: ''
        },
        description3: {
          ru: '',
          en: ''
        },
        bgText: {
          ru: 'FXBroker FXBroker FXBroker FXBroker',
          en: 'FXBroker FXBroker FXBroker FXBroker'
        }
      }}
     />
     <section className="book-showcase-container">

      {booksData.map(book => (
        <div key={book.id} className="book-showcase-item">
          
          <div className="book-showcase-content">
            <h2 className="book-showcase-title">{book.id}. {book.title[lang]}</h2>
            <p className="book-showcase-author">{book.author[lang]}</p>
            
            {book.description[lang].map((paragraph, index) => (
              <p key={index} className="book-showcase-description">
                {paragraph}
              </p>
            ))}

          </div>

          <div className="book-showcase-image-wrapper">
            <img src={book.imageSrc} alt={book.title[lang]} className="book-showcase-image" />
          </div>
        </div>
      ))}
    </section>
    </>
  );
};

