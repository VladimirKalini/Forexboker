import { Link } from 'react-router-dom';
import { useLang } from './LangContext';
import { routes } from '../routes'; 
import '../App.css';

import Telegram from '../media/telegram.png'; 

export default function Footer() {
  const { lang } = useLang();
  const isRu = lang === 'ru';

  const telegramLink = "https://t.me/your_channel_or_username";

  // Общие тексты остаются без изменений
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

  // 1. Генерируем меню. Эта логика теперь корректна, так как r.path - это строка
  const menuSections = [
    {
      title: { ru: 'Торговля', en: 'Trading' },
      links: routes
        .filter(r => r.group === 'analytics')
        .map(r => ({ to: r.path, label: r.title })),
    },
    {
      title: { ru: 'Обучение', en: 'Education' },
      links: routes
        .filter(r => r.group === 'education')
        .map(r => ({ to: r.path, label: r.title })),
    },
    {
      title: { ru: 'Рынки и инструменты', en: 'Markets and instruments' },
      links: routes
        .filter(r => r.group === 'tools')
        .map(r => ({ to: r.path, label: r.title })),
    },
    {
      title: { ru: 'О компании', en: 'About the company' },
      links: routes
        .filter(r => r.group === 'about')
        .map(r => ({ to: r.path, label: r.title })),
    },
  ];

  // 2. Находим нужные роуты по их статичным русским путям
  const contactRoute = routes.find(r => r.path === 'o-kompanii/kontakty');
  const supportRoute = routes.find(r => r.path === 'podderzhka'); // Пример
  const officesRoute = routes.find(r => r.path === 'ofisy');     // Пример

  return (
    <footer className="footer">
      <div className="footer__left">
        <h3 className="footer__logo">
            <span className="footer__logo--fx">FX</span>Broker
        </h3>
        <p className="footer__desc">{texts.logoDesc[lang]}</p>
        <div className="footer__contacts">
          <h4>{isRu ? 'Связаться с нами' : 'Get in Touch'}</h4>
          <ul>
            {/* 3. Используем простой путь contactRoute.path */}
            {contactRoute && <li><Link to={contactRoute.path}>{contactRoute.title[lang]}</Link></li>}
            
            {supportRoute && <li><Link to={supportRoute.path}>{supportRoute.title[lang]}</Link></li>}
            {officesRoute && <li><Link to={officesRoute.path}>{officesRoute.title[lang]}</Link></li>}
            
            <li>
              <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="footer__social-link">
                <img src={Telegram} alt="Telegram" className="footer__social-icon" />
                <span>Telegram</span>
              </a>
            </li>
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
                  // 4. Ключ и путь `to` теперь являются простой строкой
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