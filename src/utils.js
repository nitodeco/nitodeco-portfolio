import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [direction, setDirection] = useState('up');

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

  return direction;
}

export function resetElementClassesById(element) {
    const _element = document.getElementById(element);
    if (_element) {
        _element.className = 'titleContainer';
    }
}