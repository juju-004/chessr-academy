import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Trusted from "@/components/sections/Trusted";
import Services from "@/components/sections/Services";
import WhyChessR from "@/components/sections/WhyChessR";
import Journey from "@/components/sections/Journey";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trusted />
        <Services />
        <WhyChessR />
        <Journey />
        <Testimonials />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
