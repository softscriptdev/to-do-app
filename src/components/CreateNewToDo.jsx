import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export default function CreateNewToDo({
  style,
  create,
  addtodo,
  changecreate,
}) {
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

  /* NOTE inital focus on the input to create a new todo */
  const inputref = useRef(null);

  /* NOTE  if create is true focus on the input to create a new todo */
  useEffect(() => {
    if (create) {
      inputref.current.focus();
    }
  }, [create]);

  return (
    <div className={style}>
      <input
        type="text"
        onChange={(e) => changetodo(e.target.value.trim())}
        placeholder="My new task ..."
        ref={inputref}
      />
      <FontAwesomeIcon
        icon={faSquarePlus}
        size="xl"
        color="#d85757"
        onClick={checknewtodo}
      />
    </div>
  );
}
