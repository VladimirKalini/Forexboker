import { Link } from 'react-router-dom';
import bgVideo from '../media/bg-video.webm';
import '../App.css';

import { useLang } from '../components/LangContext';

import TradingWidgetAll from '../components/Widget/TradingWidgetAll.jsx';
import ScrollHand from '../components/ScrollHand.jsx';
import CarouselVideo from '../components/CarouselVideo.jsx';
import StringBlock from '../components/StringBlock.jsx';
import Slider from '../components/Slider.jsx';
import WhyBlock from '../components/WhyBlock.jsx';
import MarketState from '../components/MarketState.jsx';

import Sponsor from '../media/sponsor.webm'
import Benefit from '../media/benefit.png'
// import Price from '../media/Price.png'
// import PromoImg from '../media/PromoImg.png'
import Light from '../media/light.png'
import Speed from '../media/speed.png'
import Congrat from '../media/congrat.png'
import MclarenLogo from '../media/MclarenLogo.png'
import Car from '../media/Car.webp'
import MonacoLogo from '../media/MonacoLogo.png'
import Ship from '../media/Ship.png'
import PhoneGif from '../media/phone.gif'
// import Label from '../media/red_label.png'

const items = [
  {
    ru: 'Предоставление лучших цен Бид и Аск, благодаря глубокой ликвидности',
    en: 'Providing the best Bid and Ask prices thanks to deep liquidity',
  },
  {
    ru: 'Без вмешательства дилинга',
    en: 'No dealing desk intervention',
  },
  {
    ru: 'Минимальная задержка поступления котировок',
    en: 'Minimal quote latency',
  },
  {
    ru: 'Конкурентные спреды, без скрытых комиссий',
    en: 'Competitive spreads with no hidden fees',
  },
  {
    ru: 'Ультра-быстрое исполнение ордеров менее чем 3a < 14ms',
    en: 'Ultra-fast order execution under 3a < 14ms',
  },
];


