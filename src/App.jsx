import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SpiderPath from './pages/SpiderPath';
import Characters from './pages/Characters';
import BehindTheScenes from './pages/BehindTheScenes';
import AudioArchive from './pages/AudioArchive';

export default function App() {
  return (
    <BrowserRouter>
      {/* Тут пізніше додамо компонент Header */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spider-path" element={<SpiderPath />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/behind-the-scenes" element={<BehindTheScenes />} />
        <Route path="/audio-archive" element={<AudioArchive />} />
      </Routes>

      {/* Тут пізніше додамо компонент Footer */}
    </BrowserRouter>
  );
}