import Contact from "@/ui/Contact";
import Experience from "@/ui/Experience";
import Hero from "@/ui/Hero";
import Navbar from "@/ui/Navbar";
import Projects from "@/ui/Projects";
import Skills from "@/ui/Skills";

const Content = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </>
  );
};

export default Content;
