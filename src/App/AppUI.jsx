import React from "react";
import { TodoContext } from "../TodoContext/index.jsx";
import { CreateTodoButton } from "../CreateTodoButton/index.jsx";
import { Modal } from "../Modal/index.jsx";
import { TodoForm } from "../TodoForm/index.jsx";
import { Container } from "../Container/index.jsx";
import { WithoutTodos } from "../WithoutTodos/index.jsx";

function AppUI(){
  const {
    openModal,
    setOpenModal,
    loading,
    searchedTodos,
    totalTodos,
  } = React.useContext(TodoContext);
  return(
    <>
      {(!loading && totalTodos == 0) && 
      <WithoutTodos />}
      {(!loading && totalTodos != 0) && 
      <Container/>}
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton
      setOpenModal={setOpenModal}
      openModal={openModal}
    />
    </>
  );
}

export { AppUI };