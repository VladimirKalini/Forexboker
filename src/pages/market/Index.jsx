import React from 'react';
import './Market.css';
import { useLang } from '../../components/LangContext';
import { Link } from 'react-router-dom';

import IndexMainImage from '../../media/IndexMainImage.png'; 
import PhotoHeader from '../../components/PhotoHeader';
import IndexHeaderImage from '../../media/IndexHeaderImage.png';

const cardsText = [
    {
      id: 1,
      titleRu: 'Торговля',
      titleEn: 'Trading',
      textRu: 'индексами через CFD позволяет спекулировать на росте или падении рынка без необходимости физически владеть активами. Это особенно удобно во время экономической нестабильности, когда один правильный прогноз может обеспечить серьёзную прибыль.',
      textEn: 'with indices via CFDs allows you to speculate on market growth or decline without the need to physically own the assets. This is especially convenient during times of economic instability, when one correct forecast can ensure serious profit.'
    },
    {
      id: 2,
      titleRu: 'Используя',
      titleEn: 'By Using',
      textRu: 'кредитное плечо, вы можете управлять объёмом позиции, не замораживая большой капитал, а с нашей платформой — делать это точно и быстро.',
      textEn: 'leverage, you can manage your position size without freezing a large amount of capital, and with our platform — do it accurately and quickly.'
    },
    {
      id: 3,
      titleRu: 'Индексы',
      titleEn: 'Indices',
      textRu: 'чувствительны к новостям, публикациям экономических данных, решениям центральных банков и отчётности компаний. На FXBroker вы получаете доступ к актуальной аналитике, экономическому календарю и рыночным обзорам — все это помогает принимать решения на основе объективной картины.',
      textEn: 'are sensitive to news, economic data publications, central bank decisions, and company reports. On FXBroker, you get access to up-to-date analytics, an economic calendar, and market reviews — all of which help in making decisions based on an objective picture.'
    },
    {
      id: 4,
      titleRu: 'Торговля',
      titleEn: 'Trading',
      textRu: 'индексами через CFD позволяет спекулировать на росте или падении рынка без необходимости физически владеть активами. Это особенно удобно во время экономической нестабильности, когда один правильный прогноз может обеспечить серьёзную прибыль.',
      textEn: 'with indices via CFDs allows you to speculate on market growth or decline without the need to physically own the assets. This is especially convenient during times of economic instability, when one correct forecast can ensure serious profit.'
    },
    {
      id: 5,
      titleRu: 'Кроме того,',
      titleEn: 'Furthermore,',
      textRu: 'в платформе доступен встроенный калькулятор прибыли, с которым вы сможете заранее рассчитать возможный исход сделки с учётом комиссий, объёма и кредитного плеча.',
      textEn: 'the platform has a built-in profit calculator, with which you can pre-calculate the possible outcome of a trade, taking into account commissions, volume, and leverage.'
    },
    {
      id: 6,
      titleRu: 'Вы научитесь',
      titleEn: 'You will learn',
      textRu: 'находить точки входа и выхода, строить стратегии на основе технического и фундаментального анализа, а также работать с управлением рисками.',
      textEn: 'to find entry and exit points, build strategies based on technical and fundamental analysis, and also work with risk management.'
    }
  ];

  const cardsData = [
    {
      id: 1,
      textRu: 'Узкие спреды, моментальное исполнение, инструменты анализа, поддержка на русском языке, круглосуточный доступ и высокая скорость работы даже в периоды высокой волатильности.',
      textEn: 'Narrow spreads, instant execution, analysis tools, support in your language, 24/7 access, and high performance even during periods of high volatility.'
    },
    {
      id: 2,
      textRu: 'Вы можете торговать с любого устройства, будь то ноутбук, планшет или смартфон. Индексы — это не просто инструмент, это способ взглянуть на рынок шире. Они отражают не поведение отдельных компаний, а направление экономики в целом.',
      textEn: 'You can trade from any device, be it a laptop, tablet, or smartphone. Indices are not just an instrument; they are a way to get a broader view of the market. They reflect the direction of the entire economy, not just the behavior of individual companies.'
    },
    {
      id: 3,
      textRu: 'Именно поэтому многие профессиональные трейдеры строят свои портфели именно вокруг индексных контрактов.',
      textEn: 'This is why many professional traders build their portfolios specifically around index contracts.'
    },
    {
      id: 4,
      textRu: 'С FXBroker вы сможете сделать это грамотно, уверенно и с полной поддержкой на каждом этапе.',
      textEn: 'With FXBroker, you can do it competently, confidently, and with full support at every stage.',
      hasButton: true
    }
  ];
  

