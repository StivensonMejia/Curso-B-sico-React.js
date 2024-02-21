import React from "react";

function CreateTodoButton() {
  return (
    <button onClick={() => {
      console.log("click");
    }} >New to-do's</button>
  )
}

export  {CreateTodoButton};