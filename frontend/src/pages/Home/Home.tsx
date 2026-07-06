import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
//import Projects from "@/components/sections/Projects";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />

      <About />

      <Services />

      <WhyChooseUs />

      {/* <Project /> */}

      <CTA />
      <Contact />
    </>
  );
}