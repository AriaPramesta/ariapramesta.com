export default function Contact() {
  return (
    <div className="w-[640px] mx-auto mb-80 pt-10" id="contact">
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
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>

        <h1 className="font-bold text-3xl">Contact</h1>
      </div>

      <p className="mb-10">Lets get connected on these platform!</p>

      <div className="flex justify-between">
        <a
          href="https://www.linkedin.com/in/aria-pramesta-a015672b4/"
          target="blank"
        >
          <div className="bg-black px-14 py-10 rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg shadow-stone-700">
            <div className="bg-white rounded-full p-5 mb-10">
              <img src="/assets/linkedin.png" alt="linkedin" />
            </div>
            <h1 className="text-center font-bold text-xl">LinkedIn</h1>
          </div>
        </a>

        <a href="https://github.com/AriaPramesta" target="blank">
          <div className="bg-black px-14 py-10 rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg shadow-stone-700">
            <div className="bg-white rounded-full p-5 mb-10">
              <img src="/assets/github.png" alt="github" />
            </div>
            <h1 className="text-center font-bold text-xl">GitHub</h1>
          </div>
        </a>
      </div>
    </div>
  );
}
