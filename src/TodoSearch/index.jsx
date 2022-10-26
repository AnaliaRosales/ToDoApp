import React from "react";
import { TodoContext } from "../TodoContext";
import style from "./TodoSearch.module.css";

function TodoSearch() {

  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);
  
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  };

  return(
    <div>
      <input
      className={style.TodoSearch}
      placeholder="Buscar TODO"
      value={searchValue}
      onChange={onSearchValueChange}
      />
    </div>
  );
}

export { TodoSearch };