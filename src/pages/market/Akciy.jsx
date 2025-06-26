import React from 'react';
import './Market.css';
import PhotoHeader from '../../components/PhotoHeader';
import InfoTabs from '../../components/InfoTabs';
import { useLang } from '../../components/LangContext';
import FooterImage from '../../components/FooterImage';
import { Helmet } from 'react-helmet-async';

import AkciyWidgetObject from '../../components/Widget/AkciyWidgetObject';
import AkciyWidgetPokaz from '../../components/Widget/AkciyWidgetPokaz';

import AkciyHeader from '../../media/AkciyHeader.png';
import PromoAkciy from '../../media/PromoAkciy.png';
import CubeAkciy from '../../media/CubeAkciy.png';
import AkciyFooter from '../../media/AkciyFooter.png';


const zigzagData = [
  {
    title: {
      ru: '№ 1: Наша платформа',
      en: 'No. 1: Our platform',
    },
    text: {
      ru: `предлагает удобный и прозрачный доступ к фондовым рынкам с минимальными комиссиями, быстрым исполнением ордеров и мощными аналитическими инструментами.`,
      en: `offers convenient and transparent access to stock markets with minimal commissions, fast order execution and powerful analytical tools.`,
    },
    bgText: {
      ru: 'ОПЫТ',
      en: 'EXPERIENCE',
    }
  },
  {
    title: {
      ru: '№ 2: Торговля акциями с помощью',
      en: 'No. 2: Stock trading with',
    },
    text: {
      ru: `CFD позволяет спекулировать как на росте, так и на падении цен, что расширяет возможности для заработка вне зависимости от рыночной ситуации.`,
      en: `CFDs allow you to speculate on both rising and falling prices, which expands your earning potential regardless of the market situation.`,
    },
    bgText: {
      ru: 'ОПЫТ',
      en: 'EXPERIENCE',
    }
  },
  {
    title: {
      ru: '№ 3: Вы можете использовать',
      en: 'No. 3: You can use',
    },
    text: {
      ru: `кредитное плечо, чтобы увеличить доходность своих сделок, сохраняя при этом контроль над рисками благодаря встроенным инструментам управления капиталом.`,
      en: `Leverage to maximize the profitability of your trades while maintaining risk control through built-in money management tools.`,
    },
    bgText: {
      ru: 'ОПЫТ',
      en: 'EXPERIENCE',
    }
  },
  {
    title: {
      ru: '№ 4: Для начинающих трейдеров FXBroker',
      en: 'No. 4: For Beginner FXBroker Traders',
    },
    text: {
      ru: `предлагает полноценное обучение и поддержку. В нашей Школе трейдинга вы изучите, как анализировать компании, читать финансовую отчётность, оценивать новости и события, влияющие на стоимость акций.`,
      en: `offers full training and support. In our Trading School, you will learn how to analyze companies, read financial statements, and evaluate news and events that affect stock prices.`,
    },
    bgText: {
      ru: 'ОПЫТ',
      en: 'EXPERIENCE',
    }
  },
];
const cubtexts = {
  leftTop: {
    ru: 'Для начинающих трейдеров FXBroker предлагает полноценное обучение и поддержку.',
    en: 'For novice traders, FXBroker offers comprehensive training and support.',
  },
  leftBottom: {
    ru: 'В нашей Школе трейдинга вы изучите, как анализировать компании, читать финансовую отчётность, оценивать новости и события, влияющие на стоимость акций, а также применять технический анализ и стратегии риск-менеджмента.',
    en: 'In our Trading School, you will learn how to analyze companies, read financial statements, evaluate news and events affecting stock prices, and apply technical analysis and risk management strategies.',
  },
  rightTop: {
    ru: 'Мы помогаем не просто торговать, а понимать глубинные процессы рынка, что позволяет принимать обоснованные и уверенные решения.',
    en: 'We help you not just to trade, but to understand the deep processes of the market, which allows you to make informed and confident decisions.',
  },
  rightBottom: {
    ru: 'Платформа FXBroker обеспечивает доступ к актуальной рыночной информации, аналитике, сигналам и экономическому календарю, что помогает следить за важнейшими событиями и своевременно реагировать на изменения.',
    en: 'The FXBroker platform provides access to current market information, analytics, signals, and an economic calendar, helping you to follow the most important events and react promptly to changes.',
  },
};
const stocksTabsData = [
  {
    id: 'stocks',
    titleRu: 'Акции',
    titleEn: 'Stocks',
    descriptionRu: 'представляют собой долю в компании и дают право на часть прибыли. Владение акциями позволяет не только получать дивиденды, но и участвовать в важных решениях компании через голосование на собраниях акционеров.',
    descriptionEn: 'represent a share in a company and give the right to a part of the profit. Owning stocks allows you not only to receive dividends, but also to participate in important company decisions through voting at shareholder meetings.',
    verticalTextRu: 'Акции представляют собой',
    verticalTextEn: 'Stocks represent'
  },
  {
    id: 'price',
    titleRu: 'Цена акции',
    titleEn: 'Stock Price',
    descriptionRu: 'формируется под влиянием спроса и предложения, а также новостей и экономических факторов. Изменения в отрасли, финансовые отчёты и глобальные события могут значительно влиять на стоимость акций.',
    descriptionEn: 'is formed under the influence of supply and demand, as well as news and economic factors. Changes in the industry, financial reports, and global events can significantly affect the value of stocks.',
    verticalTextRu: 'Цена акции формируется',
    verticalTextEn: 'Stock price is formed'
  },
  {
    id: 'dividends',
    titleRu: 'Дивиденды',
    titleEn: 'Dividends',
    descriptionRu: '— это регулярные выплаты акционерам из прибыли компании, но не все акции их выплачивают. Дивидендные акции часто выбирают для стабильного дохода и долгосрочных инвестиций.',
    descriptionEn: 'are regular payments to shareholders from the company\'s profits, but not all stocks pay them. Dividend stocks are often chosen for a stable income and long-term investments.',
    verticalTextRu: 'Дивиденды это регулярные',
    verticalTextEn: 'Dividends are regular'
  },
  {
    id: 'success',
    titleRu: 'Для успешной',
    titleEn: 'For Successful',
    descriptionRu: 'торговли важно анализировать финансовые отчёты компаний, новости и рыночные тенденции. FXBroker предлагает инструменты и обучение, которые помогут принимать обоснованные решения и повысить эффективность торговли.',
    descriptionEn: 'trading, it is important to analyze companies\' financial reports, news, and market trends. FXBroker offers tools and training to help make informed decisions and increase trading efficiency.',
    verticalTextRu: 'Для успешной торговли важно',
    verticalTextEn: 'For successful trading'
  }
];




