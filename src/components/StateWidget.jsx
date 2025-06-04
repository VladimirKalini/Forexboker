// NewsWidget.jsx
import React, { useEffect, useRef } from 'react';
import { useLang } from './LangContext';

export default function StateWidget() {
  const containerRef = useRef(null);
  const { lang } = useLang();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Очистим старый контент
    container.innerHTML = '';

    // Создаём script
    const script = document.createElement('script');
    script.src = 'https://api.marketcheese.com/widgets/markets/widget.js';
    script.async = true;

    // Правильно формируем конфиг
    const config = {
      language: lang,
      orientation: 'auto',
      defaultPeriod: 'week',
      adaptive: 'false',
      groups: [
        { name: 'Металлы', symbols: '97,98,99,100,104' },
        { name: 'Энергоносители', symbols: '127,128,129,277' },
        { name: 'Форекс', symbols: '42,48,57,68,87' },
        { name: 'Акции США', symbols: '12,14,18,201,225' }
      ],
      height: '600'
    };

    script.setAttribute('data-config', JSON.stringify(config));


    container.appendChild(script);

    return () => {
      container.innerHTML = '';
    };
  }, [lang]);

  return <div ref={containerRef} id="mc-news-container" />;
}
