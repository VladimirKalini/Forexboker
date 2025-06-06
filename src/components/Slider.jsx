import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from './LangContext';

import Price       from '../media/Price.png';
import PromoImg    from '../media/PromoImg.png';
import ButtonLeft  from '../media/ButtonLeft.png';
import ButtonRight from '../media/ButtonRight.png';
import './style-components.css';

export default function PriceSection() {
  const { lang } = useLang();
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);

  const slides = [
    {
      headline: [
        lang === 'ru'
          ? 'Сумма — минимальная. Возможности — безграничные.'
          : 'The amount is minimal. The possibilities are endless.'
      ],
      // Здесь используем JSX-фрагмент с <br/><br/> для отступа
      description:
        lang === 'ru' ? (
          <>
            Мы создали условия, при которых торговля становится логичным продолжением вашего финансового мышления.
            <br/><br/>
            Обучение, аналитика, торговые сигналы и постоянная поддержка — вы не остаетесь наедине с рынком.
          </>
        ) : (
          <>
            We have created conditions where trading becomes a logical continuation of your financial thinking.
            <br/><br/>
            Training, analytics, trading signals and constant support – you are not left alone with the market.
          </>
        )
    },
    {
      headline: [
        lang === 'ru'
          ? 'Не нужен большой капитал, чтобы начать умно.'
          : 'No large capital required to start smart.',
      ],
      description:
        lang === 'ru' ? (
          <>
            С рублёвым счётом вы получаете доступ к профессиональной платформе, экспертной аналитике и стратегиям, которые работают.
            <br/><br/>
            Открытие счёта — за считанные минуты. Минимальный порог входа, простая регистрация и прозрачные условия позволяют вам без стресса сделать первый шаг.
          </>
        ) : (
          <>
            With a ruble account, you get access to a professional platform, expert analytics, and strategies that work.
            <br/><br/>
            Opening an account takes just a few minutes. The minimum entry threshold, simple registration, and transparent conditions allow you to take the first step without stress.
          </>
        )
    },

    {
      headline: [
        lang === 'ru'
          ? 'Маленький шаг для трейдера — большой шаг к финансовой независимости.'
          : 'A small step for a trader is a big step towards financial independence.',
      ],
      description:
        lang === 'ru' ? (
          <>
            С нами вы начинаете с минимальных вложений, но получаете весь набор инструментов, который используют профессионалы.Каждый шаг сопровождается подробной аналитикой, консультациями с экспертами и обучающими материалами.Вы не просто торгуете — вы растёте как инвестор.
            <br/><br/>
           Вы не просто торгуете — вы растёте как инвестор.
          </>
        ) : (
          <>
            With us, you start with minimal investment, but get the full set of tools that professionals use. Each step is accompanied by detailed analytics, consultations with experts and training materials. You don't just trade - you grow as an investor.
            <br/><br/>
            You're not just trading - you're growing as an investor.
          </>
        )
    },

     {
      headline: [
        lang === 'ru'
          ? 'Зарабатывать на рынке — проще, чем кажется.'
          : 'Making money on the market is easier than it seems.',
      ],
      description:
        lang === 'ru' ? (
          <>
            Сегодня, чтобы начать зарабатывать на валютной торговле, не нужно обладать крупным капиталом. Всё, что вам действительно нужно — это надёжный партнёр, честные условия и понятная точка входа.С рублевыми торговыми парами вы получаете выгодные спреды, отсутствие скрытых комиссий и доступ к ликвидным инструментам, которые идеально подходят как для новичков, так и для опытных трейдеров.
          </>
        ) : (
          <>
            Today, to start making money on currency trading, you don't need to have a large capital. All you really need is a reliable partner, fair conditions, and a clear entry point. With ruble trading pairs, you get favorable spreads, no hidden fees, and access to liquid instruments that are ideal for both beginners and experienced traders.
          </>
        )
    }
    
    // …можно добавить ещё слайдов…
  ];

  

  const goTo = idx => {
    const clamped = Math.max(0, Math.min(idx, slides.length - 1));
    setCurrent(clamped);
    sliderRef.current.scrollTo({
      left: clamped * sliderRef.current.clientWidth,
      behavior: 'smooth'
    });
  };

useEffect(() => {
    const onResize = () => {
      sliderRef.current.scrollTo({
        left: current * sliderRef.current.clientWidth
      });
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [current]);

  // сброс при смене языка
  useEffect(() => {
    goTo(0);
  }, [lang]);

  // **авто-слайдер**
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => {
        const next = (prev + 1) % slides.length;
        sliderRef.current.scrollTo({
          left: next * sliderRef.current.clientWidth,
          behavior: 'smooth'
        });
        return next;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="price-section">
      <div className="fx-container-price">
        <div className="content_price">

          <h1 className="fxbroker-title">
          <span className="fxbroker-title__fx">FX</span>
             Broker
            <span className="fxbroker-title__dot" />
             </h1>

          {/* СЛАЙДЕР заголовков + описания */}
          <div className="slider" ref={sliderRef}>
            {slides.map((slide, i) => (
              <div className="slide" key={i}>
                <div className="headline">
                  {slide.headline.map((line, j) => (
                    <div className="headline-line" key={j}>{line}</div>
                  ))}
                </div>
                <div className="description">{slide.description}</div>
              </div>
            ))}
          </div>

          <div className="deposit-section">
            <div className="deposit-label">
              {lang === 'ru' ? 'Депозит всего' : 'Deposit only'}
            </div>
            <div className="price-wrapper">
              <img src={Price} className="price-img" alt="Price" />

              <div className="nav-icons">
                <img src={ButtonLeft} alt="Previous" className={`nav-icon ${current === 0 ? 'disabled' : ''}`} onClick={() => current > 0 && goTo(current - 1)}/>
                <img src={ButtonRight} alt="Next" className={`nav-icon ${current === slides.length - 1 ? 'disabled' : ''}`}
                 onClick={() => current < slides.length - 1 && goTo(current + 1)}/>
              </div>
            </div>
          </div>

          <Link to="/register">
            <button className="apply-btn">
              {lang === 'ru' ? 'Оставить заявку' : 'Leave a request'}
            </button>
          </Link>

        </div>

        {/* Статичное изображение справа */}
        <div className="image-section">
          <img src={PromoImg} alt="Woman with phone" className="promo-image" />
        </div>
      </div>
    </section>
  );
}
