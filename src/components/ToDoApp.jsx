import { useContext } from "react";
import CreateToDo from "./Header";
import ShowToDo from "./ShowToDo";
import TuDoStatus from "./TuDoStatus";
import { ToDoContext } from "../hooks/ToDoHandler";

export default function ToDoApp() {
  /* NOTE get todos from context */
  const { gettodos } = useContext(ToDoContext);

  return (
    <article>
      <CreateToDo />
      {gettodos.length > 0 && <ShowToDo />}
      <TuDoStatus />
    </article>
  );
}
