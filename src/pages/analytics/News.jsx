import React, { useState, useEffect } from 'react';
import './StyleAnalytics.css';
import { useLang } from '../../components/LangContext';
import { Helmet } from 'react-helmet-async';

import Register from '../../components/Register.jsx';
import NewsWidget from '../../components/Widget/NewsWidget.jsx';
import Cube from '../../media/Cube.png';
import serverImage from '../../media/Server.png';
import Vector from '../../media/Vector.png';

const cards = [
  {
    key: 'first',
    title: {
      ru: 'Следите за важным — реагируйте первыми',
      en: 'Follow what matters—React first',
    },
    text: {
      ru: 'Финансовые рынки мгновенно реагируют на мировые события. С FXBroker вы получаете свежие экономические и политические новости в режиме реального времени, чтобы оперативно корректировать свою стратегию.',
      en: 'Financial markets react instantly to world events. With FXBroker, you get fresh economic and political news in real time so you can adjust your strategy on the fly.',
    },
    bg: {
      ru: 'Но',
      en: 'N',
    },
  },
  {
    key: 'second',
    title: {
      ru: 'Новости, которые влияют на рынки!',
      en: 'News That Moves Markets!',
    },
    text: {
      ru: 'Каждая новость может кардинально изменить направление рынка. Мы предоставляем актуальные новости, чтобы вы всегда могли принимать обоснованные торговые решения.',
      en: 'Every news item can dramatically change market direction. We deliver timely news so you can always make informed trading decisions.',
    },
    bg: {
      ru: 'во',
      en: 'E',
    },
  },
  {
    key: 'third',
    title: {
      ru: 'Решения на основе фактов, а не эмоций',
      en: 'Decisions based on facts, not emotions',
    },
    text: {
      ru: 'Своевременная информация — ваш главный инструмент. Мы помогаем вам не угадывать, а действовать на основе объективных рыночных сигналов.',
      en: 'Timely information is your main tool. We help you not to guess, but to act on the basis of objective market signals.',
    },
    bg: {
      ru: 'ст',
      en: 'W',
    },
  },
  {
    key: 'fourth',
    title: {
      ru: 'Новости, которые становятся точками входа',
      en: 'News that become entry points',
    },
    text: {
      ru: 'Каждое движение рынка начинается с информации. Следите за новостями вместе с FXBroker — и превращайте глобальные события в новые торговые возможности.',
      en: 'Every market movement starts with information. Follow the news with FXBroker and turn global events into new trading opportunities.',
    },
    bg: {
      ru: 'и',
      en: 'S',
    },
  },
];

const texts = {
  logo: 'FXBroker',
  title: {
    ru: 'Будьте в курсе —\nпринимайте решения как профи',
    en: 'Stay Informed—\nMake Decisions Like a Pro',
  },
  subtitle: {
    ru: 'В мире трейдинга побеждают те, кто первым реагирует на изменения. Здесь, на странице «Новости» FXBroker, вы найдёте самые свежие и значимые события в мире финансов, экономики, криптовалют и геополитики — всё, что может повлиять на рынок и ваши сделки.',
    en: 'In trading, those who react first win. On the FXBroker “News” page you’ll find the freshest and most impactful events in finance, economy, crypto and geopolitics—everything that can move markets and your trades.',
  },
  button: {
    ru: 'Зарегистрироваться',
    en: 'Register',
  },
};

