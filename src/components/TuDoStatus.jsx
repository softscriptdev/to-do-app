import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../style/todostatus.module.scss";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { ToDoContext } from "../hooks/ToDoHandler";

export default function TuDoStatus() {
  /* NOTE get todos from context */
  const { gettodos } = useContext(ToDoContext);

  /* NOTE analyse todos for info */
  const completedCount = gettodos.filter(([_, done]) => done).length;
  const totalCount = gettodos.length;

  return (
    <section className={style.status}>
      {totalCount === 0 ? (
        <div>
          <FontAwesomeIcon icon={faFolderOpen} />
          <p>We searched everywhere – found no to-dos.</p>
        </div>
      ) : (
        <p>
          {completedCount} of {totalCount} tasks completed
        </p>
      )}
    </section>
  );
}
