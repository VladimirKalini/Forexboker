import React from 'react';
import PhotoHeader from '../../components/PhotoHeader';
import ScreenerValutaWidget from '../../components/Widget/ScreenerValutaWidget';
import CrossValutaWidget from '../../components/Widget/CrossValutaWidget';
import FooterImage from '../../components/FooterImage';
import { useLang } from '../../components/LangContext';
import { Helmet } from 'react-helmet-async';


import './Market.css';
import ValutaHeadr from '../../media/ValutaHeadr.png';
import ValutaMain from '../../media/ValutaMain.png';
import HalfPhone from '../../media/HalfPhone.png';
import ValurtFooter from '../../media/ValurtFooter.png';
import ValutaFooter from '../../media/ValutaFooter.png';




export default function Valuta() {
  const { lang } = useLang();
  const content = {
    mainHeading: "Торговля валютами — динамичный рынок с безграничными возможностями",
    leftColumn: [
      {
        heading: "Рынок Forex — крупнейший финансовый рынок в мире,",
        paragraph: "где ежедневно совершаются сделки на триллионы долларов."
      },
      {
        heading: "Валютная торговля предлагает трейдерам уникальные шансы на прибыль",
        paragraph: "благодаря высокой ликвидности, круглосуточному доступу и множеству торговых инструментов."
      }
    ],
    rightColumn: [
      {
        heading: "На платформе FXBroker вы получаете полный доступ к мировым валютным парам:",
        paragraph: "от популярных мажоров (EUR/USD, GBP/USD, USD/JPY) до экзотических и кросс-курсов."
      },
      {
        heading: "Вы можете торговать 24/5, использовать кредитное плечо,",
        paragraph: "хеджировать риски и строить стратегии, соответствующие вашему уровню и стилю."
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Курсы валют онлайн — Форекс котировки в реальном времени | FXBroker</title>
        <meta name="description" content="Живые графики и актуальные курсы валютных пар: EUR/USD, GBP/USD, USD/JPY и многих других. Следите за рынком Форекс 24/5 вместе с FXBroker." />
      </Helmet>
      <PhotoHeader 
        backgroundImage={ValutaHeadr}
        buttonColor=""
        onButtonClick={() => window.location.href = '/register'}
        overrideTexts={{ 
          title: { ru: 'Финансовая свобода начинается с точных данных ', en: 'Financial freedom starts with accurate data ' },
          highlightedTitle: { ru: 'которые вы видите прямо сейчас', en: "that you're seeing right now" },
          subtitle: { ru: 'Отслеживайте валютные котировки и принимайте выгодные решения', en: 'Track currency quotes and make profitable decisions' },
          buttonText: { ru: 'Открыть счет', en: 'Open an account' }
        }}
      />
      
      <section className="market-block-section">
        <div className="market-block-container">
          <h1 className="market-block-main-heading">
            {lang === 'ru' ? "Торговля валютами — динамичный рынок с безграничными возможностями" 
            : "Currency trading — a dynamic market with limitless opportunities"}
          </h1>
          <div className="market-block-grid">
            <div className="market-block-text-column">
              <div className="market-block-text-block">
                <h2 className="market-block-subheading">{lang === 'ru' ? "Рынок Forex — крупнейший финансовый рынок в мире," : "The Forex market is the largest financial market in the world,"}</h2>
                <p className="market-block-paragraph">{lang === 'ru' ? "где ежедневно совершаются сделки на триллионы долларов." : "where trillions of dollars are traded daily."}</p>
              </div>
              <div className="market-block-text-block">
                <h2 className="market-block-subheading">{lang === 'ru' ? "Валютная торговля предлагает трейдерам уникальные шансы на прибыль" : "Currency trading offers traders unique profit opportunities"}</h2>
                <p className="market-block-paragraph">{lang === 'ru' ? "благодаря высокой ликвидности, круглосуточному доступу и множеству торговых инструментов." : "thanks to high liquidity, 24-hour access, and numerous trading instruments."}</p>
              </div>
            </div>
            <div className="market-block-image-container">
              <img 
                src={ValutaMain} 
                alt={lang === 'ru' ? "Интерфейс торговой платформы" : "Trading platform interface"}
                className="market-block-center-image"
              />
            </div>
            <div className="market-block-text-column">
              <div className="market-block-text-block">
                <h2 className="market-block-subheading">{lang === 'ru' ? "На платформе FXBroker вы получаете полный доступ к мировым валютным парам:" : "On the FXBroker platform, you get full access to global currency pairs:"}</h2>
                <p className="market-block-paragraph">{lang === 'ru' ? "от популярных мажоров (EUR/USD, GBP/USD, USD/JPY) до экзотических и кросс-курсов." : "from popular majors (EUR/USD, GBP/USD, USD/JPY) to exotics and cross rates."}</p>
              </div>
              <div className="market-block-text-block">
                <h2 className="market-block-subheading">{lang === 'ru' ? "Вы можете торговать 24/5, использовать кредитное плечо," : "You can trade 24/5, use leverage,"}</h2>
                <p className="market-block-paragraph">{lang === 'ru' ? "хеджировать риски и строить стратегии, соответствующие вашему уровню и стилю." : "hedge risks, and build strategies that match your level and style."}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ScreenerValutaWidget lang={lang} />
      <div></div>
      <CrossValutaWidget lang={lang} />

      <div className="forex-market-section">
        <h2 className="forex-market-title">{lang === 'ru' ? "Валютный рынок" : "Forex Market"}</h2>
        <div className="forex-market-content">
          <div className="forex-market-column column-first">
            <p>
              {lang === 'ru' 
                ? "Валютный рынок — это крупнейший финансовый рынок в мире с ежедневным оборотом более 6 триллионов долларов. Он работает 24 часа в сутки, пять дней в неделю, объединяя трейдеров, банки, корпорации и правительственные учреждения со всего мира. Торговля валютными парами предоставляет уникальную возможность для получения прибыли как на росте, так и на падении курсов. Благодаря высокой ликвидности, узким спредам и круглосуточной доступности, Форекс остаётся выбором номер один как для новичков, так и для опытных трейдеров."
                : "The Forex market is the largest financial market in the world, with a daily turnover of over $6 trillion. It operates 24 hours a day, five days a week, connecting traders, banks, corporations, and government institutions from all over the world. Trading currency pairs provides a unique opportunity to profit from both rising and falling exchange rates. Thanks to high liquidity, narrow spreads, and round-the-clock availability, Forex remains the number one choice for both beginners and experienced traders."
              }
            </p>
          </div>
          <div className="forex-market-column column-second">
            <p>
              {lang === 'ru'
                ? "Платформа FXBroker открывает полный доступ к валютному рынку: вы можете торговать основными парами, такими как EUR/USD, GBP/USD, USD/JPY, кросс-курсами и экзотическими валютами, включая USD/TRY, EUR/RUB и другие. Мы предлагаем конкурентные торговые условия: моментальное исполнение ордеров, минимальные комиссии, спреды от 0.0 пунктов, а также кредитное плечо до 1:100, что позволяет эффективно управлять капиталом и использовать возможности рынка на максимуме. Все сделки защищены продвинутыми технологиями, а торговая платформа подходит как для десктопа, так и для мобильных устройств."
                : "The FXBroker platform provides full access to the currency market: you can trade major pairs like EUR/USD, GBP/USD, USD/JPY, cross rates, and exotic currencies, including USD/TRY, EUR/RUB, and others. We offer competitive trading conditions: instant order execution, minimal commissions, spreads from 0.0 pips, and leverage up to 1:100, allowing you to effectively manage capital and maximize market opportunities. All trades are protected by advanced technologies, and the trading platform is suitable for both desktop and mobile devices."
              }
            </p>
          </div>
          <div className="forex-market-column column-third">
            <p>
              {lang === 'ru'
                ? "Для начинающих трейдеров на FXBroker доступна бесплатная обучающая программа, где вы сможете шаг за шагом изучить основы валютной торговли: от устройства рынка и принципов анализа до построения собственной стратегии и управления рисками. Мы учим работать не просто с графиками, а с пониманием экономических процессов, влияющих на движение валют: отчёты центробанков, ставки процента, уровень инфляции и занятости. Вы научитесь читать рынок, а не угадывать направление. FXBroker предоставляет также мощную аналитическую поддержку: экономический календарь, технический и фундаментальный анализ, сигналы и рыночные обзоры. Всё это позволяет принимать решения на основе данных, а не эмоций. Кроме того, на нашей платформе встроен калькулятор прибыли — с его помощью можно мгновенно рассчитать потенциальный доход от сделки, учитывая объём, спред и комиссию."
                : "For beginner traders on FXBroker, a free educational program is available where you can learn the basics of currency trading step-by-step: from market structure and analysis principles to building your own strategy and risk management. We teach you not just to work with charts, but to understand the economic processes that affect currency movements: central bank reports, interest rates, inflation levels, and employment data. You will learn to read the market, not guess its direction. FXBroker also provides powerful analytical support: an economic calendar, technical and fundamental analysis, signals, and market reviews. All this allows you to make decisions based on data, not emotions. Additionally, a profit calculator is built into our platform, allowing you to instantly calculate the potential income from a trade, considering volume, spread, and commission."
              }
            </p>
          </div>
        </div>
      </div>
      
      <div className="cta-section">
        <div className="cta-content">
          <h2 className="cta-brand-name"><span className='RDSpan'>FX</span>Broker</h2>
          <h2 className="cta-title">
            {lang === 'ru' ? "Если вы хотите начать торговать валютой с минимальными рисками" : "If you want to start trading currencies with minimal risks"}
          </h2>
          <p className="cta-description">
            {lang === 'ru' 
              ? "— воспользуйтесь демо-счетом. Это идеальный способ попробовать стратегии, понять функциональность платформы и почувствовать ритм рынка. А когда будете готовы — откройте реальный счёт и начните зарабатывать в самой масштабной финансовой системе планеты."
              : "— use a demo account. It's the ideal way to try out strategies, understand the platform's functionality, and feel the market's rhythm. And when you're ready — open a real account and start earning in the world's largest financial system."
            }
          </p>
          <button className="cta-button">
            {lang === 'ru' ? "Открыть счет" : "Open an account"}
          </button>
        </div>
        <div className="cta-image-container">
          <img src={ValurtFooter} alt={lang === 'ru' ? "Торговля на телефоне" : "Trading on phone"} />
        </div>
      </div>
      
      <div className="feature-section">
        <div className="feature-text-content">
          <p>
            {lang === 'ru'
              ? "Всё, что вам нужно - вести параметры: валютная пара или актив, цена входа и выхода, объём сделки, размер кредитного плеча и комиссии. В одно мгновение вы получите расчёт чистой прибыли или убытка, узнаете требуемую маржу и даже сможете смоделировать разные сценарии развития рынка."
              : "All you need to do is enter the parameters: currency pair or asset, entry and exit price, trade volume, leverage size, and commission. In an instant, you will receive a calculation of net profit or loss, find out the required margin, and can even simulate different market development scenarios."
            }
          </p>
          <p>
            {lang === 'ru'
              ? "С FXBroker вы торгуете валютами на профессиональном уровне — с поддержкой, обучением и инструментами которые делают процесс понятным и прозрачным."
              : "With FXBroker, you trade currencies at a professional level — with support, training, and tools that make the process clear and transparent."
            }
          </p>
          <p>
            {lang === 'ru'
              ? "Начните сейчас: откройте счёт, пройдите обучение и используйте потенциал мирового валютного рынка на полную мощность."
              : "Start now: open an account, complete the training, and use the potential of the global currency market to its fullest."
            }
          </p>
        </div>
        <div className="feature-heading-wrapper">
          <h2 className="feature-title-vl">
            {lang === 'ru' ? "Всё, что вам" : "Everything you"}<br/>
            {lang === 'ru' ? "нужно" : "need"}<span className="red-square"></span>
          </h2>
        </div>
      </div>
      <FooterImage 
      overlayClassName="bg-black"
      className="bg-black"
      backgroundSrc={ValutaFooter}
      textRu="Научитесь анализировать геополитику, макростатистику и мировые события, чтобы торговать осознанно."
      textEn="Learn to analyze geopolitics, macro statistics and world events to trade intelligently."
      btnTextRu="Открыть счет"
      btnTextEn="Open an account"
      btnLink="/register"
      />
    </>      
  );
};