import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

const defaultTodos=[
  {text:'Cortar cebolla', completed: true},
  {text:'Tormar el curso de intro a react', completed: true},
  {text:'Llorar con la llorona', completed: false}
];

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
