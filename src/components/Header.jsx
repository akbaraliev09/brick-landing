import { SITE, img } from '../config/site.js';
import { useEffect, useState } from 'react';
import { PhoneIcon } from './Icons.jsx';

const LINKS = [
  { href: '#about', label: 'О нас' },
  { href: '#products', label: 'Продукция' },
  { href: '#contacts', label: 'Контакты' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`header ${scrolled || open ? 'header--solid' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="header__logo" onClick={close}>
  <img src={img('logo.png')} alt="Логотип компании" />
</a>

        <nav className={`header__nav ${open ? 'is-open' : ''}`} aria-label="Основная навигация">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href={`tel:${SITE.phones[0].replace(/[^+\d]/g, '')}`} className="header__call header__call--mobile">
            <PhoneIcon /> Связаться сейчас
          </a>
        </nav>

        <a href={`tel:${SITE.phones[0].replace(/[^+\d]/g, '')}`} className="header__call">
          <PhoneIcon /> Связаться сейчас
        </a>

        <button
          type="button"
          className={`burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
