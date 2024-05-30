import HomeIcon from "./homeicon";
import Navigate from "./navigate";

export default function Navbar() {
  return (
    <>
      <div className="block md:hidden fixed w-full">
        <div className="flex items-center justify-between bg-[rgba(0,0,0,0.2)] px-6 py-4 backdrop-blur">
          <HomeIcon homeUrl="/" />
        </div>
      </div>

      <div className="hidden md:block fixed w-screen">
        <div className="flex items-center bg-[rgba(0,0,0,0.2)] px-7 py-5 backdrop-blur">
          <ul className="mx-auto">
            <li className="flex gap-10">
              <HomeIcon homeUrl="/" />
              <Navigate url="/">About</Navigate>
              <Navigate url="/">Project</Navigate>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
