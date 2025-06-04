// NewsWidget.jsx
import React, { useEffect, useRef } from 'react';
import { useLang } from './LangContext';

export default function NewsWidget() {
  const containerRef = useRef(null);
  const { lang } = useLang(); 

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://api.marketcheese.com/widgets/news/widget.js';
    script.async = true;
    script.setAttribute(
      'data-config',
      JSON.stringify({
        language: lang,
        orientation: 'auto',
        upload: 'manual',
        categoriesEnabled: true,
        descriptionEnabled: true,
      })
    );

    container.appendChild(script);

    // cleanup при демонтировании
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [lang]);

  return <div ref={containerRef} id="mc-news-container" />;
}
