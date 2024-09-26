import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-xl text-[8px] md:text-xs xl:text-base">
      <div className="flex justify-between items-center py-5 px-8">
        <h1 className="text-sm md:text-3xl font-bold">{t("navbar.title")}</h1>

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
              <li className="hover:bg-stone-600 hover:text-white lg:hover:text-black lg:hover:bg-transparent lg:hover:underline active:font-bold p-2 md:p-4 lg:p-0">
                {t("navbar.about")}
              </li>
            </a>
            <a href="#projects">
              <li className="hover:bg-stone-600 hover:text-white lg:hover:text-black lg:hover:bg-transparent lg:hover:underline active:font-bold p-2 md:p-4 lg:p-0">
                {t("navbar.projects")}
              </li>
            </a>
            <a href="#contacts">
              <li className="hover:bg-stone-600 hover:text-white lg:hover:text-black lg:hover:bg-transparent lg:hover:underline active:font-bold p-2 md:p-4 lg:p-0">
                {t("navbar.contact")}
              </li>
            </a>
            <li className="flex items-center gap-2 p-2 md:p-4 lg:p-0 justify-end">
              <button
                onClick={() => changeLanguage("en")}
                className={`hover:underline active:font-bold relative ${
                  i18n.language === "en" ? "font-bold" : ""
                }`}
              >
                EN
                {i18n.language === "en" && (
                  <span className="absolute left-0 right-0 bottom-[-2px] h-[2px] bg-black" />
                )}
              </button>
              <p>|</p>
              <button
                onClick={() => changeLanguage("id")}
                className={`hover:underline active:font-bold relative ${
                  i18n.language === "id" ? "font-bold" : ""
                }`}
              >
                ID
                {i18n.language === "id" && (
                  <span className="absolute left-0 right-0 bottom-[-2px] h-[2px] bg-black" />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
