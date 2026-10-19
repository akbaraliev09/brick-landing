import { SITE } from '../config/site.js';
import { PhoneIcon, PinIcon } from './Icons.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col">
          <h4>Навигация</h4>
          <nav>
            <a href="#about">О нас</a>
            <a href="#products">Каталог</a>
            <a href="#works">Наши работы</a>
          </nav>
        </div>

        <div className="footer__col">
          <h4>Контакты</h4>
          {SITE.phones.map((p) => (
            <a key={p} href={`tel:${p.replace(/[^+\d]/g, '')}`} className="footer__line">
              <PhoneIcon size={16} /> {p}
            </a>
          ))}
          <h4 className="footer__sub">Адрес</h4>
          <p className="footer__line">
            <PinIcon size={16} /> {SITE.address}
          </p>
        </div>

        <div className="footer__map">
          <iframe title="Карта: наш адрес" src={SITE.mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>

      <div className="container footer__bottom">
        <span>Разработано Best Solutions</span>
      </div>
    </footer>
  );
}
