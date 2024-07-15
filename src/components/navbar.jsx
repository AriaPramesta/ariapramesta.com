import React, { useState } from "react";
import HomeIcon from "./homeicon";
import Navigate from "./navigate";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full">
      {/* Mobile Navbar */}
      <div className="block md:hidden">
        <div className="flex items-center justify-between bg-[rgba(0,0,0,0.2)] px-6 py-4 backdrop-blur">
          <HomeIcon homeUrl="#homeMobile" />
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Dropdown menu on mobile */}
        {isOpen && (
          <div className="bg-[rgba(0,0,0,0.2)] backdrop-blur absolute top-full left-0 right-0">
            <ul className="py-2">
              <li className="text-white text-center py-3">
                <Navigate url="#education">Education</Navigate>
              </li>
              <li className="text-white text-center py-3">
                <Navigate url="#skills">Skills</Navigate>
              </li>
              <li className="text-white text-center py-3">
                <Navigate url="#projects">Projects</Navigate>
              </li>
              <li className="text-white text-center py-3">
                <Navigate url="#contact">Contact</Navigate>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <div className="flex items-center bg-[rgba(0,0,0,0.2)] px-7 py-5 backdrop-blur">
          <ul className="mx-auto flex gap-10">
            <li>
              <HomeIcon homeUrl="#home" />
            </li>
            <li>
              <Navigate url="#education">Education</Navigate>
            </li>
            <li>
              <Navigate url="#skills">Skills</Navigate>
            </li>
            <li>
              <Navigate url="#projects">Projects</Navigate>
            </li>
            <li>
              <Navigate url="#contact">Contact</Navigate>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
