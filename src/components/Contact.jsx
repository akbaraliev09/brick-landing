import { IMAGES, SITE } from '../config/site.js';
import LeadForm from './LeadForm.jsx';

export default function Contact() {
  return (
    <section id="contacts" className="section contact">
      <div className="container contact__grid">
        <div className="contact__form">
          <h2>Оставьте вашу заявку</h2>
          <p>Заполните форму и мы перезвоним вам для консультации</p>
          <LeadForm variant="light" withComment source="contact" />
        </div>

        <div className="contact__divider" aria-hidden="true" />

        <div className="contact__promo">
          <div className="promo" style={{ backgroundImage: `url(${IMAGES.promo})` }}>
            <p>{SITE.promoText}</p>
          </div>
          <a href={SITE.priceList} download className="btn">
            Скачать прайс-лист
          </a>
        </div>
      </div>
    </section>
  );
}
