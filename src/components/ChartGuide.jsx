import React from 'react';
import { useLang } from './LangContext';
import './style-components.css';
import chartPhoneImage from '../media/PhoneSchedule.png';

const ChartGuide = () => {
  const { lang } = useLang();

  const content = {
    title: {
      ru: 'Как читать график: основы для начинающих',
      en: 'How to read charts: basics for beginners'
    },
    intro: {
      ru: 'Если вы только начинаете путь в трейдинге — не волнуйтесь. Чтение графика может показаться сложным, но на деле это просто умение распознавать поведение цены.',
      en: 'If you are just starting your trading journey — don\'t worry. Reading charts may seem complicated, but in reality it\'s simply the ability to recognize price behavior.'
    },
    sections: {
      candles: {
        title: {
          ru: 'Свечи (или бары)',
          en: 'Candles (or bars)'
        },
        items: [
          {
            ru: 'Каждая свеча — это период времени',
            en: 'Each candle represents a time period'
          },
          {
            ru: 'Открытие — где цена была в начале интервала времени',
            en: 'Open — where the price was at the beginning of the time interval'
          },
          {
            ru: 'Закрытие — где оказалась в конце',
            en: 'Close — where it ended up at the end'
          },
          {
            ru: 'Максимум и минимум — на какие уровни цена поднималась или опускалась',
            en: 'High and low — the levels to which the price rose or fell'
          }
        ],
        colors: {
          green: {
            ru: 'Зеленая свеча = рост',
            en: 'Green candle = growth'
          },
          red: {
            ru: 'Красная свеча = падение',
            en: 'Red candle = decline'
          }
        }
      },
      timeframes: {
        title: {
          ru: 'Таймфреймы',
          en: 'Timeframes'
        },
        intro: {
          ru: 'Вы можете выбрать, за какой период смотреть на движение:',
          en: 'You can choose which period to look at the movement:'
        },
        items: [
          {
            ru: '1M — движение внутри минуты',
            en: '1M — movement within a minute'
          },
          {
            ru: '1H — почасовой тренд',
            en: '1H — hourly trend'
          },
          {
            ru: '1D — дневная картина рынка',
            en: '1D — daily market picture'
          },
          {
            ru: 'Чем выше таймфрейм — тем "глобальнее" взгляд',
            en: 'The higher the timeframe, the more "global" the view'
          },
          {
            ru: 'Новичкам стоит начинать с 1H и 1D, чтобы видеть основное направление',
            en: 'Beginners should start with 1H and 1D to see the main direction'
          }
        ]
      },
      trends: {
        title: {
          ru: 'Тренды',
          en: 'Trends'
        },
        items: [
          {
            ru: 'Восходящий тренд: серия повышающихся максимумов и минимумов',
            en: 'Uptrend: a series of higher highs and higher lows'
          },
          {
            ru: 'Нисходящий тренд: серия понижающихся максимумов и минимумов',
            en: 'Downtrend: a series of lower highs and lower lows'
          },
          {
            ru: 'Флет: боковое движение, когда рынок "отдыхает"',
            en: 'Flat: sideways movement when the market is "resting"'
          },
          {
            ru: 'Главное правило: не торгуй против тренда',
            en: 'Main rule: don\'t trade against the trend'
          }
        ]
      },
      levels: {
        title: {
          ru: 'Уровни поддержки и сопротивления',
          en: 'Support and resistance levels'
        },
        intro: {
          ru: 'Это ценовые зоны, где цена часто останавливается или разворачивается:',
          en: 'These are price zones where the price often stops or reverses:'
        },
        items: [
          {
            ru: 'Поддержка: "пол", от которого цена отталкивается вверх',
            en: 'Support: the "floor" from which the price bounces up'
          },
          {
            ru: 'Сопротивление: "потолок", который цена не может пробить',
            en: 'Resistance: the "ceiling" that the price cannot break through'
          }
        ]
      }
    }
  };

  return (
    <div className="chart-guide-container">
      <h2 className="chart-guide-title">{content.title[lang]}</h2>
      <p className="chart-guide-intro">{content.intro[lang]}</p>
      
      <div className="chart-guide-content">
        <div className="chart-guide-left">

          <div className="chart-guide-section">
            <h3 className="chart-section-title">
              <span className="chart-section-marker"></span>
              {content.sections.candles.title[lang]}
            </h3>
            <ul className="chart-section-list">
              {content.sections.candles.items.map((item, index) => (
                <li key={`candle-${index}`} className="chart-section-list-item">{item[lang]}</li>
              ))}
            </ul>
            <div className="candle-colors">
              <p className="candle-green">{content.sections.candles.colors.green[lang]}</p>
              <p className="candle-red">{content.sections.candles.colors.red[lang]}</p>
            </div>
          </div>

         
          <div className="chart-guide-section">
            <h3 className="chart-section-title">
              <span className="chart-section-marker"></span>
              {content.sections.timeframes.title[lang]}
            </h3>
            <p className="chart-section-intro">{content.sections.timeframes.intro[lang]}</p>
            <ul className="chart-section-list">
              {content.sections.timeframes.items.map((item, index) => (
                <li key={`timeframe-${index}`} className="chart-section-list-item">{item[lang]}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="chart-guide-center">
          <img 
            src={chartPhoneImage} 
            alt={content.title[lang]} 
            className="chart-phone-image" 
          />
        </div>

        <div className="chart-guide-right">
          <div className="chart-guide-section">
            <h3 className="chart-section-title">
              <span className="chart-section-marker"></span>
              {content.sections.trends.title[lang]}
            </h3>
            <ul className="chart-section-list">
              {content.sections.trends.items.map((item, index) => (
                <li key={`trend-${index}`} className="chart-section-list-item">{item[lang]}</li>
              ))}
            </ul>
          </div>

          <div className="chart-guide-section">
            <h3 className="chart-section-title">
              <span className="chart-section-marker"></span>
              {content.sections.levels.title[lang]}
            </h3>
            <p className="chart-section-intro">{content.sections.levels.intro[lang]}</p>
            <ul className="chart-section-list">
              {content.sections.levels.items.map((item, index) => (
                <li key={`level-${index}`} className="chart-section-list-item">{item[lang]}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartGuide; 