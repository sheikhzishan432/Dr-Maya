'use client';

import { useEffect, useRef } from 'react';

export default function Professional() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

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

    itemsRef.current.forEach((item, index) => {
      if (item) {
        item.classList.add('fade-in-on-scroll');
        // Add delay to each item for staggered animation
        item.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f5f1eb] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16">

      <h2 className="text-center text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] font-semibold text-[#2e3a34] mb-10 sm:mb-12 md:mb-14 animate-fade-in">
        Professional Background
      </h2>

      <div className="max-w-3xl mx-auto text-[#2e3a34] text-base sm:text-lg">

        {/* EDUCATION */}
        <div 
          ref={(el) => { if (el) itemsRef.current[0] = el; }}
          className="border-t py-4 sm:py-6 flex justify-between items-center hover:bg-[#e9e3dc] transition-colors duration-300 px-2"
        >
          <span className="text-sm sm:text-base md:text-lg">Doctor of Psychology (PsyD)</span>
          <span className="text-xl sm:text-2xl">+</span>
        </div>

        {/* LICENSURE */}
        <div 
          ref={(el) => { if (el) itemsRef.current[1] = el; }}
          className="border-t py-4 sm:py-6 flex justify-between items-center hover:bg-[#e9e3dc] transition-colors duration-300 px-2"
        >
          <span className="text-sm sm:text-base md:text-lg">Licensed Clinical Psychologist – California</span>
          <span className="text-xl sm:text-2xl">+</span>
        </div>

        {/* APPROACH */}
        <div 
          ref={(el) => { if (el) itemsRef.current[2] = el; }}
          className="border-y py-4 sm:py-6 flex justify-between items-center hover:bg-[#e9e3dc] transition-colors duration-300 px-2"
        >
          <span className="text-sm sm:text-base md:text-lg">CBT, EMDR & Mindfulness-Based Therapy</span>
          <span className="text-xl sm:text-2xl">+</span>
        </div>

      </div>
    </section>
  );
}
