'use client';

import { useEffect, useRef } from 'react';

export default function StartToday() {
  const sectionRef = useRef<HTMLElement>(null);

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

    if (sectionRef.current) {
      sectionRef.current.classList.add('fade-in-on-scroll');
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#7b7a3c] text-center text-white py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-6">

      <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[60px] font-semibold mb-4 sm:mb-6">
        Start therapy when you're ready.
      </h2>

      <p className="max-w-2xl mx-auto text-base sm:text-lg leading-7 sm:leading-8 mb-6 sm:mb-8 md:mb-10 px-4">
        If you're feeling overwhelmed, anxious, or simply ready for change, 
        therapy can offer a supportive and private space to begin. 
        Reach out to schedule a consultation and see if we're a good fit.
      </p>

      <a
        href="/gettouch"
        className="inline-block border border-white px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm tracking-widest hover:bg-white hover:text-[#2e3a34] transition-all duration-300"
      >
        BOOK A CONSULTATION →
      </a>

    </section>
  );
}
