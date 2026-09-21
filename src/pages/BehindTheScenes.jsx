import React, { useState } from 'react';
import VideoCard from '../components/VideoCard';
import VideoModal from '../components/VideoModal';

const videosData = [
  {
    id: 1,
    videoId: 'wjMqjsUoPYU',
    poster: 'https://img.youtube.com/vi/wjMqjsUoPYU/hqdefault.jpg',
  },
  {
    id: 2,
    videoId: 'dqBxKIzVTuk',
    poster: 'https://img.youtube.com/vi/dqBxKIzVTuk/hqdefault.jpg',
  },
  {
    id: 3,
    videoId: 'Fa7gQSl6ZWc',
    poster: 'https://img.youtube.com/vi/Fa7gQSl6ZWc/hqdefault.jpg',
  },
  {
    id: 4,
    videoId: 'JWQ4pLLq23U',
    poster: 'https://img.youtube.com/vi/JWQ4pLLq23U/hqdefault.jpg',
  },
  {
    id: 5,
    videoId: 'QteOt8XAbIY',
    poster: 'https://img.youtube.com/vi/QteOt8XAbIY/hqdefault.jpg',
  },
  {
    id: 6,
    videoId: 'wIjXBxivmm8',
    poster: 'https://img.youtube.com/vi/wIjXBxivmm8/hqdefault.jpg',
  },
  {
    id: 7,
    videoId: 'LMZPnwz_dT0',
    poster: 'https://img.youtube.com/vi/LMZPnwz_dT0/hqdefault.jpg',
  },
  {
    id: 8,
    videoId: 'XG_CimbpVMQ',
    poster: 'https://img.youtube.com/vi/XG_CimbpVMQ/hqdefault.jpg',
  },
  {
    id: 9,
    videoId: 'Uty1B1GuO7E',
    poster: 'https://img.youtube.com/vi/Uty1B1GuO7E/hqdefault.jpg',
  },
  {
    id: 10,
    videoId: 'PuvNtC9GLWQ',
    poster: 'https://img.youtube.com/vi/PuvNtC9GLWQ/hqdefault.jpg',
  },
  {
    id: 11,
    videoId: 'WaD4BUb-_aA',
    poster: 'https://img.youtube.com/vi/WaD4BUb-_aA/hqdefault.jpg',
  },
  {
    id: 12,
    videoId: 'UR9Cz0RtBnk',
    poster: 'https://img.youtube.com/vi/UR9Cz0RtBnk/hqdefault.jpg',
  },
];

const BehindTheScenes = () => {
  const [activeVideoId, setActiveVideoId] = useState(null);

  return (
    <div className="bts-page">
      {/* Hero-банер */}
      <section className="bts-hero">
        <div className="bts-hero__overlay">
          <h1 className="bts-hero__title">BEHIND THE SCENES</h1>
        </div>
      </section>

      {/* Секція з сіткою та стікерами */}
      <section className="bts-content-page">
        <div className="bts-container">
          
          {/* Стікери як картинки (вкажи точні шляхи до своїх файлів у public) */}
          <img src="/images/behindthescenes/dude.png" alt="Dude sticker" className="sticker sticker--dude" />
          <img src="/images/behindthescenes/huh.png" alt="Huh sticker" className="sticker sticker--huh" />
          <img src="/images/behindthescenes/bang.png" alt="Bang sticker" className="sticker sticker--bang" />
          <img src="/images/behindthescenes/spidey-sticker.png" alt="Hello sticker" className="sticker sticker--hello" />
          <img src="/images/behindthescenes/question.png" alt="Question" className="sticker sticker--question" />

          {/* Сітка 3x4 із картками */}
          <div className="bts-grid">
            {videosData.map((video) => (
              <VideoCard
                key={video.id}
                videoId={video.videoId}
                onClick={() => setActiveVideoId(video.videoId)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Модальне вікно */}
      <VideoModal 
        videoId={activeVideoId} 
        onClose={() => setActiveVideoId(null)} 
      />
    </div>
  );
};

export default BehindTheScenes;