import React from "react";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <div id="projects">
      <h1 className="text-right md:text-lg xl:text-xl mb-4 md:mb-14 lg:mr-20 md:mt-24">
        {t("projects.title")}
      </h1>
      <p className="opacity-40 mx-4 md:mx-16 lg:mx-32 xl:mx-64 mb-5 md:mb-20">
        11:04
      </p>
      <div className="flex flex-col gap-10 md:gap-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative mx-4 md:mx-16 lg:mx-32 xl:mx-64 drop-shadow-2xl overflow-hidden group"
          >
            <a href={project.link} target="blank">
              <img
                src={`/assets/${project.img}`}
                alt={project.title}
                className="w-full h-auto object-cover md:h-64 lg:h-80 xl:h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white text-xs md:text-lg font-semibold">
                  {t(`projects.list.${project.id}.title`)}
                </h3>
                <p className="text-white text-xs md:text-sm mt-1">
                  {t(`projects.list.${project.id}.desc`)}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

const projects = [
  {
    id: "1",
    img: "contactApp.png",
    title: "Contact App",
    desc: "A simple contact app using JavaScript.",
    link: "https://github.com/AriaPramesta/contactApp",
  },
  {
    id: "2",
    img: "what-todo.png",
    title: "What To Do?",
    desc: "To do list app using React.",
    link: "https://github.com/AriaPramesta/what-todo",
  },
  {
    id: "3",
    img: "the-writers.png",
    title: "The Writers",
    desc: "Encyclopedia application Rest API.",
    link: "https://github.com/AriaPramesta/the-writers",
  },
];
