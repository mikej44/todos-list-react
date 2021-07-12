import "./style.css";

const Buttons = ({ nextYearTasks, hideDone, toggleHideDone, setAllDone }) => {

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
        <button className="taskList__button"
          disabled={nextYearTasks.every(({ done }) => done)}
          onClick={setAllDone}
        > Ukończ wszystkie
        </button>
      </>
    </div >
  )
};

export default Buttons;