import React from "react";
import style from "./WithoutTodos.module.css"

function WithoutTodos(){
  return(
    <div className={style.gral}>
        <h1 className={style.h1}>Crea TODOs!</h1>
        <p className={style.p}>Presiona el botón amarillo para escribir uno</p>
    </div>
  );
}

export { WithoutTodos };