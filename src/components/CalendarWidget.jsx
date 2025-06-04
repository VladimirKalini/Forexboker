// NewsWidget.jsx
import React, { useEffect, useRef } from 'react';
import { useLang } from './LangContext';

export default function CalendarWidget() {
  const containerRef = useRef(null);
  const { lang } = useLang(); 

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://api.marketcheese.com/widgets/calendar/widget.js';
    script.async = true;
    script.setAttribute(
      'data-config',
      JSON.stringify({
        language: lang,
        countries:'1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,81,186,211',
        segments:'4,14,16',
        orientation: 'auto',
        timezone:'current',
        upload: 'manual',
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
