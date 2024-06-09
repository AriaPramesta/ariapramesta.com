import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="block md:hidden mx-5 mb-24" id="projectsMobile">
        <div data-aos="fade-left">
          <div className="flex gap-2 items-center mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
              className="w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
              />
            </svg>

            <h1 className="font-bold text-xl">Projects</h1>
          </div>

          <p className="mb-5 text-xs">
            Besides this personal website, these are the projects I have
            created.
          </p>
        </div>

        <div
          className="flex gap-16 flex-row overflow-y-auto p-5 scrollbar-thin"
          data-aos="fade-right"
        >
          <a href="https://contact-app-flame-chi.vercel.app/" target="blank">
            <div className="w-[300px] bg-black p-5 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg shadow-stone-700">
              <div>
                <img
                  src="/assets/contactApp.png"
                  alt="contactApp"
                  className="rounded-xl"
                />
              </div>
              <h1 className="font-bold text-center text-lg mt-5">
                Contact App
              </h1>
              <p className="text-xs text-center font-semibold mt-3">
                Contact application using JavaScript
              </p>
            </div>
          </a>

          <a href="https://what-todo-omega.vercel.app/" target="blank">
            <div className="w-[300px] bg-black p-5 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg shadow-stone-700">
              <div>
                <img
                  src="/assets/what-todo.png"
                  alt="contactApp"
                  className="rounded-xl"
                />
              </div>
              <h1 className="font-bold text-center text-lg mt-5">
                What To Do?
              </h1>
              <p className="text-xs text-center font-semibold mt-3">
                Todo application using React
              </p>
            </div>
          </a>

          <a href="https://the-writers.onrender.com/" target="blank">
            <div className="w-[300px] bg-black p-5 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg shadow-stone-700">
              <div>
                <img
                  src="/assets/the-writers.png"
                  alt="contactApp"
                  className="rounded-xl"
                />
              </div>
              <h1 className="font-bold text-center text-lg mt-5">
                The Writers
              </h1>
              <p className="text-xs text-center font-semibold mt-3">
                Encyclopedia application Rest API
              </p>
            </div>
          </a>
        </div>
      </div>

      <div
        className="hidden md:block w-[640px] mx-auto mb-32 pt-20"
        id="projects"
      >
        <div data-aos="fade-left">
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
                d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
              />
            </svg>

            <h1 className="font-bold text-3xl">Projects</h1>
          </div>

          <p className="mb-10">
            Besides this personal website, these are the projects I have
            created.
          </p>
        </div>

        <div
          className="flex gap-16 flex-row overflow-y-auto p-10 scrollbar-thin"
          data-aos="fade-right"
        >
          <a href="https://contact-app-flame-chi.vercel.app/" target="blank">
            <div className="w-[550px] bg-black p-5 rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg shadow-stone-700">
              <div>
                <img
                  src="/assets/contactApp.png"
                  alt="contactApp"
                  className="rounded-xl"
                />
              </div>
              <h1 className="font-bold text-center text-xl mt-5">
                Contact App
              </h1>
              <p className="text-xs text-center font-semibold mt-3">
                Contact application using JavaScript
              </p>
            </div>
          </a>

          <a href="https://what-todo-omega.vercel.app/" target="blank">
            <div className="w-[550px] bg-black p-5 rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg shadow-stone-700">
              <div>
                <img
                  src="/assets/what-todo.png"
                  alt="contactApp"
                  className="rounded-xl"
                />
              </div>
              <h1 className="font-bold text-center text-xl mt-5">
                What To Do?
              </h1>
              <p className="text-xs text-center font-semibold mt-3">
                Todo application using React
              </p>
            </div>
          </a>

          <a href="https://the-writers.onrender.com/" target="blank">
            <div className="w-[550px] bg-black p-5 rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg shadow-stone-700">
              <div>
                <img
                  src="/assets/the-writers.png"
                  alt="contactApp"
                  className="rounded-xl"
                />
              </div>
              <h1 className="font-bold text-center text-xl mt-5">
                The Writers
              </h1>
              <p className="text-xs text-center font-semibold mt-3">
                Encyclopedia application Rest API
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
