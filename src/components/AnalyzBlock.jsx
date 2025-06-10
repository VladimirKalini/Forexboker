import React, { useState, useEffect, useRef } from 'react';
import { useLang } from './LangContext';
import { Link } from 'react-router-dom';

import './MarketState.css';

const AnalyzBlock = () => {
  const { lang } = useLang();
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);

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

  const texts = {
    title: {
      ru: 'Что такое технический анализ, зачем он нужен и как его проводить',
      en: 'What is technical analysis, why it is needed and how to perform it'
    },
    description: {
      ru: 'Определение',
      en: 'Determination'
    },
    subDescription: {
      ru: 'Теханализ – это попытка просчитать рынок. Он основан на том, чтобы математически обработать предшествующие значения цены и на их основе составить прогноз относительно будущего движения. Помогают в этом трейдерам формулы, алгоритмы, индикаторы и уровни – в общем, объекты, которые так или иначе интерпретируют график котировок. Так он превращается из хаотичного набора цен – в логически выстроенную структуру. В центре которой до сих пор – человек и его психология.',
      en: 'Technical analysis is an attempt to calculate the market. It is based on mathematically processing the previous price values and using them to make a forecast of the future movement. Formulas, algorithms, indicators and levels - in general, objects that in one way or another interpret the quote chart - help traders in this. This is how it turns from a chaotic set of prices into a logically built structure. The center of which is still a human being and his psychology.'
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
  const features = [
    {
      key: 'trends',
      title: {
        ru: 'Технический анализ начинается с графика цены и неразрывно с ним связан.',
        en: 'Technical analysis begins with the price chart and is inextricably linked to it. '
      },
      isWide: false
    },
    {
      key: 'knowledge',
      title: {
        ru: 'Даже новичку прежде всего приходит в голову начать пристально вглядываться в торговую платформу в поисках закономерностей. Как ни странно, они там действительно есть. График – это своего рода язык, сродни тому, на котором общаются математики. Профессор любой страны без труда разберется в изображениях парабол и универсально записанных формулах.',
        en: 'Even a beginner, the first thing that comes to mind is to start looking closely at the trading platform in search of patterns. Strange as it may seem, they are indeed there. A chart is a kind of language, akin to the one used by mathematicians. A professor of any country will easily understand images of parabolas and universally written formulas.'
      },
      isWide: true
    },
    {
      key: 'timing',
      title: {
        ru: 'Тоже самое с трейдерами и аналитиками всего мира. Они разработали свой язык, благодаря которому «считывают» торговые сигналы и совершают сделки в зависимости от своей торговой стратегии. Это и есть технический анализ.',
        en: 'It is the same with traders and analysts all over the world. They have developed their own language, thanks to which they “read” trading signals and make deals depending on their trading strategy. This is technical analysis.'
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
      
    </div>
  );
};

export default AnalyzBlock; 