import Switch from "./switch";
import { useState, useEffect } from "react";
import NavDrawer from "./nav-drawer";
import StyledLink from "./styled-link";

export default function Nav() {
  const [theme, setThemeState] = useState<boolean>(true);
  const route = [
    { name: "Home", anchor: "home" },
    { name: "About", anchor: "about" },
    { name: "Experience", anchor: "experience" },
    { name: "Projects", anchor: "projects" },
  ];

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode);
  }, []);

  useEffect(() => {
    const isDark = theme === true;
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  const aboutSection = document.getElementById("about");
  const homeSection = document.getElementById("greeting");
  const experienceSection = document.getElementById("experience");
  const projectSection = document.getElementById("projects");

  const handleScroll = (type: string) => {
    if (aboutSection && type === "about") {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }

    if (homeSection && type === "home") {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }

    if (experienceSection && type === "experience") {
      experienceSection.scrollIntoView({ behavior: "smooth" });
    }

    if (projectSection && type === "projects") {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full flex justify-between items-center p-4 backdrop-blur-lg bg-[#fafafa]/40 dark:bg-[#20202086]/40 font-custom">
      <span className="flex items-center gap-4">
        <img src="/icons/icon.svg" alt="Icon" width={30} height={30} />
        <h1 className="font-title text-xs tracking-[0.15em]">LEKO</h1>
      </span>
      <ul className="md:flex gap-4 items-center hidden">
        {route.map((item) => (
          <li key={item.name}>
            <button
              onClick={() => handleScroll(item.anchor)}
              className="font-bold relative group/navbtn w-fit transition duration-300 ease-in-out hover:text-blue-500"
            >
              <span className="w-0 h-[1px] absolute bottom-0 right-0 transition-all duration-500 md:group-hover/navbtn:w-full md:group-hover/navbtn:left-0 md:group-hover/navbtn:bg-blue-500"></span>
              {item.name}
            </button>
          </li>
        ))}
      </ul>
      <div className="flex gap-4 items-center">
        <Switch checked={theme} setChecked={setThemeState} />
        <StyledLink href="/Resume_Final.pdf" className="hidden md:inline-block">
          Resume
        </StyledLink>
        <NavDrawer />
      </div>
    </nav>
  );
}
