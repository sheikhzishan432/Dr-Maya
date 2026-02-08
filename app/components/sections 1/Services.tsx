'use client';

import { useEffect, useRef } from 'react';

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

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

    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.classList.add('fade-in-on-scroll');
        // Add delay to each card for staggered animation
        card.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="bg-[#f5f1eb] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16">

      {/* HEADING */}
      <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in">
        <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] font-semibold text-[#2e3a34]">
          Our Services
        </h2>

        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#2e3a34]/80 max-w-2xl mx-auto leading-7 sm:leading-8 px-4">
          Thoughtful, evidence-based therapy designed to help you feel more grounded,
          clear, and connected to yourself and your life.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">

        {/* CARD 1 */}
        <div 
          ref={(el) => { if (el) cardsRef.current[0] = el; }}
          className="group bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg"
              className="w-full h-40 sm:h-48 md:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
              alt="anxiety therapy"
            />
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold mt-4 sm:mt-6 mb-2 sm:mb-3 text-[#2e3a34]">
            Anxiety Therapy
          </h3>

          <p className="text-sm sm:text-base text-[#2e3a34]/80 leading-6 sm:leading-7">
            Support for persistent worry, panic, and overthinking. Learn to calm
            your nervous system and build tools that create stability and clarity
            in everyday life.
          </p>
        </div>

        {/* CARD 2 */}
        <div 
          ref={(el) => { if (el) cardsRef.current[1] = el; }}
          className="group bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg"
              className="w-full h-40 sm:h-48 md:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
              alt="trauma therapy"
            />
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold mt-4 sm:mt-6 mb-2 sm:mb-3 text-[#2e3a34]">
            Trauma & EMDR
          </h3>

          <p className="text-sm sm:text-base text-[#2e3a34]/80 leading-6 sm:leading-7">
            A gentle, structured approach to healing from past experiences.
            Using EMDR and evidence-based care, we work toward emotional safety
            and long-term resilience.
          </p>
        </div>

        {/* CARD 3 */}
        <div 
          ref={(el) => { if (el) cardsRef.current[2] = el; }}
          className="group bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1"
        >
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg"
              className="w-full h-40 sm:h-48 md:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
              alt="burnout therapy"
            />
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold mt-4 sm:mt-6 mb-2 sm:mb-3 text-[#2e3a34]">
            Burnout & Stress
          </h3>

          <p className="text-sm sm:text-base text-[#2e3a34]/80 leading-6 sm:leading-7">
            For professionals feeling overwhelmed or emotionally exhausted.
            Reconnect with yourself and develop healthier, more sustainable ways
            of living and working.
          </p>
        </div>

      </div>
    </section>
  );
}
