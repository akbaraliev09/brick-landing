import { useEffect, useState } from 'react';
import { IMAGES } from '../config/site.js';
import SectionTitle from './SectionTitle.jsx';
import { ArrowLong } from './Icons.jsx';

const GAP = 16; 

export default function Works() {
  const slides = IMAGES.works;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const last = slides.length - 1;

  const prev = () => setIndex((i) => (i === 0 ? last : i - 1));
  const next = () => setIndex((i) => (i === last ? 0 : i + 1));

  useEffect(() => {
    if (paused || slides.length < 2) return undefined;
    const t = setInterval(() => setIndex((i) => (i === last ? 0 : i + 1)), 6000);
    return () => clearInterval(t);
  }, [paused, last, slides.length]);

  return (
    <section id="works" className="section works">
      <div className="container">
        <SectionTitle>Наши работы</SectionTitle>
      </div>

      <div
        className="slider"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="slider__track"
          style={{ transform: `translateX(calc(-${index} * (var(--slide-w) + ${GAP}px)))` }}
        >
          {slides.map((s, i) => (
            <figure key={s.src + i} className={`slider__slide ${i === index ? 'is-active' : ''}`}>
              <img src={s.src} alt={s.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>

      <div className="slider__controls">
        <button type="button" onClick={prev} aria-label="Предыдущее фото">
          <ArrowLong dir="left" />
        </button>
        <div className="slider__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={i === index ? 'is-active' : ''}
              aria-label={`Фото ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <button type="button" onClick={next} aria-label="Следующее фото">
          <ArrowLong />
        </button>
      </div>
    </section>
  );
}
