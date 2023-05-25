import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTaskForm from './components/AddTaskForm'
import TodoList from './components/ToDoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>To Do List</h1>
      <AddTaskForm/>
      <TodoList/>
    </>
  )
}

export default App
