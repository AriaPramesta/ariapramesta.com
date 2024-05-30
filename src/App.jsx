import "./App.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="w-full h-screen bg-stone-950 text-white font-mono">
      <div className="mx-3">
        <div className="pt-20 flex flex-col">
          <h1 className="font-bold text-2xl text-center">Aria Adi Pramesta</h1>
          <p className="font-semibold text-xs text-center">
            Senior high school graduate in 2023
          </p>
        </div>
        <div className="">
          <div className="m-8">
            <img
              src="/assets/profile.jpeg"
              alt="profile"
              className=" h-64 mx-auto rounded-xl"
            />
          </div>

          <div className="flex flex-col">
            <h2 className="flex items-center gap-2">
              <img
                src="/assets/bearmentor-bear.png"
                alt="bearmentor logo"
                className="h-5"
              />
              <p className="text-md font-semibold">Education</p>
            </h2>

            <p className="text-xs">
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
