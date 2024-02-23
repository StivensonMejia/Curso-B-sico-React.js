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

function AppUI({
    loading,
    error,
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
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && searchTodos.length == 0) && <TodosEmpty />}

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