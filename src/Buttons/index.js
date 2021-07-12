import "./style.css";

const Buttons = ({ nextYearTasks, hideDone, toggleHideDone }) => {

  if (nextYearTasks.length === 0) {
    return null;
  }

  return (
    <div className="taskList__buttons">
      <>
        <button onClick={toggleHideDone} className={
          `taskList__button`}>
          {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
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