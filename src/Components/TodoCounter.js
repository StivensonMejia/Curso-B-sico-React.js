import React from "react";
import { TodoContext } from "../App/Context";

function TodoCounter() {
    const { 
        completedTodos : completed,
        totalTodos : total,
    } = React.useContext(TodoContext);

    let counterMessage = "";
    if (total == 0) {
        counterMessage = "You don't have to-dos";
    }else if (total == completed) {
        counterMessage = "You completed all your To dos"
    } else {
        counterMessage = `Completed ${completed} of ${total}.`
    }

    return (
        <p className='todoCounter'>
            {counterMessage}
        </p>
    );
}
export {TodoCounter};