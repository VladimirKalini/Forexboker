// TradeFirmsBanner.jsx
import React from 'react';
import { useLang } from './LangContext';
import { Link } from 'react-router-dom';
import './style-components.css';

const defaultTexts = {
  title: {
    ru: 'Фирмы, которые осуществляют внешнеторговые операции',
    en: 'Firms Conducting Foreign Trade Operations'
  },
  description: {
    ru: 'Компании, участвующие в международной торговле на форекс, делятся на импортеров и экспортеров. Импортеры постоянно демонстрируют устойчивый спрос на иностранную валюту, а экспортеры — наоборот, продают валюту и размещают свободные средства в краткосрочных депозитах.',
    en: 'Companies participating in international Forex trading split into importers and exporters. Importers consistently show stable demand for foreign currency, while exporters do the opposite – selling currency and placing free funds into short-term deposits.'
  },
  description2: {
    ru: '',
    en: ''
  },
  description3: {
    ru: '',
    en: ''
  },
  button: {
    ru: 'Открыть счёт',
    en: 'Open an Account'
  },
  bgText: {
    ru: 'FXBroker FXBroker FXBroker FXBroker',
    en: 'FXBroker FXBroker FXBroker FXBroker'
  }
};

export default function TradeFirmsBanner({ overrideTexts = {} }) {
  const { lang } = useLang();

  // Сливаем дефолтные тексты и любые переопределения
  const texts = {
    title:   { ...defaultTexts.title,   ...(overrideTexts.title   || {}) },
    description: { ...defaultTexts.description, ...(overrideTexts.description || {}) },
    description2:{ ...defaultTexts.description2, ...(overrideTexts.description2||{}) },
    description3:{ ...defaultTexts.description3, ...(overrideTexts.description3||{}) },
    button:  { ...defaultTexts.button,  ...(overrideTexts.button  || {}) },
    bgText:  { ...defaultTexts.bgText,  ...(overrideTexts.bgText  || {}) },
  };

  return (
    <section className="trade-firms-banner">
      <div className="trade-firms-banner__bg-text">
        <div className="marquee">
          <span>{texts.bgText[lang]}</span>
          <span>{texts.bgText[lang]}</span>
        </div>
      </div>

      <div className="trade-firms-banner__content">
        <h2 className="trade-firms-banner__title">
          {texts.title[lang]}
        </h2>
        <p className="trade-firms-banner__text">
          {texts.description[lang]}
        </p>
        <p className="trade-firms-banner__text">
          {texts.description2[lang]}
        </p>
        <p className="trade-firms-banner__text">
          {texts.description3[lang]}
        </p>
      </div>

      <Link to="/register" className="trade-firms-banner__btn">
        {texts.button[lang]}
      </Link>
    </section>
  );
}
