import "./App.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="w-full h-screen bg-stone-950 text-white font-mono">
      <Navbar />

      <div className="block md:hidden mx-5">
        <div className="pt-20 flex flex-col mb-10">
          <h1 className="font-bold text-3xl">Aria Adi Pramesta</h1>
          <p className="font-semibold text-md ">
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

      <div className=" hidden md:block w-[640px] mx-auto pt-36">
        <div className=" mb-14">
          <h1 className=" text-6xl text-white font-bold">Aria Adi Pramesta</h1>
          <p className="font-semibold">High school graduate in 2023</p>
        </div>

        <div className="flex gap-7">
          <img
            src="/assets/profile.jpeg"
            alt="profile"
            className="rounded-xl h-96"
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

            <p className="opacity-70">
              Now, I am continuing my education at Bearmentor Bootcamp to
              increase my knowledge, I am learning about Full Stack Web
              Development to become a programmer.
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 w-screen">
        <p className="text-center font-semibold text-xs sm:text-lg">
          © 2024 Aria Adi Pramesta
        </p>
      </div>
    </div>
  );
}

export default App;
