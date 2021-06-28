import "./style.css";

const NextYearTasks = (props) => (
  <ul className="list">
    {props.nextYearTasks.map(nextYearTask => (
      <li className={`listItem ${nextYearTask.done && props.hideDoneTasks ? "listItem--hide" : ""}`} key={nextYearTask.id}>
        <button className={`button ${nextYearTask.done ? "button--thick" : ""}`}></button>
        <span className={`newItemText ${nextYearTask.done ? "taskDone" : ""}`}>{nextYearTask.content} </span>
        <button className="button button--remove"></button>
      </li>
    ))}
  </ul>
);

export default NextYearTasks;