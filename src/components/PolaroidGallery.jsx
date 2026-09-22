import React from 'react';

const PolaroidGallery = ({ tracks, currentIndex, setCurrentIndex }) => {
  // Функція для перемикання треку при кліку на картку
  const handleCardClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="polaroid-gallery">
      {tracks.map((track, index) => {
        // Перевіряємо, чи ця картка є вибраною (активною)
        const isActive = index === currentIndex;

        return (
          <div
            key={track.id}
            className={`polaroid-card ${isActive ? 'active' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-image">
              <img src={track.cover} alt={track.title} />
            </div>
            <div className="card-info">
              <h4>{track.artist}</h4>
              <p>{track.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PolaroidGallery;