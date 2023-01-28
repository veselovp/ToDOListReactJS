import './App.css'
import TodoList from './components/Todos/todoList'
import TodoForm from './components/Todos/todoForm'
import TodoAction from './components/Todos/todoAction'

import { useState } from 'react'
//dobavlajem unikaljnij id ->
import { v4 as uuidv4 } from 'uuid'

function App(text) {
  const [todos, setTodo] = useState([])

  const addButtonHandler = (text) => {
    const newText = {
      id: uuidv4(),
      text: text,
      complieted: false,
    }
    console.log(newText)
    setTodo([...todos, newText])
  }

  const deleteButtonHandler = (id) => {
    setTodo(todos.filter((todo) => todo.id !== id))
  }

  const toggleHandler = (id) => {
    setTodo(
      todos.map((todo) => {
        //sravnivajem esli ravno to razbivajem
        //list i menajem class  complited na protivopoloznij
        return todo.id === id
          ? { ...todo, complieted: !todo.complieted }
          : { ...todo }
        //sverhu ternarnij operator
      })
    )
  }

  return (
    <div className="App">
      <h1>This is TODO App</h1>
      <TodoForm addTodo={addButtonHandler} />
      <TodoAction />
      <TodoList
        todos={todos}
        deleteTodo={deleteButtonHandler}
        toggle={toggleHandler}
      />
    </div>
  )
}

export default App
