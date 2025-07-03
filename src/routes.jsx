// src/routes.jsx
import Home from './pages/Home';
import Register from './pages/forms/Register';
import Login from './pages/forms/Login';
import ResetPassword from './pages/forms/ResetPassword';
import News from './pages/analytics/News';
import EconomicCalendar from './pages/analytics/EconomicCalendar';
import Forecasts from './pages/analytics/Forecasts';
import State from './pages/analytics/State';
import Schedule from './pages/analytics/Schedule';
import Forex from './pages/education/Forex';
import Analyz from './pages/education/Analyz';
import FundAnalyz from './pages/education/FundAnalyz';
import Mistake from './pages/education/Mistake';
import GolosariyEdu from './pages/education/GolosariyEdu';
import Psyhology from './pages/education/Psyhology';
import Education from './pages/education/EducationEdu';
import Library from './pages/education/Library';
import Calculator from './pages/market/Calculator';
import Valuta from './pages/market/Valuta';
import Akciy from './pages/market/Akciy';
import EnergyMetal from './pages/market/EnergyMetal';
import Index from './pages/market/Index';
import Pokazately from './pages/market/Pokazately';
import CryptoValuta from './pages/market/CryptoValuta';
import About from './pages/about/About';
import Career from './pages/about/Career';
import Contact from './pages/about/Contact';

export const routes = [
  { isIndex: true, element: <Home />, title: { ru: 'Главная', en: 'Home' }, group: 'main' },
  
  // Формы
  { path: 'register', element: <Register />, title: { ru: 'Регистрация', en: 'Register' }, group: 'forms' },
  { path: 'login', element: <Login />, title: { ru: 'Вход', en: 'Login' }, group: 'forms' },
  { path: 'reset-password', element: <ResetPassword />, title: { ru: 'Сброс пароля', en: 'Reset Password' }, group: 'forms' },

  // Аналитика
  { path: 'analytics/news', element: <News />, title: { ru: 'Новости', en: 'News' }, group: 'analytics' },
  { path: 'analytics/economic-calendar', element: <EconomicCalendar />, title: { ru: 'Экономический календарь', en: 'Economic Calendar' }, group: 'analytics' },
  { path: 'analytics/forecasts', element: <Forecasts />, title: { ru: 'Прогноз Рынка', en: 'Market Forecasts' }, group: 'analytics' },
  { path: 'analytics/market-status', element: <State />, title: { ru: 'Состояние рынка', en: 'Market Status' }, group: 'analytics' },
  { path: 'analytics/chart', element: <Schedule />, title: { ru: 'График', en: 'Chart' }, group: 'analytics' },

  // Обучение
  { path: 'education/what-is-forex', element: <Forex />, title: { ru: 'Что такое Форекс', en: 'What Is Forex' }, group: 'education' },
  { path: 'education/technical-analysis', element: <Analyz />, title: { ru: 'Технический анализ', en: 'Technical Analysis' }, group: 'education' },
  { path: 'education/fundamental-analysis', element: <FundAnalyz />, title: { ru: 'Фундаментальный анализ', en: 'Fundamental Analysis' }, group: 'education' },
  { path: 'education/10-newbie-mistakes', element: <Mistake />, title: { ru: '10 ошибок новичка', en: '10 Newbie Mistakes' }, group: 'education' },
  { path: 'education/glossary', element: <GolosariyEdu />, title: { ru: 'Глоссарий трейдеров', en: 'Traders Glossary' }, group: 'education' },
  { path: 'education/psychology', element: <Psyhology />, title: { ru: 'Психология трейдера', en: 'Trader Psychology' }, group: 'education' },
  { path: 'education/main', element: <Education />, title: { ru: 'Обучение', en: 'Education' }, group: 'education' },
  { path: 'education/library', element: <Library />, title: { ru: 'Библиотека', en: 'Library' }, group: 'education' },
  
  // Рынки и инструменты
  { path: 'tools/calculator', element: <Calculator />, title: { ru: 'Калькулятор', en: 'Calculator' }, group: 'tools' },
  { path: 'tools/currencies', element: <Valuta />, title: { ru: 'Валюты', en: 'Currencies' }, group: 'tools' },
  { path: 'tools/stocks', element: <Akciy />, title: { ru: 'Акции', en: 'Stocks' }, group: 'tools' },
  { path: 'tools/energy-metals', element: <EnergyMetal />, title: { ru: 'Энергоресурсы/Металлы', en: 'Energy/Metals' }, group: 'tools' },
  { path: 'tools/indices', element: <Index />, title: { ru: 'Индексы', en: 'Indices' }, group: 'tools' },
  { path: 'tools/market-metrics', element: <Pokazately />, title: { ru: 'Показатели Рынка', en: 'Market Metrics' }, group: 'tools' },
  { path: 'tools/crypto', element: <CryptoValuta />, title: { ru: 'Крипта', en: 'Crypto' }, group: 'tools' },

  // О компании
  { path: 'about', element: <About />, title: { ru: 'О компании', en: 'About Us' }, group: 'about' },
  { path: 'about/career', element: <Career />, title: { ru: 'Карьера', en: 'Careers' }, group: 'about' },
  { path: 'about/contact', element: <Contact />, title: { ru: 'Контакты', en: 'Contacts' }, group: 'about' },
];