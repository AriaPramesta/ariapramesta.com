import { FaGithub, FaLinkedin, FaLink } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Contacts() {
  const { t } = useTranslation();

  return (
    <div id="contacts" className="mb-12">
      <h1 className="md:text-lg xl:text-xl mb-4 md:mb-10 lg:ml-20 md:mt-24">
        {t("contacts.title")}
      </h1>
      <p className="text-right opacity-40 md:mr-20 lg:mr-32 md:mb-10">
        {t("contacts.subtitle")}
      </p>
      <div className="flex justify-around">
        {socials.map((socials, index) => (
          <div
            key={index}
            className="hover:shadow-xl pr-6 py-4 md:pr-14 md:py-10 relative drop-shadow-2xl overflow-hidden group"
          >
            <a href={socials.link} target="blank">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end p-4">
                <FaLink />
              </div>
              <div className="flex items-center gap-2">
                <socials.icon className="text-5xl mb-2 w-5 md:w-10 lg:w-32" />
                <div>
                  <h1>{socials.title}</h1>
                  <p>{socials.username}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
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
