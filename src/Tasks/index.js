import "./style.css";

const NextYearTasks = (props) => (
  <ul className="list">
    {props.nextYearTasks.map(nextYearTask => (
      <li
        className={`listItem ${nextYearTask.done && props.hideDone
          ? "listItem--hide"
          : ""}`}
        key={nextYearTask.id}
      >
        <button className={`button ${nextYearTask.done ? "button--thick" : ""}`}></button>
        <span className={`listItemText ${nextYearTask.done ? "taskDone" : ""}`}>
          {nextYearTask.content}
        </span>
        <button className="button button--remove"></button>
      </li>
    ))}
  </ul>
);

export default NextYearTasks;