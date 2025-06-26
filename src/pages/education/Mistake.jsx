import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Education.css';
import { useLang } from '../../components/LangContext';
import BlueBlock from '../../components/BlueBlock';
import MistakeHead from '../../media/MistakeHead.png'
import LapPhone from '../../media/LapPhone.png'
import { Helmet } from 'react-helmet-async';


export default function Mistake() {
  const { lang } = useLang();

 const blocks = [
    {
      title: {
        ru: 'Недостаток опыта',
        en: 'Lack of Experience',
      },
      text: {
        ru: `Это не столько ошибка, сколько факт, с которым новички никак не хотят мириться. Конечно, у того, кто провел перед торговой платформой длинные часы, недели и месяцы куда больше шансов разобраться в текущей ситуации на графике, нежели у того, кто только что открыл терминал.`,
        en: `This isn’t so much a mistake as a fact—newbies simply refuse to accept it. Of course, someone who has spent long hours, weeks, even months in front of a trading platform has far more chance to figure out the current chart situation than someone who has just opened it.`,
      },
      bgText: {
        ru: 'ОПЫТ',
        en: 'EXPERIENCE',
      }
    },
    {
      title: {
        ru: 'Необоснованные ожидания',
        en: 'Unfounded Expectations',
      },
      text: {
        ru: `Это и ошибка, и факт, который вам внушают все вокруг. Великие трейдеры современности ведут аккаунты в соцсетях и «учат, как надо». А аналитики финансовых рынков предупреждают, что сколько-то там трейдеров теряют деньги — но тут же рассказывают, какие индикаторы выставить на графике, чтобы «поймать тренд».`,
        en: `It’s both an error and a fact that everyone around you instills. Today's top traders post on social media and "teach you how it's done." Financial analysts warn some traders lose money—but promptly show which indicators to set on the chart to "catch the trend."`,
      },
      bgText: {
        ru: 'ОЖИДАНИЯ',
        en: 'EXPECTATIONS',
      }
    },
    {
      title: {
        ru: 'Отсутствие надежного торгового плана',
        en: 'No Reliable Trading Plan',
      },
      text: {
        ru: `Итак, вот оно: вам нужен план. Торговый план — это предсказуемые коэффициенты как прибыльных, так и убыточных сделок за определенный период. Когда у вас будет такая четкая таблица, из вашей жизни исчезнут переживания по поводу неудачной сделки. Каждая из них станет критерием в строгой торговой системе, а каждый убыток будет просто строкой в списке, равно как и профит.`,
        en: `Here it is: you need a plan. A trading plan is predictable ratios of winning and losing trades over a set period. With such a clear table, you’ll eliminate worries about a bad trade. Each trade becomes a criterion in your system, and each loss just a line item—just like your profit.`,
      },
      bgText: {
        ru: 'ПЛАН',
        en: 'PLAN',
      }
    },
    {
      title: {
        ru: 'Недостаток дисциплины',
        en: 'Lack of Discipline',
      },
      text: {
        ru: `Тот план, который вы разработаете, станет для вас путеводной звездой или навигатором, показывая, в каком направлении двигаться. Рынок пластичен: он сильно зависит от психологии толпы трейдеров по ту сторону монитора. Ваша задача — не поддаваться на каждую провокацию цен, а придерживаться плана. Его пункт должен срабатывать для вас как приказ.`,
        en: `The plan you create becomes your guiding star or navigator, showing which direction to move. Markets are fluid—they hinge on the psychology of the crowd behind the screen. Your job is not to react to every price provocation, but to stick to the plan. Each point should execute like an order.`,
      },
      bgText: {
        ru: 'ДИСЦИПЛИНА',
        en: 'DISCIPLINE',
      }
    },
  ];
  const texts = {
    howWorks: {
        title: {
          ru: 'Неумение использовать стоп-лосс и тейк-профит',
          en: 'Inability to use stop loss and take profit'
        },
        mainPoint: {
          ru: 'Эту ошибку еще можно назвать «Я успею закрыть руками». И тут же ехидный ответ: «Нет, не успеешь».',
          en: "This mistake can also be called “I'll have time to close my hands”. And then the snide reply: “No, you won't.”"
        },
        leftText: {
          ru: 'Как выглядит такая ситуация: трейдер открывает сделку и собирается сидеть наблюдать за ценой, пока позиция не выйдет хоть в какой-нибудь плюс, чтобы потом быстро закрыть ее. Как полагают некоторые трейдеры, 20 пунктов от открытия сделки – слишком далеко для Take Profit, а 10 пунктов для Stop Loss – слишком близко. Терять деньги никому не хочется, а получить мало-мальскую прибыль – почему бы и нет! Тем более, «я же сижу и слежу за графиком; что может случиться?»',
          en: 'What this situation looks like: a trader opens a trade and is going to sit watching the price until the position is at least in the plus side, so that he can close it quickly. Some traders believe that 20 pips from the opening of the deal is too far for Take Profit, and 10 pips for Stop Loss is too close. No one wants to lose money, but to get a small profit - why not! Moreover, “I am sitting and watching the chart; what can happen?”'
        },
        rightText: {
          ru: 'А случиться может следующее: цена вдруг резко развернется и уведет вашу позицию в минус. Стоп лосса-то у вас нет, когда будете закрывать? Скорее всего, вообще не будете, ожидая, что ситуация изменится, и все-таки график пойдет в вашу сторону. Как это часто бывает, цена никуда не возвращается, а вы – теряете сумму на балансе счета.',
          en: "And the following may happen: the price will suddenly turn around and take your position into a minus. You don't have a stop loss, when will you close it? Most likely, you will not close at all, expecting that the situation will change and the chart will still go in your direction. As it often happens, the price does not return, and you lose the amount on your account balance."
        },
        bottomLeftText: {
          ru: 'Так может произойти, к примеру, потому, что пока вы наблюдали за ценой, вышли важные новости, или же политический спикер высказался по ключевому национальному вопросу. Рынок молниеносно отреагировал, а вы об этом не знали и не ожидали.',
          en: "This can happen, for example, because while you were watching the price, important news came out, or a political speaker spoke on a key national issue. The market reacted lightning fast, but you didn't know about it and didn't expect it."
        },
        bottomRightText: {
          ru: 'Чтобы выдерживать подобные внезапные просадки без Стоп лосса и Тейк профита, у вас должен быть внушительный депозит на счете. Буквально непотопляемый. В противном случае, без этих двух параметров риск-менеджмента вы далеко не уедете.',
          en: 'To withstand such sudden drawdowns without Stop Loss and Take Profit, you must have an impressive deposit on your account. Literally unsinkable. Otherwise, you will not get far without these two risk management parameters.'
        }
      },
  }
  const txt = {
    impactSpread: {
      title: {
        ru: 'Игнорирование изменений спреда и влияния спреда на прибыль',
        en: 'Ignoring spread changes and spread impact on profit'
      },
      intro: {
        ru: `Игнорирование изменений спреда и влияния спреда на прибыль.
  Когда вы планируете открыть позицию, необходимо помнить, что по той цене, которую вы видите на платформе, сделка не откроется. Есть комиссия, установленная рынком и брокером: это разница между ценой bid (Bid) и ask (Ask).`,
        en: `Ignoring spread changes and spread impact on profit.
  When you plan to open a position, remember that at the price you see, the order won’t execute immediately. The broker’s commission—the difference between Bid and Ask—applies.`
      },
      detail: {
        ru: `Таким образом, ваша позиция откроется немного «хуже» рынка: ниже или выше текущей цены — как раз на размер спреда. Представим ситуацию: вы собираетесь торговать на новостях, а ваш брокер на это время обычно расширяет спред. Вместо того, чтобы быстро войти на рынок и «поймать» скачок цены, вы застрянете в убытке, из которого еще предстоит выбраться. Вот почему каждый раз перед открытием позиции необходимо обращать внимание на то, какой сейчас размер спреда по выбранному активу. Рассчитать все остальные параметры по сделке вы сможете при помощи торговых онлайн-калькуляторов.`,
        en: `Thus your order will open a little “worse” than the market: below or above the current price by exactly the spread amount. Imagine trading news—many brokers widen spreads at such times. Instead of jumping in and catching the move, you’re stuck at a loss you then must overcome. That’s why before every entry you must check the current spread for your chosen instrument. You can calculate all other trade parameters using online calculators.`
      }
    }
  };
  return (
    <>
    <Helmet>
    <title>10 главных ошибок начинающих трейдеров | Как их избежать | FXBroker</title>
    <meta name="description" content="Узнайте о самых распространенных ошибках, которые совершают трейдеры-новички, и как они приводят к убыткам. Учитесь на чужом опыте вместе с FXBroker." />
</Helmet>
    <section 
      className="fundamentals-block" 
      style={{ backgroundImage: `url(${MistakeHead})` }}
    >
      <div className="fundamentals-block__overlay" />

      <div className="fundamentals-block__inner">
        <div className="fundamentals-block__content">
          <h2 className="fundamentals-block__title">
            {lang === 'ru'
              ? '10 ошибок новичка на рынках'
              : '10 rookie mistakes in the markets'}
            <span className="fundamentals-block__highlight">
              {lang === 'ru'
                ? 'Избегайте распространенных ошибок'
                : 'Avoid common mistakes'}
            </span>
          </h2>
          <p className="fundamentals-block__subtitle">
            {lang === 'ru'
              ? 'Не делайте ошибок – откройте счет и начинайте учиться с нами'
              : 'Make no mistake – open an account and start learning with us'}
          </p>
          <button className="fundamentals-block__button">
            {lang === 'ru' ? 'Открыть счет' : 'Open an account'}
          </button>
        </div>
      </div>
    </section>

    <section className="zigzag-blocks">
      <div className="zigzag-blocks__container">
        {blocks.map((block, index) => (
          <div
            key={index}
            className={`zigzag-blocks__card zigzag-blocks__card--${index % 2 === 0 ? 'top' : 'bottom'}`}
            data-bg={block.bgText[lang]}
          >
            <h3 className="zigzag-blocks__card-title">
              {block.title[lang]}
            </h3>
            <p className="zigzag-blocks__card-text">
              {block.text[lang]}
            </p>
          </div>
        ))}
      </div>
    </section>
    <div className="forex-how-works">
        <div className="forex-how-works-header">
          <div className="forex-how-works-title">
            <h2>{texts.howWorks.title[lang]}</h2>
          </div>
          <div className="forex-how-works-main-point">
            <p>{texts.howWorks.mainPoint[lang]}</p>
          </div>
        </div>
        
        <div className="forex-how-works-content">
          <div className="forex-how-works-box">
            <p>{texts.howWorks.leftText[lang]}</p>
          </div>
          
          <div className="forex-how-works-box">
            <p>{texts.howWorks.rightText[lang]}</p>
          </div>
        </div>
        
        <div className="forex-how-works-bottom">
          <div className="forex-how-works-box">
            <p>{texts.howWorks.bottomLeftText[lang]}</p>
          </div>
          
          <div className="forex-how-works-box">
            <p>{texts.howWorks.bottomRightText[lang]}</p>
          </div>
        </div>
      </div>

      <section className="positions-block">
      <div className="positions-block__inner">
        <div className="positions-block__left">
          <h2 className="positions-block__title">
          {lang === 'ru' 
            ? 'Слишком много открытых позиций' 
            : 'Too many open positions'}
            <span className="positions-block__marker">■</span>
          </h2>
        </div>
        <div className="positions-block__divider" />
        <div className="positions-block__right">
          <p className="positions-block__text">
          {lang === 'ru' 
            ? 'Ошибки трейдера обычно сводятся к тому, что хочется открыться и на покупку, и на продажу, и по фунту, и по евро, и по Apple («а что, акции же растут, а вы говорили не держать все яйца в одной корзине»)...' 
            : "Trader's mistakes usually come down to the fact that you want to open to buy and sell, and the pound, and the euro, and Apple (“why, the stock is growing, and you said not to keep all the eggs in one basket”)...."} <br /><br />
            {lang === 'ru' 
            ? 'Давайте так: сначала – одна сделка, потом – другая. Сначала по одному активу, потом – по другому. И не на весь депозит, а на 10% от него.' 
            : "Let's do it this way: first one deal, then another. First on one asset, then on another. And not the entire deposit, but 10% of it."} <br /><br />
            {lang === 'ru' 
            ? 'Почему только на 10%? Возвращаемся к предыдущему пункту. Небольшая сделка и большой остаточный капитал на счете помогут вам пережить глубокую просадку, если друг она будет иметь место. В противном случае можно словить Stop Out, при котором ваши позиции закроются одна за другой, поскольку баланс вашего счета не способен будет их обеспечивать.' 
            : "Why only 10%? Let's go back to the previous point. A small trade and a large residual capital on your account will help you survive a deep drawdown, if any. Otherwise, you may get a Stop Out, when your positions will be closed one after another, because your account balance will not be able to cover them."} <br /><br />
            {lang === 'ru' 
            ? 'Психологи заметили, что в фокусе внимания человека могут одновременно оставаться лишь до 7 не связанных между собой образов. Это правило можно применить и к числу открытых сделок, требующих пристального наблюдения. Если же это долгосрочные сделки, о которых можно забыть на дни и недели, то их может быть больше, но это уже долгосрочные инвестиции, а не трейдинг. Использование кредитного плеча в таком случае должно быть минимальным.Исключение из данного правила – специально настроенный торговый робот, задача которого – открывать много мелких сделок. Однако создавать и запускать его следует лишь при условии, что вы понимаете, какой именно алгоритм в него закладываете, и как он будет работать.' 
            : "Psychologists have noticed that only up to 7 unrelated images can remain in the focus of a person's attention at the same time. This rule can be applied to the number of open deals that require close observation. If these are long-term deals, which can be forgotten about for days and weeks, there can be more of them, but this is already a long-term investment, not trading. The use of leverage in this case should be minimal. The exception to this rule is a specially configured trading robot, the task of which is to open many small deals. However, it should be created and launched only if you understand what kind of algorithm you are putting into it and how it will work."} <br /><br />
            {lang === 'ru' 
            ? 'Советника мульти-позиционера надо тестировать на демо-счете, и не только на исторических котировках, но и на реальном рынке. При этом важно помнить, что торговля с высоким числом открытых сделок – высокорисковая, то есть с повышенными рисками как убытков, так и прибыли.' 
            : 'A multi-position Expert Advisor should be tested on a demo account, not only on historical quotes, but also on the real market. It is important to remember that trading with a high number of open trades is high-risk, i.e. with increased risks of both losses and profits.'}
          </p>
        </div>
      </div>
    </section>
    <section className="impact-spread-block">
      <div className="impact-spread-block__inner">
        <div className="impact-spread-block__left">
          <h2 className="impact-spread-block__title">
            {txt.impactSpread.title[lang]}
            <span className="impact-spread-block__marker">■</span>
          </h2>
          <div className="impact-spread-block__text impact-spread-block__text--intro">
            {txt.impactSpread.intro[lang]}
          </div>
          <div className="impact-spread-block__text impact-spread-block__text--detail">
            {txt.impactSpread.detail[lang]}
          </div>
        </div>
        <div className="impact-spread-block__right">
          <img
            src={LapPhone}
            alt="Trading platforms on laptop and phones"
            className="impact-spread-block__image"
          />
        </div>
      </div>
    </section>
    </>
  );
}
