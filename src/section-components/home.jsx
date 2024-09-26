import React from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="md:mt-5">
      <div className="flex flex-col items-center mb-10 md:mb-40 xl:mb-50">
        <h1 id="about" className="text-xs md:text-3xl xl:text-5xl">
          {t("home.greeting")} Aria Adi Pramesta
        </h1>
        <p className="md:text-base">{t("home.occupation")}</p>
      </div>
      <div className="flex flex-row-reverse justify-between gap-5 xl:gap-20">
        <div className="bg-[url('/assets/profile.jpeg')] bg-cover w-[150px] min-h-[150px] md:min-w-[300px] md:min-h-[200px] xl:w-[600px] xl:h-[500px]"></div>
        <div className="max-w-[175px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[700px]">
          <div className="flex flex-col gap-4 md:gap-20 xl:gap-32">
            <p className="text-right mt-5 opacity-40 mr-10">
              {t("home.subtitle")}
            </p>
            <div className="flex flex-col gap-3 md:gap-10">
              <p>{t("home.description1")}</p>
              <p>{t("home.description2")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
