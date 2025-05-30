import style from "../style/todolist.module.scss";

export default function ShowToDo({ todos }) {
  return (
    <article className={style.todolist}>
      {todos.map(([todo, done], index) => (
        <div key={index}>{todo + " " + done}</div>
      ))}
    </article>
  );
}
