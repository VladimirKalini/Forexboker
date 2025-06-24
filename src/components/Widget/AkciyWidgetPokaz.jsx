import React, { useEffect, useRef } from 'react';
import { useLang } from '../LangContext';

const StockScreenerWidget = () => {
  const containerRef = useRef(null);
  const { lang } = useLang();

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    script.async = true;

    const config = {
      "width": "100%",
      "height": "700",
      "defaultColumn": "overview",
      "defaultScreen": "most_capitalized",
      "showToolbar": true,
      "locale": lang,
      "market": "us",
      "colorTheme": "light"
    };

    script.innerHTML = JSON.stringify(config);

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [lang]);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default StockScreenerWidget;