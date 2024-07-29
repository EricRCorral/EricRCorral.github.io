import { useEffect } from "react";
import { TemperiesLogo, TemperiesText, Puzzle } from "../../assets/img";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const [t] = useTranslation();

  const [
    role,
    project,
    task,
    stack,
    temperiesProject,
    temperiesTask_1,
    temperiesTask_2,
    temperiesTask_3,
    temperiesTask_4,
    temperiesTask_5,
    temperiesTask_6,
    temperiesTask_7,
    temperiesTask_8,
    temperiesTask_9,
    temperiesStack,
    puzzleProject,
    puzzleTask_1,
    puzzleTask_2,
    puzzleTask_3,
    puzzleTask_4,
    puzzleTask_5,
    puzzleStack,
    jobTitle,
  ] = [
    t("experience.role"),
    t("experience.project"),
    t("experience.task"),
    t("experience.stack"),
    t("experience.temperies.project"),
    t("experience.temperies.task_1"),
    t("experience.temperies.task_2"),
    t("experience.temperies.task_3"),
    t("experience.temperies.task_4"),
    t("experience.temperies.task_5"),
    t("experience.temperies.task_6"),
    t("experience.temperies.task_7"),
    t("experience.temperies.task_8"),
    t("experience.temperies.task_9"),
    t("experience.temperies.stack"),
    t("experience.puzzle.project"),
    t("experience.puzzle.task_1"),
    t("experience.puzzle.task_2"),
    t("experience.puzzle.task_3"),
    t("experience.puzzle.task_4"),
    t("experience.puzzle.task_5"),
    t("experience.puzzle.stack"),
    t("job_title"),
  ];

  const experienceAnimation = () => {
    const EXPERIENCE = document.getElementById("work-experience");
    if (
      !!EXPERIENCE &&
      EXPERIENCE.getBoundingClientRect().top < innerHeight / 1.2
    ) {
      const [firstJob, timeline, secondJob] = EXPERIENCE!.children;
      const [first_div, line, third_div] = timeline.children;

      firstJob.classList.add("first-job");
      secondJob.classList.add("second-job");
      first_div.classList.add("circle");
      third_div.classList.add("circle");
      line.classList.add("line");

      removeEventListener("scroll", experienceAnimation);
    }
  };

  useEffect(() => {
    addEventListener("scroll", experienceAnimation);
  }, []);

  return (
    <div id="work-experience">
      <div>
        <div>
          <img
            src={TemperiesLogo}
            className="fst-job-logo"
            alt="Temperies logo"
          />
          <img
            src={TemperiesText}
            className="fst-job-title"
            alt="Temperies text"
          />
          <span>2022-2024</span>
        </div>
        <p>
          {role}: {jobTitle}
        </p>
        <p>
          {project}: {temperiesProject}
        </p>
        <p>{task}:</p>
        <ul>
          <li>{temperiesTask_1}</li>
          <li>{temperiesTask_2}</li>
          <li>{temperiesTask_3}</li>
          <li>{temperiesTask_4}</li>
          <li>{temperiesTask_5}</li>
          <li>{temperiesTask_6}</li>
          <li>{temperiesTask_7}</li>
          <li>{temperiesTask_8}</li>
          <li>{temperiesTask_9}</li>
        </ul>
        <p>
          {stack}: {temperiesStack}
        </p>
      </div>
      <div className="timeline">
        <div>
          <div />
          <span>2022-2024</span>
        </div>
        <div />
        <div>
          <span>2021-2022</span>
          <div />
        </div>
      </div>
      <div>
        <div>
          <img src={Puzzle} alt="Puzzle logo" />
          <span>2021-2022</span>
        </div>
        <p>
          {role}: {jobTitle}
        </p>
        <p>
          {project}: {puzzleProject}
        </p>
        <p>{task}:</p>
        <ul>
          <li>{puzzleTask_1}</li>
          <li>{puzzleTask_2}</li>
          <li>{puzzleTask_3}</li>
          <li>{puzzleTask_4}</li>
          <li>{puzzleTask_5}</li>
        </ul>
        <p>
          {stack}: {puzzleStack}
        </p>
      </div>
    </div>
  );
};

export default Experience;
