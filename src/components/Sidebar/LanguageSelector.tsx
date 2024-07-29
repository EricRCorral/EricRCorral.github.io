import i18next from "i18next";
import { useEffect } from "react";

interface LanguageSelectorProps {
  handleShowSidebar: () => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  handleShowSidebar,
}) => {
  const { language, changeLanguage } = i18next;

  const handleLanguageStyles = (lang: string) => {
    const EN = document.querySelector(".en");
    const ES = document.querySelector(".es");

    if (lang === "en") {
      EN!.style.top = "0px";
      ES!.style.top = "5vh";
    } else {
      EN!.style.top = "-5vh";
      ES!.style.top = "0px";
    }
  };

  const handleLanguage = () => {
    const NEW_LANGUAGE = language === "en" ? "es" : "en";
    changeLanguage(NEW_LANGUAGE);
    localStorage.setItem("lang", NEW_LANGUAGE);

    handleLanguageStyles(NEW_LANGUAGE);
    handleShowSidebar();
  };

  useEffect(() => {
    handleLanguageStyles(language);
  }, []);

  return (
    <div className="language-selector" onClick={handleLanguage}>
      <div className={language === "en" ? "left" : "right"} />
      <h1 className="en">en</h1>
      <h1 className="es">es</h1>
    </div>
  );
};

export default LanguageSelector;
