import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import GrowthArchitecture from "@/components/GrowthArchitecture";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <GrowthArchitecture />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}
