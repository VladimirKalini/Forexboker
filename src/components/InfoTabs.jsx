import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './style-components.css'; 
import { useLang } from './LangContext';

export default function InfoTabs({ tabsData }) {
  // Если данные не переданы, ничего не отображаем
  if (!tabsData || tabsData.length === 0) {
    return null;
  }

  const [activeId, setActiveId] = useState(tabsData[0].id);
  const { lang } = useLang();
  const intervalRef = useRef(null);
  const AUTOSCROLL_DELAY = 5000;

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startAutoScroll = () => {
    stopAutoScroll(); 
    intervalRef.current = setInterval(() => {
      setActiveId(prevId => {
        const currentIndex = tabsData.findIndex(tab => tab.id === prevId);
        const nextIndex = (currentIndex + 1) % tabsData.length;
        return tabsData[nextIndex].id;
      });
    }, AUTOSCROLL_DELAY);
  };
  
  useEffect(() => {
    // Сбрасываем активный таб и перезапускаем анимацию при смене данных
    setActiveId(tabsData[0].id);
    startAutoScroll();
    return () => stopAutoScroll();
  }, [tabsData]); // Зависимость от tabsData

  const handleInteraction = (id) => {
    setActiveId(id);
    startAutoScroll(); // Перезапускаем таймер при взаимодействии
  };

  return (
    <div className="info-tabs-container">
      {tabsData.map((tab) => (
        <div
          key={tab.id}
          className={`info-tab ${activeId === tab.id ? 'active' : ''}`}
          onClick={() => handleInteraction(tab.id)}
          onMouseEnter={() => handleInteraction(tab.id)}
        >
          <div className="info-tab-header">
            <h3>{lang === 'ru' ? tab.titleRu : tab.titleEn}</h3>
            <p>{lang === 'ru' ? tab.verticalTextRu : tab.verticalTextEn}</p>
          </div>
          
          <div className="info-tab-collapsible-content">
            <h2>{lang === 'ru' ? tab.titleRu : tab.titleEn}</h2>
            <p className="description">{lang === 'ru' ? tab.descriptionRu : tab.descriptionEn}</p>
            <Link to="/register" className="info-tab-btn">
              {lang === 'ru' ? 'Открыть счет' : 'Open an account'}
            </Link>
          </div>
          
          <div className="info-tab-vertical-title">
            <h3>{lang === 'ru' ? tab.titleRu : tab.titleEn}</h3>
            <p>{lang === 'ru' ? tab.verticalTextRu : tab.verticalTextEn}</p>
          </div>
        </div>
      ))}
    </div>
  );
}