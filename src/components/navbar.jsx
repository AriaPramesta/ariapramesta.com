import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import burger and close icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-xl">
      <div className="flex justify-between items-center py-5 px-8">
        <h1 className="md:text-3xl font-bold">Aria Adi Pramesta</h1>

        <div className="lg:hidden" onClick={toggleNavbar}>
          {isOpen ? (
            <AiOutlineClose size="25px" />
          ) : (
            <AiOutlineMenu size="25px" />
          )}
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row gap-10 lg:items-center absolute lg:static top-16 left-0 right-0 bg-white lg:bg-transparent shadow-lg lg:shadow-none px-8 py-5 lg:py-0`}
        >
          <ul className="flex flex-col lg:flex-row lg:gap-10 lg:items-center text-right">
            <a href="#about">
              <li className="hover:bg-stone-600 hover:text-white lg:hover:text-black lg:hover:bg-transparent lg:hover:underline active:font-bold md:p-4 lg:p-0">
                About Me
              </li>
            </a>
            <a href="#projects">
              <li className="hover:bg-stone-600 hover:text-white lg:hover:text-black lg:hover:bg-transparent lg:hover:underline active:font-bold md:p-4 lg:p-0">
                Projects
              </li>
            </a>
            <li className="hover:bg-stone-600 hover:text-white lg:hover:text-black lg:hover:bg-transparent lg:hover:underline active:font-bold md:p-4 lg:p-0">
              Contact
            </li>
            <li className="flex items-center gap-2 md:p-4 lg:p-0 justify-end">
              <button className="hover:underline active:font-bold">EN</button>
              <p>|</p>
              <button className="hover:underline active:font-bold">ID</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
