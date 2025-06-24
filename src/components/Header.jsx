import React, { useState, useContext } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { useLang } from './LangContext';
import { LoadingContext } from './LoaderContext';

import ruFlag from '../media/ru.png';
import enFlag from '../media/eng.png';
import Arrow from '../media/arrow.png';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState({
    trade: false,
    edu: false,
    inst: false,
    about: false,
  });

  const { lang, toggleLang } = useLang();
  const { setLoading } = useContext(LoadingContext);
  const isRu = lang === 'ru';

  const flags = {
    ru: ruFlag,
    en: enFlag,
  };


  const toggleSubmenu = key => {
    setOpenSubmenu(prev => ({ ...prev, [key]: !prev[key] }));
  };


  const menuConfig = [
  {
    key: 'trade',
    title: { ru: 'Торговля', en: 'Trade' },
    links: [
      ['/News', { ru: 'Новости',              en: 'News' }],
      ['/EconomicCalendar', { ru: 'Экономический календарь', en: 'Economic Calendar' }],
      ['/Forecasts', { ru: 'Прогноз Рынка',     en: 'Market Forecasts' }],
      ['/State', { ru: 'Состояние рынка',     en: 'Market Status' }],
      ['/Schedule', { ru: 'График',            en: 'Chart' }],
    ],
  },
  {
    key: 'edu',
    title: { ru: 'Обучение', en: 'Education' },
    links: [
      ['/Forex',        { ru: 'Что такое Форекс',         en: 'What Is Forex' }],
      ['/Analyz',       { ru: 'Технический анализ',       en: 'Technical Analysis' }],
      ['/FundAnalyz',  { ru: 'Фундаментальный анализ',   en: 'Fundamental Analysis' }],
      ['/Mistake',      { ru: '10 ошибок новичка',        en: '10 Newbie Mistakes' }],
      ['/GolosariyEdu',    { ru: 'Глоссарий трейдеров',      en: 'Traders Glossary' }],
      ['/Psyhology',    { ru: 'Психология трейдера',      en: 'Trader Psychology' }],
      ['/education/libary.html',       { ru: 'Библиотека',               en: 'Library' }],
      ['/EducationEdu',    { ru: 'Обучение',                 en: 'Education' }],
    ],
  },
  {
    key: 'inst',
    title: { ru: 'Рынки и инструменты', en: 'Markets & Tools' },
    links: [
      ['/Calculator',      { ru: 'Калькулятор',       en: 'Calculator' }],
      ['/Valuta',          { ru: 'Валюты',            en: 'Currencies' }],
      ['/Akciy',           { ru: 'Акции',             en: 'Stocks' }],
      ['/EnergyMetal',          { ru: 'Энергоресурсы/Металлы', en: 'Energy/Metals' }],
      ['Index',          { ru: 'Индексы',           en: 'Indices' }],
      ['/Pokazately',          { ru: 'Показатели Рынка',  en: 'Market Metrics' }],
      ['/CryptoValuta',          { ru: 'Крипта',            en: 'Crypto' }],
    ],
  },
  {
    key: 'about',
    title: { ru: 'О компании', en: 'About Us' },
    links: [
      ['/about/about.html',            { ru: 'О компании',            en: 'About Us' }],
      ['/about/contact.html',          { ru: 'Контакты',              en: 'Contacts' }],
      ['/about/career.html',           { ru: 'Карьера',               en: 'Careers' }],
      ['/media/License.pdf',           { ru: 'Лицензия',              en: 'License' }],
      ['/media/Политика конфиденциальности.pdf', { ru: 'Политика конфиденциальности', en: 'Privacy Policy' }],
      ['/media/Клиентское соглашение.pdf',        { ru: 'Клиентское соглашение',         en: 'User Agreement' }],
    ],
  },
];


  return (
    <header className="header">
      <div className="header-inner">

        <div> 
        <Link to="/" className="logo_header">
            <span className="logo__highlight">FX</span>Broker
        </Link>
          <button
    className="lang-btn-desktop"
    onClick={() => {
      setLoading(true);
      setTimeout(() => {
        toggleLang();
        setLoading(false);
      }, 500);
    }}
  >
            <img src={flags[lang]} alt="" className="lang-icon"/>
            {lang.toUpperCase()}
          </button>
        </div>
        

        <div className="mobile-controls">
          <button className="burger" onClick={() => setMobileOpen(o => !o)}>
            ☰
          </button>
        </div>

        <nav className="desktop-menu">
          {menuConfig.map(({ key, title, links }) => (
            <div key={key} className="dropdown">
              <button className="dropdown-toggle">
                {title[lang]}
                <img src={Arrow} alt="▼" className="arrow-img" />
              </button>
              <ul className="dropdown-menu">
                {links.map(([href, label]) => (
                  <li key={href}>
                    <Link to={href}>{label[lang]}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link to="/register" className="btn register">
            {isRu ? 'Зарегистрироваться' : 'Register'}
          </Link>
          <Link to="/login" className="btn login">
            {isRu ? 'Войти' : 'Login'}
          </Link>
        </nav>
      </div>

      {/* Мобильное меню */}
      {mobileOpen && (
        <div className="mobile-menu">
          {menuConfig.map(({ key, title, links }) => (
            <div key={key}>
              <button className="mobile-toggle" onClick={() => toggleSubmenu(key)}>
                <span>{title[lang]}</span>
                <img
                  src={Arrow}
                  alt="▼"
                  className={`arrow-img ${openSubmenu[key] ? 'open' : ''}`}
                />
              </button>
              {openSubmenu[key] && (
                <ul className="mobile-submenu">
                  {links.map(([href, label]) => (
                    <li key={href}>
                      <Link to={href}>{label[lang]}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <Link to="/register" className="btn register">
            {isRu ? 'Зарегистрироваться' : 'Register'}
          </Link>
          <Link to="/login" className="btn login">
            {isRu ? 'Войти' : 'Login'}
          </Link>
        </div>
      )}
    </header>
  );
}
          