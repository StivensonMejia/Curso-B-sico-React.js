import React from 'react';
import {TodoIcon} from './TodoIcon';

function ErrorIcon() {
  return (
    <TodoIcon 
        type="error"
        color="var(--white)"
    />
  );
}

export {ErrorIcon};