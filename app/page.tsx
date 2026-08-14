import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Expertise from "@/components/Expertise";
import DesignApproach from "@/components/DesignApproach";
import Experience from "@/components/Experience";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <Hero />
      <About />
      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>
      <Expertise />
      <DesignApproach />
      <Experience />
      <ContactCTA />
    </main>
  );
}