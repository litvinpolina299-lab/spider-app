import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Колонка 1: Про проєкт */}
        <div className="footer-info">
          <h3>SPIDEY</h3>
          <p>
            Фан-проєкт про фільм<br />
            Людина-Павук з Томом<br />
            Холандом у головній ролі.
          </p>
        </div>

        {/* Колонка 2: Навігація */}
        <div className="footer-links">
          <h4>НАВІГАЦІЯ</h4>
          <Link to="/spider-path">Шлях павука</Link>
          <Link to="/characters">Персонажі</Link>
          <Link to="/behind-the-scenes">Як це знімали</Link>
          <Link to="/audio-archive">Аудіоархів</Link>
        </div>

        {/* Колонка 3: Фільми (з передачею state для автоскролу) */}
        <div className="footer-links">
          <h4>ФІЛЬМИ</h4>
          <Link to="/spider-path" state={{ scrollToId: 'homecoming' }}>
            Spider-Man:<br />Homecoming (2017)
          </Link>
          <Link to="/spider-path" state={{ scrollToId: 'far-from-home' }}>
            Spider-Man:<br />Far From Home (2019)
          </Link>
          <Link to="/spider-path" state={{ scrollToId: 'no-way-home' }}>
            Spider-Man:<br />No Way Home (2021)
          </Link>
          <Link to="/spider-path" state={{ scrollToId: 'brand-new-day' }}>
            Spider-Man:<br />Brand New Day (2026)
          </Link>
        </div>

        {/* Колонка 4: Аудіоархів */}
        <div className="footer-audio">
          <h4>АУДІОАРХІВ</h4>
          <div className="audio-card-sketch">
            <span className="audio-title">Почати слухати</span>
            <Link to="/audio-archive" className="play-btn-sketch" aria-label="Почати слухати">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Нижня частина з копірайтом */}
      <div className="footer-copy">
        <p>
          © 2026 SPIDEY FAN HUB. Фанатський проєкт. Усі права на Людина-павук та MCU належать Marvel Studios і Sony Pictures
        </p>
      </div>
    </footer>
  );
}