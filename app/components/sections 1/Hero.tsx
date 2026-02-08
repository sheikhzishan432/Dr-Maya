'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="w-full min-h-screen bg-[#f5f1eb] flex items-center justify-center 
      px-4 sm:px-6 md:px-12 lg:px-16 
      pt-[100px] pb-16 overflow-x-hidden"
    >
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center w-full max-w-7xl mx-auto">

        {/* LEFT IMAGE */}
        <div ref={imageRef} className="flex justify-center md:justify-start">
          <div className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[440px] 
          h-[360px] sm:h-[420px] md:h-[500px] lg:h-[520px] 
          rounded-t-[200px] overflow-hidden">
            <img
              src="/Calm therapy space.jpg"
              alt="therapy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div ref={textRef} className="text-center md:text-left">

          <h1 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] 
          leading-tight font-semibold text-[#2e3a34]">
            Therapy for Anxiety, Trauma & Burnout
          </h1>

          <p className="mt-6 text-base md:text-lg text-[#2e3a34] max-w-xl">
            Supporting thoughtful, high-achieving adults in Santa Monica,
            California who feel overwhelmed by stress, anxiety, or past experiences.
          </p>

          <a
            href="/Bookconn"
            className="inline-block mt-8 border border-[#2e3a34] px-8 py-4 
            text-sm tracking-widest text-[#2e3a34] 
            hover:bg-[#2e3a34] hover:text-white transition"
          >
            BOOK A CONSULTATION →
          </a>

        </div>
      </div>
    </section>
  );
}
