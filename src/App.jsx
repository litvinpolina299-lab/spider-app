import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // 1. Імпортуємо ScrollToTop
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SpiderPath from './pages/SpiderPath';
import Characters from './pages/Characters';
import BehindTheScenes from './pages/BehindTheScenes';
import AudioArchive from './pages/AudioArchive';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* 2. Додаємо сюди перед Header та Routes */}
      
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