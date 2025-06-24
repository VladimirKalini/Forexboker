import React, { useEffect, useRef, memo } from 'react';
import { useLang } from '../LangContext'; 

function TradingViewWidget() {
  const containerRef = useRef(null);
  const { lang } = useLang();

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = '';

    const config = {
      "dataSource": "Crypto",
      "blockSize": "market_cap_calc",
      "blockColor": "24h_close_change|5",
      "locale": lang,
      "symbolUrl": "",
      "colorTheme": "light",
      "hasTopBar": false,
      "isDataSetEnabled": false,
      "isZoomEnabled": true,
      "hasSymbolTooltip": true,
      "isMonoSize": false,
      "width": "100%",
      "height": "100%"
    };

    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify(config);

    containerRef.current.appendChild(script);
  }, [lang]);

  return (
    <div className="tradingview-widget-container" ref={containerRef} style={{ height: '100%', width: '100%' }}>
      <div className="tradingview-widget-container__widget" style={{ height: '100%', width: '100%' }}></div>
    </div>
  );
}

export default memo(TradingViewWidget);