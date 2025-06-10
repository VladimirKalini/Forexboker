import React, { useEffect, useRef, useState } from 'react';
import './TradingWidgetAll.css';

export default function TradingViewTickerCompact() {
  const containerRef = useRef(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;


    node.innerHTML = '';

    try {

      const widgetContainer = document.createElement('div');
      widgetContainer.className = 'tradingview-widget-container__widget';
      node.appendChild(widgetContainer);


      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
      script.async = true;
      script.type = 'text/javascript';
    
      script.onerror = () => {
        setError(true);
        console.error('Failed to load TradingView widget');
      };
      
      const config = {
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
      };
      
      script.innerHTML = JSON.stringify(config);
      node.appendChild(script);
    } catch (err) {
      setError(true);
      console.error('Error initializing TradingView widget:', err);
    }

    return () => {
      if (node) {
        node.innerHTML = '';
      }
    };
  }, []);


  if (error) {
    return (
      <div className="tradingview-widget-fallback">
        <div className="tradingview-widget-fallback__content">

          <span>TSLA: +0.86%</span>
          <span>AAPL: -1.08%</span>
          <span>NVDA: -1.36%</span>
          <span>MSFT: +0.82%</span>
        </div>
      </div>
    );
  }

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
    </div>
  );
}
