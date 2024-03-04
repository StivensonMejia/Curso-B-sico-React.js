import React from "react";
import {useLocalSotrage} from '../Hooks/useLocalSotrage';

const TodoContext = React.createContext();

function TodoProvider({children}) {
    const {
        item : todoValue, 
        saveItem : saveTodos,
        loading,
        error,
    } = useLocalSotrage('TODOS_V1',[]);
    
    const [openModal, setOpenModal] = React.useState(true);

    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = todoValue.filter( nombre => !!nombre.completed ).length;

    const totalTodos = todoValue.length;

    const searchTodos = todoValue.filter((nombre) => {
        const todoText = nombre.text.toLocaleLowerCase();
        const searchText = searchValue.toLocaleLowerCase();
        return todoText.includes(searchText);
    });

    const addNewTodo = (text) => {
        const newTodos = [...todoValue];
        newTodos.push({
            text,
            completed : false,
        })
        saveTodos(newTodos);
    };

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
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addNewTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export {TodoContext,TodoProvider};