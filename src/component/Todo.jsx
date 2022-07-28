import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faFloppyDisk, faPenToSquare, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'

function Todo({ todo, checkedTodo, deleteTodo, handleSave, setNewTitle }) {
  const [todoTitle, setTodoTitle] = useState(todo.todoTitle)
  const [editState, setEditState] = useState(false)

  function clickSave(todoId, newTitle) {
    handleSave(todoId, newTitle)
    setEditState(current => !current)
  }

  return (
    <div className={todo.isDone ? 'todo-items checked' : 'todo-items'}>
      {
        editState
          ? <input type="text"
            className="todo-title-input"
            id="todo-title-input"
            placeholder="Enter Task..."
            autoFocus
            value={todoTitle}
            onChange={(e) => {
              setNewTitle(e.target.value)
              setTodoTitle(e.target.value)
            }
            }
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                clickSave(todo.todoId, todoTitle)
              }
            }}
          />
          : <div className="todo-title">{todo.todoTitle}</div>
      }
      <div className="todo-check" onClick={() => checkedTodo(todo.todoId)}><FontAwesomeIcon icon={faCheck} /></div>
      {
        editState
          ? <div className="todo-edit" onClick={() => clickSave(todo.todoId, todoTitle)}><FontAwesomeIcon icon={faFloppyDisk} /></div>
          : <div className="todo-edit" onClick={(e) => setEditState(current => !current)}><FontAwesomeIcon icon={faPenToSquare} /></div>
      }
      <div className="todo-delete-btn" onClick={() => deleteTodo(todo.todoId)}><FontAwesomeIcon icon={faTrashCan} /></div>
    </div>
  )
}

export default Todo