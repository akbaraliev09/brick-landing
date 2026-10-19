import { useState } from 'react';
import { BRANDS, DEFAULT_BRAND, PRODUCTS } from '../data/products.js';
import { SITE } from '../config/site.js';
import SectionTitle from './SectionTitle.jsx';
import ProductModal from './ProductModal.jsx';
import { ArrowLong } from './Icons.jsx';

export default function Products() {
  const [brand, setBrand] = useState(DEFAULT_BRAND);
  const [selected, setSelected] = useState(null);

  return (
    <section id="products" className="section products">
      <div className="container">
        <SectionTitle>Продукция</SectionTitle>

        <div className="tabs" role="tablist">
          {BRANDS.map((b) => (
            <button
              key={b}
              type="button"
              role="tab"
              aria-selected={b === brand}
              className={`tabs__item ${b === brand ? 'is-active' : ''}`}
              onClick={() => setBrand(b)}
            >
              {b}
            </button>
          ))}
        </div>

        <div className="grid">
          {PRODUCTS[brand].map((p) => (
            <article key={p.id} className="card">
              <div className="card__img">
                <img src={p.image} alt={p.name} loading="lazy" />
              </div>
              <h3 className="card__title">{p.name}</h3>
              <p className="card__meta">
                Размер: {p.size}
                <br />
                Количество в упаковке: {p.pack}
              </p>
              <button type="button" className="card__more" onClick={() => setSelected(p)}>
                Узнать больше <ArrowLong />
              </button>
            </article>
          ))}
        </div>

        <div className="center">
          <a href={SITE.priceList} download className="btn">
            Скачать прайс-лист
          </a>
        </div>
      </div>

      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
