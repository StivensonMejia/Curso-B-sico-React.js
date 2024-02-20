import './App.css';
import {CreateTodoButton} from './CreateTodoButton';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoItem} from './TodoItem';
import {TodoList} from './TodoList';

const defaultTodos = [
  { text: 'Terminar el css de la app', completed: true },
  { text: 'Ser maestro pokemon', completed: true },
  { text: 'Completar el curso no node.js', completed: false },
  { text: 'Conseguir trabajo como DEV', completed: false },
]

function App() {
  return (
    <>
      <section>
        <article className='todoCreateContainer'>
          <CreateTodoButton />
        </article>

        <article className='todoContainer'>
          <h1 className='todoTitle'>MY TO-DO's</h1>
          <TodoCounter completed={3} total={5} />
          <TodoSearch />

          <TodoList>
            {defaultTodos.map( todo => (
              <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
              />
            ))}
          </TodoList>
        </article>
      </section>
      

    </>
  );
}

export default App;
