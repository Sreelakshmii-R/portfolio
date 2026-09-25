import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import ProfessionalExperience from "./components/ProfessionalExperience";
import FeaturedWork from "./components/FeaturedWork";
import Projects from "./components/Projects";
import Education from "./components/Education";
import WhyMe from "./components/WhyMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full bg-[#F8FAFC] text-[#1F2937] overflow-x-hidden">
      <Navbar />

      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <ProfessionalExperience />
        <FeaturedWork />
        <Projects />
        <Education />
        <WhyMe />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;