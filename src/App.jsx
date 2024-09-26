import Navbar from "./components/navbar";
import Home from "./section-components/home";
import About from "./section-components/about";
import Projects from "./section-components/projects";
import Contacts from "./section-components/contacts";

function App() {
  return (
    <>
      <Navbar />

      <div className="overflow-x-hidden m-5 md:m-10 xl:m-14 flex flex-col gap-10 text-[6px] md:text-xs xl:text-base">
        <Home />

        <About />

        <Projects />

        <Contacts />
      </div>
      <div className="bottom-0">
        <p className="text-center font-semibold text-xs sm:text-lg">
          © 2024 Aria Adi Pramesta
        </p>
      </div>
    </>
  );
}

export default App;
