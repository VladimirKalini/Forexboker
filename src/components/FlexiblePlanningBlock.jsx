import React, { useEffect, useRef } from 'react';
import './style-components.css';

export default function FlexiblePlanningBlock() {
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
        observer.unobserve(blockRef.current);
      }
    };
  }, []);

  return (
    <div className="flexible-planning-section" ref={blockRef}>
      <div className="flexible-planning-content fade-in">
        <h2 className="flexible-planning-title">
          Гибкий функционал
          <br />
          для точного
          <br />
          планирования <span className="red-dot">■</span>
        </h2>
      </div>
      <div className="fxbroker-calculator-content fade-in">
        <h2 className="fxbroker-calculator-title">
          Калькулятор FXBroker
          <br />
          учитывает все важные детали:
          <br />
          от спреда и свопа до уровня
          <br />
          безубыточности.
        </h2>
      </div>
      <div className="bottom-blocks">
        <div className="bottom-block first-block fade-in">
          <p>
          Вы можете быстро пересчитать параметры, если изменились рыночные условия или вы хотите протестировать другую стратегию. Особенно полезен этот инструмент в периоды высокой волатильности, когда каждая цифра имеет значение.
          </p>
        </div>
        <div className="bottom-block second-block fade-in">
          <p>
          Кроме того, калькулятор отлично подойдёт тем, кто только начинает изучать трейдинг — его можно использовать как учебное пособие. Пошаговые подсказки и понятный интерфейс позволяют быстро разобраться даже без опыта. На занятиях в нашей Школе по трейдингу и криптовалюте мы активно используем этот инструмент в рамках обучения.
          </p>
        </div>
      </div>
    </div>
  );
}