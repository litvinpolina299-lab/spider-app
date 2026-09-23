import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Закриваємо меню при кліку на будь-яке посилання
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      {/* Логотип зліва */}
      <div className="header-logo">
        <Link to="/" onClick={closeMenu}>
          SPIDEY
        </Link>
      </div>

      {/* Кнопка Гамбургер (3 полоски) справа для мобільних */}
      <button 
        className={`burger-btn ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Меню"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Навігація */}
      <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/spider-path" onClick={closeMenu}>
          Шлях павука
        </Link>
        <Link to="/characters" onClick={closeMenu}>
          Персонажі
        </Link>
        <Link to="/behind-the-scenes" onClick={closeMenu}>
          Як це знімали
        </Link>
        <Link to="/audio-archive" onClick={closeMenu}>
          Аудіоархів
        </Link>
      </nav>
    </header>
  );
}