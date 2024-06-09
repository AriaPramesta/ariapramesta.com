import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HomeIcon from "./homeicon";
import Navigate from "./navigate";

export default function Navbar() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="block md:hidden fixed w-screen" data-aos="fade-down">
        <div className="flex items-center justify-between bg-[rgba(0,0,0,0.2)] px-6 py-4 backdrop-blur">
          <HomeIcon homeUrl="#homeMobile" />
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
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="hidden md:block fixed top-0 w-screen"
        data-aos="fade-down"
      >
        <div className="flex items-center bg-[rgba(0,0,0,0.2)] px-7 py-5 backdrop-blur">
          <ul className="mx-auto">
            <li className="flex gap-10">
              <HomeIcon homeUrl="#home" />
              <Navigate url="#education">Education</Navigate>
              <Navigate url="#skill">Skills</Navigate>
              <Navigate url="#projects">Projects</Navigate>
              <Navigate url="#contact">Contact</Navigate>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
