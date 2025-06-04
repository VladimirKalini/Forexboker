// FeaturesCards.jsx
import React, { useState, useEffect } from 'react';
import { useLang } from './LangContext';

import './WhyBlock.css';

const WhyBlock = () => {
  const { lang } = useLang();
  const [activeIndex, setActiveIndex] = useState(null);

  // Тексты для разных языков
  const texts = {
    title: {
      ru: 'Почему FXBroker - прекрасный выбор ?',
      en: 'Why FXBroker is an excellent choice?'
    },
    description: {
      ru: 'Компания FXBroker рада предложить своим клиентам прозрачное и качественное исполнение, а также одни из лучших торговых условий.',
      en: 'FXBroker is pleased to offer its clients transparent and high-quality execution, as well as some of the best trading conditions.'
    },
    button: {
      ru: 'Зарегестрироваться',
      en: 'Register'
    },
    heroBg: {
      ru: 'FX',
      en: 'FX'
    }
  };

  // Карточки с преимуществами
  const features = [
    {
      key: 'first',
      title: {
        ru: 'Предоставление лучших цен Бид и Аск, благодаря глубокой ликвидности',
        en: 'Providing the best Bid and Ask prices, thanks to deep liquidity'
      },
      bg: {
        ru: 'БИД',
        en: 'BID'
      }
    },
    {
      key: 'second',
      title: {
        ru: 'Без вмешательства дилинга',
        en: 'No dealing desk intervention'
      },
      bg: {
        ru: 'БЕЗ',
        en: 'NO'
      }
    },
    {
      key: 'third',
      title: {
        ru: 'Минимальная задержка поступления котировок',
        en: 'Minimal quote delay'
      },
      bg: {
        ru: 'МИН',
        en: 'MIN'
      }
    },
    {
      key: 'fourth',
      title: {
        ru: 'Конкурентные спреды, без скрытых комиссий',
        en: 'Competitive spreads, no hidden commissions'
      },
      bg: {
        ru: 'КОН',
        en: 'COM'
      }
    },
    {
      key: 'fifth',
      title: {
        ru: 'Ультра-быстрое исполнение ордеров менее чем за < 14ms',
        en: 'Ultra-fast order execution in less than < 14ms'
      },
      bg: {
        ru: 'УЛЬ',
        en: 'ULT'
      }
    }
  ];

  return (
    <div className="why-block-container">
      <div className="fxbroker-logo">
        <span className="logo-fx">FX</span>
        <span className="logo-broker">Broker</span>
        <span className="logo-dot">.</span>
      </div>
      
      <div className="hero-section">
        <div className="hero-bg">{texts.heroBg[lang]}</div>
        <div className="hero-inner">
          <div className="hero-content">
            <h2 className="hero-title">{texts.title[lang]}</h2>
            <p className="hero-text">{texts.description[lang]}</p>
          </div>
          <div className="hero-cta">
            <button className="hero-button">{texts.button[lang]}</button>
          </div>
        </div>
      </div>
      
      <div className="features-row">
        {features.map((feature, index) => (
          <div 
            className={`feature-card ${activeIndex === index ? 'active' : ''}`}
            key={feature.key}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="feature-bg">{feature.bg[lang]}</div>
            <div className="feature-content">
              {feature.title[lang]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyBlock;
