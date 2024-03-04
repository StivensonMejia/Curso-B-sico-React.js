import React from 'react'

import '../Css/App.css';
import {CreateTodoButton} from '../Components/CreateTodoButton';
import {TodoCounter} from '../Components/TodoCounter';
import {TodoSearch} from '../Components/TodoSearch';
import {TodoItem} from '../Components/TodoItem';
import {TodoList} from '../Components/TodoList';
import {TodosLoading} from "../Components/TodosLoading";
import {TodosError} from "../Components/TodosError";
import {TodosEmpty} from "../Components/TodosEmpty";
import {Modal} from '../Components/Modal';
import {TodoForm} from '../Components/TodoForm';
import {TodoContext} from './Context';

function AppUI() {
  const {
    loading,
    error,
    searchTodos,
    completeTodo,
    deleteTodo,
    totalTodos,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <section>
        <article className='todoCreateContainer'>
          {openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}
          <CreateTodoButton />
        </article>

        <article className='todoContainer'>
          <h1 className='todoTitle'>MY TO-DO's</h1>
          <TodoCounter />
          <TodoSearch />
          
          <TodoList>
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {((!loading && searchTodos.length == 0 && totalTodos > 0)) && <p>No hay coincidencias</p>}
            {(!loading && searchTodos.length == 0 && totalTodos == 0) && <TodosEmpty />}

            {searchTodos.map( todo => (
              <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        </article>
      </section>
    </>
  );
}

export  {AppUI} ;