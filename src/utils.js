import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [direction, setDirection] = useState('up');

  const reset = () => setDirection('up');

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setDirection('down');
      } else {
        setDirection('up');
      }
      setLastScrollTop(scrollTop);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return { direction, reset };
}