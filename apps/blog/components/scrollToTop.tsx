"use client"

import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar botón cuando se scrollea más de 300px
  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Función para hacer scroll hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Limpieza del event listener
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
  onClick={scrollToTop}
  className="z-100 fixed bottom-16 right-8 p-2 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-900 dark:hover:bg-zinc-100 border border-1 border-zinc-900 dark:border-zinc-100 transition-all duration-300 focus:outline-none group"
  aria-label="Scroll to top"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 fill-black dark:fill-white group-hover:fill-white dark:group-hover:fill-black transition-colors duration-300"
    viewBox="0 0 512 512"
  >
    <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
  </svg>
</button>
      )}
    </>
  );
};

export default ScrollToTop;