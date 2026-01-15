import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhatWeDo from "@/components/WhatWeDo";
import FamilySupport from "@/components/FamilySupport";
import Facility from "@/components/Facility";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <About />
        <Services />
        <Process />
        <WhatWeDo />
        <Facility />
        <FamilySupport />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
