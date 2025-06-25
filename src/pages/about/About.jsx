import React from 'react';
import '../../App.css';
import { useLang } from '../../components/LangContext';
import { Link } from 'react-router-dom';

import BlueBlock from '../../components/BlueBlock';

import IMGCube from '../../media/IMGCube.png';
import IMGShield from '../../media/IMGShield.png';
import IMGString from '../../media/IMGString.png';
import IMGCircl from '../../media/IMGCircl.png';
import HeaderAbout from '../../media/HeaderAbout.png';

const cardsData = [
    {
      id: 1,
      imageSrc: IMGCube,
      textRu: 'Долгосрочная репутация',
      textEn: 'Long-term reputation',
      hoverTextRu: 'более 20 лет на рынке финансов, что подтверждает наш опыт и доверие клиентов.',
      hoverTextEn: 'over 20 years in the financial market, which confirms our experience and client trust.'
    },
    {
      id: 2,
      imageSrc: IMGShield,
      textRu: 'Безопасность средств',
      textEn: 'Security of funds',
      hoverTextRu: 'строгие меры по защите ваших активов, соответствие международным стандартам безопасности.',
      hoverTextEn: 'strict measures to protect your assets, compliance with international security standards.'
    },
    {
      id: 3,
      imageSrc: IMGString,
      textRu: 'Поддержка 24/7',
      textEn: '24/7 Support',
      hoverTextRu: 'наша команда профессионалов всегда готова помочь вам в любой момент, независимо от времени суток.',
      hoverTextEn: 'our team of professionals is always ready to help you at any moment, regardless of the time of day.'
    },
    {
      id: 4,
      imageSrc: IMGCircl,
      textRu: 'Прозрачные условия торговли',
      textEn: 'Transparent trading conditions',
      hoverTextRu: 'отсутствие скрытых комиссий и минимальные спреды, чтобы вы могли торговать с максимальной выгодой.',
      hoverTextEn: 'no hidden fees and minimal spreads, so you can trade with maximum benefit.'
    }
  ];
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

export default function About() {
    const { lang } = useLang();
  return (
    <>
    <section 
      className="hs-section" 
      style={{ backgroundImage: `url(${HeaderAbout})` }}
    >
      <div className="hs-overlay"></div>
      <div className="hs-content">
        <div className="hs-eyebrow">
          <span className="hs-eyebrow-icon"></span>
          {lang === 'ru' ? 'О компании' : 'About the company'}
        </div>
        <h1 className="hs-title">
          {lang === 'ru' ? 'Компания с большой историей' : 'A company with a long history'}
        </h1>
        <p className="hs-description">
          {lang === 'ru'
            ? 'Мы на рынке уже более 20 лет, предоставляя нашим клиентам надежные и прозрачные финансовые решения. Наш опыт и репутация — залог вашего успеха в мире инвестиций.'
            : 'We have been on the market for over 20 years, providing our clients with reliable and transparent financial solutions. Our experience and reputation are the key to your success in the world of investments.'
          }
        </p>
        <Link to="/register" className="hs-button">
          {lang === 'ru' ? 'Открыть счет' : 'Open an account'}
        </Link>
      </div>
    </section>
    <section className="why-fxb-section">
      <h2 className="why-fxb-title">
        {lang === 'ru' ? 'Почему FXBroker - прекрасный выбор?' : 'Why is FXBroker an excellent choice?'}
      </h2>
      <div className="why-fxb-grid">
        {cardsData.map((card) => (
          <div key={card.id} className="why-fxb-card">
            <img src={card.imageSrc} alt={lang === 'ru' ? card.textRu : card.textEn} className="why-fxb-card-bg" />
            <div className="why-fxb-card-overlay">
              <p className="why-fxb-card-text default-text">
                {lang === 'ru' ? card.textRu : card.textEn}
              </p>
              <p className="why-fxb-card-text hover-text">
                {lang === 'ru' ? card.hoverTextRu : card.hoverTextEn}
              </p>
            </div>
          </div>
        ))}
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
    <BlueBlock
        overrideTexts={{
          title: {
            ru: 'Нам доверяют более 750 000 клиентов',
            en: "We are trusted by over 750,000 customers"
          },
          description: {
            ru: 'Наши клиенты — это не только индивидуальные трейдеры, но и крупные инвестиционные компании, которые ценят стабильность, надежность и прозрачность в каждой сделке. Мы гордимся тем, что каждый наш клиент может быть уверен в высоком уровне обслуживания и безопасности.',
            en: 'Our clients are not only individual traders, but also large investment companies that value stability, reliability and transparency in every transaction. We are proud that each of our clients can be assured of a high level of service and security.'
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
    </>
  );
};
