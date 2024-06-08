export default function Home() {
  return (
    <div className=" hidden md:block w-[640px] mx-auto pt-64 mb-32" id="home">
      <div className=" mb-16">
        <h1 className=" text-5xl text-white font-bold">Aria Adi Pramesta</h1>
        <p className="font-semibold text-xl mb-3">
          High school graduate in 2023
        </p>
      </div>

      <div className="flex gap-7">
        <img
          src="/assets/profile.jpeg"
          alt="profile"
          className="rounded-xl h-80"
        />

        <div>
          <p>
            Hi!, Im only human and a high school graduate, I studied web
            development self-taught and took part in a bootcamp to increase my
            knowledge.
          </p>
        </div>
      </div>
    </div>
  );
}
