import { useEffect } from 'react';
import { SITE } from '../config/site.js';

export default function ProductModal({ product, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const goToForm = () => {
    onClose();
    setTimeout(() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' }), 50);
  };

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={product.name} onClick={onClose}>
      <div className="modal__box" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal__close" aria-label="Закрыть" onClick={onClose}>
          ×
        </button>
        <div className="modal__img">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="modal__info">
          <span className="modal__brand">{product.brand}</span>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <ul>
            <li>
              <span>Размер</span> {product.size}
            </li>
            <li>
              <span>Количество в упаковке</span> {product.pack}
            </li>
          </ul>
          <div className="modal__actions">
            <button type="button" className="btn" onClick={goToForm}>
              Оставить заявку
            </button>
            <a href={`tel:${SITE.phones[0].replace(/[^+\d]/g, '')}`} className="btn btn--outline">
              Позвонить
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
