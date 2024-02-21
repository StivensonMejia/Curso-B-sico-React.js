import React from "react";
import {DeleteIcon} from './DeleteIcon';
import {CheckIcon} from './CheckIcon';

function TodoItem({text,completed,onComplete,onDelete}) {
  return (
    <li className='todoItem'>
      <div className='todoItem-cotendContainer'>
        {/* <span 
          className={`todoItem-checked ${completed && "todoItem-checked_true"}`}
          onClick={onComplete}
        >v</span> */}
        <CheckIcon 
          completed={completed}
          onComplete={onComplete}
        />
        <p className={`todoItem-text ${completed && "todoItem-text_completed"}`} >{text}</p>
      </div>
      <div className='todoItem-closeContainer'>
        <DeleteIcon 
          onDelete={onDelete}
        />
        {/* <span 
          className='todoItem-close'
          onClick={onDelete}
        >x</span> */}
      </div>
    </li>
  )
}

export {TodoItem};