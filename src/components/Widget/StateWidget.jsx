// StateWidget.jsx
import React, { useEffect, useRef } from 'react';
import { useLang } from '../LangContext';
import '../style-components.css';

export default function StateWidget() {
  const containerRef = useRef(null);
  const { lang } = useLang();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // очищаем предыдущий виджет
    container.innerHTML = '';

    // создаём новый <script>
    const script = document.createElement('script');
    script.src = `https://api.marketcheese.com/widgets/markets/widget.js`;
    script.async = true;

    // конфиг с языком из контекста
    script.setAttribute(
      'data-config',
      JSON.stringify({
        language: lang,
        orientation: 'auto',
        defaultPeriod: 'week',
        adaptive: 'false',
        groups: [
          { name: lang === 'ru' ? 'Металлы' : 'Metals', symbols: '97,98,99,100,104' },
          { name: lang === 'ru' ? 'Энергоносители' : 'Energies', symbols: '127,128,129,277' },
          { name: lang === 'ru' ? 'Форекс' : 'Forex', symbols: '42,48,57,68,87' },
          { name: lang === 'ru' ? 'Акции США' : 'US Stocks', symbols: '12,14,18,201,225' },
        ],
        height: '600',
      })
    );

    container.appendChild(script);

    return () => {
      // при демонтировании очищаем
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [lang]);

  return <div ref={containerRef} id="mc-markets-container" />;
}
