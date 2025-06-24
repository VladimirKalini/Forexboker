import React, { useEffect, useRef } from 'react';
import { useLang } from '../LangContext';

const AdvancedChartWidget = () => {
  const containerRef = useRef(null);
  const { lang } = useLang();

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;

    const config = {
      "width": "100%",
      "height": "610",
      "symbol": "NASDAQ:AAPL",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "1",
      "locale": lang,
      "withdateranges": true,
      "range": "YTD",
      "hide_side_toolbar": false,
      "allow_symbol_change": true,
      "details": true,
      "hotlist": true,
      "support_host": "https://www.tradingview.com"
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
    <div className="tradingview-widget-container" ref={containerRef} style={{ height: '610px' }}>
      <div className="tradingview-widget-container__widget" style={{ height: 'calc(100% - 32px)' }}></div>
    </div>
  );
};

export default AdvancedChartWidget;