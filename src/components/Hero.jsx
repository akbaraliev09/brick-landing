import { IMAGES } from '../config/site.js';
import LeadForm from './LeadForm.jsx';

export default function Hero() {
  return (
    <section id="top" className="hero" style={{ backgroundImage: `url(${IMAGES.hero})` }}>
      <div className="hero__overlay" />
      <div className="container hero__inner">
        <div className="hero__text">
          <h1>Лучшие решения для облицовки вашего дома!</h1>
          <p className="hero__years">10 лет на рынке!</p>
          <a href="#products" className="btn">
            Посмотреть каталог
          </a>
        </div>

        <aside className="hero__panel">
          <h2>Оставьте вашу заявку</h2>
          <p>Заполните форму и мы перезвоним!</p>
          <LeadForm variant="hero" source="hero" />
        </aside>
      </div>
      <span className="hero__marker" aria-hidden="true" />
    </section>
  );
}
