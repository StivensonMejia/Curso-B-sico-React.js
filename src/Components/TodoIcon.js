import React from 'react'
import { ReactComponent as CheckSVG } from '../Icons/check.svg';
import { ReactComponent as DeleteSVG } from '../Icons/delete.svg';
import { ReactComponent as ErrorSVG } from '../Icons/error.svg';

const iconTypes = {
    "check": (color) => <CheckSVG className='todoItem-svg' fill={color}/>,
    "delete": (color) => <DeleteSVG className='todoItem-svg' fill={color}/>,
    "error": (color) => <ErrorSVG className='todoItem-svg' fill={color}/>,
};

function TodoIcon({type, color, onClick}) {
  return (
    <span
        className={`todoItem-${type} Icon-${type}`}
        onClick={onClick}
    > {iconTypes[type](color)} </span>
  )
}

export  {TodoIcon};