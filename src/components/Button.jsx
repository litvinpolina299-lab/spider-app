import React from 'react';
import '../App.css'; // Переконайся, що шлях до CSS правильний

const Button = ({ children, onClick, className = '' }) => {
  return (
    <button className={`btn-blue ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;