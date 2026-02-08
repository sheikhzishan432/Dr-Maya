import Navbar from "./components/sections 1/Navbar";
import Hero from "./components/sections 1/Hero";
import Second from "./components/sections 1/Second";
import Specialties from "./components/sections 1/Specialties";
import Support from "./components/sections 1/Support";
import Faq from "./components/sections 1/Faq";
import Professional from "./components/sections 1/Professional";
import StartToday from "./components/sections 1/StartToday";
import Footer from "./components/Footer/Footer";
import About from "./components/sections 1/About";
import Services from "./components/sections 1/Services";

export default function Home() {
  return (
    <main className="w-full max-w-full overflow-x-hidden relative">
      <Navbar />
      <Hero />
      <Second />
      <Specialties />
      <Support />
      <About/>
      <Services/>
      <Faq />
      <Professional />
      <StartToday />
      <Footer />
    </main>
  );
}
