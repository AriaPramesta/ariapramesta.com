import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiPostgresql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion"; // Import Framer Motion dan useInView
import { useRef } from "react"; // Untuk referensi elemen

export default function About() {
  const { t } = useTranslation();
  const ref = useRef(null); // Buat referensi untuk elemen yang ingin dipantau
  const isInView = useInView(ref, { once: false }); // Mengontrol agar animasi dapat muncul kembali ketika elemen di-scroll

  // Variants untuk animasi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay antar skill icons
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Memperlambat animasi pada p dan h1 dengan menambahkan durasi yang lebih lama
  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5 }, // Animasi lebih lambat, dengan durasi 1.5 detik
    },
  };

  return (
    <div>
      <motion.p
        className="text-center opacity-40 -mr-20 xl:-mr-64 md:mb-24 md:mt-10 text-gray-600 dark:text-gray-400"
        variants={textVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {t("about.subtitle")}
      </motion.p>
      <div>
        <motion.h1
          className="md:text-lg xl:text-xl mb-5 md:mb-28 lg:ml-20 text-black dark:text-white"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {t("about.skillsTitle")}
        </motion.h1>
        <motion.div
          ref={ref} // Tambahkan referensi untuk memantau elemen ini
          className="grid grid-cols-2 gap-4 md:gap-14 lg:gap-24 sm:grid-cols-3 md:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Animasi aktif ketika elemen terlihat di viewport
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center text-gray-800 dark:text-gray-300"
              variants={itemVariants}
            >
              <skill.icon className="text-5xl mb-2 w-5 md:w-10 lg:w-32" />
              <span className="md:text-sm text-center">
                {skill.title.toLowerCase()}
              </span>
            </motion.div>
          ))}
        </motion.div>
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
