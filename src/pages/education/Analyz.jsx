
// import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import './Education.css';
import { Helmet } from 'react-helmet-async';
import AnalyzBlock from '../../components/AnalyzBlock';
import BlueBlock from '../../components/BlueBlock';
import { useLang } from '../../components/LangContext';
import MethodAnalyzBlock from '../../components/MethodAnalyzBlock';
import LineGraph from '../../media/LineGraph.png';
import CandlesticksGraph from '../../media/CandlesticksGraph.png';
import BarGraph from '../../media/BarGraph.png';
import ModelAnalyticz from '../../media/ModelAnalyticz.png'


export default function Analyz() {
  const { lang } = useLang();
  const blocks = [
    {
      ru: 'Технический анализ начинается с графика цены и неразрывно с ним связан.',
      en: 'Technical analysis begins with the price chart and is inextricably linked to it.',
    },
    {
      ru: 'Даже новичку прежде всего приходит в голову начать пристально вглядываться в торговую платформу в поисках закономерностей. Как ни странно, они там действительно есть. График – это своего рода язык, сродни тому, на котором общаются математики. Профессор любой страны без труда разберётся в изображениях парабол и универсально записанных формулах.',
      en: 'Even a beginner first thinks to stare intently at the trading platform in search of patterns. Strangely enough, they really are there. The chart is a kind of language, akin to the one mathematicians use. A professor from any country can easily decipher parabolic shapes and universally defined formulas.',
    },
    {
      ru: 'Тоже самое с трейдерами и аналитиками всего мира. Они разработали свой язык, благодаря которому «считывают» торговые сигналы и совершают сделки в зависимости от своей торговой стратегии. Это и есть технический анализ.',
      en: 'The same goes for traders and analysts around the world. They developed their own language to “read” trading signals and execute orders according to their trading strategy. That is technical analysis.',
    }
  ];
  const chartTypes = [
    { ru: 'Линейный график',      en: 'Line chart', img: LineGraph },
    { ru: 'Свечной график',       en: 'Candlestick chart', img: CandlesticksGraph },
    { ru: 'Бары',                 en: 'Bars', img: BarGraph },
  ];
  useEffect(() => {
    const fadeObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1,
      }
    );
    document
      .querySelectorAll('.levels-block__content p.fade-in')
      .forEach(el => fadeObserver.observe(el));
    const maskObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            maskObserver.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.3,
      }
    );
    document
      .querySelectorAll('.chart-details__item')
      .forEach(el => maskObserver.observe(el));
      const basicsObserver = new IntersectionObserver(
             entries => {
               entries.forEach(entry => {
                 if (entry.isIntersecting) {
                   entry.target.classList.add('visible');
                   basicsObserver.unobserve(entry.target); // один раз
                 }
               });
             },
             {
               root: null,
               rootMargin: '0px 0px -10% 0px',
               threshold: 0.1,
             }
           );
           document
             .querySelectorAll('.basics-block')
             .forEach(el => basicsObserver.observe(el));
        
            return () => {
              fadeObserver.disconnect();
              maskObserver.disconnect();
              basicsObserver.disconnect();
            };
          }, []);
  return (
    <>
    <Helmet>
    <title>Что такое технический анализ — Основы для начинающих | FXBroker</title>
    <meta name="description" content="Изучите основы технического анализа: чтение графиков, использование индикаторов и свечных паттернов. Полное руководство для начинающих трейдеров от FXBroker." />
</Helmet>
    <h2 className="chart-types__title dott">
          <span className="chart-types__marker_dot">■</span>
          {lang === 'ru' ? 'Что такое технический анализ, зачем он нужен ' : ' What is technical analysis, why it is needed'} <br />
          {lang === 'ru' ? 'и как его проводить' : ' and how to perform it'} <br />

    </h2>
    <BlueBlock 
    overrideTexts={{
        title: {
          ru: 'Определение',
          en: "Determination"
        },
        description: {
          ru: 'Теханализ – это попытка просчитать рынок. Он основан на том, чтобы математически обработать предшествующие значения цены и на их основе составить прогноз относительно будущего движения.',
          en: 'Technical analysis is an attempt to calculate the market. It is based on mathematically processing the previous price values and using them to make a forecast of the future movement.'
        },
        description2: {
          ru: 'Помогают в этом трейдерам формулы, алгоритмы, индикаторы и уровни – в общем, объекты, которые так или иначе интерпретируют график котировок. Так он превращается из хаотичного набора цен – в логически выстроенную структуру. В центре которой до сих пор – человек и его психология.',
          en: 'Formulas, algorithms, indicators and levels - in general, objects that interpret a quote chart in one way or another - help traders in this. This is how it turns from a chaotic set of prices into a logically built structure. The center of which is still a human being and his psychology.'
        },
        description3: {
          ru: '',
          en: ''
        },
        bgText: {
          ru: 'FXBroker FXBroker FXBroker FXBroker',
          en: 'FXBroker FXBroker FXBroker FXBroker'
        },
        button : {
            ru: 'Зарегестрироваться',
            en: 'Register'
        }
      }}
    />
    <section className="analysis-blocks">
        
        {blocks.map((block, i) => (
            
          <div
            className="analysis-block"
            key={i}
            style={{ '--delay': `${i * 0.2}s` }}
          >
            <p>{block[lang]}</p>
          </div>
        ))}
      </section>
    <MethodAnalyzBlock />
    <section className="chart-types">
      <div className="chart-types__header">
        <h2 className="chart-types__title">
          <span className="chart-types__marker_dot">■</span>
          {lang === 'ru' ? ' Виды графиков' : ' Chart Types'}
        </h2>
        <p className="chart-types__desc">
          {lang === 'ru'
            ? 'Цены инструментов на рынке Форекс изменяются каждую секунду. Как только новая котировка поступает в торговую платформу, она ложится в основу графика. По нему удобнее наблюдать за изменениями и анализировать их.'
            : 'Prices of instruments on the Forex market change every second. As soon as a new quote arrives in the trading platform, it forms the basis of the chart. It is more convenient to observe changes and analyze them.'}
        </p>
      </div>
      <ul className="chart-types__list">
        {chartTypes.map((item, idx) => (
          <li key={idx} className="chart-types__item">
            <span className="chart-types__marker" />
            <span className="chart-types__label">{item[lang]}</span>
            <img
              src={item.img}
              alt={item[lang]}
              className="chart-types__image"
            />
          </li>
        ))}
      </ul>
    </section>

    <section className="chart-details">
 <div className="chart-details__item">
  <div className="chart-details__mask" />
    <h3 className="chart-details__title">
    {lang === 'ru' ? 'Линейный график' : 'Line graph'}
    </h3>
    <p className="chart-details__text">
    {lang === 'ru' ? 'Такой тип подходит лишь для поверхностного анализа движения цены на форекс. Он просто соединяет поступающие на платформу котировки ломаной линией и позволяет увидеть движение в целом. Глобально, без детализации.'
     : 'This type is suitable only for superficial analysis of price movement on Forex. It simply connects the quotes coming to the platform with a broken line and allows you to see the movement as a whole. Globally, without detailing.'}
    </p>
   
 </div>

  <div className="chart-details__item reverse">
  <div className="chart-details__mask" />
    <h3 className="chart-details__title">
    {lang === 'ru' ? 'Свечной график' : 'Candlestick chart'}
    </h3>
    <p className="chart-details__text">
    {lang === 'ru' ? 'Каждая свеча этого типа графика на форекс складывается из котировок актива за определённый период времени: трейдер задаёт его в настройках графика самостоятельно. Например, можно посмотреть, как менялась цена на минутных интервалах (M1), в интервалах по 5/15/30 минут (M5, M15, M30), часу (H1), 4 часа (H4), на дневных (D1), недельных (W1) и месячных (MN) графиках.' 
    : 'Each candle of this type of Forex chart is made up of asset quotes for a certain period of time: the trader sets it in the chart settings himself. For example, you can see how the price changed on minute intervals (M1), 5/15/30 minute intervals (M5, M15, M30), hour (H1), 4 hours (H4), daily (D1), weekly (W1) and monthly (MN) charts.'}
    </p>
    <p className="chart-details__text">
    {lang === 'ru' ? 'Такие графики чаще всего используют трейдерами, ведь в свечах отображено много информации:'
     : 'Such charts are most often used by traders, because candlesticks display a lot of information:'}
    </p>
    <ul className="chart-details__list">
      <li>
      {lang === 'ru' ? 'Цена на начало периода'
       : 'Price at the beginning of the period'}
      </li>
      <li>
      {lang === 'ru' ? 'Цену на закрытии периода' 
      : 'Period closing price'}
      </li>
      <li>
      {lang === 'ru' ? 'Самую высокую цену за выбранный период' 
      : 'The highest price for the selected period'}
      </li>
      <li>
      {lang === 'ru' ? 'Самую низкую цену за выбранный период' 
      : 'Lowest price for the selected period'}
      </li>
    </ul>
    <p className="chart-details__text">
    {lang === 'ru' ? ' Один период = одна свеча. Зачастую трейдерам важна не только тенденция (общий рост или падение), но и её сила. Кроме того, трейдеры часто находят закономерности в сочетаниях нескольких рядов стоящих свечей.' 
    : ' One period = one candle. Often traders are not only interested in the trend (overall rise or fall), but also in its strength. In addition, traders often find patterns in combinations of several rows of standing candles.'}
    </p>
  </div>

  <div className="chart-details__item ">
  <div className="chart-details__mask" />
    <h3 className="chart-details__title">
    {lang === 'ru' ? 'Бары' : 'Bars'} 
    </h3>
    <p className="chart-details__text">
    {lang === 'ru' ? 'Этот тип графиков содержит в себе ту же информацию, что и свечной график (цены открытия, закрытия, максимум и минимум за период), но имеет несколько иной вид: вертикальная черта с насечками слева (уровень открытия) и справа (закрытие). Верх и низ вертикальной черты отмечают диапазон колебаний цен за период. Считается, что его часто используют в Европе.' 
    : 'This type of chart contains the same information as a candlestick chart (open, close, high and low prices for the period), but has a slightly different look: a vertical line with notches on the left (open level) and on the right (close). The top and bottom of the vertical line mark the range of price fluctuations for the period. It is believed to be frequently used in Europe.'}
    </p>
  </div>

  <div className="chart-details__item reverse">
  <div className="chart-details__mask" />
    <h3 className="chart-details__title">
    {lang === 'ru' ? 'Линейный график' : 'Line graph'}
    </h3>
    <p className="chart-details__text">
    {lang === 'ru' ? 'Такое отображение проще всего для понимания начинающих трейдеров: все котировки соединяются между собой ломаной линией. Однако для профессионального анализа недостаточно просто видеть, куда преимущественно идет график: вверх или вниз. Поэтому такой тип подходит лишь для поверхностного изучения движения цены, когда вы хотите видеть его в самом общем виде – без нюансов.' 
    : 'This display is the easiest for novice traders to understand: all quotes are connected by a broken line. However, for professional analysis it is not enough just to see where the chart is predominantly going: up or down. Therefore, this type is suitable only for a superficial study of price movement, when you want to see it in the most general form - without nuances.'}
    </p>
  </div>
</section>

<section className="levels-block">
  <div className="levels-block__inner">
    <div className="levels-block__content">
      <h1 className="fxbroker__main-title">
        <span className="fx-text">FX</span>Broker
      </h1>
      <h2 className="levels-block__title">
        {lang === 'ru'
          ? 'Уровни поддержки и сопротивления'
          : 'Support and Resistance Levels'}
      </h2>

      <p className="fade-in">
        {lang === 'ru'
          ? 'В отличие от линии тренда, поддержка (внизу) и сопротивление (вверху) всегда располагаются горизонтально.'
          : 'Unlike a trend line, support (below) and resistance (above) are always horizontal.'}
      </p>
      <p className="fade-in">
        {lang === 'ru'
          ? 'Уровень сопротивления – это четкая верхняя граница ценового канала, а уровень поддержки – его нижняя граница.'
          : 'A resistance level is the clear upper boundary of the price channel, and a support level is its lower boundary.'}
      </p>
      <p className="fade-in">
        {lang === 'ru'
          ? 'Обратите внимание: всё сказанное выше действительно лишь для восходящего тренда. Когда цена опускается вниз, ситуация обратная: поддержкой становится уровень вершин, а сопротивлением – граница по минимумам.'
          : 'Note: the above holds true only for an up-trend. When price moves down, the roles invert: peaks become support and troughs become resistance.'}
      </p>
      <p className="fade-in">
        {lang === 'ru'
          ? 'Как только график «пробивает» один из уровней, это может быть сильным сигналом импульсного движения.'
          : 'As soon as the price “breaks” one of these levels, it can be a strong signal of an impulse.'}
      </p>
      <p className="fade-in">
        {lang === 'ru'
          ? 'Строить уровни можно по телам или теням свечей, но надёжнее выделять «зоны». Их пробой — более надёжный сигнал.'
          : 'You can draw levels by candle bodies or wicks, but it’s more reliable to mark “zones”. Their breakout is a stronger signal.'}
      </p>
    </div>
    <div className="levels-block__image">
      <img
        src={ModelAnalyticz}
        alt={
          lang === 'ru'
            ? 'Иллюстрация уровней поддержки и сопротивления'
            : 'Illustration of support and resistance levels'
        }
      />
    </div>
  </div>
</section>
<section className="basics-block">
  <h2 className="basics-block__title">
    {lang === 'ru' ? 'Основы технического анализа' : 'Fundamentals of Technical Analysis'}
  </h2>

  <div className="basics-block__columns">
    <div className="basics-block__col">
      <p>
        {lang === 'ru'
          ? 'В цене заложено всё'
          : 'Everything is priced in'}
      </p>
      <p>
        {lang === 'ru'
          ? 'Важно понимать, как формируется в данную секунду эта конкретная котировка. Приверженцы технической технологии говорят о том, что все новости, все перетягивания каната спроса-предложения, все комментарии регуляторов и ожидания трейдеров — всё заложено в текущей цене. Это необходимо понимать, и с этим пониманием выходить на рынок.'
          : 'It’s crucial to understand how the current quote is formed in this very second. Technical analysts argue that all news, all tug-of-war between supply and demand, all regulator comments and trader expectations are already built into the price. You need to understand this before entering the market.'}
      </p>
      <p>
        {lang === 'ru'
          ? 'Движение цены подчинено тенденциям'
          : 'Price moves in trends'}
      </p>
      <p>
        {lang === 'ru'
          ? 'Цена изменяется не хаотично, а по определённым причинам. Чем более они явные, тем более они заметны трейдерам, инвесторам и регуляторам. Все они — люди, а потому ищут возможности для более выгодного заключения сделок. Поэтому пока есть предложение, они будут покупать, а пока есть спрос, они будут продавать. Так на рынке образуются тренды.'
          : 'Price doesn’t move randomly but for identifiable reasons. The clearer they are, the more visible they become to traders, investors and regulators. All of them—being human—look for profitable opportunities. So as long as there is supply they buy, and as long as there is demand they sell. That’s how trends form.'}
      </p>
    </div>

    <div className="basics-block__col">
      <p>
        {lang === 'ru'
          ? 'История динамики цен повторяется'
          : 'Price history repeats itself'}
      </p>
      <p>
        {lang === 'ru'
          ? 'Возможно, в этом виновата когнитивная или психологическая паттерны человеческого поведения. Условно, если всё плохо, трейдеры продают. Если всё хорошо — покупают. Есть также и петля обратной связи: цена растёт вслед за появлением сигнала на покупку, который «считывается» всеми трейдерами. Однако современный мир начал меняться настолько стремительно, что в последнее время всё чаще формируются новые привычки рынка, за которыми крайне любопытно наблюдать.'
          : 'Perhaps it’s due to cognitive or psychological patterns of human behavior. If everything looks bad, traders sell; if it looks good, they buy. There is also a feedback loop: price rises following a buy signal that everyone sees. Yet the modern world changes so fast that new market habits are constantly emerging—and it’s fascinating to watch.'}
      </p>
      <p>
        {lang === 'ru'
          ? 'Технический анализ применим к любым активам'
          : 'Technical analysis works across assets'}
      </p>
      <p>
        {lang === 'ru'
          ? 'Технический анализ можно применять к любым видам активов, есть менее «технические», особенно на рынке форекс. Однако все они формируют тренды, а их цена пытается найти поддержку при спуске и сопротивление (точку кипения) — при подъёме.'
          : 'You can apply technical analysis to any asset class, though some are less “technical” than Forex. In all cases, assets form trends, and price will seek support on the way down and resistance (a boiling point) on the way up.'}
      </p>
    </div>
  </div>
</section>


    </>
  );
}
