export default function Skills() {
  return (
    <div className="max-w-[640px] mx-auto mb-32">
      <div className="flex flex-col md:flex-row gap-10 items-center mb-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-10 md:w-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
        <h1 className="font-bold text-3xl">Skills</h1>
      </div>
      <p className="mb-10">
        These are things I learned either independently or while attending
        bootcamp.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {skills.map((skill, index) => (
          <a key={index} href={skill.link} target="blank">
            <div className="bg-stone-950 p-10 rounded-xl shadow-lg flex flex-col justify-between h-[320px] transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              <div className="bg-white rounded-full p-5">
                <img src={`/assets/${skill.icon}`} alt={skill.name} />
              </div>
              <div className="text-center">
                <h1 className="font-bold text-xl">{skill.name}</h1>
                <p className="text-xs text-center font-semibold">
                  {skill.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

const skills = [
  {
    name: "HTML",
    description: "HTML5",
    icon: "html.png",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    description: "CSS3 & TailwindCSS",
    icon: "css.png",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    description: "JavaScript",
    icon: "js.png",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React",
    description: "React",
    icon: "react.png",
    link: "https://react.dev/",
  },
  {
    name: "Rest API",
    description: "RESTful API",
    icon: "api.png",
    link: "https://www.techtarget.com/searchapparchitecture/definition/RESTful-API#:~:text=A%20RESTful%20API%20is%20an,deleting%20operations%20related%20to%20resources.",
  },
  {
    name: "Database",
    description: "MySQL & PostgreSQL",
    icon: "database.png",
    link: "",
  },
];
