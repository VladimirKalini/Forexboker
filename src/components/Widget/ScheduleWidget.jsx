// ScheduleWidget.jsx
import React, { useEffect, useRef } from 'react';
import { useLang } from '../LangContext';
import './ScheduleWidget.css';

export default function ScheduleWidget() {
  const containerRef = useRef(null);
  const widgetCreated = useRef(false);
  const { lang } = useLang();  // <-- тянем текущий язык

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    // Удаляем старый виджет (если был)
    node.innerHTML = '';
    widgetCreated.current = false;

    // Проверяем, чтобы не создалось два фрейма
    const existingWidget = document.querySelector('iframe[src*="tradingview.com"]');
    if (existingWidget) {
      console.log('TradingView widget already exists, skipping initialization');
      return;
    }

    // Создаем новый скрипт TradingView
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.type = 'text/javascript';
    script.text = JSON.stringify({
      width: '100%',
      height: '800',
      symbol: 'BITSTAMP:BTCUSD',
      interval: 'D',
      timezone: 'Etc/UTC',
      theme: 'Light',
      style: '1',
      locale: lang,               // <-- здесь язык из контекста
      allow_symbol_change: true,
      support_host: 'https://www.tradingview.com'
    });

    node.appendChild(script);
    widgetCreated.current = true;

    return () => {
      // Очистим контейнер при размонтировании или смене языка
      node.innerHTML = '';
      widgetCreated.current = false;
    };
  }, [lang]);  // <-- перезапуск при смене lang

  return (
    <div className="tradingview-widget-container">
      <div 
        id="tradingview-chart-widget" 
        className="tradingview-widget-container__widget" 
        ref={containerRef}
      />
    </div>
  );
}
