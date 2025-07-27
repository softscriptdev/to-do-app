import { useEffect, useState } from "react";
import CreateToDo from "./Header";
import ShowToDo from "./ShowToDo";
import TuDoStatus from "./TuDoStatus";

export default function ToDoApp() {
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

  /* NOTE create a new to-do list after manipulation */
  const setnewtodolist = (newtodolist) => {
    addtodos(newtodolist);
  };

  return (
    <article>
      <CreateToDo addtodo={addtodo} />
      {gettodos.length > 0 && (
        <ShowToDo todos={gettodos} setnewtodolist={setnewtodolist} />
      )}

      <TuDoStatus todos={gettodos} />
    </article>
  );
}
