export default function Social() {
  return (
    <section className="bg-[#f5f1eb] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <h2 className="text-[40px] md:text-[56px] text-[#2e3a34] font-semibold mb-6">
          Resources & Insights
        </h2>

        <p className="text-lg text-[#2e3a34] mb-14 max-w-2xl">
          Gentle reflections, mental wellness tips, and therapeutic insights to support 
          your emotional well-being beyond the therapy room.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-6">

          <img
            src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg"
            className="w-full h-[260px] object-cover rounded"
            alt="therapy tips"
          />

          <img
            src="https://images.pexels.com/photos/5793684/pexels-photo-5793684.jpeg"
            className="w-full h-[260px] object-cover rounded"
            alt="mindfulness"
          />

          <img
            src="https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg"
            className="w-full h-[260px] object-cover rounded"
            alt="journal writing"
          />

          <img
            src="https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg"
            className="w-full h-[260px] object-cover rounded"
            alt="self care"
          />

        </div>

      </div>
    </section>
  );
}
