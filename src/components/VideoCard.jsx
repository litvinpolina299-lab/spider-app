import React from 'react';

const VideoCard = ({ videoId, onClick }) => {
  // Формуємо посилання на обкладинку YouTube
  const posterUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="video-card" onClick={onClick}>
      {/* Обкладинка відео */}
      <img 
        src={posterUrl} 
        alt="YouTube video preview" 
        className="video-card__poster" 
      />
      
      {/* Біло-червона кнопка PLAY по центру */}
      <div className="video-card__play-btn">
        <span className="play-icon">▶</span>
      </div>
    </div>
  );
};

export default VideoCard;