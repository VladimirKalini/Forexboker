import React, { useState, useEffect, useRef } from 'react';
import '../../App.css';
import { useLang } from '../../components/LangContext';

import BlueBlock from '../../components/BlueBlock';
import FooterImage from '../../components/FooterImage';

import HeaderCareer from '../../media/HeaderCareer.png'; 
import PeopleIcon from '../../media/PeopleIcon.png';
import MessageIcon from '../../media/MessageIcon.png';
import GroupIcon from '../../media/GroupIcon.png';
import HandIcon from '../../media/HandIcon.png';
import BuildIcon from '../../media/BuildIcon.png';

import companyLogo from '../../media/BallIcon.png';
import locationIcon from '../../media/GeoIcon.png';
import FooterPhoto from '../../media/FooterImage.png';

import StarIcon from '../../media/StarIcon.png'


const statsData = [
  {
    id: 'students',
    iconSrc: PeopleIcon,
    mainText: '67 000+',
    descRu: 'учеников по всему миру',
    descEn: 'students worldwide'
  },
  {
    id: 'experience',
    iconSrc: MessageIcon,
    mainText: '10+',
    descRu: 'лет опыта реальной торговли',
    descEn: 'years of real trading experience'
  },
  {
    id: 'team',
    iconSrc: GroupIcon,
    mainText: '400+',
    descRu: 'профессионалов в команде',
    descEn: 'professionals on the team'
  },
  {
    id: 'support',
    iconSrc: HandIcon,
    mainText: '24/7',
    descRu: 'поддержка',
    descEn: 'support'
  },
  {
    id: 'material',
    iconSrc: BuildIcon,
    mainText: '60+',
    descRu: 'часов структурированного материала',
    descEn: 'hours of structured material'
  }
];

const vacanciesData = [
    { id: 1, title: 'Business Analyst', location: 'Cyprus, Ypsonas (Hybrid)' },
    { id: 2, title: 'Cleaner', location: 'Cyprus, Ypsonas' },
    { id: 3, title: 'Product Manager (Partners Portal)', location: 'Cyprus, Ypsonas' },
    { id: 4, title: 'Project Manager', location: 'Cyprus, Ypsonas (Hybrid)' },
    { id: 5, title: 'Project Manager', location: 'Cyprus, Ypsonas (Hybrid)' },
    { id: 6, title: 'QA Engineer (Backend)', location: 'Cyprus, Ypsonas (Hybrid)' },
    { id: 7, 'title': 'Security Officer', location: 'Cyprus, Ypsonas' },
    { id: 8, title: 'Senior Java Developer', location: 'Cyprus, Ypsonas (Hybrid)' },
    { id: 9, title: 'Senior Node.js Developer (Payments)', location: 'Cyprus, Ypsonas (Hybrid)' },
    { id: 10, title: 'Senior Node.js Developer (Payments)', location: 'Cyprus, Ypsonas (Hybrid)' },
    { id: 11, title: 'Senior Node.js Developer (Payments)', location: 'Cyprus, Ypsonas (Hybrid)' },
    { id: 12, title: 'Senior Node.js Developer (Payments)', location: 'Cyprus, Ypsonas (Hybrid)' },
    { id: 13, title: 'Senior Node.js Developer (Payments)', location: 'Cyprus, Ypsonas (Hybrid)' },
    { id: 14, title: 'Senior Node.js Developer (Payments)', location: 'Cyprus, Ypsonas (Hybrid)' },
    { id: 15, title: 'Senior Node.js Developer (Payments)', location: 'Cyprus, Ypsonas (Hybrid)' },
  ];
  const leftColumnData = [
    { id: 1, textRu: 'Конкурентный пакет оплаты труда', textEn: 'Competitive salary package' },
    { id: 2, textRu: 'Бесплатная еда и напитки в собственном кафетерии', textEn: 'Free food and drinks in our own cafeteria' },
    { id: 3, textRu: 'Медицинская страховка', textEn: 'Medical insurance' },
    { id: 4, textRu: 'Дисконтные карты на ряд продуктов и услуг', textEn: 'Discount cards for a range of products and services' }
  ];
  
  const rightColumnData = [
    { id: 1, textRu: 'Постоянная поддержка в обучении и тренировке', textEn: 'Continuous support in learning and training' },
    { id: 2, textRu: 'Пакет услуг по переезду, при необходимости', textEn: 'Relocation package, if necessary' },
    { id: 3, textRu: 'Свой фитнес-зал с персональным тренером', textEn: 'Our own gym with a personal trainer' },
    { id: 4, textRu: 'Резервный фонд', textEn: 'Reserve fund' }
  ];
  
