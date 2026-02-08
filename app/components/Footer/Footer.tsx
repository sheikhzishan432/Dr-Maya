'use client';

import { useEffect, useRef } from 'react';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      footerRef.current.classList.add('fade-in-on-scroll');
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#f5f1eb] text-[#2e3a34]">

      {/* TOP */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 px-4 sm:px-6 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20">

        {/* LEFT */}
        <div className="animate-fade-in">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">
            Dr. Maya Reynolds, PsyD
          </h2>

          <p className="text-sm sm:text-base">shaheenBagh, South Delhi</p>
          <p className="text-sm sm:text-base">New Delhi, India</p>

          <div className="mt-4 sm:mt-6 space-y-1">
            <p className="underline text-sm sm:text-base hover:opacity-70 transition cursor-pointer">contact@mayatherapy.com</p>
            <p className="underline text-sm sm:text-base hover:opacity-70 transition cursor-pointer">+91 98XXXXXXX</p>
          </div>
        </div>

        {/* HOURS */}
        <div className="animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
          <h3 className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">Hours</h3>
          <p className="text-sm sm:text-base">Monday – Friday</p>
          <p className="text-sm sm:text-base">10:00 AM – 7:00 PM</p>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base">Online & In-Person Sessions</p>
        </div>

        {/* LINKS */}
        <div className="animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <h3 className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">Explore</h3>

          <div className="space-y-2">
            <a href="/" className="block underline text-sm sm:text-base hover:opacity-70 transition">Home</a>
            <a href="/gettouch" className="block underline text-sm sm:text-base hover:opacity-70 transition">Contact</a>
            <a href="#services" className="block underline text-sm sm:text-base hover:opacity-70 transition">Services</a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="text-center border-t border-[#d6d1c8] py-6 sm:py-8 text-xs sm:text-sm space-y-3 sm:space-y-4 px-4 sm:px-6">

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <span className="underline hover:opacity-70 transition cursor-pointer">Privacy Policy</span>
          <span className="underline hover:opacity-70 transition cursor-pointer">Terms</span>
          <span className="underline hover:opacity-70 transition cursor-pointer">Disclaimer</span>
        </div>

        <p className="text-xs sm:text-sm">
          © {new Date().getFullYear()} Dr. Maya Reynolds Therapy. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
