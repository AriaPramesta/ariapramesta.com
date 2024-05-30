import "./App.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className=" bg-stone-950 h-screen text-white font-mono ">
      <Navbar />

      <div className="w-[640px] mx-auto pt-40 sm:mx-6">
        <div className="mb-16">
          <h1 className=" text-6xl text-white font-bold sm:text-5xl">
            Aria Adi Pramesta
          </h1>
          <p className="font-semibold">Senior high school graduate in 2023</p>
        </div>
        <div className="flex gap-14 items-start">
          <img
            src="/assets/profile.jpeg"
            alt="profile"
            className="rounded-xl h-96 sm:h-64"
          />

          <div>
            <h2 className="flex items-end gap-3 mb-2">
              <img
                src="/assets/bearmentor-bear.png"
                alt="bearmentor logo"
                className="h-10"
              />
              <p className="font-semibold text-3xl">Education</p>
            </h2>

            <p className="opacity-70 sm:text-sm">
              Now, I am continuing my education at Bearmentor Bootcamp to
              increase my knowledge, I am learning about Full Stack Web
              Development to become a programmer.
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 w-screen">
        <p className="text-center font-semibold">© 2024 Aria Adi Pramesta</p>
      </div>
    </div>
  );
}

export default App;
