import React from 'react';
import { AppUI } from './AppUI';

import {useLocalSotrage} from '../Hooks/useLocalSotrage';

/* const defaultTodos = [
  { text: 'Terminar el css de la app', completed: true },
  { text: 'Ser maestro pokemon', completed: true },
  { text: 'Completar el curso no node.js', completed: false },
  { text: 'Conseguir trabajo como DEV', completed: false },
]
localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos)); */

/* localStorage.removeItem('TODOS_V1'); */
/* const stringifidedTodos = JSON.stringify(defaultTodos) */

function App() {
  const [todoValue, saveTodos] = useLocalSotrage('TODOS_V1',[]);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todoValue.filter( nombre => !!nombre.completed ).length;
  const totalTodos = todoValue.length;

  const searchTodos = todoValue.filter((nombre) => {
    const todoText = nombre.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todoValue];
    const todoIndex = newTodos.findIndex(
      (nombre) => nombre.text == text
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todoValue];
    const todoIndex = newTodos.findIndex(
      (nombre) => nombre.text == text
    );
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos);
  };

  return (
    <AppUI 
    completedTodos = {completedTodos}
    totalTodos = {totalTodos}
    searchValue = {searchValue}
    setSearchValue = {setSearchValue}
    searchTodos = {searchTodos}
    completeTodo = {completeTodo}
    deleteTodo = {deleteTodo}
    />
  );
}

export default App;
