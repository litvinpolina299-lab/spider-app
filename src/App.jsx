import React from 'react';
import MoviesSection from './components/MoviesSection';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Тут у майбутньому будуть інші блоки, наприклад Header, Hero тощо */}
      <MoviesSection />
    </div>
  );
}

export default App;