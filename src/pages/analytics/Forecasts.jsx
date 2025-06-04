import React, { useState, useEffect } from 'react';     
import { useLang } from '../../components/LangContext';
import { Link } from 'react-router-dom';
import './StyleAnalytics.css';
import FooterImage from '../../components/FooterImage.jsx';
import ForecastsWidget from '../../components/ForecastsWidget.jsx'
import FooterForecastsImg from '../../media/FooterForecastsImg.png'; 
import ForecastCube from '../../media/ForecastCube.png'; 
import Phone from '../../media/phone.png'; 

export default function Forecasts() {
  const { lang } = useLang();
  const [activeIndex, setActiveIndex] = useState(0);
  
    useEffect(() => {
      const iv = setInterval(() => {
        setActiveIndex(i => (i + 1) % cards.length);
      }, 6000);
      return () => clearInterval(iv);
    }, []);

  const items = [
    {
      key: 'forecast',
      title: {
        ru: 'Ваш торговый план начинается с прогнозa',
        en: 'Your trading plan starts with a forecast'
      },
      text: {
        ru: 'Точные аналитические обзоры помогают определить потенциальные точки входа и выхода. Не упустите шанс войти в рынок вовремя — с нашей помощью.',
        en: 'Precise analytical overviews help identify potential entry and exit points. Don’t miss your chance to time the market correctly—with our assistance.'
      }
    },
    {
      key: 'dataNotGuess',
      title: {
        ru: 'Данные вместо догадок',
        en: 'Data instead of guesses'
      },
      text: {
        ru: 'Забудьте про интуицию и догадки. FXBroker предоставляет обоснованные прогнозы на основе технического и фундаментального анализа, чтобы вы торговали уверенно.',
        en: 'Forget intuition and guessing. FXBroker delivers well-grounded forecasts based on technical and fundamental analysis so you can trade with confidence.'
      }
    },
    {
      key: 'rightChoice',
      title: {
        ru: 'Делайте верный выбор благодаря точной аналитике',
        en: 'Make the right choice with precise analytics'
      },
      text: {
        ru: 'Мы анализируем текущие тренды и создаём точные прогнозы для вашего успешного трейдинга. Узнайте, как использовать прогнозы для прибыльных сделок.',
        en: 'We analyze current trends and produce precise forecasts for your trading success. Learn how to leverage forecasts for profitable trades.'
      }
    },
    {
      key: 'seeTrendEarly',
      title: {
        ru: 'Видеть тренд до того, как он начался',
        en: 'See the trend before it starts'
      },
      text: {
        ru: 'FXBroker помогает выявлять зародившиеся движения ещё до того, как они становятся очевидными. Превратите раннюю информацию в торговое преимущество.',
        en: 'FXBroker helps spot emerging moves before they become obvious. Turn early insights into trading edge.'
      }
    }
    
  ];
const title = {
    ru: 'Прогноз рынка от FXBroker — торгуйте на опережение',
    en: 'Market Forecast by FXBroker — Trade Ahead'
  };

  const paragraphs = {
    ru: [
      'Уверенная торговля начинается с чёткой картины рынка.',
      'Мы предоставляем обоснованные рыночные прогнозы на основе фундаментального и технического анализа, чтобы вы могли принимать стратегические решения, а не полагаться на интуицию.'
    ],
    en: [
      'Confident trading starts with a clear market picture.',
      'We deliver well-grounded market forecasts based on fundamental and technical analysis so you can make strategic decisions rather than guess.'
    ]
  };

  const note = {
    ru: 'Мы не просто говорим, куда может пойти цена. Мы объясняем, почему это может произойти, при каких условиях, и что это значит для вас как трейдера.',
    en: 'We don’t just tell you where price might go. We explain why it may move, under what conditions, and what it means for you as a trader.'
  };

  const cards = [
  {
    key: 'first',
    title: {
      ru: 'Вы экономите время',
      en: 'You save time',
    },
    text: {
      ru: 'Не тратите часы на самостоятельную аналитику.',
      en: 'Dont spend hours doing your own analysis.',
    },
    bg: {
      ru: 'Про',
      en: 'For',
    },
  },
  {
    key: 'second',
    title: {
      ru: 'Снижаете эмоциональные ошибки!',
      en: 'Reduce emotional errors',
    },
    text: {
      ru: 'Решения принимаются не из страха или азарта, а из расчета.',
      en: 'Decisions are made not out of fear or excitement, but out of calculation.',
    },
    bg: {
      ru: 'гн',
      en: 'eca',
    },
  },
  {
    key: 'third',
    title: {
      ru: 'Действуете системно',
      en: 'Decisions based on facts, not emotions',
    },
    text: {
      ru: 'Независимо от рыночного шума и краткосрочной волатильности.',
      en: 'Regardless of market noise and short-term volatility.',
    },
    bg: {
      ru: 'оз',
      en: 'sts',
    },
  },
];
  return (
    <main>
    <section className="features-center-section">
      <div className="feature-item pos-tl">
        <h4><span className="feature-bullet" />{items[0].title[lang]}</h4>
        <p>{items[0].text[lang]}</p>
      </div>
      <div className="feature-item pos-tr">
        <h4><span className="feature-bullet" />{items[2].title[lang]}</h4>
        <p>{items[2].text[lang]}</p>
      </div>

      <div className="feature-center">
        <img src={ForecastCube} alt="" />
      </div>

      <div className="feature-item pos-bl">
        <h4><span className="feature-bullet" />{items[1].title[lang]}</h4>
        <p>{items[1].text[lang]}</p>
      </div>
      <div className="feature-item pos-br">
        <h4><span className="feature-bullet" />{items[3].title[lang]}</h4>
        <p>{items[3].text[lang]}</p>
      </div>
      </section>
      <Link to="/Register" className="btnforecasts">
      {lang === 'ru' ? 'Зарегестрироваться' : 'Register'}
      </Link>
       
       <ForecastsWidget />
    
       <section className="market-forecast">
      <div className="market-forecast__image">
        <img src={Phone} alt="" className="market-forecast__phone market-forecast__phone--front" />
      </div>
      <div className="market-forecast__content">
        <h2 className="market-forecast__title">{title[lang]}</h2>
        {paragraphs[lang].map((text, i) => (
          <p key={i} className="market-forecast__text">{text}</p>
        ))}
        <div className="market-forecast__note">
          {note[lang]}
        </div>
      </div>
    </section>
    <section className="cards-block-forecastst">
        <h2 className="cards-block__heading-forecastst">
          {lang === 'ru' ? 'Почему это важно трейдеру?' : 'Why is this important for a trader?'}
        </h2>
        <div className="cards-block__list-forecastst">
          {cards.map(({ key, title, text, bg }, i) => (
            <div
              key={key}
              className={`card-forecastst ${activeIndex === i ? 'active' : ''}`}
              onMouseEnter={() => setActiveIndex(i)}
            >
              <div className="card__bg-forecastst">{bg[lang]}</div>
              <div className="card__content-forecastst">
                <h3>{title[lang]}</h3>
                <p>{text[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <FooterImage 
      backgroundSrc={FooterForecastsImg}
       textRu="Превратите информацию в прибыль. Рынок вознаграждает не тех, кто догадывается, а тех, кто готов.Следите за нашими прогнозами ежедневно — и торгуйте с чётким планом, а не наугад."
       textEn="Turn information into profit. The market rewards not those who guess, but those who are prepared. Follow our forecasts daily - and trade with a clear plan, not at random."
       btnTextRu="Открыть счет"
       btnTextEn="Open an account"
       btnLink="/register"
      />
    </main>
  );
}
