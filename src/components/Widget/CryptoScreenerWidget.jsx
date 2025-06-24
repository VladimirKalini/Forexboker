import React, { useEffect, useRef, memo } from 'react';
import { useLang } from '../LangContext';

function CryptoScreenerWidget() {
  const containerRef = useRef(null);
  const { lang } = useLang();

  useEffect(() => {
    if (!containerRef.current) return;

    const config = {
      "width": "100%",
      "height": 700,
      "defaultColumn": "overview",
      "screener_type": "crypto_mkt",
      "displayCurrency": "USD",
      "colorTheme": "light",
      "locale": lang
    };

    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify(config);

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [lang]);

  return (
    <div className="tradingview-widget-container" ref={containerRef} style={{ height: '700px', width: '100%' }}>
      <div className="tradingview-widget-container__widget" style={{ height: '100%', width: '100%' }}></div>
    </div>
  );
}

export default memo(CryptoScreenerWidget);