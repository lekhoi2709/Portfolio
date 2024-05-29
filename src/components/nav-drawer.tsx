import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import StyledLink from "./styled-link";

export default function NavDrawer() {
  const [open, setOpen] = useState(false);

  const aboutSection = document.getElementById("about");
  const homeSection = document.getElementById("greeting");
  const experienceSection = document.getElementById("experience");
  const projectSection = document.getElementById("projects");

  const handleScroll = (type: string) => {
    setOpen(false);
    if (aboutSection && type === "about") {
      setTimeout(
        () => aboutSection.scrollIntoView({ behavior: "smooth" }),
        500
      );
    }

    if (homeSection && type === "home") {
      setTimeout(() => homeSection.scrollIntoView({ behavior: "smooth" }), 500);
    }

    if (experienceSection && type === "experience") {
      setTimeout(
        () => experienceSection.scrollIntoView({ behavior: "smooth" }),
        500
      );
    }

    if (projectSection && type === "projects") {
      setTimeout(
        () => projectSection.scrollIntoView({ behavior: "smooth" }),
        500
      );
    }
  };

  return (
    <Drawer open={open} onOpenChange={setOpen} direction="right">
      <DrawerTrigger asChild className="md:hidden">
        <Button className="px-3">
          <Menu size={20} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-background dark:bg-dark-background text-current">
        <div className="flex flex-col gap-6 w-full h-full p-4 mt-12 items-center justify-start">
          <Button onClick={() => handleScroll("home")}>Home</Button>
          <Button onClick={() => handleScroll("about")}>About</Button>
          <Button onClick={() => handleScroll("experience")}>Experience</Button>
          <Button onClick={() => handleScroll("projects")}>Projects</Button>
          <StyledLink href="/Resume_Final.pdf">Resume</StyledLink>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
