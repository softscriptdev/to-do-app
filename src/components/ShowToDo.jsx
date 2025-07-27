import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../style/todolist.module.scss";
import {
  faCheck,
  faSquare,
  faSquareCheck,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export default function ShowToDo({ todos, setnewtodolist }) {
  /* NOTE change done state */
  const changedone = (index) => {
    const newtodolist = [...todos];
    newtodolist[index][1] = !newtodolist[index][1];
    setnewtodolist(newtodolist);
  };

  /* NOTE delete to do with index */
  const deltodo = (index) => {
    const newtodolist = [...todos];
    newtodolist.splice(index, 1);
    setnewtodolist(newtodolist);
  };

  return (
    <article className={style.todolist}>
      {todos.map(([todo, done], index) => (
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
