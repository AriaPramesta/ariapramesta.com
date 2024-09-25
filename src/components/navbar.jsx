import React, { useState } from "react";
import { IconContext } from "react-icons";
import { CgDarkMode } from "react-icons/cg";
import { Link } from "react-router-dom";

import Navigate from "./navigate";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-xl ">
      <div className="flex justify-between items-center py-5 px-8">
        <h1 className="text-3xl font-bold">Aria Adi Pramesta</h1>
        <IconContext.Provider value={{ size: "30px" }}>
          <div>
            <CgDarkMode />
          </div>
        </IconContext.Provider>
        <div className="flex gap-10">
          <ul className="flex gap-10 items-center">
            <Link>
              <li>About Me</li>
            </Link>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <div className="flex items-center">
            <button>EN</button>
            <p>|</p>
            <button>ID</button>
          </div>
        </div>
      </div>
    </div>
  );
}
