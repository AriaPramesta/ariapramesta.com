import "./App.css";
import Navbar from "./components/navbar";
import Home from "./section-components/home";
import Education from "./section-components/education";
import Skills from "./section-components/skills";
import Projects from "./section-components/projects";
import Contact from "./section-components/contact";

function App() {
  return (
    <div>
      <Navbar />

      <Home />

      <Education />

      <Skills />

      <Projects />

      <Contact />

      <div className="bottom-0">
        <p className="text-center font-semibold text-xs sm:text-lg">
          © 2024 Aria Adi Pramesta
        </p>
      </div>
    </div>
  );
}

export default App;
