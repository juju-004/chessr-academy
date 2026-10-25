import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Plans from "../components/Plans";
import HowItWorks from "../components/HowItWorks";
import Why from "../components/Why";
import Schools from "../components/Schools";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Plans />
        <HowItWorks />
        <Why />
        <Schools />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
