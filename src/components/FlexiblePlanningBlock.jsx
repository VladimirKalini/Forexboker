import React, { useEffect, useRef } from 'react';
import './style-components.css';
import { useLang } from '../components/LangContext'; // Убедитесь, что путь верный

// Объект с текстами для обоих языков
const texts = {
  flexibleTitle: {
    ru: (
      <>
        Гибкий функционал
        <br />
        для точного
        <br />
        планирования <span className="red-dot">■</span>
      </>
    ),
    en: (
      <>
        Flexible functionality
        <br />
        for precise
        <br />
        planning <span className="red-dot">■</span>
      </>
    ),
  },
  calculatorTitle: {
    ru: (
      <>
        Калькулятор FXBroker
        <br />
        учитывает все важные детали:
        <br />
        от спреда и свопа до уровня
        <br />
        безубыточности.
      </>
    ),
    en: (
      <>
        The FXBroker calculator
        <br />
        considers all important details:
        <br />
        from spread and swap to the
        <br />
        break-even level.
      </>
    ),
  },
  firstParagraph: {
    ru: 'Вы можете быстро пересчитать параметры, если изменились рыночные условия или вы хотите протестировать другую стратегию. Особенно полезен этот инструмент в периоды высокой волатильности, когда каждая цифра имеет значение.',
    en: 'You can quickly recalculate parameters if market conditions change or you want to test another strategy. This tool is especially useful during periods of high volatility when every digit matters.',
  },
  secondParagraph: {
    ru: 'Кроме того, калькулятор отлично подойдёт тем, кто только начинает изучать трейдинг — его можно использовать как учебное пособие. Пошаговые подсказки и понятный интерфейс позволяют быстро разобраться даже без опыта. На занятиях в нашей Школе по трейдингу и криптовалюте мы активно используем этот инструмент в рамках обучения.',
    en: 'Additionally, the calculator is perfect for those who are just starting to learn trading—it can be used as a tutorial. Step-by-step hints and a clear interface allow you to quickly understand it even without experience. In our Trading and Cryptocurrency School, we actively use this tool as part of the curriculum.',
  },
};

export default function FlexiblePlanningBlock() {
  const { lang } = useLang(); // Получаем текущий язык
  const blockRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => {
      if (blockRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(blockRef.current);
      }
    };
  }, []);

  return (
    <div className="flexible-planning-section" ref={blockRef}>
      <div className="flexible-planning-content fade-in">
        <h2 className="flexible-planning-title">
          {texts.flexibleTitle[lang]}
        </h2>
      </div>
      <div className="fxbroker-calculator-content fade-in">
        <h2 className="fxbroker-calculator-title">
          {texts.calculatorTitle[lang]}
        </h2>
      </div>
      <div className="bottom-blocks">
        <div className="bottom-block first-block fade-in">
          <p>{texts.firstParagraph[lang]}</p>
        </div>
        <div className="bottom-block second-block fade-in">
          <p>{texts.secondParagraph[lang]}</p>
        </div>
      </div>
    </div>
  );
}