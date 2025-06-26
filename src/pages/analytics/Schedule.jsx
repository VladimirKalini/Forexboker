import './StyleAnalytics.css';
import { useLang } from '../../components/LangContext';
import BannerPattern from '../../media/BannerPattern.png';
import ScheduleWidget from '../../components/Widget/ScheduleWidget';
import ChartGuide from '../../components/ChartGuide';
import { Link } from 'react-router-dom';
import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';

const MemoizedScheduleWidget = memo(ScheduleWidget);

export default function Schedule() {
  const { lang } = useLang();

  const cards = lang === 'en'
    ? [
        {
          title: 'Relevance Every Second',
          text:  'You see price movement in real-time, without delays — exactly as market participants do.'
        },
        {
          title: 'Contextual Analysis',
          text:  'Visual representation helps you quickly grasp trend structure, key levels, patterns, and volume.'
        },
        {
          title: 'React When It Matters',
          text:  "Real opportunities don't wait — they appear and disappear right on the chart. The ability to see them in time is your path to success."
        }
      ]
    : [
        {
          title: 'Актуальность в каждую секунду',
          text:  'Вы видите движение цены в моменте, без задержек — как видят его участники рынка.'
        },
        {
          title: 'Анализ с контекстом',
          text:  'Визуальное представление помогает быстрее понять структуру тренда, ключевые уровни, паттерны и объём.'
        },
        {
          title: 'Реакция, когда это важно',
          text:  'Настоящие возможности не ждут — они возникают и исчезают прямо на графике. Умение видеть их своевременно — ваш путь к результату.'
        }
      ];

  return (
    <>
    <Helmet>
    <title>Интерактивные графики для технического анализа | FXBroker</title>
    <meta name="description" content="Проводите глубокий технический анализ с помощью наших профессиональных графиков. Находите паттерны, определяйте тренды и стройте свою торговую стратегию." />
</Helmet>
    
    <main>
      <section className="rtc">
        <div className="rtc__header">
          <h2 className="rtc__title">
            {lang === 'en'
              ? 'Real-time Chart — The Heart of Your Trading Strategy'
              : 'График в реальном времени — сердце вашей торговой стратегии'}
            <span className="rtc__dot" />
          </h2>
        </div>
        <div
          className="rtc__banner"
          style={{ backgroundImage: `url(${BannerPattern})` }}
        >
          <div className="rtc__banner-content">
            <h3 className="rtc__banner-title">
              {lang === 'en'
                ? 'The market speaks to you through price.'
                : 'Рынок говорит с вами через цену.'}
            </h3>
            <p className="rtc__banner-text">
              {lang === 'en'
                ? 'A live chart is the language in which the market transmits signals. Every impulse, every candle, every level is information you can turn into an entry point or an exit signal.'
                : 'Живой график — это язык, на котором рынок передаёт сигналы. Каждый импульс, каждая свеча, каждый уровень — это информация, которую вы можете превратить в точку входа или сигнал к выходу.'}
            </p>
          </div>
          <Link to="/register" className="rtc__banner-btn">
            {lang === 'en' ? 'Register' : 'Зарегистрироваться'}
          </Link>
        </div>
      </section>
      <ChartGuide />
      <ScheduleWidget />
      
      <section className="chart-features">
        <div className="chart-features__container">
          <h2 className="chart-features__title">
            {lang === 'en'
              ? "Why a Chart Is Not Just an Image, but a Trader's Working Tool"
              : 'Почему график — не просто картинка, а рабочий инструмент трейдера'}
            <span className="chart-features__dot" />
          </h2>

          <div className="chart-features__grid">
            {cards.map((card, i) => (
              <div className="chart-features__card" key={i}>
                <h3 className="chart-features__card-title">{card.title}</h3>
                <p className="chart-features__card-text">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
