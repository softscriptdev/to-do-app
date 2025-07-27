import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../style/todostatus.module.scss";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";

export default function TuDoStatus({ todos }) {
  /* NOTE analyse todos for info */
  const completedCount = todos.filter(([_, done]) => done).length;
  const totalCount = todos.length;

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
