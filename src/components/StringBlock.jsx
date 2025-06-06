import React from 'react';
import './style-components.css';
import { Link } from 'react-router-dom';
import { useLang } from './LangContext';

const State = () => {
  const { lang } = useLang();
  const steps = lang === 'ru'
    ? [
        'Без вмешательства дилинга',
        'Минимальная задержка поступления котировок',
        'Конкурентные спреды, без скрытых комиссий'
      ]
    : [
        'No dealing intervention',
        'Minimal quote latency',
        'Competitive spreads, no hidden commissions'
      ];

  return (
    <div className="fxbroker-section">
      <div className="fxbroker-header">
        <span className="fx-logo-fx">FX</span>
        <span className="fx-logo-broker">Broker</span>
        <span className="fx-logo-dot">.</span>
      </div>

      <div className="flow-hero-section">
        <div className="flow-hero-content">
          <h1 className="flow-hero-title">
            {lang === 'ru'
              ? 'Почему FXBroker — прекрасный выбор?'
              : 'Why is FXBroker a great choice?'}
          </h1>
          <p className="flow-hero-text">
            {lang === 'ru'
              ? 'Компания FXBroker рада предложить своим клиентам прозрачное и качественное исполнение, а также одни из лучших торговых условий.'
              : 'FXBroker is pleased to offer its clients transparent and high-quality execution, as well as some of the best trading conditions.'}
          </p>
        </div>
        <Link to="/register" className="flow-hero-button">
          {lang === 'ru' ? 'Зарегистрироваться' : 'Register'}
        </Link>
      </div>

      <div className="flow-container">
        <div className="arrow arrow-left">
          {lang === 'ru'
            ? 'Предоставление лучших цен Бид и Аск, благодаря глубокой ликвидности'
            : 'Providing the best Bid and Ask prices thanks to deep liquidity'}
        </div>
        {steps.map((label, idx) => (
          <div
            key={idx}
            className="flow-step"
            style={{ animationDelay: `${0.6 + idx * 0.3}s` }}
          >
            {label}
          </div>
        ))}
        <div className="arrow arrow-right">
          {lang === 'ru'
            ? 'Ультра-быстрое исполнение ордеров менее чем за <14ms'
            : 'Ultra-fast order execution in less than 14ms'}
        </div>
      </div>
    </div>
  );
};

export default State;