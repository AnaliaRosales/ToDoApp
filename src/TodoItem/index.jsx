import React from "react";
import style from "./TodoItem.module.css";

function TodoItem(props){
    return(
        <li className={style.TodoItem}>
            <span className={`${style.Icon} ${style.IconCheck} ${(props.completed ? style.IconCheckActive : "")}`}
                onClick={props.onComplete}
            >
              √
            </span>
            <p className={`${style.TodoItemP} ${(props.completed ? style.TodoItemPComplete : "")}`}>
                {props.text}
            </p>
            <span className={`${style.Icon} ${style.IconDelete}`}
                onClick={props.onDelete}
            >
                X
            </span>
        </li>
    );
}

export { TodoItem };
