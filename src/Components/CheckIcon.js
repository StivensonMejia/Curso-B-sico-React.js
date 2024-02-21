import React from 'react';
import {TodoIcon} from './TodoIcon';

function CheckIcon({completed, onComplete}) {
  return (
    <TodoIcon 
        type="check"
        color={completed ? 'var(--green)' : 'var(--gray)'}
        onClick={onComplete}
    />
  );
}

export {CheckIcon};