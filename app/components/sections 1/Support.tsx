'use client';

import { useEffect, useRef } from 'react';

export default function Support() {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

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

    if (imageRef.current) {
      imageRef.current.classList.add('slide-in-left-on-scroll');
      observer.observe(imageRef.current);
    }
    if (textRef.current) {
      textRef.current.classList.add('slide-in-right-on-scroll');
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">

      {/* LEFT IMAGE */}
      <div ref={imageRef} className="h-[400px] sm:h-[500px] md:h-screen order-2 md:order-1">
        <img
          src="https://images.pexels.com/photos/8560000/pexels-photo-8560000.jpeg"
          alt="therapy session calm office"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* RIGHT TEXT */}
      <div ref={textRef} className="bg-[#f5f1eb] flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-0 order-1 md:order-2">

        <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[56px] leading-tight text-[#2e3a34] font-semibold mb-6 sm:mb-8 md:mb-10">
          You don't have to navigate this alone.
        </h2>

        <p className="text-[#2e3a34] mb-4 sm:mb-6 text-base sm:text-lg max-w-xl">
          Many of the adults I work with are thoughtful and high-functioning, 
          yet internally feel overwhelmed, anxious, or emotionally exhausted.
        </p>

        <ul className="text-[#2e3a34] space-y-3 sm:space-y-4 text-base sm:text-lg mb-6 sm:mb-10">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Persistent anxiety or overthinking</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Professional burnout or chronic stress</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Difficulty slowing down or feeling present</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Lingering effects of past experiences</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Feeling disconnected from yourself or others</span>
          </li>
        </ul>

      </div>
    </section>
  );
}
