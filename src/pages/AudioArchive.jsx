import React, { useState, useRef, useEffect } from 'react';
import PolaroidGallery from "../components/PolaroidGallery";

const TRACKS_DATA = [
  {
    id: 1,
    title: "Can't you hear me knocking",
    artist: "The Rolling Stones",
    cover: "/images/audioarchive/The_Rollling_Stones_-_Can_t_You_Hear_Me_Knocking.jpg",
    src: "/audio/The-Rollling-Stones-Can't-You-Hear-Me-Knocking.mp3"
  },
  {
    id: 2,
    title: "Blitzkrieg Bop",
    artist: "Ramones",
    cover: "/images/audioarchive/ramones-album.jpg",
    src: "/audio/Blitzkrieg-Bop-Ramones.mp3"
  },
  {
    id: 3,
    title: "The Underdog",
    artist: "Spoon",
    cover: "/images/audioarchive/spoon-music-album.jpg",
    src: "/audio/the-underdog-spoon.mp3"
  },
  {
    id: 4,
    title: "Left Hand Free",
    artist: "Alt-J",
    cover: "/images/audioarchive/alt-j-album.jpg",
    src: "/audio/Left-Hand-Free-Alt-J.mp3"
  },
  {
    id: 5,
    title: "Space Age Love Song",
    artist: "A Flock Of Seagulls",
    cover: "/images/audioarchive/aflock-ofseagulls-album.jpg",
    src: "/audio/A-Flock-Of-Seagulls-Space-Age-Love-Song.mp3"
  },
  {
    id: 6,
    title: "Bongo Cha Cha Cha",
    artist: "Caterins Valente",
    cover: "/images/audioarchive/Caterina-Valente - Bongo-Cha-Cha-Cha.jpg",
    src: "/audio/Caterina-Valente-Bongo-Cha-Cha-Cha.mp3"
  },
  {
    id: 7,
    title: "Stella Stai",
    artist: "Umberto Tozzi",
    cover: "/images/audioarchive/Stella_stai_tozzi.jpg",
    src: "/audio/Umberto-Tozzi-Stella-stai.mp3"
  },
  {
    id: 8,
    title: "Back In Black",
    artist: "AC/DC",
    cover: "/images/audioarchive/back-in-black-album.png",
    src: "/audio/AC-DC-Back-In-Black.mp3"
  },
  {
    id: 9,
    title: "Wolf Like Me",
    artist: "TV On The Radio",
    cover: "/images/audioarchive/Wolf-Like-Me-TV-On-the-Radio.jpg",
    src: "/audio/Wolf-Like-Me-TV-On-the-Radio.mp3"
  },
  {
    id: 10,
    title: "Im Every Woman",
    artist: "Chaka Khan",
    cover: "/images/audioarchive/Chaka-khan-im-every-woman.jpg",
    src: "/audio/Im-Every-Woman-Chaka-Khan.mp3"
  },
  {
    id: 11,
    title: "Loser",
    artist: "Tame Impala",
    cover: "/images/audioarchive/tame-impala-loser.jpg",
    src: "/audio/tame-impala-loser.mp3"
  },
  {
    id: 12,
    title: "Fire For You",
    artist: "Cannons",
    cover: "/images/audioarchive/cannons-fire-for-you.jpg",
    src: "/audio/Cannons-Fire-For-You.mp3"
  },
  {
    id: 13,
    title: "Eoo",
    artist: "Bad Bunny",
    cover: "/images/audioarchive/Bad-Bunny-Eoo.jpg",
    src: "/audio/Bad-Bunny-Eoo.mp3"
  },
  {
    id: 14,
    title: "St Elmo's Fire",
    artist: "Brian Eno",
    cover: "/images/audioarchive/Brian-Eno-St-Elmo's-Fire.jpg",
    src: "/audio/Brian-Eno-St-Elmo's-Fire.mp3"
  },
  {
    id: 15,
    title: "Oh Yeah",
    artist: "Steve Lacy",
    cover: "/images/audioarchive/oh-yeah.jpg",
    src: "/audio/oh-yeah-Steve-Lacy.mp3"
  }
];

const formatTime = (timeInSeconds) => {
  if (isNaN(timeInSeconds)) return "0:00";
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

function AudioArchivePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [prevVolume, setPrevVolume] = useState(0.8);

  const audioRef = useRef(null);
  const currentTrack = TRACKS_DATA[currentIndex];

  useEffect(() => {
    if (audioRef.current && currentTrack?.src) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false));
      }
    }
  }, [currentIndex]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.volume = prevVolume;
      setVolume(prevVolume);
      setIsMuted(false);
    } else {
      setPrevVolume(volume);
      audioRef.current.volume = 0;
      setVolume(0);
      setIsMuted(true);
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Помилка відтворення:", err));
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TRACKS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TRACKS_DATA.length) % TRACKS_DATA.length);
  };

  return (
    <div className="audio-archive-page">
      <div className="hero-banner">
        <img src="/images/audioarchive/music-background.jpg" alt="Spiderman Header" />
      </div>

      <div className="music-section">
        <div className="archive-title-container">
          <h1 className="archive-title">SPIDERMAN Music Archive</h1>
        </div>

        <PolaroidGallery 
          tracks={TRACKS_DATA} 
          currentIndex={currentIndex} 
          setCurrentIndex={setCurrentIndex} 
        />

        <div className="custom-audio-player">
          <audio 
            ref={audioRef} 
            src={currentTrack?.src} 
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={handleNext} 
          />
          
          {/* 1. ПОЛЗУНОК МУЗИКИ ТА ТАЙМЕРИЗВЕРХУ */}
          <div className="progress-section">
            <span className="time-display">{formatTime(currentTime)}</span>
            <input 
              type="range" 
              className="progress-bar-input"
              min="0"
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              style={{
                '--progress-percent': `${(currentTime / (duration || 1)) * 100}%`
              }}
            />
            <span className="time-display">{formatTime(duration)}</span>
          </div>

          {/* 2. КНОПКИ НАВІГАЦІЇ ПО ЦЕНТРУ */}
          <div className="player-controls">
            <button className="icon-btn" onClick={handlePrev}>⏮</button>
            <button className="play-btn" onClick={togglePlay}>
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button className="icon-btn" onClick={handleNext}>⏭</button>
          </div>

          {/* 3. РЕГУЛЯТОР ГУЧНОСТІ ЗНИЗУ */}
          <div className="volume-section-bottom">
            <button className="volume-icon-btn small" onClick={toggleMute} title="Вимкнути / Увімкнути звук">
              {isMuted || volume === 0 ? '🔇' : '🔈'}
            </button>

            <input 
              type="range" 
              className="volume-bar-input"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              style={{
                '--volume-percent': `${(isMuted ? 0 : volume) * 100}%`
              }}
            />

            <button className="volume-icon-btn large" onClick={() => {
              setVolume(1);
              setIsMuted(false);
              if (audioRef.current) audioRef.current.volume = 1;
            }} title="Максимальна гучність">
              🔊
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AudioArchivePage;