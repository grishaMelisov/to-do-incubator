import React from 'react'
import './App.css'
import Todo from './Components/Todolist'

function App() {
  const tasks = [
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'ReactJS', isDone: false },
  ]

  return (
    <div className='App'>
      <Todo title={'This week'} tasks={tasks} />
    </div>
  )
}

export default App
