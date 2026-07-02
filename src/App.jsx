import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import FeaturedWork from "./components/FeaturedWork";
import Projects from "./components/Projects";
import Education from "./components/Education";
import WhyMe from "./components/WhyMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#F8FAFC] text-[#1F2937] overflow-x-hidden">
      <Navbar />
      <div className="w-full flex flex-col items-center">
        <section className="w-full">
          <Hero />
        </section>

        <section className="w-full py-24">
          <About />
        </section>
      </div>
      <Skills />
      <FeaturedWork />
      <Projects />
      <Education />
      <WhyMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;