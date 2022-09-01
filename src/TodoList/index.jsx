import React from "react";
import "./TodoList.module.css";

function TodoList(props) {
  return(
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };
