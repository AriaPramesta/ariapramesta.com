export default function Skills() {
  return (
    <div className="max-w-[640px] mx-auto mb-32">
      <div className="flex gap-3 items-center mb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
          className="w-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>

        <h1 className="font-bold text-3xl">Skills</h1>
      </div>

      <div className="flex gap-10 flex-wrap justify-around">
        <div className=" w-56 h-72 bg-stone-950 p-10 rounded-xl shadow-lg shadow-stone-700">
          <div className="bg-white rounded-full p-5">
            <img src="./public/assets/html.png" alt="html" />
          </div>
        </div>
        <div className=" w-56 h-72 bg-stone-950 p-10 rounded-xl shadow-lg shadow-stone-700">
          <div className="bg-white rounded-full p-5">
            <img src="./public/assets/css.png" alt="css" />
          </div>
        </div>
        <div className=" w-56 h-72 bg-stone-950 p-10 rounded-xl shadow-lg shadow-stone-700">
          <div className="bg-white rounded-full p-5">
            <img src="./public/assets/js.png" alt="js" />
          </div>
        </div>
        <div className=" w-56 h-72 bg-stone-950 p-10 rounded-xl shadow-lg shadow-stone-700">
          <div className="bg-white rounded-full p-5">
            <img src="./public/assets/react.png" alt="react" />
          </div>
        </div>
        <div className=" w-56 h-72 bg-stone-950 p-10 rounded-xl shadow-lg shadow-stone-700">
          <div className="bg-white rounded-full p-5">
            <img src="./public/assets/database.png" alt="database" />
          </div>
        </div>
        <div className=" w-56 h-72 bg-stone-950 p-10 rounded-xl shadow-lg shadow-stone-700">
          <div className="bg-white rounded-full p-5">
            <img src="./public/assets/api.png" alt="api" />
          </div>
        </div>
      </div>
    </div>
  );
}
