import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h3>SPIDEY</h3>
        <p>Фан-проєкт про фільм Людина-Павук з Томом Холландом у головній ролі.</p>
      </div>

      <div className="footer-links">
        <h4>Навігація</h4>
        <Link to="/spider-path">Шлях павука</Link>
        <Link to="/characters">Персонажі</Link>
        <Link to="/behind-the-scenes">Як це знімали</Link>
        <Link to="/audio-archive">Аудіоархів</Link>
      </div>

      <div className="footer-copy">
        <p>© 2026 SPIDEY FAN HUB. Усі права належать Marvel Studios & Sony Pictures.</p>
      </div>
    </footer>
  );
}