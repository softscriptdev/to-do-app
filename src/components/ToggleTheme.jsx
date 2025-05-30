import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

import style from "../style/ToggleTheme.module.scss";

export default function ToggleTheme() {
  const setbodytheme = (theme) => {
    document.body.classList?.add(theme == "light" ? "light" : "dark");
    document.body.classList?.remove(theme == "light" ? "dark" : "light");
  };

  const [gettheme, settheme] = useState(() => {
    let theme = localStorage.getItem("ToDoApp-Theme") || "dark";
    setbodytheme(theme);
    return theme;
  });

  useEffect(() => {
    localStorage.setItem("ToDoApp-Theme", gettheme);
    setbodytheme(gettheme);
  }, [gettheme]);

  return (
    <FontAwesomeIcon
      className={style.togglestyle}
      size="xl"
      icon={gettheme === "dark" ? faSun : faMoon}
      onClick={() =>
        settheme((prevtheme) => (prevtheme === "dark" ? "light" : "dark"))
      }
      color={gettheme === "dark" ? "#e0e7e9" : "#3f4c4d"}
    />
  );
}
