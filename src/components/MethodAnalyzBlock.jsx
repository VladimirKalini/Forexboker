import React from 'react'; 
import { useLang } from './LangContext';
import './style-components.css';

const methodsData = [
  {
    title: {
      ru: 'Графический – Прайс экшен',
      en: 'Graphic — Price Action'
    },
    text: {
      ru: 'Вы смотрите на график и пытаетесь обнаружить на нём фигуры, в которые складываются японские свечи. Одна из этих фигур сигнализирует о развороте цены, а другая – о продолжении тренда. Есть ещё фигуры неопределённости, когда свечи не знают, в какую сторону пойти дальше.',
      en: 'You look at the chart and try to spot formations made by Japanese candlesticks. One formation signals a reversal, another a continuation. There are also patterns of indecision, when the candles aren’t sure which way to go next.'
    },
    overlayText: {
      ru: 'Подробнее о Прайс экшен',
      en: 'Learn more about Price Action'
    }
  },
  {
    title: {
      ru: 'Индикаторный — математический',
      en: 'Indicator—Mathematical'
    },
    text: {
      ru: 'Вы выбираете на платформе технические индикаторы — разные линии, которые по формулам рассчитывают изменение цены по данным предыдущих котировок. Они помогают визуально определить лучшие моменты для входа и выхода из сделок.',
      en: 'You select technical indicators on the platform — various lines calculated by formulas using past price data. They help visually identify optimal entry and exit points.'
    },
    overlayText: {
      ru: 'Подробнее об индикаторах',
      en: 'Learn more about Indicators'
    }
  },
  {
    title: {
      ru: 'Свечной анализ',
      en: 'Candlestick Analysis'
    },
    text: {
      ru: 'Вы анализируете сами японские свечи: их открытия, закрытия, длину и расположение рядом стоящих свечей. Это детализированная версия графического анализа.',
      en: 'You analyze the candlesticks themselves: their opens, closes, wicks, and neighboring candles. It’s a detailed version of graphic analysis.'
    },
    overlayText: {
      ru: 'Подробнее о свечном анализе',
      en: 'Learn more about Candlestick Analysis'
    }
  },
  {
    title: {
      ru: 'Анализ объёмов',
      en: 'Volume Analysis'
    },
    text: {
      ru: 'Больше сделок на том же тикере — больше объём операций и интерес трейдеров. Этот фактор показывает силу или слабость тренда. Самый простой индикатор — On-Balance Volume (OBV).',
      en: 'More trades on the same ticker mean higher volume and trader interest. This shows trend strength or weakness. The simplest indicator is On-Balance Volume (OBV).'
    },
    overlayText: {
      ru: 'Подробнее об анализе объёмов',
      en: 'Learn more about Volume Analysis'
    }
  }
];

export default function TechAnalysisMethods() {
  const { lang } = useLang();

  return (
    <section className="analysis-methods">
      <div className="analysis-methods__heading-container">
        <h2 className="analysis-methods__heading">
          {lang === 'ru' 
            ? 'Основные методы' 
            : 'Key Methods of'}
          <span className="analysis-methods__heading--sub">
            {lang === 'ru' ? 'Технического анализа' : 'Technical Analysis'}
          </span>
        </h2>
      </div>

      <div className="analysis-methods__grid">
        {methodsData.map((m, i) => (
          <div key={i} className="analysis-methods__item">
            <div className="analysis-methods__overlay">
              <span className="analysis-methods__overlay-text">
                {m.overlayText[lang]}
              </span>
            </div>
            <h3 className="analysis-methods__title">{m.title[lang]}</h3>
            <p className="analysis-methods__text">{m.text[lang]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
