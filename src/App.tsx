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

  const changeCheckBox = () => {
    setTasks(
      tasks.map((item: any) => {
        if (item.isDone) return !item.isDone //надо править это говно
        if (!item.isDone) return item.isDone
      })
    )
  }
  return (
    <div className='App'>
      <Todo
        title={'This week'}
        tasks={filtratedTasks}
        filter={toFilter}
        delete={deleteTask}
        addTask={addTask}
        changeCheckBox={changeCheckBox}
      />
    </div>
  )
}

export default App
