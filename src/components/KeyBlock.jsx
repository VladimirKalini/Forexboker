import React from 'react';
import './ResponsiveBlock.css';

export default function ResponsiveBlock({
  title,
  description,
  imageSrc,
  buttonText,
  onButtonClick,
}) {
  return (
    <div className="responsive-container">
      <div className="responsive-block">

        <div className="image-section">
          <img
            src={imageSrc}
            alt={title}
            className="image"
          />
        </div>

        <div className="text-section">
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
          <button onClick={onButtonClick} className="button">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}