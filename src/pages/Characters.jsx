import React, { useState } from 'react';
import { charactersData } from '../data/charactersData';
import '../App.css';

export default function Characters() {
  // Фільтрація персонажів
  const heroes = charactersData.filter((char) => char.type === 'hero');
  const villains = charactersData.filter((char) => char.type === 'villain');

  // Окремі стани для каруселей
  const [heroIndex, setHeroIndex] = useState(0);
  const [villainIndex, setVillainIndex] = useState(0);

  // Карусель героїв (гортання по 1)
  const nextHero = () => {
    if (heroIndex < heroes.length - 2) setHeroIndex(heroIndex + 1);
  };
  const prevHero = () => {
    if (heroIndex > 0) setHeroIndex(heroIndex - 1);
  };

  // Карусель лиходіїв (гортання по 1)
  const nextVillain = () => {
    if (villainIndex < villains.length - 2) setVillainIndex(villainIndex + 1);
  };
  const prevVillain = () => {
    if (villainIndex > 0) setVillainIndex(villainIndex - 1);
  };

  return (
    <div className="characters-page">
      {/* БАННЕР */}
      <div className="banner-section">
        <img 
          src="/images/characters/marvel-studio-logo-vertical.jpg" 
          alt="Marvel Studios Banner" 
          className="banner-image" 
        />
      </div>

      {/* КОНТЕЙНЕР ПЕРСОНАЖІВ */}
      <div className="characters-container">
        <h1 className="page-title">Головні персонажі</h1>

        {/* СЕКЦІЯ ГЕРОЇВ */}
        <section className="carousel-section">
          <div className="section-title-wrapper">
            <div className="category-badge hero-badge">Герої</div>
          </div>

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
                <div key={char.id} className="character-card-wrapper">
                  <div className="card-header-badge">
                    <h2>{char.name}</h2>
                  </div>

                  <div className="character-card">
                    <div className="card-body">
                      <div className="card-top-info">
                        <img src={char.image} alt={char.name} className="char-photo" />
                        
                        <div className="char-actor-block">
                          <h2 className="actor-name">{char.actor}</h2>
                          {char.shortDescription ? (
                            <p className="short-desc">{char.shortDescription}</p>
                          ) : char.paragraphs && char.paragraphs.length > 0 ? (
                            <p className="short-desc">{char.paragraphs[0]}</p>
                          ) : null}
                        </div>
                      </div>

                      <div className="char-description">
                        {char.paragraphs ? (
                          char.paragraphs.slice(1).map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                          ))
                        ) : (
                          <p>{char.description}</p>
                        )}
                      </div>
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

        {/* СЕКЦІЯ ЛИХОДІЇВ */}
        <section className="carousel-section villains-section">
          <div className="section-title-wrapper">
            <div className="category-badge villain-badge">Лиходії</div>
          </div>

          <div className="carousel-container">
            <button 
              className="arrow-btn left" 
              onClick={prevVillain}
              disabled={villainIndex === 0}
            >
              &#10094;
            </button>

            <div className="cards-wrapper">
              {villains.slice(villainIndex, villainIndex + 2).map((char) => (
                <div key={char.id} className="character-card-wrapper">
                  <div className="card-header-badge villain-card-header">
                    <h2>{char.name}</h2>
                  </div>

                  <div className="character-card">
                    <div className="card-body">
                      <div className="card-top-info">
                        <img src={char.image} alt={char.name} className="char-photo" />
                        
                        <div className="char-actor-block">
                          <h2 className="actor-name">{char.actor}</h2>
                          {char.shortDescription ? (
                            <p className="short-desc">{char.shortDescription}</p>
                          ) : char.paragraphs && char.paragraphs.length > 0 ? (
                            <p className="short-desc">{char.paragraphs[0]}</p>
                          ) : null}
                        </div>
                      </div>

                      <div className="char-description">
                        {char.paragraphs ? (
                          char.paragraphs.slice(1).map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                          ))
                        ) : (
                          <p>{char.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              className="arrow-btn right" 
              onClick={nextVillain}
              disabled={villainIndex >= villains.length - 2}
            >
              &#10095;
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}