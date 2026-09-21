import React from 'react';

const VideoCard = ({ poster, title, onClick }) => {
  return (
    <div className="video-card" onClick={onClick}>
      {/* Обкладинка відео */}
      <img 
        src={poster} 
        alt={title || "Video preview"} 
        className="video-card__poster" 
      />
      
      {/* Кнопка Play по центру */}
      <div className="video-card__play-btn">
        <span className="play-icon">▶</span>
      </div>

      {/* Заголовок/напис поверх картки */}
      {title && <span className="video-card__title">{title}</span>}
    </div>
  );
};

export default VideoCard;