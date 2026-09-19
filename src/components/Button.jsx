import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Button = ({ children, onClick, to, className = '' }) => {
  // Якщо передано шлях для переходу (to="/..."), використовуємо Link
  if (to) {
    return (
      <Link to={to} className={`btn-blue ${className}`}>
        {children}
      </Link>
    );
  }

  // Інакше повертаємо звичайну кнопку
  return (
    <button className={`btn-blue ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;