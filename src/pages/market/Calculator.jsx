import React, { useEffect, useState, useRef } from 'react';
import './Market.css';
import PhotoHeader from '../../components/PhotoHeader';
import { useLang } from '../../components/LangContext';
import { Helmet } from 'react-helmet-async';
import CalculatorHead from '../../media/CalculatorHead.png';
import FlexiblePlanningBlock from '../../components/FlexiblePlanningBlock';
import LaptopCalculatorImage from '../../media/LaptopCalculatorImage.jpg';
import CalculatorWidget from '../../components/Widget/CalculatorWidget'


const features = [
    {
      title: {
        ru: 'Управление капиталом',
        en: 'Capital Management',
      },
      description: {
        ru: 'понимание размера маржи и допустимых рисков',
        en: 'understanding margin size and acceptable risks',
      },
    },
    {
      title: {
        ru: 'Контроль эмоций',
        en: 'Emotional Control',
      },
      description: {
        ru: 'вы видите цифры и принимаете решения без лишнего давления',
        en: 'you see the numbers and make decisions without extra pressure',
      },
    },
    {
      title: {
        ru: 'Экономия времени',
        en: 'Time Saving',
      },
      description: {
        ru: 'мгновенные расчёты без ручных формул',
        en: 'instant calculations without manual formulas',
      },
    },
    {
      title: {
        ru: 'Гибкость',
        en: 'Flexibility',
      },
      description: {
        ru: 'можно тестировать любые торговые идеи в безопасной среде',
        en: 'you can test any trading ideas in a safe environment',
      },
    },
  ];
  const content = {
    heading: "Калькулятор прибыли — ваш надёжный инструмент для расчёта дохода и оценки рисков",
    columns: [
      "Это инструмент, который позволяет принимать обоснованные решения, заранее понимать возможные риски и адаптировать торговую стратегию в зависимости от условий рынка.",
      "Все, что вам нужно — ввести параметры: валютная пара или актив, цена входа и выхода, объём сделки, размер кредитного плеча и комиссии.",
      "В одно мгновение вы получите расчёт чистой прибыли или убытка, увидите требуемую маржу и даже сможете смоделировать разные сценарии развития рынка."
    ]
  };
