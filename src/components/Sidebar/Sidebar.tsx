import {
  AboutMeIcon,
  ContactIcon,
  ExperienceIcon,
  MenuIcon,
  SkillsIcon,
} from "../../assets/svg";
import { SectionId } from "../../App";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Cube from "./Cube";
import LanguageSelector from "./LanguageSelector";
import ThemeSelector from "./ThemeSelector";

interface SidebarProps {
  openSection: string;
  selectSection: (e?: WheelEvent, section?: SectionId) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ openSection, selectSection }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [t] = useTranslation();

  const [aboutMe, workExperience, skills, contact] = [
    t("sidebar.about-me"),
    t("sidebar.experience"),
    t("sidebar.skills"),
    t("sidebar.contact"),
  ];

  const SECTIONS: {
    rightFaceText: string;
    icon: React.ReactElement;
    sectionId: SectionId;
  }[] = [
    {
      rightFaceText: aboutMe,
      icon: <AboutMeIcon />,
      sectionId: "about-me",
    },
    {
      rightFaceText: workExperience,
      icon: <ExperienceIcon />,
      sectionId: "work-experience",
    },
    {
      rightFaceText: skills,
      icon: <SkillsIcon />,
      sectionId: "skills",
    },
    {
      rightFaceText: contact,
      icon: <ContactIcon />,
      sectionId: "contact",
    },
  ];

  const handleShowSidebar = () => setShowSidebar((prev) => !prev);

  return (
    <div className={`sidebar${showSidebar ? " show" : ""}`}>
      <MenuIcon className="toggle" onClick={handleShowSidebar} />
      <ThemeSelector />
      <LanguageSelector handleShowSidebar={handleShowSidebar} />
      {SECTIONS.map(({ icon, rightFaceText, sectionId }) => (
        <Cube
          rightFaceText={rightFaceText}
          highlight={sectionId === openSection}
          onClick={() => {
            handleShowSidebar();
            selectSection(undefined, sectionId);
          }}
          key={rightFaceText}
        >
          {icon}
        </Cube>
      ))}
    </div>
  );
};

export default Sidebar;
