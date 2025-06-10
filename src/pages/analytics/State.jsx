import './StyleAnalytics.css';
import HeaderAnalytics from '../../components/HeaderAnalytics.jsx'
import FooterImage from '../../components/FooterImage.jsx'
import StateWidget from '../../components/Widget/StateWidget.jsx'
import MarketState from '../../components/MarketState.jsx'
import { useLang } from '../../components/LangContext';
import BlueBlock from '../../components/BlueBlock.jsx'
import redlabel from '../../media/red_label.png'
import PhoneState from '../../media/PhoneState.png'
import FooterStateImage from '../../media/FooterStateImage.png'
import { Link } from 'react-router-dom';


export default function State() {
  const { lang } = useLang();

  return (
   <main>
    <MarketState />
     <section className="fxbroker">
      <h1 className="fxbroker__main-title">
        <span className="fx-text">FX</span>Broker
      </h1>
      <p className="fxbroker__subtitle">
        {lang === 'ru' ? 'Состояние рынка: действуйте в такт с движением капитала' : 'Market State: Move in Time with Capital Movements'}
      </p>

      <div className="fxbroker__cards">
        <div className="fxbroker__card">
          <h2 className="fxbroker__card-title">
            {lang === 'ru' ? 'Почему это критически важно:' : 'Why this is critically important:'}
            </h2>
          <ul className="fxbroker__list">
            <li className="fxbroker__list-item">
              <img src={redlabel} alt="" className="fxbroker__marker" />
              {lang === 'ru' ? 'Вы не входите в позицию наугад — вы понимаете, в какой фазе сейчас рынок, и какие действия она предполагает.' : 'You dont enter a position at random - you understand what phase the market is in and what actions it involves.'}
            </li>
            <li className="fxbroker__list-item">
              <img src={redlabel} alt="" className="fxbroker__marker" />
              {lang === 'ru' ? 'Вы корректируете стратегию в реальном времени — флет требует одного подхода, сильный тренд — совершенно другого.' : 'You adjust your strategy in real time - a flat requires one approach, a strong trend - a completely different one.'}
            </li>
            <li className="fxbroker__list-item">
              <img src={redlabel} alt="" className="fxbroker__marker" />
              {lang === 'ru' ? 'Вы снижаете риски и избегаете ловушек — нет торговли против потока, нет эмоций, есть план.' : 'You reduce risks and avoid pitfalls - no trading against the flow, no emotions, just a plan.'}
            </li>
          </ul>
        </div>

        <div className="fxbroker__card">
          <h2 className="fxbroker__card-title">
            {lang === 'ru' ? 'Что вы получите:' : 'What you will get:'}
            </h2>
          <ul className="fxbroker__list">
            <li className="fxbroker__list-item">
              <img src={redlabel} alt="" className="fxbroker__marker" />
              {lang === 'ru' ? 'Актуальный анализ рыночной структуры: валюты, криптовалюты, индексы.' : 'Current analysis of market structure: currencies, cryptocurrencies, indices.'}
            </li>
            <li className="fxbroker__list-item">
              <img src={redlabel} alt="" className="fxbroker__marker" />
              {lang === 'ru' ? 'Объяснение текущих условий: тренд, боковик, разворот, ускорение — в терминах, которые имеют практический смысл.' : 'Explaining current conditions: trend, sideways, reversal, acceleration - in terms that make practical sense.'}
            </li>
            <li className="fxbroker__list-item">
              <img src={redlabel} alt="" className="fxbroker__marker" />
              {lang === 'ru' ? 'Сигналы поведения: стоит ли входить, ждать, усиливать позицию или фиксировать прибыль.' : 'Behavioural signals: whether to enter, wait, strengthen the position or take profit.'}
            </li>
            <li className="fxbroker__list-item">
              <img src={redlabel} alt="" className="fxbroker__marker" />
              {lang === 'ru' ? 'Готовую тактическую подсказку, адаптированную под реальную ситуацию.' : 'A ready-made tactical tip adapted to the real situation.'}
            </li>
          </ul>
          <Link to='/register' className="fxbroker__button">
            {lang === 'ru' ? 'Открыть счёт' : 'Open an account'}
            </Link>
        </div>
      </div>
    </section>
    <StateWidget />
    <section className="clarity">
      <h2 className="clarity__title">
        {lang === 'ru' ? 'Торгуйте с пониманием — а не в темноте' : 'Trade with understanding - not in the dark'}
      </h2>
      <p className="clarity__subtitle">
        {lang === 'ru' ? 'Пока другие гадают, вы уже знаете:' : 'While others are guessing, you already know:'}
      </p>

      <div className="clarity__visual">
        <img
          src={PhoneState}
          alt="Скриншот торгового приложения"
          className="clarity__image"
        />

        <div className="clarity__anno clarity__anno--1">
          {lang === 'ru' ? ' 1. Когда действовать' : ' 1. When to act'}
        </div>
        <div className="clarity__anno clarity__anno--2">
          {lang === 'ru' ? '2. Когда ждать' : '2. When to wait'}
        </div>
        <div className="clarity__anno clarity__anno--3">
          {lang === 'ru' ? '3. Когда отойти от монитора и сохранить капитал' : '3. When to step away from the monitor and preserve capital'}
        </div>
      </div>
    </section>
    <BlueBlock
    overrideTexts={{
      title: {
        ru: 'Мы научим вас:',
        en: "We'll teach you: "
      },
      description: {
        ru: '1. Распознавать ключевые переходные моменты, до того как они станут очевидны большинству;',
        en: '1. Recognize key transition points before they become obvious to most;'
      },
      description2: {
        ru: '2. Управлять капиталом в соответствии с фазой рынка, а не по шаблону;',
        en: '2. Manage capital according to the phase of the market, not according to a pattern;'
      },
      description3: {
        ru: '3. Адаптировать тактику к изменяющимся условиям — как делают это профессиональные участники.',
        en: '3. adapt tactics to changing conditions - as professional participants do.'
      },
      bgText: {
        ru: 'FXBroker FXBroker FXBroker FXBroker',
        en: 'FXBroker FXBroker FXBroker FXBroker'
      }
    }}
    />
    <FooterImage 
           backgroundSrc={FooterStateImage}
            textRu="Зарегистрируйтесь сейчас — и начните торговать на стороне рынка, а не против него."
            textEn="Register now and start trading with the market, not against it."
            btnTextRu="Открыть счет"
            btnTextEn="Open an account"
            btnLink="/register"
          />
   </main>
   );
}