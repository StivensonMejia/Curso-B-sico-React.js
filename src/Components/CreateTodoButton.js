import React, { useContext } from "react";
import { TodoContext } from "../App/Context";

function CreateTodoButton() {

  const { 
    setOpenModal,
  } = React.useContext(TodoContext);


  const onSubmit = () => {
    setOpenModal(true);
  };
  
  return (
    <button 
      onClick={onSubmit}
    >New to-do's</button>
  )
}

export  {CreateTodoButton};