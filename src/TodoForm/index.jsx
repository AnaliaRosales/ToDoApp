import React from "react";
import { TodoContext } from "../TodoContext";
import style from "./TodoForm.module.css";

function TodoForm() {

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const {
    addTodos,
    setOpenModal,
  } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if(newTodoValue.length <= 0)return;
    addTodos(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la palta para el almuerzo"
      />
      <div className={style.todoFormButtonContainer}>
        <button
          type="button"
          className={style.todoFormButton + ' ' + style.todoFormButtonCancel}
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={!newTodoValue}
          className={style.todoFormButton + " " + (!newTodoValue ? style.todoFormButtonAddDisabled : style.todoFormButtonAdd)}
        >
          Agregar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };