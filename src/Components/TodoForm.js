import React from 'react'
import {TodoContext} from '../App/Context';

function TodoForm() {
    const {
        setOpenModal,
        addNewTodo,
    } = React.useContext(TodoContext);

    const [newTodoItem,setNewTodoValue] = React.useState();

    const onSubmit = (event) => {
        event.preventDefault();
        addNewTodo(newTodoItem);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

  return (
    <form onSubmit={(onSubmit)}>
        <label>Create a new TO-DO's</label>
        <textarea 
            placeholder='text...'
            value={newTodoItem}
            onChange={onChange}
            autoFocus
        
        ></textarea>
        <div className='buttonContainer'>
            <button 
                className='button-cancel' 
                type='button'
                onClick={onCancel}
            >Cancel</button>
            <button className='button-create' type='submit'>Create</button>
        </div>
    </form>
  )
}

export {TodoForm};