export default function Home() {
  const { lang } = useLang();

  return (
    <main className="main-content">
      <section className="video-container">
        <video src={bgVideo} autoPlay muted loop className="bg-video"/>
        <div className="home-hero-content">
          <h1 className="home-hero-title">
            {lang === 'ru' ? 'Самые выгодные торговые условия по всем парам' : 'The most favorable trading conditions for all pairs'}
          </h1>
          <p className="home-hero-subtitle">
            {lang === 'ru' ? 'Откройте счёт сейчас' : 'Open an account now'}
          </p>
          <Link to="/register" className="btn-primary">
            {lang === 'ru' ? 'Открыть счёт' : 'Open an account'}
          </Link>
        </div>
        <div className='trading-widget-container'>
          <TradingWidgetAll />
        </div>
      </section>
      
      {/* <StringBlock /> */}
      <WhyBlock />
     
    {/* <CarouselVideo /> */}

     <section className="platform-section">
      <div className="platform-content">
        <div className="platform-left">
          <h2>
            {lang === 'ru' ? 'Откройте для себя трейдинг на современных платформах' 
            : 'Discover trading on modern platforms'}
          </h2>
          <p>
            {lang === 'ru' ? 'Команда FXBroker понимает, что у разных клиентов – разные потребности.' 
            : 'The FXBroker team understands that different clients have different needs.'}
            <br />
            {lang === 'ru' ? 'Поэтому мы предлагаем гибкие типы торговых счетов и широкий выбор надёжных многофункциональных платформ.'
             : "That's why we offer flexible trading account types and a wide range of reliable, feature-rich platforms."}
          </p>
          <div className="platform-labels">
            <p className="highlight">MOBILE TRADER</p>
            <p>WEB TRADER</p>
            <p>PC TRADER</p>
          </div>
        </div>
        <div className="platform-img">
          <img
            src={PhoneGif}
            alt="Mobile trader preview"
            width="275px"
            height="450px"
          />
        </div>
        <div className="platform-right">
          <h3>
            {lang === 'ru' ? 'Торгуйте с мобильного' : 'Trade from your mobile'}
          </h3>
          <p>
            {lang === 'ru' ? 'Будьте в курсе самых свежих новостей на валютных рынках и важных финансовых событий.' 
            : 'Stay up to date with the latest news on the currency markets and important financial events.'}
          </p>
          <ul>
            <li>
              {lang === 'ru' ? 'Торгуйте на мировых рынках' : 'Trade on global markets'}
            </li>
            <li>
              {lang === 'ru' ? 'Управляйте торговыми счетами' : 'Manage trading accounts'}
            </li>
            <li>
              {lang === 'ru' ? 'Удобные способы ввода и вывода средства' : 'Convenient methods of depositing and withdrawing funds'}
            </li>
          </ul>
          <p>
            {lang === 'ru' ? 'Доступно для IOS и Android' : 'Available for IOS and Android'}
          </p>
        </div>
      </div>
    </section>

<Slider />
    {/* <section>
        <div className="fx-container-price">
          <div className="content_price">
            <div className="headline">
              <div className="headline-line">
                {lang === 'ru' ? 'Сумма — минимальная.' : 'The amount is minimal.'}
              </div>
              <div className="headline-line">
                {lang === 'ru' ? 'Открыть счёт' : 'The possibilities are endless.'}
              </div>
            </div>
            <div className="description">
              {lang === 'ru' ? 'Ваш старт в мире трейдинга не требует больших вложений, чтобы открыть счёт и получить доступ к полноценному обучению, аналитике и поддержке экспертов.' 
              : 'Your start in the world of trading does not require large investments to open an account and gain access to full training, analytics and expert support.'}
            </div>
            <div className="deposit-section">
              <div className="deposit-label">
                {lang === 'ru' ? 'Депозит всего' : 'Deposit only'}
              </div>
              <div className="price">
                <img src={Price} className="price-img"  alt="Price"/>
              </div>
            </div>
           <Link to="/register">
              <button className="apply-btn">
                 {lang === 'ru' ? 'Оставить заявку' : 'Leave a request'}
              </button>
           </Link>   
          </div>
          <div className="image-section">
            <img src={PromoImg} alt="Woman with phone" className="promo-image" />
          </div>
        </div>
      </section> */}
      <ScrollHand />
       <section className="sponsor-section">
      <div className="sponsor-container">
        <video 
          autoPlay 
          loop 
          muted
          playsInline
          preload="auto"
          className="sponsor-bg-video"
        >
          <source src={Sponsor} type="video/mp4" />
          Ваш браузер не поддерживает тег video.
        </video>
        <div className="sponsor-content">
          <h2 className="sponsor-title">
            {lang === 'ru' ? 'Наше Партнёрство с McLaren' : 'Our Partnership with McLaren'}
          </h2>
          <p className="sponsor-text">
            {lang === 'ru' ? 'FXBroker гордится статусом официального партнёра легендарной команды McLaren в чемпионате Формулы 1.Это партнёрство — не просто логотип на болиде.' 
            : 'FXBroker is proud to be the official partner of the legendary McLaren team in the Formula 1 championship. This partnership is not just a logo on a car.'}
          </p>
          <p className="sponsor-text">
            {lang === 'ru' ? 'Это объединение двух брендов, стремящихся к передовому мышлению, техническому совершенству и амбициозным целям.'
             : 'It is a union of two brands committed to forward thinking, technical excellence and ambitious goals.'}
          </p>
          <h3 className="sponsor-subtitle">
            {lang === 'ru' ? 'Больше, чем просто спонсорство' : 'More than just sponsorship'}
          </h3>
          <ul className="sponsor-list">
            <li className="sponsor-item">
              <img src={Light} width="30" height="30" alt="Инновации" />
                {lang === 'ru' ? 'Инновации.' : 'Innovation.'}
            </li>
            <li className="sponsor-item">
              <img src={Speed} width="30" height="30" alt="Скорость" />
                {lang === 'ru' ? 'Скорость.' : 'Speed.'}
            </li>
            <li className="sponsor-item">
              <img src={Congrat} width="30" height="30" alt="Лидерство" />
                {lang === 'ru' ? 'Лидерство.' : 'Leadership.'}
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section className="sponsor-logos">
      <div className="sponsor-logos__wrapper">
        <div>
          <Link to="#">
            <img
              src={MclarenLogo}
              alt="McLaren Logo"
            />
          </Link>
        </div>
        <div>
          <Link to="#">
            <img
              src={Car}
              width="300px"
              alt="McLaren Car"
            />
          </Link>
        </div>
        <div>
          <Link to="#">
            <img
              src={MonacoLogo}
              width="400px"
              alt="Monaco Logo"
            />
          </Link>
        </div>
        <div>
          <Link to="#" className="sponsor-logos__ship">
            <img
              src={Ship}
              alt="Ship"
            />
          </Link>
        </div>
      </div>
    </section>
  </main>
  );
}





