import React from "react";
import { TodoCounter } from "../TodoCounter/index.jsx";
import { TodoSearch } from "../TodoSearch/index.jsx";
import { TodoList } from "../TodoList/index.jsx";
import { TodoItem } from "../TodoItem/index.jsx";
import { CreateTodoButton } from "../CreateTodoButton/index.jsx";

function AppUI({
  loading,
  error,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodos,
  deleteTodos,
}){
  return(
    <>
      <TodoCounter
        total = {totalTodos}
        completed = {completedTodos}
      />
      <TodoSearch
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />
      <TodoList>
        {error && <p>Hubo un error</p>}
        {loading && <p>Cargando...</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}
        { searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete= {() => completeTodos(todo.text)}
            onDelete= {() => deleteTodos(todo.text)}
          />
        )) }
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export { AppUI };