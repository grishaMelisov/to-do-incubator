import React, { useState } from 'react'
import './App.css'
import Todo, { TasksArrayType } from './Components/Todolist'

function App() {
  const arrOfData = [
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'ReactJS', isDone: false },
  ]

  const [tasks, setTasks] = useState<Array<TasksArrayType>>(arrOfData)

  function activeTasks(activator: 'all' | 'active' | 'completed') {
    if (activator === 'completed') {
      return setTasks(arrOfData.filter((item) => item.isDone))
    }
    if (activator === 'active') {
      return setTasks(arrOfData.filter((item) => !item.isDone))
    }
    return setTasks(arrOfData)
  }

  return (
    <div className='App'>
      <Todo title={'This week'} tasks={tasks} active={activeTasks} />
    </div>
  )
}

export default App
