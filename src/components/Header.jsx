import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">SPIDEY</Link>
      </div>
      <nav className="header-nav">
        <Link to="/spider-path">Шлях павука</Link>
        <Link to="/characters">Персонажі</Link>
        <Link to="/behind-the-scenes">Як це знімали</Link>
        <Link to="/audio-archive">Аудіоархів</Link>
      </nav>
    </header>
  );
}