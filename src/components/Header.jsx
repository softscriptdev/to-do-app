import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../style/CreateToDo.module.scss";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";

export default function CreateToDo() {
  const [create, changecreate] = useState(false);
  const [newtodo, changetodo] = useState(null);

  useEffect(() => {
    console.log(newtodo);
  }, [newtodo]);

  

  return (
    <>
      <header className={style.header}>
        <h1>My Tasks</h1>
        <FontAwesomeIcon
          icon={create ? faXmark : faPlus}
          size="xl"
          onClick={() => changecreate((prev) => !prev)}
          color="#d85757"
        />
      </header>
      {create && (
        <div className={style.creattodo}>
          <input
            type="text"
            onChange={(e) => changetodo(e.target.value.trim())}
            placeholder="My new task ..."
          />
          <FontAwesomeIcon icon={faSquarePlus} size="xl" color="#d85757" />
        </div>
      )}
    </>
  );
}
