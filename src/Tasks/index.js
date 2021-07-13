import "./style.css";

const NextYearTasks = ({ nextYearTasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="list">
    {nextYearTasks.map(nextYearTask => (
      <li
        className={`listItem ${nextYearTask.done && hideDone
          ? "listItem--hide"
          : ""}`}
        key={nextYearTask.id}
      >
        <button
          onClick={() => toggleTaskDone(nextYearTask.id)}
          className={`button ${nextYearTask.done ? "button--thick" : ""}`}></button>
        <span className={`listItemText ${nextYearTask.done ? "taskDone" : ""}`}>
          {nextYearTask.id} - {nextYearTask.content}
        </span>
        <button
          className="button button--remove"
          onClick={() => removeTask(nextYearTask.id)}></button>
      </li>
    ))}
  </ul>
);

export default NextYearTasks;