import "./App.css";
import Navbar from "./components/navbar";
import Home from "./section-components/home";
import Education from "./section-components/education";

function App() {
  return (
    <div className="w-full bg-stone-900 text-white font-mono">
      <Navbar />

      <Home />
      <Education />

      <div className="bottom-0">
        <p className="text-center font-semibold text-xs sm:text-lg">
          © 2024 Aria Adi Pramesta
        </p>
      </div>
    </div>
  );
}

export default App;
