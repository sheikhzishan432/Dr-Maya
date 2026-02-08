export default function Office() {
  return (
    <section className="bg-[#7c7a3c] text-white px-6 md:px-16 py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-[42px] md:text-[60px] font-semibold mb-10">
            Our Office
          </h2>

          <p className="text-xl mb-8 leading-8">
            A calm, private therapy space located in South Delhi for 
            in-person sessions and secure online therapy across India.
          </p>

          <p className="text-lg mb-10 leading-8">
            Shaheen Bagh, South Delhi <br/>
            New Delhi, India – 110025
          </p>

          <h3 className="text-3xl mb-6">Working Hours</h3>

          <p className="text-xl leading-8">
            Monday – Saturday <br />
            10:00 AM – 7:00 PM
          </p>
        </div>

        {/* RIGHT MAP */}
        <div className="w-full h-[350px] md:h-[420px]">
          <iframe
            src="https://maps.google.com/maps?q=Shaheen%20Bagh%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 rounded"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
