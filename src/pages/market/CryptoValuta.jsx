import React from 'react';
import './Market.css';
import { useLang } from '../../components/LangContext';
import InfoTabs from '../../components/InfoTabs';

import StepCryptoHeader from '../../media/StepCryptoHeader.png';
import PromoAkciy from '../../media/PromoAkciy.png';
import CryptoImg from '../../media/CryptoImg.png';


const cryptoTabsData = [
  {
    id: 'stocks',
    titleRu: 'Объём',
    titleEn: 'Volume',
    descriptionRu: 'Объём токенов на бирже влияет на цену. Если количество токенов на централизованных биржах снижается, это может сигнализировать о том, что инвесторы выводят крипту на долгосрочное хранение — потенциально бычий сигнал. Мы обучаем, как отслеживать такие on-chain метрики и использовать их для принятия решений.',
    descriptionEn: 'The volume of tokens on an exchange affects the price. If the number of tokens on centralized exchanges is declining, it could signal that investors are taking the crypto into long-term storage - a potentially bullish signal. We teach how to track such on-chain metrics and use them to make decisions.',
    verticalTextRu: 'токенов на бирже влияет',
    verticalTextEn: 'of tokens on the exchange affects'
  },
  {
    id: 'price',
    titleRu: 'Блокчейн',
    titleEn: 'Blockchain',
    descriptionRu: 'токены автоматически уменьшаются в обороте. Например, токены с механизмом «burn» (сжигание части комиссии) становятся более дефицитными со временем. Это может влиять на их стоимость. В нашей школе мы обучаем, как читать токеномику и понимать долгосрочный потенциал активов.',
    descriptionEn: 'tokens automatically decrease in circulation. For example, tokens with a “burn” mechanism (burning a portion of the fee) become more scarce over time. This can affect their value. In our school, we teach how to read tokenomics and understand the long-term potential of assets.',
    verticalTextRu: 'прозрачен — можно следить',
    verticalTextEn: 'transparent - you can monitor'
  },
  {
    id: 'dividends',
    titleRu: 'Некоторые',
    titleEn: 'Someone',
    descriptionRu: ' — это регулярные выплаты акционерам из прибыли компании, но не все акции их выплачивают. Дивидендные акции часто выбирают для стабильного дохода и долгосрочных инвестиций.',
    descriptionEn: "- are regular payments to shareholders from the company's profits, but not all stocks pay them out. Dividend stocks are often chosen for stable income and long-term investments.",
    verticalTextRu: 'токены автоматически',
    verticalTextEn: 'tokens automatically'
  },
  {
    id: 'success',
    titleRu: 'Психология',
    titleEn: 'Psychology',
    descriptionRu: 'толпы особенно ярко выражена на крипторынке. Из-за открытого характера крипты и отсутствия регулирования поведение розничных трейдеров становится предсказуемым: они покупают на хаях и продают на панике. Мы учим, как распознавать эмоциональные пики и торговать против толпы.',
    descriptionEn: 'The crowd is particularly pronounced in the crypto market. Due to the open nature of crypto and the lack of regulation, the behavior of retail traders becomes predictable: they buy on the highs and sell on the panics. We teach how to recognize emotional peaks and trade against the crowd.',
    verticalTextRu: 'толпы особенно ярко',
    verticalTextEn: 'of the crowd is particularly striking'
  }
];
const factsData = [
    {
      id: 1,
      titleRu: 'Настоящие объёмы торгов часто скрываются',
      titleEn: 'Real trading volumes are often hidden',
      descriptionRu: 'Многие криптобиржи завышают обороты. Мы учим, как использовать надёжные агрегаторы и метрики, чтобы видеть реальную ликвидность.',
      descriptionEn: 'Many crypto exchanges inflate their volumes. We teach how to use reliable aggregators and metrics to see the real liquidity.'
    },
    {
      id: 2,
      titleRu: 'На крипте важно следить не только за ценой, но и за активностью кошельков.',
      titleEn: 'In crypto, it\'s important to watch not just the price, but also wallet activity.',
      descriptionRu: 'On-chain данные (кол-во активных адресов, входящие транзакции, движения на биржах) часто предсказывают движение рынка лучше, чем технический анализ.',
      descriptionEn: 'On-chain data (number of active addresses, incoming transactions, movements on exchanges) often predict market movements better than technical analysis.'
    },
    {
      id: 3,
      titleRu: 'Bitcoin — это не просто валюта, это индикатор всего крипторынка',
      titleEn: 'Bitcoin is not just a currency; it\'s an indicator for the entire crypto market',
      descriptionRu: 'Если BTC падает, альткоины, как правило, падают сильнее. Мы разбираем структуру рынка и логику корреляции активов.',
      descriptionEn: 'If BTC falls, altcoins, as a rule, fall harder. We break down the market structure and the logic of asset correlation.'
    },
    {
      id: 4,
      titleRu: 'Алгоритмы и боты активно торгуют криптой.',
      titleEn: 'Algorithms and bots actively trade crypto.',
      descriptionRu: 'Поэтому важно понимать "механическое" поведение рынка и уметь предугадывать автоматические срабатывания на уровнях — иначе можно попасть в ловушку.',
      descriptionEn: 'Therefore, it\'s important to understand the "mechanical" behavior of the market and be able to predict automatic triggers at certain levels — otherwise, you can get caught in a trap.'
    }
  ];

