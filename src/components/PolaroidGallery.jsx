import React from 'react';

const PolaroidGallery = ({ tracks, currentIndex, setCurrentIndex }) => {
  const total = tracks.length;

  return (
    <div className="polaroid-gallery-wrapper">
      <div className="polaroid-gallery">
        {tracks.map((track, index) => {
          let offset = index - currentIndex;

          // Корекція циклу
          if (offset < -Math.floor(total / 2)) offset += total;
          if (offset > Math.floor(total / 2)) offset -= total;

          // Якщо картка за межами видимості (більше 2 слотів убік)
          const isHidden = Math.abs(offset) > 2;
          
          // Визначаємо клас слота
          const slotClass = isHidden 
            ? (offset > 0 ? 'slot-hidden-right' : 'slot-hidden-left')
            : `slot-${offset < 0 ? '-' + Math.abs(offset) : offset}`;
          
          const isActive = offset === 0;

          return (
            <div
              key={track.id || index}
              className={`polaroid-card ${slotClass} ${isActive ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
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
    </div>
  );
};

export default PolaroidGallery;