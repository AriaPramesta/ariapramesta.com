export default function Home() {
  return (
    <>
      <div
        className="pt-24 mx-5 mb-20 md:w-[640px] md:mx-auto md:pt-64 md:mb-32"
        id="home"
      >
        <div className="mb-10">
          <h1 className="font-bold text-2xl md:text-5xl">Aria Adi Pramesta</h1>
          <p className="text-xs font-semibold md:text-xl md:mb-3">
            High school graduate in 2023
          </p>
        </div>

        <div className="flex gap-4 md:gap-7">
          <img
            src="/assets/profile.jpeg"
            alt="profile"
            className="rounded-xl w-32 md:w-64"
          />

          <div>
            <p className="text-xs md:text-base">
              Hi!, Im only human and a high school graduate, I studied web
              development self-taught and took part in a bootcamp to increase my
              knowledge.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
