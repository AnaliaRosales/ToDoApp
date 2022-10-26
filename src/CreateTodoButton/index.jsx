import React from "react";
import style from "./CreateTodoButton.module.css";

function CreateTodoButton(props){
    const createTodo = () => {
      //``de esta forma lo hacia yo``
      //!!props.openModal ? props.setOpenModal(false) :
      //props.setOpenModal(true);
      //``pero tambien se lo puede hacer asi, usando el estado previo y sin necesidad de importar el state openModal``
      props.setOpenModal(prevState => !prevState);
    }

    return (
      <button
        className={style.CreateTodoButton}
        onClick={createTodo}
      >
        +
      </button>
    );
}

export { CreateTodoButton };