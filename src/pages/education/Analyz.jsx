import React from 'react';
// import { Link } from 'react-router-dom';
import './Education.css';
import AnalyzBlock from '../../components/AnalyzBlock';
import BlueBlock from '../../components/BlueBlock';
import { useLang } from '../../components/LangContext';
import MethodAnalyzBlock from '../../components/MethodAnalyzBlock';
import LineGraph from '../../media/LineGraph.png';
import CandlesticksGraph from '../../media/CandlesticksGraph.png';
import BarGraph from '../../media/BarGraph.png';
import KeyBlock from '../../components/KeyBlock';

export default function Analyz() {
  const { lang } = useLang();
  const blocks = [
    {
      ru: 'Технический анализ начинается с графика цены и неразрывно с ним связан.',
      en: 'Technical analysis begins with the price chart and is inextricably linked to it.',
    },
    {
      ru: 'Даже новичку прежде всего приходит в голову начать пристально вглядываться в торговую платформу в поисках закономерностей. Как ни странно, они там действительно есть. График – это своего рода язык, сродни тому, на котором общаются математики. Профессор любой страны без труда разберётся в изображениях парабол и универсально записанных формулах.',
      en: 'Even a beginner first thinks to stare intently at the trading platform in search of patterns. Strangely enough, they really are there. The chart is a kind of language, akin to the one mathematicians use. A professor from any country can easily decipher parabolic shapes and universally defined formulas.',
    },
    {
      ru: 'Тоже самое с трейдерами и аналитиками всего мира. Они разработали свой язык, благодаря которому «считывают» торговые сигналы и совершают сделки в зависимости от своей торговой стратегии. Это и есть технический анализ.',
      en: 'The same goes for traders and analysts around the world. They developed their own language to “read” trading signals and execute orders according to their trading strategy. That is technical analysis.',
    }
  ];
  const chartTypes = [
    { ru: 'Линейный график',      en: 'Line chart', img: LineGraph },
    { ru: 'Свечной график',       en: 'Candlestick chart', img: CandlesticksGraph },
    { ru: 'Бары',                 en: 'Bars', img: BarGraph },
  ];
  return (
    <>
    <BlueBlock 
    overrideTexts={{
        title: {
          ru: 'Определение',
          en: "Determination"
        },
        description: {
          ru: 'Теханализ – это попытка просчитать рынок. Он основан на том, чтобы математически обработать предшествующие значения цены и на их основе составить прогноз относительно будущего движения.',
          en: 'Technical analysis is an attempt to calculate the market. It is based on mathematically processing the previous price values and using them to make a forecast of the future movement.'
        },
        description2: {
          ru: 'Помогают в этом трейдерам формулы, алгоритмы, индикаторы и уровни – в общем, объекты, которые так или иначе интерпретируют график котировок. Так он превращается из хаотичного набора цен – в логически выстроенную структуру. В центре которой до сих пор – человек и его психология.',
          en: 'Formulas, algorithms, indicators and levels - in general, objects that interpret a quote chart in one way or another - help traders in this. This is how it turns from a chaotic set of prices into a logically built structure. The center of which is still a human being and his psychology.'
        },
        description3: {
          ru: '',
          en: ''
        },
        bgText: {
          ru: 'FXBroker FXBroker FXBroker FXBroker',
          en: 'FXBroker FXBroker FXBroker FXBroker'
        },
        button : {
            ru: 'Зарегестрироваться',
            en: 'Register'
        }
      }}
    />
    <section className="analysis-blocks">
        {blocks.map((block, i) => (
          <div
            className="analysis-block"
            key={i}
            style={{ '--delay': `${i * 0.2}s` }}
          >
            <p>{block[lang]}</p>
          </div>
        ))}
      </section>
    <MethodAnalyzBlock />
    <section className="chart-types">
      <div className="chart-types__header">
        <h2 className="chart-types__title">
          <span className="chart-types__marker_dot">■</span>
          {lang === 'ru' ? ' Виды графиков' : ' Chart Types'}
        </h2>
        <p className="chart-types__desc">
          {lang === 'ru'
            ? 'Цены инструментов на рынке Форекс изменяются каждую секунду. Как только новая котировка поступает в торговую платформу, она ложится в основу графика. По нему удобнее наблюдать за изменениями и анализировать их.'
            : 'Prices of instruments on the Forex market change every second. As soon as a new quote arrives in the trading platform, it forms the basis of the chart. It is more convenient to observe changes and analyze them.'}
        </p>
      </div>
      <ul className="chart-types__list">
        {chartTypes.map((item, idx) => (
          <li key={idx} className="chart-types__item">
            <span className="chart-types__marker" />
            <span className="chart-types__label">{item[lang]}</span>
            <img
              src={item.img}
              alt={item[lang]}
              className="chart-types__image"
            />
          </li>
        ))}
      </ul>
    </section>
    
    </>
  );
}