export default function Calculator() {
    const { lang } = useLang();
    const [isVisible, setIsVisible] = useState(false);
const blockRef = useRef(null);

useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (blockRef.current) {
        observer.observe(blockRef.current);
    }

    return () => {
        if (blockRef.current) {
            observer.unobserve(blockRef.current);
        }
    };
}, []);
    
    return (
        <>
        <Helmet>
          <title>Калькулятор прибыли трейдера | Рассчитайте доходность сделок | FXBroker</title>
          <meta name="description" content="Используйте наш бесплатный калькулятор прибыли для точного расчета потенциального дохода и рисков по вашим сделкам. Эффективный инструмент для любого трейдера от FXBroker." />
       </Helmet>
        <PhotoHeader 
         backgroundImage={CalculatorHead}
         buttonColor=""
         onButtonClick={() => window.location.href = '/register'}
         overrideTexts={{ 
           title: {
             ru: 'Калькулятор прибыли: ',
             en: 'Professional trading training: '
           },
           highlightedTitle: {
             ru: 'мгновенные расчёты дохода по акциям и валютным парам',
             en: 'We will teach you how to make money in the markets'
           },
           subtitle: {
             ru: 'Начните обучение прямо сейчас! Откройте счет и получите доступ к качественным образовательным материалам',
             en: 'Start learning now! Open an account and get access to quality educational materials'
           },
           buttonText: {
             ru: 'Открыть счет',
             en: 'Open an account'
           }
         }}
        />
      <div className="feature-wrapper">
      <div className="feature-heading">
        <h2 className="feature-heading-title">
          {lang === 'ru'
            ? 'Зачем использовать калькулятор'
            : 'Why use the FXBroker '}  <br />
          {lang === 'ru'
            ? 'прибыли FXBroker?'
            : 'profit calculator?'}
          <span className="red-square" />
        </h2>
      </div>
      
      <section className="feature-section">
        <div className="feature-container">
          {features.map((item, i) => (
            <div key={i} className="feature-card">
              <h3 className="feature-title">{item.title[lang]}</h3>
              <p className="feature-description">
                {item.description[lang]}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
    <CalculatorWidget />
    <FlexiblePlanningBlock />
    <section className={`strong-trader-section ${isVisible ? 'visible' : ''}`} ref={blockRef}>
      <div className="strong-trader-content">
        <h2 className="strong-trader-title">
          {lang === 'ru' ? 'Сильный трейдер — это' : 'A strong trader is a trained trader'}
          <br />
          {lang === 'ru' ? 'подготовленный трейдер' : 'trained trader'}
        </h2>
        <p className="strong-trader-description">
        {lang === 'ru' ? 'Не рассчитывайте вслепую. Даже самая простая сделка должна быть просчитана до мелочей. Калькулятор FXBroker позволяет заранее оценить:' 
          : "Don't calculate blindly. Even the simplest transaction should be calculated to the last detail. FXBroker's calculator allows you to estimate in advance:"}
        </p>
        <ul className="strong-trader-list">
          <li className="strong-trader-list-item">
          {lang === 'ru' ? 'Какую прибыль Вы получите при нужной цене выхода' : 'How much profit you will make at the right exit price'}
          </li>
          <li className="strong-trader-list-item">
          {lang === 'ru' ? 'Сколько маржи потребуется при заданном плече' : 'How much margin will be required at a given leverage'}
          </li>
          <li className="strong-trader-list-item">
          {lang === 'ru' ? 'Как изменится результат, если курс пойдёт в другую сторону' 
          : 'How would the outcome change if the course went the other way'}
          </li>
          <li className="strong-trader-list-item">
          {lang === 'ru' ? 'Где находится точка безубыточности и уровень потенциальных убытков' 
          : 'Where is the break-even point and the level of potential losses'}
          </li>
          <li className="strong-trader-list-item">
          {lang === 'ru' ? 'Какую комиссию снимет брокер и как она повлияет на результат' 
          : 'What commission the broker will charge and how it will affect the result'}
          </li>
        </ul>
        <p className="strong-trader-footer">
        {lang === 'ru' ? 'Такая прозрачность помогает формировать стратегию, управлять капиталом и минимизировать риски.' 
          : 'Such transparency helps to form a strategy, manage capital and minimize risks.'}
        </p>
      </div>
      <div className="strong-trader-image-container">
        <img
          src={LaptopCalculatorImage}
          alt="Онлайн калькулятор трейдера на ноутбуке"
          className="strong-trader-image"
        />
      </div>
    </section>
    <section className="pc-section">
      <div className="pc-header">
        <h1 className="pc-title">
        {lang === 'ru' ? 'Калькулятор прибыли — ваш надёжный инструмент' 
        : 'Profit calculator - your reliable tool'} <br />
        {lang === 'ru' ? 'для расчёта дохода и оценки рисков' 
        : 'for income calculation and risk assessment'}
          <span className="pc-red-square"></span>
        </h1>
      </div>

      <div className="pc-cards">
        <div className="pc-card">
          <h2 className="pc-card-title">
          {lang === 'ru' ? 'Всё, что вам нужно' : 'All you need'}
          </h2>
          <p className="pc-card-text">
          {lang === 'ru' ? ' — ввести параметры: валютная пара или актив, цена входа и выхода, объём сделки, размер кредитного плеча и комиссии. В одно мгновение вы получите расчёт чистой прибыли или убытка, узнаете требуемую маржу и даже сможете смоделировать разные сценарии развития рынка.' 
          : ' - enter the parameters: currency pair or asset, entry and exit price, transaction volume, leverage and commission. In an instant you will receive a calculation of net profit or loss, know the required margin and even be able to simulate different market scenarios.'}
          </p>
        </div>

        <div className="pc-card">
          <h2 className="pc-card-title">
          {lang === 'ru' ? 'Современная торговля' : 'Modern trade'}
          </h2>
          <p className="pc-card-text">
          {lang === 'ru' ? ' требует не только интуиции, но и точных цифр. Именно поэтому мы в FXBroker разработали удобный и мощный калькулятор прибыли, с которым каждый трейдер — от новичка до профессионала — сможет оперативно оценивать потенциальный доход от сделки.' 
          : " requires not only intuition, but also accurate numbers. That's why we at FXBroker have developed a convenient and powerful profit calculator, with which every trader - from beginner to professional - will be able to quickly assess the potential profit from a trade."}
          </p>
        </div>

        <div className="pc-card">
          <h2 className="pc-card-title">
          {lang === 'ru' ? 'Это инструмент' 
          : "It's a tool"}
          </h2>
          <p className="pc-card-text">
          {lang === 'ru' ? 'который позволяет принимать обоснованные решения, заранее понимать возможные риски и адаптировать торговую стратегию в зависимости от условий рынка.' 
          : ' which allows you to make informed decisions, understand possible risks in advance and adapt your trading strategy depending on market conditions.'}
          </p>
        </div>
      </div>
    </section>
    <section className="section-box">
      <div className="overlay-treath"></div>
      <div className="content-calcul">
        <h1 className="heading-calcul">
          {content.heading}
          <span className="redSquare-calcul"></span>
        </h1>
        <p className="paragraph-calcul">{content.paragraph}</p>
        <div className="columnsContainer-calcul">
          {content.columns.map((text, index) => (
            <div key={index} className="column">
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
        </>
        );
    }
