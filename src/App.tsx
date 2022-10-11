import React, { useState } from 'react'
import { v1 } from 'uuid'
import './App.css'
import Todo, { TasksArrayType } from './Components/Todolist'

export type FilterTypes = 'all' | 'completed' | 'active'

function App() {
  const [tasks, setTasks] = useState<Array<TasksArrayType>>([
    { id: v1(), title: 'HTML&CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'ReactJS', isDone: false },
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

  function deleteTask(id: string) {
    setTasks(tasks.filter((item) => item.id !== id))
  }

  const addTask = (text: string) => {
    const newTask: TasksArrayType = {
      id: v1(),
      title: text,
      isDone: false,
    }
    setTasks([newTask, ...tasks])
  }

  const changeStatus = (taskId: string, isDone: boolean) => {
    let task = tasks.find((item) => item.id === taskId)
    if (task) task.isDone = isDone

    setTasks([...tasks])
  }

  return (
    <div className='App'>
      <Todo
        title={'This week'}
        tasks={filtratedTasks}
        changeFilter={toFilter}
        delete={deleteTask}
        addTask={addTask}
        changeStatus={changeStatus}
        filter={filter}
      />
    </div>
  )
}

export default App
