import React, { useState } from 'react';
import TrackInfo from "../components/TrackInfo";
import PolaroidGallery from "../components/PolaroidGallery";

// 1. Список ваших пісень (масив даних)
const TRACKS_DATA = [
  {
    id: 1,
    title: "Space age love song",
    artist: "A flock of seagulls",
    cover: "/images/seagulls.jpg",
    src: "/audio/space-age-love-song.mp3"
  },
  {
    id: 2,
    title: "Blitzkrieg Bop",
    artist: "Ramones",
    cover: "/images/ramones.jpg",
    src: "/audio/blitzkrieg-bop.mp3"
  },
  {
    id: 3,
    title: "The Underdog",
    artist: "Spoon",
    cover: "/images/spoon.jpg",
    src: "/audio/the-underdog.mp3"
  }
];

function AudioArchivePage() {
  // 2. Стан для збереження індексу поточного треку (за замовчуванням перший — 0)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Отримуємо об'єкт поточного треку
  const currentTrack = TRACKS_DATA[currentIndex];

  return (
    <div className="audio-archive-page">
      {/* Тут ваша вступна картинка-колаж */}
      <div className="hero-section">
        <img src="/images/spidey-hero-collage.jpg" alt="Spiderman Header" />
      </div>

      <h1 className="archive-title">SPIDERMAN Music Archive</h1>

      {/* Компонент з картками-прямокутниками */}
      <PolaroidGallery 
        tracks={TRACKS_DATA} 
        currentIndex={currentIndex} 
        setCurrentIndex={setCurrentIndex} 
      />

      {/* Ваш компонент з інформацією про трек */}
      <TrackInfo currentTrack={currentTrack} />

      {/* ТУТ буде ваш компонент плеєра з кнопками Play/Pause */}
    </div>
  );
}

export default AudioArchivePage;