
import './style-components.css';
import { useLang } from './LangContext';

import Coin from '../media/Coin.png';
import Apple from '../media/Apple.png';
import Gold from '../media/Gold.png';
import Bitcoin from '../media/Bitcoin.png';
import index from '../media/Index.png';

const marqueeItems = [
  { img: Coin, value: '46', label: { ru: 'Валюта', en: 'Currency' } },
  { img: Apple, value: '30', label: { ru: 'Акции США', en: 'U.S. Stocks' } },
  { img: Gold, value: '6',  label: { ru: 'Gold, Silver, PA', en: 'Gold, Silver, PA' }, isGold: true },
  { img: Bitcoin, value: '15', label: { ru: 'Криптовалют', en: 'Cryptocurrency' } },
  { img: index, value: '13', label: { ru: 'Индексов', en: 'Indexes' } },
];

export default function MarqueeTicker() {
  const { lang } = useLang();

  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="marquee-section">
      <div className="marquee-inner">
        {items.map((item, idx) => (
          <div key={idx} className="marquee-item">
            <img
              src={item.img}
              alt={item.label[lang]}
              className={item.isGold ? 'marquee-img-gold' : 'marquee-img'}
            />
            <div className='marquee-text'>
                <p className="marquee-value">{item.value}</p>
                <p className="marquee-label">{item.label[lang]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
