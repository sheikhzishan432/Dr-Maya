export default function Footer() {
  return (
    <>
      {/* MAIN FOOTER */}
      <section className="bg-[#f5f1eb] px-6 md:px-16 py-20 grid md:grid-cols-3 gap-12">

        {/* BRAND */}
        <div>
          <h2 className="text-3xl font-semibold text-[#2e3a34] mb-6">
            Dr. Maya Reynolds
          </h2>

          <p className="text-[#2e3a34]">
            123th Street 45 W <br />
            Santa Monica, CA 90401
          </p>

          <div className="mt-6 space-y-2">
            <p className="underline">hello@drmaya.com</p>
            <p className="underline">(310) 555-2211</p>
          </div>
        </div>

        {/* HOURS */}
        <div>
          <h3 className="text-2xl font-semibold text-[#2e3a34] mb-6">
            Office Hours
          </h3>

          <p className="text-[#2e3a34]">Monday – Friday</p>
          <p className="text-[#2e3a34]">10am – 6pm</p>
          <p className="text-sm mt-3 text-[#2e3a34]">
            In-person & virtual sessions available
          </p>
        </div>

        {/* QUICK LINKS */}
        {/* QUICK LINKS */}
<div>
  <h3 className="text-2xl font-semibold text-[#2e3a34] mb-6">
    Quick Links
  </h3>

  <div className="space-y-3 text-[#2e3a34] font-medium">

    <a href="/" className="block hover:underline">
      Home
    </a>

    <a href="#about" className="block hover:underline">
      About
    </a>

    <a href="#services" className="block hover:underline">
      Services
    </a>

    <a href="/gettouch" className="block hover:underline">
      Contact
    </a>

  </div>
</div>


      </section>

      {/* BOTTOM FOOTER */}
      <section className="bg-[#ebe5de] text-center py-10 text-[#2e3a34]">

        {/* SOCIAL ICONS ONLY */}
        <div className="flex justify-center gap-6 mb-6">

          {/* Instagram */}
          <a href="#" className="hover:scale-110 transition">
            <svg width="26" height="26" fill="none" stroke="#2e3a34" strokeWidth="1.6" viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1"/>
            </svg>
          </a>

          {/* Facebook */}
          <a href="#" className="hover:scale-110 transition">
            <svg width="26" height="26" fill="none" stroke="#2e3a34" strokeWidth="1.6" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="#" className="hover:scale-110 transition">
            <svg width="26" height="26" fill="none" stroke="#2e3a34" strokeWidth="1.6" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>

        </div>

        <p className="text-sm">
          © 2026 Dr. Maya Reynolds Therapy. All rights reserved.
        </p>

      </section>
    </>
  );
}
