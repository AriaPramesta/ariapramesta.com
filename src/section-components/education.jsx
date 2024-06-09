export default function Education() {
  return (
    <>
      <div className="block md:hidden mx-5">
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
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
          </svg>

          <h1 className="font-bold text-lg">Education</h1>
        </div>

        <div className="mb-10">
          <h1 className="font-semibold text-lg mb-5">Self-taught</h1>
          <p className="text-[10px]">
            Since I graduated from high school, I have studied web development
            self-taught by watching learning videos, such as HTML, CSS, and even
            JavaScript.
          </p>
        </div>

        <div>
          <h1 className="font-semibold text-lg mb-5">Bearmentor Bootcamp</h1>
          <p className="text-[10px]">
            I joined Bearmentor Bootcamp to further improve my skills, I learned
            a lot there. starting from Front-End, such as creating a personal
            website that only uses HTML and CSS, learning JavaScript and
            learning React. I also studied Back-End, such as creating rest API
            applications
          </p>
        </div>
      </div>

      <div
        className="hidden md:block w-[640px] mx-auto mb-32 pt-20"
        id="education"
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
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
          </svg>

          <h1 className="font-bold text-3xl">Education</h1>
        </div>

        <div className="mb-10">
          <h1 className="font-semibold text-xl mb-5">Self-taught</h1>
          <p>
            Since I graduated from high school, I have studied web development
            self-taught by watching learning videos, such as HTML, CSS, and even
            JavaScript.
          </p>
        </div>

        <div>
          <h1 className="font-semibold text-xl mb-5">Bearmentor Bootcamp</h1>
          <p>
            I joined Bearmentor Bootcamp to further improve my skills, I learned
            a lot there. starting from Front-End, such as creating a personal
            website that only uses HTML and CSS, learning JavaScript and
            learning React. I also studied Back-End, such as creating rest API
            applications
          </p>
        </div>
      </div>
    </>
  );
}
