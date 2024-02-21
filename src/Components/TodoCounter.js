import React from "react";

function TodoCounter({ completed, total }) {
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