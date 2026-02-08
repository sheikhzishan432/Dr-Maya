import Connect from "../components/get in touch section/Connect";
import Appointment from "../components/get in touch section/Appointment";
import Inactive from "../components/get in touch section/Inactive";
import Office from "../components/get in touch section/Office";
import Social from "../components/get in touch section/Social";
import Footer from "../components/get in touch section/Footer";

export default function GetTouchPage() {
  return (
    <main className="bg-[#f5f1eb]">

      {/* back button top */}
      <div className="px-6 md:px-16 pt-8">
        <a href="/" className="text-[#2e3a34] underline">
          ← Back to Home
        </a>
      </div>

      {/* sections */}
      <Connect />
      <Appointment />
      <Inactive />
      <Office />
      <Social />
      <Footer />

    </main>
  );
}
