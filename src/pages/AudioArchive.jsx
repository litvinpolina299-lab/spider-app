import React, { useState } from 'react';
import TrackInfo from "../components/TrackInfo";
import PolaroidGallery from "../components/PolaroidGallery";

const TRACKS_DATA = [
  {
    id: 1,
    title: "Can't you hear me knocking",
    artist: "The Rolling Stones",
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
  {
    id: 4,
    title: "Left Hand Free",
    artist: "Alt-J",
    cover: "/images/spoon.jpg",
    src: "/audio/the-underdog.mp3"
  }
  {
    id: 5,
    title: "Space Age Love Song",
    artist: "A Flock Of Seagulls",
    cover: "/images/spoon.jpg",
    src: "/audio/the-underdog.mp3"
  }
  {
    id: 6,
    title: "Bongo Cha Cha Cha",
    artist: "Caterins Valente",
    cover: "/images/spoon.jpg",
    src: "/audio/the-underdog.mp3"
  }
  {
    id: 7,
    title: "Stella Stai",
    artist: "Umberto Tozzi",
    cover: "/images/spoon.jpg",
    src: "/audio/the-underdog.mp3"
  }
  {
    id: 8,
    title: "AC/DC",
    artist: "Back In Black",
    cover: "",
    src: ""
  }
  {
    id: 9,
    title: "Wolf Like Me",
    artist: "TV On The Radio",
    cover: "/images/spoon.jpg",
    src: "/audio/the-underdog.mp3"
  }
  {
    id: 10,
    title: "Im Every Woman",
    artist: "Chaka Khan",
    cover: "/images/spoon.jpg",
    src: "/audio/the-underdog.mp3"
  }
  {
    id: 11,
    title: "Loser",
    artist: "Tame Impala",
    cover: "/images/spoon.jpg",
    src: "/audio/the-underdog.mp3"
  }
  {
    id: 12,
    title: "Fire For You",
    artist: "Cannons",
    cover: "/images/spoon.jpg",
    src: "/audio/the-underdog.mp3"
  }
  {
    id: 13,
    title: "Eoo",
    artist: "Bad Bunny",
    cover: "/images/spoon.jpg",
    src: "/audio/the-underdog.mp3"
  }
  {
    id: 14,
    title: "St Elmo's Fire",
    artist: "Brian Eno",
    cover: "/images/spoon.jpg",
    src: "/audio/the-underdog.mp3"
  }
  {
    id: 15,
    title: "Oh Yeah",
    artist: "Steve Lacy",
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