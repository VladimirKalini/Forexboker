import React from 'react';
import './style-components.css';
import VectorStrings from '../media/VectorStrings.png'; 

export default function MarketState() {
  return (
    <section className="market">
      {/* Фоновый текст */}
      <h1 className="market__bg">СОСТОЯНИЕ РЫНКА</h1>

      <div className="market__top">
        <div className="market__trend-box">
          <img src={VectorStrings} alt="" className="market__trend-img" />
          <span className="market__trend-text">
            Тренды и возможности для прибыльной торговли
          </span>
        </div>
        <p className="market__description">
          Знание состояния рынка — это ключ к успешной торговле. Мы учим
          определять тренды и управлять рисками, чтобы вы могли принимать
          стратегические решения в любой ситуации.
        </p>
        <div className="market__know">
          <img src={VectorStrings} alt="" className="market__know-img" />
          <span className="market__know-text">
            Знай, когда входить и когда ждать
          </span>
        </div>
      </div>

      {/* Синий баннер */}
      <div className="market__banner">
        <h2 className="market__banner-title">
          Настройтесь на рынок, а не против него
        </h2>
        <p className="market__banner-desc">
          Знание текущей фазы рынка — флет, тренд, коррекция — помогает вам
          подстраивать стратегию и не торговать вслепую. Мы подскажем, куда он
          движется.
        </p>
        <button className="market__banner-btn">Зарегистрироваться</button>
      </div>
    </section>
  );
}
