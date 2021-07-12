import React, { useState } from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [nextYearTasks, setNextYearTasks] = useState(
    [
      { id: 1, content: "przejść na reacta", done: false },
      { id: 2, content: "zjeść obiad", done: true },
    ]
  );

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setNextYearTasks(nextYearTask => nextYearTask.filter(nextYearTask => nextYearTask.id !== id));
  };

  const toggleTaskDone = (id) => {
    setNextYearTasks(nextYearTasks => nextYearTasks.map(nextYearTask => {
      if (nextYearTask.id === id) {
        return { ...nextYearTask, done: !nextYearTask.done };
      }

      return nextYearTask;
    }))
  };

  const setAllDone = () => {
    setNextYearTasks(nextYearTasks =>
      nextYearTasks.map(nextYearTask => ({
        ...nextYearTask, done: true
      })));
  };

  return (
    <Container>
      <Header title="Lista celów na przyszły rok" />
      <Section
        title="Dodaj cel"
        body={<Form />}
      />

      <Section
        title="Lista celów"
        body={<Tasks
          nextYearTasks={nextYearTasks}
          hideDone={hideDone}
          removeTask={removeTask}
          toggleTaskDone={toggleTaskDone}
        />}
        extraHeaderContent={<Buttons
          nextYearTasks={nextYearTasks}
          hideDone={hideDone}
          toggleHideDone={toggleHideDone}
          setAllDone={setAllDone}
        />}
      />
    </Container>
  );
}

export default App;
