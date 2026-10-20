import { useRef, useState } from 'react';
import { IMAGES, VIDEO } from '../config/site.js';

const PlayButton = ({ onClick }) => (
  <button type="button" className="video__play" aria-label="Смотреть видео" onClick={onClick}>
    <svg width="72" height="72" viewBox="0 0 72 72" aria-hidden="true">
      <path d="M20 10l44 26-44 26z" fill="#fff" />
    </svg>
  </button>
);

export default function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  // Вариант 1: YouTube (обложка берётся с самого YouTube)
  if (VIDEO.youtubeId) {
    return (
      <div className="video">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${VIDEO.youtubeId}?autoplay=1&rel=0`}
            title="Видео о компании"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img src={`https://i.ytimg.com/vi/${VIDEO.youtubeId}/hqdefault.jpg`} alt="Видео о компании" />
            <PlayButton onClick={() => setPlaying(true)} />
          </>
        )}
      </div>
    );
  }

  // Вариант 2: свой mp4 — показываем первый кадр видео
  if (VIDEO.src) {
    const start = () => {
      setPlaying(true);
      videoRef.current?.play();
    };
    return (
      <div className="video">
        <video
          ref={videoRef}
          src={`${VIDEO.src}#t=0.1`}
          preload="metadata"
          controls={playing}
          playsInline
          onEnded={() => setPlaying(false)}
        />
        {!playing && <PlayButton onClick={start} />}
      </div>
    );
  }

  // Видео не добавлено
  return (
    <div className="video">
      <img src={IMAGES.videoPoster} alt="Склад кирпича, вид сверху" />
      <div className="video__hint">
        Видео ещё не добавлено. Откройте <code>src/config/site.js</code> и заполните блок <code>VIDEO</code>.
      </div>
    </div>
  );
}