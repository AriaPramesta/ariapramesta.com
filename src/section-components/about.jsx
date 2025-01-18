import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiPostgresql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div>
      <p className="text-center opacity-40 -mr-20 xl:-mr-64 md:mb-24 md:mt-10 text-gray-600 dark:text-gray-400">
        {t("about.subtitle")}
      </p>
      <div>
        <h1 className="md:text-lg xl:text-xl mb-5 md:mb-28 lg:ml-20 text-black dark:text-white">
          {t("about.skillsTitle")}
        </h1>
        <div className="grid grid-cols-2 gap-4 md:gap-14 lg:gap-24 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-gray-800 dark:text-gray-300"
            >
              <skill.icon className="text-5xl mb-2 w-5 md:w-10 lg:w-32" />
              <span className="md:text-sm text-center">
                {skill.title.toLowerCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const skills = [
  {
    id: 1,
    icon: FaHtml5,
    title: "HTML",
  },
  {
    id: 2,
    icon: FaCss3Alt,
    title: "CSS",
  },
  {
    id: 3,
    icon: FaJs,
    title: "JavaScript",
  },
  {
    id: 4,
    icon: FaReact,
    title: "React",
  },
  {
    id: 5,
    icon: RiTailwindCssFill,
    title: "Tailwind CSS",
  },
  {
    id: 6,
    icon: GrMysql,
    title: "MySQL",
  },
  {
    id: 7,
    icon: SiPostgresql,
    title: "PostgreSQL",
  },
  {
    id: 8,
    icon: FaNode,
    title: "Node JS",
  },
];
