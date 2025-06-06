import React, { useState, useEffect, useRef } from 'react';
import { useLang } from './LangContext';
import { Link } from 'react-router-dom';

import './MarketState.css';

const MarketState = () => {
  const { lang } = useLang();
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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
      ru: 'Состояние рынка',
      en: 'Market State'
    },
    description: {
      ru: 'Настройтесь на рынок, а не против него',
      en: 'Tune into the market, not against it'
    },
    subDescription: {
      ru: 'Знание текущего состояния рынка – доллар, евро, нефть, корреляции – поможет вам представить стратегию и не торговать вслепую. Мы подскажем, куда он движется.',
      en: 'Knowing the current market state - dollar, euro, oil, correlations - will help you develop a strategy and not trade blindly. We will guide you on where it\'s heading.'
    },
    button: {
      ru: 'Зарегистрироваться',
      en: 'Register'
    },
    bgText: {
      ru: 'РЫНОК ТРЕНД АНАЛИЗ РЫНОК ТРЕНД АНАЛИЗ РЫНОК ТРЕНД АНАЛИЗ',
      en: 'MARKET TREND ANALYSIS MARKET TREND ANALYSIS MARKET TREND ANALYSIS'
    },
    featureBgTexts: [
      {
        ru: 'ТРЕНДЫ ВОЗМОЖНОСТИ ТРЕНДЫ ВОЗМОЖНОСТИ',
        en: 'TRENDS OPPORTUNITIES TRENDS OPPORTUNITIES'
      },
      {
        ru: 'ЗНАНИЕ РЫНКА ЗНАНИЕ РЫНКА ЗНАНИЕ РЫНКА',
        en: 'MARKET KNOWLEDGE MARKET KNOWLEDGE MARKET KNOWLEDGE'
      },
      {
        ru: 'ТАЙМИНГ ВХОД ТАЙМИНГ ВХОД ТАЙМИНГ ВХОД',
        en: 'TIMING ENTRY TIMING ENTRY TIMING ENTRY'
      }
    ]
  };

  // Карточки с преимуществами
  const features = [
    {
      key: 'trends',
      title: {
        ru: 'Тренды и возможности для прибыльной торговли',
        en: 'Trends and opportunities for profitable trading'
      },
      isWide: false
    },
    {
      key: 'knowledge',
      title: {
        ru: 'Знание состояния рынка - это ключ к успешной торговле. Мы умеем определять тренды и управлять рисками,чтобы вы могли принимать стратегические решения в любой ситуации',
        en: 'Knowledge of market conditions is the key to successful trading. We know how to identify trends and manage risks so you can make strategic decisions in any situation'
      },
      isWide: true
    },
    {
      key: 'timing',
      title: {
        ru: 'Знай, когда входить и когда ждать',
        en: 'Know when to enter and when to wait'
      },
      isWide: false
    }
  ];

  return (
    <div 
      className="market-state-container" 
      ref={sectionRef}
    >
      <h2 className="market-state-heading">{texts.title[lang]}</h2>
      
      <div 
        className="market-hero-section"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`market-hero-bg ${isVisible ? 'animate' : ''} ${isHovered ? 'hovered' : ''}`}>
          {texts.bgText[lang]}
        </div>
        <div className="market-hero-inner">
          <div className="market-hero-content">
            <h2 className="market-hero-title">{texts.description[lang]}</h2>
            <p className="market-hero-text">{texts.subDescription[lang]}</p>
          </div>
          <div className="market-hero-cta">
            <Link to="/register" className="market-hero-button">{texts.button[lang]}</Link>
          </div>
        </div>
      </div>
      
      <div className="market-features-row">
        {features.map((feature, index) => (
          <div 
            className={`market-feature-card ${feature.isWide ? 'wide' : ''} ${activeIndex === index ? 'active' : ''}`}
            key={feature.key}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="market-feature-bg-text">
              {texts.featureBgTexts[index][lang]}
            </div>
            <div className="market-feature-content">
              {feature.title[lang]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketState; 