import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="relative min-h-screen bg-void font-body text-ink">
      <CursorGlow />
      <Navbar />
      <Sidebar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Certificates />
        <Projects />
        <Services />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
