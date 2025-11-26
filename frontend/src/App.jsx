import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import SkillsGrid from "./components/skills/SkillsGrid";
import ExperienceTimeline from "./components/experience/ExperienceTimeline";
import ProjectsGrid from "./components/projects/ProjectsGrid";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Achievements from "./components/achievements/Achievements";


function App() {

  // Smooth scroll behavior fix for Safari / older browsers
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <main className="bg-[#0d1117] text-[#c9d1d9] min-h-screen overflow-x-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <div className="pt-20 space-y-32">
        <section id="hero">
          <Hero />
        </section>

        <section id="about" className="container mx-auto px-6">
          <About />
        </section>

        <section id="projects" className="container mx-auto px-6">
          <ProjectsGrid />
        </section>

        <section id="skills" className="container mx-auto px-6">
          <SkillsGrid />
        </section>

        <section id="experience" className="container mx-auto px-6">
          <ExperienceTimeline />
        </section>

        <section id="education" className="container mx-auto px-6">
          <Education />
        </section>

        <section id="achievements" className="container mx-auto px-6">
          <Achievements />
        </section>

        <section id="contact" className="container mx-auto px-6">
          <Contact />
        </section>
      </div>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}

export default App;
