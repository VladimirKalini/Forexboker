import React from 'react';
// import { Link } from 'react-router-dom';
import './Education.css';
import AnalyzBlock from '../../components/AnalyzBlock';
import BlueBlock from '../../components/BlueBlock';
import { useLang } from '../../components/LangContext';
import MethodAnalyzBlock from '../../components/MethodAnalyzBlock';

export default function Analyz() {
  const { lang } = useLang();
  const blocks = [
    {
      ru: 'Технический анализ начинается с графика цены и неразрывно с ним связан.',
      en: 'Technical analysis begins with the price chart and is inextricably linked to it.'
    },
    {
      ru: 'Даже новичку прежде всего приходит в голову начать пристально вглядываться в торговую платформу в поисках закономерностей. Как ни странно, они там действительно есть. График – это своего рода язык, сродни тому, на котором общаются математики. Профессор любой страны без труда разберётся в изображениях парабол и универсально записанных формулах.',
      en: 'Even a beginner first thinks to stare intently at the trading platform in search of patterns. Strangely enough, they really are there. The chart is a kind of language, akin to the one mathematicians use. A professor from any country can easily decipher parabolic shapes and universally defined formulas.'
    },
    {
      ru: 'Тоже самое с трейдерами и аналитиками всего мира. Они разработали свой язык, благодаря которому «считывают» торговые сигналы и совершают сделки в зависимости от своей торговой стратегии. Это и есть технический анализ.',
      en: 'The same goes for traders and analysts around the world. They developed their own language to “read” trading signals and execute orders according to their trading strategy. That is technical analysis.'
    }
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
    </>
  );
}
