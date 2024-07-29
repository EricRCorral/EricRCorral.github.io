import {
  AboutMe,
  Contact,
  Experience,
  Sidebar,
  Skills,
  RandomSVGBackground,
} from "./components";
import { useEffect, useState } from "react";

export type SectionId = "about-me" | "work-experience" | "skills" | "contact";

const App = () => {
  const [openSection, setOpenSection] = useState<SectionId>("about-me");

  const handleSection = (e?: WheelEvent, section?: SectionId) => {
    const ID = section
      ? section
      : e!.deltaY > 0
      ? e!.target?.nextSibling?.id
      : e!.target?.previousSibling?.id;

    if (!ID) return;

    setOpenSection(ID);
    document.getElementById(ID)?.scrollIntoView({ behavior: "smooth" });
  };

  const resetToTop = () => scroll(0, 0);

  useEffect(() => {
    addEventListener("wheel", handleSection);
    addEventListener("resize", resetToTop);
    return () => {
      removeEventListener("wheel", handleSection);
      removeEventListener("resize", resetToTop);
    };
  }, []);

  return (
    <>
      <RandomSVGBackground />
      <Sidebar openSection={openSection} selectSection={handleSection} />
      <AboutMe />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
};

export default App;
