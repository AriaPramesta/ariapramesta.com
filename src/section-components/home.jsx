export default function Home() {
  return (
    <div className="m-5 md:m-10 xl:m-14">
      <div className="flex flex-col items-center mb-10 md:mb-40 xl:mb-52">
        <h1 className=" md:text-3xl xl:text-5xl">Hi! Im Aria Adi Pramesta</h1>
        <p className="text-xs md:text-base">High School Graduate</p>
      </div>
      <div className="flex flex-row-reverse justify-between gap-5 xl:gap-20">
        <div className="bg-[url('/public/assets/profile.jpeg')] bg-cover w-[150px] min-h-[150px] md:min-w-[350px] md:min-h-[200px] xl:w-[600px] xl:h-[500px]"></div>
        <div className="max-w-[150px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[700px]">
          <div className="flex flex-col gap-5 md:gap-20 xl:gap-32">
            <h1 className="text-[10px] md:text-right md:text-xl mt-5">
              The Dreamseeker
            </h1>
            <div className="flex flex-col gap-5 md:gap-10 text-[5px] md:text-xs xl:text-base">
              <p>
                I am a high school graduate, since graduating in 2023 I have
                learned a lot about web development, starting from self-taught
                through videos on the internet to attending bootcamps.
              </p>
              <p>
                There are several things I learned while studying
                autodidactically, but all of them are just basic things like
                HTML, CSS, and JavaScript. I developed the skills I learned
                autodidactically by attending Full Stack Bootcamp, one of the
                things I learned was ReactJS. I also studied Backend databases
                but now I am focusing on becoming a Frontend Developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
