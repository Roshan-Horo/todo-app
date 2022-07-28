// Add new Todo Function
export function handleAddTodo(todos, setTodos, todoText, setTodoText) {
  if (todos.length === 0) {
    let currentTodos = []
    let newTodo = {
      todoId: 1,
      todoTitle: todoText,
      isDone: false
    }

    currentTodos.push(newTodo)
    setTodos(currentTodos)
    localStorage.setItem('todo', JSON.stringify(currentTodos))
  } else {
    let lastTodo = todos[todos.length - 1]

    let newTodo = {
      todoId: lastTodo.todoId + 1,
      todoTitle: todoText,
      isDone: false
    }

    setTodos(current => {
      return [...current, newTodo]
    })
    localStorage.setItem('todo', JSON.stringify([...todos, newTodo]))
  }

  setTodoText('')
}

// Delete All Todo Function
export function clearTodos(setTodos) {
  setTodos([])
  localStorage.clear()
}

// delete single Todo based on todoId
export function deleteTodo(todos, setTodos, todoId) {
  let updatedTodos = todos.filter(item => item.todoId !== todoId)
  setTodos(todos => updatedTodos)
  localStorage.setItem('todo', JSON.stringify(updatedTodos))
}

// check mark the completed todo function
export function checkedTodo(todos, setTodos, todoId) {
  let updatedTodos = todos.map(item => {
    if (item.todoId === todoId) {
      item.isDone = !item.isDone
    }
    return item
  })
  setTodos(current => updatedTodos)
  localStorage.setItem('todo', JSON.stringify(updatedTodos))
}

// saving the edit todo title function
export function handleSave(todos, setTodos, todoId, newTitle) {
  let updatedTodos = todos.map(item => {
    if (item.todoId === todoId) {
      item.todoTitle = newTitle
    }
    return item
  })
  setTodos(current => updatedTodos)
  localStorage.setItem('todo', JSON.stringify(updatedTodos))
}