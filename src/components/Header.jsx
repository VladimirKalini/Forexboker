import React, { useState, useContext, useEffect, useRef } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { useLang } from './LangContext';
import { LoadingContext } from './LoaderContext';
import { routes } from '../routes';

import ruFlag from '../media/ru.png';
import enFlag from '../media/eng.png';
import Arrow from '../media/arrow.png';
import ArrowIcon from '../media/arrow-right-full-cc.png';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState({});
  const [activeMenuKey, setActiveMenuKey] = useState(null);
  const menuRef = useRef(null);

  const { lang, toggleLang } = useLang();
  const { setLoading } = useContext(LoadingContext);

  const flags = {
    ru: ruFlag,
    en: enFlag,
  };

  const toggleSubmenu = (key) => {
    setOpenSubmenu((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleMenuClick = (key) => {
    setActiveMenuKey((prevKey) => (prevKey === key ? null : key));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeMenuKey && menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenuKey(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeMenuKey]);

  const handleLangToggle = () => {
    setLoading(true);
    setTimeout(() => {
      toggleLang();
      setLoading(false);
    }, 500);
  };

  const analyticsLinks = routes
    .filter(route => route.group === 'analytics')
    .map(route => [route.path, route.title]);

  const educationLinks = routes
    .filter(route => route.group === 'education')
    .map(route => [route.path, route.title]);

  const toolsLinks = routes
    .filter(route => route.group === 'tools')
    .map(route => [route.path, route.title]);
    
  const aboutLinks = routes
    .filter(route => route.group === 'about')
    .map(route => [route.path, route.title]);

  const staticPdfLinks = [
    ['/media/License.pdf', { ru: 'Лицензия', en: 'License' }],
    ['/media/Политика конфиденциальности.pdf', { ru: 'Политика конфиденциальности', en: 'Privacy Policy' }],
    ['/media/Клиентское соглашение.pdf', { ru: 'Клиентское соглашение', en: 'User Agreement' }],
  ];
  
  const menuConfig = [
    { key: 'trade', title: { ru: 'Торговля', en: 'Trade' }, columns: [{ links: analyticsLinks }] },
    { key: 'edu', title: { ru: 'Обучение', en: 'Education' }, columns: [{ links: educationLinks.slice(0, 4) }, { links: educationLinks.slice(4) }] },
    { key: 'inst', title: { ru: 'Рынки и инструменты', en: 'Markets & Tools' }, columns: [{ links: toolsLinks.slice(0, 4) }, { links: toolsLinks.slice(4) }] },
    { key: 'about', title: { ru: 'О компании', en: 'About Us' }, columns: [{ links: aboutLinks }, { links: staticPdfLinks }] },
  ];

  const registerRoute = routes.find(r => r.path === 'register');
  const loginRoute = routes.find(r => r.path === 'login');

  return (
    <header className="header">
      <div className="header-inner">
        <div>
          <Link to="/" className="logo_header">
            <span className="logo__highlight">FX</span>Broker
          </Link>
          <button className="lang-btn-desktop" onClick={handleLangToggle}>
            <img src={flags[lang]} alt="" className="lang-icon" />
            {lang.toUpperCase()}
          </button>
        </div>

        <div className="mobile-controls">
          <button className="burger" onClick={() => setMobileOpen((o) => !o)}>
            ☰
          </button>
        </div>

        <nav className="desktop-menu" ref={menuRef}>
          {menuConfig.map(({ key, title, columns }) => (
            <div key={key} className={`dropdown ${activeMenuKey === key ? 'is-open' : ''}`}>
              <button className="dropdown-toggle" onClick={() => handleMenuClick(key)}>
                {title[lang]}
                <img src={Arrow} alt="▼" className="arrow-img" />
              </button>
              <div className="dropdown-menu">
                <div className="dropdown-menu-inner">
                  {columns.map((column, colIndex) => (
                    <div key={colIndex} className="menu-column">
                      <ul>
                        {column.links.map(([href, label]) => {
                          const isPdf = href.endsWith('.pdf');
                          return (
                            <li key={href}>
                              {isPdf ? (
                                <a href={href} target="_blank" rel="noopener noreferrer">
                                  {label[lang]}
                                  <img src={ArrowIcon} className="menu-arrow" alt="" />
                                </a>
                              ) : (
                                <Link to={href}>
                                  {label[lang]}
                                  <img src={ArrowIcon} className="menu-arrow" alt="" />
                                </Link>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          {registerRoute && (
            <Link to={registerRoute.path} className="btn register">
              {registerRoute.title[lang]}
            </Link>
          )}
          {loginRoute && (
            <Link to={loginRoute.path} className="btn login">
              {loginRoute.title[lang]}
            </Link>
          )}

        </nav>
      </div>

      {/* --- НАЧАЛО МОБИЛЬНОЙ ВЕРСИИ --- */}
      {mobileOpen && (
        <div className="mobile-menu">
          {menuConfig.map(({ key, title, columns }) => (
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
                  {columns.flatMap((col) => col.links).map(([href, label]) => {
                    const isPdf = href.endsWith('.pdf');
                    return (
                      <li key={href}>
                        {isPdf ? (
                          <a href={href} target="_blank" rel="noopener noreferrer">
                            {label[lang]}
                          </a>
                        ) : (
                          <Link to={href}>{label[lang]}</Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}

          {/* Кнопки для мобильной версии */}
          {registerRoute && (
            <Link to={registerRoute.path} className="btn register">
              {registerRoute.title[lang]}
            </Link>
          )}
          {loginRoute && (
            <Link to={loginRoute.path} className="btn login">
              {loginRoute.title[lang]}
            </Link>
          )}
        </div>
      )}
      
    </header>
  );
}