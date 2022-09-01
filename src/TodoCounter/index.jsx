import React from "react";
import style from "./TodoCounter.module.css"

function TodoCounter({total, completed}){
  return(
    <h2 className={style.TodoCounter}>
      Has completado {completed} de {total} TODOs
    </h2>
  );
}

export { TodoCounter };