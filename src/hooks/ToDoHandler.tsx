import { createContext, useEffect, useState } from "react";
import type {
  Todo,
  ToDoContextType,
  Todos,
} from "../interfaces/InterfaceTodos.js";

export const ToDoContext = createContext<ToDoContextType | null>(null);

export const ToDoHandler = ({ children }) => {
  /* NOTE set state for to dos | get to dos from local storage */
  const [gettodos, addtodos] = useState<Todos>(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  /* NOTE save to dos to local storage */
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(gettodos));
  }, [gettodos]);

  /* NOTTE add to do to state */
  const addtodo = (todo: string) => {
    /* NOTE to do: [note, done] */
    addtodos((prev: Todos) => [...prev, { todo, done: false }]);
  };

  /* NOTE change done state */
  const changedone = (index: number) => {
    const newtodolist: Todos = { todos: [...gettodos.todos] };
    newtodolist[index][1] = !newtodolist[index][1];
    addtodos(newtodolist);
  };

  /* NOTE delete to do with index */
  const deltodo = (index: number) => {
    const newtodolist: Todos = { todos: [...gettodos.todos] };
    newtodolist.todos.splice(index, 1);
    addtodos(newtodolist);
  };

  const value: ToDoContextType = {
    gettodos,
    addtodo,
    changedone,
    deltodo,
  };

  return <ToDoContext.Provider value={value}>{children}</ToDoContext.Provider>;
};
