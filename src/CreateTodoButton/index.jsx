import React from "react";
import style from "./CreateTodoButton.module.css";

function CreateTodoButton(){
    const createTodo = (msg) => { alert(msg)}
    return(
        <button
          className={style.CreateTodoButton}
          onClick={() => createTodo('aqui se abre la pantallita para crear todos')}
        >
            +
        </button>
    );
}

export { CreateTodoButton };