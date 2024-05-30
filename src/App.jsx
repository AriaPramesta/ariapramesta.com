import "./App.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="w-full h-screen bg-stone-950 text-white font-mono">
      <Navbar />
      <div className="mx-5">
        <div className="pt-20 flex flex-col mb-10 items-center">
          <h1 className="font-bold text-3xl">Aria Adi Pramesta</h1>
          <p className="font-semibold text-xs ">
            Senior high school graduate in 2023
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <img
            src="/assets/profile.jpeg"
            alt="profile"
            className=" mx-28 rounded-xl"
          />

          <div className="flex flex-col">
            <h2 className="flex items-center gap-2">
              <img
                src="/assets/bearmentor-bear.png"
                alt="bearmentor logo"
                className="h-5"
              />
              <p className="text-md font-semibold">Education</p>
            </h2>

            <p className="text-xs opacity-75">
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
