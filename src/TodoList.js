function TodoList({children}) {
    return (
        <ul className='todoItemContainer'>
            {children}
        </ul>        
    )
}

export {TodoList};