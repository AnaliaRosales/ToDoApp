import React from "react";
import style from "./TodoSearch.module.css";

function TodoSearch({searchValue, setSearchValue}) {

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  };

  return(
    <div>
      <input
      className={style.TodoSearch}
      placeholder="Search TODO"
      value={searchValue}
      onChange={onSearchValueChange}
      />
    </div>
  );
}

export { TodoSearch };