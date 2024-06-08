import HomeIcon from "./homeicon";
import Navigate from "./navigate";

export default function Navbar() {
  return (
    <>
      <div className="block md:hidden fixed w-full">
        <div className="flex items-center justify-between bg-[rgba(0,0,0,0.2)] px-6 py-4 backdrop-blur">
          <HomeIcon homeUrl="/" />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="hidden md:block fixed w-screen">
        <div className="flex items-center bg-[rgba(0,0,0,0.2)] px-7 py-5 backdrop-blur">
          <ul className="mx-auto">
            <li className="flex gap-10">
              <HomeIcon homeUrl="/" />
              <Navigate url="/">Education</Navigate>
              <Navigate url="/">Skill</Navigate>
              <Navigate url="/">Project</Navigate>
              <Navigate url="/">Contact</Navigate>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
