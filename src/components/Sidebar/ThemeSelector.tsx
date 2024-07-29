import { useEffect } from "react";
import { ThemeIcon } from "../../assets/svg";
import THEMES from "../../themes";

const ThemeSelector = () => {
  const BOX_THEMES = [
    { theme: "dark_1", bg: "--color-1" },
    { theme: "dark_2", bg: "--color-1" },
    { theme: "light_1", bg: "--color-4" },
    { theme: "light_2", bg: "--color-3" },
  ];

  const setTheme = (theme: string) => {
    localStorage.setItem("theme", theme);
    location.reload();
  };

  const handleTheme = () => {
    if (!localStorage.getItem("theme")) localStorage.setItem("theme", "dark_2");

    const ROOT = document.documentElement;
    const SELECTED_THEME = THEMES[localStorage.getItem("theme")];

    for (const colorVar in SELECTED_THEME)
      ROOT.style.setProperty(colorVar, SELECTED_THEME[colorVar]);
  };

  useEffect(() => {
    handleTheme();
  }, []);

  return (
    <div className="theme-selector">
      <ThemeIcon />
      <div>
        {BOX_THEMES.map(({ theme, bg }) => (
          <div
            key={theme}
            onClick={() => setTheme(theme)}
            style={{ backgroundColor: THEMES[theme][bg] }}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
