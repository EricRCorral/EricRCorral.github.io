import { useEffect } from "react";
import Panel from "./Panel";
import {
  CSS,
  Git,
  HTML,
  Javascript,
  Jest,
  MaterialUI,
  Numpy,
  Pandas,
  Python,
  React,
  ReactTestingLibrary,
  Sass,
  ScikitLearn,
  Typescript,
} from "../../assets/img";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Skills = () => {
  const [t] = useTranslation();

  const [frontEnd, testing, machineLearning, versionControl] = [
    t("skills.frontEnd"),
    t("skills.testing"),
    t("skills.machineLearning"),
    t("skills.versionControl"),
  ];

  const PANELS: {
    title: string;
    elements: {
      skill: string;
      children: JSX.Element;
    }[];
  }[] = [
    {
      title: frontEnd,
      elements: [
        {
          skill: "HTML",
          children: <img src={HTML} alt="HTML" />,
        },
        {
          skill: "CSS",
          children: <img src={CSS} alt="CSS" />,
        },
        {
          skill: "Javascript",
          children: <img src={Javascript} alt="JS" />,
        },
        {
          skill: "Typescript",
          children: <img src={Typescript} alt="TS" />,
        },
        {
          skill: "React",
          children: <img src={React} alt="React" />,
        },
        {
          skill: "SaSS",
          children: <img src={Sass} alt="Sass" />,
        },
        {
          skill: "Material UI",
          children: <img src={MaterialUI} alt="MaterialUI" />,
        },
      ],
    },
    {
      title: testing,
      elements: [
        {
          skill: "Jest",
          children: <img src={Jest} alt="Jest" />,
        },
        {
          skill: "RTL",
          children: <img src={ReactTestingLibrary} alt="ReactTestingLibrary" />,
        },
      ],
    },
    {
      title: machineLearning,
      elements: [
        {
          skill: "Python",
          children: <img src={Python} alt="Python" />,
        },
        {
          skill: "Scikit learn",
          children: <img src={ScikitLearn} alt="ScikitLearn" />,
        },
        {
          skill: "Pandas",
          children: <img src={Pandas} alt="Pandas" />,
        },
        {
          skill: "Numpy",
          children: <img src={Numpy} alt="Numpy" />,
        },
      ],
    },
    {
      title: versionControl,
      elements: [
        {
          skill: "Git",
          children: <img src={Git} alt="Git" />,
        },
      ],
    },
  ];

  const skillsAnimation = () => {
    const SKILLS = document.getElementById("skills");
    if (SKILLS && SKILLS.getBoundingClientRect().top < innerHeight / 1.2) {
      let iContainer = 0;

      while (iContainer < SKILLS.children.length) {
        let iPanel = 1;
        while (iPanel < SKILLS.children[iContainer].children.length) {
          const PANEL = SKILLS.children[iContainer].children[iPanel];
          PANEL.classList.add("panel");
          PANEL.setAttribute(
            "style",
            `animation: panelFadeIn 1s ease ${iPanel / 6}s forwards;`
          );
          iPanel++;
        }
        iContainer++;
      }
      removeEventListener("scroll", skillsAnimation);
    }
  };

  useEffect(() => {
    addEventListener("scroll", skillsAnimation);
  }, [i18next.language]);

  useEffect(() => {
    skillsAnimation();
  }, [i18next.language]);

  return (
    <div id="skills">
      {PANELS.map(({ title, elements }) => (
        <div key={title} className="panel-container">
          <h1>{title}</h1>
          {elements.map((props) => (
            <Panel {...props} key={props.skill} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;
