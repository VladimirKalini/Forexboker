import React, { useEffect, useRef } from 'react';
import { useLang } from './LangContext';

export default function ForecastsWidget() {
  const containerRef = useRef(null);
  const { lang } = useLang(); 

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://api.marketcheese.com/widgets/forecasts/widget.js';
    script.async = true;
    script.setAttribute(
      'data-config',
      JSON.stringify({
        language: lang,
        orientation: 'horizontal',
        maxRows: '3',
        segments:"14,4,16,8,5,7,15"
      })
    );

    container.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [lang]);

  return <div ref={containerRef} id="mc-news-container" />;
}

