import { useState } from 'react';
import { IMAGES, VIDEO } from '../config/site.js';

export default function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const hasVideo = Boolean(VIDEO.youtubeId || VIDEO.src);

  if (playing && hasVideo) {
    return (
      <div className="video">
        {VIDEO.youtubeId ? (
          <iframe
            src={`https://www.youtube.com/embed/${VIDEO.youtubeId}?autoplay=1&rel=0`}
            title="Видео о компании"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video src={VIDEO.src} poster={IMAGES.videoPoster} controls autoPlay playsInline />
        )}
      </div>
    );
  }

  return (
    <div className="video">
      <img src={IMAGES.videoPoster} alt="Склад кирпича, вид сверху" />
      <button type="button" className="video__play" aria-label="Смотреть видео" onClick={() => setPlaying(true)}>
        <svg width="72" height="72" viewBox="0 0 72 72" aria-hidden="true">
          <path d="M20 10l44 26-44 26z" fill="#fff" />
        </svg>
      </button>
      {playing && !hasVideo && (
        <div className="video__hint">
          Видео ещё не добавлено. Откройте <code>src/config/site.js</code> и заполните блок <code>VIDEO</code>.
        </div>
      )}
    </div>
  );
}
