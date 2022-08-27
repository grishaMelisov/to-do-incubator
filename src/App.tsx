import React, { useState } from 'react'
import './App.css'
import Todo, { TasksArrayType } from './Components/Todolist'
export type FilterTypes = 'all' | 'completed' | 'active'

function App() {
  const [tasks, setTasks] = useState<Array<TasksArrayType>>([
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'ReactJS', isDone: false },
  ])

  const [filter, setFilter] = useState<FilterTypes>('all')

  let filtratedTasks = tasks
  if (filter === 'completed') {
    filtratedTasks = tasks.filter((item) => item.isDone)
  }
  if (filter === 'active') {
    filtratedTasks = tasks.filter((item) => !item.isDone)
  }
  if (filter === 'all') {
    filtratedTasks = tasks
  }

  function toFilter(value: FilterTypes) {
    setFilter(value)
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter((item) => item.id !== id))
  }

  return (
    <div className='App'>
      <Todo
        title={'This week'}
        tasks={filtratedTasks}
        filter={toFilter}
        delete={deleteTask}
      />
    </div>
  )
}

export default App
