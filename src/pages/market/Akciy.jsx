import React from 'react';
import './Market.css';
import PhotoHeader from '../../components/PhotoHeader';
import FooterImage from '../../components/FooterImage';
import InfoTabs from '../../components/InfoTabs';
import { useLang } from '../../components/LangContext';

import AkciyHeader from '../../media/AkciyHeader.png';




export default function Akciy() {
  return (
    <>
    <PhotoHeader 
        backgroundImage={AkciyHeader}
        buttonColor=""
        onButtonClick={() => window.location.href = '/register'}
        overrideTexts={{ 
          title: { ru: '', en: '' },
          highlightedTitle: { ru: 'Доступ к мировым акциям — в один клик', en: "One-click access to global stocks" },
          subtitle: { ru: 'Следите за котировками онлайн и торгуйте выгодно', en: 'Follow quotes online and trade profitably' },
          buttonText: { ru: 'Открыть счет', en: 'Open an account' }
        }}
      />
      <InfoTabs />
    </>
  );
};