import React, { useState, useRef } from 'react';
import TrackInfo from "../components/TrackInfo";
import PolaroidGallery from "../components/PolaroidGallery";

const TRACKS_DATA = [
  {
    id: 1,
    title: "Can't you hear me knocking",
    artist: "The Rolling Stones",
    cover: "/images/audioarchive/The_Rolling_Stones_-_Can't_Hear_Me_Knoking.jpg",
    src: "/audio/The-Rolling-Stones-Can't-Hear-Me-Knoking.mp3"
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
  },
  {
    id: 4,
    title: "Left Hand Free",
    artist: "Alt-J",
    cover: "/images/spoon.jpg",
    src: "/audio/the-underdog.mp3"
  },
  {
    id: 5,
    title: "Space Age Love Song",
    artist: "A Flock Of Seagulls",
    cover: "/images/spoon.jpg",
    src: "/audio/the-underdog.mp3"
  },
  {
    id: 6,
    title: "Bongo Cha Cha Cha",
    artist: "Caterins Valente",
    cover: "/images/spoon.jpg",
    src: "/audio/the-underdog.mp3"
  },
  {
    id: 7,
    title: "Stella Stai",
    artist: "Umberto Tozzi",
    cover: "/images/spoon.jpg",
    src: "/audio/the-underdog.mp3"
  },
  {
    id: 8,
    title: "AC/DC",
    artist: "Back In Black",
    cover: "",
    src: ""
  },
  {
    id: 9,
    title: "Wolf Like Me",
    artist: "TV On The Radio",
    cover: "/images/spoon.jpg",
    src: "/audio/the-underdog.mp3"
  },
  {
    id: 10,
    title: "Im Every Woman",
    artist: "Chaka Khan",
    cover: "/images/spoon.jpg",
    src: "/audio/the-underdog.mp3"
  },
  {
    id: 11,
    title: "Loser",
    artist: "Tame Impala",
    cover: "/images/spoon.jpg",
    src: "/audio/the-underdog.mp3"
  },
  {
    id: 12,
    title: "Fire For You",
    artist: "Cannons",
    cover: "/images/spoon.jpg",
    src: "/audio/the-underdog.mp3"
  },
  {
    id: 13,
    title: "Eoo",
    artist: "Bad Bunny",
    cover: "/images/spoon.jpg",
    src: "/audio/the-underdog.mp3"
  },
  {
    id: 14,
    title: "St Elmo's Fire",
    artist: "Brian Eno",
    cover: "/images/spoon.jpg",
    src: "/audio/the-underdog.mp3"
  },
  {
    id: 15,
    title: "Oh Yeah",
    artist: "Steve Lacy",
    cover: "/images/spoon.jpg",
    src: "/audio/the-underdog.mp3"
  }
];
function AudioArchivePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Посилання на аудіо-тег
  const audioRef = useRef(null);

  const currentTrack = TRACKS_DATA[currentIndex];

  // Перемикання відтворення / паузи
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Перемикання на наступну пісню
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TRACKS_DATA.length);
  };

  // Перемикання на попередню пісню
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TRACKS_DATA.length) % TRACKS_DATA.length);
  };

  return (
    <div className="audio-archive-page">
      <div className="hero-section">
        <img src="/images/spidey-hero-collage.jpg" alt="Spiderman Header" />
      </div>

      <div className="archive-title-container">
        <h1 className="archive-title">SPIDERMAN Music Archive</h1>
      </div>

      {/* Галерея */}
      <PolaroidGallery 
        tracks={TRACKS_DATA} 
        currentIndex={currentIndex} 
        setCurrentIndex={setCurrentIndex} 
      />

      {/* Інформація про трек */}
      <TrackInfo currentTrack={currentTrack} />

      {/* --- АУДІОПЛЕЄР ПРЯМО ТУТ (БЕЗ ОКРЕМОГО ФАЙЛУ) --- */}
      <div className="custom-audio-player">
        <audio 
          ref={audioRef} 
          src={currentTrack?.src} 
          onEnded={handleNext} 
        />
        
        <div className="player-controls">
          <button className="icon-btn">🔀</button>
          <button className="icon-btn" onClick={handlePrev}>⏮</button>
          <button className="play-btn" onClick={togglePlay}>
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button className="icon-btn" onClick={handleNext}>⏭</button>
          <button className="icon-btn">🔁</button>
        </div>
        
        <div className="progress-bar-container">
          <div className="progress-bar"></div>
        </div>
      </div>
      {/* -------------------------------------------------- */}
    </div>
  );
}

export default AudioArchivePage;