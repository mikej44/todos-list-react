import "./style.css";

const Buttons = ({nextYearTasks, hideDoneTasks}) => {

  if (nextYearTasks.length === 0) {
    return null;
  }

  return (
    <div className="taskList__buttons">
      <button className={
        `taskList__button`}>
          {hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
      </button>
      <button className={
        `taskList__button${nextYearTasks.every(({done}) => done) ? " taskList__button--inactive" : ""}`}
         disabled={nextYearTasks.every(({done}) => done)} > Ukończ wszystkie
      </button>
    </div >
  )
};

export default Buttons;