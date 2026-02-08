export default function Connect() {
  return (
    <section className="bg-[#f5f1eb] px-6 md:px-16 py-24">

      <h1 className="text-[44px] md:text-[72px] font-semibold text-[#2e3a34] mb-16">
        Let’s Connect
      </h1>

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <p className="text-lg text-[#2e3a34] mb-6">
            Reaching out for therapy is a meaningful first step.
          </p>

          <p className="text-lg text-[#2e3a34] mb-10 max-w-md leading-8">
            I offer individual therapy for adults experiencing anxiety, burnout,
            and the impact of past experiences. You’re welcome to reach out with
            questions or to schedule an initial consultation.
          </p>

          {/* IMAGE */}
          <div className="relative w-[280px] md:w-[320px]">
            <img
              src="https://i.pinimg.com/1200x/06/e9/1f/06e91f11fb33ebf646c96ec0934fee22.jpg"
              alt="therapy calm"
              className="rounded-t-[200px] w-full"
            />

  
          </div>
        </div>

        {/* RIGHT BOX */}
        <div className="bg-[#2e3a34] text-white p-10 md:p-12 rounded-sm">
          <p className="text-lg leading-8">
            I provide in-person therapy sessions from my Santa Monica office,
            along with secure virtual sessions for clients across California.
            My approach is warm, collaborative, and grounded in evidence-based
            practices including CBT, EMDR, and mindfulness-based therapy.
          </p>

          <p className="mt-6 text-lg leading-8">
            If you're feeling overwhelmed, anxious, or simply ready for change,
            you're invited to get in touch to explore whether working together
            feels like a good fit.
          </p>
        </div>

      </div>
    </section>
  );
}
