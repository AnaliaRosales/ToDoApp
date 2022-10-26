import React from "react";
import { TodoContext } from "../TodoContext";
import style from "./TodoCounter.module.css"

function TodoCounter(){
  const {
    totalTodos,
    completedTodos,
  } = React.useContext(TodoContext);
  return(
    <h2 className={style.TodoCounter}>
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
}

export { TodoCounter };