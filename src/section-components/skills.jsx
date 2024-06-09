export default function Skills() {
  return (
    <>
      <div className="block md:hidden"></div>

      <div
        className="hidden md:block max-w-[640px] mx-auto mb-32 pt-20"
        id="skill"
      >
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

        <p className="mb-10">
          These are things I learned either independently or while attending
          bootcamp.
        </p>

        <div className="flex gap-16 flex-row overflow-y-auto py-10 px-5 scrollbar-thin">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="blank"
          >
            <div className=" w-56 h-72 bg-stone-950 p-10 rounded-xl shadow-lg shadow-stone-700 flex flex-col justify-evenly gap-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <div className="bg-white rounded-full p-5">
                <img src="/assets/html.png" alt="html" />
              </div>
              <div className="text-center font-bold text-xl">HTML</div>
            </div>
          </a>

          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="blank"
          >
            <div className=" w-56 h-72 bg-stone-950 p-10 rounded-xl shadow-lg shadow-stone-700 flex flex-col justify-evenly gap-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <div className="bg-white rounded-full p-5">
                <img src="/assets/css.png" alt="html" />
              </div>
              <div>
                <h1 className="text-center font-bold text-xl">CSS</h1>
                <p className="text-xs text-center font-semibold">
                  CSS3 & TailwindCSS
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://developer.mozilla.org/en-US/docs/Web/javascript"
            target="blank"
          >
            <div className=" w-56 h-72 bg-stone-950 p-10 rounded-xl shadow-lg shadow-stone-700 flex flex-col justify-evenly gap-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <div className="bg-white rounded-full p-5">
                <img src="/assets/js.png" alt="html" />
              </div>
              <div className="text-center font-bold text-xl">JavaScript</div>
            </div>
          </a>

          <a href="https://react.dev/" target="blank">
            <div className=" w-56 h-72 bg-stone-950 p-10 rounded-xl shadow-lg shadow-stone-700 flex flex-col justify-evenly gap-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <div className="bg-white rounded-full p-5">
                <img src="/assets/react.png" alt="html" />
              </div>
              <div className="text-center font-bold text-xl">React</div>
            </div>
          </a>

          <a
            href="https://www.techtarget.com/searchapparchitecture/definition/RESTful-API#:~:text=A%20RESTful%20API%20is%20an,deleting%20operations%20related%20to%20resources."
            target="blank"
          >
            <div className=" w-56 h-72 bg-stone-950 p-10 rounded-xl shadow-lg shadow-stone-700 flex flex-col justify-evenly gap-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <div className="bg-white rounded-full p-5">
                <img src="/assets/api.png" alt="html" />
              </div>
              <div className="text-center font-bold text-xl">Rest API</div>
            </div>
          </a>

          <a href="">
            <div className=" w-56 h-72 bg-stone-950 p-10 rounded-xl shadow-lg shadow-stone-700 flex flex-col justify-evenly gap-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <div className="bg-white rounded-full p-5">
                <img src="/assets/database.png" alt="html" />
              </div>
              <div>
                <h1 className="text-center font-bold text-xl">Database</h1>
                <p className="text-xs text-center font-semibold">
                  MySQL & PostgreSQL
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
