import React from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const nextYearTasks = [
  { id: 1, content: "przejść na reacta", done: true },
  { id: 2, content: "zjeść obiad", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>
   <Header title="Lista celów na przyszły rok" />
      <Section
        title="Dodaj cel"
        body={<Form />}
      />

      <Section
        title="Lista celów"
        body={<Tasks nextYearTasks={nextYearTasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={<Buttons nextYearTasks={nextYearTasks} hideDoneTasks={hideDoneTasks} />}
      />
    </Container>
  );
}

export default App;
