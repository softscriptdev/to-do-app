import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function ToggleTheme() {
  /* NOTE set body to theme */
  const setbodytheme = (theme) => {
    document.body.classList?.add(theme == "light" ? "light" : "dark");
    document.body.classList?.remove(theme == "light" ? "dark" : "light");
  };

  /* NOTE get theme from local storage and set state */
  const [gettheme, settheme] = useState(() => {
    let theme = localStorage.getItem("ToDoApp-Theme") || "dark";
    setbodytheme(theme);
    return theme;
  });

  /* NOTE get theme from local storage */
  useEffect(() => {
    localStorage.setItem("ToDoApp-Theme", gettheme);
    setbodytheme(gettheme);
  }, [gettheme]);

  return (
    <FontAwesomeIcon
      size="xl"
      icon={gettheme === "dark" ? faSun : faMoon}
      color={gettheme === "dark" ? "#e0e7e9" : "#3f4c4d"}
      onClick={() =>
        settheme((prevtheme) => (prevtheme === "dark" ? "light" : "dark"))
      }
    />
  );
}
