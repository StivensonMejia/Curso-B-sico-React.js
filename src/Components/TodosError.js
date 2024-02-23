import React from 'react'
import { ErrorIcon } from './ErrorIcon';

function TodosError() {
  return (
    <div className='todoError-container'>
        <ErrorIcon />
        <p className='todoError-text'>Fatal Error.</p>
    </div>
  )
}

export {TodosError};