export default function Akciy() {
  const { lang } = useLang();

  return (
    <>
    <Helmet>
    <title>Котировки акций онлайн — Цены на акции в реальном времени | FXBroker</title>
    <meta name="description" content="Следите за котировками акций ведущих мировых компаний в реальном времени. Графики, аналитика и актуальные цены для вашего трейдинга на FXBroker." />
</Helmet>
    <PhotoHeader 
        backgroundImage={AkciyHeader}
        overrideTexts={{ 
          title: { ru: '', en: '' },
          highlightedTitle: { ru: 'Доступ к мировым акциям — в один клик', en: "One-click access to global stocks" },
          subtitle: { ru: 'Следите за котировками онлайн и торгуйте выгодно', en: 'Follow quotes online and trade profitably' },
          buttonText: { ru: 'Открыть счет', en: 'Open an account' }
        }}
      />
      <InfoTabs tabsData={stocksTabsData} />
      <AkciyWidgetPokaz />
      <div></div>
      <AkciyWidgetObject />
      <section className="promo-banner">
      <div className="promo-banner-content">
        <div className="promo-banner-logo">
          <span className="logo-fx">FX</span>Broker
        </div>
        <p className="promo-banner-text">
        {lang === 'ru' ? 'Торговля акциями — один из самых популярных и доступных способов инвестирования и заработка на финансовых рынках. Акции представляют собой долю в капитале компании, и их цена отражает ожидания рынка относительно её развития, прибыли и перспектив.' 
        : "Trading shares is one of the most popular and affordable ways of investing and earning money on the financial markets. Shares represent a share in the capital of a company, and their price reflects the market's expectations of its development, profit and prospects.э"}
        </p>
      </div>
      
      <div className="promo-banner-image-wrapper">
        <img src={PromoAkciy} alt="Торговое приложение FXBroker на телефонах" />
      </div>
    </section>
    <section className="showcase-grid">
      
      <div className="showcase-grid__column showcase-grid__column--left">
        <div className="showcase-grid__card">
          <p>{lang === 'ru' ? cubtexts.leftTop.ru : cubtexts.leftTop.en}</p>
        </div>
        <div className="showcase-grid__card">
          <p>{lang === 'ru' ? cubtexts.leftBottom.ru : cubtexts.leftBottom.en}</p>
        </div>
      </div>

      <div className="showcase-grid__image-wrapper">
        <img src={CubeAkciy} alt="Abstract glass cubes structure" />
      </div>
      
      <div className="showcase-grid__column showcase-grid__column--right">
        <div className="showcase-grid__card">
          <p>{lang === 'ru' ? cubtexts.rightTop.ru : cubtexts.rightTop.en}</p>
        </div>
        <div className="showcase-grid__card">
          <p>{lang === 'ru' ? cubtexts.rightBottom.ru : cubtexts.rightBottom.en}</p>
        </div>
      </div>
      
    </section>
    <section className="zigzag-blocks">
      <div className="zigzag-blocks__container">
        {zigzagData.map((block, index) => (
          <div
            key={index}
            className={`zigzag-blocks__card zigzag-blocks__card--${index % 2 === 0 ? 'top' : 'bottom'}`}
            data-bg={block.bgText[lang]}
          >
            <h3 className="zigzag-blocks__card-title">
              {block.title[lang]}
            </h3>
            <p className="zigzag-blocks__card-text">
              {block.text[lang]}
            </p>
          </div>
        ))}
      </div>
    </section>
    <section className="trade-info-block">
      <div className="trade-info-block__header">
        <h2 className="trade-info-block__title">
          {lang === 'ru' ? 'Торговля' : 'Trading'}<br />
          {lang === 'ru' ? 'акциями с FXBroker' : 'stocks with FXBroker'}
        </h2>
      </div>
      <div className="trade-info-block__content">
        <p className="trade-info-block__text">
          {lang === 'ru'
            ? '— это сочетание удобства, профессионализма и безопасности. Наш брокер работает под надзором регуляторов, обеспечивает защиту средств клиентов и прозрачные условия сотрудничества. Вы можете торговать с любого устройства — будь то компьютер, планшет или смартфон, оставаясь всегда на связи с рынком.'
            : '— is a combination of convenience, professionalism, and security. Our broker operates under the supervision of regulators, ensures the protection of client funds, and provides transparent cooperation terms. You can trade from any device — be it a computer, tablet, or smartphone, always staying connected to the market.'}
        </p>
        <p className="trade-info-block__text">
          {lang === 'ru'
            ? 'Если вы хотите построить свой инвестиционный или торговый портфель на основе акций ведущих компаний мира, FXBroker — ваш надежный партнер. Начните обучение, откройте счёт и воспользуйтесь всеми преимуществами современной и мощной торговой платформы уже сегодня.'
            : 'If you want to build your investment or trading portfolio based on the stocks of the world\'s leading companies, FXBroker is your reliable partner. Start learning, open an account, and take advantage of all the benefits of a modern and powerful trading platform today.'}
        </p>
      </div>
    </section>
    <FooterImage 
      overlayClassName="bg-black"
      className="bg-black"
      backgroundSrc={AkciyFooter}
      textRu="Доступ к мировым акциям — в один клик"
      textEn="One-click access to global stocks"
      btnTextRu="Открыть счет"
      btnTextEn="Open an account"
      btnLink="/register"
      />
    </>
  );
};