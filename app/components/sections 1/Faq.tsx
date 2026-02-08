'use client';

import { useEffect, useRef } from 'react';

export default function Faq() {
  const imageRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

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
    if (faqRef.current) {
      faqRef.current.classList.add('slide-in-right-on-scroll');
      observer.observe(faqRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#f5f1eb] grid grid-cols-1 md:grid-cols-2 px-4 sm:px-6 md:px-12 lg:px-16 py-12 sm:py-16 items-center gap-8 md:gap-0">

      {/* LEFT IMAGE */}
      <div ref={imageRef} className="flex justify-center md:justify-start mb-6 md:mb-0">
        <img
          src="https://images.pexels.com/photos/5793684/pexels-photo-5793684.jpeg"
          alt="therapy office calm"
          className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] lg:w-[340px] lg:h-[340px] rounded-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* RIGHT FAQ */}
      <div ref={faqRef}>
        <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-semibold text-[#2e3a34] mb-6 sm:mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3 sm:space-y-4 text-[#2e3a34]">

          {/* Q1 */}
          <div className="border-t border-b py-3 sm:py-4 text-base sm:text-lg md:text-xl flex items-center gap-3 sm:gap-4 hover:bg-[#e9e3dc] transition-colors duration-300 cursor-pointer">
            <span className="text-xl sm:text-2xl">+</span>
            <span>Do you offer in-person and virtual sessions?</span>
          </div>

          {/* Q2 */}
          <div className="border-b py-3 sm:py-4 text-base sm:text-lg md:text-xl flex items-center gap-3 sm:gap-4 hover:bg-[#e9e3dc] transition-colors duration-300 cursor-pointer">
            <span className="text-xl sm:text-2xl">+</span>
            <span>What concerns do you commonly support?</span>
          </div>

          {/* Q3 */}
          <div className="border-b py-3 sm:py-4 text-base sm:text-lg md:text-xl flex items-center gap-3 sm:gap-4 hover:bg-[#e9e3dc] transition-colors duration-300 cursor-pointer">
            <span className="text-xl sm:text-2xl">+</span>
            <span>How do I know if therapy is right for me?</span>
          </div>

          {/* Q4 */}
          <div className="border-b py-3 sm:py-4 text-base sm:text-lg md:text-xl flex items-center gap-3 sm:gap-4 hover:bg-[#e9e3dc] transition-colors duration-300 cursor-pointer">
            <span className="text-xl sm:text-2xl">+</span>
            <span>Where is your Santa Monica office located?</span>
          </div>

        </div>
      </div>

    </section>
  );
}
