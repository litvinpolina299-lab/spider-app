import React from 'react';

const PolaroidGallery = ({ tracks, currentIndex, setCurrentIndex }) => {
  const totalTracks = tracks.length;

  // Формуємо масив з 5 видимих індексів: [-2, -1, 0, 1, 2]
  const visibleSlots = [-2, -1, 0, 1, 2];

  return (
    <div className="polaroid-gallery-wrapper">
      <div className="polaroid-gallery">
        {visibleSlots.map((offset) => {
          // Зациклюємо вибір індексу, щоб карусель горталася безкінечно
          let trackIndex = (currentIndex + offset) % totalTracks;
          if (trackIndex < 0) trackIndex += totalTracks;

          const track = tracks[trackIndex];
          const isCenter = offset === 0;

          return (
            <div
              key={`${track.id}-${offset}`}
              className={`polaroid-card slot-${offset} ${isCenter ? 'active' : ''}`}
              onClick={() => setCurrentIndex(trackIndex)}
            >
              <div className="card-image">
                <img src={track.cover || '/images/default-cover.jpg'} alt={track.title} />
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