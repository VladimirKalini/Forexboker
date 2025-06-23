import React, { useEffect, useRef } from 'react';

const ScreenerWidget = ({ lang }) => {
  const screenerRef = useRef(null);

  useEffect(() => {
    const screenerContainer = screenerRef.current;
    if (screenerContainer) {
      screenerContainer.innerHTML = '';

      const screenerScript = document.createElement('script');
      screenerScript.type = 'text/javascript';
      screenerScript.async = true;
      screenerScript.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
      screenerScript.innerHTML = JSON.stringify({
        width: '100%',
        height: 850,
        defaultColumn: 'overview',
        defaultScreen: 'general',
        market: 'forex',
        showToolbar: true,
        colorTheme: 'light',
        locale: lang,
      });
      screenerContainer.appendChild(screenerScript);
    }
  }, [lang]);

  return (
    <div ref={screenerRef} className="tradingview-widget-container" style={{ height: '850px', width: '100%' }}></div>
  );
};

export default ScreenerWidget;