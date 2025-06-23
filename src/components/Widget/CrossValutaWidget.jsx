import React, { useEffect, useRef } from 'react';

const ForexCrossRatesWidget = ({ lang }) => {
  const crossRatesRef = useRef(null);

  useEffect(() => {
    const crossContainer = crossRatesRef.current;
    if (crossContainer) {
      crossContainer.innerHTML = '';

      const crossScript = document.createElement('script');
      crossScript.type = 'text/javascript';
      crossScript.async = true;
      crossScript.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js';
      crossScript.innerHTML = JSON.stringify({
        width: '100%',
        height: '800',
        currencies: [
          'EUR', 'USD', 'JPY', 'GBP', 'CHF', 'AUD',
          'CAD', 'NZD', 'CNY', 'TRY', 'SEK', 'NOK',
          'DKK', 'ZAR', 'HKD'
        ],
        isTransparent: false,
        colorTheme: 'light',
        locale: lang,
        backgroundColor: '#FFFFFF',
      });
      crossContainer.appendChild(crossScript);
    }
  }, [lang]);

  return (
    <div ref={crossRatesRef} className="tradingview-widget-container" style={{ height: '400px', width: '100%' }}></div>
  );
};

export default ForexCrossRatesWidget;