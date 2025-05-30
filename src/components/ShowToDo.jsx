import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../style/todolist.module.scss";
import {
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
        <div key={index} className={done && style.isdone}>
          <FontAwesomeIcon
            icon={done ? faSquareCheck : faSquare}
            size="xl"
            color="#d85757"
            onClick={() => changedone(index)}
          />
          <p>{todo}</p>
          <FontAwesomeIcon
            icon={faTrash}
            size="xl"
            color="#d85757"
            onClick={() => deltodo(index)}
          />
        </div>
      ))}
    </article>
  );
}
