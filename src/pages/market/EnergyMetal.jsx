import React from 'react';
import './Market.css';
import { useLang } from '../../components/LangContext';
import { Link } from 'react-router-dom';
import PhotoHeader from '../../components/PhotoHeader';
import FooterImage from '../../components/FooterImage';

import EnergyBlock from '../../media/EnergyBlock.png';
import HeadEdu from '../../media/HeadEdu.png';
import FooterEnergy from '../../media/FooterEnergy.png';

const cardsData = [
    {
      id: 1,
      textRu: 'Откройте для себя мир торговли энергоресурсами вместе с FXBroker.',
      textEn: 'Discover the world of energy trading with FXBroker.'
    },
    {
      id: 2,
      textRu: 'Используйте мощные инструменты, развивайте аналитическое мышление, увеличивайте прибыль.',
      textEn: 'Use powerful tools, develop analytical thinking, and increase your profits.'
    },
    {
      id: 3,
      textRu: 'Контролируйте риски. Независимо от вашего опыта.',
      textEn: 'Control your risks. Regardless of your experience.'
    },
    {
      id: 4,
      textRu: 'У вас есть все шансы занять сильную позицию на одном из самых стратегически важных рынков современности.',
      textEn: 'You have every chance to take a strong position in one of the most strategically important markets of our time.'
    }
  ];

