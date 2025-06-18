import React from 'react';
import { useLang } from './LangContext'; 

const PhoneHeader = ({ 
  overrideTexts,       
  backgroundImage,
  onButtonClick,
  buttonColor = 'red'
}) => {

  const { lang } = useLang();

  return (
    <section
      className="fundamentals-block"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        marginBottom: '50px'
      }}
    >
      <div className="fundamentals-block__overlay" />
      <div className="fundamentals-block__inner">
        <div className="fundamentals-block__content">
          <h2 className="fundamentals-block__title">
            {overrideTexts?.title?.[lang]}
            <span className="fundamentals-block__highlight">
              {overrideTexts?.highlightedTitle?.[lang]}
            </span>
          </h2>
          <p className="fundamentals-block__subtitle">
            {overrideTexts?.subtitle?.[lang]}
          </p>
          <button 
            className="fundamentals-block__button" 
            style={{ backgroundColor: buttonColor }}
            onClick={onButtonClick}
          >
            {overrideTexts?.buttonText?.[lang]}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhoneHeader;