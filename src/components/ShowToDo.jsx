import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../style/todolist.module.scss";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ToDoContext } from "../hooks/ToDoHandler";

export default function ShowToDo() {
  /* NOTE get todos from context */
  const { deltodo, changedone, gettodos } = useContext(ToDoContext);

  return (
    <article className={style.todolist}>
      {gettodos.map(([todo, done], index) => (
        <div key={index} className={done ? style.isdone : null}>
          <div
            onClick={() => changedone(index)}
            className={done ? style.done : null}
          >
            {done ? <FontAwesomeIcon icon={faCheck} /> : null}
          </div>

          <p className={done ? style.textdone : null}>{todo}</p>

          {done ? (
            <FontAwesomeIcon className={style.check} icon={faCheck} />
          ) : (
            <div></div>
          )}

          <FontAwesomeIcon
            icon={faTrash}
            size="xl"
            onClick={() => deltodo(index)}
            className={style.trash}
          />
        </div>
      ))}
    </article>
  );
}
