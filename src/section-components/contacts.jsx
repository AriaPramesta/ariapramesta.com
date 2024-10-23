import { FaGithub, FaLinkedin, FaLink } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Contacts() {
  const { t } = useTranslation();

  return (
    <div id="contacts" className="mb-12 px-4 md:px-20">
      <motion.h1
        className="md:text-lg xl:text-xl mb-4 text-black dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("contacts.title")}
      </motion.h1>
      <motion.p
        className="text-right opacity-70 mb-10 text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("contacts.subtitle")}
      </motion.p>
      <motion.div
        className="flex flex-wrap justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {socials.map((social, index) => (
          <motion.div
            key={index}
            className="hover:shadow-xl px-6 py-4 relative drop-shadow-2xl overflow-hidden group bg-white dark:bg-neutral-800 transition-colors duration-300 m-4 rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <a href={social.link} target="_blank" rel="noopener noreferrer">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end p-4">
                <FaLink />
              </div>
              <div className="flex items-center gap-2 text-black dark:text-white">
                <social.icon className="text-5xl mb-2" />
                <div>
                  <h1 className="text-lg font-semibold">{social.title}</h1>
                  <p className="text-sm">{social.username}</p>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

const socials = [
  {
    id: "1",
    title: "GitHub",
    username: "AriaPramesta",
    link: "https://github.com/AriaPramesta/",
    icon: FaGithub,
  },
  {
    id: "2",
    title: "LinkedIn",
    username: "Aria Pramesta",
    link: "https://www.linkedin.com/in/aria-pramesta-a015672b4/",
    icon: FaLinkedin,
  },
];
