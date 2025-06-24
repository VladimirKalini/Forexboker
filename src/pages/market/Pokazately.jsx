import React from 'react';
import './Market.css';
import { Link } from 'react-router-dom';
import { useLang } from '../../components/LangContext';
import FooterImage from '../../components/FooterImage';

import PokazatelyWidgetObject from '../../components/Widget/PokazatelyWidgetObject';
import PokazatelyWidgetSchedule from '../../components/Widget/PokazatelyWidgetSchedule';

import PokazatelyHeader from '../../media/PokazatelyHeader.png';
import BlueLabel from '../../media/BlueLabel.png';
import PokazatelyPhoto from '../../media/PokazatelyPhoto.png';
import PokazatelyFooter from '../../media/PokazatelyFooter.png';
import RedLabelVertical from '../../media/RedLabelVertical.png';

const features = [
  {
    ru: 'Вы получаете удобный доступ к широкому спектру рыночных индикаторов: от инфляционных отчётов (CPI, PPI), данных о занятости (Non-Farm Payrolls, уровень безработицы), ВВП и потребительского доверия до индексов деловой активности (PMI, ISM) и корпоративной отчётности. Эти показатели влияют на валюты, акции, индексы и даже криптовалюту. Их своевременное понимание даёт вам не просто преимущество, а стратегическое оружие.',
    en: 'You get convenient access to a wide range of market indicators: from inflation reports (CPI, PPI), employment data (Non-Farm Payrolls, unemployment rate), GDP, and consumer confidence to business activity indexes (PMI, ISM) and corporate reporting. These indicators affect currencies, stocks, indices, and even cryptocurrency. Their timely understanding gives you not just an advantage, but a strategic weapon.'
  },
  {
    ru: 'Например, сильные данные по рынку труда США могут укрепить доллар, повлиять на цену золота и индекс S&P 500 одновременно. Аналогично, публикация данных о запасах нефти в США может мгновенно изменить цену на энергоносители. Настоящий трейдер — это не угадыватель тренда, а аналитик, действующий на основе проверенной информации.',
    en: 'For example, strong US labor market data can strengthen the dollar, affecting the price of gold and the S&P 500 index simultaneously. Similarly, the publication of US oil inventory data can instantly change the price of energy carriers. A real trader is not a trend guesser, but an analyst acting on verified information.'
  },
  {
    ru: 'В Школе трейдинга FXBroker мы обучаем, как читать и интерпретировать макроэкономические отчёты, учитывать ожидания рынка, отслеживать пересечения прогнозов с реальностью и использовать эти знания в рамках торговой стратегии. Вы научитесь видеть взаимосвязи между активами, понимать реакцию рынка на отчёты и использовать показатели как сигнал к входу или выходу из сделки.',
    en: 'At the FXBroker Trading School, we teach how to read and interpret macroeconomic reports, consider market expectations, track the intersection of forecasts with reality, and use this knowledge within a trading strategy. You will learn to see the relationships between assets, understand the market\'s reaction to reports, and use indicators as signals to enter or exit trades.'
  }
];

