import React, { useEffect } from 'react';
import '../style-components.css';

const ForexCalculators = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.cashbackforex.com/Content/remote/remote-widgets.js';
    script.async = true;
    script.id = 'forex-widgets-script';

    script.onload = () => {
      if (window.RemoteCalc) {
        // Инициализация первого калькулятора
        window.RemoteCalc({
          Url: "https://www.cashbackforex.com",
          TopPaneStyle: "YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMzNDM1NDAgMCUsICMyNDI4MzEgMTAwJSk7IGNvbG9yOiB3aGl0ZTsgYm9yZGVyLWJvdHRvbTogbm9uZTs=",
          BottomPaneStyle: "YmFja2dyb3VuZDogIzE1MTgxZDsgYm9yZGVyOiBzb2xpZCAwcHggIzJhMmUzOTsgY29sb3I6ICM5MTk0YTE7",
          ButtonStyle: "YmFja2dyb3VuZDogIzM0MzU0MDsgY29sb3I6IHdoaXRlOyBib3JkZXItcmFkaXVzOiAyMHB4Ow==",
          TitleStyle: "dGV4dC1hbGlnbjogbGVmdDsgZm9udC1zaXplOiA0MHB4OyBmb250LXdlaWdodDogNTAwOw==",
          TextboxStyle: "YmFja2dyb3VuZDogIzE1MTgxZDsgY29sb3I6ICM5MTk0YTE7IGJvcmRlcjogc29saWQgMHB4ICM5MTk0YTE7",
          HighlightColor: "rgba(0,0,0,1.0)",
          IsDisplayTitle: false,
          IsShowChartLinks: false,
          IsShowEmbedButton: false,
          CompactType: "large",
          Calculator: "position-size-calculator",
          ContainerId: "position-size-calculator-71025"
        });

        // Инициализация второго калькулятора
        window.RemoteCalc({
          Url: "https://www.cashbackforex.com",
          TopPaneStyle: "YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMzNDM1NDAgMCUsICMyNDI4MzEgMTAwJSk7IGNvbG9yOiB3aGl0ZTsgYm9yZGVyLWJvdHRvbTogbm9uZTs=",
          BottomPaneStyle: "YmFja2dyb3VuZDogIzE1MTgxZDsgYm9yZGVyOiBzb2xpZCAwcHggIzJhMmUzOTsgY29sb3I6ICM5MTk0YTE7",
          ButtonStyle: "YmFja2dyb3VuZDogIzM0MzU0MDsgY29sb3I6IHdoaXRlOyBib3JkZXItcmFkaXVzOiAyMHB4Ow==",
          TitleStyle: "dGV4dC1hbGlnbjogbGVmdDsgZm9udC1zaXplOiA0MHB4OyBmb250LXdlaWdodDogNTAwOw==",
          TextboxStyle: "YmFja2dyb3VuZDogIzE1MTgxZDsgY29sb3I6ICM5MTk0YTE7IGJvcmRlcjogc29saWQgMHB4ICM5MTk0YTE7",
          HighlightColor: "rgba(0,0,0,1.0)",
          IsDisplayTitle: false,
          IsShowChartLinks: false,
          IsShowEmbedButton: false,
          CompactType: "large",
          Calculator: "profit-calculator",
          ContainerId: "profit-calculator-839324"
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('forex-widgets-script');
      if (scriptToRemove) {
        document.body.removeChild(scriptToRemove);
      }
    };
  }, []);

  // Стили для родительского контейнера

  return (
    // Оборачиваем калькуляторы в родительский div с нашими стилями
    <div className='containerStyles'>
      <div id="position-size-calculator-71025" className='CalculatorWidget widgetLeft'></div>
      {/* Убираем старый отступ, так как теперь за него отвечает `gap` в `containerStyles` */}
      <div id="profit-calculator-839324" className='CalculatorWidget widgetRight'></div>
    </div>
  );
};

export default ForexCalculators;