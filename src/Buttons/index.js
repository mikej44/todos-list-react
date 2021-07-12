import "./style.css";

const Buttons = ({ nextYearTasks, hideDoneTasks }) => {

  if (nextYearTasks.length === 0) {
    return null;
  }

  return (
    <div className="taskList__buttons">
      <>
        <button className={
          `taskList__button`}>
          {hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
        </button>
        <button className={
          `taskList__button${nextYearTasks.every(({ done }) => done) ? " disabled" : ""}`}
        > Ukończ wszystkie
        </button>
      </>
    </div >
  )
};

export default Buttons;