import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../style/CreateToDo.module.scss";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import CreateNewToDo from "./CreateNewToDo";
import ToggleTheme from "./ToggleTheme";

export default function CreateToDo({ addtodo }) {
  /* NOTE state to show or hide create todo */
  const [create, changecreate] = useState(false);

  return (
    <>
      {/* NOTE header with btn to create a new todo */}
      <header className={style.header}>
        <h1>My Tasks</h1>
        <ToggleTheme />
        <FontAwesomeIcon
          icon={create ? faXmark : faPlus}
          size="xl"
          onClick={() => changecreate((prev) => !prev)}
          color="#d85757"
        />
      </header>

      {/* NOTE create a new todo */}
      {create && (
        <CreateNewToDo
          style={style.creattodo}
          addtodo={addtodo}
          changecreate={changecreate}
          create
        />
      )}
    </>
  );
}
