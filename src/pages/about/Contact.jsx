import React, { useState } from 'react';
import '../../App.css';
import { useLang } from '../../components/LangContext';

import PhoneIcon from '../../media/PhoneIcon.png';
import EmailIcon from '../../media/EmailIcon.png';
import TelegramIcon from '../../media/TelegramIcon.png';
import LocationIcon from '../../media/LocationIcon.png';

import flagUk from '../../media/FlagEng.png';
import flagMonaco from '../../media/FlagMonaco.png';
import flagRussia from '../../media/FlagRuss.png';
import flagUae from '../../media/FlagUAE.png';

import formImage from '../../media/FormImage.png';

import featureIconImage from '../../media/your-icon-image.png';

const texts = {
  header: {
    ru: 'Если у вас возникли вопросы об обучении, программах, регистрации или вы хотите получить консультацию перед стартом — мы всегда на связи.',
    en: 'If you have questions about training, programs, registration, or want a consultation before starting — we are always here to help.'
  },
  supportBanner: {
    ru: 'Нужна помощь? Посетите наш Раздел поддержки',
    en: 'Need help? Visit our Support Section'
  }
};

const blueCardsData = [
  { 
    icon: PhoneIcon, 
    icon2: LocationIcon,
    line1: { ru: '+7 (495) 123-45-67', en: '+7 (495) 123-45-67' }, 
    line2: { ru: 'Москва, ул. Финансовая, д. 7, офис 412', en: 'Moscow, Finansovaya st., 7, office 412' }
  },
  { 
    icon: EmailIcon, 
    icon2: EmailIcon,
    line1: { ru: 'info@eduson.space', en: 'info@eduson.space' }, 
    line2: { ru: 'Поддержка студентов: support@eduson.space', en: 'Student support: support@eduson.space' }
  },
  { 
    icon: TelegramIcon, 
    icon2: PhoneIcon,
    line1: { ru: '@eduson_support', en: '@eduson_support' }, 
    line2: { ru: '+7 (999) 555-44-3', en: '+7 (999) 555-44-3' }
  }
];

const locationsData = [
  {
    id: 'uk',
    flag: flagUk,
    country: { ru: 'Великобритания', en: 'United Kingdom' },
    company: { ru: 'FxPro UK Ltd', en: 'FxPro UK Ltd' },
    details: [
      { type: 'email', value: 'info@fxpro.com' },
      { type: 'address', label: { ru: 'Штаб-квартира FxPro UK:', en: 'FxPro UK Headquarters:' }, value: '13-14 Basinghall str., Лондон, EC2V4BQ, Великобритания' }
    ]
  },
  {
    id: 'reception',
    flag: null,
    country: { ru: 'Приемная', en: 'Reception' },
    company: { ru: '', en: '' },
    details: [
      { type: 'phone', value: '+44 (0) 20 7776 9720', note: { ru: '07:30-16:30 GMT', en: '07:30-16:30 GMT' } },
      { type: 'phone', label: { ru: 'Отдел продаж:', en: 'Sales Department:' }, value: '+44 (0) 203 151 5550' }
    ]
  },
  {
    id: 'monaco',
    flag: flagMonaco,
    country: { ru: 'Монако', en: 'Monaco' },
    company: { ru: 'Административный офис', en: 'Administrative Office' },
    details: [
      { type: 'phone', label: { ru: 'Tel.', en: 'Tel.' }, value: '+44 (0) 203 151 5550' }
    ]
  },
  {
    id: 'moscow',
    flag: flagRussia,
    country: { ru: 'Москва', en: 'Moscow' },
    company: { ru: 'FxPro Global Markets Ltd', en: 'FxPro Global Markets Ltd' },
    details: [
      { type: 'phone', label: { ru: 'Tel.', en: 'Tel.' }, value: '+7 242 603 2222' }
    ]
  },
  {
    id: 'uae',
    flag: flagUae,
    country: { ru: 'ОАЭ', en: 'UAE' },
    company: { ru: 'Представительство', en: 'Representative Office' },
    details: [
      { type: 'phone', label: { ru: 'Tel.', en: 'Tel.' }, value: '+971 (0) 4 4243023' }
    ]
  }
];
const featuresData = [
    {
      id: 1,
      title: '26 лет в индустрии — стабильность, проверенная временем',
      text: 'Наша школа обучает трейдингу с 1998 года. Мы не стартап и не временный проект — мы построили систему, которая выдержала все кризисы, тренды и турбулентности финансовых рынков.'
    },
    {
      id: 2,
      title: 'Учат только практикующие трейдеры',
      text: 'У нас нет теоретиков — все преподаватели торгуют каждый день и обучают только тому, что применяют сами. Вы учитесь у тех, кто зарабатывает на рынке, а не просто рассказывает о нём.'
    },
    {
      id: 3,
      title: 'Мы не даём сигналы — мы обучаем думать',
      text: 'Наши студенты не копируют чужие сделки — они понимают рынок, строят стратегии и управляют рисками. Мы обучаем мышлению, а не механике.'
    },
    {
      id: 4,
      title: '100 000+ студентов по всему миру',
      text: 'Нам доверяют трейдеры из Европы, Азии, СНГ и Ближнего Востока. У нас студенты из 70+ стран, и каждый получает доступ к обучению на своём языке.'
    },
    {
      id: 5,
      title: 'Обучение построено как профессиональная программа',
      text: 'Наши курсы — это не набор разрозненных видео. Это пошаговая система с практикой, поддержкой и контролем, как в серьёзном университете. Вы проходите путь от нуля до первых реальных результатов.'
    },
    {
      id: 6,
      title: 'Индивидуальное сопровождение и живая поддержка',
      text: 'У каждого студента — свой куратор, доступ к онлайн-вебинарам, чату с экспертами и регулярной обратной связи. Мы всегда рядом, пока вы растёте как трейдер.'
    }
  ];

