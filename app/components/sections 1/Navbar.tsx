'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      // hide navbar when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`w-full flex justify-between items-center 
      px-4 sm:px-6 md:px-12 lg:px-16 
      h-[70px] bg-[#f5f1eb] fixed top-0 left-0 right-0 z-50 
      transition-all duration-300 
      ${scrolled ? 'shadow-md' : ''} 
      ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      {/* LOGO */}
      <div className="text-lg sm:text-xl md:text-2xl font-semibold text-[#2f3e2c] whitespace-nowrap">
        Dr. Maya Reynolds
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-6 lg:gap-10 text-[#2f3e2c] text-sm md:text-base lg:text-lg">
        <a href="#about" className="hover:opacity-70 transition">About</a>
        <a href="#services" className="hover:opacity-70 transition">Services</a>
        <a href="/gettouch" className="hover:opacity-70 transition">Contact</a>
      </div>

      {/* MOBILE BTN */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-[#2f3e2c] text-2xl"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* MOBILE MENU */}
      {/* MOBILE MENU */}
{isOpen && (
  <div className="absolute top-[70px] left-0 w-full bg-[#f5f1eb] md:hidden shadow-lg border-t border-[#ddd]">
    
    <div className="flex flex-col gap-6 px-6 py-8 text-[#2f3e2c] text-lg font-medium">

      <a 
        href="#about" 
        onClick={() => setIsOpen(false)} 
        className="text-[#2f3e2c] hover:opacity-70"
      >
        About
      </a>

      <a 
        href="#services" 
        onClick={() => setIsOpen(false)} 
        className="text-[#2f3e2c] hover:opacity-70"
      >
        Services
      </a>

      <a 
        href="/gettouch" 
        onClick={() => setIsOpen(false)} 
        className="text-[#2f3e2c] hover:opacity-70"
      >
        Contact
      </a>

    </div>
  </div>
)}

    </nav>
  );
}
