function TodoItem({text,completed}) {
  return (
    <li className='todoItem'>
      <div className='todoItem-cotendContainer'>
        <span className={`todoItem-checked ${completed && "todoItem-checked_true"}`}>V</span>
        <p className={`todoItem-text ${completed && "todoItem-text_completed"}`} >{text}</p>
      </div>
      <div className='todoItem-closeContainer'>
        <span className='todoItem-close'>x</span>
      </div>
    </li>
  )
}

export {TodoItem};