const formTexts = {
  title: { ru: 'Остались вопросы?', en: 'Have questions?' },
  subtitle: { ru: 'Заполните форму — и мы свяжемся с вами', en: 'Fill out the form — and we will contact you' },
  fullNamePlaceholder: { ru: 'Имя Фамилия', en: 'Full Name' },
  emailPlaceholder: { ru: 'Почта', en: 'Email' },
  phonePlaceholder: { ru: 'Номер', en: 'Phone Number' },
  messagePlaceholder: { ru: 'Сообщение, которое хочет отправить пользователь', en: 'The message the user wants to send' },
  privacyPolicy: { ru: 'Я принимаю Политику конфиденциальности', en: 'I accept the Privacy Policy' },
  privacyLink: { ru: 'Политику конфиденциальности', en: 'Privacy Policy' },
  privacySubtext: { ru: 'Я разрешаю обработку моих персональных данных в целях, указанных в политике конфиденциальности.', en: 'I consent to the processing of my personal data for the purposes specified in the privacy policy.'},
  submitButton: { ru: 'Отправить сообщение', en: 'Send Message' },
  alertPrivacy: { ru: 'Пожалуйста, примите Политику конфиденциальности.', en: 'Please accept the Privacy Policy.' },
  alertSent: { ru: 'Сообщение отправлено!', en: 'Message sent!' },
};

const LocationCardContent = ({ loc, lang }) => (
  <>
    <div className="location-card__header">
      {loc.flag && <img src={loc.flag} alt={`${loc.country[lang]} flag`} className="location-card__flag" />}
      <div className="location-card__title-group">
        <h3 className="location-card__country">{loc.country[lang]}</h3>
        {loc.company[lang] && <p className="location-card__company">{loc.company[lang]}</p>}
      </div>
    </div>
    <div className="location-card__details">
      {loc.details.map((detail, i) => (
        <div key={i} className={`detail-item detail-item--${detail.type}`}>
          {detail.label && <span className="detail-item__label">{detail.label[lang]}</span>}
          <span className="detail-item__value">{detail.value}</span>
          {detail.note && <span className="detail-item__note">{detail.note[lang]}</span>}
        </div>
      ))}
    </div>
  </>
);

const ContactForm = ({ lang }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    privacyAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.privacyAccepted) {
      alert(formTexts.alertPrivacy[lang]);
      return;
    }
    console.log('Отправляемые данные:', formData);
    alert(formTexts.alertSent[lang]);
  };
  

  return (
    <div className="contact-form-block">
      <div className="form-container">
        <h2 className="form-title">{formTexts.title[lang]}</h2>
        <p className="form-subtitle">{formTexts.subtitle[lang]}</p>
        
        <form onSubmit={handleSubmit}>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder={formTexts.fullNamePlaceholder[lang]} className="form-input" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={formTexts.emailPlaceholder[lang]} className="form-input" required />
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder={formTexts.phonePlaceholder[lang]} className="form-input" required />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder={formTexts.messagePlaceholder[lang]} className="form-textarea" rows="4" required ></textarea>

          <div className="privacy-policy">
            <input type="checkbox" id="privacy" name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleChange} className="privacy-checkbox" />
            <label htmlFor="privacy" className="privacy-label">
              {formTexts.privacyPolicy[lang].split(formTexts.privacyLink[lang])[0]}
              <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">{formTexts.privacyLink[lang]}</a>*
            </label>
            <p className="privacy-subtext">{formTexts.privacySubtext[lang]}</p>
          </div>

          <button type="submit" className="submit-button">{formTexts.submitButton[lang]}</button>
        </form>
      </div>
      <div className="image-container">
        <img src={formImage} alt="Decorative cube" className="form-image" />
      </div>
    </div>
  );
};


