import React from 'react';
import './Education.css';
import { useLang } from '../../components/LangContext';
import LapPhoEduca from '../../media/LapPhoEduca.png';
import HeadEdu from '../../media/HeadEdu.png';
import BlueBlock from '../../components/BlueBlock';
import MacroImage from '../../media/MacroImage.png';
import { Link } from 'react-router-dom'; // *** ДОБАВЛЕНО: Импорт Link ***

export default function EducationPG() {
  const { lang } = useLang();

  const content = {
    mainTitle: {
      ru: '1. Валютный рынок начинающим:',
      en: '1. Forex Market for Beginners:',
    },
    description: {
      ru: 'Программа: Знакомство с механизмом работы валютного рынка, участники, возможность получения прибыли. Основы фундаментального, технического и компьютерного анализа. Психологические аспекты в торговле. Управление капиталом. Обучение состоит из 3 семинаров по 1-2 часа каждый.',
      en: 'Program: Introduction to the foreign exchange market mechanism, participants, profit opportunities. Fundamentals of fundamental, technical, and computer analysis. Psychological aspects in trading. Capital management. The training consists of 3 seminars, 1-2 hours each.',
    },
    lessons: [
      {
        title: {
          ru: '1. Занятие',
          en: '1. Lesson',
        },
        text: {
          ru: 'Основы работы на рынке Форекс.',
          en: 'Forex Market Fundamentals.',
        },
      },
      {
        title: {
          ru: '2. Занятие',
          en: '2. Lesson',
        },
        text: {
          ru: 'Фундаментальный и технический анализ валютного рынка.',
          en: 'Fundamental and Technical Analysis of the Forex Market.',
        },
      },
      {
        title: {
          ru: '3. Занятие',
          en: '3. Lesson',
        },
        text: {
          ru: 'Тактики и стратегии',
          en: 'Tactics and Strategies',
        },
      },
    ],
  };

  return (
    <>
      <section
        className="fundamentals-block"
        style={{
          backgroundImage: `url(${HeadEdu})`,
          marginBottom: '50px'
        }}
      >
        <div className="fundamentals-block__overlay" />

        <div className="fundamentals-block__inner">
          <div className="fundamentals-block__content">
            <h2 className="fundamentals-block__title">
              {lang === 'ru'
                ? 'Профессиональное обучение трейдингу: '
                : "Professional trading training: "}
              <span className="fundamentals-block__highlight">
                {lang === 'ru'
                  ? 'Мы научим вас зарабатывать на рынках'
                  : 'We will teach you how to make money in the markets'}
              </span>
            </h2>
            <p className="fundamentals-block__subtitle">
              {lang === 'ru'
                ? 'Начните обучение прямо сейчас! Откройте счет и получите доступ к качественным образовательным материалам'
                : 'Start learning now! Open an account and get access to quality educational materials'}
            </p>
            <button className="fundamentals-block__button" style={{backgroundColor: 'red'}}>
              {lang === 'ru' ? 'Открыть счет' : 'Open an account'}
            </button>
          </div>
        </div>
      </section>
      <BlueBlock
        overrideTexts={{
          title: {
            ru: 'Обучение',
            en: "Education "
          },
          description: {
            ru: 'У нас вы можете пройти обучение для работы на валютном рынке Форекс и овладеть знаниями трейдера-аналитика. На информационно - консультативных семинарах, вы узнаете о том, как работает финансовый рынок, научитесь работать на этом рынке и зарабатывать. Во время обучения вы получите теоретические и практические знания, которые можете использовать при торговле на рынке Форекс. Вы научитесь пользоваться программным обеспечением МЕТАТРЕЙДЕР 4 , на сегодняшний день эта программа является одной из лучших для торговли на валютном рынке.',
            en: 'Here you can get training to work in the Forex market and master the knowledge of a trader-analyst. At informational and advisory seminars, you will learn how the financial market works, learn how to work on this market and earn. During the training you will get theoretical and practical knowledge that you can use when trading on the Forex market. You will learn to use the software METATRADER 4, today this program is one of the best for trading on the currency market.'
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
      <section className="fx-beginners-block-container">
        <div className="fx-beginners-block-image-wrapper">
          <img
            src={LapPhoEduca}
            alt="Trading Platforms"
            className="fx-beginners-block-image"
          />
        </div>
        <div className="fx-beginners-block-content">
          <h2 className="fx-beginners-block-main-title">
            {content.mainTitle[lang]}
          </h2>
          <p className="fx-beginners-block-description">
            {content.description[lang]}
          </p>
          <div className="fx-beginners-block-lessons">
            {content.lessons.map((lesson, index) => (
              <div key={index} className="fx-beginners-block-lesson-item">
                <h3 className="fx-beginners-block-lesson-title">
                  {lesson.title[lang]}
                </h3>
                <p className="fx-beginners-block-lesson-text">
                  {lesson.text[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="macro-section">
        <div className="macro-container">
          <div className="macro-left">
            <h1 className="macro-logo">
              <span className="macro-logo--accent">FX</span>Broker
            </h1>
            <h2 className="macro-title">
              {lang === 'ru' ? 'Торговая практика для опытных трейдеров.' : 'Trading practice for experienced traders.'}
            </h2>
            <Link to="/register" className="macro-button">
              {lang === 'ru' ? 'Открыть счет' : 'Open an account'}
            </Link>
          </div>

          <div className="macro-right">
            <div className="macro-text">
              <p>
                <strong>
                  {lang === 'ru' ? '' : ''} 
                </strong><br />
                {lang === 'ru' ? 'Программа: Влияние экономических новостей на стоимость валюты.Технический анализ графиков движения валютных пар, определение точек входа и выхода в рынок. Особенности компьютерного анализа, наиболее часто используемые индикаторы в торговле. Торговая система как путь к максимизации прибыльности сделок. Правила управления капиталом, особенности работы с различными депозитами.Торговые тактики и стратегии.'
                : "Program: Influence of economic news on the value of currency. Technical analysis of currency pairs charts, determination of entry and exit points in the market. Features of computer analysis, the most commonly used indicators in trading. Trading system as a way to maximize the profitability of transactions. Capital management rules, peculiarities of working with different deposits.Trading tactics and strategies."}
              </p>
              <p>
                <strong>
                  {lang === 'ru' ? '' : ''}
                </strong><br />
                {lang === 'ru' ? '3 семенара по 1,5-2 часа каждый, знания которых вы сможете применить сразу же на практике, 1 недели практики по интернету. Обучение проводит специалист с опытом работы на рынке Форекс более 10 лет.'
                : '3 seminars of 1.5-2 hours each, the knowledge of which you will be able to apply immediately in practice, 1 week of practice on the Internet. Training is conducted by a specialist with more than 10 years of experience in the Forex market.'}
              </p>
              <p>
                <strong>
                  {lang === 'ru' ? '' : ''}
                </strong><br />
                {lang === 'ru' ? 'Обучение проводится по рабочим дням..'
                  : "Training is conducted on weekdays."}
              </p>
            </div>

            <div className="macro-image">
              <img src={MacroImage} alt="Макроэкономика" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};