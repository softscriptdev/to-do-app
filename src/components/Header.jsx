import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../style/CreateToDo.module.scss";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import CreateNewToDo from "./CreateNewToDo";
import ToggleTheme from "./ToggleTheme";
import {  ThemeHandler } from "../hooks/ThemeHandler";

export default function CreateToDo() {
  /* NOTE state to show or hide create todo */
  const [create, changecreate] = useState(false);

  return (
    <ThemeHandler>
      {/* NOTE header with btn to create a new todo */}
      <header className={style.header}>
        <section>
          <h1>My Tasks</h1>
          <ToggleTheme style={style} />
          <div className={style.add}>
            <FontAwesomeIcon
              icon={create ? faXmark : faPlus}
              size="xl"
              onClick={() => changecreate((prev) => !prev)}
            />
          </div>
        </section>
        {/* NOTE create a new todo */}
        {create && (
          <CreateNewToDo
            style={style.creattodo}
            changecreate={changecreate}
            create
          />
        )}
      </header>
    </ThemeHandler>
  );
}