export default function Career() {
  const { lang } = useLang();
  const [isVisible, setIsVisible] = useState(false);
  const topPaneRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = topPaneRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <>
    <section className="exp-section">
      <div 
        className="exp-top-pane" 
        style={{ backgroundImage: `url(${HeaderCareer})` }}
        ref={topPaneRef}
      >
        <div className="exp-overlay"></div>
        <div className={`exp-text-content ${isVisible ? 'is-visible' : ''}`}>
          <h1 className="exp-title">
            {lang === 'ru' ? 'Работа с экспертами,' : 'Work with experts,'}
            <br />
            {lang === 'ru' ? 'рост с лидерами' : 'grow with leaders'}
            <span className="exp-title-icon"></span>
          </h1>
          <p className="exp-description">
            {lang === 'ru'
              ? 'У нас ты не просто сотрудник — ты часть команды, которая каждый день делает рынок понятнее для других.'
              : 'With us, you are not just an employee — you are part of a team that makes the market more understandable for others every day.'
            }
          </p>
        </div>
      </div>

      <div className="exp-bottom-pane">
        <div className="exp-stats-grid">
          {statsData.map(stat => (
            <div key={stat.id} className="exp-stat-item">
              <div className="exp-stat-icon">
                <img src={stat.iconSrc} alt={lang === 'ru' ? stat.descRu : stat.descEn} />
              </div>
              <div className="exp-stat-main">{stat.mainText}</div>
              <div className="exp-stat-desc">{lang === 'ru' ? stat.descRu : stat.descEn}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <BlueBlock
        overrideTexts={{
          title: {
            ru: 'Стань частью команды, которая обучает миру трейдинг',
            en: "Become part of a team that teaches the world of trading"
          },
          description: {
            ru: 'Мы не просто работаем — мы делаем трейдинг доступным и понятным для тысяч людей. Присоединяйся.',
            en: "We don't just work - we make trading accessible and understandable for thousands of people. Join us."
          },
          description2: {
            ru: '',
            en: ''
          },
          description3: {
            ru: '',
            en: ''
          },
          bgText: {
            ru: 'FXBroker FXBroker FXBroker FXBroker',
            en: 'FXBroker FXBroker FXBroker FXBroker'
          }
        }}
      />
      <section className="vacancies-section">
      <div className="vacancies-header">
        <h2 className="vacancies-title">
          {lang === 'ru' ? 'Актуальные вакансии' : 'Current Vacancies'}
        </h2>
        <div className="vacancies-title-line"></div>
      </div>
      <div className="vacancies-grid">
        {vacanciesData.map(job => (
          <div key={job.id} className="vacancy-card">
            <div className="vacancy-icon-wrapper">
                <img src={companyLogo} alt="Company Logo"/>
            </div>
            <div className="vacancy-details">
              <h3 className="vacancy-title">{job.title}</h3>
              <p className="vacancy-location">
                <img src={locationIcon} alt="Location Pin"/>
                <span>{job.location}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className="bb-section">
      <div className="bb-container">
        <h2 className="bb-title">
          {lang === 'ru' ? 'Что мы предлагаем' : 'What we offer'}
        </h2>
        <div className="bb-grid">
          <ul className="bb-list">
            {leftColumnData.map(item => (
              <li key={item.id}>
                <img src={StarIcon} alt="star" className="bb-icon" />
                <span>{lang === 'ru' ? item.textRu : item.textEn}</span>
              </li>
            ))}
          </ul>
          <ul className="bb-list">
            {rightColumnData.map(item => (
              <li key={item.id}>
                <img src={StarIcon} alt="star" className="bb-icon" />
                <span>{lang === 'ru' ? item.textRu : item.textEn}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    <FooterImage 
      overlayClassName="bg-black"
      className="bg-black"
      backgroundSrc={FooterPhoto}
      textRu="Развивайся в окружении профессионалов. Здесь твои идеи находят применение, а талант — признание."
      textEn="Develop in an environment of professionals. This is where your ideas are applied and your talent is recognized."
      btnTextRu="Открыть счет"
      btnTextEn="Open an account"
      btnLink="/register"
      />
    </>
  );
};