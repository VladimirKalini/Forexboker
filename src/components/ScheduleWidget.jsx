import React, { useEffect, useRef } from 'react';
import './ScheduleWidget.css';

const ScheduleWidget = () => {
  const containerRef = useRef(null);
  const widgetCreated = useRef(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || widgetCreated.current) return;

    // Проверяем, есть ли уже виджет TradingView на странице
    const existingWidget = document.querySelector('iframe[src*="tradingview.com"]');
    if (existingWidget) {
      console.log('TradingView widget already exists, skipping initialization');
      return;
    }

    // Очищаем содержимое контейнера перед добавлением нового скрипта
    node.innerHTML = '';

    // Создаем виджет
    try {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
      script.async = true;
      script.type = 'text/javascript';
      
      // Используем text вместо innerHTML для лучшей совместимости
      script.text = JSON.stringify({
        width: '100%',
        height: '800',
        symbol: 'BITSTAMP:BTCUSD',
        interval: 'D',
        timezone: 'Etc/UTC',
        theme: 'Light',
        style: '1',
        locale: 'ru',
        allow_symbol_change: true,
        support_host: 'https://www.tradingview.com'
      });

      node.appendChild(script);
      widgetCreated.current = true;
      console.log('TradingView widget created successfully');
    } catch (error) {
      console.error('Error creating TradingView widget:', error);
    }

    return () => {
      if (node) {
        node.innerHTML = '';
        widgetCreated.current = false;
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview-chart-widget" className="tradingview-widget-container__widget" ref={containerRef}></div>
    </div>
  );
};

export default ScheduleWidget;
