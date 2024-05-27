export default function About() {
  return (
    <section className="w-full h-screen flex flex-col gap-4 md:gap-8 items-center justify-center">
      <div className="flex gap-16 items-center">
        <h1 className="text-center text-2xl md:text-3xl font-title font-bold">
          About me
        </h1>
        <img
          src="/avatar.jpg"
          alt="LDK"
          className="w-24 h-24 rounded-full border-2 border-white"
        />
      </div>
      <div className="flex flex-col md:flex-row w-full items-center justify-center">
        <div className="w-full text-sm md:text-base md:max-w-[600px] bg-[#F6F6F6] dark:bg-[#2B2B2B] p-4 rounded-lg">
          <p>
            Hello! My name is Khoi, and I am{" "}
            <span className="text-blue-500">a passionate web developer</span>{" "}
            based in Ho Chi Minh City. I am currently pursuing a degree in
            Software Engineering at Ton Duc Thang University. With a solid
            foundation in software development and a keen interest in web
            technologies, I strive to{" "}
            <span className="text-blue-500">
              create seamless and efficient web applications.
            </span>
          </p>
          <br />
          <p>
            I am proficient in a variety of programming languages and
            frameworks, including HTML, CSS, JavaScript, and React. I am also
            familiar with back-end technologies such as Node.js and databases
            like MongoDB. I
            <span className="text-blue-500">
              enjoy solving complex problems
            </span>{" "}
            and am always{" "}
            <span className="text-blue-500">
              eager to learn new technologies and techniques
            </span>{" "}
            to enhance my development process.
          </p>
        </div>
      </div>
    </section>
  );
}
