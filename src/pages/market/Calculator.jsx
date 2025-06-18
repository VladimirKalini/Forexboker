import React from "react";
import './Market.css';
import PhoneHeader from '../../components/PhoneHeader';
import CalculatorHead from '../../media/CalculatorHead.png';

export default function Calculator() {
    const { lang } = useLang();

    return (
        <>
        <PhoneHeader 
         backgroundImage={CalculatorHead}
         buttonColor="red"
         onButtonClick={() => window.location.href = '/register'}
         overrideTexts={{ 
           title: {
             ru: 'Калькулятор прибыли: ',
             en: 'Professional trading training: '
           },
           highlightedTitle: {
             ru: 'мгновенные расчёты дохода по акциям и валютным парам',
             en: 'We will teach you how to make money in the markets'
           },
           subtitle: {
             ru: 'Начните обучение прямо сейчас! Откройте счет и получите доступ к качественным образовательным материалам',
             en: 'Start learning now! Open an account and get access to quality educational materials'
           },
           buttonText: {
             ru: 'Открыть счет',
             en: 'Open an account'
           }
         }}
        />
        </>
        );
    }