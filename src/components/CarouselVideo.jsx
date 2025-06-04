// CarouselVideo.jsx
import React from 'react';
import './style-components.css';
import video1 from '../media/video1.mp4';
import video2 from '../media/video2.mp4';
import video3 from '../media/video3.mp4';
import img   from '../media/img.jpg';
import img1   from '../media/img5.jpg';
import img2   from '../media/img2.jpg';
import img3   from '../media/img3.jpg';
import img4   from '../media/img4.jpg';

const slides = [
  { type: 'video', src: video1, title: 'Основы инвестирования' },
  { type: 'img', src: img,   title: 'Криптовалюта для начинающих' },
  { type: 'img1', src: img1,   title: 'Tech insights' },
  { type: 'video', src: video2, title: 'Технический анализ' },
  { type: 'img2', src: img2,   title: 'Stock break' },
  { type: 'video', src: video3, title: 'Создаем портфель' },
  { type: 'img3', src: img3,   title: 'Стратегии инвестирования в акции' },
  { type: 'img4', src: img4,   title: 'Инструкции FXBroker' },
];

export default function CarouselVideo() {
 
  const trackSlides = [...slides, ...slides, ...slides];

  return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        {trackSlides.map((slide, idx) => (
          <div className="carousel-slide" key={idx}>
            {slide.type === 'video' ? (
              <video
                src={slide.src}
                muted
                loop
                autoPlay
                playsInline
                className="carousel-media"
              />
            ) : (
              <img src={slide.src} alt={slide.title} className="carousel-media" />
            )}
            <div className="carousel-title">{slide.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
