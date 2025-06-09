import React from 'react';
import './style-components.css';

const TradeFirmsBanner = () => (
  <section className="trade-firms-banner">
    <div className="trade-firms-banner__bg-text">
      {/* Дублируем контент для бесшовного эффекта */}
      <div className="marquee">
        <span>ФОРЕКС ТОРГОВЛЯ ФОРЕКС ТОРГОВЛЯ ФОРЕКС ТОРГОВЛЯ</span>
        <span>ФОРЕКС ТОРГОВЛЯ ФОРЕКС ТОРГОВЛЯ ФОРЕКС ТОРГОВЛЯ</span>
      </div>
    </div>

    <div className="trade-firms-banner__content">
      <h2 className="trade-firms-banner__title">
        Фирмы, которые осуществляют внешнеторговые операции
      </h2>
      <p className="trade-firms-banner__text">
        Компании, участвующие в международной торговле на форекс, делятся на 
        импортеров и экспортеров. Импортеры постоянно демонстрируют устойчивый 
        спрос на иностранную валюту, а экспортеры — наоборот, продают иностранную 
        валюту и размещают свободные средства в качестве краткосрочных депозитов.
      </p>
    </div>

    <button className="trade-firms-banner__btn">
      Открыть счёт
    </button>
  </section>
);

export default TradeFirmsBanner;