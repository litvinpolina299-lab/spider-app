import React from 'react';
import './MoviesSection.css';

// Дані про фільми виносимо в масив
const moviesData = [
  {
    id: 1,
    title: 'Spider-Man: Homecoming (2017)',
    image: '/images/homecoming.jpg',
  },
  {
    id: 2,
    title: 'Spider-Man: Far From Home (2019)',
    image: '/images/far-from-home.jpg',
  },
  {
    id: 3,
    title: 'Spider-Man: No Way Home (2021)',
    image: '/images/no-way-home.jpg',
  },
  {
    id: 4,
    title: 'Spider-Man: Brand New Day (2026)',
    image: '/images/brand-new-day.webp',
  },
];

function MoviesSection() {
  return (
    <section className="movies-section">
      <div className="container">
        <div className="movies-grid">
          {moviesData.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <div className="movie-card__image-wrapper">
                <img src={movie.image} alt={movie.title} />
              </div>
              <div className="movie-card__content">
                <h3 className="movie-card__title">{movie.title}</h3>
                <div className="movie-card__actions">
                  <button className="btn-primary">Закулісся</button>
                  <button className="btn-icon" aria-label="Слухати аудіо">
                    🎧
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MoviesSection;