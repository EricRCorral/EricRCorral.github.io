import { Me } from "../../assets/svg";
import { Me as MeImg } from "../../assets/img";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const [t, { language }] = useTranslation();

  const [text_1, text_2, text_3, text_4, text_5, jobTitle] = [
    t("about-me.text_1"),
    t("about-me.text_2"),
    t("about-me.text_3"),
    t("about-me.text_4"),
    t("about-me.text_5"),
    t("job_title"),
  ];

  return (
    <div id="about-me">
      <div className="info">
        <h1>{text_1}</h1>
        <p>{text_2}</p>
        <p>{text_3}</p>
        <p>{text_4}</p>
        <p>{text_5}</p>
      </div>
      <div>
        <div className="img-me">
          <img src={MeImg} />
          <Me />
        </div>
        <div className={`job-title ${language === "es" ? "sm" : ""}`}>
          {jobTitle}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