const numberedFeaturesData = [
  {
    title: { ru: 'Реакция рынка', en: 'Market Reaction' },
    description: { ru: 'чаще зависит не от самого показателя, а от его расхождения с ожиданиями. Даже слабый отчёт может вызвать рост, если рынок ждал ещё худшего результата.', en: 'often depends not on the indicator itself, but on its divergence from expectations. Even a weak report can cause growth if the market expected an even worse result.' }
  },
  {
    title: { ru: 'Индекс PMI', en: 'PMI Index' },
    description: { ru: 'выше 50 означает рост сектора, ниже — его сокращение. Это один из главных опережающих индикаторов, особенно важный для анализа экономической активности в производстве и услугах.', en: 'above 50 indicates sector growth, while below indicates contraction. It is one of the main leading indicators, especially important for analyzing economic activity in manufacturing and services.' }
  },
  {
    title: { ru: 'Инфляционные показатели', en: 'Inflation Indicators' },
    description: { ru: 'напрямую влияют на монетарную политику центральных банков. Один неожиданный рост CPI может повлиять на ставку ФРС и вызвать глобальные движения по всем валютным парам.', en: 'directly influence the monetary policy of central banks. An unexpected rise in the CPI can affect the Fed\'s rate and cause global movements across all currency pairs.' }
  },
  {
    title: { ru: 'Показатели рынка труда', en: 'Labor Market Indicators' },
    description: { ru: '(NFP, уровень безработицы) часто вызывают максимальную волатильность на рынках. Эти данные торгуются вживую и требуют мгновенной реакции — но только если вы знаете, как интерпретировать их значение.', en: '(NFP, unemployment rate) often cause maximum market volatility. This data is traded live and requires an immediate reaction — but only if you know how to interpret its meaning.' }
  },
  {
    title: { ru: 'Корреляции между показателями', en: 'Correlations Between Indicators' },
    description: { ru: 'и активами со временем меняются. То, что раньше вызывало рост валюты, может в будущем вызвать её падение. Школа FXBroker обучает не шаблонам, а гибкому аналитическому мышлению.', en: 'and assets change over time. What used to cause a currency to rise may cause it to fall in the future. The FXBroker School teaches flexible analytical thinking, not templates.' }
  },
  {
    title: { ru: 'Реакция на отчёты', en: 'Reaction to Reports' },
    description: { ru: 'часто продолжается не минуты, а дни. Многие трейдеры ошибочно считают, что всё происходит сразу после публикации, тогда как крупные игроки реагируют медленно и стратегически.', en: 'often lasts for days, not minutes. Many traders mistakenly believe that everything happens immediately after publication, whereas large players react slowly and strategically.' }
  }
];
const cardsData = [
  {
    title: { ru: 'Формирование торговых идей.', en: 'Forming Trading Ideas.' },
    text: { ru: 'Зная, что в пятницу выходит NFP (Non-Farm Payrolls), вы можете заранее планировать сценарии и выбирать инструменты, которые дадут наилучшую реакцию.', en: 'Knowing that NFP (Non-Farm Payrolls) is released on Friday, you can plan scenarios in advance and choose instruments that will give the best reaction.' }
  },
  {
    title: { ru: 'Выход из флетов.', en: 'Exiting Flats.' },
    text: { ru: 'Часто рынок "ждёт" публикации важного отчёта, двигаясь в узком диапазоне. После выхода показателя актив "взрывается" — и вы можете быть к этому готовы.', en: 'Often the market "waits" for an important report, moving in a narrow range. After the indicator is released, the asset "explodes" — and you can be ready for it.' }
  },
  {
    title: { ru: 'Оценка долгосрочных трендов.', en: 'Assessing Long-Term Trends.' },
    text: { ru: 'Например, если PMI несколько месяцев подряд снижается, это может сигнализировать о замедлении экономики — и влиять на весь фондовый рынок.', en: 'For example, if the PMI decreases for several months in a row, it can signal an economic slowdown — and affect the entire stock market.' }
  },
  {
    title: { ru: 'Фильтрация ложных сигналов.', en: 'Filtering False Signals.' },
    text: { ru: 'Технический сигнал может оказаться ложным, если рынок ожидает важной статистики. Понимание контекста помогает избежать преждевременных входов.', en: 'A technical signal may turn out to be false if the market is expecting important statistics. Understanding the context helps to avoid premature entries.' }
  }
];

