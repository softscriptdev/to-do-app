import { useEffect, useState } from "react";
import CreateToDo from "./Header";
import ShowToDo from "./ShowToDo";

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

  return (
    <article>
      <CreateToDo addtodo={addtodo} />
      <ShowToDo todos={gettodos} />
    </article>
  );
}
