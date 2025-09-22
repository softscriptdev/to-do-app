import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeHandler = ({ children }) => {
  /* NOTE get theme from local storage and set state */
  const [gettheme, settheme] = useState(
    () => localStorage.getItem("ToDoApp-Theme") || "dark"
  );

  /* NOTE get theme from local storage */
  useEffect(() => {
    localStorage.setItem("ToDoApp-Theme", gettheme);
    setbodytheme(gettheme);
  }, [gettheme]);

  /* NOTE set body to theme */
  const setbodytheme = (theme) => {
    document.body.classList?.add(theme == "light" ? "light" : "dark");
    document.body.classList?.remove(theme == "light" ? "dark" : "light");
  };

  /* NOTE provide theme context */
  const theme = { gettheme, settheme };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
