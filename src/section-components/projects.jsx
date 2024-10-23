import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  // Variabel untuk animasi judul dan paragraf
  const titleVariants = {
    hidden: { opacity: 0, y: -20 }, // Mulai dari opacity 0 dan bergerak ke atas
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Menjadi terlihat
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: -20 }, // Sama seperti judul
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }, // Sedikit penundaan
  };

  return (
    <div id="projects">
      <motion.h1
        className="text-right md:text-lg xl:text-xl mb-4 md:mb-14 lg:mr-20 md:mt-24 text-black dark:text-white"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
      >
        {t("projects.title")}
      </motion.h1>
      <motion.p
        className="opacity-40 mx-4 md:mx-16 lg:mx-32 xl:mx-64 mb-5 md:mb-20 text-gray-600 dark:text-gray-400"
        variants={paragraphVariants}
        initial="hidden"
        whileInView="visible"
      >
        11:04
      </motion.p>
      <div className="flex flex-col gap-14 md:gap-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative mx-4 md:mx-16 lg:mx-32 xl:mx-64 drop-shadow-2xl overflow-hidden group"
            initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }} // Muncul dari kanan untuk genap, kiri untuk ganjil
            whileInView={{ opacity: 1, x: 0 }} // Menjadi terlihat
            transition={{ duration: 0.7, delay: index * 0.3 }} // Perlambat animasi dengan delay
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
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
          </motion.div>
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
