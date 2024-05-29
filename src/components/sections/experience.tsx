export default function Experience() {
  const skills = [
    {
      name: "JavaScript",
      icon: "/icons/javascript.png",
    },
    {
      name: "TypeScript",
      icon: "/icons/typescript.png",
    },
    {
      name: "ReactJS",
      icon: "/icons/react.png",
    },
    {
      name: "TailwindCSS",
      icon: "/icons/tailwindcss.svg",
    },
    {
      name: "NodeJS",
      icon: "/icons/nodejs.svg",
    },
  ];

  return (
    <section
      id="experience"
      className="w-full h-screen flex items-center justify-center"
    >
      <div className="w-full md:max-w-[800px] flex flex-col md:flex-row md:flex-wrap gap-12 md:gap-24">
        <div className="flex flex-col gap-8">
          <h1 className="font-title text-sm">Education</h1>
          <div className="dark:text-slate-300 text-slate-600">
            <p>2020 - Present</p>
            <p className="text-blue-500">
              Bachelor Degree in Software Engineering
            </p>
            <p>Ton Duc Thang University</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-8">
          <h1 className="font-title text-sm">Skills</h1>
          <div className="flex flex-col gap-2 dark:text-slate-300 text-slate-600">
            {skills.map((skill) => (
              <span key={skill.name} className="flex gap-4 items-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  width={22}
                  height={22}
                  className="transition duration-200 ease-in-out hover:-translate-y-1"
                />
                <p>{skill.name}</p>
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-8">
          <h1 className="font-title text-sm">Experience</h1>
          <div className="dark:text-slate-300 text-slate-600">
            <p>June - December 2023</p>
            <p className="text-cyan-500">Balan Coffee & Roastery</p>
            <p>Web Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
