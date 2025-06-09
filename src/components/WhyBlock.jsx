// FeaturesCards.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useLang } from './LangContext';

import './WhyBlock.css';

const WhyBlock = () => {
  const { lang } = useLang();
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Animation effect for the hero background text
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Тексты для разных языков
  const texts = {
    title: {
      ru: 'Почему FXBroker - прекрасный выбор?',
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
      ru: 'FXBroker',
      en: 'FXBroker'
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
        ru: 'F',
        en: 'F'
      }
    },
    {
      key: 'second',
      title: {
        ru: 'Без вмешательства дилинга',
        en: 'No dealing desk intervention'
      },
      bg: {
        ru: 'X',
        en: 'X'
      }
    },
    {
      key: 'third',
      title: {
        ru: 'Минимальная задержка поступления котировок',
        en: 'Minimal quote delay'
      },
      bg: {
        ru: 'B',
        en: 'B'
      }
    },
    {
      key: 'fourth',
      title: {
        ru: 'Конкурентные спреды, без скрытых комиссий',
        en: 'Competitive spreads, no hidden commissions'
      },
      bg: {
        ru: 'R',
        en: 'R'
      }
    },
    {
      key: 'fifth',
      title: {
        ru: 'Ультра-быстрое исполнение ордеров менее чем за < 14ms',
        en: 'Ultra-fast order execution in less than < 14ms'
      },
      bg: {
        ru: 'O',
        en: 'O'
      }
    }
  ];

  return (
    <div className="why-block-container" ref={sectionRef}>
      <div className="fxbroker-logo">
        <span className="fx-logo-fx">FX</span>
        <span className="fx-logo-broker">Broker</span>
        <span className="fx-logo-dot">.</span>
      </div>
      
      <div className="why-hero-section">
        <div className={`why-hero-bg ${isVisible ? 'animate' : ''}`}>{texts.heroBg[lang]}</div>
        <div className="why-hero-inner">
          <div className="why-hero-content">
            <h2 className="why-hero-title">{texts.title[lang]}</h2>
            <p className="why-hero-text">{texts.description[lang]}</p>
          </div>
          <div className="why-hero-cta">
            <button className="why-hero-button">{texts.button[lang]}</button>
          </div>
        </div>
      </div>
      
      <div className="why-features-row">
        {features.map((feature, index) => (
          <div 
            className={`why-feature-card ${activeIndex === index ? 'active' : ''} ${isVisible ? 'animate' : ''}`}
            key={feature.key}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="why-feature-bg">{feature.bg[lang]}</div>
            <div className="why-feature-content">
              {feature.title[lang]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyBlock;
