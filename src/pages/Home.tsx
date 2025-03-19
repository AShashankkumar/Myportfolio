import Navbar from "../components/Navbar";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      {/* Navbar Section */}
      <Navbar />

      {/* Main Content */}
      <div className="min-h-screen overflow-y-auto scroll-smooth">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;