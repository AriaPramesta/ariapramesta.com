import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      navbar: {
        title: "Aria Adi Pramesta",
        about: "About Me",
        projects: "Projects",
        contact: "Contact",
      },

      home: {
        greeting: "Hi! I'm",
        occupation: "High School Graduate",
        subtitle: "The Dreamseeker",
        description1:
          "I am a high school graduate, since graduating in 2023 I have learned a lot about web development, starting from self-taught through videos on the internet to attending bootcamps.",
        description2:
          "There are several things I learned while studying autodidactically, but all of them are just basic things like HTML, CSS, and JavaScript. I developed the skills I learned autodidactically by attending Full Stack Bootcamp, one of the things I learned was ReactJS. I also studied Backend databases, but now I am focusing on becoming a Frontend Developer.",
      },

      about: {
        subtitle: "Only Human",
        skillsTitle: "My Skills",
      },

      projects: {
        title: "Projects",
        list: {
          1: {
            title: "Contact App",
            desc: "A simple contact app using JavaScript.",
          },
          2: {
            title: "What To Do?",
            desc: "To do list app using React.",
          },
          3: {
            title: "The Writers",
            desc: "Encyclopedia application Rest API.",
          },
        },
      },

      contacts: {
        title: "Contacts",
        subtitle: "Anti-Social",
      },
    },
  },
  id: {
    translation: {
      navbar: {
        title: "Aria Adi Pramesta",
        about: "Tentang Saya",
        projects: "Proyek",
        contact: "Kontak",
      },

      home: {
        greeting: "Hai! Saya",
        occupation: "Lulusan SMA",
        subtitle: "Pencari Mimpi",
        description1:
          "Saya adalah lulusan SMA, sejak lulus pada tahun 2023 saya belajar banyak tentang pengembangan web, mulai dari belajar otodidak melalui video di internet hingga mengikuti bootcamp.",
        description2:
          "Ada beberapa hal yang saya pelajari saat belajar secara otodidak, namun semuanya hanya hal-hal dasar seperti HTML, CSS, dan JavaScript. Saya mengembangkan keterampilan yang saya pelajari secara otodidak dengan mengikuti Bootcamp Full Stack, salah satu hal yang saya pelajari adalah ReactJS. Saya juga mempelajari basis data Backend, tetapi sekarang saya fokus menjadi Frontend Developer.",
      },

      about: {
        subtitle: "Hanya Manusia",
        skillsTitle: "Keahlian Saya",
      },

      projects: {
        title: "Proyek",
        list: {
          1: {
            title: "Aplikasi Kontak",
            desc: "Aplikasi kontak sederhana menggunakan JavaScript.",
          },
          2: {
            title: "Apa yang Harus Dilakukan?",
            desc: "Aplikasi daftar tugas menggunakan React.",
          },
          3: {
            title: "Para Penulis",
            desc: "Aplikasi ensiklopedia menggunakan Rest API.",
          },
        },
      },

      contacts: {
        title: "Kontak",
        subtitle: "Anti-Sosial",
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
