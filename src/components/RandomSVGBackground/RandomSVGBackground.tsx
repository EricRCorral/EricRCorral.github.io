import { useEffect, useRef } from "react";
import THEMES from "../../themes";

const RandomSVGBackground = () => {
  const componentInitialized = useRef(false);
  const {
    "--color-1": Color_1,
    "--color-2": Color_2,
    "--color-3": Color_3,
  } = THEMES[localStorage.getItem("theme") || "dark_2"];

  const generateSegments = (
    segments: number,
    initialX: number,
    index: number
  ) => {
    const SVG = document.getElementById("random-svg-bg");
    let x = initialX;
    let y = 0;
    let pathData = `M ${x} ${y}`;

    for (let i = 0; i < segments; i++) {
      const LENGTH = Math.floor(Math.random() * 60);
      const MOVE_TO = Math.random();

      y += LENGTH;

      if (MOVE_TO < 0.75) {
        pathData += ` L ${x} ${y}`;
        continue;
      }

      x += MOVE_TO >= 0.75 && MOVE_TO < 0.875 ? LENGTH : -LENGTH;
      pathData += ` L ${x} ${y}`;
      y += LENGTH;
      pathData += ` L ${x} ${y}`;
    }

    const PATH = document.createElementNS("http://www.w3.org/2000/svg", "path");

    PATH.setAttribute("d", pathData);
    PATH.setAttribute(
      "stroke",
      index % 3 === 0 ? Color_1 : index % 3 === 1 ? Color_2 : Color_3
    );
    PATH.setAttribute("fill", "none");
    PATH.style.strokeDasharray = (
      PATH.getTotalLength() -
      innerHeight * 5
    ).toString();
    PATH.style.strokeDashoffset = PATH.getTotalLength().toString();
    PATH.style.strokeOpacity = (0.5 + Math.random() / 4).toString();
    PATH.style.strokeWidth = (1 + Math.random() * 3).toString();

    const SYMMETRIC_PATH = PATH.cloneNode(true);

    SYMMETRIC_PATH.style.transform = `rotateY(180deg) translateX(-${innerWidth}px)`;
    SYMMETRIC_PATH.style.backfaceVisibility = "visible";

    SVG?.appendChild(PATH);
    SVG?.appendChild(SYMMETRIC_PATH);

    const ANIMATION_VALUES = {
      duration: 20000,
      easing: "linear",
      iterations: Infinity,
      direction: "alternate",
    };

    PATH.animate({ strokeDashoffset: 0 }, ANIMATION_VALUES);
    SYMMETRIC_PATH.animate({ strokeDashoffset: 0 }, ANIMATION_VALUES);
  };

  const generatePath = (paths: number, segments: number) => {
    for (let i = 1; i < paths - 1; i++) {
      const INITIAL_X = (innerWidth / 2 / paths) * i;
      generateSegments(segments, INITIAL_X, i);
    }
  };

  useEffect(() => {
    if (componentInitialized.current && !document.documentElement.style[0])
      return;
    componentInitialized.current = true;
    const RANDOM_PATHS_COUNT = Math.floor(8 + Math.random() * 8);
    generatePath(RANDOM_PATHS_COUNT, 100);
  }, []);

  return <svg id="random-svg-bg" />;
};

export default RandomSVGBackground;
