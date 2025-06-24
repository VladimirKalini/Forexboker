import React from 'react';
import './Market.css';
import { useLang } from '../../components/LangContext';

import StepCryptoHeader from '../../media/StepCryptoHeader.png';
import PromoAkciy from '../../media/PromoAkciy.png';

export default function CryptoValuta() {
  const { lang } = useLang();


  return (
    <>
    <section className="hero-block">
    <div className="hero-block__image-wrapper">
      <img src={StepCryptoHeader} alt="Blue abstract grid" />
    </div>

    <div className="hero-block__content">
      <h1 className="hero-block__title">
        {lang === 'ru' ? 'Биткоин, Эфириум и сотни других монет —' : 'Bitcoin, Ethereum, and hundreds of other coins —'}<br />
        {lang === 'ru' ? 'отслеживайте движение рынка и принимайте решения быстро' : 'track market movements and make decisions fast'}
        <span className="hero-block__title-accent"></span>
      </h1>
      <p className="hero-block__subtitle">
        {lang === 'ru' ? 'Актуальные курсы криптовалют в реальном времени' : 'Live cryptocurrency exchange rates in real time'}
      </p>
      <button className="hero-block__button">
        {lang === 'ru' ? 'Открыть счет' : 'Open an account'}
      </button>
    </div>
  </section>

  <section className="split-promo">
      <div className="split-promo__grid">
        <div className="split-promo__left">
          <div className="split-promo__logo">
            <span className="split-promo__logo-fx">FX</span>Broker
          </div>
          <h1 className="split-promo__title">
            {lang === 'ru' ? 'Криптовалюты — это больше, чем просто тренд.' : 'Cryptocurrencies — more than just a trend.'}
          </h1>
          <button className="split-promo__button">
            {lang === 'ru' ? 'Открыть счет' : 'Open an account'}
          </button>
        </div>

        <div className="split-promo__right">
          <div className="split-promo__text-content">
            <p>
              {lang === 'ru' 
                ? 'Это целая экосистема цифровых активов, построенная на основе блокчейн-технологий, которая предлагает уникальные возможности для тех, кто понимает её механику. На фоне нестабильности традиционных рынков и обесценивания фиатных валют крипта становится всё более привлекательной как инструмент не только спекуляции, но и сохранения капитала.'
                : 'This is a whole ecosystem of digital assets built on blockchain technology, offering unique opportunities for those who understand its mechanics. Against the backdrop of traditional market instability and the depreciation of fiat currencies, crypto is becoming increasingly attractive as a tool not only for speculation but also for capital preservation.'
              }
            </p>
            <p>
              {lang === 'ru'
                ? 'Рынок криптовалют высоковолатилен, непредсказуем, но именно в этом — его потенциал.'
                : 'The cryptocurrency market is highly volatile and unpredictable, but that is precisely where its potential lies.'
              }
            </p>
          </div>
          <div className="split-promo__image-wrapper">
            <img src={PromoAkciy} alt="Торговый терминал на мобильных устройствах" />
          </div>
        </div>
      </div>
    </section>
  </>
  );
};
