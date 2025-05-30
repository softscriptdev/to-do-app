import { useEffect, useState } from "react";
import CreateToDo from "./Header";
import ShowToDo from "./ShowToDo";

export default function ToDoApp() {
  const [gettodos, addtodos] = useState([]);

  useEffect(() => {
    console.log(gettodos);
  }, [gettodos]);

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