const blocktext = [
  {
    title: { ru: 'Показатели рынка', en: 'Market Indicators' },
    text: { 
      ru: 'Показатели рынка — это не просто статистика, а сигналы о состоянии экономики, которые напрямую влияют на движение всех торговых инструментов. Для трейдера умение читать и интерпретировать эти данные — ключевое конкурентное преимущество. Один взгляд на отчет может объяснить десятки пунктов движения графика. А уметь предугадывать реакцию рынка на предстоящую публикацию — значит входить в рынок осознанно, а не случайно.',
      en: 'Market indicators are not just statistics, but signals about the state of the economy that directly affect the movement of all trading instruments. For a trader, the ability to read and interpret this data is a key competitive advantage. One look at a report can explain tens of points of chart movement. And being able to predict the market\'s reaction to an upcoming publication means entering the market consciously, not randomly.'
    }
  },
  {
    title: { ru: 'Сезонность', en: 'Seasonality' },
    text: { 
      ru: 'Валюты, акции, сырьевые товары и крипта — всё реагирует на фундаментальные показатели. Когда выходит сильный отчёт по безработице в США, доллар начинает расти. Когда инфляция в Еврозоне превышает ожидания, инвесторы пересматривают ожидания по ставке ЕЦБ, и это влияет на курс евро. Дания цена нефти может резко измениться после публикации отчёта о коммерческих запасах в США или прогноза спроса от ОПЕК. Чтобы эффективно использовать рыночные показатели в своей торговле, недостаточно просто знать, что выходит и когда. Нужно понимать, что значит каждый индикатор, как он влияет на рынок, какие активы подвержены реакции, и какая динамика закладывается в цену заранее. Это всё — часть фундаментального анализа, которому мы обучаем в Школе FXBroker.',
      en: 'Currencies, stocks, commodities, and crypto — all react to fundamental indicators. When a strong US unemployment report is released, the dollar begins to rise. When inflation in the Eurozone exceeds expectations, investors revise their expectations for the ECB rate, and this affects the euro exchange rate. The price of oil can change dramatically after the publication of a report on commercial reserves in the US or a demand forecast from OPEC. To effectively use market indicators in your trading, it is not enough to just know what is coming out and when. You need to understand what each indicator means, how it affects the market, which assets are subject to reaction, and what dynamics are priced in advance. This is all part of the fundamental analysis we teach at the FXBroker School.'
    }
  }
];

