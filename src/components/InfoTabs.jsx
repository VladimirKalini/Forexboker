import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './style-components.css'; 
import { useLang } from './LangContext';

const tabsData = [
  {
    id: 'stocks',
    titleRu: 'Акции',
    titleEn: 'Stocks',
    descriptionRu: 'представляют собой долю в компании и дают право на часть прибыли. Владение акциями позволяет не только получать дивиденды, но и участвовать в важных решениях компании через голосование на собраниях акционеров.',
    descriptionEn: 'represent a share in a company and give the right to a part of the profit. Owning stocks allows you not only to receive dividends, but also to participate in important company decisions through voting at shareholder meetings.',
    verticalTextRu: 'Акции представляют собой',
    verticalTextEn: 'Stocks represent'
  },
  {
    id: 'price',
    titleRu: 'Цена акции',
    titleEn: 'Stock Price',
    descriptionRu: 'формируется под влиянием спроса и предложения, а также новостей и экономических факторов. Изменения в отрасли, финансовые отчёты и глобальные события могут значительно влиять на стоимость акций.',
    descriptionEn: 'is formed under the influence of supply and demand, as well as news and economic factors. Changes in the industry, financial reports, and global events can significantly affect the value of stocks.',
    verticalTextRu: 'Цена акции формируется',
    verticalTextEn: 'Stock price is formed'
  },
  {
    id: 'dividends',
    titleRu: 'Дивиденды',
    titleEn: 'Dividends',
    descriptionRu: '— это регулярные выплаты акционерам из прибыли компании, но не все акции их выплачивают. Дивидендные акции часто выбирают для стабильного дохода и долгосрочных инвестиций.',
    descriptionEn: 'are regular payments to shareholders from the company\'s profits, but not all stocks pay them. Dividend stocks are often chosen for a stable income and long-term investments.',
    verticalTextRu: 'Дивиденды это регулярные',
    verticalTextEn: 'Dividends are regular'
  },
  {
    id: 'success',
    titleRu: 'Для успешной',
    titleEn: 'For Successful',
    descriptionRu: 'торговли важно анализировать финансовые отчёты компаний, новости и рыночные тенденции. FXBroker предлагает инструменты и обучение, которые помогут принимать обоснованные решения и повысить эффективность торговли.',
    descriptionEn: 'trading, it is important to analyze companies\' financial reports, news, and market trends. FXBroker offers tools and training to help make informed decisions and increase trading efficiency.',
    verticalTextRu: 'Для успешной торговли важно',
    verticalTextEn: 'For successful trading'
  }
];

export default function InfoTabs() {
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
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const handleInteraction = (id) => {
    setActiveId(id);
    startAutoScroll();
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