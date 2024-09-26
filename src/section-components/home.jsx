export default function Home() {
  return (
    <div className="md:mt-5">
      <div className="flex flex-col items-center mb-10 md:mb-40 xl:mb-50">
        <h1 id="about" className="text-xs md:text-3xl xl:text-5xl">
          Hi! Im Aria Adi Pramesta
        </h1>
        <p className="md:text-base">High School Graduate</p>
      </div>
      <div className="flex flex-row-reverse justify-between gap-5 xl:gap-20">
        <div className="bg-[url('/assets/profile.jpeg')] bg-cover w-[150px] min-h-[150px] md:min-w-[300px] md:min-h-[200px] xl:w-[600px] xl:h-[500px]"></div>
        <div className="max-w-[175px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[700px]">
          <div className="flex flex-col gap-4 md:gap-20 xl:gap-32">
            <p className="text-right mt-5 opacity-40 mr-10">The Dreamseeker</p>
            <div className="flex flex-col gap-3 md:gap-10">
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
                things I learned was ReactJS. I also studied Backend databases,
                but now I am focusing on becoming a Frontend Developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