export default function CryptoValuta() {
  const { lang } = useLang();


  return (
    <>
    <section className="hero-block">
    <div className="hero-block__image-wrapper">
      <img src={StepCryptoHeader} alt="Blue abstract grid" />
    </div>

    <div className="hero-block__content">
      <h1 className="hero-block__title">
        {lang === 'ru' ? 'Биткоин, Эфириум и сотни других монет —' : 'Bitcoin, Ethereum, and hundreds of other coins —'}<br />
        {lang === 'ru' ? 'отслеживайте движение рынка и принимайте решения быстро' : 'track market movements and make decisions fast'}
        <span className="hero-block__title-accent"></span>
      </h1>
      <p className="hero-block__subtitle">
        {lang === 'ru' ? 'Актуальные курсы криптовалют в реальном времени' : 'Live cryptocurrency exchange rates in real time'}
      </p>
      <button className="hero-block__button">
        {lang === 'ru' ? 'Открыть счет' : 'Open an account'}
      </button>
    </div>
  </section>


  <section className="crypto-approach-section">
      <div className="crypto-approach-container">
        <h2 className="crypto-approach-title">
          {lang === 'ru' ? 'Крипторынок: возможности, риски и грамотный подход' : 'Crypto Market: Opportunities, Risks, and a Smart Approach'}
        </h2>
        
        <div className="crypto-approach-content">
          <div className="crypto-approach-left">
            <p className="crypto-approach-description">
              {lang === 'ru'
                ? 'Пожалуй, ни один другой финансовый рынок не вызывает столько эмоций, как криптовалюты. Это пространство, где за считанные дни можно увидеть рост на сотни процентов — и столь же стремительное падение. Для одних это путь к свободе, для других — головоломка. Но для подготовленного трейдера крипторынок — это структурированное пространство возможностей, где хаос подчиняется логике, а стратегия побеждает азарт. На FXBroker мы понимаем: крипта требует особого подхода. Именно поэтому в нашей Школе трейдинга есть отдельный модуль, посвящённый торговле криптовалютами. Это не просто набор графиков и терминов — это системное обучение, в которое включены:'
                : "Perhaps no other financial market evokes as much emotion as cryptocurrencies. It's a space where you can see growth of hundreds of percent and equally rapid declines in a matter of days. For some, it's a path to freedom; for others, a puzzle. But for a prepared trader, the crypto market is a structured space of opportunities where chaos submits to logic, and strategy overcomes excitement. At FXBroker, we understand that crypto requires a special approach. That's why our Trading School has a separate module dedicated to cryptocurrencies. This is not just a set of charts and terms — it's a systematic training that includes:"
              }
            </p>
          </div>
          <div className="crypto-approach-right">
            <ul className="crypto-approach-list">
              <li>
                {lang === 'ru' ? 'разбор движущих факторов крипторынка (новости, регуляции, хайп, «киты» и пр.);' : "analysis of the driving factors of the crypto market (news, regulations, hype, 'whales,' etc.);"}
              </li>
              <li>
                {lang === 'ru' ? 'анализ циклов (бычьи/медвежьи рынки, фазы накопления/распродажи);' : 'analysis of cycles (bull/bear markets, accumulation/distribution phases);'}
              </li>
              <li>
                {lang === 'ru' ? 'работа с уровнями ликвидности и скоплениями стопов;' : 'working with liquidity levels and stop-loss clusters;'}
              </li>
              <li>
                {lang === 'ru' ? 'чтение графиков без шаблонов, но с пониманием поведения толпы;' : 'reading charts without templates, but with an understanding of crowd behavior;'}
              </li>
              <li>
                {lang === 'ru' ? 'психология криптотрейдинга — борьба с FOMO, паникой, импульсивностью.' : 'psychology of crypto trading — fighting FOMO, panic, and impulsiveness.'}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <InfoTabs tabsData={cryptoTabsData}/>
    <section className="chaos-pattern-section">
      <div className="chaos-pattern-container">
        
        <div className="chaos-pattern-top">
          <div className="chaos-pattern-top-left">
            <h2>
              {lang === 'ru' ? 'Умение распознавать закономерности в хаосе' : 'The ability to recognize patterns in chaos'}
              <span className="red-square"></span>
            </h2>
          </div>
          <div className="chaos-pattern-top-right">
            <p>
              {lang === 'ru'
                ? 'правильно интерпретировать новости, оценивать сетевую активность и технические сигналы даёт трейдеру огромное преимущество'
                : 'correctly interpreting news, assessing network activity, and technical signals gives a trader a huge advantage'
              }
            </p>
          </div>
        </div>

        <div className="chaos-pattern-bottom">
          <div className="chaos-pattern-card">
            <p>
              {lang === 'ru'
                ? 'На платформе FXBroker вы можете торговать ведущими криптовалютами — Биткойном, Эфириумом, Лайткойном, Solana и другими — через CFD, без необходимости владения активами. Это значит больше гибкости, возможность торговать в обе стороны и доступ к кредитному плечу.'
                : 'On the FXBroker platform, you can trade leading cryptocurrencies — Bitcoin, Ethereum, Litecoin, Solana, and others — through CFDs, without needing to own the assets. This means more flexibility, the ability to trade in both directions, and access to leverage.'
              }
            </p>
          </div>
          <div className="chaos-pattern-card">
            <p>
              {lang === 'ru'
                ? 'Но торговать криптовалютами без подготовки — значит действовать наугад. В Школе трейдинга FXBroker мы обучаем фундаментальному и техническому анализу крипторынка: как читать графики в условиях экстремальной волатильности, как работать с уровнями, как учитывать данные из блокчейна, и как отличать рыночные импульсы от шума.'
                : 'But trading cryptocurrencies without preparation means acting blindly. At the FXBroker Trading School, we teach fundamental and technical analysis of the crypto market: how to read charts in conditions of extreme volatility, how to work with levels, how to consider data from the blockchain, and how to distinguish market impulses from noise.'
              }
            </p>
          </div>
        </div> 
      </div>
    </section>
    <section className="crypto-facts-section">
      <div className="crypto-facts-image-column">
        <img src={CryptoImg} alt="Crypto trading app" className="crypto-facts-phone-image" />
      </div>
      <div className="crypto-facts-text-column">
        <h2 className="crypto-facts-main-title">
          {lang === 'ru' ? 'Факты о крипторынке' : 'Facts about the Crypto Market'}
        </h2>
        <div className="crypto-facts-list">
          {factsData.map(fact => (
            <div key={fact.id} className="fact-item">
              <h3>{lang === 'ru' ? fact.titleRu : fact.titleEn}</h3>
              <p>{lang === 'ru' ? fact.descriptionRu : fact.descriptionEn}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
  );
};