export default function News() {
  const { lang } = useLang();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => {
      setActiveIndex(i => (i + 1) % cards.length);
    }, 4000);
    return () => clearInterval(iv);
  }, []);

  return (
    <>
    <Helmet>
    <title>Последние новости рынков, влияющие на трейдинг | FXBroker</title>
    <meta name="description" content="Будьте в курсе последних событий! Мы публикуем только те новости, которые действительно влияют на финансовые рынки. Торгуйте на основе актуальной информации." />
</Helmet>
    <main>
      <section className="cards-block">
        <h2 className="cards-block__heading">
          {lang === 'ru' ? 'Будьте в курсе' : 'Stay Informed'}
        </h2>
        <div className="cards-block__list">
          {cards.map(({ key, title, text, bg }, i) => (
            <div
              key={key}
              className={`card ${activeIndex === i ? 'active' : ''}`}
              onMouseEnter={() => setActiveIndex(i)}
            >
              <div className="card__bg">{bg[lang]}</div>
              <div className="card__content">
                <h3>{title[lang]}</h3>
                <p>{text[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__logo">{texts.logo}</h1>
          
          <h2 className="hero__title">
            {texts.title[lang].split('\n').map((line, i) => (
              <span key={i} className="hero__title-line">
                {line}
              </span>
            ))}
          </h2>
          <p className="hero__subtitle">{texts.subtitle[lang]}</p>
          <Register />
        </div>
        <div className="hero__image">
          <img src={Cube} alt="FXBroker illustration" />
        </div>
      </section>
      <NewsWidget />
       <section className="follow-news-section">
      <div className="follow-news-left">
        <h2 className="follow-news-title">
            {lang === 'ru' ? 'Зачем следить за новостями с нами?' 
            : 'Why follow the news with us?'}
        </h2>
      </div>

     
      <div className="follow-news-bar-desktop">
        <img src={Vector} alt="" className="follow-news-bar-img" />
      </div>
  
      <div className="follow-news-bar-mobile" />

      <div className="follow-news-right">
        <p className="follow-news-item">
            {lang === 'ru' ? 'Скорость: мы публикуем информацию в момент ее появления.' 
            : 'Speed: We publish information as soon as it becomes available.'}
        </p>
        <p className="follow-news-item">
            {lang === 'ru' ? 'Фокус на трейдера: отбираем только то, что влияет на рынок и может изменить ваше торговое решение.'
             : 'Focus on the trader: we select only what influences the market and can change your trading decision.'}
        </p>
        <p className="follow-news-item">
            {lang === 'ru' ? 'Простота восприятия: структурированные сводки и четкие формулировки без лишней воды.' 
            : 'Easy to understand: structured summaries and clear wording without unnecessary fluff.'}
        </p>
        <p className="follow-news-item">
            {lang === 'ru' ? 'Поддержка стратегии: новости не только информируют, но и дают направление — к покупке или продаже, с осторожностью или решительностью.' 
          : 'Strategy support: news not only informs, but also gives direction - to buy or sell, with caution or decisiveness.'}
          
        </p>
      </div>
    </section>

<section className="broker-about-section">
  <div className="broker-about-left">
    <h3 className="broker-about-logo">FXBroker</h3>
    <p className="broker-about-subtitle">
        {lang === 'ru' ? 'Забудьте о хаотичном поиске информации в десятках источников. Сосредоточьтесь на торговле — мы возьмём на себя новости.'
         : 'Forget about chaotic information search in dozens of sources. Focus on trading - we will take care of the news.'}
    </p>
    <p className="broker-about-text">
        {lang === 'ru' ? 'Мы работаем только с проверенными источниками — центральные банки, официальные отчёты, комментарии экспертов и аналитиков.' 
        : 'We work only with trusted sources - central banks, official reports, comments from experts and analysts.'}
      
    </p>
    <p className="broker-about-text">
        {lang === 'ru' ? 'Редакция «FXBroker» готовит сводки в формате «кратко и по делу», чтобы вы успевали реагировать на рынке.'
         : 'The FXBroker editorial team prepares summaries in a “brief and to the point” format so that you can react to the market.'}
    </p>
    <p className="broker-about-text">
        {lang === 'ru' ? 'Вы торгуете на фактах — мы предоставляем только их.' 
        : 'You trade on facts - we provide only them.'}
    </p>
  </div>
  <div className="broker-about-right">
    <img
      src={serverImage}
      alt="Server racks"
      className="broker-about-image"
    />
  </div>
</section>

      </main>
    </>
  );
}