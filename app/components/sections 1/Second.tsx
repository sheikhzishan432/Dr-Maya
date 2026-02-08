'use client';

import { useEffect, useRef } from 'react';

export default function Second() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    if (textRef.current) {
      textRef.current.classList.add('slide-in-left-on-scroll');
      observer.observe(textRef.current);
    }
    if (imageRef.current) {
      imageRef.current.classList.add('slide-in-right-on-scroll');
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 min-h-screen">

      {/* LEFT TEXT */}
      <div ref={textRef} className="bg-[#f5f1eb] flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-0">

        <h2 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[56px] leading-tight text-[#2e3a34] font-semibold">
          Find your way back <br className="hidden sm:block" /> to balance.
        </h2>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#2e3a34] max-w-lg">
          Therapy for adults navigating anxiety, burnout, and life transitions in Santa Monica.
        </p>

        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#2e3a34] max-w-lg">
          A calm, supportive space to slow down, heal, and reconnect with yourself.
        </p>

        {/* BUTTON */}
        <div className="mt-10 sm:mt-12 md:mt-16 pt-4 sm:pt-6">
          <a
            href="/gettouch"
            className="text-[#2e3a34] tracking-widest hover:opacity-70 transition-all duration-300 inline-block"
          >
            GET IN TOUCH →
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div ref={imageRef} className="w-full h-[400px] sm:h-[500px] md:h-screen">
        <img
          src="/office1.jpeg"
          alt="therapy calm space"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

    </section>
  );
}
