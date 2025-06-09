import React from 'react';
import './Education.css';
import forexChart from '../../media/ForexLaptop.png';
import { useLang } from '../../components/LangContext';
import { Link } from 'react-router-dom';

const Forex = () => {
  const { lang } = useLang();
  const isRu = lang === 'ru';
  
  const texts = {
    title: {
      ru: 'Что такое форекс простыми словами',
      en: 'What is Forex in simple terms'
    },
    description: {
      ru: 'Сразу определимся, что форекс – это рынок, на котором в режиме онлайн заинтересованные лица (трейдеры) меняют одну иностранную валюту на другую по курсу крупнейших глобальных внебиржевых участников.',
      en: 'Let\'s clarify that Forex is a market where interested parties (traders) exchange one foreign currency for another online at the rate of major global over-the-counter participants.'
    },
    feature1: {
      title: {
        ru: 'Рынок настолько ликвидный и глобальный, что не привязывается к определенным биржам.',
        en: 'The market is so liquid and global that it is not tied to specific exchanges.'
      },
      text: {
        ru: 'Открывать сделки онлайн – быстрее и более выгодно, нежели в обменнике около дома. Впрочем, и контрагирующие здесь суммы – на много порядков выше, а потому торговый оборот рынка форекс на данный момент – самый большой в мире.',
        en: 'Opening trades online is faster and more profitable than at a currency exchange near your home. However, the counterparty amounts here are many orders of magnitude higher, which is why the trading volume of the forex market is currently the largest in the world.'
      }
    },
    feature2: {
      title: {
        ru: 'На самом деле, ни фондовый рынок со всеми акциями мира, ни рынок металлов со всем доступным золотом в обращении не может по оборотам купли-продажи сравниться с рынком форекс.',
        en: 'In fact, neither the stock market with all the world\'s shares, nor the metals market with all available gold in circulation can compare in terms of buying and selling volumes with the forex market.'
      },
      text: {
        ru: 'Ежедневный объем торгов которого превышает 6.5 трлн. долларов. Только представьте эту финансовую мощь!',
        en: 'Its daily trading volume exceeds $6.5 trillion. Just imagine this financial power!'
      }
    },
    howWorks: {
      title: {
        ru: 'Как работает форекс?',
        en: 'How does Forex work?'
      },
      mainPoint: {
        ru: 'Главное, что необходимо понять по теме forex – цена валюты постоянно изменяется.',
        en: 'The main thing to understand about forex is that currency prices are constantly changing.'
      },
      leftText: {
        ru: 'Сейчас, к примеру, евро стоит 1.2 доллара, а через час уже 1.19. Стоимость одной валюты, выраженная в другой, называется котировкой. Каждая такая котировка попадает на график в числовом виде. Трейдеры следят за графиком и пытаются спрогнозировать, куда в следующий момент пойдет цена актива. Так на форексе, в режиме реального времени, рисуется график цены, а трейдеры ждут перед мониторами или экранами смартфонов и наблюдают за тем, как изменяется график, чтобы понять, когда же начать торговать.',
        en: 'Right now, for example, the euro costs 1.2 dollars, and an hour later it\'s 1.19. The value of one currency expressed in another is called a quote. Each such quote appears on a chart in numerical form. Traders watch the chart and try to predict where the price of the asset will go next. So on Forex, in real-time, a price chart is drawn, and traders wait in front of monitors or smartphone screens and observe how the chart changes to understand when to start trading.'
      },
      rightText: {
        ru: 'Мы уже упомянули про распространенное современное решение – кредитное плечо. Суть его сводится к тому, что в момент открытия сделки к вашим собственным средствам брокер добавляет заемные. Например, вы вложили 100 долларов, а торговать можете на 1000, то есть вы получаете прибыль от 1:1 когда вы торгуете только на свои до 1:500 (когда на каждый ваш доллар брокер добавляет еще 500).',
        en: 'We\'ve already mentioned the common modern solution - leverage. Its essence is that at the moment of opening a trade, the broker adds borrowed funds to your own funds. For example, you invested $100, but you can trade with $1000, meaning you get profits from 1:1 when you trade only with your own money up to 1:500 (when the broker adds another 500 for each of your dollars).'
      },
      bottomLeftText: {
        ru: 'Также брокеры часто позволяют своим клиентам торговать меньшими объёмами, чем торгуются на рынке, то есть дробными лотами. Стандартный размер минимальной транзакции около 100 000 $. Однако многие брокеры позволяют совершать сделки с десятой или сотой частью этой суммы.',
        en: 'Also, brokers often allow their clients to trade in smaller volumes than are traded on the market, that is, with fractional lots. The standard minimum transaction size is about $100,000. However, many brokers allow transactions with a tenth or a hundredth of this amount.'
      },
      bottomRightText: {
        ru: 'Таким образом, получается, что присоединиться к торговле на глобальном рынке форекс и торговать суммами от $10000 можно даже с относительно небольшим капиталом, т. е. от $100.',
        en: 'Thus, it turns out that you can join trading on the global forex market and trade amounts from $10,000 even with a relatively small capital, i.e., from $100.'
      }
    },
    whatTraded: {
      title: {
        ru: 'Чем торгуют на форексе?',
        en: 'What is traded on Forex?'
      },
      mainPoint: {
        ru: 'Основными валютами, которыми торгуют через онлайн-платформы, являются американский доллар (USD), евро (EUR), японская иена (JPY), фунт стерлингов (GBP) и швейцарский франк (CHF). Однако можно начать торговать и кросс-курсами: пары, в которые не присутствует доллар США.',
        en: 'The main currencies traded through online platforms are the US dollar (USD), euro (EUR), Japanese yen (JPY), British pound (GBP), and Swiss franc (CHF). However, you can also start trading cross-rates: pairs that do not include the US dollar.'
      },
      leftText: {
        ru: 'Если в стране все хорошо и показатели-индикаторы здоровья экономики выходят даже лучше ожиданий, то курс национальной валюты имеет свойство расти вверх, и если важные отчеты и данные статистики по региону не радуют, то идет укрепление валюты можно не рассчитывать. В прочем, не все так однозначно. Внутри недели или дня происходят колебания, работать с которыми помогают актуальные линии, т.н. технические индикаторы торговли. Они помогают определить, в какую направлении сейчас движется цена, насколько силен тренд и как долго он может продлиться. Трейдеры ориентируются на эти индикаторы и экономические новости от лент глобальных информагентств. На основании всего массива информации пользователи делают выводы: пойдет выбранная валютная пара вверх или вниз, по какому сценарию.',
        en: 'If things are going well in a country and the indicators of economic health are even better than expected, then the national currency tends to rise, and if important reports and statistical data for the region are not encouraging, then currency strengthening cannot be expected. However, not everything is so straightforward. Within a week or day, there are fluctuations, which can be managed with the help of current lines, so-called technical trading indicators. They help determine which direction the price is currently moving, how strong the trend is, and how long it can last. Traders are guided by these indicators and economic news from global news agencies. Based on all this information, users draw conclusions: whether the selected currency pair will go up or down, and according to what scenario.'
      },
      rightText: {
        ru: 'Вот, как это работает: приведем в пример самую популярную валютную пару рынка – евро-доллар (EUR/USD). Доллар США и евро имеют свойство расти или падать относительно друг друга в зависимости от ситуации в Европе и США. Трейдеры по всему миру умеют ловить эти изменения и извлекать из них выгоду. Повышение спроса на евро с любой целью означает, что на рынке больше тех, кто настроен покупать евро (валюту, которая стоит первой в паре). Когда спрос на евро растет, то цена EUR/USD растет тоже. Если на рынке больше тех, кто настроен продавать евро, цена EUR/USD падает. Так работает.',
        en: 'Here\'s how it works: let\'s take as an example the most popular currency pair on the market - the euro-dollar (EUR/USD). The US dollar and the euro tend to rise or fall relative to each other depending on the situation in Europe and the US. Traders around the world know how to catch these changes and profit from them. Increased demand for the euro for any purpose means that there are more people in the market who are inclined to buy euros (the currency that comes first in the pair). When demand for the euro grows, the EUR/USD price rises too. If there are more people in the market who are inclined to sell euros, the EUR/USD price falls. That\'s how it works.'
      }
    },
    banks: {
      centralBanks: {
        title: {
          ru: 'Центральные банки',
          en: 'Central Banks'
        },
        mainPoint: {
          ru: 'Их главной задачей в процессе онлайн торговли является валютное регулирование на внешнем рынке, а именно – предотвращение резких скачков курсов национальных валют. Это необходимо, чтобы не допустить начала очередной волны экономического кризиса, а также для поддержания баланса экспорта и импорта. Центральные банки, их решения и выступления представителей оказывают прямое влияние на рынок форекс.',
          en: 'Their main task in the online trading process is currency regulation in the external market, namely, preventing sharp fluctuations in national currency rates. This is necessary to prevent the onset of another wave of economic crisis, as well as to maintain the balance of exports and imports. Central banks, their decisions and statements by representatives have a direct impact on the forex market.'
        },
        subPoint: {
          ru: 'В США основной регулятор – Федеральная Резервная Система (ФРС), в Европе – Европейский Центральный Банк (ЕЦБ), в Британии – Банк Англии (BoE), в Японии, соответственно, Центральный Банк Японии.',
          en: 'In the USA, the main regulator is the Federal Reserve System (FRS), in Europe - the European Central Bank (ECB), in Britain - the Bank of England (BoE), in Japan, accordingly, the Central Bank of Japan.'
        },
        leftText: {
          ru: 'Они проводят основной объем валютных операций. Остальные участники рынка, посредством счетов, открытых в коммерческих банках, осуществляют необходимые обменные и депозитно-кредитные операции.',
          en: 'They conduct the main volume of currency operations. Other market participants, through accounts opened in commercial banks, carry out necessary exchange and deposit-credit operations.'
        },
        rightText: {
          ru: 'На мировые валютные рынки наибольшее влияние оказывают крупные международные банки, ежедневный объем операций которых достигает миллиардов долларов. К примеру, это Deutsche Bank, Barclays Bank, Union Bank of Switzerland, Citibank, Chase Manhattan Bank, Standard Chartered Bank и другие.',
          en: 'The global currency markets are most influenced by large international banks, whose daily volume of operations reaches billions of dollars. For example, these are Deutsche Bank, Barclays Bank, Union Bank of Switzerland, Citibank, Chase Manhattan Bank, Standard Chartered Bank, and others.'
        }
      },
      commercialBanks: {
        title: {
          ru: 'Коммерческие банки',
          en: 'Commercial Banks'
        },
        mainPoint: {
          ru: 'Коммерческие банки являются ключевыми участниками валютного рынка, предоставляя услуги по обмену валют и проведению международных платежей как для корпоративных клиентов, так и для частных лиц.',
          en: 'Commercial banks are key participants in the foreign exchange market, providing currency exchange services and international payments for both corporate clients and individuals.'
        }
      }
    }
  };

  return (
    <div className="forex-page">
      <div className="forex-intro">
        <h1 className="forex-title">{texts.title[lang]}</h1>
        <p className="forex-description">{texts.description[lang]}</p>
      </div>
      
      <div className="forex-chart-container">
        <img src={forexChart} alt={isRu ? "График форекс" : "Forex chart"} className="forex-chart-image" />
      </div>
      
      <div className="forex-features">
        <div className="forex-feature">
          <div className="forex-feature-marker"></div>
          <div className="forex-feature-content">
            <h3>{texts.feature1.title[lang]}</h3>
            <p>{texts.feature1.text[lang]}</p>
          </div>
        </div>
        
        <div className="forex-feature">
          <div className="forex-feature-marker"></div>
          <div className="forex-feature-content">
            <h3>{texts.feature2.title[lang]}</h3>
            <p>{texts.feature2.text[lang]}</p>
          </div>
        </div>
      </div>
      
      <div className="forex-how-works">
        <div className="forex-how-works-header">
          <div className="forex-how-works-title">
            <h2>{texts.howWorks.title[lang]}</h2>
          </div>
          <div className="forex-how-works-main-point">
            <p>{texts.howWorks.mainPoint[lang]}</p>
          </div>
        </div>
        
        <div className="forex-how-works-content">
          <div className="forex-how-works-box">
            <p>{texts.howWorks.leftText[lang]}</p>
          </div>
          
          <div className="forex-how-works-box">
            <p>{texts.howWorks.rightText[lang]}</p>
          </div>
        </div>
        
        <div className="forex-how-works-bottom">
          <div className="forex-how-works-box">
            <p>{texts.howWorks.bottomLeftText[lang]}</p>
          </div>
          
          <div className="forex-how-works-box">
            <p>{texts.howWorks.bottomRightText[lang]}</p>
          </div>
        </div>
      </div>
      
      <div className="forex-what-traded">
        <div className="forex-what-traded-header">
          <div className="forex-what-traded-title">
            <h2>{texts.whatTraded.title[lang]}</h2>
          </div>
          <div className="forex-what-traded-main-point">
            <p>{texts.whatTraded.mainPoint[lang]}</p>
          </div>
        </div>
        
        <div className="forex-what-traded-content">
          <div className="forex-what-traded-box">
            <p>{texts.whatTraded.leftText[lang]}</p>
          </div>
          
          <div className="forex-what-traded-box">
            <p>{texts.whatTraded.rightText[lang]}</p>
          </div>
        </div>
      </div>
      
     <section className="central-banks">
      <div className="central-banks__inner">
        <h2 className="central-banks__title">
          Центральные<br />
          банки
        </h2>
        <div className="central-banks__content">
          <p className="central-banks__text">
            Их главной задачей в процессе онлайн торговли является валютное регулирование на внешнем рынке, а именно — предотвращение резких скачков курсов национальных валют. Это необходимо, чтобы не допустить начала очередной волны экономического кризиса, а также для поддержания баланса экспорта и импорта. Центральные банки, их решения и выступления представителей оказывают прямое влияние на рынок форекс.
          </p>
          <p className="central-banks__text">
            В США основной регулятор — Федеральная Резервная Система (ФРС), в Европе — Европейский Центральный Банк (ЕЦБ), в Британии — Банк Англии (BoE), в Японии, соответственно, Центральный Банк Японии.
          </p>
        </div>
      </div>
    </section>
    <section className="commercial-banks">
      <div className="commercial-banks__inner">
        <div className="commercial-banks__content">
          <p className="commercial-banks__text">
            Они проводят основной объём валютных операций. Остальные участники рынка, посредством счетов, открытых в коммерческих банках, осуществляют необходимые обменные и депозитно-кредитные операции.
          </p>
          <p className="commercial-banks__text">
            На мировые валютные рынки наибольшее влияние оказывают крупные международные банки, ежедневный объём операций которых достигает миллиардов долларов. К примеру, это Deutsche Bank, Barclays Bank, Union Bank of Switzerland, Citibank, Chase Manhattan Bank, Standard Chartered Bank и другие.
          </p>
        </div>
        
        <h2 className="commercial-banks__title">
          Коммерческие<br />
          банки
          <h2></h2>
        </h2>
        
      </div>
    </section>

      <div className="forex-cta">
        <Link to="/register" className="btn-primary">
          {isRu ? 'Открыть счёт' : 'Open an account'}
        </Link>
      </div>
    </div>
  );
};

export default Forex;

