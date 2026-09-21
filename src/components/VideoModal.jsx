import React from 'react';

const VideoModal = ({ videoId, onClose }) => {
  // Якщо немає ідентифікатора, вікно не відображається
  if (!videoId) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Кнопка закриття (хрестик) */}
        <button className="modal-close-btn" onClick={onClose}>
          ✕
        </button>

        {/* Плеєр YouTube */}
        <div className="video-responsive">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;