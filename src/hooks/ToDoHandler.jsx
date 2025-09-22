import { createContext, useEffect, useState } from "react";

export const ToDoContext = createContext();

export const ToDoHandler = ({ children }) => {
  /* NOTE set state for to dos | get to dos from local storage */
  const [gettodos, addtodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  /* NOTE save to dos to local storage */
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(gettodos));
  }, [gettodos]);

  /* NOTTE add to do to state */
  const addtodo = (todo) => {
    /* NOTE to do: [note, done] */
    addtodos((prev) => [...prev, [todo, false]]);
  };

  /* NOTE change done state */
  const changedone = (index) => {
    const newtodolist = [...gettodos];
    newtodolist[index][1] = !newtodolist[index][1];
    addtodos(newtodolist);
  };

  /* NOTE delete to do with index */
  const deltodo = (index) => {
    const newtodolist = [...gettodos];
    newtodolist.splice(index, 1);
    addtodos(newtodolist);
  };

  const value = {
    gettodos,
    addtodo,
    changedone,
    deltodo,
  };

  return <ToDoContext.Provider value={value}>{children}</ToDoContext.Provider>;
};
