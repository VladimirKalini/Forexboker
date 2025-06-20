import React from 'react';
import PhotoHeader from '../../components/PhotoHeader';
import './Market.css';
import ValutaHeadr from '../../media/ValutaHeadr.png';
 


export default function Valuta() {
  return (
    <>
    <PhotoHeader 
    backgroundImage={ValutaHeadr}
    buttonColor=""
    onButtonClick={() => window.location.href = '/register'}
    overrideTexts={{ 
      title: {
        ru: 'Финансовая свобода начинается с точных данных ',
        en: 'Financial freedom starts with accurate data '
      },
      highlightedTitle: {
        ru: 'которые вы видите прямо сейчас',
        en: "that you're seeing right now"
      },
      subtitle: {
        ru: 'Отслеживайте валютные котировки и принимайте выгодные решения',
        en: 'Track currency quotes and make profitable decisions  '
      },
      buttonText: {
        ru: 'Открыть счет',
        en: 'Open an account'
      }
    }}
    />
    </>    
  );
};