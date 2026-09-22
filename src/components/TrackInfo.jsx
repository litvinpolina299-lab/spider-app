import React from 'react';

// Компонент приймає об'єкт currentTrack
const TrackInfo = ({ currentTrack }) => {
  // Якщо трек ще не вибрано, нічого не відображаємо
  if (!currentTrack) return null;

  return (
    <div className="track-info">
      <h2 className="artist-name">{currentTrack.artist}</h2>
      <p className="song-title">{currentTrack.title}</p>
    </div>
  );
};

export default TrackInfo;