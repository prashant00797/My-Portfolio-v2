import Navbar from "@/components/portfolio/ui/NavbarUI";
import Hero from "@/components/portfolio/ui/HeroUI";
import Projects from "@/components/portfolio/ui/ProjectsUI";
import Skills from "@/components/portfolio/ui/SkillsUI";
import Experience from "@/components/portfolio/ui/ExperienceUI";
import Contact from "@/components/portfolio/ui/ContactUI";

const Content = () => {
  return (
    <main>
      <Navbar />
      <div className="container">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </main>
  );
};

export default Content;
