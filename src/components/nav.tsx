import Switch from "./switch";
import { useState, useEffect } from "react";
import NavDrawer from "./nav-drawer";

export default function Nav() {
  const [theme, setThemeState] = useState<boolean>(true);
  const route = [
    { name: "Home", href: "/" },
    { name: "Works", href: "/works" },
  ];

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode);
  }, []);

  useEffect(() => {
    const isDark = theme === true;
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <nav className="fixed w-full flex justify-between items-center p-4 backdrop-blur-lg bg-[#fafafa]/40 dark:bg-[#20202086]/40 font-custom">
      <span className="flex items-center gap-2">
        <img src="/icons/icon.svg" alt="Icon" width={30} height={30} />
        <h1>LeKo</h1>
      </span>
      <ul className="md:flex gap-4 items-center hidden">
        {route.map((item) => (
          <li key={item.name}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        <Switch checked={theme} setChecked={setThemeState} />
        <NavDrawer />
      </div>
    </nav>
  );
}
