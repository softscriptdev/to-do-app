import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../style/CreateToDo.module.scss";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";

export default function CreateToDo({ addtodo }) {
  /* NOTE state to show or hide create todo */
  const [create, changecreate] = useState(false);
  /* NOTE current To Do in the input to create a new todo */
  const [newtodo, changetodo] = useState(null);

  /* NOTE check current to do and add it to the todo list */
  const checknewtodo = () => {
    let todo = newtodo?.trim();
    if (todo) {
      addtodo(todo);
      changetodo(null);
      changecreate(false);
    }
  };

  return (
    <>
      {/* NOTE header with btn to create a new todo */}
      <header className={style.header}>
        <h1>My Tasks</h1>
        <FontAwesomeIcon
          icon={create ? faXmark : faPlus}
          size="xl"
          onClick={() => changecreate((prev) => !prev)}
          color="#d85757"
        />
      </header>

      {/* NOTE create a new todo */}
      {create && (
        <div className={style.creattodo}>
          <input
            type="text"
            onChange={(e) => changetodo(e.target.value.trim())}
            placeholder="My new task ..."
          />
          <FontAwesomeIcon
            icon={faSquarePlus}
            size="xl"
            color="#d85757"
            onClick={checknewtodo}
          />
        </div>
      )}
    </>
  );
}
