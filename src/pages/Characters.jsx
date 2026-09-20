import React, { useState } from 'react';
import { charactersData } from '../data/charactersData';
import '../App.css';

export default function Characters() {
  // 1. Фільтруємо персонажів за типом 🦸‍♂️
  const heroes = charactersData.filter((char) => char.type === 'hero');

  // 2. Стан для відстеження індексу каруселі 🔄
  const [heroIndex, setHeroIndex] = useState(0);

  // Функції для гортання каруселі ⬅️ ➡️
  const nextHero = () => {
    if (heroIndex < heroes.length - 2) {
      setHeroIndex(heroIndex + 1);
    }
  };

  const prevHero = () => {
    if (heroIndex > 0) {
      setHeroIndex(heroIndex - 1);
    }
  };

  return (
    <div className="characters-page">
      <h1 className="page-title">Персонажі</h1>

      {/* СЕКЦІЯ ГЕРОЇВ */}
      <section className="carousel-section">
        <div className="section-badge">Герої</div>

        <div className="carousel-container">
          <button 
            className="arrow-btn left" 
            onClick={prevHero}
            disabled={heroIndex === 0}
          >
            &#10094;
          </button>

          <div className="cards-wrapper">
            {heroes.slice(heroIndex, heroIndex + 2).map((char) => (
              <div key={char.id} className="character-card">
                <div className="card-header-badge">
                  <h3>{char.name}</h3>
                </div>

                <div className="card-body">
                  <div className="card-top-info">
                    <img src={char.image} alt={char.name} className="char-photo" />
                    <div className="char-actor-block">
                      <h2>{char.actor}</h2>
                      <span className="type-badge">Герой</span>
                    </div>
                  </div>

                  <div className="char-description">
                    {char.paragraphs ? (
                      char.paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))
                    ) : (
                      <p>{char.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            className="arrow-btn right" 
            onClick={nextHero}
            disabled={heroIndex >= heroes.length - 2}
          >
            &#10095;
          </button>
        </div>
      </section>
    </div>
  );
}