export default function Pokazately() {
  const { lang } = useLang();


  return (
    <>
    <section className="market-analysis-block">
      <div className="market-analysis-block__content">
        <h2 className="market-analysis-block__title">
          {lang === 'ru' ? 'Рынок никогда не движется' : 'The market never moves'}<br />
          {lang === 'ru' ? 'случайно' : 'randomly'}
          <span className="market-analysis-block__title-accent"></span>
        </h2>
        <p className="market-analysis-block__text">
          {lang === 'ru' 
            ? 'За каждым трендом, скачком волатильности или флетом стоят фундаментальные данные — экономические индикаторы, отчёты, статистика и настроения участников.'
            : 'Behind every trend, volatility spike, or flat market are fundamental data — economic indicators, reports, statistics, and participant sentiment.'}
        </p>
        <p className="market-analysis-block__text">
          {lang === 'ru'
            ? 'Показатели рынка — это ключ к пониманию реальной картины происходящего. Именно они помогают отличить эмоциональные колебания от системных изменений, спрогнозировать динамику активов и принимать обоснованные торговые решения.'
            : 'Market indicators are the key to understanding the real picture of what is happening. They help distinguish emotional fluctuations from systemic changes, forecast asset dynamics, and make informed trading decisions.'}
        </p>
        <Link style={{ textDecoration: 'none' }} to="/register" className="market-analysis-block__button">
          {lang === 'ru' ? 'Открыть счет' : 'Open an account'}
        </Link>
      </div>

      <div className="market-analysis-block__image-wrapper">
        <img src={PokazatelyHeader} alt="Торговая платформа на планшете и телефоне" />
      </div>
    </section>

    <section className="platform-features">
      <h2 className="platform-features__title">
        {lang === 'ru' ? 'На платформе FXBroker' : 'On the FXBroker Platform'}
      </h2>
      
      <ul className="platform-features__list">
        {features.map((text, index) => (
          <li key={index} className="platform-features__item">
            <img src={BlueLabel} alt="bookmark icon" className="platform-features__item-icon" />
            <p className="platform-features__item-text">
              {text[lang]}
            </p>
          </li>
        ))}
      </ul>
    </section>
    <PokazatelyWidgetObject />
    <div></div>
    <PokazatelyWidgetSchedule />
    <section className="psychologyBlock_container">
      <h2 className="psychologyBlock_title">
        {lang === 'ru' ? 'Наш экономический календарь' : 'Our economic calendar'}
      </h2>

      <div className="psychologyBlock_phonesContainer">
        <img
          src={PokazatelyPhoto}
          alt="Экономический календарь в приложении"
          className="psychologyBlock_phoneImage"
        />
      </div>

      <div className="psychologyBlock_textBlocksContainer">
        <div className="psychologyBlock_textBlockLeft">
          <p>
            {lang === 'ru' ? 'Наш экономический календарь, обновляющийся в реальном времени, включает не только даты публикаций, но и уровни важности событий, прогнозы и фактические значения. Для каждого трейдера — от новичка до опытного инвестора — это незаменимый инструмент ежедневного анализа.'
              : "Our economic calendar, updated in real time, includes not only publication dates, but also event importance levels, forecasts and actual values. For every trader - from beginner to experienced investor - it is an indispensable tool for daily analysis."}
          </p>
        </div>
        <div className="psychologyBlock_textBlockRight">
          <p>
            {lang === 'ru' ? 'Сочетая фундаментальные показатели с техническими, вы можете создавать сбалансированные стратегии: открывать позиции с высокой вероятностью успеха, избегать новостной волатильности и точно планировать риск. Чем глубже вы понимаете экономику — тем увереннее действуете на рынке. И это именно то, чему мы учим.'
              : "By combining fundamentals with technical indicators, you can create balanced strategies: open positions with a high probability of success, avoid news volatility and accurately plan for risk. The more you understand the economy, the more confident you are in the market. And that's exactly what we teach."}
          </p>
        </div>
      </div>
    </section>  
    <section className="numbered-features">
      <div className="numbered-features__grid">
        {numberedFeaturesData.map((item, index) => (
          <article key={index} className="numbered-features__item">
            <header className="numbered-features__item-header">
              <span className="numbered-features__item-number">{index + 1}</span>
              <h3 className="numbered-features__item-title">
                {lang === 'ru' ? item.title.ru : item.title.en}
              </h3>
            </header>
            <p className="numbered-features__item-description">
              {lang === 'ru' ? item.description.ru : item.description.en}
            </p>
          </article>
        ))}
      </div>
    </section>
      <section className="practical-benefits">
      <h2 className="practical-benefits__title">
        {lang === 'ru' ? 'Практическая польза показателей рынка для трейдера' : 'Practical Benefits of Market Indicators for a Trader'}
      </h2>

      <div className="practical-benefits__cards-container">
        {cardsData.map((card, index) => (
          <article key={index} className="practical-benefits__card">
            <img src={RedLabelVertical} alt="bookmark" className="practical-benefits__card-icon" />
            <h3 className="practical-benefits__card-title">
              {lang === 'ru' ? card.title.ru : card.title.en}
            </h3>
            <p className="practical-benefits__card-text">
              {lang === 'ru' ? card.text.ru : card.text.en}
            </p>
          </article>
        ))}
      </div>

      <div className="practical-benefits__background-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0055ff" fillOpacity="1" d="M0,160L48,181.3C96,203,192,245,288,240C384,235,480,181,576,149.3C672,117,768,107,864,128C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
    <section className="market-insights">
      <h2 className="market-insights__main-title">
        {lang === 'ru' ? 'Почему важно понимать рыночные показатели?' : 'Why is it important to understand market indicators?'}
      </h2>

      <div className="market-insights__content-grid">
        {blocktext.map((blocktext, index) => (
          <article key={index} className="market-insights__card">
            <h3 className="market-insights__card-title">
              {lang === 'ru' ? blocktext.title.ru : blocktext.title.en}
            </h3>
            <p className="market-insights__card-text">
              {lang === 'ru' ? blocktext.text.ru : blocktext.text.en}
            </p>
          </article>
        ))}
      </div>
    </section>
    <FooterImage 
      overlayClassName="bg-black"
      className="bg-black"
      backgroundSrc={PokazatelyFooter}
      textRu="Научитесь анализировать геополитику, макростатистику и мировые события, чтобы торговать осознанно."
      textEn="Learn to analyze geopolitics, macro statistics and world events to trade intelligently."
      btnTextRu="Открыть счет"
      btnTextEn="Open an account"
      btnLink="/register"
      />
    </>
  );
};