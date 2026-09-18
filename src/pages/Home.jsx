import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-page">
      {/* 1. Hero Секція */}
      <section className="hero-section">
        <div className="hero-container">
          <img 
            src="/images/back-of-spiderman.png" 
            alt="Людина-павук" 
            className="hero-avatar" 
          />
          <div className="hero-text">
            <h1 className="hero-quote">
              «З великою силою приходить велика відповідальність»
            </h1>
            <p className="hero-subtitle">
              Ласкаво просимо до всесвіту Людини-павука! Тут зібрано історію культового героя, огляди персонажів, секрети зйомок та унікальний аудіоархів.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Блок фільмів та статистики */}
      <section className="movies-section">
        <div className="movies-grid">
          {/* Фільм 1 */}
          <div className="movie-card">
            <img
              src="/images/homecoming.jpg" 
              alt="Spider-Man: Homecoming" 
              className="movie-poster"
            />
            <div className="movie-title-banner">
              Spider-Man: Homecoming (2017)
            </div>
            <div className="movie-actions">
              <Link to="/behind-the-scenes" className="btn-action main-btn">Закулісся</Link>
              <Link to="/audio-archive" className="btn-action icon-btn" title="Аудіоархів">🎧</Link>
            </div>
          </div>

          {/* Фільм 2 */}
          <div className="movie-card">
            <img
              src="/images/far-from-home.jpg" 
              alt="Spider-Man: Far From Home" 
              className="movie-poster"
            />
            <div className="movie-title-banner">
              Spider-Man: Far From Home (2019)
            </div>
            <div className="movie-actions">
              <Link to="/behind-the-scenes" className="btn-action main-btn">Закулісся</Link>
              <Link to="/audio-archive" className="btn-action icon-btn" title="Аудіоархів">🎧</Link>
            </div>
          </div>

          {/* Фільм 3 */}
          <div className="movie-card">
            <img
              src="/images/no-way-home.jpg" 
              alt="Spider-Man: No Way Home" 
              className="movie-poster"
            />
            <div className="movie-title-banner">
              Spider-Man: No Way Home (2021)
            </div>
            <div className="movie-actions">
              <Link to="/behind-the-scenes" className="btn-action main-btn">Закулісся</Link>
              <Link to="/audio-archive" className="btn-action icon-btn" title="Аудіоархів">🎧</Link>
            </div>
          </div>

          {/* Фільм 4 */}
          <div className="movie-card">
            <img
              src="/images/brand-new-day.webp" 
              alt="Spider-Man: Brand New Day" 
              className="movie-poster"
            />
            <div className="movie-title-banner">
              Spider-Man: Brand New Day (2026)
            </div>
            <div className="movie-actions">
              <Link to="/behind-the-scenes" className="btn-action main-btn">Закулісся</Link>
              <Link to="/audio-archive" className="btn-action icon-btn" title="Аудіоархів">🎧</Link>
            </div>
          </div>

        </div>

        <div className="stats-block">
          <ul className="stats-list">
            <li>
              <img src="/images/red-spider.png" alt="spider" className="stat-spider-icon" />
              <span>Загальний бюджет: Близько $750 млн (на створення чотирьох частин).</span>
            </li>
            <li>
              <img src="/images/red-spider.png" alt="spider" className="stat-spider-icon" />
              <span>Сумарні світові касові збори: понад $3.9 млрд.</span>
            </li>
            <li>
              <img src="/images/red-spider.png" alt="spider" className="stat-spider-icon" />
              <span>Середній рейтинг: одностайно 87% позитивних рецензій від критиків.</span>
            </li>
            <li>
              <img src="/images/red-spider.png" alt="spider" className="stat-spider-icon" />
              <span>Сумарний хронометраж: понад 9.5 годин перегляду.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 3. Прев'ю персонажів */}
      <section className="section-block characters-section">
        <div className="characters-container">
          
          {/* Скошений білий заголовок */}
          <div className="block-title-badge">
            <h2>Персонажі</h2>
          </div>

          {/* Список персонажів з паралелограмами */}
          <div className="characters-list">
            
            <div className="char-item">
              <div className="char-avatar-wrapper">
                <img src="/images/spiderman-without-mask.jpg" alt="Пітер Паркер" className="char-avatar-img" />
              </div>
              <div className="char-text">
                <h3>Пітер Паркер</h3>
                <p>Хлопець, який намагався довести Тоні Старку, що він здатен на більше, ніж просто...</p>
              </div>
            </div>

            <div className="char-item">
              <div className="char-avatar-wrapper">
                <img src="/images/mj-2.avif" alt="ЕмДжей" className="char-avatar-img" />
              </div>
              <div className="char-text">
                <h3>ЕмДжей</h3>
                <p>Найуважніша дівчина у школі, яка опинилася під небезпекою через...</p>
              </div>
            </div>

            <div className="char-item">
              <div className="char-avatar-wrapper">
                <img src="/images/ned-2.webp" alt="Нед Лідс" className="char-avatar-img" />
              </div>
              <div className="char-text">
                <h3>Нед</h3>
                <p>Перший, хто дізнався таємницю й готовий ризикувати всім, навіть...</p>
              </div>
            </div>

          </div>

          {/* Скошена блакитна кнопка */}
          <Link to="/characters" className="btn-skew-blue">
            Дізнатися більше...
          </Link>

        </div>
      </section>

      {/* 4. Прев'ю закулісся */}
      <section className="preview-section bts-preview">
        <h2>Хочеш побачити закулісся зйомок?</h2>
        <Link to="/behind-the-scenes" className="btn-blue">Побачити закулісся</Link>
      </section>

      {/* 5. Прев'ю аудіоархіву */}
      <section className="preview-section audio-preview">
        <h2>Саундтреки та атмосфера фільмів</h2>
        <p>Добірка музичних треків із фільмів. Переслуховуй улюблені пісні та поринь у атмосферу кіно.</p>
        <Link to="/audio-archive" className="btn-blue">Перейти до музики</Link>
      </section>
    </div>
  );
}