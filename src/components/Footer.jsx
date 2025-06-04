
import { Link } from 'react-router-dom';
import { useLang } from './LangContext';
import '../App.css';

export default function Footer() {
  const { lang } = useLang();
  const isRu = lang === 'ru';

  // Общие тексты
  const texts = {
    logoDesc: {
      ru: 'FXBroker является убеждённым сторонником прозрачности работы и устанавливает высочайшие стандарты безопасности.',
      en: 'FXBroker is a staunch advocate of operational transparency and sets the highest security standards.',
    },
    risk: {
      ru: 'Уведомление о рисках: Инвестирование в группы высокого риска (Forex) и контракты на разницу (CFD) является спекулятивной операцией, включающей высокий риск, и не подходит для каждого инвестора. Вы можете понести как частичные, так и полные потери вложенных средств, поэтому мы не советуем инвестировать капитал, которым вы не можете рисковать. Вы должны знать о повышенном риске, связанном с использованием кредитного плеча. Мы настоятельно рекомендуем вам ознакомиться с условиями и услугами нашего веб-сайта, прежде чем начать пользоваться нашими сервисами.',
      en: 'Risk Warning: Investing in high risk groups (Forex) and contracts for difference (CFDs) is speculative, involves high risk and is not suitable for every investor. It is possible to sustain a partial or full loss of your invested capital, therefore we do not recommend investing capital that you cannot afford to risk. You should be aware of the increased risk associated with the use of leverage. We strongly recommend that you read the terms and conditions of our website before you start using our services.',
    },
    copy: {
      ru: '© 2025 FXBroker. Все права защищены.',
      en: '© 2025 FXBroker. All rights reserved.',
    },
  };

  // Колонки меню
  const menuSections = [
    {
      title: { ru: 'Торговля', en: 'Trading' },
      links: [
        { to: '/News',       label: { ru: 'Новости',           en: 'News' } },
        { to: '/career',      label: { ru: 'Экономический календарь',         en: 'Economic calendar' } },
        { to: '/policy',      label: { ru: 'Прогноз Рынка',        en: 'Market Forecast' } },
        { to: '/policy',      label: { ru: 'Состояние рынка',        en: 'Market State' } },
        { to: '/policy',      label: { ru: 'График',        en: 'Schedule' } },
      ],
    },
    {
      title: { ru: 'Обучение', en: 'Education' },
      links: [
        { to: '/markets',     label: { ru: 'Что такое Форекс', en: 'What is Forex' } },
        { to: '/education',   label: { ru: 'Технический анализ',        en: 'Technical analysis' } },
        { to: '/analytics',   label: { ru: 'Фундаментальный анализ',       en: 'Fundamental analysis' } },
        { to: '/analytics',   label: { ru: '10 ошибок новичка',       en: '10 Beginner Mistakes' } },
        { to: '/analytics',   label: { ru: 'Глоссарий трейдеров',       en: 'Traders Glossary' } },
        { to: '/analytics',   label: { ru: 'Психология трейдера',       en: 'Psychology of a trader' } },
        { to: '/analytics',   label: { ru: 'Библиотека',       en: 'Library' } },
        { to: '/analytics',   label: { ru: 'Обучение',       en: 'Education' } },
      ],
    },
    {
      title: { ru: 'Рынки и инструменты', en: 'Markets and instruments' },
      links: [
        { to: '/contacts',    label: { ru: 'Калькулятор',        en: 'Calculator' } },
        { to: '/faq',         label: { ru: 'Валюты',             en: 'Currencies' } },
        { to: '/offices',     label: { ru: 'Акции',           en: 'Stock' } },
        { to: '/offices',     label: { ru: 'Энергоресурсы/Металлы',           en: 'Energy Resources/Metals' } },
        { to: '/offices',     label: { ru: 'Индексы',           en: 'Indexes' } },
        { to: '/offices',     label: { ru: 'Показатели Рынка',           en: 'Market Indicators' } },
        { to: '/offices',     label: { ru: 'Криптовалюта',           en: 'Cryptocurrency' } },
      ],
    },
    {
      title: { ru: 'О компании', en: 'About the company' },
      links: [
        { to: '/contacts',    label: { ru: 'О компании',        en: 'About the company' } },
        { to: '/faq',         label: { ru: 'Контакты',             en: 'Contacts' } },
        { to: '/offices',     label: { ru: 'Карьера',           en: 'Career' } },
        { to: '/offices',     label: { ru: 'Лицензия',           en: 'License' } },
        { to: '/offices',     label: { ru: 'Политика конфиденциальности',           en: 'Privacy Policy' } },
        { to: '/offices',     label: { ru: 'Клиентское соглашение',           en: 'Client Agreement' } },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer__left">
        <h3 className="footer__logo">FXBroker</h3>
        <p className="footer__desc">{texts.logoDesc[lang]}</p>
        <div className="footer__contacts">
          <h4>{isRu ? 'Связаться с нами' : 'Get in Touch'}</h4>
          <ul>
            <li><Link to="/contact">{isRu ? 'Контакты' : 'Contacts'}</Link></li>
            <li><Link to="/support">{isRu ? 'Поддержка' : 'Support'}</Link></li>
            <li><Link to="/offices">{isRu ? 'Офисы' : 'Offices'}</Link></li>
          </ul>
        </div>
      </div>

  
      <div className="footer__right">
        <div className="footer__menus">
          {menuSections.map(section => (
            <div key={section.title[lang]} className="footer__menu">
              <h5>{section.title[lang]}</h5>
              <ul>
                {section.links.map(link => (
                  <li key={link.to}>
                    <Link to={link.to}>{link.label[lang]}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="footer__disclaimer">{texts.risk[lang]}</p>
        <p className="footer__disclaimer">{texts.copy[lang]}</p>
      </div>
    </footer>
  );
}
