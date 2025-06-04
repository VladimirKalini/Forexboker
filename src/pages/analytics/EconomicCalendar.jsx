import './StyleAnalytics.css';
import { Link } from 'react-router-dom';
import React from 'react'; 
import { useLang } from '../../components/LangContext';
import Vector from '../../media/Vector.png';
import EcoLand from '../../media/EcoLand.png';
import EcoCalendar from '../../media/EcoCalendar.png';
import CalendarWidget from '../../components/CalendarWidget.jsx';
import FooterImage from '../../components/FooterImage.jsx';


export default function EconomicCalendar() {
  const { lang } = useLang();
const introText = {
    ru: 'Экономический календарь от FXBroker — это не просто инструмент, а часть стратегии успешного трейдера.',
    en: 'The Economic Calendar by FXBroker is not just a tool, but part of a successful trader’s strategy.'
  };
  const registerText = {
    ru: 'Зарегистрироваться',
    en: 'Register'
  };
  return (
   <main>
     <section className="econ-hero">
      <div className="econ-hero__left">
        <h2 className="econ-hero__title">
          {lang === 'ru' ? 'Экономический календарь' : 'Economic calendar'}
        </h2>
        <p className="econ-hero__subtitle">
          {lang === 'ru' ? 'Торгуйте с уверенностью, используя ключевые события!' : 'Trade with confidence using key events!'}
          
        </p>
      </div>

  
      <div className="econ-hero__slash-desktop">
        <img src={Vector} alt="" className="econ-hero__slash-img" />
      </div>
      <div className="econ-hero__slash-mobile" />

      <div className="econ-hero__right">
        <h3 className="econ-hero__right-title">
          {lang === 'ru' ? 'Экономический календарь – это не просто список событий!' 
          : 'The economic calendar is more than just a list of events!'}
        </h3>
        <p className="econ-hero__right-text">
          {lang === 'ru' ? 'Это инструмент, который помогает трейдерам прогнозировать поведение рынка. Мы обучим вас как правильно его использовать для максимальной выгоды.' 
            : 'This is a tool that helps traders predict market behavior. We will teach you how to use it correctly for maximum benefit.'}
        </p>
      </div>
    </section>
     <section className="econ-intro">
        <p className="econ-intro-text">
          {introText[lang]
            .split('FXBroker')
            .map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span className="highlight">FXBroker</span>
                )}
              </React.Fragment>
            ))
          }
        </p>
        <Link to="/register" className="econ-btn">
          {registerText[lang]}
        </Link>
      </section>


      <section className="econ-benefits">
        <h3 className="econ-benefits-title">
          {lang === 'ru'
            ? 'Что даёт вам экономический календарь?'
            : 'What does the economic calendar give you?' }
        </h3>
        <div className="econ-benefits-content">
          <ul className="econ-benefits-list">
            <li>
              {lang === 'ru'
                ? 'Прогноз и влияние: вы видите не просто дату события, но и его ожидаемое влияние на рынок.'
                : 'Forecast & impact: see not just the event date, but its expected impact on the market.'}
            </li>
            <li>
              {lang === 'ru'
                ? 'Фильтрация по странам и важности: настройте календарь под вашу стратегию.'
                : 'Filter by country & importance: tailor the calendar to your strategy.'}
            </li>
            <li>
              {lang === 'ru'
                ? 'Данные в реальном времени: обновления происходят автоматически — вы всегда в курсе положения дел.'
                : 'Real-time data: automatic updates keep you on top of everything.'}
            </li>
            <li>
              {lang === 'ru'
                ? 'Исторический анализ: сравнивайте фактические данные с прогнозами и предыдущими значениями.'
                : 'Historical analysis: compare actual figures with forecasts and previous values.'}
            </li>
          </ul>
          <div className="econ-benefits-image">
            <img src={EcoLand} alt="" />
          </div>
        </div>
      </section>
      <CalendarWidget />
      <section className="econ-features">
        <h3 className="econ-features-title">
          {lang === 'ru'
            ? 'Что делает его незаменимым:'
            : 'What makes it indispensable:'}
        </h3>
        <div className="econ-features-list">
          <div className="econ-feature-card">
            <h4>
              {lang === 'ru'
                ? 'Планирование входов и выходов из сделок.'
                : 'Planning entries and exits.'}
            </h4>
            <p>
              {lang === 'ru'
                ? 'Публикация данных по инфляции, уровню безработицы, решениям ЦБ позволяет заранее строить сценарии и учитывать их в торговой стратегии.'
                : 'Publishing data on inflation, unemployment, and central-bank decisions lets you build scenarios and factor them into your strategy.'}
            </p>
          </div>
          <div className="econ-feature-card">
            <h4>
              {lang === 'ru'
                ? 'Оценка рыночных ожиданий.'
                : 'Assessing market expectations.'}
            </h4>
            <p>
              {lang === 'ru'
                ? 'Сравнение фактических показателей с прогнозами помогает понять настроение рынка и принимать решения на основе объективных данных.'
                : 'Comparing actual figures with forecasts reveals market sentiment and informs objective decision-making.'}
            </p>
          </div>
          <div className="econ-feature-card">
            <h4>
              {lang === 'ru'
                ? 'Контроль за рисками.'
                : 'Risk management.'}
            </h4>
            <p>
              {lang === 'ru'
                ? 'В периоды высоких объёмов публикация важных новостей требует особого внимания к управлению рисками.'
                : 'During high-volume periods, key news releases demand heightened risk management.'}
            </p>
          </div>
        </div>
      </section>
      <FooterImage 
       backgroundSrc={EcoCalendar}
        textRu="Грамотная работа с экономическим календарём — это не прогнозирование будущего, а подготовка к любому варианту развития событий."
        textEn="Proper work with the economic calendar is not about predicting the future, but about preparing for any possible development of events."
        btnTextRu="Открыть счет"
        btnTextEn="Open an account"
        btnLink="/register"
      />
   </main>
   );
}