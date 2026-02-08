'use client';

import { useEffect, useRef } from 'react';

export default function AboutMaya() {
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
    <section id="about" className="bg-[#f5f1eb] grid grid-cols-1 md:grid-cols-2 items-center px-4 sm:px-6 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24">

      {/* LEFT TEXT */}
      <div ref={textRef} className="order-2 md:order-1">
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-tight sm:leading-[60px] text-[#2e3a34] font-semibold mb-4 sm:mb-6">
          Hi, I'm Dr. Maya Reynolds.
        </h2>

        <p className="text-base sm:text-lg text-[#2e3a34] max-w-xl leading-7 sm:leading-8 mb-4 sm:mb-6">
          I'm a licensed clinical psychologist based in Santa Monica, California,
          offering therapy for adults who feel overwhelmed by anxiety, stress, trauma,
          or burnout. Many of my clients are high-achieving and thoughtful individuals
          who appear functional on the outside but internally feel exhausted,
          stuck in overthinking, or emotionally on edge.
        </p>

        <p className="text-base sm:text-lg text-[#2e3a34] max-w-xl leading-7 sm:leading-8 mb-6 sm:mb-8 md:mb-10">
          My approach is warm, collaborative, and grounded. I integrate evidence-based
          methods such as CBT, EMDR, mindfulness, and body-oriented techniques to help
          you better understand both the emotional and physical impact of what you're
          experiencing. Together, we'll create a safe space where healing, clarity,
          and lasting change can begin.
        </p>

        <a
          href="/gettouch"
          className="inline-block border border-[#2e3a34] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base text-[#2e3a34] tracking-widest hover:bg-[#2e3a34] hover:text-white transition-all duration-300"
        >
          BOOK A CONSULTATION →
        </a>
      </div>

      {/* RIGHT IMAGE */}
      <div ref={imageRef} className="relative flex justify-center mt-8 sm:mt-12 md:mt-0 order-1 md:order-2">

        {/* Main Image */}
        <img
          src="/Dr. Maya Reynolds.png"
          alt="Dr Maya Reynolds therapist"
          className="rounded-t-[150px] sm:rounded-t-[180px] md:rounded-t-[200px] w-[280px] sm:w-[320px] md:w-[360px] lg:w-[380px] object-cover hover:scale-105 transition-transform duration-500"
        />

      </div>

    </section>
  );
}
