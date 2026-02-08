'use client';

import { useEffect, useRef } from 'react';

export default function Specialties() {
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
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#e9e3dc] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10">

      <h2 className="text-center text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-semibold text-[#24341f] mb-10 sm:mb-12 md:mb-14 lg:mb-16 animate-fade-in">
        My Specialties
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto">

        {/* CARD 1 */}
        <div 
          ref={(el) => { if (el) cardsRef.current[0] = el; }}
          className="border border-[#24341f] p-6 sm:p-8 hover:shadow-lg transition-all duration-300"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-[#24341f]">
            Anxiety & Overthinking
          </h3>

          <p className="text-sm sm:text-base text-[#24341f] mb-6 sm:mb-8">
            Support for adults experiencing constant worry, panic, or racing thoughts. 
            Together we'll work to calm the nervous system, build emotional awareness, 
            and create practical tools for daily relief.
          </p>

          <div className="flex justify-center">
            <img src="/anxiety.jpg" className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover hover:scale-110 transition-transform duration-500"/>
          </div>
        </div>

        {/* CARD 2 */}
        <div 
          ref={(el) => { if (el) cardsRef.current[1] = el; }}
          className="border border-[#24341f] p-6 sm:p-8 hover:shadow-lg transition-all duration-300"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-[#24341f]">
            Trauma & Emotional Healing
          </h3>

          <p className="text-sm sm:text-base text-[#24341f] mb-6 sm:mb-8">
             Using evidence-based approaches like CBT and EMDR, we gently process past 
            experiences and help you feel more grounded, safe, and present in your life.
          </p>

          <div className="flex justify-center">
            <img src="/Trauma & Emotional Healing.jpg" className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover hover:scale-110 transition-transform duration-500"/>
          </div>
        </div>

        {/* CARD 3 */}
        <div 
          ref={(el) => { if (el) cardsRef.current[2] = el; }}
          className="border border-[#24341f] p-6 sm:p-8 hover:shadow-lg transition-all duration-300 sm:col-span-2 lg:col-span-1"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-[#24341f]">
           Burnout & High Stress
          </h3>

          <p className="text-sm sm:text-base text-[#24341f] mb-6 sm:mb-8">
             For professionals and creatives feeling exhausted or disconnected. 
            Therapy becomes a space to reset, reconnect with yourself, and build 
            sustainable ways of living and working.
          </p>

          <div className="flex justify-center">
            <img src="/Burnout & High Stress.jpg" className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover hover:scale-110 transition-transform duration-500"/>
          </div>
        </div>

      </div>
    </section>
  );
}
