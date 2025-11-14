'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Arrow Up Icon Component
function IconArrowUp({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  );
}

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const isRestaurants = pathname === '/restaurants';
  const isUsers = pathname === '/users';
  const brandColor = isRestaurants ? '#D4BFA6' : isUsers ? '#F4BF00' : '#FCDB7D';
  const brandText = '#052838';

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        backgroundColor: brandColor,
        color: brandText,
      }}
      className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-all duration-300 z-50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
      }`}
      aria-label="Volver arriba"
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#052838';
        e.currentTarget.style.color = brandColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = brandColor;
        e.currentTarget.style.color = brandText;
      }}
    >
      <IconArrowUp className="w-5 h-5" />
    </button>
  );
}
