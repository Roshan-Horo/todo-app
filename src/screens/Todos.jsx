import React, { useState } from 'react'
import './Todos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faFloppyDisk, faPenToSquare, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Todo from '../component/Todo'

// handle functions import
import { handleAddTodo, clearTodos, deleteTodo, handleSave, checkedTodo } from '../Logic/todoFunctions'


function Todos() {
    const [newTitle, setNewTitle] = useState('')
    const [todoText, setTodoText] = useState('')
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : [])

    return (
        <div className="main-container">
            <div className="todo-container">

                <div className="add-todo">
                    <div className="todo-header">ADD TODO LIST</div>
                    <div className="middle-line"></div>
                    <div className="enter-todo">
                        <input
                            type="text"
                            id="todo-input"
                            placeholder="Enter Task..."
                            value={todoText}
                            onChange={(e) => setTodoText(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.keyCode === 13) {
                                    handleAddTodo(todos, setTodos, todoText, setTodoText)
                                }
                            }}
                        />
                        <div id="plus-btn" onClick={() => handleAddTodo(todos, setTodos, todoText, setTodoText)}>
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                        <div id="delete-btn" onClick={() => clearTodos(setTodos)}><FontAwesomeIcon icon={faTrashCan} /></div>
                    </div>
                </div>

                <div className="todo-list" id="todo-list">

                    {
                        todos && todos.map(todo =>
                            <Todo key={todo.todoId}
                                todo={todo}
                                deleteTodo={() => deleteTodo(todos, setTodos, todo.todoId)}
                                checkedTodo={() => checkedTodo(todos, setTodos, todo.todoId)}
                                handleSave={() => handleSave(todos, setTodos, todo.todoId, newTitle)}
                                setNewTitle={setNewTitle}
                            />)
                    }

                </div>
            </div>

        </div>
    )
}

export default Todos