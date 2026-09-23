import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    // Якщо ми НЕ передавали scrollToId (для автоскролу до фільму), 
    // тоді завжди прокручуємо нагору сторінки
    if (!state?.scrollToId) {
      window.scrollTo(0, 0);
    }
  }, [pathname, state]);

  return null;
}