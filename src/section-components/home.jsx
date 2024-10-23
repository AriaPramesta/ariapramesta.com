import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="md:mt-5">
      <div className="flex flex-col items-center mb-10 md:mb-40 xl:mb-50">
        <motion.h1
          id="about"
          className="text-xs md:text-3xl xl:text-5xl text-black dark:text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          {t("home.greeting")} Aria Adi Pramesta
        </motion.h1>
        <motion.p
          className="md:text-base text-gray-800 dark:text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          {t("home.occupation")}
        </motion.p>
      </div>

      <div className="flex flex-row-reverse justify-between gap-5 xl:gap-20">
        <motion.div
          className="bg-[url('/assets/me.png')] bg-cover w-[150px] min-h-[150px] md:min-w-[300px] md:min-h-[200px] xl:w-[600px] xl:h-[500px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
        ></motion.div>

        <motion.div
          className="max-w-[175px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[700px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col gap-4 md:gap-20 xl:gap-32">
            <motion.p
              className="text-right mt-5 opacity-40 mr-10 text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 0.5 }}
            >
              {t("home.subtitle")}
            </motion.p>

            <motion.div
              className="flex flex-col gap-3 md:gap-10 text-black dark:text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 1 }}
            >
              <p>{t("home.description1")}</p>
              <p>{t("home.description2")}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
