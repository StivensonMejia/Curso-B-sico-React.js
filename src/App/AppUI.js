import React from 'react'

import '../Css/App.css';
import {CreateTodoButton} from '../Components/CreateTodoButton';
import {TodoCounter} from '../Components/TodoCounter';
import {TodoSearch} from '../Components/TodoSearch';
import {TodoItem} from '../Components/TodoItem';
import {TodoList} from '../Components/TodoList';

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchTodos,
    completeTodo,
    deleteTodo,
}) {
    return (
        <>
          <section>
            <article className='todoCreateContainer'>
              <CreateTodoButton />
            </article>
    
            <article className='todoContainer'>
              <h1 className='todoTitle'>MY TO-DO's</h1>
              <TodoCounter 
                completed = {completedTodos} 
                total = {totalTodos} 
              />
              <TodoSearch 
                searchValue = {searchValue}
                setSearchValue = {setSearchValue}
              />
    
              <TodoList>
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