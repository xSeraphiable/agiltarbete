import { useState } from 'react'
import './App.css'
import AddTodo from './pages/AddTodoPage'
import ShowTodo from './pages/ListTodoPage'

function App() {
  return (
    <>
      <AddTodo/>
      <ShowTodo/>
    </>
  )
}

export default App;