import './style-components.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { useLang } from './LangContext';

  export default function FooterImage({
  backgroundSrc,
  textRu,
  textEn,
  btnTextRu = 'Открыть счёт',
  btnTextEn = 'Open Account',
  btnLink = '/register'
})
{
     const { lang } = useLang();        
  return (
    <section
      className="econ-banner"
      style={{ backgroundImage: `url(${backgroundSrc})` }}
    >
      <div className="econ-banner__overlay" />
      <div className="econ-banner__content">
        <p className="econ-banner__text">
          {textRu && textEn
            ? (lang === 'ru' ? textRu : textEn)
            : null}
        </p>
        <Link to={btnLink} className="econ-banner__btn">
          {lang === 'ru' ? btnTextRu : btnTextEn}
        </Link>
      </div>
    </section>
  );
}