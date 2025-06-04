import React, { useEffect, useRef } from 'react';

export default function TradingViewTickerCompact() {
  const containerRef = useRef(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    node.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.type = 'text/javascript';
    script.text = JSON.stringify({
      symbols: [
        { description: 'Tesla', proName: 'NASDAQ:TSLA' },
        { description: 'Apple Inc', proName: 'NASDAQ:AAPL' },
        { description: 'Nvidia', proName: 'NASDAQ:NVDA' },
        { description: 'Microsoft', proName: 'NASDAQ:MSFT' },
        { description: 'Advanced Micro Devices', proName: 'NASDAQ:AMD' },
        { description: 'Meta', proName: 'NASDAQ:META' },
        { description: 'Netflix', proName: 'NASDAQ:NFLX' },
      ],
      showSymbolLogo: true,
      colorTheme: "dark",
      isTransparent: false,
      displayMode: 'compact',
      locale: 'en',
    });

    node.appendChild(script);

    return () => {
      node.innerHTML = '';
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
        </div>
  );
}
