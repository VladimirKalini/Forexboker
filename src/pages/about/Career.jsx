import React, { useState, useEffect, useRef } from 'react';
import '../../App.css';
import HeaderCareer from '../../media/HeaderCareer.png'; 
import { useLang } from '../../components/LangContext';

import PeopleIcon from '../../media/PeopleIcon.png';
import MessageIcon from '../../media/MessageIcon.png';
import GroupIcon from '../../media/GroupIcon.png';
import HandIcon from '../../media/HandIcon.png';
import BuildIcon from '../../media/BuildIcon.png';

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
  );
};