export default function Contact() {
  const { lang } = useLang();
  const [ukLocation, receptionLocation, ...otherLocations] = locationsData;
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.253942743785!2d32.946283575590776!3d34.72399287291134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e733b13577968f%3A0x3f9c5b2a57d85add!2sFxPro%20Group%20Ltd!5e0!3m2!1sru!2sua!4v1751031475088!5m2!1sru!2sua";

  return (
    <>
    <main className='contact-main'>
      <div className="contact-page">
        <div className="contact-info-block">
          <header className="contact-header">
            <h1 className="macro-logo">
              <span className="macro-logo--accent">FX</span>Broker
            </h1>
            <p className="contact-header__text">{texts.header[lang]}</p>
            <div className="contact-header__cards">
              {blueCardsData.map((card, index) => (
                <div key={index} className="blue-card">
                  <div className="blue-card__line">
                    <img src={card.icon} alt="" className="blue-card__icon" />
                    <span>{card.line1[lang]}</span>
                  </div>
                  <div className="blue-card__line">
                    <img src={card.icon2} alt="" className="blue-card__icon" />
                    <span>{card.line2[lang]}</span>
                  </div>
                </div>
              ))}
            </div>
          </header>
          
          <section className="locations">
            <div className="location-card location-card--combined">
              <div className="combined-card__column">
                <LocationCardContent loc={ukLocation} lang={lang} />
              </div>
              <div className="combined-card__column">
                <LocationCardContent loc={receptionLocation} lang={lang} />
              </div>
            </div>
            {otherLocations.map((loc) => (
              <div key={loc.id} className="location-card">
                <LocationCardContent loc={loc} lang={lang} />
              </div>
            ))}
          </section>
        </div> 
        <footer className="support-banner">{texts.supportBanner[lang]}</footer>
        <ContactForm lang={lang} />

        
      </div>
      <div className="approach-block">
      <div className="approach-text">
        <h2 className="approach-title">
        {lang === 'ru' ? 'Профессиональный подход' 
                       : "Professional approach"}
        </h2>
        <p className="approach-subtitle">
        {lang === 'ru' ? 'Мы создаём осознанных трейдеров, а не подписчиков «сигналов».' 
                       : "We create informed traders, not subscribers to “signals”."}
        </p>
        <ul className="approach-list">
          <li className="approach-list-item">
          {lang === 'ru' ? 'Вместо «быстрого заработка» — фундаментальные знания.' 
                       : "Instead of a “quick buck,” it's fundamental knowledge."}
          </li>
          <li className="approach-list-item">
          {lang === 'ru' ? 'Вместо хаоса — чёткая торговая система.' 
                       : "Instead of chaos, a clear trading system."}
          </li>
          <li className="approach-list-item">
          {lang === 'ru' ? 'Вместо страха — контроль над эмоциями и понимание процесса.' 
                       : "Instead of fear, it's about controlling your emotions and understanding the process."}
          </li>
        </ul>
        <p className="approach-conclusion">
        {lang === 'ru' ? 'Наша задача — сформировать ваше мышление как у настоящего трейдера, а не дать готовую «волшебную» кнопку.' 
                       : "Our task is to shape your thinking like a real trader, not to give you a ready-made “magic” button."}
        </p>
      </div>

      <div className="approach-map">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Карта офиса"
        ></iframe>
      </div>
    </div>

    <section className="fx-features-section">
      <header className="fx-features-header">
        <h2 className="fx-features-header__title">
        {lang === 'ru' ? 'Международная онлайн-школа трейдинга с 26-летним опытом' 
                       : "International online trading school with 26 years of experience"}
        </h2>
        <p className="fx-features-header__description">
        {lang === 'ru' ? 'Мы обучаем осознанной торговле на рынке Forex, даём проверенные знания, развиваем мышление трейдера и помогаем выйти на стабильный результат. Мы не даём сигналы. Мы обучаем видеть рынок самостоятельно.' 
                       : "We teach informed Forex trading, give proven knowledge, develop trader's thinking and help to achieve stable results. We do not give signals. We teach you to see the market on your own."}
        </p>
        <p className="fx-features-header__motto">
        {lang === 'ru' ? 'Мы — за честность, за системность и за реальные навыки, а не пустые обещания.' 
                       : "We are for honesty, for being systematic, and for real skills, not empty promises."}
        </p>
      </header>

      <div className="fx-features-grid">
        {featuresData.map(feature => (
          <div key={feature.id} className="fx-features-card">
            <div className="fx-features-card__icon"></div>
            <div className="fx-features-card__content">
              <h3 className="fx-features-card__title">{feature.title}</h3>
              <p className="fx-features-card__text">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </main>
    </>
  );
};