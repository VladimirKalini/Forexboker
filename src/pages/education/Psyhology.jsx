import React, { useRef, useState, useEffect } from 'react';
import './Education.css';
import { useLang } from '../../components/LangContext';
import Psyho from '../../media/Psyho.png';
import BlueLabel from '../../media/BlueLabel.png';
import PsyhoPhone from '../../media/PsyhoPhone.png';


export default function Psyhology() {
  const { lang } = useLang();

  // Існуючі refs та стани для першого набору анімацій
  const titleRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  const [titleVisible, setTitleVisible] = useState(false);
  const [section1Visible, setSection1Visible] = useState(false);
  const [section2Visible, setSection2Visible] = useState(false);

  // НОВІ refs та стани для блоку "Эмоции, влияющие на психологию трейдинга"
  const newTitleRef = useRef(null);
  const newSection1Ref = useRef(null);
  const newSection2Ref = useRef(null);

  const [newTitleVisible, setNewTitleVisible] = useState(false);
  const [newSection1Visible, setNewSection1Visible] = useState(false);
  const [newSection2Visible, setNewSection2Visible] = useState(false);


  useEffect(() => {
    const createObserver = (ref, setVisibility) => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibility(true);
            observer.disconnect();
          }
        },
        { threshold: 0.3 } // Поріг видимості
      );

      observer.observe(ref.current);

      return () => observer.disconnect();
    };

    // Створюємо спостерігачі для існуючих блоків
    createObserver(titleRef, setTitleVisible);
    createObserver(section1Ref, setSection1Visible);
    createObserver(section2Ref, setSection2Visible);

    // Створюємо спостерігачі для НОВИХ блоків
    createObserver(newTitleRef, setNewTitleVisible);
    createObserver(newSection1Ref, setNewSection1Visible);
    createObserver(newSection2Ref, setNewSection2Visible);

  }, []);
      return (
          <>
           <section
        className="fundamentals-block"
        style={{ backgroundImage: `url(${Psyho})` }}
      >
        <div className="fundamentals-block__overlay" />

        <div className="fundamentals-block__inner">
          <div className="fundamentals-block__content">
            <h2 className="fundamentals-block__title">
              {lang === 'ru'
                ? 'Психология трейдера: '
                : "Trader's psychology: "}
              <span className="fundamentals-block__highlight">
                {lang === 'ru'
                  ? 'Как контролировать эмоции и принимать решения'
                  : 'How to control emotions and make decision'}
              </span>
            </h2>
            <p className="fundamentals-block__subtitle">
              {lang === 'ru'
                ? 'Торговля на ранках требует не только знаний, но и умения контролировать свои эмоции. Мы обучим вас, как сохранять хладнокровие и принимать обоснованные решения'
                : 'Trading on the markets requires not only knowledge, but also the ability to control your emotions. We will teach you how to keep your cool and make informed decisions'}
            </p>
            <button className="fundamentals-block__button">
              {lang === 'ru' ? 'Открыть счет' : 'Open an account'}
            </button>
          </div>
        </div>
      </section>
      <div className="block-container">
        <h2
          ref={titleRef}
          className={`title ${titleVisible ? 'is-visible' : ''}`}
        >
          {lang === 'ru' ? 'Что такое торговая психология?' : 'What is trading psychology?'}
          <span className="underline"></span>
        </h2>

        <div
          ref={section1Ref} 
          className={`section fade-in-block ${section1Visible ? 'is-visible' : ''}`}
           >
            <img src={BlueLabel} alt="blue ribbon" className="ribbon" />
            <p>
            {lang === 'ru'
              ? 'Психология торговли занимается психическим и эмоциональным состоянием трейдеров. Все дело в том, как ваше поведение и образ мышления влияют на вашу торговлю. Это также затрагивает вашу дисциплину и готовность к риску. Ваш разум играет большую роль в вашем долгосрочном успехе в торговле. Понять, как вы относитесь к торговле, может быть столь же важно, как и работать над своими навыками на фондовом рынке. Давайте посмотрим на две большие эмоции в трейдинге: Жадность может заставить трейдера оставаться в позиции слишком долго, чтобы попытаться выжать из нее все до последнего цента. Жадность также может мотивировать трейдеров занимать рискованные и спекулятивные позиции. Чаще всего это происходит к концу бычьих рынков, когда спекуляции разрастаются.'
              : 'Trading psychology deals with the mental and emotional state of traders. It is all about how your behavior and way of thinking affects your trading. It also affects your discipline and willingness to take risks. Your mind plays a big role in your long-term trading success. Understanding how you approach trading can be just as important as working on your skills in the stock market. Let\'s look at two big emotions in trading: Greed can cause a trader to stay in a position too long to try to squeeze every last dime out of it. Greed can also motivate traders to take risky and speculative positions. This most often happens toward the end of bull markets when speculation runs rampant'}
          </p>
        </div>

        <div
          ref={section2Ref} 
          className={`section fade-in-block ${section2Visible ? 'is-visible' : ''}`}
        >
          <img src={BlueLabel} alt="blue ribbon" className="ribbon" />
          <p>
            {lang === 'ru'
              ? 'Страх противоположен. Это причина того, что люди продают раньше, чтобы сократить убытки и избежать дополнительных рисков. Страх — обычное явление на медвежьих рынках. Это может заставить некоторых трейдеров покинуть рынок нерационально. Никогда не недооценивайте силу психологии фондового рынка. Страх может превратиться в панику. Эмоции играют большую роль в вашей общей торговой стратегии. Если вы хотите добиться успеха, вам нужно их освоить.'
              : 'Fear is the opposite. It is the reason why people sell early to cut losses and avoid additional risks. Fear is common in bear markets. It can cause some traders to exit the market irrationally. Never underestimate the power of stock market psychology. Fear can turn into panic. Emotions play a big role in your overall trading strategy. If you want to succeed, you need to master them.'}
          </p>
        </div>
      </div>
      <section className="psychologyBlock_container">
        <h2 className="psychologyBlock_title">
          {lang === 'ru' ? 'Почему важна психология фондового рынка?' : 'Why is stock market psychology important?'}
        </h2>

        <div className="psychologyBlock_phonesContainer">
          <img
            src={PsyhoPhone}
            alt="Два телефона с интерфейсом торгового приложения"
            className="psychologyBlock_phoneImage"
          />
        </div>

        <div className="psychologyBlock_textBlocksContainer">
          <div className="psychologyBlock_textBlockLeft">
            <p>
              {lang === 'ru' ? 'Как трейдер, вы должны понимать свои эмоции и образ мышления. Это поможет вам определить, когда вы поступаете нерационально. Представьте, что вы теряете 1 доллар... ну, Потерять 50 долларов... не идеально, но вы будете жить.'
                : "As a trader, you need to understand your emotions and way of thinking. This will help you determine when you are acting irrationally. Imagine you lose $1.... well, Losing 50 dollars. not ideal, but you'll live."}
            </p>
          </div>
          <div className="psychologyBlock_textBlockRight">
            <p>
              {lang === 'ru' ? 'А теперь представьте себе потерю тысяч долларов. Этого, вероятно, достаточно, чтобы вызвать у вас панику. А паника может заставить вас вести себя так, как вы никогда не ожидали. Вот почему вы должны понимать психологию своего фондового рынка. Если вы этого не сделаете, вы можете быть захвачены в пылу сенсации, шумихи или паники.'
                : "Now imagine losing thousands of dollars. That's probably enough to make you panic. And panic can cause you to behave in ways you never expected. That's why you must understand the psychology of your stock market. If you don't, you may be captured in the heat of sensationalism, hype, or panic."}
            </p>
          </div>
        </div>
      </section>
      <section className="trading-rules-block">
        <div className="trading-rules-block__content">
          <div className="trading-rules-block__left">
            <h3 className="trading-rules-block__title">
              {lang === 'ru' ? 'Успешный трейдер учится управлять эмоциями, даже когда все остальные их теряют. Как? Создайте свои торговые правила и придерживайтесь их. Заранее изложите свои решения, чтобы исключить эмоции из уравнения... насколько это возможно. Вот что как минимум должны охватывать ваши правила:'
                : "A successful trader learns to manage emotions even when everyone else is losing them. How? Create your trading rules and stick to them. Outline your decisions in advance to take emotion out of the equation.... as much as possible. Here's what at a minimum your rules should cover:"}
              <span className="trading-rules-block__red-square"></span>
            </h3>
          </div>
          <div className="trading-rules-block__right">
            <ul className="trading-rules-block__list">
              <li className="trading-rules-block__list-item">
                <p>
                  {lang === 'ru' ? 'Ограничения на то, сколько вы готовы получить или потерять.'
                    : 'Limits on how much you are willing to gain or lose.'}
                </p>
              </li>
              <li className="trading-rules-block__list-item">
                <p>
                  {lang === 'ru' ? 'Цены, по которым вы входите и выходите из сделки. Если вы достигли определенной цели прибыли или убытка, либо возьмите деньги, либо сократите свои убытки.'
                    : 'The prices at which you enter and exit a trade. If you have reached a certain profit or loss target, either take the money or cut your losses.'}
                </p>
              </li>
              <li className="trading-rules-block__list-item">
                <p>
                  {lang === 'ru' ? 'Самое главное, познайте себя. Занимайтесь исследованиями и изучением графиков. Вооружитесь правильными инструментами и стратегиями, чтобы принимать более правильные решения.'
                    : 'Most importantly, get to know yourself. Do your research and study the charts. Arm yourself with the right tools and strategies to make better decisions.The prices at which you enter and exit a trade. If you have reached a certain profit or loss target, either take the money or cut your losses.'}
                </p>
              </li>
              <li className="trading-rules-block__list-item">
                <p>
                  {lang === 'ru' ? 'И оставайтесь гибкими. Поэкспериментируйте с новыми идеями, например, протестируйте разные уровни стоп-лосса. Эксперименты — большая часть процесса обучения.'
                    : 'And stay flexible. Experiment with new ideas, such as testing different stop-loss levels. Experimentation is a big part of the learning process.'}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="trading-psychology-container">
        <div className="header-section">

          <h1 ref={newTitleRef} className={`main-title ${newTitleVisible ? 'fade-in' : ''}`}>
            {lang === 'ru' ? 'Эмоции, влияющие на психологию трейдинга' : 'Emotions influencing trading psychology'}
            <span className="red-square"></span>
          </h1>
          <div className="vertical-line"></div>
        </div>

        <div className="content-section">

          <div ref={newSection1Ref} className={`text-block ${newSection1Visible ? 'fade-in' : ''}`}>
            <p className="block-number">1. {lang === 'ru' ? 'Жадность' : 'Greed'}</p>
            <p className="block-text">
              {lang === 'ru' ?
                'Жадность — сильный мотиватор. Без жадности у вас не хватило бы смелости покупать акции. Особенно акции, не так ли? Жадность побуждает вас по утрам и заставляет не сдаваться. Но иногда именно поэтому вы берете на себя слишком большой риск. Рынок не подчиняется вашей воле.' :
                'Greed is a powerful motivator. Without greed, you would not have the courage to buy stocks. Especially stocks, right? Greed motivates you in the mornings and makes you not give up. But sometimes that is why you take too much risk. The market is not subject to your will.'
              }
            </p>
            <p className="block-text">
              {lang === 'ru' ?
                'Иногда это рушит сразу после крупного выигрыша. Вам становится скучно и вы начинаете беспокоиться. Торг хорошо стороне не умеет выгода. Итак, вы берете сделки, с которыми не знакомы, и надежды, что она окупится. Может быть, повезет, и ваша сделка пойдет в правильном направлении. Вы увеличиваете наш или начинаете комментарии в цене выхода. Зачем останавливаться или достигнута? Вы хотите столько, сколько можно получить на рынке. Но затем тенденция меняется. Ваши акции на готова править удачный дамб. Вы не продали по максимуму, и теперь вы не можете собрать приличную цель прибыли. Ваши доходы падают, если вы хотите избежать психологических торговых ошибок, вы должны быть кристально ясным в своих намерениях в сделке. Перед тем, как погрузиться в рынок, найдите минутку, чтобы подумать о своем сегодняшнем дне. Ваш счет поблагодарит вас за это.' :
                'Sometimes it breaks immediately after a big win. You get bored and start to worry. Trading well does not mean profit. So, you take deals you are unfamiliar with and hope they pay off. Maybe you will be lucky, and your deal will go in the right direction. You increase our or start comments on the exit price. Why stop or reach? You want as much as you can get in the market. But then the trend changes. Your shares are not ready to rule the successful dam. You did not sell at the maximum, and now you can not collect a decent profit target. Your income is falling if you want to avoid psychological trading mistakes, you must be crystal clear in your intentions in the deal. Before diving into the market, take a moment to think about your current day. Your account will thank you for it.'
              }
            </p>
          </div>

          <div ref={newSection2Ref} className={`text-block ${newSection2Visible ? 'fade-in' : ''}`}>
            <p className="block-number">2. {lang === 'ru' ? 'Страх' : 'Fear'}</p>
            <p className="block-text">
              {lang === 'ru' ?
                'Страх — непростая эмоция. Он появляется, когда мы хотим изменить привычку.' :
                'Fear is a difficult emotion. It appears when we want to change a habit.'
              }
            </p>
            <p className="block-text">
              {lang === 'ru' ?
                'Страх неудачи — довольно распространенное явление. Мы все хотим добиться успеха, и все мы один попали в наши усилия. Но оно может добавить некоторую нагрузку на нашу торговую игру.' :
                'Fear of failure is quite common. We all want to succeed, and we all fell into our efforts. But it can add some burden to our trading game.'
              }
            </p>
            <p className="block-text">
              {lang === 'ru' ?
                'Страх успеха также может иметь большое влияние. Вы можете бояться потерять доходы, если заплатите их. А успех может вывести из строя доходы и несчастных людей.' :
                'Fear of success can also have a big impact. You may be afraid of losing income if you pay it. And success can disable income and unhappy people.'
              }
            </p>
          </div>
        </div>
      </div>
      <div className="fxBrokerPage_container">
  

  <section className="howToMasterSingleColumn_container">
  <div className="fxBroker_logoTop">
    <span className="fxBroker_fx">FX</span><span className="fxBroker_broker">Broker</span>
  </div>
    <h1 className="howToMasterSingleColumn_mainTitle">
      {lang === 'ru' ? 'Как овладеть навыками торговой психологии за 7 шагов' : 'How to master trading psychology skills in 7 steps'}
      <br />
      <span className="howToMasterSingleColumn_subtitle">
        {lang === 'ru' ? 'Все хотят знать, как овладеть психологией трейдинга. Эти семь советов могут помочь...' : 'Everyone wants to know how to master trading psychology. These seven tips can help...'}
      </span>
    </h1>

    <div className="howToMasterSingleColumn_stepsContent">

      <div className="howToMasterSingleColumn_stepBlock">
        <p className="howToMasterSingleColumn_stepNumber">
          № 1. {lang === 'ru' ? 'Практика с демо счетом' : 'Practice with a demo account'}
        </p>
        <p className="howToMasterSingleColumn_stepText">
          {lang === 'ru' ?
            'Обучение демо-торговле — это столько же опыта и практики, сколько надежды и знаний. Возможно, вы еще не чувствуете себя готовым вложить свои кровно заработанные деньги. Откройте демо счет. Вы можете практиковать сделки в реальном времени без стресса и эмоций, которые возникают, когда речь идет о реальных деньгах. Демо-торговля может помочь вам обрести уверенность.' :
            'Learning demo trading is as much about experience and practice as it is about hope and knowledge. Maybe you don\'t feel ready to invest your hard-earned money yet. Open a demo account. You can practice real-time trades without the stress and emotions that arise when it comes to real money. Demo trading can help you gain confidence.'
          }
        </p>
      </div>

      <div className="howToMasterSingleColumn_stepBlock">
        <p className="howToMasterSingleColumn_stepNumber">
          № 2. {lang === 'ru' ? 'Считайте свои первые потери вознаграждением за обучение' : 'Consider your first losses a reward for learning'}
        </p>
        <p className="howToMasterSingleColumn_stepText">
          {lang === 'ru' ?
            'Нет ничего лучше, чем открыть реальный счет — даже после нескольких месяцев практики. Это просто — другое. Теперь дело за настоящими деньгами. В конце концов, стандартный симулятор способен на очень многое.' :
            'There is nothing better than opening a real account - even after several months of practice. It\'s just different. Now it\'s about real money. After all, a standard simulator is capable of a lot.'
          }
        </p>
      </div>

      <div className="howToMasterSingleColumn_stepBlock">
        <p className="howToMasterSingleColumn_stepNumber">
          № 3. {lang === 'ru' ? 'Наблюдайте за привычками успешных трейдеров' : 'Observe the habits of successful traders'}
        </p>
        <p className="howToMasterSingleColumn_stepText">
          {lang === 'ru' ?
            'Нет необходимости изобретать велосипед. Вместо этого учитесь у тысяч успешных трейдеров, которые работают до вас. Учитесь у опытных трейдеров проще, чем когда-либо. Вы можете найти парочку в Inco Invest Company. У нас есть масса бесплатных ресурсов. Например, наш канал на YouTube, наш список потенциальных сделок и, конечно же, блог Inco Invest Company (в навигации канала во вкладке Библиотека знаний). Лучшие трейдеры преуспевают на крупных рынках.' :
            'There is no need to reinvent the wheel. Instead, learn from the thousands of successful traders who have been working before you. Learn from experienced traders easier than ever. You can find a couple at Inco Invest Company. We have a ton of free resources. For example, our YouTube channel, our list of potential deals, and, course, the Inco Invest Company blog (in the channel navigation under the Library tab). The best traders succeed in big markets.'
          }
        </p>
      </div>

      <div className="howToMasterSingleColumn_stepBlock">
        <p className="howToMasterSingleColumn_stepNumber">
          № 4. {lang === 'ru' ? 'Установите стоп-лоссы, чтобы защитить свой счет' : 'Set stop losses to protect your account'}
        </p>
        <p className="howToMasterSingleColumn_stepText">
          {lang === 'ru' ?
            '“Он не может быть ниже... не так ли?” Запомните эти слова, наблюдая, как ваши любимые акции продолжают падать, пункт за пунктом. Благодаря множеству уровней поддержки и по всем показателям вы сохраните надежду.' :
            '"It can\'t get any lower... right?" Remember these words as you watch your favorite stocks continue to fall, point by point. Thanks to multiple support levels and all indicators, you will maintain hope.'
          }
        </p>
      </div>

      <div className="howToMasterSingleColumn_stepBlock">
        <p className="howToMasterSingleColumn_stepNumber">
          № 5. {lang === 'ru' ? 'Выберите свои любимые стратегии и придерживайтесь их' : 'Choose your favorite strategies and stick to them'}
        </p>
        <p className="howToMasterSingleColumn_stepText">
          {lang === 'ru' ?
            'У всех есть предпочтительная графическая модель, которая кажутся им лучше всего — голова и плечи, чаша и ручка... Поиск паттернов — важная часть психологии трейдинга. Паттерны имеют тенденцию повторяться, поэтому идентификация может помочь вам в вашей торговле.' :
            'Everyone has a preferred chart pattern that seems best to them - head and shoulders, cup and handle... Pattern recognition is an important part of trading psychology. Patterns tend to repeat themselves, so identification can help you in your trading.'
          }
        </p>
      </div>

      <div className="howToMasterSingleColumn_stepBlock">
        <p className="howToMasterSingleColumn_stepNumber">
          № 6. {lang === 'ru' ? 'Научитесь правильно читать новостные катализаторы' : 'Learn to correctly read news catalysts'}
        </p>
        <p className="howToMasterSingleColumn_stepText">
          {lang === 'ru' ?
            'Вы можете провести лучший технический анализ и все равно разориться, если не будете принимать во внимание новостные катализаторы. Большинство людей читают новости и предполагают, что они станут катализатором. Но к тому времени, когда вы прочитаете эту новость, все остальные трейдеры тоже. И они уже действовали по этому поводу.' :
            'You can do the best technical analysis and still go broke if you don\'t take news catalysts into account. Most people read the news and assume it will be a catalyst. But by the time you read this news, all other traders have too. And they have already acted on it.'
          }
        </p>
      </div>

      <div className="howToMasterSingleColumn_stepBlock">
        <p className="howToMasterSingleColumn_stepNumber">
          № 7. {lang === 'ru' ? 'Используйте скринер акций, чтобы найти свои лучшие акции для торговли' : 'Use a stock screener to find your best stocks to trade'}
        </p>
        <p className="howToMasterSingleColumn_stepText">
          {lang === 'ru' ?
            'Выбор лучших акций — непростая задача. Их так много. Трудно с оптимизмом, что разные акции делают изо дня в день. Итак, как найти полезную информацию в стопках, казалось бы, бесполезных данных?' :
            'Choosing the best stocks is not an easy task. There are so many. It\'s hard to be optimistic that different stocks perform day after day. So, how do you find useful information in seemingly useless data stacks?'
          }
        </p>
      </div>
    </div>
  </section>
</div>
      {/* {lang === 'ru' ? 'ТЕКСТ' : 'TEXT'} */}
          </>
    );
  }
    