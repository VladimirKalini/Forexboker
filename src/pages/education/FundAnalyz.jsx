import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Education.css';
import { useLang } from '../../components/LangContext';
import BlueBlock from '../../components/BlueBlock';
import { Helmet } from 'react-helmet-async';

import FundAnalyzHead from '../../media/FundAnalyzHead.png'; 
import BuildForex from '../../media/BuildForex.png'; 
import MacroImage from '../../media/MacroImage.png';


export default function FundamentalsBlock() {
    const { lang } = useLang();

    const gridRef = useRef(null);
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      if (gridRef.current) observer.observe(gridRef.current);
  
      return () => observer.disconnect();
    }, []);
  return (
    <>
    <Helmet>
    <title>Как использовать фундаментальный анализ в торговле | FXBroker</title>
    <meta name="description" content="Научитесь оценивать акции и валюты на основе экономических данных и финансовых отчетов. Применяйте фундаментальный анализ для принятия верных торговых решений." />
</Helmet>
    <section
      className="fundamentals-block"
      style={{ backgroundImage: `url(${FundAnalyzHead})` }}
    >
      <div className="fundamentals-block__overlay" />

      <div className="fundamentals-block__content">
        <h2 className="fundamentals-block__title">
        {lang === 'ru' 
            ? 'Фундаментальный анализ:' 
            : 'Fundamental Analysis:'}
          <span className="fundamentals-block__highlight">
          {lang === 'ru' 
            ? 'Понимание экономических факторов рынка' 
            : 'Understanding of the economic factors of the market'}
          </span>
        </h2>
        <p className="fundamentals-block__subtitle">
        {lang === 'ru' 
            ? 'Откройте счет и начинайте обучаться прямо сейчас' 
            : 'Understanding of the economic factors of the market'}
        </p>
        <button className="fundamentals-block__button">
        {lang === 'ru' 
            ? 'Открыть счет' 
            : 'Open an account'}
        </button>
      </div>
    </section>
     <section className="fa-block">
     <h2 className="fa-block__title">
     <span className="fa-block__marker">■</span>
     {lang === 'ru' 
            ? 'Что такое фундаментальный анализ, зачем ' 
            : 'What is fundamental analysis, why'} <br />
     {lang === 'ru' 
            ? 'он нужен и как его проводить' 
            : 'it is needed and how to conduct it'}
     </h2>

     <p className="fa-block__intro">
     {lang === 'ru' 
            ? 'Движение на рынке Forex (Форекс) задают фундаментальные факторы. Это ключевые макроэкономические показатели состояния национальной экономики, воздействующие на участников валютного рынка Forex (Форекс) и уровни валютных курсов. Именно эти факторы изучает фундаментальный анализ. Информация об учёте ставок центральных банков, экономический курс правительства, возможные перемены в политической жизни страны, а также всевозможные слухи и ожидания являются наиболее важными в фундаментальном анализе.' 
            : 'Movement in the Forex (Forex) market is set by fundamental factors. These are the key macroeconomic indicators of the national economy, affecting the participants of the Forex (Forex) currency market and the levels of exchange rates. It is these factors that fundamental analysis studies.Information about central bank rates, the economic course of the government, possible changes in the political life of the country, as well as all kinds of rumors and expectations are the most important in fundamental analysis.'}
     </p>

     <div className="fa-block__image-container">
       <img
         src={BuildForex}
         alt="FXBroker здание"
         className="fa-block__image"
       />
     </div>

     <div className="fa-block__cols">
       <div className="fa-block__col">
         <div className="fa-block__icon" />
         <div className="fa-block__col-content">
           <h3 className="fa-block__col-title">
           {lang === 'ru' 
            ? 'Цель фундаментального анализа' 
            : 'Purpose of fundamental analysis'}
           </h3>
           <p className="fa-block__col-text">
           {lang === 'ru' 
            ? 'Каждому трейдеру необходимо разобраться, как именно экономические события и показатели влияют на котировки, и как с помощью этих данных строить собственные прогнозы. Часто можно заметить, что трейдеры, даже опытные, считают, что раз занимаясь скальпингом, открывая десятки быстрых сделок в течение дня, им не нужно ничего знать о глобальной ситуации. Да и экономический календарь отслеживать необязательно. Однако это в корне неверно: любые изменения, на которые вы не успели (или не захотели) обратить внимание, могут негативно сказаться даже на краткосрочной торговле. Цель фундаментального анализа – помочь трейдеру подготовиться к неожиданным изменениям цены через понимание причины, по которой это происходит. А она, как правило, внешняя.' 
            : 'Every trader needs to understand how exactly economic events and indicators affect quotes, and how to use this data to make their own forecasts. It can often be seen that traders, even experienced ones, think that once they are engaged in scalping, opening dozens of quick trades during the day, they do not need to know anything about the global situation. It is not necessary to keep track of the economic calendar. However, this is fundamentally wrong: any changes, which you did not have time (or did not want) to pay attention to, can negatively affect even short-term trading. The purpose of fundamental analysis is to help a trader prepare for unexpected price changes by understanding the reason why it happens. As a rule, it is external.'}
           </p>
         </div>
       </div>

       <div className="fa-block__col">
         <div className="fa-block__icon" />
         <div className="fa-block__col-content">
           <h3 className="fa-block__col-title">
           {lang === 'ru' 
            ? 'Какие же события принимаются во внимание' 
            : 'What are the events that are taken into account'}
           </h3>
           <ul className="fa-block__col-list">
             <li>
             {lang === 'ru' 
            ? 'экономические, геополитические и социальные явления;' 
            : 'economic, geopolitical and social phenomena;'}
             </li>
             <li>
             {lang === 'ru' 
            ? 'экономические перспективы и общее настроение рынка в отношении конкретной страны;' 
            : 'economic outlook and general market sentiment towards a particular country;'}
            </li>
             <li>
             {lang === 'ru' 
            ? 'стихийные бедствия (экстремальные погодные условия, землетрясения и ураганы, которые наносят серьёзный ущерб);' 
            : 'natural disasters (extreme weather conditions, earthquakes and hurricanes that cause serious damage);'}
            </li>
             <li>
             {lang === 'ru' 
            ? 'периоды конфликтов между странами;' 
            : 'periods of conflict between countries;'}
            </li>
             <li>
             {lang === 'ru' 
            ? 'политические события (президентские выборы, референдумы, форумы);' 
            : 'Political events (presidential elections, referendums, forums);'}
            </li>
             <li>
             {lang === 'ru' 
            ? 'публикации важных статистик (экономические показатели) по отраслям или стране.' 
            : 'publication of important statistics (economic indicators) by industry or country.'}
            </li>
           </ul>
         </div>
       </div>
     </div>
   </section>
     <BlueBlock 
     overrideTexts={{
        title: {
          ru: 'Основы фундаментального анализа',
          en: "Fundamentals of fundamental analysis "
        },
        description: {
          ru: 'Движение на рынке Forex (Форекс) задают фундаментальные факторы. Это ключевые макроэкономические показатели состояния национальной экономики, воздействующие на участников валютного рынка Forex (Форекс) и уровень валютных курсов. Именно эти факторы изучает фундаментальный анализ.Информация об учетных ставках центральных банков, экономический курс правительства, возможные перемены в политической жизни страны, а также всевозможные слухи и ожидания являются наиболее важными в фундаментальном анализе.',
          en: 'The movement on the Forex (Forex) market is set by fundamental factors. These are the key macroeconomic indicators of the national economy, affecting the Forex market participants and the level of exchange rates. Information about central bank interest rates, the economic course of the government, possible changes in the political life of the country, as well as all kinds of rumors and expectations are the most important in fundamental analysis.'
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
<section className="methods-section">
  <h2 className="methods-title">
    {lang === 'ru' ? 'Методы' : 'Methods'}
  </h2>

  <div
    ref={gridRef}
    className={`methods-grid${visible ? ' visible' : ''}`}
  >
    <div className="methods-card">
      <h3 className="methods-card-title">
        {lang === 'ru' ? 'Сравнение' : 'Comparison'}
      </h3>
      <ul className="methods-list">
        <li>
          {lang === 'ru'
            ? 'После публикации экономических показателей трейдеры моментально начинают реагировать на то, насколько данные отличаются от ожиданий, и курс национальной валюты испытывает сильные колебания.'
            : 'After the publication of economic indicators, traders instantly begin to react to the extent to which the data differs from expectations, and the exchange rate of the national currency experiences strong fluctuations.'}
        </li>
        <li>
          {lang === 'ru'
            ? 'Тут-то и можно применить самый распространённый метод фундаментального анализа. Если опубликованные данные разительно отличаются от тех, которые прогнозировали мировые агентства, трейдеры действуют молниеносно.'
            : 'This is where the most common method of fundamental analysis can be applied. If the published data differ dramatically from those predicted by world agencies, traders act lightning fast.'}
        </li>
        <li>
          {lang === 'ru'
            ? 'Чем сильнее фактическое значение отличается от прогноза, тем более бурной будет реакция: допустим, после отчёта волна закрытия позиций или наоборот — начнётся массовое открытие сделок в очевидном направлении.'
            : 'The stronger the actual value differs from the forecast, the more violent the reaction will be: for example, after the report a wave of closing positions or vice versa—a mass opening of trades in the obvious direction.'}
        </li>
      </ul>
    </div>

    <div className="methods-card methods-card-wide">
      <h3 className="methods-card-title">
        {lang === 'ru' ? 'Сезонность' : 'Seasonality'}
      </h3>
      <p className="methods-text">
        {lang === 'ru'
          ? 'Такой фактор влияет на активы практически всех рынков, особенно — рынка фондового. В случае с акциями имеет значение не только период квартальной отчётности компаний, но и объём продаж «в сезон» и «в не сезон». Так, одни компании получают большие выигрыши летом, а другие — зимой, в зависимости от отрасли.'
          : 'This factor affects assets across almost all markets, especially equities. For stocks, not only the quarterly reporting period matters, but also in-season vs. off-season sales volume. Thus, some companies see large gains in summer, while others thrive in winter depending on the industry.'}
      </p>
      <ul className="methods-list">
        <li>
          {lang === 'ru'
            ? 'Это влияет на размер выплачиваемых дивидендов, на стоимость акций (волатильность) и интерес инвесторов. В случае сезонных факторов применяются методы их устранения.'
            : 'This impacts dividend payouts, stock volatility, and investor interest. Methods to adjust for seasonality are applied when analyzing these factors.'}
        </li>
        <li>
          {lang === 'ru'
            ? 'Показатели продаж компаний и макроэкономические данные сравнивают с тем же кварталом годом ранее, а национальные агентства корректируют данные методами устранения сезонности.'
            : 'Company sales figures and macroeconomic data are compared year-over-year, and national agencies adjust data using seasonal adjustment methods.'}
        </li>
        <li>
          {lang === 'ru'
            ? 'Перед рождественскими выходными происходит ликвидация позиций инвесторов, что может вызвать резкий скачок котировок. Этот фактор важно учитывать вместе с другими методами фундаментального анализа.'
            : 'Ahead of Christmas holidays, investors often liquidate positions, causing sharp price swings. This must be considered alongside other fundamental analysis methods.'}
        </li>
        <li>
          {lang === 'ru'
            ? 'И с другими активами: от валют до сырьевых товаров. Например, снижение доступности посевной партии хлопка ведёт к росту цен на фьючерсы.'
            : 'The same applies to other assets—from currencies to commodities. For example, reduced availability of the cotton crop drives up futures prices.'}
        </li>
      </ul>
    </div>

    <div className="methods-card">
      <h3 className="methods-card-title">
        {lang === 'ru' ? 'Дедукция и индукция' : 'Deduction and induction'}
      </h3>
      <ul className="methods-list">
        <li>
          {lang === 'ru'
            ? 'Используя индукцию, трейдер собирает вводные показатели индикаторов и новостей, чтобы предположить, как цена будет двигаться в будущем.'
            : 'Using induction, a trader gathers indicator data and news to hypothesize future price movements.'}
        </li>
        <li>
          {lang === 'ru'
            ? 'Дедукция применяется к торговле по тренду и фундаментальному анализу акций: она связывает текущие события с возможными допущениями.'
            : 'Deduction applies to trend trading and fundamental stock analysis: it links current events to potential assumptions.'}
        </li>
        <li>
          {lang === 'ru'
            ? 'Например, усиление волатильности вокруг целостности еврозоны может резко повлиять на пару EUR/USD.'
            : 'For example, increased volatility around Eurozone integrity can dramatically affect EUR/USD.'}
        </li>
      </ul>
    </div>

    <div className="methods-card">
      <h3 className="methods-card-title">
        {lang === 'ru' ? 'Корреляция' : 'Correlation'}
      </h3>
      <p className="methods-text">
        {lang === 'ru'
          ? 'Это комбинированный метод фундаментального анализа на стыке с техническим. Суть в том, что когда курс одного актива растёт, цена взаимозаменяемого может аналогично меняться.'
          : 'A combined fundamental/technical method: when one asset’s price rises, a correlated asset often moves similarly.'}
      </p>
      <p className="methods-text">
        {lang === 'ru'
          ? 'Сейчас на торговых платформах есть индикаторы корреляции, такие как OverLay Chart и Indice-Correlation. Подробнее о них читайте в наших статьях.'
          : 'Modern trading platforms offer correlation indicators like OverLay Chart and Indice-Correlation. Read more in our articles.'}
      </p>
    </div>

    <div className="methods-card">
      <h3 className="methods-card-title">
        {lang === 'ru' ? 'Группировка и обобщение' : 'Grouping and generalization'}
      </h3>
      <p className="methods-text">
        {lang === 'ru'
          ? 'Активы разбиваются на группы по поведению и характеристикам, затем рассчитывается общий индекс. Например, свой макроэкономический индекс можно собрать из 30 акций компаний голубых фишек.'
          : 'Assets are grouped by behavior and characteristics to calculate an aggregate index—e.g., your own 30-stock blue-chip macro index.'}
      </p>
      <p className="methods-text">
        {lang === 'ru'
          ? 'Собирайте портфели по своим критериям и применяйте этот метод на практике!'
          : 'Assemble portfolios based on your criteria and put this method into practice!'}
      </p>
    </div>
  </div>
</section>
<section className="macro-section">
      <div className="macro-container">
        <div className="macro-left">
          
          <h2 className="macro-title">
          {lang === 'ru' ? 'Показатели макроэкономики' : 'Macroeconomic indicators'}
         </h2>
          <Link to="/register" className="macro-button">
          {lang === 'ru' ? 'Открыть счет' : 'Open an account'}
          </Link>
        </div>

        <div className="macro-right">
          <div className="macro-text">
            <p>
              <strong>
              {lang === 'ru' ? 'Опережающие индикаторы' : 'Leading indicators'}
              </strong><br />
              {lang === 'ru' ? 'Такие показатели помогают составить прогноз о будущих изменениях в экономике страны: перемены в их значениях предупреждают о том, что скоро мы увидим подобный негативный (или же позитивный) эффект и в других секторах.' 
              : "Such indicators help to forecast future changes in the country's economy: changes in their values warn that we will soon see a similar negative (or positive) effect in other sectors."}
            </p>
            <p>
              <strong>
              {lang === 'ru' ? 'Запаздывающие индикаторы' : 'Lagging indicators'}
              </strong><br />
              {lang === 'ru' ? ' В отличие от опережающих показателей, они отражают уже произошедшие изменения в экономике с течением времени. Трейдеры используют методы работы с этими индикаторами для подтверждения силы рыночных тенденций: раз экономика уже начала двигаться в определённом направлении, значит, можно открывать среднесрочные и долгосрочные сделки по общему тренду.' 
              : 'Unlike leading indicators, they reflect the changes that have already occurred in the economy over time. Traders use the methods of working with these indicators to confirm the strength of market trends: if the economy has already started to move in a certain direction, it means that it is possible to open medium- and long-term deals on the general trend.'}
            </p>
            <p>
              <strong>
              {lang === 'ru' ? 'Совпадающие индикаторы' : 'Matched indicators'}
              </strong><br />
              {lang === 'ru' ? 'Этот тип показателей предлагает важную информацию о текущем экономическом состоянии страны. Совпадающие индикаторы могут дать трейдерам детальный расклад по текущим рыночным тенденциям, позволяя подстроить стратегию под развивающийся тренд.'
               : "This type of indicator offers important information about a country's current economic condition. Matching indicators can give traders a detailed breakdown of current market trends, allowing them to adjust their strategy to the developing trend."}
            </p>
          </div>

          <div className="macro-image">
            <img src={MacroImage} alt="Макроэкономика" />
          </div>
        </div>
      </div>
    </section>

    <section className="analysis-stages">
    <div className="analysis-stages__inner">
      <h2 className="analysis-stages__title">
        {lang === 'ru' ? 'Этапы анализа' : 'Analysis Stages'}
      </h2>

      <div className="analysis-stages__item">
        <h3 className="analysis-stages__subtitle">
          {lang === 'ru' ? 'Анализ экономической ситуации' : 'Economic Situation Analysis'}
        </h3>
        <div className="analysis-stages__content">
          <p>{lang === 'ru'
            ? 'В качестве примера предлагаем рассмотреть наиболее ликвидную и популярную валютную пару EURUSD. Как правило, это вообще первый финансовый инструмент, с которым знакомятся трейдеры.Так вот, начинаем анализ – и валютного, и фондового рынка – с общей картины. Новостей по Еврозоне и Америке всегда выходит достаточно для того, чтобы поддерживать сильную волатильность по парам и акциям. Конкретно EURUSD, как лакмусовая бумажка двух сильнейших регионов, прекрасно подходит под все стили торговли, включая скальпинг и swing.Собираясь открывать сделки по EURUSD, обратите внимание на решения по монетарной политике ЕЦБ и ФРС. В обоих случаях руководство заседает каждые 6 недель для того, чтобы принять решение об изменении процентных ставок, а также отметить изменения в оценках экономики.Услышав официальные формулировки представителей центробанков, новичкам может показаться, что были высказаны очевидные вещи. Однако опытные аналитики выступают тут в роли «переводчиков» на человеческий язык, сравнивая предыдущие заявления регулятора – с текущими и разрабатывая по этому поводу аналитические обзоры.'
            : 'As an example, we suggest considering the most liquid and popular currency pair EURUSD. As a rule, this is the first financial instrument traders get acquainted with. So, we start analyzing both the currency and stock markets with the big picture. There is always enough news on Eurozone and America to support strong volatility in pairs and stocks. Specifically EURUSD, as a litmus test of the two strongest regions, is well suited for all trading styles, including scalping and swing.When going to open trades on EURUSD, pay attention to the monetary policy decisions of the ECB and the Fed. In both cases, the leadership meets every 6 weeks to decide on changes in interest rates, as well as to note changes in economic assessments.Hearing the official wording of the central bankers may seem obvious to newcomers. However, experienced analysts act here as “translators” into human language, comparing the previous statements of the regulator - with the current ones and developing analytical reviews on this occasion.'
          }</p>
        </div>
      </div>

      <div className="analysis-stages__item">
        <h3 className="analysis-stages__subtitle">
          {lang === 'ru' ? 'Анализ отрасли и компании' : 'Industry and Company Analysis'}
        </h3>
        <div className="analysis-stages__content">
          <p>{lang === 'ru'
            ? 'Этот этап входит в фундаментальный анализ фондового рынка. Если вы собираетесь торговать CFD на акции, рекомендуем прежде всего изучить деятельность выбранной компании. Начните отслеживать корпоративные новости, а также события отрасли, в которой фирма ведет деятельность: это может быть фармацевтика, IT, промышленность и т.д.Фундаментальный анализ ценных бумаг в качестве главных показателей использует индексы. В состав таких популярных индикаторов, как Dow Jones Industrial Average, Nikkei225, S&P500 входят акции известных компаний региона. Таким образом, чтобы понять, какая отрасль сейчас доминирует на рынке и является наиболее привлекательной для совершения сделок, имеет смысл также следить и за изменениями курсов соответствующих индексов.Обязательно проверяйте перед торговлей Календарь дивидендов. Он помогает определить начало и конец сезона корпоративной отчетности. Практически каждый день такого периода насыщен новостями по определенным компаниям. Публикуемые ими данные влияют и на стоимость акций на рынке, и на котировки индексов, в состав которых входят.'
            : 'This stage is part of the fundamental analysis of the stock market. If you are going to trade CFDs on stocks, we recommend that you first of all study the activities of the selected company. Start tracking corporate news, as well as the events of the industry in which the company operates: it can be pharmaceuticals, IT, industry, etc. Fundamental analysis of securities uses indices as the main indicators. Popular indicators such as Dow Jones Industrial Average, Nikkei225, S&P500 include shares of well-known companies in the region. Thus, in order to understand which industry is currently dominating the market and is the most attractive for making deals, it makes sense to also follow the changes in the rates of the corresponding indices.Be sure to check the Dividend Calendar before trading. It helps to determine the beginning and the end of the corporate reporting season. Almost every day of this period is full of news on certain companies. The data published by them affect both the value of shares on the market and quotations of indices, which include.'
          }</p>
        </div>
      </div>

      <div className="analysis-stages__item">
        <h3 className="analysis-stages__subtitle">
          {lang === 'ru' ? 'Анализ стоимости ценных бумаг' : 'Securities Valuation Analysis'}
        </h3>
        <div className="analysis-stages__content">
          <p>{lang === 'ru'
            ? 'Этот аспект фундаментального анализа фондового рынка мы продемонстрируем на примере компании Microsoft. По финансовым показателям, которые можно найти в открытом доступе (к примеру, на Инвестинге) – это одна из самых стабильных и богатых компаний на рынке. На финансовых ресурсах можно увидеть графики роста общего и операционного дохода, а также совсем небольшое их сокращение на фоне коронавируса. Все это говорит в пользу стабильности компании и ее акций.Можно увидеть на исторических графиках и таблицах, что ценные бумаги Microsoft также в течение 2019 года демонстрировали глобальный тренд на повышение стоимости, приближая объем рыночной капитализации компании к $1 трл.Внутри дня, недели и даже месяца котировки ценных бумаг могут меняться как в большую, так и в меньшую сторону. Зависит это от публикации ситуативных данных, отчетностей, новостей и экономического фона страны в целом. Однако, факторы фундаментального анализа – рост выручки, снижение налогов и сильный рост экономики в целом – играли в пользу рынка в целом и капитализации Microsoft, в частности.'
            : "We will demonstrate this aspect of fundamental analysis of the stock market on the example of Microsoft. According to the financial indicators that can be found in the public domain (for example, on Investing), it is one of the most stable and wealthy companies on the market. On the financial resources you can see the graphs of growth in total and operating income, as well as a very small reduction in them against the background of the coronavirus. All this speaks in favor of the stability of the company and its shares.You can see on historical charts and tables that Microsoft securities also during 2019 demonstrated a global trend to increase in value, bringing the volume of the company's market capitalization to $1 trillion.Within a day, a week and even a month, the quotations of securities can change both upward and downward. It depends on the publication of situational data, reports, news and the economic background of the country as a whole. However, fundamental analysis factors - revenue growth, tax cuts and strong economic growth in general - played in favor of the market in general and Microsoft capitalization in particular."
          }</p>
        </div>
      </div>
      </div>
    </section>
   </>
  );
}
