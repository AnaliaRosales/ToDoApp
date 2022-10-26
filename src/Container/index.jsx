import React from "react";
import { TodoCounter } from "../TodoCounter/index.jsx";
import { TodoSearch } from "../TodoSearch/index.jsx";
import { TodoList } from "../TodoList/index.jsx";
import { TodoItem } from "../TodoItem/index.jsx";
import { TodoContext } from "../TodoContext";
import style from "./Container.module.css"

function Container(){
  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodos,
    totalTodos,
  } = React.useContext(TodoContext);
  return(
    <div className={style.container}>
      <TodoCounter />
      <TodoSearch />
      {
        <TodoList>
          {error && <p className={style.p}>Hubo un error</p>}
          {loading && <p className={style.p}>Cargando...</p>}
          { searchedTodos.map(todo => (
            <TodoItem 
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete= {() => completeTodos(todo.text)}
              onDelete= {() => deleteTodos(todo.text)}
            />
          ))}
        </TodoList>
      }
      {(!searchedTodos.length && totalTodos.length != 0) && 
        <h3 className={style.p}>No hay coincidencias</h3>}
    </div>
  );
}

export { Container };