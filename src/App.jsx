import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SpiderPath from './pages/SpiderPath';
import Characters from './pages/Characters';
import BehindTheScenes from './pages/BehindTheScenes';
import AudioArchive from './pages/AudioArchive';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2.2 секунди: достатньо часу для збільшення, паузи та фінального зуму
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {loading && (
        <div className="preloader">
          <div className="spider-scale-wrapper">
            <img 
              src="/images/white-spider.png" /* Перевірте шлях до картинки */
              alt="Spider Preloader" 
              className="preloader-spider-img" 
            />
          </div>
        </div>
      )}

      <ScrollToTop />
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spider-path" element={<SpiderPath />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/behind-the-scenes" element={<BehindTheScenes />} />
        <Route path="/audio-archive" element={<AudioArchive />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}