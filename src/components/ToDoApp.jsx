import { useState } from "react";
import CreateToDo from "./Header";

export default function ToDoApp() {
  const [gettodos, addtodos] = useState([]);

  return (
    <article>
      <CreateToDo />
    </article>
  );
}
