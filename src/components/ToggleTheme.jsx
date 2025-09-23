import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ThemeContext } from "../hooks/ThemeHandler.jsx";


export default function ToggleTheme() {
  /* NOTE get theme and set theme from context */
  const { gettheme, settheme } = useContext(ThemeContext);

  return (
    <div>
      <FontAwesomeIcon
        size="xl"
        icon={gettheme === "dark" ? faSun : faMoon}
        onClick={() =>
          settheme((prevtheme) => (prevtheme === "dark" ? "light" : "dark"))
        }
      />
    </div>
  );
}
