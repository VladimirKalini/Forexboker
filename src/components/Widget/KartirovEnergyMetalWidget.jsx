import React, { useEffect, useRef, memo } from 'react';
import { useLang } from '../LangContext';

function KartirovEnergyMetalWidget() {
  const containerRef = useRef(null);
  const { lang } = useLang();

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = '';

    const config = {
      "title": "Commodities",
      "width": "100%",
      "height": "700",
      "locale": lang,
      "showSymbolLogo": true,
      "symbolsGroups": [
        {
          "name": "Energy",
          "symbols": [
            { "name": "PYTH:WTI3!", "displayName": "WTI Crude Oil" },
            { "name": "BMFBOVESPA:ETH1!", "displayName": "Ethanol" }
          ]
        },
        {
          "name": "Metals",
          "symbols": [
            { "name": "CMCMARKETS:GOLD", "displayName": "Gold" },
            { "name": "CMCMARKETS:SILVER", "displayName": "Silver" },
            { "name": "CMCMARKETS:PLATINUM", "displayName": "Platinum" },
            { "name": "CMCMARKETS:COPPER", "displayName": "Copper" }
          ]
        },
        {
          "name": "Agricultural",
          "symbols": [
            { "name": "BMFBOVESPA:ICF1!", "displayName": "Coffee" },
            { "name": "CMCMARKETS:COTTON", "displayName": "Cotton" },
            { "name": "BMFBOVESPA:SJC1!", "displayName": "Soybean" },
            { "name": "BMFBOVESPA:CCM1!", "displayName": "Corn" }
          ]
        },
        {
          "name": "Currencies",
          "symbols": [
            { "name": "BMFBOVESPA:EUR1!", "displayName": "Euro" },
            { "name": "BMFBOVESPA:GBP1!", "displayName": "British Pound" },
            { "name": "BMFBOVESPA:JPY1!", "displayName": "Japanese Yen" },
            { "name": "BMFBOVESPA:CHF1!", "displayName": "Swiss Franc" },
            { "name": "BMFBOVESPA:AUD1!", "displayName": "Australian Dollar" },
            { "name": "BMFBOVESPA:CAD1!", "displayName": "Canadian Dollar" }
          ]
        },
        {
          "name": "Indices",
          "symbols": [
            { "name": "BMFBOVESPA:ISP1!", "displayName": "S&P 500" },
            { "name": "BMFBOVESPA:BRI1!", "displayName": "Brazil 50" },
            { "name": "BMFBOVESPA:INK1!", "displayName": "Nikkei 225" },
            { "name": "EUREX:FDAX1!", "displayName": "DAX" },
            { "name": "BMFBOVESPA:WIN1!", "displayName": "Bovespa Index-Mini Futures" }
          ]
        }
      ],
      "colorTheme": "light"
    };

    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify(config);

    containerRef.current.appendChild(script);
    
  }, [lang]);

  return (
    <div className="tradingview-widget-container" ref={containerRef} style={{ height: '700px', width: '100%' }}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(KartirovEnergyMetalWidget);