export default function StockIndicesBlock() {
    const { lang } = useLang();

  return (
    <>
    <PhotoHeader 
        style={{marginBottom: '0'}}
        backgroundImage={IndexHeaderImage}
        buttonColor="red"
        onButtonClick={() => window.location.href = '/register'}
        overrideTexts={{ 
          title: { ru: '', en: ' ' },
          highlightedTitle: { ru: 'Отслеживайте динамику ведущих мировых индексов в реальном времени', en: "Track the dynamics of the world's leading indices in real time" },
          subtitle: { ru: 'Следите за котировками онлайн и торгуйте выгодно', en: 'Follow quotes online and trade profitably' },
          buttonText: { ru: 'Открыть счет', en: 'Open an account' }
        }}
      />
    <section className="indices-block-section">
      <div className="indices-block-image-col">
        <img 
          src={IndexMainImage} 
          alt={lang === 'ru' ? 'Интерфейсы торговых платформ' : 'Trading platform interfaces'} 
          className="indices-block-image"
        />
      </div>
      <div className="indices-block-text-col">
        <div className="indices-block-title-wrapper">
          <span className="indices-block-icon"></span>
          <h2 className="indices-block-title">
            {lang === 'ru' ? 'Фондовые индексы' : 'Stock Indices'}
          </h2>
        </div>
        <p>
          {lang === 'ru'
            ? '— это отражение состояния крупнейших экономик мира и один из самых популярных инструментов среди трейдеров, стремящихся к диверсификации и работе с глобальными трендами. Вместо анализа отдельных акций, индексы позволяют оценивать поведение целого сектора, страны или экономического региона.'
            : '— a reflection of the state of the world\'s largest economies and one of the most popular instruments among traders seeking diversification and work with global trends. Instead of analyzing individual stocks, indices allow for assessing the behavior of an entire sector, country, or economic region.'
          }
        </p>
        <p>
          {lang === 'ru'
            ? 'Это делает их удобным, ликвидным и информативным активом для торговли как в краткосрок, так и на средне- и долгосрочной основе.'
            : 'This makes them a convenient, liquid, and informative asset for trading on a short-term, as well as medium- and long-term basis.'
          }
        </p>
        <p>
          {lang === 'ru'
            ? 'Благодаря высокому объему торгов, индексные инструменты отличаются отличной ликвидностью и прозрачностью.'
            : 'Thanks to high trading volumes, index instruments are characterized by excellent liquidity and transparency.'
          }
        </p>
      </div>
    </section>
    <section className="info-grid-section">
      <div className="info-grid-container">
        {cardsText.map((card) => (
          <div key={card.id} className="info-grid-card">
            <h3 className="info-grid-title">{lang === 'ru' ? card.titleRu : card.titleEn}</h3>
            <p className="info-grid-text">{lang === 'ru' ? card.textRu : card.textEn}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="etb-section">
      <div className="etb-content-wrapper">
        <h2 className="etb-main-title">
          {lang === 'ru' ? 'Платформа ' : 'The '} 
          
            <span className="etb-fx-red">FX</span>Broker
           {lang === 'ru' ? ' предлагает все условия для эффективной торговли индексами' : 'platform offers all the conditions for effective index trading'}
        </h2>
        <div className="etb-cards-grid">
          {cardsData.map(card => (
            <div key={card.id} className="etb-card">
              <div className="etb-card-ribbon"></div>
              <p>
                {lang === 'ru' ? card.textRu : card.textEn}
              </p>
              {card.hasButton && (
                <Link to="/register" className="etb-card-button">
                  {lang === 'ru' ? 'Открыть счет' : 'Open an account'}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="etb-wave-background">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#0052ff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,192C384,203,480,245,576,256C672,267,768,245,864,218.7C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
         </svg>
      </div>
    </section>
    </>
  );
};
