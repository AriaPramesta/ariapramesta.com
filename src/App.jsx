import "./App.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className=" bg-stone-950 h-screen text-white font-mono">
      <Navbar />

      <div className="w-[640px] mx-auto pt-32 ">
        <div className="mb-10">
          <h1 className=" text-6xl text-white font-bold">Aria Adi Pramesta</h1>
          <p className="font-semibold">High school graduate in 2023</p>
        </div>

        <img
          src="/assets/profile.jpeg"
          alt="profile"
          className="rounded-xl h-96"
        />
      </div>

      <div className="fixed bottom-0 w-screen">
        <p className="text-center font-semibold">© 2024 Aria Adi Pramesta</p>
      </div>
    </div>
  );
}

export default App;