export default function EnergyMetal() {
const { lang } = useLang();
  return (
    <>
    <PhotoHeader 
        style={{marginBottom: '0'}}
        backgroundImage={HeadEdu}
        buttonColor=""
        onButtonClick={() => window.location.href = '/register'}
        overrideTexts={{ 
          title: { ru: 'Цены на нефть, газ и другие ресурсы — ', en: 'Oil, gas and other resource prices - ' },
          highlightedTitle: { ru: 'в реальном времени', en: "in real time" },
          subtitle: { ru: 'Анализируйте рынок и реагируйте на движение цен мгновенно', en: 'Analyze the market and react to price movements instantly' },
          buttonText: { ru: 'Открыть счет', en: 'Open an account' }
        }}
      />

      <section className="macro-section">
        <div className="macro-container">
          <div className="macro-left">
            <h1 className="macro-logo">
              <span className="macro-logo--accent">FX</span>Broker
            </h1>
            <h2 className="macro-title">
              {lang === 'ru' ? 'Торговля энергоресурсами' : 'Energy trading'}
            </h2>
            <Link to="/register" className="macro-button">
              {lang === 'ru' ? 'Открыть счет' : 'Open an account'}
            </Link>
          </div>

          <div className="macro-right">
            <div className="macro-text">
              <p>
                <strong>
                  {lang === 'ru' ? '' : ''} 
                </strong><br />
                {lang === 'ru' ? 'Позволяет трейдерам спекулировать на колебаниях цен, не обладая физическим товаром. Вы можете зарабатывать как на росте, так и на падении цен, используя CFD-контракты. Колебания цен на нефть могут быть резкими и внезапными — отчёты ОПЕК, данные по запасам в США, конфликтные ситуации в нефтедобывающих регионах — всё это создаёт активную волатильность и высокую доходность при правильной торговой стратегии. Природный газ, в свою очередь, подвержен сезонному влиянию, резким погодным скачкам и меняющемуся спросу со стороны промышленности и частных домохозяйств, что делает его ещё одним привлекательным инструментом.'
                : "Allows traders to speculate on price fluctuations without owning a physical commodity. You can make money on both rising and falling prices using CFD contracts. Oil price fluctuations can be sharp and sudden - OPEC reports, US inventory data, conflict situations in oil-producing regions - all this creates active volatility and high profitability with the right trading strategy. Natural gas, on the other hand, is subject to seasonal influences, weather spikes and changing demand from industry and private households, making it another attractive instrument."}
              </p>
            </div>

            <div className="macro-image">
              <img src={EnergyBlock} alt="Макроэкономика" />
            </div>
          </div>
        </div>
      </section>

      <section className="quote-section">
      <div className="quote-blue-stripe"></div>
      
      <div className="quote-card">
        <div className="quote-icon">“</div>
        <p>
          {lang === 'ru'
            ? 'Платформа FXBroker предлагает трейдерам точные котировки, минимальные спреды, продвинутые графики и индикаторы для технического анализа.'
            : 'The FXBroker platform offers traders accurate quotes, minimal spreads, advanced charts, and indicators for technical analysis.'
          }
        </p>
        <p>
          {lang === 'ru'
            ? 'Вы можете использовать фундаментальный подход, следить за новостями рынка нефти и газа, а также комбинировать разные методы анализа.'
            : 'You can use a fundamental approach, follow oil and gas market news, and also combine different analysis methods.'
          }
        </p>
        <p>
          {lang === 'ru'
            ? 'Удобная торговая платформа поддерживает мгновенное исполнение сделок и доступна с любого устройства — от настольного компьютера до мобильного телефона.'
            : 'The user-friendly trading platform supports instant trade execution and is accessible from any device — from a desktop computer to a mobile phone.'
          }
        </p>
        <div className="quote-logo">
        <h1 className="macro-logo">
              <span className="macro-logo--accent">FX</span>Broker
            </h1>
        </div>
      </div>
    </section>
    <section className="energy-trading-section">
      <div className="energy-trading-container">
        <h2 className="energy-trading-title">
          {lang === 'ru' ? 'Торговля энергоресурсами' : 'Energy Trading'}
        </h2>
        <div className="energy-trading-content">
          <div className="energy-trading-left">
            <p>
              {lang === 'ru'
                ? 'Если вы только начинаете — в нашей Школе трейдинга есть отдельные модули, посвящённые торговле сырьём, включая нефть и газ. Вы узнаете, как влияют отчёты EIA и API, как читаются фьючерсные кривые, в чём разница между марками нефти, и какие стратегии используют профессиональные трейдеры.'
                : 'If you are just starting out, our Trading School has separate modules dedicated to commodity trading, including oil and gas. You will learn what EIA and API reports influence, how to read futures curves, the difference between oil grades, and what strategies professional traders use.'
              }
            </p>
            <p>
              {lang === 'ru'
                ? 'Материалы подойдут как новичкам, так и опытным инвесторам, желающим освоить новые активы.'
                : 'The materials are suitable for both beginners and experienced investors who want to master new assets.'
              }
            </p>
            <p>
              {lang === 'ru'
                ? 'Среди ключевых преимуществ торговли энергоносителями на FXBroker: прозрачные условия, низкие комиссии, кредитное плечо, а также защита от отрицательного баланса.'
                : 'Among the key advantages of trading energy resources on FXBroker are: transparent conditions, low commissions, leverage, and protection against a negative balance.'
              }
            </p>
          </div>
          <div className="energy-trading-right">
            <p>
              {lang === 'ru'
                ? 'Для расчета возможной прибыли или оценки размера позиции вы можете воспользоваться встроенным калькулятором — это экономит время и помогает принимать более обоснованные решения.'
                : 'To calculate potential profit or assess position size, you can use the built-in calculator — this saves time and helps in making more informed decisions.'
              }
            </p>
            <p>
              {lang === 'ru'
                ? 'Будьте в курсе всех изменений на рынке энергоресурсов: от решений ОПЕК+ и глобального спроса до экологических инициатив и перехода на альтернативные источники.'
                : 'Stay informed about all changes in the energy market: from OPEC+ decisions and global demand to ecological initiatives and the transition to alternative sources.'
              }
            </p>
            <p>
              {lang === 'ru'
                ? 'FXBroker предоставляет ежедневные обзоры, аналитические статьи и сигналы, которые помогут вам быстро реагировать на рыночные изменения.'
                : 'FXBroker provides daily reviews, analytical articles, and signals that will help you react quickly to market changes.'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="fcb-section">
      <div className="fcb-container">
        {cardsData.map((card) => (
          <div key={card.id} className="fcb-card">
            <p>
              {lang === 'ru' ? card.textRu : card.textEn}
            </p>
          </div>
        ))}
      </div>
    </section>
    
    <section className="central-banks-section">
      <div className="central-banks-title-wrapper">
        <h2 className="central-banks-title">
          {lang === 'ru' ? 'Центральные' : 'Central'}<br/>
          {lang === 'ru' ? 'банки' : 'Banks'}
          <span className="central-banks-red-square"></span>
        </h2>
      </div>
      <div className="central-banks-text-content">
        <p>
          {lang === 'ru'
            ? 'Их главной задачей в процессе онлайн торговли является валютное регулирование на внешнем рынке, а именно - предотвращение резких скачков курсов национальных валют. Это необходимо, чтобы не допустить начала очередной волны экономического кризиса, а также для поддержания баланса экспорта и импорта. Центральные банки, их решения и выступления представителей оказывают прямое влияние на рынок форекс.'
            : 'Their main task in the online trading process is currency regulation in the external market, namely - preventing sharp fluctuations in national currency rates. This is necessary to prevent the start of another wave of economic crisis, as well as to maintain the balance of exports and imports. Central banks, their decisions, and the speeches of their representatives have a direct impact on the forex market.'
          }
        </p>
        <p>
          {lang === 'ru'
            ? 'В США основной регулятор – Федеральная Резервная Система (ФРС), в Европе – Европейский Центральный Банк (ЕЦБ), в Британии – Банк Англии (ВоЕ), а в Японии, соответственно, Центральный Банк Японии.'
            : 'In the USA, the main regulator is the Federal Reserve System (FRS), in Europe – the European Central Bank (ECB), in Britain – the Bank of England (BoE), and in Japan, respectively, the Bank of Japan.'
          }
        </p>
      </div>
    </section>
    <FooterImage 
      overlayClassName="bg-black"
      className="bg-black"
      backgroundSrc={FooterEnergy}
      textRu="Актуальные котировки драгоценных и промышленных металлов"
      textEn="Current quotes of precious and industrial metals"
      btnTextRu="Открыть счет"
      btnTextEn="Open an account"
      btnLink="/register"
      />
    </>
  );
};

